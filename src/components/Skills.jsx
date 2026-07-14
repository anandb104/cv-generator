import {
    Field,
    FieldDescription,
    FieldLabel,
  } from "@/components/ui/field"
  import { Textarea } from "@/components/ui/textarea"
  import  '../index.css'
  
  export function Skills({skillinfo,setskillinfo}) {
    return (
        <div className="mb-9">
        <h1 className="mb-4 text-white" >Enter Your Skills Information</h1>
      <Field>
        <FieldLabel htmlFor="textarea-message" className=" text-white">Skills:</FieldLabel>
        <FieldDescription>Enter your Skills below.</FieldDescription>
        <Textarea id="textarea-message" placeholder="Type your skills here." className="!w-100 text-white"
        value={skillinfo} onChange={(e)=>{
          setskillinfo(e.target.value)
        }}
        />
      </Field>
      </div>
    )
  }
  
export default Skills