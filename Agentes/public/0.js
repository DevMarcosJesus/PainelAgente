(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Chat.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/Chat.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      ramalAgent: null,
      statusAgent: null,
      numberAgent: null,
      nameAgent: null,
      statusOnOff: false,
      sendMessage: null,
      contact: [{
        name: 'Marcos'
      }, {
        name: 'Gian'
      }, {
        name: 'Junior'
      }, {
        name: 'Agente Teste'
      }, {
        name: 'Agente Teste 2'
      }, {
        name: 'Cristiano Ronaldo'
      }, {
        name: 'Ronaldo Fenomeno'
      }, {
        name: 'Messi'
      }, {
        name: 'Balotelli'
      }],
      newContact: [{
        name: 'Neymar'
      }, {
        name: 'Pitter Cech'
      }, {
        name: 'Imbbappe'
      }, {
        name: 'Ronaldinho Gaucho'
      }, {
        name: 'Quadrado'
      }, {
        name: 'James Rodriguez'
      }]
    };
  },
  created: function created() {},
  methods: {},
  mounted: function mounted() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".heading-compose").click(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".side-two").css({
          "left": "0"
        });
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".newMessage-back").click(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".side-two").css({
          "left": "-100%"
        });
      });
    });
  },
  update: function update() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Chat.vue?vue&type=template&id=429c24aa&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/Chat.vue?vue&type=template&id=429c24aa& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("link", {
      attrs: {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      }
    }),
    _vm._v(" "),
    _c("div", { staticClass: "container-sm app" }, [
      _c("div", { staticClass: "row app-one" }, [
        _c("div", { staticClass: "col-sm-4 side " }, [
          _c("div", { staticClass: "side-one " }, [
            _vm._m(0),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row sideBar" },
              _vm._l(_vm.contact, function(yourContact) {
                return _c(
                  "div",
                  { key: yourContact.id, staticClass: "row sideBar-body" },
                  [
                    _c("div", {
                      staticClass: "col-sm-3 col-xs-3 sideBar-avatar"
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-9 col-xs-9 sideBar-main" },
                      [
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-sm-8 col-xs-8 sideBar-name" },
                            [
                              _c("span", { staticClass: "name-meta" }, [
                                _c("strong", [_vm._v(_vm._s(yourContact.name))])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _vm._m(2, true)
                        ])
                      ]
                    )
                  ]
                )
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "side-two" }, [
            _vm._m(3),
            _vm._v(" "),
            _vm._m(4),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row compose-sideBar" },
              _vm._l(_vm.newContact, function(addContact) {
                return _c(
                  "div",
                  { key: addContact.id, staticClass: "row sideBar-body" },
                  [
                    _c("div", {
                      staticClass: "col-sm-3 col-xs-3 sideBar-avatar"
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-9 col-xs-9 sideBar-main" },
                      [
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-sm-8 col-xs-8 sideBar-name" },
                            [
                              _c("span", { staticClass: "name-meta" }, [
                                _c("strong", [_vm._v(_vm._s(addContact.name))])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _vm._m(5, true)
                        ])
                      ]
                    )
                  ]
                )
              }),
              0
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-8 conversation" }, [
          _c("div", { staticClass: "row heading" }, [
            _vm._m(6),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-9 col-xs-8 heading-name" }, [
              _c(
                "a",
                {
                  staticClass: "heading-name-meta",
                  staticStyle: { "text-decoration": "none" }
                },
                [_vm._v(" Marcos Jesus")]
              ),
              _vm._v(" "),
              _vm.statusOnOff
                ? _c("span", { staticClass: "heading-online" }, [
                    _vm._v(" Online ")
                  ])
                : _c("span", { staticClass: "heading-offline" }, [
                    _vm._v(" Visto por último às 12:45 ")
                  ])
            ]),
            _vm._v(" "),
            _vm._m(7)
          ]),
          _vm._v(" "),
          _vm._m(8),
          _vm._v(" "),
          _vm._m(9)
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row heading" }, [
      _c("div", { staticClass: "col-sm-8 col-xs-2 heading-avatar" }, [
        _c("div", { staticClass: "heading-avatar-icon" }, [
          _c("i", { staticClass: "fab fa-whatsapp" })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-1 col-xs-1  heading-dot  pull-right" }, [
        _c("i", {
          staticClass: "fa fa-ellipsis-v fa-2x  pull-right",
          attrs: { "aria-hidden": "true" }
        })
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-sm-2 col-xs-2 heading-compose  pull-right" },
        [
          _c("i", {
            staticClass: "fa fa-comments fa-2x  pull-right",
            attrs: { "aria-hidden": "true" }
          })
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row searchBox" }, [
      _c("div", { staticClass: "col-sm-12 searchBox-inner" }, [
        _c("div", { staticClass: "form-group has-feedback" }, [
          _c("input", {
            staticClass: "form-control",
            attrs: {
              id: "searchText",
              type: "text",
              name: "searchText",
              placeholder: "Procurar conversar"
            }
          }),
          _vm._v(" "),
          _c("span", {
            staticClass: "glyphicon glyphicon-search form-control-feedback"
          })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-sm-4 col-xs-4 pull-right sideBar-time" },
      [
        _c("span", { staticClass: "time-meta pull-right" }, [
          _vm._v("18:18\n                    ")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row newMessage-heading" }, [
      _c("div", { staticClass: "row newMessage-main" }, [
        _c("div", { staticClass: "col-sm-2 col-xs-2 newMessage-back" }, [
          _c("i", {
            staticClass: "fa fa-arrow-left",
            attrs: { "aria-hidden": "true" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-8 col-xs-10 newMessage-title" }, [
          _vm._v("\n                  Nova conversa\n                ")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row composeBox" }, [
      _c("div", { staticClass: "col-sm-12 composeBox-inner" }, [
        _c("div", { staticClass: "form-group has-feedback" }, [
          _c("input", {
            staticClass: "form-control",
            attrs: {
              id: "composeText",
              type: "text",
              name: "searchText",
              placeholder: "Nova conversa"
            }
          }),
          _vm._v(" "),
          _c("span", {
            staticClass: "glyphicon glyphicon-search form-control-feedback"
          })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-sm-4 col-xs-4 pull-right sideBar-time" },
      [_c("span", { staticClass: "time-meta pull-right" }, [_vm._v(" 18:18 ")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-sm-2 col-md-1 col-xs-3 heading-avatar" },
      [_c("div", { staticClass: "heading-avatar-icon" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-sm-1 col-xs-1  heading-dot pull-right" },
      [
        _c("i", {
          staticClass: "fa fa-ellipsis-v fa-2x  pull-right",
          attrs: { "aria-hidden": "true" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "row message", attrs: { id: "conversation" } },
      [
        _c("div", { staticClass: "row message-previous" }, [
          _c("div", { staticClass: "col-sm-12 previous" }, [
            _c("span", [_vm._v(" Recentes ")])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row message-body" }, [
          _c("div", { staticClass: "col-sm-12 message-main-receiver" }, [
            _c("div", { staticClass: "receiver" }, [
              _c("div", { staticClass: "message-text" }, [
                _vm._v(
                  "\n                  That's right! for problem a solution always! Software Engineer future.\n                  That's right! for problem a solution always! Software Engineer future.\n                  That's right! for problem a solution always! Software Engineer future.\n                  That's right! for problem a solution always! Software Engineer future.\n                  "
                )
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "message-time pull-right" }, [
                _vm._v("\n                    agora\n                  ")
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row message-body" }, [
          _c("div", { staticClass: "col-sm-12 message-main-sender" }, [
            _c("div", { staticClass: "sender" }, [
              _c("div", { staticClass: "message-text" }, [
                _vm._v(
                  "\n                      Quem busca realiza, pra cima se existe um problema existe uma solução!\n                      Quem busca realiza, pra cima se existe um problema existe uma solução!\n                      Quem busca realiza, pra cima se existe um problema existe uma solução!\n                      Quem busca realiza, pra cima se existe um problema existe uma solução!\n                      Quem busca realiza, pra cima se existe um problema existe uma solução!\n                      Quem busca realiza, pra cima se existe um problema existe uma solução!\n                      Quem busca realiza, pra cima se existe um problema existe uma solução!\n                      Quem busca realiza, pra cima se existe um problema existe uma solução!\n                      Quem busca realiza, pra cima se existe um problema existe uma solução!\n                      Quem busca realiza, pra cima se existe um problema existe uma solução!\n                      Quem busca realiza, pra cima se existe um problema existe uma solução!\n                  "
                )
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "message-time pull-right" }, [
                _vm._v("\n                    agora\n                  ")
              ])
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row reply" }, [
      _c("div", { staticClass: "col-sm-1 col-xs-1 reply-emojis" }, [
        _c("i", { staticClass: "fa fa-smile-o fa-2x" })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-9 col-xs-9 reply-main" }, [
        _c("textarea", {
          staticClass: "form-control",
          attrs: { rows: "1", id: "comment" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-1 col-xs-1 reply-recording" }, [
        _c("i", {
          staticClass: "fa fa-microphone fa-2x",
          attrs: { "aria-hidden": "true" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-1 col-xs-1 reply-send" }, [
        _c("i", {
          staticClass: "fa fa-send fa-2x",
          attrs: { "aria-hidden": "true" }
        })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/views/Chat.vue":
/*!********************************************!*\
  !*** ./resources/assets/js/views/Chat.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chat_vue_vue_type_template_id_429c24aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chat.vue?vue&type=template&id=429c24aa& */ "./resources/assets/js/views/Chat.vue?vue&type=template&id=429c24aa&");
/* harmony import */ var _Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chat.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/Chat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Chat_vue_vue_type_template_id_429c24aa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Chat_vue_vue_type_template_id_429c24aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/Chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/Chat.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/views/Chat.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Chat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/Chat.vue?vue&type=template&id=429c24aa&":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/views/Chat.vue?vue&type=template&id=429c24aa& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_429c24aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=template&id=429c24aa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Chat.vue?vue&type=template&id=429c24aa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_429c24aa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_429c24aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);