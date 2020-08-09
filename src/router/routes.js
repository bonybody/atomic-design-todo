
const routes = [
    {
        path: '/',
        name: 'Home',
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
    }
]

export default routes