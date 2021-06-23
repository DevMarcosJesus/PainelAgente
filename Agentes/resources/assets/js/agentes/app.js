require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue';

import layoutWhatsapp from '../../css/whatsapp.css';
import sidebar from '../../css/sidebar.css';


import Template from './components/partials/Template.vue';
import Dashboard from '../views/Dashboard.vue';
import Pabx from '../views/Pabx.vue';
import Callcenter from '../views/Callcenter.vue';
import CRM from '../views/CRM.vue';
import Discador from '../views/Discador.vue';
import Chat from '../views/Chat.vue';
import Whatsapp from '../views/Whatsapp.vue';
import Relatorios from '../views/Relatorios.vue';
import Config from '../views/Configuracoes.vue';

Vue.component('template-vue', Template);
Vue.component('dashboard-component', Dashboard);
Vue.component('pabx-component', Pabx);
Vue.component('callcenter-component', Callcenter);
Vue.component('crm-component', CRM);
Vue.component('discador-component', Discador);
Vue.component('chat-component', Chat);
Vue.component('whatsapp-component', Whatsapp);
Vue.component('relatorio-component', Relatorios);
Vue.component('config-component', Config);

const app = new Vue({
    el: '#app',
    layoutWhatsapp,
    sidebar,
});
