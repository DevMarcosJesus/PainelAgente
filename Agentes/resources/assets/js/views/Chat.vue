<template>
  <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <div class="container-sm app">
        <div class="row app-one">
          <div class="col-sm-4 side ">
            <div class="side-one ">
              <div class="row heading"> 
                <div class="col-sm-8 col-xs-2 heading-avatar">
                  <div class="heading-avatar-icon">
                    <i class="fab fa-whatsapp"></i>
                  </div>
                </div>
                <div class="col-sm-1 col-xs-1  heading-dot  pull-right">
                  <i class="fa fa-ellipsis-v fa-2x  pull-right" aria-hidden="true"></i>
                </div>
                <div class="col-sm-2 col-xs-2 heading-compose  pull-right">
                  <i class="fa fa-comments fa-2x  pull-right" aria-hidden="true"></i>
                </div>
              </div>

              <div class="row searchBox">
                <div class="col-sm-12 searchBox-inner">
                  <div class="form-group has-feedback">
                    <input id="searchText" type="text" class="form-control" name="searchText" placeholder="Procurar conversar">
                    <span class="glyphicon glyphicon-search form-control-feedback"></span>
                  </div>
                </div>
              </div>

              <div class="row sideBar">
                <div class="row sideBar-body" v-for="yourContact in contact" v-bind:key="yourContact.id">
                  <div class="col-sm-3 col-xs-3 sideBar-avatar">
                  </div>
                  <div class="col-sm-9 col-xs-9 sideBar-main">
                    <div class="row">
                      <div class="col-sm-8 col-xs-8 sideBar-name">
                        <span class="name-meta"> <strong>{{ yourContact.name }}</strong>
                      </span>
                      </div>
                      <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                        <span class="time-meta pull-right">18:18
                      </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="side-two">
              <div class="row newMessage-heading">
                <div class="row newMessage-main">
                  <div class="col-sm-2 col-xs-2 newMessage-back">
                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                  </div>
                  <div class="col-sm-8 col-xs-10 newMessage-title">
                    Nova conversa
                  </div>
                </div>
              </div>

              <div class="row composeBox">
                <div class="col-sm-12 composeBox-inner">
                  <div class="form-group has-feedback">
                    <input id="composeText" type="text" class="form-control" name="searchText" placeholder="Nova conversa">
                    <span class="glyphicon glyphicon-search form-control-feedback"></span>
                  </div>
                </div>
              </div>

              <div class="row compose-sideBar">
                <div class="row sideBar-body" v-for="addContact in newContact" :key="addContact.id">
                  <div class="col-sm-3 col-xs-3 sideBar-avatar">
                  </div>
                  <div class="col-sm-9 col-xs-9 sideBar-main">
                    <div class="row">
                      <div class="col-sm-8 col-xs-8 sideBar-name">
                        <span class="name-meta"> <strong>{{ addContact.name }}</strong>
                      </span>
                      </div>
                      <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                        <span class="time-meta pull-right"> 18:18 </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-8 conversation">
            <div class="row heading">
              <div class="col-sm-2 col-md-1 col-xs-3 heading-avatar">
                <div class="heading-avatar-icon"></div>
              </div>
              <div class="col-sm-9 col-xs-8 heading-name">
                <a class="heading-name-meta" style="text-decoration:none;"> Marcos Jesus</a>
                <span class="heading-online" v-if="statusOnOff"> Online </span>
                <span class="heading-offline" v-else> Visto por último às 12:45 </span>
              </div>
              <div class="col-sm-1 col-xs-1  heading-dot pull-right">
                <i class="fa fa-ellipsis-v fa-2x  pull-right" aria-hidden="true"></i>
              </div>
            </div>

            <div class="row message" id="conversation">
              <div class="row message-previous">
                <div class="col-sm-12 previous">
                  <span> Recentes </span>
                </div>
              </div>

              <div class="row message-body">
                <div class="col-sm-12 message-main-receiver">
                  <div class="receiver">
                    <div class="message-text">
                    That's right! for problem a solution always! Software Engineer future.
                    That's right! for problem a solution always! Software Engineer future.
                    That's right! for problem a solution always! Software Engineer future.
                    That's right! for problem a solution always! Software Engineer future.
                    </div>
                    <span class="message-time pull-right">
                      agora
                    </span>
                  </div>
                </div>
              </div>

              <div class="row message-body">
                <div class="col-sm-12 message-main-sender">
                  <div class="sender">
                    <div class="message-text">
                        Quem busca realiza, pra cima se existe um problema existe uma solução!
                        Quem busca realiza, pra cima se existe um problema existe uma solução!
                        Quem busca realiza, pra cima se existe um problema existe uma solução!
                        Quem busca realiza, pra cima se existe um problema existe uma solução!
                        Quem busca realiza, pra cima se existe um problema existe uma solução!
                        Quem busca realiza, pra cima se existe um problema existe uma solução!
                        Quem busca realiza, pra cima se existe um problema existe uma solução!
                        Quem busca realiza, pra cima se existe um problema existe uma solução!
                        Quem busca realiza, pra cima se existe um problema existe uma solução!
                        Quem busca realiza, pra cima se existe um problema existe uma solução!
                        Quem busca realiza, pra cima se existe um problema existe uma solução!
                    </div>
                    <span class="message-time pull-right">
                      agora
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="row reply">
              <div class="col-sm-1 col-xs-1 reply-emojis">
                <i class="fa fa-smile-o fa-2x"></i>
              </div>
              <div class="col-sm-9 col-xs-9 reply-main">
                <textarea class="form-control" rows="1" id="comment"></textarea>
              </div>
              <div class="col-sm-1 col-xs-1 reply-recording">
                <i class="fa fa-microphone fa-2x" aria-hidden="true"></i>
              </div>
              <div class="col-sm-1 col-xs-1 reply-send">
                <i class="fa fa-send fa-2x" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>


  </div>
</template>

<script>
import $ from "jquery";
export default {
  components: {
  },
  data:() => ({
    ramalAgent: null,
    statusAgent: null,
    numberAgent: null,

    nameAgent:null,
    statusOnOff: false,

    sendMessage: null,

    contact: [
      { name: 'Marcos' },
      { name: 'Gian' },
      { name: 'Junior' },
      { name: 'Agente Teste' },
      { name: 'Agente Teste 2' },
      { name: 'Cristiano Ronaldo' },
      { name: 'Ronaldo Fenomeno' },
      { name: 'Messi' },
      { name: 'Balotelli' }
    ],

    newContact: [
      { name: 'Neymar' },
      { name: 'Pitter Cech' },
      { name: 'Imbbappe' },
      { name: 'Ronaldinho Gaucho' },
      { name: 'Quadrado' },
      { name: 'James Rodriguez' }
    ],

  }),

  created() {

  },

  methods: {
  
  },

  mounted() {

    $(function(){
      $(".heading-compose").click(function() {
        $(".side-two").css({
          "left": "0"
        });
      });
      
      $(".newMessage-back").click(function() {
        $(".side-two").css({
          "left": "-100%"
        });
      });
    });

  },

  update(){
    
  }

}
</script>

<style>

</style>