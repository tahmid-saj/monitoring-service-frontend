import { Fragment } from "react/jsx-runtime"
import "./monitoring-websites.styles"
import { MonitoringWebsitesContainer, MonitoringWebsitesHeader } from "./monitoring-websites.styles"
import WebsiteStatus from "./website-status/website-status.component"
import { useContext } from "react"
import { MonitoringContext } from "../../../contexts/monitoring/monitoring.context"
import { MonitoringWebsite } from "../../../contexts/monitoring/monitoring.types"

const MonitoringWebsites = () => {
  const { monitoringWebsites } = useContext(MonitoringContext)

  return (
    <MonitoringWebsitesContainer>
      <MonitoringWebsitesHeader>Monitored websites</MonitoringWebsitesHeader>

      {
        monitoringWebsites.map((website: MonitoringWebsite) => {
          return (
            <WebsiteStatus websiteMetadata={ website }></WebsiteStatus>
          )
        })
      }
    </MonitoringWebsitesContainer>
  )
}

export default MonitoringWebsites