import {
    Field,
    FieldDescription,
    FieldLabel,
  } from "@/components/ui/field"
  import { Textarea } from "@/components/ui/textarea"
  import  '../index.css'
  
  export function Experience() {
    return (
        <div className="mb-9">
        <h1 className="mb-4 text-white" >Enter Your Coursework Information</h1>
      <Field>
        <FieldLabel htmlFor="textarea-message" className=" text-white">Coursework:</FieldLabel>
        <FieldDescription>Enter your Coursework below.</FieldDescription>
        <Textarea id="textarea-message" placeholder="Type your Coursework here." className="!w-100 text-white"/>
      </Field>
      </div>
    )
  }
  
export default Experience