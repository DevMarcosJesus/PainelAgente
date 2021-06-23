<template>
    <div>
        <Navbar/>
        <Sidebar/>
        <Chat/>
        <router-view></router-view>
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