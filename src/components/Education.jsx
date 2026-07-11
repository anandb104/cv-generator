import { Button } from "@/components/ui/button"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

function Education() {
  return (
    <div className="mb-9">
      <h1 className="mb-4 text-white">Enter Your Education Information</h1>
    <form className="w-full max-w-sm ">
      <FieldGroup>
      <div className="grid grid-cols-2 gap-4">
        <Field className='text-white'>
          <FieldLabel htmlFor="form-college-name">College Name</FieldLabel>
          <Input
            id="form-name"
            type="text"
            placeholder="MIT"
            required
          />
        </Field>
        <Field className='text-white'>
        <FieldLabel htmlFor="form-college-year">Years</FieldLabel>
        <Input id="form-college-year" type="text" placeholder="2023-27" />
        </Field>
        </div>
        <Field className='text-white'>
          <FieldLabel htmlFor="form-email">Branch</FieldLabel>
          <Input id="form-email" type="text" placeholder="CSE" />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field className='text-white'>
          <FieldLabel htmlFor="form-school">School Name</FieldLabel>
          <Input id="form-school" type="text" placeholder="DAV School" />
          </Field>
          <Field className='text-white'>
        <FieldLabel htmlFor="form-school-year">Years</FieldLabel>
        <Input id="form-school-year" type="text" placeholder="2020-22" />
        </Field>
        </div>
        <Field className='text-white'>
        <FieldLabel htmlFor="form-tenth">10th percent</FieldLabel>
        <Input id="form-tenth" type="text" placeholder="93%" />
        </Field>
        <Field className='text-white'>
        <FieldLabel htmlFor="form-twelth">12th percent</FieldLabel>
        <Input id="form-twelth" type="text" placeholder="96%" />
        </Field>
        <Field orientation="horizontal">
          <Button type="button" variant="outline">
            Edit
          </Button>
          <Button type="submit">Submit</Button>
        </Field>
      </FieldGroup>
    </form>
    </div>
  )
}
export default Education