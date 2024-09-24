import { useContext, useState } from "react"
import Button from "../../shared/button/button.component"
import FormInput from "../../shared/form-input/form-input.component"
import "./add-website.styles"
import { AddWebsiteForm } from "./add-website.styles"
import { MonitoringContext } from "../../../contexts/monitoring/monitoring.context"

const defaultFormFields = {
  websiteURL: ""
}

const AddWebsite = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { addMonitoringWebsite } = useContext(MonitoringContext)

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const addWebsite = (event: any) => {
    event.preventDefault()

    addMonitoringWebsite(formFields.websiteURL)
    resetFormFields()
  }

  const handleChange = (event: any) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <AddWebsiteForm onSubmit={ addWebsite }>
      <div>
        <FormInput name="websiteURL" type="text" value={ formFields.websiteURL }
          label="Website URL" onChange={ handleChange }></FormInput>
        <Button>Add Website</Button>
      </div>
    </AddWebsiteForm>
  )
}

export default AddWebsite