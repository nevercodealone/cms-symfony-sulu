"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["chat"],{

/***/ "./assets/website/chat.js":
/*!********************************!*\
  !*** ./assets/website/chat.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatHandler": () => (/* binding */ ChatHandler),
/* harmony export */   "ChatMarkdown": () => (/* binding */ ChatMarkdown)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.ends-with.js */ "./node_modules/core-js/modules/es.string.ends-with.js");
/* harmony import */ var core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "./node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_37__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






































function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Chat markdown formatter and message handler
 */
var ChatMarkdown = /*#__PURE__*/function () {
  function ChatMarkdown() {
    _classCallCheck(this, ChatMarkdown);
  }
  _createClass(ChatMarkdown, null, [{
    key: "format",
    value:
    /**
     * Format markdown text to HTML
     * @param {string} text - Markdown text to format
     * @returns {string} HTML formatted text
     */
    function format(text) {
      var html = text;

      // Process headers
      html = html.replace(/^### (.*?)$/gm, '<h3 class="font-bold text-lg mt-2 mb-1 text-gray-800">$1</h3>');
      html = html.replace(/^## (.*?)$/gm, '<h2 class="font-bold text-xl mt-2 mb-1 text-gray-800">$1</h2>');
      html = html.replace(/^# (.*?)$/gm, '<h1 class="font-bold text-2xl mt-2 mb-1 text-gray-800">$1</h1>');

      // Handle incomplete markdown links
      html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^)]*$)/gm, '$1');
      html = html.replace(/\[([^\]]+)\]\((https?:\/\/$)/gm, '$1');
      html = html.replace(/\[([^\]]+)\]\(([^)]*$)/gm, '$1');

      // Process complete links with YouTube special handling
      html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, function (match, text, url) {
        if (!url || url === 'https://' || url === 'http://' || url.endsWith('://')) {
          return text;
        }
        if (url.includes('youtube.com') || url.includes('youtu.be')) {
          return "<a href=\"".concat(url, "\" target=\"_blank\" class=\"inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 underline font-medium\">\uD83D\uDCFA ").concat(text, "</a>");
        }
        return "<a href=\"".concat(url, "\" target=\"_blank\" class=\"text-blue-600 hover:text-blue-800 underline\">").concat(text, "</a>");
      });

      // Convert bare URLs (not already inside markdown links or HTML tags) to clickable links
      html = html.replace(/(?<!\(|"|'|=)(https?:\/\/[^\s<)\]]+)/g, function (match, url) {
        if (url.includes('youtube.com') || url.includes('youtu.be')) {
          return "<a href=\"".concat(url, "\" target=\"_blank\" class=\"inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 underline font-medium\">\uD83D\uDCFA ").concat(url, "</a>");
        }
        return "<a href=\"".concat(url, "\" target=\"_blank\" class=\"text-blue-600 hover:text-blue-800 underline\">").concat(url, "</a>");
      });

      // Bold and italic
      html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>');
      html = html.replace(/\*([^*\n]+)\*/g, '<em class="italic">$1</em>');

      // Code blocks
      html = html.replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-100 rounded p-3 my-2 overflow-x-auto"><code>$1</code></pre>');
      html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-1 py-0.5 rounded text-sm">$1</code>');

      // Process lists
      html = this.processLists(html);

      // Convert line breaks
      html = html.replace(/\n\n+/g, '</p><p class="mb-2">');
      html = html.replace(/\n/g, ' ');

      // Wrap in paragraphs
      if (!html.startsWith('<')) {
        html = "<p class=\"mb-2\">".concat(html, "</p>");
      }

      // Clean up
      html = html.replace(/<p class="mb-2"><\/p>/g, '');
      html = html.replace(/<p><\/p>/g, '');
      html = html.replace(/\s+/g, ' ');
      return html;
    }

    /**
     * Process ordered and unordered lists
     * @private
     */
  }, {
    key: "processLists",
    value: function processLists(html) {
      var lines = html.split('\n');
      var processedLines = [];
      var currentListItems = [];
      var listType = null;
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        var orderedMatch = line.match(/^(\d+)\.\s+(.*)$/);
        var unorderedMatch = line.match(/^[-*]\s+(.*)$/);
        var indentedLine = line.match(/^\s{2,}[-*]\s+(.*)$/);
        if (orderedMatch) {
          if (currentListItems.length > 0 && listType === 'unordered') {
            processedLines.push("<ul class=\"list-disc list-inside space-y-1 my-2\">".concat(currentListItems.join(''), "</ul>"));
            currentListItems = [];
          }
          listType = 'ordered';
          var itemContent = orderedMatch[2];

          // Look for description lines
          var j = i + 1;
          var descriptionLines = [];
          while (j < lines.length) {
            var nextLine = lines[j];
            if (nextLine.match(/^\s{2,}/) && !nextLine.match(/^\s*\d+\./)) {
              descriptionLines.push(nextLine.trim());
              j++;
            } else if (nextLine.trim() === '') {
              j++;
              if (j < lines.length && lines[j].match(/^\s{2,}/)) {
                continue;
              } else {
                break;
              }
            } else {
              break;
            }
          }
          if (descriptionLines.length > 0) {
            itemContent += "<div class=\"mt-1 ml-4 text-sm text-gray-600\">".concat(descriptionLines.join('<br>'), "</div>");
            i = j - 1;
          }
          currentListItems.push("<li class=\"mb-1\">".concat(itemContent, "</li>"));
        } else if (unorderedMatch && !indentedLine) {
          if (currentListItems.length > 0 && listType === 'ordered') {
            processedLines.push("<ol class=\"list-decimal list-inside space-y-1 my-2\">".concat(currentListItems.join(''), "</ol>"));
            currentListItems = [];
          }
          listType = 'unordered';
          currentListItems.push("<li>".concat(unorderedMatch[1], "</li>"));
        } else if (indentedLine) {
          if (currentListItems.length > 0) {
            var lastIndex = currentListItems.length - 1;
            currentListItems[lastIndex] = currentListItems[lastIndex].replace('</li>', "<br><span class=\"ml-4 text-sm\">\u2022 ".concat(indentedLine[1], "</span></li>"));
          }
        } else {
          if (currentListItems.length > 0 && listType) {
            var tag = listType === 'ordered' ? 'ol' : 'ul';
            var listClass = listType === 'ordered' ? 'list-decimal' : 'list-disc';
            processedLines.push("<".concat(tag, " class=\"").concat(listClass, " list-inside space-y-1 my-2\">").concat(currentListItems.join(''), "</").concat(tag, ">"));
            currentListItems = [];
            listType = null;
          }
          if (line.trim()) {
            processedLines.push(line);
          } else if (i > 0 && i < lines.length - 1) {
            processedLines.push('');
          }
        }
      }

      // Close remaining list
      if (currentListItems.length > 0 && listType) {
        var _tag = listType === 'ordered' ? 'ol' : 'ul';
        var _listClass = listType === 'ordered' ? 'list-decimal' : 'list-disc';
        processedLines.push("<".concat(_tag, " class=\"").concat(_listClass, " list-inside space-y-1 my-2\">").concat(currentListItems.join(''), "</").concat(_tag, ">"));
      }
      return processedLines.join('\n');
    }
  }]);
  return ChatMarkdown;
}();

/**
 * Chat message handler
 */
var ChatHandler = /*#__PURE__*/function () {
  function ChatHandler(chatBody, chatInput, chatSubmit, loadingMessage, robotImage) {
    _classCallCheck(this, ChatHandler);
    this.chatBody = chatBody;
    this.chatInput = chatInput;
    this.chatSubmit = chatSubmit;
    this.loadingMessage = loadingMessage;
    this.robotImage = robotImage;
  }

  /**
   * Initialize chat functionality
   */
  _createClass(ChatHandler, [{
    key: "init",
    value: function init() {
      var _this = this;
      this.loadChatHistory();
      this.chatSubmit.addEventListener('click', function (e) {
        e.preventDefault();
        _this.sendMessage();
      });
      this.chatInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          _this.sendMessage();
        }
      });
    }

    /**
     * Load chat history from API
     */
  }, {
    key: "loadChatHistory",
    value: function () {
      var _loadChatHistory = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this2 = this;
        var response, data, welcome, separator;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch('/api/chat/history');
            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();
            case 6:
              data = _context.sent;
              if (data.success && data.messages && data.messages.length > 0) {
                welcome = document.getElementById('welcome');
                if (welcome) welcome.remove();
                data.messages.forEach(function (msg) {
                  _this2.appendUserMessage(msg.question);
                  _this2.appendBotMessage(msg.answer);
                  if (msg.answer.includes('schlafen komm morgen wieder')) {
                    _this2.setRateLimited();
                  }
                });
                separator = document.createElement('div');
                separator.className = 'chat-history-separator text-center text-xs text-gray-400 my-3';
                separator.innerHTML = '<hr class="border-gray-200 mb-2"><span class="bg-white px-2">Chat-Verlauf geladen</span>';
                this.chatBody.appendChild(separator);
                this.scrollToBottom();
              }
              _context.next = 13;
              break;
            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              console.error('Error loading chat history:', _context.t0);
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 10]]);
      }));
      function loadChatHistory() {
        return _loadChatHistory.apply(this, arguments);
      }
      return loadChatHistory;
    }()
    /**
     * Send message to API
     */
  }, {
    key: "sendMessage",
    value: function () {
      var _sendMessage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var message, welcome, separator, loadingDiv, response, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              message = this.chatInput.value.trim();
              if (message) {
                _context2.next = 3;
                break;
              }
              return _context2.abrupt("return");
            case 3:
              welcome = document.getElementById('welcome');
              if (welcome) welcome.remove();
              separator = document.querySelector('.chat-history-separator');
              if (separator) separator.remove();
              this.appendUserMessage(message);
              loadingDiv = this.showLoadingMessage();
              this.chatInput.value = '';
              _context2.prev = 10;
              _context2.next = 13;
              return fetch('/api/chat/submit', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  message: message
                })
              });
            case 13:
              response = _context2.sent;
              _context2.next = 16;
              return response.json();
            case 16:
              data = _context2.sent;
              if (data.success) {
                this.replaceLoadingWithMessage(loadingDiv, data.response);
                if (data.response.includes('schlafen komm morgen wieder')) {
                  this.setRateLimited();
                }
              } else {
                this.showError(loadingDiv);
              }
              _context2.next = 24;
              break;
            case 20:
              _context2.prev = 20;
              _context2.t0 = _context2["catch"](10);
              console.error('Error:', _context2.t0);
              this.showNetworkError(loadingDiv);
            case 24:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[10, 20]]);
      }));
      function sendMessage() {
        return _sendMessage.apply(this, arguments);
      }
      return sendMessage;
    }()
    /**
     * Append user message to chat
     */
  }, {
    key: "appendUserMessage",
    value: function appendUserMessage(text) {
      var div = document.createElement('div');
      div.className = 'flex justify-end gap-3 mb-4';
      div.innerHTML = "\n            <div class=\"max-w-xs md:max-w-md\">\n                <div class=\"bg-blue-600 text-white px-4 py-3 rounded-lg\">".concat(text, "</div>\n            </div>\n            <div class=\"flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center\">\uD83D\uDC64</div>\n        ");
      this.chatBody.appendChild(div);
    }

    /**
     * Append bot message to chat
     */
  }, {
    key: "appendBotMessage",
    value: function appendBotMessage(content) {
      var div = document.createElement('div');
      div.className = 'flex items-start gap-3 mb-4';
      div.innerHTML = "\n            <img src=\"/robot.png\" alt=\"Robot Golla\" class=\"w-10 h-10 object-contain rounded-full bg-blue-100 p-1 flex-shrink-0\">\n            <div class=\"flex-1 bg-gray-50 rounded-lg p-4 max-w-2xl\">\n                <div class=\"text-gray-700 leading-relaxed\">".concat(ChatMarkdown.format(content), "</div>\n            </div>\n        ");
      this.chatBody.appendChild(div);
    }

    /**
     * Show loading message
     */
  }, {
    key: "showLoadingMessage",
    value: function showLoadingMessage() {
      var div = document.createElement('div');
      div.className = 'flex items-start gap-3 mb-4';
      div.id = 'current-loading';
      div.innerHTML = "\n            <img src=\"/robot.png\" alt=\"Robot Golla\" class=\"w-10 h-10 object-contain rounded-full bg-blue-100 p-1 flex-shrink-0\">\n            <div class=\"bg-gray-50 rounded-lg p-4\">\n                <div class=\"flex items-center gap-2\">\n                    <div class=\"animate-pulse flex gap-1\">\n                        <div class=\"w-2 h-2 bg-gray-400 rounded-full\"></div>\n                        <div class=\"w-2 h-2 bg-gray-400 rounded-full animation-delay-200\"></div>\n                        <div class=\"w-2 h-2 bg-gray-400 rounded-full animation-delay-400\"></div>\n                    </div>\n                    <span class=\"text-gray-500 text-sm\">Robot Golla denkt nach...</span>\n                </div>\n            </div>\n        ";
      this.chatBody.appendChild(div);
      this.scrollToBottom();
      return div;
    }

    /**
     * Replace loading message with actual response
     */
  }, {
    key: "replaceLoadingWithMessage",
    value: function replaceLoadingWithMessage(loadingDiv, content) {
      loadingDiv.innerHTML = "\n            <img src=\"/robot.png\" alt=\"Robot Golla\" class=\"w-10 h-10 object-contain rounded-full bg-blue-100 p-1 flex-shrink-0\">\n            <div class=\"flex-1 bg-gray-50 rounded-lg p-4 max-w-2xl\">\n                <div class=\"text-gray-700 leading-relaxed\">".concat(ChatMarkdown.format(content), "</div>\n            </div>\n        ");
      loadingDiv.removeAttribute('id');
      this.scrollToBottom();
    }

    /**
     * Show error message
     */
  }, {
    key: "showError",
    value: function showError(loadingDiv) {
      loadingDiv.innerHTML = "\n            <img src=\"/robot.png\" alt=\"Robot Golla\" class=\"w-10 h-10 object-contain rounded-full bg-red-100 p-1 flex-shrink-0\">\n            <div class=\"flex-1 bg-red-50 border border-red-200 rounded-lg p-4 max-w-2xl\">\n                <div class=\"text-red-700\">Entschuldigung, es ist ein Fehler aufgetreten. Bitte versuche es sp\xE4ter erneut.</div>\n            </div>\n        ";
      loadingDiv.removeAttribute('id');
    }

    /**
     * Show network error
     */
  }, {
    key: "showNetworkError",
    value: function showNetworkError(loadingDiv) {
      loadingDiv.innerHTML = "\n            <img src=\"/robot.png\" alt=\"Robot Golla\" class=\"w-10 h-10 object-contain rounded-full bg-red-100 p-1 flex-shrink-0\">\n            <div class=\"flex-1 bg-red-50 border border-red-200 rounded-lg p-4 max-w-2xl\">\n                <div class=\"text-red-700\">Netzwerkfehler: Bitte \xFCberpr\xFCfe deine Internetverbindung und versuche es erneut.</div>\n            </div>\n        ";
      loadingDiv.removeAttribute('id');
    }

    /**
     * Set rate limited state
     */
  }, {
    key: "setRateLimited",
    value: function setRateLimited() {
      if (this.robotImage) {
        this.robotImage.src = '/robot-sleeping.png';
      }
      var inputContainer = document.querySelector('.border-t.border-gray-200.bg-gray-50');
      if (inputContainer) {
        inputContainer.style.display = 'none';
      }
    }

    /**
     * Scroll chat to bottom (only scrolls the chat container, not the page)
     */
  }, {
    key: "scrollToBottom",
    value: function scrollToBottom() {
      this.chatBody.scrollTop = this.chatBody.scrollHeight;
    }
  }]);
  return ChatHandler;
}();

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  var chatInput = document.getElementById('chat-message');
  var chatSubmit = document.getElementById('chat-submit');
  var chatBody = document.getElementById('chat-body');
  var loadingMessage = document.getElementById('loading-message');
  var robotImage = document.getElementById('robot-image');

  // Only initialize if chat elements exist on the page
  if (chatBody && chatInput && chatSubmit) {
    var chat = new ChatHandler(chatBody, chatInput, chatSubmit, loadingMessage, robotImage);
    chat.init();
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.ends-with.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.ends-with.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ "./node_modules/core-js/internals/function-uncurry-this-clause.js");
var getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f);
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

// eslint-disable-next-line es/no-string-prototype-endswith -- safe
var nativeEndsWith = uncurryThis(''.endsWith);
var slice = uncurryThis(''.slice);
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.endsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.endswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = toString(requireObjectCoercible(this));
    notARegExp(searchString);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = that.length;
    var end = endPosition === undefined ? len : min(toLength(endPosition), len);
    var search = toString(searchString);
    return nativeEndsWith
      ? nativeEndsWith(that, search, end)
      : slice(that, end - search.length, end) === search;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.starts-with.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.starts-with.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ "./node_modules/core-js/internals/function-uncurry-this-clause.js");
var getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f);
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

// eslint-disable-next-line es/no-string-prototype-startswith -- safe
var nativeStartsWith = uncurryThis(''.startsWith);
var stringSlice = uncurryThis(''.slice);
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = toString(requireObjectCoercible(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = toString(searchString);
    return nativeStartsWith
      ? nativeStartsWith(that, search, index)
      : stringSlice(that, index, index + search.length) === search;
  }
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-8c6c2e"], () => (__webpack_exec__("./assets/website/chat.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RkFBMkI7QUFDcEQsNkJBQTZCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzVFLDJCQUEyQixtQkFBTyxDQUFDLHlHQUFzQztBQUN6RSxjQUFjLG1CQUFPLENBQUMseUVBQXNCOztBQUU1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsSUFBSSxzRkFBc0Y7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDckNZO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxrQkFBa0IsbUJBQU8sQ0FBQyxtSEFBMkM7QUFDckUsK0JBQStCLHdKQUE0RDtBQUMzRixlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsaUJBQWlCLG1CQUFPLENBQUMsbUZBQTJCO0FBQ3BELDZCQUE2QixtQkFBTyxDQUFDLDJHQUF1QztBQUM1RSwyQkFBMkIsbUJBQU8sQ0FBQyx5R0FBc0M7QUFDekUsY0FBYyxtQkFBTyxDQUFDLHlFQUFzQjs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksc0ZBQXNGO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvd2Vic2l0ZS9jaGF0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLmVuZHMtd2l0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5zdGFydHMtd2l0aC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENoYXQgbWFya2Rvd24gZm9ybWF0dGVyIGFuZCBtZXNzYWdlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IGNsYXNzIENoYXRNYXJrZG93biB7XG4gICAgLyoqXG4gICAgICogRm9ybWF0IG1hcmtkb3duIHRleHQgdG8gSFRNTFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gTWFya2Rvd24gdGV4dCB0byBmb3JtYXRcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBIVE1MIGZvcm1hdHRlZCB0ZXh0XG4gICAgICovXG4gICAgc3RhdGljIGZvcm1hdCh0ZXh0KSB7XG4gICAgICAgIGxldCBodG1sID0gdGV4dDtcblxuICAgICAgICAvLyBQcm9jZXNzIGhlYWRlcnNcbiAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZSgvXiMjIyAoLio/KSQvZ20sICc8aDMgY2xhc3M9XCJmb250LWJvbGQgdGV4dC1sZyBtdC0yIG1iLTEgdGV4dC1ncmF5LTgwMFwiPiQxPC9oMz4nKTtcbiAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZSgvXiMjICguKj8pJC9nbSwgJzxoMiBjbGFzcz1cImZvbnQtYm9sZCB0ZXh0LXhsIG10LTIgbWItMSB0ZXh0LWdyYXktODAwXCI+JDE8L2gyPicpO1xuICAgICAgICBodG1sID0gaHRtbC5yZXBsYWNlKC9eIyAoLio/KSQvZ20sICc8aDEgY2xhc3M9XCJmb250LWJvbGQgdGV4dC0yeGwgbXQtMiBtYi0xIHRleHQtZ3JheS04MDBcIj4kMTwvaDE+Jyk7XG5cbiAgICAgICAgLy8gSGFuZGxlIGluY29tcGxldGUgbWFya2Rvd24gbGlua3NcbiAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZSgvXFxbKFteXFxdXSspXFxdXFwoKGh0dHBzPzpcXC9cXC9bXildKiQpL2dtLCAnJDEnKTtcbiAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZSgvXFxbKFteXFxdXSspXFxdXFwoKGh0dHBzPzpcXC9cXC8kKS9nbSwgJyQxJyk7XG4gICAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoL1xcWyhbXlxcXV0rKVxcXVxcKChbXildKiQpL2dtLCAnJDEnKTtcblxuICAgICAgICAvLyBQcm9jZXNzIGNvbXBsZXRlIGxpbmtzIHdpdGggWW91VHViZSBzcGVjaWFsIGhhbmRsaW5nXG4gICAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoL1xcWyhbXlxcXV0rKVxcXVxcKChbXildKylcXCkvZywgKG1hdGNoLCB0ZXh0LCB1cmwpID0+IHtcbiAgICAgICAgICAgIGlmICghdXJsIHx8IHVybCA9PT0gJ2h0dHBzOi8vJyB8fCB1cmwgPT09ICdodHRwOi8vJyB8fCB1cmwuZW5kc1dpdGgoJzovLycpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodXJsLmluY2x1ZGVzKCd5b3V0dWJlLmNvbScpIHx8IHVybC5pbmNsdWRlcygneW91dHUuYmUnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgPGEgaHJlZj1cIiR7dXJsfVwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQtYmx1ZS02MDAgaG92ZXI6dGV4dC1ibHVlLTgwMCB1bmRlcmxpbmUgZm9udC1tZWRpdW1cIj7wn5O6ICR7dGV4dH08L2E+YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBgPGEgaHJlZj1cIiR7dXJsfVwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwidGV4dC1ibHVlLTYwMCBob3Zlcjp0ZXh0LWJsdWUtODAwIHVuZGVybGluZVwiPiR7dGV4dH08L2E+YDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ29udmVydCBiYXJlIFVSTHMgKG5vdCBhbHJlYWR5IGluc2lkZSBtYXJrZG93biBsaW5rcyBvciBIVE1MIHRhZ3MpIHRvIGNsaWNrYWJsZSBsaW5rc1xuICAgICAgICBodG1sID0gaHRtbC5yZXBsYWNlKC8oPzwhXFwofFwifCd8PSkoaHR0cHM/OlxcL1xcL1teXFxzPClcXF1dKykvZywgKG1hdGNoLCB1cmwpID0+IHtcbiAgICAgICAgICAgIGlmICh1cmwuaW5jbHVkZXMoJ3lvdXR1YmUuY29tJykgfHwgdXJsLmluY2x1ZGVzKCd5b3V0dS5iZScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8YSBocmVmPVwiJHt1cmx9XCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC1ibHVlLTYwMCBob3Zlcjp0ZXh0LWJsdWUtODAwIHVuZGVybGluZSBmb250LW1lZGl1bVwiPvCfk7ogJHt1cmx9PC9hPmA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYDxhIGhyZWY9XCIke3VybH1cIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cInRleHQtYmx1ZS02MDAgaG92ZXI6dGV4dC1ibHVlLTgwMCB1bmRlcmxpbmVcIj4ke3VybH08L2E+YDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQm9sZCBhbmQgaXRhbGljXG4gICAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoL1xcKlxcKiguKj8pXFwqXFwqL2csICc8c3Ryb25nIGNsYXNzPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwXCI+JDE8L3N0cm9uZz4nKTtcbiAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZSgvXFwqKFteKlxcbl0rKVxcKi9nLCAnPGVtIGNsYXNzPVwiaXRhbGljXCI+JDE8L2VtPicpO1xuXG4gICAgICAgIC8vIENvZGUgYmxvY2tzXG4gICAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoL2BgYCguKj8pYGBgL2dzLCAnPHByZSBjbGFzcz1cImJnLWdyYXktMTAwIHJvdW5kZWQgcC0zIG15LTIgb3ZlcmZsb3cteC1hdXRvXCI+PGNvZGU+JDE8L2NvZGU+PC9wcmU+Jyk7XG4gICAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoL2AoW15gXSspYC9nLCAnPGNvZGUgY2xhc3M9XCJiZy1ncmF5LTEwMCBweC0xIHB5LTAuNSByb3VuZGVkIHRleHQtc21cIj4kMTwvY29kZT4nKTtcblxuICAgICAgICAvLyBQcm9jZXNzIGxpc3RzXG4gICAgICAgIGh0bWwgPSB0aGlzLnByb2Nlc3NMaXN0cyhodG1sKTtcblxuICAgICAgICAvLyBDb252ZXJ0IGxpbmUgYnJlYWtzXG4gICAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoL1xcblxcbisvZywgJzwvcD48cCBjbGFzcz1cIm1iLTJcIj4nKTtcbiAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZSgvXFxuL2csICcgJyk7XG5cbiAgICAgICAgLy8gV3JhcCBpbiBwYXJhZ3JhcGhzXG4gICAgICAgIGlmICghaHRtbC5zdGFydHNXaXRoKCc8JykpIHtcbiAgICAgICAgICAgIGh0bWwgPSBgPHAgY2xhc3M9XCJtYi0yXCI+JHtodG1sfTwvcD5gO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2xlYW4gdXBcbiAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZSgvPHAgY2xhc3M9XCJtYi0yXCI+PFxcL3A+L2csICcnKTtcbiAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZSgvPHA+PFxcL3A+L2csICcnKTtcbiAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZSgvXFxzKy9nLCAnICcpO1xuXG4gICAgICAgIHJldHVybiBodG1sO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3Mgb3JkZXJlZCBhbmQgdW5vcmRlcmVkIGxpc3RzXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzdGF0aWMgcHJvY2Vzc0xpc3RzKGh0bWwpIHtcbiAgICAgICAgY29uc3QgbGluZXMgPSBodG1sLnNwbGl0KCdcXG4nKTtcbiAgICAgICAgY29uc3QgcHJvY2Vzc2VkTGluZXMgPSBbXTtcbiAgICAgICAgbGV0IGN1cnJlbnRMaXN0SXRlbXMgPSBbXTtcbiAgICAgICAgbGV0IGxpc3RUeXBlID0gbnVsbDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgICAgICAgICBjb25zdCBvcmRlcmVkTWF0Y2ggPSBsaW5lLm1hdGNoKC9eKFxcZCspXFwuXFxzKyguKikkLyk7XG4gICAgICAgICAgICBjb25zdCB1bm9yZGVyZWRNYXRjaCA9IGxpbmUubWF0Y2goL15bLSpdXFxzKyguKikkLyk7XG4gICAgICAgICAgICBjb25zdCBpbmRlbnRlZExpbmUgPSBsaW5lLm1hdGNoKC9eXFxzezIsfVstKl1cXHMrKC4qKSQvKTtcblxuICAgICAgICAgICAgaWYgKG9yZGVyZWRNYXRjaCkge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50TGlzdEl0ZW1zLmxlbmd0aCA+IDAgJiYgbGlzdFR5cGUgPT09ICd1bm9yZGVyZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NlZExpbmVzLnB1c2goYDx1bCBjbGFzcz1cImxpc3QtZGlzYyBsaXN0LWluc2lkZSBzcGFjZS15LTEgbXktMlwiPiR7Y3VycmVudExpc3RJdGVtcy5qb2luKCcnKX08L3VsPmApO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50TGlzdEl0ZW1zID0gW107XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGlzdFR5cGUgPSAnb3JkZXJlZCc7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1Db250ZW50ID0gb3JkZXJlZE1hdGNoWzJdO1xuXG4gICAgICAgICAgICAgICAgLy8gTG9vayBmb3IgZGVzY3JpcHRpb24gbGluZXNcbiAgICAgICAgICAgICAgICBsZXQgaiA9IGkgKyAxO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uTGluZXMgPSBbXTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoaiA8IGxpbmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0TGluZSA9IGxpbmVzW2pdO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dExpbmUubWF0Y2goL15cXHN7Mix9LykgJiYgIW5leHRMaW5lLm1hdGNoKC9eXFxzKlxcZCtcXC4vKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25MaW5lcy5wdXNoKG5leHRMaW5lLnRyaW0oKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dExpbmUudHJpbSgpID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGogPCBsaW5lcy5sZW5ndGggJiYgbGluZXNbal0ubWF0Y2goL15cXHN7Mix9LykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChkZXNjcmlwdGlvbkxpbmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbUNvbnRlbnQgKz0gYDxkaXYgY2xhc3M9XCJtdC0xIG1sLTQgdGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+JHtkZXNjcmlwdGlvbkxpbmVzLmpvaW4oJzxicj4nKX08L2Rpdj5gO1xuICAgICAgICAgICAgICAgICAgICBpID0gaiAtIDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY3VycmVudExpc3RJdGVtcy5wdXNoKGA8bGkgY2xhc3M9XCJtYi0xXCI+JHtpdGVtQ29udGVudH08L2xpPmApO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh1bm9yZGVyZWRNYXRjaCAmJiAhaW5kZW50ZWRMaW5lKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRMaXN0SXRlbXMubGVuZ3RoID4gMCAmJiBsaXN0VHlwZSA9PT0gJ29yZGVyZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NlZExpbmVzLnB1c2goYDxvbCBjbGFzcz1cImxpc3QtZGVjaW1hbCBsaXN0LWluc2lkZSBzcGFjZS15LTEgbXktMlwiPiR7Y3VycmVudExpc3RJdGVtcy5qb2luKCcnKX08L29sPmApO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50TGlzdEl0ZW1zID0gW107XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGlzdFR5cGUgPSAndW5vcmRlcmVkJztcbiAgICAgICAgICAgICAgICBjdXJyZW50TGlzdEl0ZW1zLnB1c2goYDxsaT4ke3Vub3JkZXJlZE1hdGNoWzFdfTwvbGk+YCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGluZGVudGVkTGluZSkge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50TGlzdEl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gY3VycmVudExpc3RJdGVtcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50TGlzdEl0ZW1zW2xhc3RJbmRleF0gPSBjdXJyZW50TGlzdEl0ZW1zW2xhc3RJbmRleF0ucmVwbGFjZSgnPC9saT4nLCBgPGJyPjxzcGFuIGNsYXNzPVwibWwtNCB0ZXh0LXNtXCI+4oCiICR7aW5kZW50ZWRMaW5lWzFdfTwvc3Bhbj48L2xpPmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRMaXN0SXRlbXMubGVuZ3RoID4gMCAmJiBsaXN0VHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWcgPSBsaXN0VHlwZSA9PT0gJ29yZGVyZWQnID8gJ29sJyA6ICd1bCc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpc3RDbGFzcyA9IGxpc3RUeXBlID09PSAnb3JkZXJlZCcgPyAnbGlzdC1kZWNpbWFsJyA6ICdsaXN0LWRpc2MnO1xuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzZWRMaW5lcy5wdXNoKGA8JHt0YWd9IGNsYXNzPVwiJHtsaXN0Q2xhc3N9IGxpc3QtaW5zaWRlIHNwYWNlLXktMSBteS0yXCI+JHtjdXJyZW50TGlzdEl0ZW1zLmpvaW4oJycpfTwvJHt0YWd9PmApO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50TGlzdEl0ZW1zID0gW107XG4gICAgICAgICAgICAgICAgICAgIGxpc3RUeXBlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobGluZS50cmltKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2VkTGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPiAwICYmIGkgPCBsaW5lcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NlZExpbmVzLnB1c2goJycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENsb3NlIHJlbWFpbmluZyBsaXN0XG4gICAgICAgIGlmIChjdXJyZW50TGlzdEl0ZW1zLmxlbmd0aCA+IDAgJiYgbGlzdFR5cGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhZyA9IGxpc3RUeXBlID09PSAnb3JkZXJlZCcgPyAnb2wnIDogJ3VsJztcbiAgICAgICAgICAgIGNvbnN0IGxpc3RDbGFzcyA9IGxpc3RUeXBlID09PSAnb3JkZXJlZCcgPyAnbGlzdC1kZWNpbWFsJyA6ICdsaXN0LWRpc2MnO1xuICAgICAgICAgICAgcHJvY2Vzc2VkTGluZXMucHVzaChgPCR7dGFnfSBjbGFzcz1cIiR7bGlzdENsYXNzfSBsaXN0LWluc2lkZSBzcGFjZS15LTEgbXktMlwiPiR7Y3VycmVudExpc3RJdGVtcy5qb2luKCcnKX08LyR7dGFnfT5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcm9jZXNzZWRMaW5lcy5qb2luKCdcXG4nKTtcbiAgICB9XG59XG5cbi8qKlxuICogQ2hhdCBtZXNzYWdlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IGNsYXNzIENoYXRIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihjaGF0Qm9keSwgY2hhdElucHV0LCBjaGF0U3VibWl0LCBsb2FkaW5nTWVzc2FnZSwgcm9ib3RJbWFnZSkge1xuICAgICAgICB0aGlzLmNoYXRCb2R5ID0gY2hhdEJvZHk7XG4gICAgICAgIHRoaXMuY2hhdElucHV0ID0gY2hhdElucHV0O1xuICAgICAgICB0aGlzLmNoYXRTdWJtaXQgPSBjaGF0U3VibWl0O1xuICAgICAgICB0aGlzLmxvYWRpbmdNZXNzYWdlID0gbG9hZGluZ01lc3NhZ2U7XG4gICAgICAgIHRoaXMucm9ib3RJbWFnZSA9IHJvYm90SW1hZ2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSBjaGF0IGZ1bmN0aW9uYWxpdHlcbiAgICAgKi9cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmxvYWRDaGF0SGlzdG9yeSgpO1xuICAgICAgICB0aGlzLmNoYXRTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5zZW5kTWVzc2FnZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jaGF0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCBjaGF0IGhpc3RvcnkgZnJvbSBBUElcbiAgICAgKi9cbiAgICBhc3luYyBsb2FkQ2hhdEhpc3RvcnkoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2NoYXQvaGlzdG9yeScpO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAgICAgaWYgKGRhdGEuc3VjY2VzcyAmJiBkYXRhLm1lc3NhZ2VzICYmIGRhdGEubWVzc2FnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdlbGNvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VsY29tZScpO1xuICAgICAgICAgICAgICAgIGlmICh3ZWxjb21lKSB3ZWxjb21lLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAgICAgZGF0YS5tZXNzYWdlcy5mb3JFYWNoKG1zZyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kVXNlck1lc3NhZ2UobXNnLnF1ZXN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRCb3RNZXNzYWdlKG1zZy5hbnN3ZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChtc2cuYW5zd2VyLmluY2x1ZGVzKCdzY2hsYWZlbiBrb21tIG1vcmdlbiB3aWVkZXInKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRSYXRlTGltaXRlZCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzZXBhcmF0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBzZXBhcmF0b3IuY2xhc3NOYW1lID0gJ2NoYXQtaGlzdG9yeS1zZXBhcmF0b3IgdGV4dC1jZW50ZXIgdGV4dC14cyB0ZXh0LWdyYXktNDAwIG15LTMnO1xuICAgICAgICAgICAgICAgIHNlcGFyYXRvci5pbm5lckhUTUwgPSAnPGhyIGNsYXNzPVwiYm9yZGVyLWdyYXktMjAwIG1iLTJcIj48c3BhbiBjbGFzcz1cImJnLXdoaXRlIHB4LTJcIj5DaGF0LVZlcmxhdWYgZ2VsYWRlbjwvc3Bhbj4nO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhdEJvZHkuYXBwZW5kQ2hpbGQoc2VwYXJhdG9yKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgY2hhdCBoaXN0b3J5OicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmQgbWVzc2FnZSB0byBBUElcbiAgICAgKi9cbiAgICBhc3luYyBzZW5kTWVzc2FnZSgpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuY2hhdElucHV0LnZhbHVlLnRyaW0oKTtcbiAgICAgICAgaWYgKCFtZXNzYWdlKSByZXR1cm47XG5cbiAgICAgICAgY29uc3Qgd2VsY29tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWxjb21lJyk7XG4gICAgICAgIGlmICh3ZWxjb21lKSB3ZWxjb21lLnJlbW92ZSgpO1xuXG4gICAgICAgIGNvbnN0IHNlcGFyYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGF0LWhpc3Rvcnktc2VwYXJhdG9yJyk7XG4gICAgICAgIGlmIChzZXBhcmF0b3IpIHNlcGFyYXRvci5yZW1vdmUoKTtcblxuICAgICAgICB0aGlzLmFwcGVuZFVzZXJNZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICBjb25zdCBsb2FkaW5nRGl2ID0gdGhpcy5zaG93TG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgdGhpcy5jaGF0SW5wdXQudmFsdWUgPSAnJztcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9jaGF0L3N1Ym1pdCcsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2UgfSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXBsYWNlTG9hZGluZ1dpdGhNZXNzYWdlKGxvYWRpbmdEaXYsIGRhdGEucmVzcG9uc2UpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UuaW5jbHVkZXMoJ3NjaGxhZmVuIGtvbW0gbW9yZ2VuIHdpZWRlcicpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UmF0ZUxpbWl0ZWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yKGxvYWRpbmdEaXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xuICAgICAgICAgICAgdGhpcy5zaG93TmV0d29ya0Vycm9yKGxvYWRpbmdEaXYpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwZW5kIHVzZXIgbWVzc2FnZSB0byBjaGF0XG4gICAgICovXG4gICAgYXBwZW5kVXNlck1lc3NhZ2UodGV4dCkge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmNsYXNzTmFtZSA9ICdmbGV4IGp1c3RpZnktZW5kIGdhcC0zIG1iLTQnO1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1heC13LXhzIG1kOm1heC13LW1kXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJnLWJsdWUtNjAwIHRleHQtd2hpdGUgcHgtNCBweS0zIHJvdW5kZWQtbGdcIj4ke3RleHR9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LXNocmluay0wIHctMTAgaC0xMCByb3VuZGVkLWZ1bGwgYmctZ3JheS0xMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj7wn5GkPC9kaXY+XG4gICAgICAgIGA7XG4gICAgICAgIHRoaXMuY2hhdEJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBlbmQgYm90IG1lc3NhZ2UgdG8gY2hhdFxuICAgICAqL1xuICAgIGFwcGVuZEJvdE1lc3NhZ2UoY29udGVudCkge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmNsYXNzTmFtZSA9ICdmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0zIG1iLTQnO1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGltZyBzcmM9XCIvcm9ib3QucG5nXCIgYWx0PVwiUm9ib3QgR29sbGFcIiBjbGFzcz1cInctMTAgaC0xMCBvYmplY3QtY29udGFpbiByb3VuZGVkLWZ1bGwgYmctYmx1ZS0xMDAgcC0xIGZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LTEgYmctZ3JheS01MCByb3VuZGVkLWxnIHAtNCBtYXgtdy0yeGxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ncmF5LTcwMCBsZWFkaW5nLXJlbGF4ZWRcIj4ke0NoYXRNYXJrZG93bi5mb3JtYXQoY29udGVudCl9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICAgICAgdGhpcy5jaGF0Qm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgbG9hZGluZyBtZXNzYWdlXG4gICAgICovXG4gICAgc2hvd0xvYWRpbmdNZXNzYWdlKCkge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmNsYXNzTmFtZSA9ICdmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0zIG1iLTQnO1xuICAgICAgICBkaXYuaWQgPSAnY3VycmVudC1sb2FkaW5nJztcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3JvYm90LnBuZ1wiIGFsdD1cIlJvYm90IEdvbGxhXCIgY2xhc3M9XCJ3LTEwIGgtMTAgb2JqZWN0LWNvbnRhaW4gcm91bmRlZC1mdWxsIGJnLWJsdWUtMTAwIHAtMSBmbGV4LXNocmluay0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmctZ3JheS01MCByb3VuZGVkLWxnIHAtNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW5pbWF0ZS1wdWxzZSBmbGV4IGdhcC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0yIGgtMiBiZy1ncmF5LTQwMCByb3VuZGVkLWZ1bGxcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTIgaC0yIGJnLWdyYXktNDAwIHJvdW5kZWQtZnVsbCBhbmltYXRpb24tZGVsYXktMjAwXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0yIGgtMiBiZy1ncmF5LTQwMCByb3VuZGVkLWZ1bGwgYW5pbWF0aW9uLWRlbGF5LTQwMFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWdyYXktNTAwIHRleHQtc21cIj5Sb2JvdCBHb2xsYSBkZW5rdCBuYWNoLi4uPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgICAgIHRoaXMuY2hhdEJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgdGhpcy5zY3JvbGxUb0JvdHRvbSgpO1xuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2UgbG9hZGluZyBtZXNzYWdlIHdpdGggYWN0dWFsIHJlc3BvbnNlXG4gICAgICovXG4gICAgcmVwbGFjZUxvYWRpbmdXaXRoTWVzc2FnZShsb2FkaW5nRGl2LCBjb250ZW50KSB7XG4gICAgICAgIGxvYWRpbmdEaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGltZyBzcmM9XCIvcm9ib3QucG5nXCIgYWx0PVwiUm9ib3QgR29sbGFcIiBjbGFzcz1cInctMTAgaC0xMCBvYmplY3QtY29udGFpbiByb3VuZGVkLWZ1bGwgYmctYmx1ZS0xMDAgcC0xIGZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LTEgYmctZ3JheS01MCByb3VuZGVkLWxnIHAtNCBtYXgtdy0yeGxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ncmF5LTcwMCBsZWFkaW5nLXJlbGF4ZWRcIj4ke0NoYXRNYXJrZG93bi5mb3JtYXQoY29udGVudCl9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICAgICAgbG9hZGluZ0Rpdi5yZW1vdmVBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IGVycm9yIG1lc3NhZ2VcbiAgICAgKi9cbiAgICBzaG93RXJyb3IobG9hZGluZ0Rpdikge1xuICAgICAgICBsb2FkaW5nRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3JvYm90LnBuZ1wiIGFsdD1cIlJvYm90IEdvbGxhXCIgY2xhc3M9XCJ3LTEwIGgtMTAgb2JqZWN0LWNvbnRhaW4gcm91bmRlZC1mdWxsIGJnLXJlZC0xMDAgcC0xIGZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LTEgYmctcmVkLTUwIGJvcmRlciBib3JkZXItcmVkLTIwMCByb3VuZGVkLWxnIHAtNCBtYXgtdy0yeGxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1yZWQtNzAwXCI+RW50c2NodWxkaWd1bmcsIGVzIGlzdCBlaW4gRmVobGVyIGF1ZmdldHJldGVuLiBCaXR0ZSB2ZXJzdWNoZSBlcyBzcMOkdGVyIGVybmV1dC48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgICAgICBsb2FkaW5nRGl2LnJlbW92ZUF0dHJpYnV0ZSgnaWQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IG5ldHdvcmsgZXJyb3JcbiAgICAgKi9cbiAgICBzaG93TmV0d29ya0Vycm9yKGxvYWRpbmdEaXYpIHtcbiAgICAgICAgbG9hZGluZ0Rpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9yb2JvdC5wbmdcIiBhbHQ9XCJSb2JvdCBHb2xsYVwiIGNsYXNzPVwidy0xMCBoLTEwIG9iamVjdC1jb250YWluIHJvdW5kZWQtZnVsbCBiZy1yZWQtMTAwIHAtMSBmbGV4LXNocmluay0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC0xIGJnLXJlZC01MCBib3JkZXIgYm9yZGVyLXJlZC0yMDAgcm91bmRlZC1sZyBwLTQgbWF4LXctMnhsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcmVkLTcwMFwiPk5ldHp3ZXJrZmVobGVyOiBCaXR0ZSDDvGJlcnByw7xmZSBkZWluZSBJbnRlcm5ldHZlcmJpbmR1bmcgdW5kIHZlcnN1Y2hlIGVzIGVybmV1dC48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgICAgICBsb2FkaW5nRGl2LnJlbW92ZUF0dHJpYnV0ZSgnaWQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgcmF0ZSBsaW1pdGVkIHN0YXRlXG4gICAgICovXG4gICAgc2V0UmF0ZUxpbWl0ZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLnJvYm90SW1hZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucm9ib3RJbWFnZS5zcmMgPSAnL3JvYm90LXNsZWVwaW5nLnBuZyc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3JkZXItdC5ib3JkZXItZ3JheS0yMDAuYmctZ3JheS01MCcpO1xuICAgICAgICBpZiAoaW5wdXRDb250YWluZXIpIHtcbiAgICAgICAgICAgIGlucHV0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgY2hhdCB0byBib3R0b20gKG9ubHkgc2Nyb2xscyB0aGUgY2hhdCBjb250YWluZXIsIG5vdCB0aGUgcGFnZSlcbiAgICAgKi9cbiAgICBzY3JvbGxUb0JvdHRvbSgpIHtcbiAgICAgICAgdGhpcy5jaGF0Qm9keS5zY3JvbGxUb3AgPSB0aGlzLmNoYXRCb2R5LnNjcm9sbEhlaWdodDtcbiAgICB9XG59XG5cbi8vIEF1dG8taW5pdGlhbGl6ZSB3aGVuIERPTSBpcyByZWFkeVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNoYXRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGF0LW1lc3NhZ2UnKTtcbiAgICBjb25zdCBjaGF0U3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXQtc3VibWl0Jyk7XG4gICAgY29uc3QgY2hhdEJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhdC1ib2R5Jyk7XG4gICAgY29uc3QgbG9hZGluZ01lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGluZy1tZXNzYWdlJyk7XG4gICAgY29uc3Qgcm9ib3RJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb2JvdC1pbWFnZScpO1xuXG4gICAgLy8gT25seSBpbml0aWFsaXplIGlmIGNoYXQgZWxlbWVudHMgZXhpc3Qgb24gdGhlIHBhZ2VcbiAgICBpZiAoY2hhdEJvZHkgJiYgY2hhdElucHV0ICYmIGNoYXRTdWJtaXQpIHtcbiAgICAgICAgY29uc3QgY2hhdCA9IG5ldyBDaGF0SGFuZGxlcihjaGF0Qm9keSwgY2hhdElucHV0LCBjaGF0U3VibWl0LCBsb2FkaW5nTWVzc2FnZSwgcm9ib3RJbWFnZSk7XG4gICAgICAgIGNoYXQuaW5pdCgpO1xuICAgIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLWNsYXVzZScpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciBub3RBUmVnRXhwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25vdC1hLXJlZ2V4cCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgY29ycmVjdElzUmVnRXhwTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29ycmVjdC1pcy1yZWdleHAtbG9naWMnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLXN0cmluZy1wcm90b3R5cGUtZW5kc3dpdGggLS0gc2FmZVxudmFyIG5hdGl2ZUVuZHNXaXRoID0gdW5jdXJyeVRoaXMoJycuZW5kc1dpdGgpO1xudmFyIHNsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xudmFyIG1pbiA9IE1hdGgubWluO1xuXG52YXIgQ09SUkVDVF9JU19SRUdFWFBfTE9HSUMgPSBjb3JyZWN0SXNSZWdFeHBMb2dpYygnZW5kc1dpdGgnKTtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL3B1bGwvNzAyXG52YXIgTUROX1BPTFlGSUxMX0JVRyA9ICFJU19QVVJFICYmICFDT1JSRUNUX0lTX1JFR0VYUF9MT0dJQyAmJiAhIWZ1bmN0aW9uICgpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoU3RyaW5nLnByb3RvdHlwZSwgJ2VuZHNXaXRoJyk7XG4gIHJldHVybiBkZXNjcmlwdG9yICYmICFkZXNjcmlwdG9yLndyaXRhYmxlO1xufSgpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuZW5kc3dpdGhcbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhTUROX1BPTFlGSUxMX0JVRyAmJiAhQ09SUkVDVF9JU19SRUdFWFBfTE9HSUMgfSwge1xuICBlbmRzV2l0aDogZnVuY3Rpb24gZW5kc1dpdGgoc2VhcmNoU3RyaW5nIC8qICwgZW5kUG9zaXRpb24gPSBAbGVuZ3RoICovKSB7XG4gICAgdmFyIHRoYXQgPSB0b1N0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKTtcbiAgICBub3RBUmVnRXhwKHNlYXJjaFN0cmluZyk7XG4gICAgdmFyIGVuZFBvc2l0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gICAgdmFyIGxlbiA9IHRoYXQubGVuZ3RoO1xuICAgIHZhciBlbmQgPSBlbmRQb3NpdGlvbiA9PT0gdW5kZWZpbmVkID8gbGVuIDogbWluKHRvTGVuZ3RoKGVuZFBvc2l0aW9uKSwgbGVuKTtcbiAgICB2YXIgc2VhcmNoID0gdG9TdHJpbmcoc2VhcmNoU3RyaW5nKTtcbiAgICByZXR1cm4gbmF0aXZlRW5kc1dpdGhcbiAgICAgID8gbmF0aXZlRW5kc1dpdGgodGhhdCwgc2VhcmNoLCBlbmQpXG4gICAgICA6IHNsaWNlKHRoYXQsIGVuZCAtIHNlYXJjaC5sZW5ndGgsIGVuZCkgPT09IHNlYXJjaDtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMtY2xhdXNlJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIG5vdEFSZWdFeHAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbm90LWEtcmVnZXhwJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBjb3JyZWN0SXNSZWdFeHBMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3JyZWN0LWlzLXJlZ2V4cC1sb2dpYycpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tc3RyaW5nLXByb3RvdHlwZS1zdGFydHN3aXRoIC0tIHNhZmVcbnZhciBuYXRpdmVTdGFydHNXaXRoID0gdW5jdXJyeVRoaXMoJycuc3RhcnRzV2l0aCk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgbWluID0gTWF0aC5taW47XG5cbnZhciBDT1JSRUNUX0lTX1JFR0VYUF9MT0dJQyA9IGNvcnJlY3RJc1JlZ0V4cExvZ2ljKCdzdGFydHNXaXRoJyk7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9wdWxsLzcwMlxudmFyIE1ETl9QT0xZRklMTF9CVUcgPSAhSVNfUFVSRSAmJiAhQ09SUkVDVF9JU19SRUdFWFBfTE9HSUMgJiYgISFmdW5jdGlvbiAoKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFN0cmluZy5wcm90b3R5cGUsICdzdGFydHNXaXRoJyk7XG4gIHJldHVybiBkZXNjcmlwdG9yICYmICFkZXNjcmlwdG9yLndyaXRhYmxlO1xufSgpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zdGFydHN3aXRoXG4kKHsgdGFyZ2V0OiAnU3RyaW5nJywgcHJvdG86IHRydWUsIGZvcmNlZDogIU1ETl9QT0xZRklMTF9CVUcgJiYgIUNPUlJFQ1RfSVNfUkVHRVhQX0xPR0lDIH0sIHtcbiAgc3RhcnRzV2l0aDogZnVuY3Rpb24gc3RhcnRzV2l0aChzZWFyY2hTdHJpbmcgLyogLCBwb3NpdGlvbiA9IDAgKi8pIHtcbiAgICB2YXIgdGhhdCA9IHRvU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcykpO1xuICAgIG5vdEFSZWdFeHAoc2VhcmNoU3RyaW5nKTtcbiAgICB2YXIgaW5kZXggPSB0b0xlbmd0aChtaW4oYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIHRoYXQubGVuZ3RoKSk7XG4gICAgdmFyIHNlYXJjaCA9IHRvU3RyaW5nKHNlYXJjaFN0cmluZyk7XG4gICAgcmV0dXJuIG5hdGl2ZVN0YXJ0c1dpdGhcbiAgICAgID8gbmF0aXZlU3RhcnRzV2l0aCh0aGF0LCBzZWFyY2gsIGluZGV4KVxuICAgICAgOiBzdHJpbmdTbGljZSh0aGF0LCBpbmRleCwgaW5kZXggKyBzZWFyY2gubGVuZ3RoKSA9PT0gc2VhcmNoO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfdHlwZW9mIiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJfdG9Qcm9wZXJ0eUtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl90b1ByaW1pdGl2ZSIsIlN0cmluZyIsImlucHV0IiwiaGludCIsInByaW0iLCJ0b1ByaW1pdGl2ZSIsInJlcyIsIk51bWJlciIsIkNoYXRNYXJrZG93biIsImZvcm1hdCIsInRleHQiLCJodG1sIiwicmVwbGFjZSIsIm1hdGNoIiwidXJsIiwiZW5kc1dpdGgiLCJpbmNsdWRlcyIsImNvbmNhdCIsInByb2Nlc3NMaXN0cyIsInN0YXJ0c1dpdGgiLCJsaW5lcyIsInNwbGl0IiwicHJvY2Vzc2VkTGluZXMiLCJjdXJyZW50TGlzdEl0ZW1zIiwibGlzdFR5cGUiLCJsaW5lIiwib3JkZXJlZE1hdGNoIiwidW5vcmRlcmVkTWF0Y2giLCJpbmRlbnRlZExpbmUiLCJqb2luIiwiaXRlbUNvbnRlbnQiLCJqIiwiZGVzY3JpcHRpb25MaW5lcyIsIm5leHRMaW5lIiwidHJpbSIsImxhc3RJbmRleCIsInRhZyIsImxpc3RDbGFzcyIsIkNoYXRIYW5kbGVyIiwiY2hhdEJvZHkiLCJjaGF0SW5wdXQiLCJjaGF0U3VibWl0IiwibG9hZGluZ01lc3NhZ2UiLCJyb2JvdEltYWdlIiwiaW5pdCIsIl90aGlzIiwibG9hZENoYXRIaXN0b3J5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNlbmRNZXNzYWdlIiwiX2xvYWRDaGF0SGlzdG9yeSIsIl9jYWxsZWUiLCJfdGhpczIiLCJyZXNwb25zZSIsImRhdGEiLCJ3ZWxjb21lIiwic2VwYXJhdG9yIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImZldGNoIiwianNvbiIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW1vdmUiLCJtc2ciLCJhcHBlbmRVc2VyTWVzc2FnZSIsInF1ZXN0aW9uIiwiYXBwZW5kQm90TWVzc2FnZSIsImFuc3dlciIsInNldFJhdGVMaW1pdGVkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwic2Nyb2xsVG9Cb3R0b20iLCJ0MCIsImNvbnNvbGUiLCJfc2VuZE1lc3NhZ2UiLCJfY2FsbGVlMiIsIm1lc3NhZ2UiLCJsb2FkaW5nRGl2IiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwicXVlcnlTZWxlY3RvciIsInNob3dMb2FkaW5nTWVzc2FnZSIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcGxhY2VMb2FkaW5nV2l0aE1lc3NhZ2UiLCJzaG93RXJyb3IiLCJzaG93TmV0d29ya0Vycm9yIiwiZGl2IiwiY29udGVudCIsImlkIiwicmVtb3ZlQXR0cmlidXRlIiwic3JjIiwiaW5wdXRDb250YWluZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJjaGF0Il0sInNvdXJjZVJvb3QiOiIifQ==