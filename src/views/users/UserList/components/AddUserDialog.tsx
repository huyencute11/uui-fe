import Dialog from '@/components/ui/Dialog'
import {
    closeAddUserDialog,
    useAppDispatch,
    useAppSelector,
} from '../store'
import UserForm, { SetSubmitting } from '../../UserForm'

type FormModel = {
    email: string
    role: number
    phoneNumber: string
    firstName: string
    lastName: string
    password: string
    confirmPassword: string
    photo: string
}


const AddUserDialog = () => {
    const dispatch = useAppDispatch()

    const dialogOpen = useAppSelector(
        (state) => state.userList.data.addUserDialog
    )
    const addUser = async (data: FormModel) => {
        console.log('data',data)
        return true
    }

    const handleFormSubmit = async (
        values: FormModel,
        setSubmitting: SetSubmitting
    ) => {
        setSubmitting(true)
        const success = await addUser(values)
        setSubmitting(false)
    }

    const handleDiscard = () => {
        dispatch(closeAddUserDialog())

    }

    const onDialogClose = () => {
        dispatch(closeAddUserDialog())
    }

    return (
        <Dialog
            isOpen={dialogOpen}
            onClose={onDialogClose}
        >
            <UserForm
                type="new"
                onFormSubmit={handleFormSubmit as any}
                onDiscard={handleDiscard}
            
            />
           
        </Dialog>
    )
}

export default AddUserDialog
