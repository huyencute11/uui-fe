import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { TableQueries } from '@/@types/common'

const dataFake = [
    {
        id: 1,
        username: 'Anand2002',
        firstName: 'Anand',
        lastName: 'John',
        password: 'xZdkn3qsRdDzkTw',
        name: 'John Anand2002',
        email: 'Anand2002@example.com',
        position: 'Product Manager',
        phoneNumber: '123-456-7890',
        role: 'Admin',
        photo: 'https://json-server.dev/ai-profiles/33.png',
        address: {
            street: '1581 Patricia Stream',
            city: 'Pennsylvania',
            country: 'Ireland',
            zipcode: '30058',
        },
        created_at:
            'Fri Dec 15 2023 03:53:08 GMT+0000 (Coordinated Universal Time)',
    },
    {
        id: 2,
        username: 'Minh Huyen',
        firstName: 'Minh Huyen',
        lastName: 'Tran',
        password: 'A_xkDTeE4tcgm12',
        name: 'TranHuyen',
        email: 'MinhHuyen@2002.com',
        position: 'Product Manager',
        phoneNumber: '123-456-7890',
        role: 'Admin',
        photo: 'https://st.quantrimang.com/photos/image/2020/06/19/Hinh-Nen-Meo-Ngao-44.jpg',
        address: {
            street: '899 Karianne Brooks',
            city: 'Nevada',
            country: 'Haiti',
            zipcode: '64191-6999',
        },
        created_at:
            'Tue Aug 22 2023 08:29:48 GMT+0000 (Coordinated Universal Time)',
    },
    {
        id: 3,
        username: 'Tierra93',
        firstName: 'Bertha',
        lastName: 'Bahringer',
        password: 'Fvmf94SCZUKlK8z',
        name: 'John Doe',
        email: 'john@example.com',
        position: 'Leader',
        phoneNumber: '123-456-7890',
        role: 'User',
        photo: 'https://json-server.dev/ai-profiles/33.png',
        address: {
            street: '0222 Jalen Valley',
            city: 'Delaware',
            country: 'Indonesia',
            zipcode: '90040-3729',
        },
        created_at:
            'Sat Jun 15 2024 11:43:13 GMT+0000 (Coordinated Universal Time)',
    },
    {
        id: 4,
        username: 'Torrance_Ziemann',
        firstName: 'Bertha',
        lastName: 'Bahringer',
        password: 'xwHvsFKwvOElgCI',
        name: 'John Doe',
        email: 'john@example.com',
        position: 'Leader',
        phoneNumber: '123-456-7890',
        role: 'User',
        photo: 'https://json-server.dev/ai-profiles/33.png',
        address: {
            street: '19590 Westley View',
            city: 'Idaho',
            country: 'Hungary',
            zipcode: '30696-1494',
        },
        created_at:
            'Fri Sep 08 2023 02:32:44 GMT+0000 (Coordinated Universal Time)',
    },
    {
        id: 5,
        username: 'Nia_Little3',
        firstName: 'Bertha',
        lastName: 'Bahringer',
        password: 'oqUxhuBN6_jeBil',
        name: 'John Doe',
        email: 'john@example.com',
        position: 'Leader',
        phoneNumber: '123-456-7890',
        role: 'User',
        photo: 'https://json-server.dev/ai-profiles/33.png',
        address: {
            street: '6644 Serenity Dale',
            city: 'Missouri',
            country: 'Denmark',
            zipcode: '66853',
        },
        created_at:
            'Wed Nov 08 2023 13:52:01 GMT+0000 (Coordinated Universal Time)',
    },
    {
        id: 6,
        username: 'Marta_Roob95',
        firstName: 'Bertha',
        lastName: 'Bahringer',
        password: 'uSqUlxZJsHZ0oO_',
        name: 'John Doe',
        email: 'john@example.com',
        position: 'Leader',
        phoneNumber: '123-456-7890',
        role: 'Editor',
        photo: 'https://json-server.dev/ai-profiles/33.png',
        address: {
            street: '95479 Watsica Fork',
            city: 'Kansas',
            country: 'Barbados',
            zipcode: '51916',
        },
        created_at:
            'Thu Apr 11 2024 22:31:54 GMT+0000 (Coordinated Universal Time)',
    },
    {
        id: 7,
        username: 'Zachary.Dare',
        firstName: 'Bertha',
        lastName: 'Huyen',
        password: 'mvmPXrpTDUpy86v',
        name: 'John Doe',
        email: 'john@example.com',
        position: 'Leader',
        phoneNumber: '123-456-7890',
        role: 'Editor',
        photo: 'https://json-server.dev/ai-profiles/33.png',
        address: {
            street: '23898 Twila Cliffs',
            city: 'Delaware',
            country: 'Svalbard &amp; Jan Mayen Islands',
            zipcode: '41134',
        },
        created_at:
            'Sun Dec 17 2023 17:13:21 GMT+0000 (Coordinated Universal Time)',
    },
    {
        id: 8,
        username: 'Jaleel.Jaleel',
        firstName: 'Jaleel',
        lastName: 'Beier',
        password: 'enuXpbm4iwnEIO6',
        name: 'JaleelDoe Jaleel',
        email: 'john@example.com',
        position: 'Leader',
        phoneNumber: '123-456-7890',
        role: 'Editor',
        photo: 'https://json-server.dev/ai-profiles/33.png',
        address: {
            street: '728 Runolfsdottir Shoals',
            city: 'New Jersey',
            country: 'El Salvador',
            zipcode: '23965-3849',
        },
        created_at:
            'Wed Dec 06 2023 12:17:33 GMT+0000 (Coordinated Universal Time)',
    },
    {
        id: 9,
        username: 'Maribel_Mosciski',
        firstName: 'Bertha',
        lastName: 'Bahringer',
        password: '9B2Q051E4gloLmx',
        name: 'John Doe',
        email: 'john@example.com',
        position: 'Leader',
        phoneNumber: '123-456-7890',
        role: 'Editor',
        photo: 'https://json-server.dev/ai-profiles/33.png',
        address: {
            street: '92109 Wisoky Lane',
            city: 'Nebraska',
            country: 'Estonia',
            zipcode: '32094',
        },
        created_at:
            'Tue Aug 29 2023 21:49:21 GMT+0000 (Coordinated Universal Time)',
    },
    {
        id: '10',
        username: 'Maribel_Mosciski',
        firstName: 'Boyd',
        lastName: 'Howell',
        password: '9B2Q051E4gloLmx',
        name: 'John Doe',
        email: 'john@example.com',
        position: 'Leader',
        phoneNumber: '123-456-7890',
        role: 'Editor',
        photo: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/876.jpg',
        address: {
            street: '92109 Wisoky Lane',
            city: 'Nebraska',
            country: 'Estonia',
            zipcode: '32094',
        },
        created_at:
            'Tue Aug 29 2023 21:49:21 GMT+0000 (Coordinated Universal Time)',
    },
]
type User = {
    id: number
    username: string
    firstName: string
    lastName: string
    password: string
    name: string
    email: string
    phoneNumber: string
    role: number
    photo: string
    address: {
        street: string
        city: string
        country: string
        zipcode: string
    }
    created_at: string
}


type FilterQueries = {
    email: string
    firstName: string
    lastName: string
    phoneNumber: string
    role: string[]
}

export type UserListState = {
    loading: boolean
    deleteConfirmation: boolean
    selectedProduct: string
    tableData: TableQueries
    filterData: FilterQueries
    userList: User[]
    addUserDialog: boolean
    editUserDialog: boolean
}

type GetUsersRequest = TableQueries & { filterData?: FilterQueries }

export const SLICE_NAME = 'userList'

export const getUserList = createAsyncThunk(
    SLICE_NAME + '/getProducts',
    async (data: GetUsersRequest) => {
        console.log('data--->', data)
        let dataResponse = dataFake
         dataResponse = dataFake.filter((item) => {
            return (
                item.email.includes(data.query ? data.query : '') ||
                item.firstName.includes(data.query ? data.query : '') ||
                item.lastName.includes(data.query ? data.query : '') ||
                item.phoneNumber.includes(data.query ? data.query : '') ||
                item.role.includes(data.query ? data.query : '')
            )
        })
        const sortKey = data?.sort?.key
        const sortType = data?.sort?.order
        if (sortKey && sortType) {
            dataResponse.sort((a: any, b: any) => {
                if (sortType === 'asc') {
                    return a[sortKey] > b[sortKey] ? 1 : -1
                } else {
                    return a[sortKey] < b[sortKey] ? 1 : -1
                }
            })
        }
        // filter by filter data
        if (data.filterData) {
            const { email, role, phoneNumber, firstName, lastName } = data.filterData
            dataResponse = dataResponse.filter((item) => {
                return (
                    item.email.includes(email ? email : '') &&
                    // item.role.includes(role ? role : '') &&
                    item.phoneNumber.includes(phoneNumber ? phoneNumber : '') &&
                    item.firstName.includes(firstName ? firstName : '') &&
                    item.lastName.includes(lastName ? lastName : '')
                )
            })
        }

        const response = {
            data: dataResponse || [],
            total: dataResponse?.length > 0 ? dataResponse?.length : 0,
        }
        return response
    }
)

export const initialTableData: TableQueries = {
    total: 0,
    pageIndex: 1,
    pageSize: 10,
    query: '',
    sort: {
        order: '',
        key: '',
    },
    filterData: {
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        role: [],
    },
}

const initialState: UserListState = {
    loading: false,
    deleteConfirmation: false,
    selectedProduct: '',
    userList: [],
    tableData: initialTableData,

    filterData: {
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        role: [],
    },
    addUserDialog: false,
    editUserDialog: false,
}

const productListSlice = createSlice({
    name: `${SLICE_NAME}/state`,
    initialState,
    reducers: {
        updateProductList: (state, action) => {
            state.userList = action.payload
        },
        setTableData: (state, action) => {
            state.tableData = action.payload
        },
        setFilterData: (state, action) => {
            state.filterData = action.payload
        },
        toggleDeleteConfirmation: (state, action) => {
            state.deleteConfirmation = action.payload
        },
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload
        },
        openAddUserDialog: (state) => {
            state.addUserDialog = true
        },
        closeAddUserDialog: (state) => {
            state.addUserDialog = false
        },
        openEditUserDialog: (state, action) => {
            state.editUserDialog = true
            state.selectedProduct = action.payload
        },
        closeEditUserDialog: (state) => {
            ;(state.editUserDialog = false), (state.selectedProduct = '')
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserList.fulfilled, (state, action) => {
                state.userList = action.payload.data as any
                state.tableData.total = action.payload.total
                state.loading = false
            })
            .addCase(getUserList.pending, (state) => {
                state.loading = true
            })
    },
})

export const {
    updateProductList,
    setTableData,
    setFilterData,
    toggleDeleteConfirmation,
    setSelectedProduct,
    openAddUserDialog,
    closeAddUserDialog,
    openEditUserDialog,
    closeEditUserDialog,
} = productListSlice.actions

export default productListSlice.reducer
