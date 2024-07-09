
import Dialog from '@/components/ui/Dialog'
import {
    closeEditUserDialog,
    useAppDispatch,
    useAppSelector,
} from '../store'
import UserForm, { SetSubmitting } from '../../UserForm'
// import ProductForm, { SetSubmitting } from '../../ProductForm'

type FormModel = {
    email: string
    role: number
    phoneNumber: string
    firstName: string
    lastName: string
    password: string
    confirmPassword: string
    upload: string
}


const EditUserDialog = () => {
    const dispatch = useAppDispatch()
    const dialogOpen = useAppSelector(
        (state) => state.userList.data.editUserDialog
    )
    const selectedUser = useAppSelector(
        (state) => state.userList.data.selectedProduct
    )
    const addProduct = async (data: FormModel) => {
        console.log('data',data)
        return true
    }

    const handleFormSubmit = async (
        values: FormModel,
        setSubmitting: SetSubmitting
    ) => {
        setSubmitting(true)
        const success = await addProduct(values)
        if (success) {
            dispatch(closeEditUserDialog())
        }
        setSubmitting(false)
       
    }

    const handleDiscard = () => {
        dispatch(closeEditUserDialog())
    }

    const onDialogClose = () => {
        dispatch(closeEditUserDialog())
    }

    return (
        <Dialog
            isOpen={dialogOpen}
            onClose={onDialogClose}
        >
            <UserForm
               initialData={selectedUser as any}
                type="edit"
                onFormSubmit={handleFormSubmit as any}
                onDiscard={handleDiscard}
            
            />
         
        </Dialog>
    )
}

export default EditUserDialog
