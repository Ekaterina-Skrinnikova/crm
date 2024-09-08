import { Form, Formik } from 'formik'
import { LogoUploader } from './LogoUploader'
import InputField from './InputField'
import Button from './Button'

export type CompanyFieldValues = {
    name: string
    status: string
    country: string
    category: string
    date: string
    description: string
}

const initialValues: CompanyFieldValues = {
    name: '',
    status: '',
    country: '',
    category: '',
    date: '',
    description: '',
}

export interface CompanyFormProps {
    onSubmit: (value: CompanyFieldValues) => void | Promise<void>
}

export default function CompanyForm({ onSubmit }: CompanyFormProps) {
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form>
                <div>
                    <LogoUploader />
                    <InputField
                        label="Status"
                        placeholder="Status"
                        name="status"
                    />
                    <InputField
                        label="Country"
                        placeholder="Country"
                        name="country"
                    />
                </div>
                <div>
                    <InputField label="Name" placeholder="Name" name="name" />
                    <InputField
                        label="Category"
                        placeholder="Category"
                        name="category"
                    />
                    <InputField label="Joined date" type="date" name="date" />
                    <InputField
                        label="Description"
                        placeholder="Description"
                        name="description"
                    />
                </div>
                <Button type="submit">Add company</Button>
            </Form>
        </Formik>
    )
}
