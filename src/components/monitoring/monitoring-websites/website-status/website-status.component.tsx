import Button from "../../../shared/button/button.component"
import "./website-status.styles"
import { WebsiteStatusContainer, WebsiteStatusRecordContainer } from "./website-status.styles"
import { MonitoringWebsite } from "../../../../contexts/monitoring/monitoring.types"
import { FC } from "react";

interface WebsiteStatusProps {
  websiteMetadata: MonitoringWebsite;
}

const WebsiteStatus: FC<WebsiteStatusProps> = ({ websiteMetadata }) => {
  return (
    <WebsiteStatusContainer>
      <WebsiteStatusRecordContainer>
        <h4>{ websiteMetadata.url }</h4>
        <h6>{ websiteMetadata.checkedAt }</h6>
      </WebsiteStatusRecordContainer>

      <Button>Remove</Button>
    </WebsiteStatusContainer>
  )
}

export default WebsiteStatus