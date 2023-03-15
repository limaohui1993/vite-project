import {RouteRecordRaw ,RouterView} from 'vue-router';

const routes:RouteRecordRaw={
    path:"product",
    component:RouterView,
    children:[
        {
            path:"productList",
            name:"productList",
            component:()=>import("@/views/product/list/index.vue")
        },
        {
            path:"productAttr",
            name:"productAttr",
            component:()=>import("@/views/product/attr/index.vue")
        },
    ]

}
export default routes