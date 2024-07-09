import Button from '@/components/ui/Button'
import { HiDownload, HiPlusCircle } from 'react-icons/hi'
import ProductTableSearch from './UserTableSearch'
import ProductFilter from './UserFilter'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '@/store'
import { openAddUserDialog } from '../store'

const ProductTableTools = () => {
    const dispatch = useAppDispatch()
    const handleAddProduct = () => {
        dispatch(openAddUserDialog())
    }
    return (
        <div className="flex flex-col lg:flex-row lg:items-center">
            <ProductTableSearch />
            <ProductFilter />
            <Link
                download
                className="block lg:inline-block md:mx-2 md:mb-0 mb-4"
                  to="/data/product-list.csv"
                target="_blank"
            >
                <Button block size="sm" icon={<HiDownload />}>
                    Export
                </Button>
            </Link>
            {/* <Link
                className="block lg:inline-block md:mb-0 mb-4"
                to="/app/sales/product-new"
            > */}
            <Button
                className='md:w-40'
                block
                variant="solid"
                onClick={() => handleAddProduct()}
                size="sm"
                icon={<HiPlusCircle />}
            >
                Add User
            </Button>
            {/* </Link> */}
        </div>
    )
}

export default ProductTableTools
