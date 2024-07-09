export type AppConfig = {
    apiPrefix: string
    authenticatedEntryPath: string
    unAuthenticatedEntryPath: string
    locale: string
    enableMock: boolean
}

const appConfig: AppConfig = {
    apiPrefix: '/api',
    authenticatedEntryPath: '/app/users/user-list',
    unAuthenticatedEntryPath: '/app/users/user-list',
    locale: 'en',
    enableMock: true,
}

export default appConfig
