import {createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router';
import AppLayout from "@/layout/AppLayout.vue"
import product from "@/router/modules/product"
const routes:RouteRecordRaw[]=[
    {
        path:"/",
        component:AppLayout,
        children:[
            {
                path:"/",
                name:"home",
                component:()=>import('../views/home/index.vue'),
                meta:{
                    title:"首页"
                }
            },
            product
        ]
    },
    {
        path:"/login",
        name:"login",
        component:()=>import('../views/login/index.vue'),
    },
]

const router=createRouter({
    history:createWebHashHistory(),
    routes
})
export default router