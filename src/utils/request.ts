import axios from 'axios';

let request=axios.create({
    baseURL:"https://shop.fed.lagou.com/api/admin"
})

// 请求拦截器
request.interceptors.request.use(
    config=>{
         // 统一设置用户身份 Token
        return config 
    },
    error => {
        return Promise.reject(error)
    }
)

// 响应拦截器
request.interceptors.response.use(
    response => {
      // 统一处理响应错误，例如 token 无效、服务端异常等
      return response
    },
    err => {
      return Promise.reject(err)
    }
  )

export default request