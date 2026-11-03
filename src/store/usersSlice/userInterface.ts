export interface UserType {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: number,
        geo: {
            lat: number,
            lng: number
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

export interface UsersInfoType {
    users: UserType[]
    user: UserType | null
    loading: boolean
    error: ApiErrorType | null
}

export interface ApiErrorType {
    message: string,
    status: number
}