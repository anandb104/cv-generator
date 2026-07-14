import {
    Field,
    FieldDescription,
    FieldLabel,
  } from "@/components/ui/field"
  import { Textarea } from "@/components/ui/textarea"
  import  '../index.css'
  
  export function Experience({projectinfo,setprojectinfo}) {
    return (
        <div className="mb-9">
        <h1 className="mb-4 text-white" >Enter Your Experience Information</h1>
      <Field>
        <FieldLabel htmlFor="textarea-message" className=" text-white">Projects:</FieldLabel>
        <FieldDescription>Enter your Experience below.</FieldDescription>
        <Textarea id="textarea-message" placeholder="Type your Projects here." className="!w-100 text-white"value={projectinfo} onChange={(e)=>{
          setprojectinfo(e.target.value)}}/>
      </Field>
      </div>
    )
  }
  
export default Experience