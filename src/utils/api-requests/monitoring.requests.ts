import { alertOnCheckAllPings, alertOnAddWebsite, alertOnRemoveWebsite } from "../errors/monitoring.errors"

// monitoring requests

export const checkAllPings = async () => {
  try {
    const res = await fetch(`${process.env.REACT_APP_MONITORING_SERVICE_ROOT_URL}${process.env.REACT_APP_MONITORING_SERVICE_CHECK_ALL_PINGS_PATH}`, {
      method: "POST"
    })

    const resJSON = await res.json()
    return resJSON
  } catch (error) {
    alertOnCheckAllPings()
  }
}

export const addWebsite = async (websiteURL: string) => {
  try {
    const reqBody = {
      URL: websiteURL
    }

    const res = await fetch(`${process.env.REACT_APP_MONITORING_SERVICE_ROOT_URL}${process.env.REACT_APP_MONITORING_SERVICE_ADD_WEBSITE_PATH}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(reqBody)
    })

    const resJSON = await res.json()
    return resJSON
  } catch (error) {
    alertOnAddWebsite()
  }
}

export const removeWebsite = async (websiteID: number) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_MONITORING_SERVICE_ROOT_URL}${process.env.REACT_APP_MONITORING_SERVICE_DELETE_WEBSITE_PATH}${websiteID}`, {
      method: "DELETE"
    })
    
    return res.status
  } catch (error) {
    alertOnRemoveWebsite()
  }
}