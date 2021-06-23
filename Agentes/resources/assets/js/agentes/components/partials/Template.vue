<template>
    <div id="app">
        <Navbar/>
        <Sidebar/>
        <Chat/>

    <div>
        <router-view/>
   </div>

    </div>
</template>

<script>

import Navbar from './Navbar.vue';
import Sidebar from './Sidebar.vue';
import Chat from '../../../views/Chat.vue';

export default {
  components:{
      Navbar,
      Sidebar,
      Chat,
  },

  data: () => ({

  }),

  beforeCreate() {

  },

  created() {

  },

  methods:{

  },

  mounted() {

  },

  updated() {

  }
}
</script>

<style>

</style>
