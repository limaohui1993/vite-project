import request from "@/utils/request";
import type {ILoginInfo} from "@/api/types/common"

// interface ResponseData<T=any>{
//    status: number,
//    method: string,
//    data: T,
// }

export const getLoginInfo=()=>{
   return request<ILoginInfo>({
        method: "get",
        url:"/login/info"
    })
}
