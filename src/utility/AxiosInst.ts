import axios, { AxiosInstance } from 'axios'
import env from "../env";

const springAxiosInst: AxiosInstance = axios.create({
    baseURL: env.api.MAIN_API_URL,
    timeout: 2500,
})

export default { springAxiosInst }
