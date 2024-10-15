import axios from 'axios'

const axiosInstance=axios.create({
    baseURL:'http://localhost:4000'
})
axiosInstance.interceptors.request.use((config)=>{
    const accessToken=localStorage.getItem("token")
    if (accessToken){
        if (config){
            config.headers.token=accessToken;
        }
    }
    return config;
},(error)=>{
    return Promise.reject(error)
})
export default axiosInstance;