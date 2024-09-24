import { ReactNode } from "react";

// monitoring types

export interface MonitoringContextType {
  monitoringWebsites: MonitoringWebsite[];

  addMonitoringWebsite: (websiteURL: string) => void;
  removeMonitoringWebsite: (websiteURL: string) => void;
}

export interface MonitoringProviderProps {
  children: ReactNode;
}

export type MonitoringWebsite = {
  siteID: number;
  url: string;
  checkedAt: string;
  up: boolean;
}