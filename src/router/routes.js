import Msite from '../pages/Msite/Msite';
import Order from '../pages/Order/Order';
import Profile from '../pages/Profile/Profile';
import Search from '../pages/Search/Search.vue';
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import Good from '../pages/Shop/Good/Good.vue'
import Info from '../pages/Shop/Info/Info.vue'
import Rating from '../pages/Shop/Rating/Rating.vue'
export default [
    {
        path:'/msite',
        component: Msite,
        meta: {
            isShowFooter: true
          }
    },
    {
        path:'/order',
        component: Order,
        meta: {
            isShowFooter: true
          }
    },
    {
        path:'/profile',
        component: Profile,
        meta: {
            isShowFooter: true
          }
    },
    {
        path:'/search',
        component: Search,
        meta: {
            isShowFooter: true
          }
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/',
        redirect: '/login'
    },
    {
        path:'/shop',
        component:Shop,
        children:[
            {
                path:'/shop/good',
                component:Good
            },
            {
                path:'info',
                component:Info
            },
            {
                path:'rating',
                component:Rating
            }
        ]
    },
    
    
]