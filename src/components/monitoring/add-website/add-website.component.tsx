import Button from "../../shared/button/button.component"
import FormInput from "../../shared/form-input/form-input.component"
import "./add-website.styles"
import { AddWebsiteForm } from "./add-website.styles"

const AddWebsite = () => {
  return (
    <AddWebsiteForm>
      <div>
        <FormInput name="websiteURL" type="text" value="" label="Website URL"></FormInput>
        <Button>Add Website</Button>
      </div>
    </AddWebsiteForm>
  )
}

export default AddWebsite