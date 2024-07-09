import Input from '@/components/ui/Input'
import Avatar from '@/components/ui/Avatar'
import Upload from '@/components/ui/Upload'
import { FormItem } from '@/components/ui/Form'
import {
    HiMail,
    HiPhone,
    HiOutlineUser,
} from 'react-icons/hi'
import { Field, FieldProps, FormikErrors, FormikTouched } from 'formik'
import { Select } from '@/components/ui'
import { PasswordInput } from '@/components/shared'

type FormFieldsName = {
    email: string
    role: number
    phoneNumber: string
    firstName: string
    lastName: string
    password: string
    confirmPassword: string
    photo: string
}

type PersonalInfoFormProps = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
    values: FormFieldsName
}
const roleOptions = [
    {
        label: 'Admin',
        value: 'Admin',
    },
    {
        value: 'Editor',
        label: 'Editor',
    },
    {
        value: 'User',
        label: 'User',
    },
]

const PersonalInfoForm = (props: PersonalInfoFormProps) => {
    const { touched, errors, values } = props

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-h-[600px] overflow-auto">
                <div className="lg:col-span-2">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-2 mb-3">
                        <FormItem
                            label="Email"
                            invalid={errors.email && touched.email}
                            errorMessage={errors.email}
                        >
                            <Field
                                type="email"
                                autoComplete="off"
                                name="email"
                                placeholder="Email"
                                component={Input}
                                prefix={<HiMail className="text-xl" />}
                            />
                        </FormItem>
                        <FormItem label="Role">
                            <Field name="role">
                                {({ field, form }: FieldProps) => (
                                    <Select
                                        size="sm"
                                        field={field}
                                        form={form}
                                        options={roleOptions}
                                        value={roleOptions.filter(
                                            (opt) =>
                                                opt.value.toString() ==
                                                values?.role?.toString()
                                        )}
                                        getOptionLabel={(opt) => opt.label}
                                        getOptionValue={(opt) =>
                                            opt.value.toString()
                                        }
                                        onChange={(option) => {
                                            return form.setFieldValue(
                                                field.name,
                                                option?.value
                                            )
                                        }}
                                    />
                                )}
                            </Field>
                        </FormItem>
                    </div>
                    <div className="grid grid-cols-1 gap-x-2 mb-3">
                        <FormItem
                            label="Phone number"
                            invalid={errors.phoneNumber && touched.phoneNumber}
                            errorMessage={errors.phoneNumber}
                        >
                            <Field
                                autoComplete="off"
                                name="phoneNumber"
                                placeholder="0384555..."
                                component={Input}
                                prefix={<HiPhone className="text-xl" />}
                            />
                        </FormItem>
                    </div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-2 mb-3">
                        <FormItem
                            label="First Name"
                            invalid={errors.firstName && touched.firstName}
                            errorMessage={errors.firstName}
                        >
                            <Field
                                type="text"
                                autoComplete="off"
                                name="firstName"
                                placeholder="Huyen"
                                component={Input}
                                // prefix={< className="text-xl" />}
                            />
                        </FormItem>
                        <FormItem
                            label="Last name"
                            invalid={errors.lastName && touched.lastName}
                            errorMessage={errors.lastName}
                        >
                            <Field
                                type="text"
                                autoComplete="off"
                                name="lastName"
                                placeholder="Tran"
                                component={Input}
                            />
                        </FormItem>
                    </div>

                    <FormItem
                        label="Password"
                        invalid={errors.password && touched.password}
                        errorMessage={errors.password}
                    >
                        <Field
                            autoComplete="off"
                            name="password"
                            placeholder="Password"
                            component={PasswordInput}
                        />
                    </FormItem>
                    <FormItem
                        label="Confirm Password"
                        invalid={
                            errors.confirmPassword && touched.confirmPassword
                        }
                        errorMessage={errors.confirmPassword}
                    >
                        <Field
                            autoComplete="off"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            component={PasswordInput}
                        />
                    </FormItem>
                </div>
                <div className="lg:col-span-1">
                    <FormItem
                        invalid={errors.photo && touched.photo}
                        errorMessage={errors.photo}
                    >
                        <Field name="photo">
                            {({ field, form }: FieldProps) => {
                                const avatarProps = field.value
                                    ? { src: field.value }
                                    : {}
                                return (
                                    <div className="flex justify-center">
                                        <Upload
                                            className="cursor-pointer"
                                            showList={false}
                                            uploadLimit={1}
                                            onChange={(files) =>
                                                form.setFieldValue(
                                                    field.name,
                                                    URL.createObjectURL(
                                                        files[0]
                                                    )
                                                )
                                            }
                                            onFileRemove={(files) =>
                                                form.setFieldValue(
                                                    field.name,
                                                    URL.createObjectURL(
                                                        files[0]
                                                    )
                                                )
                                            }
                                        >
                                            <Avatar
                                                className="border-2 border-white dark:border-gray-800 shadow-lg"
                                                size={200}
                                                shape="circle"
                                                icon={<HiOutlineUser />}
                                                {...avatarProps}
                                            />
                                        </Upload>
                                    </div>
                                )
                            }}
                        </Field>
                        <div className="text-center">
                            <p className="font-semibold text-gray-800 dark:text-white">
                                Upload image
                            </p>
                        </div>
                    </FormItem>
                </div>
            </div>
        </>
    )
}

export default PersonalInfoForm
