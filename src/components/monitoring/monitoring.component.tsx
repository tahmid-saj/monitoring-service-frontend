import { Fragment } from "react/jsx-runtime"
import "./monitoring.styles"
import Header from "./header/header.component"
import AddWebsite from "./add-website/add-website.component"
import MonitoringWebsites from "./monitoring-websites/monitoring-websites.component"
import { useContext } from "react"
import { MonitoringContext } from "../../contexts/monitoring/monitoring.context"

const Monitoring = () => {
  const { monitoringWebsites } = useContext(MonitoringContext)

  return (
    monitoringWebsites && monitoringWebsites.length !== 0 &&  
    <Fragment>
      <Header/>
      <AddWebsite/>
      <MonitoringWebsites/>
    </Fragment>
  )
}

export default Monitoring