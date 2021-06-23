
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue';

import layoutWhatsapp from '../../css/whatsapp.css';
import sidebar from '../../css/sidebar.css';

import Template from './components/partials/Template.vue';
import Chat from '../views/Chat.vue';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('template-vue', Template);
Vue.component('chat-component', Chat);


const app = new Vue({
    el: '#app',
    layoutWhatsapp,
    sidebar,
});
