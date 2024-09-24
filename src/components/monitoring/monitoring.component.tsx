import { Fragment } from "react/jsx-runtime"
import "./monitoring.styles"
import Header from "./header/header.component"
import AddWebsite from "./add-website/add-website.component"
import MonitoringWebsites from "./monitoring-websites/monitoring-websites.component"

const Monitoring = () => {
  return (
    <Fragment>
      <Header/>
      <AddWebsite/>
      <MonitoringWebsites/>
    </Fragment>
  )
}

export default Monitoring