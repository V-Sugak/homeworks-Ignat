import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/'
})

export const RequestsAPI = {
    postRequest(success: boolean) {
        return instance.post<ResponseType>('auth/test', {success})
    }
}

type BodyType = {
    success: boolean
}
type ResponseType = {
    errorText: string
    info: string
    yourBody: BodyType
    yourQuery: object
}