import { lazy } from 'react'
import { APP_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const appsRoute: Routes = [
    
    {
        key: 'appsSales.productList',
        path: `${APP_PREFIX_PATH}/users/user-list`,
        component: lazy(() => import('@/views/users/UserList')),
        authority: [ADMIN, USER],
    },
]

export default appsRoute
