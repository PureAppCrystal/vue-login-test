import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginPage from '@/views/LoginPage'
import MainPage from '@/views/MainPage'
import Menu1 from '@/views/Menu1'
import Menu2 from '@/views/Menu2'

import NotFoundView from '@/views/NotFoundView'


Vue.config.devtools = true
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/main',
        redirect: '/main/menu1'
        
    },
    {
        path: '/main',
        component: MainPage,
        children: [
            {
                path: 'menu1',
                component: Menu1,
                meta: {transitionName: 'slide', title: '상세 정보보기'},
                name: 'Menu1'
            },
            {
                path: 'menu2',
                component: Menu2,
                name: 'Menu2'
            },
        ]
    },
    // {
    //     path: '/main/menu1',
    //     component: Menu1,
    //     name: 'Menu1'
    // },
    {
        path:'*',
        component:NotFoundView
    }  
]

export const router = new VueRouter({
    mode: 'history',
    routes
})