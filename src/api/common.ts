import request from "@/utils/request";

export const getLoginInfo=()=>{
   return request({
        method: "get",
        url:"/login/info"
    })
}
