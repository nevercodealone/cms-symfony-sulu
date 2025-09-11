"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/website/app.js":
/*!*******************************!*\
  !*** ./assets/website/app.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/app.css */ "./assets/website/styles/app.css");
/* harmony import */ var flowbite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flowbite */ "./node_modules/flowbite/lib/esm/index.js");
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/module.esm.js");




window.Alpine = alpinejs__WEBPACK_IMPORTED_MODULE_3__["default"];
alpinejs__WEBPACK_IMPORTED_MODULE_3__["default"].data("clipboardBlock", function () {
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
alpinejs__WEBPACK_IMPORTED_MODULE_3__["default"].start();

// Initialize Flowbite carousels after Alpine.js
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    (0,flowbite__WEBPACK_IMPORTED_MODULE_2__.initCarousels)();
  }, 100);
});

/***/ }),

/***/ "./assets/website/styles/app.css":
/*!***************************************!*\
  !*** ./assets/website/styles/app.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_alpinejs_dist_module_esm_js-node_modules_core-js_modules_web_timers_js-n-4135c9","assets_website_styles_app_css-node_modules_flowbite_src_themes_default_css"], () => (__webpack_exec__("./assets/website/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDZTtBQUNYO0FBRTlCRSxNQUFNLENBQUNELE1BQU0sR0FBR0EsZ0RBQU07QUFFdEJBLHFEQUFXLENBQUMsZ0JBQWdCLEVBQUU7RUFBQSxPQUFPO0lBQ25DRyxNQUFNLEVBQUUsS0FBSztJQUNiQyxRQUFRLFdBQUFBLFNBQUEsRUFBRztNQUFBLElBQUFDLEtBQUE7TUFDVCxJQUFNQyxTQUFTLEdBQUcsSUFBSSxDQUFDQyxLQUFLLENBQUNELFNBQVM7TUFDdEMsSUFBTUUsUUFBUSxHQUFHRixTQUFTLENBQUNHLFdBQVc7TUFFdENDLFNBQVMsQ0FBQ0MsU0FBUyxDQUNoQkMsU0FBUyxDQUFDSixRQUFRLENBQUMsQ0FDbkJLLElBQUksQ0FBQyxZQUFNO1FBQ1ZSLEtBQUksQ0FBQ0YsTUFBTSxHQUFHLElBQUk7UUFDbEJXLFVBQVUsQ0FBQyxZQUFNO1VBQ2ZULEtBQUksQ0FBQ0YsTUFBTSxHQUFHLEtBQUs7UUFDckIsQ0FBQyxFQUFFLElBQUksQ0FBQztNQUNWLENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBQ1ksR0FBRyxFQUFLO1FBQ2RDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLHVCQUF1QixFQUFFRixHQUFHLENBQUM7TUFDN0MsQ0FBQyxDQUFDO0lBQ047RUFDRixDQUFDO0FBQUEsQ0FBQyxDQUFDO0FBRUhmLHNEQUFZLEVBQUU7O0FBRWQ7QUFDQW1CLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBVztFQUN2RE4sVUFBVSxDQUFDLFlBQU07SUFDZmYsdURBQWEsRUFBRTtFQUNqQixDQUFDLEVBQUUsR0FBRyxDQUFDO0FBQ1QsQ0FBQyxDQUFDOzs7Ozs7Ozs7OztBQ2pDRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy93ZWJzaXRlL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvd2Vic2l0ZS9zdHlsZXMvYXBwLmNzcz9hMzkxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc3R5bGVzL2FwcC5jc3NcIjtcbmltcG9ydCB7IGluaXRDYXJvdXNlbHMgfSBmcm9tICdmbG93Yml0ZSc7XG5pbXBvcnQgQWxwaW5lIGZyb20gXCJhbHBpbmVqc1wiO1xuXG53aW5kb3cuQWxwaW5lID0gQWxwaW5lO1xuXG5BbHBpbmUuZGF0YShcImNsaXBib2FyZEJsb2NrXCIsICgpID0+ICh7XG4gIGNvcGllZDogZmFsc2UsXG4gIGNvcHlDb2RlKCkge1xuICAgIGNvbnN0IGNvZGVCbG9jayA9IHRoaXMuJHJlZnMuY29kZUJsb2NrO1xuICAgIGNvbnN0IGNvZGVUZXh0ID0gY29kZUJsb2NrLnRleHRDb250ZW50O1xuXG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZFxuICAgICAgLndyaXRlVGV4dChjb2RlVGV4dClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5jb3BpZWQgPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNvcGllZCA9IGZhbHNlO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGNvcHkgdGV4dDogXCIsIGVycik7XG4gICAgICB9KTtcbiAgfSxcbn0pKTtcblxuQWxwaW5lLnN0YXJ0KCk7XG5cbi8vIEluaXRpYWxpemUgRmxvd2JpdGUgY2Fyb3VzZWxzIGFmdGVyIEFscGluZS5qc1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpbml0Q2Fyb3VzZWxzKCk7XG4gIH0sIDEwMCk7XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJpbml0Q2Fyb3VzZWxzIiwiQWxwaW5lIiwid2luZG93IiwiZGF0YSIsImNvcGllZCIsImNvcHlDb2RlIiwiX3RoaXMiLCJjb2RlQmxvY2siLCIkcmVmcyIsImNvZGVUZXh0IiwidGV4dENvbnRlbnQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0aGVuIiwic2V0VGltZW91dCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInN0YXJ0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==