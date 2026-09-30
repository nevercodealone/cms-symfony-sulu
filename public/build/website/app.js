(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/website/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!************************************************************************************************************************!*\
  !*** ./assets/website/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./code_copy_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/website/controllers/code_copy_controller.js",
	"./load_more_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/website/controllers/load_more_controller.js",
	"./mobile_menu_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/website/controllers/mobile_menu_controller.js"
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

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/website/controllers/code_copy_controller.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/website/controllers/code_copy_controller.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }





















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var REVERT_DELAY = 2000;
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
      this.revertTimer = null;
      if (!navigator.clipboard && this.hasButtonTarget) {
        this.buttonTarget.hidden = true;
      }
    }
  }, {
    key: "copy",
    value: function copy() {
      var _this = this;
      if (!navigator.clipboard || !this.hasCodeTarget) {
        return;
      }
      var text = this.codeTarget.textContent.trim();
      var previousText = this.hasLabelTarget ? this.labelTarget.textContent : null;
      navigator.clipboard.writeText(text).then(function () {
        if (_this.hasLabelTarget) {
          _this.labelTarget.textContent = 'Copied!';
        }
        if (_this.revertTimer) {
          clearTimeout(_this.revertTimer);
        }
        _this.revertTimer = setTimeout(function () {
          if (_this.hasLabelTarget && previousText !== null) {
            _this.labelTarget.textContent = previousText;
          }
          _this.revertTimer = null;
        }, REVERT_DELAY);
      })["catch"](function () {
        // Silently ignore rejection — label stays in default state.
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      if (this.revertTimer) {
        clearTimeout(this.revertTimer);
        this.revertTimer = null;
      }
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_21__.Controller);
_defineProperty(_default, "targets", ['code', 'label', 'button']);


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/website/controllers/load_more_controller.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/website/controllers/load_more_controller.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
























function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

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
      this.update();
    }
  }, {
    key: "reveal",
    value: function reveal() {
      this.hiddenCards().slice(0, this.stepValue).forEach(function (card) {
        return card.removeAttribute('hidden');
      });
      this.update();
    }
  }, {
    key: "update",
    value: function update() {
      var cards = this.cards();
      var total = cards.length;
      var visible = total - this.hiddenCards().length;
      if (this.hasCountTarget) {
        this.countTarget.textContent = visible + '/' + total;
      }
      if (this.hasActionsTarget && visible >= total) {
        this.actionsTarget.classList.add('hidden');
      }
    }
  }, {
    key: "cards",
    value: function cards() {
      if (!this.hasGridTarget) {
        return [];
      }
      return Array.from(this.gridTarget.children);
    }
  }, {
    key: "hiddenCards",
    value: function hiddenCards() {
      return this.cards().filter(function (card) {
        return card.hasAttribute('hidden');
      });
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_24__.Controller);
_defineProperty(_default, "targets", ['grid', 'actions', 'count']);
_defineProperty(_default, "values", {
  step: {
    type: Number,
    "default": 6
  }
});


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/website/controllers/mobile_menu_controller.js":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/website/controllers/mobile_menu_controller.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }




















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var LOCK_CLASS = 'is-locked';
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    var _this;
    _classCallCheck(this, _default);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "boundHandleOutsideClick", function (event) {
      if (event.target === _this.dialogTarget) {
        _this.close();
      }
    });
    return _this;
  }
  _createClass(_default, [{
    key: "open",
    value: function open() {
      if (!this.hasDialogTarget) {
        return;
      }
      this.dialogTarget.showModal();
      if (this.hasToggleTarget) {
        this.toggleTarget.setAttribute('aria-expanded', 'true');
      }
      document.documentElement.classList.add(LOCK_CLASS);
      this.dialogTarget.addEventListener('click', this.boundHandleOutsideClick);
    }
  }, {
    key: "close",
    value: function close() {
      if (!this.hasDialogTarget) {
        return;
      }
      if (this.dialogTarget.open) {
        this.dialogTarget.close();
      }
      if (this.hasToggleTarget) {
        this.toggleTarget.setAttribute('aria-expanded', 'false');
      }
      document.documentElement.classList.remove(LOCK_CLASS);
      if (this.hasDialogTarget) {
        this.dialogTarget.removeEventListener('click', this.boundHandleOutsideClick);
      }
    }
  }, {
    key: "closeOnLink",
    value: function closeOnLink() {
      this.close();
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      if (this.hasDialogTarget) {
        this.dialogTarget.removeEventListener('click', this.boundHandleOutsideClick);
        if (this.dialogTarget.open) {
          this.dialogTarget.close();
        }
      }
      document.documentElement.classList.remove(LOCK_CLASS);
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_20__.Controller);
_defineProperty(_default, "targets", ['dialog', 'toggle']);


/***/ }),

/***/ "./assets/website/app.js":
/*!*******************************!*\
  !*** ./assets/website/app.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/app.css */ "./assets/website/styles/app.css");
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bootstrap.js */ "./assets/website/bootstrap.js");
/* harmony import */ var flowbite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flowbite */ "./node_modules/flowbite/lib/esm/index.js");





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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-8c6c2e","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-fa508a","assets_website_styles_app_css-node_modules_flowbite_src_themes_default_css"], () => (__webpack_exec__("./assets/website/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztFQUNEaytCLHNCQUFzQixFQUFFO0lBQ3ZCaGhDLElBQUksRUFBRThDLE1BQU07SUFDWixXQUFTLENBQUM7RUFDWCxDQUFDO0VBQ0Qyc0IsU0FBUyxFQUFFO0lBQ1Z6dkIsSUFBSSxFQUFFUCxLQUFLO0lBQ1gsV0FBUztFQUNWLENBQUM7RUFDRDAwQixZQUFZLEVBQUU7SUFDYm4wQixJQUFJLEVBQUVQLEtBQUs7SUFDWCxXQUFTO0VBQ1YsQ0FBQztFQUNEd2hDLGdCQUFnQixFQUFFO0lBQ2pCamhDLElBQUksRUFBRVAsS0FBSztJQUNYLFdBQVM7RUFDVixDQUFDO0VBQ0RzeEIsUUFBUSxFQUFFO0lBQ1Qvd0IsSUFBSSxFQUFFQyxNQUFNO0lBQ1osV0FBUztFQUNWLENBQUM7RUFDRDR2QixXQUFXLEVBQUU7SUFDWjd2QixJQUFJLEVBQUVtTixNQUFNO0lBQ1osV0FBUztFQUNWLENBQUM7RUFDRCt6QixhQUFhLEVBQUU7SUFDZGxoQyxJQUFJLEVBQUVtTixNQUFNO0lBQ1osV0FBUztFQUNWLENBQUM7RUFDRGcwQixnQkFBZ0IsRUFBRTtJQUNqQm5oQyxJQUFJLEVBQUVtTixNQUFNO0lBQ1osV0FBUztFQUNWO0FBQ0QsQ0FBQztBQUNEa3dCLHFCQUFxQixDQUFDeUMsY0FBYyxHQUFHLFVBQUNoSixVQUFVO0VBQUEsT0FBSyxJQUFJM2xCLGVBQWUsQ0FBQzJsQixVQUFVLENBQUNzSyxRQUFRLEVBQUV0SyxVQUFVLENBQUN1SyxrQkFBa0IsRUFBRXZLLFVBQVUsQ0FBQ3dLLHFCQUFxQixDQUFDO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvd2Vic2l0ZS9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy93ZWJzaXRlL2NvbnRyb2xsZXJzL2NvZGVfY29weV9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy93ZWJzaXRlL2NvbnRyb2xsZXJzL2xvYWRfbW9yZV9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy93ZWJzaXRlL2NvbnRyb2xsZXJzL21vYmlsZV9tZW51X2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3dlYnNpdGUvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy93ZWJzaXRlL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvd2Vic2l0ZS9zdHlsZXMvYXBwLmNzcz9hMzkxIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LWxpdmUtY29tcG9uZW50L2Fzc2V0cy9kaXN0L2xpdmVfY29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vY29kZV9jb3B5X2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy93ZWJzaXRlL2NvbnRyb2xsZXJzL2NvZGVfY29weV9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9sb2FkX21vcmVfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL3dlYnNpdGUvY29udHJvbGxlcnMvbG9hZF9tb3JlX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL21vYmlsZV9tZW51X2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy93ZWJzaXRlL2NvbnRyb2xsZXJzL21vYmlsZV9tZW51X2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvd2Vic2l0ZS9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImltcG9ydCBjb250cm9sbGVyXzAgZnJvbSAnQHN5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvZGlzdC9saXZlX2NvbnRyb2xsZXIuanMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICAnbGl2ZSc6IGNvbnRyb2xsZXJfMCxcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmNvbnN0IFJFVkVSVF9ERUxBWSA9IDIwMDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgc3RhdGljIHRhcmdldHMgPSBbJ2NvZGUnLCAnbGFiZWwnLCAnYnV0dG9uJ107XG5cbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLnJldmVydFRpbWVyID0gbnVsbDtcbiAgICAgICAgaWYgKCFuYXZpZ2F0b3IuY2xpcGJvYXJkICYmIHRoaXMuaGFzQnV0dG9uVGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvblRhcmdldC5oaWRkZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29weSgpIHtcbiAgICAgICAgaWYgKCFuYXZpZ2F0b3IuY2xpcGJvYXJkIHx8ICF0aGlzLmhhc0NvZGVUYXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRleHQgPSB0aGlzLmNvZGVUYXJnZXQudGV4dENvbnRlbnQudHJpbSgpO1xuICAgICAgICBjb25zdCBwcmV2aW91c1RleHQgPSB0aGlzLmhhc0xhYmVsVGFyZ2V0ID8gdGhpcy5sYWJlbFRhcmdldC50ZXh0Q29udGVudCA6IG51bGw7XG5cbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNMYWJlbFRhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMubGFiZWxUYXJnZXQudGV4dENvbnRlbnQgPSAnQ29waWVkISc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5yZXZlcnRUaW1lcikge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJldmVydFRpbWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmV2ZXJ0VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNMYWJlbFRhcmdldCAmJiBwcmV2aW91c1RleHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYWJlbFRhcmdldC50ZXh0Q29udGVudCA9IHByZXZpb3VzVGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5yZXZlcnRUaW1lciA9IG51bGw7XG4gICAgICAgICAgICB9LCBSRVZFUlRfREVMQVkpO1xuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBTaWxlbnRseSBpZ25vcmUgcmVqZWN0aW9uIOKAlCBsYWJlbCBzdGF5cyBpbiBkZWZhdWx0IHN0YXRlLlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5yZXZlcnRUaW1lcikge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucmV2ZXJ0VGltZXIpO1xuICAgICAgICAgICAgdGhpcy5yZXZlcnRUaW1lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgdGFyZ2V0cyA9IFsnZ3JpZCcsICdhY3Rpb25zJywgJ2NvdW50J107XG5cbiAgICBzdGF0aWMgdmFsdWVzID0ge1xuICAgICAgICBzdGVwOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogNiB9LFxuICAgIH07XG5cbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHJldmVhbCgpIHtcbiAgICAgICAgdGhpcy5oaWRkZW5DYXJkcygpXG4gICAgICAgICAgICAuc2xpY2UoMCwgdGhpcy5zdGVwVmFsdWUpXG4gICAgICAgICAgICAuZm9yRWFjaCgoY2FyZCkgPT4gY2FyZC5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgY29uc3QgY2FyZHMgPSB0aGlzLmNhcmRzKCk7XG4gICAgICAgIGNvbnN0IHRvdGFsID0gY2FyZHMubGVuZ3RoO1xuICAgICAgICBjb25zdCB2aXNpYmxlID0gdG90YWwgLSB0aGlzLmhpZGRlbkNhcmRzKCkubGVuZ3RoO1xuXG4gICAgICAgIGlmICh0aGlzLmhhc0NvdW50VGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLmNvdW50VGFyZ2V0LnRleHRDb250ZW50ID0gdmlzaWJsZSArICcvJyArIHRvdGFsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaGFzQWN0aW9uc1RhcmdldCAmJiB2aXNpYmxlID49IHRvdGFsKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbnNUYXJnZXQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYXJkcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc0dyaWRUYXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuZ3JpZFRhcmdldC5jaGlsZHJlbik7XG4gICAgfVxuXG4gICAgaGlkZGVuQ2FyZHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhcmRzKCkuZmlsdGVyKChjYXJkKSA9PiBjYXJkLmhhc0F0dHJpYnV0ZSgnaGlkZGVuJykpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG5jb25zdCBMT0NLX0NMQVNTID0gJ2lzLWxvY2tlZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgc3RhdGljIHRhcmdldHMgPSBbJ2RpYWxvZycsICd0b2dnbGUnXTtcblxuICAgIG9wZW4oKSB7XG4gICAgICAgIGlmICghdGhpcy5oYXNEaWFsb2dUYXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpYWxvZ1RhcmdldC5zaG93TW9kYWwoKTtcbiAgICAgICAgaWYgKHRoaXMuaGFzVG9nZ2xlVGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVRhcmdldC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKExPQ0tfQ0xBU1MpO1xuICAgICAgICB0aGlzLmRpYWxvZ1RhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYm91bmRIYW5kbGVPdXRzaWRlQ2xpY2spO1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICBpZiAoIXRoaXMuaGFzRGlhbG9nVGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGlhbG9nVGFyZ2V0Lm9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nVGFyZ2V0LmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaGFzVG9nZ2xlVGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVRhcmdldC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShMT0NLX0NMQVNTKTtcbiAgICAgICAgaWYgKHRoaXMuaGFzRGlhbG9nVGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLmRpYWxvZ1RhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYm91bmRIYW5kbGVPdXRzaWRlQ2xpY2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xvc2VPbkxpbmsoKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5oYXNEaWFsb2dUYXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ib3VuZEhhbmRsZU91dHNpZGVDbGljayk7XG4gICAgICAgICAgICBpZiAodGhpcy5kaWFsb2dUYXJnZXQub3Blbikge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nVGFyZ2V0LmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoTE9DS19DTEFTUyk7XG4gICAgfVxuXG4gICAgYm91bmRIYW5kbGVPdXRzaWRlQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5kaWFsb2dUYXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH07XG59XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9hcHAuY3NzXCI7XG5pbXBvcnQgJy4vYm9vdHN0cmFwLmpzJztcbmltcG9ydCB7IGluaXRDYXJvdXNlbHMgfSBmcm9tICdmbG93Yml0ZSc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oZSkge1xuICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ2NvbnRhY3QtbWVzc2FnZScpIHtcbiAgICAgICAgdmFyIGxlbiA9IGUudGFyZ2V0LnZhbHVlLmxlbmd0aDtcbiAgICAgICAgdmFyIG1heCA9IHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJykgfHwgJzAnLCAxMCk7XG4gICAgICAgIHZhciBjb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21zZy1jb3VudGVyJyk7XG4gICAgICAgIGlmIChjb3VudGVyKSB7XG4gICAgICAgICAgICBjb3VudGVyLnRleHRDb250ZW50ID0gbGVuICsgJyAvICcgKyBtYXg7XG4gICAgICAgICAgICBjb3VudGVyLmNsYXNzTmFtZSA9IGxlbiA+IG1heCA/ICd0ZXh0LXJlZC01MDAnIDogbGVuID4gbWF4ICogMC44MyA/ICd0ZXh0LWFtYmVyLTUwMCcgOiAndGV4dC1ncmF5LTQwMCc7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoZS50YXJnZXQuaWQgPT09ICdjb250YWN0LWVtYWlsJyAmJiBlLnRhcmdldC52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBoaW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsLWhpbnQnKTtcbiAgICAgICAgaWYgKGhpbnQpIHtcbiAgICAgICAgICAgIGhpbnQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJywgZS50YXJnZXQuY2hlY2tWYWxpZGl0eSgpKTtcbiAgICAgICAgfVxuICAgIH1cbn0sIHRydWUpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGluaXRDYXJvdXNlbHMoKTtcbiAgfSwgMTAwKTtcbn0pO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIkBob3R3aXJlZC9zdGltdWx1c1wiO1xudmFyIEJhY2tlbmRSZXF1ZXN0X2RlZmF1bHQgPSBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHByb21pc2UsIGFjdGlvbnMsIHVwZGF0ZU1vZGVscykge1xuXHRcdHRoaXMuaXNSZXNvbHZlZCA9IGZhbHNlO1xuXHRcdHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG5cdFx0dGhpcy5wcm9taXNlLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHR0aGlzLmlzUmVzb2x2ZWQgPSB0cnVlO1xuXHRcdFx0cmV0dXJuIHJlc3BvbnNlO1xuXHRcdH0pO1xuXHRcdHRoaXMuYWN0aW9ucyA9IGFjdGlvbnM7XG5cdFx0dGhpcy51cGRhdGVkTW9kZWxzID0gdXBkYXRlTW9kZWxzO1xuXHR9XG5cdGNvbnRhaW5zT25lT2ZBY3Rpb25zKHRhcmdldGVkQWN0aW9ucykge1xuXHRcdHJldHVybiB0aGlzLmFjdGlvbnMuZmlsdGVyKChhY3Rpb24pID0+IHRhcmdldGVkQWN0aW9ucy5pbmNsdWRlcyhhY3Rpb24pKS5sZW5ndGggPiAwO1xuXHR9XG5cdGFyZUFueU1vZGVsc1VwZGF0ZWQodGFyZ2V0ZWRNb2RlbHMpIHtcblx0XHRyZXR1cm4gdGhpcy51cGRhdGVkTW9kZWxzLmZpbHRlcigobW9kZWwpID0+IHRhcmdldGVkTW9kZWxzLmluY2x1ZGVzKG1vZGVsKSkubGVuZ3RoID4gMDtcblx0fVxufTtcbnZhciBSZXF1ZXN0QnVpbGRlcl9kZWZhdWx0ID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih1cmwsIG1ldGhvZCA9IFwicG9zdFwiLCBjcmVkZW50aWFscyA9IFwic2FtZS1vcmlnaW5cIikge1xuXHRcdHRoaXMudXJsID0gdXJsO1xuXHRcdHRoaXMubWV0aG9kID0gbWV0aG9kO1xuXHRcdHRoaXMuY3JlZGVudGlhbHMgPSBjcmVkZW50aWFscztcblx0fVxuXHRidWlsZFJlcXVlc3QocHJvcHMsIGFjdGlvbnMsIHVwZGF0ZWQsIGNoaWxkcmVuLCB1cGRhdGVkUHJvcHNGcm9tUGFyZW50LCBmaWxlcykge1xuXHRcdGNvbnN0IHNwbGl0VXJsID0gdGhpcy51cmwuc3BsaXQoXCI/XCIpO1xuXHRcdGxldCBbdXJsXSA9IHNwbGl0VXJsO1xuXHRcdGNvbnN0IFssIHF1ZXJ5U3RyaW5nXSA9IHNwbGl0VXJsO1xuXHRcdGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcgfHwgXCJcIik7XG5cdFx0Y29uc3QgZmV0Y2hPcHRpb25zID0ge307XG5cdFx0ZmV0Y2hPcHRpb25zLmNyZWRlbnRpYWxzID0gdGhpcy5jcmVkZW50aWFscztcblx0XHRmZXRjaE9wdGlvbnMuaGVhZGVycyA9IHtcblx0XHRcdEFjY2VwdDogXCJhcHBsaWNhdGlvbi92bmQubGl2ZS1jb21wb25lbnQraHRtbFwiLFxuXHRcdFx0XCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcblx0XHRcdFwiWC1MaXZlLVVybFwiOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoXG5cdFx0fTtcblx0XHRjb25zdCB0b3RhbEZpbGVzID0gT2JqZWN0LmVudHJpZXMoZmlsZXMpLnJlZHVjZSgodG90YWwsIGN1cnJlbnQpID0+IHRvdGFsICsgY3VycmVudC5sZW5ndGgsIDApO1xuXHRcdGNvbnN0IGhhc0ZpbmdlcnByaW50cyA9IE9iamVjdC5rZXlzKGNoaWxkcmVuKS5sZW5ndGggPiAwO1xuXHRcdGlmIChhY3Rpb25zLmxlbmd0aCA9PT0gMCAmJiB0b3RhbEZpbGVzID09PSAwICYmIHRoaXMubWV0aG9kID09PSBcImdldFwiICYmIHRoaXMud2lsbERhdGFGaXRJblVybChKU09OLnN0cmluZ2lmeShwcm9wcyksIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWQpLCBwYXJhbXMsIEpTT04uc3RyaW5naWZ5KGNoaWxkcmVuKSwgSlNPTi5zdHJpbmdpZnkodXBkYXRlZFByb3BzRnJvbVBhcmVudCkpKSB7XG5cdFx0XHRwYXJhbXMuc2V0KFwicHJvcHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvcHMpKTtcblx0XHRcdHBhcmFtcy5zZXQoXCJ1cGRhdGVkXCIsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWQpKTtcblx0XHRcdGlmIChPYmplY3Qua2V5cyh1cGRhdGVkUHJvcHNGcm9tUGFyZW50KS5sZW5ndGggPiAwKSBwYXJhbXMuc2V0KFwicHJvcHNGcm9tUGFyZW50XCIsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQpKTtcblx0XHRcdGlmIChoYXNGaW5nZXJwcmludHMpIHBhcmFtcy5zZXQoXCJjaGlsZHJlblwiLCBKU09OLnN0cmluZ2lmeShjaGlsZHJlbikpO1xuXHRcdFx0ZmV0Y2hPcHRpb25zLm1ldGhvZCA9IFwiR0VUXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZldGNoT3B0aW9ucy5tZXRob2QgPSBcIlBPU1RcIjtcblx0XHRcdGNvbnN0IHJlcXVlc3REYXRhID0ge1xuXHRcdFx0XHRwcm9wcyxcblx0XHRcdFx0dXBkYXRlZFxuXHRcdFx0fTtcblx0XHRcdGlmIChPYmplY3Qua2V5cyh1cGRhdGVkUHJvcHNGcm9tUGFyZW50KS5sZW5ndGggPiAwKSByZXF1ZXN0RGF0YS5wcm9wc0Zyb21QYXJlbnQgPSB1cGRhdGVkUHJvcHNGcm9tUGFyZW50O1xuXHRcdFx0aWYgKGhhc0ZpbmdlcnByaW50cykgcmVxdWVzdERhdGEuY2hpbGRyZW4gPSBjaGlsZHJlbjtcblx0XHRcdGlmIChhY3Rpb25zLmxlbmd0aCA+IDApIGlmIChhY3Rpb25zLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRyZXF1ZXN0RGF0YS5hcmdzID0gYWN0aW9uc1swXS5hcmdzO1xuXHRcdFx0XHR1cmwgKz0gYC8ke2VuY29kZVVSSUNvbXBvbmVudChhY3Rpb25zWzBdLm5hbWUpfWA7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR1cmwgKz0gXCIvX2JhdGNoXCI7XG5cdFx0XHRcdHJlcXVlc3REYXRhLmFjdGlvbnMgPSBhY3Rpb25zO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblx0XHRcdGZvcm1EYXRhLmFwcGVuZChcImRhdGFcIiwgSlNPTi5zdHJpbmdpZnkocmVxdWVzdERhdGEpKTtcblx0XHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGZpbGVzKSkge1xuXHRcdFx0XHRjb25zdCBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIGZvcm1EYXRhLmFwcGVuZChrZXksIHZhbHVlW2ldKTtcblx0XHRcdH1cblx0XHRcdGZldGNoT3B0aW9ucy5ib2R5ID0gZm9ybURhdGE7XG5cdFx0fVxuXHRcdGNvbnN0IHBhcmFtc1N0cmluZyA9IHBhcmFtcy50b1N0cmluZygpO1xuXHRcdHJldHVybiB7XG5cdFx0XHR1cmw6IGAke3VybH0ke3BhcmFtc1N0cmluZy5sZW5ndGggPiAwID8gYD8ke3BhcmFtc1N0cmluZ31gIDogXCJcIn1gLFxuXHRcdFx0ZmV0Y2hPcHRpb25zXG5cdFx0fTtcblx0fVxuXHR3aWxsRGF0YUZpdEluVXJsKHByb3BzSnNvbiwgdXBkYXRlZEpzb24sIHBhcmFtcywgY2hpbGRyZW5Kc29uLCBwcm9wc0Zyb21QYXJlbnRKc29uKSB7XG5cdFx0cmV0dXJuIChuZXcgVVJMU2VhcmNoUGFyYW1zKHByb3BzSnNvbiArIHVwZGF0ZWRKc29uICsgY2hpbGRyZW5Kc29uICsgcHJvcHNGcm9tUGFyZW50SnNvbikudG9TdHJpbmcoKSArIHBhcmFtcy50b1N0cmluZygpKS5sZW5ndGggPCAxNTAwO1xuXHR9XG59O1xudmFyIEJhY2tlbmRfZGVmYXVsdCA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IodXJsLCBtZXRob2QgPSBcInBvc3RcIiwgY3JlZGVudGlhbHMgPSBcInNhbWUtb3JpZ2luXCIpIHtcblx0XHR0aGlzLnJlcXVlc3RCdWlsZGVyID0gbmV3IFJlcXVlc3RCdWlsZGVyX2RlZmF1bHQodXJsLCBtZXRob2QsIGNyZWRlbnRpYWxzKTtcblx0fVxuXHRtYWtlUmVxdWVzdChwcm9wcywgYWN0aW9ucywgdXBkYXRlZCwgY2hpbGRyZW4sIHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQsIGZpbGVzKSB7XG5cdFx0Y29uc3QgeyB1cmwsIGZldGNoT3B0aW9ucyB9ID0gdGhpcy5yZXF1ZXN0QnVpbGRlci5idWlsZFJlcXVlc3QocHJvcHMsIGFjdGlvbnMsIHVwZGF0ZWQsIGNoaWxkcmVuLCB1cGRhdGVkUHJvcHNGcm9tUGFyZW50LCBmaWxlcyk7XG5cdFx0cmV0dXJuIG5ldyBCYWNrZW5kUmVxdWVzdF9kZWZhdWx0KGZldGNoKHVybCwgZmV0Y2hPcHRpb25zKSwgYWN0aW9ucy5tYXAoKGJhY2tlbmRBY3Rpb24pID0+IGJhY2tlbmRBY3Rpb24ubmFtZSksIE9iamVjdC5rZXlzKHVwZGF0ZWQpKTtcblx0fVxufTtcbnZhciBCYWNrZW5kUmVzcG9uc2VfZGVmYXVsdCA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IocmVzcG9uc2UpIHtcblx0XHR0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG5cdH1cblx0YXN5bmMgZ2V0Qm9keSgpIHtcblx0XHRpZiAoIXRoaXMuYm9keSkgdGhpcy5ib2R5ID0gYXdhaXQgdGhpcy5yZXNwb25zZS50ZXh0KCk7XG5cdFx0cmV0dXJuIHRoaXMuYm9keTtcblx0fVxuXHRnZXRMaXZlVXJsKCkge1xuXHRcdGlmICh2b2lkIDAgPT09IHRoaXMubGl2ZVVybCkgdGhpcy5saXZlVXJsID0gdGhpcy5yZXNwb25zZS5oZWFkZXJzLmdldChcIlgtTGl2ZS1VcmxcIik7XG5cdFx0cmV0dXJuIHRoaXMubGl2ZVVybDtcblx0fVxufTtcbmZ1bmN0aW9uIGdldEVsZW1lbnRBc1RhZ1RleHQoZWxlbWVudCkge1xuXHRyZXR1cm4gZWxlbWVudC5pbm5lckhUTUwgPyBlbGVtZW50Lm91dGVySFRNTC5zbGljZSgwLCBlbGVtZW50Lm91dGVySFRNTC5pbmRleE9mKGVsZW1lbnQuaW5uZXJIVE1MKSkgOiBlbGVtZW50Lm91dGVySFRNTDtcbn1cbmxldCBjb21wb25lbnRNYXBCeUVsZW1lbnQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbmxldCBjb21wb25lbnRNYXBCeUNvbXBvbmVudCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5jb25zdCByZWdpc3RlckNvbXBvbmVudCA9IChjb21wb25lbnQpID0+IHtcblx0Y29tcG9uZW50TWFwQnlFbGVtZW50LnNldChjb21wb25lbnQuZWxlbWVudCwgY29tcG9uZW50KTtcblx0Y29tcG9uZW50TWFwQnlDb21wb25lbnQuc2V0KGNvbXBvbmVudCwgY29tcG9uZW50Lm5hbWUpO1xufTtcbmNvbnN0IHVucmVnaXN0ZXJDb21wb25lbnQgPSAoY29tcG9uZW50KSA9PiB7XG5cdGNvbXBvbmVudE1hcEJ5RWxlbWVudC5kZWxldGUoY29tcG9uZW50LmVsZW1lbnQpO1xuXHRjb21wb25lbnRNYXBCeUNvbXBvbmVudC5kZWxldGUoY29tcG9uZW50KTtcbn07XG5jb25zdCBnZXRDb21wb25lbnQgPSAoZWxlbWVudCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRsZXQgY291bnQgPSAwO1xuXHRjb25zdCBtYXhDb3VudCA9IDEwO1xuXHRjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRNYXBCeUVsZW1lbnQuZ2V0KGVsZW1lbnQpO1xuXHRcdGlmIChjb21wb25lbnQpIHtcblx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXHRcdFx0cmVzb2x2ZShjb21wb25lbnQpO1xuXHRcdH1cblx0XHRjb3VudCsrO1xuXHRcdGlmIChjb3VudCA+IG1heENvdW50KSB7XG5cdFx0XHRjbGVhckludGVydmFsKGludGVydmFsKTtcblx0XHRcdHJlamVjdCgvKiBAX19QVVJFX18gKi8gbmV3IEVycm9yKGBDb21wb25lbnQgbm90IGZvdW5kIGZvciBlbGVtZW50ICR7Z2V0RWxlbWVudEFzVGFnVGV4dChlbGVtZW50KX1gKSk7XG5cdFx0fVxuXHR9LCA1KTtcbn0pO1xuY29uc3QgZmluZENvbXBvbmVudHMgPSAoY3VycmVudENvbXBvbmVudCwgb25seVBhcmVudHMsIG9ubHlNYXRjaE5hbWUpID0+IHtcblx0Y29uc3QgY29tcG9uZW50cyA9IFtdO1xuXHRjb21wb25lbnRNYXBCeUNvbXBvbmVudC5mb3JFYWNoKChjb21wb25lbnROYW1lLCBjb21wb25lbnQpID0+IHtcblx0XHRpZiAob25seVBhcmVudHMgJiYgKGN1cnJlbnRDb21wb25lbnQgPT09IGNvbXBvbmVudCB8fCAhY29tcG9uZW50LmVsZW1lbnQuY29udGFpbnMoY3VycmVudENvbXBvbmVudC5lbGVtZW50KSkpIHJldHVybjtcblx0XHRpZiAob25seU1hdGNoTmFtZSAmJiBjb21wb25lbnROYW1lICE9PSBvbmx5TWF0Y2hOYW1lKSByZXR1cm47XG5cdFx0Y29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG5cdH0pO1xuXHRyZXR1cm4gY29tcG9uZW50cztcbn07XG5jb25zdCBmaW5kQ2hpbGRyZW4gPSAoY3VycmVudENvbXBvbmVudCkgPT4ge1xuXHRjb25zdCBjaGlsZHJlbiA9IFtdO1xuXHRjb21wb25lbnRNYXBCeUNvbXBvbmVudC5mb3JFYWNoKChjb21wb25lbnROYW1lLCBjb21wb25lbnQpID0+IHtcblx0XHRpZiAoY3VycmVudENvbXBvbmVudCA9PT0gY29tcG9uZW50KSByZXR1cm47XG5cdFx0aWYgKCFjdXJyZW50Q29tcG9uZW50LmVsZW1lbnQuY29udGFpbnMoY29tcG9uZW50LmVsZW1lbnQpKSByZXR1cm47XG5cdFx0bGV0IGZvdW5kQ2hpbGRDb21wb25lbnQgPSBmYWxzZTtcblx0XHRjb21wb25lbnRNYXBCeUNvbXBvbmVudC5mb3JFYWNoKChjaGlsZENvbXBvbmVudE5hbWUsIGNoaWxkQ29tcG9uZW50KSA9PiB7XG5cdFx0XHRpZiAoZm91bmRDaGlsZENvbXBvbmVudCkgcmV0dXJuO1xuXHRcdFx0aWYgKGNoaWxkQ29tcG9uZW50ID09PSBjb21wb25lbnQpIHJldHVybjtcblx0XHRcdGlmIChjaGlsZENvbXBvbmVudC5lbGVtZW50LmNvbnRhaW5zKGNvbXBvbmVudC5lbGVtZW50KSkgZm91bmRDaGlsZENvbXBvbmVudCA9IHRydWU7XG5cdFx0fSk7XG5cdFx0Y2hpbGRyZW4ucHVzaChjb21wb25lbnQpO1xuXHR9KTtcblx0cmV0dXJuIGNoaWxkcmVuO1xufTtcbmNvbnN0IGZpbmRQYXJlbnQgPSAoY3VycmVudENvbXBvbmVudCkgPT4ge1xuXHRsZXQgcGFyZW50RWxlbWVudCA9IGN1cnJlbnRDb21wb25lbnQuZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXHR3aGlsZSAocGFyZW50RWxlbWVudCkge1xuXHRcdGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudE1hcEJ5RWxlbWVudC5nZXQocGFyZW50RWxlbWVudCk7XG5cdFx0aWYgKGNvbXBvbmVudCkgcmV0dXJuIGNvbXBvbmVudDtcblx0XHRwYXJlbnRFbGVtZW50ID0gcGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXHR9XG5cdHJldHVybiBudWxsO1xufTtcbmZ1bmN0aW9uIHBhcnNlRGlyZWN0aXZlcyhjb250ZW50KSB7XG5cdGNvbnN0IGRpcmVjdGl2ZXMgPSBbXTtcblx0aWYgKCFjb250ZW50KSByZXR1cm4gZGlyZWN0aXZlcztcblx0bGV0IGN1cnJlbnRBY3Rpb25OYW1lID0gXCJcIjtcblx0bGV0IGN1cnJlbnRBcmd1bWVudFZhbHVlID0gXCJcIjtcblx0bGV0IGN1cnJlbnRBcmd1bWVudHMgPSBbXTtcblx0bGV0IGN1cnJlbnRNb2RpZmllcnMgPSBbXTtcblx0bGV0IHN0YXRlID0gXCJhY3Rpb25cIjtcblx0Y29uc3QgZ2V0TGFzdEFjdGlvbk5hbWUgPSAoKSA9PiB7XG5cdFx0aWYgKGN1cnJlbnRBY3Rpb25OYW1lKSByZXR1cm4gY3VycmVudEFjdGlvbk5hbWU7XG5cdFx0aWYgKGRpcmVjdGl2ZXMubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBhbnkgZGlyZWN0aXZlc1wiKTtcblx0XHRyZXR1cm4gZGlyZWN0aXZlc1tkaXJlY3RpdmVzLmxlbmd0aCAtIDFdLmFjdGlvbjtcblx0fTtcblx0Y29uc3QgcHVzaEluc3RydWN0aW9uID0gKCkgPT4ge1xuXHRcdGRpcmVjdGl2ZXMucHVzaCh7XG5cdFx0XHRhY3Rpb246IGN1cnJlbnRBY3Rpb25OYW1lLFxuXHRcdFx0YXJnczogY3VycmVudEFyZ3VtZW50cyxcblx0XHRcdG1vZGlmaWVyczogY3VycmVudE1vZGlmaWVycyxcblx0XHRcdGdldFN0cmluZzogKCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjdXJyZW50QWN0aW9uTmFtZSA9IFwiXCI7XG5cdFx0Y3VycmVudEFyZ3VtZW50VmFsdWUgPSBcIlwiO1xuXHRcdGN1cnJlbnRBcmd1bWVudHMgPSBbXTtcblx0XHRjdXJyZW50TW9kaWZpZXJzID0gW107XG5cdFx0c3RhdGUgPSBcImFjdGlvblwiO1xuXHR9O1xuXHRjb25zdCBwdXNoQXJndW1lbnQgPSAoKSA9PiB7XG5cdFx0Y3VycmVudEFyZ3VtZW50cy5wdXNoKGN1cnJlbnRBcmd1bWVudFZhbHVlLnRyaW0oKSk7XG5cdFx0Y3VycmVudEFyZ3VtZW50VmFsdWUgPSBcIlwiO1xuXHR9O1xuXHRjb25zdCBwdXNoTW9kaWZpZXIgPSAoKSA9PiB7XG5cdFx0aWYgKGN1cnJlbnRBcmd1bWVudHMubGVuZ3RoID4gMSkgdGhyb3cgbmV3IEVycm9yKGBUaGUgbW9kaWZpZXIgXCIke2N1cnJlbnRBY3Rpb25OYW1lfSgpXCIgZG9lcyBub3Qgc3VwcG9ydCBtdWx0aXBsZSBhcmd1bWVudHMuYCk7XG5cdFx0Y3VycmVudE1vZGlmaWVycy5wdXNoKHtcblx0XHRcdG5hbWU6IGN1cnJlbnRBY3Rpb25OYW1lLFxuXHRcdFx0dmFsdWU6IGN1cnJlbnRBcmd1bWVudHMubGVuZ3RoID4gMCA/IGN1cnJlbnRBcmd1bWVudHNbMF0gOiBudWxsXG5cdFx0fSk7XG5cdFx0Y3VycmVudEFjdGlvbk5hbWUgPSBcIlwiO1xuXHRcdGN1cnJlbnRBcmd1bWVudHMgPSBbXTtcblx0XHRzdGF0ZSA9IFwiYWN0aW9uXCI7XG5cdH07XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY29udGVudC5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGNoYXIgPSBjb250ZW50W2ldO1xuXHRcdHN3aXRjaCAoc3RhdGUpIHtcblx0XHRcdGNhc2UgXCJhY3Rpb25cIjpcblx0XHRcdFx0aWYgKGNoYXIgPT09IFwiKFwiKSB7XG5cdFx0XHRcdFx0c3RhdGUgPSBcImFyZ3VtZW50c1wiO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChjaGFyID09PSBcIiBcIikge1xuXHRcdFx0XHRcdGlmIChjdXJyZW50QWN0aW9uTmFtZSkgcHVzaEluc3RydWN0aW9uKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGNoYXIgPT09IFwifFwiKSB7XG5cdFx0XHRcdFx0cHVzaE1vZGlmaWVyKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3VycmVudEFjdGlvbk5hbWUgKz0gY2hhcjtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiYXJndW1lbnRzXCI6XG5cdFx0XHRcdGlmIChjaGFyID09PSBcIilcIikge1xuXHRcdFx0XHRcdHB1c2hBcmd1bWVudCgpO1xuXHRcdFx0XHRcdHN0YXRlID0gXCJhZnRlcl9hcmd1bWVudHNcIjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY2hhciA9PT0gXCIsXCIpIHtcblx0XHRcdFx0XHRwdXNoQXJndW1lbnQoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRjdXJyZW50QXJndW1lbnRWYWx1ZSArPSBjaGFyO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJhZnRlcl9hcmd1bWVudHNcIjpcblx0XHRcdFx0aWYgKGNoYXIgPT09IFwifFwiKSB7XG5cdFx0XHRcdFx0cHVzaE1vZGlmaWVyKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGNoYXIgIT09IFwiIFwiKSB0aHJvdyBuZXcgRXJyb3IoYE1pc3Npbmcgc3BhY2UgYWZ0ZXIgJHtnZXRMYXN0QWN0aW9uTmFtZSgpfSgpYCk7XG5cdFx0XHRcdHB1c2hJbnN0cnVjdGlvbigpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblx0c3dpdGNoIChzdGF0ZSkge1xuXHRcdGNhc2UgXCJhY3Rpb25cIjpcblx0XHRjYXNlIFwiYWZ0ZXJfYXJndW1lbnRzXCI6XG5cdFx0XHRpZiAoY3VycmVudEFjdGlvbk5hbWUpIHB1c2hJbnN0cnVjdGlvbigpO1xuXHRcdFx0YnJlYWs7XG5cdFx0ZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKGBEaWQgeW91IGZvcmdldCB0byBhZGQgYSBjbG9zaW5nIFwiKVwiIGFmdGVyIFwiJHtjdXJyZW50QWN0aW9uTmFtZX1cIj9gKTtcblx0fVxuXHRyZXR1cm4gZGlyZWN0aXZlcztcbn1cbmZ1bmN0aW9uIGNvbWJpbmVTcGFjZWRBcnJheShwYXJ0cykge1xuXHRjb25zdCBmaW5hbFBhcnRzID0gW107XG5cdHBhcnRzLmZvckVhY2goKHBhcnQpID0+IHtcblx0XHRmaW5hbFBhcnRzLnB1c2goLi4udHJpbUFsbChwYXJ0KS5zcGxpdChcIiBcIikpO1xuXHR9KTtcblx0cmV0dXJuIGZpbmFsUGFydHM7XG59XG5mdW5jdGlvbiB0cmltQWxsKHN0cikge1xuXHRyZXR1cm4gc3RyLnJlcGxhY2UoL1tcXHNdKy9nLCBcIiBcIikudHJpbSgpO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplTW9kZWxOYW1lKG1vZGVsKSB7XG5cdHJldHVybiBtb2RlbC5yZXBsYWNlKC9cXFtdJC8sIFwiXCIpLnNwbGl0KFwiW1wiKS5tYXAoKHMpID0+IHMucmVwbGFjZShcIl1cIiwgXCJcIikpLmpvaW4oXCIuXCIpO1xufVxuZnVuY3Rpb24gZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCB2YWx1ZVN0b3JlKSB7XG5cdGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuXHRcdGlmIChlbGVtZW50LnR5cGUgPT09IFwiY2hlY2tib3hcIikge1xuXHRcdFx0Y29uc3QgbW9kZWxOYW1lRGF0YSA9IGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZWxlbWVudCwgZmFsc2UpO1xuXHRcdFx0aWYgKG1vZGVsTmFtZURhdGEgIT09IG51bGwpIHtcblx0XHRcdFx0Y29uc3QgbW9kZWxWYWx1ZSA9IHZhbHVlU3RvcmUuZ2V0KG1vZGVsTmFtZURhdGEuYWN0aW9uKTtcblx0XHRcdFx0aWYgKEFycmF5LmlzQXJyYXkobW9kZWxWYWx1ZSkpIHJldHVybiBnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUoZWxlbWVudCwgbW9kZWxWYWx1ZSk7XG5cdFx0XHRcdGlmIChPYmplY3QobW9kZWxWYWx1ZSkgPT09IG1vZGVsVmFsdWUpIHJldHVybiBnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUoZWxlbWVudCwgT2JqZWN0LnZhbHVlcyhtb2RlbFZhbHVlKSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSkgcmV0dXJuIGVsZW1lbnQuY2hlY2tlZCA/IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIikgOiBudWxsO1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQuY2hlY2tlZDtcblx0XHR9XG5cdFx0cmV0dXJuIGlucHV0VmFsdWUoZWxlbWVudCk7XG5cdH1cblx0aWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xuXHRcdGlmIChlbGVtZW50Lm11bHRpcGxlKSByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50LnNlbGVjdGVkT3B0aW9ucykubWFwKChlbCkgPT4gZWwudmFsdWUpO1xuXHRcdHJldHVybiBlbGVtZW50LnZhbHVlO1xuXHR9XG5cdGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZShcImRhdGEtdmFsdWVcIikpIHJldHVybiBlbGVtZW50LmRhdGFzZXQudmFsdWU7XG5cdGlmIChcInZhbHVlXCIgaW4gZWxlbWVudCkgcmV0dXJuIGVsZW1lbnQudmFsdWU7XG5cdGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZShcInZhbHVlXCIpKSByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTtcblx0cmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBzZXRWYWx1ZU9uRWxlbWVudChlbGVtZW50LCB2YWx1ZSkge1xuXHRpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcblx0XHRpZiAoZWxlbWVudC50eXBlID09PSBcImZpbGVcIikgcmV0dXJuO1xuXHRcdGlmIChlbGVtZW50LnR5cGUgPT09IFwicmFkaW9cIikge1xuXHRcdFx0ZWxlbWVudC5jaGVja2VkID0gZWxlbWVudC52YWx1ZSA9PSB2YWx1ZTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGVsZW1lbnQudHlwZSA9PT0gXCJjaGVja2JveFwiKSB7XG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIGVsZW1lbnQuY2hlY2tlZCA9IHZhbHVlLnNvbWUoKHZhbCkgPT4gdmFsID09IGVsZW1lbnQudmFsdWUpO1xuXHRcdFx0ZWxzZSBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSkgZWxlbWVudC5jaGVja2VkID0gZWxlbWVudC52YWx1ZSA9PSB2YWx1ZTtcblx0XHRcdGVsc2UgZWxlbWVudC5jaGVja2VkID0gdmFsdWU7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cdGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcblx0XHRjb25zdCBhcnJheVdyYXBwZWRWYWx1ZSA9IFtdLmNvbmNhdCh2YWx1ZSkubWFwKCh2YWx1ZSkgPT4ge1xuXHRcdFx0cmV0dXJuIGAke3ZhbHVlfWA7XG5cdFx0fSk7XG5cdFx0QXJyYXkuZnJvbShlbGVtZW50Lm9wdGlvbnMpLmZvckVhY2goKG9wdGlvbikgPT4ge1xuXHRcdFx0b3B0aW9uLnNlbGVjdGVkID0gYXJyYXlXcmFwcGVkVmFsdWUuaW5jbHVkZXMob3B0aW9uLnZhbHVlKTtcblx0XHR9KTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFsdWUgPSB2YWx1ZSA9PT0gdm9pZCAwID8gXCJcIiA6IHZhbHVlO1xuXHRlbGVtZW50LnZhbHVlID0gdmFsdWU7XG59XG5mdW5jdGlvbiBnZXRBbGxNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50cyhlbGVtZW50KSB7XG5cdGlmICghZWxlbWVudC5kYXRhc2V0Lm1vZGVsKSByZXR1cm4gW107XG5cdGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMoZWxlbWVudC5kYXRhc2V0Lm1vZGVsKTtcblx0ZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcblx0XHRpZiAoZGlyZWN0aXZlLmFyZ3MubGVuZ3RoID4gMCkgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGF0YS1tb2RlbD1cIiR7ZWxlbWVudC5kYXRhc2V0Lm1vZGVsfVwiIGZvcm1hdCBpcyBpbnZhbGlkOiBpdCBkb2VzIG5vdCBzdXBwb3J0IHBhc3NpbmcgYXJndW1lbnRzIHRvIHRoZSBtb2RlbC5gKTtcblx0XHRkaXJlY3RpdmUuYWN0aW9uID0gbm9ybWFsaXplTW9kZWxOYW1lKGRpcmVjdGl2ZS5hY3Rpb24pO1xuXHR9KTtcblx0cmV0dXJuIGRpcmVjdGl2ZXM7XG59XG5mdW5jdGlvbiBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIHRocm93T25NaXNzaW5nID0gdHJ1ZSkge1xuXHRjb25zdCBkYXRhTW9kZWxEaXJlY3RpdmVzID0gZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHMoZWxlbWVudCk7XG5cdGlmIChkYXRhTW9kZWxEaXJlY3RpdmVzLmxlbmd0aCA+IDApIHJldHVybiBkYXRhTW9kZWxEaXJlY3RpdmVzWzBdO1xuXHRpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpKSB7XG5cdFx0Y29uc3QgZm9ybUVsZW1lbnQgPSBlbGVtZW50LmNsb3Nlc3QoXCJmb3JtXCIpO1xuXHRcdGlmIChmb3JtRWxlbWVudCAmJiBcIm1vZGVsXCIgaW4gZm9ybUVsZW1lbnQuZGF0YXNldCkge1xuXHRcdFx0Y29uc3QgZGlyZWN0aXZlID0gcGFyc2VEaXJlY3RpdmVzKGZvcm1FbGVtZW50LmRhdGFzZXQubW9kZWwgfHwgXCIqXCIpWzBdO1xuXHRcdFx0aWYgKGRpcmVjdGl2ZS5hcmdzLmxlbmd0aCA+IDApIHRocm93IG5ldyBFcnJvcihgVGhlIGRhdGEtbW9kZWw9XCIke2Zvcm1FbGVtZW50LmRhdGFzZXQubW9kZWx9XCIgZm9ybWF0IGlzIGludmFsaWQ6IGl0IGRvZXMgbm90IHN1cHBvcnQgcGFzc2luZyBhcmd1bWVudHMgdG8gdGhlIG1vZGVsLmApO1xuXHRcdFx0ZGlyZWN0aXZlLmFjdGlvbiA9IG5vcm1hbGl6ZU1vZGVsTmFtZShlbGVtZW50LmdldEF0dHJpYnV0ZShcIm5hbWVcIikpO1xuXHRcdFx0cmV0dXJuIGRpcmVjdGl2ZTtcblx0XHR9XG5cdH1cblx0aWYgKCF0aHJvd09uTWlzc2luZykgcmV0dXJuIG51bGw7XG5cdHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGRldGVybWluZSB0aGUgbW9kZWwgbmFtZSBmb3IgXCIke2dldEVsZW1lbnRBc1RhZ1RleHQoZWxlbWVudCl9XCI6IHRoZSBlbGVtZW50IG11c3QgZWl0aGVyIGhhdmUgYSBcImRhdGEtbW9kZWxcIiAob3IgXCJuYW1lXCIgYXR0cmlidXRlIGxpdmluZyBpbnNpZGUgYSA8Zm9ybSBkYXRhLW1vZGVsPVwiKlwiPikuYCk7XG59XG5mdW5jdGlvbiBlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCBjb21wb25lbnQpIHtcblx0aWYgKGNvbXBvbmVudC5lbGVtZW50ID09PSBlbGVtZW50KSByZXR1cm4gdHJ1ZTtcblx0aWYgKCFjb21wb25lbnQuZWxlbWVudC5jb250YWlucyhlbGVtZW50KSkgcmV0dXJuIGZhbHNlO1xuXHRyZXR1cm4gZWxlbWVudC5jbG9zZXN0KFwiW2RhdGEtY29udHJvbGxlcn49XFxcImxpdmVcXFwiXVwiKSA9PT0gY29tcG9uZW50LmVsZW1lbnQ7XG59XG5mdW5jdGlvbiBjbG9uZUhUTUxFbGVtZW50KGVsZW1lbnQpIHtcblx0Y29uc3QgbmV3RWxlbWVudCA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuXHRpZiAoIShuZXdFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgY2xvbmUgZWxlbWVudFwiKTtcblx0cmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5mdW5jdGlvbiBodG1sVG9FbGVtZW50KGh0bWwpIHtcblx0Y29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG5cdGh0bWwgPSBodG1sLnRyaW0oKTtcblx0dGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDtcblx0aWYgKHRlbXBsYXRlLmNvbnRlbnQuY2hpbGRFbGVtZW50Q291bnQgPiAxKSB0aHJvdyBuZXcgRXJyb3IoYENvbXBvbmVudCBIVE1MIGNvbnRhaW5zICR7dGVtcGxhdGUuY29udGVudC5jaGlsZEVsZW1lbnRDb3VudH0gZWxlbWVudHMsIGJ1dCBvbmx5IDEgcm9vdCBlbGVtZW50IGlzIGFsbG93ZWQuYCk7XG5cdGNvbnN0IGNoaWxkID0gdGVtcGxhdGUuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZDtcblx0aWYgKCFjaGlsZCkgdGhyb3cgbmV3IEVycm9yKFwiQ2hpbGQgbm90IGZvdW5kXCIpO1xuXHRpZiAoIShjaGlsZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgdGhyb3cgbmV3IEVycm9yKGBDcmVhdGVkIGVsZW1lbnQgaXMgbm90IGFuIEhUTUxFbGVtZW50OiAke2h0bWwudHJpbSgpfWApO1xuXHRyZXR1cm4gY2hpbGQ7XG59XG5jb25zdCBnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUgPSAoZWxlbWVudCwgY3VycmVudFZhbHVlcykgPT4ge1xuXHRjb25zdCBmaW5hbFZhbHVlcyA9IFsuLi5jdXJyZW50VmFsdWVzXTtcblx0Y29uc3QgdmFsdWUgPSBpbnB1dFZhbHVlKGVsZW1lbnQpO1xuXHRjb25zdCBpbmRleCA9IGN1cnJlbnRWYWx1ZXMuaW5kZXhPZih2YWx1ZSk7XG5cdGlmIChlbGVtZW50LmNoZWNrZWQpIHtcblx0XHRpZiAoaW5kZXggPT09IC0xKSBmaW5hbFZhbHVlcy5wdXNoKHZhbHVlKTtcblx0XHRyZXR1cm4gZmluYWxWYWx1ZXM7XG5cdH1cblx0aWYgKGluZGV4ID4gLTEpIGZpbmFsVmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG5cdHJldHVybiBmaW5hbFZhbHVlcztcbn07XG5jb25zdCBpbnB1dFZhbHVlID0gKGVsZW1lbnQpID0+IGVsZW1lbnQuZGF0YXNldC52YWx1ZSA/IGVsZW1lbnQuZGF0YXNldC52YWx1ZSA6IGVsZW1lbnQudmFsdWU7XG5mdW5jdGlvbiBpc1RleHR1YWxJbnB1dEVsZW1lbnQoZWwpIHtcblx0cmV0dXJuIGVsIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJiBbXG5cdFx0XCJ0ZXh0XCIsXG5cdFx0XCJlbWFpbFwiLFxuXHRcdFwicGFzc3dvcmRcIixcblx0XHRcInNlYXJjaFwiLFxuXHRcdFwidGVsXCIsXG5cdFx0XCJ1cmxcIlxuXHRdLmluY2x1ZGVzKGVsLnR5cGUpO1xufVxuZnVuY3Rpb24gaXNUZXh0YXJlYUVsZW1lbnQoZWwpIHtcblx0cmV0dXJuIGVsIGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudDtcbn1cbmZ1bmN0aW9uIGlzTnVtZXJpY2FsSW5wdXRFbGVtZW50KGVsZW1lbnQpIHtcblx0cmV0dXJuIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIFtcIm51bWJlclwiLCBcInJhbmdlXCJdLmluY2x1ZGVzKGVsZW1lbnQudHlwZSk7XG59XG52YXIgSG9va01hbmFnZXJfZGVmYXVsdCA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5ob29rcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdH1cblx0cmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKSB7XG5cdFx0Y29uc3QgaG9va3MgPSB0aGlzLmhvb2tzLmdldChob29rTmFtZSkgfHwgW107XG5cdFx0aG9va3MucHVzaChjYWxsYmFjayk7XG5cdFx0dGhpcy5ob29rcy5zZXQoaG9va05hbWUsIGhvb2tzKTtcblx0fVxuXHR1bnJlZ2lzdGVyKGhvb2tOYW1lLCBjYWxsYmFjaykge1xuXHRcdGNvbnN0IGhvb2tzID0gdGhpcy5ob29rcy5nZXQoaG9va05hbWUpIHx8IFtdO1xuXHRcdGNvbnN0IGluZGV4ID0gaG9va3MuaW5kZXhPZihjYWxsYmFjayk7XG5cdFx0aWYgKGluZGV4ID09PSAtMSkgcmV0dXJuO1xuXHRcdGhvb2tzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0dGhpcy5ob29rcy5zZXQoaG9va05hbWUsIGhvb2tzKTtcblx0fVxuXHR0cmlnZ2VySG9vayhob29rTmFtZSwgLi4uYXJncykge1xuXHRcdCh0aGlzLmhvb2tzLmdldChob29rTmFtZSkgfHwgW10pLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG5cdFx0XHRjYWxsYmFjayguLi5hcmdzKTtcblx0XHR9KTtcblx0fVxufTtcbnZhciBJZGlvbW9ycGggPSAoZnVuY3Rpb24oKSB7XG5cdFwidXNlIHN0cmljdFwiO1xuXHRsZXQgRU1QVFlfU0VUID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcblx0bGV0IGRlZmF1bHRzID0ge1xuXHRcdG1vcnBoU3R5bGU6IFwib3V0ZXJIVE1MXCIsXG5cdFx0Y2FsbGJhY2tzOiB7XG5cdFx0XHRiZWZvcmVOb2RlQWRkZWQ6IG5vT3AsXG5cdFx0XHRhZnRlck5vZGVBZGRlZDogbm9PcCxcblx0XHRcdGJlZm9yZU5vZGVNb3JwaGVkOiBub09wLFxuXHRcdFx0YWZ0ZXJOb2RlTW9ycGhlZDogbm9PcCxcblx0XHRcdGJlZm9yZU5vZGVSZW1vdmVkOiBub09wLFxuXHRcdFx0YWZ0ZXJOb2RlUmVtb3ZlZDogbm9PcCxcblx0XHRcdGJlZm9yZUF0dHJpYnV0ZVVwZGF0ZWQ6IG5vT3Bcblx0XHR9LFxuXHRcdGhlYWQ6IHtcblx0XHRcdHN0eWxlOiBcIm1lcmdlXCIsXG5cdFx0XHRzaG91bGRQcmVzZXJ2ZTogZnVuY3Rpb24oZWx0KSB7XG5cdFx0XHRcdHJldHVybiBlbHQuZ2V0QXR0cmlidXRlKFwiaW0tcHJlc2VydmVcIikgPT09IFwidHJ1ZVwiO1xuXHRcdFx0fSxcblx0XHRcdHNob3VsZFJlQXBwZW5kOiBmdW5jdGlvbihlbHQpIHtcblx0XHRcdFx0cmV0dXJuIGVsdC5nZXRBdHRyaWJ1dGUoXCJpbS1yZS1hcHBlbmRcIikgPT09IFwidHJ1ZVwiO1xuXHRcdFx0fSxcblx0XHRcdHNob3VsZFJlbW92ZTogbm9PcCxcblx0XHRcdGFmdGVySGVhZE1vcnBoZWQ6IG5vT3Bcblx0XHR9XG5cdH07XG5cdGZ1bmN0aW9uIG1vcnBoKG9sZE5vZGUsIG5ld0NvbnRlbnQsIGNvbmZpZyA9IHt9KSB7XG5cdFx0aWYgKG9sZE5vZGUgaW5zdGFuY2VvZiBEb2N1bWVudCkgb2xkTm9kZSA9IG9sZE5vZGUuZG9jdW1lbnRFbGVtZW50O1xuXHRcdGlmICh0eXBlb2YgbmV3Q29udGVudCA9PT0gXCJzdHJpbmdcIikgbmV3Q29udGVudCA9IHBhcnNlQ29udGVudChuZXdDb250ZW50KTtcblx0XHRsZXQgbm9ybWFsaXplZENvbnRlbnQgPSBub3JtYWxpemVDb250ZW50KG5ld0NvbnRlbnQpO1xuXHRcdGxldCBjdHggPSBjcmVhdGVNb3JwaENvbnRleHQob2xkTm9kZSwgbm9ybWFsaXplZENvbnRlbnQsIGNvbmZpZyk7XG5cdFx0cmV0dXJuIG1vcnBoTm9ybWFsaXplZENvbnRlbnQob2xkTm9kZSwgbm9ybWFsaXplZENvbnRlbnQsIGN0eCk7XG5cdH1cblx0ZnVuY3Rpb24gbW9ycGhOb3JtYWxpemVkQ29udGVudChvbGROb2RlLCBub3JtYWxpemVkTmV3Q29udGVudCwgY3R4KSB7XG5cdFx0aWYgKGN0eC5oZWFkLmJsb2NrKSB7XG5cdFx0XHRsZXQgb2xkSGVhZCA9IG9sZE5vZGUucXVlcnlTZWxlY3RvcihcImhlYWRcIik7XG5cdFx0XHRsZXQgbmV3SGVhZCA9IG5vcm1hbGl6ZWROZXdDb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpO1xuXHRcdFx0aWYgKG9sZEhlYWQgJiYgbmV3SGVhZCkge1xuXHRcdFx0XHRsZXQgcHJvbWlzZXMgPSBoYW5kbGVIZWFkRWxlbWVudChuZXdIZWFkLCBvbGRIZWFkLCBjdHgpO1xuXHRcdFx0XHRQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRtb3JwaE5vcm1hbGl6ZWRDb250ZW50KG9sZE5vZGUsIG5vcm1hbGl6ZWROZXdDb250ZW50LCBPYmplY3QuYXNzaWduKGN0eCwgeyBoZWFkOiB7XG5cdFx0XHRcdFx0XHRibG9jazogZmFsc2UsXG5cdFx0XHRcdFx0XHRpZ25vcmU6IHRydWVcblx0XHRcdFx0XHR9IH0pKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGN0eC5tb3JwaFN0eWxlID09PSBcImlubmVySFRNTFwiKSB7XG5cdFx0XHRtb3JwaENoaWxkcmVuKG5vcm1hbGl6ZWROZXdDb250ZW50LCBvbGROb2RlLCBjdHgpO1xuXHRcdFx0cmV0dXJuIG9sZE5vZGUuY2hpbGRyZW47XG5cdFx0fSBlbHNlIGlmIChjdHgubW9ycGhTdHlsZSA9PT0gXCJvdXRlckhUTUxcIiB8fCBjdHgubW9ycGhTdHlsZSA9PSBudWxsKSB7XG5cdFx0XHRsZXQgYmVzdE1hdGNoID0gZmluZEJlc3ROb2RlTWF0Y2gobm9ybWFsaXplZE5ld0NvbnRlbnQsIG9sZE5vZGUsIGN0eCk7XG5cdFx0XHRsZXQgcHJldmlvdXNTaWJsaW5nID0gYmVzdE1hdGNoPy5wcmV2aW91c1NpYmxpbmc7XG5cdFx0XHRsZXQgbmV4dFNpYmxpbmcgPSBiZXN0TWF0Y2g/Lm5leHRTaWJsaW5nO1xuXHRcdFx0bGV0IG1vcnBoZWROb2RlID0gbW9ycGhPbGROb2RlVG8ob2xkTm9kZSwgYmVzdE1hdGNoLCBjdHgpO1xuXHRcdFx0aWYgKGJlc3RNYXRjaCkgcmV0dXJuIGluc2VydFNpYmxpbmdzKHByZXZpb3VzU2libGluZywgbW9ycGhlZE5vZGUsIG5leHRTaWJsaW5nKTtcblx0XHRcdGVsc2UgcmV0dXJuIFtdO1xuXHRcdH0gZWxzZSB0aHJvdyBcIkRvIG5vdCB1bmRlcnN0YW5kIGhvdyB0byBtb3JwaCBzdHlsZSBcIiArIGN0eC5tb3JwaFN0eWxlO1xuXHR9XG5cdGZ1bmN0aW9uIGlnbm9yZVZhbHVlT2ZBY3RpdmVFbGVtZW50KHBvc3NpYmxlQWN0aXZlRWxlbWVudCwgY3R4KSB7XG5cdFx0cmV0dXJuIGN0eC5pZ25vcmVBY3RpdmVWYWx1ZSAmJiBwb3NzaWJsZUFjdGl2ZUVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cdH1cblx0ZnVuY3Rpb24gbW9ycGhPbGROb2RlVG8ob2xkTm9kZSwgbmV3Q29udGVudCwgY3R4KSB7XG5cdFx0aWYgKGN0eC5pZ25vcmVBY3RpdmUgJiYgb2xkTm9kZSA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge30gZWxzZSBpZiAobmV3Q29udGVudCA9PSBudWxsKSB7XG5cdFx0XHRpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlUmVtb3ZlZChvbGROb2RlKSA9PT0gZmFsc2UpIHJldHVybiBvbGROb2RlO1xuXHRcdFx0b2xkTm9kZS5yZW1vdmUoKTtcblx0XHRcdGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlUmVtb3ZlZChvbGROb2RlKTtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH0gZWxzZSBpZiAoIWlzU29mdE1hdGNoKG9sZE5vZGUsIG5ld0NvbnRlbnQpKSB7XG5cdFx0XHRpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlUmVtb3ZlZChvbGROb2RlKSA9PT0gZmFsc2UpIHJldHVybiBvbGROb2RlO1xuXHRcdFx0aWYgKGN0eC5jYWxsYmFja3MuYmVmb3JlTm9kZUFkZGVkKG5ld0NvbnRlbnQpID09PSBmYWxzZSkgcmV0dXJuIG9sZE5vZGU7XG5cdFx0XHRvbGROb2RlLnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKG5ld0NvbnRlbnQsIG9sZE5vZGUpO1xuXHRcdFx0Y3R4LmNhbGxiYWNrcy5hZnRlck5vZGVBZGRlZChuZXdDb250ZW50KTtcblx0XHRcdGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlUmVtb3ZlZChvbGROb2RlKTtcblx0XHRcdHJldHVybiBuZXdDb250ZW50O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlTW9ycGhlZChvbGROb2RlLCBuZXdDb250ZW50KSA9PT0gZmFsc2UpIHJldHVybiBvbGROb2RlO1xuXHRcdFx0aWYgKG9sZE5vZGUgaW5zdGFuY2VvZiBIVE1MSGVhZEVsZW1lbnQgJiYgY3R4LmhlYWQuaWdub3JlKSB7fSBlbHNlIGlmIChvbGROb2RlIGluc3RhbmNlb2YgSFRNTEhlYWRFbGVtZW50ICYmIGN0eC5oZWFkLnN0eWxlICE9PSBcIm1vcnBoXCIpIGhhbmRsZUhlYWRFbGVtZW50KG5ld0NvbnRlbnQsIG9sZE5vZGUsIGN0eCk7XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0c3luY05vZGVGcm9tKG5ld0NvbnRlbnQsIG9sZE5vZGUsIGN0eCk7XG5cdFx0XHRcdGlmICghaWdub3JlVmFsdWVPZkFjdGl2ZUVsZW1lbnQob2xkTm9kZSwgY3R4KSkgbW9ycGhDaGlsZHJlbihuZXdDb250ZW50LCBvbGROb2RlLCBjdHgpO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LmNhbGxiYWNrcy5hZnRlck5vZGVNb3JwaGVkKG9sZE5vZGUsIG5ld0NvbnRlbnQpO1xuXHRcdFx0cmV0dXJuIG9sZE5vZGU7XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIG1vcnBoQ2hpbGRyZW4obmV3UGFyZW50LCBvbGRQYXJlbnQsIGN0eCkge1xuXHRcdGxldCBuZXh0TmV3Q2hpbGQgPSBuZXdQYXJlbnQuZmlyc3RDaGlsZDtcblx0XHRsZXQgaW5zZXJ0aW9uUG9pbnQgPSBvbGRQYXJlbnQuZmlyc3RDaGlsZDtcblx0XHRsZXQgbmV3Q2hpbGQ7XG5cdFx0d2hpbGUgKG5leHROZXdDaGlsZCkge1xuXHRcdFx0bmV3Q2hpbGQgPSBuZXh0TmV3Q2hpbGQ7XG5cdFx0XHRuZXh0TmV3Q2hpbGQgPSBuZXdDaGlsZC5uZXh0U2libGluZztcblx0XHRcdGlmIChpbnNlcnRpb25Qb2ludCA9PSBudWxsKSB7XG5cdFx0XHRcdGlmIChjdHguY2FsbGJhY2tzLmJlZm9yZU5vZGVBZGRlZChuZXdDaGlsZCkgPT09IGZhbHNlKSByZXR1cm47XG5cdFx0XHRcdG9sZFBhcmVudC5hcHBlbmRDaGlsZChuZXdDaGlsZCk7XG5cdFx0XHRcdGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlQWRkZWQobmV3Q2hpbGQpO1xuXHRcdFx0XHRyZW1vdmVJZHNGcm9tQ29uc2lkZXJhdGlvbihjdHgsIG5ld0NoaWxkKTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaXNJZFNldE1hdGNoKG5ld0NoaWxkLCBpbnNlcnRpb25Qb2ludCwgY3R4KSkge1xuXHRcdFx0XHRtb3JwaE9sZE5vZGVUbyhpbnNlcnRpb25Qb2ludCwgbmV3Q2hpbGQsIGN0eCk7XG5cdFx0XHRcdGluc2VydGlvblBvaW50ID0gaW5zZXJ0aW9uUG9pbnQubmV4dFNpYmxpbmc7XG5cdFx0XHRcdHJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uKGN0eCwgbmV3Q2hpbGQpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGxldCBpZFNldE1hdGNoID0gZmluZElkU2V0TWF0Y2gobmV3UGFyZW50LCBvbGRQYXJlbnQsIG5ld0NoaWxkLCBpbnNlcnRpb25Qb2ludCwgY3R4KTtcblx0XHRcdGlmIChpZFNldE1hdGNoKSB7XG5cdFx0XHRcdGluc2VydGlvblBvaW50ID0gcmVtb3ZlTm9kZXNCZXR3ZWVuKGluc2VydGlvblBvaW50LCBpZFNldE1hdGNoLCBjdHgpO1xuXHRcdFx0XHRtb3JwaE9sZE5vZGVUbyhpZFNldE1hdGNoLCBuZXdDaGlsZCwgY3R4KTtcblx0XHRcdFx0cmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCBuZXdDaGlsZCk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0bGV0IHNvZnRNYXRjaCA9IGZpbmRTb2Z0TWF0Y2gobmV3UGFyZW50LCBvbGRQYXJlbnQsIG5ld0NoaWxkLCBpbnNlcnRpb25Qb2ludCwgY3R4KTtcblx0XHRcdGlmIChzb2Z0TWF0Y2gpIHtcblx0XHRcdFx0aW5zZXJ0aW9uUG9pbnQgPSByZW1vdmVOb2Rlc0JldHdlZW4oaW5zZXJ0aW9uUG9pbnQsIHNvZnRNYXRjaCwgY3R4KTtcblx0XHRcdFx0bW9ycGhPbGROb2RlVG8oc29mdE1hdGNoLCBuZXdDaGlsZCwgY3R4KTtcblx0XHRcdFx0cmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCBuZXdDaGlsZCk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5jYWxsYmFja3MuYmVmb3JlTm9kZUFkZGVkKG5ld0NoaWxkKSA9PT0gZmFsc2UpIHJldHVybjtcblx0XHRcdG9sZFBhcmVudC5pbnNlcnRCZWZvcmUobmV3Q2hpbGQsIGluc2VydGlvblBvaW50KTtcblx0XHRcdGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlQWRkZWQobmV3Q2hpbGQpO1xuXHRcdFx0cmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCBuZXdDaGlsZCk7XG5cdFx0fVxuXHRcdHdoaWxlIChpbnNlcnRpb25Qb2ludCAhPT0gbnVsbCkge1xuXHRcdFx0bGV0IHRlbXBOb2RlID0gaW5zZXJ0aW9uUG9pbnQ7XG5cdFx0XHRpbnNlcnRpb25Qb2ludCA9IGluc2VydGlvblBvaW50Lm5leHRTaWJsaW5nO1xuXHRcdFx0cmVtb3ZlTm9kZSh0ZW1wTm9kZSwgY3R4KTtcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gaWdub3JlQXR0cmlidXRlKGF0dHIsIHRvLCB1cGRhdGVUeXBlLCBjdHgpIHtcblx0XHRpZiAoYXR0ciA9PT0gXCJ2YWx1ZVwiICYmIGN0eC5pZ25vcmVBY3RpdmVWYWx1ZSAmJiB0byA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkgcmV0dXJuIHRydWU7XG5cdFx0cmV0dXJuIGN0eC5jYWxsYmFja3MuYmVmb3JlQXR0cmlidXRlVXBkYXRlZChhdHRyLCB0bywgdXBkYXRlVHlwZSkgPT09IGZhbHNlO1xuXHR9XG5cdGZ1bmN0aW9uIHN5bmNOb2RlRnJvbShmcm9tLCB0bywgY3R4KSB7XG5cdFx0bGV0IHR5cGUgPSBmcm9tLm5vZGVUeXBlO1xuXHRcdGlmICh0eXBlID09PSAxKSB7XG5cdFx0XHRjb25zdCBmcm9tQXR0cmlidXRlcyA9IGZyb20uYXR0cmlidXRlcztcblx0XHRcdGNvbnN0IHRvQXR0cmlidXRlcyA9IHRvLmF0dHJpYnV0ZXM7XG5cdFx0XHRmb3IgKGNvbnN0IGZyb21BdHRyaWJ1dGUgb2YgZnJvbUF0dHJpYnV0ZXMpIHtcblx0XHRcdFx0aWYgKGlnbm9yZUF0dHJpYnV0ZShmcm9tQXR0cmlidXRlLm5hbWUsIHRvLCBcInVwZGF0ZVwiLCBjdHgpKSBjb250aW51ZTtcblx0XHRcdFx0aWYgKHRvLmdldEF0dHJpYnV0ZShmcm9tQXR0cmlidXRlLm5hbWUpICE9PSBmcm9tQXR0cmlidXRlLnZhbHVlKSB0by5zZXRBdHRyaWJ1dGUoZnJvbUF0dHJpYnV0ZS5uYW1lLCBmcm9tQXR0cmlidXRlLnZhbHVlKTtcblx0XHRcdH1cblx0XHRcdGZvciAobGV0IGkgPSB0b0F0dHJpYnV0ZXMubGVuZ3RoIC0gMTsgMCA8PSBpOyBpLS0pIHtcblx0XHRcdFx0Y29uc3QgdG9BdHRyaWJ1dGUgPSB0b0F0dHJpYnV0ZXNbaV07XG5cdFx0XHRcdGlmIChpZ25vcmVBdHRyaWJ1dGUodG9BdHRyaWJ1dGUubmFtZSwgdG8sIFwicmVtb3ZlXCIsIGN0eCkpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAoIWZyb20uaGFzQXR0cmlidXRlKHRvQXR0cmlidXRlLm5hbWUpKSB0by5yZW1vdmVBdHRyaWJ1dGUodG9BdHRyaWJ1dGUubmFtZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0eXBlID09PSA4IHx8IHR5cGUgPT09IDMpIHtcblx0XHRcdGlmICh0by5ub2RlVmFsdWUgIT09IGZyb20ubm9kZVZhbHVlKSB0by5ub2RlVmFsdWUgPSBmcm9tLm5vZGVWYWx1ZTtcblx0XHR9XG5cdFx0aWYgKCFpZ25vcmVWYWx1ZU9mQWN0aXZlRWxlbWVudCh0bywgY3R4KSkgc3luY0lucHV0VmFsdWUoZnJvbSwgdG8sIGN0eCk7XG5cdH1cblx0ZnVuY3Rpb24gc3luY0Jvb2xlYW5BdHRyaWJ1dGUoZnJvbSwgdG8sIGF0dHJpYnV0ZU5hbWUsIGN0eCkge1xuXHRcdGlmIChmcm9tW2F0dHJpYnV0ZU5hbWVdICE9PSB0b1thdHRyaWJ1dGVOYW1lXSkge1xuXHRcdFx0bGV0IGlnbm9yZVVwZGF0ZSA9IGlnbm9yZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCB0bywgXCJ1cGRhdGVcIiwgY3R4KTtcblx0XHRcdGlmICghaWdub3JlVXBkYXRlKSB0b1thdHRyaWJ1dGVOYW1lXSA9IGZyb21bYXR0cmlidXRlTmFtZV07XG5cdFx0XHRpZiAoZnJvbVthdHRyaWJ1dGVOYW1lXSkge1xuXHRcdFx0XHRpZiAoIWlnbm9yZVVwZGF0ZSkgdG8uc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGZyb21bYXR0cmlidXRlTmFtZV0pO1xuXHRcdFx0fSBlbHNlIGlmICghaWdub3JlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIHRvLCBcInJlbW92ZVwiLCBjdHgpKSB0by5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHN5bmNJbnB1dFZhbHVlKGZyb20sIHRvLCBjdHgpIHtcblx0XHRpZiAoZnJvbSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgdG8gaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIGZyb20udHlwZSAhPT0gXCJmaWxlXCIpIHtcblx0XHRcdGxldCBmcm9tVmFsdWUgPSBmcm9tLnZhbHVlO1xuXHRcdFx0bGV0IHRvVmFsdWUgPSB0by52YWx1ZTtcblx0XHRcdHN5bmNCb29sZWFuQXR0cmlidXRlKGZyb20sIHRvLCBcImNoZWNrZWRcIiwgY3R4KTtcblx0XHRcdHN5bmNCb29sZWFuQXR0cmlidXRlKGZyb20sIHRvLCBcImRpc2FibGVkXCIsIGN0eCk7XG5cdFx0XHRpZiAoIWZyb20uaGFzQXR0cmlidXRlKFwidmFsdWVcIikpIHtcblx0XHRcdFx0aWYgKCFpZ25vcmVBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0bywgXCJyZW1vdmVcIiwgY3R4KSkge1xuXHRcdFx0XHRcdHRvLnZhbHVlID0gXCJcIjtcblx0XHRcdFx0XHR0by5yZW1vdmVBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChmcm9tVmFsdWUgIT09IHRvVmFsdWUpIHtcblx0XHRcdFx0aWYgKCFpZ25vcmVBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0bywgXCJ1cGRhdGVcIiwgY3R4KSkge1xuXHRcdFx0XHRcdHRvLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGZyb21WYWx1ZSk7XG5cdFx0XHRcdFx0dG8udmFsdWUgPSBmcm9tVmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGZyb20gaW5zdGFuY2VvZiBIVE1MT3B0aW9uRWxlbWVudCkgc3luY0Jvb2xlYW5BdHRyaWJ1dGUoZnJvbSwgdG8sIFwic2VsZWN0ZWRcIiwgY3R4KTtcblx0XHRlbHNlIGlmIChmcm9tIGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCAmJiB0byBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQpIHtcblx0XHRcdGxldCBmcm9tVmFsdWUgPSBmcm9tLnZhbHVlO1xuXHRcdFx0bGV0IHRvVmFsdWUgPSB0by52YWx1ZTtcblx0XHRcdGlmIChpZ25vcmVBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0bywgXCJ1cGRhdGVcIiwgY3R4KSkgcmV0dXJuO1xuXHRcdFx0aWYgKGZyb21WYWx1ZSAhPT0gdG9WYWx1ZSkgdG8udmFsdWUgPSBmcm9tVmFsdWU7XG5cdFx0XHRpZiAodG8uZmlyc3RDaGlsZCAmJiB0by5maXJzdENoaWxkLm5vZGVWYWx1ZSAhPT0gZnJvbVZhbHVlKSB0by5maXJzdENoaWxkLm5vZGVWYWx1ZSA9IGZyb21WYWx1ZTtcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gaGFuZGxlSGVhZEVsZW1lbnQobmV3SGVhZFRhZywgY3VycmVudEhlYWQsIGN0eCkge1xuXHRcdGxldCBhZGRlZCA9IFtdO1xuXHRcdGxldCByZW1vdmVkID0gW107XG5cdFx0bGV0IHByZXNlcnZlZCA9IFtdO1xuXHRcdGxldCBub2Rlc1RvQXBwZW5kID0gW107XG5cdFx0bGV0IGhlYWRNZXJnZVN0eWxlID0gY3R4LmhlYWQuc3R5bGU7XG5cdFx0bGV0IHNyY1RvTmV3SGVhZE5vZGVzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0XHRmb3IgKGNvbnN0IG5ld0hlYWRDaGlsZCBvZiBuZXdIZWFkVGFnLmNoaWxkcmVuKSBzcmNUb05ld0hlYWROb2Rlcy5zZXQobmV3SGVhZENoaWxkLm91dGVySFRNTCwgbmV3SGVhZENoaWxkKTtcblx0XHRmb3IgKGNvbnN0IGN1cnJlbnRIZWFkRWx0IG9mIGN1cnJlbnRIZWFkLmNoaWxkcmVuKSB7XG5cdFx0XHRsZXQgaW5OZXdDb250ZW50ID0gc3JjVG9OZXdIZWFkTm9kZXMuaGFzKGN1cnJlbnRIZWFkRWx0Lm91dGVySFRNTCk7XG5cdFx0XHRsZXQgaXNSZUFwcGVuZGVkID0gY3R4LmhlYWQuc2hvdWxkUmVBcHBlbmQoY3VycmVudEhlYWRFbHQpO1xuXHRcdFx0bGV0IGlzUHJlc2VydmVkID0gY3R4LmhlYWQuc2hvdWxkUHJlc2VydmUoY3VycmVudEhlYWRFbHQpO1xuXHRcdFx0aWYgKGluTmV3Q29udGVudCB8fCBpc1ByZXNlcnZlZCkgaWYgKGlzUmVBcHBlbmRlZCkgcmVtb3ZlZC5wdXNoKGN1cnJlbnRIZWFkRWx0KTtcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRzcmNUb05ld0hlYWROb2Rlcy5kZWxldGUoY3VycmVudEhlYWRFbHQub3V0ZXJIVE1MKTtcblx0XHRcdFx0cHJlc2VydmVkLnB1c2goY3VycmVudEhlYWRFbHQpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoaGVhZE1lcmdlU3R5bGUgPT09IFwiYXBwZW5kXCIpIHtcblx0XHRcdFx0aWYgKGlzUmVBcHBlbmRlZCkge1xuXHRcdFx0XHRcdHJlbW92ZWQucHVzaChjdXJyZW50SGVhZEVsdCk7XG5cdFx0XHRcdFx0bm9kZXNUb0FwcGVuZC5wdXNoKGN1cnJlbnRIZWFkRWx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChjdHguaGVhZC5zaG91bGRSZW1vdmUoY3VycmVudEhlYWRFbHQpICE9PSBmYWxzZSkgcmVtb3ZlZC5wdXNoKGN1cnJlbnRIZWFkRWx0KTtcblx0XHR9XG5cdFx0bm9kZXNUb0FwcGVuZC5wdXNoKC4uLnNyY1RvTmV3SGVhZE5vZGVzLnZhbHVlcygpKTtcblx0XHRsb2coXCJ0byBhcHBlbmQ6IFwiLCBub2Rlc1RvQXBwZW5kKTtcblx0XHRsZXQgcHJvbWlzZXMgPSBbXTtcblx0XHRmb3IgKGNvbnN0IG5ld05vZGUgb2Ygbm9kZXNUb0FwcGVuZCkge1xuXHRcdFx0bG9nKFwiYWRkaW5nOiBcIiwgbmV3Tm9kZSk7XG5cdFx0XHRsZXQgbmV3RWx0ID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQobmV3Tm9kZS5vdXRlckhUTUwpLmZpcnN0Q2hpbGQ7XG5cdFx0XHRsb2cobmV3RWx0KTtcblx0XHRcdGlmIChjdHguY2FsbGJhY2tzLmJlZm9yZU5vZGVBZGRlZChuZXdFbHQpICE9PSBmYWxzZSkge1xuXHRcdFx0XHRpZiAobmV3RWx0LmhyZWYgfHwgbmV3RWx0LnNyYykge1xuXHRcdFx0XHRcdGxldCByZXNvbHZlID0gbnVsbDtcblx0XHRcdFx0XHRsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKF9yZXNvbHZlKSB7XG5cdFx0XHRcdFx0XHRyZXNvbHZlID0gX3Jlc29sdmU7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0bmV3RWx0LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2gocHJvbWlzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3VycmVudEhlYWQuYXBwZW5kQ2hpbGQobmV3RWx0KTtcblx0XHRcdFx0Y3R4LmNhbGxiYWNrcy5hZnRlck5vZGVBZGRlZChuZXdFbHQpO1xuXHRcdFx0XHRhZGRlZC5wdXNoKG5ld0VsdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZvciAoY29uc3QgcmVtb3ZlZEVsZW1lbnQgb2YgcmVtb3ZlZCkgaWYgKGN0eC5jYWxsYmFja3MuYmVmb3JlTm9kZVJlbW92ZWQocmVtb3ZlZEVsZW1lbnQpICE9PSBmYWxzZSkge1xuXHRcdFx0Y3VycmVudEhlYWQucmVtb3ZlQ2hpbGQocmVtb3ZlZEVsZW1lbnQpO1xuXHRcdFx0Y3R4LmNhbGxiYWNrcy5hZnRlck5vZGVSZW1vdmVkKHJlbW92ZWRFbGVtZW50KTtcblx0XHR9XG5cdFx0Y3R4LmhlYWQuYWZ0ZXJIZWFkTW9ycGhlZChjdXJyZW50SGVhZCwge1xuXHRcdFx0YWRkZWQsXG5cdFx0XHRrZXB0OiBwcmVzZXJ2ZWQsXG5cdFx0XHRyZW1vdmVkXG5cdFx0fSk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9XG5cdGZ1bmN0aW9uIGxvZygpIHt9XG5cdGZ1bmN0aW9uIG5vT3AoKSB7fVxuXHRmdW5jdGlvbiBtZXJnZURlZmF1bHRzKGNvbmZpZykge1xuXHRcdGxldCBmaW5hbENvbmZpZyA9IHt9O1xuXHRcdE9iamVjdC5hc3NpZ24oZmluYWxDb25maWcsIGRlZmF1bHRzKTtcblx0XHRPYmplY3QuYXNzaWduKGZpbmFsQ29uZmlnLCBjb25maWcpO1xuXHRcdGZpbmFsQ29uZmlnLmNhbGxiYWNrcyA9IHt9O1xuXHRcdE9iamVjdC5hc3NpZ24oZmluYWxDb25maWcuY2FsbGJhY2tzLCBkZWZhdWx0cy5jYWxsYmFja3MpO1xuXHRcdE9iamVjdC5hc3NpZ24oZmluYWxDb25maWcuY2FsbGJhY2tzLCBjb25maWcuY2FsbGJhY2tzKTtcblx0XHRmaW5hbENvbmZpZy5oZWFkID0ge307XG5cdFx0T2JqZWN0LmFzc2lnbihmaW5hbENvbmZpZy5oZWFkLCBkZWZhdWx0cy5oZWFkKTtcblx0XHRPYmplY3QuYXNzaWduKGZpbmFsQ29uZmlnLmhlYWQsIGNvbmZpZy5oZWFkKTtcblx0XHRyZXR1cm4gZmluYWxDb25maWc7XG5cdH1cblx0ZnVuY3Rpb24gY3JlYXRlTW9ycGhDb250ZXh0KG9sZE5vZGUsIG5ld0NvbnRlbnQsIGNvbmZpZykge1xuXHRcdGNvbmZpZyA9IG1lcmdlRGVmYXVsdHMoY29uZmlnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGFyZ2V0OiBvbGROb2RlLFxuXHRcdFx0bmV3Q29udGVudCxcblx0XHRcdGNvbmZpZyxcblx0XHRcdG1vcnBoU3R5bGU6IGNvbmZpZy5tb3JwaFN0eWxlLFxuXHRcdFx0aWdub3JlQWN0aXZlOiBjb25maWcuaWdub3JlQWN0aXZlLFxuXHRcdFx0aWdub3JlQWN0aXZlVmFsdWU6IGNvbmZpZy5pZ25vcmVBY3RpdmVWYWx1ZSxcblx0XHRcdGlkTWFwOiBjcmVhdGVJZE1hcChvbGROb2RlLCBuZXdDb250ZW50KSxcblx0XHRcdGRlYWRJZHM6IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCksXG5cdFx0XHRjYWxsYmFja3M6IGNvbmZpZy5jYWxsYmFja3MsXG5cdFx0XHRoZWFkOiBjb25maWcuaGVhZFxuXHRcdH07XG5cdH1cblx0ZnVuY3Rpb24gaXNJZFNldE1hdGNoKG5vZGUxLCBub2RlMiwgY3R4KSB7XG5cdFx0aWYgKG5vZGUxID09IG51bGwgfHwgbm9kZTIgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRcdGlmIChub2RlMS5ub2RlVHlwZSA9PT0gbm9kZTIubm9kZVR5cGUgJiYgbm9kZTEudGFnTmFtZSA9PT0gbm9kZTIudGFnTmFtZSkgaWYgKG5vZGUxLmlkICE9PSBcIlwiICYmIG5vZGUxLmlkID09PSBub2RlMi5pZCkgcmV0dXJuIHRydWU7XG5cdFx0ZWxzZSByZXR1cm4gZ2V0SWRJbnRlcnNlY3Rpb25Db3VudChjdHgsIG5vZGUxLCBub2RlMikgPiAwO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRmdW5jdGlvbiBpc1NvZnRNYXRjaChub2RlMSwgbm9kZTIpIHtcblx0XHRpZiAobm9kZTEgPT0gbnVsbCB8fCBub2RlMiA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdFx0cmV0dXJuIG5vZGUxLm5vZGVUeXBlID09PSBub2RlMi5ub2RlVHlwZSAmJiBub2RlMS50YWdOYW1lID09PSBub2RlMi50YWdOYW1lO1xuXHR9XG5cdGZ1bmN0aW9uIHJlbW92ZU5vZGVzQmV0d2VlbihzdGFydEluY2x1c2l2ZSwgZW5kRXhjbHVzaXZlLCBjdHgpIHtcblx0XHR3aGlsZSAoc3RhcnRJbmNsdXNpdmUgIT09IGVuZEV4Y2x1c2l2ZSkge1xuXHRcdFx0bGV0IHRlbXBOb2RlID0gc3RhcnRJbmNsdXNpdmU7XG5cdFx0XHRzdGFydEluY2x1c2l2ZSA9IHN0YXJ0SW5jbHVzaXZlLm5leHRTaWJsaW5nO1xuXHRcdFx0cmVtb3ZlTm9kZSh0ZW1wTm9kZSwgY3R4KTtcblx0XHR9XG5cdFx0cmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCBlbmRFeGNsdXNpdmUpO1xuXHRcdHJldHVybiBlbmRFeGNsdXNpdmUubmV4dFNpYmxpbmc7XG5cdH1cblx0ZnVuY3Rpb24gZmluZElkU2V0TWF0Y2gobmV3Q29udGVudCwgb2xkUGFyZW50LCBuZXdDaGlsZCwgaW5zZXJ0aW9uUG9pbnQsIGN0eCkge1xuXHRcdGxldCBuZXdDaGlsZFBvdGVudGlhbElkQ291bnQgPSBnZXRJZEludGVyc2VjdGlvbkNvdW50KGN0eCwgbmV3Q2hpbGQsIG9sZFBhcmVudCk7XG5cdFx0bGV0IHBvdGVudGlhbE1hdGNoID0gbnVsbDtcblx0XHRpZiAobmV3Q2hpbGRQb3RlbnRpYWxJZENvdW50ID4gMCkge1xuXHRcdFx0bGV0IHBvdGVudGlhbE1hdGNoID0gaW5zZXJ0aW9uUG9pbnQ7XG5cdFx0XHRsZXQgb3RoZXJNYXRjaENvdW50ID0gMDtcblx0XHRcdHdoaWxlIChwb3RlbnRpYWxNYXRjaCAhPSBudWxsKSB7XG5cdFx0XHRcdGlmIChpc0lkU2V0TWF0Y2gobmV3Q2hpbGQsIHBvdGVudGlhbE1hdGNoLCBjdHgpKSByZXR1cm4gcG90ZW50aWFsTWF0Y2g7XG5cdFx0XHRcdG90aGVyTWF0Y2hDb3VudCArPSBnZXRJZEludGVyc2VjdGlvbkNvdW50KGN0eCwgcG90ZW50aWFsTWF0Y2gsIG5ld0NvbnRlbnQpO1xuXHRcdFx0XHRpZiAob3RoZXJNYXRjaENvdW50ID4gbmV3Q2hpbGRQb3RlbnRpYWxJZENvdW50KSByZXR1cm4gbnVsbDtcblx0XHRcdFx0cG90ZW50aWFsTWF0Y2ggPSBwb3RlbnRpYWxNYXRjaC5uZXh0U2libGluZztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHBvdGVudGlhbE1hdGNoO1xuXHR9XG5cdGZ1bmN0aW9uIGZpbmRTb2Z0TWF0Y2gobmV3Q29udGVudCwgb2xkUGFyZW50LCBuZXdDaGlsZCwgaW5zZXJ0aW9uUG9pbnQsIGN0eCkge1xuXHRcdGxldCBwb3RlbnRpYWxTb2Z0TWF0Y2ggPSBpbnNlcnRpb25Qb2ludDtcblx0XHRsZXQgbmV4dFNpYmxpbmcgPSBuZXdDaGlsZC5uZXh0U2libGluZztcblx0XHRsZXQgc2libGluZ1NvZnRNYXRjaENvdW50ID0gMDtcblx0XHR3aGlsZSAocG90ZW50aWFsU29mdE1hdGNoICE9IG51bGwpIHtcblx0XHRcdGlmIChnZXRJZEludGVyc2VjdGlvbkNvdW50KGN0eCwgcG90ZW50aWFsU29mdE1hdGNoLCBuZXdDb250ZW50KSA+IDApIHJldHVybiBudWxsO1xuXHRcdFx0aWYgKGlzU29mdE1hdGNoKG5ld0NoaWxkLCBwb3RlbnRpYWxTb2Z0TWF0Y2gpKSByZXR1cm4gcG90ZW50aWFsU29mdE1hdGNoO1xuXHRcdFx0aWYgKGlzU29mdE1hdGNoKG5leHRTaWJsaW5nLCBwb3RlbnRpYWxTb2Z0TWF0Y2gpKSB7XG5cdFx0XHRcdHNpYmxpbmdTb2Z0TWF0Y2hDb3VudCsrO1xuXHRcdFx0XHRuZXh0U2libGluZyA9IG5leHRTaWJsaW5nLm5leHRTaWJsaW5nO1xuXHRcdFx0XHRpZiAoc2libGluZ1NvZnRNYXRjaENvdW50ID49IDIpIHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0cG90ZW50aWFsU29mdE1hdGNoID0gcG90ZW50aWFsU29mdE1hdGNoLm5leHRTaWJsaW5nO1xuXHRcdH1cblx0XHRyZXR1cm4gcG90ZW50aWFsU29mdE1hdGNoO1xuXHR9XG5cdGZ1bmN0aW9uIHBhcnNlQ29udGVudChuZXdDb250ZW50KSB7XG5cdFx0bGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcblx0XHRsZXQgY29udGVudFdpdGhTdmdzUmVtb3ZlZCA9IG5ld0NvbnRlbnQucmVwbGFjZSgvPHN2ZyhcXHNbXj5dKj58PikoW1xcc1xcU10qPyk8XFwvc3ZnPi9naW0sIFwiXCIpO1xuXHRcdGlmIChjb250ZW50V2l0aFN2Z3NSZW1vdmVkLm1hdGNoKC88XFwvaHRtbD4vKSB8fCBjb250ZW50V2l0aFN2Z3NSZW1vdmVkLm1hdGNoKC88XFwvaGVhZD4vKSB8fCBjb250ZW50V2l0aFN2Z3NSZW1vdmVkLm1hdGNoKC88XFwvYm9keT4vKSkge1xuXHRcdFx0bGV0IGNvbnRlbnQgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKG5ld0NvbnRlbnQsIFwidGV4dC9odG1sXCIpO1xuXHRcdFx0aWYgKGNvbnRlbnRXaXRoU3Znc1JlbW92ZWQubWF0Y2goLzxcXC9odG1sPi8pKSB7XG5cdFx0XHRcdGNvbnRlbnQuZ2VuZXJhdGVkQnlJZGlvbW9ycGggPSB0cnVlO1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCBodG1sRWxlbWVudCA9IGNvbnRlbnQuZmlyc3RDaGlsZDtcblx0XHRcdFx0aWYgKGh0bWxFbGVtZW50KSB7XG5cdFx0XHRcdFx0aHRtbEVsZW1lbnQuZ2VuZXJhdGVkQnlJZGlvbW9ycGggPSB0cnVlO1xuXHRcdFx0XHRcdHJldHVybiBodG1sRWxlbWVudDtcblx0XHRcdFx0fSBlbHNlIHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgY29udGVudCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoXCI8Ym9keT48dGVtcGxhdGU+XCIgKyBuZXdDb250ZW50ICsgXCI8L3RlbXBsYXRlPjwvYm9keT5cIiwgXCJ0ZXh0L2h0bWxcIikuYm9keS5xdWVyeVNlbGVjdG9yKFwidGVtcGxhdGVcIikuY29udGVudDtcblx0XHRcdGNvbnRlbnQuZ2VuZXJhdGVkQnlJZGlvbW9ycGggPSB0cnVlO1xuXHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbnRlbnQobmV3Q29udGVudCkge1xuXHRcdGlmIChuZXdDb250ZW50ID09IG51bGwpIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGVsc2UgaWYgKG5ld0NvbnRlbnQuZ2VuZXJhdGVkQnlJZGlvbW9ycGgpIHJldHVybiBuZXdDb250ZW50O1xuXHRcdGVsc2UgaWYgKG5ld0NvbnRlbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG5cdFx0XHRjb25zdCBkdW1teVBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRkdW1teVBhcmVudC5hcHBlbmQobmV3Q29udGVudCk7XG5cdFx0XHRyZXR1cm4gZHVtbXlQYXJlbnQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGR1bW15UGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdGZvciAoY29uc3QgZWx0IG9mIFsuLi5uZXdDb250ZW50XSkgZHVtbXlQYXJlbnQuYXBwZW5kKGVsdCk7XG5cdFx0XHRyZXR1cm4gZHVtbXlQYXJlbnQ7XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIGluc2VydFNpYmxpbmdzKHByZXZpb3VzU2libGluZywgbW9ycGhlZE5vZGUsIG5leHRTaWJsaW5nKSB7XG5cdFx0bGV0IHN0YWNrID0gW107XG5cdFx0bGV0IGFkZGVkID0gW107XG5cdFx0d2hpbGUgKHByZXZpb3VzU2libGluZyAhPSBudWxsKSB7XG5cdFx0XHRzdGFjay5wdXNoKHByZXZpb3VzU2libGluZyk7XG5cdFx0XHRwcmV2aW91c1NpYmxpbmcgPSBwcmV2aW91c1NpYmxpbmcucHJldmlvdXNTaWJsaW5nO1xuXHRcdH1cblx0XHR3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xuXHRcdFx0bGV0IG5vZGUgPSBzdGFjay5wb3AoKTtcblx0XHRcdGFkZGVkLnB1c2gobm9kZSk7XG5cdFx0XHRtb3JwaGVkTm9kZS5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShub2RlLCBtb3JwaGVkTm9kZSk7XG5cdFx0fVxuXHRcdGFkZGVkLnB1c2gobW9ycGhlZE5vZGUpO1xuXHRcdHdoaWxlIChuZXh0U2libGluZyAhPSBudWxsKSB7XG5cdFx0XHRzdGFjay5wdXNoKG5leHRTaWJsaW5nKTtcblx0XHRcdGFkZGVkLnB1c2gobmV4dFNpYmxpbmcpO1xuXHRcdFx0bmV4dFNpYmxpbmcgPSBuZXh0U2libGluZy5uZXh0U2libGluZztcblx0XHR9XG5cdFx0d2hpbGUgKHN0YWNrLmxlbmd0aCA+IDApIG1vcnBoZWROb2RlLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHN0YWNrLnBvcCgpLCBtb3JwaGVkTm9kZS5uZXh0U2libGluZyk7XG5cdFx0cmV0dXJuIGFkZGVkO1xuXHR9XG5cdGZ1bmN0aW9uIGZpbmRCZXN0Tm9kZU1hdGNoKG5ld0NvbnRlbnQsIG9sZE5vZGUsIGN0eCkge1xuXHRcdGxldCBjdXJyZW50RWxlbWVudDtcblx0XHRjdXJyZW50RWxlbWVudCA9IG5ld0NvbnRlbnQuZmlyc3RDaGlsZDtcblx0XHRsZXQgYmVzdEVsZW1lbnQgPSBjdXJyZW50RWxlbWVudDtcblx0XHRsZXQgc2NvcmUgPSAwO1xuXHRcdHdoaWxlIChjdXJyZW50RWxlbWVudCkge1xuXHRcdFx0bGV0IG5ld1Njb3JlID0gc2NvcmVFbGVtZW50KGN1cnJlbnRFbGVtZW50LCBvbGROb2RlLCBjdHgpO1xuXHRcdFx0aWYgKG5ld1Njb3JlID4gc2NvcmUpIHtcblx0XHRcdFx0YmVzdEVsZW1lbnQgPSBjdXJyZW50RWxlbWVudDtcblx0XHRcdFx0c2NvcmUgPSBuZXdTY29yZTtcblx0XHRcdH1cblx0XHRcdGN1cnJlbnRFbGVtZW50ID0gY3VycmVudEVsZW1lbnQubmV4dFNpYmxpbmc7XG5cdFx0fVxuXHRcdHJldHVybiBiZXN0RWxlbWVudDtcblx0fVxuXHRmdW5jdGlvbiBzY29yZUVsZW1lbnQobm9kZTEsIG5vZGUyLCBjdHgpIHtcblx0XHRpZiAoaXNTb2Z0TWF0Y2gobm9kZTEsIG5vZGUyKSkgcmV0dXJuIC41ICsgZ2V0SWRJbnRlcnNlY3Rpb25Db3VudChjdHgsIG5vZGUxLCBub2RlMik7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblx0ZnVuY3Rpb24gcmVtb3ZlTm9kZSh0ZW1wTm9kZSwgY3R4KSB7XG5cdFx0cmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCB0ZW1wTm9kZSk7XG5cdFx0aWYgKGN0eC5jYWxsYmFja3MuYmVmb3JlTm9kZVJlbW92ZWQodGVtcE5vZGUpID09PSBmYWxzZSkgcmV0dXJuO1xuXHRcdHRlbXBOb2RlLnJlbW92ZSgpO1xuXHRcdGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlUmVtb3ZlZCh0ZW1wTm9kZSk7XG5cdH1cblx0ZnVuY3Rpb24gaXNJZEluQ29uc2lkZXJhdGlvbihjdHgsIGlkKSB7XG5cdFx0cmV0dXJuICFjdHguZGVhZElkcy5oYXMoaWQpO1xuXHR9XG5cdGZ1bmN0aW9uIGlkSXNXaXRoaW5Ob2RlKGN0eCwgaWQsIHRhcmdldE5vZGUpIHtcblx0XHRyZXR1cm4gKGN0eC5pZE1hcC5nZXQodGFyZ2V0Tm9kZSkgfHwgRU1QVFlfU0VUKS5oYXMoaWQpO1xuXHR9XG5cdGZ1bmN0aW9uIHJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uKGN0eCwgbm9kZSkge1xuXHRcdGxldCBpZFNldCA9IGN0eC5pZE1hcC5nZXQobm9kZSkgfHwgRU1QVFlfU0VUO1xuXHRcdGZvciAoY29uc3QgaWQgb2YgaWRTZXQpIGN0eC5kZWFkSWRzLmFkZChpZCk7XG5cdH1cblx0ZnVuY3Rpb24gZ2V0SWRJbnRlcnNlY3Rpb25Db3VudChjdHgsIG5vZGUxLCBub2RlMikge1xuXHRcdGxldCBzb3VyY2VTZXQgPSBjdHguaWRNYXAuZ2V0KG5vZGUxKSB8fCBFTVBUWV9TRVQ7XG5cdFx0bGV0IG1hdGNoQ291bnQgPSAwO1xuXHRcdGZvciAoY29uc3QgaWQgb2Ygc291cmNlU2V0KSBpZiAoaXNJZEluQ29uc2lkZXJhdGlvbihjdHgsIGlkKSAmJiBpZElzV2l0aGluTm9kZShjdHgsIGlkLCBub2RlMikpICsrbWF0Y2hDb3VudDtcblx0XHRyZXR1cm4gbWF0Y2hDb3VudDtcblx0fVxuXHRmdW5jdGlvbiBwb3B1bGF0ZUlkTWFwRm9yTm9kZShub2RlLCBpZE1hcCkge1xuXHRcdGxldCBub2RlUGFyZW50ID0gbm9kZS5wYXJlbnRFbGVtZW50O1xuXHRcdGxldCBpZEVsZW1lbnRzID0gbm9kZS5xdWVyeVNlbGVjdG9yQWxsKFwiW2lkXVwiKTtcblx0XHRmb3IgKGNvbnN0IGVsdCBvZiBpZEVsZW1lbnRzKSB7XG5cdFx0XHRsZXQgY3VycmVudCA9IGVsdDtcblx0XHRcdHdoaWxlIChjdXJyZW50ICE9PSBub2RlUGFyZW50ICYmIGN1cnJlbnQgIT0gbnVsbCkge1xuXHRcdFx0XHRsZXQgaWRTZXQgPSBpZE1hcC5nZXQoY3VycmVudCk7XG5cdFx0XHRcdGlmIChpZFNldCA9PSBudWxsKSB7XG5cdFx0XHRcdFx0aWRTZXQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuXHRcdFx0XHRcdGlkTWFwLnNldChjdXJyZW50LCBpZFNldCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWRTZXQuYWRkKGVsdC5pZCk7XG5cdFx0XHRcdGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudEVsZW1lbnQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIGNyZWF0ZUlkTWFwKG9sZENvbnRlbnQsIG5ld0NvbnRlbnQpIHtcblx0XHRsZXQgaWRNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRcdHBvcHVsYXRlSWRNYXBGb3JOb2RlKG9sZENvbnRlbnQsIGlkTWFwKTtcblx0XHRwb3B1bGF0ZUlkTWFwRm9yTm9kZShuZXdDb250ZW50LCBpZE1hcCk7XG5cdFx0cmV0dXJuIGlkTWFwO1xuXHR9XG5cdHJldHVybiB7XG5cdFx0bW9ycGgsXG5cdFx0ZGVmYXVsdHNcblx0fTtcbn0pKCk7XG5mdW5jdGlvbiBub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihlbGVtZW50KSB7XG5cdGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIGVsZW1lbnQudHlwZSA9PT0gXCJmaWxlXCIpKSB7XG5cdFx0aWYgKFwidmFsdWVcIiBpbiBlbGVtZW50KSBlbGVtZW50LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGVsZW1lbnQudmFsdWUpO1xuXHRcdGVsc2UgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKFwidmFsdWVcIikpIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJcIik7XG5cdH1cblx0QXJyYXkuZnJvbShlbGVtZW50LmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xuXHRcdG5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uKGNoaWxkKTtcblx0fSk7XG59XG5jb25zdCBzeW5jQXR0cmlidXRlcyA9IChmcm9tRWwsIHRvRWwpID0+IHtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBmcm9tRWwuYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGF0dHIgPSBmcm9tRWwuYXR0cmlidXRlc1tpXTtcblx0XHR0b0VsLnNldEF0dHJpYnV0ZShhdHRyLm5hbWUsIGF0dHIudmFsdWUpO1xuXHR9XG59O1xuZnVuY3Rpb24gZXhlY3V0ZU1vcnBoZG9tKHJvb3RGcm9tRWxlbWVudCwgcm9vdFRvRWxlbWVudCwgbW9kaWZpZWRGaWVsZEVsZW1lbnRzLCBnZXRFbGVtZW50VmFsdWUsIGV4dGVybmFsTXV0YXRpb25UcmFja2VyKSB7XG5cdGNvbnN0IG9yaWdpbmFsRWxlbWVudElkc1RvU3dhcEFmdGVyID0gW107XG5cdGNvbnN0IG9yaWdpbmFsRWxlbWVudHNUb1ByZXNlcnZlID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0Y29uc3QgbWFya0VsZW1lbnRBc05lZWRpbmdQb3N0TW9ycGhTd2FwID0gKGlkLCByZXBsYWNlV2l0aENsb25lKSA9PiB7XG5cdFx0Y29uc3Qgb2xkRWxlbWVudCA9IG9yaWdpbmFsRWxlbWVudHNUb1ByZXNlcnZlLmdldChpZCk7XG5cdFx0aWYgKCEob2xkRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgdGhyb3cgbmV3IEVycm9yKGBPcmlnaW5hbCBlbGVtZW50IHdpdGggaWQgJHtpZH0gbm90IGZvdW5kYCk7XG5cdFx0b3JpZ2luYWxFbGVtZW50SWRzVG9Td2FwQWZ0ZXIucHVzaChpZCk7XG5cdFx0aWYgKCFyZXBsYWNlV2l0aENsb25lKSByZXR1cm4gbnVsbDtcblx0XHRjb25zdCBjbG9uZWRPbGRFbGVtZW50ID0gY2xvbmVIVE1MRWxlbWVudChvbGRFbGVtZW50KTtcblx0XHRvbGRFbGVtZW50LnJlcGxhY2VXaXRoKGNsb25lZE9sZEVsZW1lbnQpO1xuXHRcdHJldHVybiBjbG9uZWRPbGRFbGVtZW50O1xuXHR9O1xuXHRyb290VG9FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1saXZlLXByZXNlcnZlXVwiKS5mb3JFYWNoKChuZXdFbGVtZW50KSA9PiB7XG5cdFx0Y29uc3QgaWQgPSBuZXdFbGVtZW50LmlkO1xuXHRcdGlmICghaWQpIHRocm93IG5ldyBFcnJvcihcIlRoZSBkYXRhLWxpdmUtcHJlc2VydmUgYXR0cmlidXRlIHJlcXVpcmVzIGFuIGlkIGF0dHJpYnV0ZSB0byBiZSBzZXQgb24gdGhlIGVsZW1lbnRcIik7XG5cdFx0Y29uc3Qgb2xkRWxlbWVudCA9IHJvb3RGcm9tRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcblx0XHRpZiAoIShvbGRFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB0aHJvdyBuZXcgRXJyb3IoYFRoZSBlbGVtZW50IHdpdGggaWQgXCIke2lkfVwiIHdhcyBub3QgZm91bmQgaW4gdGhlIG9yaWdpbmFsIEhUTUxgKTtcblx0XHRuZXdFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtbGl2ZS1wcmVzZXJ2ZVwiKTtcblx0XHRvcmlnaW5hbEVsZW1lbnRzVG9QcmVzZXJ2ZS5zZXQoaWQsIG9sZEVsZW1lbnQpO1xuXHRcdHN5bmNBdHRyaWJ1dGVzKG5ld0VsZW1lbnQsIG9sZEVsZW1lbnQpO1xuXHR9KTtcblx0SWRpb21vcnBoLm1vcnBoKHJvb3RGcm9tRWxlbWVudCwgcm9vdFRvRWxlbWVudCwgeyBjYWxsYmFja3M6IHtcblx0XHRiZWZvcmVOb2RlTW9ycGhlZDogKGZyb21FbCwgdG9FbCkgPT4ge1xuXHRcdFx0aWYgKCEoZnJvbUVsIGluc3RhbmNlb2YgRWxlbWVudCkgfHwgISh0b0VsIGluc3RhbmNlb2YgRWxlbWVudCkpIHJldHVybiB0cnVlO1xuXHRcdFx0aWYgKGZyb21FbCA9PT0gcm9vdEZyb21FbGVtZW50KSByZXR1cm4gdHJ1ZTtcblx0XHRcdGlmIChmcm9tRWwuaWQgJiYgb3JpZ2luYWxFbGVtZW50c1RvUHJlc2VydmUuaGFzKGZyb21FbC5pZCkpIHtcblx0XHRcdFx0aWYgKGZyb21FbC5pZCA9PT0gdG9FbC5pZCkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRjb25zdCBjbG9uZWRGcm9tRWwgPSBtYXJrRWxlbWVudEFzTmVlZGluZ1Bvc3RNb3JwaFN3YXAoZnJvbUVsLmlkLCB0cnVlKTtcblx0XHRcdFx0aWYgKCFjbG9uZWRGcm9tRWwpIHRocm93IG5ldyBFcnJvcihcIm1pc3NpbmcgY2xvbmVcIik7XG5cdFx0XHRcdElkaW9tb3JwaC5tb3JwaChjbG9uZWRGcm9tRWwsIHRvRWwpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZnJvbUVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgdG9FbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG5cdFx0XHRcdGlmICh0eXBlb2YgZnJvbUVsLl9feCAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRcdGlmICghd2luZG93LkFscGluZSkgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGFjY2VzcyBBbHBpbmUuanMgdGhvdWdoIHRoZSBnbG9iYWwgd2luZG93LkFscGluZSB2YXJpYWJsZS4gUGxlYXNlIG1ha2Ugc3VyZSBBbHBpbmUuanMgaXMgbG9hZGVkIGJlZm9yZSBTeW1mb255IFVYIExpdmVDb21wb25lbnQuXCIpO1xuXHRcdFx0XHRcdGlmICh0eXBlb2Ygd2luZG93LkFscGluZS5tb3JwaCAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gYWNjZXNzIEFscGluZS5qcyBtb3JwaCBmdW5jdGlvbi4gUGxlYXNlIG1ha2Ugc3VyZSB0aGUgQWxwaW5lLmpzIE1vcnBoIHBsdWdpbiBpcyBpbnN0YWxsZWQgYW5kIGxvYWRlZCwgc2VlIGh0dHBzOi8vYWxwaW5lanMuZGV2L3BsdWdpbnMvbW9ycGggZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIpO1xuXHRcdFx0XHRcdHdpbmRvdy5BbHBpbmUubW9ycGgoZnJvbUVsLl9feCwgdG9FbCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGV4dGVybmFsTXV0YXRpb25UcmFja2VyLndhc0VsZW1lbnRBZGRlZChmcm9tRWwpKSB7XG5cdFx0XHRcdFx0ZnJvbUVsLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyZW5kXCIsIHRvRWwpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobW9kaWZpZWRGaWVsZEVsZW1lbnRzLmluY2x1ZGVzKGZyb21FbCkpIHNldFZhbHVlT25FbGVtZW50KHRvRWwsIGdldEVsZW1lbnRWYWx1ZShmcm9tRWwpKTtcblx0XHRcdFx0aWYgKGZyb21FbCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiBmcm9tRWwgIT09IGRvY3VtZW50LmJvZHkgJiYgbnVsbCAhPT0gZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChmcm9tRWwsIGZhbHNlKSkgc2V0VmFsdWVPbkVsZW1lbnQodG9FbCwgZ2V0RWxlbWVudFZhbHVlKGZyb21FbCkpO1xuXHRcdFx0XHRjb25zdCBlbGVtZW50Q2hhbmdlcyA9IGV4dGVybmFsTXV0YXRpb25UcmFja2VyLmdldENoYW5nZWRFbGVtZW50KGZyb21FbCk7XG5cdFx0XHRcdGlmIChlbGVtZW50Q2hhbmdlcykgZWxlbWVudENoYW5nZXMuYXBwbHlUb0VsZW1lbnQodG9FbCk7XG5cdFx0XHRcdGlmIChmcm9tRWwubm9kZU5hbWUudG9VcHBlckNhc2UoKSAhPT0gXCJPUFRJT05cIiAmJiBmcm9tRWwuaXNFcXVhbE5vZGUodG9FbCkpIHtcblx0XHRcdFx0XHRjb25zdCBub3JtYWxpemVkRnJvbUVsID0gY2xvbmVIVE1MRWxlbWVudChmcm9tRWwpO1xuXHRcdFx0XHRcdG5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uKG5vcm1hbGl6ZWRGcm9tRWwpO1xuXHRcdFx0XHRcdGNvbnN0IG5vcm1hbGl6ZWRUb0VsID0gY2xvbmVIVE1MRWxlbWVudCh0b0VsKTtcblx0XHRcdFx0XHRub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihub3JtYWxpemVkVG9FbCk7XG5cdFx0XHRcdFx0aWYgKG5vcm1hbGl6ZWRGcm9tRWwuaXNFcXVhbE5vZGUobm9ybWFsaXplZFRvRWwpKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChmcm9tRWwuaGFzQXR0cmlidXRlKFwiZGF0YS1za2lwLW1vcnBoXCIpIHx8IGZyb21FbC5pZCAmJiBmcm9tRWwuaWQgIT09IHRvRWwuaWQpIHtcblx0XHRcdFx0ZnJvbUVsLmlubmVySFRNTCA9IHRvRWwuaW5uZXJIVE1MO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGlmIChmcm9tRWwucGFyZW50RWxlbWVudD8uaGFzQXR0cmlidXRlKFwiZGF0YS1za2lwLW1vcnBoXCIpKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRyZXR1cm4gIWZyb21FbC5oYXNBdHRyaWJ1dGUoXCJkYXRhLWxpdmUtaWdub3JlXCIpO1xuXHRcdH0sXG5cdFx0YmVmb3JlTm9kZVJlbW92ZWQobm9kZSkge1xuXHRcdFx0aWYgKCEobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgcmV0dXJuIHRydWU7XG5cdFx0XHRpZiAobm9kZS5pZCAmJiBvcmlnaW5hbEVsZW1lbnRzVG9QcmVzZXJ2ZS5oYXMobm9kZS5pZCkpIHtcblx0XHRcdFx0bWFya0VsZW1lbnRBc05lZWRpbmdQb3N0TW9ycGhTd2FwKG5vZGUuaWQsIGZhbHNlKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIud2FzRWxlbWVudEFkZGVkKG5vZGUpKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRyZXR1cm4gIW5vZGUuaGFzQXR0cmlidXRlKFwiZGF0YS1saXZlLWlnbm9yZVwiKTtcblx0XHR9XG5cdH0gfSk7XG5cdG9yaWdpbmFsRWxlbWVudElkc1RvU3dhcEFmdGVyLmZvckVhY2goKGlkKSA9PiB7XG5cdFx0Y29uc3QgbmV3RWxlbWVudCA9IHJvb3RGcm9tRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcblx0XHRjb25zdCBvcmlnaW5hbEVsZW1lbnQgPSBvcmlnaW5hbEVsZW1lbnRzVG9QcmVzZXJ2ZS5nZXQoaWQpO1xuXHRcdGlmICghKG5ld0VsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgIShvcmlnaW5hbEVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgZWxlbWVudHMuXCIpO1xuXHRcdG5ld0VsZW1lbnQucmVwbGFjZVdpdGgob3JpZ2luYWxFbGVtZW50KTtcblx0fSk7XG59XG52YXIgQ2hhbmdpbmdJdGVtc1RyYWNrZXJfZGVmYXVsdCA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5jaGFuZ2VkSXRlbXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRcdHRoaXMucmVtb3ZlZEl0ZW1zID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0fVxuXHRzZXRJdGVtKGl0ZW1OYW1lLCBuZXdWYWx1ZSwgcHJldmlvdXNWYWx1ZSkge1xuXHRcdGlmICh0aGlzLnJlbW92ZWRJdGVtcy5oYXMoaXRlbU5hbWUpKSB7XG5cdFx0XHRjb25zdCByZW1vdmVkUmVjb3JkID0gdGhpcy5yZW1vdmVkSXRlbXMuZ2V0KGl0ZW1OYW1lKTtcblx0XHRcdHRoaXMucmVtb3ZlZEl0ZW1zLmRlbGV0ZShpdGVtTmFtZSk7XG5cdFx0XHRpZiAocmVtb3ZlZFJlY29yZC5vcmlnaW5hbCA9PT0gbmV3VmFsdWUpIHJldHVybjtcblx0XHR9XG5cdFx0aWYgKHRoaXMuY2hhbmdlZEl0ZW1zLmhhcyhpdGVtTmFtZSkpIHtcblx0XHRcdGNvbnN0IG9yaWdpbmFsUmVjb3JkID0gdGhpcy5jaGFuZ2VkSXRlbXMuZ2V0KGl0ZW1OYW1lKTtcblx0XHRcdGlmIChvcmlnaW5hbFJlY29yZC5vcmlnaW5hbCA9PT0gbmV3VmFsdWUpIHtcblx0XHRcdFx0dGhpcy5jaGFuZ2VkSXRlbXMuZGVsZXRlKGl0ZW1OYW1lKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jaGFuZ2VkSXRlbXMuc2V0KGl0ZW1OYW1lLCB7XG5cdFx0XHRcdG9yaWdpbmFsOiBvcmlnaW5hbFJlY29yZC5vcmlnaW5hbCxcblx0XHRcdFx0bmV3OiBuZXdWYWx1ZVxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuY2hhbmdlZEl0ZW1zLnNldChpdGVtTmFtZSwge1xuXHRcdFx0b3JpZ2luYWw6IHByZXZpb3VzVmFsdWUsXG5cdFx0XHRuZXc6IG5ld1ZhbHVlXG5cdFx0fSk7XG5cdH1cblx0cmVtb3ZlSXRlbShpdGVtTmFtZSwgY3VycmVudFZhbHVlKSB7XG5cdFx0bGV0IHRydWVPcmlnaW5hbFZhbHVlID0gY3VycmVudFZhbHVlO1xuXHRcdGlmICh0aGlzLmNoYW5nZWRJdGVtcy5oYXMoaXRlbU5hbWUpKSB7XG5cdFx0XHR0cnVlT3JpZ2luYWxWYWx1ZSA9IHRoaXMuY2hhbmdlZEl0ZW1zLmdldChpdGVtTmFtZSkub3JpZ2luYWw7XG5cdFx0XHR0aGlzLmNoYW5nZWRJdGVtcy5kZWxldGUoaXRlbU5hbWUpO1xuXHRcdFx0aWYgKHRydWVPcmlnaW5hbFZhbHVlID09PSBudWxsKSByZXR1cm47XG5cdFx0fVxuXHRcdGlmICghdGhpcy5yZW1vdmVkSXRlbXMuaGFzKGl0ZW1OYW1lKSkgdGhpcy5yZW1vdmVkSXRlbXMuc2V0KGl0ZW1OYW1lLCB7IG9yaWdpbmFsOiB0cnVlT3JpZ2luYWxWYWx1ZSB9KTtcblx0fVxuXHRnZXRDaGFuZ2VkSXRlbXMoKSB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy5jaGFuZ2VkSXRlbXMsIChbbmFtZSwgeyBuZXc6IHZhbHVlIH1dKSA9PiAoe1xuXHRcdFx0bmFtZSxcblx0XHRcdHZhbHVlXG5cdFx0fSkpO1xuXHR9XG5cdGdldFJlbW92ZWRJdGVtcygpIHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnJlbW92ZWRJdGVtcy5rZXlzKCkpO1xuXHR9XG5cdGlzRW1wdHkoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2hhbmdlZEl0ZW1zLnNpemUgPT09IDAgJiYgdGhpcy5yZW1vdmVkSXRlbXMuc2l6ZSA9PT0gMDtcblx0fVxufTtcbnZhciBFbGVtZW50Q2hhbmdlcyA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5hZGRlZENsYXNzZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuXHRcdHRoaXMucmVtb3ZlZENsYXNzZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuXHRcdHRoaXMuc3R5bGVDaGFuZ2VzID0gbmV3IENoYW5naW5nSXRlbXNUcmFja2VyX2RlZmF1bHQoKTtcblx0XHR0aGlzLmF0dHJpYnV0ZUNoYW5nZXMgPSBuZXcgQ2hhbmdpbmdJdGVtc1RyYWNrZXJfZGVmYXVsdCgpO1xuXHR9XG5cdGFkZENsYXNzKGNsYXNzTmFtZSkge1xuXHRcdGlmICghdGhpcy5yZW1vdmVkQ2xhc3Nlcy5kZWxldGUoY2xhc3NOYW1lKSkgdGhpcy5hZGRlZENsYXNzZXMuYWRkKGNsYXNzTmFtZSk7XG5cdH1cblx0cmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG5cdFx0aWYgKCF0aGlzLmFkZGVkQ2xhc3Nlcy5kZWxldGUoY2xhc3NOYW1lKSkgdGhpcy5yZW1vdmVkQ2xhc3Nlcy5hZGQoY2xhc3NOYW1lKTtcblx0fVxuXHRhZGRTdHlsZShzdHlsZU5hbWUsIG5ld1ZhbHVlLCBvcmlnaW5hbFZhbHVlKSB7XG5cdFx0dGhpcy5zdHlsZUNoYW5nZXMuc2V0SXRlbShzdHlsZU5hbWUsIG5ld1ZhbHVlLCBvcmlnaW5hbFZhbHVlKTtcblx0fVxuXHRyZW1vdmVTdHlsZShzdHlsZU5hbWUsIG9yaWdpbmFsVmFsdWUpIHtcblx0XHR0aGlzLnN0eWxlQ2hhbmdlcy5yZW1vdmVJdGVtKHN0eWxlTmFtZSwgb3JpZ2luYWxWYWx1ZSk7XG5cdH1cblx0YWRkQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIG5ld1ZhbHVlLCBvcmlnaW5hbFZhbHVlKSB7XG5cdFx0dGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLnNldEl0ZW0oYXR0cmlidXRlTmFtZSwgbmV3VmFsdWUsIG9yaWdpbmFsVmFsdWUpO1xuXHR9XG5cdHJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBvcmlnaW5hbFZhbHVlKSB7XG5cdFx0dGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLnJlbW92ZUl0ZW0oYXR0cmlidXRlTmFtZSwgb3JpZ2luYWxWYWx1ZSk7XG5cdH1cblx0Z2V0QWRkZWRDbGFzc2VzKCkge1xuXHRcdHJldHVybiBbLi4udGhpcy5hZGRlZENsYXNzZXNdO1xuXHR9XG5cdGdldFJlbW92ZWRDbGFzc2VzKCkge1xuXHRcdHJldHVybiBbLi4udGhpcy5yZW1vdmVkQ2xhc3Nlc107XG5cdH1cblx0Z2V0Q2hhbmdlZFN0eWxlcygpIHtcblx0XHRyZXR1cm4gdGhpcy5zdHlsZUNoYW5nZXMuZ2V0Q2hhbmdlZEl0ZW1zKCk7XG5cdH1cblx0Z2V0UmVtb3ZlZFN0eWxlcygpIHtcblx0XHRyZXR1cm4gdGhpcy5zdHlsZUNoYW5nZXMuZ2V0UmVtb3ZlZEl0ZW1zKCk7XG5cdH1cblx0Z2V0Q2hhbmdlZEF0dHJpYnV0ZXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5nZXRDaGFuZ2VkSXRlbXMoKTtcblx0fVxuXHRnZXRSZW1vdmVkQXR0cmlidXRlcygpIHtcblx0XHRyZXR1cm4gdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLmdldFJlbW92ZWRJdGVtcygpO1xuXHR9XG5cdGFwcGx5VG9FbGVtZW50KGVsZW1lbnQpIHtcblx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4udGhpcy5hZGRlZENsYXNzZXMpO1xuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSguLi50aGlzLnJlbW92ZWRDbGFzc2VzKTtcblx0XHR0aGlzLnN0eWxlQ2hhbmdlcy5nZXRDaGFuZ2VkSXRlbXMoKS5mb3JFYWNoKChjaGFuZ2UpID0+IHtcblx0XHRcdGlmICgvIVxccyppbXBvcnRhbnQvaS50ZXN0KGNoYW5nZS52YWx1ZSkpIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoY2hhbmdlLm5hbWUsIGNoYW5nZS52YWx1ZS5yZXBsYWNlKC8hXFxzKmltcG9ydGFudC9pLCBcIlwiKS50cmltKCksIFwiaW1wb3J0YW50XCIpO1xuXHRcdFx0ZWxzZSBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KGNoYW5nZS5uYW1lLCBjaGFuZ2UudmFsdWUpO1xuXHRcdH0pO1xuXHRcdHRoaXMuc3R5bGVDaGFuZ2VzLmdldFJlbW92ZWRJdGVtcygpLmZvckVhY2goKHN0eWxlTmFtZSkgPT4ge1xuXHRcdFx0ZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShzdHlsZU5hbWUpO1xuXHRcdH0pO1xuXHRcdHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5nZXRDaGFuZ2VkSXRlbXMoKS5mb3JFYWNoKChjaGFuZ2UpID0+IHtcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKGNoYW5nZS5uYW1lLCBjaGFuZ2UudmFsdWUpO1xuXHRcdH0pO1xuXHRcdHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5nZXRSZW1vdmVkSXRlbXMoKS5mb3JFYWNoKChhdHRyaWJ1dGVOYW1lKSA9PiB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcblx0XHR9KTtcblx0fVxuXHRpc0VtcHR5KCkge1xuXHRcdHJldHVybiB0aGlzLmFkZGVkQ2xhc3Nlcy5zaXplID09PSAwICYmIHRoaXMucmVtb3ZlZENsYXNzZXMuc2l6ZSA9PT0gMCAmJiB0aGlzLnN0eWxlQ2hhbmdlcy5pc0VtcHR5KCkgJiYgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLmlzRW1wdHkoKTtcblx0fVxufTtcbnZhciBFeHRlcm5hbE11dGF0aW9uVHJhY2tlcl9kZWZhdWx0ID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3RvcihlbGVtZW50LCBzaG91bGRUcmFja0NoYW5nZUNhbGxiYWNrKSB7XG5cdFx0dGhpcy5jaGFuZ2VkRWxlbWVudHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcblx0XHR0aGlzLmNoYW5nZWRFbGVtZW50c0NvdW50ID0gMDtcblx0XHR0aGlzLmFkZGVkRWxlbWVudHMgPSBbXTtcblx0XHR0aGlzLnJlbW92ZWRFbGVtZW50cyA9IFtdO1xuXHRcdHRoaXMuaXNTdGFydGVkID0gZmFsc2U7XG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblx0XHR0aGlzLnNob3VsZFRyYWNrQ2hhbmdlQ2FsbGJhY2sgPSBzaG91bGRUcmFja0NoYW5nZUNhbGxiYWNrO1xuXHRcdHRoaXMubXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMub25NdXRhdGlvbnMuYmluZCh0aGlzKSk7XG5cdH1cblx0c3RhcnQoKSB7XG5cdFx0aWYgKHRoaXMuaXNTdGFydGVkKSByZXR1cm47XG5cdFx0dGhpcy5tdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5lbGVtZW50LCB7XG5cdFx0XHRjaGlsZExpc3Q6IHRydWUsXG5cdFx0XHRzdWJ0cmVlOiB0cnVlLFxuXHRcdFx0YXR0cmlidXRlczogdHJ1ZSxcblx0XHRcdGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlXG5cdFx0fSk7XG5cdFx0dGhpcy5pc1N0YXJ0ZWQgPSB0cnVlO1xuXHR9XG5cdHN0b3AoKSB7XG5cdFx0aWYgKHRoaXMuaXNTdGFydGVkKSB7XG5cdFx0XHR0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXHRcdFx0dGhpcy5pc1N0YXJ0ZWQgPSBmYWxzZTtcblx0XHR9XG5cdH1cblx0Z2V0Q2hhbmdlZEVsZW1lbnQoZWxlbWVudCkge1xuXHRcdHJldHVybiB0aGlzLmNoYW5nZWRFbGVtZW50cy5oYXMoZWxlbWVudCkgPyB0aGlzLmNoYW5nZWRFbGVtZW50cy5nZXQoZWxlbWVudCkgOiBudWxsO1xuXHR9XG5cdGdldEFkZGVkRWxlbWVudHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWRkZWRFbGVtZW50cztcblx0fVxuXHR3YXNFbGVtZW50QWRkZWQoZWxlbWVudCkge1xuXHRcdHJldHVybiB0aGlzLmFkZGVkRWxlbWVudHMuaW5jbHVkZXMoZWxlbWVudCk7XG5cdH1cblx0aGFuZGxlUGVuZGluZ0NoYW5nZXMoKSB7XG5cdFx0dGhpcy5vbk11dGF0aW9ucyh0aGlzLm11dGF0aW9uT2JzZXJ2ZXIudGFrZVJlY29yZHMoKSk7XG5cdH1cblx0b25NdXRhdGlvbnMobXV0YXRpb25zKSB7XG5cdFx0Y29uc3QgaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuXHRcdGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XG5cdFx0XHRjb25zdCBlbGVtZW50ID0gbXV0YXRpb24udGFyZ2V0O1xuXHRcdFx0aWYgKCF0aGlzLnNob3VsZFRyYWNrQ2hhbmdlQ2FsbGJhY2soZWxlbWVudCkpIGNvbnRpbnVlO1xuXHRcdFx0aWYgKHRoaXMuaXNFbGVtZW50QWRkZWRCeVRyYW5zbGF0aW9uKGVsZW1lbnQpKSBjb250aW51ZTtcblx0XHRcdGxldCBpc0NoYW5nZUluQWRkZWRFbGVtZW50ID0gZmFsc2U7XG5cdFx0XHRmb3IgKGNvbnN0IGFkZGVkRWxlbWVudCBvZiB0aGlzLmFkZGVkRWxlbWVudHMpIGlmIChhZGRlZEVsZW1lbnQuY29udGFpbnMoZWxlbWVudCkpIHtcblx0XHRcdFx0aXNDaGFuZ2VJbkFkZGVkRWxlbWVudCA9IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGlzQ2hhbmdlSW5BZGRlZEVsZW1lbnQpIGNvbnRpbnVlO1xuXHRcdFx0c3dpdGNoIChtdXRhdGlvbi50eXBlKSB7XG5cdFx0XHRcdGNhc2UgXCJjaGlsZExpc3RcIjpcblx0XHRcdFx0XHR0aGlzLmhhbmRsZUNoaWxkTGlzdE11dGF0aW9uKG11dGF0aW9uKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImF0dHJpYnV0ZXNcIjpcblx0XHRcdFx0XHRpZiAoIWhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMuaGFzKGVsZW1lbnQpKSBoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zLnNldChlbGVtZW50LCBbXSk7XG5cdFx0XHRcdFx0aWYgKCFoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zLmdldChlbGVtZW50KS5pbmNsdWRlcyhtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lKSkge1xuXHRcdFx0XHRcdFx0dGhpcy5oYW5kbGVBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbik7XG5cdFx0XHRcdFx0XHRoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zLnNldChlbGVtZW50LCBbLi4uaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucy5nZXQoZWxlbWVudCksIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWVdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGhhbmRsZUNoaWxkTGlzdE11dGF0aW9uKG11dGF0aW9uKSB7XG5cdFx0bXV0YXRpb24uYWRkZWROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG5cdFx0XHRpZiAoIShub2RlIGluc3RhbmNlb2YgRWxlbWVudCkpIHJldHVybjtcblx0XHRcdGlmICh0aGlzLnJlbW92ZWRFbGVtZW50cy5pbmNsdWRlcyhub2RlKSkge1xuXHRcdFx0XHR0aGlzLnJlbW92ZWRFbGVtZW50cy5zcGxpY2UodGhpcy5yZW1vdmVkRWxlbWVudHMuaW5kZXhPZihub2RlKSwgMSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmlzRWxlbWVudEFkZGVkQnlUcmFuc2xhdGlvbihub2RlKSkgcmV0dXJuO1xuXHRcdFx0dGhpcy5hZGRlZEVsZW1lbnRzLnB1c2gobm9kZSk7XG5cdFx0fSk7XG5cdFx0bXV0YXRpb24ucmVtb3ZlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcblx0XHRcdGlmICghKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSkgcmV0dXJuO1xuXHRcdFx0aWYgKHRoaXMuYWRkZWRFbGVtZW50cy5pbmNsdWRlcyhub2RlKSkge1xuXHRcdFx0XHR0aGlzLmFkZGVkRWxlbWVudHMuc3BsaWNlKHRoaXMuYWRkZWRFbGVtZW50cy5pbmRleE9mKG5vZGUpLCAxKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5yZW1vdmVkRWxlbWVudHMucHVzaChub2RlKTtcblx0XHR9KTtcblx0fVxuXHRoYW5kbGVBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbikge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSBtdXRhdGlvbi50YXJnZXQ7XG5cdFx0aWYgKCF0aGlzLmNoYW5nZWRFbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcblx0XHRcdHRoaXMuY2hhbmdlZEVsZW1lbnRzLnNldChlbGVtZW50LCBuZXcgRWxlbWVudENoYW5nZXMoKSk7XG5cdFx0XHR0aGlzLmNoYW5nZWRFbGVtZW50c0NvdW50Kys7XG5cdFx0fVxuXHRcdGNvbnN0IGNoYW5nZWRFbGVtZW50ID0gdGhpcy5jaGFuZ2VkRWxlbWVudHMuZ2V0KGVsZW1lbnQpO1xuXHRcdHN3aXRjaCAobXV0YXRpb24uYXR0cmlidXRlTmFtZSkge1xuXHRcdFx0Y2FzZSBcImNsYXNzXCI6XG5cdFx0XHRcdHRoaXMuaGFuZGxlQ2xhc3NBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgY2hhbmdlZEVsZW1lbnQpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJzdHlsZVwiOlxuXHRcdFx0XHR0aGlzLmhhbmRsZVN0eWxlQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGNoYW5nZWRFbGVtZW50KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OiB0aGlzLmhhbmRsZUdlbmVyaWNBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgY2hhbmdlZEVsZW1lbnQpO1xuXHRcdH1cblx0XHRpZiAoY2hhbmdlZEVsZW1lbnQuaXNFbXB0eSgpKSB7XG5cdFx0XHR0aGlzLmNoYW5nZWRFbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG5cdFx0XHR0aGlzLmNoYW5nZWRFbGVtZW50c0NvdW50LS07XG5cdFx0fVxuXHR9XG5cdGhhbmRsZUNsYXNzQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGVsZW1lbnRDaGFuZ2VzKSB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IG11dGF0aW9uLnRhcmdldDtcblx0XHRjb25zdCBwcmV2aW91c1ZhbHVlcyA9IChtdXRhdGlvbi5vbGRWYWx1ZSB8fCBcIlwiKS5tYXRjaCgvKFxcUyspL2d1KSB8fCBbXTtcblx0XHRjb25zdCBuZXdWYWx1ZXMgPSBbXS5zbGljZS5jYWxsKGVsZW1lbnQuY2xhc3NMaXN0KTtcblx0XHRjb25zdCBhZGRlZFZhbHVlcyA9IG5ld1ZhbHVlcy5maWx0ZXIoKHZhbHVlKSA9PiAhcHJldmlvdXNWYWx1ZXMuaW5jbHVkZXModmFsdWUpKTtcblx0XHRjb25zdCByZW1vdmVkVmFsdWVzID0gcHJldmlvdXNWYWx1ZXMuZmlsdGVyKCh2YWx1ZSkgPT4gIW5ld1ZhbHVlcy5pbmNsdWRlcyh2YWx1ZSkpO1xuXHRcdGFkZGVkVmFsdWVzLmZvckVhY2goKHZhbHVlKSA9PiB7XG5cdFx0XHRlbGVtZW50Q2hhbmdlcy5hZGRDbGFzcyh2YWx1ZSk7XG5cdFx0fSk7XG5cdFx0cmVtb3ZlZFZhbHVlcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuXHRcdFx0ZWxlbWVudENoYW5nZXMucmVtb3ZlQ2xhc3ModmFsdWUpO1xuXHRcdH0pO1xuXHR9XG5cdGhhbmRsZVN0eWxlQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGVsZW1lbnRDaGFuZ2VzKSB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IG11dGF0aW9uLnRhcmdldDtcblx0XHRjb25zdCBwcmV2aW91c1ZhbHVlID0gbXV0YXRpb24ub2xkVmFsdWUgfHwgXCJcIjtcblx0XHRjb25zdCBwcmV2aW91c1N0eWxlcyA9IHRoaXMuZXh0cmFjdFN0eWxlcyhwcmV2aW91c1ZhbHVlKTtcblx0XHRjb25zdCBuZXdWYWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwic3R5bGVcIikgfHwgXCJcIjtcblx0XHRjb25zdCBuZXdTdHlsZXMgPSB0aGlzLmV4dHJhY3RTdHlsZXMobmV3VmFsdWUpO1xuXHRcdGNvbnN0IGFkZGVkT3JDaGFuZ2VkU3R5bGVzID0gT2JqZWN0LmtleXMobmV3U3R5bGVzKS5maWx0ZXIoKGtleSkgPT4gcHJldmlvdXNTdHlsZXNba2V5XSA9PT0gdm9pZCAwIHx8IHByZXZpb3VzU3R5bGVzW2tleV0gIT09IG5ld1N0eWxlc1trZXldKTtcblx0XHRjb25zdCByZW1vdmVkU3R5bGVzID0gT2JqZWN0LmtleXMocHJldmlvdXNTdHlsZXMpLmZpbHRlcigoa2V5KSA9PiAhbmV3U3R5bGVzW2tleV0pO1xuXHRcdGFkZGVkT3JDaGFuZ2VkU3R5bGVzLmZvckVhY2goKHN0eWxlKSA9PiB7XG5cdFx0XHRlbGVtZW50Q2hhbmdlcy5hZGRTdHlsZShzdHlsZSwgbmV3U3R5bGVzW3N0eWxlXSwgcHJldmlvdXNTdHlsZXNbc3R5bGVdID09PSB2b2lkIDAgPyBudWxsIDogcHJldmlvdXNTdHlsZXNbc3R5bGVdKTtcblx0XHR9KTtcblx0XHRyZW1vdmVkU3R5bGVzLmZvckVhY2goKHN0eWxlKSA9PiB7XG5cdFx0XHRlbGVtZW50Q2hhbmdlcy5yZW1vdmVTdHlsZShzdHlsZSwgcHJldmlvdXNTdHlsZXNbc3R5bGVdKTtcblx0XHR9KTtcblx0fVxuXHRoYW5kbGVHZW5lcmljQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGVsZW1lbnRDaGFuZ2VzKSB7XG5cdFx0Y29uc3QgYXR0cmlidXRlTmFtZSA9IG11dGF0aW9uLmF0dHJpYnV0ZU5hbWU7XG5cdFx0Y29uc3QgZWxlbWVudCA9IG11dGF0aW9uLnRhcmdldDtcblx0XHRsZXQgb2xkVmFsdWUgPSBtdXRhdGlvbi5vbGRWYWx1ZTtcblx0XHRsZXQgbmV3VmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcblx0XHRpZiAob2xkVmFsdWUgPT09IGF0dHJpYnV0ZU5hbWUpIG9sZFZhbHVlID0gXCJcIjtcblx0XHRpZiAobmV3VmFsdWUgPT09IGF0dHJpYnV0ZU5hbWUpIG5ld1ZhbHVlID0gXCJcIjtcblx0XHRpZiAoIWVsZW1lbnQuaGFzQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpKSB7XG5cdFx0XHRpZiAob2xkVmFsdWUgPT09IG51bGwpIHJldHVybjtcblx0XHRcdGVsZW1lbnRDaGFuZ2VzLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBtdXRhdGlvbi5vbGRWYWx1ZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChuZXdWYWx1ZSA9PT0gb2xkVmFsdWUpIHJldHVybjtcblx0XHRlbGVtZW50Q2hhbmdlcy5hZGRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSksIG11dGF0aW9uLm9sZFZhbHVlKTtcblx0fVxuXHRleHRyYWN0U3R5bGVzKHN0eWxlcykge1xuXHRcdGNvbnN0IHN0eWxlT2JqZWN0ID0ge307XG5cdFx0c3R5bGVzLnNwbGl0KFwiO1wiKS5mb3JFYWNoKChzdHlsZSkgPT4ge1xuXHRcdFx0Y29uc3QgcGFydHMgPSBzdHlsZS5zcGxpdChcIjpcIik7XG5cdFx0XHRpZiAocGFydHMubGVuZ3RoID09PSAxKSByZXR1cm47XG5cdFx0XHRjb25zdCBwcm9wZXJ0eSA9IHBhcnRzWzBdLnRyaW0oKTtcblx0XHRcdHN0eWxlT2JqZWN0W3Byb3BlcnR5XSA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oXCI6XCIpLnRyaW0oKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gc3R5bGVPYmplY3Q7XG5cdH1cblx0aXNFbGVtZW50QWRkZWRCeVRyYW5zbGF0aW9uKGVsZW1lbnQpIHtcblx0XHRyZXR1cm4gZWxlbWVudC50YWdOYW1lID09PSBcIkZPTlRcIiAmJiBlbGVtZW50LmdldEF0dHJpYnV0ZShcInN0eWxlXCIpID09PSBcInZlcnRpY2FsLWFsaWduOiBpbmhlcml0O1wiO1xuXHR9XG59O1xudmFyIFVuc3luY2VkSW5wdXRzVHJhY2tlcl9kZWZhdWx0ID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcihjb21wb25lbnQsIG1vZGVsRWxlbWVudFJlc29sdmVyKSB7XG5cdFx0dGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMgPSBbe1xuXHRcdFx0ZXZlbnQ6IFwiaW5wdXRcIixcblx0XHRcdGNhbGxiYWNrOiAoZXZlbnQpID0+IHRoaXMuaGFuZGxlSW5wdXRFdmVudChldmVudClcblx0XHR9XTtcblx0XHR0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcblx0XHR0aGlzLm1vZGVsRWxlbWVudFJlc29sdmVyID0gbW9kZWxFbGVtZW50UmVzb2x2ZXI7XG5cdFx0dGhpcy51bnN5bmNlZElucHV0cyA9IG5ldyBVbnN5bmNlZElucHV0Q29udGFpbmVyKCk7XG5cdH1cblx0YWN0aXZhdGUoKSB7XG5cdFx0dGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoeyBldmVudCwgY2FsbGJhY2sgfSkgPT4ge1xuXHRcdFx0dGhpcy5jb21wb25lbnQuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG5cdFx0fSk7XG5cdH1cblx0ZGVhY3RpdmF0ZSgpIHtcblx0XHR0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycy5mb3JFYWNoKCh7IGV2ZW50LCBjYWxsYmFjayB9KSA9PiB7XG5cdFx0XHR0aGlzLmNvbXBvbmVudC5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcblx0XHR9KTtcblx0fVxuXHRtYXJrTW9kZWxBc1N5bmNlZChtb2RlbE5hbWUpIHtcblx0XHR0aGlzLnVuc3luY2VkSW5wdXRzLm1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSk7XG5cdH1cblx0aGFuZGxlSW5wdXRFdmVudChldmVudCkge1xuXHRcdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblx0XHRpZiAoIXRhcmdldCkgcmV0dXJuO1xuXHRcdHRoaXMudXBkYXRlTW9kZWxGcm9tRWxlbWVudCh0YXJnZXQpO1xuXHR9XG5cdHVwZGF0ZU1vZGVsRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuXHRcdGlmICghZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQoZWxlbWVudCwgdGhpcy5jb21wb25lbnQpKSByZXR1cm47XG5cdFx0aWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IHVwZGF0ZSBtb2RlbCBmb3Igbm9uIEhUTUxFbGVtZW50XCIpO1xuXHRcdGNvbnN0IG1vZGVsTmFtZSA9IHRoaXMubW9kZWxFbGVtZW50UmVzb2x2ZXIuZ2V0TW9kZWxOYW1lKGVsZW1lbnQpO1xuXHRcdHRoaXMudW5zeW5jZWRJbnB1dHMuYWRkKGVsZW1lbnQsIG1vZGVsTmFtZSk7XG5cdH1cblx0Z2V0VW5zeW5jZWRJbnB1dHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMudW5zeW5jZWRJbnB1dHMuYWxsVW5zeW5jZWRJbnB1dHMoKTtcblx0fVxuXHRnZXRVbnN5bmNlZE1vZGVscygpIHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnVuc3luY2VkSW5wdXRzLmdldFVuc3luY2VkTW9kZWxOYW1lcygpKTtcblx0fVxuXHRyZXNldFVuc3luY2VkRmllbGRzKCkge1xuXHRcdHRoaXMudW5zeW5jZWRJbnB1dHMucmVzZXRVbnN5bmNlZEZpZWxkcygpO1xuXHR9XG59O1xudmFyIFVuc3luY2VkSW5wdXRDb250YWluZXIgPSBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMudW5zeW5jZWROb25Nb2RlbEZpZWxkcyA9IFtdO1xuXHRcdHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzID0gW107XG5cdFx0dGhpcy51bnN5bmNlZE1vZGVsRmllbGRzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0fVxuXHRhZGQoZWxlbWVudCwgbW9kZWxOYW1lID0gbnVsbCkge1xuXHRcdGlmIChtb2RlbE5hbWUpIHtcblx0XHRcdHRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcy5zZXQobW9kZWxOYW1lLCBlbGVtZW50KTtcblx0XHRcdGlmICghdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMuaW5jbHVkZXMobW9kZWxOYW1lKSkgdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMucHVzaChtb2RlbE5hbWUpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLnVuc3luY2VkTm9uTW9kZWxGaWVsZHMucHVzaChlbGVtZW50KTtcblx0fVxuXHRyZXNldFVuc3luY2VkRmllbGRzKCkge1xuXHRcdHRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG5cdFx0XHRpZiAoIXRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLmluY2x1ZGVzKGtleSkpIHRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcy5kZWxldGUoa2V5KTtcblx0XHR9KTtcblx0fVxuXHRhbGxVbnN5bmNlZElucHV0cygpIHtcblx0XHRyZXR1cm4gWy4uLnRoaXMudW5zeW5jZWROb25Nb2RlbEZpZWxkcywgLi4udGhpcy51bnN5bmNlZE1vZGVsRmllbGRzLnZhbHVlcygpXTtcblx0fVxuXHRtYXJrTW9kZWxBc1N5bmNlZChtb2RlbE5hbWUpIHtcblx0XHRjb25zdCBpbmRleCA9IHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLmluZGV4T2YobW9kZWxOYW1lKTtcblx0XHRpZiAoaW5kZXggIT09IC0xKSB0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHR9XG5cdGdldFVuc3luY2VkTW9kZWxOYW1lcygpIHtcblx0XHRyZXR1cm4gdGhpcy51bnN5bmNlZE1vZGVsTmFtZXM7XG5cdH1cbn07XG5mdW5jdGlvbiBnZXREZWVwRGF0YShkYXRhLCBwcm9wZXJ0eVBhdGgpIHtcblx0Y29uc3QgeyBjdXJyZW50TGV2ZWxEYXRhLCBmaW5hbEtleSB9ID0gcGFyc2VEZWVwRGF0YShkYXRhLCBwcm9wZXJ0eVBhdGgpO1xuXHRpZiAoY3VycmVudExldmVsRGF0YSA9PT0gdm9pZCAwKSByZXR1cm47XG5cdHJldHVybiBjdXJyZW50TGV2ZWxEYXRhW2ZpbmFsS2V5XTtcbn1cbmNvbnN0IHBhcnNlRGVlcERhdGEgPSAoZGF0YSwgcHJvcGVydHlQYXRoKSA9PiB7XG5cdGNvbnN0IGZpbmFsRGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXHRsZXQgY3VycmVudExldmVsRGF0YSA9IGZpbmFsRGF0YTtcblx0Y29uc3QgcGFydHMgPSBwcm9wZXJ0eVBhdGguc3BsaXQoXCIuXCIpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aCAtIDE7IGkrKykgY3VycmVudExldmVsRGF0YSA9IGN1cnJlbnRMZXZlbERhdGFbcGFydHNbaV1dO1xuXHRjb25zdCBmaW5hbEtleSA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdO1xuXHRyZXR1cm4ge1xuXHRcdGN1cnJlbnRMZXZlbERhdGEsXG5cdFx0ZmluYWxEYXRhLFxuXHRcdGZpbmFsS2V5LFxuXHRcdHBhcnRzXG5cdH07XG59O1xudmFyIFZhbHVlU3RvcmVfZGVmYXVsdCA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHR0aGlzLnByb3BzID0ge307XG5cdFx0dGhpcy5kaXJ0eVByb3BzID0ge307XG5cdFx0dGhpcy5wZW5kaW5nUHJvcHMgPSB7fTtcblx0XHR0aGlzLnVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQgPSB7fTtcblx0XHR0aGlzLnByb3BzID0gcHJvcHM7XG5cdH1cblx0Z2V0KG5hbWUpIHtcblx0XHRjb25zdCBub3JtYWxpemVkTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShuYW1lKTtcblx0XHRpZiAodGhpcy5kaXJ0eVByb3BzW25vcm1hbGl6ZWROYW1lXSAhPT0gdm9pZCAwKSByZXR1cm4gdGhpcy5kaXJ0eVByb3BzW25vcm1hbGl6ZWROYW1lXTtcblx0XHRpZiAodGhpcy5wZW5kaW5nUHJvcHNbbm9ybWFsaXplZE5hbWVdICE9PSB2b2lkIDApIHJldHVybiB0aGlzLnBlbmRpbmdQcm9wc1tub3JtYWxpemVkTmFtZV07XG5cdFx0aWYgKHRoaXMucHJvcHNbbm9ybWFsaXplZE5hbWVdICE9PSB2b2lkIDApIHJldHVybiB0aGlzLnByb3BzW25vcm1hbGl6ZWROYW1lXTtcblx0XHRyZXR1cm4gZ2V0RGVlcERhdGEodGhpcy5wcm9wcywgbm9ybWFsaXplZE5hbWUpO1xuXHR9XG5cdGhhcyhuYW1lKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0KG5hbWUpICE9PSB2b2lkIDA7XG5cdH1cblx0c2V0KG5hbWUsIHZhbHVlKSB7XG5cdFx0Y29uc3Qgbm9ybWFsaXplZE5hbWUgPSBub3JtYWxpemVNb2RlbE5hbWUobmFtZSk7XG5cdFx0aWYgKHRoaXMuZ2V0KG5vcm1hbGl6ZWROYW1lKSA9PT0gdmFsdWUpIHJldHVybiBmYWxzZTtcblx0XHR0aGlzLmRpcnR5UHJvcHNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0Z2V0T3JpZ2luYWxQcm9wcygpIHtcblx0XHRyZXR1cm4geyAuLi50aGlzLnByb3BzIH07XG5cdH1cblx0Z2V0RGlydHlQcm9wcygpIHtcblx0XHRyZXR1cm4geyAuLi50aGlzLmRpcnR5UHJvcHMgfTtcblx0fVxuXHRnZXRVcGRhdGVkUHJvcHNGcm9tUGFyZW50KCkge1xuXHRcdHJldHVybiB7IC4uLnRoaXMudXBkYXRlZFByb3BzRnJvbVBhcmVudCB9O1xuXHR9XG5cdGZsdXNoRGlydHlQcm9wc1RvUGVuZGluZygpIHtcblx0XHR0aGlzLnBlbmRpbmdQcm9wcyA9IHsgLi4udGhpcy5kaXJ0eVByb3BzIH07XG5cdFx0dGhpcy5kaXJ0eVByb3BzID0ge307XG5cdH1cblx0cmVpbml0aWFsaXplQWxsUHJvcHMocHJvcHMpIHtcblx0XHR0aGlzLnByb3BzID0gcHJvcHM7XG5cdFx0dGhpcy51cGRhdGVkUHJvcHNGcm9tUGFyZW50ID0ge307XG5cdFx0dGhpcy5wZW5kaW5nUHJvcHMgPSB7fTtcblx0fVxuXHRwdXNoUGVuZGluZ1Byb3BzQmFja1RvRGlydHkoKSB7XG5cdFx0dGhpcy5kaXJ0eVByb3BzID0ge1xuXHRcdFx0Li4udGhpcy5wZW5kaW5nUHJvcHMsXG5cdFx0XHQuLi50aGlzLmRpcnR5UHJvcHNcblx0XHR9O1xuXHRcdHRoaXMucGVuZGluZ1Byb3BzID0ge307XG5cdH1cblx0c3RvcmVOZXdQcm9wc0Zyb21QYXJlbnQocHJvcHMpIHtcblx0XHRsZXQgY2hhbmdlZCA9IGZhbHNlO1xuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHByb3BzKSkgaWYgKHRoaXMuZ2V0KGtleSkgIT09IHZhbHVlKSBjaGFuZ2VkID0gdHJ1ZTtcblx0XHRpZiAoY2hhbmdlZCkgdGhpcy51cGRhdGVkUHJvcHNGcm9tUGFyZW50ID0gcHJvcHM7XG5cdFx0cmV0dXJuIGNoYW5nZWQ7XG5cdH1cbn07XG52YXIgQ29tcG9uZW50ID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3RvcihlbGVtZW50LCBuYW1lLCBwcm9wcywgbGlzdGVuZXJzLCBpZCwgYmFja2VuZCwgZWxlbWVudERyaXZlcikge1xuXHRcdHRoaXMuZmluZ2VycHJpbnQgPSBcIlwiO1xuXHRcdHRoaXMuZGVmYXVsdERlYm91bmNlID0gMTUwO1xuXHRcdHRoaXMuYmFja2VuZFJlcXVlc3QgPSBudWxsO1xuXHRcdHRoaXMucGVuZGluZ0FjdGlvbnMgPSBbXTtcblx0XHR0aGlzLnBlbmRpbmdGaWxlcyA9IHt9O1xuXHRcdHRoaXMuaXNSZXF1ZXN0UGVuZGluZyA9IGZhbHNlO1xuXHRcdHRoaXMucmVxdWVzdERlYm91bmNlVGltZW91dCA9IG51bGw7XG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuYmFja2VuZCA9IGJhY2tlbmQ7XG5cdFx0dGhpcy5lbGVtZW50RHJpdmVyID0gZWxlbWVudERyaXZlcjtcblx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0dGhpcy5saXN0ZW5lcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRcdGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuXHRcdFx0aWYgKCF0aGlzLmxpc3RlbmVycy5oYXMobGlzdGVuZXIuZXZlbnQpKSB0aGlzLmxpc3RlbmVycy5zZXQobGlzdGVuZXIuZXZlbnQsIFtdKTtcblx0XHRcdHRoaXMubGlzdGVuZXJzLmdldChsaXN0ZW5lci5ldmVudCk/LnB1c2gobGlzdGVuZXIuYWN0aW9uKTtcblx0XHR9KTtcblx0XHR0aGlzLnZhbHVlU3RvcmUgPSBuZXcgVmFsdWVTdG9yZV9kZWZhdWx0KHByb3BzKTtcblx0XHR0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlciA9IG5ldyBVbnN5bmNlZElucHV0c1RyYWNrZXJfZGVmYXVsdCh0aGlzLCBlbGVtZW50RHJpdmVyKTtcblx0XHR0aGlzLmhvb2tzID0gbmV3IEhvb2tNYW5hZ2VyX2RlZmF1bHQoKTtcblx0XHR0aGlzLnJlc2V0UHJvbWlzZSgpO1xuXHRcdHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIgPSBuZXcgRXh0ZXJuYWxNdXRhdGlvblRyYWNrZXJfZGVmYXVsdCh0aGlzLmVsZW1lbnQsIChlbGVtZW50KSA9PiBlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCB0aGlzKSk7XG5cdFx0dGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlci5zdGFydCgpO1xuXHR9XG5cdGFkZFBsdWdpbihwbHVnaW4pIHtcblx0XHRwbHVnaW4uYXR0YWNoVG9Db21wb25lbnQodGhpcyk7XG5cdH1cblx0Y29ubmVjdCgpIHtcblx0XHRyZWdpc3RlckNvbXBvbmVudCh0aGlzKTtcblx0XHR0aGlzLmhvb2tzLnRyaWdnZXJIb29rKFwiY29ubmVjdFwiLCB0aGlzKTtcblx0XHR0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5hY3RpdmF0ZSgpO1xuXHRcdHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuc3RhcnQoKTtcblx0fVxuXHRkaXNjb25uZWN0KCkge1xuXHRcdHVucmVnaXN0ZXJDb21wb25lbnQodGhpcyk7XG5cdFx0dGhpcy5ob29rcy50cmlnZ2VySG9vayhcImRpc2Nvbm5lY3RcIiwgdGhpcyk7XG5cdFx0dGhpcy5jbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQoKTtcblx0XHR0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5kZWFjdGl2YXRlKCk7XG5cdFx0dGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlci5zdG9wKCk7XG5cdH1cblx0b24oaG9va05hbWUsIGNhbGxiYWNrKSB7XG5cdFx0dGhpcy5ob29rcy5yZWdpc3Rlcihob29rTmFtZSwgY2FsbGJhY2spO1xuXHR9XG5cdG9mZihob29rTmFtZSwgY2FsbGJhY2spIHtcblx0XHR0aGlzLmhvb2tzLnVucmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKTtcblx0fVxuXHRzZXQobW9kZWwsIHZhbHVlLCByZVJlbmRlciA9IGZhbHNlLCBkZWJvdW5jZSA9IGZhbHNlKSB7XG5cdFx0Y29uc3QgcHJvbWlzZSA9IHRoaXMubmV4dFJlcXVlc3RQcm9taXNlO1xuXHRcdGNvbnN0IG1vZGVsTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShtb2RlbCk7XG5cdFx0aWYgKCF0aGlzLnZhbHVlU3RvcmUuaGFzKG1vZGVsTmFtZSkpIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBtb2RlbCBuYW1lIFwiJHttb2RlbH1cIi5gKTtcblx0XHRjb25zdCBpc0NoYW5nZWQgPSB0aGlzLnZhbHVlU3RvcmUuc2V0KG1vZGVsTmFtZSwgdmFsdWUpO1xuXHRcdHRoaXMuaG9va3MudHJpZ2dlckhvb2soXCJtb2RlbDpzZXRcIiwgbW9kZWwsIHZhbHVlLCB0aGlzKTtcblx0XHR0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5tYXJrTW9kZWxBc1N5bmNlZChtb2RlbE5hbWUpO1xuXHRcdGlmIChyZVJlbmRlciAmJiBpc0NoYW5nZWQpIHRoaXMuZGVib3VuY2VkU3RhcnRSZXF1ZXN0KGRlYm91bmNlKTtcblx0XHRyZXR1cm4gcHJvbWlzZTtcblx0fVxuXHRnZXREYXRhKG1vZGVsKSB7XG5cdFx0Y29uc3QgbW9kZWxOYW1lID0gbm9ybWFsaXplTW9kZWxOYW1lKG1vZGVsKTtcblx0XHRpZiAoIXRoaXMudmFsdWVTdG9yZS5oYXMobW9kZWxOYW1lKSkgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIG1vZGVsIFwiJHttb2RlbH1cIi5gKTtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZVN0b3JlLmdldChtb2RlbE5hbWUpO1xuXHR9XG5cdGFjdGlvbihuYW1lLCBhcmdzID0ge30sIGRlYm91bmNlID0gZmFsc2UpIHtcblx0XHRjb25zdCBwcm9taXNlID0gdGhpcy5uZXh0UmVxdWVzdFByb21pc2U7XG5cdFx0dGhpcy5wZW5kaW5nQWN0aW9ucy5wdXNoKHtcblx0XHRcdG5hbWUsXG5cdFx0XHRhcmdzXG5cdFx0fSk7XG5cdFx0dGhpcy5kZWJvdW5jZWRTdGFydFJlcXVlc3QoZGVib3VuY2UpO1xuXHRcdHJldHVybiBwcm9taXNlO1xuXHR9XG5cdGZpbGVzKGtleSwgaW5wdXQpIHtcblx0XHR0aGlzLnBlbmRpbmdGaWxlc1trZXldID0gaW5wdXQ7XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHByb21pc2UgPSB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZTtcblx0XHR0aGlzLnRyeVN0YXJ0aW5nUmVxdWVzdCgpO1xuXHRcdHJldHVybiBwcm9taXNlO1xuXHR9XG5cdGdldFVuc3luY2VkTW9kZWxzKCkge1xuXHRcdHJldHVybiB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5nZXRVbnN5bmNlZE1vZGVscygpO1xuXHR9XG5cdGVtaXQobmFtZSwgZGF0YSwgb25seU1hdGNoaW5nQ29tcG9uZW50c05hbWVkID0gbnVsbCkge1xuXHRcdHRoaXMucGVyZm9ybUVtaXQobmFtZSwgZGF0YSwgZmFsc2UsIG9ubHlNYXRjaGluZ0NvbXBvbmVudHNOYW1lZCk7XG5cdH1cblx0ZW1pdFVwKG5hbWUsIGRhdGEsIG9ubHlNYXRjaGluZ0NvbXBvbmVudHNOYW1lZCA9IG51bGwpIHtcblx0XHR0aGlzLnBlcmZvcm1FbWl0KG5hbWUsIGRhdGEsIHRydWUsIG9ubHlNYXRjaGluZ0NvbXBvbmVudHNOYW1lZCk7XG5cdH1cblx0ZW1pdFNlbGYobmFtZSwgZGF0YSkge1xuXHRcdHRoaXMuZG9FbWl0KG5hbWUsIGRhdGEpO1xuXHR9XG5cdHBlcmZvcm1FbWl0KG5hbWUsIGRhdGEsIGVtaXRVcCwgbWF0Y2hpbmdOYW1lKSB7XG5cdFx0ZmluZENvbXBvbmVudHModGhpcywgZW1pdFVwLCBtYXRjaGluZ05hbWUpLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xuXHRcdFx0Y29tcG9uZW50LmRvRW1pdChuYW1lLCBkYXRhKTtcblx0XHR9KTtcblx0fVxuXHRkb0VtaXQobmFtZSwgZGF0YSkge1xuXHRcdGlmICghdGhpcy5saXN0ZW5lcnMuaGFzKG5hbWUpKSByZXR1cm47XG5cdFx0KHRoaXMubGlzdGVuZXJzLmdldChuYW1lKSB8fCBbXSkuZm9yRWFjaCgoYWN0aW9uKSA9PiB7XG5cdFx0XHR0aGlzLmFjdGlvbihhY3Rpb24sIGRhdGEsIDEpO1xuXHRcdH0pO1xuXHR9XG5cdGlzVHVyYm9FbmFibGVkKCkge1xuXHRcdHJldHVybiB0eXBlb2YgVHVyYm8gIT09IFwidW5kZWZpbmVkXCIgJiYgIXRoaXMuZWxlbWVudC5jbG9zZXN0KFwiW2RhdGEtdHVyYm89XFxcImZhbHNlXFxcIl1cIik7XG5cdH1cblx0dHJ5U3RhcnRpbmdSZXF1ZXN0KCkge1xuXHRcdGlmICghdGhpcy5iYWNrZW5kUmVxdWVzdCkge1xuXHRcdFx0dGhpcy5wZXJmb3JtUmVxdWVzdCgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLmlzUmVxdWVzdFBlbmRpbmcgPSB0cnVlO1xuXHR9XG5cdHBlcmZvcm1SZXF1ZXN0KCkge1xuXHRcdGNvbnN0IHRoaXNQcm9taXNlUmVzb2x2ZSA9IHRoaXMubmV4dFJlcXVlc3RQcm9taXNlUmVzb2x2ZTtcblx0XHR0aGlzLnJlc2V0UHJvbWlzZSgpO1xuXHRcdHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLnJlc2V0VW5zeW5jZWRGaWVsZHMoKTtcblx0XHRjb25zdCBmaWxlc1RvU2VuZCA9IHt9O1xuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMucGVuZGluZ0ZpbGVzKSkgaWYgKHZhbHVlLmZpbGVzKSBmaWxlc1RvU2VuZFtrZXldID0gdmFsdWUuZmlsZXM7XG5cdFx0Y29uc3QgcmVxdWVzdENvbmZpZyA9IHtcblx0XHRcdHByb3BzOiB0aGlzLnZhbHVlU3RvcmUuZ2V0T3JpZ2luYWxQcm9wcygpLFxuXHRcdFx0YWN0aW9uczogdGhpcy5wZW5kaW5nQWN0aW9ucyxcblx0XHRcdHVwZGF0ZWQ6IHRoaXMudmFsdWVTdG9yZS5nZXREaXJ0eVByb3BzKCksXG5cdFx0XHRjaGlsZHJlbjoge30sXG5cdFx0XHR1cGRhdGVkUHJvcHNGcm9tUGFyZW50OiB0aGlzLnZhbHVlU3RvcmUuZ2V0VXBkYXRlZFByb3BzRnJvbVBhcmVudCgpLFxuXHRcdFx0ZmlsZXM6IGZpbGVzVG9TZW5kXG5cdFx0fTtcblx0XHR0aGlzLmhvb2tzLnRyaWdnZXJIb29rKFwicmVxdWVzdDpzdGFydGVkXCIsIHJlcXVlc3RDb25maWcpO1xuXHRcdHRoaXMuYmFja2VuZFJlcXVlc3QgPSB0aGlzLmJhY2tlbmQubWFrZVJlcXVlc3QocmVxdWVzdENvbmZpZy5wcm9wcywgcmVxdWVzdENvbmZpZy5hY3Rpb25zLCByZXF1ZXN0Q29uZmlnLnVwZGF0ZWQsIHJlcXVlc3RDb25maWcuY2hpbGRyZW4sIHJlcXVlc3RDb25maWcudXBkYXRlZFByb3BzRnJvbVBhcmVudCwgcmVxdWVzdENvbmZpZy5maWxlcyk7XG5cdFx0dGhpcy5ob29rcy50cmlnZ2VySG9vayhcImxvYWRpbmcuc3RhdGU6c3RhcnRlZFwiLCB0aGlzLmVsZW1lbnQsIHRoaXMuYmFja2VuZFJlcXVlc3QpO1xuXHRcdHRoaXMucGVuZGluZ0FjdGlvbnMgPSBbXTtcblx0XHR0aGlzLnZhbHVlU3RvcmUuZmx1c2hEaXJ0eVByb3BzVG9QZW5kaW5nKCk7XG5cdFx0dGhpcy5pc1JlcXVlc3RQZW5kaW5nID0gZmFsc2U7XG5cdFx0dGhpcy5iYWNrZW5kUmVxdWVzdC5wcm9taXNlLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRjb25zdCBiYWNrZW5kUmVzcG9uc2UgPSBuZXcgQmFja2VuZFJlc3BvbnNlX2RlZmF1bHQocmVzcG9uc2UpO1xuXHRcdFx0Y29uc3QgaHRtbCA9IGF3YWl0IGJhY2tlbmRSZXNwb25zZS5nZXRCb2R5KCk7XG5cdFx0XHRmb3IgKGNvbnN0IGlucHV0IG9mIE9iamVjdC52YWx1ZXModGhpcy5wZW5kaW5nRmlsZXMpKSBpbnB1dC52YWx1ZSA9IFwiXCI7XG5cdFx0XHRjb25zdCBoZWFkZXJzID0gYmFja2VuZFJlc3BvbnNlLnJlc3BvbnNlLmhlYWRlcnM7XG5cdFx0XHRpZiAoIWhlYWRlcnMuZ2V0KFwiQ29udGVudC1UeXBlXCIpPy5pbmNsdWRlcyhcImFwcGxpY2F0aW9uL3ZuZC5saXZlLWNvbXBvbmVudCtodG1sXCIpICYmICFoZWFkZXJzLmdldChcIlgtTGl2ZS1SZWRpcmVjdFwiKSkge1xuXHRcdFx0XHRjb25zdCBjb250cm9scyA9IHsgZGlzcGxheUVycm9yOiB0cnVlIH07XG5cdFx0XHRcdHRoaXMudmFsdWVTdG9yZS5wdXNoUGVuZGluZ1Byb3BzQmFja1RvRGlydHkoKTtcblx0XHRcdFx0dGhpcy5ob29rcy50cmlnZ2VySG9vayhcInJlc3BvbnNlOmVycm9yXCIsIGJhY2tlbmRSZXNwb25zZSwgY29udHJvbHMpO1xuXHRcdFx0XHRpZiAoY29udHJvbHMuZGlzcGxheUVycm9yKSB0aGlzLnJlbmRlckVycm9yKGh0bWwpO1xuXHRcdFx0XHR0aGlzLmJhY2tlbmRSZXF1ZXN0ID0gbnVsbDtcblx0XHRcdFx0dGhpc1Byb21pc2VSZXNvbHZlKGJhY2tlbmRSZXNwb25zZSk7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGxpdmVVcmwgPSBiYWNrZW5kUmVzcG9uc2UuZ2V0TGl2ZVVybCgpO1xuXHRcdFx0aWYgKGxpdmVVcmwpIGhpc3RvcnkucmVwbGFjZVN0YXRlKGhpc3Rvcnkuc3RhdGUsIFwiXCIsIG5ldyBVUkwobGl2ZVVybCArIHdpbmRvdy5sb2NhdGlvbi5oYXNoLCB3aW5kb3cubG9jYXRpb24ub3JpZ2luKSk7XG5cdFx0XHR0aGlzLnByb2Nlc3NSZXJlbmRlcihodG1sLCBiYWNrZW5kUmVzcG9uc2UpO1xuXHRcdFx0dGhpcy5iYWNrZW5kUmVxdWVzdCA9IG51bGw7XG5cdFx0XHR0aGlzUHJvbWlzZVJlc29sdmUoYmFja2VuZFJlc3BvbnNlKTtcblx0XHRcdGlmICh0aGlzLmlzUmVxdWVzdFBlbmRpbmcpIHtcblx0XHRcdFx0dGhpcy5pc1JlcXVlc3RQZW5kaW5nID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMucGVyZm9ybVJlcXVlc3QoKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXNwb25zZTtcblx0XHR9KTtcblx0fVxuXHRwcm9jZXNzUmVyZW5kZXIoaHRtbCwgYmFja2VuZFJlc3BvbnNlKSB7XG5cdFx0Y29uc3QgY29udHJvbHMgPSB7IHNob3VsZFJlbmRlcjogdHJ1ZSB9O1xuXHRcdHRoaXMuaG9va3MudHJpZ2dlckhvb2soXCJyZW5kZXI6c3RhcnRlZFwiLCBodG1sLCBiYWNrZW5kUmVzcG9uc2UsIGNvbnRyb2xzKTtcblx0XHRpZiAoIWNvbnRyb2xzLnNob3VsZFJlbmRlcikgcmV0dXJuO1xuXHRcdGlmIChiYWNrZW5kUmVzcG9uc2UucmVzcG9uc2UuaGVhZGVycy5nZXQoXCJMb2NhdGlvblwiKSkge1xuXHRcdFx0aWYgKHRoaXMuaXNUdXJib0VuYWJsZWQoKSkgVHVyYm8udmlzaXQoYmFja2VuZFJlc3BvbnNlLnJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiTG9jYXRpb25cIikpO1xuXHRcdFx0ZWxzZSB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzLmdldChcIkxvY2F0aW9uXCIpIHx8IFwiXCI7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuaG9va3MudHJpZ2dlckhvb2soXCJsb2FkaW5nLnN0YXRlOmZpbmlzaGVkXCIsIHRoaXMuZWxlbWVudCk7XG5cdFx0Y29uc3QgbW9kaWZpZWRNb2RlbFZhbHVlcyA9IHt9O1xuXHRcdE9iamVjdC5rZXlzKHRoaXMudmFsdWVTdG9yZS5nZXREaXJ0eVByb3BzKCkpLmZvckVhY2goKG1vZGVsTmFtZSkgPT4ge1xuXHRcdFx0bW9kaWZpZWRNb2RlbFZhbHVlc1ttb2RlbE5hbWVdID0gdGhpcy52YWx1ZVN0b3JlLmdldChtb2RlbE5hbWUpO1xuXHRcdH0pO1xuXHRcdGxldCBuZXdFbGVtZW50O1xuXHRcdHRyeSB7XG5cdFx0XHRuZXdFbGVtZW50ID0gaHRtbFRvRWxlbWVudChodG1sKTtcblx0XHRcdGlmICghbmV3RWxlbWVudC5tYXRjaGVzKFwiW2RhdGEtY29udHJvbGxlcn49bGl2ZV1cIikpIHRocm93IG5ldyBFcnJvcihcIkEgbGl2ZSBjb21wb25lbnQgdGVtcGxhdGUgbXVzdCBjb250YWluIGEgc2luZ2xlIHJvb3QgY29udHJvbGxlciBlbGVtZW50LlwiKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcihgVGhlcmUgd2FzIGEgcHJvYmxlbSB3aXRoIHRoZSAnJHt0aGlzLm5hbWV9JyBjb21wb25lbnQgSFRNTCByZXR1cm5lZDpgLCB7IGlkOiB0aGlzLmlkIH0pO1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fVxuXHRcdHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuaGFuZGxlUGVuZGluZ0NoYW5nZXMoKTtcblx0XHR0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0b3AoKTtcblx0XHRleGVjdXRlTW9ycGhkb20odGhpcy5lbGVtZW50LCBuZXdFbGVtZW50LCB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5nZXRVbnN5bmNlZElucHV0cygpLCAoZWxlbWVudCkgPT4gZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCB0aGlzLnZhbHVlU3RvcmUpLCB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyKTtcblx0XHR0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0YXJ0KCk7XG5cdFx0Y29uc3QgbmV3UHJvcHMgPSB0aGlzLmVsZW1lbnREcml2ZXIuZ2V0Q29tcG9uZW50UHJvcHMoKTtcblx0XHR0aGlzLnZhbHVlU3RvcmUucmVpbml0aWFsaXplQWxsUHJvcHMobmV3UHJvcHMpO1xuXHRcdGNvbnN0IGV2ZW50c1RvRW1pdCA9IHRoaXMuZWxlbWVudERyaXZlci5nZXRFdmVudHNUb0VtaXQoKTtcblx0XHRjb25zdCBicm93c2VyRXZlbnRzVG9EaXNwYXRjaCA9IHRoaXMuZWxlbWVudERyaXZlci5nZXRCcm93c2VyRXZlbnRzVG9EaXNwYXRjaCgpO1xuXHRcdE9iamVjdC5rZXlzKG1vZGlmaWVkTW9kZWxWYWx1ZXMpLmZvckVhY2goKG1vZGVsTmFtZSkgPT4ge1xuXHRcdFx0dGhpcy52YWx1ZVN0b3JlLnNldChtb2RlbE5hbWUsIG1vZGlmaWVkTW9kZWxWYWx1ZXNbbW9kZWxOYW1lXSk7XG5cdFx0fSk7XG5cdFx0ZXZlbnRzVG9FbWl0LmZvckVhY2goKHsgZXZlbnQsIGRhdGEsIHRhcmdldCwgY29tcG9uZW50TmFtZSB9KSA9PiB7XG5cdFx0XHRpZiAodGFyZ2V0ID09PSBcInVwXCIpIHtcblx0XHRcdFx0dGhpcy5lbWl0VXAoZXZlbnQsIGRhdGEsIGNvbXBvbmVudE5hbWUpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAodGFyZ2V0ID09PSBcInNlbGZcIikge1xuXHRcdFx0XHR0aGlzLmVtaXRTZWxmKGV2ZW50LCBkYXRhKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5lbWl0KGV2ZW50LCBkYXRhLCBjb21wb25lbnROYW1lKTtcblx0XHR9KTtcblx0XHRicm93c2VyRXZlbnRzVG9EaXNwYXRjaC5mb3JFYWNoKCh7IGV2ZW50LCBwYXlsb2FkIH0pID0+IHtcblx0XHRcdHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChldmVudCwge1xuXHRcdFx0XHRkZXRhaWw6IHBheWxvYWQsXG5cdFx0XHRcdGJ1YmJsZXM6IHRydWVcblx0XHRcdH0pKTtcblx0XHR9KTtcblx0XHR0aGlzLmhvb2tzLnRyaWdnZXJIb29rKFwicmVuZGVyOmZpbmlzaGVkXCIsIHRoaXMpO1xuXHR9XG5cdGNhbGN1bGF0ZURlYm91bmNlKGRlYm91bmNlKSB7XG5cdFx0aWYgKGRlYm91bmNlID09PSB0cnVlKSByZXR1cm4gdGhpcy5kZWZhdWx0RGVib3VuY2U7XG5cdFx0aWYgKGRlYm91bmNlID09PSBmYWxzZSkgcmV0dXJuIDA7XG5cdFx0cmV0dXJuIGRlYm91bmNlO1xuXHR9XG5cdGNsZWFyUmVxdWVzdERlYm91bmNlVGltZW91dCgpIHtcblx0XHRpZiAodGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0KSB7XG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0KTtcblx0XHRcdHRoaXMucmVxdWVzdERlYm91bmNlVGltZW91dCA9IG51bGw7XG5cdFx0fVxuXHR9XG5cdGRlYm91bmNlZFN0YXJ0UmVxdWVzdChkZWJvdW5jZSkge1xuXHRcdHRoaXMuY2xlYXJSZXF1ZXN0RGVib3VuY2VUaW1lb3V0KCk7XG5cdFx0dGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy5yZW5kZXIoKTtcblx0XHR9LCB0aGlzLmNhbGN1bGF0ZURlYm91bmNlKGRlYm91bmNlKSk7XG5cdH1cblx0cmVuZGVyRXJyb3IoaHRtbCkge1xuXHRcdGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGl2ZS1jb21wb25lbnQtZXJyb3JcIik7XG5cdFx0aWYgKG1vZGFsKSBtb2RhbC5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdGVsc2Uge1xuXHRcdFx0bW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0bW9kYWwuaWQgPSBcImxpdmUtY29tcG9uZW50LWVycm9yXCI7XG5cdFx0XHRtb2RhbC5zdHlsZS5wYWRkaW5nID0gXCI1MHB4XCI7XG5cdFx0XHRtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMCwgMCwgLjUpXCI7XG5cdFx0XHRtb2RhbC5zdHlsZS56SW5kZXggPSBcIjEwMDAwMFwiO1xuXHRcdFx0bW9kYWwuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG5cdFx0XHRtb2RhbC5zdHlsZS50b3AgPSBcIjBweFwiO1xuXHRcdFx0bW9kYWwuc3R5bGUuYm90dG9tID0gXCIwcHhcIjtcblx0XHRcdG1vZGFsLnN0eWxlLmxlZnQgPSBcIjBweFwiO1xuXHRcdFx0bW9kYWwuc3R5bGUucmlnaHQgPSBcIjBweFwiO1xuXHRcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXHRcdFx0bW9kYWwuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XG5cdFx0fVxuXHRcdGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG5cdFx0aWZyYW1lLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNXB4XCI7XG5cdFx0aWZyYW1lLnN0eWxlLmZsZXhHcm93ID0gXCIxXCI7XG5cdFx0bW9kYWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcblx0XHRkb2N1bWVudC5ib2R5LnByZXBlbmQobW9kYWwpO1xuXHRcdGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuXHRcdGlmIChpZnJhbWUuY29udGVudFdpbmRvdykge1xuXHRcdFx0aWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQub3BlbigpO1xuXHRcdFx0aWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQud3JpdGUoaHRtbCk7XG5cdFx0XHRpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5jbG9zZSgpO1xuXHRcdH1cblx0XHRjb25zdCBjbG9zZU1vZGFsID0gKG1vZGFsKSA9PiB7XG5cdFx0XHRpZiAobW9kYWwpIG1vZGFsLm91dGVySFRNTCA9IFwiXCI7XG5cdFx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJ2aXNpYmxlXCI7XG5cdFx0fTtcblx0XHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2xvc2VNb2RhbChtb2RhbCkpO1xuXHRcdG1vZGFsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcblx0XHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuXHRcdFx0aWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSBjbG9zZU1vZGFsKG1vZGFsKTtcblx0XHR9KTtcblx0XHRtb2RhbC5mb2N1cygpO1xuXHR9XG5cdHJlc2V0UHJvbWlzZSgpIHtcblx0XHR0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0XHR0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZVJlc29sdmUgPSByZXNvbHZlO1xuXHRcdH0pO1xuXHR9XG5cdF91cGRhdGVGcm9tUGFyZW50UHJvcHMocHJvcHMpIHtcblx0XHRpZiAodGhpcy52YWx1ZVN0b3JlLnN0b3JlTmV3UHJvcHNGcm9tUGFyZW50KHByb3BzKSkgdGhpcy5yZW5kZXIoKTtcblx0fVxufTtcbmZ1bmN0aW9uIHByb3hpZnlDb21wb25lbnQoY29tcG9uZW50KSB7XG5cdHJldHVybiBuZXcgUHJveHkoY29tcG9uZW50LCB7XG5cdFx0Z2V0KGNvbXBvbmVudCwgcHJvcCkge1xuXHRcdFx0aWYgKHByb3AgaW4gY29tcG9uZW50IHx8IHR5cGVvZiBwcm9wICE9PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdGlmICh0eXBlb2YgY29tcG9uZW50W3Byb3BdID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRjb25zdCBjYWxsYWJsZSA9IGNvbXBvbmVudFtwcm9wXTtcblx0XHRcdFx0XHRyZXR1cm4gKC4uLmFyZ3MpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBjYWxsYWJsZS5hcHBseShjb21wb25lbnQsIGFyZ3MpO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIFJlZmxlY3QuZ2V0KGNvbXBvbmVudCwgcHJvcCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY29tcG9uZW50LnZhbHVlU3RvcmUuaGFzKHByb3ApKSByZXR1cm4gY29tcG9uZW50LmdldERhdGEocHJvcCk7XG5cdFx0XHRyZXR1cm4gKGFyZ3MpID0+IHtcblx0XHRcdFx0cmV0dXJuIGNvbXBvbmVudC5hY3Rpb24uYXBwbHkoY29tcG9uZW50LCBbcHJvcCwgYXJnc10pO1xuXHRcdFx0fTtcblx0XHR9LFxuXHRcdHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuXHRcdFx0aWYgKHByb3BlcnR5IGluIHRhcmdldCkge1xuXHRcdFx0XHR0YXJnZXRbcHJvcGVydHldID0gdmFsdWU7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0dGFyZ2V0LnNldChwcm9wZXJ0eSwgdmFsdWUpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9KTtcbn1cbnZhciBTdGltdWx1c0VsZW1lbnREcml2ZXIgPSBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKGNvbnRyb2xsZXIpIHtcblx0XHR0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuXHR9XG5cdGdldE1vZGVsTmFtZShlbGVtZW50KSB7XG5cdFx0Y29uc3QgbW9kZWxEaXJlY3RpdmUgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIGZhbHNlKTtcblx0XHRpZiAoIW1vZGVsRGlyZWN0aXZlKSByZXR1cm4gbnVsbDtcblx0XHRyZXR1cm4gbW9kZWxEaXJlY3RpdmUuYWN0aW9uO1xuXHR9XG5cdGdldENvbXBvbmVudFByb3BzKCkge1xuXHRcdHJldHVybiB0aGlzLmNvbnRyb2xsZXIucHJvcHNWYWx1ZTtcblx0fVxuXHRnZXRFdmVudHNUb0VtaXQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29udHJvbGxlci5ldmVudHNUb0VtaXRWYWx1ZTtcblx0fVxuXHRnZXRCcm93c2VyRXZlbnRzVG9EaXNwYXRjaCgpIHtcblx0XHRyZXR1cm4gdGhpcy5jb250cm9sbGVyLmV2ZW50c1RvRGlzcGF0Y2hWYWx1ZTtcblx0fVxufTtcbmZ1bmN0aW9uIGdldF9tb2RlbF9iaW5kaW5nX2RlZmF1bHQobW9kZWxEaXJlY3RpdmUpIHtcblx0bGV0IHNob3VsZFJlbmRlciA9IHRydWU7XG5cdGxldCB0YXJnZXRFdmVudE5hbWUgPSBudWxsO1xuXHRsZXQgZGVib3VuY2UgPSBmYWxzZTtcblx0bGV0IG1pbkxlbmd0aCA9IG51bGw7XG5cdGxldCBtYXhMZW5ndGggPSBudWxsO1xuXHRsZXQgbWluVmFsdWUgPSBudWxsO1xuXHRsZXQgbWF4VmFsdWUgPSBudWxsO1xuXHRtb2RlbERpcmVjdGl2ZS5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcblx0XHRzd2l0Y2ggKG1vZGlmaWVyLm5hbWUpIHtcblx0XHRcdGNhc2UgXCJvblwiOlxuXHRcdFx0XHRpZiAoIW1vZGlmaWVyLnZhbHVlKSB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcIm9uXCIgbW9kaWZpZXIgaW4gJHttb2RlbERpcmVjdGl2ZS5nZXRTdHJpbmcoKX0gcmVxdWlyZXMgYSB2YWx1ZSAtIGUuZy4gb24oY2hhbmdlKS5gKTtcblx0XHRcdFx0aWYgKCFbXCJpbnB1dFwiLCBcImNoYW5nZVwiXS5pbmNsdWRlcyhtb2RpZmllci52YWx1ZSkpIHRocm93IG5ldyBFcnJvcihgVGhlIFwib25cIiBtb2RpZmllciBpbiAke21vZGVsRGlyZWN0aXZlLmdldFN0cmluZygpfSBvbmx5IGFjY2VwdHMgdGhlIGFyZ3VtZW50cyBcImlucHV0XCIgb3IgXCJjaGFuZ2VcIi5gKTtcblx0XHRcdFx0dGFyZ2V0RXZlbnROYW1lID0gbW9kaWZpZXIudmFsdWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcIm5vcmVuZGVyXCI6XG5cdFx0XHRcdHNob3VsZFJlbmRlciA9IGZhbHNlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJkZWJvdW5jZVwiOlxuXHRcdFx0XHRkZWJvdW5jZSA9IG1vZGlmaWVyLnZhbHVlID8gTnVtYmVyLnBhcnNlSW50KG1vZGlmaWVyLnZhbHVlKSA6IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcIm1pbl9sZW5ndGhcIjpcblx0XHRcdFx0bWluTGVuZ3RoID0gbW9kaWZpZXIudmFsdWUgPyBOdW1iZXIucGFyc2VJbnQobW9kaWZpZXIudmFsdWUpIDogbnVsbDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwibWF4X2xlbmd0aFwiOlxuXHRcdFx0XHRtYXhMZW5ndGggPSBtb2RpZmllci52YWx1ZSA/IE51bWJlci5wYXJzZUludChtb2RpZmllci52YWx1ZSkgOiBudWxsO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJtaW5fdmFsdWVcIjpcblx0XHRcdFx0bWluVmFsdWUgPSBtb2RpZmllci52YWx1ZSA/IE51bWJlci5wYXJzZUZsb2F0KG1vZGlmaWVyLnZhbHVlKSA6IG51bGw7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcIm1heF92YWx1ZVwiOlxuXHRcdFx0XHRtYXhWYWx1ZSA9IG1vZGlmaWVyLnZhbHVlID8gTnVtYmVyLnBhcnNlRmxvYXQobW9kaWZpZXIudmFsdWUpIDogbnVsbDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OiB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbW9kaWZpZXIgXCIke21vZGlmaWVyLm5hbWV9XCIgaW4gZGF0YS1tb2RlbD1cIiR7bW9kZWxEaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCIuYCk7XG5cdFx0fVxuXHR9KTtcblx0Y29uc3QgW21vZGVsTmFtZSwgaW5uZXJNb2RlbE5hbWVdID0gbW9kZWxEaXJlY3RpdmUuYWN0aW9uLnNwbGl0KFwiOlwiKTtcblx0cmV0dXJuIHtcblx0XHRtb2RlbE5hbWUsXG5cdFx0aW5uZXJNb2RlbE5hbWU6IGlubmVyTW9kZWxOYW1lIHx8IG51bGwsXG5cdFx0c2hvdWxkUmVuZGVyLFxuXHRcdGRlYm91bmNlLFxuXHRcdHRhcmdldEV2ZW50TmFtZSxcblx0XHRtaW5MZW5ndGgsXG5cdFx0bWF4TGVuZ3RoLFxuXHRcdG1pblZhbHVlLFxuXHRcdG1heFZhbHVlXG5cdH07XG59XG52YXIgQ2hpbGRDb21wb25lbnRQbHVnaW5fZGVmYXVsdCA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoY29tcG9uZW50KSB7XG5cdFx0dGhpcy5wYXJlbnRNb2RlbEJpbmRpbmdzID0gW107XG5cdFx0dGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG5cdFx0dGhpcy5wYXJlbnRNb2RlbEJpbmRpbmdzID0gZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHModGhpcy5jb21wb25lbnQuZWxlbWVudCkubWFwKGdldF9tb2RlbF9iaW5kaW5nX2RlZmF1bHQpO1xuXHR9XG5cdGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuXHRcdGNvbXBvbmVudC5vbihcInJlcXVlc3Q6c3RhcnRlZFwiLCAocmVxdWVzdERhdGEpID0+IHtcblx0XHRcdHJlcXVlc3REYXRhLmNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbkZpbmdlcnByaW50cygpO1xuXHRcdH0pO1xuXHRcdGNvbXBvbmVudC5vbihcIm1vZGVsOnNldFwiLCAobW9kZWwsIHZhbHVlKSA9PiB7XG5cdFx0XHR0aGlzLm5vdGlmeVBhcmVudE1vZGVsQ2hhbmdlKG1vZGVsLCB2YWx1ZSk7XG5cdFx0fSk7XG5cdH1cblx0Z2V0Q2hpbGRyZW5GaW5nZXJwcmludHMoKSB7XG5cdFx0Y29uc3QgZmluZ2VycHJpbnRzID0ge307XG5cdFx0dGhpcy5nZXRDaGlsZHJlbigpLmZvckVhY2goKGNoaWxkKSA9PiB7XG5cdFx0XHRpZiAoIWNoaWxkLmlkKSB0aHJvdyBuZXcgRXJyb3IoXCJtaXNzaW5nIGlkXCIpO1xuXHRcdFx0ZmluZ2VycHJpbnRzW2NoaWxkLmlkXSA9IHtcblx0XHRcdFx0ZmluZ2VycHJpbnQ6IGNoaWxkLmZpbmdlcnByaW50LFxuXHRcdFx0XHR0YWc6IGNoaWxkLmVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpXG5cdFx0XHR9O1xuXHRcdH0pO1xuXHRcdHJldHVybiBmaW5nZXJwcmludHM7XG5cdH1cblx0bm90aWZ5UGFyZW50TW9kZWxDaGFuZ2UobW9kZWxOYW1lLCB2YWx1ZSkge1xuXHRcdGNvbnN0IHBhcmVudENvbXBvbmVudCA9IGZpbmRQYXJlbnQodGhpcy5jb21wb25lbnQpO1xuXHRcdGlmICghcGFyZW50Q29tcG9uZW50KSByZXR1cm47XG5cdFx0dGhpcy5wYXJlbnRNb2RlbEJpbmRpbmdzLmZvckVhY2goKG1vZGVsQmluZGluZykgPT4ge1xuXHRcdFx0aWYgKChtb2RlbEJpbmRpbmcuaW5uZXJNb2RlbE5hbWUgfHwgXCJ2YWx1ZVwiKSAhPT0gbW9kZWxOYW1lKSByZXR1cm47XG5cdFx0XHRwYXJlbnRDb21wb25lbnQuc2V0KG1vZGVsQmluZGluZy5tb2RlbE5hbWUsIHZhbHVlLCBtb2RlbEJpbmRpbmcuc2hvdWxkUmVuZGVyLCBtb2RlbEJpbmRpbmcuZGVib3VuY2UpO1xuXHRcdH0pO1xuXHR9XG5cdGdldENoaWxkcmVuKCkge1xuXHRcdHJldHVybiBmaW5kQ2hpbGRyZW4odGhpcy5jb21wb25lbnQpO1xuXHR9XG59O1xudmFyIExhenlQbHVnaW5fZGVmYXVsdCA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlciA9IG51bGw7XG5cdH1cblx0YXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG5cdFx0aWYgKFwibGF6eVwiICE9PSBjb21wb25lbnQuZWxlbWVudC5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbShcImxvYWRpbmdcIik/LnZhbHVlKSByZXR1cm47XG5cdFx0Y29tcG9uZW50Lm9uKFwiY29ubmVjdFwiLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmdldE9ic2VydmVyKCkub2JzZXJ2ZShjb21wb25lbnQuZWxlbWVudCk7XG5cdFx0fSk7XG5cdFx0Y29tcG9uZW50Lm9uKFwiZGlzY29ubmVjdFwiLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyPy51bm9ic2VydmUoY29tcG9uZW50LmVsZW1lbnQpO1xuXHRcdH0pO1xuXHR9XG5cdGdldE9ic2VydmVyKCkge1xuXHRcdGlmICghdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlcikgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcblx0XHRcdGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcblx0XHRcdFx0aWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG5cdFx0XHRcdFx0ZW50cnkudGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwibGl2ZTphcHBlYXJcIikpO1xuXHRcdFx0XHRcdG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRyZXR1cm4gdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlcjtcblx0fVxufTtcbnZhciBMb2FkaW5nUGx1Z2luX2RlZmF1bHQgPSBjbGFzcyB7XG5cdGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuXHRcdGNvbXBvbmVudC5vbihcImxvYWRpbmcuc3RhdGU6c3RhcnRlZFwiLCAoZWxlbWVudCwgcmVxdWVzdCkgPT4ge1xuXHRcdFx0dGhpcy5zdGFydExvYWRpbmcoY29tcG9uZW50LCBlbGVtZW50LCByZXF1ZXN0KTtcblx0XHR9KTtcblx0XHRjb21wb25lbnQub24oXCJsb2FkaW5nLnN0YXRlOmZpbmlzaGVkXCIsIChlbGVtZW50KSA9PiB7XG5cdFx0XHR0aGlzLmZpbmlzaExvYWRpbmcoY29tcG9uZW50LCBlbGVtZW50KTtcblx0XHR9KTtcblx0XHR0aGlzLmZpbmlzaExvYWRpbmcoY29tcG9uZW50LCBjb21wb25lbnQuZWxlbWVudCk7XG5cdH1cblx0c3RhcnRMb2FkaW5nKGNvbXBvbmVudCwgdGFyZ2V0RWxlbWVudCwgYmFja2VuZFJlcXVlc3QpIHtcblx0XHR0aGlzLmhhbmRsZUxvYWRpbmdUb2dnbGUoY29tcG9uZW50LCB0cnVlLCB0YXJnZXRFbGVtZW50LCBiYWNrZW5kUmVxdWVzdCk7XG5cdH1cblx0ZmluaXNoTG9hZGluZyhjb21wb25lbnQsIHRhcmdldEVsZW1lbnQpIHtcblx0XHR0aGlzLmhhbmRsZUxvYWRpbmdUb2dnbGUoY29tcG9uZW50LCBmYWxzZSwgdGFyZ2V0RWxlbWVudCwgbnVsbCk7XG5cdH1cblx0aGFuZGxlTG9hZGluZ1RvZ2dsZShjb21wb25lbnQsIGlzTG9hZGluZywgdGFyZ2V0RWxlbWVudCwgYmFja2VuZFJlcXVlc3QpIHtcblx0XHRpZiAoaXNMb2FkaW5nKSB0aGlzLmFkZEF0dHJpYnV0ZXModGFyZ2V0RWxlbWVudCwgW1wiYnVzeVwiXSk7XG5cdFx0ZWxzZSB0aGlzLnJlbW92ZUF0dHJpYnV0ZXModGFyZ2V0RWxlbWVudCwgW1wiYnVzeVwiXSk7XG5cdFx0dGhpcy5nZXRMb2FkaW5nRGlyZWN0aXZlcyhjb21wb25lbnQsIHRhcmdldEVsZW1lbnQpLmZvckVhY2goKHsgZWxlbWVudCwgZGlyZWN0aXZlcyB9KSA9PiB7XG5cdFx0XHRpZiAoaXNMb2FkaW5nKSB0aGlzLmFkZEF0dHJpYnV0ZXMoZWxlbWVudCwgW1wiZGF0YS1saXZlLWlzLWxvYWRpbmdcIl0pO1xuXHRcdFx0ZWxzZSB0aGlzLnJlbW92ZUF0dHJpYnV0ZXMoZWxlbWVudCwgW1wiZGF0YS1saXZlLWlzLWxvYWRpbmdcIl0pO1xuXHRcdFx0ZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcblx0XHRcdFx0dGhpcy5oYW5kbGVMb2FkaW5nRGlyZWN0aXZlKGVsZW1lbnQsIGlzTG9hZGluZywgZGlyZWN0aXZlLCBiYWNrZW5kUmVxdWVzdCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXHRoYW5kbGVMb2FkaW5nRGlyZWN0aXZlKGVsZW1lbnQsIGlzTG9hZGluZywgZGlyZWN0aXZlLCBiYWNrZW5kUmVxdWVzdCkge1xuXHRcdGNvbnN0IGZpbmFsQWN0aW9uID0gcGFyc2VMb2FkaW5nQWN0aW9uKGRpcmVjdGl2ZS5hY3Rpb24sIGlzTG9hZGluZyk7XG5cdFx0Y29uc3QgdGFyZ2V0ZWRBY3Rpb25zID0gW107XG5cdFx0Y29uc3QgdGFyZ2V0ZWRNb2RlbHMgPSBbXTtcblx0XHRsZXQgZGVsYXkgPSAwO1xuXHRcdGNvbnN0IHZhbGlkTW9kaWZpZXJzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0XHR2YWxpZE1vZGlmaWVycy5zZXQoXCJkZWxheVwiLCAobW9kaWZpZXIpID0+IHtcblx0XHRcdGlmICghaXNMb2FkaW5nKSByZXR1cm47XG5cdFx0XHRkZWxheSA9IG1vZGlmaWVyLnZhbHVlID8gTnVtYmVyLnBhcnNlSW50KG1vZGlmaWVyLnZhbHVlKSA6IDIwMDtcblx0XHR9KTtcblx0XHR2YWxpZE1vZGlmaWVycy5zZXQoXCJhY3Rpb25cIiwgKG1vZGlmaWVyKSA9PiB7XG5cdFx0XHRpZiAoIW1vZGlmaWVyLnZhbHVlKSB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcImFjdGlvblwiIGluIGRhdGEtbG9hZGluZyBtdXN0IGhhdmUgYW4gYWN0aW9uIG5hbWUgLSBlLmcuIGFjdGlvbihmb28pLiBJdCdzIG1pc3NpbmcgZm9yIFwiJHtkaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCJgKTtcblx0XHRcdHRhcmdldGVkQWN0aW9ucy5wdXNoKG1vZGlmaWVyLnZhbHVlKTtcblx0XHR9KTtcblx0XHR2YWxpZE1vZGlmaWVycy5zZXQoXCJtb2RlbFwiLCAobW9kaWZpZXIpID0+IHtcblx0XHRcdGlmICghbW9kaWZpZXIudmFsdWUpIHRocm93IG5ldyBFcnJvcihgVGhlIFwibW9kZWxcIiBpbiBkYXRhLWxvYWRpbmcgbXVzdCBoYXZlIGFuIGFjdGlvbiBuYW1lIC0gZS5nLiBtb2RlbChmb28pLiBJdCdzIG1pc3NpbmcgZm9yIFwiJHtkaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCJgKTtcblx0XHRcdHRhcmdldGVkTW9kZWxzLnB1c2gobW9kaWZpZXIudmFsdWUpO1xuXHRcdH0pO1xuXHRcdGRpcmVjdGl2ZS5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcblx0XHRcdGlmICh2YWxpZE1vZGlmaWVycy5oYXMobW9kaWZpZXIubmFtZSkpIHtcblx0XHRcdFx0KHZhbGlkTW9kaWZpZXJzLmdldChtb2RpZmllci5uYW1lKSA/PyAoKCkgPT4ge30pKShtb2RpZmllcik7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRocm93IG5ldyBFcnJvcihgVW5rbm93biBtb2RpZmllciBcIiR7bW9kaWZpZXIubmFtZX1cIiB1c2VkIGluIGRhdGEtbG9hZGluZz1cIiR7ZGlyZWN0aXZlLmdldFN0cmluZygpfVwiLiBBdmFpbGFibGUgbW9kaWZpZXJzIGFyZTogJHtBcnJheS5mcm9tKHZhbGlkTW9kaWZpZXJzLmtleXMoKSkuam9pbihcIiwgXCIpfS5gKTtcblx0XHR9KTtcblx0XHRpZiAoaXNMb2FkaW5nICYmIHRhcmdldGVkQWN0aW9ucy5sZW5ndGggPiAwICYmIGJhY2tlbmRSZXF1ZXN0ICYmICFiYWNrZW5kUmVxdWVzdC5jb250YWluc09uZU9mQWN0aW9ucyh0YXJnZXRlZEFjdGlvbnMpKSByZXR1cm47XG5cdFx0aWYgKGlzTG9hZGluZyAmJiB0YXJnZXRlZE1vZGVscy5sZW5ndGggPiAwICYmIGJhY2tlbmRSZXF1ZXN0ICYmICFiYWNrZW5kUmVxdWVzdC5hcmVBbnlNb2RlbHNVcGRhdGVkKHRhcmdldGVkTW9kZWxzKSkgcmV0dXJuO1xuXHRcdGxldCBsb2FkaW5nRGlyZWN0aXZlO1xuXHRcdHN3aXRjaCAoZmluYWxBY3Rpb24pIHtcblx0XHRcdGNhc2UgXCJzaG93XCI6XG5cdFx0XHRcdGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLnNob3dFbGVtZW50KGVsZW1lbnQpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJoaWRlXCI6XG5cdFx0XHRcdGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLmhpZGVFbGVtZW50KGVsZW1lbnQpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJhZGRDbGFzc1wiOlxuXHRcdFx0XHRsb2FkaW5nRGlyZWN0aXZlID0gKCkgPT4gdGhpcy5hZGRDbGFzcyhlbGVtZW50LCBkaXJlY3RpdmUuYXJncyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcInJlbW92ZUNsYXNzXCI6XG5cdFx0XHRcdGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLnJlbW92ZUNsYXNzKGVsZW1lbnQsIGRpcmVjdGl2ZS5hcmdzKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiYWRkQXR0cmlidXRlXCI6XG5cdFx0XHRcdGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLmFkZEF0dHJpYnV0ZXMoZWxlbWVudCwgZGlyZWN0aXZlLmFyZ3MpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJyZW1vdmVBdHRyaWJ1dGVcIjpcblx0XHRcdFx0bG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMucmVtb3ZlQXR0cmlidXRlcyhlbGVtZW50LCBkaXJlY3RpdmUuYXJncyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGRhdGEtbG9hZGluZyBhY3Rpb24gXCIke2ZpbmFsQWN0aW9ufVwiYCk7XG5cdFx0fVxuXHRcdGlmIChkZWxheSkge1xuXHRcdFx0d2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRpZiAoYmFja2VuZFJlcXVlc3QgJiYgIWJhY2tlbmRSZXF1ZXN0LmlzUmVzb2x2ZWQpIGxvYWRpbmdEaXJlY3RpdmUoKTtcblx0XHRcdH0sIGRlbGF5KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bG9hZGluZ0RpcmVjdGl2ZSgpO1xuXHR9XG5cdGdldExvYWRpbmdEaXJlY3RpdmVzKGNvbXBvbmVudCwgZWxlbWVudCkge1xuXHRcdGNvbnN0IGxvYWRpbmdEaXJlY3RpdmVzID0gW107XG5cdFx0bGV0IG1hdGNoaW5nRWxlbWVudHMgPSBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWxvYWRpbmddXCIpKTtcblx0XHRtYXRjaGluZ0VsZW1lbnRzID0gbWF0Y2hpbmdFbGVtZW50cy5maWx0ZXIoKGVsdCkgPT4gZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQoZWx0LCBjb21wb25lbnQpKTtcblx0XHRpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJkYXRhLWxvYWRpbmdcIikpIG1hdGNoaW5nRWxlbWVudHMgPSBbZWxlbWVudCwgLi4ubWF0Y2hpbmdFbGVtZW50c107XG5cdFx0bWF0Y2hpbmdFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG5cdFx0XHRpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpICYmICEoZWxlbWVudCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIEVsZW1lbnQgVHlwZVwiKTtcblx0XHRcdGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMoZWxlbWVudC5kYXRhc2V0LmxvYWRpbmcgfHwgXCJzaG93XCIpO1xuXHRcdFx0bG9hZGluZ0RpcmVjdGl2ZXMucHVzaCh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHRcdGRpcmVjdGl2ZXNcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHJldHVybiBsb2FkaW5nRGlyZWN0aXZlcztcblx0fVxuXHRzaG93RWxlbWVudChlbGVtZW50KSB7XG5cdFx0ZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJyZXZlcnRcIjtcblx0fVxuXHRoaWRlRWxlbWVudChlbGVtZW50KSB7XG5cdFx0ZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdH1cblx0YWRkQ2xhc3MoZWxlbWVudCwgY2xhc3Nlcykge1xuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jb21iaW5lU3BhY2VkQXJyYXkoY2xhc3NlcykpO1xuXHR9XG5cdHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzZXMpIHtcblx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoLi4uY29tYmluZVNwYWNlZEFycmF5KGNsYXNzZXMpKTtcblx0XHRpZiAoZWxlbWVudC5jbGFzc0xpc3QubGVuZ3RoID09PSAwKSBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpO1xuXHR9XG5cdGFkZEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcykge1xuXHRcdGF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG5cdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIFwiXCIpO1xuXHRcdH0pO1xuXHR9XG5cdHJlbW92ZUF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcykge1xuXHRcdGF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuXHRcdH0pO1xuXHR9XG59O1xuY29uc3QgcGFyc2VMb2FkaW5nQWN0aW9uID0gKGFjdGlvbiwgaXNMb2FkaW5nKSA9PiB7XG5cdHN3aXRjaCAoYWN0aW9uKSB7XG5cdFx0Y2FzZSBcInNob3dcIjogcmV0dXJuIGlzTG9hZGluZyA/IFwic2hvd1wiIDogXCJoaWRlXCI7XG5cdFx0Y2FzZSBcImhpZGVcIjogcmV0dXJuIGlzTG9hZGluZyA/IFwiaGlkZVwiIDogXCJzaG93XCI7XG5cdFx0Y2FzZSBcImFkZENsYXNzXCI6IHJldHVybiBpc0xvYWRpbmcgPyBcImFkZENsYXNzXCIgOiBcInJlbW92ZUNsYXNzXCI7XG5cdFx0Y2FzZSBcInJlbW92ZUNsYXNzXCI6IHJldHVybiBpc0xvYWRpbmcgPyBcInJlbW92ZUNsYXNzXCIgOiBcImFkZENsYXNzXCI7XG5cdFx0Y2FzZSBcImFkZEF0dHJpYnV0ZVwiOiByZXR1cm4gaXNMb2FkaW5nID8gXCJhZGRBdHRyaWJ1dGVcIiA6IFwicmVtb3ZlQXR0cmlidXRlXCI7XG5cdFx0Y2FzZSBcInJlbW92ZUF0dHJpYnV0ZVwiOiByZXR1cm4gaXNMb2FkaW5nID8gXCJyZW1vdmVBdHRyaWJ1dGVcIiA6IFwiYWRkQXR0cmlidXRlXCI7XG5cdH1cblx0dGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGRhdGEtbG9hZGluZyBhY3Rpb24gXCIke2FjdGlvbn1cImApO1xufTtcbnZhciBQYWdlVW5sb2FkaW5nUGx1Z2luX2RlZmF1bHQgPSBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZTtcblx0fVxuXHRhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcblx0XHRjb21wb25lbnQub24oXCJyZW5kZXI6c3RhcnRlZFwiLCAoaHRtbCwgcmVzcG9uc2UsIGNvbnRyb2xzKSA9PiB7XG5cdFx0XHRpZiAoIXRoaXMuaXNDb25uZWN0ZWQpIGNvbnRyb2xzLnNob3VsZFJlbmRlciA9IGZhbHNlO1xuXHRcdH0pO1xuXHRcdGNvbXBvbmVudC5vbihcImNvbm5lY3RcIiwgKCkgPT4ge1xuXHRcdFx0dGhpcy5pc0Nvbm5lY3RlZCA9IHRydWU7XG5cdFx0fSk7XG5cdFx0Y29tcG9uZW50Lm9uKFwiZGlzY29ubmVjdFwiLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XG5cdFx0fSk7XG5cdH1cbn07XG52YXIgUG9sbGluZ0RpcmVjdG9yX2RlZmF1bHQgPSBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKGNvbXBvbmVudCkge1xuXHRcdHRoaXMuaXNQb2xsaW5nQWN0aXZlID0gdHJ1ZTtcblx0XHR0aGlzLnBvbGxpbmdJbnRlcnZhbHMgPSBbXTtcblx0XHR0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcblx0fVxuXHRhZGRQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKSB7XG5cdFx0dGhpcy5wb2xscy5wdXNoKHtcblx0XHRcdGFjdGlvbk5hbWUsXG5cdFx0XHRkdXJhdGlvblxuXHRcdH0pO1xuXHRcdGlmICh0aGlzLmlzUG9sbGluZ0FjdGl2ZSkgdGhpcy5pbml0aWF0ZVBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pO1xuXHR9XG5cdHN0YXJ0QWxsUG9sbGluZygpIHtcblx0XHRpZiAodGhpcy5pc1BvbGxpbmdBY3RpdmUpIHJldHVybjtcblx0XHR0aGlzLmlzUG9sbGluZ0FjdGl2ZSA9IHRydWU7XG5cdFx0dGhpcy5wb2xscy5mb3JFYWNoKCh7IGFjdGlvbk5hbWUsIGR1cmF0aW9uIH0pID0+IHtcblx0XHRcdHRoaXMuaW5pdGlhdGVQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKTtcblx0XHR9KTtcblx0fVxuXHRzdG9wQWxsUG9sbGluZygpIHtcblx0XHR0aGlzLmlzUG9sbGluZ0FjdGl2ZSA9IGZhbHNlO1xuXHRcdHRoaXMucG9sbGluZ0ludGVydmFscy5mb3JFYWNoKChpbnRlcnZhbCkgPT4ge1xuXHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cdFx0fSk7XG5cdH1cblx0Y2xlYXJQb2xsaW5nKCkge1xuXHRcdHRoaXMuc3RvcEFsbFBvbGxpbmcoKTtcblx0XHR0aGlzLnBvbGxzID0gW107XG5cdFx0dGhpcy5zdGFydEFsbFBvbGxpbmcoKTtcblx0fVxuXHRpbml0aWF0ZVBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pIHtcblx0XHRsZXQgY2FsbGJhY2s7XG5cdFx0aWYgKGFjdGlvbk5hbWUgPT09IFwiJHJlbmRlclwiKSBjYWxsYmFjayA9ICgpID0+IHtcblx0XHRcdHRoaXMuY29tcG9uZW50LnJlbmRlcigpO1xuXHRcdH07XG5cdFx0ZWxzZSBjYWxsYmFjayA9ICgpID0+IHtcblx0XHRcdHRoaXMuY29tcG9uZW50LmFjdGlvbihhY3Rpb25OYW1lLCB7fSwgMCk7XG5cdFx0fTtcblx0XHRjb25zdCB0aW1lciA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRjYWxsYmFjaygpO1xuXHRcdH0sIGR1cmF0aW9uKTtcblx0XHR0aGlzLnBvbGxpbmdJbnRlcnZhbHMucHVzaCh0aW1lcik7XG5cdH1cbn07XG52YXIgUG9sbGluZ1BsdWdpbl9kZWZhdWx0ID0gY2xhc3Mge1xuXHRhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBjb21wb25lbnQuZWxlbWVudDtcblx0XHR0aGlzLnBvbGxpbmdEaXJlY3RvciA9IG5ldyBQb2xsaW5nRGlyZWN0b3JfZGVmYXVsdChjb21wb25lbnQpO1xuXHRcdHRoaXMuaW5pdGlhbGl6ZVBvbGxpbmcoKTtcblx0XHRjb21wb25lbnQub24oXCJjb25uZWN0XCIsICgpID0+IHtcblx0XHRcdHRoaXMucG9sbGluZ0RpcmVjdG9yLnN0YXJ0QWxsUG9sbGluZygpO1xuXHRcdH0pO1xuXHRcdGNvbXBvbmVudC5vbihcImRpc2Nvbm5lY3RcIiwgKCkgPT4ge1xuXHRcdFx0dGhpcy5wb2xsaW5nRGlyZWN0b3Iuc3RvcEFsbFBvbGxpbmcoKTtcblx0XHR9KTtcblx0XHRjb21wb25lbnQub24oXCJyZW5kZXI6ZmluaXNoZWRcIiwgKCkgPT4ge1xuXHRcdFx0dGhpcy5pbml0aWFsaXplUG9sbGluZygpO1xuXHRcdH0pO1xuXHR9XG5cdGFkZFBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pIHtcblx0XHR0aGlzLnBvbGxpbmdEaXJlY3Rvci5hZGRQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKTtcblx0fVxuXHRjbGVhclBvbGxpbmcoKSB7XG5cdFx0dGhpcy5wb2xsaW5nRGlyZWN0b3IuY2xlYXJQb2xsaW5nKCk7XG5cdH1cblx0aW5pdGlhbGl6ZVBvbGxpbmcoKSB7XG5cdFx0dGhpcy5jbGVhclBvbGxpbmcoKTtcblx0XHRpZiAodGhpcy5lbGVtZW50LmRhdGFzZXQucG9sbCA9PT0gdm9pZCAwKSByZXR1cm47XG5cdFx0Y29uc3QgcmF3UG9sbENvbmZpZyA9IHRoaXMuZWxlbWVudC5kYXRhc2V0LnBvbGw7XG5cdFx0cGFyc2VEaXJlY3RpdmVzKHJhd1BvbGxDb25maWcgfHwgXCIkcmVuZGVyXCIpLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuXHRcdFx0bGV0IGR1cmF0aW9uID0gMmUzO1xuXHRcdFx0ZGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuXHRcdFx0XHRzd2l0Y2ggKG1vZGlmaWVyLm5hbWUpIHtcblx0XHRcdFx0XHRjYXNlIFwiZGVsYXlcIjpcblx0XHRcdFx0XHRcdGlmIChtb2RpZmllci52YWx1ZSkgZHVyYXRpb24gPSBOdW1iZXIucGFyc2VJbnQobW9kaWZpZXIudmFsdWUpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGVmYXVsdDogY29uc29sZS53YXJuKGBVbmtub3duIG1vZGlmaWVyIFwiJHttb2RpZmllci5uYW1lfVwiIGluIGRhdGEtcG9sbCBcIiR7cmF3UG9sbENvbmZpZ31cIi5gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLmFkZFBvbGwoZGlyZWN0aXZlLmFjdGlvbiwgZHVyYXRpb24pO1xuXHRcdH0pO1xuXHR9XG59O1xudmFyIFNldFZhbHVlT250b01vZGVsRmllbGRzUGx1Z2luX2RlZmF1bHQgPSBjbGFzcyB7XG5cdGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuXHRcdHRoaXMuc3luY2hyb25pemVWYWx1ZU9mTW9kZWxGaWVsZHMoY29tcG9uZW50KTtcblx0XHRjb21wb25lbnQub24oXCJyZW5kZXI6ZmluaXNoZWRcIiwgKCkgPT4ge1xuXHRcdFx0dGhpcy5zeW5jaHJvbml6ZVZhbHVlT2ZNb2RlbEZpZWxkcyhjb21wb25lbnQpO1xuXHRcdH0pO1xuXHR9XG5cdHN5bmNocm9uaXplVmFsdWVPZk1vZGVsRmllbGRzKGNvbXBvbmVudCkge1xuXHRcdGNvbXBvbmVudC5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1tb2RlbF1cIikuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0aWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBlbGVtZW50IHVzaW5nIGRhdGEtbW9kZWwuXCIpO1xuXHRcdFx0aWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHJldHVybjtcblx0XHRcdGlmICghZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQoZWxlbWVudCwgY29tcG9uZW50KSkgcmV0dXJuO1xuXHRcdFx0Y29uc3QgbW9kZWxEaXJlY3RpdmUgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQpO1xuXHRcdFx0aWYgKCFtb2RlbERpcmVjdGl2ZSkgcmV0dXJuO1xuXHRcdFx0Y29uc3QgbW9kZWxOYW1lID0gbW9kZWxEaXJlY3RpdmUuYWN0aW9uO1xuXHRcdFx0aWYgKGNvbXBvbmVudC5nZXRVbnN5bmNlZE1vZGVscygpLmluY2x1ZGVzKG1vZGVsTmFtZSkpIHJldHVybjtcblx0XHRcdGlmIChjb21wb25lbnQudmFsdWVTdG9yZS5oYXMobW9kZWxOYW1lKSkgc2V0VmFsdWVPbkVsZW1lbnQoZWxlbWVudCwgY29tcG9uZW50LnZhbHVlU3RvcmUuZ2V0KG1vZGVsTmFtZSkpO1xuXHRcdFx0aWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCAmJiAhZWxlbWVudC5tdWx0aXBsZSkgY29tcG9uZW50LnZhbHVlU3RvcmUuc2V0KG1vZGVsTmFtZSwgZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCBjb21wb25lbnQudmFsdWVTdG9yZSkpO1xuXHRcdH0pO1xuXHR9XG59O1xudmFyIFZhbGlkYXRlZEZpZWxkc1BsdWdpbl9kZWZhdWx0ID0gY2xhc3Mge1xuXHRhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcblx0XHRjb21wb25lbnQub24oXCJtb2RlbDpzZXRcIiwgKG1vZGVsTmFtZSkgPT4ge1xuXHRcdFx0dGhpcy5oYW5kbGVNb2RlbFNldChtb2RlbE5hbWUsIGNvbXBvbmVudC52YWx1ZVN0b3JlKTtcblx0XHR9KTtcblx0fVxuXHRoYW5kbGVNb2RlbFNldChtb2RlbE5hbWUsIHZhbHVlU3RvcmUpIHtcblx0XHRpZiAodmFsdWVTdG9yZS5oYXMoXCJ2YWxpZGF0ZWRGaWVsZHNcIikpIHtcblx0XHRcdGNvbnN0IHZhbGlkYXRlZEZpZWxkcyA9IFsuLi52YWx1ZVN0b3JlLmdldChcInZhbGlkYXRlZEZpZWxkc1wiKV07XG5cdFx0XHRpZiAoIXZhbGlkYXRlZEZpZWxkcy5pbmNsdWRlcyhtb2RlbE5hbWUpKSB2YWxpZGF0ZWRGaWVsZHMucHVzaChtb2RlbE5hbWUpO1xuXHRcdFx0dmFsdWVTdG9yZS5zZXQoXCJ2YWxpZGF0ZWRGaWVsZHNcIiwgdmFsaWRhdGVkRmllbGRzKTtcblx0XHR9XG5cdH1cbn07XG52YXIgTGl2ZUNvbnRyb2xsZXJEZWZhdWx0ID0gY2xhc3MgTGl2ZUNvbnRyb2xsZXJEZWZhdWx0IGV4dGVuZHMgQ29udHJvbGxlciB7XG5cdGNvbnN0cnVjdG9yKC4uLl9hcmdzKSB7XG5cdFx0c3VwZXIoLi4uX2FyZ3MpO1xuXHRcdHRoaXMucGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQgPSBudWxsO1xuXHRcdHRoaXMuZWxlbWVudEV2ZW50TGlzdGVuZXJzID0gW3tcblx0XHRcdGV2ZW50OiBcImlucHV0XCIsXG5cdFx0XHRjYWxsYmFjazogKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUlucHV0RXZlbnQoZXZlbnQpXG5cdFx0fSwge1xuXHRcdFx0ZXZlbnQ6IFwiY2hhbmdlXCIsXG5cdFx0XHRjYWxsYmFjazogKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUNoYW5nZUV2ZW50KGV2ZW50KVxuXHRcdH1dO1xuXHRcdHRoaXMucGVuZGluZ0ZpbGVzID0ge307XG5cdH1cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHR0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLm9uTXV0YXRpb25zLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XG5cdH1cblx0Y29ubmVjdCgpIHtcblx0XHR0aGlzLmNvbm5lY3RDb21wb25lbnQoKTtcblx0XHR0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsZW1lbnQsIHsgYXR0cmlidXRlczogdHJ1ZSB9KTtcblx0fVxuXHRkaXNjb25uZWN0KCkge1xuXHRcdHRoaXMuZGlzY29ubmVjdENvbXBvbmVudCgpO1xuXHRcdHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cdH1cblx0dXBkYXRlKGV2ZW50KSB7XG5cdFx0aWYgKGV2ZW50LnR5cGUgPT09IFwiaW5wdXRcIiB8fCBldmVudC50eXBlID09PSBcImNoYW5nZVwiKSB0aHJvdyBuZXcgRXJyb3IoYFNpbmNlIExpdmVDb21wb25lbnRzIDIuMywgeW91IG5vIGxvbmdlciBuZWVkIGRhdGEtYWN0aW9uPVwibGl2ZSN1cGRhdGVcIiBvbiBmb3JtIGVsZW1lbnRzLiBGb3VuZCBvbiBlbGVtZW50OiAke2dldEVsZW1lbnRBc1RhZ1RleHQoZXZlbnQuY3VycmVudFRhcmdldCl9YCk7XG5cdFx0dGhpcy51cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQoZXZlbnQuY3VycmVudFRhcmdldCwgbnVsbCk7XG5cdH1cblx0YWN0aW9uKGV2ZW50KSB7XG5cdFx0Y29uc3QgcGFyYW1zID0gZXZlbnQucGFyYW1zO1xuXHRcdGlmICghcGFyYW1zLmFjdGlvbikgdGhyb3cgbmV3IEVycm9yKGBObyBhY3Rpb24gbmFtZSBwcm92aWRlZCBvbiBlbGVtZW50OiAke2dldEVsZW1lbnRBc1RhZ1RleHQoZXZlbnQuY3VycmVudFRhcmdldCl9LiBEaWQgeW91IGZvcmdldCB0byBhZGQgdGhlIFwiZGF0YS1saXZlLWFjdGlvbi1wYXJhbVwiIGF0dHJpYnV0ZT9gKTtcblx0XHRjb25zdCByYXdBY3Rpb24gPSBwYXJhbXMuYWN0aW9uO1xuXHRcdGNvbnN0IGFjdGlvbkFyZ3MgPSB7IC4uLnBhcmFtcyB9O1xuXHRcdGRlbGV0ZSBhY3Rpb25BcmdzLmFjdGlvbjtcblx0XHRjb25zdCBkaXJlY3RpdmVzID0gcGFyc2VEaXJlY3RpdmVzKHJhd0FjdGlvbik7XG5cdFx0bGV0IGRlYm91bmNlID0gZmFsc2U7XG5cdFx0ZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcblx0XHRcdGxldCBwZW5kaW5nRmlsZXMgPSB7fTtcblx0XHRcdGNvbnN0IHZhbGlkTW9kaWZpZXJzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0XHRcdHZhbGlkTW9kaWZpZXJzLnNldChcInN0b3BcIiwgKCkgPT4ge1xuXHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdH0pO1xuXHRcdFx0dmFsaWRNb2RpZmllcnMuc2V0KFwic2VsZlwiLCAoKSA9PiB7XG5cdFx0XHRcdGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHJldHVybjtcblx0XHRcdH0pO1xuXHRcdFx0dmFsaWRNb2RpZmllcnMuc2V0KFwiZGVib3VuY2VcIiwgKG1vZGlmaWVyKSA9PiB7XG5cdFx0XHRcdGRlYm91bmNlID0gbW9kaWZpZXIudmFsdWUgPyBOdW1iZXIucGFyc2VJbnQobW9kaWZpZXIudmFsdWUpIDogdHJ1ZTtcblx0XHRcdH0pO1xuXHRcdFx0dmFsaWRNb2RpZmllcnMuc2V0KFwiZmlsZXNcIiwgKG1vZGlmaWVyKSA9PiB7XG5cdFx0XHRcdGlmICghbW9kaWZpZXIudmFsdWUpIHBlbmRpbmdGaWxlcyA9IHRoaXMucGVuZGluZ0ZpbGVzO1xuXHRcdFx0XHRlbHNlIGlmICh0aGlzLnBlbmRpbmdGaWxlc1ttb2RpZmllci52YWx1ZV0pIHBlbmRpbmdGaWxlc1ttb2RpZmllci52YWx1ZV0gPSB0aGlzLnBlbmRpbmdGaWxlc1ttb2RpZmllci52YWx1ZV07XG5cdFx0XHR9KTtcblx0XHRcdGRpcmVjdGl2ZS5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcblx0XHRcdFx0aWYgKHZhbGlkTW9kaWZpZXJzLmhhcyhtb2RpZmllci5uYW1lKSkge1xuXHRcdFx0XHRcdCh2YWxpZE1vZGlmaWVycy5nZXQobW9kaWZpZXIubmFtZSkgPz8gKCgpID0+IHt9KSkobW9kaWZpZXIpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLndhcm4oYFVua25vd24gbW9kaWZpZXIgJHttb2RpZmllci5uYW1lfSBpbiBhY3Rpb24gXCIke3Jhd0FjdGlvbn1cIi4gQXZhaWxhYmxlIG1vZGlmaWVycyBhcmU6ICR7QXJyYXkuZnJvbSh2YWxpZE1vZGlmaWVycy5rZXlzKCkpLmpvaW4oXCIsIFwiKX0uYCk7XG5cdFx0XHR9KTtcblx0XHRcdGZvciAoY29uc3QgW2tleSwgaW5wdXRdIG9mIE9iamVjdC5lbnRyaWVzKHBlbmRpbmdGaWxlcykpIHtcblx0XHRcdFx0aWYgKGlucHV0LmZpbGVzKSB0aGlzLmNvbXBvbmVudC5maWxlcyhrZXksIGlucHV0KTtcblx0XHRcdFx0ZGVsZXRlIHRoaXMucGVuZGluZ0ZpbGVzW2tleV07XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmNvbXBvbmVudC5hY3Rpb24oZGlyZWN0aXZlLmFjdGlvbiwgYWN0aW9uQXJncywgZGVib3VuY2UpO1xuXHRcdFx0aWYgKGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZXZlbnQuY3VycmVudFRhcmdldCwgZmFsc2UpKSB0aGlzLnBlbmRpbmdBY3Rpb25UcmlnZ2VyTW9kZWxFbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcblx0XHR9KTtcblx0fVxuXHQkcmVuZGVyKCkge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvbmVudC5yZW5kZXIoKTtcblx0fVxuXHRlbWl0KGV2ZW50KSB7XG5cdFx0dGhpcy5nZXRFbWl0RGlyZWN0aXZlcyhldmVudCkuZm9yRWFjaCgoeyBuYW1lLCBkYXRhLCBuYW1lTWF0Y2ggfSkgPT4ge1xuXHRcdFx0dGhpcy5jb21wb25lbnQuZW1pdChuYW1lLCBkYXRhLCBuYW1lTWF0Y2gpO1xuXHRcdH0pO1xuXHR9XG5cdGVtaXRVcChldmVudCkge1xuXHRcdHRoaXMuZ2V0RW1pdERpcmVjdGl2ZXMoZXZlbnQpLmZvckVhY2goKHsgbmFtZSwgZGF0YSwgbmFtZU1hdGNoIH0pID0+IHtcblx0XHRcdHRoaXMuY29tcG9uZW50LmVtaXRVcChuYW1lLCBkYXRhLCBuYW1lTWF0Y2gpO1xuXHRcdH0pO1xuXHR9XG5cdGVtaXRTZWxmKGV2ZW50KSB7XG5cdFx0dGhpcy5nZXRFbWl0RGlyZWN0aXZlcyhldmVudCkuZm9yRWFjaCgoeyBuYW1lLCBkYXRhIH0pID0+IHtcblx0XHRcdHRoaXMuY29tcG9uZW50LmVtaXRTZWxmKG5hbWUsIGRhdGEpO1xuXHRcdH0pO1xuXHR9XG5cdCR1cGRhdGVNb2RlbChtb2RlbCwgdmFsdWUsIHNob3VsZFJlbmRlciA9IHRydWUsIGRlYm91bmNlID0gdHJ1ZSkge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvbmVudC5zZXQobW9kZWwsIHZhbHVlLCBzaG91bGRSZW5kZXIsIGRlYm91bmNlKTtcblx0fVxuXHRwcm9wc1VwZGF0ZWRGcm9tUGFyZW50VmFsdWVDaGFuZ2VkKCkge1xuXHRcdHRoaXMuY29tcG9uZW50Ll91cGRhdGVGcm9tUGFyZW50UHJvcHModGhpcy5wcm9wc1VwZGF0ZWRGcm9tUGFyZW50VmFsdWUpO1xuXHR9XG5cdGZpbmdlcnByaW50VmFsdWVDaGFuZ2VkKCkge1xuXHRcdHRoaXMuY29tcG9uZW50LmZpbmdlcnByaW50ID0gdGhpcy5maW5nZXJwcmludFZhbHVlO1xuXHR9XG5cdGdldEVtaXREaXJlY3RpdmVzKGV2ZW50KSB7XG5cdFx0Y29uc3QgcGFyYW1zID0gZXZlbnQucGFyYW1zO1xuXHRcdGlmICghcGFyYW1zLmV2ZW50KSB0aHJvdyBuZXcgRXJyb3IoYE5vIGV2ZW50IG5hbWUgcHJvdmlkZWQgb24gZWxlbWVudDogJHtnZXRFbGVtZW50QXNUYWdUZXh0KGV2ZW50LmN1cnJlbnRUYXJnZXQpfS4gRGlkIHlvdSBmb3JnZXQgdG8gYWRkIHRoZSBcImRhdGEtbGl2ZS1ldmVudC1wYXJhbVwiIGF0dHJpYnV0ZT9gKTtcblx0XHRjb25zdCBldmVudEluZm8gPSBwYXJhbXMuZXZlbnQ7XG5cdFx0Y29uc3QgZXZlbnRBcmdzID0geyAuLi5wYXJhbXMgfTtcblx0XHRkZWxldGUgZXZlbnRBcmdzLmV2ZW50O1xuXHRcdGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMoZXZlbnRJbmZvKTtcblx0XHRjb25zdCBlbWl0cyA9IFtdO1xuXHRcdGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG5cdFx0XHRsZXQgbmFtZU1hdGNoID0gbnVsbDtcblx0XHRcdGRpcmVjdGl2ZS5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcblx0XHRcdFx0c3dpdGNoIChtb2RpZmllci5uYW1lKSB7XG5cdFx0XHRcdFx0Y2FzZSBcIm5hbWVcIjpcblx0XHRcdFx0XHRcdG5hbWVNYXRjaCA9IG1vZGlmaWVyLnZhbHVlO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIG1vZGlmaWVyICR7bW9kaWZpZXIubmFtZX0gaW4gZXZlbnQgXCIke2V2ZW50SW5mb31cIi5gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRlbWl0cy5wdXNoKHtcblx0XHRcdFx0bmFtZTogZGlyZWN0aXZlLmFjdGlvbixcblx0XHRcdFx0ZGF0YTogZXZlbnRBcmdzLFxuXHRcdFx0XHRuYW1lTWF0Y2hcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHJldHVybiBlbWl0cztcblx0fVxuXHRjcmVhdGVDb21wb25lbnQoKSB7XG5cdFx0Y29uc3QgaWQgPSB0aGlzLmVsZW1lbnQuaWQgfHwgbnVsbDtcblx0XHR0aGlzLmNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQodGhpcy5lbGVtZW50LCB0aGlzLm5hbWVWYWx1ZSwgdGhpcy5wcm9wc1ZhbHVlLCB0aGlzLmxpc3RlbmVyc1ZhbHVlLCBpZCwgTGl2ZUNvbnRyb2xsZXJEZWZhdWx0LmJhY2tlbmRGYWN0b3J5KHRoaXMpLCBuZXcgU3RpbXVsdXNFbGVtZW50RHJpdmVyKHRoaXMpKTtcblx0XHR0aGlzLnByb3hpZWRDb21wb25lbnQgPSBwcm94aWZ5Q29tcG9uZW50KHRoaXMuY29tcG9uZW50KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5lbGVtZW50LCBcIl9fY29tcG9uZW50XCIsIHtcblx0XHRcdHZhbHVlOiB0aGlzLnByb3hpZWRDb21wb25lbnQsXG5cdFx0XHR3cml0YWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdGlmICh0aGlzLmhhc0RlYm91bmNlVmFsdWUpIHRoaXMuY29tcG9uZW50LmRlZmF1bHREZWJvdW5jZSA9IHRoaXMuZGVib3VuY2VWYWx1ZTtcblx0XHRbXG5cdFx0XHRuZXcgTG9hZGluZ1BsdWdpbl9kZWZhdWx0KCksXG5cdFx0XHRuZXcgTGF6eVBsdWdpbl9kZWZhdWx0KCksXG5cdFx0XHRuZXcgVmFsaWRhdGVkRmllbGRzUGx1Z2luX2RlZmF1bHQoKSxcblx0XHRcdG5ldyBQYWdlVW5sb2FkaW5nUGx1Z2luX2RlZmF1bHQoKSxcblx0XHRcdG5ldyBQb2xsaW5nUGx1Z2luX2RlZmF1bHQoKSxcblx0XHRcdG5ldyBTZXRWYWx1ZU9udG9Nb2RlbEZpZWxkc1BsdWdpbl9kZWZhdWx0KCksXG5cdFx0XHRuZXcgQ2hpbGRDb21wb25lbnRQbHVnaW5fZGVmYXVsdCh0aGlzLmNvbXBvbmVudClcblx0XHRdLmZvckVhY2goKHBsdWdpbikgPT4ge1xuXHRcdFx0dGhpcy5jb21wb25lbnQuYWRkUGx1Z2luKHBsdWdpbik7XG5cdFx0fSk7XG5cdH1cblx0Y29ubmVjdENvbXBvbmVudCgpIHtcblx0XHR0aGlzLmNvbXBvbmVudC5jb25uZWN0KCk7XG5cdFx0dGhpcy5tdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5lbGVtZW50LCB7IGF0dHJpYnV0ZXM6IHRydWUgfSk7XG5cdFx0dGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoeyBldmVudCwgY2FsbGJhY2sgfSkgPT4ge1xuXHRcdFx0dGhpcy5jb21wb25lbnQuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG5cdFx0fSk7XG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFwiY29ubmVjdFwiKTtcblx0fVxuXHRkaXNjb25uZWN0Q29tcG9uZW50KCkge1xuXHRcdHRoaXMuY29tcG9uZW50LmRpc2Nvbm5lY3QoKTtcblx0XHR0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycy5mb3JFYWNoKCh7IGV2ZW50LCBjYWxsYmFjayB9KSA9PiB7XG5cdFx0XHR0aGlzLmNvbXBvbmVudC5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcblx0XHR9KTtcblx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoXCJkaXNjb25uZWN0XCIpO1xuXHR9XG5cdGhhbmRsZUlucHV0RXZlbnQoZXZlbnQpIHtcblx0XHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cdFx0aWYgKCF0YXJnZXQpIHJldHVybjtcblx0XHR0aGlzLnVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudCh0YXJnZXQsIFwiaW5wdXRcIik7XG5cdH1cblx0aGFuZGxlQ2hhbmdlRXZlbnQoZXZlbnQpIHtcblx0XHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cdFx0aWYgKCF0YXJnZXQpIHJldHVybjtcblx0XHR0aGlzLnVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudCh0YXJnZXQsIFwiY2hhbmdlXCIpO1xuXHR9XG5cdHVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudChlbGVtZW50LCBldmVudE5hbWUpIHtcblx0XHRpZiAoIWVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIHRoaXMuY29tcG9uZW50KSkgcmV0dXJuO1xuXHRcdGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCB1cGRhdGUgbW9kZWwgZm9yIG5vbiBIVE1MRWxlbWVudFwiKTtcblx0XHRpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgZWxlbWVudC50eXBlID09PSBcImZpbGVcIikge1xuXHRcdFx0Y29uc3Qga2V5ID0gZWxlbWVudC5uYW1lO1xuXHRcdFx0aWYgKGVsZW1lbnQuZmlsZXM/Lmxlbmd0aCkgdGhpcy5wZW5kaW5nRmlsZXNba2V5XSA9IGVsZW1lbnQ7XG5cdFx0XHRlbHNlIGlmICh0aGlzLnBlbmRpbmdGaWxlc1trZXldKSBkZWxldGUgdGhpcy5wZW5kaW5nRmlsZXNba2V5XTtcblx0XHR9XG5cdFx0Y29uc3QgbW9kZWxEaXJlY3RpdmUgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIGZhbHNlKTtcblx0XHRpZiAoIW1vZGVsRGlyZWN0aXZlKSByZXR1cm47XG5cdFx0Y29uc3QgbW9kZWxCaW5kaW5nID0gZ2V0X21vZGVsX2JpbmRpbmdfZGVmYXVsdChtb2RlbERpcmVjdGl2ZSk7XG5cdFx0aWYgKCFtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lKSBtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lID0gXCJpbnB1dFwiO1xuXHRcdGlmICh0aGlzLnBlbmRpbmdBY3Rpb25UcmlnZ2VyTW9kZWxFbGVtZW50ID09PSBlbGVtZW50KSBtb2RlbEJpbmRpbmcuc2hvdWxkUmVuZGVyID0gZmFsc2U7XG5cdFx0aWYgKGV2ZW50TmFtZSA9PT0gXCJjaGFuZ2VcIiAmJiBtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lID09PSBcImlucHV0XCIpIG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgPSBcImNoYW5nZVwiO1xuXHRcdGlmIChldmVudE5hbWUgJiYgbW9kZWxCaW5kaW5nLnRhcmdldEV2ZW50TmFtZSAhPT0gZXZlbnROYW1lKSByZXR1cm47XG5cdFx0aWYgKGZhbHNlID09PSBtb2RlbEJpbmRpbmcuZGVib3VuY2UpIGlmIChtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lID09PSBcImlucHV0XCIpIG1vZGVsQmluZGluZy5kZWJvdW5jZSA9IHRydWU7XG5cdFx0ZWxzZSBtb2RlbEJpbmRpbmcuZGVib3VuY2UgPSAwO1xuXHRcdGNvbnN0IGZpbmFsVmFsdWUgPSBnZXRWYWx1ZUZyb21FbGVtZW50KGVsZW1lbnQsIHRoaXMuY29tcG9uZW50LnZhbHVlU3RvcmUpO1xuXHRcdGNvbnN0IGZpbmFsVmFsdWVJc0VtcHR5ID0gZmluYWxWYWx1ZSA9PT0gXCJcIiB8fCBmaW5hbFZhbHVlID09PSBudWxsIHx8IGZpbmFsVmFsdWUgPT09IHZvaWQgMDtcblx0XHRpZiAoaXNUZXh0dWFsSW5wdXRFbGVtZW50KGVsZW1lbnQpIHx8IGlzVGV4dGFyZWFFbGVtZW50KGVsZW1lbnQpKSB7XG5cdFx0XHRpZiAoIWZpbmFsVmFsdWVJc0VtcHR5ICYmIG1vZGVsQmluZGluZy5taW5MZW5ndGggIT09IG51bGwgJiYgdHlwZW9mIGZpbmFsVmFsdWUgPT09IFwic3RyaW5nXCIgJiYgZmluYWxWYWx1ZS5sZW5ndGggPCBtb2RlbEJpbmRpbmcubWluTGVuZ3RoKSByZXR1cm47XG5cdFx0XHRpZiAoIWZpbmFsVmFsdWVJc0VtcHR5ICYmIG1vZGVsQmluZGluZy5tYXhMZW5ndGggIT09IG51bGwgJiYgdHlwZW9mIGZpbmFsVmFsdWUgPT09IFwic3RyaW5nXCIgJiYgZmluYWxWYWx1ZS5sZW5ndGggPiBtb2RlbEJpbmRpbmcubWF4TGVuZ3RoKSByZXR1cm47XG5cdFx0fVxuXHRcdGlmIChpc051bWVyaWNhbElucHV0RWxlbWVudChlbGVtZW50KSkge1xuXHRcdFx0aWYgKCFmaW5hbFZhbHVlSXNFbXB0eSkge1xuXHRcdFx0XHRjb25zdCBudW1lcmljVmFsdWUgPSBOdW1iZXIoZmluYWxWYWx1ZSk7XG5cdFx0XHRcdGlmIChtb2RlbEJpbmRpbmcubWluVmFsdWUgIT09IG51bGwgJiYgbnVtZXJpY1ZhbHVlIDwgbW9kZWxCaW5kaW5nLm1pblZhbHVlKSByZXR1cm47XG5cdFx0XHRcdGlmIChtb2RlbEJpbmRpbmcubWF4VmFsdWUgIT09IG51bGwgJiYgbnVtZXJpY1ZhbHVlID4gbW9kZWxCaW5kaW5nLm1heFZhbHVlKSByZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMuY29tcG9uZW50LnNldChtb2RlbEJpbmRpbmcubW9kZWxOYW1lLCBmaW5hbFZhbHVlLCBtb2RlbEJpbmRpbmcuc2hvdWxkUmVuZGVyLCBtb2RlbEJpbmRpbmcuZGVib3VuY2UpO1xuXHR9XG5cdGRpc3BhdGNoRXZlbnQobmFtZSwgZGV0YWlsID0ge30sIGNhbkJ1YmJsZSA9IHRydWUsIGNhbmNlbGFibGUgPSBmYWxzZSkge1xuXHRcdGRldGFpbC5jb250cm9sbGVyID0gdGhpcztcblx0XHRkZXRhaWwuY29tcG9uZW50ID0gdGhpcy5wcm94aWVkQ29tcG9uZW50O1xuXHRcdHRoaXMuZGlzcGF0Y2gobmFtZSwge1xuXHRcdFx0ZGV0YWlsLFxuXHRcdFx0cHJlZml4OiBcImxpdmVcIixcblx0XHRcdGNhbmNlbGFibGUsXG5cdFx0XHRidWJibGVzOiBjYW5CdWJibGVcblx0XHR9KTtcblx0fVxuXHRvbk11dGF0aW9ucyhtdXRhdGlvbnMpIHtcblx0XHRtdXRhdGlvbnMuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcblx0XHRcdGlmIChtdXRhdGlvbi50eXBlID09PSBcImF0dHJpYnV0ZXNcIiAmJiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSBcImlkXCIgJiYgdGhpcy5lbGVtZW50LmlkICE9PSB0aGlzLmNvbXBvbmVudC5pZCkge1xuXHRcdFx0XHR0aGlzLmRpc2Nvbm5lY3RDb21wb25lbnQoKTtcblx0XHRcdFx0dGhpcy5jcmVhdGVDb21wb25lbnQoKTtcblx0XHRcdFx0dGhpcy5jb25uZWN0Q29tcG9uZW50KCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn07XG5MaXZlQ29udHJvbGxlckRlZmF1bHQudmFsdWVzID0ge1xuXHRuYW1lOiBTdHJpbmcsXG5cdHVybDogU3RyaW5nLFxuXHRwcm9wczoge1xuXHRcdHR5cGU6IE9iamVjdCxcblx0XHRkZWZhdWx0OiB7fVxuXHR9LFxuXHRwcm9wc1VwZGF0ZWRGcm9tUGFyZW50OiB7XG5cdFx0dHlwZTogT2JqZWN0LFxuXHRcdGRlZmF1bHQ6IHt9XG5cdH0sXG5cdGxpc3RlbmVyczoge1xuXHRcdHR5cGU6IEFycmF5LFxuXHRcdGRlZmF1bHQ6IFtdXG5cdH0sXG5cdGV2ZW50c1RvRW1pdDoge1xuXHRcdHR5cGU6IEFycmF5LFxuXHRcdGRlZmF1bHQ6IFtdXG5cdH0sXG5cdGV2ZW50c1RvRGlzcGF0Y2g6IHtcblx0XHR0eXBlOiBBcnJheSxcblx0XHRkZWZhdWx0OiBbXVxuXHR9LFxuXHRkZWJvdW5jZToge1xuXHRcdHR5cGU6IE51bWJlcixcblx0XHRkZWZhdWx0OiAxNTBcblx0fSxcblx0ZmluZ2VycHJpbnQ6IHtcblx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0ZGVmYXVsdDogXCJcIlxuXHR9LFxuXHRyZXF1ZXN0TWV0aG9kOiB7XG5cdFx0dHlwZTogU3RyaW5nLFxuXHRcdGRlZmF1bHQ6IFwicG9zdFwiXG5cdH0sXG5cdGZldGNoQ3JlZGVudGlhbHM6IHtcblx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0ZGVmYXVsdDogXCJzYW1lLW9yaWdpblwiXG5cdH1cbn07XG5MaXZlQ29udHJvbGxlckRlZmF1bHQuYmFja2VuZEZhY3RvcnkgPSAoY29udHJvbGxlcikgPT4gbmV3IEJhY2tlbmRfZGVmYXVsdChjb250cm9sbGVyLnVybFZhbHVlLCBjb250cm9sbGVyLnJlcXVlc3RNZXRob2RWYWx1ZSwgY29udHJvbGxlci5mZXRjaENyZWRlbnRpYWxzVmFsdWUpO1xuZXhwb3J0IHsgQ29tcG9uZW50LCBMaXZlQ29udHJvbGxlckRlZmF1bHQgYXMgZGVmYXVsdCwgZ2V0Q29tcG9uZW50IH07XG4iXSwibmFtZXMiOlsiQ29udHJvbGxlciIsIlJFVkVSVF9ERUxBWSIsIl9kZWZhdWx0IiwiX0NvbnRyb2xsZXIiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdCIsInJldmVydFRpbWVyIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwiaGFzQnV0dG9uVGFyZ2V0IiwiYnV0dG9uVGFyZ2V0IiwiaGlkZGVuIiwiY29weSIsIl90aGlzIiwiaGFzQ29kZVRhcmdldCIsInRleHQiLCJjb2RlVGFyZ2V0IiwidGV4dENvbnRlbnQiLCJ0cmltIiwicHJldmlvdXNUZXh0IiwiaGFzTGFiZWxUYXJnZXQiLCJsYWJlbFRhcmdldCIsIndyaXRlVGV4dCIsInRoZW4iLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZGlzY29ubmVjdCIsIl9kZWZpbmVQcm9wZXJ0eSIsImRlZmF1bHQiLCJ1cGRhdGUiLCJyZXZlYWwiLCJoaWRkZW5DYXJkcyIsInNsaWNlIiwic3RlcFZhbHVlIiwiZm9yRWFjaCIsImNhcmQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjYXJkcyIsInRvdGFsIiwibGVuZ3RoIiwidmlzaWJsZSIsImhhc0NvdW50VGFyZ2V0IiwiY291bnRUYXJnZXQiLCJoYXNBY3Rpb25zVGFyZ2V0IiwiYWN0aW9uc1RhcmdldCIsImNsYXNzTGlzdCIsImFkZCIsImhhc0dyaWRUYXJnZXQiLCJBcnJheSIsImZyb20iLCJncmlkVGFyZ2V0IiwiY2hpbGRyZW4iLCJmaWx0ZXIiLCJoYXNBdHRyaWJ1dGUiLCJzdGVwIiwidHlwZSIsIk51bWJlciIsIkxPQ0tfQ0xBU1MiLCJfbGVuIiwiYXJncyIsIl9rZXkiLCJjYWxsIiwiY29uY2F0IiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsImV2ZW50IiwidGFyZ2V0IiwiZGlhbG9nVGFyZ2V0IiwiY2xvc2UiLCJvcGVuIiwiaGFzRGlhbG9nVGFyZ2V0Iiwic2hvd01vZGFsIiwiaGFzVG9nZ2xlVGFyZ2V0IiwidG9nZ2xlVGFyZ2V0Iiwic2V0QXR0cmlidXRlIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYm91bmRIYW5kbGVPdXRzaWRlQ2xpY2siLCJyZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xvc2VPbkxpbmsiLCJpbml0Q2Fyb3VzZWxzIiwiZSIsImlkIiwibGVuIiwibWF4IiwicGFyc2VJbnQiLCJnZXRBdHRyaWJ1dGUiLCJjb3VudGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc05hbWUiLCJoaW50IiwidG9nZ2xlIiwiY2hlY2tWYWxpZGl0eSIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwiZGVzYyIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl90eXBlb2YiLCJfX2F3YWl0IiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9zbGljZWRUb0FycmF5IiwiYXJyIiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsIm8iLCJtaW5MZW4iLCJfYXJyYXlMaWtlVG9BcnJheSIsIm4iLCJ0b1N0cmluZyIsInRlc3QiLCJhcnIyIiwiX2kiLCJfcyIsIl9lIiwiX3giLCJfciIsIl9hcnIiLCJfbiIsIl9kIiwiaXNBcnJheSIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInByb3BzIiwiZGVzY3JpcHRvciIsIl90b1Byb3BlcnR5S2V5IiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX3RvUHJpbWl0aXZlIiwiU3RyaW5nIiwiaW5wdXQiLCJwcmltIiwidG9QcmltaXRpdmUiLCJyZXMiLCJCYWNrZW5kUmVxdWVzdF9kZWZhdWx0IiwicHJvbWlzZSIsImFjdGlvbnMiLCJ1cGRhdGVNb2RlbHMiLCJpc1Jlc29sdmVkIiwicmVzcG9uc2UiLCJ1cGRhdGVkTW9kZWxzIiwiY29udGFpbnNPbmVPZkFjdGlvbnMiLCJ0YXJnZXRlZEFjdGlvbnMiLCJhY3Rpb24iLCJpbmNsdWRlcyIsImFyZUFueU1vZGVsc1VwZGF0ZWQiLCJ0YXJnZXRlZE1vZGVscyIsIm1vZGVsIiwiUmVxdWVzdEJ1aWxkZXJfZGVmYXVsdCIsInVybCIsImNyZWRlbnRpYWxzIiwiYnVpbGRSZXF1ZXN0IiwidXBkYXRlZCIsInVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQiLCJmaWxlcyIsInNwbGl0VXJsIiwic3BsaXQiLCJfc3BsaXRVcmwiLCJfc3BsaXRVcmwyIiwicXVlcnlTdHJpbmciLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJmZXRjaE9wdGlvbnMiLCJoZWFkZXJzIiwiQWNjZXB0Iiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNlYXJjaCIsInRvdGFsRmlsZXMiLCJlbnRyaWVzIiwicmVkdWNlIiwiY3VycmVudCIsImhhc0ZpbmdlcnByaW50cyIsIndpbGxEYXRhRml0SW5VcmwiLCJKU09OIiwic3RyaW5naWZ5Iiwic2V0IiwicmVxdWVzdERhdGEiLCJwcm9wc0Zyb21QYXJlbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiX2kyIiwiX09iamVjdCRlbnRyaWVzIiwiX09iamVjdCRlbnRyaWVzJF9pIiwiYm9keSIsInBhcmFtc1N0cmluZyIsInByb3BzSnNvbiIsInVwZGF0ZWRKc29uIiwiY2hpbGRyZW5Kc29uIiwicHJvcHNGcm9tUGFyZW50SnNvbiIsIkJhY2tlbmRfZGVmYXVsdCIsInJlcXVlc3RCdWlsZGVyIiwibWFrZVJlcXVlc3QiLCJfdGhpcyRyZXF1ZXN0QnVpbGRlciQiLCJmZXRjaCIsIm1hcCIsImJhY2tlbmRBY3Rpb24iLCJCYWNrZW5kUmVzcG9uc2VfZGVmYXVsdCIsIl9nZXRCb2R5IiwiX2NhbGxlZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJnZXRCb2R5IiwiZ2V0TGl2ZVVybCIsImxpdmVVcmwiLCJnZXQiLCJnZXRFbGVtZW50QXNUYWdUZXh0IiwiZWxlbWVudCIsImlubmVySFRNTCIsIm91dGVySFRNTCIsImluZGV4T2YiLCJjb21wb25lbnRNYXBCeUVsZW1lbnQiLCJXZWFrTWFwIiwiY29tcG9uZW50TWFwQnlDb21wb25lbnQiLCJNYXAiLCJyZWdpc3RlckNvbXBvbmVudCIsImNvbXBvbmVudCIsInVucmVnaXN0ZXJDb21wb25lbnQiLCJnZXRDb21wb25lbnQiLCJjb3VudCIsIm1heENvdW50IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJmaW5kQ29tcG9uZW50cyIsImN1cnJlbnRDb21wb25lbnQiLCJvbmx5UGFyZW50cyIsIm9ubHlNYXRjaE5hbWUiLCJjb21wb25lbnRzIiwiY29tcG9uZW50TmFtZSIsImNvbnRhaW5zIiwiZmluZENoaWxkcmVuIiwiZm91bmRDaGlsZENvbXBvbmVudCIsImNoaWxkQ29tcG9uZW50TmFtZSIsImNoaWxkQ29tcG9uZW50IiwiZmluZFBhcmVudCIsInBhcmVudEVsZW1lbnQiLCJwYXJzZURpcmVjdGl2ZXMiLCJjb250ZW50IiwiZGlyZWN0aXZlcyIsImN1cnJlbnRBY3Rpb25OYW1lIiwiY3VycmVudEFyZ3VtZW50VmFsdWUiLCJjdXJyZW50QXJndW1lbnRzIiwiY3VycmVudE1vZGlmaWVycyIsImdldExhc3RBY3Rpb25OYW1lIiwicHVzaEluc3RydWN0aW9uIiwibW9kaWZpZXJzIiwiZ2V0U3RyaW5nIiwicHVzaEFyZ3VtZW50IiwicHVzaE1vZGlmaWVyIiwiY2hhciIsImNvbWJpbmVTcGFjZWRBcnJheSIsInBhcnRzIiwiZmluYWxQYXJ0cyIsInBhcnQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJ0cmltQWxsIiwic3RyIiwicmVwbGFjZSIsIm5vcm1hbGl6ZU1vZGVsTmFtZSIsInMiLCJqb2luIiwiZ2V0VmFsdWVGcm9tRWxlbWVudCIsInZhbHVlU3RvcmUiLCJIVE1MSW5wdXRFbGVtZW50IiwibW9kZWxOYW1lRGF0YSIsImdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQiLCJtb2RlbFZhbHVlIiwiZ2V0TXVsdGlwbGVDaGVja2JveFZhbHVlIiwiY2hlY2tlZCIsImlucHV0VmFsdWUiLCJIVE1MU2VsZWN0RWxlbWVudCIsIm11bHRpcGxlIiwic2VsZWN0ZWRPcHRpb25zIiwiZWwiLCJkYXRhc2V0Iiwic2V0VmFsdWVPbkVsZW1lbnQiLCJzb21lIiwiYXJyYXlXcmFwcGVkVmFsdWUiLCJvcHRpb25zIiwib3B0aW9uIiwic2VsZWN0ZWQiLCJnZXRBbGxNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50cyIsImRpcmVjdGl2ZSIsInRocm93T25NaXNzaW5nIiwiZGF0YU1vZGVsRGlyZWN0aXZlcyIsImZvcm1FbGVtZW50IiwiY2xvc2VzdCIsImVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50IiwiY2xvbmVIVE1MRWxlbWVudCIsIm5ld0VsZW1lbnQiLCJjbG9uZU5vZGUiLCJIVE1MRWxlbWVudCIsImh0bWxUb0VsZW1lbnQiLCJodG1sIiwidGVtcGxhdGUiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGRFbGVtZW50Q291bnQiLCJjaGlsZCIsImZpcnN0RWxlbWVudENoaWxkIiwiY3VycmVudFZhbHVlcyIsImZpbmFsVmFsdWVzIiwiaW5kZXgiLCJzcGxpY2UiLCJpc1RleHR1YWxJbnB1dEVsZW1lbnQiLCJpc1RleHRhcmVhRWxlbWVudCIsIkhUTUxUZXh0QXJlYUVsZW1lbnQiLCJpc051bWVyaWNhbElucHV0RWxlbWVudCIsIkhvb2tNYW5hZ2VyX2RlZmF1bHQiLCJob29rcyIsInJlZ2lzdGVyIiwiaG9va05hbWUiLCJjYWxsYmFjayIsInVucmVnaXN0ZXIiLCJ0cmlnZ2VySG9vayIsIklkaW9tb3JwaCIsIkVNUFRZX1NFVCIsIlNldCIsImRlZmF1bHRzIiwibW9ycGhTdHlsZSIsImNhbGxiYWNrcyIsImJlZm9yZU5vZGVBZGRlZCIsIm5vT3AiLCJhZnRlck5vZGVBZGRlZCIsImJlZm9yZU5vZGVNb3JwaGVkIiwiYWZ0ZXJOb2RlTW9ycGhlZCIsImJlZm9yZU5vZGVSZW1vdmVkIiwiYWZ0ZXJOb2RlUmVtb3ZlZCIsImJlZm9yZUF0dHJpYnV0ZVVwZGF0ZWQiLCJoZWFkIiwic3R5bGUiLCJzaG91bGRQcmVzZXJ2ZSIsImVsdCIsInNob3VsZFJlQXBwZW5kIiwic2hvdWxkUmVtb3ZlIiwiYWZ0ZXJIZWFkTW9ycGhlZCIsIm1vcnBoIiwib2xkTm9kZSIsIm5ld0NvbnRlbnQiLCJjb25maWciLCJEb2N1bWVudCIsInBhcnNlQ29udGVudCIsIm5vcm1hbGl6ZWRDb250ZW50Iiwibm9ybWFsaXplQ29udGVudCIsImN0eCIsImNyZWF0ZU1vcnBoQ29udGV4dCIsIm1vcnBoTm9ybWFsaXplZENvbnRlbnQiLCJub3JtYWxpemVkTmV3Q29udGVudCIsImJsb2NrIiwib2xkSGVhZCIsInF1ZXJ5U2VsZWN0b3IiLCJuZXdIZWFkIiwicHJvbWlzZXMiLCJoYW5kbGVIZWFkRWxlbWVudCIsImFsbCIsImFzc2lnbiIsImlnbm9yZSIsIm1vcnBoQ2hpbGRyZW4iLCJiZXN0TWF0Y2giLCJmaW5kQmVzdE5vZGVNYXRjaCIsInByZXZpb3VzU2libGluZyIsIm5leHRTaWJsaW5nIiwibW9ycGhlZE5vZGUiLCJtb3JwaE9sZE5vZGVUbyIsImluc2VydFNpYmxpbmdzIiwiaWdub3JlVmFsdWVPZkFjdGl2ZUVsZW1lbnQiLCJwb3NzaWJsZUFjdGl2ZUVsZW1lbnQiLCJpZ25vcmVBY3RpdmVWYWx1ZSIsImFjdGl2ZUVsZW1lbnQiLCJpZ25vcmVBY3RpdmUiLCJpc1NvZnRNYXRjaCIsInJlcGxhY2VDaGlsZCIsIkhUTUxIZWFkRWxlbWVudCIsInN5bmNOb2RlRnJvbSIsIm5ld1BhcmVudCIsIm9sZFBhcmVudCIsIm5leHROZXdDaGlsZCIsImZpcnN0Q2hpbGQiLCJpbnNlcnRpb25Qb2ludCIsIm5ld0NoaWxkIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVJZHNGcm9tQ29uc2lkZXJhdGlvbiIsImlzSWRTZXRNYXRjaCIsImlkU2V0TWF0Y2giLCJmaW5kSWRTZXRNYXRjaCIsInJlbW92ZU5vZGVzQmV0d2VlbiIsInNvZnRNYXRjaCIsImZpbmRTb2Z0TWF0Y2giLCJpbnNlcnRCZWZvcmUiLCJ0ZW1wTm9kZSIsInJlbW92ZU5vZGUiLCJpZ25vcmVBdHRyaWJ1dGUiLCJhdHRyIiwidG8iLCJ1cGRhdGVUeXBlIiwibm9kZVR5cGUiLCJmcm9tQXR0cmlidXRlcyIsImF0dHJpYnV0ZXMiLCJ0b0F0dHJpYnV0ZXMiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwiZnJvbUF0dHJpYnV0ZSIsImYiLCJ0b0F0dHJpYnV0ZSIsIm5vZGVWYWx1ZSIsInN5bmNJbnB1dFZhbHVlIiwic3luY0Jvb2xlYW5BdHRyaWJ1dGUiLCJhdHRyaWJ1dGVOYW1lIiwiaWdub3JlVXBkYXRlIiwiZnJvbVZhbHVlIiwidG9WYWx1ZSIsIkhUTUxPcHRpb25FbGVtZW50IiwibmV3SGVhZFRhZyIsImN1cnJlbnRIZWFkIiwiYWRkZWQiLCJyZW1vdmVkIiwicHJlc2VydmVkIiwibm9kZXNUb0FwcGVuZCIsImhlYWRNZXJnZVN0eWxlIiwic3JjVG9OZXdIZWFkTm9kZXMiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwibmV3SGVhZENoaWxkIiwiX2l0ZXJhdG9yMyIsIl9zdGVwMyIsImN1cnJlbnRIZWFkRWx0IiwiaW5OZXdDb250ZW50IiwiaGFzIiwiaXNSZUFwcGVuZGVkIiwiaXNQcmVzZXJ2ZWQiLCJsb2ciLCJfbG9vcCIsIm5ld05vZGUiLCJfbm9kZXNUb0FwcGVuZCIsIl9pMyIsIm5ld0VsdCIsImNyZWF0ZVJhbmdlIiwiY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50IiwiaHJlZiIsInNyYyIsIl9yZXNvbHZlIiwiX2k0IiwiX3JlbW92ZWQiLCJyZW1vdmVkRWxlbWVudCIsInJlbW92ZUNoaWxkIiwia2VwdCIsIm1lcmdlRGVmYXVsdHMiLCJmaW5hbENvbmZpZyIsImlkTWFwIiwiY3JlYXRlSWRNYXAiLCJkZWFkSWRzIiwibm9kZTEiLCJub2RlMiIsInRhZ05hbWUiLCJnZXRJZEludGVyc2VjdGlvbkNvdW50Iiwic3RhcnRJbmNsdXNpdmUiLCJlbmRFeGNsdXNpdmUiLCJuZXdDaGlsZFBvdGVudGlhbElkQ291bnQiLCJwb3RlbnRpYWxNYXRjaCIsIm90aGVyTWF0Y2hDb3VudCIsInBvdGVudGlhbFNvZnRNYXRjaCIsInNpYmxpbmdTb2Z0TWF0Y2hDb3VudCIsInBhcnNlciIsIkRPTVBhcnNlciIsImNvbnRlbnRXaXRoU3Znc1JlbW92ZWQiLCJtYXRjaCIsInBhcnNlRnJvbVN0cmluZyIsImdlbmVyYXRlZEJ5SWRpb21vcnBoIiwiaHRtbEVsZW1lbnQiLCJOb2RlIiwiZHVtbXlQYXJlbnQiLCJfaTUiLCJfYXJyMiIsInN0YWNrIiwibm9kZSIsImN1cnJlbnRFbGVtZW50IiwiYmVzdEVsZW1lbnQiLCJzY29yZSIsIm5ld1Njb3JlIiwic2NvcmVFbGVtZW50IiwiaXNJZEluQ29uc2lkZXJhdGlvbiIsImlkSXNXaXRoaW5Ob2RlIiwidGFyZ2V0Tm9kZSIsImlkU2V0IiwiX2l0ZXJhdG9yNCIsIl9zdGVwNCIsInNvdXJjZVNldCIsIm1hdGNoQ291bnQiLCJfaXRlcmF0b3I1IiwiX3N0ZXA1IiwicG9wdWxhdGVJZE1hcEZvck5vZGUiLCJub2RlUGFyZW50IiwiaWRFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfaXRlcmF0b3I2IiwiX3N0ZXA2Iiwib2xkQ29udGVudCIsIm5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uIiwic3luY0F0dHJpYnV0ZXMiLCJmcm9tRWwiLCJ0b0VsIiwiZXhlY3V0ZU1vcnBoZG9tIiwicm9vdEZyb21FbGVtZW50Iiwicm9vdFRvRWxlbWVudCIsIm1vZGlmaWVkRmllbGRFbGVtZW50cyIsImdldEVsZW1lbnRWYWx1ZSIsImV4dGVybmFsTXV0YXRpb25UcmFja2VyIiwib3JpZ2luYWxFbGVtZW50SWRzVG9Td2FwQWZ0ZXIiLCJvcmlnaW5hbEVsZW1lbnRzVG9QcmVzZXJ2ZSIsIm1hcmtFbGVtZW50QXNOZWVkaW5nUG9zdE1vcnBoU3dhcCIsInJlcGxhY2VXaXRoQ2xvbmUiLCJvbGRFbGVtZW50IiwiY2xvbmVkT2xkRWxlbWVudCIsInJlcGxhY2VXaXRoIiwiX2Zyb21FbCRwYXJlbnRFbGVtZW50IiwiRWxlbWVudCIsImNsb25lZEZyb21FbCIsIl9feCIsIkFscGluZSIsIndhc0VsZW1lbnRBZGRlZCIsImluc2VydEFkamFjZW50RWxlbWVudCIsImVsZW1lbnRDaGFuZ2VzIiwiZ2V0Q2hhbmdlZEVsZW1lbnQiLCJhcHBseVRvRWxlbWVudCIsIm5vZGVOYW1lIiwidG9VcHBlckNhc2UiLCJpc0VxdWFsTm9kZSIsIm5vcm1hbGl6ZWRGcm9tRWwiLCJub3JtYWxpemVkVG9FbCIsIm9yaWdpbmFsRWxlbWVudCIsIkNoYW5naW5nSXRlbXNUcmFja2VyX2RlZmF1bHQiLCJjaGFuZ2VkSXRlbXMiLCJyZW1vdmVkSXRlbXMiLCJzZXRJdGVtIiwiaXRlbU5hbWUiLCJuZXdWYWx1ZSIsInByZXZpb3VzVmFsdWUiLCJyZW1vdmVkUmVjb3JkIiwib3JpZ2luYWwiLCJvcmlnaW5hbFJlY29yZCIsInJlbW92ZUl0ZW0iLCJjdXJyZW50VmFsdWUiLCJ0cnVlT3JpZ2luYWxWYWx1ZSIsImdldENoYW5nZWRJdGVtcyIsIl9yZWYiLCJfcmVmMiIsImdldFJlbW92ZWRJdGVtcyIsImlzRW1wdHkiLCJzaXplIiwiRWxlbWVudENoYW5nZXMiLCJhZGRlZENsYXNzZXMiLCJyZW1vdmVkQ2xhc3NlcyIsInN0eWxlQ2hhbmdlcyIsImF0dHJpYnV0ZUNoYW5nZXMiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiYWRkU3R5bGUiLCJzdHlsZU5hbWUiLCJvcmlnaW5hbFZhbHVlIiwicmVtb3ZlU3R5bGUiLCJhZGRBdHRyaWJ1dGUiLCJnZXRBZGRlZENsYXNzZXMiLCJnZXRSZW1vdmVkQ2xhc3NlcyIsImdldENoYW5nZWRTdHlsZXMiLCJnZXRSZW1vdmVkU3R5bGVzIiwiZ2V0Q2hhbmdlZEF0dHJpYnV0ZXMiLCJnZXRSZW1vdmVkQXR0cmlidXRlcyIsIl9lbGVtZW50JGNsYXNzTGlzdCIsIl9lbGVtZW50JGNsYXNzTGlzdDIiLCJjaGFuZ2UiLCJzZXRQcm9wZXJ0eSIsInJlbW92ZVByb3BlcnR5IiwiRXh0ZXJuYWxNdXRhdGlvblRyYWNrZXJfZGVmYXVsdCIsInNob3VsZFRyYWNrQ2hhbmdlQ2FsbGJhY2siLCJjaGFuZ2VkRWxlbWVudHMiLCJjaGFuZ2VkRWxlbWVudHNDb3VudCIsImFkZGVkRWxlbWVudHMiLCJyZW1vdmVkRWxlbWVudHMiLCJpc1N0YXJ0ZWQiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm9uTXV0YXRpb25zIiwiYmluZCIsInN0YXJ0Iiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJhdHRyaWJ1dGVPbGRWYWx1ZSIsImdldEFkZGVkRWxlbWVudHMiLCJoYW5kbGVQZW5kaW5nQ2hhbmdlcyIsInRha2VSZWNvcmRzIiwibXV0YXRpb25zIiwiaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucyIsIl9pdGVyYXRvcjciLCJfc3RlcDciLCJtdXRhdGlvbiIsImlzRWxlbWVudEFkZGVkQnlUcmFuc2xhdGlvbiIsImlzQ2hhbmdlSW5BZGRlZEVsZW1lbnQiLCJfaXRlcmF0b3I4IiwiX3N0ZXA4IiwiYWRkZWRFbGVtZW50IiwiaGFuZGxlQ2hpbGRMaXN0TXV0YXRpb24iLCJoYW5kbGVBdHRyaWJ1dGVNdXRhdGlvbiIsIl90aGlzMiIsImFkZGVkTm9kZXMiLCJyZW1vdmVkTm9kZXMiLCJjaGFuZ2VkRWxlbWVudCIsImhhbmRsZUNsYXNzQXR0cmlidXRlTXV0YXRpb24iLCJoYW5kbGVTdHlsZUF0dHJpYnV0ZU11dGF0aW9uIiwiaGFuZGxlR2VuZXJpY0F0dHJpYnV0ZU11dGF0aW9uIiwicHJldmlvdXNWYWx1ZXMiLCJvbGRWYWx1ZSIsIm5ld1ZhbHVlcyIsImFkZGVkVmFsdWVzIiwicmVtb3ZlZFZhbHVlcyIsInByZXZpb3VzU3R5bGVzIiwiZXh0cmFjdFN0eWxlcyIsIm5ld1N0eWxlcyIsImFkZGVkT3JDaGFuZ2VkU3R5bGVzIiwicmVtb3ZlZFN0eWxlcyIsInN0eWxlcyIsInN0eWxlT2JqZWN0IiwicHJvcGVydHkiLCJVbnN5bmNlZElucHV0c1RyYWNrZXJfZGVmYXVsdCIsIm1vZGVsRWxlbWVudFJlc29sdmVyIiwiX3RoaXMzIiwiZWxlbWVudEV2ZW50TGlzdGVuZXJzIiwiaGFuZGxlSW5wdXRFdmVudCIsInVuc3luY2VkSW5wdXRzIiwiVW5zeW5jZWRJbnB1dENvbnRhaW5lciIsImFjdGl2YXRlIiwiX3RoaXM0IiwiX3JlZjMiLCJkZWFjdGl2YXRlIiwiX3RoaXM1IiwiX3JlZjQiLCJtYXJrTW9kZWxBc1N5bmNlZCIsIm1vZGVsTmFtZSIsInVwZGF0ZU1vZGVsRnJvbUVsZW1lbnQiLCJnZXRNb2RlbE5hbWUiLCJnZXRVbnN5bmNlZElucHV0cyIsImFsbFVuc3luY2VkSW5wdXRzIiwiZ2V0VW5zeW5jZWRNb2RlbHMiLCJnZXRVbnN5bmNlZE1vZGVsTmFtZXMiLCJyZXNldFVuc3luY2VkRmllbGRzIiwidW5zeW5jZWROb25Nb2RlbEZpZWxkcyIsInVuc3luY2VkTW9kZWxOYW1lcyIsInVuc3luY2VkTW9kZWxGaWVsZHMiLCJfdGhpczYiLCJnZXREZWVwRGF0YSIsImRhdGEiLCJwcm9wZXJ0eVBhdGgiLCJfcGFyc2VEZWVwRGF0YSIsInBhcnNlRGVlcERhdGEiLCJjdXJyZW50TGV2ZWxEYXRhIiwiZmluYWxLZXkiLCJmaW5hbERhdGEiLCJwYXJzZSIsIlZhbHVlU3RvcmVfZGVmYXVsdCIsImRpcnR5UHJvcHMiLCJwZW5kaW5nUHJvcHMiLCJub3JtYWxpemVkTmFtZSIsImdldE9yaWdpbmFsUHJvcHMiLCJfb2JqZWN0U3ByZWFkIiwiZ2V0RGlydHlQcm9wcyIsImdldFVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQiLCJmbHVzaERpcnR5UHJvcHNUb1BlbmRpbmciLCJyZWluaXRpYWxpemVBbGxQcm9wcyIsInB1c2hQZW5kaW5nUHJvcHNCYWNrVG9EaXJ0eSIsInN0b3JlTmV3UHJvcHNGcm9tUGFyZW50IiwiY2hhbmdlZCIsIl9pNiIsIl9PYmplY3QkZW50cmllczIiLCJfT2JqZWN0JGVudHJpZXMyJF9pIiwiQ29tcG9uZW50IiwibGlzdGVuZXJzIiwiYmFja2VuZCIsImVsZW1lbnREcml2ZXIiLCJfdGhpczciLCJmaW5nZXJwcmludCIsImRlZmF1bHREZWJvdW5jZSIsImJhY2tlbmRSZXF1ZXN0IiwicGVuZGluZ0FjdGlvbnMiLCJwZW5kaW5nRmlsZXMiLCJpc1JlcXVlc3RQZW5kaW5nIiwicmVxdWVzdERlYm91bmNlVGltZW91dCIsImxpc3RlbmVyIiwiX3RoaXM3JGxpc3RlbmVycyRnZXQiLCJ1bnN5bmNlZElucHV0c1RyYWNrZXIiLCJyZXNldFByb21pc2UiLCJhZGRQbHVnaW4iLCJwbHVnaW4iLCJhdHRhY2hUb0NvbXBvbmVudCIsImNsZWFyUmVxdWVzdERlYm91bmNlVGltZW91dCIsIm9uIiwib2ZmIiwicmVSZW5kZXIiLCJkZWJvdW5jZSIsIm5leHRSZXF1ZXN0UHJvbWlzZSIsImlzQ2hhbmdlZCIsImRlYm91bmNlZFN0YXJ0UmVxdWVzdCIsImdldERhdGEiLCJyZW5kZXIiLCJ0cnlTdGFydGluZ1JlcXVlc3QiLCJlbWl0Iiwib25seU1hdGNoaW5nQ29tcG9uZW50c05hbWVkIiwicGVyZm9ybUVtaXQiLCJlbWl0VXAiLCJlbWl0U2VsZiIsImRvRW1pdCIsIm1hdGNoaW5nTmFtZSIsIl90aGlzOCIsImlzVHVyYm9FbmFibGVkIiwiVHVyYm8iLCJwZXJmb3JtUmVxdWVzdCIsIl90aGlzOSIsInRoaXNQcm9taXNlUmVzb2x2ZSIsIm5leHRSZXF1ZXN0UHJvbWlzZVJlc29sdmUiLCJmaWxlc1RvU2VuZCIsIl9pNyIsIl9PYmplY3QkZW50cmllczMiLCJfT2JqZWN0JGVudHJpZXMzJF9pIiwicmVxdWVzdENvbmZpZyIsIl9yZWY1IiwiX2NhbGxlZTIiLCJfaGVhZGVycyRnZXQiLCJiYWNrZW5kUmVzcG9uc2UiLCJfaTgiLCJfT2JqZWN0JHZhbHVlcyIsImNvbnRyb2xzIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiZGlzcGxheUVycm9yIiwicmVuZGVyRXJyb3IiLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwiVVJMIiwiaGFzaCIsIm9yaWdpbiIsInByb2Nlc3NSZXJlbmRlciIsIl94MiIsIl90aGlzMTAiLCJzaG91bGRSZW5kZXIiLCJ2aXNpdCIsIm1vZGlmaWVkTW9kZWxWYWx1ZXMiLCJtYXRjaGVzIiwiY29uc29sZSIsIm5ld1Byb3BzIiwiZ2V0Q29tcG9uZW50UHJvcHMiLCJldmVudHNUb0VtaXQiLCJnZXRFdmVudHNUb0VtaXQiLCJicm93c2VyRXZlbnRzVG9EaXNwYXRjaCIsImdldEJyb3dzZXJFdmVudHNUb0Rpc3BhdGNoIiwiX3JlZjYiLCJfcmVmNyIsInBheWxvYWQiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJidWJibGVzIiwiY2FsY3VsYXRlRGVib3VuY2UiLCJfdGhpczExIiwibW9kYWwiLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4IiwicG9zaXRpb24iLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImlmcmFtZSIsImJvcmRlclJhZGl1cyIsImZsZXhHcm93IiwicHJlcGVuZCIsIm92ZXJmbG93IiwiY29udGVudFdpbmRvdyIsIndyaXRlIiwiY2xvc2VNb2RhbCIsImZvY3VzIiwiX3RoaXMxMiIsIl91cGRhdGVGcm9tUGFyZW50UHJvcHMiLCJwcm94aWZ5Q29tcG9uZW50IiwiUHJveHkiLCJwcm9wIiwiY2FsbGFibGUiLCJfbGVuMiIsIl9rZXkyIiwiUmVmbGVjdCIsIlN0aW11bHVzRWxlbWVudERyaXZlciIsImNvbnRyb2xsZXIiLCJtb2RlbERpcmVjdGl2ZSIsInByb3BzVmFsdWUiLCJldmVudHNUb0VtaXRWYWx1ZSIsImV2ZW50c1RvRGlzcGF0Y2hWYWx1ZSIsImdldF9tb2RlbF9iaW5kaW5nX2RlZmF1bHQiLCJ0YXJnZXRFdmVudE5hbWUiLCJtaW5MZW5ndGgiLCJtYXhMZW5ndGgiLCJtaW5WYWx1ZSIsIm1heFZhbHVlIiwibW9kaWZpZXIiLCJwYXJzZUZsb2F0IiwiX21vZGVsRGlyZWN0aXZlJGFjdGlvIiwiX21vZGVsRGlyZWN0aXZlJGFjdGlvMiIsImlubmVyTW9kZWxOYW1lIiwiQ2hpbGRDb21wb25lbnRQbHVnaW5fZGVmYXVsdCIsInBhcmVudE1vZGVsQmluZGluZ3MiLCJfdGhpczEzIiwiZ2V0Q2hpbGRyZW5GaW5nZXJwcmludHMiLCJub3RpZnlQYXJlbnRNb2RlbENoYW5nZSIsImZpbmdlcnByaW50cyIsImdldENoaWxkcmVuIiwidGFnIiwidG9Mb3dlckNhc2UiLCJwYXJlbnRDb21wb25lbnQiLCJtb2RlbEJpbmRpbmciLCJMYXp5UGx1Z2luX2RlZmF1bHQiLCJpbnRlcnNlY3Rpb25PYnNlcnZlciIsIl9jb21wb25lbnQkZWxlbWVudCRhdCIsIl90aGlzMTQiLCJnZXROYW1lZEl0ZW0iLCJnZXRPYnNlcnZlciIsIl90aGlzMTQkaW50ZXJzZWN0aW9uTyIsInVub2JzZXJ2ZSIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZXIiLCJpc0ludGVyc2VjdGluZyIsIkxvYWRpbmdQbHVnaW5fZGVmYXVsdCIsIl90aGlzMTUiLCJyZXF1ZXN0Iiwic3RhcnRMb2FkaW5nIiwiZmluaXNoTG9hZGluZyIsInRhcmdldEVsZW1lbnQiLCJoYW5kbGVMb2FkaW5nVG9nZ2xlIiwiaXNMb2FkaW5nIiwiX3RoaXMxNiIsImFkZEF0dHJpYnV0ZXMiLCJyZW1vdmVBdHRyaWJ1dGVzIiwiZ2V0TG9hZGluZ0RpcmVjdGl2ZXMiLCJfcmVmOCIsImhhbmRsZUxvYWRpbmdEaXJlY3RpdmUiLCJfdGhpczE3IiwiZmluYWxBY3Rpb24iLCJwYXJzZUxvYWRpbmdBY3Rpb24iLCJkZWxheSIsInZhbGlkTW9kaWZpZXJzIiwiX3ZhbGlkTW9kaWZpZXJzJGdldCIsImxvYWRpbmdEaXJlY3RpdmUiLCJzaG93RWxlbWVudCIsImhpZGVFbGVtZW50IiwibG9hZGluZ0RpcmVjdGl2ZXMiLCJtYXRjaGluZ0VsZW1lbnRzIiwiU1ZHRWxlbWVudCIsImxvYWRpbmciLCJjbGFzc2VzIiwiX2VsZW1lbnQkY2xhc3NMaXN0MyIsIl9lbGVtZW50JGNsYXNzTGlzdDQiLCJhdHRyaWJ1dGUiLCJQYWdlVW5sb2FkaW5nUGx1Z2luX2RlZmF1bHQiLCJpc0Nvbm5lY3RlZCIsIl90aGlzMTgiLCJQb2xsaW5nRGlyZWN0b3JfZGVmYXVsdCIsImlzUG9sbGluZ0FjdGl2ZSIsInBvbGxpbmdJbnRlcnZhbHMiLCJhZGRQb2xsIiwiYWN0aW9uTmFtZSIsImR1cmF0aW9uIiwicG9sbHMiLCJpbml0aWF0ZVBvbGwiLCJzdGFydEFsbFBvbGxpbmciLCJfdGhpczE5IiwiX3JlZjkiLCJzdG9wQWxsUG9sbGluZyIsImNsZWFyUG9sbGluZyIsIl90aGlzMjAiLCJ0aW1lciIsIlBvbGxpbmdQbHVnaW5fZGVmYXVsdCIsIl90aGlzMjEiLCJwb2xsaW5nRGlyZWN0b3IiLCJpbml0aWFsaXplUG9sbGluZyIsIl90aGlzMjIiLCJwb2xsIiwicmF3UG9sbENvbmZpZyIsIndhcm4iLCJTZXRWYWx1ZU9udG9Nb2RlbEZpZWxkc1BsdWdpbl9kZWZhdWx0IiwiX3RoaXMyMyIsInN5bmNocm9uaXplVmFsdWVPZk1vZGVsRmllbGRzIiwiSFRNTEZvcm1FbGVtZW50IiwiVmFsaWRhdGVkRmllbGRzUGx1Z2luX2RlZmF1bHQiLCJfdGhpczI0IiwiaGFuZGxlTW9kZWxTZXQiLCJ2YWxpZGF0ZWRGaWVsZHMiLCJMaXZlQ29udHJvbGxlckRlZmF1bHQiLCJfdGhpczI1IiwiX2xlbjMiLCJfYXJncyIsIl9rZXkzIiwicGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQiLCJoYW5kbGVDaGFuZ2VFdmVudCIsImluaXRpYWxpemUiLCJjcmVhdGVDb21wb25lbnQiLCJjb25uZWN0Q29tcG9uZW50IiwiZGlzY29ubmVjdENvbXBvbmVudCIsImN1cnJlbnRUYXJnZXQiLCJ1cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQiLCJfdGhpczI2IiwicmF3QWN0aW9uIiwiYWN0aW9uQXJncyIsInN0b3BQcm9wYWdhdGlvbiIsIl92YWxpZE1vZGlmaWVycyRnZXQyIiwiX2k5IiwiX09iamVjdCRlbnRyaWVzNCIsIl9PYmplY3QkZW50cmllczQkX2kiLCIkcmVuZGVyIiwiX3RoaXMyNyIsImdldEVtaXREaXJlY3RpdmVzIiwiX3JlZjEwIiwibmFtZU1hdGNoIiwiX3RoaXMyOCIsIl9yZWYxMSIsIl90aGlzMjkiLCJfcmVmMTIiLCIkdXBkYXRlTW9kZWwiLCJwcm9wc1VwZGF0ZWRGcm9tUGFyZW50VmFsdWVDaGFuZ2VkIiwicHJvcHNVcGRhdGVkRnJvbVBhcmVudFZhbHVlIiwiZmluZ2VycHJpbnRWYWx1ZUNoYW5nZWQiLCJmaW5nZXJwcmludFZhbHVlIiwiZXZlbnRJbmZvIiwiZXZlbnRBcmdzIiwiZW1pdHMiLCJfdGhpczMwIiwibmFtZVZhbHVlIiwibGlzdGVuZXJzVmFsdWUiLCJiYWNrZW5kRmFjdG9yeSIsInByb3hpZWRDb21wb25lbnQiLCJoYXNEZWJvdW5jZVZhbHVlIiwiZGVib3VuY2VWYWx1ZSIsIl90aGlzMzEiLCJfcmVmMTMiLCJfdGhpczMyIiwiX3JlZjE0IiwiZXZlbnROYW1lIiwiX2VsZW1lbnQkZmlsZXMiLCJmaW5hbFZhbHVlIiwiZmluYWxWYWx1ZUlzRW1wdHkiLCJudW1lcmljVmFsdWUiLCJjYW5CdWJibGUiLCJjYW5jZWxhYmxlIiwiZGlzcGF0Y2giLCJwcmVmaXgiLCJfdGhpczMzIiwicHJvcHNVcGRhdGVkRnJvbVBhcmVudCIsImV2ZW50c1RvRGlzcGF0Y2giLCJyZXF1ZXN0TWV0aG9kIiwiZmV0Y2hDcmVkZW50aWFscyIsInVybFZhbHVlIiwicmVxdWVzdE1ldGhvZFZhbHVlIiwiZmV0Y2hDcmVkZW50aWFsc1ZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==