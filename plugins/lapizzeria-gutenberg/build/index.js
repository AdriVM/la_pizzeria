/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/boxes/index.js":
/*!****************************!*\
  !*** ./src/boxes/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pizzeria_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pizzeria-icon.svg */ "./src/pizzeria-icon.svg");

var registerBlockType = wp.blocks.registerBlockType; //Logo para el bloque


registerBlockType('lapizzeria/boxes', {
  title: 'Pizzeria Cajas',
  icon: {
    src: _pizzeria_icon_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
  },
  category: 'lapizzeria',
  edit: function edit() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "Se ve en el Editor");
  },
  save: function save() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "Se ve en el Front-End");
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _boxes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boxes */ "./src/boxes/index.js");


/***/ }),

/***/ "./src/pizzeria-icon.svg":
/*!*******************************!*\
  !*** ./src/pizzeria-icon.svg ***!
  \*******************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgPizzeriaIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#1B6606",
  d: "M-.405-1.612h27.09v27.255H-.405z"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "#FFF"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M2.965 18.784V5.228h3.293v10.703h5.246v2.853H2.965zM23.316 9.402c0 .792-.146 1.459-.439 2.001a3.62 3.62 0 01-1.188 1.312 5.255 5.255 0 01-1.723.728 8.844 8.844 0 01-2.029.229H16.31v5.112h-3.275V5.228h4.979c.74 0 1.433.073 2.077.22.645.148 1.206.383 1.685.709.479.325.855.754 1.131 1.282.273.53.409 1.185.409 1.963zm-3.273.018c0-.319-.063-.581-.191-.785s-.3-.362-.517-.478a2.165 2.165 0 00-.737-.229 6.053 6.053 0 00-.852-.058H16.31v3.197h1.377c.307 0 .601-.025.882-.076a2.39 2.39 0 00.756-.269c.224-.127.398-.297.526-.508.128-.209.192-.473.192-.794z"
}));

function SvgPizzeriaIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 25.16,
    height: 23.954
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,ZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0KCmltcG9ydCAqIGFzIFJlYWN0IGZyb20gInJlYWN0IjsKCnZhciBfcmVmID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoInBhdGgiLCB7CiAgZmlsbDogIiMxQjY2MDYiLAogIGQ6ICJNLS40MDUtMS42MTJoMjcuMDl2MjcuMjU1SC0uNDA1eiIKfSk7Cgp2YXIgX3JlZjIgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudCgiZyIsIHsKICBmaWxsOiAiI0ZGRiIKfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoInBhdGgiLCB7CiAgZDogIk0yLjk2NSAxOC43ODRWNS4yMjhoMy4yOTN2MTAuNzAzaDUuMjQ2djIuODUzSDIuOTY1ek0yMy4zMTYgOS40MDJjMCAuNzkyLS4xNDYgMS40NTktLjQzOSAyLjAwMWEzLjYyIDMuNjIgMCAwMS0xLjE4OCAxLjMxMiA1LjI1NSA1LjI1NSAwIDAxLTEuNzIzLjcyOCA4Ljg0NCA4Ljg0NCAwIDAxLTIuMDI5LjIyOUgxNi4zMXY1LjExMmgtMy4yNzVWNS4yMjhoNC45NzljLjc0IDAgMS40MzMuMDczIDIuMDc3LjIyLjY0NS4xNDggMS4yMDYuMzgzIDEuNjg1LjcwOS40NzkuMzI1Ljg1NS43NTQgMS4xMzEgMS4yODIuMjczLjUzLjQwOSAxLjE4NS40MDkgMS45NjN6bS0zLjI3My4wMThjMC0uMzE5LS4wNjMtLjU4MS0uMTkxLS43ODVzLS4zLS4zNjItLjUxNy0uNDc4YTIuMTY1IDIuMTY1IDAgMDAtLjczNy0uMjI5IDYuMDUzIDYuMDUzIDAgMDAtLjg1Mi0uMDU4SDE2LjMxdjMuMTk3aDEuMzc3Yy4zMDcgMCAuNjAxLS4wMjUuODgyLS4wNzZhMi4zOSAyLjM5IDAgMDAuNzU2LS4yNjljLjIyNC0uMTI3LjM5OC0uMjk3LjUyNi0uNTA4LjEyOC0uMjA5LjE5Mi0uNDczLjE5Mi0uNzk0eiIKfSkpOwoKZnVuY3Rpb24gU3ZnUGl6emVyaWFJY29uKHByb3BzKSB7CiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KCJzdmciLCBfZXh0ZW5kcyh7CiAgICB3aWR0aDogMjUuMTYsCiAgICBoZWlnaHQ6IDIzLjk1NAogIH0sIHByb3BzKSwgX3JlZiwgX3JlZjIpOwp9CgpleHBvcnQgZGVmYXVsdCAiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lQejROQ2p3aExTMGdSMlZ1WlhKaGRHOXlPaUJCWkc5aVpTQkpiR3gxYzNSeVlYUnZjaUF4Tmk0d0xqQXNJRk5XUnlCRmVIQnZjblFnVUd4MVp5MUpiaUF1SUZOV1J5QldaWEp6YVc5dU9pQTJMakF3SUVKMWFXeGtJREFwSUNBdExUNE5DandoUkU5RFZGbFFSU0J6ZG1jZ1VGVkNURWxESUNJdEx5OVhNME12TDBSVVJDQlRWa2NnTVM0eEx5OUZUaUlnSW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTDBkeVlYQm9hV056TDFOV1J5OHhMakV2UkZSRUwzTjJaekV4TG1SMFpDSStEUW84YzNabklIWmxjbk5wYjI0OUlqRXVNU0lnYVdROUlrTmhjR0ZmTVNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnZUQwaU1IQjRJaUI1UFNJd2NIZ2lEUW9KSUhkcFpIUm9QU0l5TlM0eE5uQjRJaUJvWldsbmFIUTlJakl6TGprMU5IQjRJaUIyYVdWM1FtOTRQU0l3SURBZ01qVXVNVFlnTWpNdU9UVTBJaUJsYm1GaWJHVXRZbUZqYTJkeWIzVnVaRDBpYm1WM0lEQWdNQ0F5TlM0eE5pQXlNeTQ1TlRRaUlIaHRiRHB6Y0dGalpUMGljSEpsYzJWeWRtVWlQZzBLUEhKbFkzUWdlRDBpTFRBdU5EQTFJaUI1UFNJdE1TNDJNVElpSUdacGJHdzlJaU14UWpZMk1EWWlJSGRwWkhSb1BTSXlOeTR3T1NJZ2FHVnBaMmgwUFNJeU55NHlOVFVpTHo0TkNqeG5QZzBLQ1R4d1lYUm9JR1pwYkd3OUlpTkdSa1pHUmtZaUlHUTlJazB5TGprMk5Td3hPQzQzT0RSV05TNHlNamhvTXk0eU9UTjJNVEF1TnpBemFEVXVNalEyZGpJdU9EVXpTREl1T1RZMWVpSXZQZzBLQ1R4d1lYUm9JR1pwYkd3OUlpTkdSa1pHUmtZaUlHUTlJazB5TXk0ek1UWXNPUzQwTURKak1Dd3dMamM1TWkwd0xqRTBOaXd4TGpRMU9TMHdMalF6T1N3eUxqQXdNV010TUM0eU9UUXNNQzQxTkRJdE1DNDJPRGtzTUM0NU9DMHhMakU0T0N3eExqTXhNZzBLQ1FsakxUQXVORGs0TERBdU16TXlMVEV1TURjeUxEQXVOVGMwTFRFdU56SXpMREF1TnpJNFl5MHdMalkxTVN3d0xqRTFNeTB4TGpNeU9Dd3dMakl5T1MweUxqQXlPU3d3TGpJeU9XZ3RNUzQyTWpkMk5TNHhNVEpvTFRNdU1qYzFWalV1TWpJNGFEUXVPVGM1RFFvSkNXTXdMamMwTERBc01TNDBNek1zTUM0d056TXNNaTR3Tnpjc01DNHlNbU13TGpZME5Td3dMakUwT0N3eExqSXdOaXd3TGpNNE15d3hMalk0TlN3d0xqY3dPV013TGpRM09Td3dMak15TlN3d0xqZzFOU3d3TGpjMU5Dd3hMakV6TVN3eExqSTRNZzBLQ1FsRE1qTXVNVGdzTnk0NU5qa3NNak11TXpFMkxEZ3VOakkwTERJekxqTXhOaXc1TGpRd01ub2dUVEl3TGpBME15dzVMalF5WXpBdE1DNHpNVGt0TUM0d05qTXRNQzQxT0RFdE1DNHhPVEV0TUM0M09EVnpMVEF1TXkwd0xqTTJNaTB3TGpVeE55MHdMalEzT0EwS0NRbGpMVEF1TWpFNExUQXVNVEUyTFRBdU5EWXlMVEF1TVRreUxUQXVOek0zTFRBdU1qSTVZeTB3TGpJM05DMHdMakF6T1Mwd0xqVTFPUzB3TGpBMU9DMHdMamcxTWkwd0xqQTFPR2d0TVM0ME16WjJNeTR4T1Rkb01TNHpOemRqTUM0ek1EY3NNQ3d3TGpZd01TMHdMakF5TlN3d0xqZzRNaTB3TGpBM05nMEtDUWxqTUM0eU9DMHdMakExTWl3d0xqVXpNaTB3TGpFME1Td3dMamMxTmkwd0xqSTJPV013TGpJeU5DMHdMakV5Tnl3d0xqTTVPQzB3TGpJNU55d3dMalV5Tmkwd0xqVXdPRU14T1M0NU56a3NNVEF1TURBMUxESXdMakEwTXl3NUxqYzBNU3d5TUM0d05ETXNPUzQwTW5vaUx6NE5Dand2Wno0TkNqd3ZjM1puUGcwSyI7CmV4cG9ydCB7IFN2Z1BpenplcmlhSWNvbiBhcyBSZWFjdENvbXBvbmVudCB9Ow==");


/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map