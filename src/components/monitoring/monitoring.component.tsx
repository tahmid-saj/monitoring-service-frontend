import { Fragment } from "react/jsx-runtime"
import "./monitoring.styles"
import Header from "./header/header.component"
import AddWebsite from "./add-website/add-website.component"

const Monitoring = () => {
  return (
    <Fragment>
      <Header/>
      <AddWebsite/>
    </Fragment>
  )
}

export default Monitoring