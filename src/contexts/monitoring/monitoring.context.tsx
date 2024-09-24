import React, { FC, useState, createContext, useEffect } from "react";
import { MonitoringContextType, MonitoringProviderProps, MonitoringWebsite } from "./monitoring.types";
import { addWebsite, checkAllPings, removeWebsite } from "../../utils/api-requests/monitoring.requests";

const addMonitoringWebsiteHelper = async (monitoringWebsites: MonitoringWebsite[], websiteURL: string) => {
  const websiteMetadata = await addWebsite(websiteURL)

  return [
    ...monitoringWebsites,
    {
      siteID: websiteMetadata.site_id,
      url: websiteURL,
      checkedAt: websiteMetadata.checked_at,
      up: websiteMetadata.up
    }
  ]
}

const removeMonitoringWebsiteHelper = async (monitoringWebsites: MonitoringWebsite[], websiteURL: string) => {
  const websiteID = monitoringWebsites.find((website) => {
    return website.url === websiteURL
  })

  if (!websiteID) return monitoringWebsites

  await removeWebsite(websiteID.siteID)

  return monitoringWebsites.filter((website) => {
    return website.url === websiteURL
  })
}

// initial state
export const MonitoringContext = createContext<MonitoringContextType>({
  monitoringWebsites: [],

  addMonitoringWebsite: () => {},
  removeMonitoringWebsite: () => {},
});

// context component
export const MonitoringProvider: FC<MonitoringProviderProps> = ({ children }) => {
  const [monitoringWebsites, setMonitoringWebsites] = useState<MonitoringWebsite[]>([]);

  useEffect(() => {
    const updateMonitoringWebsites = async () => {
      const monitoringWebsitesStatus = await checkAllPings()

      const updatedMonitoringWebsites = monitoringWebsitesStatus.map((website: any) => {
        return {
          siteID: website.site_id,
          url: website.url,
          checkedAt: website.checked_at,
          up: website.up
        }
      })

      setMonitoringWebsites(updatedMonitoringWebsites)
    }

    updateMonitoringWebsites()
  }, [])

  const addMonitoringWebsite = async (websiteURL: string) => {
    const updatedMonitoringWebsites = await addMonitoringWebsiteHelper(monitoringWebsites, websiteURL)
    setMonitoringWebsites(updatedMonitoringWebsites)
  };

  const removeMonitoringWebsite = async (websiteURL: string) => {
    const updatedMonitoringWebsites = await removeMonitoringWebsiteHelper(monitoringWebsites, websiteURL)
    setMonitoringWebsites(updatedMonitoringWebsites)
  };

  const value = { monitoringWebsites, addMonitoringWebsite, removeMonitoringWebsite };

  return (
    <MonitoringContext.Provider value={value}>
      {children}
    </MonitoringContext.Provider>
  );
};
