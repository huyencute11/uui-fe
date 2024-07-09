import reducer from './store'
import { injectReducer } from '@/store'
import AdaptableCard from '@/components/shared/AdaptableCard'
import ProductTable from './components/UserTable'
import ProductTableTools from './components/UserTableTools'
import AddUserDialog from './components/AddUserDialog'
import EditUserDialog from './components/EditUserDialog'

injectReducer('userList', reducer)

const UserList = () => {
    return (
        <AdaptableCard className="h-full" bodyClass="h-full">
            <div className="lg:flex items-center justify-between mb-4">
                <h3 className="mb-4 lg:mb-0">Users</h3>
                <ProductTableTools />
            </div>
            <ProductTable />
            <AddUserDialog/>
            <EditUserDialog/>
        </AdaptableCard>
    )
}

export default UserList
