const routes = [
    {
        path: '/',
        name: "Home",
        component: () => import('../views/TextAndColors'),
    },
    {
        path: '/TextAndColor',
        name: 'TextAndColors',
        component: () => import('../views/TextAndColors.vue')
    },
    {
        path: '/ButtonAndIcons',
        name: 'ButtonAndIcons',
        component: () => import('../views/ButtonAndIcons.vue')
    },
    {
        path: '/BreakPointsAndVisibility',
        name: 'ButtonAndIcon',
        component: () => import('../views/BreakpointsAndVisibility.vue')
    },
    {
        path: '/todo',
        name: 'todo',
        component: () => import('../views/Todo/Dashboard'),
    }
]

export default routes