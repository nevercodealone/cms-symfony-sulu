(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/website/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!************************************************************************************************************************!*\
  !*** ./assets/website/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/website/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/website/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/website/controllers.json":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/website/controllers.json ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _symfony_ux_live_component_dist_live_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/ux-live-component/dist/live_controller.js */ "./vendor/symfony/ux-live-component/assets/dist/live_controller.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'live': _symfony_ux_live_component_dist_live_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"],
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/website/controllers/hello_controller.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/website/controllers/hello_controller.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/website/app.js":
/*!*******************************!*\
  !*** ./assets/website/app.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/app.css */ "./assets/website/styles/app.css");
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bootstrap.js */ "./assets/website/bootstrap.js");
/* harmony import */ var flowbite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flowbite */ "./node_modules/flowbite/lib/esm/index.js");
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/module.esm.js");






window.Alpine = alpinejs__WEBPACK_IMPORTED_MODULE_5__["default"];
alpinejs__WEBPACK_IMPORTED_MODULE_5__["default"].data("clipboardBlock", function () {
  return {
    copied: false,
    copyCode: function copyCode() {
      var _this = this;
      var codeBlock = this.$refs.codeBlock;
      var codeText = codeBlock.textContent;
      navigator.clipboard.writeText(codeText).then(function () {
        _this.copied = true;
        setTimeout(function () {
          _this.copied = false;
        }, 2000);
      })["catch"](function (err) {
        console.error("Failed to copy text: ", err);
      });
    }
  };
});
alpinejs__WEBPACK_IMPORTED_MODULE_5__["default"].start();
document.addEventListener('input', function (e) {
  if (e.target.id === 'contact-message') {
    var len = e.target.value.length;
    var max = parseInt(e.target.getAttribute('maxlength') || '0', 10);
    var counter = document.getElementById('msg-counter');
    if (counter) {
      counter.textContent = len + ' / ' + max;
      counter.className = len > max ? 'text-red-500' : len > max * 0.83 ? 'text-amber-500' : 'text-gray-400';
    }
  }
});
document.addEventListener('blur', function (e) {
  if (e.target.id === 'contact-email' && e.target.value.length > 0) {
    var hint = document.getElementById('email-hint');
    if (hint) {
      hint.classList.toggle('hidden', e.target.checkValidity());
    }
  }
}, true);
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    (0,flowbite__WEBPACK_IMPORTED_MODULE_4__.initCarousels)();
  }, 100);
});

/***/ }),

/***/ "./assets/website/bootstrap.js":
/*!*************************************!*\
  !*** ./assets/website/bootstrap.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/website/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/website/styles/app.css":
/*!***************************************!*\
  !*** ./assets/website/styles/app.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./vendor/symfony/ux-live-component/assets/dist/live_controller.js":
/*!*************************************************************************!*\
  !*** ./vendor/symfony/ux-live-component/assets/dist/live_controller.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ Component),
/* harmony export */   "default": () => (/* binding */ LiveControllerDefault),
/* harmony export */   "getComponent": () => (/* binding */ getComponent)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! core-js/modules/es.reflect.get.js */ "./node_modules/core-js/modules/es.reflect.get.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! core-js/modules/es.number.parse-int.js */ "./node_modules/core-js/modules/es.number.parse-int.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_parse_float_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! core-js/modules/es.number.parse-float.js */ "./node_modules/core-js/modules/es.number.parse-float.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



































































function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var BackendRequest_default = /*#__PURE__*/function () {
  function BackendRequest_default(promise, actions, updateModels) {
    var _this = this;
    _classCallCheck(this, BackendRequest_default);
    this.isResolved = false;
    this.promise = promise;
    this.promise.then(function (response) {
      _this.isResolved = true;
      return response;
    });
    this.actions = actions;
    this.updatedModels = updateModels;
  }
  _createClass(BackendRequest_default, [{
    key: "containsOneOfActions",
    value: function containsOneOfActions(targetedActions) {
      return this.actions.filter(function (action) {
        return targetedActions.includes(action);
      }).length > 0;
    }
  }, {
    key: "areAnyModelsUpdated",
    value: function areAnyModelsUpdated(targetedModels) {
      return this.updatedModels.filter(function (model) {
        return targetedModels.includes(model);
      }).length > 0;
    }
  }]);
  return BackendRequest_default;
}();
var RequestBuilder_default = /*#__PURE__*/function () {
  function RequestBuilder_default(url) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "post";
    var credentials = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "same-origin";
    _classCallCheck(this, RequestBuilder_default);
    this.url = url;
    this.method = method;
    this.credentials = credentials;
  }
  _createClass(RequestBuilder_default, [{
    key: "buildRequest",
    value: function buildRequest(props, actions, updated, children, updatedPropsFromParent, files) {
      var splitUrl = this.url.split("?");
      var _splitUrl = _slicedToArray(splitUrl, 1),
        url = _splitUrl[0];
      var _splitUrl2 = _slicedToArray(splitUrl, 2),
        queryString = _splitUrl2[1];
      var params = new URLSearchParams(queryString || "");
      var fetchOptions = {};
      fetchOptions.credentials = this.credentials;
      fetchOptions.headers = {
        Accept: "application/vnd.live-component+html",
        "X-Requested-With": "XMLHttpRequest",
        "X-Live-Url": window.location.pathname + window.location.search
      };
      var totalFiles = Object.entries(files).reduce(function (total, current) {
        return total + current.length;
      }, 0);
      var hasFingerprints = Object.keys(children).length > 0;
      if (actions.length === 0 && totalFiles === 0 && this.method === "get" && this.willDataFitInUrl(JSON.stringify(props), JSON.stringify(updated), params, JSON.stringify(children), JSON.stringify(updatedPropsFromParent))) {
        params.set("props", JSON.stringify(props));
        params.set("updated", JSON.stringify(updated));
        if (Object.keys(updatedPropsFromParent).length > 0) params.set("propsFromParent", JSON.stringify(updatedPropsFromParent));
        if (hasFingerprints) params.set("children", JSON.stringify(children));
        fetchOptions.method = "GET";
      } else {
        fetchOptions.method = "POST";
        var requestData = {
          props: props,
          updated: updated
        };
        if (Object.keys(updatedPropsFromParent).length > 0) requestData.propsFromParent = updatedPropsFromParent;
        if (hasFingerprints) requestData.children = children;
        if (actions.length > 0) if (actions.length === 1) {
          requestData.args = actions[0].args;
          url += "/".concat(encodeURIComponent(actions[0].name));
        } else {
          url += "/_batch";
          requestData.actions = actions;
        }
        var formData = new FormData();
        formData.append("data", JSON.stringify(requestData));
        for (var _i2 = 0, _Object$entries = Object.entries(files); _i2 < _Object$entries.length; _i2++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];
          var length = value.length;
          for (var i = 0; i < length; ++i) formData.append(key, value[i]);
        }
        fetchOptions.body = formData;
      }
      var paramsString = params.toString();
      return {
        url: "".concat(url).concat(paramsString.length > 0 ? "?".concat(paramsString) : ""),
        fetchOptions: fetchOptions
      };
    }
  }, {
    key: "willDataFitInUrl",
    value: function willDataFitInUrl(propsJson, updatedJson, params, childrenJson, propsFromParentJson) {
      return (new URLSearchParams(propsJson + updatedJson + childrenJson + propsFromParentJson).toString() + params.toString()).length < 1500;
    }
  }]);
  return RequestBuilder_default;
}();
var Backend_default = /*#__PURE__*/function () {
  function Backend_default(url) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "post";
    var credentials = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "same-origin";
    _classCallCheck(this, Backend_default);
    this.requestBuilder = new RequestBuilder_default(url, method, credentials);
  }
  _createClass(Backend_default, [{
    key: "makeRequest",
    value: function makeRequest(props, actions, updated, children, updatedPropsFromParent, files) {
      var _this$requestBuilder$ = this.requestBuilder.buildRequest(props, actions, updated, children, updatedPropsFromParent, files),
        url = _this$requestBuilder$.url,
        fetchOptions = _this$requestBuilder$.fetchOptions;
      return new BackendRequest_default(fetch(url, fetchOptions), actions.map(function (backendAction) {
        return backendAction.name;
      }), Object.keys(updated));
    }
  }]);
  return Backend_default;
}();
var BackendResponse_default = /*#__PURE__*/function () {
  function BackendResponse_default(response) {
    _classCallCheck(this, BackendResponse_default);
    this.response = response;
  }
  _createClass(BackendResponse_default, [{
    key: "getBody",
    value: function () {
      var _getBody = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (this.body) {
                _context.next = 4;
                break;
              }
              _context.next = 3;
              return this.response.text();
            case 3:
              this.body = _context.sent;
            case 4:
              return _context.abrupt("return", this.body);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getBody() {
        return _getBody.apply(this, arguments);
      }
      return getBody;
    }()
  }, {
    key: "getLiveUrl",
    value: function getLiveUrl() {
      if (void 0 === this.liveUrl) this.liveUrl = this.response.headers.get("X-Live-Url");
      return this.liveUrl;
    }
  }]);
  return BackendResponse_default;
}();
function getElementAsTagText(element) {
  return element.innerHTML ? element.outerHTML.slice(0, element.outerHTML.indexOf(element.innerHTML)) : element.outerHTML;
}
var componentMapByElement = /* @__PURE__ */new WeakMap();
var componentMapByComponent = /* @__PURE__ */new Map();
var registerComponent = function registerComponent(component) {
  componentMapByElement.set(component.element, component);
  componentMapByComponent.set(component, component.name);
};
var unregisterComponent = function unregisterComponent(component) {
  componentMapByElement["delete"](component.element);
  componentMapByComponent["delete"](component);
};
var getComponent = function getComponent(element) {
  return new Promise(function (resolve, reject) {
    var count = 0;
    var maxCount = 10;
    var interval = setInterval(function () {
      var component = componentMapByElement.get(element);
      if (component) {
        clearInterval(interval);
        resolve(component);
      }
      count++;
      if (count > maxCount) {
        clearInterval(interval);
        reject( /* @__PURE__ */new Error("Component not found for element ".concat(getElementAsTagText(element))));
      }
    }, 5);
  });
};
var findComponents = function findComponents(currentComponent, onlyParents, onlyMatchName) {
  var components = [];
  componentMapByComponent.forEach(function (componentName, component) {
    if (onlyParents && (currentComponent === component || !component.element.contains(currentComponent.element))) return;
    if (onlyMatchName && componentName !== onlyMatchName) return;
    components.push(component);
  });
  return components;
};
var findChildren = function findChildren(currentComponent) {
  var children = [];
  componentMapByComponent.forEach(function (componentName, component) {
    if (currentComponent === component) return;
    if (!currentComponent.element.contains(component.element)) return;
    var foundChildComponent = false;
    componentMapByComponent.forEach(function (childComponentName, childComponent) {
      if (foundChildComponent) return;
      if (childComponent === component) return;
      if (childComponent.element.contains(component.element)) foundChildComponent = true;
    });
    children.push(component);
  });
  return children;
};
var findParent = function findParent(currentComponent) {
  var parentElement = currentComponent.element.parentElement;
  while (parentElement) {
    var component = componentMapByElement.get(parentElement);
    if (component) return component;
    parentElement = parentElement.parentElement;
  }
  return null;
};
function parseDirectives(content) {
  var directives = [];
  if (!content) return directives;
  var currentActionName = "";
  var currentArgumentValue = "";
  var currentArguments = [];
  var currentModifiers = [];
  var state = "action";
  var getLastActionName = function getLastActionName() {
    if (currentActionName) return currentActionName;
    if (directives.length === 0) throw new Error("Could not find any directives");
    return directives[directives.length - 1].action;
  };
  var pushInstruction = function pushInstruction() {
    directives.push({
      action: currentActionName,
      args: currentArguments,
      modifiers: currentModifiers,
      getString: function getString() {
        return content;
      }
    });
    currentActionName = "";
    currentArgumentValue = "";
    currentArguments = [];
    currentModifiers = [];
    state = "action";
  };
  var pushArgument = function pushArgument() {
    currentArguments.push(currentArgumentValue.trim());
    currentArgumentValue = "";
  };
  var pushModifier = function pushModifier() {
    if (currentArguments.length > 1) throw new Error("The modifier \"".concat(currentActionName, "()\" does not support multiple arguments."));
    currentModifiers.push({
      name: currentActionName,
      value: currentArguments.length > 0 ? currentArguments[0] : null
    });
    currentActionName = "";
    currentArguments = [];
    state = "action";
  };
  for (var i = 0; i < content.length; i++) {
    var _char = content[i];
    switch (state) {
      case "action":
        if (_char === "(") {
          state = "arguments";
          break;
        }
        if (_char === " ") {
          if (currentActionName) pushInstruction();
          break;
        }
        if (_char === "|") {
          pushModifier();
          break;
        }
        currentActionName += _char;
        break;
      case "arguments":
        if (_char === ")") {
          pushArgument();
          state = "after_arguments";
          break;
        }
        if (_char === ",") {
          pushArgument();
          break;
        }
        currentArgumentValue += _char;
        break;
      case "after_arguments":
        if (_char === "|") {
          pushModifier();
          break;
        }
        if (_char !== " ") throw new Error("Missing space after ".concat(getLastActionName(), "()"));
        pushInstruction();
        break;
    }
  }
  switch (state) {
    case "action":
    case "after_arguments":
      if (currentActionName) pushInstruction();
      break;
    default:
      throw new Error("Did you forget to add a closing \")\" after \"".concat(currentActionName, "\"?"));
  }
  return directives;
}
function combineSpacedArray(parts) {
  var finalParts = [];
  parts.forEach(function (part) {
    finalParts.push.apply(finalParts, _toConsumableArray(trimAll(part).split(" ")));
  });
  return finalParts;
}
function trimAll(str) {
  return str.replace(/[\s]+/g, " ").trim();
}
function normalizeModelName(model) {
  return model.replace(/\[]$/, "").split("[").map(function (s) {
    return s.replace("]", "");
  }).join(".");
}
function getValueFromElement(element, valueStore) {
  if (element instanceof HTMLInputElement) {
    if (element.type === "checkbox") {
      var modelNameData = getModelDirectiveFromElement(element, false);
      if (modelNameData !== null) {
        var modelValue = valueStore.get(modelNameData.action);
        if (Array.isArray(modelValue)) return getMultipleCheckboxValue(element, modelValue);
        if (Object(modelValue) === modelValue) return getMultipleCheckboxValue(element, Object.values(modelValue));
      }
      if (element.hasAttribute("value")) return element.checked ? element.getAttribute("value") : null;
      return element.checked;
    }
    return inputValue(element);
  }
  if (element instanceof HTMLSelectElement) {
    if (element.multiple) return Array.from(element.selectedOptions).map(function (el) {
      return el.value;
    });
    return element.value;
  }
  if (element.hasAttribute("data-value")) return element.dataset.value;
  if ("value" in element) return element.value;
  if (element.hasAttribute("value")) return element.getAttribute("value");
  return null;
}
function setValueOnElement(element, value) {
  if (element instanceof HTMLInputElement) {
    if (element.type === "file") return;
    if (element.type === "radio") {
      element.checked = element.value == value;
      return;
    }
    if (element.type === "checkbox") {
      if (Array.isArray(value)) element.checked = value.some(function (val) {
        return val == element.value;
      });else if (element.hasAttribute("value")) element.checked = element.value == value;else element.checked = value;
      return;
    }
  }
  if (element instanceof HTMLSelectElement) {
    var arrayWrappedValue = [].concat(value).map(function (value) {
      return "".concat(value);
    });
    Array.from(element.options).forEach(function (option) {
      option.selected = arrayWrappedValue.includes(option.value);
    });
    return;
  }
  value = value === void 0 ? "" : value;
  element.value = value;
}
function getAllModelDirectiveFromElements(element) {
  if (!element.dataset.model) return [];
  var directives = parseDirectives(element.dataset.model);
  directives.forEach(function (directive) {
    if (directive.args.length > 0) throw new Error("The data-model=\"".concat(element.dataset.model, "\" format is invalid: it does not support passing arguments to the model."));
    directive.action = normalizeModelName(directive.action);
  });
  return directives;
}
function getModelDirectiveFromElement(element) {
  var throwOnMissing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var dataModelDirectives = getAllModelDirectiveFromElements(element);
  if (dataModelDirectives.length > 0) return dataModelDirectives[0];
  if (element.getAttribute("name")) {
    var formElement = element.closest("form");
    if (formElement && "model" in formElement.dataset) {
      var directive = parseDirectives(formElement.dataset.model || "*")[0];
      if (directive.args.length > 0) throw new Error("The data-model=\"".concat(formElement.dataset.model, "\" format is invalid: it does not support passing arguments to the model."));
      directive.action = normalizeModelName(element.getAttribute("name"));
      return directive;
    }
  }
  if (!throwOnMissing) return null;
  throw new Error("Cannot determine the model name for \"".concat(getElementAsTagText(element), "\": the element must either have a \"data-model\" (or \"name\" attribute living inside a <form data-model=\"*\">)."));
}
function elementBelongsToThisComponent(element, component) {
  if (component.element === element) return true;
  if (!component.element.contains(element)) return false;
  return element.closest("[data-controller~=\"live\"]") === component.element;
}
function cloneHTMLElement(element) {
  var newElement = element.cloneNode(true);
  if (!(newElement instanceof HTMLElement)) throw new Error("Could not clone element");
  return newElement;
}
function htmlToElement(html) {
  var template = document.createElement("template");
  html = html.trim();
  template.innerHTML = html;
  if (template.content.childElementCount > 1) throw new Error("Component HTML contains ".concat(template.content.childElementCount, " elements, but only 1 root element is allowed."));
  var child = template.content.firstElementChild;
  if (!child) throw new Error("Child not found");
  if (!(child instanceof HTMLElement)) throw new Error("Created element is not an HTMLElement: ".concat(html.trim()));
  return child;
}
var getMultipleCheckboxValue = function getMultipleCheckboxValue(element, currentValues) {
  var finalValues = _toConsumableArray(currentValues);
  var value = inputValue(element);
  var index = currentValues.indexOf(value);
  if (element.checked) {
    if (index === -1) finalValues.push(value);
    return finalValues;
  }
  if (index > -1) finalValues.splice(index, 1);
  return finalValues;
};
var inputValue = function inputValue(element) {
  return element.dataset.value ? element.dataset.value : element.value;
};
function isTextualInputElement(el) {
  return el instanceof HTMLInputElement && ["text", "email", "password", "search", "tel", "url"].includes(el.type);
}
function isTextareaElement(el) {
  return el instanceof HTMLTextAreaElement;
}
function isNumericalInputElement(element) {
  return element instanceof HTMLInputElement && ["number", "range"].includes(element.type);
}
var HookManager_default = /*#__PURE__*/function () {
  function HookManager_default() {
    _classCallCheck(this, HookManager_default);
    this.hooks = /* @__PURE__ */new Map();
  }
  _createClass(HookManager_default, [{
    key: "register",
    value: function register(hookName, callback) {
      var hooks = this.hooks.get(hookName) || [];
      hooks.push(callback);
      this.hooks.set(hookName, hooks);
    }
  }, {
    key: "unregister",
    value: function unregister(hookName, callback) {
      var hooks = this.hooks.get(hookName) || [];
      var index = hooks.indexOf(callback);
      if (index === -1) return;
      hooks.splice(index, 1);
      this.hooks.set(hookName, hooks);
    }
  }, {
    key: "triggerHook",
    value: function triggerHook(hookName) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      (this.hooks.get(hookName) || []).forEach(function (callback) {
        callback.apply(void 0, args);
      });
    }
  }]);
  return HookManager_default;
}();
var Idiomorph = function () {
  "use strict";

  var EMPTY_SET = /* @__PURE__ */new Set();
  var defaults = {
    morphStyle: "outerHTML",
    callbacks: {
      beforeNodeAdded: noOp,
      afterNodeAdded: noOp,
      beforeNodeMorphed: noOp,
      afterNodeMorphed: noOp,
      beforeNodeRemoved: noOp,
      afterNodeRemoved: noOp,
      beforeAttributeUpdated: noOp
    },
    head: {
      style: "merge",
      shouldPreserve: function shouldPreserve(elt) {
        return elt.getAttribute("im-preserve") === "true";
      },
      shouldReAppend: function shouldReAppend(elt) {
        return elt.getAttribute("im-re-append") === "true";
      },
      shouldRemove: noOp,
      afterHeadMorphed: noOp
    }
  };
  function morph(oldNode, newContent) {
    var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (oldNode instanceof Document) oldNode = oldNode.documentElement;
    if (typeof newContent === "string") newContent = parseContent(newContent);
    var normalizedContent = normalizeContent(newContent);
    var ctx = createMorphContext(oldNode, normalizedContent, config);
    return morphNormalizedContent(oldNode, normalizedContent, ctx);
  }
  function morphNormalizedContent(oldNode, normalizedNewContent, ctx) {
    if (ctx.head.block) {
      var oldHead = oldNode.querySelector("head");
      var newHead = normalizedNewContent.querySelector("head");
      if (oldHead && newHead) {
        var promises = handleHeadElement(newHead, oldHead, ctx);
        Promise.all(promises).then(function () {
          morphNormalizedContent(oldNode, normalizedNewContent, Object.assign(ctx, {
            head: {
              block: false,
              ignore: true
            }
          }));
        });
        return;
      }
    }
    if (ctx.morphStyle === "innerHTML") {
      morphChildren(normalizedNewContent, oldNode, ctx);
      return oldNode.children;
    } else if (ctx.morphStyle === "outerHTML" || ctx.morphStyle == null) {
      var bestMatch = findBestNodeMatch(normalizedNewContent, oldNode, ctx);
      var previousSibling = bestMatch === null || bestMatch === void 0 ? void 0 : bestMatch.previousSibling;
      var nextSibling = bestMatch === null || bestMatch === void 0 ? void 0 : bestMatch.nextSibling;
      var morphedNode = morphOldNodeTo(oldNode, bestMatch, ctx);
      if (bestMatch) return insertSiblings(previousSibling, morphedNode, nextSibling);else return [];
    } else throw "Do not understand how to morph style " + ctx.morphStyle;
  }
  function ignoreValueOfActiveElement(possibleActiveElement, ctx) {
    return ctx.ignoreActiveValue && possibleActiveElement === document.activeElement;
  }
  function morphOldNodeTo(oldNode, newContent, ctx) {
    if (ctx.ignoreActive && oldNode === document.activeElement) {} else if (newContent == null) {
      if (ctx.callbacks.beforeNodeRemoved(oldNode) === false) return oldNode;
      oldNode.remove();
      ctx.callbacks.afterNodeRemoved(oldNode);
      return null;
    } else if (!isSoftMatch(oldNode, newContent)) {
      if (ctx.callbacks.beforeNodeRemoved(oldNode) === false) return oldNode;
      if (ctx.callbacks.beforeNodeAdded(newContent) === false) return oldNode;
      oldNode.parentElement.replaceChild(newContent, oldNode);
      ctx.callbacks.afterNodeAdded(newContent);
      ctx.callbacks.afterNodeRemoved(oldNode);
      return newContent;
    } else {
      if (ctx.callbacks.beforeNodeMorphed(oldNode, newContent) === false) return oldNode;
      if (oldNode instanceof HTMLHeadElement && ctx.head.ignore) {} else if (oldNode instanceof HTMLHeadElement && ctx.head.style !== "morph") handleHeadElement(newContent, oldNode, ctx);else {
        syncNodeFrom(newContent, oldNode, ctx);
        if (!ignoreValueOfActiveElement(oldNode, ctx)) morphChildren(newContent, oldNode, ctx);
      }
      ctx.callbacks.afterNodeMorphed(oldNode, newContent);
      return oldNode;
    }
  }
  function morphChildren(newParent, oldParent, ctx) {
    var nextNewChild = newParent.firstChild;
    var insertionPoint = oldParent.firstChild;
    var newChild;
    while (nextNewChild) {
      newChild = nextNewChild;
      nextNewChild = newChild.nextSibling;
      if (insertionPoint == null) {
        if (ctx.callbacks.beforeNodeAdded(newChild) === false) return;
        oldParent.appendChild(newChild);
        ctx.callbacks.afterNodeAdded(newChild);
        removeIdsFromConsideration(ctx, newChild);
        continue;
      }
      if (isIdSetMatch(newChild, insertionPoint, ctx)) {
        morphOldNodeTo(insertionPoint, newChild, ctx);
        insertionPoint = insertionPoint.nextSibling;
        removeIdsFromConsideration(ctx, newChild);
        continue;
      }
      var idSetMatch = findIdSetMatch(newParent, oldParent, newChild, insertionPoint, ctx);
      if (idSetMatch) {
        insertionPoint = removeNodesBetween(insertionPoint, idSetMatch, ctx);
        morphOldNodeTo(idSetMatch, newChild, ctx);
        removeIdsFromConsideration(ctx, newChild);
        continue;
      }
      var softMatch = findSoftMatch(newParent, oldParent, newChild, insertionPoint, ctx);
      if (softMatch) {
        insertionPoint = removeNodesBetween(insertionPoint, softMatch, ctx);
        morphOldNodeTo(softMatch, newChild, ctx);
        removeIdsFromConsideration(ctx, newChild);
        continue;
      }
      if (ctx.callbacks.beforeNodeAdded(newChild) === false) return;
      oldParent.insertBefore(newChild, insertionPoint);
      ctx.callbacks.afterNodeAdded(newChild);
      removeIdsFromConsideration(ctx, newChild);
    }
    while (insertionPoint !== null) {
      var tempNode = insertionPoint;
      insertionPoint = insertionPoint.nextSibling;
      removeNode(tempNode, ctx);
    }
  }
  function ignoreAttribute(attr, to, updateType, ctx) {
    if (attr === "value" && ctx.ignoreActiveValue && to === document.activeElement) return true;
    return ctx.callbacks.beforeAttributeUpdated(attr, to, updateType) === false;
  }
  function syncNodeFrom(from, to, ctx) {
    var type = from.nodeType;
    if (type === 1) {
      var fromAttributes = from.attributes;
      var toAttributes = to.attributes;
      var _iterator = _createForOfIteratorHelper(fromAttributes),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var fromAttribute = _step.value;
          if (ignoreAttribute(fromAttribute.name, to, "update", ctx)) continue;
          if (to.getAttribute(fromAttribute.name) !== fromAttribute.value) to.setAttribute(fromAttribute.name, fromAttribute.value);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      for (var i = toAttributes.length - 1; 0 <= i; i--) {
        var toAttribute = toAttributes[i];
        if (ignoreAttribute(toAttribute.name, to, "remove", ctx)) continue;
        if (!from.hasAttribute(toAttribute.name)) to.removeAttribute(toAttribute.name);
      }
    }
    if (type === 8 || type === 3) {
      if (to.nodeValue !== from.nodeValue) to.nodeValue = from.nodeValue;
    }
    if (!ignoreValueOfActiveElement(to, ctx)) syncInputValue(from, to, ctx);
  }
  function syncBooleanAttribute(from, to, attributeName, ctx) {
    if (from[attributeName] !== to[attributeName]) {
      var ignoreUpdate = ignoreAttribute(attributeName, to, "update", ctx);
      if (!ignoreUpdate) to[attributeName] = from[attributeName];
      if (from[attributeName]) {
        if (!ignoreUpdate) to.setAttribute(attributeName, from[attributeName]);
      } else if (!ignoreAttribute(attributeName, to, "remove", ctx)) to.removeAttribute(attributeName);
    }
  }
  function syncInputValue(from, to, ctx) {
    if (from instanceof HTMLInputElement && to instanceof HTMLInputElement && from.type !== "file") {
      var fromValue = from.value;
      var toValue = to.value;
      syncBooleanAttribute(from, to, "checked", ctx);
      syncBooleanAttribute(from, to, "disabled", ctx);
      if (!from.hasAttribute("value")) {
        if (!ignoreAttribute("value", to, "remove", ctx)) {
          to.value = "";
          to.removeAttribute("value");
        }
      } else if (fromValue !== toValue) {
        if (!ignoreAttribute("value", to, "update", ctx)) {
          to.setAttribute("value", fromValue);
          to.value = fromValue;
        }
      }
    } else if (from instanceof HTMLOptionElement) syncBooleanAttribute(from, to, "selected", ctx);else if (from instanceof HTMLTextAreaElement && to instanceof HTMLTextAreaElement) {
      var _fromValue = from.value;
      var _toValue = to.value;
      if (ignoreAttribute("value", to, "update", ctx)) return;
      if (_fromValue !== _toValue) to.value = _fromValue;
      if (to.firstChild && to.firstChild.nodeValue !== _fromValue) to.firstChild.nodeValue = _fromValue;
    }
  }
  function handleHeadElement(newHeadTag, currentHead, ctx) {
    var added = [];
    var removed = [];
    var preserved = [];
    var nodesToAppend = [];
    var headMergeStyle = ctx.head.style;
    var srcToNewHeadNodes = /* @__PURE__ */new Map();
    var _iterator2 = _createForOfIteratorHelper(newHeadTag.children),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var newHeadChild = _step2.value;
        srcToNewHeadNodes.set(newHeadChild.outerHTML, newHeadChild);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var _iterator3 = _createForOfIteratorHelper(currentHead.children),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var currentHeadElt = _step3.value;
        var inNewContent = srcToNewHeadNodes.has(currentHeadElt.outerHTML);
        var isReAppended = ctx.head.shouldReAppend(currentHeadElt);
        var isPreserved = ctx.head.shouldPreserve(currentHeadElt);
        if (inNewContent || isPreserved) {
          if (isReAppended) removed.push(currentHeadElt);else {
            srcToNewHeadNodes["delete"](currentHeadElt.outerHTML);
            preserved.push(currentHeadElt);
          }
        } else if (headMergeStyle === "append") {
          if (isReAppended) {
            removed.push(currentHeadElt);
            nodesToAppend.push(currentHeadElt);
          }
        } else if (ctx.head.shouldRemove(currentHeadElt) !== false) removed.push(currentHeadElt);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    nodesToAppend.push.apply(nodesToAppend, _toConsumableArray(srcToNewHeadNodes.values()));
    log("to append: ", nodesToAppend);
    var promises = [];
    var _loop = function _loop() {
      var newNode = _nodesToAppend[_i3];
      log("adding: ", newNode);
      var newElt = document.createRange().createContextualFragment(newNode.outerHTML).firstChild;
      log(newElt);
      if (ctx.callbacks.beforeNodeAdded(newElt) !== false) {
        if (newElt.href || newElt.src) {
          var resolve = null;
          var promise = new Promise(function (_resolve) {
            resolve = _resolve;
          });
          newElt.addEventListener("load", function () {
            resolve();
          });
          promises.push(promise);
        }
        currentHead.appendChild(newElt);
        ctx.callbacks.afterNodeAdded(newElt);
        added.push(newElt);
      }
    };
    for (var _i3 = 0, _nodesToAppend = nodesToAppend; _i3 < _nodesToAppend.length; _i3++) {
      _loop();
    }
    for (var _i4 = 0, _removed = removed; _i4 < _removed.length; _i4++) {
      var removedElement = _removed[_i4];
      if (ctx.callbacks.beforeNodeRemoved(removedElement) !== false) {
        currentHead.removeChild(removedElement);
        ctx.callbacks.afterNodeRemoved(removedElement);
      }
    }
    ctx.head.afterHeadMorphed(currentHead, {
      added: added,
      kept: preserved,
      removed: removed
    });
    return promises;
  }
  function log() {}
  function noOp() {}
  function mergeDefaults(config) {
    var finalConfig = {};
    Object.assign(finalConfig, defaults);
    Object.assign(finalConfig, config);
    finalConfig.callbacks = {};
    Object.assign(finalConfig.callbacks, defaults.callbacks);
    Object.assign(finalConfig.callbacks, config.callbacks);
    finalConfig.head = {};
    Object.assign(finalConfig.head, defaults.head);
    Object.assign(finalConfig.head, config.head);
    return finalConfig;
  }
  function createMorphContext(oldNode, newContent, config) {
    config = mergeDefaults(config);
    return {
      target: oldNode,
      newContent: newContent,
      config: config,
      morphStyle: config.morphStyle,
      ignoreActive: config.ignoreActive,
      ignoreActiveValue: config.ignoreActiveValue,
      idMap: createIdMap(oldNode, newContent),
      deadIds: /* @__PURE__ */new Set(),
      callbacks: config.callbacks,
      head: config.head
    };
  }
  function isIdSetMatch(node1, node2, ctx) {
    if (node1 == null || node2 == null) return false;
    if (node1.nodeType === node2.nodeType && node1.tagName === node2.tagName) if (node1.id !== "" && node1.id === node2.id) return true;else return getIdIntersectionCount(ctx, node1, node2) > 0;
    return false;
  }
  function isSoftMatch(node1, node2) {
    if (node1 == null || node2 == null) return false;
    return node1.nodeType === node2.nodeType && node1.tagName === node2.tagName;
  }
  function removeNodesBetween(startInclusive, endExclusive, ctx) {
    while (startInclusive !== endExclusive) {
      var tempNode = startInclusive;
      startInclusive = startInclusive.nextSibling;
      removeNode(tempNode, ctx);
    }
    removeIdsFromConsideration(ctx, endExclusive);
    return endExclusive.nextSibling;
  }
  function findIdSetMatch(newContent, oldParent, newChild, insertionPoint, ctx) {
    var newChildPotentialIdCount = getIdIntersectionCount(ctx, newChild, oldParent);
    var potentialMatch = null;
    if (newChildPotentialIdCount > 0) {
      var _potentialMatch = insertionPoint;
      var otherMatchCount = 0;
      while (_potentialMatch != null) {
        if (isIdSetMatch(newChild, _potentialMatch, ctx)) return _potentialMatch;
        otherMatchCount += getIdIntersectionCount(ctx, _potentialMatch, newContent);
        if (otherMatchCount > newChildPotentialIdCount) return null;
        _potentialMatch = _potentialMatch.nextSibling;
      }
    }
    return potentialMatch;
  }
  function findSoftMatch(newContent, oldParent, newChild, insertionPoint, ctx) {
    var potentialSoftMatch = insertionPoint;
    var nextSibling = newChild.nextSibling;
    var siblingSoftMatchCount = 0;
    while (potentialSoftMatch != null) {
      if (getIdIntersectionCount(ctx, potentialSoftMatch, newContent) > 0) return null;
      if (isSoftMatch(newChild, potentialSoftMatch)) return potentialSoftMatch;
      if (isSoftMatch(nextSibling, potentialSoftMatch)) {
        siblingSoftMatchCount++;
        nextSibling = nextSibling.nextSibling;
        if (siblingSoftMatchCount >= 2) return null;
      }
      potentialSoftMatch = potentialSoftMatch.nextSibling;
    }
    return potentialSoftMatch;
  }
  function parseContent(newContent) {
    var parser = new DOMParser();
    var contentWithSvgsRemoved = newContent.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim, "");
    if (contentWithSvgsRemoved.match(/<\/html>/) || contentWithSvgsRemoved.match(/<\/head>/) || contentWithSvgsRemoved.match(/<\/body>/)) {
      var content = parser.parseFromString(newContent, "text/html");
      if (contentWithSvgsRemoved.match(/<\/html>/)) {
        content.generatedByIdiomorph = true;
        return content;
      } else {
        var htmlElement = content.firstChild;
        if (htmlElement) {
          htmlElement.generatedByIdiomorph = true;
          return htmlElement;
        } else return null;
      }
    } else {
      var _content = parser.parseFromString("<body><template>" + newContent + "</template></body>", "text/html").body.querySelector("template").content;
      _content.generatedByIdiomorph = true;
      return _content;
    }
  }
  function normalizeContent(newContent) {
    if (newContent == null) return document.createElement("div");else if (newContent.generatedByIdiomorph) return newContent;else if (newContent instanceof Node) {
      var dummyParent = document.createElement("div");
      dummyParent.append(newContent);
      return dummyParent;
    } else {
      var _dummyParent = document.createElement("div");
      for (var _i5 = 0, _arr2 = _toConsumableArray(newContent); _i5 < _arr2.length; _i5++) {
        var elt = _arr2[_i5];
        _dummyParent.append(elt);
      }
      return _dummyParent;
    }
  }
  function insertSiblings(previousSibling, morphedNode, nextSibling) {
    var stack = [];
    var added = [];
    while (previousSibling != null) {
      stack.push(previousSibling);
      previousSibling = previousSibling.previousSibling;
    }
    while (stack.length > 0) {
      var node = stack.pop();
      added.push(node);
      morphedNode.parentElement.insertBefore(node, morphedNode);
    }
    added.push(morphedNode);
    while (nextSibling != null) {
      stack.push(nextSibling);
      added.push(nextSibling);
      nextSibling = nextSibling.nextSibling;
    }
    while (stack.length > 0) morphedNode.parentElement.insertBefore(stack.pop(), morphedNode.nextSibling);
    return added;
  }
  function findBestNodeMatch(newContent, oldNode, ctx) {
    var currentElement;
    currentElement = newContent.firstChild;
    var bestElement = currentElement;
    var score = 0;
    while (currentElement) {
      var newScore = scoreElement(currentElement, oldNode, ctx);
      if (newScore > score) {
        bestElement = currentElement;
        score = newScore;
      }
      currentElement = currentElement.nextSibling;
    }
    return bestElement;
  }
  function scoreElement(node1, node2, ctx) {
    if (isSoftMatch(node1, node2)) return .5 + getIdIntersectionCount(ctx, node1, node2);
    return 0;
  }
  function removeNode(tempNode, ctx) {
    removeIdsFromConsideration(ctx, tempNode);
    if (ctx.callbacks.beforeNodeRemoved(tempNode) === false) return;
    tempNode.remove();
    ctx.callbacks.afterNodeRemoved(tempNode);
  }
  function isIdInConsideration(ctx, id) {
    return !ctx.deadIds.has(id);
  }
  function idIsWithinNode(ctx, id, targetNode) {
    return (ctx.idMap.get(targetNode) || EMPTY_SET).has(id);
  }
  function removeIdsFromConsideration(ctx, node) {
    var idSet = ctx.idMap.get(node) || EMPTY_SET;
    var _iterator4 = _createForOfIteratorHelper(idSet),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var id = _step4.value;
        ctx.deadIds.add(id);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }
  function getIdIntersectionCount(ctx, node1, node2) {
    var sourceSet = ctx.idMap.get(node1) || EMPTY_SET;
    var matchCount = 0;
    var _iterator5 = _createForOfIteratorHelper(sourceSet),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var id = _step5.value;
        if (isIdInConsideration(ctx, id) && idIsWithinNode(ctx, id, node2)) ++matchCount;
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    return matchCount;
  }
  function populateIdMapForNode(node, idMap) {
    var nodeParent = node.parentElement;
    var idElements = node.querySelectorAll("[id]");
    var _iterator6 = _createForOfIteratorHelper(idElements),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var elt = _step6.value;
        var current = elt;
        while (current !== nodeParent && current != null) {
          var idSet = idMap.get(current);
          if (idSet == null) {
            idSet = /* @__PURE__ */new Set();
            idMap.set(current, idSet);
          }
          idSet.add(elt.id);
          current = current.parentElement;
        }
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  }
  function createIdMap(oldContent, newContent) {
    var idMap = /* @__PURE__ */new Map();
    populateIdMapForNode(oldContent, idMap);
    populateIdMapForNode(newContent, idMap);
    return idMap;
  }
  return {
    morph: morph,
    defaults: defaults
  };
}();
function normalizeAttributesForComparison(element) {
  if (!(element instanceof HTMLInputElement && element.type === "file")) {
    if ("value" in element) element.setAttribute("value", element.value);else if (element.hasAttribute("value")) element.setAttribute("value", "");
  }
  Array.from(element.children).forEach(function (child) {
    normalizeAttributesForComparison(child);
  });
}
var syncAttributes = function syncAttributes(fromEl, toEl) {
  for (var i = 0; i < fromEl.attributes.length; i++) {
    var attr = fromEl.attributes[i];
    toEl.setAttribute(attr.name, attr.value);
  }
};
function executeMorphdom(rootFromElement, rootToElement, modifiedFieldElements, getElementValue, externalMutationTracker) {
  var originalElementIdsToSwapAfter = [];
  var originalElementsToPreserve = /* @__PURE__ */new Map();
  var markElementAsNeedingPostMorphSwap = function markElementAsNeedingPostMorphSwap(id, replaceWithClone) {
    var oldElement = originalElementsToPreserve.get(id);
    if (!(oldElement instanceof HTMLElement)) throw new Error("Original element with id ".concat(id, " not found"));
    originalElementIdsToSwapAfter.push(id);
    if (!replaceWithClone) return null;
    var clonedOldElement = cloneHTMLElement(oldElement);
    oldElement.replaceWith(clonedOldElement);
    return clonedOldElement;
  };
  rootToElement.querySelectorAll("[data-live-preserve]").forEach(function (newElement) {
    var id = newElement.id;
    if (!id) throw new Error("The data-live-preserve attribute requires an id attribute to be set on the element");
    var oldElement = rootFromElement.querySelector("#".concat(id));
    if (!(oldElement instanceof HTMLElement)) throw new Error("The element with id \"".concat(id, "\" was not found in the original HTML"));
    newElement.removeAttribute("data-live-preserve");
    originalElementsToPreserve.set(id, oldElement);
    syncAttributes(newElement, oldElement);
  });
  Idiomorph.morph(rootFromElement, rootToElement, {
    callbacks: {
      beforeNodeMorphed: function beforeNodeMorphed(fromEl, toEl) {
        var _fromEl$parentElement;
        if (!(fromEl instanceof Element) || !(toEl instanceof Element)) return true;
        if (fromEl === rootFromElement) return true;
        if (fromEl.id && originalElementsToPreserve.has(fromEl.id)) {
          if (fromEl.id === toEl.id) return false;
          var clonedFromEl = markElementAsNeedingPostMorphSwap(fromEl.id, true);
          if (!clonedFromEl) throw new Error("missing clone");
          Idiomorph.morph(clonedFromEl, toEl);
          return false;
        }
        if (fromEl instanceof HTMLElement && toEl instanceof HTMLElement) {
          if (typeof fromEl.__x !== "undefined") {
            if (!window.Alpine) throw new Error("Unable to access Alpine.js though the global window.Alpine variable. Please make sure Alpine.js is loaded before Symfony UX LiveComponent.");
            if (typeof window.Alpine.morph !== "function") throw new Error("Unable to access Alpine.js morph function. Please make sure the Alpine.js Morph plugin is installed and loaded, see https://alpinejs.dev/plugins/morph for more information.");
            window.Alpine.morph(fromEl.__x, toEl);
          }
          if (externalMutationTracker.wasElementAdded(fromEl)) {
            fromEl.insertAdjacentElement("afterend", toEl);
            return false;
          }
          if (modifiedFieldElements.includes(fromEl)) setValueOnElement(toEl, getElementValue(fromEl));
          if (fromEl === document.activeElement && fromEl !== document.body && null !== getModelDirectiveFromElement(fromEl, false)) setValueOnElement(toEl, getElementValue(fromEl));
          var elementChanges = externalMutationTracker.getChangedElement(fromEl);
          if (elementChanges) elementChanges.applyToElement(toEl);
          if (fromEl.nodeName.toUpperCase() !== "OPTION" && fromEl.isEqualNode(toEl)) {
            var normalizedFromEl = cloneHTMLElement(fromEl);
            normalizeAttributesForComparison(normalizedFromEl);
            var normalizedToEl = cloneHTMLElement(toEl);
            normalizeAttributesForComparison(normalizedToEl);
            if (normalizedFromEl.isEqualNode(normalizedToEl)) return false;
          }
        }
        if (fromEl.hasAttribute("data-skip-morph") || fromEl.id && fromEl.id !== toEl.id) {
          fromEl.innerHTML = toEl.innerHTML;
          return true;
        }
        if ((_fromEl$parentElement = fromEl.parentElement) !== null && _fromEl$parentElement !== void 0 && _fromEl$parentElement.hasAttribute("data-skip-morph")) return false;
        return !fromEl.hasAttribute("data-live-ignore");
      },
      beforeNodeRemoved: function beforeNodeRemoved(node) {
        if (!(node instanceof HTMLElement)) return true;
        if (node.id && originalElementsToPreserve.has(node.id)) {
          markElementAsNeedingPostMorphSwap(node.id, false);
          return true;
        }
        if (externalMutationTracker.wasElementAdded(node)) return false;
        return !node.hasAttribute("data-live-ignore");
      }
    }
  });
  originalElementIdsToSwapAfter.forEach(function (id) {
    var newElement = rootFromElement.querySelector("#".concat(id));
    var originalElement = originalElementsToPreserve.get(id);
    if (!(newElement instanceof HTMLElement) || !(originalElement instanceof HTMLElement)) throw new Error("Missing elements.");
    newElement.replaceWith(originalElement);
  });
}
var ChangingItemsTracker_default = /*#__PURE__*/function () {
  function ChangingItemsTracker_default() {
    _classCallCheck(this, ChangingItemsTracker_default);
    this.changedItems = /* @__PURE__ */new Map();
    this.removedItems = /* @__PURE__ */new Map();
  }
  _createClass(ChangingItemsTracker_default, [{
    key: "setItem",
    value: function setItem(itemName, newValue, previousValue) {
      if (this.removedItems.has(itemName)) {
        var removedRecord = this.removedItems.get(itemName);
        this.removedItems["delete"](itemName);
        if (removedRecord.original === newValue) return;
      }
      if (this.changedItems.has(itemName)) {
        var originalRecord = this.changedItems.get(itemName);
        if (originalRecord.original === newValue) {
          this.changedItems["delete"](itemName);
          return;
        }
        this.changedItems.set(itemName, {
          original: originalRecord.original,
          "new": newValue
        });
        return;
      }
      this.changedItems.set(itemName, {
        original: previousValue,
        "new": newValue
      });
    }
  }, {
    key: "removeItem",
    value: function removeItem(itemName, currentValue) {
      var trueOriginalValue = currentValue;
      if (this.changedItems.has(itemName)) {
        trueOriginalValue = this.changedItems.get(itemName).original;
        this.changedItems["delete"](itemName);
        if (trueOriginalValue === null) return;
      }
      if (!this.removedItems.has(itemName)) this.removedItems.set(itemName, {
        original: trueOriginalValue
      });
    }
  }, {
    key: "getChangedItems",
    value: function getChangedItems() {
      return Array.from(this.changedItems, function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          name = _ref2[0],
          value = _ref2[1]["new"];
        return {
          name: name,
          value: value
        };
      });
    }
  }, {
    key: "getRemovedItems",
    value: function getRemovedItems() {
      return Array.from(this.removedItems.keys());
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.changedItems.size === 0 && this.removedItems.size === 0;
    }
  }]);
  return ChangingItemsTracker_default;
}();
var ElementChanges = /*#__PURE__*/function () {
  function ElementChanges() {
    _classCallCheck(this, ElementChanges);
    this.addedClasses = /* @__PURE__ */new Set();
    this.removedClasses = /* @__PURE__ */new Set();
    this.styleChanges = new ChangingItemsTracker_default();
    this.attributeChanges = new ChangingItemsTracker_default();
  }
  _createClass(ElementChanges, [{
    key: "addClass",
    value: function addClass(className) {
      if (!this.removedClasses["delete"](className)) this.addedClasses.add(className);
    }
  }, {
    key: "removeClass",
    value: function removeClass(className) {
      if (!this.addedClasses["delete"](className)) this.removedClasses.add(className);
    }
  }, {
    key: "addStyle",
    value: function addStyle(styleName, newValue, originalValue) {
      this.styleChanges.setItem(styleName, newValue, originalValue);
    }
  }, {
    key: "removeStyle",
    value: function removeStyle(styleName, originalValue) {
      this.styleChanges.removeItem(styleName, originalValue);
    }
  }, {
    key: "addAttribute",
    value: function addAttribute(attributeName, newValue, originalValue) {
      this.attributeChanges.setItem(attributeName, newValue, originalValue);
    }
  }, {
    key: "removeAttribute",
    value: function removeAttribute(attributeName, originalValue) {
      this.attributeChanges.removeItem(attributeName, originalValue);
    }
  }, {
    key: "getAddedClasses",
    value: function getAddedClasses() {
      return _toConsumableArray(this.addedClasses);
    }
  }, {
    key: "getRemovedClasses",
    value: function getRemovedClasses() {
      return _toConsumableArray(this.removedClasses);
    }
  }, {
    key: "getChangedStyles",
    value: function getChangedStyles() {
      return this.styleChanges.getChangedItems();
    }
  }, {
    key: "getRemovedStyles",
    value: function getRemovedStyles() {
      return this.styleChanges.getRemovedItems();
    }
  }, {
    key: "getChangedAttributes",
    value: function getChangedAttributes() {
      return this.attributeChanges.getChangedItems();
    }
  }, {
    key: "getRemovedAttributes",
    value: function getRemovedAttributes() {
      return this.attributeChanges.getRemovedItems();
    }
  }, {
    key: "applyToElement",
    value: function applyToElement(element) {
      var _element$classList, _element$classList2;
      (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(this.addedClasses));
      (_element$classList2 = element.classList).remove.apply(_element$classList2, _toConsumableArray(this.removedClasses));
      this.styleChanges.getChangedItems().forEach(function (change) {
        if (/!\s*important/i.test(change.value)) element.style.setProperty(change.name, change.value.replace(/!\s*important/i, "").trim(), "important");else element.style.setProperty(change.name, change.value);
      });
      this.styleChanges.getRemovedItems().forEach(function (styleName) {
        element.style.removeProperty(styleName);
      });
      this.attributeChanges.getChangedItems().forEach(function (change) {
        element.setAttribute(change.name, change.value);
      });
      this.attributeChanges.getRemovedItems().forEach(function (attributeName) {
        element.removeAttribute(attributeName);
      });
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.addedClasses.size === 0 && this.removedClasses.size === 0 && this.styleChanges.isEmpty() && this.attributeChanges.isEmpty();
    }
  }]);
  return ElementChanges;
}();
var ExternalMutationTracker_default = /*#__PURE__*/function () {
  function ExternalMutationTracker_default(element, shouldTrackChangeCallback) {
    _classCallCheck(this, ExternalMutationTracker_default);
    this.changedElements = /* @__PURE__ */new WeakMap();
    this.changedElementsCount = 0;
    this.addedElements = [];
    this.removedElements = [];
    this.isStarted = false;
    this.element = element;
    this.shouldTrackChangeCallback = shouldTrackChangeCallback;
    this.mutationObserver = new MutationObserver(this.onMutations.bind(this));
  }
  _createClass(ExternalMutationTracker_default, [{
    key: "start",
    value: function start() {
      if (this.isStarted) return;
      this.mutationObserver.observe(this.element, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeOldValue: true
      });
      this.isStarted = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.isStarted) {
        this.mutationObserver.disconnect();
        this.isStarted = false;
      }
    }
  }, {
    key: "getChangedElement",
    value: function getChangedElement(element) {
      return this.changedElements.has(element) ? this.changedElements.get(element) : null;
    }
  }, {
    key: "getAddedElements",
    value: function getAddedElements() {
      return this.addedElements;
    }
  }, {
    key: "wasElementAdded",
    value: function wasElementAdded(element) {
      return this.addedElements.includes(element);
    }
  }, {
    key: "handlePendingChanges",
    value: function handlePendingChanges() {
      this.onMutations(this.mutationObserver.takeRecords());
    }
  }, {
    key: "onMutations",
    value: function onMutations(mutations) {
      var handledAttributeMutations = /* @__PURE__ */new WeakMap();
      var _iterator7 = _createForOfIteratorHelper(mutations),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var mutation = _step7.value;
          var element = mutation.target;
          if (!this.shouldTrackChangeCallback(element)) continue;
          if (this.isElementAddedByTranslation(element)) continue;
          var isChangeInAddedElement = false;
          var _iterator8 = _createForOfIteratorHelper(this.addedElements),
            _step8;
          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var addedElement = _step8.value;
              if (addedElement.contains(element)) {
                isChangeInAddedElement = true;
                break;
              }
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
          if (isChangeInAddedElement) continue;
          switch (mutation.type) {
            case "childList":
              this.handleChildListMutation(mutation);
              break;
            case "attributes":
              if (!handledAttributeMutations.has(element)) handledAttributeMutations.set(element, []);
              if (!handledAttributeMutations.get(element).includes(mutation.attributeName)) {
                this.handleAttributeMutation(mutation);
                handledAttributeMutations.set(element, [].concat(_toConsumableArray(handledAttributeMutations.get(element)), [mutation.attributeName]));
              }
              break;
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    }
  }, {
    key: "handleChildListMutation",
    value: function handleChildListMutation(mutation) {
      var _this2 = this;
      mutation.addedNodes.forEach(function (node) {
        if (!(node instanceof Element)) return;
        if (_this2.removedElements.includes(node)) {
          _this2.removedElements.splice(_this2.removedElements.indexOf(node), 1);
          return;
        }
        if (_this2.isElementAddedByTranslation(node)) return;
        _this2.addedElements.push(node);
      });
      mutation.removedNodes.forEach(function (node) {
        if (!(node instanceof Element)) return;
        if (_this2.addedElements.includes(node)) {
          _this2.addedElements.splice(_this2.addedElements.indexOf(node), 1);
          return;
        }
        _this2.removedElements.push(node);
      });
    }
  }, {
    key: "handleAttributeMutation",
    value: function handleAttributeMutation(mutation) {
      var element = mutation.target;
      if (!this.changedElements.has(element)) {
        this.changedElements.set(element, new ElementChanges());
        this.changedElementsCount++;
      }
      var changedElement = this.changedElements.get(element);
      switch (mutation.attributeName) {
        case "class":
          this.handleClassAttributeMutation(mutation, changedElement);
          break;
        case "style":
          this.handleStyleAttributeMutation(mutation, changedElement);
          break;
        default:
          this.handleGenericAttributeMutation(mutation, changedElement);
      }
      if (changedElement.isEmpty()) {
        this.changedElements["delete"](element);
        this.changedElementsCount--;
      }
    }
  }, {
    key: "handleClassAttributeMutation",
    value: function handleClassAttributeMutation(mutation, elementChanges) {
      var element = mutation.target;
      var previousValues = (mutation.oldValue || "").match(/((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)/g) || [];
      var newValues = [].slice.call(element.classList);
      var addedValues = newValues.filter(function (value) {
        return !previousValues.includes(value);
      });
      var removedValues = previousValues.filter(function (value) {
        return !newValues.includes(value);
      });
      addedValues.forEach(function (value) {
        elementChanges.addClass(value);
      });
      removedValues.forEach(function (value) {
        elementChanges.removeClass(value);
      });
    }
  }, {
    key: "handleStyleAttributeMutation",
    value: function handleStyleAttributeMutation(mutation, elementChanges) {
      var element = mutation.target;
      var previousValue = mutation.oldValue || "";
      var previousStyles = this.extractStyles(previousValue);
      var newValue = element.getAttribute("style") || "";
      var newStyles = this.extractStyles(newValue);
      var addedOrChangedStyles = Object.keys(newStyles).filter(function (key) {
        return previousStyles[key] === void 0 || previousStyles[key] !== newStyles[key];
      });
      var removedStyles = Object.keys(previousStyles).filter(function (key) {
        return !newStyles[key];
      });
      addedOrChangedStyles.forEach(function (style) {
        elementChanges.addStyle(style, newStyles[style], previousStyles[style] === void 0 ? null : previousStyles[style]);
      });
      removedStyles.forEach(function (style) {
        elementChanges.removeStyle(style, previousStyles[style]);
      });
    }
  }, {
    key: "handleGenericAttributeMutation",
    value: function handleGenericAttributeMutation(mutation, elementChanges) {
      var attributeName = mutation.attributeName;
      var element = mutation.target;
      var oldValue = mutation.oldValue;
      var newValue = element.getAttribute(attributeName);
      if (oldValue === attributeName) oldValue = "";
      if (newValue === attributeName) newValue = "";
      if (!element.hasAttribute(attributeName)) {
        if (oldValue === null) return;
        elementChanges.removeAttribute(attributeName, mutation.oldValue);
        return;
      }
      if (newValue === oldValue) return;
      elementChanges.addAttribute(attributeName, element.getAttribute(attributeName), mutation.oldValue);
    }
  }, {
    key: "extractStyles",
    value: function extractStyles(styles) {
      var styleObject = {};
      styles.split(";").forEach(function (style) {
        var parts = style.split(":");
        if (parts.length === 1) return;
        var property = parts[0].trim();
        styleObject[property] = parts.slice(1).join(":").trim();
      });
      return styleObject;
    }
  }, {
    key: "isElementAddedByTranslation",
    value: function isElementAddedByTranslation(element) {
      return element.tagName === "FONT" && element.getAttribute("style") === "vertical-align: inherit;";
    }
  }]);
  return ExternalMutationTracker_default;
}();
var UnsyncedInputsTracker_default = /*#__PURE__*/function () {
  function UnsyncedInputsTracker_default(component, modelElementResolver) {
    var _this3 = this;
    _classCallCheck(this, UnsyncedInputsTracker_default);
    this.elementEventListeners = [{
      event: "input",
      callback: function callback(event) {
        return _this3.handleInputEvent(event);
      }
    }];
    this.component = component;
    this.modelElementResolver = modelElementResolver;
    this.unsyncedInputs = new UnsyncedInputContainer();
  }
  _createClass(UnsyncedInputsTracker_default, [{
    key: "activate",
    value: function activate() {
      var _this4 = this;
      this.elementEventListeners.forEach(function (_ref3) {
        var event = _ref3.event,
          callback = _ref3.callback;
        _this4.component.element.addEventListener(event, callback);
      });
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      var _this5 = this;
      this.elementEventListeners.forEach(function (_ref4) {
        var event = _ref4.event,
          callback = _ref4.callback;
        _this5.component.element.removeEventListener(event, callback);
      });
    }
  }, {
    key: "markModelAsSynced",
    value: function markModelAsSynced(modelName) {
      this.unsyncedInputs.markModelAsSynced(modelName);
    }
  }, {
    key: "handleInputEvent",
    value: function handleInputEvent(event) {
      var target = event.target;
      if (!target) return;
      this.updateModelFromElement(target);
    }
  }, {
    key: "updateModelFromElement",
    value: function updateModelFromElement(element) {
      if (!elementBelongsToThisComponent(element, this.component)) return;
      if (!(element instanceof HTMLElement)) throw new Error("Could not update model for non HTMLElement");
      var modelName = this.modelElementResolver.getModelName(element);
      this.unsyncedInputs.add(element, modelName);
    }
  }, {
    key: "getUnsyncedInputs",
    value: function getUnsyncedInputs() {
      return this.unsyncedInputs.allUnsyncedInputs();
    }
  }, {
    key: "getUnsyncedModels",
    value: function getUnsyncedModels() {
      return Array.from(this.unsyncedInputs.getUnsyncedModelNames());
    }
  }, {
    key: "resetUnsyncedFields",
    value: function resetUnsyncedFields() {
      this.unsyncedInputs.resetUnsyncedFields();
    }
  }]);
  return UnsyncedInputsTracker_default;
}();
var UnsyncedInputContainer = /*#__PURE__*/function () {
  function UnsyncedInputContainer() {
    _classCallCheck(this, UnsyncedInputContainer);
    this.unsyncedNonModelFields = [];
    this.unsyncedModelNames = [];
    this.unsyncedModelFields = /* @__PURE__ */new Map();
  }
  _createClass(UnsyncedInputContainer, [{
    key: "add",
    value: function add(element) {
      var modelName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (modelName) {
        this.unsyncedModelFields.set(modelName, element);
        if (!this.unsyncedModelNames.includes(modelName)) this.unsyncedModelNames.push(modelName);
        return;
      }
      this.unsyncedNonModelFields.push(element);
    }
  }, {
    key: "resetUnsyncedFields",
    value: function resetUnsyncedFields() {
      var _this6 = this;
      this.unsyncedModelFields.forEach(function (value, key) {
        if (!_this6.unsyncedModelNames.includes(key)) _this6.unsyncedModelFields["delete"](key);
      });
    }
  }, {
    key: "allUnsyncedInputs",
    value: function allUnsyncedInputs() {
      return [].concat(_toConsumableArray(this.unsyncedNonModelFields), _toConsumableArray(this.unsyncedModelFields.values()));
    }
  }, {
    key: "markModelAsSynced",
    value: function markModelAsSynced(modelName) {
      var index = this.unsyncedModelNames.indexOf(modelName);
      if (index !== -1) this.unsyncedModelNames.splice(index, 1);
    }
  }, {
    key: "getUnsyncedModelNames",
    value: function getUnsyncedModelNames() {
      return this.unsyncedModelNames;
    }
  }]);
  return UnsyncedInputContainer;
}();
function getDeepData(data, propertyPath) {
  var _parseDeepData = parseDeepData(data, propertyPath),
    currentLevelData = _parseDeepData.currentLevelData,
    finalKey = _parseDeepData.finalKey;
  if (currentLevelData === void 0) return;
  return currentLevelData[finalKey];
}
var parseDeepData = function parseDeepData(data, propertyPath) {
  var finalData = JSON.parse(JSON.stringify(data));
  var currentLevelData = finalData;
  var parts = propertyPath.split(".");
  for (var i = 0; i < parts.length - 1; i++) currentLevelData = currentLevelData[parts[i]];
  var finalKey = parts[parts.length - 1];
  return {
    currentLevelData: currentLevelData,
    finalData: finalData,
    finalKey: finalKey,
    parts: parts
  };
};
var ValueStore_default = /*#__PURE__*/function () {
  function ValueStore_default(props) {
    _classCallCheck(this, ValueStore_default);
    this.props = {};
    this.dirtyProps = {};
    this.pendingProps = {};
    this.updatedPropsFromParent = {};
    this.props = props;
  }
  _createClass(ValueStore_default, [{
    key: "get",
    value: function get(name) {
      var normalizedName = normalizeModelName(name);
      if (this.dirtyProps[normalizedName] !== void 0) return this.dirtyProps[normalizedName];
      if (this.pendingProps[normalizedName] !== void 0) return this.pendingProps[normalizedName];
      if (this.props[normalizedName] !== void 0) return this.props[normalizedName];
      return getDeepData(this.props, normalizedName);
    }
  }, {
    key: "has",
    value: function has(name) {
      return this.get(name) !== void 0;
    }
  }, {
    key: "set",
    value: function set(name, value) {
      var normalizedName = normalizeModelName(name);
      if (this.get(normalizedName) === value) return false;
      this.dirtyProps[normalizedName] = value;
      return true;
    }
  }, {
    key: "getOriginalProps",
    value: function getOriginalProps() {
      return _objectSpread({}, this.props);
    }
  }, {
    key: "getDirtyProps",
    value: function getDirtyProps() {
      return _objectSpread({}, this.dirtyProps);
    }
  }, {
    key: "getUpdatedPropsFromParent",
    value: function getUpdatedPropsFromParent() {
      return _objectSpread({}, this.updatedPropsFromParent);
    }
  }, {
    key: "flushDirtyPropsToPending",
    value: function flushDirtyPropsToPending() {
      this.pendingProps = _objectSpread({}, this.dirtyProps);
      this.dirtyProps = {};
    }
  }, {
    key: "reinitializeAllProps",
    value: function reinitializeAllProps(props) {
      this.props = props;
      this.updatedPropsFromParent = {};
      this.pendingProps = {};
    }
  }, {
    key: "pushPendingPropsBackToDirty",
    value: function pushPendingPropsBackToDirty() {
      this.dirtyProps = _objectSpread(_objectSpread({}, this.pendingProps), this.dirtyProps);
      this.pendingProps = {};
    }
  }, {
    key: "storeNewPropsFromParent",
    value: function storeNewPropsFromParent(props) {
      var changed = false;
      for (var _i6 = 0, _Object$entries2 = Object.entries(props); _i6 < _Object$entries2.length; _i6++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i6], 2),
          key = _Object$entries2$_i[0],
          value = _Object$entries2$_i[1];
        if (this.get(key) !== value) changed = true;
      }
      if (changed) this.updatedPropsFromParent = props;
      return changed;
    }
  }]);
  return ValueStore_default;
}();
var Component = /*#__PURE__*/function () {
  function Component(element, name, props, listeners, id, backend, elementDriver) {
    var _this7 = this;
    _classCallCheck(this, Component);
    this.fingerprint = "";
    this.defaultDebounce = 150;
    this.backendRequest = null;
    this.pendingActions = [];
    this.pendingFiles = {};
    this.isRequestPending = false;
    this.requestDebounceTimeout = null;
    this.element = element;
    this.name = name;
    this.backend = backend;
    this.elementDriver = elementDriver;
    this.id = id;
    this.listeners = /* @__PURE__ */new Map();
    listeners.forEach(function (listener) {
      var _this7$listeners$get;
      if (!_this7.listeners.has(listener.event)) _this7.listeners.set(listener.event, []);
      (_this7$listeners$get = _this7.listeners.get(listener.event)) === null || _this7$listeners$get === void 0 ? void 0 : _this7$listeners$get.push(listener.action);
    });
    this.valueStore = new ValueStore_default(props);
    this.unsyncedInputsTracker = new UnsyncedInputsTracker_default(this, elementDriver);
    this.hooks = new HookManager_default();
    this.resetPromise();
    this.externalMutationTracker = new ExternalMutationTracker_default(this.element, function (element) {
      return elementBelongsToThisComponent(element, _this7);
    });
    this.externalMutationTracker.start();
  }
  _createClass(Component, [{
    key: "addPlugin",
    value: function addPlugin(plugin) {
      plugin.attachToComponent(this);
    }
  }, {
    key: "connect",
    value: function connect() {
      registerComponent(this);
      this.hooks.triggerHook("connect", this);
      this.unsyncedInputsTracker.activate();
      this.externalMutationTracker.start();
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      unregisterComponent(this);
      this.hooks.triggerHook("disconnect", this);
      this.clearRequestDebounceTimeout();
      this.unsyncedInputsTracker.deactivate();
      this.externalMutationTracker.stop();
    }
  }, {
    key: "on",
    value: function on(hookName, callback) {
      this.hooks.register(hookName, callback);
    }
  }, {
    key: "off",
    value: function off(hookName, callback) {
      this.hooks.unregister(hookName, callback);
    }
  }, {
    key: "set",
    value: function set(model, value) {
      var reRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var debounce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var promise = this.nextRequestPromise;
      var modelName = normalizeModelName(model);
      if (!this.valueStore.has(modelName)) throw new Error("Invalid model name \"".concat(model, "\"."));
      var isChanged = this.valueStore.set(modelName, value);
      this.hooks.triggerHook("model:set", model, value, this);
      this.unsyncedInputsTracker.markModelAsSynced(modelName);
      if (reRender && isChanged) this.debouncedStartRequest(debounce);
      return promise;
    }
  }, {
    key: "getData",
    value: function getData(model) {
      var modelName = normalizeModelName(model);
      if (!this.valueStore.has(modelName)) throw new Error("Invalid model \"".concat(model, "\"."));
      return this.valueStore.get(modelName);
    }
  }, {
    key: "action",
    value: function action(name) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var debounce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var promise = this.nextRequestPromise;
      this.pendingActions.push({
        name: name,
        args: args
      });
      this.debouncedStartRequest(debounce);
      return promise;
    }
  }, {
    key: "files",
    value: function files(key, input) {
      this.pendingFiles[key] = input;
    }
  }, {
    key: "render",
    value: function render() {
      var promise = this.nextRequestPromise;
      this.tryStartingRequest();
      return promise;
    }
  }, {
    key: "getUnsyncedModels",
    value: function getUnsyncedModels() {
      return this.unsyncedInputsTracker.getUnsyncedModels();
    }
  }, {
    key: "emit",
    value: function emit(name, data) {
      var onlyMatchingComponentsNamed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.performEmit(name, data, false, onlyMatchingComponentsNamed);
    }
  }, {
    key: "emitUp",
    value: function emitUp(name, data) {
      var onlyMatchingComponentsNamed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.performEmit(name, data, true, onlyMatchingComponentsNamed);
    }
  }, {
    key: "emitSelf",
    value: function emitSelf(name, data) {
      this.doEmit(name, data);
    }
  }, {
    key: "performEmit",
    value: function performEmit(name, data, emitUp, matchingName) {
      findComponents(this, emitUp, matchingName).forEach(function (component) {
        component.doEmit(name, data);
      });
    }
  }, {
    key: "doEmit",
    value: function doEmit(name, data) {
      var _this8 = this;
      if (!this.listeners.has(name)) return;
      (this.listeners.get(name) || []).forEach(function (action) {
        _this8.action(action, data, 1);
      });
    }
  }, {
    key: "isTurboEnabled",
    value: function isTurboEnabled() {
      return typeof Turbo !== "undefined" && !this.element.closest("[data-turbo=\"false\"]");
    }
  }, {
    key: "tryStartingRequest",
    value: function tryStartingRequest() {
      if (!this.backendRequest) {
        this.performRequest();
        return;
      }
      this.isRequestPending = true;
    }
  }, {
    key: "performRequest",
    value: function performRequest() {
      var _this9 = this;
      var thisPromiseResolve = this.nextRequestPromiseResolve;
      this.resetPromise();
      this.unsyncedInputsTracker.resetUnsyncedFields();
      var filesToSend = {};
      for (var _i7 = 0, _Object$entries3 = Object.entries(this.pendingFiles); _i7 < _Object$entries3.length; _i7++) {
        var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i7], 2),
          key = _Object$entries3$_i[0],
          value = _Object$entries3$_i[1];
        if (value.files) filesToSend[key] = value.files;
      }
      var requestConfig = {
        props: this.valueStore.getOriginalProps(),
        actions: this.pendingActions,
        updated: this.valueStore.getDirtyProps(),
        children: {},
        updatedPropsFromParent: this.valueStore.getUpdatedPropsFromParent(),
        files: filesToSend
      };
      this.hooks.triggerHook("request:started", requestConfig);
      this.backendRequest = this.backend.makeRequest(requestConfig.props, requestConfig.actions, requestConfig.updated, requestConfig.children, requestConfig.updatedPropsFromParent, requestConfig.files);
      this.hooks.triggerHook("loading.state:started", this.element, this.backendRequest);
      this.pendingActions = [];
      this.valueStore.flushDirtyPropsToPending();
      this.isRequestPending = false;
      this.backendRequest.promise.then( /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(response) {
          var _headers$get;
          var backendResponse, html, _i8, _Object$values, input, headers, controls, liveUrl;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                backendResponse = new BackendResponse_default(response);
                _context2.next = 3;
                return backendResponse.getBody();
              case 3:
                html = _context2.sent;
                for (_i8 = 0, _Object$values = Object.values(_this9.pendingFiles); _i8 < _Object$values.length; _i8++) {
                  input = _Object$values[_i8];
                  input.value = "";
                }
                headers = backendResponse.response.headers;
                if (!(!((_headers$get = headers.get("Content-Type")) !== null && _headers$get !== void 0 && _headers$get.includes("application/vnd.live-component+html")) && !headers.get("X-Live-Redirect"))) {
                  _context2.next = 14;
                  break;
                }
                controls = {
                  displayError: true
                };
                _this9.valueStore.pushPendingPropsBackToDirty();
                _this9.hooks.triggerHook("response:error", backendResponse, controls);
                if (controls.displayError) _this9.renderError(html);
                _this9.backendRequest = null;
                thisPromiseResolve(backendResponse);
                return _context2.abrupt("return", response);
              case 14:
                liveUrl = backendResponse.getLiveUrl();
                if (liveUrl) history.replaceState(history.state, "", new URL(liveUrl + window.location.hash, window.location.origin));
                _this9.processRerender(html, backendResponse);
                _this9.backendRequest = null;
                thisPromiseResolve(backendResponse);
                if (_this9.isRequestPending) {
                  _this9.isRequestPending = false;
                  _this9.performRequest();
                }
                return _context2.abrupt("return", response);
              case 21:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return function (_x2) {
          return _ref5.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "processRerender",
    value: function processRerender(html, backendResponse) {
      var _this10 = this;
      var controls = {
        shouldRender: true
      };
      this.hooks.triggerHook("render:started", html, backendResponse, controls);
      if (!controls.shouldRender) return;
      if (backendResponse.response.headers.get("Location")) {
        if (this.isTurboEnabled()) Turbo.visit(backendResponse.response.headers.get("Location"));else window.location.href = backendResponse.response.headers.get("Location") || "";
        return;
      }
      this.hooks.triggerHook("loading.state:finished", this.element);
      var modifiedModelValues = {};
      Object.keys(this.valueStore.getDirtyProps()).forEach(function (modelName) {
        modifiedModelValues[modelName] = _this10.valueStore.get(modelName);
      });
      var newElement;
      try {
        newElement = htmlToElement(html);
        if (!newElement.matches("[data-controller~=live]")) throw new Error("A live component template must contain a single root controller element.");
      } catch (error) {
        console.error("There was a problem with the '".concat(this.name, "' component HTML returned:"), {
          id: this.id
        });
        throw error;
      }
      this.externalMutationTracker.handlePendingChanges();
      this.externalMutationTracker.stop();
      executeMorphdom(this.element, newElement, this.unsyncedInputsTracker.getUnsyncedInputs(), function (element) {
        return getValueFromElement(element, _this10.valueStore);
      }, this.externalMutationTracker);
      this.externalMutationTracker.start();
      var newProps = this.elementDriver.getComponentProps();
      this.valueStore.reinitializeAllProps(newProps);
      var eventsToEmit = this.elementDriver.getEventsToEmit();
      var browserEventsToDispatch = this.elementDriver.getBrowserEventsToDispatch();
      Object.keys(modifiedModelValues).forEach(function (modelName) {
        _this10.valueStore.set(modelName, modifiedModelValues[modelName]);
      });
      eventsToEmit.forEach(function (_ref6) {
        var event = _ref6.event,
          data = _ref6.data,
          target = _ref6.target,
          componentName = _ref6.componentName;
        if (target === "up") {
          _this10.emitUp(event, data, componentName);
          return;
        }
        if (target === "self") {
          _this10.emitSelf(event, data);
          return;
        }
        _this10.emit(event, data, componentName);
      });
      browserEventsToDispatch.forEach(function (_ref7) {
        var event = _ref7.event,
          payload = _ref7.payload;
        _this10.element.dispatchEvent(new CustomEvent(event, {
          detail: payload,
          bubbles: true
        }));
      });
      this.hooks.triggerHook("render:finished", this);
    }
  }, {
    key: "calculateDebounce",
    value: function calculateDebounce(debounce) {
      if (debounce === true) return this.defaultDebounce;
      if (debounce === false) return 0;
      return debounce;
    }
  }, {
    key: "clearRequestDebounceTimeout",
    value: function clearRequestDebounceTimeout() {
      if (this.requestDebounceTimeout) {
        clearTimeout(this.requestDebounceTimeout);
        this.requestDebounceTimeout = null;
      }
    }
  }, {
    key: "debouncedStartRequest",
    value: function debouncedStartRequest(debounce) {
      var _this11 = this;
      this.clearRequestDebounceTimeout();
      this.requestDebounceTimeout = window.setTimeout(function () {
        _this11.render();
      }, this.calculateDebounce(debounce));
    }
  }, {
    key: "renderError",
    value: function renderError(html) {
      var modal = document.getElementById("live-component-error");
      if (modal) modal.innerHTML = "";else {
        modal = document.createElement("div");
        modal.id = "live-component-error";
        modal.style.padding = "50px";
        modal.style.backgroundColor = "rgba(0, 0, 0, .5)";
        modal.style.zIndex = "100000";
        modal.style.position = "fixed";
        modal.style.top = "0px";
        modal.style.bottom = "0px";
        modal.style.left = "0px";
        modal.style.right = "0px";
        modal.style.display = "flex";
        modal.style.flexDirection = "column";
      }
      var iframe = document.createElement("iframe");
      iframe.style.borderRadius = "5px";
      iframe.style.flexGrow = "1";
      modal.appendChild(iframe);
      document.body.prepend(modal);
      document.body.style.overflow = "hidden";
      if (iframe.contentWindow) {
        iframe.contentWindow.document.open();
        iframe.contentWindow.document.write(html);
        iframe.contentWindow.document.close();
      }
      var closeModal = function closeModal(modal) {
        if (modal) modal.outerHTML = "";
        document.body.style.overflow = "visible";
      };
      modal.addEventListener("click", function () {
        return closeModal(modal);
      });
      modal.setAttribute("tabindex", "0");
      modal.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeModal(modal);
      });
      modal.focus();
    }
  }, {
    key: "resetPromise",
    value: function resetPromise() {
      var _this12 = this;
      this.nextRequestPromise = new Promise(function (resolve) {
        _this12.nextRequestPromiseResolve = resolve;
      });
    }
  }, {
    key: "_updateFromParentProps",
    value: function _updateFromParentProps(props) {
      if (this.valueStore.storeNewPropsFromParent(props)) this.render();
    }
  }]);
  return Component;
}();
function proxifyComponent(component) {
  return new Proxy(component, {
    get: function get(component, prop) {
      if (prop in component || typeof prop !== "string") {
        if (typeof component[prop] === "function") {
          var callable = component[prop];
          return function () {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            return callable.apply(component, args);
          };
        }
        return Reflect.get(component, prop);
      }
      if (component.valueStore.has(prop)) return component.getData(prop);
      return function (args) {
        return component.action.apply(component, [prop, args]);
      };
    },
    set: function set(target, property, value) {
      if (property in target) {
        target[property] = value;
        return true;
      }
      target.set(property, value);
      return true;
    }
  });
}
var StimulusElementDriver = /*#__PURE__*/function () {
  function StimulusElementDriver(controller) {
    _classCallCheck(this, StimulusElementDriver);
    this.controller = controller;
  }
  _createClass(StimulusElementDriver, [{
    key: "getModelName",
    value: function getModelName(element) {
      var modelDirective = getModelDirectiveFromElement(element, false);
      if (!modelDirective) return null;
      return modelDirective.action;
    }
  }, {
    key: "getComponentProps",
    value: function getComponentProps() {
      return this.controller.propsValue;
    }
  }, {
    key: "getEventsToEmit",
    value: function getEventsToEmit() {
      return this.controller.eventsToEmitValue;
    }
  }, {
    key: "getBrowserEventsToDispatch",
    value: function getBrowserEventsToDispatch() {
      return this.controller.eventsToDispatchValue;
    }
  }]);
  return StimulusElementDriver;
}();
function get_model_binding_default(modelDirective) {
  var shouldRender = true;
  var targetEventName = null;
  var debounce = false;
  var minLength = null;
  var maxLength = null;
  var minValue = null;
  var maxValue = null;
  modelDirective.modifiers.forEach(function (modifier) {
    switch (modifier.name) {
      case "on":
        if (!modifier.value) throw new Error("The \"on\" modifier in ".concat(modelDirective.getString(), " requires a value - e.g. on(change)."));
        if (!["input", "change"].includes(modifier.value)) throw new Error("The \"on\" modifier in ".concat(modelDirective.getString(), " only accepts the arguments \"input\" or \"change\"."));
        targetEventName = modifier.value;
        break;
      case "norender":
        shouldRender = false;
        break;
      case "debounce":
        debounce = modifier.value ? Number.parseInt(modifier.value) : true;
        break;
      case "min_length":
        minLength = modifier.value ? Number.parseInt(modifier.value) : null;
        break;
      case "max_length":
        maxLength = modifier.value ? Number.parseInt(modifier.value) : null;
        break;
      case "min_value":
        minValue = modifier.value ? Number.parseFloat(modifier.value) : null;
        break;
      case "max_value":
        maxValue = modifier.value ? Number.parseFloat(modifier.value) : null;
        break;
      default:
        throw new Error("Unknown modifier \"".concat(modifier.name, "\" in data-model=\"").concat(modelDirective.getString(), "\"."));
    }
  });
  var _modelDirective$actio = modelDirective.action.split(":"),
    _modelDirective$actio2 = _slicedToArray(_modelDirective$actio, 2),
    modelName = _modelDirective$actio2[0],
    innerModelName = _modelDirective$actio2[1];
  return {
    modelName: modelName,
    innerModelName: innerModelName || null,
    shouldRender: shouldRender,
    debounce: debounce,
    targetEventName: targetEventName,
    minLength: minLength,
    maxLength: maxLength,
    minValue: minValue,
    maxValue: maxValue
  };
}
var ChildComponentPlugin_default = /*#__PURE__*/function () {
  function ChildComponentPlugin_default(component) {
    _classCallCheck(this, ChildComponentPlugin_default);
    this.parentModelBindings = [];
    this.component = component;
    this.parentModelBindings = getAllModelDirectiveFromElements(this.component.element).map(get_model_binding_default);
  }
  _createClass(ChildComponentPlugin_default, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this13 = this;
      component.on("request:started", function (requestData) {
        requestData.children = _this13.getChildrenFingerprints();
      });
      component.on("model:set", function (model, value) {
        _this13.notifyParentModelChange(model, value);
      });
    }
  }, {
    key: "getChildrenFingerprints",
    value: function getChildrenFingerprints() {
      var fingerprints = {};
      this.getChildren().forEach(function (child) {
        if (!child.id) throw new Error("missing id");
        fingerprints[child.id] = {
          fingerprint: child.fingerprint,
          tag: child.element.tagName.toLowerCase()
        };
      });
      return fingerprints;
    }
  }, {
    key: "notifyParentModelChange",
    value: function notifyParentModelChange(modelName, value) {
      var parentComponent = findParent(this.component);
      if (!parentComponent) return;
      this.parentModelBindings.forEach(function (modelBinding) {
        if ((modelBinding.innerModelName || "value") !== modelName) return;
        parentComponent.set(modelBinding.modelName, value, modelBinding.shouldRender, modelBinding.debounce);
      });
    }
  }, {
    key: "getChildren",
    value: function getChildren() {
      return findChildren(this.component);
    }
  }]);
  return ChildComponentPlugin_default;
}();
var LazyPlugin_default = /*#__PURE__*/function () {
  function LazyPlugin_default() {
    _classCallCheck(this, LazyPlugin_default);
    this.intersectionObserver = null;
  }
  _createClass(LazyPlugin_default, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _component$element$at,
        _this14 = this;
      if ("lazy" !== ((_component$element$at = component.element.attributes.getNamedItem("loading")) === null || _component$element$at === void 0 ? void 0 : _component$element$at.value)) return;
      component.on("connect", function () {
        _this14.getObserver().observe(component.element);
      });
      component.on("disconnect", function () {
        var _this14$intersectionO;
        (_this14$intersectionO = _this14.intersectionObserver) === null || _this14$intersectionO === void 0 ? void 0 : _this14$intersectionO.unobserve(component.element);
      });
    }
  }, {
    key: "getObserver",
    value: function getObserver() {
      if (!this.intersectionObserver) this.intersectionObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.dispatchEvent(new CustomEvent("live:appear"));
            observer.unobserve(entry.target);
          }
        });
      });
      return this.intersectionObserver;
    }
  }]);
  return LazyPlugin_default;
}();
var LoadingPlugin_default = /*#__PURE__*/function () {
  function LoadingPlugin_default() {
    _classCallCheck(this, LoadingPlugin_default);
  }
  _createClass(LoadingPlugin_default, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this15 = this;
      component.on("loading.state:started", function (element, request) {
        _this15.startLoading(component, element, request);
      });
      component.on("loading.state:finished", function (element) {
        _this15.finishLoading(component, element);
      });
      this.finishLoading(component, component.element);
    }
  }, {
    key: "startLoading",
    value: function startLoading(component, targetElement, backendRequest) {
      this.handleLoadingToggle(component, true, targetElement, backendRequest);
    }
  }, {
    key: "finishLoading",
    value: function finishLoading(component, targetElement) {
      this.handleLoadingToggle(component, false, targetElement, null);
    }
  }, {
    key: "handleLoadingToggle",
    value: function handleLoadingToggle(component, isLoading, targetElement, backendRequest) {
      var _this16 = this;
      if (isLoading) this.addAttributes(targetElement, ["busy"]);else this.removeAttributes(targetElement, ["busy"]);
      this.getLoadingDirectives(component, targetElement).forEach(function (_ref8) {
        var element = _ref8.element,
          directives = _ref8.directives;
        if (isLoading) _this16.addAttributes(element, ["data-live-is-loading"]);else _this16.removeAttributes(element, ["data-live-is-loading"]);
        directives.forEach(function (directive) {
          _this16.handleLoadingDirective(element, isLoading, directive, backendRequest);
        });
      });
    }
  }, {
    key: "handleLoadingDirective",
    value: function handleLoadingDirective(element, isLoading, directive, backendRequest) {
      var _this17 = this;
      var finalAction = parseLoadingAction(directive.action, isLoading);
      var targetedActions = [];
      var targetedModels = [];
      var delay = 0;
      var validModifiers = /* @__PURE__ */new Map();
      validModifiers.set("delay", function (modifier) {
        if (!isLoading) return;
        delay = modifier.value ? Number.parseInt(modifier.value) : 200;
      });
      validModifiers.set("action", function (modifier) {
        if (!modifier.value) throw new Error("The \"action\" in data-loading must have an action name - e.g. action(foo). It's missing for \"".concat(directive.getString(), "\""));
        targetedActions.push(modifier.value);
      });
      validModifiers.set("model", function (modifier) {
        if (!modifier.value) throw new Error("The \"model\" in data-loading must have an action name - e.g. model(foo). It's missing for \"".concat(directive.getString(), "\""));
        targetedModels.push(modifier.value);
      });
      directive.modifiers.forEach(function (modifier) {
        if (validModifiers.has(modifier.name)) {
          var _validModifiers$get;
          ((_validModifiers$get = validModifiers.get(modifier.name)) !== null && _validModifiers$get !== void 0 ? _validModifiers$get : function () {})(modifier);
          return;
        }
        throw new Error("Unknown modifier \"".concat(modifier.name, "\" used in data-loading=\"").concat(directive.getString(), "\". Available modifiers are: ").concat(Array.from(validModifiers.keys()).join(", "), "."));
      });
      if (isLoading && targetedActions.length > 0 && backendRequest && !backendRequest.containsOneOfActions(targetedActions)) return;
      if (isLoading && targetedModels.length > 0 && backendRequest && !backendRequest.areAnyModelsUpdated(targetedModels)) return;
      var loadingDirective;
      switch (finalAction) {
        case "show":
          loadingDirective = function loadingDirective() {
            return _this17.showElement(element);
          };
          break;
        case "hide":
          loadingDirective = function loadingDirective() {
            return _this17.hideElement(element);
          };
          break;
        case "addClass":
          loadingDirective = function loadingDirective() {
            return _this17.addClass(element, directive.args);
          };
          break;
        case "removeClass":
          loadingDirective = function loadingDirective() {
            return _this17.removeClass(element, directive.args);
          };
          break;
        case "addAttribute":
          loadingDirective = function loadingDirective() {
            return _this17.addAttributes(element, directive.args);
          };
          break;
        case "removeAttribute":
          loadingDirective = function loadingDirective() {
            return _this17.removeAttributes(element, directive.args);
          };
          break;
        default:
          throw new Error("Unknown data-loading action \"".concat(finalAction, "\""));
      }
      if (delay) {
        window.setTimeout(function () {
          if (backendRequest && !backendRequest.isResolved) loadingDirective();
        }, delay);
        return;
      }
      loadingDirective();
    }
  }, {
    key: "getLoadingDirectives",
    value: function getLoadingDirectives(component, element) {
      var loadingDirectives = [];
      var matchingElements = Array.from(element.querySelectorAll("[data-loading]"));
      matchingElements = matchingElements.filter(function (elt) {
        return elementBelongsToThisComponent(elt, component);
      });
      if (element.hasAttribute("data-loading")) matchingElements = [element].concat(_toConsumableArray(matchingElements));
      matchingElements.forEach(function (element) {
        if (!(element instanceof HTMLElement) && !(element instanceof SVGElement)) throw new Error("Invalid Element Type");
        var directives = parseDirectives(element.dataset.loading || "show");
        loadingDirectives.push({
          element: element,
          directives: directives
        });
      });
      return loadingDirectives;
    }
  }, {
    key: "showElement",
    value: function showElement(element) {
      element.style.display = "revert";
    }
  }, {
    key: "hideElement",
    value: function hideElement(element) {
      element.style.display = "none";
    }
  }, {
    key: "addClass",
    value: function addClass(element, classes) {
      var _element$classList3;
      (_element$classList3 = element.classList).add.apply(_element$classList3, _toConsumableArray(combineSpacedArray(classes)));
    }
  }, {
    key: "removeClass",
    value: function removeClass(element, classes) {
      var _element$classList4;
      (_element$classList4 = element.classList).remove.apply(_element$classList4, _toConsumableArray(combineSpacedArray(classes)));
      if (element.classList.length === 0) element.removeAttribute("class");
    }
  }, {
    key: "addAttributes",
    value: function addAttributes(element, attributes) {
      attributes.forEach(function (attribute) {
        element.setAttribute(attribute, "");
      });
    }
  }, {
    key: "removeAttributes",
    value: function removeAttributes(element, attributes) {
      attributes.forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    }
  }]);
  return LoadingPlugin_default;
}();
var parseLoadingAction = function parseLoadingAction(action, isLoading) {
  switch (action) {
    case "show":
      return isLoading ? "show" : "hide";
    case "hide":
      return isLoading ? "hide" : "show";
    case "addClass":
      return isLoading ? "addClass" : "removeClass";
    case "removeClass":
      return isLoading ? "removeClass" : "addClass";
    case "addAttribute":
      return isLoading ? "addAttribute" : "removeAttribute";
    case "removeAttribute":
      return isLoading ? "removeAttribute" : "addAttribute";
  }
  throw new Error("Unknown data-loading action \"".concat(action, "\""));
};
var PageUnloadingPlugin_default = /*#__PURE__*/function () {
  function PageUnloadingPlugin_default() {
    _classCallCheck(this, PageUnloadingPlugin_default);
    this.isConnected = false;
  }
  _createClass(PageUnloadingPlugin_default, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this18 = this;
      component.on("render:started", function (html, response, controls) {
        if (!_this18.isConnected) controls.shouldRender = false;
      });
      component.on("connect", function () {
        _this18.isConnected = true;
      });
      component.on("disconnect", function () {
        _this18.isConnected = false;
      });
    }
  }]);
  return PageUnloadingPlugin_default;
}();
var PollingDirector_default = /*#__PURE__*/function () {
  function PollingDirector_default(component) {
    _classCallCheck(this, PollingDirector_default);
    this.isPollingActive = true;
    this.pollingIntervals = [];
    this.component = component;
  }
  _createClass(PollingDirector_default, [{
    key: "addPoll",
    value: function addPoll(actionName, duration) {
      this.polls.push({
        actionName: actionName,
        duration: duration
      });
      if (this.isPollingActive) this.initiatePoll(actionName, duration);
    }
  }, {
    key: "startAllPolling",
    value: function startAllPolling() {
      var _this19 = this;
      if (this.isPollingActive) return;
      this.isPollingActive = true;
      this.polls.forEach(function (_ref9) {
        var actionName = _ref9.actionName,
          duration = _ref9.duration;
        _this19.initiatePoll(actionName, duration);
      });
    }
  }, {
    key: "stopAllPolling",
    value: function stopAllPolling() {
      this.isPollingActive = false;
      this.pollingIntervals.forEach(function (interval) {
        clearInterval(interval);
      });
    }
  }, {
    key: "clearPolling",
    value: function clearPolling() {
      this.stopAllPolling();
      this.polls = [];
      this.startAllPolling();
    }
  }, {
    key: "initiatePoll",
    value: function initiatePoll(actionName, duration) {
      var _this20 = this;
      var callback;
      if (actionName === "$render") callback = function callback() {
        _this20.component.render();
      };else callback = function callback() {
        _this20.component.action(actionName, {}, 0);
      };
      var timer = window.setInterval(function () {
        callback();
      }, duration);
      this.pollingIntervals.push(timer);
    }
  }]);
  return PollingDirector_default;
}();
var PollingPlugin_default = /*#__PURE__*/function () {
  function PollingPlugin_default() {
    _classCallCheck(this, PollingPlugin_default);
  }
  _createClass(PollingPlugin_default, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this21 = this;
      this.element = component.element;
      this.pollingDirector = new PollingDirector_default(component);
      this.initializePolling();
      component.on("connect", function () {
        _this21.pollingDirector.startAllPolling();
      });
      component.on("disconnect", function () {
        _this21.pollingDirector.stopAllPolling();
      });
      component.on("render:finished", function () {
        _this21.initializePolling();
      });
    }
  }, {
    key: "addPoll",
    value: function addPoll(actionName, duration) {
      this.pollingDirector.addPoll(actionName, duration);
    }
  }, {
    key: "clearPolling",
    value: function clearPolling() {
      this.pollingDirector.clearPolling();
    }
  }, {
    key: "initializePolling",
    value: function initializePolling() {
      var _this22 = this;
      this.clearPolling();
      if (this.element.dataset.poll === void 0) return;
      var rawPollConfig = this.element.dataset.poll;
      parseDirectives(rawPollConfig || "$render").forEach(function (directive) {
        var duration = 2e3;
        directive.modifiers.forEach(function (modifier) {
          switch (modifier.name) {
            case "delay":
              if (modifier.value) duration = Number.parseInt(modifier.value);
              break;
            default:
              console.warn("Unknown modifier \"".concat(modifier.name, "\" in data-poll \"").concat(rawPollConfig, "\"."));
          }
        });
        _this22.addPoll(directive.action, duration);
      });
    }
  }]);
  return PollingPlugin_default;
}();
var SetValueOntoModelFieldsPlugin_default = /*#__PURE__*/function () {
  function SetValueOntoModelFieldsPlugin_default() {
    _classCallCheck(this, SetValueOntoModelFieldsPlugin_default);
  }
  _createClass(SetValueOntoModelFieldsPlugin_default, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this23 = this;
      this.synchronizeValueOfModelFields(component);
      component.on("render:finished", function () {
        _this23.synchronizeValueOfModelFields(component);
      });
    }
  }, {
    key: "synchronizeValueOfModelFields",
    value: function synchronizeValueOfModelFields(component) {
      component.element.querySelectorAll("[data-model]").forEach(function (element) {
        if (!(element instanceof HTMLElement)) throw new Error("Invalid element using data-model.");
        if (element instanceof HTMLFormElement) return;
        if (!elementBelongsToThisComponent(element, component)) return;
        var modelDirective = getModelDirectiveFromElement(element);
        if (!modelDirective) return;
        var modelName = modelDirective.action;
        if (component.getUnsyncedModels().includes(modelName)) return;
        if (component.valueStore.has(modelName)) setValueOnElement(element, component.valueStore.get(modelName));
        if (element instanceof HTMLSelectElement && !element.multiple) component.valueStore.set(modelName, getValueFromElement(element, component.valueStore));
      });
    }
  }]);
  return SetValueOntoModelFieldsPlugin_default;
}();
var ValidatedFieldsPlugin_default = /*#__PURE__*/function () {
  function ValidatedFieldsPlugin_default() {
    _classCallCheck(this, ValidatedFieldsPlugin_default);
  }
  _createClass(ValidatedFieldsPlugin_default, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this24 = this;
      component.on("model:set", function (modelName) {
        _this24.handleModelSet(modelName, component.valueStore);
      });
    }
  }, {
    key: "handleModelSet",
    value: function handleModelSet(modelName, valueStore) {
      if (valueStore.has("validatedFields")) {
        var validatedFields = _toConsumableArray(valueStore.get("validatedFields"));
        if (!validatedFields.includes(modelName)) validatedFields.push(modelName);
        valueStore.set("validatedFields", validatedFields);
      }
    }
  }]);
  return ValidatedFieldsPlugin_default;
}();
var LiveControllerDefault = /*#__PURE__*/function (_Controller) {
  _inherits(LiveControllerDefault, _Controller);
  var _super = _createSuper(LiveControllerDefault);
  function LiveControllerDefault() {
    var _this25;
    _classCallCheck(this, LiveControllerDefault);
    for (var _len3 = arguments.length, _args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      _args[_key3] = arguments[_key3];
    }
    _this25 = _super.call.apply(_super, [this].concat(_args));
    _this25.pendingActionTriggerModelElement = null;
    _this25.elementEventListeners = [{
      event: "input",
      callback: function callback(event) {
        return _this25.handleInputEvent(event);
      }
    }, {
      event: "change",
      callback: function callback(event) {
        return _this25.handleChangeEvent(event);
      }
    }];
    _this25.pendingFiles = {};
    return _this25;
  }
  _createClass(LiveControllerDefault, [{
    key: "initialize",
    value: function initialize() {
      this.mutationObserver = new MutationObserver(this.onMutations.bind(this));
      this.createComponent();
    }
  }, {
    key: "connect",
    value: function connect() {
      this.connectComponent();
      this.mutationObserver.observe(this.element, {
        attributes: true
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.disconnectComponent();
      this.mutationObserver.disconnect();
    }
  }, {
    key: "update",
    value: function update(event) {
      if (event.type === "input" || event.type === "change") throw new Error("Since LiveComponents 2.3, you no longer need data-action=\"live#update\" on form elements. Found on element: ".concat(getElementAsTagText(event.currentTarget)));
      this.updateModelFromElementEvent(event.currentTarget, null);
    }
  }, {
    key: "action",
    value: function action(event) {
      var _this26 = this;
      var params = event.params;
      if (!params.action) throw new Error("No action name provided on element: ".concat(getElementAsTagText(event.currentTarget), ". Did you forget to add the \"data-live-action-param\" attribute?"));
      var rawAction = params.action;
      var actionArgs = _objectSpread({}, params);
      delete actionArgs.action;
      var directives = parseDirectives(rawAction);
      var debounce = false;
      directives.forEach(function (directive) {
        var pendingFiles = {};
        var validModifiers = /* @__PURE__ */new Map();
        validModifiers.set("stop", function () {
          event.stopPropagation();
        });
        validModifiers.set("self", function () {
          if (event.target !== event.currentTarget) return;
        });
        validModifiers.set("debounce", function (modifier) {
          debounce = modifier.value ? Number.parseInt(modifier.value) : true;
        });
        validModifiers.set("files", function (modifier) {
          if (!modifier.value) pendingFiles = _this26.pendingFiles;else if (_this26.pendingFiles[modifier.value]) pendingFiles[modifier.value] = _this26.pendingFiles[modifier.value];
        });
        directive.modifiers.forEach(function (modifier) {
          if (validModifiers.has(modifier.name)) {
            var _validModifiers$get2;
            ((_validModifiers$get2 = validModifiers.get(modifier.name)) !== null && _validModifiers$get2 !== void 0 ? _validModifiers$get2 : function () {})(modifier);
            return;
          }
          console.warn("Unknown modifier ".concat(modifier.name, " in action \"").concat(rawAction, "\". Available modifiers are: ").concat(Array.from(validModifiers.keys()).join(", "), "."));
        });
        for (var _i9 = 0, _Object$entries4 = Object.entries(pendingFiles); _i9 < _Object$entries4.length; _i9++) {
          var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i9], 2),
            key = _Object$entries4$_i[0],
            input = _Object$entries4$_i[1];
          if (input.files) _this26.component.files(key, input);
          delete _this26.pendingFiles[key];
        }
        _this26.component.action(directive.action, actionArgs, debounce);
        if (getModelDirectiveFromElement(event.currentTarget, false)) _this26.pendingActionTriggerModelElement = event.currentTarget;
      });
    }
  }, {
    key: "$render",
    value: function $render() {
      return this.component.render();
    }
  }, {
    key: "emit",
    value: function emit(event) {
      var _this27 = this;
      this.getEmitDirectives(event).forEach(function (_ref10) {
        var name = _ref10.name,
          data = _ref10.data,
          nameMatch = _ref10.nameMatch;
        _this27.component.emit(name, data, nameMatch);
      });
    }
  }, {
    key: "emitUp",
    value: function emitUp(event) {
      var _this28 = this;
      this.getEmitDirectives(event).forEach(function (_ref11) {
        var name = _ref11.name,
          data = _ref11.data,
          nameMatch = _ref11.nameMatch;
        _this28.component.emitUp(name, data, nameMatch);
      });
    }
  }, {
    key: "emitSelf",
    value: function emitSelf(event) {
      var _this29 = this;
      this.getEmitDirectives(event).forEach(function (_ref12) {
        var name = _ref12.name,
          data = _ref12.data;
        _this29.component.emitSelf(name, data);
      });
    }
  }, {
    key: "$updateModel",
    value: function $updateModel(model, value) {
      var shouldRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var debounce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      return this.component.set(model, value, shouldRender, debounce);
    }
  }, {
    key: "propsUpdatedFromParentValueChanged",
    value: function propsUpdatedFromParentValueChanged() {
      this.component._updateFromParentProps(this.propsUpdatedFromParentValue);
    }
  }, {
    key: "fingerprintValueChanged",
    value: function fingerprintValueChanged() {
      this.component.fingerprint = this.fingerprintValue;
    }
  }, {
    key: "getEmitDirectives",
    value: function getEmitDirectives(event) {
      var params = event.params;
      if (!params.event) throw new Error("No event name provided on element: ".concat(getElementAsTagText(event.currentTarget), ". Did you forget to add the \"data-live-event-param\" attribute?"));
      var eventInfo = params.event;
      var eventArgs = _objectSpread({}, params);
      delete eventArgs.event;
      var directives = parseDirectives(eventInfo);
      var emits = [];
      directives.forEach(function (directive) {
        var nameMatch = null;
        directive.modifiers.forEach(function (modifier) {
          switch (modifier.name) {
            case "name":
              nameMatch = modifier.value;
              break;
            default:
              throw new Error("Unknown modifier ".concat(modifier.name, " in event \"").concat(eventInfo, "\"."));
          }
        });
        emits.push({
          name: directive.action,
          data: eventArgs,
          nameMatch: nameMatch
        });
      });
      return emits;
    }
  }, {
    key: "createComponent",
    value: function createComponent() {
      var _this30 = this;
      var id = this.element.id || null;
      this.component = new Component(this.element, this.nameValue, this.propsValue, this.listenersValue, id, LiveControllerDefault.backendFactory(this), new StimulusElementDriver(this));
      this.proxiedComponent = proxifyComponent(this.component);
      Object.defineProperty(this.element, "__component", {
        value: this.proxiedComponent,
        writable: true
      });
      if (this.hasDebounceValue) this.component.defaultDebounce = this.debounceValue;
      [new LoadingPlugin_default(), new LazyPlugin_default(), new ValidatedFieldsPlugin_default(), new PageUnloadingPlugin_default(), new PollingPlugin_default(), new SetValueOntoModelFieldsPlugin_default(), new ChildComponentPlugin_default(this.component)].forEach(function (plugin) {
        _this30.component.addPlugin(plugin);
      });
    }
  }, {
    key: "connectComponent",
    value: function connectComponent() {
      var _this31 = this;
      this.component.connect();
      this.mutationObserver.observe(this.element, {
        attributes: true
      });
      this.elementEventListeners.forEach(function (_ref13) {
        var event = _ref13.event,
          callback = _ref13.callback;
        _this31.component.element.addEventListener(event, callback);
      });
      this.dispatchEvent("connect");
    }
  }, {
    key: "disconnectComponent",
    value: function disconnectComponent() {
      var _this32 = this;
      this.component.disconnect();
      this.elementEventListeners.forEach(function (_ref14) {
        var event = _ref14.event,
          callback = _ref14.callback;
        _this32.component.element.removeEventListener(event, callback);
      });
      this.dispatchEvent("disconnect");
    }
  }, {
    key: "handleInputEvent",
    value: function handleInputEvent(event) {
      var target = event.target;
      if (!target) return;
      this.updateModelFromElementEvent(target, "input");
    }
  }, {
    key: "handleChangeEvent",
    value: function handleChangeEvent(event) {
      var target = event.target;
      if (!target) return;
      this.updateModelFromElementEvent(target, "change");
    }
  }, {
    key: "updateModelFromElementEvent",
    value: function updateModelFromElementEvent(element, eventName) {
      if (!elementBelongsToThisComponent(element, this.component)) return;
      if (!(element instanceof HTMLElement)) throw new Error("Could not update model for non HTMLElement");
      if (element instanceof HTMLInputElement && element.type === "file") {
        var _element$files;
        var key = element.name;
        if ((_element$files = element.files) !== null && _element$files !== void 0 && _element$files.length) this.pendingFiles[key] = element;else if (this.pendingFiles[key]) delete this.pendingFiles[key];
      }
      var modelDirective = getModelDirectiveFromElement(element, false);
      if (!modelDirective) return;
      var modelBinding = get_model_binding_default(modelDirective);
      if (!modelBinding.targetEventName) modelBinding.targetEventName = "input";
      if (this.pendingActionTriggerModelElement === element) modelBinding.shouldRender = false;
      if (eventName === "change" && modelBinding.targetEventName === "input") modelBinding.targetEventName = "change";
      if (eventName && modelBinding.targetEventName !== eventName) return;
      if (false === modelBinding.debounce) if (modelBinding.targetEventName === "input") modelBinding.debounce = true;else modelBinding.debounce = 0;
      var finalValue = getValueFromElement(element, this.component.valueStore);
      var finalValueIsEmpty = finalValue === "" || finalValue === null || finalValue === void 0;
      if (isTextualInputElement(element) || isTextareaElement(element)) {
        if (!finalValueIsEmpty && modelBinding.minLength !== null && typeof finalValue === "string" && finalValue.length < modelBinding.minLength) return;
        if (!finalValueIsEmpty && modelBinding.maxLength !== null && typeof finalValue === "string" && finalValue.length > modelBinding.maxLength) return;
      }
      if (isNumericalInputElement(element)) {
        if (!finalValueIsEmpty) {
          var numericValue = Number(finalValue);
          if (modelBinding.minValue !== null && numericValue < modelBinding.minValue) return;
          if (modelBinding.maxValue !== null && numericValue > modelBinding.maxValue) return;
        }
      }
      this.component.set(modelBinding.modelName, finalValue, modelBinding.shouldRender, modelBinding.debounce);
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name) {
      var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var canBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var cancelable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      detail.controller = this;
      detail.component = this.proxiedComponent;
      this.dispatch(name, {
        detail: detail,
        prefix: "live",
        cancelable: cancelable,
        bubbles: canBubble
      });
    }
  }, {
    key: "onMutations",
    value: function onMutations(mutations) {
      var _this33 = this;
      mutations.forEach(function (mutation) {
        if (mutation.type === "attributes" && mutation.attributeName === "id" && _this33.element.id !== _this33.component.id) {
          _this33.disconnectComponent();
          _this33.createComponent();
          _this33.connectComponent();
        }
      });
    }
  }]);
  return LiveControllerDefault;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_67__.Controller);
LiveControllerDefault.values = {
  name: String,
  url: String,
  props: {
    type: Object,
    "default": {}
  },
  propsUpdatedFromParent: {
    type: Object,
    "default": {}
  },
  listeners: {
    type: Array,
    "default": []
  },
  eventsToEmit: {
    type: Array,
    "default": []
  },
  eventsToDispatch: {
    type: Array,
    "default": []
  },
  debounce: {
    type: Number,
    "default": 150
  },
  fingerprint: {
    type: String,
    "default": ""
  },
  requestMethod: {
    type: String,
    "default": "post"
  },
  fetchCredentials: {
    type: String,
    "default": "same-origin"
  }
};
LiveControllerDefault.backendFactory = function (controller) {
  return new Backend_default(controller.urlValue, controller.requestMethodValue, controller.fetchCredentialsValue);
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-8c6c2e","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_alpinejs_dist_module_-765df5","assets_website_styles_app_css-node_modules_flowbite_src_themes_default_css"], () => (__webpack_exec__("./assets/website/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVO0VBQUEsT0FBSyxJQUFJdG1CLGVBQWUsQ0FBQ3NtQixVQUFVLENBQUN1SyxRQUFRLEVBQUV2SyxVQUFVLENBQUN3SyxrQkFBa0IsRUFBRXhLLFVBQVUsQ0FBQ3lLLHFCQUFxQixDQUFDO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvd2Vic2l0ZS9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy93ZWJzaXRlL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3dlYnNpdGUvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy93ZWJzaXRlL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvd2Vic2l0ZS9zdHlsZXMvYXBwLmNzcz9hMzkxIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LWxpdmUtY29tcG9uZW50L2Fzc2V0cy9kaXN0L2xpdmVfY29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL3dlYnNpdGUvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy93ZWJzaXRlL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiaW1wb3J0IGNvbnRyb2xsZXJfMCBmcm9tICdAc3ltZm9ueS91eC1saXZlLWNvbXBvbmVudC9kaXN0L2xpdmVfY29udHJvbGxlci5qcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gICdsaXZlJzogY29udHJvbGxlcl8wLFxufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9hcHAuY3NzXCI7XG5pbXBvcnQgJy4vYm9vdHN0cmFwLmpzJztcbmltcG9ydCB7IGluaXRDYXJvdXNlbHMgfSBmcm9tICdmbG93Yml0ZSc7XG5pbXBvcnQgQWxwaW5lIGZyb20gXCJhbHBpbmVqc1wiO1xuXG53aW5kb3cuQWxwaW5lID0gQWxwaW5lO1xuXG5BbHBpbmUuZGF0YShcImNsaXBib2FyZEJsb2NrXCIsICgpID0+ICh7XG4gIGNvcGllZDogZmFsc2UsXG4gIGNvcHlDb2RlKCkge1xuICAgIGNvbnN0IGNvZGVCbG9jayA9IHRoaXMuJHJlZnMuY29kZUJsb2NrO1xuICAgIGNvbnN0IGNvZGVUZXh0ID0gY29kZUJsb2NrLnRleHRDb250ZW50O1xuXG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZFxuICAgICAgLndyaXRlVGV4dChjb2RlVGV4dClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5jb3BpZWQgPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNvcGllZCA9IGZhbHNlO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGNvcHkgdGV4dDogXCIsIGVycik7XG4gICAgICB9KTtcbiAgfSxcbn0pKTtcblxuQWxwaW5lLnN0YXJ0KCk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oZSkge1xuICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ2NvbnRhY3QtbWVzc2FnZScpIHtcbiAgICAgICAgdmFyIGxlbiA9IGUudGFyZ2V0LnZhbHVlLmxlbmd0aDtcbiAgICAgICAgdmFyIG1heCA9IHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJykgfHwgJzAnLCAxMCk7XG4gICAgICAgIHZhciBjb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21zZy1jb3VudGVyJyk7XG4gICAgICAgIGlmIChjb3VudGVyKSB7XG4gICAgICAgICAgICBjb3VudGVyLnRleHRDb250ZW50ID0gbGVuICsgJyAvICcgKyBtYXg7XG4gICAgICAgICAgICBjb3VudGVyLmNsYXNzTmFtZSA9IGxlbiA+IG1heCA/ICd0ZXh0LXJlZC01MDAnIDogbGVuID4gbWF4ICogMC44MyA/ICd0ZXh0LWFtYmVyLTUwMCcgOiAndGV4dC1ncmF5LTQwMCc7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoZS50YXJnZXQuaWQgPT09ICdjb250YWN0LWVtYWlsJyAmJiBlLnRhcmdldC52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBoaW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsLWhpbnQnKTtcbiAgICAgICAgaWYgKGhpbnQpIHtcbiAgICAgICAgICAgIGhpbnQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJywgZS50YXJnZXQuY2hlY2tWYWxpZGl0eSgpKTtcbiAgICAgICAgfVxuICAgIH1cbn0sIHRydWUpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGluaXRDYXJvdXNlbHMoKTtcbiAgfSwgMTAwKTtcbn0pO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIkBob3R3aXJlZC9zdGltdWx1c1wiO1xudmFyIEJhY2tlbmRSZXF1ZXN0X2RlZmF1bHQgPSBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHByb21pc2UsIGFjdGlvbnMsIHVwZGF0ZU1vZGVscykge1xuXHRcdHRoaXMuaXNSZXNvbHZlZCA9IGZhbHNlO1xuXHRcdHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG5cdFx0dGhpcy5wcm9taXNlLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHR0aGlzLmlzUmVzb2x2ZWQgPSB0cnVlO1xuXHRcdFx0cmV0dXJuIHJlc3BvbnNlO1xuXHRcdH0pO1xuXHRcdHRoaXMuYWN0aW9ucyA9IGFjdGlvbnM7XG5cdFx0dGhpcy51cGRhdGVkTW9kZWxzID0gdXBkYXRlTW9kZWxzO1xuXHR9XG5cdGNvbnRhaW5zT25lT2ZBY3Rpb25zKHRhcmdldGVkQWN0aW9ucykge1xuXHRcdHJldHVybiB0aGlzLmFjdGlvbnMuZmlsdGVyKChhY3Rpb24pID0+IHRhcmdldGVkQWN0aW9ucy5pbmNsdWRlcyhhY3Rpb24pKS5sZW5ndGggPiAwO1xuXHR9XG5cdGFyZUFueU1vZGVsc1VwZGF0ZWQodGFyZ2V0ZWRNb2RlbHMpIHtcblx0XHRyZXR1cm4gdGhpcy51cGRhdGVkTW9kZWxzLmZpbHRlcigobW9kZWwpID0+IHRhcmdldGVkTW9kZWxzLmluY2x1ZGVzKG1vZGVsKSkubGVuZ3RoID4gMDtcblx0fVxufTtcbnZhciBSZXF1ZXN0QnVpbGRlcl9kZWZhdWx0ID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih1cmwsIG1ldGhvZCA9IFwicG9zdFwiLCBjcmVkZW50aWFscyA9IFwic2FtZS1vcmlnaW5cIikge1xuXHRcdHRoaXMudXJsID0gdXJsO1xuXHRcdHRoaXMubWV0aG9kID0gbWV0aG9kO1xuXHRcdHRoaXMuY3JlZGVudGlhbHMgPSBjcmVkZW50aWFscztcblx0fVxuXHRidWlsZFJlcXVlc3QocHJvcHMsIGFjdGlvbnMsIHVwZGF0ZWQsIGNoaWxkcmVuLCB1cGRhdGVkUHJvcHNGcm9tUGFyZW50LCBmaWxlcykge1xuXHRcdGNvbnN0IHNwbGl0VXJsID0gdGhpcy51cmwuc3BsaXQoXCI/XCIpO1xuXHRcdGxldCBbdXJsXSA9IHNwbGl0VXJsO1xuXHRcdGNvbnN0IFssIHF1ZXJ5U3RyaW5nXSA9IHNwbGl0VXJsO1xuXHRcdGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcgfHwgXCJcIik7XG5cdFx0Y29uc3QgZmV0Y2hPcHRpb25zID0ge307XG5cdFx0ZmV0Y2hPcHRpb25zLmNyZWRlbnRpYWxzID0gdGhpcy5jcmVkZW50aWFscztcblx0XHRmZXRjaE9wdGlvbnMuaGVhZGVycyA9IHtcblx0XHRcdEFjY2VwdDogXCJhcHBsaWNhdGlvbi92bmQubGl2ZS1jb21wb25lbnQraHRtbFwiLFxuXHRcdFx0XCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcblx0XHRcdFwiWC1MaXZlLVVybFwiOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoXG5cdFx0fTtcblx0XHRjb25zdCB0b3RhbEZpbGVzID0gT2JqZWN0LmVudHJpZXMoZmlsZXMpLnJlZHVjZSgodG90YWwsIGN1cnJlbnQpID0+IHRvdGFsICsgY3VycmVudC5sZW5ndGgsIDApO1xuXHRcdGNvbnN0IGhhc0ZpbmdlcnByaW50cyA9IE9iamVjdC5rZXlzKGNoaWxkcmVuKS5sZW5ndGggPiAwO1xuXHRcdGlmIChhY3Rpb25zLmxlbmd0aCA9PT0gMCAmJiB0b3RhbEZpbGVzID09PSAwICYmIHRoaXMubWV0aG9kID09PSBcImdldFwiICYmIHRoaXMud2lsbERhdGFGaXRJblVybChKU09OLnN0cmluZ2lmeShwcm9wcyksIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWQpLCBwYXJhbXMsIEpTT04uc3RyaW5naWZ5KGNoaWxkcmVuKSwgSlNPTi5zdHJpbmdpZnkodXBkYXRlZFByb3BzRnJvbVBhcmVudCkpKSB7XG5cdFx0XHRwYXJhbXMuc2V0KFwicHJvcHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvcHMpKTtcblx0XHRcdHBhcmFtcy5zZXQoXCJ1cGRhdGVkXCIsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWQpKTtcblx0XHRcdGlmIChPYmplY3Qua2V5cyh1cGRhdGVkUHJvcHNGcm9tUGFyZW50KS5sZW5ndGggPiAwKSBwYXJhbXMuc2V0KFwicHJvcHNGcm9tUGFyZW50XCIsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQpKTtcblx0XHRcdGlmIChoYXNGaW5nZXJwcmludHMpIHBhcmFtcy5zZXQoXCJjaGlsZHJlblwiLCBKU09OLnN0cmluZ2lmeShjaGlsZHJlbikpO1xuXHRcdFx0ZmV0Y2hPcHRpb25zLm1ldGhvZCA9IFwiR0VUXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZldGNoT3B0aW9ucy5tZXRob2QgPSBcIlBPU1RcIjtcblx0XHRcdGNvbnN0IHJlcXVlc3REYXRhID0ge1xuXHRcdFx0XHRwcm9wcyxcblx0XHRcdFx0dXBkYXRlZFxuXHRcdFx0fTtcblx0XHRcdGlmIChPYmplY3Qua2V5cyh1cGRhdGVkUHJvcHNGcm9tUGFyZW50KS5sZW5ndGggPiAwKSByZXF1ZXN0RGF0YS5wcm9wc0Zyb21QYXJlbnQgPSB1cGRhdGVkUHJvcHNGcm9tUGFyZW50O1xuXHRcdFx0aWYgKGhhc0ZpbmdlcnByaW50cykgcmVxdWVzdERhdGEuY2hpbGRyZW4gPSBjaGlsZHJlbjtcblx0XHRcdGlmIChhY3Rpb25zLmxlbmd0aCA+IDApIGlmIChhY3Rpb25zLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRyZXF1ZXN0RGF0YS5hcmdzID0gYWN0aW9uc1swXS5hcmdzO1xuXHRcdFx0XHR1cmwgKz0gYC8ke2VuY29kZVVSSUNvbXBvbmVudChhY3Rpb25zWzBdLm5hbWUpfWA7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR1cmwgKz0gXCIvX2JhdGNoXCI7XG5cdFx0XHRcdHJlcXVlc3REYXRhLmFjdGlvbnMgPSBhY3Rpb25zO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblx0XHRcdGZvcm1EYXRhLmFwcGVuZChcImRhdGFcIiwgSlNPTi5zdHJpbmdpZnkocmVxdWVzdERhdGEpKTtcblx0XHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGZpbGVzKSkge1xuXHRcdFx0XHRjb25zdCBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIGZvcm1EYXRhLmFwcGVuZChrZXksIHZhbHVlW2ldKTtcblx0XHRcdH1cblx0XHRcdGZldGNoT3B0aW9ucy5ib2R5ID0gZm9ybURhdGE7XG5cdFx0fVxuXHRcdGNvbnN0IHBhcmFtc1N0cmluZyA9IHBhcmFtcy50b1N0cmluZygpO1xuXHRcdHJldHVybiB7XG5cdFx0XHR1cmw6IGAke3VybH0ke3BhcmFtc1N0cmluZy5sZW5ndGggPiAwID8gYD8ke3BhcmFtc1N0cmluZ31gIDogXCJcIn1gLFxuXHRcdFx0ZmV0Y2hPcHRpb25zXG5cdFx0fTtcblx0fVxuXHR3aWxsRGF0YUZpdEluVXJsKHByb3BzSnNvbiwgdXBkYXRlZEpzb24sIHBhcmFtcywgY2hpbGRyZW5Kc29uLCBwcm9wc0Zyb21QYXJlbnRKc29uKSB7XG5cdFx0cmV0dXJuIChuZXcgVVJMU2VhcmNoUGFyYW1zKHByb3BzSnNvbiArIHVwZGF0ZWRKc29uICsgY2hpbGRyZW5Kc29uICsgcHJvcHNGcm9tUGFyZW50SnNvbikudG9TdHJpbmcoKSArIHBhcmFtcy50b1N0cmluZygpKS5sZW5ndGggPCAxNTAwO1xuXHR9XG59O1xudmFyIEJhY2tlbmRfZGVmYXVsdCA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IodXJsLCBtZXRob2QgPSBcInBvc3RcIiwgY3JlZGVudGlhbHMgPSBcInNhbWUtb3JpZ2luXCIpIHtcblx0XHR0aGlzLnJlcXVlc3RCdWlsZGVyID0gbmV3IFJlcXVlc3RCdWlsZGVyX2RlZmF1bHQodXJsLCBtZXRob2QsIGNyZWRlbnRpYWxzKTtcblx0fVxuXHRtYWtlUmVxdWVzdChwcm9wcywgYWN0aW9ucywgdXBkYXRlZCwgY2hpbGRyZW4sIHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQsIGZpbGVzKSB7XG5cdFx0Y29uc3QgeyB1cmwsIGZldGNoT3B0aW9ucyB9ID0gdGhpcy5yZXF1ZXN0QnVpbGRlci5idWlsZFJlcXVlc3QocHJvcHMsIGFjdGlvbnMsIHVwZGF0ZWQsIGNoaWxkcmVuLCB1cGRhdGVkUHJvcHNGcm9tUGFyZW50LCBmaWxlcyk7XG5cdFx0cmV0dXJuIG5ldyBCYWNrZW5kUmVxdWVzdF9kZWZhdWx0KGZldGNoKHVybCwgZmV0Y2hPcHRpb25zKSwgYWN0aW9ucy5tYXAoKGJhY2tlbmRBY3Rpb24pID0+IGJhY2tlbmRBY3Rpb24ubmFtZSksIE9iamVjdC5rZXlzKHVwZGF0ZWQpKTtcblx0fVxufTtcbnZhciBCYWNrZW5kUmVzcG9uc2VfZGVmYXVsdCA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IocmVzcG9uc2UpIHtcblx0XHR0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG5cdH1cblx0YXN5bmMgZ2V0Qm9keSgpIHtcblx0XHRpZiAoIXRoaXMuYm9keSkgdGhpcy5ib2R5ID0gYXdhaXQgdGhpcy5yZXNwb25zZS50ZXh0KCk7XG5cdFx0cmV0dXJuIHRoaXMuYm9keTtcblx0fVxuXHRnZXRMaXZlVXJsKCkge1xuXHRcdGlmICh2b2lkIDAgPT09IHRoaXMubGl2ZVVybCkgdGhpcy5saXZlVXJsID0gdGhpcy5yZXNwb25zZS5oZWFkZXJzLmdldChcIlgtTGl2ZS1VcmxcIik7XG5cdFx0cmV0dXJuIHRoaXMubGl2ZVVybDtcblx0fVxufTtcbmZ1bmN0aW9uIGdldEVsZW1lbnRBc1RhZ1RleHQoZWxlbWVudCkge1xuXHRyZXR1cm4gZWxlbWVudC5pbm5lckhUTUwgPyBlbGVtZW50Lm91dGVySFRNTC5zbGljZSgwLCBlbGVtZW50Lm91dGVySFRNTC5pbmRleE9mKGVsZW1lbnQuaW5uZXJIVE1MKSkgOiBlbGVtZW50Lm91dGVySFRNTDtcbn1cbmxldCBjb21wb25lbnRNYXBCeUVsZW1lbnQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbmxldCBjb21wb25lbnRNYXBCeUNvbXBvbmVudCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5jb25zdCByZWdpc3RlckNvbXBvbmVudCA9IChjb21wb25lbnQpID0+IHtcblx0Y29tcG9uZW50TWFwQnlFbGVtZW50LnNldChjb21wb25lbnQuZWxlbWVudCwgY29tcG9uZW50KTtcblx0Y29tcG9uZW50TWFwQnlDb21wb25lbnQuc2V0KGNvbXBvbmVudCwgY29tcG9uZW50Lm5hbWUpO1xufTtcbmNvbnN0IHVucmVnaXN0ZXJDb21wb25lbnQgPSAoY29tcG9uZW50KSA9PiB7XG5cdGNvbXBvbmVudE1hcEJ5RWxlbWVudC5kZWxldGUoY29tcG9uZW50LmVsZW1lbnQpO1xuXHRjb21wb25lbnRNYXBCeUNvbXBvbmVudC5kZWxldGUoY29tcG9uZW50KTtcbn07XG5jb25zdCBnZXRDb21wb25lbnQgPSAoZWxlbWVudCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRsZXQgY291bnQgPSAwO1xuXHRjb25zdCBtYXhDb3VudCA9IDEwO1xuXHRjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRNYXBCeUVsZW1lbnQuZ2V0KGVsZW1lbnQpO1xuXHRcdGlmIChjb21wb25lbnQpIHtcblx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXHRcdFx0cmVzb2x2ZShjb21wb25lbnQpO1xuXHRcdH1cblx0XHRjb3VudCsrO1xuXHRcdGlmIChjb3VudCA+IG1heENvdW50KSB7XG5cdFx0XHRjbGVhckludGVydmFsKGludGVydmFsKTtcblx0XHRcdHJlamVjdCgvKiBAX19QVVJFX18gKi8gbmV3IEVycm9yKGBDb21wb25lbnQgbm90IGZvdW5kIGZvciBlbGVtZW50ICR7Z2V0RWxlbWVudEFzVGFnVGV4dChlbGVtZW50KX1gKSk7XG5cdFx0fVxuXHR9LCA1KTtcbn0pO1xuY29uc3QgZmluZENvbXBvbmVudHMgPSAoY3VycmVudENvbXBvbmVudCwgb25seVBhcmVudHMsIG9ubHlNYXRjaE5hbWUpID0+IHtcblx0Y29uc3QgY29tcG9uZW50cyA9IFtdO1xuXHRjb21wb25lbnRNYXBCeUNvbXBvbmVudC5mb3JFYWNoKChjb21wb25lbnROYW1lLCBjb21wb25lbnQpID0+IHtcblx0XHRpZiAob25seVBhcmVudHMgJiYgKGN1cnJlbnRDb21wb25lbnQgPT09IGNvbXBvbmVudCB8fCAhY29tcG9uZW50LmVsZW1lbnQuY29udGFpbnMoY3VycmVudENvbXBvbmVudC5lbGVtZW50KSkpIHJldHVybjtcblx0XHRpZiAob25seU1hdGNoTmFtZSAmJiBjb21wb25lbnROYW1lICE9PSBvbmx5TWF0Y2hOYW1lKSByZXR1cm47XG5cdFx0Y29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG5cdH0pO1xuXHRyZXR1cm4gY29tcG9uZW50cztcbn07XG5jb25zdCBmaW5kQ2hpbGRyZW4gPSAoY3VycmVudENvbXBvbmVudCkgPT4ge1xuXHRjb25zdCBjaGlsZHJlbiA9IFtdO1xuXHRjb21wb25lbnRNYXBCeUNvbXBvbmVudC5mb3JFYWNoKChjb21wb25lbnROYW1lLCBjb21wb25lbnQpID0+IHtcblx0XHRpZiAoY3VycmVudENvbXBvbmVudCA9PT0gY29tcG9uZW50KSByZXR1cm47XG5cdFx0aWYgKCFjdXJyZW50Q29tcG9uZW50LmVsZW1lbnQuY29udGFpbnMoY29tcG9uZW50LmVsZW1lbnQpKSByZXR1cm47XG5cdFx0bGV0IGZvdW5kQ2hpbGRDb21wb25lbnQgPSBmYWxzZTtcblx0XHRjb21wb25lbnRNYXBCeUNvbXBvbmVudC5mb3JFYWNoKChjaGlsZENvbXBvbmVudE5hbWUsIGNoaWxkQ29tcG9uZW50KSA9PiB7XG5cdFx0XHRpZiAoZm91bmRDaGlsZENvbXBvbmVudCkgcmV0dXJuO1xuXHRcdFx0aWYgKGNoaWxkQ29tcG9uZW50ID09PSBjb21wb25lbnQpIHJldHVybjtcblx0XHRcdGlmIChjaGlsZENvbXBvbmVudC5lbGVtZW50LmNvbnRhaW5zKGNvbXBvbmVudC5lbGVtZW50KSkgZm91bmRDaGlsZENvbXBvbmVudCA9IHRydWU7XG5cdFx0fSk7XG5cdFx0Y2hpbGRyZW4ucHVzaChjb21wb25lbnQpO1xuXHR9KTtcblx0cmV0dXJuIGNoaWxkcmVuO1xufTtcbmNvbnN0IGZpbmRQYXJlbnQgPSAoY3VycmVudENvbXBvbmVudCkgPT4ge1xuXHRsZXQgcGFyZW50RWxlbWVudCA9IGN1cnJlbnRDb21wb25lbnQuZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXHR3aGlsZSAocGFyZW50RWxlbWVudCkge1xuXHRcdGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudE1hcEJ5RWxlbWVudC5nZXQocGFyZW50RWxlbWVudCk7XG5cdFx0aWYgKGNvbXBvbmVudCkgcmV0dXJuIGNvbXBvbmVudDtcblx0XHRwYXJlbnRFbGVtZW50ID0gcGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXHR9XG5cdHJldHVybiBudWxsO1xufTtcbmZ1bmN0aW9uIHBhcnNlRGlyZWN0aXZlcyhjb250ZW50KSB7XG5cdGNvbnN0IGRpcmVjdGl2ZXMgPSBbXTtcblx0aWYgKCFjb250ZW50KSByZXR1cm4gZGlyZWN0aXZlcztcblx0bGV0IGN1cnJlbnRBY3Rpb25OYW1lID0gXCJcIjtcblx0bGV0IGN1cnJlbnRBcmd1bWVudFZhbHVlID0gXCJcIjtcblx0bGV0IGN1cnJlbnRBcmd1bWVudHMgPSBbXTtcblx0bGV0IGN1cnJlbnRNb2RpZmllcnMgPSBbXTtcblx0bGV0IHN0YXRlID0gXCJhY3Rpb25cIjtcblx0Y29uc3QgZ2V0TGFzdEFjdGlvbk5hbWUgPSAoKSA9PiB7XG5cdFx0aWYgKGN1cnJlbnRBY3Rpb25OYW1lKSByZXR1cm4gY3VycmVudEFjdGlvbk5hbWU7XG5cdFx0aWYgKGRpcmVjdGl2ZXMubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBhbnkgZGlyZWN0aXZlc1wiKTtcblx0XHRyZXR1cm4gZGlyZWN0aXZlc1tkaXJlY3RpdmVzLmxlbmd0aCAtIDFdLmFjdGlvbjtcblx0fTtcblx0Y29uc3QgcHVzaEluc3RydWN0aW9uID0gKCkgPT4ge1xuXHRcdGRpcmVjdGl2ZXMucHVzaCh7XG5cdFx0XHRhY3Rpb246IGN1cnJlbnRBY3Rpb25OYW1lLFxuXHRcdFx0YXJnczogY3VycmVudEFyZ3VtZW50cyxcblx0XHRcdG1vZGlmaWVyczogY3VycmVudE1vZGlmaWVycyxcblx0XHRcdGdldFN0cmluZzogKCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjdXJyZW50QWN0aW9uTmFtZSA9IFwiXCI7XG5cdFx0Y3VycmVudEFyZ3VtZW50VmFsdWUgPSBcIlwiO1xuXHRcdGN1cnJlbnRBcmd1bWVudHMgPSBbXTtcblx0XHRjdXJyZW50TW9kaWZpZXJzID0gW107XG5cdFx0c3RhdGUgPSBcImFjdGlvblwiO1xuXHR9O1xuXHRjb25zdCBwdXNoQXJndW1lbnQgPSAoKSA9PiB7XG5cdFx0Y3VycmVudEFyZ3VtZW50cy5wdXNoKGN1cnJlbnRBcmd1bWVudFZhbHVlLnRyaW0oKSk7XG5cdFx0Y3VycmVudEFyZ3VtZW50VmFsdWUgPSBcIlwiO1xuXHR9O1xuXHRjb25zdCBwdXNoTW9kaWZpZXIgPSAoKSA9PiB7XG5cdFx0aWYgKGN1cnJlbnRBcmd1bWVudHMubGVuZ3RoID4gMSkgdGhyb3cgbmV3IEVycm9yKGBUaGUgbW9kaWZpZXIgXCIke2N1cnJlbnRBY3Rpb25OYW1lfSgpXCIgZG9lcyBub3Qgc3VwcG9ydCBtdWx0aXBsZSBhcmd1bWVudHMuYCk7XG5cdFx0Y3VycmVudE1vZGlmaWVycy5wdXNoKHtcblx0XHRcdG5hbWU6IGN1cnJlbnRBY3Rpb25OYW1lLFxuXHRcdFx0dmFsdWU6IGN1cnJlbnRBcmd1bWVudHMubGVuZ3RoID4gMCA/IGN1cnJlbnRBcmd1bWVudHNbMF0gOiBudWxsXG5cdFx0fSk7XG5cdFx0Y3VycmVudEFjdGlvbk5hbWUgPSBcIlwiO1xuXHRcdGN1cnJlbnRBcmd1bWVudHMgPSBbXTtcblx0XHRzdGF0ZSA9IFwiYWN0aW9uXCI7XG5cdH07XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY29udGVudC5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGNoYXIgPSBjb250ZW50W2ldO1xuXHRcdHN3aXRjaCAoc3RhdGUpIHtcblx0XHRcdGNhc2UgXCJhY3Rpb25cIjpcblx0XHRcdFx0aWYgKGNoYXIgPT09IFwiKFwiKSB7XG5cdFx0XHRcdFx0c3RhdGUgPSBcImFyZ3VtZW50c1wiO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChjaGFyID09PSBcIiBcIikge1xuXHRcdFx0XHRcdGlmIChjdXJyZW50QWN0aW9uTmFtZSkgcHVzaEluc3RydWN0aW9uKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGNoYXIgPT09IFwifFwiKSB7XG5cdFx0XHRcdFx0cHVzaE1vZGlmaWVyKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3VycmVudEFjdGlvbk5hbWUgKz0gY2hhcjtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiYXJndW1lbnRzXCI6XG5cdFx0XHRcdGlmIChjaGFyID09PSBcIilcIikge1xuXHRcdFx0XHRcdHB1c2hBcmd1bWVudCgpO1xuXHRcdFx0XHRcdHN0YXRlID0gXCJhZnRlcl9hcmd1bWVudHNcIjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY2hhciA9PT0gXCIsXCIpIHtcblx0XHRcdFx0XHRwdXNoQXJndW1lbnQoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRjdXJyZW50QXJndW1lbnRWYWx1ZSArPSBjaGFyO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJhZnRlcl9hcmd1bWVudHNcIjpcblx0XHRcdFx0aWYgKGNoYXIgPT09IFwifFwiKSB7XG5cdFx0XHRcdFx0cHVzaE1vZGlmaWVyKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGNoYXIgIT09IFwiIFwiKSB0aHJvdyBuZXcgRXJyb3IoYE1pc3Npbmcgc3BhY2UgYWZ0ZXIgJHtnZXRMYXN0QWN0aW9uTmFtZSgpfSgpYCk7XG5cdFx0XHRcdHB1c2hJbnN0cnVjdGlvbigpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblx0c3dpdGNoIChzdGF0ZSkge1xuXHRcdGNhc2UgXCJhY3Rpb25cIjpcblx0XHRjYXNlIFwiYWZ0ZXJfYXJndW1lbnRzXCI6XG5cdFx0XHRpZiAoY3VycmVudEFjdGlvbk5hbWUpIHB1c2hJbnN0cnVjdGlvbigpO1xuXHRcdFx0YnJlYWs7XG5cdFx0ZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKGBEaWQgeW91IGZvcmdldCB0byBhZGQgYSBjbG9zaW5nIFwiKVwiIGFmdGVyIFwiJHtjdXJyZW50QWN0aW9uTmFtZX1cIj9gKTtcblx0fVxuXHRyZXR1cm4gZGlyZWN0aXZlcztcbn1cbmZ1bmN0aW9uIGNvbWJpbmVTcGFjZWRBcnJheShwYXJ0cykge1xuXHRjb25zdCBmaW5hbFBhcnRzID0gW107XG5cdHBhcnRzLmZvckVhY2goKHBhcnQpID0+IHtcblx0XHRmaW5hbFBhcnRzLnB1c2goLi4udHJpbUFsbChwYXJ0KS5zcGxpdChcIiBcIikpO1xuXHR9KTtcblx0cmV0dXJuIGZpbmFsUGFydHM7XG59XG5mdW5jdGlvbiB0cmltQWxsKHN0cikge1xuXHRyZXR1cm4gc3RyLnJlcGxhY2UoL1tcXHNdKy9nLCBcIiBcIikudHJpbSgpO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplTW9kZWxOYW1lKG1vZGVsKSB7XG5cdHJldHVybiBtb2RlbC5yZXBsYWNlKC9cXFtdJC8sIFwiXCIpLnNwbGl0KFwiW1wiKS5tYXAoKHMpID0+IHMucmVwbGFjZShcIl1cIiwgXCJcIikpLmpvaW4oXCIuXCIpO1xufVxuZnVuY3Rpb24gZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCB2YWx1ZVN0b3JlKSB7XG5cdGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuXHRcdGlmIChlbGVtZW50LnR5cGUgPT09IFwiY2hlY2tib3hcIikge1xuXHRcdFx0Y29uc3QgbW9kZWxOYW1lRGF0YSA9IGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZWxlbWVudCwgZmFsc2UpO1xuXHRcdFx0aWYgKG1vZGVsTmFtZURhdGEgIT09IG51bGwpIHtcblx0XHRcdFx0Y29uc3QgbW9kZWxWYWx1ZSA9IHZhbHVlU3RvcmUuZ2V0KG1vZGVsTmFtZURhdGEuYWN0aW9uKTtcblx0XHRcdFx0aWYgKEFycmF5LmlzQXJyYXkobW9kZWxWYWx1ZSkpIHJldHVybiBnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUoZWxlbWVudCwgbW9kZWxWYWx1ZSk7XG5cdFx0XHRcdGlmIChPYmplY3QobW9kZWxWYWx1ZSkgPT09IG1vZGVsVmFsdWUpIHJldHVybiBnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUoZWxlbWVudCwgT2JqZWN0LnZhbHVlcyhtb2RlbFZhbHVlKSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSkgcmV0dXJuIGVsZW1lbnQuY2hlY2tlZCA/IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIikgOiBudWxsO1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQuY2hlY2tlZDtcblx0XHR9XG5cdFx0cmV0dXJuIGlucHV0VmFsdWUoZWxlbWVudCk7XG5cdH1cblx0aWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xuXHRcdGlmIChlbGVtZW50Lm11bHRpcGxlKSByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50LnNlbGVjdGVkT3B0aW9ucykubWFwKChlbCkgPT4gZWwudmFsdWUpO1xuXHRcdHJldHVybiBlbGVtZW50LnZhbHVlO1xuXHR9XG5cdGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZShcImRhdGEtdmFsdWVcIikpIHJldHVybiBlbGVtZW50LmRhdGFzZXQudmFsdWU7XG5cdGlmIChcInZhbHVlXCIgaW4gZWxlbWVudCkgcmV0dXJuIGVsZW1lbnQudmFsdWU7XG5cdGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZShcInZhbHVlXCIpKSByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTtcblx0cmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBzZXRWYWx1ZU9uRWxlbWVudChlbGVtZW50LCB2YWx1ZSkge1xuXHRpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcblx0XHRpZiAoZWxlbWVudC50eXBlID09PSBcImZpbGVcIikgcmV0dXJuO1xuXHRcdGlmIChlbGVtZW50LnR5cGUgPT09IFwicmFkaW9cIikge1xuXHRcdFx0ZWxlbWVudC5jaGVja2VkID0gZWxlbWVudC52YWx1ZSA9PSB2YWx1ZTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGVsZW1lbnQudHlwZSA9PT0gXCJjaGVja2JveFwiKSB7XG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIGVsZW1lbnQuY2hlY2tlZCA9IHZhbHVlLnNvbWUoKHZhbCkgPT4gdmFsID09IGVsZW1lbnQudmFsdWUpO1xuXHRcdFx0ZWxzZSBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSkgZWxlbWVudC5jaGVja2VkID0gZWxlbWVudC52YWx1ZSA9PSB2YWx1ZTtcblx0XHRcdGVsc2UgZWxlbWVudC5jaGVja2VkID0gdmFsdWU7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cdGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcblx0XHRjb25zdCBhcnJheVdyYXBwZWRWYWx1ZSA9IFtdLmNvbmNhdCh2YWx1ZSkubWFwKCh2YWx1ZSkgPT4ge1xuXHRcdFx0cmV0dXJuIGAke3ZhbHVlfWA7XG5cdFx0fSk7XG5cdFx0QXJyYXkuZnJvbShlbGVtZW50Lm9wdGlvbnMpLmZvckVhY2goKG9wdGlvbikgPT4ge1xuXHRcdFx0b3B0aW9uLnNlbGVjdGVkID0gYXJyYXlXcmFwcGVkVmFsdWUuaW5jbHVkZXMob3B0aW9uLnZhbHVlKTtcblx0XHR9KTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFsdWUgPSB2YWx1ZSA9PT0gdm9pZCAwID8gXCJcIiA6IHZhbHVlO1xuXHRlbGVtZW50LnZhbHVlID0gdmFsdWU7XG59XG5mdW5jdGlvbiBnZXRBbGxNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50cyhlbGVtZW50KSB7XG5cdGlmICghZWxlbWVudC5kYXRhc2V0Lm1vZGVsKSByZXR1cm4gW107XG5cdGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMoZWxlbWVudC5kYXRhc2V0Lm1vZGVsKTtcblx0ZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcblx0XHRpZiAoZGlyZWN0aXZlLmFyZ3MubGVuZ3RoID4gMCkgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGF0YS1tb2RlbD1cIiR7ZWxlbWVudC5kYXRhc2V0Lm1vZGVsfVwiIGZvcm1hdCBpcyBpbnZhbGlkOiBpdCBkb2VzIG5vdCBzdXBwb3J0IHBhc3NpbmcgYXJndW1lbnRzIHRvIHRoZSBtb2RlbC5gKTtcblx0XHRkaXJlY3RpdmUuYWN0aW9uID0gbm9ybWFsaXplTW9kZWxOYW1lKGRpcmVjdGl2ZS5hY3Rpb24pO1xuXHR9KTtcblx0cmV0dXJuIGRpcmVjdGl2ZXM7XG59XG5mdW5jdGlvbiBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIHRocm93T25NaXNzaW5nID0gdHJ1ZSkge1xuXHRjb25zdCBkYXRhTW9kZWxEaXJlY3RpdmVzID0gZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHMoZWxlbWVudCk7XG5cdGlmIChkYXRhTW9kZWxEaXJlY3RpdmVzLmxlbmd0aCA+IDApIHJldHVybiBkYXRhTW9kZWxEaXJlY3RpdmVzWzBdO1xuXHRpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpKSB7XG5cdFx0Y29uc3QgZm9ybUVsZW1lbnQgPSBlbGVtZW50LmNsb3Nlc3QoXCJmb3JtXCIpO1xuXHRcdGlmIChmb3JtRWxlbWVudCAmJiBcIm1vZGVsXCIgaW4gZm9ybUVsZW1lbnQuZGF0YXNldCkge1xuXHRcdFx0Y29uc3QgZGlyZWN0aXZlID0gcGFyc2VEaXJlY3RpdmVzKGZvcm1FbGVtZW50LmRhdGFzZXQubW9kZWwgfHwgXCIqXCIpWzBdO1xuXHRcdFx0aWYgKGRpcmVjdGl2ZS5hcmdzLmxlbmd0aCA+IDApIHRocm93IG5ldyBFcnJvcihgVGhlIGRhdGEtbW9kZWw9XCIke2Zvcm1FbGVtZW50LmRhdGFzZXQubW9kZWx9XCIgZm9ybWF0IGlzIGludmFsaWQ6IGl0IGRvZXMgbm90IHN1cHBvcnQgcGFzc2luZyBhcmd1bWVudHMgdG8gdGhlIG1vZGVsLmApO1xuXHRcdFx0ZGlyZWN0aXZlLmFjdGlvbiA9IG5vcm1hbGl6ZU1vZGVsTmFtZShlbGVtZW50LmdldEF0dHJpYnV0ZShcIm5hbWVcIikpO1xuXHRcdFx0cmV0dXJuIGRpcmVjdGl2ZTtcblx0XHR9XG5cdH1cblx0aWYgKCF0aHJvd09uTWlzc2luZykgcmV0dXJuIG51bGw7XG5cdHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGRldGVybWluZSB0aGUgbW9kZWwgbmFtZSBmb3IgXCIke2dldEVsZW1lbnRBc1RhZ1RleHQoZWxlbWVudCl9XCI6IHRoZSBlbGVtZW50IG11c3QgZWl0aGVyIGhhdmUgYSBcImRhdGEtbW9kZWxcIiAob3IgXCJuYW1lXCIgYXR0cmlidXRlIGxpdmluZyBpbnNpZGUgYSA8Zm9ybSBkYXRhLW1vZGVsPVwiKlwiPikuYCk7XG59XG5mdW5jdGlvbiBlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCBjb21wb25lbnQpIHtcblx0aWYgKGNvbXBvbmVudC5lbGVtZW50ID09PSBlbGVtZW50KSByZXR1cm4gdHJ1ZTtcblx0aWYgKCFjb21wb25lbnQuZWxlbWVudC5jb250YWlucyhlbGVtZW50KSkgcmV0dXJuIGZhbHNlO1xuXHRyZXR1cm4gZWxlbWVudC5jbG9zZXN0KFwiW2RhdGEtY29udHJvbGxlcn49XFxcImxpdmVcXFwiXVwiKSA9PT0gY29tcG9uZW50LmVsZW1lbnQ7XG59XG5mdW5jdGlvbiBjbG9uZUhUTUxFbGVtZW50KGVsZW1lbnQpIHtcblx0Y29uc3QgbmV3RWxlbWVudCA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuXHRpZiAoIShuZXdFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgY2xvbmUgZWxlbWVudFwiKTtcblx0cmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5mdW5jdGlvbiBodG1sVG9FbGVtZW50KGh0bWwpIHtcblx0Y29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG5cdGh0bWwgPSBodG1sLnRyaW0oKTtcblx0dGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDtcblx0aWYgKHRlbXBsYXRlLmNvbnRlbnQuY2hpbGRFbGVtZW50Q291bnQgPiAxKSB0aHJvdyBuZXcgRXJyb3IoYENvbXBvbmVudCBIVE1MIGNvbnRhaW5zICR7dGVtcGxhdGUuY29udGVudC5jaGlsZEVsZW1lbnRDb3VudH0gZWxlbWVudHMsIGJ1dCBvbmx5IDEgcm9vdCBlbGVtZW50IGlzIGFsbG93ZWQuYCk7XG5cdGNvbnN0IGNoaWxkID0gdGVtcGxhdGUuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZDtcblx0aWYgKCFjaGlsZCkgdGhyb3cgbmV3IEVycm9yKFwiQ2hpbGQgbm90IGZvdW5kXCIpO1xuXHRpZiAoIShjaGlsZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgdGhyb3cgbmV3IEVycm9yKGBDcmVhdGVkIGVsZW1lbnQgaXMgbm90IGFuIEhUTUxFbGVtZW50OiAke2h0bWwudHJpbSgpfWApO1xuXHRyZXR1cm4gY2hpbGQ7XG59XG5jb25zdCBnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUgPSAoZWxlbWVudCwgY3VycmVudFZhbHVlcykgPT4ge1xuXHRjb25zdCBmaW5hbFZhbHVlcyA9IFsuLi5jdXJyZW50VmFsdWVzXTtcblx0Y29uc3QgdmFsdWUgPSBpbnB1dFZhbHVlKGVsZW1lbnQpO1xuXHRjb25zdCBpbmRleCA9IGN1cnJlbnRWYWx1ZXMuaW5kZXhPZih2YWx1ZSk7XG5cdGlmIChlbGVtZW50LmNoZWNrZWQpIHtcblx0XHRpZiAoaW5kZXggPT09IC0xKSBmaW5hbFZhbHVlcy5wdXNoKHZhbHVlKTtcblx0XHRyZXR1cm4gZmluYWxWYWx1ZXM7XG5cdH1cblx0aWYgKGluZGV4ID4gLTEpIGZpbmFsVmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG5cdHJldHVybiBmaW5hbFZhbHVlcztcbn07XG5jb25zdCBpbnB1dFZhbHVlID0gKGVsZW1lbnQpID0+IGVsZW1lbnQuZGF0YXNldC52YWx1ZSA/IGVsZW1lbnQuZGF0YXNldC52YWx1ZSA6IGVsZW1lbnQudmFsdWU7XG5mdW5jdGlvbiBpc1RleHR1YWxJbnB1dEVsZW1lbnQoZWwpIHtcblx0cmV0dXJuIGVsIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJiBbXG5cdFx0XCJ0ZXh0XCIsXG5cdFx0XCJlbWFpbFwiLFxuXHRcdFwicGFzc3dvcmRcIixcblx0XHRcInNlYXJjaFwiLFxuXHRcdFwidGVsXCIsXG5cdFx0XCJ1cmxcIlxuXHRdLmluY2x1ZGVzKGVsLnR5cGUpO1xufVxuZnVuY3Rpb24gaXNUZXh0YXJlYUVsZW1lbnQoZWwpIHtcblx0cmV0dXJuIGVsIGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudDtcbn1cbmZ1bmN0aW9uIGlzTnVtZXJpY2FsSW5wdXRFbGVtZW50KGVsZW1lbnQpIHtcblx0cmV0dXJuIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIFtcIm51bWJlclwiLCBcInJhbmdlXCJdLmluY2x1ZGVzKGVsZW1lbnQudHlwZSk7XG59XG52YXIgSG9va01hbmFnZXJfZGVmYXVsdCA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5ob29rcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdH1cblx0cmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKSB7XG5cdFx0Y29uc3QgaG9va3MgPSB0aGlzLmhvb2tzLmdldChob29rTmFtZSkgfHwgW107XG5cdFx0aG9va3MucHVzaChjYWxsYmFjayk7XG5cdFx0dGhpcy5ob29rcy5zZXQoaG9va05hbWUsIGhvb2tzKTtcblx0fVxuXHR1bnJlZ2lzdGVyKGhvb2tOYW1lLCBjYWxsYmFjaykge1xuXHRcdGNvbnN0IGhvb2tzID0gdGhpcy5ob29rcy5nZXQoaG9va05hbWUpIHx8IFtdO1xuXHRcdGNvbnN0IGluZGV4ID0gaG9va3MuaW5kZXhPZihjYWxsYmFjayk7XG5cdFx0aWYgKGluZGV4ID09PSAtMSkgcmV0dXJuO1xuXHRcdGhvb2tzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0dGhpcy5ob29rcy5zZXQoaG9va05hbWUsIGhvb2tzKTtcblx0fVxuXHR0cmlnZ2VySG9vayhob29rTmFtZSwgLi4uYXJncykge1xuXHRcdCh0aGlzLmhvb2tzLmdldChob29rTmFtZSkgfHwgW10pLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG5cdFx0XHRjYWxsYmFjayguLi5hcmdzKTtcblx0XHR9KTtcblx0fVxufTtcbnZhciBJZGlvbW9ycGggPSAoZnVuY3Rpb24oKSB7XG5cdFwidXNlIHN0cmljdFwiO1xuXHRsZXQgRU1QVFlfU0VUID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcblx0bGV0IGRlZmF1bHRzID0ge1xuXHRcdG1vcnBoU3R5bGU6IFwib3V0ZXJIVE1MXCIsXG5cdFx0Y2FsbGJhY2tzOiB7XG5cdFx0XHRiZWZvcmVOb2RlQWRkZWQ6IG5vT3AsXG5cdFx0XHRhZnRlck5vZGVBZGRlZDogbm9PcCxcblx0XHRcdGJlZm9yZU5vZGVNb3JwaGVkOiBub09wLFxuXHRcdFx0YWZ0ZXJOb2RlTW9ycGhlZDogbm9PcCxcblx0XHRcdGJlZm9yZU5vZGVSZW1vdmVkOiBub09wLFxuXHRcdFx0YWZ0ZXJOb2RlUmVtb3ZlZDogbm9PcCxcblx0XHRcdGJlZm9yZUF0dHJpYnV0ZVVwZGF0ZWQ6IG5vT3Bcblx0XHR9LFxuXHRcdGhlYWQ6IHtcblx0XHRcdHN0eWxlOiBcIm1lcmdlXCIsXG5cdFx0XHRzaG91bGRQcmVzZXJ2ZTogZnVuY3Rpb24oZWx0KSB7XG5cdFx0XHRcdHJldHVybiBlbHQuZ2V0QXR0cmlidXRlKFwiaW0tcHJlc2VydmVcIikgPT09IFwidHJ1ZVwiO1xuXHRcdFx0fSxcblx0XHRcdHNob3VsZFJlQXBwZW5kOiBmdW5jdGlvbihlbHQpIHtcblx0XHRcdFx0cmV0dXJuIGVsdC5nZXRBdHRyaWJ1dGUoXCJpbS1yZS1hcHBlbmRcIikgPT09IFwidHJ1ZVwiO1xuXHRcdFx0fSxcblx0XHRcdHNob3VsZFJlbW92ZTogbm9PcCxcblx0XHRcdGFmdGVySGVhZE1vcnBoZWQ6IG5vT3Bcblx0XHR9XG5cdH07XG5cdGZ1bmN0aW9uIG1vcnBoKG9sZE5vZGUsIG5ld0NvbnRlbnQsIGNvbmZpZyA9IHt9KSB7XG5cdFx0aWYgKG9sZE5vZGUgaW5zdGFuY2VvZiBEb2N1bWVudCkgb2xkTm9kZSA9IG9sZE5vZGUuZG9jdW1lbnRFbGVtZW50O1xuXHRcdGlmICh0eXBlb2YgbmV3Q29udGVudCA9PT0gXCJzdHJpbmdcIikgbmV3Q29udGVudCA9IHBhcnNlQ29udGVudChuZXdDb250ZW50KTtcblx0XHRsZXQgbm9ybWFsaXplZENvbnRlbnQgPSBub3JtYWxpemVDb250ZW50KG5ld0NvbnRlbnQpO1xuXHRcdGxldCBjdHggPSBjcmVhdGVNb3JwaENvbnRleHQob2xkTm9kZSwgbm9ybWFsaXplZENvbnRlbnQsIGNvbmZpZyk7XG5cdFx0cmV0dXJuIG1vcnBoTm9ybWFsaXplZENvbnRlbnQob2xkTm9kZSwgbm9ybWFsaXplZENvbnRlbnQsIGN0eCk7XG5cdH1cblx0ZnVuY3Rpb24gbW9ycGhOb3JtYWxpemVkQ29udGVudChvbGROb2RlLCBub3JtYWxpemVkTmV3Q29udGVudCwgY3R4KSB7XG5cdFx0aWYgKGN0eC5oZWFkLmJsb2NrKSB7XG5cdFx0XHRsZXQgb2xkSGVhZCA9IG9sZE5vZGUucXVlcnlTZWxlY3RvcihcImhlYWRcIik7XG5cdFx0XHRsZXQgbmV3SGVhZCA9IG5vcm1hbGl6ZWROZXdDb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpO1xuXHRcdFx0aWYgKG9sZEhlYWQgJiYgbmV3SGVhZCkge1xuXHRcdFx0XHRsZXQgcHJvbWlzZXMgPSBoYW5kbGVIZWFkRWxlbWVudChuZXdIZWFkLCBvbGRIZWFkLCBjdHgpO1xuXHRcdFx0XHRQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRtb3JwaE5vcm1hbGl6ZWRDb250ZW50KG9sZE5vZGUsIG5vcm1hbGl6ZWROZXdDb250ZW50LCBPYmplY3QuYXNzaWduKGN0eCwgeyBoZWFkOiB7XG5cdFx0XHRcdFx0XHRibG9jazogZmFsc2UsXG5cdFx0XHRcdFx0XHRpZ25vcmU6IHRydWVcblx0XHRcdFx0XHR9IH0pKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGN0eC5tb3JwaFN0eWxlID09PSBcImlubmVySFRNTFwiKSB7XG5cdFx0XHRtb3JwaENoaWxkcmVuKG5vcm1hbGl6ZWROZXdDb250ZW50LCBvbGROb2RlLCBjdHgpO1xuXHRcdFx0cmV0dXJuIG9sZE5vZGUuY2hpbGRyZW47XG5cdFx0fSBlbHNlIGlmIChjdHgubW9ycGhTdHlsZSA9PT0gXCJvdXRlckhUTUxcIiB8fCBjdHgubW9ycGhTdHlsZSA9PSBudWxsKSB7XG5cdFx0XHRsZXQgYmVzdE1hdGNoID0gZmluZEJlc3ROb2RlTWF0Y2gobm9ybWFsaXplZE5ld0NvbnRlbnQsIG9sZE5vZGUsIGN0eCk7XG5cdFx0XHRsZXQgcHJldmlvdXNTaWJsaW5nID0gYmVzdE1hdGNoPy5wcmV2aW91c1NpYmxpbmc7XG5cdFx0XHRsZXQgbmV4dFNpYmxpbmcgPSBiZXN0TWF0Y2g/Lm5leHRTaWJsaW5nO1xuXHRcdFx0bGV0IG1vcnBoZWROb2RlID0gbW9ycGhPbGROb2RlVG8ob2xkTm9kZSwgYmVzdE1hdGNoLCBjdHgpO1xuXHRcdFx0aWYgKGJlc3RNYXRjaCkgcmV0dXJuIGluc2VydFNpYmxpbmdzKHByZXZpb3VzU2libGluZywgbW9ycGhlZE5vZGUsIG5leHRTaWJsaW5nKTtcblx0XHRcdGVsc2UgcmV0dXJuIFtdO1xuXHRcdH0gZWxzZSB0aHJvdyBcIkRvIG5vdCB1bmRlcnN0YW5kIGhvdyB0byBtb3JwaCBzdHlsZSBcIiArIGN0eC5tb3JwaFN0eWxlO1xuXHR9XG5cdGZ1bmN0aW9uIGlnbm9yZVZhbHVlT2ZBY3RpdmVFbGVtZW50KHBvc3NpYmxlQWN0aXZlRWxlbWVudCwgY3R4KSB7XG5cdFx0cmV0dXJuIGN0eC5pZ25vcmVBY3RpdmVWYWx1ZSAmJiBwb3NzaWJsZUFjdGl2ZUVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cdH1cblx0ZnVuY3Rpb24gbW9ycGhPbGROb2RlVG8ob2xkTm9kZSwgbmV3Q29udGVudCwgY3R4KSB7XG5cdFx0aWYgKGN0eC5pZ25vcmVBY3RpdmUgJiYgb2xkTm9kZSA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge30gZWxzZSBpZiAobmV3Q29udGVudCA9PSBudWxsKSB7XG5cdFx0XHRpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlUmVtb3ZlZChvbGROb2RlKSA9PT0gZmFsc2UpIHJldHVybiBvbGROb2RlO1xuXHRcdFx0b2xkTm9kZS5yZW1vdmUoKTtcblx0XHRcdGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlUmVtb3ZlZChvbGROb2RlKTtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH0gZWxzZSBpZiAoIWlzU29mdE1hdGNoKG9sZE5vZGUsIG5ld0NvbnRlbnQpKSB7XG5cdFx0XHRpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlUmVtb3ZlZChvbGROb2RlKSA9PT0gZmFsc2UpIHJldHVybiBvbGROb2RlO1xuXHRcdFx0aWYgKGN0eC5jYWxsYmFja3MuYmVmb3JlTm9kZUFkZGVkKG5ld0NvbnRlbnQpID09PSBmYWxzZSkgcmV0dXJuIG9sZE5vZGU7XG5cdFx0XHRvbGROb2RlLnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKG5ld0NvbnRlbnQsIG9sZE5vZGUpO1xuXHRcdFx0Y3R4LmNhbGxiYWNrcy5hZnRlck5vZGVBZGRlZChuZXdDb250ZW50KTtcblx0XHRcdGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlUmVtb3ZlZChvbGROb2RlKTtcblx0XHRcdHJldHVybiBuZXdDb250ZW50O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlTW9ycGhlZChvbGROb2RlLCBuZXdDb250ZW50KSA9PT0gZmFsc2UpIHJldHVybiBvbGROb2RlO1xuXHRcdFx0aWYgKG9sZE5vZGUgaW5zdGFuY2VvZiBIVE1MSGVhZEVsZW1lbnQgJiYgY3R4LmhlYWQuaWdub3JlKSB7fSBlbHNlIGlmIChvbGROb2RlIGluc3RhbmNlb2YgSFRNTEhlYWRFbGVtZW50ICYmIGN0eC5oZWFkLnN0eWxlICE9PSBcIm1vcnBoXCIpIGhhbmRsZUhlYWRFbGVtZW50KG5ld0NvbnRlbnQsIG9sZE5vZGUsIGN0eCk7XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0c3luY05vZGVGcm9tKG5ld0NvbnRlbnQsIG9sZE5vZGUsIGN0eCk7XG5cdFx0XHRcdGlmICghaWdub3JlVmFsdWVPZkFjdGl2ZUVsZW1lbnQob2xkTm9kZSwgY3R4KSkgbW9ycGhDaGlsZHJlbihuZXdDb250ZW50LCBvbGROb2RlLCBjdHgpO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LmNhbGxiYWNrcy5hZnRlck5vZGVNb3JwaGVkKG9sZE5vZGUsIG5ld0NvbnRlbnQpO1xuXHRcdFx0cmV0dXJuIG9sZE5vZGU7XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIG1vcnBoQ2hpbGRyZW4obmV3UGFyZW50LCBvbGRQYXJlbnQsIGN0eCkge1xuXHRcdGxldCBuZXh0TmV3Q2hpbGQgPSBuZXdQYXJlbnQuZmlyc3RDaGlsZDtcblx0XHRsZXQgaW5zZXJ0aW9uUG9pbnQgPSBvbGRQYXJlbnQuZmlyc3RDaGlsZDtcblx0XHRsZXQgbmV3Q2hpbGQ7XG5cdFx0d2hpbGUgKG5leHROZXdDaGlsZCkge1xuXHRcdFx0bmV3Q2hpbGQgPSBuZXh0TmV3Q2hpbGQ7XG5cdFx0XHRuZXh0TmV3Q2hpbGQgPSBuZXdDaGlsZC5uZXh0U2libGluZztcblx0XHRcdGlmIChpbnNlcnRpb25Qb2ludCA9PSBudWxsKSB7XG5cdFx0XHRcdGlmIChjdHguY2FsbGJhY2tzLmJlZm9yZU5vZGVBZGRlZChuZXdDaGlsZCkgPT09IGZhbHNlKSByZXR1cm47XG5cdFx0XHRcdG9sZFBhcmVudC5hcHBlbmRDaGlsZChuZXdDaGlsZCk7XG5cdFx0XHRcdGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlQWRkZWQobmV3Q2hpbGQpO1xuXHRcdFx0XHRyZW1vdmVJZHNGcm9tQ29uc2lkZXJhdGlvbihjdHgsIG5ld0NoaWxkKTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaXNJZFNldE1hdGNoKG5ld0NoaWxkLCBpbnNlcnRpb25Qb2ludCwgY3R4KSkge1xuXHRcdFx0XHRtb3JwaE9sZE5vZGVUbyhpbnNlcnRpb25Qb2ludCwgbmV3Q2hpbGQsIGN0eCk7XG5cdFx0XHRcdGluc2VydGlvblBvaW50ID0gaW5zZXJ0aW9uUG9pbnQubmV4dFNpYmxpbmc7XG5cdFx0XHRcdHJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uKGN0eCwgbmV3Q2hpbGQpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGxldCBpZFNldE1hdGNoID0gZmluZElkU2V0TWF0Y2gobmV3UGFyZW50LCBvbGRQYXJlbnQsIG5ld0NoaWxkLCBpbnNlcnRpb25Qb2ludCwgY3R4KTtcblx0XHRcdGlmIChpZFNldE1hdGNoKSB7XG5cdFx0XHRcdGluc2VydGlvblBvaW50ID0gcmVtb3ZlTm9kZXNCZXR3ZWVuKGluc2VydGlvblBvaW50LCBpZFNldE1hdGNoLCBjdHgpO1xuXHRcdFx0XHRtb3JwaE9sZE5vZGVUbyhpZFNldE1hdGNoLCBuZXdDaGlsZCwgY3R4KTtcblx0XHRcdFx0cmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCBuZXdDaGlsZCk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0bGV0IHNvZnRNYXRjaCA9IGZpbmRTb2Z0TWF0Y2gobmV3UGFyZW50LCBvbGRQYXJlbnQsIG5ld0NoaWxkLCBpbnNlcnRpb25Qb2ludCwgY3R4KTtcblx0XHRcdGlmIChzb2Z0TWF0Y2gpIHtcblx0XHRcdFx0aW5zZXJ0aW9uUG9pbnQgPSByZW1vdmVOb2Rlc0JldHdlZW4oaW5zZXJ0aW9uUG9pbnQsIHNvZnRNYXRjaCwgY3R4KTtcblx0XHRcdFx0bW9ycGhPbGROb2RlVG8oc29mdE1hdGNoLCBuZXdDaGlsZCwgY3R4KTtcblx0XHRcdFx0cmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCBuZXdDaGlsZCk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5jYWxsYmFja3MuYmVmb3JlTm9kZUFkZGVkKG5ld0NoaWxkKSA9PT0gZmFsc2UpIHJldHVybjtcblx0XHRcdG9sZFBhcmVudC5pbnNlcnRCZWZvcmUobmV3Q2hpbGQsIGluc2VydGlvblBvaW50KTtcblx0XHRcdGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlQWRkZWQobmV3Q2hpbGQpO1xuXHRcdFx0cmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCBuZXdDaGlsZCk7XG5cdFx0fVxuXHRcdHdoaWxlIChpbnNlcnRpb25Qb2ludCAhPT0gbnVsbCkge1xuXHRcdFx0bGV0IHRlbXBOb2RlID0gaW5zZXJ0aW9uUG9pbnQ7XG5cdFx0XHRpbnNlcnRpb25Qb2ludCA9IGluc2VydGlvblBvaW50Lm5leHRTaWJsaW5nO1xuXHRcdFx0cmVtb3ZlTm9kZSh0ZW1wTm9kZSwgY3R4KTtcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gaWdub3JlQXR0cmlidXRlKGF0dHIsIHRvLCB1cGRhdGVUeXBlLCBjdHgpIHtcblx0XHRpZiAoYXR0ciA9PT0gXCJ2YWx1ZVwiICYmIGN0eC5pZ25vcmVBY3RpdmVWYWx1ZSAmJiB0byA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkgcmV0dXJuIHRydWU7XG5cdFx0cmV0dXJuIGN0eC5jYWxsYmFja3MuYmVmb3JlQXR0cmlidXRlVXBkYXRlZChhdHRyLCB0bywgdXBkYXRlVHlwZSkgPT09IGZhbHNlO1xuXHR9XG5cdGZ1bmN0aW9uIHN5bmNOb2RlRnJvbShmcm9tLCB0bywgY3R4KSB7XG5cdFx0bGV0IHR5cGUgPSBmcm9tLm5vZGVUeXBlO1xuXHRcdGlmICh0eXBlID09PSAxKSB7XG5cdFx0XHRjb25zdCBmcm9tQXR0cmlidXRlcyA9IGZyb20uYXR0cmlidXRlcztcblx0XHRcdGNvbnN0IHRvQXR0cmlidXRlcyA9IHRvLmF0dHJpYnV0ZXM7XG5cdFx0XHRmb3IgKGNvbnN0IGZyb21BdHRyaWJ1dGUgb2YgZnJvbUF0dHJpYnV0ZXMpIHtcblx0XHRcdFx0aWYgKGlnbm9yZUF0dHJpYnV0ZShmcm9tQXR0cmlidXRlLm5hbWUsIHRvLCBcInVwZGF0ZVwiLCBjdHgpKSBjb250aW51ZTtcblx0XHRcdFx0aWYgKHRvLmdldEF0dHJpYnV0ZShmcm9tQXR0cmlidXRlLm5hbWUpICE9PSBmcm9tQXR0cmlidXRlLnZhbHVlKSB0by5zZXRBdHRyaWJ1dGUoZnJvbUF0dHJpYnV0ZS5uYW1lLCBmcm9tQXR0cmlidXRlLnZhbHVlKTtcblx0XHRcdH1cblx0XHRcdGZvciAobGV0IGkgPSB0b0F0dHJpYnV0ZXMubGVuZ3RoIC0gMTsgMCA8PSBpOyBpLS0pIHtcblx0XHRcdFx0Y29uc3QgdG9BdHRyaWJ1dGUgPSB0b0F0dHJpYnV0ZXNbaV07XG5cdFx0XHRcdGlmIChpZ25vcmVBdHRyaWJ1dGUodG9BdHRyaWJ1dGUubmFtZSwgdG8sIFwicmVtb3ZlXCIsIGN0eCkpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAoIWZyb20uaGFzQXR0cmlidXRlKHRvQXR0cmlidXRlLm5hbWUpKSB0by5yZW1vdmVBdHRyaWJ1dGUodG9BdHRyaWJ1dGUubmFtZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0eXBlID09PSA4IHx8IHR5cGUgPT09IDMpIHtcblx0XHRcdGlmICh0by5ub2RlVmFsdWUgIT09IGZyb20ubm9kZVZhbHVlKSB0by5ub2RlVmFsdWUgPSBmcm9tLm5vZGVWYWx1ZTtcblx0XHR9XG5cdFx0aWYgKCFpZ25vcmVWYWx1ZU9mQWN0aXZlRWxlbWVudCh0bywgY3R4KSkgc3luY0lucHV0VmFsdWUoZnJvbSwgdG8sIGN0eCk7XG5cdH1cblx0ZnVuY3Rpb24gc3luY0Jvb2xlYW5BdHRyaWJ1dGUoZnJvbSwgdG8sIGF0dHJpYnV0ZU5hbWUsIGN0eCkge1xuXHRcdGlmIChmcm9tW2F0dHJpYnV0ZU5hbWVdICE9PSB0b1thdHRyaWJ1dGVOYW1lXSkge1xuXHRcdFx0bGV0IGlnbm9yZVVwZGF0ZSA9IGlnbm9yZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCB0bywgXCJ1cGRhdGVcIiwgY3R4KTtcblx0XHRcdGlmICghaWdub3JlVXBkYXRlKSB0b1thdHRyaWJ1dGVOYW1lXSA9IGZyb21bYXR0cmlidXRlTmFtZV07XG5cdFx0XHRpZiAoZnJvbVthdHRyaWJ1dGVOYW1lXSkge1xuXHRcdFx0XHRpZiAoIWlnbm9yZVVwZGF0ZSkgdG8uc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGZyb21bYXR0cmlidXRlTmFtZV0pO1xuXHRcdFx0fSBlbHNlIGlmICghaWdub3JlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIHRvLCBcInJlbW92ZVwiLCBjdHgpKSB0by5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHN5bmNJbnB1dFZhbHVlKGZyb20sIHRvLCBjdHgpIHtcblx0XHRpZiAoZnJvbSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgdG8gaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIGZyb20udHlwZSAhPT0gXCJmaWxlXCIpIHtcblx0XHRcdGxldCBmcm9tVmFsdWUgPSBmcm9tLnZhbHVlO1xuXHRcdFx0bGV0IHRvVmFsdWUgPSB0by52YWx1ZTtcblx0XHRcdHN5bmNCb29sZWFuQXR0cmlidXRlKGZyb20sIHRvLCBcImNoZWNrZWRcIiwgY3R4KTtcblx0XHRcdHN5bmNCb29sZWFuQXR0cmlidXRlKGZyb20sIHRvLCBcImRpc2FibGVkXCIsIGN0eCk7XG5cdFx0XHRpZiAoIWZyb20uaGFzQXR0cmlidXRlKFwidmFsdWVcIikpIHtcblx0XHRcdFx0aWYgKCFpZ25vcmVBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0bywgXCJyZW1vdmVcIiwgY3R4KSkge1xuXHRcdFx0XHRcdHRvLnZhbHVlID0gXCJcIjtcblx0XHRcdFx0XHR0by5yZW1vdmVBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChmcm9tVmFsdWUgIT09IHRvVmFsdWUpIHtcblx0XHRcdFx0aWYgKCFpZ25vcmVBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0bywgXCJ1cGRhdGVcIiwgY3R4KSkge1xuXHRcdFx0XHRcdHRvLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGZyb21WYWx1ZSk7XG5cdFx0XHRcdFx0dG8udmFsdWUgPSBmcm9tVmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGZyb20gaW5zdGFuY2VvZiBIVE1MT3B0aW9uRWxlbWVudCkgc3luY0Jvb2xlYW5BdHRyaWJ1dGUoZnJvbSwgdG8sIFwic2VsZWN0ZWRcIiwgY3R4KTtcblx0XHRlbHNlIGlmIChmcm9tIGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCAmJiB0byBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQpIHtcblx0XHRcdGxldCBmcm9tVmFsdWUgPSBmcm9tLnZhbHVlO1xuXHRcdFx0bGV0IHRvVmFsdWUgPSB0by52YWx1ZTtcblx0XHRcdGlmIChpZ25vcmVBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0bywgXCJ1cGRhdGVcIiwgY3R4KSkgcmV0dXJuO1xuXHRcdFx0aWYgKGZyb21WYWx1ZSAhPT0gdG9WYWx1ZSkgdG8udmFsdWUgPSBmcm9tVmFsdWU7XG5cdFx0XHRpZiAodG8uZmlyc3RDaGlsZCAmJiB0by5maXJzdENoaWxkLm5vZGVWYWx1ZSAhPT0gZnJvbVZhbHVlKSB0by5maXJzdENoaWxkLm5vZGVWYWx1ZSA9IGZyb21WYWx1ZTtcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gaGFuZGxlSGVhZEVsZW1lbnQobmV3SGVhZFRhZywgY3VycmVudEhlYWQsIGN0eCkge1xuXHRcdGxldCBhZGRlZCA9IFtdO1xuXHRcdGxldCByZW1vdmVkID0gW107XG5cdFx0bGV0IHByZXNlcnZlZCA9IFtdO1xuXHRcdGxldCBub2Rlc1RvQXBwZW5kID0gW107XG5cdFx0bGV0IGhlYWRNZXJnZVN0eWxlID0gY3R4LmhlYWQuc3R5bGU7XG5cdFx0bGV0IHNyY1RvTmV3SGVhZE5vZGVzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0XHRmb3IgKGNvbnN0IG5ld0hlYWRDaGlsZCBvZiBuZXdIZWFkVGFnLmNoaWxkcmVuKSBzcmNUb05ld0hlYWROb2Rlcy5zZXQobmV3SGVhZENoaWxkLm91dGVySFRNTCwgbmV3SGVhZENoaWxkKTtcblx0XHRmb3IgKGNvbnN0IGN1cnJlbnRIZWFkRWx0IG9mIGN1cnJlbnRIZWFkLmNoaWxkcmVuKSB7XG5cdFx0XHRsZXQgaW5OZXdDb250ZW50ID0gc3JjVG9OZXdIZWFkTm9kZXMuaGFzKGN1cnJlbnRIZWFkRWx0Lm91dGVySFRNTCk7XG5cdFx0XHRsZXQgaXNSZUFwcGVuZGVkID0gY3R4LmhlYWQuc2hvdWxkUmVBcHBlbmQoY3VycmVudEhlYWRFbHQpO1xuXHRcdFx0bGV0IGlzUHJlc2VydmVkID0gY3R4LmhlYWQuc2hvdWxkUHJlc2VydmUoY3VycmVudEhlYWRFbHQpO1xuXHRcdFx0aWYgKGluTmV3Q29udGVudCB8fCBpc1ByZXNlcnZlZCkgaWYgKGlzUmVBcHBlbmRlZCkgcmVtb3ZlZC5wdXNoKGN1cnJlbnRIZWFkRWx0KTtcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRzcmNUb05ld0hlYWROb2Rlcy5kZWxldGUoY3VycmVudEhlYWRFbHQub3V0ZXJIVE1MKTtcblx0XHRcdFx0cHJlc2VydmVkLnB1c2goY3VycmVudEhlYWRFbHQpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoaGVhZE1lcmdlU3R5bGUgPT09IFwiYXBwZW5kXCIpIHtcblx0XHRcdFx0aWYgKGlzUmVBcHBlbmRlZCkge1xuXHRcdFx0XHRcdHJlbW92ZWQucHVzaChjdXJyZW50SGVhZEVsdCk7XG5cdFx0XHRcdFx0bm9kZXNUb0FwcGVuZC5wdXNoKGN1cnJlbnRIZWFkRWx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChjdHguaGVhZC5zaG91bGRSZW1vdmUoY3VycmVudEhlYWRFbHQpICE9PSBmYWxzZSkgcmVtb3ZlZC5wdXNoKGN1cnJlbnRIZWFkRWx0KTtcblx0XHR9XG5cdFx0bm9kZXNUb0FwcGVuZC5wdXNoKC4uLnNyY1RvTmV3SGVhZE5vZGVzLnZhbHVlcygpKTtcblx0XHRsb2coXCJ0byBhcHBlbmQ6IFwiLCBub2Rlc1RvQXBwZW5kKTtcblx0XHRsZXQgcHJvbWlzZXMgPSBbXTtcblx0XHRmb3IgKGNvbnN0IG5ld05vZGUgb2Ygbm9kZXNUb0FwcGVuZCkge1xuXHRcdFx0bG9nKFwiYWRkaW5nOiBcIiwgbmV3Tm9kZSk7XG5cdFx0XHRsZXQgbmV3RWx0ID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQobmV3Tm9kZS5vdXRlckhUTUwpLmZpcnN0Q2hpbGQ7XG5cdFx0XHRsb2cobmV3RWx0KTtcblx0XHRcdGlmIChjdHguY2FsbGJhY2tzLmJlZm9yZU5vZGVBZGRlZChuZXdFbHQpICE9PSBmYWxzZSkge1xuXHRcdFx0XHRpZiAobmV3RWx0LmhyZWYgfHwgbmV3RWx0LnNyYykge1xuXHRcdFx0XHRcdGxldCByZXNvbHZlID0gbnVsbDtcblx0XHRcdFx0XHRsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKF9yZXNvbHZlKSB7XG5cdFx0XHRcdFx0XHRyZXNvbHZlID0gX3Jlc29sdmU7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0bmV3RWx0LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2gocHJvbWlzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3VycmVudEhlYWQuYXBwZW5kQ2hpbGQobmV3RWx0KTtcblx0XHRcdFx0Y3R4LmNhbGxiYWNrcy5hZnRlck5vZGVBZGRlZChuZXdFbHQpO1xuXHRcdFx0XHRhZGRlZC5wdXNoKG5ld0VsdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZvciAoY29uc3QgcmVtb3ZlZEVsZW1lbnQgb2YgcmVtb3ZlZCkgaWYgKGN0eC5jYWxsYmFja3MuYmVmb3JlTm9kZVJlbW92ZWQocmVtb3ZlZEVsZW1lbnQpICE9PSBmYWxzZSkge1xuXHRcdFx0Y3VycmVudEhlYWQucmVtb3ZlQ2hpbGQocmVtb3ZlZEVsZW1lbnQpO1xuXHRcdFx0Y3R4LmNhbGxiYWNrcy5hZnRlck5vZGVSZW1vdmVkKHJlbW92ZWRFbGVtZW50KTtcblx0XHR9XG5cdFx0Y3R4LmhlYWQuYWZ0ZXJIZWFkTW9ycGhlZChjdXJyZW50SGVhZCwge1xuXHRcdFx0YWRkZWQsXG5cdFx0XHRrZXB0OiBwcmVzZXJ2ZWQsXG5cdFx0XHRyZW1vdmVkXG5cdFx0fSk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9XG5cdGZ1bmN0aW9uIGxvZygpIHt9XG5cdGZ1bmN0aW9uIG5vT3AoKSB7fVxuXHRmdW5jdGlvbiBtZXJnZURlZmF1bHRzKGNvbmZpZykge1xuXHRcdGxldCBmaW5hbENvbmZpZyA9IHt9O1xuXHRcdE9iamVjdC5hc3NpZ24oZmluYWxDb25maWcsIGRlZmF1bHRzKTtcblx0XHRPYmplY3QuYXNzaWduKGZpbmFsQ29uZmlnLCBjb25maWcpO1xuXHRcdGZpbmFsQ29uZmlnLmNhbGxiYWNrcyA9IHt9O1xuXHRcdE9iamVjdC5hc3NpZ24oZmluYWxDb25maWcuY2FsbGJhY2tzLCBkZWZhdWx0cy5jYWxsYmFja3MpO1xuXHRcdE9iamVjdC5hc3NpZ24oZmluYWxDb25maWcuY2FsbGJhY2tzLCBjb25maWcuY2FsbGJhY2tzKTtcblx0XHRmaW5hbENvbmZpZy5oZWFkID0ge307XG5cdFx0T2JqZWN0LmFzc2lnbihmaW5hbENvbmZpZy5oZWFkLCBkZWZhdWx0cy5oZWFkKTtcblx0XHRPYmplY3QuYXNzaWduKGZpbmFsQ29uZmlnLmhlYWQsIGNvbmZpZy5oZWFkKTtcblx0XHRyZXR1cm4gZmluYWxDb25maWc7XG5cdH1cblx0ZnVuY3Rpb24gY3JlYXRlTW9ycGhDb250ZXh0KG9sZE5vZGUsIG5ld0NvbnRlbnQsIGNvbmZpZykge1xuXHRcdGNvbmZpZyA9IG1lcmdlRGVmYXVsdHMoY29uZmlnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGFyZ2V0OiBvbGROb2RlLFxuXHRcdFx0bmV3Q29udGVudCxcblx0XHRcdGNvbmZpZyxcblx0XHRcdG1vcnBoU3R5bGU6IGNvbmZpZy5tb3JwaFN0eWxlLFxuXHRcdFx0aWdub3JlQWN0aXZlOiBjb25maWcuaWdub3JlQWN0aXZlLFxuXHRcdFx0aWdub3JlQWN0aXZlVmFsdWU6IGNvbmZpZy5pZ25vcmVBY3RpdmVWYWx1ZSxcblx0XHRcdGlkTWFwOiBjcmVhdGVJZE1hcChvbGROb2RlLCBuZXdDb250ZW50KSxcblx0XHRcdGRlYWRJZHM6IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCksXG5cdFx0XHRjYWxsYmFja3M6IGNvbmZpZy5jYWxsYmFja3MsXG5cdFx0XHRoZWFkOiBjb25maWcuaGVhZFxuXHRcdH07XG5cdH1cblx0ZnVuY3Rpb24gaXNJZFNldE1hdGNoKG5vZGUxLCBub2RlMiwgY3R4KSB7XG5cdFx0aWYgKG5vZGUxID09IG51bGwgfHwgbm9kZTIgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRcdGlmIChub2RlMS5ub2RlVHlwZSA9PT0gbm9kZTIubm9kZVR5cGUgJiYgbm9kZTEudGFnTmFtZSA9PT0gbm9kZTIudGFnTmFtZSkgaWYgKG5vZGUxLmlkICE9PSBcIlwiICYmIG5vZGUxLmlkID09PSBub2RlMi5pZCkgcmV0dXJuIHRydWU7XG5cdFx0ZWxzZSByZXR1cm4gZ2V0SWRJbnRlcnNlY3Rpb25Db3VudChjdHgsIG5vZGUxLCBub2RlMikgPiAwO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRmdW5jdGlvbiBpc1NvZnRNYXRjaChub2RlMSwgbm9kZTIpIHtcblx0XHRpZiAobm9kZTEgPT0gbnVsbCB8fCBub2RlMiA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdFx0cmV0dXJuIG5vZGUxLm5vZGVUeXBlID09PSBub2RlMi5ub2RlVHlwZSAmJiBub2RlMS50YWdOYW1lID09PSBub2RlMi50YWdOYW1lO1xuXHR9XG5cdGZ1bmN0aW9uIHJlbW92ZU5vZGVzQmV0d2VlbihzdGFydEluY2x1c2l2ZSwgZW5kRXhjbHVzaXZlLCBjdHgpIHtcblx0XHR3aGlsZSAoc3RhcnRJbmNsdXNpdmUgIT09IGVuZEV4Y2x1c2l2ZSkge1xuXHRcdFx0bGV0IHRlbXBOb2RlID0gc3RhcnRJbmNsdXNpdmU7XG5cdFx0XHRzdGFydEluY2x1c2l2ZSA9IHN0YXJ0SW5jbHVzaXZlLm5leHRTaWJsaW5nO1xuXHRcdFx0cmVtb3ZlTm9kZSh0ZW1wTm9kZSwgY3R4KTtcblx0XHR9XG5cdFx0cmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCBlbmRFeGNsdXNpdmUpO1xuXHRcdHJldHVybiBlbmRFeGNsdXNpdmUubmV4dFNpYmxpbmc7XG5cdH1cblx0ZnVuY3Rpb24gZmluZElkU2V0TWF0Y2gobmV3Q29udGVudCwgb2xkUGFyZW50LCBuZXdDaGlsZCwgaW5zZXJ0aW9uUG9pbnQsIGN0eCkge1xuXHRcdGxldCBuZXdDaGlsZFBvdGVudGlhbElkQ291bnQgPSBnZXRJZEludGVyc2VjdGlvbkNvdW50KGN0eCwgbmV3Q2hpbGQsIG9sZFBhcmVudCk7XG5cdFx0bGV0IHBvdGVudGlhbE1hdGNoID0gbnVsbDtcblx0XHRpZiAobmV3Q2hpbGRQb3RlbnRpYWxJZENvdW50ID4gMCkge1xuXHRcdFx0bGV0IHBvdGVudGlhbE1hdGNoID0gaW5zZXJ0aW9uUG9pbnQ7XG5cdFx0XHRsZXQgb3RoZXJNYXRjaENvdW50ID0gMDtcblx0XHRcdHdoaWxlIChwb3RlbnRpYWxNYXRjaCAhPSBudWxsKSB7XG5cdFx0XHRcdGlmIChpc0lkU2V0TWF0Y2gobmV3Q2hpbGQsIHBvdGVudGlhbE1hdGNoLCBjdHgpKSByZXR1cm4gcG90ZW50aWFsTWF0Y2g7XG5cdFx0XHRcdG90aGVyTWF0Y2hDb3VudCArPSBnZXRJZEludGVyc2VjdGlvbkNvdW50KGN0eCwgcG90ZW50aWFsTWF0Y2gsIG5ld0NvbnRlbnQpO1xuXHRcdFx0XHRpZiAob3RoZXJNYXRjaENvdW50ID4gbmV3Q2hpbGRQb3RlbnRpYWxJZENvdW50KSByZXR1cm4gbnVsbDtcblx0XHRcdFx0cG90ZW50aWFsTWF0Y2ggPSBwb3RlbnRpYWxNYXRjaC5uZXh0U2libGluZztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHBvdGVudGlhbE1hdGNoO1xuXHR9XG5cdGZ1bmN0aW9uIGZpbmRTb2Z0TWF0Y2gobmV3Q29udGVudCwgb2xkUGFyZW50LCBuZXdDaGlsZCwgaW5zZXJ0aW9uUG9pbnQsIGN0eCkge1xuXHRcdGxldCBwb3RlbnRpYWxTb2Z0TWF0Y2ggPSBpbnNlcnRpb25Qb2ludDtcblx0XHRsZXQgbmV4dFNpYmxpbmcgPSBuZXdDaGlsZC5uZXh0U2libGluZztcblx0XHRsZXQgc2libGluZ1NvZnRNYXRjaENvdW50ID0gMDtcblx0XHR3aGlsZSAocG90ZW50aWFsU29mdE1hdGNoICE9IG51bGwpIHtcblx0XHRcdGlmIChnZXRJZEludGVyc2VjdGlvbkNvdW50KGN0eCwgcG90ZW50aWFsU29mdE1hdGNoLCBuZXdDb250ZW50KSA+IDApIHJldHVybiBudWxsO1xuXHRcdFx0aWYgKGlzU29mdE1hdGNoKG5ld0NoaWxkLCBwb3RlbnRpYWxTb2Z0TWF0Y2gpKSByZXR1cm4gcG90ZW50aWFsU29mdE1hdGNoO1xuXHRcdFx0aWYgKGlzU29mdE1hdGNoKG5leHRTaWJsaW5nLCBwb3RlbnRpYWxTb2Z0TWF0Y2gpKSB7XG5cdFx0XHRcdHNpYmxpbmdTb2Z0TWF0Y2hDb3VudCsrO1xuXHRcdFx0XHRuZXh0U2libGluZyA9IG5leHRTaWJsaW5nLm5leHRTaWJsaW5nO1xuXHRcdFx0XHRpZiAoc2libGluZ1NvZnRNYXRjaENvdW50ID49IDIpIHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0cG90ZW50aWFsU29mdE1hdGNoID0gcG90ZW50aWFsU29mdE1hdGNoLm5leHRTaWJsaW5nO1xuXHRcdH1cblx0XHRyZXR1cm4gcG90ZW50aWFsU29mdE1hdGNoO1xuXHR9XG5cdGZ1bmN0aW9uIHBhcnNlQ29udGVudChuZXdDb250ZW50KSB7XG5cdFx0bGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcblx0XHRsZXQgY29udGVudFdpdGhTdmdzUmVtb3ZlZCA9IG5ld0NvbnRlbnQucmVwbGFjZSgvPHN2ZyhcXHNbXj5dKj58PikoW1xcc1xcU10qPyk8XFwvc3ZnPi9naW0sIFwiXCIpO1xuXHRcdGlmIChjb250ZW50V2l0aFN2Z3NSZW1vdmVkLm1hdGNoKC88XFwvaHRtbD4vKSB8fCBjb250ZW50V2l0aFN2Z3NSZW1vdmVkLm1hdGNoKC88XFwvaGVhZD4vKSB8fCBjb250ZW50V2l0aFN2Z3NSZW1vdmVkLm1hdGNoKC88XFwvYm9keT4vKSkge1xuXHRcdFx0bGV0IGNvbnRlbnQgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKG5ld0NvbnRlbnQsIFwidGV4dC9odG1sXCIpO1xuXHRcdFx0aWYgKGNvbnRlbnRXaXRoU3Znc1JlbW92ZWQubWF0Y2goLzxcXC9odG1sPi8pKSB7XG5cdFx0XHRcdGNvbnRlbnQuZ2VuZXJhdGVkQnlJZGlvbW9ycGggPSB0cnVlO1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCBodG1sRWxlbWVudCA9IGNvbnRlbnQuZmlyc3RDaGlsZDtcblx0XHRcdFx0aWYgKGh0bWxFbGVtZW50KSB7XG5cdFx0XHRcdFx0aHRtbEVsZW1lbnQuZ2VuZXJhdGVkQnlJZGlvbW9ycGggPSB0cnVlO1xuXHRcdFx0XHRcdHJldHVybiBodG1sRWxlbWVudDtcblx0XHRcdFx0fSBlbHNlIHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgY29udGVudCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoXCI8Ym9keT48dGVtcGxhdGU+XCIgKyBuZXdDb250ZW50ICsgXCI8L3RlbXBsYXRlPjwvYm9keT5cIiwgXCJ0ZXh0L2h0bWxcIikuYm9keS5xdWVyeVNlbGVjdG9yKFwidGVtcGxhdGVcIikuY29udGVudDtcblx0XHRcdGNvbnRlbnQuZ2VuZXJhdGVkQnlJZGlvbW9ycGggPSB0cnVlO1xuXHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbnRlbnQobmV3Q29udGVudCkge1xuXHRcdGlmIChuZXdDb250ZW50ID09IG51bGwpIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGVsc2UgaWYgKG5ld0NvbnRlbnQuZ2VuZXJhdGVkQnlJZGlvbW9ycGgpIHJldHVybiBuZXdDb250ZW50O1xuXHRcdGVsc2UgaWYgKG5ld0NvbnRlbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG5cdFx0XHRjb25zdCBkdW1teVBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRkdW1teVBhcmVudC5hcHBlbmQobmV3Q29udGVudCk7XG5cdFx0XHRyZXR1cm4gZHVtbXlQYXJlbnQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGR1bW15UGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdGZvciAoY29uc3QgZWx0IG9mIFsuLi5uZXdDb250ZW50XSkgZHVtbXlQYXJlbnQuYXBwZW5kKGVsdCk7XG5cdFx0XHRyZXR1cm4gZHVtbXlQYXJlbnQ7XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIGluc2VydFNpYmxpbmdzKHByZXZpb3VzU2libGluZywgbW9ycGhlZE5vZGUsIG5leHRTaWJsaW5nKSB7XG5cdFx0bGV0IHN0YWNrID0gW107XG5cdFx0bGV0IGFkZGVkID0gW107XG5cdFx0d2hpbGUgKHByZXZpb3VzU2libGluZyAhPSBudWxsKSB7XG5cdFx0XHRzdGFjay5wdXNoKHByZXZpb3VzU2libGluZyk7XG5cdFx0XHRwcmV2aW91c1NpYmxpbmcgPSBwcmV2aW91c1NpYmxpbmcucHJldmlvdXNTaWJsaW5nO1xuXHRcdH1cblx0XHR3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xuXHRcdFx0bGV0IG5vZGUgPSBzdGFjay5wb3AoKTtcblx0XHRcdGFkZGVkLnB1c2gobm9kZSk7XG5cdFx0XHRtb3JwaGVkTm9kZS5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShub2RlLCBtb3JwaGVkTm9kZSk7XG5cdFx0fVxuXHRcdGFkZGVkLnB1c2gobW9ycGhlZE5vZGUpO1xuXHRcdHdoaWxlIChuZXh0U2libGluZyAhPSBudWxsKSB7XG5cdFx0XHRzdGFjay5wdXNoKG5leHRTaWJsaW5nKTtcblx0XHRcdGFkZGVkLnB1c2gobmV4dFNpYmxpbmcpO1xuXHRcdFx0bmV4dFNpYmxpbmcgPSBuZXh0U2libGluZy5uZXh0U2libGluZztcblx0XHR9XG5cdFx0d2hpbGUgKHN0YWNrLmxlbmd0aCA+IDApIG1vcnBoZWROb2RlLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHN0YWNrLnBvcCgpLCBtb3JwaGVkTm9kZS5uZXh0U2libGluZyk7XG5cdFx0cmV0dXJuIGFkZGVkO1xuXHR9XG5cdGZ1bmN0aW9uIGZpbmRCZXN0Tm9kZU1hdGNoKG5ld0NvbnRlbnQsIG9sZE5vZGUsIGN0eCkge1xuXHRcdGxldCBjdXJyZW50RWxlbWVudDtcblx0XHRjdXJyZW50RWxlbWVudCA9IG5ld0NvbnRlbnQuZmlyc3RDaGlsZDtcblx0XHRsZXQgYmVzdEVsZW1lbnQgPSBjdXJyZW50RWxlbWVudDtcblx0XHRsZXQgc2NvcmUgPSAwO1xuXHRcdHdoaWxlIChjdXJyZW50RWxlbWVudCkge1xuXHRcdFx0bGV0IG5ld1Njb3JlID0gc2NvcmVFbGVtZW50KGN1cnJlbnRFbGVtZW50LCBvbGROb2RlLCBjdHgpO1xuXHRcdFx0aWYgKG5ld1Njb3JlID4gc2NvcmUpIHtcblx0XHRcdFx0YmVzdEVsZW1lbnQgPSBjdXJyZW50RWxlbWVudDtcblx0XHRcdFx0c2NvcmUgPSBuZXdTY29yZTtcblx0XHRcdH1cblx0XHRcdGN1cnJlbnRFbGVtZW50ID0gY3VycmVudEVsZW1lbnQubmV4dFNpYmxpbmc7XG5cdFx0fVxuXHRcdHJldHVybiBiZXN0RWxlbWVudDtcblx0fVxuXHRmdW5jdGlvbiBzY29yZUVsZW1lbnQobm9kZTEsIG5vZGUyLCBjdHgpIHtcblx0XHRpZiAoaXNTb2Z0TWF0Y2gobm9kZTEsIG5vZGUyKSkgcmV0dXJuIC41ICsgZ2V0SWRJbnRlcnNlY3Rpb25Db3VudChjdHgsIG5vZGUxLCBub2RlMik7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblx0ZnVuY3Rpb24gcmVtb3ZlTm9kZSh0ZW1wTm9kZSwgY3R4KSB7XG5cdFx0cmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCB0ZW1wTm9kZSk7XG5cdFx0aWYgKGN0eC5jYWxsYmFja3MuYmVmb3JlTm9kZVJlbW92ZWQodGVtcE5vZGUpID09PSBmYWxzZSkgcmV0dXJuO1xuXHRcdHRlbXBOb2RlLnJlbW92ZSgpO1xuXHRcdGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlUmVtb3ZlZCh0ZW1wTm9kZSk7XG5cdH1cblx0ZnVuY3Rpb24gaXNJZEluQ29uc2lkZXJhdGlvbihjdHgsIGlkKSB7XG5cdFx0cmV0dXJuICFjdHguZGVhZElkcy5oYXMoaWQpO1xuXHR9XG5cdGZ1bmN0aW9uIGlkSXNXaXRoaW5Ob2RlKGN0eCwgaWQsIHRhcmdldE5vZGUpIHtcblx0XHRyZXR1cm4gKGN0eC5pZE1hcC5nZXQodGFyZ2V0Tm9kZSkgfHwgRU1QVFlfU0VUKS5oYXMoaWQpO1xuXHR9XG5cdGZ1bmN0aW9uIHJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uKGN0eCwgbm9kZSkge1xuXHRcdGxldCBpZFNldCA9IGN0eC5pZE1hcC5nZXQobm9kZSkgfHwgRU1QVFlfU0VUO1xuXHRcdGZvciAoY29uc3QgaWQgb2YgaWRTZXQpIGN0eC5kZWFkSWRzLmFkZChpZCk7XG5cdH1cblx0ZnVuY3Rpb24gZ2V0SWRJbnRlcnNlY3Rpb25Db3VudChjdHgsIG5vZGUxLCBub2RlMikge1xuXHRcdGxldCBzb3VyY2VTZXQgPSBjdHguaWRNYXAuZ2V0KG5vZGUxKSB8fCBFTVBUWV9TRVQ7XG5cdFx0bGV0IG1hdGNoQ291bnQgPSAwO1xuXHRcdGZvciAoY29uc3QgaWQgb2Ygc291cmNlU2V0KSBpZiAoaXNJZEluQ29uc2lkZXJhdGlvbihjdHgsIGlkKSAmJiBpZElzV2l0aGluTm9kZShjdHgsIGlkLCBub2RlMikpICsrbWF0Y2hDb3VudDtcblx0XHRyZXR1cm4gbWF0Y2hDb3VudDtcblx0fVxuXHRmdW5jdGlvbiBwb3B1bGF0ZUlkTWFwRm9yTm9kZShub2RlLCBpZE1hcCkge1xuXHRcdGxldCBub2RlUGFyZW50ID0gbm9kZS5wYXJlbnRFbGVtZW50O1xuXHRcdGxldCBpZEVsZW1lbnRzID0gbm9kZS5xdWVyeVNlbGVjdG9yQWxsKFwiW2lkXVwiKTtcblx0XHRmb3IgKGNvbnN0IGVsdCBvZiBpZEVsZW1lbnRzKSB7XG5cdFx0XHRsZXQgY3VycmVudCA9IGVsdDtcblx0XHRcdHdoaWxlIChjdXJyZW50ICE9PSBub2RlUGFyZW50ICYmIGN1cnJlbnQgIT0gbnVsbCkge1xuXHRcdFx0XHRsZXQgaWRTZXQgPSBpZE1hcC5nZXQoY3VycmVudCk7XG5cdFx0XHRcdGlmIChpZFNldCA9PSBudWxsKSB7XG5cdFx0XHRcdFx0aWRTZXQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuXHRcdFx0XHRcdGlkTWFwLnNldChjdXJyZW50LCBpZFNldCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWRTZXQuYWRkKGVsdC5pZCk7XG5cdFx0XHRcdGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudEVsZW1lbnQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIGNyZWF0ZUlkTWFwKG9sZENvbnRlbnQsIG5ld0NvbnRlbnQpIHtcblx0XHRsZXQgaWRNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRcdHBvcHVsYXRlSWRNYXBGb3JOb2RlKG9sZENvbnRlbnQsIGlkTWFwKTtcblx0XHRwb3B1bGF0ZUlkTWFwRm9yTm9kZShuZXdDb250ZW50LCBpZE1hcCk7XG5cdFx0cmV0dXJuIGlkTWFwO1xuXHR9XG5cdHJldHVybiB7XG5cdFx0bW9ycGgsXG5cdFx0ZGVmYXVsdHNcblx0fTtcbn0pKCk7XG5mdW5jdGlvbiBub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihlbGVtZW50KSB7XG5cdGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIGVsZW1lbnQudHlwZSA9PT0gXCJmaWxlXCIpKSB7XG5cdFx0aWYgKFwidmFsdWVcIiBpbiBlbGVtZW50KSBlbGVtZW50LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGVsZW1lbnQudmFsdWUpO1xuXHRcdGVsc2UgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKFwidmFsdWVcIikpIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJcIik7XG5cdH1cblx0QXJyYXkuZnJvbShlbGVtZW50LmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xuXHRcdG5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uKGNoaWxkKTtcblx0fSk7XG59XG5jb25zdCBzeW5jQXR0cmlidXRlcyA9IChmcm9tRWwsIHRvRWwpID0+IHtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBmcm9tRWwuYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGF0dHIgPSBmcm9tRWwuYXR0cmlidXRlc1tpXTtcblx0XHR0b0VsLnNldEF0dHJpYnV0ZShhdHRyLm5hbWUsIGF0dHIudmFsdWUpO1xuXHR9XG59O1xuZnVuY3Rpb24gZXhlY3V0ZU1vcnBoZG9tKHJvb3RGcm9tRWxlbWVudCwgcm9vdFRvRWxlbWVudCwgbW9kaWZpZWRGaWVsZEVsZW1lbnRzLCBnZXRFbGVtZW50VmFsdWUsIGV4dGVybmFsTXV0YXRpb25UcmFja2VyKSB7XG5cdGNvbnN0IG9yaWdpbmFsRWxlbWVudElkc1RvU3dhcEFmdGVyID0gW107XG5cdGNvbnN0IG9yaWdpbmFsRWxlbWVudHNUb1ByZXNlcnZlID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0Y29uc3QgbWFya0VsZW1lbnRBc05lZWRpbmdQb3N0TW9ycGhTd2FwID0gKGlkLCByZXBsYWNlV2l0aENsb25lKSA9PiB7XG5cdFx0Y29uc3Qgb2xkRWxlbWVudCA9IG9yaWdpbmFsRWxlbWVudHNUb1ByZXNlcnZlLmdldChpZCk7XG5cdFx0aWYgKCEob2xkRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgdGhyb3cgbmV3IEVycm9yKGBPcmlnaW5hbCBlbGVtZW50IHdpdGggaWQgJHtpZH0gbm90IGZvdW5kYCk7XG5cdFx0b3JpZ2luYWxFbGVtZW50SWRzVG9Td2FwQWZ0ZXIucHVzaChpZCk7XG5cdFx0aWYgKCFyZXBsYWNlV2l0aENsb25lKSByZXR1cm4gbnVsbDtcblx0XHRjb25zdCBjbG9uZWRPbGRFbGVtZW50ID0gY2xvbmVIVE1MRWxlbWVudChvbGRFbGVtZW50KTtcblx0XHRvbGRFbGVtZW50LnJlcGxhY2VXaXRoKGNsb25lZE9sZEVsZW1lbnQpO1xuXHRcdHJldHVybiBjbG9uZWRPbGRFbGVtZW50O1xuXHR9O1xuXHRyb290VG9FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1saXZlLXByZXNlcnZlXVwiKS5mb3JFYWNoKChuZXdFbGVtZW50KSA9PiB7XG5cdFx0Y29uc3QgaWQgPSBuZXdFbGVtZW50LmlkO1xuXHRcdGlmICghaWQpIHRocm93IG5ldyBFcnJvcihcIlRoZSBkYXRhLWxpdmUtcHJlc2VydmUgYXR0cmlidXRlIHJlcXVpcmVzIGFuIGlkIGF0dHJpYnV0ZSB0byBiZSBzZXQgb24gdGhlIGVsZW1lbnRcIik7XG5cdFx0Y29uc3Qgb2xkRWxlbWVudCA9IHJvb3RGcm9tRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcblx0XHRpZiAoIShvbGRFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB0aHJvdyBuZXcgRXJyb3IoYFRoZSBlbGVtZW50IHdpdGggaWQgXCIke2lkfVwiIHdhcyBub3QgZm91bmQgaW4gdGhlIG9yaWdpbmFsIEhUTUxgKTtcblx0XHRuZXdFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtbGl2ZS1wcmVzZXJ2ZVwiKTtcblx0XHRvcmlnaW5hbEVsZW1lbnRzVG9QcmVzZXJ2ZS5zZXQoaWQsIG9sZEVsZW1lbnQpO1xuXHRcdHN5bmNBdHRyaWJ1dGVzKG5ld0VsZW1lbnQsIG9sZEVsZW1lbnQpO1xuXHR9KTtcblx0SWRpb21vcnBoLm1vcnBoKHJvb3RGcm9tRWxlbWVudCwgcm9vdFRvRWxlbWVudCwgeyBjYWxsYmFja3M6IHtcblx0XHRiZWZvcmVOb2RlTW9ycGhlZDogKGZyb21FbCwgdG9FbCkgPT4ge1xuXHRcdFx0aWYgKCEoZnJvbUVsIGluc3RhbmNlb2YgRWxlbWVudCkgfHwgISh0b0VsIGluc3RhbmNlb2YgRWxlbWVudCkpIHJldHVybiB0cnVlO1xuXHRcdFx0aWYgKGZyb21FbCA9PT0gcm9vdEZyb21FbGVtZW50KSByZXR1cm4gdHJ1ZTtcblx0XHRcdGlmIChmcm9tRWwuaWQgJiYgb3JpZ2luYWxFbGVtZW50c1RvUHJlc2VydmUuaGFzKGZyb21FbC5pZCkpIHtcblx0XHRcdFx0aWYgKGZyb21FbC5pZCA9PT0gdG9FbC5pZCkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRjb25zdCBjbG9uZWRGcm9tRWwgPSBtYXJrRWxlbWVudEFzTmVlZGluZ1Bvc3RNb3JwaFN3YXAoZnJvbUVsLmlkLCB0cnVlKTtcblx0XHRcdFx0aWYgKCFjbG9uZWRGcm9tRWwpIHRocm93IG5ldyBFcnJvcihcIm1pc3NpbmcgY2xvbmVcIik7XG5cdFx0XHRcdElkaW9tb3JwaC5tb3JwaChjbG9uZWRGcm9tRWwsIHRvRWwpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZnJvbUVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgdG9FbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG5cdFx0XHRcdGlmICh0eXBlb2YgZnJvbUVsLl9feCAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRcdGlmICghd2luZG93LkFscGluZSkgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGFjY2VzcyBBbHBpbmUuanMgdGhvdWdoIHRoZSBnbG9iYWwgd2luZG93LkFscGluZSB2YXJpYWJsZS4gUGxlYXNlIG1ha2Ugc3VyZSBBbHBpbmUuanMgaXMgbG9hZGVkIGJlZm9yZSBTeW1mb255IFVYIExpdmVDb21wb25lbnQuXCIpO1xuXHRcdFx0XHRcdGlmICh0eXBlb2Ygd2luZG93LkFscGluZS5tb3JwaCAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gYWNjZXNzIEFscGluZS5qcyBtb3JwaCBmdW5jdGlvbi4gUGxlYXNlIG1ha2Ugc3VyZSB0aGUgQWxwaW5lLmpzIE1vcnBoIHBsdWdpbiBpcyBpbnN0YWxsZWQgYW5kIGxvYWRlZCwgc2VlIGh0dHBzOi8vYWxwaW5lanMuZGV2L3BsdWdpbnMvbW9ycGggZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIpO1xuXHRcdFx0XHRcdHdpbmRvdy5BbHBpbmUubW9ycGgoZnJvbUVsLl9feCwgdG9FbCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGV4dGVybmFsTXV0YXRpb25UcmFja2VyLndhc0VsZW1lbnRBZGRlZChmcm9tRWwpKSB7XG5cdFx0XHRcdFx0ZnJvbUVsLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyZW5kXCIsIHRvRWwpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobW9kaWZpZWRGaWVsZEVsZW1lbnRzLmluY2x1ZGVzKGZyb21FbCkpIHNldFZhbHVlT25FbGVtZW50KHRvRWwsIGdldEVsZW1lbnRWYWx1ZShmcm9tRWwpKTtcblx0XHRcdFx0aWYgKGZyb21FbCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiBmcm9tRWwgIT09IGRvY3VtZW50LmJvZHkgJiYgbnVsbCAhPT0gZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChmcm9tRWwsIGZhbHNlKSkgc2V0VmFsdWVPbkVsZW1lbnQodG9FbCwgZ2V0RWxlbWVudFZhbHVlKGZyb21FbCkpO1xuXHRcdFx0XHRjb25zdCBlbGVtZW50Q2hhbmdlcyA9IGV4dGVybmFsTXV0YXRpb25UcmFja2VyLmdldENoYW5nZWRFbGVtZW50KGZyb21FbCk7XG5cdFx0XHRcdGlmIChlbGVtZW50Q2hhbmdlcykgZWxlbWVudENoYW5nZXMuYXBwbHlUb0VsZW1lbnQodG9FbCk7XG5cdFx0XHRcdGlmIChmcm9tRWwubm9kZU5hbWUudG9VcHBlckNhc2UoKSAhPT0gXCJPUFRJT05cIiAmJiBmcm9tRWwuaXNFcXVhbE5vZGUodG9FbCkpIHtcblx0XHRcdFx0XHRjb25zdCBub3JtYWxpemVkRnJvbUVsID0gY2xvbmVIVE1MRWxlbWVudChmcm9tRWwpO1xuXHRcdFx0XHRcdG5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uKG5vcm1hbGl6ZWRGcm9tRWwpO1xuXHRcdFx0XHRcdGNvbnN0IG5vcm1hbGl6ZWRUb0VsID0gY2xvbmVIVE1MRWxlbWVudCh0b0VsKTtcblx0XHRcdFx0XHRub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihub3JtYWxpemVkVG9FbCk7XG5cdFx0XHRcdFx0aWYgKG5vcm1hbGl6ZWRGcm9tRWwuaXNFcXVhbE5vZGUobm9ybWFsaXplZFRvRWwpKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChmcm9tRWwuaGFzQXR0cmlidXRlKFwiZGF0YS1za2lwLW1vcnBoXCIpIHx8IGZyb21FbC5pZCAmJiBmcm9tRWwuaWQgIT09IHRvRWwuaWQpIHtcblx0XHRcdFx0ZnJvbUVsLmlubmVySFRNTCA9IHRvRWwuaW5uZXJIVE1MO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGlmIChmcm9tRWwucGFyZW50RWxlbWVudD8uaGFzQXR0cmlidXRlKFwiZGF0YS1za2lwLW1vcnBoXCIpKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRyZXR1cm4gIWZyb21FbC5oYXNBdHRyaWJ1dGUoXCJkYXRhLWxpdmUtaWdub3JlXCIpO1xuXHRcdH0sXG5cdFx0YmVmb3JlTm9kZVJlbW92ZWQobm9kZSkge1xuXHRcdFx0aWYgKCEobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgcmV0dXJuIHRydWU7XG5cdFx0XHRpZiAobm9kZS5pZCAmJiBvcmlnaW5hbEVsZW1lbnRzVG9QcmVzZXJ2ZS5oYXMobm9kZS5pZCkpIHtcblx0XHRcdFx0bWFya0VsZW1lbnRBc05lZWRpbmdQb3N0TW9ycGhTd2FwKG5vZGUuaWQsIGZhbHNlKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIud2FzRWxlbWVudEFkZGVkKG5vZGUpKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRyZXR1cm4gIW5vZGUuaGFzQXR0cmlidXRlKFwiZGF0YS1saXZlLWlnbm9yZVwiKTtcblx0XHR9XG5cdH0gfSk7XG5cdG9yaWdpbmFsRWxlbWVudElkc1RvU3dhcEFmdGVyLmZvckVhY2goKGlkKSA9PiB7XG5cdFx0Y29uc3QgbmV3RWxlbWVudCA9IHJvb3RGcm9tRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcblx0XHRjb25zdCBvcmlnaW5hbEVsZW1lbnQgPSBvcmlnaW5hbEVsZW1lbnRzVG9QcmVzZXJ2ZS5nZXQoaWQpO1xuXHRcdGlmICghKG5ld0VsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgIShvcmlnaW5hbEVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgZWxlbWVudHMuXCIpO1xuXHRcdG5ld0VsZW1lbnQucmVwbGFjZVdpdGgob3JpZ2luYWxFbGVtZW50KTtcblx0fSk7XG59XG52YXIgQ2hhbmdpbmdJdGVtc1RyYWNrZXJfZGVmYXVsdCA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5jaGFuZ2VkSXRlbXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRcdHRoaXMucmVtb3ZlZEl0ZW1zID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0fVxuXHRzZXRJdGVtKGl0ZW1OYW1lLCBuZXdWYWx1ZSwgcHJldmlvdXNWYWx1ZSkge1xuXHRcdGlmICh0aGlzLnJlbW92ZWRJdGVtcy5oYXMoaXRlbU5hbWUpKSB7XG5cdFx0XHRjb25zdCByZW1vdmVkUmVjb3JkID0gdGhpcy5yZW1vdmVkSXRlbXMuZ2V0KGl0ZW1OYW1lKTtcblx0XHRcdHRoaXMucmVtb3ZlZEl0ZW1zLmRlbGV0ZShpdGVtTmFtZSk7XG5cdFx0XHRpZiAocmVtb3ZlZFJlY29yZC5vcmlnaW5hbCA9PT0gbmV3VmFsdWUpIHJldHVybjtcblx0XHR9XG5cdFx0aWYgKHRoaXMuY2hhbmdlZEl0ZW1zLmhhcyhpdGVtTmFtZSkpIHtcblx0XHRcdGNvbnN0IG9yaWdpbmFsUmVjb3JkID0gdGhpcy5jaGFuZ2VkSXRlbXMuZ2V0KGl0ZW1OYW1lKTtcblx0XHRcdGlmIChvcmlnaW5hbFJlY29yZC5vcmlnaW5hbCA9PT0gbmV3VmFsdWUpIHtcblx0XHRcdFx0dGhpcy5jaGFuZ2VkSXRlbXMuZGVsZXRlKGl0ZW1OYW1lKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jaGFuZ2VkSXRlbXMuc2V0KGl0ZW1OYW1lLCB7XG5cdFx0XHRcdG9yaWdpbmFsOiBvcmlnaW5hbFJlY29yZC5vcmlnaW5hbCxcblx0XHRcdFx0bmV3OiBuZXdWYWx1ZVxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuY2hhbmdlZEl0ZW1zLnNldChpdGVtTmFtZSwge1xuXHRcdFx0b3JpZ2luYWw6IHByZXZpb3VzVmFsdWUsXG5cdFx0XHRuZXc6IG5ld1ZhbHVlXG5cdFx0fSk7XG5cdH1cblx0cmVtb3ZlSXRlbShpdGVtTmFtZSwgY3VycmVudFZhbHVlKSB7XG5cdFx0bGV0IHRydWVPcmlnaW5hbFZhbHVlID0gY3VycmVudFZhbHVlO1xuXHRcdGlmICh0aGlzLmNoYW5nZWRJdGVtcy5oYXMoaXRlbU5hbWUpKSB7XG5cdFx0XHR0cnVlT3JpZ2luYWxWYWx1ZSA9IHRoaXMuY2hhbmdlZEl0ZW1zLmdldChpdGVtTmFtZSkub3JpZ2luYWw7XG5cdFx0XHR0aGlzLmNoYW5nZWRJdGVtcy5kZWxldGUoaXRlbU5hbWUpO1xuXHRcdFx0aWYgKHRydWVPcmlnaW5hbFZhbHVlID09PSBudWxsKSByZXR1cm47XG5cdFx0fVxuXHRcdGlmICghdGhpcy5yZW1vdmVkSXRlbXMuaGFzKGl0ZW1OYW1lKSkgdGhpcy5yZW1vdmVkSXRlbXMuc2V0KGl0ZW1OYW1lLCB7IG9yaWdpbmFsOiB0cnVlT3JpZ2luYWxWYWx1ZSB9KTtcblx0fVxuXHRnZXRDaGFuZ2VkSXRlbXMoKSB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy5jaGFuZ2VkSXRlbXMsIChbbmFtZSwgeyBuZXc6IHZhbHVlIH1dKSA9PiAoe1xuXHRcdFx0bmFtZSxcblx0XHRcdHZhbHVlXG5cdFx0fSkpO1xuXHR9XG5cdGdldFJlbW92ZWRJdGVtcygpIHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnJlbW92ZWRJdGVtcy5rZXlzKCkpO1xuXHR9XG5cdGlzRW1wdHkoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2hhbmdlZEl0ZW1zLnNpemUgPT09IDAgJiYgdGhpcy5yZW1vdmVkSXRlbXMuc2l6ZSA9PT0gMDtcblx0fVxufTtcbnZhciBFbGVtZW50Q2hhbmdlcyA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5hZGRlZENsYXNzZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuXHRcdHRoaXMucmVtb3ZlZENsYXNzZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuXHRcdHRoaXMuc3R5bGVDaGFuZ2VzID0gbmV3IENoYW5naW5nSXRlbXNUcmFja2VyX2RlZmF1bHQoKTtcblx0XHR0aGlzLmF0dHJpYnV0ZUNoYW5nZXMgPSBuZXcgQ2hhbmdpbmdJdGVtc1RyYWNrZXJfZGVmYXVsdCgpO1xuXHR9XG5cdGFkZENsYXNzKGNsYXNzTmFtZSkge1xuXHRcdGlmICghdGhpcy5yZW1vdmVkQ2xhc3Nlcy5kZWxldGUoY2xhc3NOYW1lKSkgdGhpcy5hZGRlZENsYXNzZXMuYWRkKGNsYXNzTmFtZSk7XG5cdH1cblx0cmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG5cdFx0aWYgKCF0aGlzLmFkZGVkQ2xhc3Nlcy5kZWxldGUoY2xhc3NOYW1lKSkgdGhpcy5yZW1vdmVkQ2xhc3Nlcy5hZGQoY2xhc3NOYW1lKTtcblx0fVxuXHRhZGRTdHlsZShzdHlsZU5hbWUsIG5ld1ZhbHVlLCBvcmlnaW5hbFZhbHVlKSB7XG5cdFx0dGhpcy5zdHlsZUNoYW5nZXMuc2V0SXRlbShzdHlsZU5hbWUsIG5ld1ZhbHVlLCBvcmlnaW5hbFZhbHVlKTtcblx0fVxuXHRyZW1vdmVTdHlsZShzdHlsZU5hbWUsIG9yaWdpbmFsVmFsdWUpIHtcblx0XHR0aGlzLnN0eWxlQ2hhbmdlcy5yZW1vdmVJdGVtKHN0eWxlTmFtZSwgb3JpZ2luYWxWYWx1ZSk7XG5cdH1cblx0YWRkQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIG5ld1ZhbHVlLCBvcmlnaW5hbFZhbHVlKSB7XG5cdFx0dGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLnNldEl0ZW0oYXR0cmlidXRlTmFtZSwgbmV3VmFsdWUsIG9yaWdpbmFsVmFsdWUpO1xuXHR9XG5cdHJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBvcmlnaW5hbFZhbHVlKSB7XG5cdFx0dGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLnJlbW92ZUl0ZW0oYXR0cmlidXRlTmFtZSwgb3JpZ2luYWxWYWx1ZSk7XG5cdH1cblx0Z2V0QWRkZWRDbGFzc2VzKCkge1xuXHRcdHJldHVybiBbLi4udGhpcy5hZGRlZENsYXNzZXNdO1xuXHR9XG5cdGdldFJlbW92ZWRDbGFzc2VzKCkge1xuXHRcdHJldHVybiBbLi4udGhpcy5yZW1vdmVkQ2xhc3Nlc107XG5cdH1cblx0Z2V0Q2hhbmdlZFN0eWxlcygpIHtcblx0XHRyZXR1cm4gdGhpcy5zdHlsZUNoYW5nZXMuZ2V0Q2hhbmdlZEl0ZW1zKCk7XG5cdH1cblx0Z2V0UmVtb3ZlZFN0eWxlcygpIHtcblx0XHRyZXR1cm4gdGhpcy5zdHlsZUNoYW5nZXMuZ2V0UmVtb3ZlZEl0ZW1zKCk7XG5cdH1cblx0Z2V0Q2hhbmdlZEF0dHJpYnV0ZXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5nZXRDaGFuZ2VkSXRlbXMoKTtcblx0fVxuXHRnZXRSZW1vdmVkQXR0cmlidXRlcygpIHtcblx0XHRyZXR1cm4gdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLmdldFJlbW92ZWRJdGVtcygpO1xuXHR9XG5cdGFwcGx5VG9FbGVtZW50KGVsZW1lbnQpIHtcblx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4udGhpcy5hZGRlZENsYXNzZXMpO1xuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSguLi50aGlzLnJlbW92ZWRDbGFzc2VzKTtcblx0XHR0aGlzLnN0eWxlQ2hhbmdlcy5nZXRDaGFuZ2VkSXRlbXMoKS5mb3JFYWNoKChjaGFuZ2UpID0+IHtcblx0XHRcdGlmICgvIVxccyppbXBvcnRhbnQvaS50ZXN0KGNoYW5nZS52YWx1ZSkpIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoY2hhbmdlLm5hbWUsIGNoYW5nZS52YWx1ZS5yZXBsYWNlKC8hXFxzKmltcG9ydGFudC9pLCBcIlwiKS50cmltKCksIFwiaW1wb3J0YW50XCIpO1xuXHRcdFx0ZWxzZSBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KGNoYW5nZS5uYW1lLCBjaGFuZ2UudmFsdWUpO1xuXHRcdH0pO1xuXHRcdHRoaXMuc3R5bGVDaGFuZ2VzLmdldFJlbW92ZWRJdGVtcygpLmZvckVhY2goKHN0eWxlTmFtZSkgPT4ge1xuXHRcdFx0ZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShzdHlsZU5hbWUpO1xuXHRcdH0pO1xuXHRcdHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5nZXRDaGFuZ2VkSXRlbXMoKS5mb3JFYWNoKChjaGFuZ2UpID0+IHtcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKGNoYW5nZS5uYW1lLCBjaGFuZ2UudmFsdWUpO1xuXHRcdH0pO1xuXHRcdHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5nZXRSZW1vdmVkSXRlbXMoKS5mb3JFYWNoKChhdHRyaWJ1dGVOYW1lKSA9PiB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcblx0XHR9KTtcblx0fVxuXHRpc0VtcHR5KCkge1xuXHRcdHJldHVybiB0aGlzLmFkZGVkQ2xhc3Nlcy5zaXplID09PSAwICYmIHRoaXMucmVtb3ZlZENsYXNzZXMuc2l6ZSA9PT0gMCAmJiB0aGlzLnN0eWxlQ2hhbmdlcy5pc0VtcHR5KCkgJiYgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLmlzRW1wdHkoKTtcblx0fVxufTtcbnZhciBFeHRlcm5hbE11dGF0aW9uVHJhY2tlcl9kZWZhdWx0ID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3RvcihlbGVtZW50LCBzaG91bGRUcmFja0NoYW5nZUNhbGxiYWNrKSB7XG5cdFx0dGhpcy5jaGFuZ2VkRWxlbWVudHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcblx0XHR0aGlzLmNoYW5nZWRFbGVtZW50c0NvdW50ID0gMDtcblx0XHR0aGlzLmFkZGVkRWxlbWVudHMgPSBbXTtcblx0XHR0aGlzLnJlbW92ZWRFbGVtZW50cyA9IFtdO1xuXHRcdHRoaXMuaXNTdGFydGVkID0gZmFsc2U7XG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblx0XHR0aGlzLnNob3VsZFRyYWNrQ2hhbmdlQ2FsbGJhY2sgPSBzaG91bGRUcmFja0NoYW5nZUNhbGxiYWNrO1xuXHRcdHRoaXMubXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMub25NdXRhdGlvbnMuYmluZCh0aGlzKSk7XG5cdH1cblx0c3RhcnQoKSB7XG5cdFx0aWYgKHRoaXMuaXNTdGFydGVkKSByZXR1cm47XG5cdFx0dGhpcy5tdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5lbGVtZW50LCB7XG5cdFx0XHRjaGlsZExpc3Q6IHRydWUsXG5cdFx0XHRzdWJ0cmVlOiB0cnVlLFxuXHRcdFx0YXR0cmlidXRlczogdHJ1ZSxcblx0XHRcdGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlXG5cdFx0fSk7XG5cdFx0dGhpcy5pc1N0YXJ0ZWQgPSB0cnVlO1xuXHR9XG5cdHN0b3AoKSB7XG5cdFx0aWYgKHRoaXMuaXNTdGFydGVkKSB7XG5cdFx0XHR0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXHRcdFx0dGhpcy5pc1N0YXJ0ZWQgPSBmYWxzZTtcblx0XHR9XG5cdH1cblx0Z2V0Q2hhbmdlZEVsZW1lbnQoZWxlbWVudCkge1xuXHRcdHJldHVybiB0aGlzLmNoYW5nZWRFbGVtZW50cy5oYXMoZWxlbWVudCkgPyB0aGlzLmNoYW5nZWRFbGVtZW50cy5nZXQoZWxlbWVudCkgOiBudWxsO1xuXHR9XG5cdGdldEFkZGVkRWxlbWVudHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWRkZWRFbGVtZW50cztcblx0fVxuXHR3YXNFbGVtZW50QWRkZWQoZWxlbWVudCkge1xuXHRcdHJldHVybiB0aGlzLmFkZGVkRWxlbWVudHMuaW5jbHVkZXMoZWxlbWVudCk7XG5cdH1cblx0aGFuZGxlUGVuZGluZ0NoYW5nZXMoKSB7XG5cdFx0dGhpcy5vbk11dGF0aW9ucyh0aGlzLm11dGF0aW9uT2JzZXJ2ZXIudGFrZVJlY29yZHMoKSk7XG5cdH1cblx0b25NdXRhdGlvbnMobXV0YXRpb25zKSB7XG5cdFx0Y29uc3QgaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuXHRcdGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XG5cdFx0XHRjb25zdCBlbGVtZW50ID0gbXV0YXRpb24udGFyZ2V0O1xuXHRcdFx0aWYgKCF0aGlzLnNob3VsZFRyYWNrQ2hhbmdlQ2FsbGJhY2soZWxlbWVudCkpIGNvbnRpbnVlO1xuXHRcdFx0aWYgKHRoaXMuaXNFbGVtZW50QWRkZWRCeVRyYW5zbGF0aW9uKGVsZW1lbnQpKSBjb250aW51ZTtcblx0XHRcdGxldCBpc0NoYW5nZUluQWRkZWRFbGVtZW50ID0gZmFsc2U7XG5cdFx0XHRmb3IgKGNvbnN0IGFkZGVkRWxlbWVudCBvZiB0aGlzLmFkZGVkRWxlbWVudHMpIGlmIChhZGRlZEVsZW1lbnQuY29udGFpbnMoZWxlbWVudCkpIHtcblx0XHRcdFx0aXNDaGFuZ2VJbkFkZGVkRWxlbWVudCA9IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGlzQ2hhbmdlSW5BZGRlZEVsZW1lbnQpIGNvbnRpbnVlO1xuXHRcdFx0c3dpdGNoIChtdXRhdGlvbi50eXBlKSB7XG5cdFx0XHRcdGNhc2UgXCJjaGlsZExpc3RcIjpcblx0XHRcdFx0XHR0aGlzLmhhbmRsZUNoaWxkTGlzdE11dGF0aW9uKG11dGF0aW9uKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImF0dHJpYnV0ZXNcIjpcblx0XHRcdFx0XHRpZiAoIWhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMuaGFzKGVsZW1lbnQpKSBoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zLnNldChlbGVtZW50LCBbXSk7XG5cdFx0XHRcdFx0aWYgKCFoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zLmdldChlbGVtZW50KS5pbmNsdWRlcyhtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lKSkge1xuXHRcdFx0XHRcdFx0dGhpcy5oYW5kbGVBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbik7XG5cdFx0XHRcdFx0XHRoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zLnNldChlbGVtZW50LCBbLi4uaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucy5nZXQoZWxlbWVudCksIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWVdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGhhbmRsZUNoaWxkTGlzdE11dGF0aW9uKG11dGF0aW9uKSB7XG5cdFx0bXV0YXRpb24uYWRkZWROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG5cdFx0XHRpZiAoIShub2RlIGluc3RhbmNlb2YgRWxlbWVudCkpIHJldHVybjtcblx0XHRcdGlmICh0aGlzLnJlbW92ZWRFbGVtZW50cy5pbmNsdWRlcyhub2RlKSkge1xuXHRcdFx0XHR0aGlzLnJlbW92ZWRFbGVtZW50cy5zcGxpY2UodGhpcy5yZW1vdmVkRWxlbWVudHMuaW5kZXhPZihub2RlKSwgMSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmlzRWxlbWVudEFkZGVkQnlUcmFuc2xhdGlvbihub2RlKSkgcmV0dXJuO1xuXHRcdFx0dGhpcy5hZGRlZEVsZW1lbnRzLnB1c2gobm9kZSk7XG5cdFx0fSk7XG5cdFx0bXV0YXRpb24ucmVtb3ZlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcblx0XHRcdGlmICghKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSkgcmV0dXJuO1xuXHRcdFx0aWYgKHRoaXMuYWRkZWRFbGVtZW50cy5pbmNsdWRlcyhub2RlKSkge1xuXHRcdFx0XHR0aGlzLmFkZGVkRWxlbWVudHMuc3BsaWNlKHRoaXMuYWRkZWRFbGVtZW50cy5pbmRleE9mKG5vZGUpLCAxKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5yZW1vdmVkRWxlbWVudHMucHVzaChub2RlKTtcblx0XHR9KTtcblx0fVxuXHRoYW5kbGVBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbikge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSBtdXRhdGlvbi50YXJnZXQ7XG5cdFx0aWYgKCF0aGlzLmNoYW5nZWRFbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcblx0XHRcdHRoaXMuY2hhbmdlZEVsZW1lbnRzLnNldChlbGVtZW50LCBuZXcgRWxlbWVudENoYW5nZXMoKSk7XG5cdFx0XHR0aGlzLmNoYW5nZWRFbGVtZW50c0NvdW50Kys7XG5cdFx0fVxuXHRcdGNvbnN0IGNoYW5nZWRFbGVtZW50ID0gdGhpcy5jaGFuZ2VkRWxlbWVudHMuZ2V0KGVsZW1lbnQpO1xuXHRcdHN3aXRjaCAobXV0YXRpb24uYXR0cmlidXRlTmFtZSkge1xuXHRcdFx0Y2FzZSBcImNsYXNzXCI6XG5cdFx0XHRcdHRoaXMuaGFuZGxlQ2xhc3NBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgY2hhbmdlZEVsZW1lbnQpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJzdHlsZVwiOlxuXHRcdFx0XHR0aGlzLmhhbmRsZVN0eWxlQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGNoYW5nZWRFbGVtZW50KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OiB0aGlzLmhhbmRsZUdlbmVyaWNBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgY2hhbmdlZEVsZW1lbnQpO1xuXHRcdH1cblx0XHRpZiAoY2hhbmdlZEVsZW1lbnQuaXNFbXB0eSgpKSB7XG5cdFx0XHR0aGlzLmNoYW5nZWRFbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG5cdFx0XHR0aGlzLmNoYW5nZWRFbGVtZW50c0NvdW50LS07XG5cdFx0fVxuXHR9XG5cdGhhbmRsZUNsYXNzQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGVsZW1lbnRDaGFuZ2VzKSB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IG11dGF0aW9uLnRhcmdldDtcblx0XHRjb25zdCBwcmV2aW91c1ZhbHVlcyA9IChtdXRhdGlvbi5vbGRWYWx1ZSB8fCBcIlwiKS5tYXRjaCgvKFxcUyspL2d1KSB8fCBbXTtcblx0XHRjb25zdCBuZXdWYWx1ZXMgPSBbXS5zbGljZS5jYWxsKGVsZW1lbnQuY2xhc3NMaXN0KTtcblx0XHRjb25zdCBhZGRlZFZhbHVlcyA9IG5ld1ZhbHVlcy5maWx0ZXIoKHZhbHVlKSA9PiAhcHJldmlvdXNWYWx1ZXMuaW5jbHVkZXModmFsdWUpKTtcblx0XHRjb25zdCByZW1vdmVkVmFsdWVzID0gcHJldmlvdXNWYWx1ZXMuZmlsdGVyKCh2YWx1ZSkgPT4gIW5ld1ZhbHVlcy5pbmNsdWRlcyh2YWx1ZSkpO1xuXHRcdGFkZGVkVmFsdWVzLmZvckVhY2goKHZhbHVlKSA9PiB7XG5cdFx0XHRlbGVtZW50Q2hhbmdlcy5hZGRDbGFzcyh2YWx1ZSk7XG5cdFx0fSk7XG5cdFx0cmVtb3ZlZFZhbHVlcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuXHRcdFx0ZWxlbWVudENoYW5nZXMucmVtb3ZlQ2xhc3ModmFsdWUpO1xuXHRcdH0pO1xuXHR9XG5cdGhhbmRsZVN0eWxlQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGVsZW1lbnRDaGFuZ2VzKSB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IG11dGF0aW9uLnRhcmdldDtcblx0XHRjb25zdCBwcmV2aW91c1ZhbHVlID0gbXV0YXRpb24ub2xkVmFsdWUgfHwgXCJcIjtcblx0XHRjb25zdCBwcmV2aW91c1N0eWxlcyA9IHRoaXMuZXh0cmFjdFN0eWxlcyhwcmV2aW91c1ZhbHVlKTtcblx0XHRjb25zdCBuZXdWYWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwic3R5bGVcIikgfHwgXCJcIjtcblx0XHRjb25zdCBuZXdTdHlsZXMgPSB0aGlzLmV4dHJhY3RTdHlsZXMobmV3VmFsdWUpO1xuXHRcdGNvbnN0IGFkZGVkT3JDaGFuZ2VkU3R5bGVzID0gT2JqZWN0LmtleXMobmV3U3R5bGVzKS5maWx0ZXIoKGtleSkgPT4gcHJldmlvdXNTdHlsZXNba2V5XSA9PT0gdm9pZCAwIHx8IHByZXZpb3VzU3R5bGVzW2tleV0gIT09IG5ld1N0eWxlc1trZXldKTtcblx0XHRjb25zdCByZW1vdmVkU3R5bGVzID0gT2JqZWN0LmtleXMocHJldmlvdXNTdHlsZXMpLmZpbHRlcigoa2V5KSA9PiAhbmV3U3R5bGVzW2tleV0pO1xuXHRcdGFkZGVkT3JDaGFuZ2VkU3R5bGVzLmZvckVhY2goKHN0eWxlKSA9PiB7XG5cdFx0XHRlbGVtZW50Q2hhbmdlcy5hZGRTdHlsZShzdHlsZSwgbmV3U3R5bGVzW3N0eWxlXSwgcHJldmlvdXNTdHlsZXNbc3R5bGVdID09PSB2b2lkIDAgPyBudWxsIDogcHJldmlvdXNTdHlsZXNbc3R5bGVdKTtcblx0XHR9KTtcblx0XHRyZW1vdmVkU3R5bGVzLmZvckVhY2goKHN0eWxlKSA9PiB7XG5cdFx0XHRlbGVtZW50Q2hhbmdlcy5yZW1vdmVTdHlsZShzdHlsZSwgcHJldmlvdXNTdHlsZXNbc3R5bGVdKTtcblx0XHR9KTtcblx0fVxuXHRoYW5kbGVHZW5lcmljQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGVsZW1lbnRDaGFuZ2VzKSB7XG5cdFx0Y29uc3QgYXR0cmlidXRlTmFtZSA9IG11dGF0aW9uLmF0dHJpYnV0ZU5hbWU7XG5cdFx0Y29uc3QgZWxlbWVudCA9IG11dGF0aW9uLnRhcmdldDtcblx0XHRsZXQgb2xkVmFsdWUgPSBtdXRhdGlvbi5vbGRWYWx1ZTtcblx0XHRsZXQgbmV3VmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcblx0XHRpZiAob2xkVmFsdWUgPT09IGF0dHJpYnV0ZU5hbWUpIG9sZFZhbHVlID0gXCJcIjtcblx0XHRpZiAobmV3VmFsdWUgPT09IGF0dHJpYnV0ZU5hbWUpIG5ld1ZhbHVlID0gXCJcIjtcblx0XHRpZiAoIWVsZW1lbnQuaGFzQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpKSB7XG5cdFx0XHRpZiAob2xkVmFsdWUgPT09IG51bGwpIHJldHVybjtcblx0XHRcdGVsZW1lbnRDaGFuZ2VzLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBtdXRhdGlvbi5vbGRWYWx1ZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChuZXdWYWx1ZSA9PT0gb2xkVmFsdWUpIHJldHVybjtcblx0XHRlbGVtZW50Q2hhbmdlcy5hZGRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSksIG11dGF0aW9uLm9sZFZhbHVlKTtcblx0fVxuXHRleHRyYWN0U3R5bGVzKHN0eWxlcykge1xuXHRcdGNvbnN0IHN0eWxlT2JqZWN0ID0ge307XG5cdFx0c3R5bGVzLnNwbGl0KFwiO1wiKS5mb3JFYWNoKChzdHlsZSkgPT4ge1xuXHRcdFx0Y29uc3QgcGFydHMgPSBzdHlsZS5zcGxpdChcIjpcIik7XG5cdFx0XHRpZiAocGFydHMubGVuZ3RoID09PSAxKSByZXR1cm47XG5cdFx0XHRjb25zdCBwcm9wZXJ0eSA9IHBhcnRzWzBdLnRyaW0oKTtcblx0XHRcdHN0eWxlT2JqZWN0W3Byb3BlcnR5XSA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oXCI6XCIpLnRyaW0oKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gc3R5bGVPYmplY3Q7XG5cdH1cblx0aXNFbGVtZW50QWRkZWRCeVRyYW5zbGF0aW9uKGVsZW1lbnQpIHtcblx0XHRyZXR1cm4gZWxlbWVudC50YWdOYW1lID09PSBcIkZPTlRcIiAmJiBlbGVtZW50LmdldEF0dHJpYnV0ZShcInN0eWxlXCIpID09PSBcInZlcnRpY2FsLWFsaWduOiBpbmhlcml0O1wiO1xuXHR9XG59O1xudmFyIFVuc3luY2VkSW5wdXRzVHJhY2tlcl9kZWZhdWx0ID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcihjb21wb25lbnQsIG1vZGVsRWxlbWVudFJlc29sdmVyKSB7XG5cdFx0dGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMgPSBbe1xuXHRcdFx0ZXZlbnQ6IFwiaW5wdXRcIixcblx0XHRcdGNhbGxiYWNrOiAoZXZlbnQpID0+IHRoaXMuaGFuZGxlSW5wdXRFdmVudChldmVudClcblx0XHR9XTtcblx0XHR0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcblx0XHR0aGlzLm1vZGVsRWxlbWVudFJlc29sdmVyID0gbW9kZWxFbGVtZW50UmVzb2x2ZXI7XG5cdFx0dGhpcy51bnN5bmNlZElucHV0cyA9IG5ldyBVbnN5bmNlZElucHV0Q29udGFpbmVyKCk7XG5cdH1cblx0YWN0aXZhdGUoKSB7XG5cdFx0dGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoeyBldmVudCwgY2FsbGJhY2sgfSkgPT4ge1xuXHRcdFx0dGhpcy5jb21wb25lbnQuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG5cdFx0fSk7XG5cdH1cblx0ZGVhY3RpdmF0ZSgpIHtcblx0XHR0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycy5mb3JFYWNoKCh7IGV2ZW50LCBjYWxsYmFjayB9KSA9PiB7XG5cdFx0XHR0aGlzLmNvbXBvbmVudC5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcblx0XHR9KTtcblx0fVxuXHRtYXJrTW9kZWxBc1N5bmNlZChtb2RlbE5hbWUpIHtcblx0XHR0aGlzLnVuc3luY2VkSW5wdXRzLm1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSk7XG5cdH1cblx0aGFuZGxlSW5wdXRFdmVudChldmVudCkge1xuXHRcdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblx0XHRpZiAoIXRhcmdldCkgcmV0dXJuO1xuXHRcdHRoaXMudXBkYXRlTW9kZWxGcm9tRWxlbWVudCh0YXJnZXQpO1xuXHR9XG5cdHVwZGF0ZU1vZGVsRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuXHRcdGlmICghZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQoZWxlbWVudCwgdGhpcy5jb21wb25lbnQpKSByZXR1cm47XG5cdFx0aWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IHVwZGF0ZSBtb2RlbCBmb3Igbm9uIEhUTUxFbGVtZW50XCIpO1xuXHRcdGNvbnN0IG1vZGVsTmFtZSA9IHRoaXMubW9kZWxFbGVtZW50UmVzb2x2ZXIuZ2V0TW9kZWxOYW1lKGVsZW1lbnQpO1xuXHRcdHRoaXMudW5zeW5jZWRJbnB1dHMuYWRkKGVsZW1lbnQsIG1vZGVsTmFtZSk7XG5cdH1cblx0Z2V0VW5zeW5jZWRJbnB1dHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMudW5zeW5jZWRJbnB1dHMuYWxsVW5zeW5jZWRJbnB1dHMoKTtcblx0fVxuXHRnZXRVbnN5bmNlZE1vZGVscygpIHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnVuc3luY2VkSW5wdXRzLmdldFVuc3luY2VkTW9kZWxOYW1lcygpKTtcblx0fVxuXHRyZXNldFVuc3luY2VkRmllbGRzKCkge1xuXHRcdHRoaXMudW5zeW5jZWRJbnB1dHMucmVzZXRVbnN5bmNlZEZpZWxkcygpO1xuXHR9XG59O1xudmFyIFVuc3luY2VkSW5wdXRDb250YWluZXIgPSBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMudW5zeW5jZWROb25Nb2RlbEZpZWxkcyA9IFtdO1xuXHRcdHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzID0gW107XG5cdFx0dGhpcy51bnN5bmNlZE1vZGVsRmllbGRzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0fVxuXHRhZGQoZWxlbWVudCwgbW9kZWxOYW1lID0gbnVsbCkge1xuXHRcdGlmIChtb2RlbE5hbWUpIHtcblx0XHRcdHRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcy5zZXQobW9kZWxOYW1lLCBlbGVtZW50KTtcblx0XHRcdGlmICghdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMuaW5jbHVkZXMobW9kZWxOYW1lKSkgdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMucHVzaChtb2RlbE5hbWUpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLnVuc3luY2VkTm9uTW9kZWxGaWVsZHMucHVzaChlbGVtZW50KTtcblx0fVxuXHRyZXNldFVuc3luY2VkRmllbGRzKCkge1xuXHRcdHRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG5cdFx0XHRpZiAoIXRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLmluY2x1ZGVzKGtleSkpIHRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcy5kZWxldGUoa2V5KTtcblx0XHR9KTtcblx0fVxuXHRhbGxVbnN5bmNlZElucHV0cygpIHtcblx0XHRyZXR1cm4gWy4uLnRoaXMudW5zeW5jZWROb25Nb2RlbEZpZWxkcywgLi4udGhpcy51bnN5bmNlZE1vZGVsRmllbGRzLnZhbHVlcygpXTtcblx0fVxuXHRtYXJrTW9kZWxBc1N5bmNlZChtb2RlbE5hbWUpIHtcblx0XHRjb25zdCBpbmRleCA9IHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLmluZGV4T2YobW9kZWxOYW1lKTtcblx0XHRpZiAoaW5kZXggIT09IC0xKSB0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHR9XG5cdGdldFVuc3luY2VkTW9kZWxOYW1lcygpIHtcblx0XHRyZXR1cm4gdGhpcy51bnN5bmNlZE1vZGVsTmFtZXM7XG5cdH1cbn07XG5mdW5jdGlvbiBnZXREZWVwRGF0YShkYXRhLCBwcm9wZXJ0eVBhdGgpIHtcblx0Y29uc3QgeyBjdXJyZW50TGV2ZWxEYXRhLCBmaW5hbEtleSB9ID0gcGFyc2VEZWVwRGF0YShkYXRhLCBwcm9wZXJ0eVBhdGgpO1xuXHRpZiAoY3VycmVudExldmVsRGF0YSA9PT0gdm9pZCAwKSByZXR1cm47XG5cdHJldHVybiBjdXJyZW50TGV2ZWxEYXRhW2ZpbmFsS2V5XTtcbn1cbmNvbnN0IHBhcnNlRGVlcERhdGEgPSAoZGF0YSwgcHJvcGVydHlQYXRoKSA9PiB7XG5cdGNvbnN0IGZpbmFsRGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXHRsZXQgY3VycmVudExldmVsRGF0YSA9IGZpbmFsRGF0YTtcblx0Y29uc3QgcGFydHMgPSBwcm9wZXJ0eVBhdGguc3BsaXQoXCIuXCIpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aCAtIDE7IGkrKykgY3VycmVudExldmVsRGF0YSA9IGN1cnJlbnRMZXZlbERhdGFbcGFydHNbaV1dO1xuXHRjb25zdCBmaW5hbEtleSA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdO1xuXHRyZXR1cm4ge1xuXHRcdGN1cnJlbnRMZXZlbERhdGEsXG5cdFx0ZmluYWxEYXRhLFxuXHRcdGZpbmFsS2V5LFxuXHRcdHBhcnRzXG5cdH07XG59O1xudmFyIFZhbHVlU3RvcmVfZGVmYXVsdCA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHR0aGlzLnByb3BzID0ge307XG5cdFx0dGhpcy5kaXJ0eVByb3BzID0ge307XG5cdFx0dGhpcy5wZW5kaW5nUHJvcHMgPSB7fTtcblx0XHR0aGlzLnVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQgPSB7fTtcblx0XHR0aGlzLnByb3BzID0gcHJvcHM7XG5cdH1cblx0Z2V0KG5hbWUpIHtcblx0XHRjb25zdCBub3JtYWxpemVkTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShuYW1lKTtcblx0XHRpZiAodGhpcy5kaXJ0eVByb3BzW25vcm1hbGl6ZWROYW1lXSAhPT0gdm9pZCAwKSByZXR1cm4gdGhpcy5kaXJ0eVByb3BzW25vcm1hbGl6ZWROYW1lXTtcblx0XHRpZiAodGhpcy5wZW5kaW5nUHJvcHNbbm9ybWFsaXplZE5hbWVdICE9PSB2b2lkIDApIHJldHVybiB0aGlzLnBlbmRpbmdQcm9wc1tub3JtYWxpemVkTmFtZV07XG5cdFx0aWYgKHRoaXMucHJvcHNbbm9ybWFsaXplZE5hbWVdICE9PSB2b2lkIDApIHJldHVybiB0aGlzLnByb3BzW25vcm1hbGl6ZWROYW1lXTtcblx0XHRyZXR1cm4gZ2V0RGVlcERhdGEodGhpcy5wcm9wcywgbm9ybWFsaXplZE5hbWUpO1xuXHR9XG5cdGhhcyhuYW1lKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0KG5hbWUpICE9PSB2b2lkIDA7XG5cdH1cblx0c2V0KG5hbWUsIHZhbHVlKSB7XG5cdFx0Y29uc3Qgbm9ybWFsaXplZE5hbWUgPSBub3JtYWxpemVNb2RlbE5hbWUobmFtZSk7XG5cdFx0aWYgKHRoaXMuZ2V0KG5vcm1hbGl6ZWROYW1lKSA9PT0gdmFsdWUpIHJldHVybiBmYWxzZTtcblx0XHR0aGlzLmRpcnR5UHJvcHNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0Z2V0T3JpZ2luYWxQcm9wcygpIHtcblx0XHRyZXR1cm4geyAuLi50aGlzLnByb3BzIH07XG5cdH1cblx0Z2V0RGlydHlQcm9wcygpIHtcblx0XHRyZXR1cm4geyAuLi50aGlzLmRpcnR5UHJvcHMgfTtcblx0fVxuXHRnZXRVcGRhdGVkUHJvcHNGcm9tUGFyZW50KCkge1xuXHRcdHJldHVybiB7IC4uLnRoaXMudXBkYXRlZFByb3BzRnJvbVBhcmVudCB9O1xuXHR9XG5cdGZsdXNoRGlydHlQcm9wc1RvUGVuZGluZygpIHtcblx0XHR0aGlzLnBlbmRpbmdQcm9wcyA9IHsgLi4udGhpcy5kaXJ0eVByb3BzIH07XG5cdFx0dGhpcy5kaXJ0eVByb3BzID0ge307XG5cdH1cblx0cmVpbml0aWFsaXplQWxsUHJvcHMocHJvcHMpIHtcblx0XHR0aGlzLnByb3BzID0gcHJvcHM7XG5cdFx0dGhpcy51cGRhdGVkUHJvcHNGcm9tUGFyZW50ID0ge307XG5cdFx0dGhpcy5wZW5kaW5nUHJvcHMgPSB7fTtcblx0fVxuXHRwdXNoUGVuZGluZ1Byb3BzQmFja1RvRGlydHkoKSB7XG5cdFx0dGhpcy5kaXJ0eVByb3BzID0ge1xuXHRcdFx0Li4udGhpcy5wZW5kaW5nUHJvcHMsXG5cdFx0XHQuLi50aGlzLmRpcnR5UHJvcHNcblx0XHR9O1xuXHRcdHRoaXMucGVuZGluZ1Byb3BzID0ge307XG5cdH1cblx0c3RvcmVOZXdQcm9wc0Zyb21QYXJlbnQocHJvcHMpIHtcblx0XHRsZXQgY2hhbmdlZCA9IGZhbHNlO1xuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHByb3BzKSkgaWYgKHRoaXMuZ2V0KGtleSkgIT09IHZhbHVlKSBjaGFuZ2VkID0gdHJ1ZTtcblx0XHRpZiAoY2hhbmdlZCkgdGhpcy51cGRhdGVkUHJvcHNGcm9tUGFyZW50ID0gcHJvcHM7XG5cdFx0cmV0dXJuIGNoYW5nZWQ7XG5cdH1cbn07XG52YXIgQ29tcG9uZW50ID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3RvcihlbGVtZW50LCBuYW1lLCBwcm9wcywgbGlzdGVuZXJzLCBpZCwgYmFja2VuZCwgZWxlbWVudERyaXZlcikge1xuXHRcdHRoaXMuZmluZ2VycHJpbnQgPSBcIlwiO1xuXHRcdHRoaXMuZGVmYXVsdERlYm91bmNlID0gMTUwO1xuXHRcdHRoaXMuYmFja2VuZFJlcXVlc3QgPSBudWxsO1xuXHRcdHRoaXMucGVuZGluZ0FjdGlvbnMgPSBbXTtcblx0XHR0aGlzLnBlbmRpbmdGaWxlcyA9IHt9O1xuXHRcdHRoaXMuaXNSZXF1ZXN0UGVuZGluZyA9IGZhbHNlO1xuXHRcdHRoaXMucmVxdWVzdERlYm91bmNlVGltZW91dCA9IG51bGw7XG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuYmFja2VuZCA9IGJhY2tlbmQ7XG5cdFx0dGhpcy5lbGVtZW50RHJpdmVyID0gZWxlbWVudERyaXZlcjtcblx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0dGhpcy5saXN0ZW5lcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRcdGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuXHRcdFx0aWYgKCF0aGlzLmxpc3RlbmVycy5oYXMobGlzdGVuZXIuZXZlbnQpKSB0aGlzLmxpc3RlbmVycy5zZXQobGlzdGVuZXIuZXZlbnQsIFtdKTtcblx0XHRcdHRoaXMubGlzdGVuZXJzLmdldChsaXN0ZW5lci5ldmVudCk/LnB1c2gobGlzdGVuZXIuYWN0aW9uKTtcblx0XHR9KTtcblx0XHR0aGlzLnZhbHVlU3RvcmUgPSBuZXcgVmFsdWVTdG9yZV9kZWZhdWx0KHByb3BzKTtcblx0XHR0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlciA9IG5ldyBVbnN5bmNlZElucHV0c1RyYWNrZXJfZGVmYXVsdCh0aGlzLCBlbGVtZW50RHJpdmVyKTtcblx0XHR0aGlzLmhvb2tzID0gbmV3IEhvb2tNYW5hZ2VyX2RlZmF1bHQoKTtcblx0XHR0aGlzLnJlc2V0UHJvbWlzZSgpO1xuXHRcdHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIgPSBuZXcgRXh0ZXJuYWxNdXRhdGlvblRyYWNrZXJfZGVmYXVsdCh0aGlzLmVsZW1lbnQsIChlbGVtZW50KSA9PiBlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCB0aGlzKSk7XG5cdFx0dGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlci5zdGFydCgpO1xuXHR9XG5cdGFkZFBsdWdpbihwbHVnaW4pIHtcblx0XHRwbHVnaW4uYXR0YWNoVG9Db21wb25lbnQodGhpcyk7XG5cdH1cblx0Y29ubmVjdCgpIHtcblx0XHRyZWdpc3RlckNvbXBvbmVudCh0aGlzKTtcblx0XHR0aGlzLmhvb2tzLnRyaWdnZXJIb29rKFwiY29ubmVjdFwiLCB0aGlzKTtcblx0XHR0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5hY3RpdmF0ZSgpO1xuXHRcdHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuc3RhcnQoKTtcblx0fVxuXHRkaXNjb25uZWN0KCkge1xuXHRcdHVucmVnaXN0ZXJDb21wb25lbnQodGhpcyk7XG5cdFx0dGhpcy5ob29rcy50cmlnZ2VySG9vayhcImRpc2Nvbm5lY3RcIiwgdGhpcyk7XG5cdFx0dGhpcy5jbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQoKTtcblx0XHR0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5kZWFjdGl2YXRlKCk7XG5cdFx0dGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlci5zdG9wKCk7XG5cdH1cblx0b24oaG9va05hbWUsIGNhbGxiYWNrKSB7XG5cdFx0dGhpcy5ob29rcy5yZWdpc3Rlcihob29rTmFtZSwgY2FsbGJhY2spO1xuXHR9XG5cdG9mZihob29rTmFtZSwgY2FsbGJhY2spIHtcblx0XHR0aGlzLmhvb2tzLnVucmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKTtcblx0fVxuXHRzZXQobW9kZWwsIHZhbHVlLCByZVJlbmRlciA9IGZhbHNlLCBkZWJvdW5jZSA9IGZhbHNlKSB7XG5cdFx0Y29uc3QgcHJvbWlzZSA9IHRoaXMubmV4dFJlcXVlc3RQcm9taXNlO1xuXHRcdGNvbnN0IG1vZGVsTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShtb2RlbCk7XG5cdFx0aWYgKCF0aGlzLnZhbHVlU3RvcmUuaGFzKG1vZGVsTmFtZSkpIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBtb2RlbCBuYW1lIFwiJHttb2RlbH1cIi5gKTtcblx0XHRjb25zdCBpc0NoYW5nZWQgPSB0aGlzLnZhbHVlU3RvcmUuc2V0KG1vZGVsTmFtZSwgdmFsdWUpO1xuXHRcdHRoaXMuaG9va3MudHJpZ2dlckhvb2soXCJtb2RlbDpzZXRcIiwgbW9kZWwsIHZhbHVlLCB0aGlzKTtcblx0XHR0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5tYXJrTW9kZWxBc1N5bmNlZChtb2RlbE5hbWUpO1xuXHRcdGlmIChyZVJlbmRlciAmJiBpc0NoYW5nZWQpIHRoaXMuZGVib3VuY2VkU3RhcnRSZXF1ZXN0KGRlYm91bmNlKTtcblx0XHRyZXR1cm4gcHJvbWlzZTtcblx0fVxuXHRnZXREYXRhKG1vZGVsKSB7XG5cdFx0Y29uc3QgbW9kZWxOYW1lID0gbm9ybWFsaXplTW9kZWxOYW1lKG1vZGVsKTtcblx0XHRpZiAoIXRoaXMudmFsdWVTdG9yZS5oYXMobW9kZWxOYW1lKSkgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIG1vZGVsIFwiJHttb2RlbH1cIi5gKTtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZVN0b3JlLmdldChtb2RlbE5hbWUpO1xuXHR9XG5cdGFjdGlvbihuYW1lLCBhcmdzID0ge30sIGRlYm91bmNlID0gZmFsc2UpIHtcblx0XHRjb25zdCBwcm9taXNlID0gdGhpcy5uZXh0UmVxdWVzdFByb21pc2U7XG5cdFx0dGhpcy5wZW5kaW5nQWN0aW9ucy5wdXNoKHtcblx0XHRcdG5hbWUsXG5cdFx0XHRhcmdzXG5cdFx0fSk7XG5cdFx0dGhpcy5kZWJvdW5jZWRTdGFydFJlcXVlc3QoZGVib3VuY2UpO1xuXHRcdHJldHVybiBwcm9taXNlO1xuXHR9XG5cdGZpbGVzKGtleSwgaW5wdXQpIHtcblx0XHR0aGlzLnBlbmRpbmdGaWxlc1trZXldID0gaW5wdXQ7XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHByb21pc2UgPSB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZTtcblx0XHR0aGlzLnRyeVN0YXJ0aW5nUmVxdWVzdCgpO1xuXHRcdHJldHVybiBwcm9taXNlO1xuXHR9XG5cdGdldFVuc3luY2VkTW9kZWxzKCkge1xuXHRcdHJldHVybiB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5nZXRVbnN5bmNlZE1vZGVscygpO1xuXHR9XG5cdGVtaXQobmFtZSwgZGF0YSwgb25seU1hdGNoaW5nQ29tcG9uZW50c05hbWVkID0gbnVsbCkge1xuXHRcdHRoaXMucGVyZm9ybUVtaXQobmFtZSwgZGF0YSwgZmFsc2UsIG9ubHlNYXRjaGluZ0NvbXBvbmVudHNOYW1lZCk7XG5cdH1cblx0ZW1pdFVwKG5hbWUsIGRhdGEsIG9ubHlNYXRjaGluZ0NvbXBvbmVudHNOYW1lZCA9IG51bGwpIHtcblx0XHR0aGlzLnBlcmZvcm1FbWl0KG5hbWUsIGRhdGEsIHRydWUsIG9ubHlNYXRjaGluZ0NvbXBvbmVudHNOYW1lZCk7XG5cdH1cblx0ZW1pdFNlbGYobmFtZSwgZGF0YSkge1xuXHRcdHRoaXMuZG9FbWl0KG5hbWUsIGRhdGEpO1xuXHR9XG5cdHBlcmZvcm1FbWl0KG5hbWUsIGRhdGEsIGVtaXRVcCwgbWF0Y2hpbmdOYW1lKSB7XG5cdFx0ZmluZENvbXBvbmVudHModGhpcywgZW1pdFVwLCBtYXRjaGluZ05hbWUpLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xuXHRcdFx0Y29tcG9uZW50LmRvRW1pdChuYW1lLCBkYXRhKTtcblx0XHR9KTtcblx0fVxuXHRkb0VtaXQobmFtZSwgZGF0YSkge1xuXHRcdGlmICghdGhpcy5saXN0ZW5lcnMuaGFzKG5hbWUpKSByZXR1cm47XG5cdFx0KHRoaXMubGlzdGVuZXJzLmdldChuYW1lKSB8fCBbXSkuZm9yRWFjaCgoYWN0aW9uKSA9PiB7XG5cdFx0XHR0aGlzLmFjdGlvbihhY3Rpb24sIGRhdGEsIDEpO1xuXHRcdH0pO1xuXHR9XG5cdGlzVHVyYm9FbmFibGVkKCkge1xuXHRcdHJldHVybiB0eXBlb2YgVHVyYm8gIT09IFwidW5kZWZpbmVkXCIgJiYgIXRoaXMuZWxlbWVudC5jbG9zZXN0KFwiW2RhdGEtdHVyYm89XFxcImZhbHNlXFxcIl1cIik7XG5cdH1cblx0dHJ5U3RhcnRpbmdSZXF1ZXN0KCkge1xuXHRcdGlmICghdGhpcy5iYWNrZW5kUmVxdWVzdCkge1xuXHRcdFx0dGhpcy5wZXJmb3JtUmVxdWVzdCgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLmlzUmVxdWVzdFBlbmRpbmcgPSB0cnVlO1xuXHR9XG5cdHBlcmZvcm1SZXF1ZXN0KCkge1xuXHRcdGNvbnN0IHRoaXNQcm9taXNlUmVzb2x2ZSA9IHRoaXMubmV4dFJlcXVlc3RQcm9taXNlUmVzb2x2ZTtcblx0XHR0aGlzLnJlc2V0UHJvbWlzZSgpO1xuXHRcdHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLnJlc2V0VW5zeW5jZWRGaWVsZHMoKTtcblx0XHRjb25zdCBmaWxlc1RvU2VuZCA9IHt9O1xuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMucGVuZGluZ0ZpbGVzKSkgaWYgKHZhbHVlLmZpbGVzKSBmaWxlc1RvU2VuZFtrZXldID0gdmFsdWUuZmlsZXM7XG5cdFx0Y29uc3QgcmVxdWVzdENvbmZpZyA9IHtcblx0XHRcdHByb3BzOiB0aGlzLnZhbHVlU3RvcmUuZ2V0T3JpZ2luYWxQcm9wcygpLFxuXHRcdFx0YWN0aW9uczogdGhpcy5wZW5kaW5nQWN0aW9ucyxcblx0XHRcdHVwZGF0ZWQ6IHRoaXMudmFsdWVTdG9yZS5nZXREaXJ0eVByb3BzKCksXG5cdFx0XHRjaGlsZHJlbjoge30sXG5cdFx0XHR1cGRhdGVkUHJvcHNGcm9tUGFyZW50OiB0aGlzLnZhbHVlU3RvcmUuZ2V0VXBkYXRlZFByb3BzRnJvbVBhcmVudCgpLFxuXHRcdFx0ZmlsZXM6IGZpbGVzVG9TZW5kXG5cdFx0fTtcblx0XHR0aGlzLmhvb2tzLnRyaWdnZXJIb29rKFwicmVxdWVzdDpzdGFydGVkXCIsIHJlcXVlc3RDb25maWcpO1xuXHRcdHRoaXMuYmFja2VuZFJlcXVlc3QgPSB0aGlzLmJhY2tlbmQubWFrZVJlcXVlc3QocmVxdWVzdENvbmZpZy5wcm9wcywgcmVxdWVzdENvbmZpZy5hY3Rpb25zLCByZXF1ZXN0Q29uZmlnLnVwZGF0ZWQsIHJlcXVlc3RDb25maWcuY2hpbGRyZW4sIHJlcXVlc3RDb25maWcudXBkYXRlZFByb3BzRnJvbVBhcmVudCwgcmVxdWVzdENvbmZpZy5maWxlcyk7XG5cdFx0dGhpcy5ob29rcy50cmlnZ2VySG9vayhcImxvYWRpbmcuc3RhdGU6c3RhcnRlZFwiLCB0aGlzLmVsZW1lbnQsIHRoaXMuYmFja2VuZFJlcXVlc3QpO1xuXHRcdHRoaXMucGVuZGluZ0FjdGlvbnMgPSBbXTtcblx0XHR0aGlzLnZhbHVlU3RvcmUuZmx1c2hEaXJ0eVByb3BzVG9QZW5kaW5nKCk7XG5cdFx0dGhpcy5pc1JlcXVlc3RQZW5kaW5nID0gZmFsc2U7XG5cdFx0dGhpcy5iYWNrZW5kUmVxdWVzdC5wcm9taXNlLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRjb25zdCBiYWNrZW5kUmVzcG9uc2UgPSBuZXcgQmFja2VuZFJlc3BvbnNlX2RlZmF1bHQocmVzcG9uc2UpO1xuXHRcdFx0Y29uc3QgaHRtbCA9IGF3YWl0IGJhY2tlbmRSZXNwb25zZS5nZXRCb2R5KCk7XG5cdFx0XHRmb3IgKGNvbnN0IGlucHV0IG9mIE9iamVjdC52YWx1ZXModGhpcy5wZW5kaW5nRmlsZXMpKSBpbnB1dC52YWx1ZSA9IFwiXCI7XG5cdFx0XHRjb25zdCBoZWFkZXJzID0gYmFja2VuZFJlc3BvbnNlLnJlc3BvbnNlLmhlYWRlcnM7XG5cdFx0XHRpZiAoIWhlYWRlcnMuZ2V0KFwiQ29udGVudC1UeXBlXCIpPy5pbmNsdWRlcyhcImFwcGxpY2F0aW9uL3ZuZC5saXZlLWNvbXBvbmVudCtodG1sXCIpICYmICFoZWFkZXJzLmdldChcIlgtTGl2ZS1SZWRpcmVjdFwiKSkge1xuXHRcdFx0XHRjb25zdCBjb250cm9scyA9IHsgZGlzcGxheUVycm9yOiB0cnVlIH07XG5cdFx0XHRcdHRoaXMudmFsdWVTdG9yZS5wdXNoUGVuZGluZ1Byb3BzQmFja1RvRGlydHkoKTtcblx0XHRcdFx0dGhpcy5ob29rcy50cmlnZ2VySG9vayhcInJlc3BvbnNlOmVycm9yXCIsIGJhY2tlbmRSZXNwb25zZSwgY29udHJvbHMpO1xuXHRcdFx0XHRpZiAoY29udHJvbHMuZGlzcGxheUVycm9yKSB0aGlzLnJlbmRlckVycm9yKGh0bWwpO1xuXHRcdFx0XHR0aGlzLmJhY2tlbmRSZXF1ZXN0ID0gbnVsbDtcblx0XHRcdFx0dGhpc1Byb21pc2VSZXNvbHZlKGJhY2tlbmRSZXNwb25zZSk7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGxpdmVVcmwgPSBiYWNrZW5kUmVzcG9uc2UuZ2V0TGl2ZVVybCgpO1xuXHRcdFx0aWYgKGxpdmVVcmwpIGhpc3RvcnkucmVwbGFjZVN0YXRlKGhpc3Rvcnkuc3RhdGUsIFwiXCIsIG5ldyBVUkwobGl2ZVVybCArIHdpbmRvdy5sb2NhdGlvbi5oYXNoLCB3aW5kb3cubG9jYXRpb24ub3JpZ2luKSk7XG5cdFx0XHR0aGlzLnByb2Nlc3NSZXJlbmRlcihodG1sLCBiYWNrZW5kUmVzcG9uc2UpO1xuXHRcdFx0dGhpcy5iYWNrZW5kUmVxdWVzdCA9IG51bGw7XG5cdFx0XHR0aGlzUHJvbWlzZVJlc29sdmUoYmFja2VuZFJlc3BvbnNlKTtcblx0XHRcdGlmICh0aGlzLmlzUmVxdWVzdFBlbmRpbmcpIHtcblx0XHRcdFx0dGhpcy5pc1JlcXVlc3RQZW5kaW5nID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMucGVyZm9ybVJlcXVlc3QoKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXNwb25zZTtcblx0XHR9KTtcblx0fVxuXHRwcm9jZXNzUmVyZW5kZXIoaHRtbCwgYmFja2VuZFJlc3BvbnNlKSB7XG5cdFx0Y29uc3QgY29udHJvbHMgPSB7IHNob3VsZFJlbmRlcjogdHJ1ZSB9O1xuXHRcdHRoaXMuaG9va3MudHJpZ2dlckhvb2soXCJyZW5kZXI6c3RhcnRlZFwiLCBodG1sLCBiYWNrZW5kUmVzcG9uc2UsIGNvbnRyb2xzKTtcblx0XHRpZiAoIWNvbnRyb2xzLnNob3VsZFJlbmRlcikgcmV0dXJuO1xuXHRcdGlmIChiYWNrZW5kUmVzcG9uc2UucmVzcG9uc2UuaGVhZGVycy5nZXQoXCJMb2NhdGlvblwiKSkge1xuXHRcdFx0aWYgKHRoaXMuaXNUdXJib0VuYWJsZWQoKSkgVHVyYm8udmlzaXQoYmFja2VuZFJlc3BvbnNlLnJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiTG9jYXRpb25cIikpO1xuXHRcdFx0ZWxzZSB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzLmdldChcIkxvY2F0aW9uXCIpIHx8IFwiXCI7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuaG9va3MudHJpZ2dlckhvb2soXCJsb2FkaW5nLnN0YXRlOmZpbmlzaGVkXCIsIHRoaXMuZWxlbWVudCk7XG5cdFx0Y29uc3QgbW9kaWZpZWRNb2RlbFZhbHVlcyA9IHt9O1xuXHRcdE9iamVjdC5rZXlzKHRoaXMudmFsdWVTdG9yZS5nZXREaXJ0eVByb3BzKCkpLmZvckVhY2goKG1vZGVsTmFtZSkgPT4ge1xuXHRcdFx0bW9kaWZpZWRNb2RlbFZhbHVlc1ttb2RlbE5hbWVdID0gdGhpcy52YWx1ZVN0b3JlLmdldChtb2RlbE5hbWUpO1xuXHRcdH0pO1xuXHRcdGxldCBuZXdFbGVtZW50O1xuXHRcdHRyeSB7XG5cdFx0XHRuZXdFbGVtZW50ID0gaHRtbFRvRWxlbWVudChodG1sKTtcblx0XHRcdGlmICghbmV3RWxlbWVudC5tYXRjaGVzKFwiW2RhdGEtY29udHJvbGxlcn49bGl2ZV1cIikpIHRocm93IG5ldyBFcnJvcihcIkEgbGl2ZSBjb21wb25lbnQgdGVtcGxhdGUgbXVzdCBjb250YWluIGEgc2luZ2xlIHJvb3QgY29udHJvbGxlciBlbGVtZW50LlwiKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcihgVGhlcmUgd2FzIGEgcHJvYmxlbSB3aXRoIHRoZSAnJHt0aGlzLm5hbWV9JyBjb21wb25lbnQgSFRNTCByZXR1cm5lZDpgLCB7IGlkOiB0aGlzLmlkIH0pO1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fVxuXHRcdHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuaGFuZGxlUGVuZGluZ0NoYW5nZXMoKTtcblx0XHR0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0b3AoKTtcblx0XHRleGVjdXRlTW9ycGhkb20odGhpcy5lbGVtZW50LCBuZXdFbGVtZW50LCB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5nZXRVbnN5bmNlZElucHV0cygpLCAoZWxlbWVudCkgPT4gZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCB0aGlzLnZhbHVlU3RvcmUpLCB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyKTtcblx0XHR0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0YXJ0KCk7XG5cdFx0Y29uc3QgbmV3UHJvcHMgPSB0aGlzLmVsZW1lbnREcml2ZXIuZ2V0Q29tcG9uZW50UHJvcHMoKTtcblx0XHR0aGlzLnZhbHVlU3RvcmUucmVpbml0aWFsaXplQWxsUHJvcHMobmV3UHJvcHMpO1xuXHRcdGNvbnN0IGV2ZW50c1RvRW1pdCA9IHRoaXMuZWxlbWVudERyaXZlci5nZXRFdmVudHNUb0VtaXQoKTtcblx0XHRjb25zdCBicm93c2VyRXZlbnRzVG9EaXNwYXRjaCA9IHRoaXMuZWxlbWVudERyaXZlci5nZXRCcm93c2VyRXZlbnRzVG9EaXNwYXRjaCgpO1xuXHRcdE9iamVjdC5rZXlzKG1vZGlmaWVkTW9kZWxWYWx1ZXMpLmZvckVhY2goKG1vZGVsTmFtZSkgPT4ge1xuXHRcdFx0dGhpcy52YWx1ZVN0b3JlLnNldChtb2RlbE5hbWUsIG1vZGlmaWVkTW9kZWxWYWx1ZXNbbW9kZWxOYW1lXSk7XG5cdFx0fSk7XG5cdFx0ZXZlbnRzVG9FbWl0LmZvckVhY2goKHsgZXZlbnQsIGRhdGEsIHRhcmdldCwgY29tcG9uZW50TmFtZSB9KSA9PiB7XG5cdFx0XHRpZiAodGFyZ2V0ID09PSBcInVwXCIpIHtcblx0XHRcdFx0dGhpcy5lbWl0VXAoZXZlbnQsIGRhdGEsIGNvbXBvbmVudE5hbWUpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAodGFyZ2V0ID09PSBcInNlbGZcIikge1xuXHRcdFx0XHR0aGlzLmVtaXRTZWxmKGV2ZW50LCBkYXRhKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5lbWl0KGV2ZW50LCBkYXRhLCBjb21wb25lbnROYW1lKTtcblx0XHR9KTtcblx0XHRicm93c2VyRXZlbnRzVG9EaXNwYXRjaC5mb3JFYWNoKCh7IGV2ZW50LCBwYXlsb2FkIH0pID0+IHtcblx0XHRcdHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChldmVudCwge1xuXHRcdFx0XHRkZXRhaWw6IHBheWxvYWQsXG5cdFx0XHRcdGJ1YmJsZXM6IHRydWVcblx0XHRcdH0pKTtcblx0XHR9KTtcblx0XHR0aGlzLmhvb2tzLnRyaWdnZXJIb29rKFwicmVuZGVyOmZpbmlzaGVkXCIsIHRoaXMpO1xuXHR9XG5cdGNhbGN1bGF0ZURlYm91bmNlKGRlYm91bmNlKSB7XG5cdFx0aWYgKGRlYm91bmNlID09PSB0cnVlKSByZXR1cm4gdGhpcy5kZWZhdWx0RGVib3VuY2U7XG5cdFx0aWYgKGRlYm91bmNlID09PSBmYWxzZSkgcmV0dXJuIDA7XG5cdFx0cmV0dXJuIGRlYm91bmNlO1xuXHR9XG5cdGNsZWFyUmVxdWVzdERlYm91bmNlVGltZW91dCgpIHtcblx0XHRpZiAodGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0KSB7XG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0KTtcblx0XHRcdHRoaXMucmVxdWVzdERlYm91bmNlVGltZW91dCA9IG51bGw7XG5cdFx0fVxuXHR9XG5cdGRlYm91bmNlZFN0YXJ0UmVxdWVzdChkZWJvdW5jZSkge1xuXHRcdHRoaXMuY2xlYXJSZXF1ZXN0RGVib3VuY2VUaW1lb3V0KCk7XG5cdFx0dGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy5yZW5kZXIoKTtcblx0XHR9LCB0aGlzLmNhbGN1bGF0ZURlYm91bmNlKGRlYm91bmNlKSk7XG5cdH1cblx0cmVuZGVyRXJyb3IoaHRtbCkge1xuXHRcdGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGl2ZS1jb21wb25lbnQtZXJyb3JcIik7XG5cdFx0aWYgKG1vZGFsKSBtb2RhbC5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdGVsc2Uge1xuXHRcdFx0bW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0bW9kYWwuaWQgPSBcImxpdmUtY29tcG9uZW50LWVycm9yXCI7XG5cdFx0XHRtb2RhbC5zdHlsZS5wYWRkaW5nID0gXCI1MHB4XCI7XG5cdFx0XHRtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMCwgMCwgLjUpXCI7XG5cdFx0XHRtb2RhbC5zdHlsZS56SW5kZXggPSBcIjEwMDAwMFwiO1xuXHRcdFx0bW9kYWwuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG5cdFx0XHRtb2RhbC5zdHlsZS50b3AgPSBcIjBweFwiO1xuXHRcdFx0bW9kYWwuc3R5bGUuYm90dG9tID0gXCIwcHhcIjtcblx0XHRcdG1vZGFsLnN0eWxlLmxlZnQgPSBcIjBweFwiO1xuXHRcdFx0bW9kYWwuc3R5bGUucmlnaHQgPSBcIjBweFwiO1xuXHRcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXHRcdFx0bW9kYWwuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XG5cdFx0fVxuXHRcdGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG5cdFx0aWZyYW1lLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNXB4XCI7XG5cdFx0aWZyYW1lLnN0eWxlLmZsZXhHcm93ID0gXCIxXCI7XG5cdFx0bW9kYWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcblx0XHRkb2N1bWVudC5ib2R5LnByZXBlbmQobW9kYWwpO1xuXHRcdGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuXHRcdGlmIChpZnJhbWUuY29udGVudFdpbmRvdykge1xuXHRcdFx0aWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQub3BlbigpO1xuXHRcdFx0aWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQud3JpdGUoaHRtbCk7XG5cdFx0XHRpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5jbG9zZSgpO1xuXHRcdH1cblx0XHRjb25zdCBjbG9zZU1vZGFsID0gKG1vZGFsKSA9PiB7XG5cdFx0XHRpZiAobW9kYWwpIG1vZGFsLm91dGVySFRNTCA9IFwiXCI7XG5cdFx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJ2aXNpYmxlXCI7XG5cdFx0fTtcblx0XHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2xvc2VNb2RhbChtb2RhbCkpO1xuXHRcdG1vZGFsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcblx0XHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuXHRcdFx0aWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSBjbG9zZU1vZGFsKG1vZGFsKTtcblx0XHR9KTtcblx0XHRtb2RhbC5mb2N1cygpO1xuXHR9XG5cdHJlc2V0UHJvbWlzZSgpIHtcblx0XHR0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0XHR0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZVJlc29sdmUgPSByZXNvbHZlO1xuXHRcdH0pO1xuXHR9XG5cdF91cGRhdGVGcm9tUGFyZW50UHJvcHMocHJvcHMpIHtcblx0XHRpZiAodGhpcy52YWx1ZVN0b3JlLnN0b3JlTmV3UHJvcHNGcm9tUGFyZW50KHByb3BzKSkgdGhpcy5yZW5kZXIoKTtcblx0fVxufTtcbmZ1bmN0aW9uIHByb3hpZnlDb21wb25lbnQoY29tcG9uZW50KSB7XG5cdHJldHVybiBuZXcgUHJveHkoY29tcG9uZW50LCB7XG5cdFx0Z2V0KGNvbXBvbmVudCwgcHJvcCkge1xuXHRcdFx0aWYgKHByb3AgaW4gY29tcG9uZW50IHx8IHR5cGVvZiBwcm9wICE9PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdGlmICh0eXBlb2YgY29tcG9uZW50W3Byb3BdID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRjb25zdCBjYWxsYWJsZSA9IGNvbXBvbmVudFtwcm9wXTtcblx0XHRcdFx0XHRyZXR1cm4gKC4uLmFyZ3MpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBjYWxsYWJsZS5hcHBseShjb21wb25lbnQsIGFyZ3MpO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIFJlZmxlY3QuZ2V0KGNvbXBvbmVudCwgcHJvcCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY29tcG9uZW50LnZhbHVlU3RvcmUuaGFzKHByb3ApKSByZXR1cm4gY29tcG9uZW50LmdldERhdGEocHJvcCk7XG5cdFx0XHRyZXR1cm4gKGFyZ3MpID0+IHtcblx0XHRcdFx0cmV0dXJuIGNvbXBvbmVudC5hY3Rpb24uYXBwbHkoY29tcG9uZW50LCBbcHJvcCwgYXJnc10pO1xuXHRcdFx0fTtcblx0XHR9LFxuXHRcdHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuXHRcdFx0aWYgKHByb3BlcnR5IGluIHRhcmdldCkge1xuXHRcdFx0XHR0YXJnZXRbcHJvcGVydHldID0gdmFsdWU7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0dGFyZ2V0LnNldChwcm9wZXJ0eSwgdmFsdWUpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9KTtcbn1cbnZhciBTdGltdWx1c0VsZW1lbnREcml2ZXIgPSBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKGNvbnRyb2xsZXIpIHtcblx0XHR0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuXHR9XG5cdGdldE1vZGVsTmFtZShlbGVtZW50KSB7XG5cdFx0Y29uc3QgbW9kZWxEaXJlY3RpdmUgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIGZhbHNlKTtcblx0XHRpZiAoIW1vZGVsRGlyZWN0aXZlKSByZXR1cm4gbnVsbDtcblx0XHRyZXR1cm4gbW9kZWxEaXJlY3RpdmUuYWN0aW9uO1xuXHR9XG5cdGdldENvbXBvbmVudFByb3BzKCkge1xuXHRcdHJldHVybiB0aGlzLmNvbnRyb2xsZXIucHJvcHNWYWx1ZTtcblx0fVxuXHRnZXRFdmVudHNUb0VtaXQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29udHJvbGxlci5ldmVudHNUb0VtaXRWYWx1ZTtcblx0fVxuXHRnZXRCcm93c2VyRXZlbnRzVG9EaXNwYXRjaCgpIHtcblx0XHRyZXR1cm4gdGhpcy5jb250cm9sbGVyLmV2ZW50c1RvRGlzcGF0Y2hWYWx1ZTtcblx0fVxufTtcbmZ1bmN0aW9uIGdldF9tb2RlbF9iaW5kaW5nX2RlZmF1bHQobW9kZWxEaXJlY3RpdmUpIHtcblx0bGV0IHNob3VsZFJlbmRlciA9IHRydWU7XG5cdGxldCB0YXJnZXRFdmVudE5hbWUgPSBudWxsO1xuXHRsZXQgZGVib3VuY2UgPSBmYWxzZTtcblx0bGV0IG1pbkxlbmd0aCA9IG51bGw7XG5cdGxldCBtYXhMZW5ndGggPSBudWxsO1xuXHRsZXQgbWluVmFsdWUgPSBudWxsO1xuXHRsZXQgbWF4VmFsdWUgPSBudWxsO1xuXHRtb2RlbERpcmVjdGl2ZS5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcblx0XHRzd2l0Y2ggKG1vZGlmaWVyLm5hbWUpIHtcblx0XHRcdGNhc2UgXCJvblwiOlxuXHRcdFx0XHRpZiAoIW1vZGlmaWVyLnZhbHVlKSB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcIm9uXCIgbW9kaWZpZXIgaW4gJHttb2RlbERpcmVjdGl2ZS5nZXRTdHJpbmcoKX0gcmVxdWlyZXMgYSB2YWx1ZSAtIGUuZy4gb24oY2hhbmdlKS5gKTtcblx0XHRcdFx0aWYgKCFbXCJpbnB1dFwiLCBcImNoYW5nZVwiXS5pbmNsdWRlcyhtb2RpZmllci52YWx1ZSkpIHRocm93IG5ldyBFcnJvcihgVGhlIFwib25cIiBtb2RpZmllciBpbiAke21vZGVsRGlyZWN0aXZlLmdldFN0cmluZygpfSBvbmx5IGFjY2VwdHMgdGhlIGFyZ3VtZW50cyBcImlucHV0XCIgb3IgXCJjaGFuZ2VcIi5gKTtcblx0XHRcdFx0dGFyZ2V0RXZlbnROYW1lID0gbW9kaWZpZXIudmFsdWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcIm5vcmVuZGVyXCI6XG5cdFx0XHRcdHNob3VsZFJlbmRlciA9IGZhbHNlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJkZWJvdW5jZVwiOlxuXHRcdFx0XHRkZWJvdW5jZSA9IG1vZGlmaWVyLnZhbHVlID8gTnVtYmVyLnBhcnNlSW50KG1vZGlmaWVyLnZhbHVlKSA6IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcIm1pbl9sZW5ndGhcIjpcblx0XHRcdFx0bWluTGVuZ3RoID0gbW9kaWZpZXIudmFsdWUgPyBOdW1iZXIucGFyc2VJbnQobW9kaWZpZXIudmFsdWUpIDogbnVsbDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwibWF4X2xlbmd0aFwiOlxuXHRcdFx0XHRtYXhMZW5ndGggPSBtb2RpZmllci52YWx1ZSA/IE51bWJlci5wYXJzZUludChtb2RpZmllci52YWx1ZSkgOiBudWxsO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJtaW5fdmFsdWVcIjpcblx0XHRcdFx0bWluVmFsdWUgPSBtb2RpZmllci52YWx1ZSA/IE51bWJlci5wYXJzZUZsb2F0KG1vZGlmaWVyLnZhbHVlKSA6IG51bGw7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcIm1heF92YWx1ZVwiOlxuXHRcdFx0XHRtYXhWYWx1ZSA9IG1vZGlmaWVyLnZhbHVlID8gTnVtYmVyLnBhcnNlRmxvYXQobW9kaWZpZXIudmFsdWUpIDogbnVsbDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OiB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbW9kaWZpZXIgXCIke21vZGlmaWVyLm5hbWV9XCIgaW4gZGF0YS1tb2RlbD1cIiR7bW9kZWxEaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCIuYCk7XG5cdFx0fVxuXHR9KTtcblx0Y29uc3QgW21vZGVsTmFtZSwgaW5uZXJNb2RlbE5hbWVdID0gbW9kZWxEaXJlY3RpdmUuYWN0aW9uLnNwbGl0KFwiOlwiKTtcblx0cmV0dXJuIHtcblx0XHRtb2RlbE5hbWUsXG5cdFx0aW5uZXJNb2RlbE5hbWU6IGlubmVyTW9kZWxOYW1lIHx8IG51bGwsXG5cdFx0c2hvdWxkUmVuZGVyLFxuXHRcdGRlYm91bmNlLFxuXHRcdHRhcmdldEV2ZW50TmFtZSxcblx0XHRtaW5MZW5ndGgsXG5cdFx0bWF4TGVuZ3RoLFxuXHRcdG1pblZhbHVlLFxuXHRcdG1heFZhbHVlXG5cdH07XG59XG52YXIgQ2hpbGRDb21wb25lbnRQbHVnaW5fZGVmYXVsdCA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoY29tcG9uZW50KSB7XG5cdFx0dGhpcy5wYXJlbnRNb2RlbEJpbmRpbmdzID0gW107XG5cdFx0dGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG5cdFx0dGhpcy5wYXJlbnRNb2RlbEJpbmRpbmdzID0gZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHModGhpcy5jb21wb25lbnQuZWxlbWVudCkubWFwKGdldF9tb2RlbF9iaW5kaW5nX2RlZmF1bHQpO1xuXHR9XG5cdGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuXHRcdGNvbXBvbmVudC5vbihcInJlcXVlc3Q6c3RhcnRlZFwiLCAocmVxdWVzdERhdGEpID0+IHtcblx0XHRcdHJlcXVlc3REYXRhLmNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbkZpbmdlcnByaW50cygpO1xuXHRcdH0pO1xuXHRcdGNvbXBvbmVudC5vbihcIm1vZGVsOnNldFwiLCAobW9kZWwsIHZhbHVlKSA9PiB7XG5cdFx0XHR0aGlzLm5vdGlmeVBhcmVudE1vZGVsQ2hhbmdlKG1vZGVsLCB2YWx1ZSk7XG5cdFx0fSk7XG5cdH1cblx0Z2V0Q2hpbGRyZW5GaW5nZXJwcmludHMoKSB7XG5cdFx0Y29uc3QgZmluZ2VycHJpbnRzID0ge307XG5cdFx0dGhpcy5nZXRDaGlsZHJlbigpLmZvckVhY2goKGNoaWxkKSA9PiB7XG5cdFx0XHRpZiAoIWNoaWxkLmlkKSB0aHJvdyBuZXcgRXJyb3IoXCJtaXNzaW5nIGlkXCIpO1xuXHRcdFx0ZmluZ2VycHJpbnRzW2NoaWxkLmlkXSA9IHtcblx0XHRcdFx0ZmluZ2VycHJpbnQ6IGNoaWxkLmZpbmdlcnByaW50LFxuXHRcdFx0XHR0YWc6IGNoaWxkLmVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpXG5cdFx0XHR9O1xuXHRcdH0pO1xuXHRcdHJldHVybiBmaW5nZXJwcmludHM7XG5cdH1cblx0bm90aWZ5UGFyZW50TW9kZWxDaGFuZ2UobW9kZWxOYW1lLCB2YWx1ZSkge1xuXHRcdGNvbnN0IHBhcmVudENvbXBvbmVudCA9IGZpbmRQYXJlbnQodGhpcy5jb21wb25lbnQpO1xuXHRcdGlmICghcGFyZW50Q29tcG9uZW50KSByZXR1cm47XG5cdFx0dGhpcy5wYXJlbnRNb2RlbEJpbmRpbmdzLmZvckVhY2goKG1vZGVsQmluZGluZykgPT4ge1xuXHRcdFx0aWYgKChtb2RlbEJpbmRpbmcuaW5uZXJNb2RlbE5hbWUgfHwgXCJ2YWx1ZVwiKSAhPT0gbW9kZWxOYW1lKSByZXR1cm47XG5cdFx0XHRwYXJlbnRDb21wb25lbnQuc2V0KG1vZGVsQmluZGluZy5tb2RlbE5hbWUsIHZhbHVlLCBtb2RlbEJpbmRpbmcuc2hvdWxkUmVuZGVyLCBtb2RlbEJpbmRpbmcuZGVib3VuY2UpO1xuXHRcdH0pO1xuXHR9XG5cdGdldENoaWxkcmVuKCkge1xuXHRcdHJldHVybiBmaW5kQ2hpbGRyZW4odGhpcy5jb21wb25lbnQpO1xuXHR9XG59O1xudmFyIExhenlQbHVnaW5fZGVmYXVsdCA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlciA9IG51bGw7XG5cdH1cblx0YXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG5cdFx0aWYgKFwibGF6eVwiICE9PSBjb21wb25lbnQuZWxlbWVudC5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbShcImxvYWRpbmdcIik/LnZhbHVlKSByZXR1cm47XG5cdFx0Y29tcG9uZW50Lm9uKFwiY29ubmVjdFwiLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmdldE9ic2VydmVyKCkub2JzZXJ2ZShjb21wb25lbnQuZWxlbWVudCk7XG5cdFx0fSk7XG5cdFx0Y29tcG9uZW50Lm9uKFwiZGlzY29ubmVjdFwiLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyPy51bm9ic2VydmUoY29tcG9uZW50LmVsZW1lbnQpO1xuXHRcdH0pO1xuXHR9XG5cdGdldE9ic2VydmVyKCkge1xuXHRcdGlmICghdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlcikgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcblx0XHRcdGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcblx0XHRcdFx0aWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG5cdFx0XHRcdFx0ZW50cnkudGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwibGl2ZTphcHBlYXJcIikpO1xuXHRcdFx0XHRcdG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRyZXR1cm4gdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlcjtcblx0fVxufTtcbnZhciBMb2FkaW5nUGx1Z2luX2RlZmF1bHQgPSBjbGFzcyB7XG5cdGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuXHRcdGNvbXBvbmVudC5vbihcImxvYWRpbmcuc3RhdGU6c3RhcnRlZFwiLCAoZWxlbWVudCwgcmVxdWVzdCkgPT4ge1xuXHRcdFx0dGhpcy5zdGFydExvYWRpbmcoY29tcG9uZW50LCBlbGVtZW50LCByZXF1ZXN0KTtcblx0XHR9KTtcblx0XHRjb21wb25lbnQub24oXCJsb2FkaW5nLnN0YXRlOmZpbmlzaGVkXCIsIChlbGVtZW50KSA9PiB7XG5cdFx0XHR0aGlzLmZpbmlzaExvYWRpbmcoY29tcG9uZW50LCBlbGVtZW50KTtcblx0XHR9KTtcblx0XHR0aGlzLmZpbmlzaExvYWRpbmcoY29tcG9uZW50LCBjb21wb25lbnQuZWxlbWVudCk7XG5cdH1cblx0c3RhcnRMb2FkaW5nKGNvbXBvbmVudCwgdGFyZ2V0RWxlbWVudCwgYmFja2VuZFJlcXVlc3QpIHtcblx0XHR0aGlzLmhhbmRsZUxvYWRpbmdUb2dnbGUoY29tcG9uZW50LCB0cnVlLCB0YXJnZXRFbGVtZW50LCBiYWNrZW5kUmVxdWVzdCk7XG5cdH1cblx0ZmluaXNoTG9hZGluZyhjb21wb25lbnQsIHRhcmdldEVsZW1lbnQpIHtcblx0XHR0aGlzLmhhbmRsZUxvYWRpbmdUb2dnbGUoY29tcG9uZW50LCBmYWxzZSwgdGFyZ2V0RWxlbWVudCwgbnVsbCk7XG5cdH1cblx0aGFuZGxlTG9hZGluZ1RvZ2dsZShjb21wb25lbnQsIGlzTG9hZGluZywgdGFyZ2V0RWxlbWVudCwgYmFja2VuZFJlcXVlc3QpIHtcblx0XHRpZiAoaXNMb2FkaW5nKSB0aGlzLmFkZEF0dHJpYnV0ZXModGFyZ2V0RWxlbWVudCwgW1wiYnVzeVwiXSk7XG5cdFx0ZWxzZSB0aGlzLnJlbW92ZUF0dHJpYnV0ZXModGFyZ2V0RWxlbWVudCwgW1wiYnVzeVwiXSk7XG5cdFx0dGhpcy5nZXRMb2FkaW5nRGlyZWN0aXZlcyhjb21wb25lbnQsIHRhcmdldEVsZW1lbnQpLmZvckVhY2goKHsgZWxlbWVudCwgZGlyZWN0aXZlcyB9KSA9PiB7XG5cdFx0XHRpZiAoaXNMb2FkaW5nKSB0aGlzLmFkZEF0dHJpYnV0ZXMoZWxlbWVudCwgW1wiZGF0YS1saXZlLWlzLWxvYWRpbmdcIl0pO1xuXHRcdFx0ZWxzZSB0aGlzLnJlbW92ZUF0dHJpYnV0ZXMoZWxlbWVudCwgW1wiZGF0YS1saXZlLWlzLWxvYWRpbmdcIl0pO1xuXHRcdFx0ZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcblx0XHRcdFx0dGhpcy5oYW5kbGVMb2FkaW5nRGlyZWN0aXZlKGVsZW1lbnQsIGlzTG9hZGluZywgZGlyZWN0aXZlLCBiYWNrZW5kUmVxdWVzdCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXHRoYW5kbGVMb2FkaW5nRGlyZWN0aXZlKGVsZW1lbnQsIGlzTG9hZGluZywgZGlyZWN0aXZlLCBiYWNrZW5kUmVxdWVzdCkge1xuXHRcdGNvbnN0IGZpbmFsQWN0aW9uID0gcGFyc2VMb2FkaW5nQWN0aW9uKGRpcmVjdGl2ZS5hY3Rpb24sIGlzTG9hZGluZyk7XG5cdFx0Y29uc3QgdGFyZ2V0ZWRBY3Rpb25zID0gW107XG5cdFx0Y29uc3QgdGFyZ2V0ZWRNb2RlbHMgPSBbXTtcblx0XHRsZXQgZGVsYXkgPSAwO1xuXHRcdGNvbnN0IHZhbGlkTW9kaWZpZXJzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0XHR2YWxpZE1vZGlmaWVycy5zZXQoXCJkZWxheVwiLCAobW9kaWZpZXIpID0+IHtcblx0XHRcdGlmICghaXNMb2FkaW5nKSByZXR1cm47XG5cdFx0XHRkZWxheSA9IG1vZGlmaWVyLnZhbHVlID8gTnVtYmVyLnBhcnNlSW50KG1vZGlmaWVyLnZhbHVlKSA6IDIwMDtcblx0XHR9KTtcblx0XHR2YWxpZE1vZGlmaWVycy5zZXQoXCJhY3Rpb25cIiwgKG1vZGlmaWVyKSA9PiB7XG5cdFx0XHRpZiAoIW1vZGlmaWVyLnZhbHVlKSB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcImFjdGlvblwiIGluIGRhdGEtbG9hZGluZyBtdXN0IGhhdmUgYW4gYWN0aW9uIG5hbWUgLSBlLmcuIGFjdGlvbihmb28pLiBJdCdzIG1pc3NpbmcgZm9yIFwiJHtkaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCJgKTtcblx0XHRcdHRhcmdldGVkQWN0aW9ucy5wdXNoKG1vZGlmaWVyLnZhbHVlKTtcblx0XHR9KTtcblx0XHR2YWxpZE1vZGlmaWVycy5zZXQoXCJtb2RlbFwiLCAobW9kaWZpZXIpID0+IHtcblx0XHRcdGlmICghbW9kaWZpZXIudmFsdWUpIHRocm93IG5ldyBFcnJvcihgVGhlIFwibW9kZWxcIiBpbiBkYXRhLWxvYWRpbmcgbXVzdCBoYXZlIGFuIGFjdGlvbiBuYW1lIC0gZS5nLiBtb2RlbChmb28pLiBJdCdzIG1pc3NpbmcgZm9yIFwiJHtkaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCJgKTtcblx0XHRcdHRhcmdldGVkTW9kZWxzLnB1c2gobW9kaWZpZXIudmFsdWUpO1xuXHRcdH0pO1xuXHRcdGRpcmVjdGl2ZS5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcblx0XHRcdGlmICh2YWxpZE1vZGlmaWVycy5oYXMobW9kaWZpZXIubmFtZSkpIHtcblx0XHRcdFx0KHZhbGlkTW9kaWZpZXJzLmdldChtb2RpZmllci5uYW1lKSA/PyAoKCkgPT4ge30pKShtb2RpZmllcik7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRocm93IG5ldyBFcnJvcihgVW5rbm93biBtb2RpZmllciBcIiR7bW9kaWZpZXIubmFtZX1cIiB1c2VkIGluIGRhdGEtbG9hZGluZz1cIiR7ZGlyZWN0aXZlLmdldFN0cmluZygpfVwiLiBBdmFpbGFibGUgbW9kaWZpZXJzIGFyZTogJHtBcnJheS5mcm9tKHZhbGlkTW9kaWZpZXJzLmtleXMoKSkuam9pbihcIiwgXCIpfS5gKTtcblx0XHR9KTtcblx0XHRpZiAoaXNMb2FkaW5nICYmIHRhcmdldGVkQWN0aW9ucy5sZW5ndGggPiAwICYmIGJhY2tlbmRSZXF1ZXN0ICYmICFiYWNrZW5kUmVxdWVzdC5jb250YWluc09uZU9mQWN0aW9ucyh0YXJnZXRlZEFjdGlvbnMpKSByZXR1cm47XG5cdFx0aWYgKGlzTG9hZGluZyAmJiB0YXJnZXRlZE1vZGVscy5sZW5ndGggPiAwICYmIGJhY2tlbmRSZXF1ZXN0ICYmICFiYWNrZW5kUmVxdWVzdC5hcmVBbnlNb2RlbHNVcGRhdGVkKHRhcmdldGVkTW9kZWxzKSkgcmV0dXJuO1xuXHRcdGxldCBsb2FkaW5nRGlyZWN0aXZlO1xuXHRcdHN3aXRjaCAoZmluYWxBY3Rpb24pIHtcblx0XHRcdGNhc2UgXCJzaG93XCI6XG5cdFx0XHRcdGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLnNob3dFbGVtZW50KGVsZW1lbnQpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJoaWRlXCI6XG5cdFx0XHRcdGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLmhpZGVFbGVtZW50KGVsZW1lbnQpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJhZGRDbGFzc1wiOlxuXHRcdFx0XHRsb2FkaW5nRGlyZWN0aXZlID0gKCkgPT4gdGhpcy5hZGRDbGFzcyhlbGVtZW50LCBkaXJlY3RpdmUuYXJncyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcInJlbW92ZUNsYXNzXCI6XG5cdFx0XHRcdGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLnJlbW92ZUNsYXNzKGVsZW1lbnQsIGRpcmVjdGl2ZS5hcmdzKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiYWRkQXR0cmlidXRlXCI6XG5cdFx0XHRcdGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLmFkZEF0dHJpYnV0ZXMoZWxlbWVudCwgZGlyZWN0aXZlLmFyZ3MpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJyZW1vdmVBdHRyaWJ1dGVcIjpcblx0XHRcdFx0bG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMucmVtb3ZlQXR0cmlidXRlcyhlbGVtZW50LCBkaXJlY3RpdmUuYXJncyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGRhdGEtbG9hZGluZyBhY3Rpb24gXCIke2ZpbmFsQWN0aW9ufVwiYCk7XG5cdFx0fVxuXHRcdGlmIChkZWxheSkge1xuXHRcdFx0d2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRpZiAoYmFja2VuZFJlcXVlc3QgJiYgIWJhY2tlbmRSZXF1ZXN0LmlzUmVzb2x2ZWQpIGxvYWRpbmdEaXJlY3RpdmUoKTtcblx0XHRcdH0sIGRlbGF5KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bG9hZGluZ0RpcmVjdGl2ZSgpO1xuXHR9XG5cdGdldExvYWRpbmdEaXJlY3RpdmVzKGNvbXBvbmVudCwgZWxlbWVudCkge1xuXHRcdGNvbnN0IGxvYWRpbmdEaXJlY3RpdmVzID0gW107XG5cdFx0bGV0IG1hdGNoaW5nRWxlbWVudHMgPSBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWxvYWRpbmddXCIpKTtcblx0XHRtYXRjaGluZ0VsZW1lbnRzID0gbWF0Y2hpbmdFbGVtZW50cy5maWx0ZXIoKGVsdCkgPT4gZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQoZWx0LCBjb21wb25lbnQpKTtcblx0XHRpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJkYXRhLWxvYWRpbmdcIikpIG1hdGNoaW5nRWxlbWVudHMgPSBbZWxlbWVudCwgLi4ubWF0Y2hpbmdFbGVtZW50c107XG5cdFx0bWF0Y2hpbmdFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG5cdFx0XHRpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpICYmICEoZWxlbWVudCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIEVsZW1lbnQgVHlwZVwiKTtcblx0XHRcdGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMoZWxlbWVudC5kYXRhc2V0LmxvYWRpbmcgfHwgXCJzaG93XCIpO1xuXHRcdFx0bG9hZGluZ0RpcmVjdGl2ZXMucHVzaCh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHRcdGRpcmVjdGl2ZXNcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHJldHVybiBsb2FkaW5nRGlyZWN0aXZlcztcblx0fVxuXHRzaG93RWxlbWVudChlbGVtZW50KSB7XG5cdFx0ZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJyZXZlcnRcIjtcblx0fVxuXHRoaWRlRWxlbWVudChlbGVtZW50KSB7XG5cdFx0ZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdH1cblx0YWRkQ2xhc3MoZWxlbWVudCwgY2xhc3Nlcykge1xuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jb21iaW5lU3BhY2VkQXJyYXkoY2xhc3NlcykpO1xuXHR9XG5cdHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzZXMpIHtcblx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoLi4uY29tYmluZVNwYWNlZEFycmF5KGNsYXNzZXMpKTtcblx0XHRpZiAoZWxlbWVudC5jbGFzc0xpc3QubGVuZ3RoID09PSAwKSBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpO1xuXHR9XG5cdGFkZEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcykge1xuXHRcdGF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG5cdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIFwiXCIpO1xuXHRcdH0pO1xuXHR9XG5cdHJlbW92ZUF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcykge1xuXHRcdGF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuXHRcdH0pO1xuXHR9XG59O1xuY29uc3QgcGFyc2VMb2FkaW5nQWN0aW9uID0gKGFjdGlvbiwgaXNMb2FkaW5nKSA9PiB7XG5cdHN3aXRjaCAoYWN0aW9uKSB7XG5cdFx0Y2FzZSBcInNob3dcIjogcmV0dXJuIGlzTG9hZGluZyA/IFwic2hvd1wiIDogXCJoaWRlXCI7XG5cdFx0Y2FzZSBcImhpZGVcIjogcmV0dXJuIGlzTG9hZGluZyA/IFwiaGlkZVwiIDogXCJzaG93XCI7XG5cdFx0Y2FzZSBcImFkZENsYXNzXCI6IHJldHVybiBpc0xvYWRpbmcgPyBcImFkZENsYXNzXCIgOiBcInJlbW92ZUNsYXNzXCI7XG5cdFx0Y2FzZSBcInJlbW92ZUNsYXNzXCI6IHJldHVybiBpc0xvYWRpbmcgPyBcInJlbW92ZUNsYXNzXCIgOiBcImFkZENsYXNzXCI7XG5cdFx0Y2FzZSBcImFkZEF0dHJpYnV0ZVwiOiByZXR1cm4gaXNMb2FkaW5nID8gXCJhZGRBdHRyaWJ1dGVcIiA6IFwicmVtb3ZlQXR0cmlidXRlXCI7XG5cdFx0Y2FzZSBcInJlbW92ZUF0dHJpYnV0ZVwiOiByZXR1cm4gaXNMb2FkaW5nID8gXCJyZW1vdmVBdHRyaWJ1dGVcIiA6IFwiYWRkQXR0cmlidXRlXCI7XG5cdH1cblx0dGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGRhdGEtbG9hZGluZyBhY3Rpb24gXCIke2FjdGlvbn1cImApO1xufTtcbnZhciBQYWdlVW5sb2FkaW5nUGx1Z2luX2RlZmF1bHQgPSBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZTtcblx0fVxuXHRhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcblx0XHRjb21wb25lbnQub24oXCJyZW5kZXI6c3RhcnRlZFwiLCAoaHRtbCwgcmVzcG9uc2UsIGNvbnRyb2xzKSA9PiB7XG5cdFx0XHRpZiAoIXRoaXMuaXNDb25uZWN0ZWQpIGNvbnRyb2xzLnNob3VsZFJlbmRlciA9IGZhbHNlO1xuXHRcdH0pO1xuXHRcdGNvbXBvbmVudC5vbihcImNvbm5lY3RcIiwgKCkgPT4ge1xuXHRcdFx0dGhpcy5pc0Nvbm5lY3RlZCA9IHRydWU7XG5cdFx0fSk7XG5cdFx0Y29tcG9uZW50Lm9uKFwiZGlzY29ubmVjdFwiLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XG5cdFx0fSk7XG5cdH1cbn07XG52YXIgUG9sbGluZ0RpcmVjdG9yX2RlZmF1bHQgPSBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKGNvbXBvbmVudCkge1xuXHRcdHRoaXMuaXNQb2xsaW5nQWN0aXZlID0gdHJ1ZTtcblx0XHR0aGlzLnBvbGxpbmdJbnRlcnZhbHMgPSBbXTtcblx0XHR0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcblx0fVxuXHRhZGRQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKSB7XG5cdFx0dGhpcy5wb2xscy5wdXNoKHtcblx0XHRcdGFjdGlvbk5hbWUsXG5cdFx0XHRkdXJhdGlvblxuXHRcdH0pO1xuXHRcdGlmICh0aGlzLmlzUG9sbGluZ0FjdGl2ZSkgdGhpcy5pbml0aWF0ZVBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pO1xuXHR9XG5cdHN0YXJ0QWxsUG9sbGluZygpIHtcblx0XHRpZiAodGhpcy5pc1BvbGxpbmdBY3RpdmUpIHJldHVybjtcblx0XHR0aGlzLmlzUG9sbGluZ0FjdGl2ZSA9IHRydWU7XG5cdFx0dGhpcy5wb2xscy5mb3JFYWNoKCh7IGFjdGlvbk5hbWUsIGR1cmF0aW9uIH0pID0+IHtcblx0XHRcdHRoaXMuaW5pdGlhdGVQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKTtcblx0XHR9KTtcblx0fVxuXHRzdG9wQWxsUG9sbGluZygpIHtcblx0XHR0aGlzLmlzUG9sbGluZ0FjdGl2ZSA9IGZhbHNlO1xuXHRcdHRoaXMucG9sbGluZ0ludGVydmFscy5mb3JFYWNoKChpbnRlcnZhbCkgPT4ge1xuXHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cdFx0fSk7XG5cdH1cblx0Y2xlYXJQb2xsaW5nKCkge1xuXHRcdHRoaXMuc3RvcEFsbFBvbGxpbmcoKTtcblx0XHR0aGlzLnBvbGxzID0gW107XG5cdFx0dGhpcy5zdGFydEFsbFBvbGxpbmcoKTtcblx0fVxuXHRpbml0aWF0ZVBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pIHtcblx0XHRsZXQgY2FsbGJhY2s7XG5cdFx0aWYgKGFjdGlvbk5hbWUgPT09IFwiJHJlbmRlclwiKSBjYWxsYmFjayA9ICgpID0+IHtcblx0XHRcdHRoaXMuY29tcG9uZW50LnJlbmRlcigpO1xuXHRcdH07XG5cdFx0ZWxzZSBjYWxsYmFjayA9ICgpID0+IHtcblx0XHRcdHRoaXMuY29tcG9uZW50LmFjdGlvbihhY3Rpb25OYW1lLCB7fSwgMCk7XG5cdFx0fTtcblx0XHRjb25zdCB0aW1lciA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRjYWxsYmFjaygpO1xuXHRcdH0sIGR1cmF0aW9uKTtcblx0XHR0aGlzLnBvbGxpbmdJbnRlcnZhbHMucHVzaCh0aW1lcik7XG5cdH1cbn07XG52YXIgUG9sbGluZ1BsdWdpbl9kZWZhdWx0ID0gY2xhc3Mge1xuXHRhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBjb21wb25lbnQuZWxlbWVudDtcblx0XHR0aGlzLnBvbGxpbmdEaXJlY3RvciA9IG5ldyBQb2xsaW5nRGlyZWN0b3JfZGVmYXVsdChjb21wb25lbnQpO1xuXHRcdHRoaXMuaW5pdGlhbGl6ZVBvbGxpbmcoKTtcblx0XHRjb21wb25lbnQub24oXCJjb25uZWN0XCIsICgpID0+IHtcblx0XHRcdHRoaXMucG9sbGluZ0RpcmVjdG9yLnN0YXJ0QWxsUG9sbGluZygpO1xuXHRcdH0pO1xuXHRcdGNvbXBvbmVudC5vbihcImRpc2Nvbm5lY3RcIiwgKCkgPT4ge1xuXHRcdFx0dGhpcy5wb2xsaW5nRGlyZWN0b3Iuc3RvcEFsbFBvbGxpbmcoKTtcblx0XHR9KTtcblx0XHRjb21wb25lbnQub24oXCJyZW5kZXI6ZmluaXNoZWRcIiwgKCkgPT4ge1xuXHRcdFx0dGhpcy5pbml0aWFsaXplUG9sbGluZygpO1xuXHRcdH0pO1xuXHR9XG5cdGFkZFBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pIHtcblx0XHR0aGlzLnBvbGxpbmdEaXJlY3Rvci5hZGRQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKTtcblx0fVxuXHRjbGVhclBvbGxpbmcoKSB7XG5cdFx0dGhpcy5wb2xsaW5nRGlyZWN0b3IuY2xlYXJQb2xsaW5nKCk7XG5cdH1cblx0aW5pdGlhbGl6ZVBvbGxpbmcoKSB7XG5cdFx0dGhpcy5jbGVhclBvbGxpbmcoKTtcblx0XHRpZiAodGhpcy5lbGVtZW50LmRhdGFzZXQucG9sbCA9PT0gdm9pZCAwKSByZXR1cm47XG5cdFx0Y29uc3QgcmF3UG9sbENvbmZpZyA9IHRoaXMuZWxlbWVudC5kYXRhc2V0LnBvbGw7XG5cdFx0cGFyc2VEaXJlY3RpdmVzKHJhd1BvbGxDb25maWcgfHwgXCIkcmVuZGVyXCIpLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuXHRcdFx0bGV0IGR1cmF0aW9uID0gMmUzO1xuXHRcdFx0ZGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuXHRcdFx0XHRzd2l0Y2ggKG1vZGlmaWVyLm5hbWUpIHtcblx0XHRcdFx0XHRjYXNlIFwiZGVsYXlcIjpcblx0XHRcdFx0XHRcdGlmIChtb2RpZmllci52YWx1ZSkgZHVyYXRpb24gPSBOdW1iZXIucGFyc2VJbnQobW9kaWZpZXIudmFsdWUpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGVmYXVsdDogY29uc29sZS53YXJuKGBVbmtub3duIG1vZGlmaWVyIFwiJHttb2RpZmllci5uYW1lfVwiIGluIGRhdGEtcG9sbCBcIiR7cmF3UG9sbENvbmZpZ31cIi5gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLmFkZFBvbGwoZGlyZWN0aXZlLmFjdGlvbiwgZHVyYXRpb24pO1xuXHRcdH0pO1xuXHR9XG59O1xudmFyIFNldFZhbHVlT250b01vZGVsRmllbGRzUGx1Z2luX2RlZmF1bHQgPSBjbGFzcyB7XG5cdGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuXHRcdHRoaXMuc3luY2hyb25pemVWYWx1ZU9mTW9kZWxGaWVsZHMoY29tcG9uZW50KTtcblx0XHRjb21wb25lbnQub24oXCJyZW5kZXI6ZmluaXNoZWRcIiwgKCkgPT4ge1xuXHRcdFx0dGhpcy5zeW5jaHJvbml6ZVZhbHVlT2ZNb2RlbEZpZWxkcyhjb21wb25lbnQpO1xuXHRcdH0pO1xuXHR9XG5cdHN5bmNocm9uaXplVmFsdWVPZk1vZGVsRmllbGRzKGNvbXBvbmVudCkge1xuXHRcdGNvbXBvbmVudC5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1tb2RlbF1cIikuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0aWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBlbGVtZW50IHVzaW5nIGRhdGEtbW9kZWwuXCIpO1xuXHRcdFx0aWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHJldHVybjtcblx0XHRcdGlmICghZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQoZWxlbWVudCwgY29tcG9uZW50KSkgcmV0dXJuO1xuXHRcdFx0Y29uc3QgbW9kZWxEaXJlY3RpdmUgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQpO1xuXHRcdFx0aWYgKCFtb2RlbERpcmVjdGl2ZSkgcmV0dXJuO1xuXHRcdFx0Y29uc3QgbW9kZWxOYW1lID0gbW9kZWxEaXJlY3RpdmUuYWN0aW9uO1xuXHRcdFx0aWYgKGNvbXBvbmVudC5nZXRVbnN5bmNlZE1vZGVscygpLmluY2x1ZGVzKG1vZGVsTmFtZSkpIHJldHVybjtcblx0XHRcdGlmIChjb21wb25lbnQudmFsdWVTdG9yZS5oYXMobW9kZWxOYW1lKSkgc2V0VmFsdWVPbkVsZW1lbnQoZWxlbWVudCwgY29tcG9uZW50LnZhbHVlU3RvcmUuZ2V0KG1vZGVsTmFtZSkpO1xuXHRcdFx0aWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCAmJiAhZWxlbWVudC5tdWx0aXBsZSkgY29tcG9uZW50LnZhbHVlU3RvcmUuc2V0KG1vZGVsTmFtZSwgZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCBjb21wb25lbnQudmFsdWVTdG9yZSkpO1xuXHRcdH0pO1xuXHR9XG59O1xudmFyIFZhbGlkYXRlZEZpZWxkc1BsdWdpbl9kZWZhdWx0ID0gY2xhc3Mge1xuXHRhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcblx0XHRjb21wb25lbnQub24oXCJtb2RlbDpzZXRcIiwgKG1vZGVsTmFtZSkgPT4ge1xuXHRcdFx0dGhpcy5oYW5kbGVNb2RlbFNldChtb2RlbE5hbWUsIGNvbXBvbmVudC52YWx1ZVN0b3JlKTtcblx0XHR9KTtcblx0fVxuXHRoYW5kbGVNb2RlbFNldChtb2RlbE5hbWUsIHZhbHVlU3RvcmUpIHtcblx0XHRpZiAodmFsdWVTdG9yZS5oYXMoXCJ2YWxpZGF0ZWRGaWVsZHNcIikpIHtcblx0XHRcdGNvbnN0IHZhbGlkYXRlZEZpZWxkcyA9IFsuLi52YWx1ZVN0b3JlLmdldChcInZhbGlkYXRlZEZpZWxkc1wiKV07XG5cdFx0XHRpZiAoIXZhbGlkYXRlZEZpZWxkcy5pbmNsdWRlcyhtb2RlbE5hbWUpKSB2YWxpZGF0ZWRGaWVsZHMucHVzaChtb2RlbE5hbWUpO1xuXHRcdFx0dmFsdWVTdG9yZS5zZXQoXCJ2YWxpZGF0ZWRGaWVsZHNcIiwgdmFsaWRhdGVkRmllbGRzKTtcblx0XHR9XG5cdH1cbn07XG52YXIgTGl2ZUNvbnRyb2xsZXJEZWZhdWx0ID0gY2xhc3MgTGl2ZUNvbnRyb2xsZXJEZWZhdWx0IGV4dGVuZHMgQ29udHJvbGxlciB7XG5cdGNvbnN0cnVjdG9yKC4uLl9hcmdzKSB7XG5cdFx0c3VwZXIoLi4uX2FyZ3MpO1xuXHRcdHRoaXMucGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQgPSBudWxsO1xuXHRcdHRoaXMuZWxlbWVudEV2ZW50TGlzdGVuZXJzID0gW3tcblx0XHRcdGV2ZW50OiBcImlucHV0XCIsXG5cdFx0XHRjYWxsYmFjazogKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUlucHV0RXZlbnQoZXZlbnQpXG5cdFx0fSwge1xuXHRcdFx0ZXZlbnQ6IFwiY2hhbmdlXCIsXG5cdFx0XHRjYWxsYmFjazogKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUNoYW5nZUV2ZW50KGV2ZW50KVxuXHRcdH1dO1xuXHRcdHRoaXMucGVuZGluZ0ZpbGVzID0ge307XG5cdH1cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHR0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLm9uTXV0YXRpb25zLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XG5cdH1cblx0Y29ubmVjdCgpIHtcblx0XHR0aGlzLmNvbm5lY3RDb21wb25lbnQoKTtcblx0XHR0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsZW1lbnQsIHsgYXR0cmlidXRlczogdHJ1ZSB9KTtcblx0fVxuXHRkaXNjb25uZWN0KCkge1xuXHRcdHRoaXMuZGlzY29ubmVjdENvbXBvbmVudCgpO1xuXHRcdHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cdH1cblx0dXBkYXRlKGV2ZW50KSB7XG5cdFx0aWYgKGV2ZW50LnR5cGUgPT09IFwiaW5wdXRcIiB8fCBldmVudC50eXBlID09PSBcImNoYW5nZVwiKSB0aHJvdyBuZXcgRXJyb3IoYFNpbmNlIExpdmVDb21wb25lbnRzIDIuMywgeW91IG5vIGxvbmdlciBuZWVkIGRhdGEtYWN0aW9uPVwibGl2ZSN1cGRhdGVcIiBvbiBmb3JtIGVsZW1lbnRzLiBGb3VuZCBvbiBlbGVtZW50OiAke2dldEVsZW1lbnRBc1RhZ1RleHQoZXZlbnQuY3VycmVudFRhcmdldCl9YCk7XG5cdFx0dGhpcy51cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQoZXZlbnQuY3VycmVudFRhcmdldCwgbnVsbCk7XG5cdH1cblx0YWN0aW9uKGV2ZW50KSB7XG5cdFx0Y29uc3QgcGFyYW1zID0gZXZlbnQucGFyYW1zO1xuXHRcdGlmICghcGFyYW1zLmFjdGlvbikgdGhyb3cgbmV3IEVycm9yKGBObyBhY3Rpb24gbmFtZSBwcm92aWRlZCBvbiBlbGVtZW50OiAke2dldEVsZW1lbnRBc1RhZ1RleHQoZXZlbnQuY3VycmVudFRhcmdldCl9LiBEaWQgeW91IGZvcmdldCB0byBhZGQgdGhlIFwiZGF0YS1saXZlLWFjdGlvbi1wYXJhbVwiIGF0dHJpYnV0ZT9gKTtcblx0XHRjb25zdCByYXdBY3Rpb24gPSBwYXJhbXMuYWN0aW9uO1xuXHRcdGNvbnN0IGFjdGlvbkFyZ3MgPSB7IC4uLnBhcmFtcyB9O1xuXHRcdGRlbGV0ZSBhY3Rpb25BcmdzLmFjdGlvbjtcblx0XHRjb25zdCBkaXJlY3RpdmVzID0gcGFyc2VEaXJlY3RpdmVzKHJhd0FjdGlvbik7XG5cdFx0bGV0IGRlYm91bmNlID0gZmFsc2U7XG5cdFx0ZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcblx0XHRcdGxldCBwZW5kaW5nRmlsZXMgPSB7fTtcblx0XHRcdGNvbnN0IHZhbGlkTW9kaWZpZXJzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0XHRcdHZhbGlkTW9kaWZpZXJzLnNldChcInN0b3BcIiwgKCkgPT4ge1xuXHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdH0pO1xuXHRcdFx0dmFsaWRNb2RpZmllcnMuc2V0KFwic2VsZlwiLCAoKSA9PiB7XG5cdFx0XHRcdGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHJldHVybjtcblx0XHRcdH0pO1xuXHRcdFx0dmFsaWRNb2RpZmllcnMuc2V0KFwiZGVib3VuY2VcIiwgKG1vZGlmaWVyKSA9PiB7XG5cdFx0XHRcdGRlYm91bmNlID0gbW9kaWZpZXIudmFsdWUgPyBOdW1iZXIucGFyc2VJbnQobW9kaWZpZXIudmFsdWUpIDogdHJ1ZTtcblx0XHRcdH0pO1xuXHRcdFx0dmFsaWRNb2RpZmllcnMuc2V0KFwiZmlsZXNcIiwgKG1vZGlmaWVyKSA9PiB7XG5cdFx0XHRcdGlmICghbW9kaWZpZXIudmFsdWUpIHBlbmRpbmdGaWxlcyA9IHRoaXMucGVuZGluZ0ZpbGVzO1xuXHRcdFx0XHRlbHNlIGlmICh0aGlzLnBlbmRpbmdGaWxlc1ttb2RpZmllci52YWx1ZV0pIHBlbmRpbmdGaWxlc1ttb2RpZmllci52YWx1ZV0gPSB0aGlzLnBlbmRpbmdGaWxlc1ttb2RpZmllci52YWx1ZV07XG5cdFx0XHR9KTtcblx0XHRcdGRpcmVjdGl2ZS5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcblx0XHRcdFx0aWYgKHZhbGlkTW9kaWZpZXJzLmhhcyhtb2RpZmllci5uYW1lKSkge1xuXHRcdFx0XHRcdCh2YWxpZE1vZGlmaWVycy5nZXQobW9kaWZpZXIubmFtZSkgPz8gKCgpID0+IHt9KSkobW9kaWZpZXIpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLndhcm4oYFVua25vd24gbW9kaWZpZXIgJHttb2RpZmllci5uYW1lfSBpbiBhY3Rpb24gXCIke3Jhd0FjdGlvbn1cIi4gQXZhaWxhYmxlIG1vZGlmaWVycyBhcmU6ICR7QXJyYXkuZnJvbSh2YWxpZE1vZGlmaWVycy5rZXlzKCkpLmpvaW4oXCIsIFwiKX0uYCk7XG5cdFx0XHR9KTtcblx0XHRcdGZvciAoY29uc3QgW2tleSwgaW5wdXRdIG9mIE9iamVjdC5lbnRyaWVzKHBlbmRpbmdGaWxlcykpIHtcblx0XHRcdFx0aWYgKGlucHV0LmZpbGVzKSB0aGlzLmNvbXBvbmVudC5maWxlcyhrZXksIGlucHV0KTtcblx0XHRcdFx0ZGVsZXRlIHRoaXMucGVuZGluZ0ZpbGVzW2tleV07XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmNvbXBvbmVudC5hY3Rpb24oZGlyZWN0aXZlLmFjdGlvbiwgYWN0aW9uQXJncywgZGVib3VuY2UpO1xuXHRcdFx0aWYgKGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZXZlbnQuY3VycmVudFRhcmdldCwgZmFsc2UpKSB0aGlzLnBlbmRpbmdBY3Rpb25UcmlnZ2VyTW9kZWxFbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcblx0XHR9KTtcblx0fVxuXHQkcmVuZGVyKCkge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvbmVudC5yZW5kZXIoKTtcblx0fVxuXHRlbWl0KGV2ZW50KSB7XG5cdFx0dGhpcy5nZXRFbWl0RGlyZWN0aXZlcyhldmVudCkuZm9yRWFjaCgoeyBuYW1lLCBkYXRhLCBuYW1lTWF0Y2ggfSkgPT4ge1xuXHRcdFx0dGhpcy5jb21wb25lbnQuZW1pdChuYW1lLCBkYXRhLCBuYW1lTWF0Y2gpO1xuXHRcdH0pO1xuXHR9XG5cdGVtaXRVcChldmVudCkge1xuXHRcdHRoaXMuZ2V0RW1pdERpcmVjdGl2ZXMoZXZlbnQpLmZvckVhY2goKHsgbmFtZSwgZGF0YSwgbmFtZU1hdGNoIH0pID0+IHtcblx0XHRcdHRoaXMuY29tcG9uZW50LmVtaXRVcChuYW1lLCBkYXRhLCBuYW1lTWF0Y2gpO1xuXHRcdH0pO1xuXHR9XG5cdGVtaXRTZWxmKGV2ZW50KSB7XG5cdFx0dGhpcy5nZXRFbWl0RGlyZWN0aXZlcyhldmVudCkuZm9yRWFjaCgoeyBuYW1lLCBkYXRhIH0pID0+IHtcblx0XHRcdHRoaXMuY29tcG9uZW50LmVtaXRTZWxmKG5hbWUsIGRhdGEpO1xuXHRcdH0pO1xuXHR9XG5cdCR1cGRhdGVNb2RlbChtb2RlbCwgdmFsdWUsIHNob3VsZFJlbmRlciA9IHRydWUsIGRlYm91bmNlID0gdHJ1ZSkge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvbmVudC5zZXQobW9kZWwsIHZhbHVlLCBzaG91bGRSZW5kZXIsIGRlYm91bmNlKTtcblx0fVxuXHRwcm9wc1VwZGF0ZWRGcm9tUGFyZW50VmFsdWVDaGFuZ2VkKCkge1xuXHRcdHRoaXMuY29tcG9uZW50Ll91cGRhdGVGcm9tUGFyZW50UHJvcHModGhpcy5wcm9wc1VwZGF0ZWRGcm9tUGFyZW50VmFsdWUpO1xuXHR9XG5cdGZpbmdlcnByaW50VmFsdWVDaGFuZ2VkKCkge1xuXHRcdHRoaXMuY29tcG9uZW50LmZpbmdlcnByaW50ID0gdGhpcy5maW5nZXJwcmludFZhbHVlO1xuXHR9XG5cdGdldEVtaXREaXJlY3RpdmVzKGV2ZW50KSB7XG5cdFx0Y29uc3QgcGFyYW1zID0gZXZlbnQucGFyYW1zO1xuXHRcdGlmICghcGFyYW1zLmV2ZW50KSB0aHJvdyBuZXcgRXJyb3IoYE5vIGV2ZW50IG5hbWUgcHJvdmlkZWQgb24gZWxlbWVudDogJHtnZXRFbGVtZW50QXNUYWdUZXh0KGV2ZW50LmN1cnJlbnRUYXJnZXQpfS4gRGlkIHlvdSBmb3JnZXQgdG8gYWRkIHRoZSBcImRhdGEtbGl2ZS1ldmVudC1wYXJhbVwiIGF0dHJpYnV0ZT9gKTtcblx0XHRjb25zdCBldmVudEluZm8gPSBwYXJhbXMuZXZlbnQ7XG5cdFx0Y29uc3QgZXZlbnRBcmdzID0geyAuLi5wYXJhbXMgfTtcblx0XHRkZWxldGUgZXZlbnRBcmdzLmV2ZW50O1xuXHRcdGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMoZXZlbnRJbmZvKTtcblx0XHRjb25zdCBlbWl0cyA9IFtdO1xuXHRcdGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG5cdFx0XHRsZXQgbmFtZU1hdGNoID0gbnVsbDtcblx0XHRcdGRpcmVjdGl2ZS5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcblx0XHRcdFx0c3dpdGNoIChtb2RpZmllci5uYW1lKSB7XG5cdFx0XHRcdFx0Y2FzZSBcIm5hbWVcIjpcblx0XHRcdFx0XHRcdG5hbWVNYXRjaCA9IG1vZGlmaWVyLnZhbHVlO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIG1vZGlmaWVyICR7bW9kaWZpZXIubmFtZX0gaW4gZXZlbnQgXCIke2V2ZW50SW5mb31cIi5gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRlbWl0cy5wdXNoKHtcblx0XHRcdFx0bmFtZTogZGlyZWN0aXZlLmFjdGlvbixcblx0XHRcdFx0ZGF0YTogZXZlbnRBcmdzLFxuXHRcdFx0XHRuYW1lTWF0Y2hcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHJldHVybiBlbWl0cztcblx0fVxuXHRjcmVhdGVDb21wb25lbnQoKSB7XG5cdFx0Y29uc3QgaWQgPSB0aGlzLmVsZW1lbnQuaWQgfHwgbnVsbDtcblx0XHR0aGlzLmNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQodGhpcy5lbGVtZW50LCB0aGlzLm5hbWVWYWx1ZSwgdGhpcy5wcm9wc1ZhbHVlLCB0aGlzLmxpc3RlbmVyc1ZhbHVlLCBpZCwgTGl2ZUNvbnRyb2xsZXJEZWZhdWx0LmJhY2tlbmRGYWN0b3J5KHRoaXMpLCBuZXcgU3RpbXVsdXNFbGVtZW50RHJpdmVyKHRoaXMpKTtcblx0XHR0aGlzLnByb3hpZWRDb21wb25lbnQgPSBwcm94aWZ5Q29tcG9uZW50KHRoaXMuY29tcG9uZW50KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5lbGVtZW50LCBcIl9fY29tcG9uZW50XCIsIHtcblx0XHRcdHZhbHVlOiB0aGlzLnByb3hpZWRDb21wb25lbnQsXG5cdFx0XHR3cml0YWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdGlmICh0aGlzLmhhc0RlYm91bmNlVmFsdWUpIHRoaXMuY29tcG9uZW50LmRlZmF1bHREZWJvdW5jZSA9IHRoaXMuZGVib3VuY2VWYWx1ZTtcblx0XHRbXG5cdFx0XHRuZXcgTG9hZGluZ1BsdWdpbl9kZWZhdWx0KCksXG5cdFx0XHRuZXcgTGF6eVBsdWdpbl9kZWZhdWx0KCksXG5cdFx0XHRuZXcgVmFsaWRhdGVkRmllbGRzUGx1Z2luX2RlZmF1bHQoKSxcblx0XHRcdG5ldyBQYWdlVW5sb2FkaW5nUGx1Z2luX2RlZmF1bHQoKSxcblx0XHRcdG5ldyBQb2xsaW5nUGx1Z2luX2RlZmF1bHQoKSxcblx0XHRcdG5ldyBTZXRWYWx1ZU9udG9Nb2RlbEZpZWxkc1BsdWdpbl9kZWZhdWx0KCksXG5cdFx0XHRuZXcgQ2hpbGRDb21wb25lbnRQbHVnaW5fZGVmYXVsdCh0aGlzLmNvbXBvbmVudClcblx0XHRdLmZvckVhY2goKHBsdWdpbikgPT4ge1xuXHRcdFx0dGhpcy5jb21wb25lbnQuYWRkUGx1Z2luKHBsdWdpbik7XG5cdFx0fSk7XG5cdH1cblx0Y29ubmVjdENvbXBvbmVudCgpIHtcblx0XHR0aGlzLmNvbXBvbmVudC5jb25uZWN0KCk7XG5cdFx0dGhpcy5tdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5lbGVtZW50LCB7IGF0dHJpYnV0ZXM6IHRydWUgfSk7XG5cdFx0dGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoeyBldmVudCwgY2FsbGJhY2sgfSkgPT4ge1xuXHRcdFx0dGhpcy5jb21wb25lbnQuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG5cdFx0fSk7XG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFwiY29ubmVjdFwiKTtcblx0fVxuXHRkaXNjb25uZWN0Q29tcG9uZW50KCkge1xuXHRcdHRoaXMuY29tcG9uZW50LmRpc2Nvbm5lY3QoKTtcblx0XHR0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycy5mb3JFYWNoKCh7IGV2ZW50LCBjYWxsYmFjayB9KSA9PiB7XG5cdFx0XHR0aGlzLmNvbXBvbmVudC5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcblx0XHR9KTtcblx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoXCJkaXNjb25uZWN0XCIpO1xuXHR9XG5cdGhhbmRsZUlucHV0RXZlbnQoZXZlbnQpIHtcblx0XHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cdFx0aWYgKCF0YXJnZXQpIHJldHVybjtcblx0XHR0aGlzLnVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudCh0YXJnZXQsIFwiaW5wdXRcIik7XG5cdH1cblx0aGFuZGxlQ2hhbmdlRXZlbnQoZXZlbnQpIHtcblx0XHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cdFx0aWYgKCF0YXJnZXQpIHJldHVybjtcblx0XHR0aGlzLnVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudCh0YXJnZXQsIFwiY2hhbmdlXCIpO1xuXHR9XG5cdHVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudChlbGVtZW50LCBldmVudE5hbWUpIHtcblx0XHRpZiAoIWVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIHRoaXMuY29tcG9uZW50KSkgcmV0dXJuO1xuXHRcdGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCB1cGRhdGUgbW9kZWwgZm9yIG5vbiBIVE1MRWxlbWVudFwiKTtcblx0XHRpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgZWxlbWVudC50eXBlID09PSBcImZpbGVcIikge1xuXHRcdFx0Y29uc3Qga2V5ID0gZWxlbWVudC5uYW1lO1xuXHRcdFx0aWYgKGVsZW1lbnQuZmlsZXM/Lmxlbmd0aCkgdGhpcy5wZW5kaW5nRmlsZXNba2V5XSA9IGVsZW1lbnQ7XG5cdFx0XHRlbHNlIGlmICh0aGlzLnBlbmRpbmdGaWxlc1trZXldKSBkZWxldGUgdGhpcy5wZW5kaW5nRmlsZXNba2V5XTtcblx0XHR9XG5cdFx0Y29uc3QgbW9kZWxEaXJlY3RpdmUgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIGZhbHNlKTtcblx0XHRpZiAoIW1vZGVsRGlyZWN0aXZlKSByZXR1cm47XG5cdFx0Y29uc3QgbW9kZWxCaW5kaW5nID0gZ2V0X21vZGVsX2JpbmRpbmdfZGVmYXVsdChtb2RlbERpcmVjdGl2ZSk7XG5cdFx0aWYgKCFtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lKSBtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lID0gXCJpbnB1dFwiO1xuXHRcdGlmICh0aGlzLnBlbmRpbmdBY3Rpb25UcmlnZ2VyTW9kZWxFbGVtZW50ID09PSBlbGVtZW50KSBtb2RlbEJpbmRpbmcuc2hvdWxkUmVuZGVyID0gZmFsc2U7XG5cdFx0aWYgKGV2ZW50TmFtZSA9PT0gXCJjaGFuZ2VcIiAmJiBtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lID09PSBcImlucHV0XCIpIG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgPSBcImNoYW5nZVwiO1xuXHRcdGlmIChldmVudE5hbWUgJiYgbW9kZWxCaW5kaW5nLnRhcmdldEV2ZW50TmFtZSAhPT0gZXZlbnROYW1lKSByZXR1cm47XG5cdFx0aWYgKGZhbHNlID09PSBtb2RlbEJpbmRpbmcuZGVib3VuY2UpIGlmIChtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lID09PSBcImlucHV0XCIpIG1vZGVsQmluZGluZy5kZWJvdW5jZSA9IHRydWU7XG5cdFx0ZWxzZSBtb2RlbEJpbmRpbmcuZGVib3VuY2UgPSAwO1xuXHRcdGNvbnN0IGZpbmFsVmFsdWUgPSBnZXRWYWx1ZUZyb21FbGVtZW50KGVsZW1lbnQsIHRoaXMuY29tcG9uZW50LnZhbHVlU3RvcmUpO1xuXHRcdGNvbnN0IGZpbmFsVmFsdWVJc0VtcHR5ID0gZmluYWxWYWx1ZSA9PT0gXCJcIiB8fCBmaW5hbFZhbHVlID09PSBudWxsIHx8IGZpbmFsVmFsdWUgPT09IHZvaWQgMDtcblx0XHRpZiAoaXNUZXh0dWFsSW5wdXRFbGVtZW50KGVsZW1lbnQpIHx8IGlzVGV4dGFyZWFFbGVtZW50KGVsZW1lbnQpKSB7XG5cdFx0XHRpZiAoIWZpbmFsVmFsdWVJc0VtcHR5ICYmIG1vZGVsQmluZGluZy5taW5MZW5ndGggIT09IG51bGwgJiYgdHlwZW9mIGZpbmFsVmFsdWUgPT09IFwic3RyaW5nXCIgJiYgZmluYWxWYWx1ZS5sZW5ndGggPCBtb2RlbEJpbmRpbmcubWluTGVuZ3RoKSByZXR1cm47XG5cdFx0XHRpZiAoIWZpbmFsVmFsdWVJc0VtcHR5ICYmIG1vZGVsQmluZGluZy5tYXhMZW5ndGggIT09IG51bGwgJiYgdHlwZW9mIGZpbmFsVmFsdWUgPT09IFwic3RyaW5nXCIgJiYgZmluYWxWYWx1ZS5sZW5ndGggPiBtb2RlbEJpbmRpbmcubWF4TGVuZ3RoKSByZXR1cm47XG5cdFx0fVxuXHRcdGlmIChpc051bWVyaWNhbElucHV0RWxlbWVudChlbGVtZW50KSkge1xuXHRcdFx0aWYgKCFmaW5hbFZhbHVlSXNFbXB0eSkge1xuXHRcdFx0XHRjb25zdCBudW1lcmljVmFsdWUgPSBOdW1iZXIoZmluYWxWYWx1ZSk7XG5cdFx0XHRcdGlmIChtb2RlbEJpbmRpbmcubWluVmFsdWUgIT09IG51bGwgJiYgbnVtZXJpY1ZhbHVlIDwgbW9kZWxCaW5kaW5nLm1pblZhbHVlKSByZXR1cm47XG5cdFx0XHRcdGlmIChtb2RlbEJpbmRpbmcubWF4VmFsdWUgIT09IG51bGwgJiYgbnVtZXJpY1ZhbHVlID4gbW9kZWxCaW5kaW5nLm1heFZhbHVlKSByZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMuY29tcG9uZW50LnNldChtb2RlbEJpbmRpbmcubW9kZWxOYW1lLCBmaW5hbFZhbHVlLCBtb2RlbEJpbmRpbmcuc2hvdWxkUmVuZGVyLCBtb2RlbEJpbmRpbmcuZGVib3VuY2UpO1xuXHR9XG5cdGRpc3BhdGNoRXZlbnQobmFtZSwgZGV0YWlsID0ge30sIGNhbkJ1YmJsZSA9IHRydWUsIGNhbmNlbGFibGUgPSBmYWxzZSkge1xuXHRcdGRldGFpbC5jb250cm9sbGVyID0gdGhpcztcblx0XHRkZXRhaWwuY29tcG9uZW50ID0gdGhpcy5wcm94aWVkQ29tcG9uZW50O1xuXHRcdHRoaXMuZGlzcGF0Y2gobmFtZSwge1xuXHRcdFx0ZGV0YWlsLFxuXHRcdFx0cHJlZml4OiBcImxpdmVcIixcblx0XHRcdGNhbmNlbGFibGUsXG5cdFx0XHRidWJibGVzOiBjYW5CdWJibGVcblx0XHR9KTtcblx0fVxuXHRvbk11dGF0aW9ucyhtdXRhdGlvbnMpIHtcblx0XHRtdXRhdGlvbnMuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcblx0XHRcdGlmIChtdXRhdGlvbi50eXBlID09PSBcImF0dHJpYnV0ZXNcIiAmJiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSBcImlkXCIgJiYgdGhpcy5lbGVtZW50LmlkICE9PSB0aGlzLmNvbXBvbmVudC5pZCkge1xuXHRcdFx0XHR0aGlzLmRpc2Nvbm5lY3RDb21wb25lbnQoKTtcblx0XHRcdFx0dGhpcy5jcmVhdGVDb21wb25lbnQoKTtcblx0XHRcdFx0dGhpcy5jb25uZWN0Q29tcG9uZW50KCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn07XG5MaXZlQ29udHJvbGxlckRlZmF1bHQudmFsdWVzID0ge1xuXHRuYW1lOiBTdHJpbmcsXG5cdHVybDogU3RyaW5nLFxuXHRwcm9wczoge1xuXHRcdHR5cGU6IE9iamVjdCxcblx0XHRkZWZhdWx0OiB7fVxuXHR9LFxuXHRwcm9wc1VwZGF0ZWRGcm9tUGFyZW50OiB7XG5cdFx0dHlwZTogT2JqZWN0LFxuXHRcdGRlZmF1bHQ6IHt9XG5cdH0sXG5cdGxpc3RlbmVyczoge1xuXHRcdHR5cGU6IEFycmF5LFxuXHRcdGRlZmF1bHQ6IFtdXG5cdH0sXG5cdGV2ZW50c1RvRW1pdDoge1xuXHRcdHR5cGU6IEFycmF5LFxuXHRcdGRlZmF1bHQ6IFtdXG5cdH0sXG5cdGV2ZW50c1RvRGlzcGF0Y2g6IHtcblx0XHR0eXBlOiBBcnJheSxcblx0XHRkZWZhdWx0OiBbXVxuXHR9LFxuXHRkZWJvdW5jZToge1xuXHRcdHR5cGU6IE51bWJlcixcblx0XHRkZWZhdWx0OiAxNTBcblx0fSxcblx0ZmluZ2VycHJpbnQ6IHtcblx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0ZGVmYXVsdDogXCJcIlxuXHR9LFxuXHRyZXF1ZXN0TWV0aG9kOiB7XG5cdFx0dHlwZTogU3RyaW5nLFxuXHRcdGRlZmF1bHQ6IFwicG9zdFwiXG5cdH0sXG5cdGZldGNoQ3JlZGVudGlhbHM6IHtcblx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0ZGVmYXVsdDogXCJzYW1lLW9yaWdpblwiXG5cdH1cbn07XG5MaXZlQ29udHJvbGxlckRlZmF1bHQuYmFja2VuZEZhY3RvcnkgPSAoY29udHJvbGxlcikgPT4gbmV3IEJhY2tlbmRfZGVmYXVsdChjb250cm9sbGVyLnVybFZhbHVlLCBjb250cm9sbGVyLnJlcXVlc3RNZXRob2RWYWx1ZSwgY29udHJvbGxlci5mZXRjaENyZWRlbnRpYWxzVmFsdWUpO1xuZXhwb3J0IHsgQ29tcG9uZW50LCBMaXZlQ29udHJvbGxlckRlZmF1bHQgYXMgZGVmYXVsdCwgZ2V0Q29tcG9uZW50IH07XG4iXSwibmFtZXMiOlsiQ29udHJvbGxlciIsIl9kZWZhdWx0IiwiX0NvbnRyb2xsZXIiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlZmF1bHQiLCJpbml0Q2Fyb3VzZWxzIiwiQWxwaW5lIiwid2luZG93IiwiZGF0YSIsImNvcGllZCIsImNvcHlDb2RlIiwiX3RoaXMiLCJjb2RlQmxvY2siLCIkcmVmcyIsImNvZGVUZXh0IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidGhlbiIsInNldFRpbWVvdXQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGFydCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJpZCIsImxlbiIsImxlbmd0aCIsIm1heCIsInBhcnNlSW50IiwiZ2V0QXR0cmlidXRlIiwiY291bnRlciIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NOYW1lIiwiaGludCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNoZWNrVmFsaWRpdHkiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImRlc2MiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfdHlwZW9mIiwiX19hd2FpdCIsInVud3JhcHBlZCIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiX3NsaWNlZFRvQXJyYXkiLCJhcnIiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwibyIsIm1pbkxlbiIsIl9hcnJheUxpa2VUb0FycmF5IiwibiIsInRvU3RyaW5nIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsImFycjIiLCJfaSIsIl9zIiwiX2UiLCJfeCIsIl9yIiwiX2FyciIsIl9uIiwiX2QiLCJpc0FycmF5IiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwicHJvcHMiLCJkZXNjcmlwdG9yIiwiX3RvUHJvcGVydHlLZXkiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfdG9QcmltaXRpdmUiLCJTdHJpbmciLCJpbnB1dCIsInByaW0iLCJ0b1ByaW1pdGl2ZSIsInJlcyIsIk51bWJlciIsIkJhY2tlbmRSZXF1ZXN0X2RlZmF1bHQiLCJwcm9taXNlIiwiYWN0aW9ucyIsInVwZGF0ZU1vZGVscyIsImlzUmVzb2x2ZWQiLCJyZXNwb25zZSIsInVwZGF0ZWRNb2RlbHMiLCJjb250YWluc09uZU9mQWN0aW9ucyIsInRhcmdldGVkQWN0aW9ucyIsImZpbHRlciIsImFjdGlvbiIsImluY2x1ZGVzIiwiYXJlQW55TW9kZWxzVXBkYXRlZCIsInRhcmdldGVkTW9kZWxzIiwibW9kZWwiLCJSZXF1ZXN0QnVpbGRlcl9kZWZhdWx0IiwidXJsIiwiY3JlZGVudGlhbHMiLCJidWlsZFJlcXVlc3QiLCJ1cGRhdGVkIiwiY2hpbGRyZW4iLCJ1cGRhdGVkUHJvcHNGcm9tUGFyZW50IiwiZmlsZXMiLCJzcGxpdFVybCIsInNwbGl0IiwiX3NwbGl0VXJsIiwiX3NwbGl0VXJsMiIsInF1ZXJ5U3RyaW5nIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiZmV0Y2hPcHRpb25zIiwiaGVhZGVycyIsIkFjY2VwdCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzZWFyY2giLCJ0b3RhbEZpbGVzIiwiZW50cmllcyIsInJlZHVjZSIsInRvdGFsIiwiY3VycmVudCIsImhhc0ZpbmdlcnByaW50cyIsIndpbGxEYXRhRml0SW5VcmwiLCJKU09OIiwic3RyaW5naWZ5Iiwic2V0IiwicmVxdWVzdERhdGEiLCJwcm9wc0Zyb21QYXJlbnQiLCJjb25jYXQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiX2kyIiwiX09iamVjdCRlbnRyaWVzIiwiX09iamVjdCRlbnRyaWVzJF9pIiwiYm9keSIsInBhcmFtc1N0cmluZyIsInByb3BzSnNvbiIsInVwZGF0ZWRKc29uIiwiY2hpbGRyZW5Kc29uIiwicHJvcHNGcm9tUGFyZW50SnNvbiIsIkJhY2tlbmRfZGVmYXVsdCIsInJlcXVlc3RCdWlsZGVyIiwibWFrZVJlcXVlc3QiLCJfdGhpcyRyZXF1ZXN0QnVpbGRlciQiLCJmZXRjaCIsIm1hcCIsImJhY2tlbmRBY3Rpb24iLCJCYWNrZW5kUmVzcG9uc2VfZGVmYXVsdCIsIl9nZXRCb2R5IiwiX2NhbGxlZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJ0ZXh0IiwiZ2V0Qm9keSIsImdldExpdmVVcmwiLCJsaXZlVXJsIiwiZ2V0IiwiZ2V0RWxlbWVudEFzVGFnVGV4dCIsImlubmVySFRNTCIsIm91dGVySFRNTCIsImluZGV4T2YiLCJjb21wb25lbnRNYXBCeUVsZW1lbnQiLCJXZWFrTWFwIiwiY29tcG9uZW50TWFwQnlDb21wb25lbnQiLCJNYXAiLCJyZWdpc3RlckNvbXBvbmVudCIsImNvbXBvbmVudCIsInVucmVnaXN0ZXJDb21wb25lbnQiLCJnZXRDb21wb25lbnQiLCJjb3VudCIsIm1heENvdW50IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJmaW5kQ29tcG9uZW50cyIsImN1cnJlbnRDb21wb25lbnQiLCJvbmx5UGFyZW50cyIsIm9ubHlNYXRjaE5hbWUiLCJjb21wb25lbnRzIiwiY29tcG9uZW50TmFtZSIsImNvbnRhaW5zIiwiZmluZENoaWxkcmVuIiwiZm91bmRDaGlsZENvbXBvbmVudCIsImNoaWxkQ29tcG9uZW50TmFtZSIsImNoaWxkQ29tcG9uZW50IiwiZmluZFBhcmVudCIsInBhcmVudEVsZW1lbnQiLCJwYXJzZURpcmVjdGl2ZXMiLCJjb250ZW50IiwiZGlyZWN0aXZlcyIsImN1cnJlbnRBY3Rpb25OYW1lIiwiY3VycmVudEFyZ3VtZW50VmFsdWUiLCJjdXJyZW50QXJndW1lbnRzIiwiY3VycmVudE1vZGlmaWVycyIsImdldExhc3RBY3Rpb25OYW1lIiwicHVzaEluc3RydWN0aW9uIiwibW9kaWZpZXJzIiwiZ2V0U3RyaW5nIiwicHVzaEFyZ3VtZW50IiwidHJpbSIsInB1c2hNb2RpZmllciIsImNoYXIiLCJjb21iaW5lU3BhY2VkQXJyYXkiLCJwYXJ0cyIsImZpbmFsUGFydHMiLCJwYXJ0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwidHJpbUFsbCIsInN0ciIsInJlcGxhY2UiLCJub3JtYWxpemVNb2RlbE5hbWUiLCJzIiwiam9pbiIsImdldFZhbHVlRnJvbUVsZW1lbnQiLCJ2YWx1ZVN0b3JlIiwiSFRNTElucHV0RWxlbWVudCIsIm1vZGVsTmFtZURhdGEiLCJnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50IiwibW9kZWxWYWx1ZSIsImdldE11bHRpcGxlQ2hlY2tib3hWYWx1ZSIsImhhc0F0dHJpYnV0ZSIsImNoZWNrZWQiLCJpbnB1dFZhbHVlIiwiSFRNTFNlbGVjdEVsZW1lbnQiLCJtdWx0aXBsZSIsInNlbGVjdGVkT3B0aW9ucyIsImVsIiwiZGF0YXNldCIsInNldFZhbHVlT25FbGVtZW50Iiwic29tZSIsImFycmF5V3JhcHBlZFZhbHVlIiwib3B0aW9ucyIsIm9wdGlvbiIsInNlbGVjdGVkIiwiZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHMiLCJkaXJlY3RpdmUiLCJ0aHJvd09uTWlzc2luZyIsImRhdGFNb2RlbERpcmVjdGl2ZXMiLCJmb3JtRWxlbWVudCIsImNsb3Nlc3QiLCJlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudCIsImNsb25lSFRNTEVsZW1lbnQiLCJuZXdFbGVtZW50IiwiY2xvbmVOb2RlIiwiSFRNTEVsZW1lbnQiLCJodG1sVG9FbGVtZW50IiwiaHRtbCIsInRlbXBsYXRlIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkRWxlbWVudENvdW50IiwiY2hpbGQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImN1cnJlbnRWYWx1ZXMiLCJmaW5hbFZhbHVlcyIsImluZGV4Iiwic3BsaWNlIiwiaXNUZXh0dWFsSW5wdXRFbGVtZW50IiwiaXNUZXh0YXJlYUVsZW1lbnQiLCJIVE1MVGV4dEFyZWFFbGVtZW50IiwiaXNOdW1lcmljYWxJbnB1dEVsZW1lbnQiLCJIb29rTWFuYWdlcl9kZWZhdWx0IiwiaG9va3MiLCJyZWdpc3RlciIsImhvb2tOYW1lIiwiY2FsbGJhY2siLCJ1bnJlZ2lzdGVyIiwidHJpZ2dlckhvb2siLCJfbGVuIiwiX2tleSIsIklkaW9tb3JwaCIsIkVNUFRZX1NFVCIsIlNldCIsImRlZmF1bHRzIiwibW9ycGhTdHlsZSIsImNhbGxiYWNrcyIsImJlZm9yZU5vZGVBZGRlZCIsIm5vT3AiLCJhZnRlck5vZGVBZGRlZCIsImJlZm9yZU5vZGVNb3JwaGVkIiwiYWZ0ZXJOb2RlTW9ycGhlZCIsImJlZm9yZU5vZGVSZW1vdmVkIiwiYWZ0ZXJOb2RlUmVtb3ZlZCIsImJlZm9yZUF0dHJpYnV0ZVVwZGF0ZWQiLCJoZWFkIiwic3R5bGUiLCJzaG91bGRQcmVzZXJ2ZSIsImVsdCIsInNob3VsZFJlQXBwZW5kIiwic2hvdWxkUmVtb3ZlIiwiYWZ0ZXJIZWFkTW9ycGhlZCIsIm1vcnBoIiwib2xkTm9kZSIsIm5ld0NvbnRlbnQiLCJjb25maWciLCJEb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInBhcnNlQ29udGVudCIsIm5vcm1hbGl6ZWRDb250ZW50Iiwibm9ybWFsaXplQ29udGVudCIsImN0eCIsImNyZWF0ZU1vcnBoQ29udGV4dCIsIm1vcnBoTm9ybWFsaXplZENvbnRlbnQiLCJub3JtYWxpemVkTmV3Q29udGVudCIsImJsb2NrIiwib2xkSGVhZCIsInF1ZXJ5U2VsZWN0b3IiLCJuZXdIZWFkIiwicHJvbWlzZXMiLCJoYW5kbGVIZWFkRWxlbWVudCIsImFsbCIsImFzc2lnbiIsImlnbm9yZSIsIm1vcnBoQ2hpbGRyZW4iLCJiZXN0TWF0Y2giLCJmaW5kQmVzdE5vZGVNYXRjaCIsInByZXZpb3VzU2libGluZyIsIm5leHRTaWJsaW5nIiwibW9ycGhlZE5vZGUiLCJtb3JwaE9sZE5vZGVUbyIsImluc2VydFNpYmxpbmdzIiwiaWdub3JlVmFsdWVPZkFjdGl2ZUVsZW1lbnQiLCJwb3NzaWJsZUFjdGl2ZUVsZW1lbnQiLCJpZ25vcmVBY3RpdmVWYWx1ZSIsImFjdGl2ZUVsZW1lbnQiLCJpZ25vcmVBY3RpdmUiLCJyZW1vdmUiLCJpc1NvZnRNYXRjaCIsInJlcGxhY2VDaGlsZCIsIkhUTUxIZWFkRWxlbWVudCIsInN5bmNOb2RlRnJvbSIsIm5ld1BhcmVudCIsIm9sZFBhcmVudCIsIm5leHROZXdDaGlsZCIsImZpcnN0Q2hpbGQiLCJpbnNlcnRpb25Qb2ludCIsIm5ld0NoaWxkIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVJZHNGcm9tQ29uc2lkZXJhdGlvbiIsImlzSWRTZXRNYXRjaCIsImlkU2V0TWF0Y2giLCJmaW5kSWRTZXRNYXRjaCIsInJlbW92ZU5vZGVzQmV0d2VlbiIsInNvZnRNYXRjaCIsImZpbmRTb2Z0TWF0Y2giLCJpbnNlcnRCZWZvcmUiLCJ0ZW1wTm9kZSIsInJlbW92ZU5vZGUiLCJpZ25vcmVBdHRyaWJ1dGUiLCJhdHRyIiwidG8iLCJ1cGRhdGVUeXBlIiwibm9kZVR5cGUiLCJmcm9tQXR0cmlidXRlcyIsImF0dHJpYnV0ZXMiLCJ0b0F0dHJpYnV0ZXMiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwiZnJvbUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImYiLCJ0b0F0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsIm5vZGVWYWx1ZSIsInN5bmNJbnB1dFZhbHVlIiwic3luY0Jvb2xlYW5BdHRyaWJ1dGUiLCJhdHRyaWJ1dGVOYW1lIiwiaWdub3JlVXBkYXRlIiwiZnJvbVZhbHVlIiwidG9WYWx1ZSIsIkhUTUxPcHRpb25FbGVtZW50IiwibmV3SGVhZFRhZyIsImN1cnJlbnRIZWFkIiwiYWRkZWQiLCJyZW1vdmVkIiwicHJlc2VydmVkIiwibm9kZXNUb0FwcGVuZCIsImhlYWRNZXJnZVN0eWxlIiwic3JjVG9OZXdIZWFkTm9kZXMiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwibmV3SGVhZENoaWxkIiwiX2l0ZXJhdG9yMyIsIl9zdGVwMyIsImN1cnJlbnRIZWFkRWx0IiwiaW5OZXdDb250ZW50IiwiaGFzIiwiaXNSZUFwcGVuZGVkIiwiaXNQcmVzZXJ2ZWQiLCJsb2ciLCJfbG9vcCIsIm5ld05vZGUiLCJfbm9kZXNUb0FwcGVuZCIsIl9pMyIsIm5ld0VsdCIsImNyZWF0ZVJhbmdlIiwiY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50IiwiaHJlZiIsInNyYyIsIl9yZXNvbHZlIiwiX2k0IiwiX3JlbW92ZWQiLCJyZW1vdmVkRWxlbWVudCIsInJlbW92ZUNoaWxkIiwia2VwdCIsIm1lcmdlRGVmYXVsdHMiLCJmaW5hbENvbmZpZyIsImlkTWFwIiwiY3JlYXRlSWRNYXAiLCJkZWFkSWRzIiwibm9kZTEiLCJub2RlMiIsInRhZ05hbWUiLCJnZXRJZEludGVyc2VjdGlvbkNvdW50Iiwic3RhcnRJbmNsdXNpdmUiLCJlbmRFeGNsdXNpdmUiLCJuZXdDaGlsZFBvdGVudGlhbElkQ291bnQiLCJwb3RlbnRpYWxNYXRjaCIsIm90aGVyTWF0Y2hDb3VudCIsInBvdGVudGlhbFNvZnRNYXRjaCIsInNpYmxpbmdTb2Z0TWF0Y2hDb3VudCIsInBhcnNlciIsIkRPTVBhcnNlciIsImNvbnRlbnRXaXRoU3Znc1JlbW92ZWQiLCJtYXRjaCIsInBhcnNlRnJvbVN0cmluZyIsImdlbmVyYXRlZEJ5SWRpb21vcnBoIiwiaHRtbEVsZW1lbnQiLCJOb2RlIiwiZHVtbXlQYXJlbnQiLCJfaTUiLCJfYXJyMiIsInN0YWNrIiwibm9kZSIsImN1cnJlbnRFbGVtZW50IiwiYmVzdEVsZW1lbnQiLCJzY29yZSIsIm5ld1Njb3JlIiwic2NvcmVFbGVtZW50IiwiaXNJZEluQ29uc2lkZXJhdGlvbiIsImlkSXNXaXRoaW5Ob2RlIiwidGFyZ2V0Tm9kZSIsImlkU2V0IiwiX2l0ZXJhdG9yNCIsIl9zdGVwNCIsImFkZCIsInNvdXJjZVNldCIsIm1hdGNoQ291bnQiLCJfaXRlcmF0b3I1IiwiX3N0ZXA1IiwicG9wdWxhdGVJZE1hcEZvck5vZGUiLCJub2RlUGFyZW50IiwiaWRFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfaXRlcmF0b3I2IiwiX3N0ZXA2Iiwib2xkQ29udGVudCIsIm5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uIiwic3luY0F0dHJpYnV0ZXMiLCJmcm9tRWwiLCJ0b0VsIiwiZXhlY3V0ZU1vcnBoZG9tIiwicm9vdEZyb21FbGVtZW50Iiwicm9vdFRvRWxlbWVudCIsIm1vZGlmaWVkRmllbGRFbGVtZW50cyIsImdldEVsZW1lbnRWYWx1ZSIsImV4dGVybmFsTXV0YXRpb25UcmFja2VyIiwib3JpZ2luYWxFbGVtZW50SWRzVG9Td2FwQWZ0ZXIiLCJvcmlnaW5hbEVsZW1lbnRzVG9QcmVzZXJ2ZSIsIm1hcmtFbGVtZW50QXNOZWVkaW5nUG9zdE1vcnBoU3dhcCIsInJlcGxhY2VXaXRoQ2xvbmUiLCJvbGRFbGVtZW50IiwiY2xvbmVkT2xkRWxlbWVudCIsInJlcGxhY2VXaXRoIiwiX2Zyb21FbCRwYXJlbnRFbGVtZW50IiwiRWxlbWVudCIsImNsb25lZEZyb21FbCIsIl9feCIsIndhc0VsZW1lbnRBZGRlZCIsImluc2VydEFkamFjZW50RWxlbWVudCIsImVsZW1lbnRDaGFuZ2VzIiwiZ2V0Q2hhbmdlZEVsZW1lbnQiLCJhcHBseVRvRWxlbWVudCIsIm5vZGVOYW1lIiwidG9VcHBlckNhc2UiLCJpc0VxdWFsTm9kZSIsIm5vcm1hbGl6ZWRGcm9tRWwiLCJub3JtYWxpemVkVG9FbCIsIm9yaWdpbmFsRWxlbWVudCIsIkNoYW5naW5nSXRlbXNUcmFja2VyX2RlZmF1bHQiLCJjaGFuZ2VkSXRlbXMiLCJyZW1vdmVkSXRlbXMiLCJzZXRJdGVtIiwiaXRlbU5hbWUiLCJuZXdWYWx1ZSIsInByZXZpb3VzVmFsdWUiLCJyZW1vdmVkUmVjb3JkIiwib3JpZ2luYWwiLCJvcmlnaW5hbFJlY29yZCIsInJlbW92ZUl0ZW0iLCJjdXJyZW50VmFsdWUiLCJ0cnVlT3JpZ2luYWxWYWx1ZSIsImdldENoYW5nZWRJdGVtcyIsIl9yZWYiLCJfcmVmMiIsImdldFJlbW92ZWRJdGVtcyIsImlzRW1wdHkiLCJzaXplIiwiRWxlbWVudENoYW5nZXMiLCJhZGRlZENsYXNzZXMiLCJyZW1vdmVkQ2xhc3NlcyIsInN0eWxlQ2hhbmdlcyIsImF0dHJpYnV0ZUNoYW5nZXMiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiYWRkU3R5bGUiLCJzdHlsZU5hbWUiLCJvcmlnaW5hbFZhbHVlIiwicmVtb3ZlU3R5bGUiLCJhZGRBdHRyaWJ1dGUiLCJnZXRBZGRlZENsYXNzZXMiLCJnZXRSZW1vdmVkQ2xhc3NlcyIsImdldENoYW5nZWRTdHlsZXMiLCJnZXRSZW1vdmVkU3R5bGVzIiwiZ2V0Q2hhbmdlZEF0dHJpYnV0ZXMiLCJnZXRSZW1vdmVkQXR0cmlidXRlcyIsIl9lbGVtZW50JGNsYXNzTGlzdCIsIl9lbGVtZW50JGNsYXNzTGlzdDIiLCJjaGFuZ2UiLCJzZXRQcm9wZXJ0eSIsInJlbW92ZVByb3BlcnR5IiwiRXh0ZXJuYWxNdXRhdGlvblRyYWNrZXJfZGVmYXVsdCIsInNob3VsZFRyYWNrQ2hhbmdlQ2FsbGJhY2siLCJjaGFuZ2VkRWxlbWVudHMiLCJjaGFuZ2VkRWxlbWVudHNDb3VudCIsImFkZGVkRWxlbWVudHMiLCJyZW1vdmVkRWxlbWVudHMiLCJpc1N0YXJ0ZWQiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm9uTXV0YXRpb25zIiwiYmluZCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiYXR0cmlidXRlT2xkVmFsdWUiLCJkaXNjb25uZWN0IiwiZ2V0QWRkZWRFbGVtZW50cyIsImhhbmRsZVBlbmRpbmdDaGFuZ2VzIiwidGFrZVJlY29yZHMiLCJtdXRhdGlvbnMiLCJoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zIiwiX2l0ZXJhdG9yNyIsIl9zdGVwNyIsIm11dGF0aW9uIiwiaXNFbGVtZW50QWRkZWRCeVRyYW5zbGF0aW9uIiwiaXNDaGFuZ2VJbkFkZGVkRWxlbWVudCIsIl9pdGVyYXRvcjgiLCJfc3RlcDgiLCJhZGRlZEVsZW1lbnQiLCJoYW5kbGVDaGlsZExpc3RNdXRhdGlvbiIsImhhbmRsZUF0dHJpYnV0ZU11dGF0aW9uIiwiX3RoaXMyIiwiYWRkZWROb2RlcyIsInJlbW92ZWROb2RlcyIsImNoYW5nZWRFbGVtZW50IiwiaGFuZGxlQ2xhc3NBdHRyaWJ1dGVNdXRhdGlvbiIsImhhbmRsZVN0eWxlQXR0cmlidXRlTXV0YXRpb24iLCJoYW5kbGVHZW5lcmljQXR0cmlidXRlTXV0YXRpb24iLCJwcmV2aW91c1ZhbHVlcyIsIm9sZFZhbHVlIiwibmV3VmFsdWVzIiwiYWRkZWRWYWx1ZXMiLCJyZW1vdmVkVmFsdWVzIiwicHJldmlvdXNTdHlsZXMiLCJleHRyYWN0U3R5bGVzIiwibmV3U3R5bGVzIiwiYWRkZWRPckNoYW5nZWRTdHlsZXMiLCJyZW1vdmVkU3R5bGVzIiwic3R5bGVzIiwic3R5bGVPYmplY3QiLCJwcm9wZXJ0eSIsIlVuc3luY2VkSW5wdXRzVHJhY2tlcl9kZWZhdWx0IiwibW9kZWxFbGVtZW50UmVzb2x2ZXIiLCJfdGhpczMiLCJlbGVtZW50RXZlbnRMaXN0ZW5lcnMiLCJldmVudCIsImhhbmRsZUlucHV0RXZlbnQiLCJ1bnN5bmNlZElucHV0cyIsIlVuc3luY2VkSW5wdXRDb250YWluZXIiLCJhY3RpdmF0ZSIsIl90aGlzNCIsIl9yZWYzIiwiZGVhY3RpdmF0ZSIsIl90aGlzNSIsIl9yZWY0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1hcmtNb2RlbEFzU3luY2VkIiwibW9kZWxOYW1lIiwidXBkYXRlTW9kZWxGcm9tRWxlbWVudCIsImdldE1vZGVsTmFtZSIsImdldFVuc3luY2VkSW5wdXRzIiwiYWxsVW5zeW5jZWRJbnB1dHMiLCJnZXRVbnN5bmNlZE1vZGVscyIsImdldFVuc3luY2VkTW9kZWxOYW1lcyIsInJlc2V0VW5zeW5jZWRGaWVsZHMiLCJ1bnN5bmNlZE5vbk1vZGVsRmllbGRzIiwidW5zeW5jZWRNb2RlbE5hbWVzIiwidW5zeW5jZWRNb2RlbEZpZWxkcyIsIl90aGlzNiIsImdldERlZXBEYXRhIiwicHJvcGVydHlQYXRoIiwiX3BhcnNlRGVlcERhdGEiLCJwYXJzZURlZXBEYXRhIiwiY3VycmVudExldmVsRGF0YSIsImZpbmFsS2V5IiwiZmluYWxEYXRhIiwicGFyc2UiLCJWYWx1ZVN0b3JlX2RlZmF1bHQiLCJkaXJ0eVByb3BzIiwicGVuZGluZ1Byb3BzIiwibm9ybWFsaXplZE5hbWUiLCJnZXRPcmlnaW5hbFByb3BzIiwiX29iamVjdFNwcmVhZCIsImdldERpcnR5UHJvcHMiLCJnZXRVcGRhdGVkUHJvcHNGcm9tUGFyZW50IiwiZmx1c2hEaXJ0eVByb3BzVG9QZW5kaW5nIiwicmVpbml0aWFsaXplQWxsUHJvcHMiLCJwdXNoUGVuZGluZ1Byb3BzQmFja1RvRGlydHkiLCJzdG9yZU5ld1Byb3BzRnJvbVBhcmVudCIsImNoYW5nZWQiLCJfaTYiLCJfT2JqZWN0JGVudHJpZXMyIiwiX09iamVjdCRlbnRyaWVzMiRfaSIsIkNvbXBvbmVudCIsImxpc3RlbmVycyIsImJhY2tlbmQiLCJlbGVtZW50RHJpdmVyIiwiX3RoaXM3IiwiZmluZ2VycHJpbnQiLCJkZWZhdWx0RGVib3VuY2UiLCJiYWNrZW5kUmVxdWVzdCIsInBlbmRpbmdBY3Rpb25zIiwicGVuZGluZ0ZpbGVzIiwiaXNSZXF1ZXN0UGVuZGluZyIsInJlcXVlc3REZWJvdW5jZVRpbWVvdXQiLCJsaXN0ZW5lciIsIl90aGlzNyRsaXN0ZW5lcnMkZ2V0IiwidW5zeW5jZWRJbnB1dHNUcmFja2VyIiwicmVzZXRQcm9taXNlIiwiYWRkUGx1Z2luIiwicGx1Z2luIiwiYXR0YWNoVG9Db21wb25lbnQiLCJjbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQiLCJvbiIsIm9mZiIsInJlUmVuZGVyIiwiZGVib3VuY2UiLCJuZXh0UmVxdWVzdFByb21pc2UiLCJpc0NoYW5nZWQiLCJkZWJvdW5jZWRTdGFydFJlcXVlc3QiLCJnZXREYXRhIiwicmVuZGVyIiwidHJ5U3RhcnRpbmdSZXF1ZXN0IiwiZW1pdCIsIm9ubHlNYXRjaGluZ0NvbXBvbmVudHNOYW1lZCIsInBlcmZvcm1FbWl0IiwiZW1pdFVwIiwiZW1pdFNlbGYiLCJkb0VtaXQiLCJtYXRjaGluZ05hbWUiLCJfdGhpczgiLCJpc1R1cmJvRW5hYmxlZCIsIlR1cmJvIiwicGVyZm9ybVJlcXVlc3QiLCJfdGhpczkiLCJ0aGlzUHJvbWlzZVJlc29sdmUiLCJuZXh0UmVxdWVzdFByb21pc2VSZXNvbHZlIiwiZmlsZXNUb1NlbmQiLCJfaTciLCJfT2JqZWN0JGVudHJpZXMzIiwiX09iamVjdCRlbnRyaWVzMyRfaSIsInJlcXVlc3RDb25maWciLCJfcmVmNSIsIl9jYWxsZWUyIiwiX2hlYWRlcnMkZ2V0IiwiYmFja2VuZFJlc3BvbnNlIiwiX2k4IiwiX09iamVjdCR2YWx1ZXMiLCJjb250cm9scyIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImRpc3BsYXlFcnJvciIsInJlbmRlckVycm9yIiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsIlVSTCIsImhhc2giLCJvcmlnaW4iLCJwcm9jZXNzUmVyZW5kZXIiLCJfeDIiLCJfdGhpczEwIiwic2hvdWxkUmVuZGVyIiwidmlzaXQiLCJtb2RpZmllZE1vZGVsVmFsdWVzIiwibWF0Y2hlcyIsIm5ld1Byb3BzIiwiZ2V0Q29tcG9uZW50UHJvcHMiLCJldmVudHNUb0VtaXQiLCJnZXRFdmVudHNUb0VtaXQiLCJicm93c2VyRXZlbnRzVG9EaXNwYXRjaCIsImdldEJyb3dzZXJFdmVudHNUb0Rpc3BhdGNoIiwiX3JlZjYiLCJfcmVmNyIsInBheWxvYWQiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJidWJibGVzIiwiY2FsY3VsYXRlRGVib3VuY2UiLCJjbGVhclRpbWVvdXQiLCJfdGhpczExIiwibW9kYWwiLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4IiwicG9zaXRpb24iLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImlmcmFtZSIsImJvcmRlclJhZGl1cyIsImZsZXhHcm93IiwicHJlcGVuZCIsIm92ZXJmbG93IiwiY29udGVudFdpbmRvdyIsIm9wZW4iLCJ3cml0ZSIsImNsb3NlIiwiY2xvc2VNb2RhbCIsImZvY3VzIiwiX3RoaXMxMiIsIl91cGRhdGVGcm9tUGFyZW50UHJvcHMiLCJwcm94aWZ5Q29tcG9uZW50IiwiUHJveHkiLCJwcm9wIiwiY2FsbGFibGUiLCJfbGVuMiIsIl9rZXkyIiwiUmVmbGVjdCIsIlN0aW11bHVzRWxlbWVudERyaXZlciIsImNvbnRyb2xsZXIiLCJtb2RlbERpcmVjdGl2ZSIsInByb3BzVmFsdWUiLCJldmVudHNUb0VtaXRWYWx1ZSIsImV2ZW50c1RvRGlzcGF0Y2hWYWx1ZSIsImdldF9tb2RlbF9iaW5kaW5nX2RlZmF1bHQiLCJ0YXJnZXRFdmVudE5hbWUiLCJtaW5MZW5ndGgiLCJtYXhMZW5ndGgiLCJtaW5WYWx1ZSIsIm1heFZhbHVlIiwibW9kaWZpZXIiLCJwYXJzZUZsb2F0IiwiX21vZGVsRGlyZWN0aXZlJGFjdGlvIiwiX21vZGVsRGlyZWN0aXZlJGFjdGlvMiIsImlubmVyTW9kZWxOYW1lIiwiQ2hpbGRDb21wb25lbnRQbHVnaW5fZGVmYXVsdCIsInBhcmVudE1vZGVsQmluZGluZ3MiLCJfdGhpczEzIiwiZ2V0Q2hpbGRyZW5GaW5nZXJwcmludHMiLCJub3RpZnlQYXJlbnRNb2RlbENoYW5nZSIsImZpbmdlcnByaW50cyIsImdldENoaWxkcmVuIiwidGFnIiwidG9Mb3dlckNhc2UiLCJwYXJlbnRDb21wb25lbnQiLCJtb2RlbEJpbmRpbmciLCJMYXp5UGx1Z2luX2RlZmF1bHQiLCJpbnRlcnNlY3Rpb25PYnNlcnZlciIsIl9jb21wb25lbnQkZWxlbWVudCRhdCIsIl90aGlzMTQiLCJnZXROYW1lZEl0ZW0iLCJnZXRPYnNlcnZlciIsIl90aGlzMTQkaW50ZXJzZWN0aW9uTyIsInVub2JzZXJ2ZSIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZXIiLCJpc0ludGVyc2VjdGluZyIsIkxvYWRpbmdQbHVnaW5fZGVmYXVsdCIsIl90aGlzMTUiLCJyZXF1ZXN0Iiwic3RhcnRMb2FkaW5nIiwiZmluaXNoTG9hZGluZyIsInRhcmdldEVsZW1lbnQiLCJoYW5kbGVMb2FkaW5nVG9nZ2xlIiwiaXNMb2FkaW5nIiwiX3RoaXMxNiIsImFkZEF0dHJpYnV0ZXMiLCJyZW1vdmVBdHRyaWJ1dGVzIiwiZ2V0TG9hZGluZ0RpcmVjdGl2ZXMiLCJfcmVmOCIsImhhbmRsZUxvYWRpbmdEaXJlY3RpdmUiLCJfdGhpczE3IiwiZmluYWxBY3Rpb24iLCJwYXJzZUxvYWRpbmdBY3Rpb24iLCJkZWxheSIsInZhbGlkTW9kaWZpZXJzIiwiX3ZhbGlkTW9kaWZpZXJzJGdldCIsImxvYWRpbmdEaXJlY3RpdmUiLCJzaG93RWxlbWVudCIsImhpZGVFbGVtZW50IiwibG9hZGluZ0RpcmVjdGl2ZXMiLCJtYXRjaGluZ0VsZW1lbnRzIiwiU1ZHRWxlbWVudCIsImxvYWRpbmciLCJjbGFzc2VzIiwiX2VsZW1lbnQkY2xhc3NMaXN0MyIsIl9lbGVtZW50JGNsYXNzTGlzdDQiLCJhdHRyaWJ1dGUiLCJQYWdlVW5sb2FkaW5nUGx1Z2luX2RlZmF1bHQiLCJpc0Nvbm5lY3RlZCIsIl90aGlzMTgiLCJQb2xsaW5nRGlyZWN0b3JfZGVmYXVsdCIsImlzUG9sbGluZ0FjdGl2ZSIsInBvbGxpbmdJbnRlcnZhbHMiLCJhZGRQb2xsIiwiYWN0aW9uTmFtZSIsImR1cmF0aW9uIiwicG9sbHMiLCJpbml0aWF0ZVBvbGwiLCJzdGFydEFsbFBvbGxpbmciLCJfdGhpczE5IiwiX3JlZjkiLCJzdG9wQWxsUG9sbGluZyIsImNsZWFyUG9sbGluZyIsIl90aGlzMjAiLCJ0aW1lciIsIlBvbGxpbmdQbHVnaW5fZGVmYXVsdCIsIl90aGlzMjEiLCJwb2xsaW5nRGlyZWN0b3IiLCJpbml0aWFsaXplUG9sbGluZyIsIl90aGlzMjIiLCJwb2xsIiwicmF3UG9sbENvbmZpZyIsIndhcm4iLCJTZXRWYWx1ZU9udG9Nb2RlbEZpZWxkc1BsdWdpbl9kZWZhdWx0IiwiX3RoaXMyMyIsInN5bmNocm9uaXplVmFsdWVPZk1vZGVsRmllbGRzIiwiSFRNTEZvcm1FbGVtZW50IiwiVmFsaWRhdGVkRmllbGRzUGx1Z2luX2RlZmF1bHQiLCJfdGhpczI0IiwiaGFuZGxlTW9kZWxTZXQiLCJ2YWxpZGF0ZWRGaWVsZHMiLCJMaXZlQ29udHJvbGxlckRlZmF1bHQiLCJfdGhpczI1IiwiX2xlbjMiLCJfYXJncyIsIl9rZXkzIiwicGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQiLCJoYW5kbGVDaGFuZ2VFdmVudCIsImluaXRpYWxpemUiLCJjcmVhdGVDb21wb25lbnQiLCJjb25uZWN0Q29tcG9uZW50IiwiZGlzY29ubmVjdENvbXBvbmVudCIsInVwZGF0ZSIsImN1cnJlbnRUYXJnZXQiLCJ1cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQiLCJfdGhpczI2IiwicmF3QWN0aW9uIiwiYWN0aW9uQXJncyIsInN0b3BQcm9wYWdhdGlvbiIsIl92YWxpZE1vZGlmaWVycyRnZXQyIiwiX2k5IiwiX09iamVjdCRlbnRyaWVzNCIsIl9PYmplY3QkZW50cmllczQkX2kiLCIkcmVuZGVyIiwiX3RoaXMyNyIsImdldEVtaXREaXJlY3RpdmVzIiwiX3JlZjEwIiwibmFtZU1hdGNoIiwiX3RoaXMyOCIsIl9yZWYxMSIsIl90aGlzMjkiLCJfcmVmMTIiLCIkdXBkYXRlTW9kZWwiLCJwcm9wc1VwZGF0ZWRGcm9tUGFyZW50VmFsdWVDaGFuZ2VkIiwicHJvcHNVcGRhdGVkRnJvbVBhcmVudFZhbHVlIiwiZmluZ2VycHJpbnRWYWx1ZUNoYW5nZWQiLCJmaW5nZXJwcmludFZhbHVlIiwiZXZlbnRJbmZvIiwiZXZlbnRBcmdzIiwiZW1pdHMiLCJfdGhpczMwIiwibmFtZVZhbHVlIiwibGlzdGVuZXJzVmFsdWUiLCJiYWNrZW5kRmFjdG9yeSIsInByb3hpZWRDb21wb25lbnQiLCJoYXNEZWJvdW5jZVZhbHVlIiwiZGVib3VuY2VWYWx1ZSIsIl90aGlzMzEiLCJfcmVmMTMiLCJfdGhpczMyIiwiX3JlZjE0IiwiZXZlbnROYW1lIiwiX2VsZW1lbnQkZmlsZXMiLCJmaW5hbFZhbHVlIiwiZmluYWxWYWx1ZUlzRW1wdHkiLCJudW1lcmljVmFsdWUiLCJjYW5CdWJibGUiLCJjYW5jZWxhYmxlIiwiZGlzcGF0Y2giLCJwcmVmaXgiLCJfdGhpczMzIiwicHJvcHNVcGRhdGVkRnJvbVBhcmVudCIsImV2ZW50c1RvRGlzcGF0Y2giLCJyZXF1ZXN0TWV0aG9kIiwiZmV0Y2hDcmVkZW50aWFscyIsInVybFZhbHVlIiwicmVxdWVzdE1ldGhvZFZhbHVlIiwiZmV0Y2hDcmVkZW50aWFsc1ZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==