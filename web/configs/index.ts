

interface IConfigs {
    DOMAIN_URL: string;
    API_BASE_URL: string;
    GOOGLE_CLIENTID: string;
    NEXT_PUBLIC_STATIC:string;
}

export const getConfigs = (): IConfigs => {
    const environmentType = process.env.NODE_ENV;
    switch (environmentType) {
        case 'development':
            return {
                DOMAIN_URL: process.env.NEXT_PUBLIC_HOST && process.env.NEXT_PUBLIC_PORT ? process.env.NEXT_PUBLIC_HOST +':'+ process.env.NEXT_PUBLIC_PORT : "",
                API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL ? process.env.NEXT_PUBLIC_API_BASE_URL : "",
                GOOGLE_CLIENTID: process.env.NEXT_PUBLIC_GOOGLE_CLIENTID ? process.env.NEXT_PUBLIC_GOOGLE_CLIENTID : "",
                NEXT_PUBLIC_STATIC : process.env.NEXT_PUBLIC_STATIC || ''
            }
        case 'production':
            return {
                DOMAIN_URL: process.env.NEXT_PUBLIC_HOST ? process.env.NEXT_PUBLIC_HOST : "",
                API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL ? process.env.NEXT_PUBLIC_API_BASE_URL : "",
                GOOGLE_CLIENTID: process.env.NEXT_PUBLIC_GOOGLE_CLIENTID ? process.env.NEXT_PUBLIC_GOOGLE_CLIENTID : "",
                NEXT_PUBLIC_STATIC : process.env.NEXT_PUBLIC_STATIC || ''
            }
        case 'test':
            return {
                DOMAIN_URL: process.env.NEXT_PUBLIC_HOST ? process.env.NEXT_PUBLIC_HOST : "",
                API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL ? process.env.NEXT_PUBLIC_API_BASE_URL : "",
                GOOGLE_CLIENTID: process.env.NEXT_PUBLIC_GOOGLE_CLIENTID ? process.env.NEXT_PUBLIC_GOOGLE_CLIENTID : "",
                NEXT_PUBLIC_STATIC : process.env.NEXT_PUBLIC_STATIC || ''
            }
        default:
            return {
                DOMAIN_URL: process.env.NEXT_PUBLIC_HOST ? process.env.NEXT_PUBLIC_HOST : "",
                API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL ? process.env.NEXT_PUBLIC_API_BASE_URL : "",
                GOOGLE_CLIENTID: process.env.NEXT_PUBLIC_GOOGLE_CLIENTID ? process.env.NEXT_PUBLIC_GOOGLE_CLIENTID : "",
                NEXT_PUBLIC_STATIC : process.env.NEXT_PUBLIC_STATIC || ''

            }
    }
}

const APP_CONFIG = getConfigs();

export default APP_CONFIG