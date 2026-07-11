import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

function General() {
  return (
    <div className="mb-9">
      <h1 className="mb-4 text-white">Enter Your General Information</h1>
    <form className="w-full max-w-sm ">
      <FieldGroup>
        <Field className='text-white'>
          <FieldLabel htmlFor="form-name">Name</FieldLabel>
          <Input
            id="form-name"
            type="text"
            placeholder="Evil Rabbit"
            required
          />
        </Field>
        <Field className='text-white'>
          <FieldLabel htmlFor="form-email">Email</FieldLabel>
          <Input id="form-email" type="email" placeholder="john@example.com" />
          <FieldDescription>
            We&apos;ll never share your email with anyone.
          </FieldDescription>
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field className='text-white'>
            <FieldLabel htmlFor="form-phone">Phone</FieldLabel>
            <Input id="form-phone" type="tel" placeholder="9876543210" />
          </Field>
          <Field className='text-white'>
          <FieldLabel htmlFor="form-github">Github</FieldLabel>
          <Input id="form-github" type="text" placeholder="www.john.github.com" />
          </Field>
        </div>
        <Field className='text-white'>
        <FieldLabel htmlFor="form-linkedin">Linkedin</FieldLabel>
        <Input id="form-linkedin" type="text" placeholder="www.john.linkedin.com" />
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
export default General