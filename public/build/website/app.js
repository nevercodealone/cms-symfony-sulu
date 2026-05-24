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
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/app.css */ "./assets/website/styles/app.css");
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bootstrap.js */ "./assets/website/bootstrap.js");
/* harmony import */ var flowbite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flowbite */ "./node_modules/flowbite/lib/esm/index.js");
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/module.esm.js");





window.Alpine = alpinejs__WEBPACK_IMPORTED_MODULE_4__["default"];
alpinejs__WEBPACK_IMPORTED_MODULE_4__["default"].data("clipboardBlock", function () {
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
alpinejs__WEBPACK_IMPORTED_MODULE_4__["default"].start();

// Initialize Flowbite carousels after Alpine.js
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    (0,flowbite__WEBPACK_IMPORTED_MODULE_3__.initCarousels)();
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-8c6c2e","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_alpinejs_dist_module_-26f4fb","assets_website_styles_app_css-node_modules_flowbite_src_themes_default_css"], () => (__webpack_exec__("./assets/website/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3dlYnNpdGUvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvd2Vic2l0ZS9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy93ZWJzaXRlL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvd2Vic2l0ZS9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3dlYnNpdGUvc3R5bGVzL2FwcC5jc3M/YTM5MSIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1saXZlLWNvbXBvbmVudC9hc3NldHMvZGlzdC9saXZlX2NvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy93ZWJzaXRlL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvd2Vic2l0ZS9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImltcG9ydCBjb250cm9sbGVyXzAgZnJvbSAnQHN5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvZGlzdC9saXZlX2NvbnRyb2xsZXIuanMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICAnbGl2ZSc6IGNvbnRyb2xsZXJfMCxcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiaW1wb3J0IFwiLi9zdHlsZXMvYXBwLmNzc1wiO1xuaW1wb3J0ICcuL2Jvb3RzdHJhcC5qcyc7XG5pbXBvcnQgeyBpbml0Q2Fyb3VzZWxzIH0gZnJvbSAnZmxvd2JpdGUnO1xuaW1wb3J0IEFscGluZSBmcm9tIFwiYWxwaW5lanNcIjtcblxud2luZG93LkFscGluZSA9IEFscGluZTtcblxuQWxwaW5lLmRhdGEoXCJjbGlwYm9hcmRCbG9ja1wiLCAoKSA9PiAoe1xuICBjb3BpZWQ6IGZhbHNlLFxuICBjb3B5Q29kZSgpIHtcbiAgICBjb25zdCBjb2RlQmxvY2sgPSB0aGlzLiRyZWZzLmNvZGVCbG9jaztcbiAgICBjb25zdCBjb2RlVGV4dCA9IGNvZGVCbG9jay50ZXh0Q29udGVudDtcblxuICAgIG5hdmlnYXRvci5jbGlwYm9hcmRcbiAgICAgIC53cml0ZVRleHQoY29kZVRleHQpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuY29waWVkID0gdHJ1ZTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jb3BpZWQgPSBmYWxzZTtcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBjb3B5IHRleHQ6IFwiLCBlcnIpO1xuICAgICAgfSk7XG4gIH0sXG59KSk7XG5cbkFscGluZS5zdGFydCgpO1xuXG4vLyBJbml0aWFsaXplIEZsb3diaXRlIGNhcm91c2VscyBhZnRlciBBbHBpbmUuanNcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaW5pdENhcm91c2VscygpO1xuICB9LCAxMDApO1xufSk7XG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiQGhvdHdpcmVkL3N0aW11bHVzXCI7XG52YXIgQmFja2VuZFJlcXVlc3RfZGVmYXVsdCA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IocHJvbWlzZSwgYWN0aW9ucywgdXBkYXRlTW9kZWxzKSB7XG5cdFx0dGhpcy5pc1Jlc29sdmVkID0gZmFsc2U7XG5cdFx0dGhpcy5wcm9taXNlID0gcHJvbWlzZTtcblx0XHR0aGlzLnByb21pc2UudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRcdHRoaXMuaXNSZXNvbHZlZCA9IHRydWU7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2U7XG5cdFx0fSk7XG5cdFx0dGhpcy5hY3Rpb25zID0gYWN0aW9ucztcblx0XHR0aGlzLnVwZGF0ZWRNb2RlbHMgPSB1cGRhdGVNb2RlbHM7XG5cdH1cblx0Y29udGFpbnNPbmVPZkFjdGlvbnModGFyZ2V0ZWRBY3Rpb25zKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWN0aW9ucy5maWx0ZXIoKGFjdGlvbikgPT4gdGFyZ2V0ZWRBY3Rpb25zLmluY2x1ZGVzKGFjdGlvbikpLmxlbmd0aCA+IDA7XG5cdH1cblx0YXJlQW55TW9kZWxzVXBkYXRlZCh0YXJnZXRlZE1vZGVscykge1xuXHRcdHJldHVybiB0aGlzLnVwZGF0ZWRNb2RlbHMuZmlsdGVyKChtb2RlbCkgPT4gdGFyZ2V0ZWRNb2RlbHMuaW5jbHVkZXMobW9kZWwpKS5sZW5ndGggPiAwO1xuXHR9XG59O1xudmFyIFJlcXVlc3RCdWlsZGVyX2RlZmF1bHQgPSBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHVybCwgbWV0aG9kID0gXCJwb3N0XCIsIGNyZWRlbnRpYWxzID0gXCJzYW1lLW9yaWdpblwiKSB7XG5cdFx0dGhpcy51cmwgPSB1cmw7XG5cdFx0dGhpcy5tZXRob2QgPSBtZXRob2Q7XG5cdFx0dGhpcy5jcmVkZW50aWFscyA9IGNyZWRlbnRpYWxzO1xuXHR9XG5cdGJ1aWxkUmVxdWVzdChwcm9wcywgYWN0aW9ucywgdXBkYXRlZCwgY2hpbGRyZW4sIHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQsIGZpbGVzKSB7XG5cdFx0Y29uc3Qgc3BsaXRVcmwgPSB0aGlzLnVybC5zcGxpdChcIj9cIik7XG5cdFx0bGV0IFt1cmxdID0gc3BsaXRVcmw7XG5cdFx0Y29uc3QgWywgcXVlcnlTdHJpbmddID0gc3BsaXRVcmw7XG5cdFx0Y29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyB8fCBcIlwiKTtcblx0XHRjb25zdCBmZXRjaE9wdGlvbnMgPSB7fTtcblx0XHRmZXRjaE9wdGlvbnMuY3JlZGVudGlhbHMgPSB0aGlzLmNyZWRlbnRpYWxzO1xuXHRcdGZldGNoT3B0aW9ucy5oZWFkZXJzID0ge1xuXHRcdFx0QWNjZXB0OiBcImFwcGxpY2F0aW9uL3ZuZC5saXZlLWNvbXBvbmVudCtodG1sXCIsXG5cdFx0XHRcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiLFxuXHRcdFx0XCJYLUxpdmUtVXJsXCI6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2hcblx0XHR9O1xuXHRcdGNvbnN0IHRvdGFsRmlsZXMgPSBPYmplY3QuZW50cmllcyhmaWxlcykucmVkdWNlKCh0b3RhbCwgY3VycmVudCkgPT4gdG90YWwgKyBjdXJyZW50Lmxlbmd0aCwgMCk7XG5cdFx0Y29uc3QgaGFzRmluZ2VycHJpbnRzID0gT2JqZWN0LmtleXMoY2hpbGRyZW4pLmxlbmd0aCA+IDA7XG5cdFx0aWYgKGFjdGlvbnMubGVuZ3RoID09PSAwICYmIHRvdGFsRmlsZXMgPT09IDAgJiYgdGhpcy5tZXRob2QgPT09IFwiZ2V0XCIgJiYgdGhpcy53aWxsRGF0YUZpdEluVXJsKEpTT04uc3RyaW5naWZ5KHByb3BzKSwgSlNPTi5zdHJpbmdpZnkodXBkYXRlZCksIHBhcmFtcywgSlNPTi5zdHJpbmdpZnkoY2hpbGRyZW4pLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkUHJvcHNGcm9tUGFyZW50KSkpIHtcblx0XHRcdHBhcmFtcy5zZXQoXCJwcm9wc1wiLCBKU09OLnN0cmluZ2lmeShwcm9wcykpO1xuXHRcdFx0cGFyYW1zLnNldChcInVwZGF0ZWRcIiwgSlNPTi5zdHJpbmdpZnkodXBkYXRlZCkpO1xuXHRcdFx0aWYgKE9iamVjdC5rZXlzKHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQpLmxlbmd0aCA+IDApIHBhcmFtcy5zZXQoXCJwcm9wc0Zyb21QYXJlbnRcIiwgSlNPTi5zdHJpbmdpZnkodXBkYXRlZFByb3BzRnJvbVBhcmVudCkpO1xuXHRcdFx0aWYgKGhhc0ZpbmdlcnByaW50cykgcGFyYW1zLnNldChcImNoaWxkcmVuXCIsIEpTT04uc3RyaW5naWZ5KGNoaWxkcmVuKSk7XG5cdFx0XHRmZXRjaE9wdGlvbnMubWV0aG9kID0gXCJHRVRcIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZmV0Y2hPcHRpb25zLm1ldGhvZCA9IFwiUE9TVFwiO1xuXHRcdFx0Y29uc3QgcmVxdWVzdERhdGEgPSB7XG5cdFx0XHRcdHByb3BzLFxuXHRcdFx0XHR1cGRhdGVkXG5cdFx0XHR9O1xuXHRcdFx0aWYgKE9iamVjdC5rZXlzKHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQpLmxlbmd0aCA+IDApIHJlcXVlc3REYXRhLnByb3BzRnJvbVBhcmVudCA9IHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQ7XG5cdFx0XHRpZiAoaGFzRmluZ2VycHJpbnRzKSByZXF1ZXN0RGF0YS5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXHRcdFx0aWYgKGFjdGlvbnMubGVuZ3RoID4gMCkgaWYgKGFjdGlvbnMubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdHJlcXVlc3REYXRhLmFyZ3MgPSBhY3Rpb25zWzBdLmFyZ3M7XG5cdFx0XHRcdHVybCArPSBgLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGFjdGlvbnNbMF0ubmFtZSl9YDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHVybCArPSBcIi9fYmF0Y2hcIjtcblx0XHRcdFx0cmVxdWVzdERhdGEuYWN0aW9ucyA9IGFjdGlvbnM7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXHRcdFx0Zm9ybURhdGEuYXBwZW5kKFwiZGF0YVwiLCBKU09OLnN0cmluZ2lmeShyZXF1ZXN0RGF0YSkpO1xuXHRcdFx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZmlsZXMpKSB7XG5cdFx0XHRcdGNvbnN0IGxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkgZm9ybURhdGEuYXBwZW5kKGtleSwgdmFsdWVbaV0pO1xuXHRcdFx0fVxuXHRcdFx0ZmV0Y2hPcHRpb25zLmJvZHkgPSBmb3JtRGF0YTtcblx0XHR9XG5cdFx0Y29uc3QgcGFyYW1zU3RyaW5nID0gcGFyYW1zLnRvU3RyaW5nKCk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHVybDogYCR7dXJsfSR7cGFyYW1zU3RyaW5nLmxlbmd0aCA+IDAgPyBgPyR7cGFyYW1zU3RyaW5nfWAgOiBcIlwifWAsXG5cdFx0XHRmZXRjaE9wdGlvbnNcblx0XHR9O1xuXHR9XG5cdHdpbGxEYXRhRml0SW5VcmwocHJvcHNKc29uLCB1cGRhdGVkSnNvbiwgcGFyYW1zLCBjaGlsZHJlbkpzb24sIHByb3BzRnJvbVBhcmVudEpzb24pIHtcblx0XHRyZXR1cm4gKG5ldyBVUkxTZWFyY2hQYXJhbXMocHJvcHNKc29uICsgdXBkYXRlZEpzb24gKyBjaGlsZHJlbkpzb24gKyBwcm9wc0Zyb21QYXJlbnRKc29uKS50b1N0cmluZygpICsgcGFyYW1zLnRvU3RyaW5nKCkpLmxlbmd0aCA8IDE1MDA7XG5cdH1cbn07XG52YXIgQmFja2VuZF9kZWZhdWx0ID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih1cmwsIG1ldGhvZCA9IFwicG9zdFwiLCBjcmVkZW50aWFscyA9IFwic2FtZS1vcmlnaW5cIikge1xuXHRcdHRoaXMucmVxdWVzdEJ1aWxkZXIgPSBuZXcgUmVxdWVzdEJ1aWxkZXJfZGVmYXVsdCh1cmwsIG1ldGhvZCwgY3JlZGVudGlhbHMpO1xuXHR9XG5cdG1ha2VSZXF1ZXN0KHByb3BzLCBhY3Rpb25zLCB1cGRhdGVkLCBjaGlsZHJlbiwgdXBkYXRlZFByb3BzRnJvbVBhcmVudCwgZmlsZXMpIHtcblx0XHRjb25zdCB7IHVybCwgZmV0Y2hPcHRpb25zIH0gPSB0aGlzLnJlcXVlc3RCdWlsZGVyLmJ1aWxkUmVxdWVzdChwcm9wcywgYWN0aW9ucywgdXBkYXRlZCwgY2hpbGRyZW4sIHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQsIGZpbGVzKTtcblx0XHRyZXR1cm4gbmV3IEJhY2tlbmRSZXF1ZXN0X2RlZmF1bHQoZmV0Y2godXJsLCBmZXRjaE9wdGlvbnMpLCBhY3Rpb25zLm1hcCgoYmFja2VuZEFjdGlvbikgPT4gYmFja2VuZEFjdGlvbi5uYW1lKSwgT2JqZWN0LmtleXModXBkYXRlZCkpO1xuXHR9XG59O1xudmFyIEJhY2tlbmRSZXNwb25zZV9kZWZhdWx0ID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3RvcihyZXNwb25zZSkge1xuXHRcdHRoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcblx0fVxuXHRhc3luYyBnZXRCb2R5KCkge1xuXHRcdGlmICghdGhpcy5ib2R5KSB0aGlzLmJvZHkgPSBhd2FpdCB0aGlzLnJlc3BvbnNlLnRleHQoKTtcblx0XHRyZXR1cm4gdGhpcy5ib2R5O1xuXHR9XG5cdGdldExpdmVVcmwoKSB7XG5cdFx0aWYgKHZvaWQgMCA9PT0gdGhpcy5saXZlVXJsKSB0aGlzLmxpdmVVcmwgPSB0aGlzLnJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiWC1MaXZlLVVybFwiKTtcblx0XHRyZXR1cm4gdGhpcy5saXZlVXJsO1xuXHR9XG59O1xuZnVuY3Rpb24gZ2V0RWxlbWVudEFzVGFnVGV4dChlbGVtZW50KSB7XG5cdHJldHVybiBlbGVtZW50LmlubmVySFRNTCA/IGVsZW1lbnQub3V0ZXJIVE1MLnNsaWNlKDAsIGVsZW1lbnQub3V0ZXJIVE1MLmluZGV4T2YoZWxlbWVudC5pbm5lckhUTUwpKSA6IGVsZW1lbnQub3V0ZXJIVE1MO1xufVxubGV0IGNvbXBvbmVudE1hcEJ5RWxlbWVudCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xubGV0IGNvbXBvbmVudE1hcEJ5Q29tcG9uZW50ID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbmNvbnN0IHJlZ2lzdGVyQ29tcG9uZW50ID0gKGNvbXBvbmVudCkgPT4ge1xuXHRjb21wb25lbnRNYXBCeUVsZW1lbnQuc2V0KGNvbXBvbmVudC5lbGVtZW50LCBjb21wb25lbnQpO1xuXHRjb21wb25lbnRNYXBCeUNvbXBvbmVudC5zZXQoY29tcG9uZW50LCBjb21wb25lbnQubmFtZSk7XG59O1xuY29uc3QgdW5yZWdpc3RlckNvbXBvbmVudCA9IChjb21wb25lbnQpID0+IHtcblx0Y29tcG9uZW50TWFwQnlFbGVtZW50LmRlbGV0ZShjb21wb25lbnQuZWxlbWVudCk7XG5cdGNvbXBvbmVudE1hcEJ5Q29tcG9uZW50LmRlbGV0ZShjb21wb25lbnQpO1xufTtcbmNvbnN0IGdldENvbXBvbmVudCA9IChlbGVtZW50KSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdGxldCBjb3VudCA9IDA7XG5cdGNvbnN0IG1heENvdW50ID0gMTA7XG5cdGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudE1hcEJ5RWxlbWVudC5nZXQoZWxlbWVudCk7XG5cdFx0aWYgKGNvbXBvbmVudCkge1xuXHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cdFx0XHRyZXNvbHZlKGNvbXBvbmVudCk7XG5cdFx0fVxuXHRcdGNvdW50Kys7XG5cdFx0aWYgKGNvdW50ID4gbWF4Q291bnQpIHtcblx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXHRcdFx0cmVqZWN0KC8qIEBfX1BVUkVfXyAqLyBuZXcgRXJyb3IoYENvbXBvbmVudCBub3QgZm91bmQgZm9yIGVsZW1lbnQgJHtnZXRFbGVtZW50QXNUYWdUZXh0KGVsZW1lbnQpfWApKTtcblx0XHR9XG5cdH0sIDUpO1xufSk7XG5jb25zdCBmaW5kQ29tcG9uZW50cyA9IChjdXJyZW50Q29tcG9uZW50LCBvbmx5UGFyZW50cywgb25seU1hdGNoTmFtZSkgPT4ge1xuXHRjb25zdCBjb21wb25lbnRzID0gW107XG5cdGNvbXBvbmVudE1hcEJ5Q29tcG9uZW50LmZvckVhY2goKGNvbXBvbmVudE5hbWUsIGNvbXBvbmVudCkgPT4ge1xuXHRcdGlmIChvbmx5UGFyZW50cyAmJiAoY3VycmVudENvbXBvbmVudCA9PT0gY29tcG9uZW50IHx8ICFjb21wb25lbnQuZWxlbWVudC5jb250YWlucyhjdXJyZW50Q29tcG9uZW50LmVsZW1lbnQpKSkgcmV0dXJuO1xuXHRcdGlmIChvbmx5TWF0Y2hOYW1lICYmIGNvbXBvbmVudE5hbWUgIT09IG9ubHlNYXRjaE5hbWUpIHJldHVybjtcblx0XHRjb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcblx0fSk7XG5cdHJldHVybiBjb21wb25lbnRzO1xufTtcbmNvbnN0IGZpbmRDaGlsZHJlbiA9IChjdXJyZW50Q29tcG9uZW50KSA9PiB7XG5cdGNvbnN0IGNoaWxkcmVuID0gW107XG5cdGNvbXBvbmVudE1hcEJ5Q29tcG9uZW50LmZvckVhY2goKGNvbXBvbmVudE5hbWUsIGNvbXBvbmVudCkgPT4ge1xuXHRcdGlmIChjdXJyZW50Q29tcG9uZW50ID09PSBjb21wb25lbnQpIHJldHVybjtcblx0XHRpZiAoIWN1cnJlbnRDb21wb25lbnQuZWxlbWVudC5jb250YWlucyhjb21wb25lbnQuZWxlbWVudCkpIHJldHVybjtcblx0XHRsZXQgZm91bmRDaGlsZENvbXBvbmVudCA9IGZhbHNlO1xuXHRcdGNvbXBvbmVudE1hcEJ5Q29tcG9uZW50LmZvckVhY2goKGNoaWxkQ29tcG9uZW50TmFtZSwgY2hpbGRDb21wb25lbnQpID0+IHtcblx0XHRcdGlmIChmb3VuZENoaWxkQ29tcG9uZW50KSByZXR1cm47XG5cdFx0XHRpZiAoY2hpbGRDb21wb25lbnQgPT09IGNvbXBvbmVudCkgcmV0dXJuO1xuXHRcdFx0aWYgKGNoaWxkQ29tcG9uZW50LmVsZW1lbnQuY29udGFpbnMoY29tcG9uZW50LmVsZW1lbnQpKSBmb3VuZENoaWxkQ29tcG9uZW50ID0gdHJ1ZTtcblx0XHR9KTtcblx0XHRjaGlsZHJlbi5wdXNoKGNvbXBvbmVudCk7XG5cdH0pO1xuXHRyZXR1cm4gY2hpbGRyZW47XG59O1xuY29uc3QgZmluZFBhcmVudCA9IChjdXJyZW50Q29tcG9uZW50KSA9PiB7XG5cdGxldCBwYXJlbnRFbGVtZW50ID0gY3VycmVudENvbXBvbmVudC5lbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cdHdoaWxlIChwYXJlbnRFbGVtZW50KSB7XG5cdFx0Y29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50TWFwQnlFbGVtZW50LmdldChwYXJlbnRFbGVtZW50KTtcblx0XHRpZiAoY29tcG9uZW50KSByZXR1cm4gY29tcG9uZW50O1xuXHRcdHBhcmVudEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xuZnVuY3Rpb24gcGFyc2VEaXJlY3RpdmVzKGNvbnRlbnQpIHtcblx0Y29uc3QgZGlyZWN0aXZlcyA9IFtdO1xuXHRpZiAoIWNvbnRlbnQpIHJldHVybiBkaXJlY3RpdmVzO1xuXHRsZXQgY3VycmVudEFjdGlvbk5hbWUgPSBcIlwiO1xuXHRsZXQgY3VycmVudEFyZ3VtZW50VmFsdWUgPSBcIlwiO1xuXHRsZXQgY3VycmVudEFyZ3VtZW50cyA9IFtdO1xuXHRsZXQgY3VycmVudE1vZGlmaWVycyA9IFtdO1xuXHRsZXQgc3RhdGUgPSBcImFjdGlvblwiO1xuXHRjb25zdCBnZXRMYXN0QWN0aW9uTmFtZSA9ICgpID0+IHtcblx0XHRpZiAoY3VycmVudEFjdGlvbk5hbWUpIHJldHVybiBjdXJyZW50QWN0aW9uTmFtZTtcblx0XHRpZiAoZGlyZWN0aXZlcy5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGFueSBkaXJlY3RpdmVzXCIpO1xuXHRcdHJldHVybiBkaXJlY3RpdmVzW2RpcmVjdGl2ZXMubGVuZ3RoIC0gMV0uYWN0aW9uO1xuXHR9O1xuXHRjb25zdCBwdXNoSW5zdHJ1Y3Rpb24gPSAoKSA9PiB7XG5cdFx0ZGlyZWN0aXZlcy5wdXNoKHtcblx0XHRcdGFjdGlvbjogY3VycmVudEFjdGlvbk5hbWUsXG5cdFx0XHRhcmdzOiBjdXJyZW50QXJndW1lbnRzLFxuXHRcdFx0bW9kaWZpZXJzOiBjdXJyZW50TW9kaWZpZXJzLFxuXHRcdFx0Z2V0U3RyaW5nOiAoKSA9PiB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGN1cnJlbnRBY3Rpb25OYW1lID0gXCJcIjtcblx0XHRjdXJyZW50QXJndW1lbnRWYWx1ZSA9IFwiXCI7XG5cdFx0Y3VycmVudEFyZ3VtZW50cyA9IFtdO1xuXHRcdGN1cnJlbnRNb2RpZmllcnMgPSBbXTtcblx0XHRzdGF0ZSA9IFwiYWN0aW9uXCI7XG5cdH07XG5cdGNvbnN0IHB1c2hBcmd1bWVudCA9ICgpID0+IHtcblx0XHRjdXJyZW50QXJndW1lbnRzLnB1c2goY3VycmVudEFyZ3VtZW50VmFsdWUudHJpbSgpKTtcblx0XHRjdXJyZW50QXJndW1lbnRWYWx1ZSA9IFwiXCI7XG5cdH07XG5cdGNvbnN0IHB1c2hNb2RpZmllciA9ICgpID0+IHtcblx0XHRpZiAoY3VycmVudEFyZ3VtZW50cy5sZW5ndGggPiAxKSB0aHJvdyBuZXcgRXJyb3IoYFRoZSBtb2RpZmllciBcIiR7Y3VycmVudEFjdGlvbk5hbWV9KClcIiBkb2VzIG5vdCBzdXBwb3J0IG11bHRpcGxlIGFyZ3VtZW50cy5gKTtcblx0XHRjdXJyZW50TW9kaWZpZXJzLnB1c2goe1xuXHRcdFx0bmFtZTogY3VycmVudEFjdGlvbk5hbWUsXG5cdFx0XHR2YWx1ZTogY3VycmVudEFyZ3VtZW50cy5sZW5ndGggPiAwID8gY3VycmVudEFyZ3VtZW50c1swXSA6IG51bGxcblx0XHR9KTtcblx0XHRjdXJyZW50QWN0aW9uTmFtZSA9IFwiXCI7XG5cdFx0Y3VycmVudEFyZ3VtZW50cyA9IFtdO1xuXHRcdHN0YXRlID0gXCJhY3Rpb25cIjtcblx0fTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb250ZW50Lmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgY2hhciA9IGNvbnRlbnRbaV07XG5cdFx0c3dpdGNoIChzdGF0ZSkge1xuXHRcdFx0Y2FzZSBcImFjdGlvblwiOlxuXHRcdFx0XHRpZiAoY2hhciA9PT0gXCIoXCIpIHtcblx0XHRcdFx0XHRzdGF0ZSA9IFwiYXJndW1lbnRzXCI7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGNoYXIgPT09IFwiIFwiKSB7XG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRBY3Rpb25OYW1lKSBwdXNoSW5zdHJ1Y3Rpb24oKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY2hhciA9PT0gXCJ8XCIpIHtcblx0XHRcdFx0XHRwdXNoTW9kaWZpZXIoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRjdXJyZW50QWN0aW9uTmFtZSArPSBjaGFyO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJhcmd1bWVudHNcIjpcblx0XHRcdFx0aWYgKGNoYXIgPT09IFwiKVwiKSB7XG5cdFx0XHRcdFx0cHVzaEFyZ3VtZW50KCk7XG5cdFx0XHRcdFx0c3RhdGUgPSBcImFmdGVyX2FyZ3VtZW50c1wiO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChjaGFyID09PSBcIixcIikge1xuXHRcdFx0XHRcdHB1c2hBcmd1bWVudCgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN1cnJlbnRBcmd1bWVudFZhbHVlICs9IGNoYXI7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImFmdGVyX2FyZ3VtZW50c1wiOlxuXHRcdFx0XHRpZiAoY2hhciA9PT0gXCJ8XCIpIHtcblx0XHRcdFx0XHRwdXNoTW9kaWZpZXIoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY2hhciAhPT0gXCIgXCIpIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBzcGFjZSBhZnRlciAke2dldExhc3RBY3Rpb25OYW1lKCl9KClgKTtcblx0XHRcdFx0cHVzaEluc3RydWN0aW9uKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXHRzd2l0Y2ggKHN0YXRlKSB7XG5cdFx0Y2FzZSBcImFjdGlvblwiOlxuXHRcdGNhc2UgXCJhZnRlcl9hcmd1bWVudHNcIjpcblx0XHRcdGlmIChjdXJyZW50QWN0aW9uTmFtZSkgcHVzaEluc3RydWN0aW9uKCk7XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OiB0aHJvdyBuZXcgRXJyb3IoYERpZCB5b3UgZm9yZ2V0IHRvIGFkZCBhIGNsb3NpbmcgXCIpXCIgYWZ0ZXIgXCIke2N1cnJlbnRBY3Rpb25OYW1lfVwiP2ApO1xuXHR9XG5cdHJldHVybiBkaXJlY3RpdmVzO1xufVxuZnVuY3Rpb24gY29tYmluZVNwYWNlZEFycmF5KHBhcnRzKSB7XG5cdGNvbnN0IGZpbmFsUGFydHMgPSBbXTtcblx0cGFydHMuZm9yRWFjaCgocGFydCkgPT4ge1xuXHRcdGZpbmFsUGFydHMucHVzaCguLi50cmltQWxsKHBhcnQpLnNwbGl0KFwiIFwiKSk7XG5cdH0pO1xuXHRyZXR1cm4gZmluYWxQYXJ0cztcbn1cbmZ1bmN0aW9uIHRyaW1BbGwoc3RyKSB7XG5cdHJldHVybiBzdHIucmVwbGFjZSgvW1xcc10rL2csIFwiIFwiKS50cmltKCk7XG59XG5mdW5jdGlvbiBub3JtYWxpemVNb2RlbE5hbWUobW9kZWwpIHtcblx0cmV0dXJuIG1vZGVsLnJlcGxhY2UoL1xcW10kLywgXCJcIikuc3BsaXQoXCJbXCIpLm1hcCgocykgPT4gcy5yZXBsYWNlKFwiXVwiLCBcIlwiKSkuam9pbihcIi5cIik7XG59XG5mdW5jdGlvbiBnZXRWYWx1ZUZyb21FbGVtZW50KGVsZW1lbnQsIHZhbHVlU3RvcmUpIHtcblx0aWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG5cdFx0aWYgKGVsZW1lbnQudHlwZSA9PT0gXCJjaGVja2JveFwiKSB7XG5cdFx0XHRjb25zdCBtb2RlbE5hbWVEYXRhID0gZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChlbGVtZW50LCBmYWxzZSk7XG5cdFx0XHRpZiAobW9kZWxOYW1lRGF0YSAhPT0gbnVsbCkge1xuXHRcdFx0XHRjb25zdCBtb2RlbFZhbHVlID0gdmFsdWVTdG9yZS5nZXQobW9kZWxOYW1lRGF0YS5hY3Rpb24pO1xuXHRcdFx0XHRpZiAoQXJyYXkuaXNBcnJheShtb2RlbFZhbHVlKSkgcmV0dXJuIGdldE11bHRpcGxlQ2hlY2tib3hWYWx1ZShlbGVtZW50LCBtb2RlbFZhbHVlKTtcblx0XHRcdFx0aWYgKE9iamVjdChtb2RlbFZhbHVlKSA9PT0gbW9kZWxWYWx1ZSkgcmV0dXJuIGdldE11bHRpcGxlQ2hlY2tib3hWYWx1ZShlbGVtZW50LCBPYmplY3QudmFsdWVzKG1vZGVsVmFsdWUpKTtcblx0XHRcdH1cblx0XHRcdGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZShcInZhbHVlXCIpKSByZXR1cm4gZWxlbWVudC5jaGVja2VkID8gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSA6IG51bGw7XG5cdFx0XHRyZXR1cm4gZWxlbWVudC5jaGVja2VkO1xuXHRcdH1cblx0XHRyZXR1cm4gaW5wdXRWYWx1ZShlbGVtZW50KTtcblx0fVxuXHRpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSB7XG5cdFx0aWYgKGVsZW1lbnQubXVsdGlwbGUpIHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQuc2VsZWN0ZWRPcHRpb25zKS5tYXAoKGVsKSA9PiBlbC52YWx1ZSk7XG5cdFx0cmV0dXJuIGVsZW1lbnQudmFsdWU7XG5cdH1cblx0aWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiKSkgcmV0dXJuIGVsZW1lbnQuZGF0YXNldC52YWx1ZTtcblx0aWYgKFwidmFsdWVcIiBpbiBlbGVtZW50KSByZXR1cm4gZWxlbWVudC52YWx1ZTtcblx0aWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKFwidmFsdWVcIikpIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShcInZhbHVlXCIpO1xuXHRyZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIHNldFZhbHVlT25FbGVtZW50KGVsZW1lbnQsIHZhbHVlKSB7XG5cdGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuXHRcdGlmIChlbGVtZW50LnR5cGUgPT09IFwiZmlsZVwiKSByZXR1cm47XG5cdFx0aWYgKGVsZW1lbnQudHlwZSA9PT0gXCJyYWRpb1wiKSB7XG5cdFx0XHRlbGVtZW50LmNoZWNrZWQgPSBlbGVtZW50LnZhbHVlID09IHZhbHVlO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoZWxlbWVudC50eXBlID09PSBcImNoZWNrYm94XCIpIHtcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkgZWxlbWVudC5jaGVja2VkID0gdmFsdWUuc29tZSgodmFsKSA9PiB2YWwgPT0gZWxlbWVudC52YWx1ZSk7XG5cdFx0XHRlbHNlIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZShcInZhbHVlXCIpKSBlbGVtZW50LmNoZWNrZWQgPSBlbGVtZW50LnZhbHVlID09IHZhbHVlO1xuXHRcdFx0ZWxzZSBlbGVtZW50LmNoZWNrZWQgPSB2YWx1ZTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cblx0aWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xuXHRcdGNvbnN0IGFycmF5V3JhcHBlZFZhbHVlID0gW10uY29uY2F0KHZhbHVlKS5tYXAoKHZhbHVlKSA9PiB7XG5cdFx0XHRyZXR1cm4gYCR7dmFsdWV9YDtcblx0XHR9KTtcblx0XHRBcnJheS5mcm9tKGVsZW1lbnQub3B0aW9ucykuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG5cdFx0XHRvcHRpb24uc2VsZWN0ZWQgPSBhcnJheVdyYXBwZWRWYWx1ZS5pbmNsdWRlcyhvcHRpb24udmFsdWUpO1xuXHRcdH0pO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YWx1ZSA9IHZhbHVlID09PSB2b2lkIDAgPyBcIlwiIDogdmFsdWU7XG5cdGVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGdldEFsbE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnRzKGVsZW1lbnQpIHtcblx0aWYgKCFlbGVtZW50LmRhdGFzZXQubW9kZWwpIHJldHVybiBbXTtcblx0Y29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhlbGVtZW50LmRhdGFzZXQubW9kZWwpO1xuXHRkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuXHRcdGlmIChkaXJlY3RpdmUuYXJncy5sZW5ndGggPiAwKSB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkYXRhLW1vZGVsPVwiJHtlbGVtZW50LmRhdGFzZXQubW9kZWx9XCIgZm9ybWF0IGlzIGludmFsaWQ6IGl0IGRvZXMgbm90IHN1cHBvcnQgcGFzc2luZyBhcmd1bWVudHMgdG8gdGhlIG1vZGVsLmApO1xuXHRcdGRpcmVjdGl2ZS5hY3Rpb24gPSBub3JtYWxpemVNb2RlbE5hbWUoZGlyZWN0aXZlLmFjdGlvbik7XG5cdH0pO1xuXHRyZXR1cm4gZGlyZWN0aXZlcztcbn1cbmZ1bmN0aW9uIGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZWxlbWVudCwgdGhyb3dPbk1pc3NpbmcgPSB0cnVlKSB7XG5cdGNvbnN0IGRhdGFNb2RlbERpcmVjdGl2ZXMgPSBnZXRBbGxNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50cyhlbGVtZW50KTtcblx0aWYgKGRhdGFNb2RlbERpcmVjdGl2ZXMubGVuZ3RoID4gMCkgcmV0dXJuIGRhdGFNb2RlbERpcmVjdGl2ZXNbMF07XG5cdGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZShcIm5hbWVcIikpIHtcblx0XHRjb25zdCBmb3JtRWxlbWVudCA9IGVsZW1lbnQuY2xvc2VzdChcImZvcm1cIik7XG5cdFx0aWYgKGZvcm1FbGVtZW50ICYmIFwibW9kZWxcIiBpbiBmb3JtRWxlbWVudC5kYXRhc2V0KSB7XG5cdFx0XHRjb25zdCBkaXJlY3RpdmUgPSBwYXJzZURpcmVjdGl2ZXMoZm9ybUVsZW1lbnQuZGF0YXNldC5tb2RlbCB8fCBcIipcIilbMF07XG5cdFx0XHRpZiAoZGlyZWN0aXZlLmFyZ3MubGVuZ3RoID4gMCkgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGF0YS1tb2RlbD1cIiR7Zm9ybUVsZW1lbnQuZGF0YXNldC5tb2RlbH1cIiBmb3JtYXQgaXMgaW52YWxpZDogaXQgZG9lcyBub3Qgc3VwcG9ydCBwYXNzaW5nIGFyZ3VtZW50cyB0byB0aGUgbW9kZWwuYCk7XG5cdFx0XHRkaXJlY3RpdmUuYWN0aW9uID0gbm9ybWFsaXplTW9kZWxOYW1lKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwibmFtZVwiKSk7XG5cdFx0XHRyZXR1cm4gZGlyZWN0aXZlO1xuXHRcdH1cblx0fVxuXHRpZiAoIXRocm93T25NaXNzaW5nKSByZXR1cm4gbnVsbDtcblx0dGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZGV0ZXJtaW5lIHRoZSBtb2RlbCBuYW1lIGZvciBcIiR7Z2V0RWxlbWVudEFzVGFnVGV4dChlbGVtZW50KX1cIjogdGhlIGVsZW1lbnQgbXVzdCBlaXRoZXIgaGF2ZSBhIFwiZGF0YS1tb2RlbFwiIChvciBcIm5hbWVcIiBhdHRyaWJ1dGUgbGl2aW5nIGluc2lkZSBhIDxmb3JtIGRhdGEtbW9kZWw9XCIqXCI+KS5gKTtcbn1cbmZ1bmN0aW9uIGVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIGNvbXBvbmVudCkge1xuXHRpZiAoY29tcG9uZW50LmVsZW1lbnQgPT09IGVsZW1lbnQpIHJldHVybiB0cnVlO1xuXHRpZiAoIWNvbXBvbmVudC5lbGVtZW50LmNvbnRhaW5zKGVsZW1lbnQpKSByZXR1cm4gZmFsc2U7XG5cdHJldHVybiBlbGVtZW50LmNsb3Nlc3QoXCJbZGF0YS1jb250cm9sbGVyfj1cXFwibGl2ZVxcXCJdXCIpID09PSBjb21wb25lbnQuZWxlbWVudDtcbn1cbmZ1bmN0aW9uIGNsb25lSFRNTEVsZW1lbnQoZWxlbWVudCkge1xuXHRjb25zdCBuZXdFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG5cdGlmICghKG5ld0VsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBjbG9uZSBlbGVtZW50XCIpO1xuXHRyZXR1cm4gbmV3RWxlbWVudDtcbn1cbmZ1bmN0aW9uIGh0bWxUb0VsZW1lbnQoaHRtbCkge1xuXHRjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcblx0aHRtbCA9IGh0bWwudHJpbSgpO1xuXHR0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xuXHRpZiAodGVtcGxhdGUuY29udGVudC5jaGlsZEVsZW1lbnRDb3VudCA+IDEpIHRocm93IG5ldyBFcnJvcihgQ29tcG9uZW50IEhUTUwgY29udGFpbnMgJHt0ZW1wbGF0ZS5jb250ZW50LmNoaWxkRWxlbWVudENvdW50fSBlbGVtZW50cywgYnV0IG9ubHkgMSByb290IGVsZW1lbnQgaXMgYWxsb3dlZC5gKTtcblx0Y29uc3QgY2hpbGQgPSB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkO1xuXHRpZiAoIWNoaWxkKSB0aHJvdyBuZXcgRXJyb3IoXCJDaGlsZCBub3QgZm91bmRcIik7XG5cdGlmICghKGNoaWxkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB0aHJvdyBuZXcgRXJyb3IoYENyZWF0ZWQgZWxlbWVudCBpcyBub3QgYW4gSFRNTEVsZW1lbnQ6ICR7aHRtbC50cmltKCl9YCk7XG5cdHJldHVybiBjaGlsZDtcbn1cbmNvbnN0IGdldE11bHRpcGxlQ2hlY2tib3hWYWx1ZSA9IChlbGVtZW50LCBjdXJyZW50VmFsdWVzKSA9PiB7XG5cdGNvbnN0IGZpbmFsVmFsdWVzID0gWy4uLmN1cnJlbnRWYWx1ZXNdO1xuXHRjb25zdCB2YWx1ZSA9IGlucHV0VmFsdWUoZWxlbWVudCk7XG5cdGNvbnN0IGluZGV4ID0gY3VycmVudFZhbHVlcy5pbmRleE9mKHZhbHVlKTtcblx0aWYgKGVsZW1lbnQuY2hlY2tlZCkge1xuXHRcdGlmIChpbmRleCA9PT0gLTEpIGZpbmFsVmFsdWVzLnB1c2godmFsdWUpO1xuXHRcdHJldHVybiBmaW5hbFZhbHVlcztcblx0fVxuXHRpZiAoaW5kZXggPiAtMSkgZmluYWxWYWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcblx0cmV0dXJuIGZpbmFsVmFsdWVzO1xufTtcbmNvbnN0IGlucHV0VmFsdWUgPSAoZWxlbWVudCkgPT4gZWxlbWVudC5kYXRhc2V0LnZhbHVlID8gZWxlbWVudC5kYXRhc2V0LnZhbHVlIDogZWxlbWVudC52YWx1ZTtcbmZ1bmN0aW9uIGlzVGV4dHVhbElucHV0RWxlbWVudChlbCkge1xuXHRyZXR1cm4gZWwgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIFtcblx0XHRcInRleHRcIixcblx0XHRcImVtYWlsXCIsXG5cdFx0XCJwYXNzd29yZFwiLFxuXHRcdFwic2VhcmNoXCIsXG5cdFx0XCJ0ZWxcIixcblx0XHRcInVybFwiXG5cdF0uaW5jbHVkZXMoZWwudHlwZSk7XG59XG5mdW5jdGlvbiBpc1RleHRhcmVhRWxlbWVudChlbCkge1xuXHRyZXR1cm4gZWwgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50O1xufVxuZnVuY3Rpb24gaXNOdW1lcmljYWxJbnB1dEVsZW1lbnQoZWxlbWVudCkge1xuXHRyZXR1cm4gZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgW1wibnVtYmVyXCIsIFwicmFuZ2VcIl0uaW5jbHVkZXMoZWxlbWVudC50eXBlKTtcbn1cbnZhciBIb29rTWFuYWdlcl9kZWZhdWx0ID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmhvb2tzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0fVxuXHRyZWdpc3Rlcihob29rTmFtZSwgY2FsbGJhY2spIHtcblx0XHRjb25zdCBob29rcyA9IHRoaXMuaG9va3MuZ2V0KGhvb2tOYW1lKSB8fCBbXTtcblx0XHRob29rcy5wdXNoKGNhbGxiYWNrKTtcblx0XHR0aGlzLmhvb2tzLnNldChob29rTmFtZSwgaG9va3MpO1xuXHR9XG5cdHVucmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKSB7XG5cdFx0Y29uc3QgaG9va3MgPSB0aGlzLmhvb2tzLmdldChob29rTmFtZSkgfHwgW107XG5cdFx0Y29uc3QgaW5kZXggPSBob29rcy5pbmRleE9mKGNhbGxiYWNrKTtcblx0XHRpZiAoaW5kZXggPT09IC0xKSByZXR1cm47XG5cdFx0aG9va3Muc3BsaWNlKGluZGV4LCAxKTtcblx0XHR0aGlzLmhvb2tzLnNldChob29rTmFtZSwgaG9va3MpO1xuXHR9XG5cdHRyaWdnZXJIb29rKGhvb2tOYW1lLCAuLi5hcmdzKSB7XG5cdFx0KHRoaXMuaG9va3MuZ2V0KGhvb2tOYW1lKSB8fCBbXSkuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcblx0XHRcdGNhbGxiYWNrKC4uLmFyZ3MpO1xuXHRcdH0pO1xuXHR9XG59O1xudmFyIElkaW9tb3JwaCA9IChmdW5jdGlvbigpIHtcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdGxldCBFTVBUWV9TRVQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuXHRsZXQgZGVmYXVsdHMgPSB7XG5cdFx0bW9ycGhTdHlsZTogXCJvdXRlckhUTUxcIixcblx0XHRjYWxsYmFja3M6IHtcblx0XHRcdGJlZm9yZU5vZGVBZGRlZDogbm9PcCxcblx0XHRcdGFmdGVyTm9kZUFkZGVkOiBub09wLFxuXHRcdFx0YmVmb3JlTm9kZU1vcnBoZWQ6IG5vT3AsXG5cdFx0XHRhZnRlck5vZGVNb3JwaGVkOiBub09wLFxuXHRcdFx0YmVmb3JlTm9kZVJlbW92ZWQ6IG5vT3AsXG5cdFx0XHRhZnRlck5vZGVSZW1vdmVkOiBub09wLFxuXHRcdFx0YmVmb3JlQXR0cmlidXRlVXBkYXRlZDogbm9PcFxuXHRcdH0sXG5cdFx0aGVhZDoge1xuXHRcdFx0c3R5bGU6IFwibWVyZ2VcIixcblx0XHRcdHNob3VsZFByZXNlcnZlOiBmdW5jdGlvbihlbHQpIHtcblx0XHRcdFx0cmV0dXJuIGVsdC5nZXRBdHRyaWJ1dGUoXCJpbS1wcmVzZXJ2ZVwiKSA9PT0gXCJ0cnVlXCI7XG5cdFx0XHR9LFxuXHRcdFx0c2hvdWxkUmVBcHBlbmQ6IGZ1bmN0aW9uKGVsdCkge1xuXHRcdFx0XHRyZXR1cm4gZWx0LmdldEF0dHJpYnV0ZShcImltLXJlLWFwcGVuZFwiKSA9PT0gXCJ0cnVlXCI7XG5cdFx0XHR9LFxuXHRcdFx0c2hvdWxkUmVtb3ZlOiBub09wLFxuXHRcdFx0YWZ0ZXJIZWFkTW9ycGhlZDogbm9PcFxuXHRcdH1cblx0fTtcblx0ZnVuY3Rpb24gbW9ycGgob2xkTm9kZSwgbmV3Q29udGVudCwgY29uZmlnID0ge30pIHtcblx0XHRpZiAob2xkTm9kZSBpbnN0YW5jZW9mIERvY3VtZW50KSBvbGROb2RlID0gb2xkTm9kZS5kb2N1bWVudEVsZW1lbnQ7XG5cdFx0aWYgKHR5cGVvZiBuZXdDb250ZW50ID09PSBcInN0cmluZ1wiKSBuZXdDb250ZW50ID0gcGFyc2VDb250ZW50KG5ld0NvbnRlbnQpO1xuXHRcdGxldCBub3JtYWxpemVkQ29udGVudCA9IG5vcm1hbGl6ZUNvbnRlbnQobmV3Q29udGVudCk7XG5cdFx0bGV0IGN0eCA9IGNyZWF0ZU1vcnBoQ29udGV4dChvbGROb2RlLCBub3JtYWxpemVkQ29udGVudCwgY29uZmlnKTtcblx0XHRyZXR1cm4gbW9ycGhOb3JtYWxpemVkQ29udGVudChvbGROb2RlLCBub3JtYWxpemVkQ29udGVudCwgY3R4KTtcblx0fVxuXHRmdW5jdGlvbiBtb3JwaE5vcm1hbGl6ZWRDb250ZW50KG9sZE5vZGUsIG5vcm1hbGl6ZWROZXdDb250ZW50LCBjdHgpIHtcblx0XHRpZiAoY3R4LmhlYWQuYmxvY2spIHtcblx0XHRcdGxldCBvbGRIZWFkID0gb2xkTm9kZS5xdWVyeVNlbGVjdG9yKFwiaGVhZFwiKTtcblx0XHRcdGxldCBuZXdIZWFkID0gbm9ybWFsaXplZE5ld0NvbnRlbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIik7XG5cdFx0XHRpZiAob2xkSGVhZCAmJiBuZXdIZWFkKSB7XG5cdFx0XHRcdGxldCBwcm9taXNlcyA9IGhhbmRsZUhlYWRFbGVtZW50KG5ld0hlYWQsIG9sZEhlYWQsIGN0eCk7XG5cdFx0XHRcdFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdG1vcnBoTm9ybWFsaXplZENvbnRlbnQob2xkTm9kZSwgbm9ybWFsaXplZE5ld0NvbnRlbnQsIE9iamVjdC5hc3NpZ24oY3R4LCB7IGhlYWQ6IHtcblx0XHRcdFx0XHRcdGJsb2NrOiBmYWxzZSxcblx0XHRcdFx0XHRcdGlnbm9yZTogdHJ1ZVxuXHRcdFx0XHRcdH0gfSkpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoY3R4Lm1vcnBoU3R5bGUgPT09IFwiaW5uZXJIVE1MXCIpIHtcblx0XHRcdG1vcnBoQ2hpbGRyZW4obm9ybWFsaXplZE5ld0NvbnRlbnQsIG9sZE5vZGUsIGN0eCk7XG5cdFx0XHRyZXR1cm4gb2xkTm9kZS5jaGlsZHJlbjtcblx0XHR9IGVsc2UgaWYgKGN0eC5tb3JwaFN0eWxlID09PSBcIm91dGVySFRNTFwiIHx8IGN0eC5tb3JwaFN0eWxlID09IG51bGwpIHtcblx0XHRcdGxldCBiZXN0TWF0Y2ggPSBmaW5kQmVzdE5vZGVNYXRjaChub3JtYWxpemVkTmV3Q29udGVudCwgb2xkTm9kZSwgY3R4KTtcblx0XHRcdGxldCBwcmV2aW91c1NpYmxpbmcgPSBiZXN0TWF0Y2g/LnByZXZpb3VzU2libGluZztcblx0XHRcdGxldCBuZXh0U2libGluZyA9IGJlc3RNYXRjaD8ubmV4dFNpYmxpbmc7XG5cdFx0XHRsZXQgbW9ycGhlZE5vZGUgPSBtb3JwaE9sZE5vZGVUbyhvbGROb2RlLCBiZXN0TWF0Y2gsIGN0eCk7XG5cdFx0XHRpZiAoYmVzdE1hdGNoKSByZXR1cm4gaW5zZXJ0U2libGluZ3MocHJldmlvdXNTaWJsaW5nLCBtb3JwaGVkTm9kZSwgbmV4dFNpYmxpbmcpO1xuXHRcdFx0ZWxzZSByZXR1cm4gW107XG5cdFx0fSBlbHNlIHRocm93IFwiRG8gbm90IHVuZGVyc3RhbmQgaG93IHRvIG1vcnBoIHN0eWxlIFwiICsgY3R4Lm1vcnBoU3R5bGU7XG5cdH1cblx0ZnVuY3Rpb24gaWdub3JlVmFsdWVPZkFjdGl2ZUVsZW1lbnQocG9zc2libGVBY3RpdmVFbGVtZW50LCBjdHgpIHtcblx0XHRyZXR1cm4gY3R4Lmlnbm9yZUFjdGl2ZVZhbHVlICYmIHBvc3NpYmxlQWN0aXZlRWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblx0fVxuXHRmdW5jdGlvbiBtb3JwaE9sZE5vZGVUbyhvbGROb2RlLCBuZXdDb250ZW50LCBjdHgpIHtcblx0XHRpZiAoY3R4Lmlnbm9yZUFjdGl2ZSAmJiBvbGROb2RlID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7fSBlbHNlIGlmIChuZXdDb250ZW50ID09IG51bGwpIHtcblx0XHRcdGlmIChjdHguY2FsbGJhY2tzLmJlZm9yZU5vZGVSZW1vdmVkKG9sZE5vZGUpID09PSBmYWxzZSkgcmV0dXJuIG9sZE5vZGU7XG5cdFx0XHRvbGROb2RlLnJlbW92ZSgpO1xuXHRcdFx0Y3R4LmNhbGxiYWNrcy5hZnRlck5vZGVSZW1vdmVkKG9sZE5vZGUpO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fSBlbHNlIGlmICghaXNTb2Z0TWF0Y2gob2xkTm9kZSwgbmV3Q29udGVudCkpIHtcblx0XHRcdGlmIChjdHguY2FsbGJhY2tzLmJlZm9yZU5vZGVSZW1vdmVkKG9sZE5vZGUpID09PSBmYWxzZSkgcmV0dXJuIG9sZE5vZGU7XG5cdFx0XHRpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlQWRkZWQobmV3Q29udGVudCkgPT09IGZhbHNlKSByZXR1cm4gb2xkTm9kZTtcblx0XHRcdG9sZE5vZGUucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQobmV3Q29udGVudCwgb2xkTm9kZSk7XG5cdFx0XHRjdHguY2FsbGJhY2tzLmFmdGVyTm9kZUFkZGVkKG5ld0NvbnRlbnQpO1xuXHRcdFx0Y3R4LmNhbGxiYWNrcy5hZnRlck5vZGVSZW1vdmVkKG9sZE5vZGUpO1xuXHRcdFx0cmV0dXJuIG5ld0NvbnRlbnQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChjdHguY2FsbGJhY2tzLmJlZm9yZU5vZGVNb3JwaGVkKG9sZE5vZGUsIG5ld0NvbnRlbnQpID09PSBmYWxzZSkgcmV0dXJuIG9sZE5vZGU7XG5cdFx0XHRpZiAob2xkTm9kZSBpbnN0YW5jZW9mIEhUTUxIZWFkRWxlbWVudCAmJiBjdHguaGVhZC5pZ25vcmUpIHt9IGVsc2UgaWYgKG9sZE5vZGUgaW5zdGFuY2VvZiBIVE1MSGVhZEVsZW1lbnQgJiYgY3R4LmhlYWQuc3R5bGUgIT09IFwibW9ycGhcIikgaGFuZGxlSGVhZEVsZW1lbnQobmV3Q29udGVudCwgb2xkTm9kZSwgY3R4KTtcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRzeW5jTm9kZUZyb20obmV3Q29udGVudCwgb2xkTm9kZSwgY3R4KTtcblx0XHRcdFx0aWYgKCFpZ25vcmVWYWx1ZU9mQWN0aXZlRWxlbWVudChvbGROb2RlLCBjdHgpKSBtb3JwaENoaWxkcmVuKG5ld0NvbnRlbnQsIG9sZE5vZGUsIGN0eCk7XG5cdFx0XHR9XG5cdFx0XHRjdHguY2FsbGJhY2tzLmFmdGVyTm9kZU1vcnBoZWQob2xkTm9kZSwgbmV3Q29udGVudCk7XG5cdFx0XHRyZXR1cm4gb2xkTm9kZTtcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gbW9ycGhDaGlsZHJlbihuZXdQYXJlbnQsIG9sZFBhcmVudCwgY3R4KSB7XG5cdFx0bGV0IG5leHROZXdDaGlsZCA9IG5ld1BhcmVudC5maXJzdENoaWxkO1xuXHRcdGxldCBpbnNlcnRpb25Qb2ludCA9IG9sZFBhcmVudC5maXJzdENoaWxkO1xuXHRcdGxldCBuZXdDaGlsZDtcblx0XHR3aGlsZSAobmV4dE5ld0NoaWxkKSB7XG5cdFx0XHRuZXdDaGlsZCA9IG5leHROZXdDaGlsZDtcblx0XHRcdG5leHROZXdDaGlsZCA9IG5ld0NoaWxkLm5leHRTaWJsaW5nO1xuXHRcdFx0aWYgKGluc2VydGlvblBvaW50ID09IG51bGwpIHtcblx0XHRcdFx0aWYgKGN0eC5jYWxsYmFja3MuYmVmb3JlTm9kZUFkZGVkKG5ld0NoaWxkKSA9PT0gZmFsc2UpIHJldHVybjtcblx0XHRcdFx0b2xkUGFyZW50LmFwcGVuZENoaWxkKG5ld0NoaWxkKTtcblx0XHRcdFx0Y3R4LmNhbGxiYWNrcy5hZnRlck5vZGVBZGRlZChuZXdDaGlsZCk7XG5cdFx0XHRcdHJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uKGN0eCwgbmV3Q2hpbGQpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGlmIChpc0lkU2V0TWF0Y2gobmV3Q2hpbGQsIGluc2VydGlvblBvaW50LCBjdHgpKSB7XG5cdFx0XHRcdG1vcnBoT2xkTm9kZVRvKGluc2VydGlvblBvaW50LCBuZXdDaGlsZCwgY3R4KTtcblx0XHRcdFx0aW5zZXJ0aW9uUG9pbnQgPSBpbnNlcnRpb25Qb2ludC5uZXh0U2libGluZztcblx0XHRcdFx0cmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCBuZXdDaGlsZCk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0bGV0IGlkU2V0TWF0Y2ggPSBmaW5kSWRTZXRNYXRjaChuZXdQYXJlbnQsIG9sZFBhcmVudCwgbmV3Q2hpbGQsIGluc2VydGlvblBvaW50LCBjdHgpO1xuXHRcdFx0aWYgKGlkU2V0TWF0Y2gpIHtcblx0XHRcdFx0aW5zZXJ0aW9uUG9pbnQgPSByZW1vdmVOb2Rlc0JldHdlZW4oaW5zZXJ0aW9uUG9pbnQsIGlkU2V0TWF0Y2gsIGN0eCk7XG5cdFx0XHRcdG1vcnBoT2xkTm9kZVRvKGlkU2V0TWF0Y2gsIG5ld0NoaWxkLCBjdHgpO1xuXHRcdFx0XHRyZW1vdmVJZHNGcm9tQ29uc2lkZXJhdGlvbihjdHgsIG5ld0NoaWxkKTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRsZXQgc29mdE1hdGNoID0gZmluZFNvZnRNYXRjaChuZXdQYXJlbnQsIG9sZFBhcmVudCwgbmV3Q2hpbGQsIGluc2VydGlvblBvaW50LCBjdHgpO1xuXHRcdFx0aWYgKHNvZnRNYXRjaCkge1xuXHRcdFx0XHRpbnNlcnRpb25Qb2ludCA9IHJlbW92ZU5vZGVzQmV0d2VlbihpbnNlcnRpb25Qb2ludCwgc29mdE1hdGNoLCBjdHgpO1xuXHRcdFx0XHRtb3JwaE9sZE5vZGVUbyhzb2Z0TWF0Y2gsIG5ld0NoaWxkLCBjdHgpO1xuXHRcdFx0XHRyZW1vdmVJZHNGcm9tQ29uc2lkZXJhdGlvbihjdHgsIG5ld0NoaWxkKTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlQWRkZWQobmV3Q2hpbGQpID09PSBmYWxzZSkgcmV0dXJuO1xuXHRcdFx0b2xkUGFyZW50Lmluc2VydEJlZm9yZShuZXdDaGlsZCwgaW5zZXJ0aW9uUG9pbnQpO1xuXHRcdFx0Y3R4LmNhbGxiYWNrcy5hZnRlck5vZGVBZGRlZChuZXdDaGlsZCk7XG5cdFx0XHRyZW1vdmVJZHNGcm9tQ29uc2lkZXJhdGlvbihjdHgsIG5ld0NoaWxkKTtcblx0XHR9XG5cdFx0d2hpbGUgKGluc2VydGlvblBvaW50ICE9PSBudWxsKSB7XG5cdFx0XHRsZXQgdGVtcE5vZGUgPSBpbnNlcnRpb25Qb2ludDtcblx0XHRcdGluc2VydGlvblBvaW50ID0gaW5zZXJ0aW9uUG9pbnQubmV4dFNpYmxpbmc7XG5cdFx0XHRyZW1vdmVOb2RlKHRlbXBOb2RlLCBjdHgpO1xuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBpZ25vcmVBdHRyaWJ1dGUoYXR0ciwgdG8sIHVwZGF0ZVR5cGUsIGN0eCkge1xuXHRcdGlmIChhdHRyID09PSBcInZhbHVlXCIgJiYgY3R4Lmlnbm9yZUFjdGl2ZVZhbHVlICYmIHRvID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSByZXR1cm4gdHJ1ZTtcblx0XHRyZXR1cm4gY3R4LmNhbGxiYWNrcy5iZWZvcmVBdHRyaWJ1dGVVcGRhdGVkKGF0dHIsIHRvLCB1cGRhdGVUeXBlKSA9PT0gZmFsc2U7XG5cdH1cblx0ZnVuY3Rpb24gc3luY05vZGVGcm9tKGZyb20sIHRvLCBjdHgpIHtcblx0XHRsZXQgdHlwZSA9IGZyb20ubm9kZVR5cGU7XG5cdFx0aWYgKHR5cGUgPT09IDEpIHtcblx0XHRcdGNvbnN0IGZyb21BdHRyaWJ1dGVzID0gZnJvbS5hdHRyaWJ1dGVzO1xuXHRcdFx0Y29uc3QgdG9BdHRyaWJ1dGVzID0gdG8uYXR0cmlidXRlcztcblx0XHRcdGZvciAoY29uc3QgZnJvbUF0dHJpYnV0ZSBvZiBmcm9tQXR0cmlidXRlcykge1xuXHRcdFx0XHRpZiAoaWdub3JlQXR0cmlidXRlKGZyb21BdHRyaWJ1dGUubmFtZSwgdG8sIFwidXBkYXRlXCIsIGN0eCkpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAodG8uZ2V0QXR0cmlidXRlKGZyb21BdHRyaWJ1dGUubmFtZSkgIT09IGZyb21BdHRyaWJ1dGUudmFsdWUpIHRvLnNldEF0dHJpYnV0ZShmcm9tQXR0cmlidXRlLm5hbWUsIGZyb21BdHRyaWJ1dGUudmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChsZXQgaSA9IHRvQXR0cmlidXRlcy5sZW5ndGggLSAxOyAwIDw9IGk7IGktLSkge1xuXHRcdFx0XHRjb25zdCB0b0F0dHJpYnV0ZSA9IHRvQXR0cmlidXRlc1tpXTtcblx0XHRcdFx0aWYgKGlnbm9yZUF0dHJpYnV0ZSh0b0F0dHJpYnV0ZS5uYW1lLCB0bywgXCJyZW1vdmVcIiwgY3R4KSkgY29udGludWU7XG5cdFx0XHRcdGlmICghZnJvbS5oYXNBdHRyaWJ1dGUodG9BdHRyaWJ1dGUubmFtZSkpIHRvLnJlbW92ZUF0dHJpYnV0ZSh0b0F0dHJpYnV0ZS5uYW1lKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHR5cGUgPT09IDggfHwgdHlwZSA9PT0gMykge1xuXHRcdFx0aWYgKHRvLm5vZGVWYWx1ZSAhPT0gZnJvbS5ub2RlVmFsdWUpIHRvLm5vZGVWYWx1ZSA9IGZyb20ubm9kZVZhbHVlO1xuXHRcdH1cblx0XHRpZiAoIWlnbm9yZVZhbHVlT2ZBY3RpdmVFbGVtZW50KHRvLCBjdHgpKSBzeW5jSW5wdXRWYWx1ZShmcm9tLCB0bywgY3R4KTtcblx0fVxuXHRmdW5jdGlvbiBzeW5jQm9vbGVhbkF0dHJpYnV0ZShmcm9tLCB0bywgYXR0cmlidXRlTmFtZSwgY3R4KSB7XG5cdFx0aWYgKGZyb21bYXR0cmlidXRlTmFtZV0gIT09IHRvW2F0dHJpYnV0ZU5hbWVdKSB7XG5cdFx0XHRsZXQgaWdub3JlVXBkYXRlID0gaWdub3JlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIHRvLCBcInVwZGF0ZVwiLCBjdHgpO1xuXHRcdFx0aWYgKCFpZ25vcmVVcGRhdGUpIHRvW2F0dHJpYnV0ZU5hbWVdID0gZnJvbVthdHRyaWJ1dGVOYW1lXTtcblx0XHRcdGlmIChmcm9tW2F0dHJpYnV0ZU5hbWVdKSB7XG5cdFx0XHRcdGlmICghaWdub3JlVXBkYXRlKSB0by5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgZnJvbVthdHRyaWJ1dGVOYW1lXSk7XG5cdFx0XHR9IGVsc2UgaWYgKCFpZ25vcmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgdG8sIFwicmVtb3ZlXCIsIGN0eCkpIHRvLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gc3luY0lucHV0VmFsdWUoZnJvbSwgdG8sIGN0eCkge1xuXHRcdGlmIChmcm9tIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJiB0byBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgZnJvbS50eXBlICE9PSBcImZpbGVcIikge1xuXHRcdFx0bGV0IGZyb21WYWx1ZSA9IGZyb20udmFsdWU7XG5cdFx0XHRsZXQgdG9WYWx1ZSA9IHRvLnZhbHVlO1xuXHRcdFx0c3luY0Jvb2xlYW5BdHRyaWJ1dGUoZnJvbSwgdG8sIFwiY2hlY2tlZFwiLCBjdHgpO1xuXHRcdFx0c3luY0Jvb2xlYW5BdHRyaWJ1dGUoZnJvbSwgdG8sIFwiZGlzYWJsZWRcIiwgY3R4KTtcblx0XHRcdGlmICghZnJvbS5oYXNBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSkge1xuXHRcdFx0XHRpZiAoIWlnbm9yZUF0dHJpYnV0ZShcInZhbHVlXCIsIHRvLCBcInJlbW92ZVwiLCBjdHgpKSB7XG5cdFx0XHRcdFx0dG8udmFsdWUgPSBcIlwiO1xuXHRcdFx0XHRcdHRvLnJlbW92ZUF0dHJpYnV0ZShcInZhbHVlXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGZyb21WYWx1ZSAhPT0gdG9WYWx1ZSkge1xuXHRcdFx0XHRpZiAoIWlnbm9yZUF0dHJpYnV0ZShcInZhbHVlXCIsIHRvLCBcInVwZGF0ZVwiLCBjdHgpKSB7XG5cdFx0XHRcdFx0dG8uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgZnJvbVZhbHVlKTtcblx0XHRcdFx0XHR0by52YWx1ZSA9IGZyb21WYWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoZnJvbSBpbnN0YW5jZW9mIEhUTUxPcHRpb25FbGVtZW50KSBzeW5jQm9vbGVhbkF0dHJpYnV0ZShmcm9tLCB0bywgXCJzZWxlY3RlZFwiLCBjdHgpO1xuXHRcdGVsc2UgaWYgKGZyb20gaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50ICYmIHRvIGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCkge1xuXHRcdFx0bGV0IGZyb21WYWx1ZSA9IGZyb20udmFsdWU7XG5cdFx0XHRsZXQgdG9WYWx1ZSA9IHRvLnZhbHVlO1xuXHRcdFx0aWYgKGlnbm9yZUF0dHJpYnV0ZShcInZhbHVlXCIsIHRvLCBcInVwZGF0ZVwiLCBjdHgpKSByZXR1cm47XG5cdFx0XHRpZiAoZnJvbVZhbHVlICE9PSB0b1ZhbHVlKSB0by52YWx1ZSA9IGZyb21WYWx1ZTtcblx0XHRcdGlmICh0by5maXJzdENoaWxkICYmIHRvLmZpcnN0Q2hpbGQubm9kZVZhbHVlICE9PSBmcm9tVmFsdWUpIHRvLmZpcnN0Q2hpbGQubm9kZVZhbHVlID0gZnJvbVZhbHVlO1xuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBoYW5kbGVIZWFkRWxlbWVudChuZXdIZWFkVGFnLCBjdXJyZW50SGVhZCwgY3R4KSB7XG5cdFx0bGV0IGFkZGVkID0gW107XG5cdFx0bGV0IHJlbW92ZWQgPSBbXTtcblx0XHRsZXQgcHJlc2VydmVkID0gW107XG5cdFx0bGV0IG5vZGVzVG9BcHBlbmQgPSBbXTtcblx0XHRsZXQgaGVhZE1lcmdlU3R5bGUgPSBjdHguaGVhZC5zdHlsZTtcblx0XHRsZXQgc3JjVG9OZXdIZWFkTm9kZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRcdGZvciAoY29uc3QgbmV3SGVhZENoaWxkIG9mIG5ld0hlYWRUYWcuY2hpbGRyZW4pIHNyY1RvTmV3SGVhZE5vZGVzLnNldChuZXdIZWFkQ2hpbGQub3V0ZXJIVE1MLCBuZXdIZWFkQ2hpbGQpO1xuXHRcdGZvciAoY29uc3QgY3VycmVudEhlYWRFbHQgb2YgY3VycmVudEhlYWQuY2hpbGRyZW4pIHtcblx0XHRcdGxldCBpbk5ld0NvbnRlbnQgPSBzcmNUb05ld0hlYWROb2Rlcy5oYXMoY3VycmVudEhlYWRFbHQub3V0ZXJIVE1MKTtcblx0XHRcdGxldCBpc1JlQXBwZW5kZWQgPSBjdHguaGVhZC5zaG91bGRSZUFwcGVuZChjdXJyZW50SGVhZEVsdCk7XG5cdFx0XHRsZXQgaXNQcmVzZXJ2ZWQgPSBjdHguaGVhZC5zaG91bGRQcmVzZXJ2ZShjdXJyZW50SGVhZEVsdCk7XG5cdFx0XHRpZiAoaW5OZXdDb250ZW50IHx8IGlzUHJlc2VydmVkKSBpZiAoaXNSZUFwcGVuZGVkKSByZW1vdmVkLnB1c2goY3VycmVudEhlYWRFbHQpO1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHNyY1RvTmV3SGVhZE5vZGVzLmRlbGV0ZShjdXJyZW50SGVhZEVsdC5vdXRlckhUTUwpO1xuXHRcdFx0XHRwcmVzZXJ2ZWQucHVzaChjdXJyZW50SGVhZEVsdCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmIChoZWFkTWVyZ2VTdHlsZSA9PT0gXCJhcHBlbmRcIikge1xuXHRcdFx0XHRpZiAoaXNSZUFwcGVuZGVkKSB7XG5cdFx0XHRcdFx0cmVtb3ZlZC5wdXNoKGN1cnJlbnRIZWFkRWx0KTtcblx0XHRcdFx0XHRub2Rlc1RvQXBwZW5kLnB1c2goY3VycmVudEhlYWRFbHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGN0eC5oZWFkLnNob3VsZFJlbW92ZShjdXJyZW50SGVhZEVsdCkgIT09IGZhbHNlKSByZW1vdmVkLnB1c2goY3VycmVudEhlYWRFbHQpO1xuXHRcdH1cblx0XHRub2Rlc1RvQXBwZW5kLnB1c2goLi4uc3JjVG9OZXdIZWFkTm9kZXMudmFsdWVzKCkpO1xuXHRcdGxvZyhcInRvIGFwcGVuZDogXCIsIG5vZGVzVG9BcHBlbmQpO1xuXHRcdGxldCBwcm9taXNlcyA9IFtdO1xuXHRcdGZvciAoY29uc3QgbmV3Tm9kZSBvZiBub2Rlc1RvQXBwZW5kKSB7XG5cdFx0XHRsb2coXCJhZGRpbmc6IFwiLCBuZXdOb2RlKTtcblx0XHRcdGxldCBuZXdFbHQgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChuZXdOb2RlLm91dGVySFRNTCkuZmlyc3RDaGlsZDtcblx0XHRcdGxvZyhuZXdFbHQpO1xuXHRcdFx0aWYgKGN0eC5jYWxsYmFja3MuYmVmb3JlTm9kZUFkZGVkKG5ld0VsdCkgIT09IGZhbHNlKSB7XG5cdFx0XHRcdGlmIChuZXdFbHQuaHJlZiB8fCBuZXdFbHQuc3JjKSB7XG5cdFx0XHRcdFx0bGV0IHJlc29sdmUgPSBudWxsO1xuXHRcdFx0XHRcdGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24oX3Jlc29sdmUpIHtcblx0XHRcdFx0XHRcdHJlc29sdmUgPSBfcmVzb2x2ZTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRuZXdFbHQuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0cHJvbWlzZXMucHVzaChwcm9taXNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjdXJyZW50SGVhZC5hcHBlbmRDaGlsZChuZXdFbHQpO1xuXHRcdFx0XHRjdHguY2FsbGJhY2tzLmFmdGVyTm9kZUFkZGVkKG5ld0VsdCk7XG5cdFx0XHRcdGFkZGVkLnB1c2gobmV3RWx0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Zm9yIChjb25zdCByZW1vdmVkRWxlbWVudCBvZiByZW1vdmVkKSBpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlUmVtb3ZlZChyZW1vdmVkRWxlbWVudCkgIT09IGZhbHNlKSB7XG5cdFx0XHRjdXJyZW50SGVhZC5yZW1vdmVDaGlsZChyZW1vdmVkRWxlbWVudCk7XG5cdFx0XHRjdHguY2FsbGJhY2tzLmFmdGVyTm9kZVJlbW92ZWQocmVtb3ZlZEVsZW1lbnQpO1xuXHRcdH1cblx0XHRjdHguaGVhZC5hZnRlckhlYWRNb3JwaGVkKGN1cnJlbnRIZWFkLCB7XG5cdFx0XHRhZGRlZCxcblx0XHRcdGtlcHQ6IHByZXNlcnZlZCxcblx0XHRcdHJlbW92ZWRcblx0XHR9KTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH1cblx0ZnVuY3Rpb24gbG9nKCkge31cblx0ZnVuY3Rpb24gbm9PcCgpIHt9XG5cdGZ1bmN0aW9uIG1lcmdlRGVmYXVsdHMoY29uZmlnKSB7XG5cdFx0bGV0IGZpbmFsQ29uZmlnID0ge307XG5cdFx0T2JqZWN0LmFzc2lnbihmaW5hbENvbmZpZywgZGVmYXVsdHMpO1xuXHRcdE9iamVjdC5hc3NpZ24oZmluYWxDb25maWcsIGNvbmZpZyk7XG5cdFx0ZmluYWxDb25maWcuY2FsbGJhY2tzID0ge307XG5cdFx0T2JqZWN0LmFzc2lnbihmaW5hbENvbmZpZy5jYWxsYmFja3MsIGRlZmF1bHRzLmNhbGxiYWNrcyk7XG5cdFx0T2JqZWN0LmFzc2lnbihmaW5hbENvbmZpZy5jYWxsYmFja3MsIGNvbmZpZy5jYWxsYmFja3MpO1xuXHRcdGZpbmFsQ29uZmlnLmhlYWQgPSB7fTtcblx0XHRPYmplY3QuYXNzaWduKGZpbmFsQ29uZmlnLmhlYWQsIGRlZmF1bHRzLmhlYWQpO1xuXHRcdE9iamVjdC5hc3NpZ24oZmluYWxDb25maWcuaGVhZCwgY29uZmlnLmhlYWQpO1xuXHRcdHJldHVybiBmaW5hbENvbmZpZztcblx0fVxuXHRmdW5jdGlvbiBjcmVhdGVNb3JwaENvbnRleHQob2xkTm9kZSwgbmV3Q29udGVudCwgY29uZmlnKSB7XG5cdFx0Y29uZmlnID0gbWVyZ2VEZWZhdWx0cyhjb25maWcpO1xuXHRcdHJldHVybiB7XG5cdFx0XHR0YXJnZXQ6IG9sZE5vZGUsXG5cdFx0XHRuZXdDb250ZW50LFxuXHRcdFx0Y29uZmlnLFxuXHRcdFx0bW9ycGhTdHlsZTogY29uZmlnLm1vcnBoU3R5bGUsXG5cdFx0XHRpZ25vcmVBY3RpdmU6IGNvbmZpZy5pZ25vcmVBY3RpdmUsXG5cdFx0XHRpZ25vcmVBY3RpdmVWYWx1ZTogY29uZmlnLmlnbm9yZUFjdGl2ZVZhbHVlLFxuXHRcdFx0aWRNYXA6IGNyZWF0ZUlkTWFwKG9sZE5vZGUsIG5ld0NvbnRlbnQpLFxuXHRcdFx0ZGVhZElkczogLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSxcblx0XHRcdGNhbGxiYWNrczogY29uZmlnLmNhbGxiYWNrcyxcblx0XHRcdGhlYWQ6IGNvbmZpZy5oZWFkXG5cdFx0fTtcblx0fVxuXHRmdW5jdGlvbiBpc0lkU2V0TWF0Y2gobm9kZTEsIG5vZGUyLCBjdHgpIHtcblx0XHRpZiAobm9kZTEgPT0gbnVsbCB8fCBub2RlMiA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdFx0aWYgKG5vZGUxLm5vZGVUeXBlID09PSBub2RlMi5ub2RlVHlwZSAmJiBub2RlMS50YWdOYW1lID09PSBub2RlMi50YWdOYW1lKSBpZiAobm9kZTEuaWQgIT09IFwiXCIgJiYgbm9kZTEuaWQgPT09IG5vZGUyLmlkKSByZXR1cm4gdHJ1ZTtcblx0XHRlbHNlIHJldHVybiBnZXRJZEludGVyc2VjdGlvbkNvdW50KGN0eCwgbm9kZTEsIG5vZGUyKSA+IDA7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdGZ1bmN0aW9uIGlzU29mdE1hdGNoKG5vZGUxLCBub2RlMikge1xuXHRcdGlmIChub2RlMSA9PSBudWxsIHx8IG5vZGUyID09IG51bGwpIHJldHVybiBmYWxzZTtcblx0XHRyZXR1cm4gbm9kZTEubm9kZVR5cGUgPT09IG5vZGUyLm5vZGVUeXBlICYmIG5vZGUxLnRhZ05hbWUgPT09IG5vZGUyLnRhZ05hbWU7XG5cdH1cblx0ZnVuY3Rpb24gcmVtb3ZlTm9kZXNCZXR3ZWVuKHN0YXJ0SW5jbHVzaXZlLCBlbmRFeGNsdXNpdmUsIGN0eCkge1xuXHRcdHdoaWxlIChzdGFydEluY2x1c2l2ZSAhPT0gZW5kRXhjbHVzaXZlKSB7XG5cdFx0XHRsZXQgdGVtcE5vZGUgPSBzdGFydEluY2x1c2l2ZTtcblx0XHRcdHN0YXJ0SW5jbHVzaXZlID0gc3RhcnRJbmNsdXNpdmUubmV4dFNpYmxpbmc7XG5cdFx0XHRyZW1vdmVOb2RlKHRlbXBOb2RlLCBjdHgpO1xuXHRcdH1cblx0XHRyZW1vdmVJZHNGcm9tQ29uc2lkZXJhdGlvbihjdHgsIGVuZEV4Y2x1c2l2ZSk7XG5cdFx0cmV0dXJuIGVuZEV4Y2x1c2l2ZS5uZXh0U2libGluZztcblx0fVxuXHRmdW5jdGlvbiBmaW5kSWRTZXRNYXRjaChuZXdDb250ZW50LCBvbGRQYXJlbnQsIG5ld0NoaWxkLCBpbnNlcnRpb25Qb2ludCwgY3R4KSB7XG5cdFx0bGV0IG5ld0NoaWxkUG90ZW50aWFsSWRDb3VudCA9IGdldElkSW50ZXJzZWN0aW9uQ291bnQoY3R4LCBuZXdDaGlsZCwgb2xkUGFyZW50KTtcblx0XHRsZXQgcG90ZW50aWFsTWF0Y2ggPSBudWxsO1xuXHRcdGlmIChuZXdDaGlsZFBvdGVudGlhbElkQ291bnQgPiAwKSB7XG5cdFx0XHRsZXQgcG90ZW50aWFsTWF0Y2ggPSBpbnNlcnRpb25Qb2ludDtcblx0XHRcdGxldCBvdGhlck1hdGNoQ291bnQgPSAwO1xuXHRcdFx0d2hpbGUgKHBvdGVudGlhbE1hdGNoICE9IG51bGwpIHtcblx0XHRcdFx0aWYgKGlzSWRTZXRNYXRjaChuZXdDaGlsZCwgcG90ZW50aWFsTWF0Y2gsIGN0eCkpIHJldHVybiBwb3RlbnRpYWxNYXRjaDtcblx0XHRcdFx0b3RoZXJNYXRjaENvdW50ICs9IGdldElkSW50ZXJzZWN0aW9uQ291bnQoY3R4LCBwb3RlbnRpYWxNYXRjaCwgbmV3Q29udGVudCk7XG5cdFx0XHRcdGlmIChvdGhlck1hdGNoQ291bnQgPiBuZXdDaGlsZFBvdGVudGlhbElkQ291bnQpIHJldHVybiBudWxsO1xuXHRcdFx0XHRwb3RlbnRpYWxNYXRjaCA9IHBvdGVudGlhbE1hdGNoLm5leHRTaWJsaW5nO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcG90ZW50aWFsTWF0Y2g7XG5cdH1cblx0ZnVuY3Rpb24gZmluZFNvZnRNYXRjaChuZXdDb250ZW50LCBvbGRQYXJlbnQsIG5ld0NoaWxkLCBpbnNlcnRpb25Qb2ludCwgY3R4KSB7XG5cdFx0bGV0IHBvdGVudGlhbFNvZnRNYXRjaCA9IGluc2VydGlvblBvaW50O1xuXHRcdGxldCBuZXh0U2libGluZyA9IG5ld0NoaWxkLm5leHRTaWJsaW5nO1xuXHRcdGxldCBzaWJsaW5nU29mdE1hdGNoQ291bnQgPSAwO1xuXHRcdHdoaWxlIChwb3RlbnRpYWxTb2Z0TWF0Y2ggIT0gbnVsbCkge1xuXHRcdFx0aWYgKGdldElkSW50ZXJzZWN0aW9uQ291bnQoY3R4LCBwb3RlbnRpYWxTb2Z0TWF0Y2gsIG5ld0NvbnRlbnQpID4gMCkgcmV0dXJuIG51bGw7XG5cdFx0XHRpZiAoaXNTb2Z0TWF0Y2gobmV3Q2hpbGQsIHBvdGVudGlhbFNvZnRNYXRjaCkpIHJldHVybiBwb3RlbnRpYWxTb2Z0TWF0Y2g7XG5cdFx0XHRpZiAoaXNTb2Z0TWF0Y2gobmV4dFNpYmxpbmcsIHBvdGVudGlhbFNvZnRNYXRjaCkpIHtcblx0XHRcdFx0c2libGluZ1NvZnRNYXRjaENvdW50Kys7XG5cdFx0XHRcdG5leHRTaWJsaW5nID0gbmV4dFNpYmxpbmcubmV4dFNpYmxpbmc7XG5cdFx0XHRcdGlmIChzaWJsaW5nU29mdE1hdGNoQ291bnQgPj0gMikgcmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRwb3RlbnRpYWxTb2Z0TWF0Y2ggPSBwb3RlbnRpYWxTb2Z0TWF0Y2gubmV4dFNpYmxpbmc7XG5cdFx0fVxuXHRcdHJldHVybiBwb3RlbnRpYWxTb2Z0TWF0Y2g7XG5cdH1cblx0ZnVuY3Rpb24gcGFyc2VDb250ZW50KG5ld0NvbnRlbnQpIHtcblx0XHRsZXQgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuXHRcdGxldCBjb250ZW50V2l0aFN2Z3NSZW1vdmVkID0gbmV3Q29udGVudC5yZXBsYWNlKC88c3ZnKFxcc1tePl0qPnw+KShbXFxzXFxTXSo/KTxcXC9zdmc+L2dpbSwgXCJcIik7XG5cdFx0aWYgKGNvbnRlbnRXaXRoU3Znc1JlbW92ZWQubWF0Y2goLzxcXC9odG1sPi8pIHx8IGNvbnRlbnRXaXRoU3Znc1JlbW92ZWQubWF0Y2goLzxcXC9oZWFkPi8pIHx8IGNvbnRlbnRXaXRoU3Znc1JlbW92ZWQubWF0Y2goLzxcXC9ib2R5Pi8pKSB7XG5cdFx0XHRsZXQgY29udGVudCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcobmV3Q29udGVudCwgXCJ0ZXh0L2h0bWxcIik7XG5cdFx0XHRpZiAoY29udGVudFdpdGhTdmdzUmVtb3ZlZC5tYXRjaCgvPFxcL2h0bWw+LykpIHtcblx0XHRcdFx0Y29udGVudC5nZW5lcmF0ZWRCeUlkaW9tb3JwaCA9IHRydWU7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGV0IGh0bWxFbGVtZW50ID0gY29udGVudC5maXJzdENoaWxkO1xuXHRcdFx0XHRpZiAoaHRtbEVsZW1lbnQpIHtcblx0XHRcdFx0XHRodG1sRWxlbWVudC5nZW5lcmF0ZWRCeUlkaW9tb3JwaCA9IHRydWU7XG5cdFx0XHRcdFx0cmV0dXJuIGh0bWxFbGVtZW50O1xuXHRcdFx0XHR9IGVsc2UgcmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCBjb250ZW50ID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhcIjxib2R5Pjx0ZW1wbGF0ZT5cIiArIG5ld0NvbnRlbnQgKyBcIjwvdGVtcGxhdGU+PC9ib2R5PlwiLCBcInRleHQvaHRtbFwiKS5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCJ0ZW1wbGF0ZVwiKS5jb250ZW50O1xuXHRcdFx0Y29udGVudC5nZW5lcmF0ZWRCeUlkaW9tb3JwaCA9IHRydWU7XG5cdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gbm9ybWFsaXplQ29udGVudChuZXdDb250ZW50KSB7XG5cdFx0aWYgKG5ld0NvbnRlbnQgPT0gbnVsbCkgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0ZWxzZSBpZiAobmV3Q29udGVudC5nZW5lcmF0ZWRCeUlkaW9tb3JwaCkgcmV0dXJuIG5ld0NvbnRlbnQ7XG5cdFx0ZWxzZSBpZiAobmV3Q29udGVudCBpbnN0YW5jZW9mIE5vZGUpIHtcblx0XHRcdGNvbnN0IGR1bW15UGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdGR1bW15UGFyZW50LmFwcGVuZChuZXdDb250ZW50KTtcblx0XHRcdHJldHVybiBkdW1teVBhcmVudDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgZHVtbXlQYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0Zm9yIChjb25zdCBlbHQgb2YgWy4uLm5ld0NvbnRlbnRdKSBkdW1teVBhcmVudC5hcHBlbmQoZWx0KTtcblx0XHRcdHJldHVybiBkdW1teVBhcmVudDtcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gaW5zZXJ0U2libGluZ3MocHJldmlvdXNTaWJsaW5nLCBtb3JwaGVkTm9kZSwgbmV4dFNpYmxpbmcpIHtcblx0XHRsZXQgc3RhY2sgPSBbXTtcblx0XHRsZXQgYWRkZWQgPSBbXTtcblx0XHR3aGlsZSAocHJldmlvdXNTaWJsaW5nICE9IG51bGwpIHtcblx0XHRcdHN0YWNrLnB1c2gocHJldmlvdXNTaWJsaW5nKTtcblx0XHRcdHByZXZpb3VzU2libGluZyA9IHByZXZpb3VzU2libGluZy5wcmV2aW91c1NpYmxpbmc7XG5cdFx0fVxuXHRcdHdoaWxlIChzdGFjay5sZW5ndGggPiAwKSB7XG5cdFx0XHRsZXQgbm9kZSA9IHN0YWNrLnBvcCgpO1xuXHRcdFx0YWRkZWQucHVzaChub2RlKTtcblx0XHRcdG1vcnBoZWROb2RlLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIG1vcnBoZWROb2RlKTtcblx0XHR9XG5cdFx0YWRkZWQucHVzaChtb3JwaGVkTm9kZSk7XG5cdFx0d2hpbGUgKG5leHRTaWJsaW5nICE9IG51bGwpIHtcblx0XHRcdHN0YWNrLnB1c2gobmV4dFNpYmxpbmcpO1xuXHRcdFx0YWRkZWQucHVzaChuZXh0U2libGluZyk7XG5cdFx0XHRuZXh0U2libGluZyA9IG5leHRTaWJsaW5nLm5leHRTaWJsaW5nO1xuXHRcdH1cblx0XHR3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkgbW9ycGhlZE5vZGUucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoc3RhY2sucG9wKCksIG1vcnBoZWROb2RlLm5leHRTaWJsaW5nKTtcblx0XHRyZXR1cm4gYWRkZWQ7XG5cdH1cblx0ZnVuY3Rpb24gZmluZEJlc3ROb2RlTWF0Y2gobmV3Q29udGVudCwgb2xkTm9kZSwgY3R4KSB7XG5cdFx0bGV0IGN1cnJlbnRFbGVtZW50O1xuXHRcdGN1cnJlbnRFbGVtZW50ID0gbmV3Q29udGVudC5maXJzdENoaWxkO1xuXHRcdGxldCBiZXN0RWxlbWVudCA9IGN1cnJlbnRFbGVtZW50O1xuXHRcdGxldCBzY29yZSA9IDA7XG5cdFx0d2hpbGUgKGN1cnJlbnRFbGVtZW50KSB7XG5cdFx0XHRsZXQgbmV3U2NvcmUgPSBzY29yZUVsZW1lbnQoY3VycmVudEVsZW1lbnQsIG9sZE5vZGUsIGN0eCk7XG5cdFx0XHRpZiAobmV3U2NvcmUgPiBzY29yZSkge1xuXHRcdFx0XHRiZXN0RWxlbWVudCA9IGN1cnJlbnRFbGVtZW50O1xuXHRcdFx0XHRzY29yZSA9IG5ld1Njb3JlO1xuXHRcdFx0fVxuXHRcdFx0Y3VycmVudEVsZW1lbnQgPSBjdXJyZW50RWxlbWVudC5uZXh0U2libGluZztcblx0XHR9XG5cdFx0cmV0dXJuIGJlc3RFbGVtZW50O1xuXHR9XG5cdGZ1bmN0aW9uIHNjb3JlRWxlbWVudChub2RlMSwgbm9kZTIsIGN0eCkge1xuXHRcdGlmIChpc1NvZnRNYXRjaChub2RlMSwgbm9kZTIpKSByZXR1cm4gLjUgKyBnZXRJZEludGVyc2VjdGlvbkNvdW50KGN0eCwgbm9kZTEsIG5vZGUyKTtcblx0XHRyZXR1cm4gMDtcblx0fVxuXHRmdW5jdGlvbiByZW1vdmVOb2RlKHRlbXBOb2RlLCBjdHgpIHtcblx0XHRyZW1vdmVJZHNGcm9tQ29uc2lkZXJhdGlvbihjdHgsIHRlbXBOb2RlKTtcblx0XHRpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlUmVtb3ZlZCh0ZW1wTm9kZSkgPT09IGZhbHNlKSByZXR1cm47XG5cdFx0dGVtcE5vZGUucmVtb3ZlKCk7XG5cdFx0Y3R4LmNhbGxiYWNrcy5hZnRlck5vZGVSZW1vdmVkKHRlbXBOb2RlKTtcblx0fVxuXHRmdW5jdGlvbiBpc0lkSW5Db25zaWRlcmF0aW9uKGN0eCwgaWQpIHtcblx0XHRyZXR1cm4gIWN0eC5kZWFkSWRzLmhhcyhpZCk7XG5cdH1cblx0ZnVuY3Rpb24gaWRJc1dpdGhpbk5vZGUoY3R4LCBpZCwgdGFyZ2V0Tm9kZSkge1xuXHRcdHJldHVybiAoY3R4LmlkTWFwLmdldCh0YXJnZXROb2RlKSB8fCBFTVBUWV9TRVQpLmhhcyhpZCk7XG5cdH1cblx0ZnVuY3Rpb24gcmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCBub2RlKSB7XG5cdFx0bGV0IGlkU2V0ID0gY3R4LmlkTWFwLmdldChub2RlKSB8fCBFTVBUWV9TRVQ7XG5cdFx0Zm9yIChjb25zdCBpZCBvZiBpZFNldCkgY3R4LmRlYWRJZHMuYWRkKGlkKTtcblx0fVxuXHRmdW5jdGlvbiBnZXRJZEludGVyc2VjdGlvbkNvdW50KGN0eCwgbm9kZTEsIG5vZGUyKSB7XG5cdFx0bGV0IHNvdXJjZVNldCA9IGN0eC5pZE1hcC5nZXQobm9kZTEpIHx8IEVNUFRZX1NFVDtcblx0XHRsZXQgbWF0Y2hDb3VudCA9IDA7XG5cdFx0Zm9yIChjb25zdCBpZCBvZiBzb3VyY2VTZXQpIGlmIChpc0lkSW5Db25zaWRlcmF0aW9uKGN0eCwgaWQpICYmIGlkSXNXaXRoaW5Ob2RlKGN0eCwgaWQsIG5vZGUyKSkgKyttYXRjaENvdW50O1xuXHRcdHJldHVybiBtYXRjaENvdW50O1xuXHR9XG5cdGZ1bmN0aW9uIHBvcHVsYXRlSWRNYXBGb3JOb2RlKG5vZGUsIGlkTWFwKSB7XG5cdFx0bGV0IG5vZGVQYXJlbnQgPSBub2RlLnBhcmVudEVsZW1lbnQ7XG5cdFx0bGV0IGlkRWxlbWVudHMgPSBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWRdXCIpO1xuXHRcdGZvciAoY29uc3QgZWx0IG9mIGlkRWxlbWVudHMpIHtcblx0XHRcdGxldCBjdXJyZW50ID0gZWx0O1xuXHRcdFx0d2hpbGUgKGN1cnJlbnQgIT09IG5vZGVQYXJlbnQgJiYgY3VycmVudCAhPSBudWxsKSB7XG5cdFx0XHRcdGxldCBpZFNldCA9IGlkTWFwLmdldChjdXJyZW50KTtcblx0XHRcdFx0aWYgKGlkU2V0ID09IG51bGwpIHtcblx0XHRcdFx0XHRpZFNldCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG5cdFx0XHRcdFx0aWRNYXAuc2V0KGN1cnJlbnQsIGlkU2V0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZFNldC5hZGQoZWx0LmlkKTtcblx0XHRcdFx0Y3VycmVudCA9IGN1cnJlbnQucGFyZW50RWxlbWVudDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gY3JlYXRlSWRNYXAob2xkQ29udGVudCwgbmV3Q29udGVudCkge1xuXHRcdGxldCBpZE1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdFx0cG9wdWxhdGVJZE1hcEZvck5vZGUob2xkQ29udGVudCwgaWRNYXApO1xuXHRcdHBvcHVsYXRlSWRNYXBGb3JOb2RlKG5ld0NvbnRlbnQsIGlkTWFwKTtcblx0XHRyZXR1cm4gaWRNYXA7XG5cdH1cblx0cmV0dXJuIHtcblx0XHRtb3JwaCxcblx0XHRkZWZhdWx0c1xuXHR9O1xufSkoKTtcbmZ1bmN0aW9uIG5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uKGVsZW1lbnQpIHtcblx0aWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgZWxlbWVudC50eXBlID09PSBcImZpbGVcIikpIHtcblx0XHRpZiAoXCJ2YWx1ZVwiIGluIGVsZW1lbnQpIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgZWxlbWVudC52YWx1ZSk7XG5cdFx0ZWxzZSBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSkgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlwiKTtcblx0fVxuXHRBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkKSA9PiB7XG5cdFx0bm9ybWFsaXplQXR0cmlidXRlc0ZvckNvbXBhcmlzb24oY2hpbGQpO1xuXHR9KTtcbn1cbmNvbnN0IHN5bmNBdHRyaWJ1dGVzID0gKGZyb21FbCwgdG9FbCkgPT4ge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGZyb21FbC5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgYXR0ciA9IGZyb21FbC5hdHRyaWJ1dGVzW2ldO1xuXHRcdHRvRWwuc2V0QXR0cmlidXRlKGF0dHIubmFtZSwgYXR0ci52YWx1ZSk7XG5cdH1cbn07XG5mdW5jdGlvbiBleGVjdXRlTW9ycGhkb20ocm9vdEZyb21FbGVtZW50LCByb290VG9FbGVtZW50LCBtb2RpZmllZEZpZWxkRWxlbWVudHMsIGdldEVsZW1lbnRWYWx1ZSwgZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIpIHtcblx0Y29uc3Qgb3JpZ2luYWxFbGVtZW50SWRzVG9Td2FwQWZ0ZXIgPSBbXTtcblx0Y29uc3Qgb3JpZ2luYWxFbGVtZW50c1RvUHJlc2VydmUgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRjb25zdCBtYXJrRWxlbWVudEFzTmVlZGluZ1Bvc3RNb3JwaFN3YXAgPSAoaWQsIHJlcGxhY2VXaXRoQ2xvbmUpID0+IHtcblx0XHRjb25zdCBvbGRFbGVtZW50ID0gb3JpZ2luYWxFbGVtZW50c1RvUHJlc2VydmUuZ2V0KGlkKTtcblx0XHRpZiAoIShvbGRFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB0aHJvdyBuZXcgRXJyb3IoYE9yaWdpbmFsIGVsZW1lbnQgd2l0aCBpZCAke2lkfSBub3QgZm91bmRgKTtcblx0XHRvcmlnaW5hbEVsZW1lbnRJZHNUb1N3YXBBZnRlci5wdXNoKGlkKTtcblx0XHRpZiAoIXJlcGxhY2VXaXRoQ2xvbmUpIHJldHVybiBudWxsO1xuXHRcdGNvbnN0IGNsb25lZE9sZEVsZW1lbnQgPSBjbG9uZUhUTUxFbGVtZW50KG9sZEVsZW1lbnQpO1xuXHRcdG9sZEVsZW1lbnQucmVwbGFjZVdpdGgoY2xvbmVkT2xkRWxlbWVudCk7XG5cdFx0cmV0dXJuIGNsb25lZE9sZEVsZW1lbnQ7XG5cdH07XG5cdHJvb3RUb0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWxpdmUtcHJlc2VydmVdXCIpLmZvckVhY2goKG5ld0VsZW1lbnQpID0+IHtcblx0XHRjb25zdCBpZCA9IG5ld0VsZW1lbnQuaWQ7XG5cdFx0aWYgKCFpZCkgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGRhdGEtbGl2ZS1wcmVzZXJ2ZSBhdHRyaWJ1dGUgcmVxdWlyZXMgYW4gaWQgYXR0cmlidXRlIHRvIGJlIHNldCBvbiB0aGUgZWxlbWVudFwiKTtcblx0XHRjb25zdCBvbGRFbGVtZW50ID0gcm9vdEZyb21FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApO1xuXHRcdGlmICghKG9sZEVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHRocm93IG5ldyBFcnJvcihgVGhlIGVsZW1lbnQgd2l0aCBpZCBcIiR7aWR9XCIgd2FzIG5vdCBmb3VuZCBpbiB0aGUgb3JpZ2luYWwgSFRNTGApO1xuXHRcdG5ld0VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1saXZlLXByZXNlcnZlXCIpO1xuXHRcdG9yaWdpbmFsRWxlbWVudHNUb1ByZXNlcnZlLnNldChpZCwgb2xkRWxlbWVudCk7XG5cdFx0c3luY0F0dHJpYnV0ZXMobmV3RWxlbWVudCwgb2xkRWxlbWVudCk7XG5cdH0pO1xuXHRJZGlvbW9ycGgubW9ycGgocm9vdEZyb21FbGVtZW50LCByb290VG9FbGVtZW50LCB7IGNhbGxiYWNrczoge1xuXHRcdGJlZm9yZU5vZGVNb3JwaGVkOiAoZnJvbUVsLCB0b0VsKSA9PiB7XG5cdFx0XHRpZiAoIShmcm9tRWwgaW5zdGFuY2VvZiBFbGVtZW50KSB8fCAhKHRvRWwgaW5zdGFuY2VvZiBFbGVtZW50KSkgcmV0dXJuIHRydWU7XG5cdFx0XHRpZiAoZnJvbUVsID09PSByb290RnJvbUVsZW1lbnQpIHJldHVybiB0cnVlO1xuXHRcdFx0aWYgKGZyb21FbC5pZCAmJiBvcmlnaW5hbEVsZW1lbnRzVG9QcmVzZXJ2ZS5oYXMoZnJvbUVsLmlkKSkge1xuXHRcdFx0XHRpZiAoZnJvbUVsLmlkID09PSB0b0VsLmlkKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGNvbnN0IGNsb25lZEZyb21FbCA9IG1hcmtFbGVtZW50QXNOZWVkaW5nUG9zdE1vcnBoU3dhcChmcm9tRWwuaWQsIHRydWUpO1xuXHRcdFx0XHRpZiAoIWNsb25lZEZyb21FbCkgdGhyb3cgbmV3IEVycm9yKFwibWlzc2luZyBjbG9uZVwiKTtcblx0XHRcdFx0SWRpb21vcnBoLm1vcnBoKGNsb25lZEZyb21FbCwgdG9FbCk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmIChmcm9tRWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiB0b0VsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblx0XHRcdFx0aWYgKHR5cGVvZiBmcm9tRWwuX194ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdFx0aWYgKCF3aW5kb3cuQWxwaW5lKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gYWNjZXNzIEFscGluZS5qcyB0aG91Z2ggdGhlIGdsb2JhbCB3aW5kb3cuQWxwaW5lIHZhcmlhYmxlLiBQbGVhc2UgbWFrZSBzdXJlIEFscGluZS5qcyBpcyBsb2FkZWQgYmVmb3JlIFN5bWZvbnkgVVggTGl2ZUNvbXBvbmVudC5cIik7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiB3aW5kb3cuQWxwaW5lLm1vcnBoICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBhY2Nlc3MgQWxwaW5lLmpzIG1vcnBoIGZ1bmN0aW9uLiBQbGVhc2UgbWFrZSBzdXJlIHRoZSBBbHBpbmUuanMgTW9ycGggcGx1Z2luIGlzIGluc3RhbGxlZCBhbmQgbG9hZGVkLCBzZWUgaHR0cHM6Ly9hbHBpbmVqcy5kZXYvcGx1Z2lucy9tb3JwaCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cIik7XG5cdFx0XHRcdFx0d2luZG93LkFscGluZS5tb3JwaChmcm9tRWwuX194LCB0b0VsKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIud2FzRWxlbWVudEFkZGVkKGZyb21FbCkpIHtcblx0XHRcdFx0XHRmcm9tRWwuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJlbmRcIiwgdG9FbCk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChtb2RpZmllZEZpZWxkRWxlbWVudHMuaW5jbHVkZXMoZnJvbUVsKSkgc2V0VmFsdWVPbkVsZW1lbnQodG9FbCwgZ2V0RWxlbWVudFZhbHVlKGZyb21FbCkpO1xuXHRcdFx0XHRpZiAoZnJvbUVsID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIGZyb21FbCAhPT0gZG9jdW1lbnQuYm9keSAmJiBudWxsICE9PSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGZyb21FbCwgZmFsc2UpKSBzZXRWYWx1ZU9uRWxlbWVudCh0b0VsLCBnZXRFbGVtZW50VmFsdWUoZnJvbUVsKSk7XG5cdFx0XHRcdGNvbnN0IGVsZW1lbnRDaGFuZ2VzID0gZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuZ2V0Q2hhbmdlZEVsZW1lbnQoZnJvbUVsKTtcblx0XHRcdFx0aWYgKGVsZW1lbnRDaGFuZ2VzKSBlbGVtZW50Q2hhbmdlcy5hcHBseVRvRWxlbWVudCh0b0VsKTtcblx0XHRcdFx0aWYgKGZyb21FbC5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpICE9PSBcIk9QVElPTlwiICYmIGZyb21FbC5pc0VxdWFsTm9kZSh0b0VsKSkge1xuXHRcdFx0XHRcdGNvbnN0IG5vcm1hbGl6ZWRGcm9tRWwgPSBjbG9uZUhUTUxFbGVtZW50KGZyb21FbCk7XG5cdFx0XHRcdFx0bm9ybWFsaXplQXR0cmlidXRlc0ZvckNvbXBhcmlzb24obm9ybWFsaXplZEZyb21FbCk7XG5cdFx0XHRcdFx0Y29uc3Qgbm9ybWFsaXplZFRvRWwgPSBjbG9uZUhUTUxFbGVtZW50KHRvRWwpO1xuXHRcdFx0XHRcdG5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uKG5vcm1hbGl6ZWRUb0VsKTtcblx0XHRcdFx0XHRpZiAobm9ybWFsaXplZEZyb21FbC5pc0VxdWFsTm9kZShub3JtYWxpemVkVG9FbCkpIHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGZyb21FbC5oYXNBdHRyaWJ1dGUoXCJkYXRhLXNraXAtbW9ycGhcIikgfHwgZnJvbUVsLmlkICYmIGZyb21FbC5pZCAhPT0gdG9FbC5pZCkge1xuXHRcdFx0XHRmcm9tRWwuaW5uZXJIVE1MID0gdG9FbC5pbm5lckhUTUw7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGZyb21FbC5wYXJlbnRFbGVtZW50Py5oYXNBdHRyaWJ1dGUoXCJkYXRhLXNraXAtbW9ycGhcIikpIHJldHVybiBmYWxzZTtcblx0XHRcdHJldHVybiAhZnJvbUVsLmhhc0F0dHJpYnV0ZShcImRhdGEtbGl2ZS1pZ25vcmVcIik7XG5cdFx0fSxcblx0XHRiZWZvcmVOb2RlUmVtb3ZlZChub2RlKSB7XG5cdFx0XHRpZiAoIShub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSByZXR1cm4gdHJ1ZTtcblx0XHRcdGlmIChub2RlLmlkICYmIG9yaWdpbmFsRWxlbWVudHNUb1ByZXNlcnZlLmhhcyhub2RlLmlkKSkge1xuXHRcdFx0XHRtYXJrRWxlbWVudEFzTmVlZGluZ1Bvc3RNb3JwaFN3YXAobm9kZS5pZCwgZmFsc2UpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGlmIChleHRlcm5hbE11dGF0aW9uVHJhY2tlci53YXNFbGVtZW50QWRkZWQobm9kZSkpIHJldHVybiBmYWxzZTtcblx0XHRcdHJldHVybiAhbm9kZS5oYXNBdHRyaWJ1dGUoXCJkYXRhLWxpdmUtaWdub3JlXCIpO1xuXHRcdH1cblx0fSB9KTtcblx0b3JpZ2luYWxFbGVtZW50SWRzVG9Td2FwQWZ0ZXIuZm9yRWFjaCgoaWQpID0+IHtcblx0XHRjb25zdCBuZXdFbGVtZW50ID0gcm9vdEZyb21FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApO1xuXHRcdGNvbnN0IG9yaWdpbmFsRWxlbWVudCA9IG9yaWdpbmFsRWxlbWVudHNUb1ByZXNlcnZlLmdldChpZCk7XG5cdFx0aWYgKCEobmV3RWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhKG9yaWdpbmFsRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBlbGVtZW50cy5cIik7XG5cdFx0bmV3RWxlbWVudC5yZXBsYWNlV2l0aChvcmlnaW5hbEVsZW1lbnQpO1xuXHR9KTtcbn1cbnZhciBDaGFuZ2luZ0l0ZW1zVHJhY2tlcl9kZWZhdWx0ID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmNoYW5nZWRJdGVtcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdFx0dGhpcy5yZW1vdmVkSXRlbXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHR9XG5cdHNldEl0ZW0oaXRlbU5hbWUsIG5ld1ZhbHVlLCBwcmV2aW91c1ZhbHVlKSB7XG5cdFx0aWYgKHRoaXMucmVtb3ZlZEl0ZW1zLmhhcyhpdGVtTmFtZSkpIHtcblx0XHRcdGNvbnN0IHJlbW92ZWRSZWNvcmQgPSB0aGlzLnJlbW92ZWRJdGVtcy5nZXQoaXRlbU5hbWUpO1xuXHRcdFx0dGhpcy5yZW1vdmVkSXRlbXMuZGVsZXRlKGl0ZW1OYW1lKTtcblx0XHRcdGlmIChyZW1vdmVkUmVjb3JkLm9yaWdpbmFsID09PSBuZXdWYWx1ZSkgcmV0dXJuO1xuXHRcdH1cblx0XHRpZiAodGhpcy5jaGFuZ2VkSXRlbXMuaGFzKGl0ZW1OYW1lKSkge1xuXHRcdFx0Y29uc3Qgb3JpZ2luYWxSZWNvcmQgPSB0aGlzLmNoYW5nZWRJdGVtcy5nZXQoaXRlbU5hbWUpO1xuXHRcdFx0aWYgKG9yaWdpbmFsUmVjb3JkLm9yaWdpbmFsID09PSBuZXdWYWx1ZSkge1xuXHRcdFx0XHR0aGlzLmNoYW5nZWRJdGVtcy5kZWxldGUoaXRlbU5hbWUpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmNoYW5nZWRJdGVtcy5zZXQoaXRlbU5hbWUsIHtcblx0XHRcdFx0b3JpZ2luYWw6IG9yaWdpbmFsUmVjb3JkLm9yaWdpbmFsLFxuXHRcdFx0XHRuZXc6IG5ld1ZhbHVlXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5jaGFuZ2VkSXRlbXMuc2V0KGl0ZW1OYW1lLCB7XG5cdFx0XHRvcmlnaW5hbDogcHJldmlvdXNWYWx1ZSxcblx0XHRcdG5ldzogbmV3VmFsdWVcblx0XHR9KTtcblx0fVxuXHRyZW1vdmVJdGVtKGl0ZW1OYW1lLCBjdXJyZW50VmFsdWUpIHtcblx0XHRsZXQgdHJ1ZU9yaWdpbmFsVmFsdWUgPSBjdXJyZW50VmFsdWU7XG5cdFx0aWYgKHRoaXMuY2hhbmdlZEl0ZW1zLmhhcyhpdGVtTmFtZSkpIHtcblx0XHRcdHRydWVPcmlnaW5hbFZhbHVlID0gdGhpcy5jaGFuZ2VkSXRlbXMuZ2V0KGl0ZW1OYW1lKS5vcmlnaW5hbDtcblx0XHRcdHRoaXMuY2hhbmdlZEl0ZW1zLmRlbGV0ZShpdGVtTmFtZSk7XG5cdFx0XHRpZiAodHJ1ZU9yaWdpbmFsVmFsdWUgPT09IG51bGwpIHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLnJlbW92ZWRJdGVtcy5oYXMoaXRlbU5hbWUpKSB0aGlzLnJlbW92ZWRJdGVtcy5zZXQoaXRlbU5hbWUsIHsgb3JpZ2luYWw6IHRydWVPcmlnaW5hbFZhbHVlIH0pO1xuXHR9XG5cdGdldENoYW5nZWRJdGVtcygpIHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmNoYW5nZWRJdGVtcywgKFtuYW1lLCB7IG5ldzogdmFsdWUgfV0pID0+ICh7XG5cdFx0XHRuYW1lLFxuXHRcdFx0dmFsdWVcblx0XHR9KSk7XG5cdH1cblx0Z2V0UmVtb3ZlZEl0ZW1zKCkge1xuXHRcdHJldHVybiBBcnJheS5mcm9tKHRoaXMucmVtb3ZlZEl0ZW1zLmtleXMoKSk7XG5cdH1cblx0aXNFbXB0eSgpIHtcblx0XHRyZXR1cm4gdGhpcy5jaGFuZ2VkSXRlbXMuc2l6ZSA9PT0gMCAmJiB0aGlzLnJlbW92ZWRJdGVtcy5zaXplID09PSAwO1xuXHR9XG59O1xudmFyIEVsZW1lbnRDaGFuZ2VzID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmFkZGVkQ2xhc3NlcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG5cdFx0dGhpcy5yZW1vdmVkQ2xhc3NlcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG5cdFx0dGhpcy5zdHlsZUNoYW5nZXMgPSBuZXcgQ2hhbmdpbmdJdGVtc1RyYWNrZXJfZGVmYXVsdCgpO1xuXHRcdHRoaXMuYXR0cmlidXRlQ2hhbmdlcyA9IG5ldyBDaGFuZ2luZ0l0ZW1zVHJhY2tlcl9kZWZhdWx0KCk7XG5cdH1cblx0YWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG5cdFx0aWYgKCF0aGlzLnJlbW92ZWRDbGFzc2VzLmRlbGV0ZShjbGFzc05hbWUpKSB0aGlzLmFkZGVkQ2xhc3Nlcy5hZGQoY2xhc3NOYW1lKTtcblx0fVxuXHRyZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcblx0XHRpZiAoIXRoaXMuYWRkZWRDbGFzc2VzLmRlbGV0ZShjbGFzc05hbWUpKSB0aGlzLnJlbW92ZWRDbGFzc2VzLmFkZChjbGFzc05hbWUpO1xuXHR9XG5cdGFkZFN0eWxlKHN0eWxlTmFtZSwgbmV3VmFsdWUsIG9yaWdpbmFsVmFsdWUpIHtcblx0XHR0aGlzLnN0eWxlQ2hhbmdlcy5zZXRJdGVtKHN0eWxlTmFtZSwgbmV3VmFsdWUsIG9yaWdpbmFsVmFsdWUpO1xuXHR9XG5cdHJlbW92ZVN0eWxlKHN0eWxlTmFtZSwgb3JpZ2luYWxWYWx1ZSkge1xuXHRcdHRoaXMuc3R5bGVDaGFuZ2VzLnJlbW92ZUl0ZW0oc3R5bGVOYW1lLCBvcmlnaW5hbFZhbHVlKTtcblx0fVxuXHRhZGRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgbmV3VmFsdWUsIG9yaWdpbmFsVmFsdWUpIHtcblx0XHR0aGlzLmF0dHJpYnV0ZUNoYW5nZXMuc2V0SXRlbShhdHRyaWJ1dGVOYW1lLCBuZXdWYWx1ZSwgb3JpZ2luYWxWYWx1ZSk7XG5cdH1cblx0cmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIG9yaWdpbmFsVmFsdWUpIHtcblx0XHR0aGlzLmF0dHJpYnV0ZUNoYW5nZXMucmVtb3ZlSXRlbShhdHRyaWJ1dGVOYW1lLCBvcmlnaW5hbFZhbHVlKTtcblx0fVxuXHRnZXRBZGRlZENsYXNzZXMoKSB7XG5cdFx0cmV0dXJuIFsuLi50aGlzLmFkZGVkQ2xhc3Nlc107XG5cdH1cblx0Z2V0UmVtb3ZlZENsYXNzZXMoKSB7XG5cdFx0cmV0dXJuIFsuLi50aGlzLnJlbW92ZWRDbGFzc2VzXTtcblx0fVxuXHRnZXRDaGFuZ2VkU3R5bGVzKCkge1xuXHRcdHJldHVybiB0aGlzLnN0eWxlQ2hhbmdlcy5nZXRDaGFuZ2VkSXRlbXMoKTtcblx0fVxuXHRnZXRSZW1vdmVkU3R5bGVzKCkge1xuXHRcdHJldHVybiB0aGlzLnN0eWxlQ2hhbmdlcy5nZXRSZW1vdmVkSXRlbXMoKTtcblx0fVxuXHRnZXRDaGFuZ2VkQXR0cmlidXRlcygpIHtcblx0XHRyZXR1cm4gdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLmdldENoYW5nZWRJdGVtcygpO1xuXHR9XG5cdGdldFJlbW92ZWRBdHRyaWJ1dGVzKCkge1xuXHRcdHJldHVybiB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMuZ2V0UmVtb3ZlZEl0ZW1zKCk7XG5cdH1cblx0YXBwbHlUb0VsZW1lbnQoZWxlbWVudCkge1xuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi50aGlzLmFkZGVkQ2xhc3Nlcyk7XG5cdFx0ZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKC4uLnRoaXMucmVtb3ZlZENsYXNzZXMpO1xuXHRcdHRoaXMuc3R5bGVDaGFuZ2VzLmdldENoYW5nZWRJdGVtcygpLmZvckVhY2goKGNoYW5nZSkgPT4ge1xuXHRcdFx0aWYgKC8hXFxzKmltcG9ydGFudC9pLnRlc3QoY2hhbmdlLnZhbHVlKSkgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShjaGFuZ2UubmFtZSwgY2hhbmdlLnZhbHVlLnJlcGxhY2UoLyFcXHMqaW1wb3J0YW50L2ksIFwiXCIpLnRyaW0oKSwgXCJpbXBvcnRhbnRcIik7XG5cdFx0XHRlbHNlIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoY2hhbmdlLm5hbWUsIGNoYW5nZS52YWx1ZSk7XG5cdFx0fSk7XG5cdFx0dGhpcy5zdHlsZUNoYW5nZXMuZ2V0UmVtb3ZlZEl0ZW1zKCkuZm9yRWFjaCgoc3R5bGVOYW1lKSA9PiB7XG5cdFx0XHRlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KHN0eWxlTmFtZSk7XG5cdFx0fSk7XG5cdFx0dGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLmdldENoYW5nZWRJdGVtcygpLmZvckVhY2goKGNoYW5nZSkgPT4ge1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoY2hhbmdlLm5hbWUsIGNoYW5nZS52YWx1ZSk7XG5cdFx0fSk7XG5cdFx0dGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLmdldFJlbW92ZWRJdGVtcygpLmZvckVhY2goKGF0dHJpYnV0ZU5hbWUpID0+IHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuXHRcdH0pO1xuXHR9XG5cdGlzRW1wdHkoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWRkZWRDbGFzc2VzLnNpemUgPT09IDAgJiYgdGhpcy5yZW1vdmVkQ2xhc3Nlcy5zaXplID09PSAwICYmIHRoaXMuc3R5bGVDaGFuZ2VzLmlzRW1wdHkoKSAmJiB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMuaXNFbXB0eSgpO1xuXHR9XG59O1xudmFyIEV4dGVybmFsTXV0YXRpb25UcmFja2VyX2RlZmF1bHQgPSBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKGVsZW1lbnQsIHNob3VsZFRyYWNrQ2hhbmdlQ2FsbGJhY2spIHtcblx0XHR0aGlzLmNoYW5nZWRFbGVtZW50cyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuXHRcdHRoaXMuY2hhbmdlZEVsZW1lbnRzQ291bnQgPSAwO1xuXHRcdHRoaXMuYWRkZWRFbGVtZW50cyA9IFtdO1xuXHRcdHRoaXMucmVtb3ZlZEVsZW1lbnRzID0gW107XG5cdFx0dGhpcy5pc1N0YXJ0ZWQgPSBmYWxzZTtcblx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXHRcdHRoaXMuc2hvdWxkVHJhY2tDaGFuZ2VDYWxsYmFjayA9IHNob3VsZFRyYWNrQ2hhbmdlQ2FsbGJhY2s7XG5cdFx0dGhpcy5tdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5vbk11dGF0aW9ucy5iaW5kKHRoaXMpKTtcblx0fVxuXHRzdGFydCgpIHtcblx0XHRpZiAodGhpcy5pc1N0YXJ0ZWQpIHJldHVybjtcblx0XHR0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsZW1lbnQsIHtcblx0XHRcdGNoaWxkTGlzdDogdHJ1ZSxcblx0XHRcdHN1YnRyZWU6IHRydWUsXG5cdFx0XHRhdHRyaWJ1dGVzOiB0cnVlLFxuXHRcdFx0YXR0cmlidXRlT2xkVmFsdWU6IHRydWVcblx0XHR9KTtcblx0XHR0aGlzLmlzU3RhcnRlZCA9IHRydWU7XG5cdH1cblx0c3RvcCgpIHtcblx0XHRpZiAodGhpcy5pc1N0YXJ0ZWQpIHtcblx0XHRcdHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cdFx0XHR0aGlzLmlzU3RhcnRlZCA9IGZhbHNlO1xuXHRcdH1cblx0fVxuXHRnZXRDaGFuZ2VkRWxlbWVudChlbGVtZW50KSB7XG5cdFx0cmV0dXJuIHRoaXMuY2hhbmdlZEVsZW1lbnRzLmhhcyhlbGVtZW50KSA/IHRoaXMuY2hhbmdlZEVsZW1lbnRzLmdldChlbGVtZW50KSA6IG51bGw7XG5cdH1cblx0Z2V0QWRkZWRFbGVtZW50cygpIHtcblx0XHRyZXR1cm4gdGhpcy5hZGRlZEVsZW1lbnRzO1xuXHR9XG5cdHdhc0VsZW1lbnRBZGRlZChlbGVtZW50KSB7XG5cdFx0cmV0dXJuIHRoaXMuYWRkZWRFbGVtZW50cy5pbmNsdWRlcyhlbGVtZW50KTtcblx0fVxuXHRoYW5kbGVQZW5kaW5nQ2hhbmdlcygpIHtcblx0XHR0aGlzLm9uTXV0YXRpb25zKHRoaXMubXV0YXRpb25PYnNlcnZlci50YWtlUmVjb3JkcygpKTtcblx0fVxuXHRvbk11dGF0aW9ucyhtdXRhdGlvbnMpIHtcblx0XHRjb25zdCBoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG5cdFx0Zm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcblx0XHRcdGNvbnN0IGVsZW1lbnQgPSBtdXRhdGlvbi50YXJnZXQ7XG5cdFx0XHRpZiAoIXRoaXMuc2hvdWxkVHJhY2tDaGFuZ2VDYWxsYmFjayhlbGVtZW50KSkgY29udGludWU7XG5cdFx0XHRpZiAodGhpcy5pc0VsZW1lbnRBZGRlZEJ5VHJhbnNsYXRpb24oZWxlbWVudCkpIGNvbnRpbnVlO1xuXHRcdFx0bGV0IGlzQ2hhbmdlSW5BZGRlZEVsZW1lbnQgPSBmYWxzZTtcblx0XHRcdGZvciAoY29uc3QgYWRkZWRFbGVtZW50IG9mIHRoaXMuYWRkZWRFbGVtZW50cykgaWYgKGFkZGVkRWxlbWVudC5jb250YWlucyhlbGVtZW50KSkge1xuXHRcdFx0XHRpc0NoYW5nZUluQWRkZWRFbGVtZW50ID0gdHJ1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaXNDaGFuZ2VJbkFkZGVkRWxlbWVudCkgY29udGludWU7XG5cdFx0XHRzd2l0Y2ggKG11dGF0aW9uLnR5cGUpIHtcblx0XHRcdFx0Y2FzZSBcImNoaWxkTGlzdFwiOlxuXHRcdFx0XHRcdHRoaXMuaGFuZGxlQ2hpbGRMaXN0TXV0YXRpb24obXV0YXRpb24pO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiYXR0cmlidXRlc1wiOlxuXHRcdFx0XHRcdGlmICghaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucy5oYXMoZWxlbWVudCkpIGhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMuc2V0KGVsZW1lbnQsIFtdKTtcblx0XHRcdFx0XHRpZiAoIWhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMuZ2V0KGVsZW1lbnQpLmluY2x1ZGVzKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmhhbmRsZUF0dHJpYnV0ZU11dGF0aW9uKG11dGF0aW9uKTtcblx0XHRcdFx0XHRcdGhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMuc2V0KGVsZW1lbnQsIFsuLi5oYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zLmdldChlbGVtZW50KSwgbXV0YXRpb24uYXR0cmlidXRlTmFtZV0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0aGFuZGxlQ2hpbGRMaXN0TXV0YXRpb24obXV0YXRpb24pIHtcblx0XHRtdXRhdGlvbi5hZGRlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcblx0XHRcdGlmICghKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSkgcmV0dXJuO1xuXHRcdFx0aWYgKHRoaXMucmVtb3ZlZEVsZW1lbnRzLmluY2x1ZGVzKG5vZGUpKSB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlZEVsZW1lbnRzLnNwbGljZSh0aGlzLnJlbW92ZWRFbGVtZW50cy5pbmRleE9mKG5vZGUpLCAxKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuaXNFbGVtZW50QWRkZWRCeVRyYW5zbGF0aW9uKG5vZGUpKSByZXR1cm47XG5cdFx0XHR0aGlzLmFkZGVkRWxlbWVudHMucHVzaChub2RlKTtcblx0XHR9KTtcblx0XHRtdXRhdGlvbi5yZW1vdmVkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuXHRcdFx0aWYgKCEobm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpKSByZXR1cm47XG5cdFx0XHRpZiAodGhpcy5hZGRlZEVsZW1lbnRzLmluY2x1ZGVzKG5vZGUpKSB7XG5cdFx0XHRcdHRoaXMuYWRkZWRFbGVtZW50cy5zcGxpY2UodGhpcy5hZGRlZEVsZW1lbnRzLmluZGV4T2Yobm9kZSksIDEpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnJlbW92ZWRFbGVtZW50cy5wdXNoKG5vZGUpO1xuXHRcdH0pO1xuXHR9XG5cdGhhbmRsZUF0dHJpYnV0ZU11dGF0aW9uKG11dGF0aW9uKSB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IG11dGF0aW9uLnRhcmdldDtcblx0XHRpZiAoIXRoaXMuY2hhbmdlZEVsZW1lbnRzLmhhcyhlbGVtZW50KSkge1xuXHRcdFx0dGhpcy5jaGFuZ2VkRWxlbWVudHMuc2V0KGVsZW1lbnQsIG5ldyBFbGVtZW50Q2hhbmdlcygpKTtcblx0XHRcdHRoaXMuY2hhbmdlZEVsZW1lbnRzQ291bnQrKztcblx0XHR9XG5cdFx0Y29uc3QgY2hhbmdlZEVsZW1lbnQgPSB0aGlzLmNoYW5nZWRFbGVtZW50cy5nZXQoZWxlbWVudCk7XG5cdFx0c3dpdGNoIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lKSB7XG5cdFx0XHRjYXNlIFwiY2xhc3NcIjpcblx0XHRcdFx0dGhpcy5oYW5kbGVDbGFzc0F0dHJpYnV0ZU11dGF0aW9uKG11dGF0aW9uLCBjaGFuZ2VkRWxlbWVudCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcInN0eWxlXCI6XG5cdFx0XHRcdHRoaXMuaGFuZGxlU3R5bGVBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgY2hhbmdlZEVsZW1lbnQpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6IHRoaXMuaGFuZGxlR2VuZXJpY0F0dHJpYnV0ZU11dGF0aW9uKG11dGF0aW9uLCBjaGFuZ2VkRWxlbWVudCk7XG5cdFx0fVxuXHRcdGlmIChjaGFuZ2VkRWxlbWVudC5pc0VtcHR5KCkpIHtcblx0XHRcdHRoaXMuY2hhbmdlZEVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcblx0XHRcdHRoaXMuY2hhbmdlZEVsZW1lbnRzQ291bnQtLTtcblx0XHR9XG5cdH1cblx0aGFuZGxlQ2xhc3NBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgZWxlbWVudENoYW5nZXMpIHtcblx0XHRjb25zdCBlbGVtZW50ID0gbXV0YXRpb24udGFyZ2V0O1xuXHRcdGNvbnN0IHByZXZpb3VzVmFsdWVzID0gKG11dGF0aW9uLm9sZFZhbHVlIHx8IFwiXCIpLm1hdGNoKC8oXFxTKykvZ3UpIHx8IFtdO1xuXHRcdGNvbnN0IG5ld1ZhbHVlcyA9IFtdLnNsaWNlLmNhbGwoZWxlbWVudC5jbGFzc0xpc3QpO1xuXHRcdGNvbnN0IGFkZGVkVmFsdWVzID0gbmV3VmFsdWVzLmZpbHRlcigodmFsdWUpID0+ICFwcmV2aW91c1ZhbHVlcy5pbmNsdWRlcyh2YWx1ZSkpO1xuXHRcdGNvbnN0IHJlbW92ZWRWYWx1ZXMgPSBwcmV2aW91c1ZhbHVlcy5maWx0ZXIoKHZhbHVlKSA9PiAhbmV3VmFsdWVzLmluY2x1ZGVzKHZhbHVlKSk7XG5cdFx0YWRkZWRWYWx1ZXMuZm9yRWFjaCgodmFsdWUpID0+IHtcblx0XHRcdGVsZW1lbnRDaGFuZ2VzLmFkZENsYXNzKHZhbHVlKTtcblx0XHR9KTtcblx0XHRyZW1vdmVkVmFsdWVzLmZvckVhY2goKHZhbHVlKSA9PiB7XG5cdFx0XHRlbGVtZW50Q2hhbmdlcy5yZW1vdmVDbGFzcyh2YWx1ZSk7XG5cdFx0fSk7XG5cdH1cblx0aGFuZGxlU3R5bGVBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgZWxlbWVudENoYW5nZXMpIHtcblx0XHRjb25zdCBlbGVtZW50ID0gbXV0YXRpb24udGFyZ2V0O1xuXHRcdGNvbnN0IHByZXZpb3VzVmFsdWUgPSBtdXRhdGlvbi5vbGRWYWx1ZSB8fCBcIlwiO1xuXHRcdGNvbnN0IHByZXZpb3VzU3R5bGVzID0gdGhpcy5leHRyYWN0U3R5bGVzKHByZXZpb3VzVmFsdWUpO1xuXHRcdGNvbnN0IG5ld1ZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKSB8fCBcIlwiO1xuXHRcdGNvbnN0IG5ld1N0eWxlcyA9IHRoaXMuZXh0cmFjdFN0eWxlcyhuZXdWYWx1ZSk7XG5cdFx0Y29uc3QgYWRkZWRPckNoYW5nZWRTdHlsZXMgPSBPYmplY3Qua2V5cyhuZXdTdHlsZXMpLmZpbHRlcigoa2V5KSA9PiBwcmV2aW91c1N0eWxlc1trZXldID09PSB2b2lkIDAgfHwgcHJldmlvdXNTdHlsZXNba2V5XSAhPT0gbmV3U3R5bGVzW2tleV0pO1xuXHRcdGNvbnN0IHJlbW92ZWRTdHlsZXMgPSBPYmplY3Qua2V5cyhwcmV2aW91c1N0eWxlcykuZmlsdGVyKChrZXkpID0+ICFuZXdTdHlsZXNba2V5XSk7XG5cdFx0YWRkZWRPckNoYW5nZWRTdHlsZXMuZm9yRWFjaCgoc3R5bGUpID0+IHtcblx0XHRcdGVsZW1lbnRDaGFuZ2VzLmFkZFN0eWxlKHN0eWxlLCBuZXdTdHlsZXNbc3R5bGVdLCBwcmV2aW91c1N0eWxlc1tzdHlsZV0gPT09IHZvaWQgMCA/IG51bGwgOiBwcmV2aW91c1N0eWxlc1tzdHlsZV0pO1xuXHRcdH0pO1xuXHRcdHJlbW92ZWRTdHlsZXMuZm9yRWFjaCgoc3R5bGUpID0+IHtcblx0XHRcdGVsZW1lbnRDaGFuZ2VzLnJlbW92ZVN0eWxlKHN0eWxlLCBwcmV2aW91c1N0eWxlc1tzdHlsZV0pO1xuXHRcdH0pO1xuXHR9XG5cdGhhbmRsZUdlbmVyaWNBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgZWxlbWVudENoYW5nZXMpIHtcblx0XHRjb25zdCBhdHRyaWJ1dGVOYW1lID0gbXV0YXRpb24uYXR0cmlidXRlTmFtZTtcblx0XHRjb25zdCBlbGVtZW50ID0gbXV0YXRpb24udGFyZ2V0O1xuXHRcdGxldCBvbGRWYWx1ZSA9IG11dGF0aW9uLm9sZFZhbHVlO1xuXHRcdGxldCBuZXdWYWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuXHRcdGlmIChvbGRWYWx1ZSA9PT0gYXR0cmlidXRlTmFtZSkgb2xkVmFsdWUgPSBcIlwiO1xuXHRcdGlmIChuZXdWYWx1ZSA9PT0gYXR0cmlidXRlTmFtZSkgbmV3VmFsdWUgPSBcIlwiO1xuXHRcdGlmICghZWxlbWVudC5oYXNBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSkpIHtcblx0XHRcdGlmIChvbGRWYWx1ZSA9PT0gbnVsbCkgcmV0dXJuO1xuXHRcdFx0ZWxlbWVudENoYW5nZXMucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIG11dGF0aW9uLm9sZFZhbHVlKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKG5ld1ZhbHVlID09PSBvbGRWYWx1ZSkgcmV0dXJuO1xuXHRcdGVsZW1lbnRDaGFuZ2VzLmFkZEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKSwgbXV0YXRpb24ub2xkVmFsdWUpO1xuXHR9XG5cdGV4dHJhY3RTdHlsZXMoc3R5bGVzKSB7XG5cdFx0Y29uc3Qgc3R5bGVPYmplY3QgPSB7fTtcblx0XHRzdHlsZXMuc3BsaXQoXCI7XCIpLmZvckVhY2goKHN0eWxlKSA9PiB7XG5cdFx0XHRjb25zdCBwYXJ0cyA9IHN0eWxlLnNwbGl0KFwiOlwiKTtcblx0XHRcdGlmIChwYXJ0cy5sZW5ndGggPT09IDEpIHJldHVybjtcblx0XHRcdGNvbnN0IHByb3BlcnR5ID0gcGFydHNbMF0udHJpbSgpO1xuXHRcdFx0c3R5bGVPYmplY3RbcHJvcGVydHldID0gcGFydHMuc2xpY2UoMSkuam9pbihcIjpcIikudHJpbSgpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBzdHlsZU9iamVjdDtcblx0fVxuXHRpc0VsZW1lbnRBZGRlZEJ5VHJhbnNsYXRpb24oZWxlbWVudCkge1xuXHRcdHJldHVybiBlbGVtZW50LnRhZ05hbWUgPT09IFwiRk9OVFwiICYmIGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwic3R5bGVcIikgPT09IFwidmVydGljYWwtYWxpZ246IGluaGVyaXQ7XCI7XG5cdH1cbn07XG52YXIgVW5zeW5jZWRJbnB1dHNUcmFja2VyX2RlZmF1bHQgPSBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKGNvbXBvbmVudCwgbW9kZWxFbGVtZW50UmVzb2x2ZXIpIHtcblx0XHR0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycyA9IFt7XG5cdFx0XHRldmVudDogXCJpbnB1dFwiLFxuXHRcdFx0Y2FsbGJhY2s6IChldmVudCkgPT4gdGhpcy5oYW5kbGVJbnB1dEV2ZW50KGV2ZW50KVxuXHRcdH1dO1xuXHRcdHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuXHRcdHRoaXMubW9kZWxFbGVtZW50UmVzb2x2ZXIgPSBtb2RlbEVsZW1lbnRSZXNvbHZlcjtcblx0XHR0aGlzLnVuc3luY2VkSW5wdXRzID0gbmV3IFVuc3luY2VkSW5wdXRDb250YWluZXIoKTtcblx0fVxuXHRhY3RpdmF0ZSgpIHtcblx0XHR0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycy5mb3JFYWNoKCh7IGV2ZW50LCBjYWxsYmFjayB9KSA9PiB7XG5cdFx0XHR0aGlzLmNvbXBvbmVudC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcblx0XHR9KTtcblx0fVxuXHRkZWFjdGl2YXRlKCkge1xuXHRcdHRoaXMuZWxlbWVudEV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHsgZXZlbnQsIGNhbGxiYWNrIH0pID0+IHtcblx0XHRcdHRoaXMuY29tcG9uZW50LmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuXHRcdH0pO1xuXHR9XG5cdG1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSkge1xuXHRcdHRoaXMudW5zeW5jZWRJbnB1dHMubWFya01vZGVsQXNTeW5jZWQobW9kZWxOYW1lKTtcblx0fVxuXHRoYW5kbGVJbnB1dEV2ZW50KGV2ZW50KSB7XG5cdFx0Y29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXHRcdGlmICghdGFyZ2V0KSByZXR1cm47XG5cdFx0dGhpcy51cGRhdGVNb2RlbEZyb21FbGVtZW50KHRhcmdldCk7XG5cdH1cblx0dXBkYXRlTW9kZWxGcm9tRWxlbWVudChlbGVtZW50KSB7XG5cdFx0aWYgKCFlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCB0aGlzLmNvbXBvbmVudCkpIHJldHVybjtcblx0XHRpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgdXBkYXRlIG1vZGVsIGZvciBub24gSFRNTEVsZW1lbnRcIik7XG5cdFx0Y29uc3QgbW9kZWxOYW1lID0gdGhpcy5tb2RlbEVsZW1lbnRSZXNvbHZlci5nZXRNb2RlbE5hbWUoZWxlbWVudCk7XG5cdFx0dGhpcy51bnN5bmNlZElucHV0cy5hZGQoZWxlbWVudCwgbW9kZWxOYW1lKTtcblx0fVxuXHRnZXRVbnN5bmNlZElucHV0cygpIHtcblx0XHRyZXR1cm4gdGhpcy51bnN5bmNlZElucHV0cy5hbGxVbnN5bmNlZElucHV0cygpO1xuXHR9XG5cdGdldFVuc3luY2VkTW9kZWxzKCkge1xuXHRcdHJldHVybiBBcnJheS5mcm9tKHRoaXMudW5zeW5jZWRJbnB1dHMuZ2V0VW5zeW5jZWRNb2RlbE5hbWVzKCkpO1xuXHR9XG5cdHJlc2V0VW5zeW5jZWRGaWVsZHMoKSB7XG5cdFx0dGhpcy51bnN5bmNlZElucHV0cy5yZXNldFVuc3luY2VkRmllbGRzKCk7XG5cdH1cbn07XG52YXIgVW5zeW5jZWRJbnB1dENvbnRhaW5lciA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy51bnN5bmNlZE5vbk1vZGVsRmllbGRzID0gW107XG5cdFx0dGhpcy51bnN5bmNlZE1vZGVsTmFtZXMgPSBbXTtcblx0XHR0aGlzLnVuc3luY2VkTW9kZWxGaWVsZHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHR9XG5cdGFkZChlbGVtZW50LCBtb2RlbE5hbWUgPSBudWxsKSB7XG5cdFx0aWYgKG1vZGVsTmFtZSkge1xuXHRcdFx0dGhpcy51bnN5bmNlZE1vZGVsRmllbGRzLnNldChtb2RlbE5hbWUsIGVsZW1lbnQpO1xuXHRcdFx0aWYgKCF0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5pbmNsdWRlcyhtb2RlbE5hbWUpKSB0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5wdXNoKG1vZGVsTmFtZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMudW5zeW5jZWROb25Nb2RlbEZpZWxkcy5wdXNoKGVsZW1lbnQpO1xuXHR9XG5cdHJlc2V0VW5zeW5jZWRGaWVsZHMoKSB7XG5cdFx0dGhpcy51bnN5bmNlZE1vZGVsRmllbGRzLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcblx0XHRcdGlmICghdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMuaW5jbHVkZXMoa2V5KSkgdGhpcy51bnN5bmNlZE1vZGVsRmllbGRzLmRlbGV0ZShrZXkpO1xuXHRcdH0pO1xuXHR9XG5cdGFsbFVuc3luY2VkSW5wdXRzKCkge1xuXHRcdHJldHVybiBbLi4udGhpcy51bnN5bmNlZE5vbk1vZGVsRmllbGRzLCAuLi50aGlzLnVuc3luY2VkTW9kZWxGaWVsZHMudmFsdWVzKCldO1xuXHR9XG5cdG1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSkge1xuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMuaW5kZXhPZihtb2RlbE5hbWUpO1xuXHRcdGlmIChpbmRleCAhPT0gLTEpIHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLnNwbGljZShpbmRleCwgMSk7XG5cdH1cblx0Z2V0VW5zeW5jZWRNb2RlbE5hbWVzKCkge1xuXHRcdHJldHVybiB0aGlzLnVuc3luY2VkTW9kZWxOYW1lcztcblx0fVxufTtcbmZ1bmN0aW9uIGdldERlZXBEYXRhKGRhdGEsIHByb3BlcnR5UGF0aCkge1xuXHRjb25zdCB7IGN1cnJlbnRMZXZlbERhdGEsIGZpbmFsS2V5IH0gPSBwYXJzZURlZXBEYXRhKGRhdGEsIHByb3BlcnR5UGF0aCk7XG5cdGlmIChjdXJyZW50TGV2ZWxEYXRhID09PSB2b2lkIDApIHJldHVybjtcblx0cmV0dXJuIGN1cnJlbnRMZXZlbERhdGFbZmluYWxLZXldO1xufVxuY29uc3QgcGFyc2VEZWVwRGF0YSA9IChkYXRhLCBwcm9wZXJ0eVBhdGgpID0+IHtcblx0Y29uc3QgZmluYWxEYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSk7XG5cdGxldCBjdXJyZW50TGV2ZWxEYXRhID0gZmluYWxEYXRhO1xuXHRjb25zdCBwYXJ0cyA9IHByb3BlcnR5UGF0aC5zcGxpdChcIi5cIik7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoIC0gMTsgaSsrKSBjdXJyZW50TGV2ZWxEYXRhID0gY3VycmVudExldmVsRGF0YVtwYXJ0c1tpXV07XG5cdGNvbnN0IGZpbmFsS2V5ID0gcGFydHNbcGFydHMubGVuZ3RoIC0gMV07XG5cdHJldHVybiB7XG5cdFx0Y3VycmVudExldmVsRGF0YSxcblx0XHRmaW5hbERhdGEsXG5cdFx0ZmluYWxLZXksXG5cdFx0cGFydHNcblx0fTtcbn07XG52YXIgVmFsdWVTdG9yZV9kZWZhdWx0ID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHRoaXMucHJvcHMgPSB7fTtcblx0XHR0aGlzLmRpcnR5UHJvcHMgPSB7fTtcblx0XHR0aGlzLnBlbmRpbmdQcm9wcyA9IHt9O1xuXHRcdHRoaXMudXBkYXRlZFByb3BzRnJvbVBhcmVudCA9IHt9O1xuXHRcdHRoaXMucHJvcHMgPSBwcm9wcztcblx0fVxuXHRnZXQobmFtZSkge1xuXHRcdGNvbnN0IG5vcm1hbGl6ZWROYW1lID0gbm9ybWFsaXplTW9kZWxOYW1lKG5hbWUpO1xuXHRcdGlmICh0aGlzLmRpcnR5UHJvcHNbbm9ybWFsaXplZE5hbWVdICE9PSB2b2lkIDApIHJldHVybiB0aGlzLmRpcnR5UHJvcHNbbm9ybWFsaXplZE5hbWVdO1xuXHRcdGlmICh0aGlzLnBlbmRpbmdQcm9wc1tub3JtYWxpemVkTmFtZV0gIT09IHZvaWQgMCkgcmV0dXJuIHRoaXMucGVuZGluZ1Byb3BzW25vcm1hbGl6ZWROYW1lXTtcblx0XHRpZiAodGhpcy5wcm9wc1tub3JtYWxpemVkTmFtZV0gIT09IHZvaWQgMCkgcmV0dXJuIHRoaXMucHJvcHNbbm9ybWFsaXplZE5hbWVdO1xuXHRcdHJldHVybiBnZXREZWVwRGF0YSh0aGlzLnByb3BzLCBub3JtYWxpemVkTmFtZSk7XG5cdH1cblx0aGFzKG5hbWUpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXQobmFtZSkgIT09IHZvaWQgMDtcblx0fVxuXHRzZXQobmFtZSwgdmFsdWUpIHtcblx0XHRjb25zdCBub3JtYWxpemVkTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShuYW1lKTtcblx0XHRpZiAodGhpcy5nZXQobm9ybWFsaXplZE5hbWUpID09PSB2YWx1ZSkgcmV0dXJuIGZhbHNlO1xuXHRcdHRoaXMuZGlydHlQcm9wc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRnZXRPcmlnaW5hbFByb3BzKCkge1xuXHRcdHJldHVybiB7IC4uLnRoaXMucHJvcHMgfTtcblx0fVxuXHRnZXREaXJ0eVByb3BzKCkge1xuXHRcdHJldHVybiB7IC4uLnRoaXMuZGlydHlQcm9wcyB9O1xuXHR9XG5cdGdldFVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQoKSB7XG5cdFx0cmV0dXJuIHsgLi4udGhpcy51cGRhdGVkUHJvcHNGcm9tUGFyZW50IH07XG5cdH1cblx0Zmx1c2hEaXJ0eVByb3BzVG9QZW5kaW5nKCkge1xuXHRcdHRoaXMucGVuZGluZ1Byb3BzID0geyAuLi50aGlzLmRpcnR5UHJvcHMgfTtcblx0XHR0aGlzLmRpcnR5UHJvcHMgPSB7fTtcblx0fVxuXHRyZWluaXRpYWxpemVBbGxQcm9wcyhwcm9wcykge1xuXHRcdHRoaXMucHJvcHMgPSBwcm9wcztcblx0XHR0aGlzLnVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQgPSB7fTtcblx0XHR0aGlzLnBlbmRpbmdQcm9wcyA9IHt9O1xuXHR9XG5cdHB1c2hQZW5kaW5nUHJvcHNCYWNrVG9EaXJ0eSgpIHtcblx0XHR0aGlzLmRpcnR5UHJvcHMgPSB7XG5cdFx0XHQuLi50aGlzLnBlbmRpbmdQcm9wcyxcblx0XHRcdC4uLnRoaXMuZGlydHlQcm9wc1xuXHRcdH07XG5cdFx0dGhpcy5wZW5kaW5nUHJvcHMgPSB7fTtcblx0fVxuXHRzdG9yZU5ld1Byb3BzRnJvbVBhcmVudChwcm9wcykge1xuXHRcdGxldCBjaGFuZ2VkID0gZmFsc2U7XG5cdFx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvcHMpKSBpZiAodGhpcy5nZXQoa2V5KSAhPT0gdmFsdWUpIGNoYW5nZWQgPSB0cnVlO1xuXHRcdGlmIChjaGFuZ2VkKSB0aGlzLnVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQgPSBwcm9wcztcblx0XHRyZXR1cm4gY2hhbmdlZDtcblx0fVxufTtcbnZhciBDb21wb25lbnQgPSBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKGVsZW1lbnQsIG5hbWUsIHByb3BzLCBsaXN0ZW5lcnMsIGlkLCBiYWNrZW5kLCBlbGVtZW50RHJpdmVyKSB7XG5cdFx0dGhpcy5maW5nZXJwcmludCA9IFwiXCI7XG5cdFx0dGhpcy5kZWZhdWx0RGVib3VuY2UgPSAxNTA7XG5cdFx0dGhpcy5iYWNrZW5kUmVxdWVzdCA9IG51bGw7XG5cdFx0dGhpcy5wZW5kaW5nQWN0aW9ucyA9IFtdO1xuXHRcdHRoaXMucGVuZGluZ0ZpbGVzID0ge307XG5cdFx0dGhpcy5pc1JlcXVlc3RQZW5kaW5nID0gZmFsc2U7XG5cdFx0dGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0ID0gbnVsbDtcblx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5iYWNrZW5kID0gYmFja2VuZDtcblx0XHR0aGlzLmVsZW1lbnREcml2ZXIgPSBlbGVtZW50RHJpdmVyO1xuXHRcdHRoaXMuaWQgPSBpZDtcblx0XHR0aGlzLmxpc3RlbmVycyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdFx0bGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG5cdFx0XHRpZiAoIXRoaXMubGlzdGVuZXJzLmhhcyhsaXN0ZW5lci5ldmVudCkpIHRoaXMubGlzdGVuZXJzLnNldChsaXN0ZW5lci5ldmVudCwgW10pO1xuXHRcdFx0dGhpcy5saXN0ZW5lcnMuZ2V0KGxpc3RlbmVyLmV2ZW50KT8ucHVzaChsaXN0ZW5lci5hY3Rpb24pO1xuXHRcdH0pO1xuXHRcdHRoaXMudmFsdWVTdG9yZSA9IG5ldyBWYWx1ZVN0b3JlX2RlZmF1bHQocHJvcHMpO1xuXHRcdHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyID0gbmV3IFVuc3luY2VkSW5wdXRzVHJhY2tlcl9kZWZhdWx0KHRoaXMsIGVsZW1lbnREcml2ZXIpO1xuXHRcdHRoaXMuaG9va3MgPSBuZXcgSG9va01hbmFnZXJfZGVmYXVsdCgpO1xuXHRcdHRoaXMucmVzZXRQcm9taXNlKCk7XG5cdFx0dGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlciA9IG5ldyBFeHRlcm5hbE11dGF0aW9uVHJhY2tlcl9kZWZhdWx0KHRoaXMuZWxlbWVudCwgKGVsZW1lbnQpID0+IGVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIHRoaXMpKTtcblx0XHR0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0YXJ0KCk7XG5cdH1cblx0YWRkUGx1Z2luKHBsdWdpbikge1xuXHRcdHBsdWdpbi5hdHRhY2hUb0NvbXBvbmVudCh0aGlzKTtcblx0fVxuXHRjb25uZWN0KCkge1xuXHRcdHJlZ2lzdGVyQ29tcG9uZW50KHRoaXMpO1xuXHRcdHRoaXMuaG9va3MudHJpZ2dlckhvb2soXCJjb25uZWN0XCIsIHRoaXMpO1xuXHRcdHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLmFjdGl2YXRlKCk7XG5cdFx0dGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlci5zdGFydCgpO1xuXHR9XG5cdGRpc2Nvbm5lY3QoKSB7XG5cdFx0dW5yZWdpc3RlckNvbXBvbmVudCh0aGlzKTtcblx0XHR0aGlzLmhvb2tzLnRyaWdnZXJIb29rKFwiZGlzY29ubmVjdFwiLCB0aGlzKTtcblx0XHR0aGlzLmNsZWFyUmVxdWVzdERlYm91bmNlVGltZW91dCgpO1xuXHRcdHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLmRlYWN0aXZhdGUoKTtcblx0XHR0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0b3AoKTtcblx0fVxuXHRvbihob29rTmFtZSwgY2FsbGJhY2spIHtcblx0XHR0aGlzLmhvb2tzLnJlZ2lzdGVyKGhvb2tOYW1lLCBjYWxsYmFjayk7XG5cdH1cblx0b2ZmKGhvb2tOYW1lLCBjYWxsYmFjaykge1xuXHRcdHRoaXMuaG9va3MudW5yZWdpc3Rlcihob29rTmFtZSwgY2FsbGJhY2spO1xuXHR9XG5cdHNldChtb2RlbCwgdmFsdWUsIHJlUmVuZGVyID0gZmFsc2UsIGRlYm91bmNlID0gZmFsc2UpIHtcblx0XHRjb25zdCBwcm9taXNlID0gdGhpcy5uZXh0UmVxdWVzdFByb21pc2U7XG5cdFx0Y29uc3QgbW9kZWxOYW1lID0gbm9ybWFsaXplTW9kZWxOYW1lKG1vZGVsKTtcblx0XHRpZiAoIXRoaXMudmFsdWVTdG9yZS5oYXMobW9kZWxOYW1lKSkgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIG1vZGVsIG5hbWUgXCIke21vZGVsfVwiLmApO1xuXHRcdGNvbnN0IGlzQ2hhbmdlZCA9IHRoaXMudmFsdWVTdG9yZS5zZXQobW9kZWxOYW1lLCB2YWx1ZSk7XG5cdFx0dGhpcy5ob29rcy50cmlnZ2VySG9vayhcIm1vZGVsOnNldFwiLCBtb2RlbCwgdmFsdWUsIHRoaXMpO1xuXHRcdHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLm1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSk7XG5cdFx0aWYgKHJlUmVuZGVyICYmIGlzQ2hhbmdlZCkgdGhpcy5kZWJvdW5jZWRTdGFydFJlcXVlc3QoZGVib3VuY2UpO1xuXHRcdHJldHVybiBwcm9taXNlO1xuXHR9XG5cdGdldERhdGEobW9kZWwpIHtcblx0XHRjb25zdCBtb2RlbE5hbWUgPSBub3JtYWxpemVNb2RlbE5hbWUobW9kZWwpO1xuXHRcdGlmICghdGhpcy52YWx1ZVN0b3JlLmhhcyhtb2RlbE5hbWUpKSB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgbW9kZWwgXCIke21vZGVsfVwiLmApO1xuXHRcdHJldHVybiB0aGlzLnZhbHVlU3RvcmUuZ2V0KG1vZGVsTmFtZSk7XG5cdH1cblx0YWN0aW9uKG5hbWUsIGFyZ3MgPSB7fSwgZGVib3VuY2UgPSBmYWxzZSkge1xuXHRcdGNvbnN0IHByb21pc2UgPSB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZTtcblx0XHR0aGlzLnBlbmRpbmdBY3Rpb25zLnB1c2goe1xuXHRcdFx0bmFtZSxcblx0XHRcdGFyZ3Ncblx0XHR9KTtcblx0XHR0aGlzLmRlYm91bmNlZFN0YXJ0UmVxdWVzdChkZWJvdW5jZSk7XG5cdFx0cmV0dXJuIHByb21pc2U7XG5cdH1cblx0ZmlsZXMoa2V5LCBpbnB1dCkge1xuXHRcdHRoaXMucGVuZGluZ0ZpbGVzW2tleV0gPSBpbnB1dDtcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgcHJvbWlzZSA9IHRoaXMubmV4dFJlcXVlc3RQcm9taXNlO1xuXHRcdHRoaXMudHJ5U3RhcnRpbmdSZXF1ZXN0KCk7XG5cdFx0cmV0dXJuIHByb21pc2U7XG5cdH1cblx0Z2V0VW5zeW5jZWRNb2RlbHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLmdldFVuc3luY2VkTW9kZWxzKCk7XG5cdH1cblx0ZW1pdChuYW1lLCBkYXRhLCBvbmx5TWF0Y2hpbmdDb21wb25lbnRzTmFtZWQgPSBudWxsKSB7XG5cdFx0dGhpcy5wZXJmb3JtRW1pdChuYW1lLCBkYXRhLCBmYWxzZSwgb25seU1hdGNoaW5nQ29tcG9uZW50c05hbWVkKTtcblx0fVxuXHRlbWl0VXAobmFtZSwgZGF0YSwgb25seU1hdGNoaW5nQ29tcG9uZW50c05hbWVkID0gbnVsbCkge1xuXHRcdHRoaXMucGVyZm9ybUVtaXQobmFtZSwgZGF0YSwgdHJ1ZSwgb25seU1hdGNoaW5nQ29tcG9uZW50c05hbWVkKTtcblx0fVxuXHRlbWl0U2VsZihuYW1lLCBkYXRhKSB7XG5cdFx0dGhpcy5kb0VtaXQobmFtZSwgZGF0YSk7XG5cdH1cblx0cGVyZm9ybUVtaXQobmFtZSwgZGF0YSwgZW1pdFVwLCBtYXRjaGluZ05hbWUpIHtcblx0XHRmaW5kQ29tcG9uZW50cyh0aGlzLCBlbWl0VXAsIG1hdGNoaW5nTmFtZSkuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XG5cdFx0XHRjb21wb25lbnQuZG9FbWl0KG5hbWUsIGRhdGEpO1xuXHRcdH0pO1xuXHR9XG5cdGRvRW1pdChuYW1lLCBkYXRhKSB7XG5cdFx0aWYgKCF0aGlzLmxpc3RlbmVycy5oYXMobmFtZSkpIHJldHVybjtcblx0XHQodGhpcy5saXN0ZW5lcnMuZ2V0KG5hbWUpIHx8IFtdKS5mb3JFYWNoKChhY3Rpb24pID0+IHtcblx0XHRcdHRoaXMuYWN0aW9uKGFjdGlvbiwgZGF0YSwgMSk7XG5cdFx0fSk7XG5cdH1cblx0aXNUdXJib0VuYWJsZWQoKSB7XG5cdFx0cmV0dXJuIHR5cGVvZiBUdXJibyAhPT0gXCJ1bmRlZmluZWRcIiAmJiAhdGhpcy5lbGVtZW50LmNsb3Nlc3QoXCJbZGF0YS10dXJibz1cXFwiZmFsc2VcXFwiXVwiKTtcblx0fVxuXHR0cnlTdGFydGluZ1JlcXVlc3QoKSB7XG5cdFx0aWYgKCF0aGlzLmJhY2tlbmRSZXF1ZXN0KSB7XG5cdFx0XHR0aGlzLnBlcmZvcm1SZXF1ZXN0KCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuaXNSZXF1ZXN0UGVuZGluZyA9IHRydWU7XG5cdH1cblx0cGVyZm9ybVJlcXVlc3QoKSB7XG5cdFx0Y29uc3QgdGhpc1Byb21pc2VSZXNvbHZlID0gdGhpcy5uZXh0UmVxdWVzdFByb21pc2VSZXNvbHZlO1xuXHRcdHRoaXMucmVzZXRQcm9taXNlKCk7XG5cdFx0dGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIucmVzZXRVbnN5bmNlZEZpZWxkcygpO1xuXHRcdGNvbnN0IGZpbGVzVG9TZW5kID0ge307XG5cdFx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5wZW5kaW5nRmlsZXMpKSBpZiAodmFsdWUuZmlsZXMpIGZpbGVzVG9TZW5kW2tleV0gPSB2YWx1ZS5maWxlcztcblx0XHRjb25zdCByZXF1ZXN0Q29uZmlnID0ge1xuXHRcdFx0cHJvcHM6IHRoaXMudmFsdWVTdG9yZS5nZXRPcmlnaW5hbFByb3BzKCksXG5cdFx0XHRhY3Rpb25zOiB0aGlzLnBlbmRpbmdBY3Rpb25zLFxuXHRcdFx0dXBkYXRlZDogdGhpcy52YWx1ZVN0b3JlLmdldERpcnR5UHJvcHMoKSxcblx0XHRcdGNoaWxkcmVuOiB7fSxcblx0XHRcdHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQ6IHRoaXMudmFsdWVTdG9yZS5nZXRVcGRhdGVkUHJvcHNGcm9tUGFyZW50KCksXG5cdFx0XHRmaWxlczogZmlsZXNUb1NlbmRcblx0XHR9O1xuXHRcdHRoaXMuaG9va3MudHJpZ2dlckhvb2soXCJyZXF1ZXN0OnN0YXJ0ZWRcIiwgcmVxdWVzdENvbmZpZyk7XG5cdFx0dGhpcy5iYWNrZW5kUmVxdWVzdCA9IHRoaXMuYmFja2VuZC5tYWtlUmVxdWVzdChyZXF1ZXN0Q29uZmlnLnByb3BzLCByZXF1ZXN0Q29uZmlnLmFjdGlvbnMsIHJlcXVlc3RDb25maWcudXBkYXRlZCwgcmVxdWVzdENvbmZpZy5jaGlsZHJlbiwgcmVxdWVzdENvbmZpZy51cGRhdGVkUHJvcHNGcm9tUGFyZW50LCByZXF1ZXN0Q29uZmlnLmZpbGVzKTtcblx0XHR0aGlzLmhvb2tzLnRyaWdnZXJIb29rKFwibG9hZGluZy5zdGF0ZTpzdGFydGVkXCIsIHRoaXMuZWxlbWVudCwgdGhpcy5iYWNrZW5kUmVxdWVzdCk7XG5cdFx0dGhpcy5wZW5kaW5nQWN0aW9ucyA9IFtdO1xuXHRcdHRoaXMudmFsdWVTdG9yZS5mbHVzaERpcnR5UHJvcHNUb1BlbmRpbmcoKTtcblx0XHR0aGlzLmlzUmVxdWVzdFBlbmRpbmcgPSBmYWxzZTtcblx0XHR0aGlzLmJhY2tlbmRSZXF1ZXN0LnByb21pc2UudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcblx0XHRcdGNvbnN0IGJhY2tlbmRSZXNwb25zZSA9IG5ldyBCYWNrZW5kUmVzcG9uc2VfZGVmYXVsdChyZXNwb25zZSk7XG5cdFx0XHRjb25zdCBodG1sID0gYXdhaXQgYmFja2VuZFJlc3BvbnNlLmdldEJvZHkoKTtcblx0XHRcdGZvciAoY29uc3QgaW5wdXQgb2YgT2JqZWN0LnZhbHVlcyh0aGlzLnBlbmRpbmdGaWxlcykpIGlucHV0LnZhbHVlID0gXCJcIjtcblx0XHRcdGNvbnN0IGhlYWRlcnMgPSBiYWNrZW5kUmVzcG9uc2UucmVzcG9uc2UuaGVhZGVycztcblx0XHRcdGlmICghaGVhZGVycy5nZXQoXCJDb250ZW50LVR5cGVcIik/LmluY2x1ZGVzKFwiYXBwbGljYXRpb24vdm5kLmxpdmUtY29tcG9uZW50K2h0bWxcIikgJiYgIWhlYWRlcnMuZ2V0KFwiWC1MaXZlLVJlZGlyZWN0XCIpKSB7XG5cdFx0XHRcdGNvbnN0IGNvbnRyb2xzID0geyBkaXNwbGF5RXJyb3I6IHRydWUgfTtcblx0XHRcdFx0dGhpcy52YWx1ZVN0b3JlLnB1c2hQZW5kaW5nUHJvcHNCYWNrVG9EaXJ0eSgpO1xuXHRcdFx0XHR0aGlzLmhvb2tzLnRyaWdnZXJIb29rKFwicmVzcG9uc2U6ZXJyb3JcIiwgYmFja2VuZFJlc3BvbnNlLCBjb250cm9scyk7XG5cdFx0XHRcdGlmIChjb250cm9scy5kaXNwbGF5RXJyb3IpIHRoaXMucmVuZGVyRXJyb3IoaHRtbCk7XG5cdFx0XHRcdHRoaXMuYmFja2VuZFJlcXVlc3QgPSBudWxsO1xuXHRcdFx0XHR0aGlzUHJvbWlzZVJlc29sdmUoYmFja2VuZFJlc3BvbnNlKTtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbGl2ZVVybCA9IGJhY2tlbmRSZXNwb25zZS5nZXRMaXZlVXJsKCk7XG5cdFx0XHRpZiAobGl2ZVVybCkgaGlzdG9yeS5yZXBsYWNlU3RhdGUoaGlzdG9yeS5zdGF0ZSwgXCJcIiwgbmV3IFVSTChsaXZlVXJsICsgd2luZG93LmxvY2F0aW9uLmhhc2gsIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pKTtcblx0XHRcdHRoaXMucHJvY2Vzc1JlcmVuZGVyKGh0bWwsIGJhY2tlbmRSZXNwb25zZSk7XG5cdFx0XHR0aGlzLmJhY2tlbmRSZXF1ZXN0ID0gbnVsbDtcblx0XHRcdHRoaXNQcm9taXNlUmVzb2x2ZShiYWNrZW5kUmVzcG9uc2UpO1xuXHRcdFx0aWYgKHRoaXMuaXNSZXF1ZXN0UGVuZGluZykge1xuXHRcdFx0XHR0aGlzLmlzUmVxdWVzdFBlbmRpbmcgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5wZXJmb3JtUmVxdWVzdCgpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlO1xuXHRcdH0pO1xuXHR9XG5cdHByb2Nlc3NSZXJlbmRlcihodG1sLCBiYWNrZW5kUmVzcG9uc2UpIHtcblx0XHRjb25zdCBjb250cm9scyA9IHsgc2hvdWxkUmVuZGVyOiB0cnVlIH07XG5cdFx0dGhpcy5ob29rcy50cmlnZ2VySG9vayhcInJlbmRlcjpzdGFydGVkXCIsIGh0bWwsIGJhY2tlbmRSZXNwb25zZSwgY29udHJvbHMpO1xuXHRcdGlmICghY29udHJvbHMuc2hvdWxkUmVuZGVyKSByZXR1cm47XG5cdFx0aWYgKGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzLmdldChcIkxvY2F0aW9uXCIpKSB7XG5cdFx0XHRpZiAodGhpcy5pc1R1cmJvRW5hYmxlZCgpKSBUdXJiby52aXNpdChiYWNrZW5kUmVzcG9uc2UucmVzcG9uc2UuaGVhZGVycy5nZXQoXCJMb2NhdGlvblwiKSk7XG5cdFx0XHRlbHNlIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYmFja2VuZFJlc3BvbnNlLnJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiTG9jYXRpb25cIikgfHwgXCJcIjtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5ob29rcy50cmlnZ2VySG9vayhcImxvYWRpbmcuc3RhdGU6ZmluaXNoZWRcIiwgdGhpcy5lbGVtZW50KTtcblx0XHRjb25zdCBtb2RpZmllZE1vZGVsVmFsdWVzID0ge307XG5cdFx0T2JqZWN0LmtleXModGhpcy52YWx1ZVN0b3JlLmdldERpcnR5UHJvcHMoKSkuZm9yRWFjaCgobW9kZWxOYW1lKSA9PiB7XG5cdFx0XHRtb2RpZmllZE1vZGVsVmFsdWVzW21vZGVsTmFtZV0gPSB0aGlzLnZhbHVlU3RvcmUuZ2V0KG1vZGVsTmFtZSk7XG5cdFx0fSk7XG5cdFx0bGV0IG5ld0VsZW1lbnQ7XG5cdFx0dHJ5IHtcblx0XHRcdG5ld0VsZW1lbnQgPSBodG1sVG9FbGVtZW50KGh0bWwpO1xuXHRcdFx0aWYgKCFuZXdFbGVtZW50Lm1hdGNoZXMoXCJbZGF0YS1jb250cm9sbGVyfj1saXZlXVwiKSkgdGhyb3cgbmV3IEVycm9yKFwiQSBsaXZlIGNvbXBvbmVudCB0ZW1wbGF0ZSBtdXN0IGNvbnRhaW4gYSBzaW5nbGUgcm9vdCBjb250cm9sbGVyIGVsZW1lbnQuXCIpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGBUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggdGhlICcke3RoaXMubmFtZX0nIGNvbXBvbmVudCBIVE1MIHJldHVybmVkOmAsIHsgaWQ6IHRoaXMuaWQgfSk7XG5cdFx0XHR0aHJvdyBlcnJvcjtcblx0XHR9XG5cdFx0dGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlci5oYW5kbGVQZW5kaW5nQ2hhbmdlcygpO1xuXHRcdHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuc3RvcCgpO1xuXHRcdGV4ZWN1dGVNb3JwaGRvbSh0aGlzLmVsZW1lbnQsIG5ld0VsZW1lbnQsIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLmdldFVuc3luY2VkSW5wdXRzKCksIChlbGVtZW50KSA9PiBnZXRWYWx1ZUZyb21FbGVtZW50KGVsZW1lbnQsIHRoaXMudmFsdWVTdG9yZSksIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIpO1xuXHRcdHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuc3RhcnQoKTtcblx0XHRjb25zdCBuZXdQcm9wcyA9IHRoaXMuZWxlbWVudERyaXZlci5nZXRDb21wb25lbnRQcm9wcygpO1xuXHRcdHRoaXMudmFsdWVTdG9yZS5yZWluaXRpYWxpemVBbGxQcm9wcyhuZXdQcm9wcyk7XG5cdFx0Y29uc3QgZXZlbnRzVG9FbWl0ID0gdGhpcy5lbGVtZW50RHJpdmVyLmdldEV2ZW50c1RvRW1pdCgpO1xuXHRcdGNvbnN0IGJyb3dzZXJFdmVudHNUb0Rpc3BhdGNoID0gdGhpcy5lbGVtZW50RHJpdmVyLmdldEJyb3dzZXJFdmVudHNUb0Rpc3BhdGNoKCk7XG5cdFx0T2JqZWN0LmtleXMobW9kaWZpZWRNb2RlbFZhbHVlcykuZm9yRWFjaCgobW9kZWxOYW1lKSA9PiB7XG5cdFx0XHR0aGlzLnZhbHVlU3RvcmUuc2V0KG1vZGVsTmFtZSwgbW9kaWZpZWRNb2RlbFZhbHVlc1ttb2RlbE5hbWVdKTtcblx0XHR9KTtcblx0XHRldmVudHNUb0VtaXQuZm9yRWFjaCgoeyBldmVudCwgZGF0YSwgdGFyZ2V0LCBjb21wb25lbnROYW1lIH0pID0+IHtcblx0XHRcdGlmICh0YXJnZXQgPT09IFwidXBcIikge1xuXHRcdFx0XHR0aGlzLmVtaXRVcChldmVudCwgZGF0YSwgY29tcG9uZW50TmFtZSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICh0YXJnZXQgPT09IFwic2VsZlwiKSB7XG5cdFx0XHRcdHRoaXMuZW1pdFNlbGYoZXZlbnQsIGRhdGEpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmVtaXQoZXZlbnQsIGRhdGEsIGNvbXBvbmVudE5hbWUpO1xuXHRcdH0pO1xuXHRcdGJyb3dzZXJFdmVudHNUb0Rpc3BhdGNoLmZvckVhY2goKHsgZXZlbnQsIHBheWxvYWQgfSkgPT4ge1xuXHRcdFx0dGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGV2ZW50LCB7XG5cdFx0XHRcdGRldGFpbDogcGF5bG9hZCxcblx0XHRcdFx0YnViYmxlczogdHJ1ZVxuXHRcdFx0fSkpO1xuXHRcdH0pO1xuXHRcdHRoaXMuaG9va3MudHJpZ2dlckhvb2soXCJyZW5kZXI6ZmluaXNoZWRcIiwgdGhpcyk7XG5cdH1cblx0Y2FsY3VsYXRlRGVib3VuY2UoZGVib3VuY2UpIHtcblx0XHRpZiAoZGVib3VuY2UgPT09IHRydWUpIHJldHVybiB0aGlzLmRlZmF1bHREZWJvdW5jZTtcblx0XHRpZiAoZGVib3VuY2UgPT09IGZhbHNlKSByZXR1cm4gMDtcblx0XHRyZXR1cm4gZGVib3VuY2U7XG5cdH1cblx0Y2xlYXJSZXF1ZXN0RGVib3VuY2VUaW1lb3V0KCkge1xuXHRcdGlmICh0aGlzLnJlcXVlc3REZWJvdW5jZVRpbWVvdXQpIHtcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnJlcXVlc3REZWJvdW5jZVRpbWVvdXQpO1xuXHRcdFx0dGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0ID0gbnVsbDtcblx0XHR9XG5cdH1cblx0ZGVib3VuY2VkU3RhcnRSZXF1ZXN0KGRlYm91bmNlKSB7XG5cdFx0dGhpcy5jbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQoKTtcblx0XHR0aGlzLnJlcXVlc3REZWJvdW5jZVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLnJlbmRlcigpO1xuXHRcdH0sIHRoaXMuY2FsY3VsYXRlRGVib3VuY2UoZGVib3VuY2UpKTtcblx0fVxuXHRyZW5kZXJFcnJvcihodG1sKSB7XG5cdFx0bGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXZlLWNvbXBvbmVudC1lcnJvclwiKTtcblx0XHRpZiAobW9kYWwpIG1vZGFsLmlubmVySFRNTCA9IFwiXCI7XG5cdFx0ZWxzZSB7XG5cdFx0XHRtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRtb2RhbC5pZCA9IFwibGl2ZS1jb21wb25lbnQtZXJyb3JcIjtcblx0XHRcdG1vZGFsLnN0eWxlLnBhZGRpbmcgPSBcIjUwcHhcIjtcblx0XHRcdG1vZGFsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAwLCAwLCAuNSlcIjtcblx0XHRcdG1vZGFsLnN0eWxlLnpJbmRleCA9IFwiMTAwMDAwXCI7XG5cdFx0XHRtb2RhbC5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcblx0XHRcdG1vZGFsLnN0eWxlLnRvcCA9IFwiMHB4XCI7XG5cdFx0XHRtb2RhbC5zdHlsZS5ib3R0b20gPSBcIjBweFwiO1xuXHRcdFx0bW9kYWwuc3R5bGUubGVmdCA9IFwiMHB4XCI7XG5cdFx0XHRtb2RhbC5zdHlsZS5yaWdodCA9IFwiMHB4XCI7XG5cdFx0XHRtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cdFx0XHRtb2RhbC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcblx0XHR9XG5cdFx0Y29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcblx0XHRpZnJhbWUuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1cHhcIjtcblx0XHRpZnJhbWUuc3R5bGUuZmxleEdyb3cgPSBcIjFcIjtcblx0XHRtb2RhbC5hcHBlbmRDaGlsZChpZnJhbWUpO1xuXHRcdGRvY3VtZW50LmJvZHkucHJlcGVuZChtb2RhbCk7XG5cdFx0ZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG5cdFx0aWYgKGlmcmFtZS5jb250ZW50V2luZG93KSB7XG5cdFx0XHRpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5vcGVuKCk7XG5cdFx0XHRpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC53cml0ZShodG1sKTtcblx0XHRcdGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50LmNsb3NlKCk7XG5cdFx0fVxuXHRcdGNvbnN0IGNsb3NlTW9kYWwgPSAobW9kYWwpID0+IHtcblx0XHRcdGlmIChtb2RhbCkgbW9kYWwub3V0ZXJIVE1MID0gXCJcIjtcblx0XHRcdGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIjtcblx0XHR9O1xuXHRcdG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjbG9zZU1vZGFsKG1vZGFsKSk7XG5cdFx0bW9kYWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xuXHRcdG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG5cdFx0XHRpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIGNsb3NlTW9kYWwobW9kYWwpO1xuXHRcdH0pO1xuXHRcdG1vZGFsLmZvY3VzKCk7XG5cdH1cblx0cmVzZXRQcm9taXNlKCkge1xuXHRcdHRoaXMubmV4dFJlcXVlc3RQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRcdHRoaXMubmV4dFJlcXVlc3RQcm9taXNlUmVzb2x2ZSA9IHJlc29sdmU7XG5cdFx0fSk7XG5cdH1cblx0X3VwZGF0ZUZyb21QYXJlbnRQcm9wcyhwcm9wcykge1xuXHRcdGlmICh0aGlzLnZhbHVlU3RvcmUuc3RvcmVOZXdQcm9wc0Zyb21QYXJlbnQocHJvcHMpKSB0aGlzLnJlbmRlcigpO1xuXHR9XG59O1xuZnVuY3Rpb24gcHJveGlmeUNvbXBvbmVudChjb21wb25lbnQpIHtcblx0cmV0dXJuIG5ldyBQcm94eShjb21wb25lbnQsIHtcblx0XHRnZXQoY29tcG9uZW50LCBwcm9wKSB7XG5cdFx0XHRpZiAocHJvcCBpbiBjb21wb25lbnQgfHwgdHlwZW9mIHByb3AgIT09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0aWYgKHR5cGVvZiBjb21wb25lbnRbcHJvcF0gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdGNvbnN0IGNhbGxhYmxlID0gY29tcG9uZW50W3Byb3BdO1xuXHRcdFx0XHRcdHJldHVybiAoLi4uYXJncykgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGNhbGxhYmxlLmFwcGx5KGNvbXBvbmVudCwgYXJncyk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gUmVmbGVjdC5nZXQoY29tcG9uZW50LCBwcm9wKTtcblx0XHRcdH1cblx0XHRcdGlmIChjb21wb25lbnQudmFsdWVTdG9yZS5oYXMocHJvcCkpIHJldHVybiBjb21wb25lbnQuZ2V0RGF0YShwcm9wKTtcblx0XHRcdHJldHVybiAoYXJncykgPT4ge1xuXHRcdFx0XHRyZXR1cm4gY29tcG9uZW50LmFjdGlvbi5hcHBseShjb21wb25lbnQsIFtwcm9wLCBhcmdzXSk7XG5cdFx0XHR9O1xuXHRcdH0sXG5cdFx0c2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG5cdFx0XHRpZiAocHJvcGVydHkgaW4gdGFyZ2V0KSB7XG5cdFx0XHRcdHRhcmdldFtwcm9wZXJ0eV0gPSB2YWx1ZTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHR0YXJnZXQuc2V0KHByb3BlcnR5LCB2YWx1ZSk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH0pO1xufVxudmFyIFN0aW11bHVzRWxlbWVudERyaXZlciA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoY29udHJvbGxlcikge1xuXHRcdHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG5cdH1cblx0Z2V0TW9kZWxOYW1lKGVsZW1lbnQpIHtcblx0XHRjb25zdCBtb2RlbERpcmVjdGl2ZSA9IGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZWxlbWVudCwgZmFsc2UpO1xuXHRcdGlmICghbW9kZWxEaXJlY3RpdmUpIHJldHVybiBudWxsO1xuXHRcdHJldHVybiBtb2RlbERpcmVjdGl2ZS5hY3Rpb247XG5cdH1cblx0Z2V0Q29tcG9uZW50UHJvcHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29udHJvbGxlci5wcm9wc1ZhbHVlO1xuXHR9XG5cdGdldEV2ZW50c1RvRW1pdCgpIHtcblx0XHRyZXR1cm4gdGhpcy5jb250cm9sbGVyLmV2ZW50c1RvRW1pdFZhbHVlO1xuXHR9XG5cdGdldEJyb3dzZXJFdmVudHNUb0Rpc3BhdGNoKCkge1xuXHRcdHJldHVybiB0aGlzLmNvbnRyb2xsZXIuZXZlbnRzVG9EaXNwYXRjaFZhbHVlO1xuXHR9XG59O1xuZnVuY3Rpb24gZ2V0X21vZGVsX2JpbmRpbmdfZGVmYXVsdChtb2RlbERpcmVjdGl2ZSkge1xuXHRsZXQgc2hvdWxkUmVuZGVyID0gdHJ1ZTtcblx0bGV0IHRhcmdldEV2ZW50TmFtZSA9IG51bGw7XG5cdGxldCBkZWJvdW5jZSA9IGZhbHNlO1xuXHRsZXQgbWluTGVuZ3RoID0gbnVsbDtcblx0bGV0IG1heExlbmd0aCA9IG51bGw7XG5cdGxldCBtaW5WYWx1ZSA9IG51bGw7XG5cdGxldCBtYXhWYWx1ZSA9IG51bGw7XG5cdG1vZGVsRGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuXHRcdHN3aXRjaCAobW9kaWZpZXIubmFtZSkge1xuXHRcdFx0Y2FzZSBcIm9uXCI6XG5cdFx0XHRcdGlmICghbW9kaWZpZXIudmFsdWUpIHRocm93IG5ldyBFcnJvcihgVGhlIFwib25cIiBtb2RpZmllciBpbiAke21vZGVsRGlyZWN0aXZlLmdldFN0cmluZygpfSByZXF1aXJlcyBhIHZhbHVlIC0gZS5nLiBvbihjaGFuZ2UpLmApO1xuXHRcdFx0XHRpZiAoIVtcImlucHV0XCIsIFwiY2hhbmdlXCJdLmluY2x1ZGVzKG1vZGlmaWVyLnZhbHVlKSkgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJvblwiIG1vZGlmaWVyIGluICR7bW9kZWxEaXJlY3RpdmUuZ2V0U3RyaW5nKCl9IG9ubHkgYWNjZXB0cyB0aGUgYXJndW1lbnRzIFwiaW5wdXRcIiBvciBcImNoYW5nZVwiLmApO1xuXHRcdFx0XHR0YXJnZXRFdmVudE5hbWUgPSBtb2RpZmllci52YWx1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwibm9yZW5kZXJcIjpcblx0XHRcdFx0c2hvdWxkUmVuZGVyID0gZmFsc2U7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImRlYm91bmNlXCI6XG5cdFx0XHRcdGRlYm91bmNlID0gbW9kaWZpZXIudmFsdWUgPyBOdW1iZXIucGFyc2VJbnQobW9kaWZpZXIudmFsdWUpIDogdHJ1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwibWluX2xlbmd0aFwiOlxuXHRcdFx0XHRtaW5MZW5ndGggPSBtb2RpZmllci52YWx1ZSA/IE51bWJlci5wYXJzZUludChtb2RpZmllci52YWx1ZSkgOiBudWxsO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJtYXhfbGVuZ3RoXCI6XG5cdFx0XHRcdG1heExlbmd0aCA9IG1vZGlmaWVyLnZhbHVlID8gTnVtYmVyLnBhcnNlSW50KG1vZGlmaWVyLnZhbHVlKSA6IG51bGw7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcIm1pbl92YWx1ZVwiOlxuXHRcdFx0XHRtaW5WYWx1ZSA9IG1vZGlmaWVyLnZhbHVlID8gTnVtYmVyLnBhcnNlRmxvYXQobW9kaWZpZXIudmFsdWUpIDogbnVsbDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwibWF4X3ZhbHVlXCI6XG5cdFx0XHRcdG1heFZhbHVlID0gbW9kaWZpZXIudmFsdWUgPyBOdW1iZXIucGFyc2VGbG9hdChtb2RpZmllci52YWx1ZSkgOiBudWxsO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6IHRocm93IG5ldyBFcnJvcihgVW5rbm93biBtb2RpZmllciBcIiR7bW9kaWZpZXIubmFtZX1cIiBpbiBkYXRhLW1vZGVsPVwiJHttb2RlbERpcmVjdGl2ZS5nZXRTdHJpbmcoKX1cIi5gKTtcblx0XHR9XG5cdH0pO1xuXHRjb25zdCBbbW9kZWxOYW1lLCBpbm5lck1vZGVsTmFtZV0gPSBtb2RlbERpcmVjdGl2ZS5hY3Rpb24uc3BsaXQoXCI6XCIpO1xuXHRyZXR1cm4ge1xuXHRcdG1vZGVsTmFtZSxcblx0XHRpbm5lck1vZGVsTmFtZTogaW5uZXJNb2RlbE5hbWUgfHwgbnVsbCxcblx0XHRzaG91bGRSZW5kZXIsXG5cdFx0ZGVib3VuY2UsXG5cdFx0dGFyZ2V0RXZlbnROYW1lLFxuXHRcdG1pbkxlbmd0aCxcblx0XHRtYXhMZW5ndGgsXG5cdFx0bWluVmFsdWUsXG5cdFx0bWF4VmFsdWVcblx0fTtcbn1cbnZhciBDaGlsZENvbXBvbmVudFBsdWdpbl9kZWZhdWx0ID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcihjb21wb25lbnQpIHtcblx0XHR0aGlzLnBhcmVudE1vZGVsQmluZGluZ3MgPSBbXTtcblx0XHR0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcblx0XHR0aGlzLnBhcmVudE1vZGVsQmluZGluZ3MgPSBnZXRBbGxNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50cyh0aGlzLmNvbXBvbmVudC5lbGVtZW50KS5tYXAoZ2V0X21vZGVsX2JpbmRpbmdfZGVmYXVsdCk7XG5cdH1cblx0YXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG5cdFx0Y29tcG9uZW50Lm9uKFwicmVxdWVzdDpzdGFydGVkXCIsIChyZXF1ZXN0RGF0YSkgPT4ge1xuXHRcdFx0cmVxdWVzdERhdGEuY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuRmluZ2VycHJpbnRzKCk7XG5cdFx0fSk7XG5cdFx0Y29tcG9uZW50Lm9uKFwibW9kZWw6c2V0XCIsIChtb2RlbCwgdmFsdWUpID0+IHtcblx0XHRcdHRoaXMubm90aWZ5UGFyZW50TW9kZWxDaGFuZ2UobW9kZWwsIHZhbHVlKTtcblx0XHR9KTtcblx0fVxuXHRnZXRDaGlsZHJlbkZpbmdlcnByaW50cygpIHtcblx0XHRjb25zdCBmaW5nZXJwcmludHMgPSB7fTtcblx0XHR0aGlzLmdldENoaWxkcmVuKCkuZm9yRWFjaCgoY2hpbGQpID0+IHtcblx0XHRcdGlmICghY2hpbGQuaWQpIHRocm93IG5ldyBFcnJvcihcIm1pc3NpbmcgaWRcIik7XG5cdFx0XHRmaW5nZXJwcmludHNbY2hpbGQuaWRdID0ge1xuXHRcdFx0XHRmaW5nZXJwcmludDogY2hpbGQuZmluZ2VycHJpbnQsXG5cdFx0XHRcdHRhZzogY2hpbGQuZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKClcblx0XHRcdH07XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGZpbmdlcnByaW50cztcblx0fVxuXHRub3RpZnlQYXJlbnRNb2RlbENoYW5nZShtb2RlbE5hbWUsIHZhbHVlKSB7XG5cdFx0Y29uc3QgcGFyZW50Q29tcG9uZW50ID0gZmluZFBhcmVudCh0aGlzLmNvbXBvbmVudCk7XG5cdFx0aWYgKCFwYXJlbnRDb21wb25lbnQpIHJldHVybjtcblx0XHR0aGlzLnBhcmVudE1vZGVsQmluZGluZ3MuZm9yRWFjaCgobW9kZWxCaW5kaW5nKSA9PiB7XG5cdFx0XHRpZiAoKG1vZGVsQmluZGluZy5pbm5lck1vZGVsTmFtZSB8fCBcInZhbHVlXCIpICE9PSBtb2RlbE5hbWUpIHJldHVybjtcblx0XHRcdHBhcmVudENvbXBvbmVudC5zZXQobW9kZWxCaW5kaW5nLm1vZGVsTmFtZSwgdmFsdWUsIG1vZGVsQmluZGluZy5zaG91bGRSZW5kZXIsIG1vZGVsQmluZGluZy5kZWJvdW5jZSk7XG5cdFx0fSk7XG5cdH1cblx0Z2V0Q2hpbGRyZW4oKSB7XG5cdFx0cmV0dXJuIGZpbmRDaGlsZHJlbih0aGlzLmNvbXBvbmVudCk7XG5cdH1cbn07XG52YXIgTGF6eVBsdWdpbl9kZWZhdWx0ID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyID0gbnVsbDtcblx0fVxuXHRhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcblx0XHRpZiAoXCJsYXp5XCIgIT09IGNvbXBvbmVudC5lbGVtZW50LmF0dHJpYnV0ZXMuZ2V0TmFtZWRJdGVtKFwibG9hZGluZ1wiKT8udmFsdWUpIHJldHVybjtcblx0XHRjb21wb25lbnQub24oXCJjb25uZWN0XCIsICgpID0+IHtcblx0XHRcdHRoaXMuZ2V0T2JzZXJ2ZXIoKS5vYnNlcnZlKGNvbXBvbmVudC5lbGVtZW50KTtcblx0XHR9KTtcblx0XHRjb21wb25lbnQub24oXCJkaXNjb25uZWN0XCIsICgpID0+IHtcblx0XHRcdHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXI/LnVub2JzZXJ2ZShjb21wb25lbnQuZWxlbWVudCk7XG5cdFx0fSk7XG5cdH1cblx0Z2V0T2JzZXJ2ZXIoKSB7XG5cdFx0aWYgKCF0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyKSB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzLCBvYnNlcnZlcikgPT4ge1xuXHRcdFx0ZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuXHRcdFx0XHRpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcblx0XHRcdFx0XHRlbnRyeS50YXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJsaXZlOmFwcGVhclwiKSk7XG5cdFx0XHRcdFx0b2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHJldHVybiB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyO1xuXHR9XG59O1xudmFyIExvYWRpbmdQbHVnaW5fZGVmYXVsdCA9IGNsYXNzIHtcblx0YXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG5cdFx0Y29tcG9uZW50Lm9uKFwibG9hZGluZy5zdGF0ZTpzdGFydGVkXCIsIChlbGVtZW50LCByZXF1ZXN0KSA9PiB7XG5cdFx0XHR0aGlzLnN0YXJ0TG9hZGluZyhjb21wb25lbnQsIGVsZW1lbnQsIHJlcXVlc3QpO1xuXHRcdH0pO1xuXHRcdGNvbXBvbmVudC5vbihcImxvYWRpbmcuc3RhdGU6ZmluaXNoZWRcIiwgKGVsZW1lbnQpID0+IHtcblx0XHRcdHRoaXMuZmluaXNoTG9hZGluZyhjb21wb25lbnQsIGVsZW1lbnQpO1xuXHRcdH0pO1xuXHRcdHRoaXMuZmluaXNoTG9hZGluZyhjb21wb25lbnQsIGNvbXBvbmVudC5lbGVtZW50KTtcblx0fVxuXHRzdGFydExvYWRpbmcoY29tcG9uZW50LCB0YXJnZXRFbGVtZW50LCBiYWNrZW5kUmVxdWVzdCkge1xuXHRcdHRoaXMuaGFuZGxlTG9hZGluZ1RvZ2dsZShjb21wb25lbnQsIHRydWUsIHRhcmdldEVsZW1lbnQsIGJhY2tlbmRSZXF1ZXN0KTtcblx0fVxuXHRmaW5pc2hMb2FkaW5nKGNvbXBvbmVudCwgdGFyZ2V0RWxlbWVudCkge1xuXHRcdHRoaXMuaGFuZGxlTG9hZGluZ1RvZ2dsZShjb21wb25lbnQsIGZhbHNlLCB0YXJnZXRFbGVtZW50LCBudWxsKTtcblx0fVxuXHRoYW5kbGVMb2FkaW5nVG9nZ2xlKGNvbXBvbmVudCwgaXNMb2FkaW5nLCB0YXJnZXRFbGVtZW50LCBiYWNrZW5kUmVxdWVzdCkge1xuXHRcdGlmIChpc0xvYWRpbmcpIHRoaXMuYWRkQXR0cmlidXRlcyh0YXJnZXRFbGVtZW50LCBbXCJidXN5XCJdKTtcblx0XHRlbHNlIHRoaXMucmVtb3ZlQXR0cmlidXRlcyh0YXJnZXRFbGVtZW50LCBbXCJidXN5XCJdKTtcblx0XHR0aGlzLmdldExvYWRpbmdEaXJlY3RpdmVzKGNvbXBvbmVudCwgdGFyZ2V0RWxlbWVudCkuZm9yRWFjaCgoeyBlbGVtZW50LCBkaXJlY3RpdmVzIH0pID0+IHtcblx0XHRcdGlmIChpc0xvYWRpbmcpIHRoaXMuYWRkQXR0cmlidXRlcyhlbGVtZW50LCBbXCJkYXRhLWxpdmUtaXMtbG9hZGluZ1wiXSk7XG5cdFx0XHRlbHNlIHRoaXMucmVtb3ZlQXR0cmlidXRlcyhlbGVtZW50LCBbXCJkYXRhLWxpdmUtaXMtbG9hZGluZ1wiXSk7XG5cdFx0XHRkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuXHRcdFx0XHR0aGlzLmhhbmRsZUxvYWRpbmdEaXJlY3RpdmUoZWxlbWVudCwgaXNMb2FkaW5nLCBkaXJlY3RpdmUsIGJhY2tlbmRSZXF1ZXN0KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cdGhhbmRsZUxvYWRpbmdEaXJlY3RpdmUoZWxlbWVudCwgaXNMb2FkaW5nLCBkaXJlY3RpdmUsIGJhY2tlbmRSZXF1ZXN0KSB7XG5cdFx0Y29uc3QgZmluYWxBY3Rpb24gPSBwYXJzZUxvYWRpbmdBY3Rpb24oZGlyZWN0aXZlLmFjdGlvbiwgaXNMb2FkaW5nKTtcblx0XHRjb25zdCB0YXJnZXRlZEFjdGlvbnMgPSBbXTtcblx0XHRjb25zdCB0YXJnZXRlZE1vZGVscyA9IFtdO1xuXHRcdGxldCBkZWxheSA9IDA7XG5cdFx0Y29uc3QgdmFsaWRNb2RpZmllcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRcdHZhbGlkTW9kaWZpZXJzLnNldChcImRlbGF5XCIsIChtb2RpZmllcikgPT4ge1xuXHRcdFx0aWYgKCFpc0xvYWRpbmcpIHJldHVybjtcblx0XHRcdGRlbGF5ID0gbW9kaWZpZXIudmFsdWUgPyBOdW1iZXIucGFyc2VJbnQobW9kaWZpZXIudmFsdWUpIDogMjAwO1xuXHRcdH0pO1xuXHRcdHZhbGlkTW9kaWZpZXJzLnNldChcImFjdGlvblwiLCAobW9kaWZpZXIpID0+IHtcblx0XHRcdGlmICghbW9kaWZpZXIudmFsdWUpIHRocm93IG5ldyBFcnJvcihgVGhlIFwiYWN0aW9uXCIgaW4gZGF0YS1sb2FkaW5nIG11c3QgaGF2ZSBhbiBhY3Rpb24gbmFtZSAtIGUuZy4gYWN0aW9uKGZvbykuIEl0J3MgbWlzc2luZyBmb3IgXCIke2RpcmVjdGl2ZS5nZXRTdHJpbmcoKX1cImApO1xuXHRcdFx0dGFyZ2V0ZWRBY3Rpb25zLnB1c2gobW9kaWZpZXIudmFsdWUpO1xuXHRcdH0pO1xuXHRcdHZhbGlkTW9kaWZpZXJzLnNldChcIm1vZGVsXCIsIChtb2RpZmllcikgPT4ge1xuXHRcdFx0aWYgKCFtb2RpZmllci52YWx1ZSkgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJtb2RlbFwiIGluIGRhdGEtbG9hZGluZyBtdXN0IGhhdmUgYW4gYWN0aW9uIG5hbWUgLSBlLmcuIG1vZGVsKGZvbykuIEl0J3MgbWlzc2luZyBmb3IgXCIke2RpcmVjdGl2ZS5nZXRTdHJpbmcoKX1cImApO1xuXHRcdFx0dGFyZ2V0ZWRNb2RlbHMucHVzaChtb2RpZmllci52YWx1ZSk7XG5cdFx0fSk7XG5cdFx0ZGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuXHRcdFx0aWYgKHZhbGlkTW9kaWZpZXJzLmhhcyhtb2RpZmllci5uYW1lKSkge1xuXHRcdFx0XHQodmFsaWRNb2RpZmllcnMuZ2V0KG1vZGlmaWVyLm5hbWUpID8/ICgoKSA9PiB7fSkpKG1vZGlmaWVyKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBVbmtub3duIG1vZGlmaWVyIFwiJHttb2RpZmllci5uYW1lfVwiIHVzZWQgaW4gZGF0YS1sb2FkaW5nPVwiJHtkaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCIuIEF2YWlsYWJsZSBtb2RpZmllcnMgYXJlOiAke0FycmF5LmZyb20odmFsaWRNb2RpZmllcnMua2V5cygpKS5qb2luKFwiLCBcIil9LmApO1xuXHRcdH0pO1xuXHRcdGlmIChpc0xvYWRpbmcgJiYgdGFyZ2V0ZWRBY3Rpb25zLmxlbmd0aCA+IDAgJiYgYmFja2VuZFJlcXVlc3QgJiYgIWJhY2tlbmRSZXF1ZXN0LmNvbnRhaW5zT25lT2ZBY3Rpb25zKHRhcmdldGVkQWN0aW9ucykpIHJldHVybjtcblx0XHRpZiAoaXNMb2FkaW5nICYmIHRhcmdldGVkTW9kZWxzLmxlbmd0aCA+IDAgJiYgYmFja2VuZFJlcXVlc3QgJiYgIWJhY2tlbmRSZXF1ZXN0LmFyZUFueU1vZGVsc1VwZGF0ZWQodGFyZ2V0ZWRNb2RlbHMpKSByZXR1cm47XG5cdFx0bGV0IGxvYWRpbmdEaXJlY3RpdmU7XG5cdFx0c3dpdGNoIChmaW5hbEFjdGlvbikge1xuXHRcdFx0Y2FzZSBcInNob3dcIjpcblx0XHRcdFx0bG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMuc2hvd0VsZW1lbnQoZWxlbWVudCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImhpZGVcIjpcblx0XHRcdFx0bG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMuaGlkZUVsZW1lbnQoZWxlbWVudCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImFkZENsYXNzXCI6XG5cdFx0XHRcdGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLmFkZENsYXNzKGVsZW1lbnQsIGRpcmVjdGl2ZS5hcmdzKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwicmVtb3ZlQ2xhc3NcIjpcblx0XHRcdFx0bG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMucmVtb3ZlQ2xhc3MoZWxlbWVudCwgZGlyZWN0aXZlLmFyZ3MpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJhZGRBdHRyaWJ1dGVcIjpcblx0XHRcdFx0bG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMuYWRkQXR0cmlidXRlcyhlbGVtZW50LCBkaXJlY3RpdmUuYXJncyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcInJlbW92ZUF0dHJpYnV0ZVwiOlxuXHRcdFx0XHRsb2FkaW5nRGlyZWN0aXZlID0gKCkgPT4gdGhpcy5yZW1vdmVBdHRyaWJ1dGVzKGVsZW1lbnQsIGRpcmVjdGl2ZS5hcmdzKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OiB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gZGF0YS1sb2FkaW5nIGFjdGlvbiBcIiR7ZmluYWxBY3Rpb259XCJgKTtcblx0XHR9XG5cdFx0aWYgKGRlbGF5KSB7XG5cdFx0XHR3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGlmIChiYWNrZW5kUmVxdWVzdCAmJiAhYmFja2VuZFJlcXVlc3QuaXNSZXNvbHZlZCkgbG9hZGluZ0RpcmVjdGl2ZSgpO1xuXHRcdFx0fSwgZGVsYXkpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRsb2FkaW5nRGlyZWN0aXZlKCk7XG5cdH1cblx0Z2V0TG9hZGluZ0RpcmVjdGl2ZXMoY29tcG9uZW50LCBlbGVtZW50KSB7XG5cdFx0Y29uc3QgbG9hZGluZ0RpcmVjdGl2ZXMgPSBbXTtcblx0XHRsZXQgbWF0Y2hpbmdFbGVtZW50cyA9IEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtbG9hZGluZ11cIikpO1xuXHRcdG1hdGNoaW5nRWxlbWVudHMgPSBtYXRjaGluZ0VsZW1lbnRzLmZpbHRlcigoZWx0KSA9PiBlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbHQsIGNvbXBvbmVudCkpO1xuXHRcdGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZShcImRhdGEtbG9hZGluZ1wiKSkgbWF0Y2hpbmdFbGVtZW50cyA9IFtlbGVtZW50LCAuLi5tYXRjaGluZ0VsZW1lbnRzXTtcblx0XHRtYXRjaGluZ0VsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcblx0XHRcdGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgJiYgIShlbGVtZW50IGluc3RhbmNlb2YgU1ZHRWxlbWVudCkpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgRWxlbWVudCBUeXBlXCIpO1xuXHRcdFx0Y29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhlbGVtZW50LmRhdGFzZXQubG9hZGluZyB8fCBcInNob3dcIik7XG5cdFx0XHRsb2FkaW5nRGlyZWN0aXZlcy5wdXNoKHtcblx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdFx0ZGlyZWN0aXZlc1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGxvYWRpbmdEaXJlY3RpdmVzO1xuXHR9XG5cdHNob3dFbGVtZW50KGVsZW1lbnQpIHtcblx0XHRlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcInJldmVydFwiO1xuXHR9XG5cdGhpZGVFbGVtZW50KGVsZW1lbnQpIHtcblx0XHRlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0fVxuXHRhZGRDbGFzcyhlbGVtZW50LCBjbGFzc2VzKSB7XG5cdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmNvbWJpbmVTcGFjZWRBcnJheShjbGFzc2VzKSk7XG5cdH1cblx0cmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3Nlcykge1xuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSguLi5jb21iaW5lU3BhY2VkQXJyYXkoY2xhc3NlcykpO1xuXHRcdGlmIChlbGVtZW50LmNsYXNzTGlzdC5sZW5ndGggPT09IDApIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIik7XG5cdH1cblx0YWRkQXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG5cdFx0YXR0cmlidXRlcy5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgXCJcIik7XG5cdFx0fSk7XG5cdH1cblx0cmVtb3ZlQXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG5cdFx0YXR0cmlidXRlcy5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG5cdFx0fSk7XG5cdH1cbn07XG5jb25zdCBwYXJzZUxvYWRpbmdBY3Rpb24gPSAoYWN0aW9uLCBpc0xvYWRpbmcpID0+IHtcblx0c3dpdGNoIChhY3Rpb24pIHtcblx0XHRjYXNlIFwic2hvd1wiOiByZXR1cm4gaXNMb2FkaW5nID8gXCJzaG93XCIgOiBcImhpZGVcIjtcblx0XHRjYXNlIFwiaGlkZVwiOiByZXR1cm4gaXNMb2FkaW5nID8gXCJoaWRlXCIgOiBcInNob3dcIjtcblx0XHRjYXNlIFwiYWRkQ2xhc3NcIjogcmV0dXJuIGlzTG9hZGluZyA/IFwiYWRkQ2xhc3NcIiA6IFwicmVtb3ZlQ2xhc3NcIjtcblx0XHRjYXNlIFwicmVtb3ZlQ2xhc3NcIjogcmV0dXJuIGlzTG9hZGluZyA/IFwicmVtb3ZlQ2xhc3NcIiA6IFwiYWRkQ2xhc3NcIjtcblx0XHRjYXNlIFwiYWRkQXR0cmlidXRlXCI6IHJldHVybiBpc0xvYWRpbmcgPyBcImFkZEF0dHJpYnV0ZVwiIDogXCJyZW1vdmVBdHRyaWJ1dGVcIjtcblx0XHRjYXNlIFwicmVtb3ZlQXR0cmlidXRlXCI6IHJldHVybiBpc0xvYWRpbmcgPyBcInJlbW92ZUF0dHJpYnV0ZVwiIDogXCJhZGRBdHRyaWJ1dGVcIjtcblx0fVxuXHR0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gZGF0YS1sb2FkaW5nIGFjdGlvbiBcIiR7YWN0aW9ufVwiYCk7XG59O1xudmFyIFBhZ2VVbmxvYWRpbmdQbHVnaW5fZGVmYXVsdCA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuXHR9XG5cdGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuXHRcdGNvbXBvbmVudC5vbihcInJlbmRlcjpzdGFydGVkXCIsIChodG1sLCByZXNwb25zZSwgY29udHJvbHMpID0+IHtcblx0XHRcdGlmICghdGhpcy5pc0Nvbm5lY3RlZCkgY29udHJvbHMuc2hvdWxkUmVuZGVyID0gZmFsc2U7XG5cdFx0fSk7XG5cdFx0Y29tcG9uZW50Lm9uKFwiY29ubmVjdFwiLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmlzQ29ubmVjdGVkID0gdHJ1ZTtcblx0XHR9KTtcblx0XHRjb21wb25lbnQub24oXCJkaXNjb25uZWN0XCIsICgpID0+IHtcblx0XHRcdHRoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZTtcblx0XHR9KTtcblx0fVxufTtcbnZhciBQb2xsaW5nRGlyZWN0b3JfZGVmYXVsdCA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoY29tcG9uZW50KSB7XG5cdFx0dGhpcy5pc1BvbGxpbmdBY3RpdmUgPSB0cnVlO1xuXHRcdHRoaXMucG9sbGluZ0ludGVydmFscyA9IFtdO1xuXHRcdHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuXHR9XG5cdGFkZFBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pIHtcblx0XHR0aGlzLnBvbGxzLnB1c2goe1xuXHRcdFx0YWN0aW9uTmFtZSxcblx0XHRcdGR1cmF0aW9uXG5cdFx0fSk7XG5cdFx0aWYgKHRoaXMuaXNQb2xsaW5nQWN0aXZlKSB0aGlzLmluaXRpYXRlUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbik7XG5cdH1cblx0c3RhcnRBbGxQb2xsaW5nKCkge1xuXHRcdGlmICh0aGlzLmlzUG9sbGluZ0FjdGl2ZSkgcmV0dXJuO1xuXHRcdHRoaXMuaXNQb2xsaW5nQWN0aXZlID0gdHJ1ZTtcblx0XHR0aGlzLnBvbGxzLmZvckVhY2goKHsgYWN0aW9uTmFtZSwgZHVyYXRpb24gfSkgPT4ge1xuXHRcdFx0dGhpcy5pbml0aWF0ZVBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pO1xuXHRcdH0pO1xuXHR9XG5cdHN0b3BBbGxQb2xsaW5nKCkge1xuXHRcdHRoaXMuaXNQb2xsaW5nQWN0aXZlID0gZmFsc2U7XG5cdFx0dGhpcy5wb2xsaW5nSW50ZXJ2YWxzLmZvckVhY2goKGludGVydmFsKSA9PiB7XG5cdFx0XHRjbGVhckludGVydmFsKGludGVydmFsKTtcblx0XHR9KTtcblx0fVxuXHRjbGVhclBvbGxpbmcoKSB7XG5cdFx0dGhpcy5zdG9wQWxsUG9sbGluZygpO1xuXHRcdHRoaXMucG9sbHMgPSBbXTtcblx0XHR0aGlzLnN0YXJ0QWxsUG9sbGluZygpO1xuXHR9XG5cdGluaXRpYXRlUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbikge1xuXHRcdGxldCBjYWxsYmFjaztcblx0XHRpZiAoYWN0aW9uTmFtZSA9PT0gXCIkcmVuZGVyXCIpIGNhbGxiYWNrID0gKCkgPT4ge1xuXHRcdFx0dGhpcy5jb21wb25lbnQucmVuZGVyKCk7XG5cdFx0fTtcblx0XHRlbHNlIGNhbGxiYWNrID0gKCkgPT4ge1xuXHRcdFx0dGhpcy5jb21wb25lbnQuYWN0aW9uKGFjdGlvbk5hbWUsIHt9LCAwKTtcblx0XHR9O1xuXHRcdGNvbnN0IHRpbWVyID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcblx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0fSwgZHVyYXRpb24pO1xuXHRcdHRoaXMucG9sbGluZ0ludGVydmFscy5wdXNoKHRpbWVyKTtcblx0fVxufTtcbnZhciBQb2xsaW5nUGx1Z2luX2RlZmF1bHQgPSBjbGFzcyB7XG5cdGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuXHRcdHRoaXMuZWxlbWVudCA9IGNvbXBvbmVudC5lbGVtZW50O1xuXHRcdHRoaXMucG9sbGluZ0RpcmVjdG9yID0gbmV3IFBvbGxpbmdEaXJlY3Rvcl9kZWZhdWx0KGNvbXBvbmVudCk7XG5cdFx0dGhpcy5pbml0aWFsaXplUG9sbGluZygpO1xuXHRcdGNvbXBvbmVudC5vbihcImNvbm5lY3RcIiwgKCkgPT4ge1xuXHRcdFx0dGhpcy5wb2xsaW5nRGlyZWN0b3Iuc3RhcnRBbGxQb2xsaW5nKCk7XG5cdFx0fSk7XG5cdFx0Y29tcG9uZW50Lm9uKFwiZGlzY29ubmVjdFwiLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnBvbGxpbmdEaXJlY3Rvci5zdG9wQWxsUG9sbGluZygpO1xuXHRcdH0pO1xuXHRcdGNvbXBvbmVudC5vbihcInJlbmRlcjpmaW5pc2hlZFwiLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmluaXRpYWxpemVQb2xsaW5nKCk7XG5cdFx0fSk7XG5cdH1cblx0YWRkUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbikge1xuXHRcdHRoaXMucG9sbGluZ0RpcmVjdG9yLmFkZFBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pO1xuXHR9XG5cdGNsZWFyUG9sbGluZygpIHtcblx0XHR0aGlzLnBvbGxpbmdEaXJlY3Rvci5jbGVhclBvbGxpbmcoKTtcblx0fVxuXHRpbml0aWFsaXplUG9sbGluZygpIHtcblx0XHR0aGlzLmNsZWFyUG9sbGluZygpO1xuXHRcdGlmICh0aGlzLmVsZW1lbnQuZGF0YXNldC5wb2xsID09PSB2b2lkIDApIHJldHVybjtcblx0XHRjb25zdCByYXdQb2xsQ29uZmlnID0gdGhpcy5lbGVtZW50LmRhdGFzZXQucG9sbDtcblx0XHRwYXJzZURpcmVjdGl2ZXMocmF3UG9sbENvbmZpZyB8fCBcIiRyZW5kZXJcIikuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG5cdFx0XHRsZXQgZHVyYXRpb24gPSAyZTM7XG5cdFx0XHRkaXJlY3RpdmUubW9kaWZpZXJzLmZvckVhY2goKG1vZGlmaWVyKSA9PiB7XG5cdFx0XHRcdHN3aXRjaCAobW9kaWZpZXIubmFtZSkge1xuXHRcdFx0XHRcdGNhc2UgXCJkZWxheVwiOlxuXHRcdFx0XHRcdFx0aWYgKG1vZGlmaWVyLnZhbHVlKSBkdXJhdGlvbiA9IE51bWJlci5wYXJzZUludChtb2RpZmllci52YWx1ZSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OiBjb25zb2xlLndhcm4oYFVua25vd24gbW9kaWZpZXIgXCIke21vZGlmaWVyLm5hbWV9XCIgaW4gZGF0YS1wb2xsIFwiJHtyYXdQb2xsQ29uZmlnfVwiLmApO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuYWRkUG9sbChkaXJlY3RpdmUuYWN0aW9uLCBkdXJhdGlvbik7XG5cdFx0fSk7XG5cdH1cbn07XG52YXIgU2V0VmFsdWVPbnRvTW9kZWxGaWVsZHNQbHVnaW5fZGVmYXVsdCA9IGNsYXNzIHtcblx0YXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG5cdFx0dGhpcy5zeW5jaHJvbml6ZVZhbHVlT2ZNb2RlbEZpZWxkcyhjb21wb25lbnQpO1xuXHRcdGNvbXBvbmVudC5vbihcInJlbmRlcjpmaW5pc2hlZFwiLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnN5bmNocm9uaXplVmFsdWVPZk1vZGVsRmllbGRzKGNvbXBvbmVudCk7XG5cdFx0fSk7XG5cdH1cblx0c3luY2hyb25pemVWYWx1ZU9mTW9kZWxGaWVsZHMoY29tcG9uZW50KSB7XG5cdFx0Y29tcG9uZW50LmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLW1vZGVsXVwiKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG5cdFx0XHRpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGVsZW1lbnQgdXNpbmcgZGF0YS1tb2RlbC5cIik7XG5cdFx0XHRpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxGb3JtRWxlbWVudCkgcmV0dXJuO1xuXHRcdFx0aWYgKCFlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCBjb21wb25lbnQpKSByZXR1cm47XG5cdFx0XHRjb25zdCBtb2RlbERpcmVjdGl2ZSA9IGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZWxlbWVudCk7XG5cdFx0XHRpZiAoIW1vZGVsRGlyZWN0aXZlKSByZXR1cm47XG5cdFx0XHRjb25zdCBtb2RlbE5hbWUgPSBtb2RlbERpcmVjdGl2ZS5hY3Rpb247XG5cdFx0XHRpZiAoY29tcG9uZW50LmdldFVuc3luY2VkTW9kZWxzKCkuaW5jbHVkZXMobW9kZWxOYW1lKSkgcmV0dXJuO1xuXHRcdFx0aWYgKGNvbXBvbmVudC52YWx1ZVN0b3JlLmhhcyhtb2RlbE5hbWUpKSBzZXRWYWx1ZU9uRWxlbWVudChlbGVtZW50LCBjb21wb25lbnQudmFsdWVTdG9yZS5nZXQobW9kZWxOYW1lKSk7XG5cdFx0XHRpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50ICYmICFlbGVtZW50Lm11bHRpcGxlKSBjb21wb25lbnQudmFsdWVTdG9yZS5zZXQobW9kZWxOYW1lLCBnZXRWYWx1ZUZyb21FbGVtZW50KGVsZW1lbnQsIGNvbXBvbmVudC52YWx1ZVN0b3JlKSk7XG5cdFx0fSk7XG5cdH1cbn07XG52YXIgVmFsaWRhdGVkRmllbGRzUGx1Z2luX2RlZmF1bHQgPSBjbGFzcyB7XG5cdGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuXHRcdGNvbXBvbmVudC5vbihcIm1vZGVsOnNldFwiLCAobW9kZWxOYW1lKSA9PiB7XG5cdFx0XHR0aGlzLmhhbmRsZU1vZGVsU2V0KG1vZGVsTmFtZSwgY29tcG9uZW50LnZhbHVlU3RvcmUpO1xuXHRcdH0pO1xuXHR9XG5cdGhhbmRsZU1vZGVsU2V0KG1vZGVsTmFtZSwgdmFsdWVTdG9yZSkge1xuXHRcdGlmICh2YWx1ZVN0b3JlLmhhcyhcInZhbGlkYXRlZEZpZWxkc1wiKSkge1xuXHRcdFx0Y29uc3QgdmFsaWRhdGVkRmllbGRzID0gWy4uLnZhbHVlU3RvcmUuZ2V0KFwidmFsaWRhdGVkRmllbGRzXCIpXTtcblx0XHRcdGlmICghdmFsaWRhdGVkRmllbGRzLmluY2x1ZGVzKG1vZGVsTmFtZSkpIHZhbGlkYXRlZEZpZWxkcy5wdXNoKG1vZGVsTmFtZSk7XG5cdFx0XHR2YWx1ZVN0b3JlLnNldChcInZhbGlkYXRlZEZpZWxkc1wiLCB2YWxpZGF0ZWRGaWVsZHMpO1xuXHRcdH1cblx0fVxufTtcbnZhciBMaXZlQ29udHJvbGxlckRlZmF1bHQgPSBjbGFzcyBMaXZlQ29udHJvbGxlckRlZmF1bHQgZXh0ZW5kcyBDb250cm9sbGVyIHtcblx0Y29uc3RydWN0b3IoLi4uX2FyZ3MpIHtcblx0XHRzdXBlciguLi5fYXJncyk7XG5cdFx0dGhpcy5wZW5kaW5nQWN0aW9uVHJpZ2dlck1vZGVsRWxlbWVudCA9IG51bGw7XG5cdFx0dGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMgPSBbe1xuXHRcdFx0ZXZlbnQ6IFwiaW5wdXRcIixcblx0XHRcdGNhbGxiYWNrOiAoZXZlbnQpID0+IHRoaXMuaGFuZGxlSW5wdXRFdmVudChldmVudClcblx0XHR9LCB7XG5cdFx0XHRldmVudDogXCJjaGFuZ2VcIixcblx0XHRcdGNhbGxiYWNrOiAoZXZlbnQpID0+IHRoaXMuaGFuZGxlQ2hhbmdlRXZlbnQoZXZlbnQpXG5cdFx0fV07XG5cdFx0dGhpcy5wZW5kaW5nRmlsZXMgPSB7fTtcblx0fVxuXHRpbml0aWFsaXplKCkge1xuXHRcdHRoaXMubXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMub25NdXRhdGlvbnMuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5jcmVhdGVDb21wb25lbnQoKTtcblx0fVxuXHRjb25uZWN0KCkge1xuXHRcdHRoaXMuY29ubmVjdENvbXBvbmVudCgpO1xuXHRcdHRoaXMubXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudCwgeyBhdHRyaWJ1dGVzOiB0cnVlIH0pO1xuXHR9XG5cdGRpc2Nvbm5lY3QoKSB7XG5cdFx0dGhpcy5kaXNjb25uZWN0Q29tcG9uZW50KCk7XG5cdFx0dGhpcy5tdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblx0fVxuXHR1cGRhdGUoZXZlbnQpIHtcblx0XHRpZiAoZXZlbnQudHlwZSA9PT0gXCJpbnB1dFwiIHx8IGV2ZW50LnR5cGUgPT09IFwiY2hhbmdlXCIpIHRocm93IG5ldyBFcnJvcihgU2luY2UgTGl2ZUNvbXBvbmVudHMgMi4zLCB5b3Ugbm8gbG9uZ2VyIG5lZWQgZGF0YS1hY3Rpb249XCJsaXZlI3VwZGF0ZVwiIG9uIGZvcm0gZWxlbWVudHMuIEZvdW5kIG9uIGVsZW1lbnQ6ICR7Z2V0RWxlbWVudEFzVGFnVGV4dChldmVudC5jdXJyZW50VGFyZ2V0KX1gKTtcblx0XHR0aGlzLnVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudChldmVudC5jdXJyZW50VGFyZ2V0LCBudWxsKTtcblx0fVxuXHRhY3Rpb24oZXZlbnQpIHtcblx0XHRjb25zdCBwYXJhbXMgPSBldmVudC5wYXJhbXM7XG5cdFx0aWYgKCFwYXJhbXMuYWN0aW9uKSB0aHJvdyBuZXcgRXJyb3IoYE5vIGFjdGlvbiBuYW1lIHByb3ZpZGVkIG9uIGVsZW1lbnQ6ICR7Z2V0RWxlbWVudEFzVGFnVGV4dChldmVudC5jdXJyZW50VGFyZ2V0KX0uIERpZCB5b3UgZm9yZ2V0IHRvIGFkZCB0aGUgXCJkYXRhLWxpdmUtYWN0aW9uLXBhcmFtXCIgYXR0cmlidXRlP2ApO1xuXHRcdGNvbnN0IHJhd0FjdGlvbiA9IHBhcmFtcy5hY3Rpb247XG5cdFx0Y29uc3QgYWN0aW9uQXJncyA9IHsgLi4ucGFyYW1zIH07XG5cdFx0ZGVsZXRlIGFjdGlvbkFyZ3MuYWN0aW9uO1xuXHRcdGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMocmF3QWN0aW9uKTtcblx0XHRsZXQgZGVib3VuY2UgPSBmYWxzZTtcblx0XHRkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuXHRcdFx0bGV0IHBlbmRpbmdGaWxlcyA9IHt9O1xuXHRcdFx0Y29uc3QgdmFsaWRNb2RpZmllcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRcdFx0dmFsaWRNb2RpZmllcnMuc2V0KFwic3RvcFwiLCAoKSA9PiB7XG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0fSk7XG5cdFx0XHR2YWxpZE1vZGlmaWVycy5zZXQoXCJzZWxmXCIsICgpID0+IHtcblx0XHRcdFx0aWYgKGV2ZW50LnRhcmdldCAhPT0gZXZlbnQuY3VycmVudFRhcmdldCkgcmV0dXJuO1xuXHRcdFx0fSk7XG5cdFx0XHR2YWxpZE1vZGlmaWVycy5zZXQoXCJkZWJvdW5jZVwiLCAobW9kaWZpZXIpID0+IHtcblx0XHRcdFx0ZGVib3VuY2UgPSBtb2RpZmllci52YWx1ZSA/IE51bWJlci5wYXJzZUludChtb2RpZmllci52YWx1ZSkgOiB0cnVlO1xuXHRcdFx0fSk7XG5cdFx0XHR2YWxpZE1vZGlmaWVycy5zZXQoXCJmaWxlc1wiLCAobW9kaWZpZXIpID0+IHtcblx0XHRcdFx0aWYgKCFtb2RpZmllci52YWx1ZSkgcGVuZGluZ0ZpbGVzID0gdGhpcy5wZW5kaW5nRmlsZXM7XG5cdFx0XHRcdGVsc2UgaWYgKHRoaXMucGVuZGluZ0ZpbGVzW21vZGlmaWVyLnZhbHVlXSkgcGVuZGluZ0ZpbGVzW21vZGlmaWVyLnZhbHVlXSA9IHRoaXMucGVuZGluZ0ZpbGVzW21vZGlmaWVyLnZhbHVlXTtcblx0XHRcdH0pO1xuXHRcdFx0ZGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuXHRcdFx0XHRpZiAodmFsaWRNb2RpZmllcnMuaGFzKG1vZGlmaWVyLm5hbWUpKSB7XG5cdFx0XHRcdFx0KHZhbGlkTW9kaWZpZXJzLmdldChtb2RpZmllci5uYW1lKSA/PyAoKCkgPT4ge30pKShtb2RpZmllcik7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnNvbGUud2FybihgVW5rbm93biBtb2RpZmllciAke21vZGlmaWVyLm5hbWV9IGluIGFjdGlvbiBcIiR7cmF3QWN0aW9ufVwiLiBBdmFpbGFibGUgbW9kaWZpZXJzIGFyZTogJHtBcnJheS5mcm9tKHZhbGlkTW9kaWZpZXJzLmtleXMoKSkuam9pbihcIiwgXCIpfS5gKTtcblx0XHRcdH0pO1xuXHRcdFx0Zm9yIChjb25zdCBba2V5LCBpbnB1dF0gb2YgT2JqZWN0LmVudHJpZXMocGVuZGluZ0ZpbGVzKSkge1xuXHRcdFx0XHRpZiAoaW5wdXQuZmlsZXMpIHRoaXMuY29tcG9uZW50LmZpbGVzKGtleSwgaW5wdXQpO1xuXHRcdFx0XHRkZWxldGUgdGhpcy5wZW5kaW5nRmlsZXNba2V5XTtcblx0XHRcdH1cblx0XHRcdHRoaXMuY29tcG9uZW50LmFjdGlvbihkaXJlY3RpdmUuYWN0aW9uLCBhY3Rpb25BcmdzLCBkZWJvdW5jZSk7XG5cdFx0XHRpZiAoZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChldmVudC5jdXJyZW50VGFyZ2V0LCBmYWxzZSkpIHRoaXMucGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuXHRcdH0pO1xuXHR9XG5cdCRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9uZW50LnJlbmRlcigpO1xuXHR9XG5cdGVtaXQoZXZlbnQpIHtcblx0XHR0aGlzLmdldEVtaXREaXJlY3RpdmVzKGV2ZW50KS5mb3JFYWNoKCh7IG5hbWUsIGRhdGEsIG5hbWVNYXRjaCB9KSA9PiB7XG5cdFx0XHR0aGlzLmNvbXBvbmVudC5lbWl0KG5hbWUsIGRhdGEsIG5hbWVNYXRjaCk7XG5cdFx0fSk7XG5cdH1cblx0ZW1pdFVwKGV2ZW50KSB7XG5cdFx0dGhpcy5nZXRFbWl0RGlyZWN0aXZlcyhldmVudCkuZm9yRWFjaCgoeyBuYW1lLCBkYXRhLCBuYW1lTWF0Y2ggfSkgPT4ge1xuXHRcdFx0dGhpcy5jb21wb25lbnQuZW1pdFVwKG5hbWUsIGRhdGEsIG5hbWVNYXRjaCk7XG5cdFx0fSk7XG5cdH1cblx0ZW1pdFNlbGYoZXZlbnQpIHtcblx0XHR0aGlzLmdldEVtaXREaXJlY3RpdmVzKGV2ZW50KS5mb3JFYWNoKCh7IG5hbWUsIGRhdGEgfSkgPT4ge1xuXHRcdFx0dGhpcy5jb21wb25lbnQuZW1pdFNlbGYobmFtZSwgZGF0YSk7XG5cdFx0fSk7XG5cdH1cblx0JHVwZGF0ZU1vZGVsKG1vZGVsLCB2YWx1ZSwgc2hvdWxkUmVuZGVyID0gdHJ1ZSwgZGVib3VuY2UgPSB0cnVlKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9uZW50LnNldChtb2RlbCwgdmFsdWUsIHNob3VsZFJlbmRlciwgZGVib3VuY2UpO1xuXHR9XG5cdHByb3BzVXBkYXRlZEZyb21QYXJlbnRWYWx1ZUNoYW5nZWQoKSB7XG5cdFx0dGhpcy5jb21wb25lbnQuX3VwZGF0ZUZyb21QYXJlbnRQcm9wcyh0aGlzLnByb3BzVXBkYXRlZEZyb21QYXJlbnRWYWx1ZSk7XG5cdH1cblx0ZmluZ2VycHJpbnRWYWx1ZUNoYW5nZWQoKSB7XG5cdFx0dGhpcy5jb21wb25lbnQuZmluZ2VycHJpbnQgPSB0aGlzLmZpbmdlcnByaW50VmFsdWU7XG5cdH1cblx0Z2V0RW1pdERpcmVjdGl2ZXMoZXZlbnQpIHtcblx0XHRjb25zdCBwYXJhbXMgPSBldmVudC5wYXJhbXM7XG5cdFx0aWYgKCFwYXJhbXMuZXZlbnQpIHRocm93IG5ldyBFcnJvcihgTm8gZXZlbnQgbmFtZSBwcm92aWRlZCBvbiBlbGVtZW50OiAke2dldEVsZW1lbnRBc1RhZ1RleHQoZXZlbnQuY3VycmVudFRhcmdldCl9LiBEaWQgeW91IGZvcmdldCB0byBhZGQgdGhlIFwiZGF0YS1saXZlLWV2ZW50LXBhcmFtXCIgYXR0cmlidXRlP2ApO1xuXHRcdGNvbnN0IGV2ZW50SW5mbyA9IHBhcmFtcy5ldmVudDtcblx0XHRjb25zdCBldmVudEFyZ3MgPSB7IC4uLnBhcmFtcyB9O1xuXHRcdGRlbGV0ZSBldmVudEFyZ3MuZXZlbnQ7XG5cdFx0Y29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhldmVudEluZm8pO1xuXHRcdGNvbnN0IGVtaXRzID0gW107XG5cdFx0ZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcblx0XHRcdGxldCBuYW1lTWF0Y2ggPSBudWxsO1xuXHRcdFx0ZGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuXHRcdFx0XHRzd2l0Y2ggKG1vZGlmaWVyLm5hbWUpIHtcblx0XHRcdFx0XHRjYXNlIFwibmFtZVwiOlxuXHRcdFx0XHRcdFx0bmFtZU1hdGNoID0gbW9kaWZpZXIudmFsdWU7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OiB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbW9kaWZpZXIgJHttb2RpZmllci5uYW1lfSBpbiBldmVudCBcIiR7ZXZlbnRJbmZvfVwiLmApO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdGVtaXRzLnB1c2goe1xuXHRcdFx0XHRuYW1lOiBkaXJlY3RpdmUuYWN0aW9uLFxuXHRcdFx0XHRkYXRhOiBldmVudEFyZ3MsXG5cdFx0XHRcdG5hbWVNYXRjaFxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGVtaXRzO1xuXHR9XG5cdGNyZWF0ZUNvbXBvbmVudCgpIHtcblx0XHRjb25zdCBpZCA9IHRoaXMuZWxlbWVudC5pZCB8fCBudWxsO1xuXHRcdHRoaXMuY29tcG9uZW50ID0gbmV3IENvbXBvbmVudCh0aGlzLmVsZW1lbnQsIHRoaXMubmFtZVZhbHVlLCB0aGlzLnByb3BzVmFsdWUsIHRoaXMubGlzdGVuZXJzVmFsdWUsIGlkLCBMaXZlQ29udHJvbGxlckRlZmF1bHQuYmFja2VuZEZhY3RvcnkodGhpcyksIG5ldyBTdGltdWx1c0VsZW1lbnREcml2ZXIodGhpcykpO1xuXHRcdHRoaXMucHJveGllZENvbXBvbmVudCA9IHByb3hpZnlDb21wb25lbnQodGhpcy5jb21wb25lbnQpO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmVsZW1lbnQsIFwiX19jb21wb25lbnRcIiwge1xuXHRcdFx0dmFsdWU6IHRoaXMucHJveGllZENvbXBvbmVudCxcblx0XHRcdHdyaXRhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0aWYgKHRoaXMuaGFzRGVib3VuY2VWYWx1ZSkgdGhpcy5jb21wb25lbnQuZGVmYXVsdERlYm91bmNlID0gdGhpcy5kZWJvdW5jZVZhbHVlO1xuXHRcdFtcblx0XHRcdG5ldyBMb2FkaW5nUGx1Z2luX2RlZmF1bHQoKSxcblx0XHRcdG5ldyBMYXp5UGx1Z2luX2RlZmF1bHQoKSxcblx0XHRcdG5ldyBWYWxpZGF0ZWRGaWVsZHNQbHVnaW5fZGVmYXVsdCgpLFxuXHRcdFx0bmV3IFBhZ2VVbmxvYWRpbmdQbHVnaW5fZGVmYXVsdCgpLFxuXHRcdFx0bmV3IFBvbGxpbmdQbHVnaW5fZGVmYXVsdCgpLFxuXHRcdFx0bmV3IFNldFZhbHVlT250b01vZGVsRmllbGRzUGx1Z2luX2RlZmF1bHQoKSxcblx0XHRcdG5ldyBDaGlsZENvbXBvbmVudFBsdWdpbl9kZWZhdWx0KHRoaXMuY29tcG9uZW50KVxuXHRcdF0uZm9yRWFjaCgocGx1Z2luKSA9PiB7XG5cdFx0XHR0aGlzLmNvbXBvbmVudC5hZGRQbHVnaW4ocGx1Z2luKTtcblx0XHR9KTtcblx0fVxuXHRjb25uZWN0Q29tcG9uZW50KCkge1xuXHRcdHRoaXMuY29tcG9uZW50LmNvbm5lY3QoKTtcblx0XHR0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsZW1lbnQsIHsgYXR0cmlidXRlczogdHJ1ZSB9KTtcblx0XHR0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycy5mb3JFYWNoKCh7IGV2ZW50LCBjYWxsYmFjayB9KSA9PiB7XG5cdFx0XHR0aGlzLmNvbXBvbmVudC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcblx0XHR9KTtcblx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoXCJjb25uZWN0XCIpO1xuXHR9XG5cdGRpc2Nvbm5lY3RDb21wb25lbnQoKSB7XG5cdFx0dGhpcy5jb21wb25lbnQuZGlzY29ubmVjdCgpO1xuXHRcdHRoaXMuZWxlbWVudEV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHsgZXZlbnQsIGNhbGxiYWNrIH0pID0+IHtcblx0XHRcdHRoaXMuY29tcG9uZW50LmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuXHRcdH0pO1xuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudChcImRpc2Nvbm5lY3RcIik7XG5cdH1cblx0aGFuZGxlSW5wdXRFdmVudChldmVudCkge1xuXHRcdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblx0XHRpZiAoIXRhcmdldCkgcmV0dXJuO1xuXHRcdHRoaXMudXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50KHRhcmdldCwgXCJpbnB1dFwiKTtcblx0fVxuXHRoYW5kbGVDaGFuZ2VFdmVudChldmVudCkge1xuXHRcdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblx0XHRpZiAoIXRhcmdldCkgcmV0dXJuO1xuXHRcdHRoaXMudXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50KHRhcmdldCwgXCJjaGFuZ2VcIik7XG5cdH1cblx0dXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50KGVsZW1lbnQsIGV2ZW50TmFtZSkge1xuXHRcdGlmICghZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQoZWxlbWVudCwgdGhpcy5jb21wb25lbnQpKSByZXR1cm47XG5cdFx0aWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IHVwZGF0ZSBtb2RlbCBmb3Igbm9uIEhUTUxFbGVtZW50XCIpO1xuXHRcdGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJiBlbGVtZW50LnR5cGUgPT09IFwiZmlsZVwiKSB7XG5cdFx0XHRjb25zdCBrZXkgPSBlbGVtZW50Lm5hbWU7XG5cdFx0XHRpZiAoZWxlbWVudC5maWxlcz8ubGVuZ3RoKSB0aGlzLnBlbmRpbmdGaWxlc1trZXldID0gZWxlbWVudDtcblx0XHRcdGVsc2UgaWYgKHRoaXMucGVuZGluZ0ZpbGVzW2tleV0pIGRlbGV0ZSB0aGlzLnBlbmRpbmdGaWxlc1trZXldO1xuXHRcdH1cblx0XHRjb25zdCBtb2RlbERpcmVjdGl2ZSA9IGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZWxlbWVudCwgZmFsc2UpO1xuXHRcdGlmICghbW9kZWxEaXJlY3RpdmUpIHJldHVybjtcblx0XHRjb25zdCBtb2RlbEJpbmRpbmcgPSBnZXRfbW9kZWxfYmluZGluZ19kZWZhdWx0KG1vZGVsRGlyZWN0aXZlKTtcblx0XHRpZiAoIW1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUpIG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgPSBcImlucHV0XCI7XG5cdFx0aWYgKHRoaXMucGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQgPT09IGVsZW1lbnQpIG1vZGVsQmluZGluZy5zaG91bGRSZW5kZXIgPSBmYWxzZTtcblx0XHRpZiAoZXZlbnROYW1lID09PSBcImNoYW5nZVwiICYmIG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgPT09IFwiaW5wdXRcIikgbW9kZWxCaW5kaW5nLnRhcmdldEV2ZW50TmFtZSA9IFwiY2hhbmdlXCI7XG5cdFx0aWYgKGV2ZW50TmFtZSAmJiBtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lICE9PSBldmVudE5hbWUpIHJldHVybjtcblx0XHRpZiAoZmFsc2UgPT09IG1vZGVsQmluZGluZy5kZWJvdW5jZSkgaWYgKG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgPT09IFwiaW5wdXRcIikgbW9kZWxCaW5kaW5nLmRlYm91bmNlID0gdHJ1ZTtcblx0XHRlbHNlIG1vZGVsQmluZGluZy5kZWJvdW5jZSA9IDA7XG5cdFx0Y29uc3QgZmluYWxWYWx1ZSA9IGdldFZhbHVlRnJvbUVsZW1lbnQoZWxlbWVudCwgdGhpcy5jb21wb25lbnQudmFsdWVTdG9yZSk7XG5cdFx0Y29uc3QgZmluYWxWYWx1ZUlzRW1wdHkgPSBmaW5hbFZhbHVlID09PSBcIlwiIHx8IGZpbmFsVmFsdWUgPT09IG51bGwgfHwgZmluYWxWYWx1ZSA9PT0gdm9pZCAwO1xuXHRcdGlmIChpc1RleHR1YWxJbnB1dEVsZW1lbnQoZWxlbWVudCkgfHwgaXNUZXh0YXJlYUVsZW1lbnQoZWxlbWVudCkpIHtcblx0XHRcdGlmICghZmluYWxWYWx1ZUlzRW1wdHkgJiYgbW9kZWxCaW5kaW5nLm1pbkxlbmd0aCAhPT0gbnVsbCAmJiB0eXBlb2YgZmluYWxWYWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiBmaW5hbFZhbHVlLmxlbmd0aCA8IG1vZGVsQmluZGluZy5taW5MZW5ndGgpIHJldHVybjtcblx0XHRcdGlmICghZmluYWxWYWx1ZUlzRW1wdHkgJiYgbW9kZWxCaW5kaW5nLm1heExlbmd0aCAhPT0gbnVsbCAmJiB0eXBlb2YgZmluYWxWYWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiBmaW5hbFZhbHVlLmxlbmd0aCA+IG1vZGVsQmluZGluZy5tYXhMZW5ndGgpIHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGlzTnVtZXJpY2FsSW5wdXRFbGVtZW50KGVsZW1lbnQpKSB7XG5cdFx0XHRpZiAoIWZpbmFsVmFsdWVJc0VtcHR5KSB7XG5cdFx0XHRcdGNvbnN0IG51bWVyaWNWYWx1ZSA9IE51bWJlcihmaW5hbFZhbHVlKTtcblx0XHRcdFx0aWYgKG1vZGVsQmluZGluZy5taW5WYWx1ZSAhPT0gbnVsbCAmJiBudW1lcmljVmFsdWUgPCBtb2RlbEJpbmRpbmcubWluVmFsdWUpIHJldHVybjtcblx0XHRcdFx0aWYgKG1vZGVsQmluZGluZy5tYXhWYWx1ZSAhPT0gbnVsbCAmJiBudW1lcmljVmFsdWUgPiBtb2RlbEJpbmRpbmcubWF4VmFsdWUpIHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5jb21wb25lbnQuc2V0KG1vZGVsQmluZGluZy5tb2RlbE5hbWUsIGZpbmFsVmFsdWUsIG1vZGVsQmluZGluZy5zaG91bGRSZW5kZXIsIG1vZGVsQmluZGluZy5kZWJvdW5jZSk7XG5cdH1cblx0ZGlzcGF0Y2hFdmVudChuYW1lLCBkZXRhaWwgPSB7fSwgY2FuQnViYmxlID0gdHJ1ZSwgY2FuY2VsYWJsZSA9IGZhbHNlKSB7XG5cdFx0ZGV0YWlsLmNvbnRyb2xsZXIgPSB0aGlzO1xuXHRcdGRldGFpbC5jb21wb25lbnQgPSB0aGlzLnByb3hpZWRDb21wb25lbnQ7XG5cdFx0dGhpcy5kaXNwYXRjaChuYW1lLCB7XG5cdFx0XHRkZXRhaWwsXG5cdFx0XHRwcmVmaXg6IFwibGl2ZVwiLFxuXHRcdFx0Y2FuY2VsYWJsZSxcblx0XHRcdGJ1YmJsZXM6IGNhbkJ1YmJsZVxuXHRcdH0pO1xuXHR9XG5cdG9uTXV0YXRpb25zKG11dGF0aW9ucykge1xuXHRcdG11dGF0aW9ucy5mb3JFYWNoKChtdXRhdGlvbikgPT4ge1xuXHRcdFx0aWYgKG11dGF0aW9uLnR5cGUgPT09IFwiYXR0cmlidXRlc1wiICYmIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09IFwiaWRcIiAmJiB0aGlzLmVsZW1lbnQuaWQgIT09IHRoaXMuY29tcG9uZW50LmlkKSB7XG5cdFx0XHRcdHRoaXMuZGlzY29ubmVjdENvbXBvbmVudCgpO1xuXHRcdFx0XHR0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xuXHRcdFx0XHR0aGlzLmNvbm5lY3RDb21wb25lbnQoKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufTtcbkxpdmVDb250cm9sbGVyRGVmYXVsdC52YWx1ZXMgPSB7XG5cdG5hbWU6IFN0cmluZyxcblx0dXJsOiBTdHJpbmcsXG5cdHByb3BzOiB7XG5cdFx0dHlwZTogT2JqZWN0LFxuXHRcdGRlZmF1bHQ6IHt9XG5cdH0sXG5cdHByb3BzVXBkYXRlZEZyb21QYXJlbnQ6IHtcblx0XHR0eXBlOiBPYmplY3QsXG5cdFx0ZGVmYXVsdDoge31cblx0fSxcblx0bGlzdGVuZXJzOiB7XG5cdFx0dHlwZTogQXJyYXksXG5cdFx0ZGVmYXVsdDogW11cblx0fSxcblx0ZXZlbnRzVG9FbWl0OiB7XG5cdFx0dHlwZTogQXJyYXksXG5cdFx0ZGVmYXVsdDogW11cblx0fSxcblx0ZXZlbnRzVG9EaXNwYXRjaDoge1xuXHRcdHR5cGU6IEFycmF5LFxuXHRcdGRlZmF1bHQ6IFtdXG5cdH0sXG5cdGRlYm91bmNlOiB7XG5cdFx0dHlwZTogTnVtYmVyLFxuXHRcdGRlZmF1bHQ6IDE1MFxuXHR9LFxuXHRmaW5nZXJwcmludDoge1xuXHRcdHR5cGU6IFN0cmluZyxcblx0XHRkZWZhdWx0OiBcIlwiXG5cdH0sXG5cdHJlcXVlc3RNZXRob2Q6IHtcblx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0ZGVmYXVsdDogXCJwb3N0XCJcblx0fSxcblx0ZmV0Y2hDcmVkZW50aWFsczoge1xuXHRcdHR5cGU6IFN0cmluZyxcblx0XHRkZWZhdWx0OiBcInNhbWUtb3JpZ2luXCJcblx0fVxufTtcbkxpdmVDb250cm9sbGVyRGVmYXVsdC5iYWNrZW5kRmFjdG9yeSA9IChjb250cm9sbGVyKSA9PiBuZXcgQmFja2VuZF9kZWZhdWx0KGNvbnRyb2xsZXIudXJsVmFsdWUsIGNvbnRyb2xsZXIucmVxdWVzdE1ldGhvZFZhbHVlLCBjb250cm9sbGVyLmZldGNoQ3JlZGVudGlhbHNWYWx1ZSk7XG5leHBvcnQgeyBDb21wb25lbnQsIExpdmVDb250cm9sbGVyRGVmYXVsdCBhcyBkZWZhdWx0LCBnZXRDb21wb25lbnQgfTtcbiJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiX2RlZmF1bHQiLCJfQ29udHJvbGxlciIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl9jbGFzc0NhbGxDaGVjayIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjb25uZWN0IiwiZWxlbWVudCIsInRleHRDb250ZW50IiwiZGVmYXVsdCIsImluaXRDYXJvdXNlbHMiLCJBbHBpbmUiLCJ3aW5kb3ciLCJkYXRhIiwiY29waWVkIiwiY29weUNvZGUiLCJfdGhpcyIsImNvZGVCbG9jayIsIiRyZWZzIiwiY29kZVRleHQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0aGVuIiwic2V0VGltZW91dCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInN0YXJ0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0IiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJkZXNjIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX3R5cGVvZiIsIl9fYXdhaXQiLCJ1bndyYXBwZWQiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwibGVuZ3RoIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsIl9zbGljZWRUb0FycmF5IiwiYXJyIiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsIm8iLCJtaW5MZW4iLCJfYXJyYXlMaWtlVG9BcnJheSIsIm4iLCJ0b1N0cmluZyIsIkFycmF5IiwiZnJvbSIsInRlc3QiLCJsZW4iLCJhcnIyIiwiX2kiLCJfcyIsIl9lIiwiX3giLCJfciIsIl9hcnIiLCJfbiIsIl9kIiwiaXNBcnJheSIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiZGVzY3JpcHRvciIsIl90b1Byb3BlcnR5S2V5IiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX3RvUHJpbWl0aXZlIiwiU3RyaW5nIiwiaW5wdXQiLCJoaW50IiwicHJpbSIsInRvUHJpbWl0aXZlIiwicmVzIiwiTnVtYmVyIiwiQmFja2VuZFJlcXVlc3RfZGVmYXVsdCIsInByb21pc2UiLCJhY3Rpb25zIiwidXBkYXRlTW9kZWxzIiwiaXNSZXNvbHZlZCIsInJlc3BvbnNlIiwidXBkYXRlZE1vZGVscyIsImNvbnRhaW5zT25lT2ZBY3Rpb25zIiwidGFyZ2V0ZWRBY3Rpb25zIiwiZmlsdGVyIiwiYWN0aW9uIiwiaW5jbHVkZXMiLCJhcmVBbnlNb2RlbHNVcGRhdGVkIiwidGFyZ2V0ZWRNb2RlbHMiLCJtb2RlbCIsIlJlcXVlc3RCdWlsZGVyX2RlZmF1bHQiLCJ1cmwiLCJjcmVkZW50aWFscyIsImJ1aWxkUmVxdWVzdCIsInVwZGF0ZWQiLCJjaGlsZHJlbiIsInVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQiLCJmaWxlcyIsInNwbGl0VXJsIiwic3BsaXQiLCJfc3BsaXRVcmwiLCJfc3BsaXRVcmwyIiwicXVlcnlTdHJpbmciLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJmZXRjaE9wdGlvbnMiLCJoZWFkZXJzIiwiQWNjZXB0IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNlYXJjaCIsInRvdGFsRmlsZXMiLCJlbnRyaWVzIiwicmVkdWNlIiwidG90YWwiLCJjdXJyZW50IiwiaGFzRmluZ2VycHJpbnRzIiwid2lsbERhdGFGaXRJblVybCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXQiLCJyZXF1ZXN0RGF0YSIsInByb3BzRnJvbVBhcmVudCIsImNvbmNhdCIsImVuY29kZVVSSUNvbXBvbmVudCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJfaTIiLCJfT2JqZWN0JGVudHJpZXMiLCJfT2JqZWN0JGVudHJpZXMkX2kiLCJib2R5IiwicGFyYW1zU3RyaW5nIiwicHJvcHNKc29uIiwidXBkYXRlZEpzb24iLCJjaGlsZHJlbkpzb24iLCJwcm9wc0Zyb21QYXJlbnRKc29uIiwiQmFja2VuZF9kZWZhdWx0IiwicmVxdWVzdEJ1aWxkZXIiLCJtYWtlUmVxdWVzdCIsIl90aGlzJHJlcXVlc3RCdWlsZGVyJCIsImZldGNoIiwibWFwIiwiYmFja2VuZEFjdGlvbiIsIkJhY2tlbmRSZXNwb25zZV9kZWZhdWx0IiwiX2dldEJvZHkiLCJfY2FsbGVlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInRleHQiLCJnZXRCb2R5IiwiZ2V0TGl2ZVVybCIsImxpdmVVcmwiLCJnZXQiLCJnZXRFbGVtZW50QXNUYWdUZXh0IiwiaW5uZXJIVE1MIiwib3V0ZXJIVE1MIiwiaW5kZXhPZiIsImNvbXBvbmVudE1hcEJ5RWxlbWVudCIsIldlYWtNYXAiLCJjb21wb25lbnRNYXBCeUNvbXBvbmVudCIsIk1hcCIsInJlZ2lzdGVyQ29tcG9uZW50IiwiY29tcG9uZW50IiwidW5yZWdpc3RlckNvbXBvbmVudCIsImdldENvbXBvbmVudCIsImNvdW50IiwibWF4Q291bnQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImZpbmRDb21wb25lbnRzIiwiY3VycmVudENvbXBvbmVudCIsIm9ubHlQYXJlbnRzIiwib25seU1hdGNoTmFtZSIsImNvbXBvbmVudHMiLCJjb21wb25lbnROYW1lIiwiY29udGFpbnMiLCJmaW5kQ2hpbGRyZW4iLCJmb3VuZENoaWxkQ29tcG9uZW50IiwiY2hpbGRDb21wb25lbnROYW1lIiwiY2hpbGRDb21wb25lbnQiLCJmaW5kUGFyZW50IiwicGFyZW50RWxlbWVudCIsInBhcnNlRGlyZWN0aXZlcyIsImNvbnRlbnQiLCJkaXJlY3RpdmVzIiwiY3VycmVudEFjdGlvbk5hbWUiLCJjdXJyZW50QXJndW1lbnRWYWx1ZSIsImN1cnJlbnRBcmd1bWVudHMiLCJjdXJyZW50TW9kaWZpZXJzIiwiZ2V0TGFzdEFjdGlvbk5hbWUiLCJwdXNoSW5zdHJ1Y3Rpb24iLCJtb2RpZmllcnMiLCJnZXRTdHJpbmciLCJwdXNoQXJndW1lbnQiLCJ0cmltIiwicHVzaE1vZGlmaWVyIiwiY2hhciIsImNvbWJpbmVTcGFjZWRBcnJheSIsInBhcnRzIiwiZmluYWxQYXJ0cyIsInBhcnQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJ0cmltQWxsIiwic3RyIiwicmVwbGFjZSIsIm5vcm1hbGl6ZU1vZGVsTmFtZSIsInMiLCJqb2luIiwiZ2V0VmFsdWVGcm9tRWxlbWVudCIsInZhbHVlU3RvcmUiLCJIVE1MSW5wdXRFbGVtZW50IiwibW9kZWxOYW1lRGF0YSIsImdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQiLCJtb2RlbFZhbHVlIiwiZ2V0TXVsdGlwbGVDaGVja2JveFZhbHVlIiwiaGFzQXR0cmlidXRlIiwiY2hlY2tlZCIsImdldEF0dHJpYnV0ZSIsImlucHV0VmFsdWUiLCJIVE1MU2VsZWN0RWxlbWVudCIsIm11bHRpcGxlIiwic2VsZWN0ZWRPcHRpb25zIiwiZWwiLCJkYXRhc2V0Iiwic2V0VmFsdWVPbkVsZW1lbnQiLCJzb21lIiwiYXJyYXlXcmFwcGVkVmFsdWUiLCJvcHRpb25zIiwib3B0aW9uIiwic2VsZWN0ZWQiLCJnZXRBbGxNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50cyIsImRpcmVjdGl2ZSIsInRocm93T25NaXNzaW5nIiwiZGF0YU1vZGVsRGlyZWN0aXZlcyIsImZvcm1FbGVtZW50IiwiY2xvc2VzdCIsImVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50IiwiY2xvbmVIVE1MRWxlbWVudCIsIm5ld0VsZW1lbnQiLCJjbG9uZU5vZGUiLCJIVE1MRWxlbWVudCIsImh0bWxUb0VsZW1lbnQiLCJodG1sIiwidGVtcGxhdGUiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGRFbGVtZW50Q291bnQiLCJjaGlsZCIsImZpcnN0RWxlbWVudENoaWxkIiwiY3VycmVudFZhbHVlcyIsImZpbmFsVmFsdWVzIiwiaW5kZXgiLCJzcGxpY2UiLCJpc1RleHR1YWxJbnB1dEVsZW1lbnQiLCJpc1RleHRhcmVhRWxlbWVudCIsIkhUTUxUZXh0QXJlYUVsZW1lbnQiLCJpc051bWVyaWNhbElucHV0RWxlbWVudCIsIkhvb2tNYW5hZ2VyX2RlZmF1bHQiLCJob29rcyIsInJlZ2lzdGVyIiwiaG9va05hbWUiLCJjYWxsYmFjayIsInVucmVnaXN0ZXIiLCJ0cmlnZ2VySG9vayIsIl9sZW4iLCJfa2V5IiwiSWRpb21vcnBoIiwiRU1QVFlfU0VUIiwiU2V0IiwiZGVmYXVsdHMiLCJtb3JwaFN0eWxlIiwiY2FsbGJhY2tzIiwiYmVmb3JlTm9kZUFkZGVkIiwibm9PcCIsImFmdGVyTm9kZUFkZGVkIiwiYmVmb3JlTm9kZU1vcnBoZWQiLCJhZnRlck5vZGVNb3JwaGVkIiwiYmVmb3JlTm9kZVJlbW92ZWQiLCJhZnRlck5vZGVSZW1vdmVkIiwiYmVmb3JlQXR0cmlidXRlVXBkYXRlZCIsImhlYWQiLCJzdHlsZSIsInNob3VsZFByZXNlcnZlIiwiZWx0Iiwic2hvdWxkUmVBcHBlbmQiLCJzaG91bGRSZW1vdmUiLCJhZnRlckhlYWRNb3JwaGVkIiwibW9ycGgiLCJvbGROb2RlIiwibmV3Q29udGVudCIsImNvbmZpZyIsIkRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwicGFyc2VDb250ZW50Iiwibm9ybWFsaXplZENvbnRlbnQiLCJub3JtYWxpemVDb250ZW50IiwiY3R4IiwiY3JlYXRlTW9ycGhDb250ZXh0IiwibW9ycGhOb3JtYWxpemVkQ29udGVudCIsIm5vcm1hbGl6ZWROZXdDb250ZW50IiwiYmxvY2siLCJvbGRIZWFkIiwicXVlcnlTZWxlY3RvciIsIm5ld0hlYWQiLCJwcm9taXNlcyIsImhhbmRsZUhlYWRFbGVtZW50IiwiYWxsIiwiYXNzaWduIiwiaWdub3JlIiwibW9ycGhDaGlsZHJlbiIsImJlc3RNYXRjaCIsImZpbmRCZXN0Tm9kZU1hdGNoIiwicHJldmlvdXNTaWJsaW5nIiwibmV4dFNpYmxpbmciLCJtb3JwaGVkTm9kZSIsIm1vcnBoT2xkTm9kZVRvIiwiaW5zZXJ0U2libGluZ3MiLCJpZ25vcmVWYWx1ZU9mQWN0aXZlRWxlbWVudCIsInBvc3NpYmxlQWN0aXZlRWxlbWVudCIsImlnbm9yZUFjdGl2ZVZhbHVlIiwiYWN0aXZlRWxlbWVudCIsImlnbm9yZUFjdGl2ZSIsInJlbW92ZSIsImlzU29mdE1hdGNoIiwicmVwbGFjZUNoaWxkIiwiSFRNTEhlYWRFbGVtZW50Iiwic3luY05vZGVGcm9tIiwibmV3UGFyZW50Iiwib2xkUGFyZW50IiwibmV4dE5ld0NoaWxkIiwiZmlyc3RDaGlsZCIsImluc2VydGlvblBvaW50IiwibmV3Q2hpbGQiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uIiwiaXNJZFNldE1hdGNoIiwiaWRTZXRNYXRjaCIsImZpbmRJZFNldE1hdGNoIiwicmVtb3ZlTm9kZXNCZXR3ZWVuIiwic29mdE1hdGNoIiwiZmluZFNvZnRNYXRjaCIsImluc2VydEJlZm9yZSIsInRlbXBOb2RlIiwicmVtb3ZlTm9kZSIsImlnbm9yZUF0dHJpYnV0ZSIsImF0dHIiLCJ0byIsInVwZGF0ZVR5cGUiLCJub2RlVHlwZSIsImZyb21BdHRyaWJ1dGVzIiwiYXR0cmlidXRlcyIsInRvQXR0cmlidXRlcyIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJmcm9tQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiZSIsImYiLCJ0b0F0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsIm5vZGVWYWx1ZSIsInN5bmNJbnB1dFZhbHVlIiwic3luY0Jvb2xlYW5BdHRyaWJ1dGUiLCJhdHRyaWJ1dGVOYW1lIiwiaWdub3JlVXBkYXRlIiwiZnJvbVZhbHVlIiwidG9WYWx1ZSIsIkhUTUxPcHRpb25FbGVtZW50IiwibmV3SGVhZFRhZyIsImN1cnJlbnRIZWFkIiwiYWRkZWQiLCJyZW1vdmVkIiwicHJlc2VydmVkIiwibm9kZXNUb0FwcGVuZCIsImhlYWRNZXJnZVN0eWxlIiwic3JjVG9OZXdIZWFkTm9kZXMiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwibmV3SGVhZENoaWxkIiwiX2l0ZXJhdG9yMyIsIl9zdGVwMyIsImN1cnJlbnRIZWFkRWx0IiwiaW5OZXdDb250ZW50IiwiaGFzIiwiaXNSZUFwcGVuZGVkIiwiaXNQcmVzZXJ2ZWQiLCJsb2ciLCJfbG9vcCIsIm5ld05vZGUiLCJfbm9kZXNUb0FwcGVuZCIsIl9pMyIsIm5ld0VsdCIsImNyZWF0ZVJhbmdlIiwiY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50IiwiaHJlZiIsInNyYyIsIl9yZXNvbHZlIiwiX2k0IiwiX3JlbW92ZWQiLCJyZW1vdmVkRWxlbWVudCIsInJlbW92ZUNoaWxkIiwia2VwdCIsIm1lcmdlRGVmYXVsdHMiLCJmaW5hbENvbmZpZyIsImlkTWFwIiwiY3JlYXRlSWRNYXAiLCJkZWFkSWRzIiwibm9kZTEiLCJub2RlMiIsInRhZ05hbWUiLCJpZCIsImdldElkSW50ZXJzZWN0aW9uQ291bnQiLCJzdGFydEluY2x1c2l2ZSIsImVuZEV4Y2x1c2l2ZSIsIm5ld0NoaWxkUG90ZW50aWFsSWRDb3VudCIsInBvdGVudGlhbE1hdGNoIiwib3RoZXJNYXRjaENvdW50IiwicG90ZW50aWFsU29mdE1hdGNoIiwic2libGluZ1NvZnRNYXRjaENvdW50IiwicGFyc2VyIiwiRE9NUGFyc2VyIiwiY29udGVudFdpdGhTdmdzUmVtb3ZlZCIsIm1hdGNoIiwicGFyc2VGcm9tU3RyaW5nIiwiZ2VuZXJhdGVkQnlJZGlvbW9ycGgiLCJodG1sRWxlbWVudCIsIk5vZGUiLCJkdW1teVBhcmVudCIsIl9pNSIsIl9hcnIyIiwic3RhY2siLCJub2RlIiwiY3VycmVudEVsZW1lbnQiLCJiZXN0RWxlbWVudCIsInNjb3JlIiwibmV3U2NvcmUiLCJzY29yZUVsZW1lbnQiLCJpc0lkSW5Db25zaWRlcmF0aW9uIiwiaWRJc1dpdGhpbk5vZGUiLCJ0YXJnZXROb2RlIiwiaWRTZXQiLCJfaXRlcmF0b3I0IiwiX3N0ZXA0IiwiYWRkIiwic291cmNlU2V0IiwibWF0Y2hDb3VudCIsIl9pdGVyYXRvcjUiLCJfc3RlcDUiLCJwb3B1bGF0ZUlkTWFwRm9yTm9kZSIsIm5vZGVQYXJlbnQiLCJpZEVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIl9pdGVyYXRvcjYiLCJfc3RlcDYiLCJvbGRDb250ZW50Iiwibm9ybWFsaXplQXR0cmlidXRlc0ZvckNvbXBhcmlzb24iLCJzeW5jQXR0cmlidXRlcyIsImZyb21FbCIsInRvRWwiLCJleGVjdXRlTW9ycGhkb20iLCJyb290RnJvbUVsZW1lbnQiLCJyb290VG9FbGVtZW50IiwibW9kaWZpZWRGaWVsZEVsZW1lbnRzIiwiZ2V0RWxlbWVudFZhbHVlIiwiZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIiLCJvcmlnaW5hbEVsZW1lbnRJZHNUb1N3YXBBZnRlciIsIm9yaWdpbmFsRWxlbWVudHNUb1ByZXNlcnZlIiwibWFya0VsZW1lbnRBc05lZWRpbmdQb3N0TW9ycGhTd2FwIiwicmVwbGFjZVdpdGhDbG9uZSIsIm9sZEVsZW1lbnQiLCJjbG9uZWRPbGRFbGVtZW50IiwicmVwbGFjZVdpdGgiLCJfZnJvbUVsJHBhcmVudEVsZW1lbnQiLCJFbGVtZW50IiwiY2xvbmVkRnJvbUVsIiwiX194Iiwid2FzRWxlbWVudEFkZGVkIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwiZWxlbWVudENoYW5nZXMiLCJnZXRDaGFuZ2VkRWxlbWVudCIsImFwcGx5VG9FbGVtZW50Iiwibm9kZU5hbWUiLCJ0b1VwcGVyQ2FzZSIsImlzRXF1YWxOb2RlIiwibm9ybWFsaXplZEZyb21FbCIsIm5vcm1hbGl6ZWRUb0VsIiwib3JpZ2luYWxFbGVtZW50IiwiQ2hhbmdpbmdJdGVtc1RyYWNrZXJfZGVmYXVsdCIsImNoYW5nZWRJdGVtcyIsInJlbW92ZWRJdGVtcyIsInNldEl0ZW0iLCJpdGVtTmFtZSIsIm5ld1ZhbHVlIiwicHJldmlvdXNWYWx1ZSIsInJlbW92ZWRSZWNvcmQiLCJvcmlnaW5hbCIsIm9yaWdpbmFsUmVjb3JkIiwicmVtb3ZlSXRlbSIsImN1cnJlbnRWYWx1ZSIsInRydWVPcmlnaW5hbFZhbHVlIiwiZ2V0Q2hhbmdlZEl0ZW1zIiwiX3JlZiIsIl9yZWYyIiwiZ2V0UmVtb3ZlZEl0ZW1zIiwiaXNFbXB0eSIsInNpemUiLCJFbGVtZW50Q2hhbmdlcyIsImFkZGVkQ2xhc3NlcyIsInJlbW92ZWRDbGFzc2VzIiwic3R5bGVDaGFuZ2VzIiwiYXR0cmlidXRlQ2hhbmdlcyIsImFkZENsYXNzIiwiY2xhc3NOYW1lIiwicmVtb3ZlQ2xhc3MiLCJhZGRTdHlsZSIsInN0eWxlTmFtZSIsIm9yaWdpbmFsVmFsdWUiLCJyZW1vdmVTdHlsZSIsImFkZEF0dHJpYnV0ZSIsImdldEFkZGVkQ2xhc3NlcyIsImdldFJlbW92ZWRDbGFzc2VzIiwiZ2V0Q2hhbmdlZFN0eWxlcyIsImdldFJlbW92ZWRTdHlsZXMiLCJnZXRDaGFuZ2VkQXR0cmlidXRlcyIsImdldFJlbW92ZWRBdHRyaWJ1dGVzIiwiX2VsZW1lbnQkY2xhc3NMaXN0IiwiX2VsZW1lbnQkY2xhc3NMaXN0MiIsImNsYXNzTGlzdCIsImNoYW5nZSIsInNldFByb3BlcnR5IiwicmVtb3ZlUHJvcGVydHkiLCJFeHRlcm5hbE11dGF0aW9uVHJhY2tlcl9kZWZhdWx0Iiwic2hvdWxkVHJhY2tDaGFuZ2VDYWxsYmFjayIsImNoYW5nZWRFbGVtZW50cyIsImNoYW5nZWRFbGVtZW50c0NvdW50IiwiYWRkZWRFbGVtZW50cyIsInJlbW92ZWRFbGVtZW50cyIsImlzU3RhcnRlZCIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwib25NdXRhdGlvbnMiLCJiaW5kIiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJhdHRyaWJ1dGVPbGRWYWx1ZSIsImRpc2Nvbm5lY3QiLCJnZXRBZGRlZEVsZW1lbnRzIiwiaGFuZGxlUGVuZGluZ0NoYW5nZXMiLCJ0YWtlUmVjb3JkcyIsIm11dGF0aW9ucyIsImhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMiLCJfaXRlcmF0b3I3IiwiX3N0ZXA3IiwibXV0YXRpb24iLCJpc0VsZW1lbnRBZGRlZEJ5VHJhbnNsYXRpb24iLCJpc0NoYW5nZUluQWRkZWRFbGVtZW50IiwiX2l0ZXJhdG9yOCIsIl9zdGVwOCIsImFkZGVkRWxlbWVudCIsImhhbmRsZUNoaWxkTGlzdE11dGF0aW9uIiwiaGFuZGxlQXR0cmlidXRlTXV0YXRpb24iLCJfdGhpczIiLCJhZGRlZE5vZGVzIiwicmVtb3ZlZE5vZGVzIiwiY2hhbmdlZEVsZW1lbnQiLCJoYW5kbGVDbGFzc0F0dHJpYnV0ZU11dGF0aW9uIiwiaGFuZGxlU3R5bGVBdHRyaWJ1dGVNdXRhdGlvbiIsImhhbmRsZUdlbmVyaWNBdHRyaWJ1dGVNdXRhdGlvbiIsInByZXZpb3VzVmFsdWVzIiwib2xkVmFsdWUiLCJuZXdWYWx1ZXMiLCJhZGRlZFZhbHVlcyIsInJlbW92ZWRWYWx1ZXMiLCJwcmV2aW91c1N0eWxlcyIsImV4dHJhY3RTdHlsZXMiLCJuZXdTdHlsZXMiLCJhZGRlZE9yQ2hhbmdlZFN0eWxlcyIsInJlbW92ZWRTdHlsZXMiLCJzdHlsZXMiLCJzdHlsZU9iamVjdCIsInByb3BlcnR5IiwiVW5zeW5jZWRJbnB1dHNUcmFja2VyX2RlZmF1bHQiLCJtb2RlbEVsZW1lbnRSZXNvbHZlciIsIl90aGlzMyIsImVsZW1lbnRFdmVudExpc3RlbmVycyIsImV2ZW50IiwiaGFuZGxlSW5wdXRFdmVudCIsInVuc3luY2VkSW5wdXRzIiwiVW5zeW5jZWRJbnB1dENvbnRhaW5lciIsImFjdGl2YXRlIiwiX3RoaXM0IiwiX3JlZjMiLCJkZWFjdGl2YXRlIiwiX3RoaXM1IiwiX3JlZjQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWFya01vZGVsQXNTeW5jZWQiLCJtb2RlbE5hbWUiLCJ1cGRhdGVNb2RlbEZyb21FbGVtZW50IiwiZ2V0TW9kZWxOYW1lIiwiZ2V0VW5zeW5jZWRJbnB1dHMiLCJhbGxVbnN5bmNlZElucHV0cyIsImdldFVuc3luY2VkTW9kZWxzIiwiZ2V0VW5zeW5jZWRNb2RlbE5hbWVzIiwicmVzZXRVbnN5bmNlZEZpZWxkcyIsInVuc3luY2VkTm9uTW9kZWxGaWVsZHMiLCJ1bnN5bmNlZE1vZGVsTmFtZXMiLCJ1bnN5bmNlZE1vZGVsRmllbGRzIiwiX3RoaXM2IiwiZ2V0RGVlcERhdGEiLCJwcm9wZXJ0eVBhdGgiLCJfcGFyc2VEZWVwRGF0YSIsInBhcnNlRGVlcERhdGEiLCJjdXJyZW50TGV2ZWxEYXRhIiwiZmluYWxLZXkiLCJmaW5hbERhdGEiLCJwYXJzZSIsIlZhbHVlU3RvcmVfZGVmYXVsdCIsImRpcnR5UHJvcHMiLCJwZW5kaW5nUHJvcHMiLCJub3JtYWxpemVkTmFtZSIsImdldE9yaWdpbmFsUHJvcHMiLCJfb2JqZWN0U3ByZWFkIiwiZ2V0RGlydHlQcm9wcyIsImdldFVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQiLCJmbHVzaERpcnR5UHJvcHNUb1BlbmRpbmciLCJyZWluaXRpYWxpemVBbGxQcm9wcyIsInB1c2hQZW5kaW5nUHJvcHNCYWNrVG9EaXJ0eSIsInN0b3JlTmV3UHJvcHNGcm9tUGFyZW50IiwiY2hhbmdlZCIsIl9pNiIsIl9PYmplY3QkZW50cmllczIiLCJfT2JqZWN0JGVudHJpZXMyJF9pIiwiQ29tcG9uZW50IiwibGlzdGVuZXJzIiwiYmFja2VuZCIsImVsZW1lbnREcml2ZXIiLCJfdGhpczciLCJmaW5nZXJwcmludCIsImRlZmF1bHREZWJvdW5jZSIsImJhY2tlbmRSZXF1ZXN0IiwicGVuZGluZ0FjdGlvbnMiLCJwZW5kaW5nRmlsZXMiLCJpc1JlcXVlc3RQZW5kaW5nIiwicmVxdWVzdERlYm91bmNlVGltZW91dCIsImxpc3RlbmVyIiwiX3RoaXM3JGxpc3RlbmVycyRnZXQiLCJ1bnN5bmNlZElucHV0c1RyYWNrZXIiLCJyZXNldFByb21pc2UiLCJhZGRQbHVnaW4iLCJwbHVnaW4iLCJhdHRhY2hUb0NvbXBvbmVudCIsImNsZWFyUmVxdWVzdERlYm91bmNlVGltZW91dCIsIm9uIiwib2ZmIiwicmVSZW5kZXIiLCJkZWJvdW5jZSIsIm5leHRSZXF1ZXN0UHJvbWlzZSIsImlzQ2hhbmdlZCIsImRlYm91bmNlZFN0YXJ0UmVxdWVzdCIsImdldERhdGEiLCJyZW5kZXIiLCJ0cnlTdGFydGluZ1JlcXVlc3QiLCJlbWl0Iiwib25seU1hdGNoaW5nQ29tcG9uZW50c05hbWVkIiwicGVyZm9ybUVtaXQiLCJlbWl0VXAiLCJlbWl0U2VsZiIsImRvRW1pdCIsIm1hdGNoaW5nTmFtZSIsIl90aGlzOCIsImlzVHVyYm9FbmFibGVkIiwiVHVyYm8iLCJwZXJmb3JtUmVxdWVzdCIsIl90aGlzOSIsInRoaXNQcm9taXNlUmVzb2x2ZSIsIm5leHRSZXF1ZXN0UHJvbWlzZVJlc29sdmUiLCJmaWxlc1RvU2VuZCIsIl9pNyIsIl9PYmplY3QkZW50cmllczMiLCJfT2JqZWN0JGVudHJpZXMzJF9pIiwicmVxdWVzdENvbmZpZyIsIl9yZWY1IiwiX2NhbGxlZTIiLCJfaGVhZGVycyRnZXQiLCJiYWNrZW5kUmVzcG9uc2UiLCJfaTgiLCJfT2JqZWN0JHZhbHVlcyIsImNvbnRyb2xzIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiZGlzcGxheUVycm9yIiwicmVuZGVyRXJyb3IiLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwiVVJMIiwiaGFzaCIsIm9yaWdpbiIsInByb2Nlc3NSZXJlbmRlciIsIl94MiIsIl90aGlzMTAiLCJzaG91bGRSZW5kZXIiLCJ2aXNpdCIsIm1vZGlmaWVkTW9kZWxWYWx1ZXMiLCJtYXRjaGVzIiwibmV3UHJvcHMiLCJnZXRDb21wb25lbnRQcm9wcyIsImV2ZW50c1RvRW1pdCIsImdldEV2ZW50c1RvRW1pdCIsImJyb3dzZXJFdmVudHNUb0Rpc3BhdGNoIiwiZ2V0QnJvd3NlckV2ZW50c1RvRGlzcGF0Y2giLCJfcmVmNiIsIl9yZWY3IiwicGF5bG9hZCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImJ1YmJsZXMiLCJjYWxjdWxhdGVEZWJvdW5jZSIsImNsZWFyVGltZW91dCIsIl90aGlzMTEiLCJtb2RhbCIsImdldEVsZW1lbnRCeUlkIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsInBvc2l0aW9uIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJpZnJhbWUiLCJib3JkZXJSYWRpdXMiLCJmbGV4R3JvdyIsInByZXBlbmQiLCJvdmVyZmxvdyIsImNvbnRlbnRXaW5kb3ciLCJvcGVuIiwid3JpdGUiLCJjbG9zZSIsImNsb3NlTW9kYWwiLCJmb2N1cyIsIl90aGlzMTIiLCJfdXBkYXRlRnJvbVBhcmVudFByb3BzIiwicHJveGlmeUNvbXBvbmVudCIsIlByb3h5IiwicHJvcCIsImNhbGxhYmxlIiwiX2xlbjIiLCJfa2V5MiIsIlJlZmxlY3QiLCJTdGltdWx1c0VsZW1lbnREcml2ZXIiLCJjb250cm9sbGVyIiwibW9kZWxEaXJlY3RpdmUiLCJwcm9wc1ZhbHVlIiwiZXZlbnRzVG9FbWl0VmFsdWUiLCJldmVudHNUb0Rpc3BhdGNoVmFsdWUiLCJnZXRfbW9kZWxfYmluZGluZ19kZWZhdWx0IiwidGFyZ2V0RXZlbnROYW1lIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsIm1vZGlmaWVyIiwicGFyc2VJbnQiLCJwYXJzZUZsb2F0IiwiX21vZGVsRGlyZWN0aXZlJGFjdGlvIiwiX21vZGVsRGlyZWN0aXZlJGFjdGlvMiIsImlubmVyTW9kZWxOYW1lIiwiQ2hpbGRDb21wb25lbnRQbHVnaW5fZGVmYXVsdCIsInBhcmVudE1vZGVsQmluZGluZ3MiLCJfdGhpczEzIiwiZ2V0Q2hpbGRyZW5GaW5nZXJwcmludHMiLCJub3RpZnlQYXJlbnRNb2RlbENoYW5nZSIsImZpbmdlcnByaW50cyIsImdldENoaWxkcmVuIiwidGFnIiwidG9Mb3dlckNhc2UiLCJwYXJlbnRDb21wb25lbnQiLCJtb2RlbEJpbmRpbmciLCJMYXp5UGx1Z2luX2RlZmF1bHQiLCJpbnRlcnNlY3Rpb25PYnNlcnZlciIsIl9jb21wb25lbnQkZWxlbWVudCRhdCIsIl90aGlzMTQiLCJnZXROYW1lZEl0ZW0iLCJnZXRPYnNlcnZlciIsIl90aGlzMTQkaW50ZXJzZWN0aW9uTyIsInVub2JzZXJ2ZSIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZXIiLCJpc0ludGVyc2VjdGluZyIsIkxvYWRpbmdQbHVnaW5fZGVmYXVsdCIsIl90aGlzMTUiLCJyZXF1ZXN0Iiwic3RhcnRMb2FkaW5nIiwiZmluaXNoTG9hZGluZyIsInRhcmdldEVsZW1lbnQiLCJoYW5kbGVMb2FkaW5nVG9nZ2xlIiwiaXNMb2FkaW5nIiwiX3RoaXMxNiIsImFkZEF0dHJpYnV0ZXMiLCJyZW1vdmVBdHRyaWJ1dGVzIiwiZ2V0TG9hZGluZ0RpcmVjdGl2ZXMiLCJfcmVmOCIsImhhbmRsZUxvYWRpbmdEaXJlY3RpdmUiLCJfdGhpczE3IiwiZmluYWxBY3Rpb24iLCJwYXJzZUxvYWRpbmdBY3Rpb24iLCJkZWxheSIsInZhbGlkTW9kaWZpZXJzIiwiX3ZhbGlkTW9kaWZpZXJzJGdldCIsImxvYWRpbmdEaXJlY3RpdmUiLCJzaG93RWxlbWVudCIsImhpZGVFbGVtZW50IiwibG9hZGluZ0RpcmVjdGl2ZXMiLCJtYXRjaGluZ0VsZW1lbnRzIiwiU1ZHRWxlbWVudCIsImxvYWRpbmciLCJjbGFzc2VzIiwiX2VsZW1lbnQkY2xhc3NMaXN0MyIsIl9lbGVtZW50JGNsYXNzTGlzdDQiLCJhdHRyaWJ1dGUiLCJQYWdlVW5sb2FkaW5nUGx1Z2luX2RlZmF1bHQiLCJpc0Nvbm5lY3RlZCIsIl90aGlzMTgiLCJQb2xsaW5nRGlyZWN0b3JfZGVmYXVsdCIsImlzUG9sbGluZ0FjdGl2ZSIsInBvbGxpbmdJbnRlcnZhbHMiLCJhZGRQb2xsIiwiYWN0aW9uTmFtZSIsImR1cmF0aW9uIiwicG9sbHMiLCJpbml0aWF0ZVBvbGwiLCJzdGFydEFsbFBvbGxpbmciLCJfdGhpczE5IiwiX3JlZjkiLCJzdG9wQWxsUG9sbGluZyIsImNsZWFyUG9sbGluZyIsIl90aGlzMjAiLCJ0aW1lciIsIlBvbGxpbmdQbHVnaW5fZGVmYXVsdCIsIl90aGlzMjEiLCJwb2xsaW5nRGlyZWN0b3IiLCJpbml0aWFsaXplUG9sbGluZyIsIl90aGlzMjIiLCJwb2xsIiwicmF3UG9sbENvbmZpZyIsIndhcm4iLCJTZXRWYWx1ZU9udG9Nb2RlbEZpZWxkc1BsdWdpbl9kZWZhdWx0IiwiX3RoaXMyMyIsInN5bmNocm9uaXplVmFsdWVPZk1vZGVsRmllbGRzIiwiSFRNTEZvcm1FbGVtZW50IiwiVmFsaWRhdGVkRmllbGRzUGx1Z2luX2RlZmF1bHQiLCJfdGhpczI0IiwiaGFuZGxlTW9kZWxTZXQiLCJ2YWxpZGF0ZWRGaWVsZHMiLCJMaXZlQ29udHJvbGxlckRlZmF1bHQiLCJfdGhpczI1IiwiX2xlbjMiLCJfYXJncyIsIl9rZXkzIiwicGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQiLCJoYW5kbGVDaGFuZ2VFdmVudCIsImluaXRpYWxpemUiLCJjcmVhdGVDb21wb25lbnQiLCJjb25uZWN0Q29tcG9uZW50IiwiZGlzY29ubmVjdENvbXBvbmVudCIsInVwZGF0ZSIsImN1cnJlbnRUYXJnZXQiLCJ1cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQiLCJfdGhpczI2IiwicmF3QWN0aW9uIiwiYWN0aW9uQXJncyIsInN0b3BQcm9wYWdhdGlvbiIsIl92YWxpZE1vZGlmaWVycyRnZXQyIiwiX2k5IiwiX09iamVjdCRlbnRyaWVzNCIsIl9PYmplY3QkZW50cmllczQkX2kiLCIkcmVuZGVyIiwiX3RoaXMyNyIsImdldEVtaXREaXJlY3RpdmVzIiwiX3JlZjEwIiwibmFtZU1hdGNoIiwiX3RoaXMyOCIsIl9yZWYxMSIsIl90aGlzMjkiLCJfcmVmMTIiLCIkdXBkYXRlTW9kZWwiLCJwcm9wc1VwZGF0ZWRGcm9tUGFyZW50VmFsdWVDaGFuZ2VkIiwicHJvcHNVcGRhdGVkRnJvbVBhcmVudFZhbHVlIiwiZmluZ2VycHJpbnRWYWx1ZUNoYW5nZWQiLCJmaW5nZXJwcmludFZhbHVlIiwiZXZlbnRJbmZvIiwiZXZlbnRBcmdzIiwiZW1pdHMiLCJfdGhpczMwIiwibmFtZVZhbHVlIiwibGlzdGVuZXJzVmFsdWUiLCJiYWNrZW5kRmFjdG9yeSIsInByb3hpZWRDb21wb25lbnQiLCJoYXNEZWJvdW5jZVZhbHVlIiwiZGVib3VuY2VWYWx1ZSIsIl90aGlzMzEiLCJfcmVmMTMiLCJfdGhpczMyIiwiX3JlZjE0IiwiZXZlbnROYW1lIiwiX2VsZW1lbnQkZmlsZXMiLCJmaW5hbFZhbHVlIiwiZmluYWxWYWx1ZUlzRW1wdHkiLCJudW1lcmljVmFsdWUiLCJjYW5CdWJibGUiLCJjYW5jZWxhYmxlIiwiZGlzcGF0Y2giLCJwcmVmaXgiLCJfdGhpczMzIiwicHJvcHNVcGRhdGVkRnJvbVBhcmVudCIsImV2ZW50c1RvRGlzcGF0Y2giLCJyZXF1ZXN0TWV0aG9kIiwiZmV0Y2hDcmVkZW50aWFscyIsInVybFZhbHVlIiwicmVxdWVzdE1ldGhvZFZhbHVlIiwiZmV0Y2hDcmVkZW50aWFsc1ZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==