import NotFound from '@/components/status/404.vue'

export const basicRoutes =  [
    // {
    //     path: '/login',
    //     name: 'Login',
    //     component: () => import('@/views/login.vue'),
    //     meta: {
    //         title: '登录'
    //     }
    // },
    // {
    //   path: '/',
    //   name: 'Root',
    //   redirect: PageEnum.BASE_HOME,
    //   meta: {
    //       title: '首页'
    //   }
    // },
    {
        path: '/',
        name: 'Manage',
        component: () => import('@/views/layout.vue'),
        children: [
           {
            path: '',
            component: () => import('@/views/Questions/index.vue'),
           }
        ]
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound,
        meta: {
            title: '没有此页面'
        }
    },
]
