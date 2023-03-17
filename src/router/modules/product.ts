import {RouteRecordRaw ,RouterView} from 'vue-router';

const routes:RouteRecordRaw={
    path:"product",
    component:RouterView,
    meta:{
        title:"商品"
    },
    children:[
        {
            path:"productList",
            name:"productList",
            component:()=>import("@/views/product/list/index.vue"),
            meta:{
                title:"商品列表"
            }
        },
        {
            path:"productAttr",
            name:"productAttr",
            component:()=>import("@/views/product/attr/index.vue"),
            meta:{
                title:"商品规格"
            }
        },
    ]

}
export default routes