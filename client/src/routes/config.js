export default {
    menus: [ // 菜单相关路由
        {
            key: '/app/dashboard/index',
            title: '首页',
            icon: 'mobile',
            component: 'Dashboard'
        },
        {
            key: '/app/category',
            title: '分类管理',
            icon: 'scan',
            component: 'Category'
        },
        {
            key: '/app/animation',
            title: '个人资料设置',
            icon: 'rocket',
            component: 'PersonSet'
        },
        {
            key: '/app/blogsList',
            title: '博客管理',
            icon: 'copy',
            component: 'BlogsList',
        },
        {
            key: '/app/form',
            title: '贵宾礼品',
            icon: 'edit',
            subs: [{
                key: '/app/form/basicForm',
                title: '礼品管理',
                component: 'Buttons'
            }, {
                key: '/app/form/basicForm2',
                title: '交易管理',
                component: 'Buttons'
            }, {
                key: '/app/form/basicForm3',
                title: '发货管理',
                component: 'Buttons'
            }]
        },
        {
            key: '/app/chart',
            title: '用户激励',
            icon: 'area-chart',
            subs: [{
                    key: '/app/chart/echarts',
                    title: '激励任务',
                    component: 'Buttons'
                },
                {
                    key: '/app/chart/recharts',
                    title: '客户激励查询',
                    component: 'Buttons'
                },
            ],
        },
        {
            key: '/subs4',
            title: '统计报表',
            icon: 'switcher',
            subs: [{
                    key: '/login',
                    title: '贵宾礼订单报表'
                },
                {
                    key: '/404',
                    title: '预约活动报表'
                },
            ],
        },
        {
            key: '/app/auth',
            title: '系统管理',
            icon: 'safety',
            subs: [{
                    key: '/app/auth/basic',
                    title: '用户管理',
                    component: 'Buttons'
                },
                {
                    key: '/app/auth/routerEnter',
                    title: '机构管理',
                    component: 'RouterEnter',
                    auth: 'auth/testPage'
                },
                {
                    key: '/app/auth/routerEnter2',
                    title: '场景值管理',
                    component: 'RouterEnter',
                    auth: 'auth/testPage'
                }
            ],
        }
    ],
    others: [
        {
            key: '/app/writeblogs',
            title: '写博客',
            component: 'Writeblogs',
        },
        {
            key: '/app/writeblogs/:id',
            title: '写博客',
            component: 'Writeblogs',
        },
        {
            key: '/app/watchblogs/:id',
            title: '写博客',
            component: 'WatchBlogs',
        },
        {
            key: '/app/watchblogs',
            title: '写博客',
            component: 'WatchBlogs',
        }
    ] // 非菜单相关路由
}