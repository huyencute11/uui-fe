import { forwardRef, useState } from 'react'
import { FormContainer } from '@/components/ui/Form'
import Button from '@/components/ui/Button'
import ConfirmDialog from '@/components/shared/ConfirmDialog'
import { Form, Formik, FormikProps } from 'formik'
import cloneDeep from 'lodash/cloneDeep'
import { HiOutlineTrash } from 'react-icons/hi'
import { AiOutlineSave } from 'react-icons/ai'
import * as Yup from 'yup'
import PersonalInfoForm from './PersonalInfoForm'

type FormikRef = FormikProps<any>

type InitialData = {
    id?: string
    name?: string
    productCode?: string
    img?: string
    imgList?: {
        id: string
        name: string
        img: string
    }[]
    category?: string
    price?: number
    stock?: number
    status?: number
    costPerItem?: number
    bulkDiscountPrice?: number
    taxRate?: number
    tags?: string[]
    brand?: string
    vendor?: string
    description?: string
}

export type FormModel = InitialData
export type SetSubmitting = (isSubmitting: boolean) => void

export type OnDeleteCallback = React.Dispatch<React.SetStateAction<boolean>>

type OnDelete = (callback: OnDeleteCallback) => void

type UserForm = {
    initialData?: InitialData
    type: 'edit' | 'new'
    onDiscard?: () => void
    onDelete?: OnDelete
    onFormSubmit: (formData: FormModel, setSubmitting: SetSubmitting) => void
}

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Vui lòng nhập email'),
    password: Yup.string().min(8).required('Vui lòng nhập mật khẩu'),
    passwordRetype: Yup.string().oneOf(
        [Yup.ref('password'), ''],
        'Passwords must match'
    ),
    phoneNumber: Yup.string().required('Vui lòng nhập số điện thoại'),
    firstName: Yup.string().required('Vui lòng nhập họ và tên đệm'),
    lastName: Yup.string().required('Vui lòng nhập tên'),
    role: Yup.number().required('Vui lòng chọn quyền'),
    photo: Yup.mixed().nullable(),
})

const DeleteButton = ({ onDelete }: { onDelete: OnDelete }) => {
    const [dialogOpen, setDialogOpen] = useState(false)

    const onConfirmDialogOpen = () => {
        setDialogOpen(true)
    }

    const onConfirmDialogClose = () => {
        setDialogOpen(false)
    }

    const handleConfirm = () => {
        onDelete?.(setDialogOpen)
    }

    return (
        <>
            <Button
                className="text-red-600"
                variant="plain"
                size="sm"
                icon={<HiOutlineTrash />}
                type="button"
                onClick={onConfirmDialogOpen}
            >
                Delete
            </Button>
            <ConfirmDialog
                isOpen={dialogOpen}
                type="danger"
                title="Delete user"
                confirmButtonColor="red-600"
                onClose={onConfirmDialogClose}
                onRequestClose={onConfirmDialogClose}
                onCancel={onConfirmDialogClose}
                onConfirm={handleConfirm}
            >
                <p>
                    Are you sure you want to delete User? This action
                    cannot be undone.
                </p>
            </ConfirmDialog>
        </>
    )
}

const UserForm = forwardRef<FormikRef, UserForm>((props, ref) => {
    const {
        type,
        initialData = {
            email: '',
            role: '',
            phoneNumber: '',
            firstName: '',
            lastName: '',
            password: '',
            confirmPassword: '',
            photo: '',
        },
        onFormSubmit,
        onDiscard,
        onDelete,
    } = props

    return (
        <>
            {type === 'edit' ? (
                <h3 className="mb-4 lg:mb-0">Edit User</h3>
            ) : (
                <h3 className="mb-4 lg:mb-0">Add new User</h3>
            )}
            <Formik
                innerRef={ref}
                initialValues={{
                    ...initialData,
                }}
                validationSchema={validationSchema}
                onSubmit={(values: FormModel, { setSubmitting }) => {
                    const formData = cloneDeep(values)
                    onFormSubmit?.(formData, setSubmitting)
                }}
            >
                {({ values, touched, errors, isSubmitting }) => (
                    <Form>
                        <FormContainer>
                            <PersonalInfoForm
                                values={values}
                                touched={touched}
                                errors={errors}
                            />

                            <div
                                className="-mx-8 px-8 flex items-center justify-between py-4"
                            >
                                <div>
                                    {type === 'edit' && (
                                        <DeleteButton
                                            onDelete={onDelete as OnDelete}
                                        />
                                    )}
                                </div>
                                <div className="md:flex items-center">
                                    <Button
                                        size="sm"
                                        className="ltr:mr-3 rtl:ml-3"
                                        type="button"
                                        onClick={() => onDiscard?.()}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="solid"
                                        loading={isSubmitting}
                                        icon={<AiOutlineSave />}
                                        type="submit"
                                    >
                                        Add user
                                    </Button>
                                </div>
                            </div>
                        </FormContainer>
                    </Form>
                )}
            </Formik>
        </>
    )
})

UserForm.displayName = 'UserForm'

export default UserForm
