import { createWebHashHistory, createRouter, createWebHistory } from "vue-router"

import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import LogOut from './components/LogOut.vue'


const routes = [
    { name: 'Login', path: '/login', component: Login },
    { name: 'Signup', path: '/signup', component: Signup },
    { name: 'LogOut', path: '/logout', component: LogOut },
    { name: 'Home', path: '/', component: Home },
    { name: 'About', path: '/about', component: About },
    { name: 'Contact', path: '/contact', component: Contact }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;