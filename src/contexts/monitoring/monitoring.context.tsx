import React, { FC, useState, createContext, useEffect } from "react";
import { MonitoringContextType, MonitoringProviderProps, MonitoringWebsite } from "./monitoring.types";
import { addWebsite, checkAllPings, removeWebsite } from "../../utils/api-requests/monitoring.requests";
import { useQuery } from "../../utils/hooks/monitoring.hooks";

interface UseQueryResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const addMonitoringWebsiteHelper = async (monitoringWebsites: MonitoringWebsite[], websiteURL: string) => {
  const websiteMetadata = await addWebsite(websiteURL)

  return [
    ...monitoringWebsites,
    {
      siteID: websiteMetadata.id,
      url: websiteURL,
      checkedAt: websiteMetadata.created_at,
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
    return website.url !== websiteURL
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

  const { data: websiteStatusData, loading, error } = useQuery(checkAllPings, 120000);

  // useEffect(() => {
  //   const updateMonitoringWebsites = async () => {
  //     try {
  //       // Fetch the monitoring websites status
  //       const monitoringWebsitesStatus = await checkAllPings();

  //       // Ensure that monitoringWebsitesStatus is an array before calling map

  //       const updatedMonitoringWebsites = monitoringWebsitesStatus.map((website: any) => {
  //         return {
  //           siteID: website.site_id,
  //           url: website.url,
  //           checkedAt: website.checked_at,
  //           up: website.up
  //         };
  //       });

  //       setMonitoringWebsites(updatedMonitoringWebsites);
  //       console.log(updatedMonitoringWebsites)
  //     } catch (error) {
  //       console.error("Error fetching monitoring websites status:", error);
  //     }
  //   };

  //   updateMonitoringWebsites();
  // }, []);

  useEffect(() => {
    if (!loading && !error && websiteStatusData && websiteStatusData.length !== 0) {
      setMonitoringWebsites(websiteStatusData)
    }
  }, [websiteStatusData])

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
