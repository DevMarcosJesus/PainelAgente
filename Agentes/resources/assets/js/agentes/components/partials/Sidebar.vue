<template>
  <div>
     <div class="wrapper">
    <nav id="sidebar">

        <ul class="list-unstyled components">
            <p>Evence Telecom</p>
            <li>
                <router-link to="/" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                  <i class="fas fa-tachometer-alt"> </i> Dashboard
                </router-link>

                <ul class="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <a href="#">Home 1</a>
                    </li>
                    <li>
                        <a href="#">Home 2</a>
                    </li>
                    <li>
                        <a href="#">Home 3</a>
                    </li>
                </ul>
            </li>
              <li>
                <router-link to="#" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                  <i class="fas fa-sitemap"> </i> Pabx
                </router-link>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                    <li>
                        <a href="#">Page 1</a>
                    </li>
                    <li>
                        <a href="#">Page 2</a>
                    </li>
                    <li>
                        <a href="#">Page 3</a>
                    </li>
                </ul>
            </li>
            <li>
                <router-link to="/chat"><i class="fas fa-user">
                  </i>  Callcenter
                </router-link>
            </li>
              <li>
                <router-link to="/crm" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                  <i class="fas fa-archive"></i>  CRM
                </router-link>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                    <li>
                        <a href="#">Page 1</a>
                    </li>
                    <li>
                        <a href="#">Page 2</a>
                    </li>
                    <li>
                        <a href="#">Page 3</a>
                    </li>
                </ul>
            </li>
             <li>
                <router-link to="#" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"> 
                  <i class="fas fa-list"></i> Discador
                </router-link>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                    <li>
                        <a href="#">Page 1</a>
                    </li>
                    <li>
                        <a href="#">Page 2</a>
                    </li>
                    <li>
                        <a href="#">Page 3</a>
                    </li>
                </ul>
            </li>
             <li>
                <router-link to="/chat" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                  <i class="fas fa-comments"></i> Chat
                </router-link>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                    <li>
                        <a href="#">Page 1</a>
                    </li>
                    <li>
                        <a href="#">Page 2</a>
                    </li>
                    <li>
                        <a href="#">Page 3</a>
                    </li>
                </ul>
            </li>
             <li>
                <router-link to="#" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"> 
                  <i class="fab fa-whatsapp"></i> Whatsapp
                </router-link>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                    <li>
                        <a href="#">Page 1</a>
                    </li>
                    <li>
                        <a href="#">Home 3</a>
                        <a href="#">Page 2</a>
                    </li>
                    <li>
                        <a href="#">Page 3</a>
                    </li>
                </ul>
            </li>
             <li>
                <router-link to="#" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"> 
                  <i class="fas fa-chart-line"></i> Relatórios
                </router-link>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                    <li>
                        <a href="#">Page 1</a>
                    </li>
                    <li>
                        <a href="#">Page 2</a>
                    </li>
                    <li>
                        <a href="#">Page 3</a>
                    </li>
                </ul>
            </li>
             <li>
                <router-link to="#"> 
                  <i class="fas fa-cog"></i> Configurações
                </router-link>
            </li>
        </ul>
    </nav>

</div>
  </div>
</template>

<script>
export default {
  components: {

  }, 

  data: () => ({

  }),

  methods: {

  },

  mounted(){

  }


}
</script>

<style>

</style>