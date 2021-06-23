<template>
  <div>
     <div class="wrapper">
    <nav id="sidebar">

        <ul class="list-unstyled components">
            <p>Evence Telecom</p>
            <li>
                <a to="/chat" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                  <i class="fas fa-tachometer-alt"> </i> Dashboard
                </a>

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
                <a to="#" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                  <i class="fas fa-sitemap"> </i> Pabx
                </a>
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
                <a to="/chat"><i class="fas fa-user">
                  </i>  Callcenter
                </a>
            </li>
              <li>
                <a to="/crm" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                  <i class="fas fa-archive"></i>  CRM
                </a>
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
                <a to="#" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"> 
                  <i class="fas fa-list"></i> Discador
                </a>
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
                <a to="/chat" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                  <i class="fas fa-comments"></i> Chat
                </a>
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
                <a to="#" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"> 
                  <i class="fab fa-whatsapp"></i> Whatsapp
                </a>
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
                <a to="#" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"> 
                  <i class="fas fa-chart-line"></i> Relatórios
                </a>
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
                <a to="#"> 
                  <i class="fas fa-cog"></i> Configurações
                </a>
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