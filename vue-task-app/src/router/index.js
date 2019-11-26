import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode:'history',
    routes: [

        {
            path: '/addTask',
            name: 'AddTask',
            component: () => import('../components/AddTask.vue')
        },
        {
            path: '/showTasks',
            name: 'ShowTasks',
            component: () => import('../components/ShowTasks.vue')
        }
    ]
})