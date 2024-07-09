import Avatar from '@/components/ui/Avatar'
import Dropdown from '@/components/ui/Dropdown'
import withHeaderItem from '@/utils/hoc/withHeaderItem'
import classNames from 'classnames'
import { HiOutlineUser, HiOutlineCog } from 'react-icons/hi'
import { FiActivity } from 'react-icons/fi'
import type { CommonProps } from '@/@types/common'

type DropdownList = {
    label: string
    path: string
    icon: JSX.Element
}

const dropdownItemList: DropdownList[] = [
    {
        label: 'Profile',
        path: '/',
        icon: <HiOutlineUser />,
    },
    {
        label: 'Account Setting',
        path: '/',
        icon: <HiOutlineCog />,
    },
    {
        label: 'Activity Log',
        path: '/',
        icon: <FiActivity />,
    },
]

const _UserDropdown = ({ className }: CommonProps) => {
   
    const user = {
        avatar: 'https://st.quantrimang.com/photos/image/2020/06/19/Hinh-Nen-Meo-Ngao-44.jpg',
        userName: 'Minh Huyen',
        authority: ['admin'],
        email: 'huyen@2002'
    }

    const UserAvatar = (
        <div className={classNames(className, 'flex items-center gap-2')}>
            <Avatar size={32} shape="circle" src={user.avatar} />
            <div className="hidden md:block">
                <div className="text-xs capitalize">
                    {user.authority?.[0] || 'guest'}
                </div>
                <div className="font-bold">{user.userName}</div>
            </div>
        </div>
    )

    return (
        <div>
            <Dropdown
                menuStyle={{ minWidth: 240 }}
                renderTitle={UserAvatar}
                placement="bottom-end"
            >
                <Dropdown.Item variant="header">
                    <div className="py-2 px-3 flex items-center gap-2">
                        <Avatar shape="circle" src={user.avatar} />
                        <div>
                            <div className="font-bold text-gray-900 dark:text-gray-100">
                                {user.userName}
                            </div>
                            <div className="text-xs">{user.email}</div>
                        </div>
                    </div>
                </Dropdown.Item>
                <Dropdown.Item variant="divider" />
                {dropdownItemList.map((item) => (
                    <Dropdown.Item
                        key={item.label}
                        eventKey={item.label}
                        className="mb-1 px-0"
                    >
                       
                            <span className="flex gap-2 items-center w-full">
                                <span className="text-xl opacity-50">
                                    {item.icon}
                                </span>
                                <span>{item.label}</span>
                            </span>
                    </Dropdown.Item>
                ))}
                <Dropdown.Item variant="divider" />
            </Dropdown>
        </div>
    )
}

const UserDropdown = withHeaderItem(_UserDropdown)

export default UserDropdown
