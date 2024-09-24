import Button from "../../../shared/button/button.component"
import "./website-status.styles"
import { WebsiteStatusContainer, WebsiteStatusRecordContainer } from "./website-status.styles"

const WebsiteStatus = () => {
  return (
    <WebsiteStatusContainer>
      <WebsiteStatusRecordContainer>
        <h4>google.com</h4>
        <h6>Last checked 1 min ago</h6>
      </WebsiteStatusRecordContainer>

      <Button>Remove</Button>
    </WebsiteStatusContainer>
  )
}

export default WebsiteStatus