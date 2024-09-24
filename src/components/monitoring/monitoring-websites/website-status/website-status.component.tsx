import Button from "../../../shared/button/button.component"
import "./website-status.styles"
import { StatusTextUp, WebsiteStatusContainer, WebsiteStatusRecordContainer } from "./website-status.styles"
import { MonitoringWebsite } from "../../../../contexts/monitoring/monitoring.types"
import { FC, useContext } from "react";
import { MonitoringContext } from "../../../../contexts/monitoring/monitoring.context";

interface WebsiteStatusProps {
  websiteMetadata: MonitoringWebsite;
}

const WebsiteStatus: FC<WebsiteStatusProps> = ({ websiteMetadata }) => {
  const { removeMonitoringWebsite } = useContext(MonitoringContext)

  const handleRemoveWebsite = (event: any) => {
    event.preventDefault()

    removeMonitoringWebsite(websiteMetadata.url)
  }

  return (
    <WebsiteStatusContainer>
      <WebsiteStatusRecordContainer>
        <h4>{ websiteMetadata.url }</h4>
        <h6>{ `Last checked at ${websiteMetadata.checkedAt.slice(0, 19)} UTC` }</h6>
        { websiteMetadata.up && <StatusTextUp>UP</StatusTextUp> }
        { !websiteMetadata.up && <StatusTextUp>DOWN</StatusTextUp> }
      </WebsiteStatusRecordContainer>

      <Button type="button" onClick={ handleRemoveWebsite }>Remove</Button>
    </WebsiteStatusContainer>
  )
}

export default WebsiteStatus