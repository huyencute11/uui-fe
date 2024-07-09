import appConfig from '@/configs/app.config'
import { REDIRECT_URL_KEY } from '@/constants/app.constant'
import {  Outlet} from 'react-router-dom'

const ProtectedRoute = () => {

    return <Outlet />
}

export default ProtectedRoute
