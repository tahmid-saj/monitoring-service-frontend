import { Fragment } from "react/jsx-runtime"
import "./monitoring-websites.styles"
import { MonitoringWebsitesContainer, MonitoringWebsitesHeader } from "./monitoring-websites.styles"
import WebsiteStatus from "./website-status/website-status.component"

const WEBSITES = [
  {
      "site_id": 1,
      "url": "google.com",
      "checked_at": "2024-09-23 20:41:22.870808 -0400 EDT m=+4.497624201",
      "up": true
  },
  {
      "site_id": 2,
      "url": "google.ca",
      "checked_at": "2024-09-23 20:41:23.2210431 -0400 EDT m=+4.847859301",
      "up": true
  },
  {
      "site_id": 3,
      "url": "google.io",
      "checked_at": "2024-09-23 20:41:23.3707957 -0400 EDT m=+4.997611901",
      "up": false
  }
]

const MonitoringWebsites = () => {
  return (
    <MonitoringWebsitesContainer>
      <MonitoringWebsitesHeader>Monitored websites</MonitoringWebsitesHeader>

      {
        WEBSITES.map((website: any): any => {
          return (
            <WebsiteStatus></WebsiteStatus>
          )
        })
      }
    </MonitoringWebsitesContainer>
  )
}

export default MonitoringWebsites