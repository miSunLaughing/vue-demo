import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../APP.vue';


Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        component: App ,
        children: [
            {
                path: 'test',
                component: r => require.ensure([], () => r(require('../components/Test.vue')), 'home')   // 实现按需加载
            }

        ]
    }
];
const router = new VueRouter({

    routes
});
module.exports = router;