import axios from 'axios'

const axiosInstance=axios.create({
    baseURL:'http://16.171.204.158:5050'
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