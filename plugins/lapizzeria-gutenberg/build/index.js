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

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

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

var registerBlockType = wp.blocks.registerBlockType; //Importamos componente richtext que nos sirve para escribir en gutenberg

var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    InspectorControls = _wp$editor.InspectorControls,
    ColorPalette = _wp$editor.ColorPalette,
    BlockControls = _wp$editor.BlockControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar;
var PanelBody = wp.components.PanelBody; //Logo para el bloque


/**
 * LOS 7 PASOS PARA DESARROLLAR BLOQUES EN GUTENBERG
 *  1.- Importar el/los componente/s que vayas a utilizar.
 *  2.- Coloca el componente donde deseas utilizarlo.
 *  3.- Crea una función que lea los contenidos.
 *  4.- Registra un Atributo.
 *  5.- Extraer el contenido desde props.
 *  6.- Guarda el contenido con setAtributes.
 *  7.- Lee los contenidos guardados en save().
 */

registerBlockType('lapizzeria/boxes', {
  title: 'Pizzeria Cajas',
  icon: {
    src: _pizzeria_icon_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
  },
  category: 'lapizzeria',
  attributes: {
    headingBox: {
      type: 'string',
      source: 'html',
      selector: '.box h2'
    },
    textoBox: {
      type: 'string',
      source: 'html',
      selector: '.box p'
    },
    colorFondo: {
      type: 'string'
    },
    colorTexto: {
      type: 'string'
    },
    alineacionContenido: {
      type: 'string',
      default: 'center'
    }
  },
  edit: function edit(props) {
    console.log(props); //EXTRAER EL CONTENIDO DESDE PROPS

    var _props$attributes = props.attributes,
        headingBox = _props$attributes.headingBox,
        textoBox = _props$attributes.textoBox,
        colorFondo = _props$attributes.colorFondo,
        colorTexto = _props$attributes.colorTexto,
        alineacionContenido = _props$attributes.alineacionContenido,
        setAttributes = props.setAttributes; //Funcion para guardar en los atributos del props  el texto del h2

    var onChangeHeadingBox = function onChangeHeadingBox(nuevoHeading) {
      //GUARDAMOS EL CONTENIDO CON setAttributes.
      setAttributes({
        headingBox: nuevoHeading
      });
    }; //Funcion para guardar en los atributos del props  el texto del parrafo


    var onChageTextoBox = function onChageTextoBox(nuevoTexto) {
      setAttributes({
        textoBox: nuevoTexto
      });
    }; //Funcion para cambiar el color del fondo


    var onChangeColorFondo = function onChangeColorFondo(nuevoColorFondo) {
      console.log(nuevoColorFondo);
      setAttributes({
        colorFondo: nuevoColorFondo
      });
    }; //Función para cambiar el color del Texto


    var onChangeColorTexto = function onChangeColorTexto(nuevoColorTexto) {
      setAttributes({
        colorTexto: nuevoColorTexto
      });
    }; //Función para alinear el contenido


    var onChangeAlinearContenido = function onChangeAlinearContenido(nuevaAlineacion) {
      setAttributes({
        alineacionContenido: nuevaAlineacion
      });
    };

    return (//Puede provocar un error porque no se pueden devolver 2 componentes 
      //distintos a menos que algo los englobe, por eso ponemos el elemento vacio antes (bien podria ser un div en otros casos).
      Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
        title: 'Color de Fondo',
        initialOpen: true
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        classname: "components-base-control"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "components-base-control__field"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
        className: "components-base-control__label"
      }, "Color del Fondo"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
        onChange: onChangeColorFondo,
        value: colorFondo
      })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
        title: 'Color del Texto',
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        classname: "components-base-control"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "components-base-control__field"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
        className: "components-base-control__label"
      }, "Color del Texto"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
        onChange: onChangeColorTexto,
        value: colorTexto
      }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AlignmentToolbar, {
        onChange: onChangeAlinearContenido
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "box",
        style: {
          backgroundColor: colorFondo,
          textAlign: alineacionContenido
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
        style: {
          color: colorTexto
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
        placeholder: "Agrega el Encabezado.",
        onChange: onChangeHeadingBox,
        value: headingBox
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
        style: {
          color: colorTexto
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
        placeholder: "Agrega un texto.",
        onChange: onChageTextoBox,
        value: textoBox
      }))))
    );
  },
  save: function save(props) {
    console.log(props); //EXTRAER EL CONTENIDO DESDE PROPS PARA LEER LOS ATRIBUTOS

    var _props$attributes2 = props.attributes,
        headingBox = _props$attributes2.headingBox,
        textoBox = _props$attributes2.textoBox,
        colorFondo = _props$attributes2.colorFondo,
        colorTexto = _props$attributes2.colorTexto,
        alineacionContenido = _props$attributes2.alineacionContenido; //GUARDAMOS LOS ATRIBUTOS

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "box",
      style: {
        backgroundColor: colorFondo,
        textAlign: alineacionContenido
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
      style: {
        color: colorTexto
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: headingBox
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      style: {
        color: colorTexto
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: textoBox
    })));
  }
});

/***/ }),

/***/ "./src/contenedor/index.js":
/*!*********************************!*\
  !*** ./src/contenedor/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pizzeria_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pizzeria-icon.svg */ "./src/pizzeria-icon.svg");

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    MediaUpload = _wp$editor.MediaUpload,
    InnerBlocks = _wp$editor.InnerBlocks;
var IconButton = wp.components.IconButton; //Logo para el bloque


registerBlockType('lapizzeria/contenedor', {
  title: 'Pizzeria Contenedor',
  icon: {
    src: _pizzeria_icon_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
  },
  category: 'lapizzeria',
  attributes: {
    imagenFondo: {
      type: 'string',
      selector: '.bloque-contenedor'
    }
  },
  edit: function edit(props) {
    // extraer de props
    var imagenFondo = props.attributes.imagenFondo,
        setAttributes = props.setAttributes;

    var onSeleccionarImagenFondo = function onSeleccionarImagenFondo(nuevaImagen) {
      setAttributes({
        imagenFondo: nuevaImagen.sizes.full.url
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "bloque-contenedor",
      style: {
        backgroundImage: "url(".concat(imagenFondo, ")")
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "contenido-bloque"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "imagen-fondo"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onSeleccionarImagenFondo,
      type: "image",
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(IconButton, {
          className: "lapizzeria-agregar-imagen",
          onClick: open,
          icon: "format-image",
          showTooltip: "true",
          label: "Cambiar Imagen de Fondo"
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "bloques-internos"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, null))));
  },
  save: function save(props) {
    // extraer de props
    var imagenFondo = props.attributes.imagenFondo;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "bloque-contenedor",
      style: {
        backgroundImage: "url(".concat(imagenFondo, ")")
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "contenido-bloque"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "imagen-fondo"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "bloques-internos"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null))));
  }
});

/***/ }),

/***/ "./src/galeria/index.js":
/*!******************************!*\
  !*** ./src/galeria/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pizzeria_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pizzeria-icon.svg */ "./src/pizzeria-icon.svg");


var registerBlockType = wp.blocks.registerBlockType;
var MediaUpload = wp.editor.MediaUpload;
var IconButton = wp.components.IconButton; //Logo para el bloque


registerBlockType('lapizzeria/galeria', {
  title: 'La Pizzería Galería',
  icon: {
    src: _pizzeria_icon_svg__WEBPACK_IMPORTED_MODULE_2__["ReactComponent"]
  },
  category: 'lapizzeria',
  attributes: {
    imagenes: {
      type: 'array'
    }
  },
  edit: function edit(props) {
    //Extraer los valores
    var _props$attributes$ima = props.attributes.imagenes,
        imagenes = _props$attributes$ima === void 0 ? [] : _props$attributes$ima,
        setAttributes = props.setAttributes;
    console.log(imagenes);

    var borrarImagen = function borrarImagen(imagenIndex) {
      //Guardamos todas las imagenes menos la que seleccionamos (todas las que tienen distinto indice)
      var nuevasImagenes = imagenes.filter(function (imagen, index) {
        return index !== imagenIndex;
      });
      setAttributes({
        imagenes: nuevasImagenes
      });
    };

    var onSeleccionarNuevaImagen = function onSeleccionarNuevaImagen(nuevaImagen) {
      var imagen = {
        thumb: nuevaImagen.sizes.medium.url,
        full: nuevaImagen.sizes.full.url,
        id: nuevaImagen.id
      };
      setAttributes({
        imagenes: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(imagenes), [imagen])
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "galeria-pizzeria"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
      onSelect: onSeleccionarNuevaImagen,
      type: "image",
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(IconButton, {
          className: "lapizzeria-agregar-imagen",
          onClick: open,
          icon: "format-image",
          showTooltip: "true",
          label: "Cambiar Imagen"
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h2", {
      className: "texto-primario"
    }, "Galer\xEDa"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("ul", {
      className: "listado-imagenes"
    }, imagenes.map(function (imagen, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("li", {
        className: "imagen"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "borrar-imagen",
        onClick: function onClick() {
          return borrarImagen(index);
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
        className: "dashicons dashicons-trash"
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
        src: imagen.thumb
      }));
    })));
  },
  save: function save(props) {
    //Extraemos los valores de props
    var _props$attributes$ima2 = props.attributes.imagenes,
        imagenes = _props$attributes$ima2 === void 0 ? [] : _props$attributes$ima2;

    if (imagenes.length === 0) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, " No hay imagenes en la galer\xEDa. ");
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "galeria-pizzeria"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h2", {
      className: "texto-primario"
    }, "Galer\xEDa"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("ul", {
      className: "listado-imagenes"
    }, imagenes.map(function (imagen) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("li", {
        className: "imagen"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
        href: imagen.full,
        "data-lightbox": "galeria"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
        src: imagen.thumb
      })));
    })));
  }
});

/***/ }),

/***/ "./src/hero/index.js":
/*!***************************!*\
  !*** ./src/hero/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pizzeria_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pizzeria-icon.svg */ "./src/pizzeria-icon.svg");

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    MediaUpload = _wp$editor.MediaUpload,
    RichText = _wp$editor.RichText,
    URLInputButton = _wp$editor.URLInputButton,
    BlockControls = _wp$editor.BlockControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    InspectorControls = _wp$editor.InspectorControls;
var _wp$components = wp.components,
    IconButton = _wp$components.IconButton,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl; //Logo para el bloque


registerBlockType('lapizzeria/hero', {
  title: 'La Pizzeria Hero',
  icon: {
    src: _pizzeria_icon_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
  },
  category: 'lapizzeria',
  attributes: {
    imagenHero: {
      type: 'string',
      selector: '.hero-block'
    },
    tituloHero: {
      type: 'string',
      source: 'html',
      selector: '.hero-block h1'
    },
    textoHero: {
      type: 'string',
      source: 'html',
      selector: '.hero-block p'
    },
    urlHero: {
      type: 'string',
      source: 'attribute',
      attribute: 'href'
    },
    alinearContenido: {
      type: 'string',
      default: 'center'
    },
    alturaHero: {
      type: 'number'
    }
  },
  supports: {
    align: ['wide', 'full'] //El tema tiene que soportar esto, hay que poner add_theme_support('align-wide'); en el functions.php 

  },
  edit: function edit(props) {
    //Extraemos los valores
    var _props$attributes = props.attributes,
        imagenHero = _props$attributes.imagenHero,
        tituloHero = _props$attributes.tituloHero,
        textoHero = _props$attributes.textoHero,
        urlHero = _props$attributes.urlHero,
        alinearContenido = _props$attributes.alinearContenido,
        alturaHero = _props$attributes.alturaHero,
        setAttributes = props.setAttributes;

    var onSeleccionarImagen = function onSeleccionarImagen(nuevaImagen) {
      setAttributes({
        imagenHero: nuevaImagen.sizes.full.url
      });
    };

    var onChangeTitulo = function onChangeTitulo(nuevoTitulo) {
      setAttributes({
        tituloHero: nuevoTitulo
      });
    };

    var onChangeTexto = function onChangeTexto(nuevoTexto) {
      setAttributes({
        textoHero: nuevoTexto
      });
    };

    var onChangeURL = function onChangeURL(nuevaURL) {
      setAttributes({
        urlHero: nuevaURL
      });
    };

    var onChangeAliearContenido = function onChangeAliearContenido(nuevoAlineamiento) {
      setAttributes({
        alinearContenido: nuevoAlineamiento
      });
    };

    var onChangeAlturaHero = function onChangeAlturaHero(nuevaAlturaHero) {
      setAttributes({
        alturaHero: nuevaAlturaHero
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: 'Altura del Hero',
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      classname: "components-base-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-base-control__field"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
      className: "components-base-control__label"
    }, "Altura en Pixeles"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      type: "number",
      max: 700,
      min: 300,
      step: 10,
      value: alturaHero || 500,
      onChange: onChangeAlturaHero
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "hero-block",
      style: {
        backgroundImage: "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(".concat(imagenHero, ")"),
        textAlign: alinearContenido,
        height: "".concat(alturaHero || 500, "px")
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AlignmentToolbar, {
      onChange: onChangeAliearContenido,
      value: alinearContenido
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onSeleccionarImagen,
      type: "image",
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(IconButton, {
          className: "lapizzeria-agregar-imagen",
          onClick: open,
          icon: "format-image",
          showTooltip: "true",
          label: "Cambiar Imagen"
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "contenido-hero"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", {
      classsName: "titulo"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: 'Agregar el Título del Hero',
      onChange: onChangeTitulo,
      value: tituloHero
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: 'Agregar el Texto del Hero',
      onChange: onChangeTexto,
      value: textoHero
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: urlHero,
      className: "boton boton-primario"
    }, " Leer M\xE1s ")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(URLInputButton, {
      onChange: onChangeURL,
      url: urlHero
    }))));
  },
  save: function save(props) {
    //Extraemos los valores
    var _props$attributes2 = props.attributes,
        imagenHero = _props$attributes2.imagenHero,
        tituloHero = _props$attributes2.tituloHero,
        textoHero = _props$attributes2.textoHero,
        urlHero = _props$attributes2.urlHero,
        alinearContenido = _props$attributes2.alinearContenido,
        alturaHero = _props$attributes2.alturaHero;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "hero-block",
      style: {
        backgroundImage: "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(".concat(imagenHero, ")"),
        textAlign: alinearContenido,
        height: "".concat(alturaHero || 500, "px")
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "contenido-hero"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", {
      classsName: "titulo"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: tituloHero
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: textoHero
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: urlHero,
      className: "boton boton-primario"
    }, " Leer M\xE1s "))));
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
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu/index.js");
/* harmony import */ var _galeria__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./galeria */ "./src/galeria/index.js");
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hero */ "./src/hero/index.js");
/* harmony import */ var _textoimagen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./textoimagen */ "./src/textoimagen/index.js");
/* harmony import */ var _contenedor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contenedor */ "./src/contenedor/index.js");







/***/ }),

/***/ "./src/menu/index.js":
/*!***************************!*\
  !*** ./src/menu/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pizzeria_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pizzeria-icon.svg */ "./src/pizzeria-icon.svg");


var registerBlockType = wp.blocks.registerBlockType;
var withSelect = wp.data.withSelect; //withSelect es como el wp_query de guttenberg

var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl,
    SelectControl = _wp$components.SelectControl,
    TextControl = _wp$components.TextControl; //Logo para el bloque


registerBlockType('lapizzeria/menu', {
  title: 'La Pizzeria Menú',
  icon: {
    src: _pizzeria_icon_svg__WEBPACK_IMPORTED_MODULE_2__["ReactComponent"]
  },
  category: 'lapizzeria',
  attributes: {
    cantidadMostrar: {
      type: 'number',
      default: 4
    },
    categoriaMenu: {
      type: 'number'
    },
    tituloBloque: {
      type: 'string',
      default: 'Titulo Bloque'
    }
  },
  edit: withSelect(function (select, props) {
    // Extraemos los valores del props
    var _props$attributes = props.attributes,
        cantidadMostrar = _props$attributes.cantidadMostrar,
        categoriaMenu = _props$attributes.categoriaMenu,
        setAttributes = props.setAttributes; //Pos el scope de javascript la funcion no esta definida porque solo esta definida en el edit y no en especialidades donde es llamada.
    //Para que no de error, se lo pasamos en el return para que esté disponible con las espcialidades.

    var onChangeCantidadAMostrar = function onChangeCantidadAMostrar(nuevaCantidad) {
      setAttributes({
        cantidadMostrar: parseInt(nuevaCantidad)
      });
    };

    var onChangeCategoriaMenu = function onChangeCategoriaMenu(nuevaCategoria) {
      setAttributes({
        categoriaMenu: nuevaCategoria
      });
    };

    var onChangeTituloBloque = function onChangeTituloBloque(nuevoTitulo) {
      setAttributes({
        tituloBloque: nuevoTitulo
      });
    };

    return {
      //Lamamos a la taxonomia en la API
      categorias: select("core").getEntityRecords('taxonomy', 'categoria-menu'),
      //Enviar una peticion a la API
      especialidades: select("core").getEntityRecords('postType', 'especialidades', {
        'categoria-menu': categoriaMenu,
        per_page: cantidadMostrar
      }),
      onChangeCantidadAMostrar: onChangeCantidadAMostrar,
      onChangeCategoriaMenu: onChangeCategoriaMenu,
      onChangeTituloBloque: onChangeTituloBloque,
      props: props
    };
  })(function (_ref) {
    var categorias = _ref.categorias,
        especialidades = _ref.especialidades,
        onChangeCantidadAMostrar = _ref.onChangeCantidadAMostrar,
        onChangeCategoriaMenu = _ref.onChangeCategoriaMenu,
        onChangeTituloBloque = _ref.onChangeTituloBloque,
        props = _ref.props;
    console.log(categorias); // Extraemos los valores del props

    var _props$attributes2 = props.attributes,
        cantidadMostrar = _props$attributes2.cantidadMostrar,
        categoriaMenu = _props$attributes2.categoriaMenu,
        tituloBloque = _props$attributes2.tituloBloque;
    /**
     * ACLARACIÓN AL ERROR DE .MAP:
     * 
     * El error de que nos falle el bloque cada vez que recargamos la página se debe a que la rest-api
     * tarda un mas en devolver los datos que lo que tarda .map, por lo que da error.
     * 
     * Para solucionarlo, verificaremos las especilidades y comprobaremos si finalmento no hay nada.
     **/
    //##################################################################################################################
    //VERIFICAR ESPCIALIDADES

    if (!especialidades) {
      return 'Cargando Especialidades...';
    } //SI NO HAY ESPECIALIDADES


    if (especialidades && especialidades.length === 0) {
      return 'No hay especialidades.';
    } //VERIFICAMOS CATEGORIAS


    if (!categorias) {
      console.log('No hay categorias');
      return null;
    }

    if (categorias && categorias.length === 0) {
      console.log('No hay categorias');
      return null;
    } // Generar label y value a categorias


    categorias.forEach(function (categoria) {
      categoria['label'] = categoria.name;
      categoria['value'] = categoria.id;
    }); // Arreglo con valores por default

    var opcionDefault = [{
      value: '',
      label: ' -- Todos -- '
    }];
    var listadoCategorias = [].concat(opcionDefault, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(categorias));
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: 'Cantidad a Mostrar',
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      classname: "components-base-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "components-base-control__field"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      className: "components-base-control__label"
    }, "Cantidad a Mostrar"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
      onChange: onChangeCantidadAMostrar,
      min: 2,
      max: 10,
      value: cantidadMostrar
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: 'Categoría de Especialidad',
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      classname: "components-base-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "components-base-control__field"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      className: "components-base-control__label"
    }, "Categor\xEDa de Especialidad"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      options: listadoCategorias,
      onChange: onChangeCategoriaMenu,
      value: categoriaMenu
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: 'Título Bloque',
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      classname: "components-base-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "components-base-control__field"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      className: "components-base-control__label"
    }, "T\xEDtulo Bloque"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
      onChange: onChangeTituloBloque,
      value: tituloBloque
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h2", {
      className: "titulo-menu"
    }, tituloBloque), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("ul", {
      className: "nuestro-menu"
    }, especialidades.map(function (especialidad) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
        src: especialidad.imagen_destacada
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "platillo"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "precio-titulo"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h3", null, especialidad.title.raw), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, "\u20AC ", especialidad.precio)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "contenido-platillo"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
        value: especialidad.content.rendered
      })))));
    })));
  }),
  save: function save() {
    return null; //Porque no se usa este, se usa el render_callback que llama a la funcion lapizzeria_especialidades_front_end en lapizzeria-gutenberg.php
  }
});

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

/***/ "./src/textoimagen/index.js":
/*!**********************************!*\
  !*** ./src/textoimagen/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pizzeria_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pizzeria-icon.svg */ "./src/pizzeria-icon.svg");

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    MediaUpload = _wp$editor.MediaUpload,
    RichText = _wp$editor.RichText,
    URLInputButton = _wp$editor.URLInputButton,
    BlockControls = _wp$editor.BlockControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar;
var IconButton = wp.components.IconButton; //Logo para el bloque


registerBlockType('lapizzeria/textoimagen', {
  title: 'Pizzeria Texto e Imagen',
  icon: {
    src: _pizzeria_icon_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
  },
  category: 'lapizzeria',
  attributes: {
    imagenFondo: {
      type: 'string',
      selector: '.ingredientes-bloque'
    },
    tituloBloque: {
      type: 'string',
      source: 'html',
      selector: '.texto-ingredientes h1'
    },
    textoBloque: {
      type: 'string',
      source: 'html',
      selector: '.texto-ingredientes p'
    },
    enlaceBloque: {
      type: 'string',
      source: 'attribute',
      attribute: 'href'
    },
    imagenBloque: {
      type: 'string',
      source: 'attribute',
      selector: '.imagen-ingredientes img',
      attribute: 'src',
      default: _pizzeria_icon_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
    }
  },
  supports: {
    align: ['wide', 'full']
  },
  edit: function edit(props) {
    // extraer de props
    var _props$attributes = props.attributes,
        imagenFondo = _props$attributes.imagenFondo,
        tituloBloque = _props$attributes.tituloBloque,
        textoBloque = _props$attributes.textoBloque,
        enlaceBloque = _props$attributes.enlaceBloque,
        imagenBloque = _props$attributes.imagenBloque,
        setAttributes = props.setAttributes;

    var onSeleccionarImagen = function onSeleccionarImagen(nuevaImagen) {
      setAttributes({
        imagenFondo: nuevaImagen.sizes.full.url
      });
    };

    var onChangeTitulo = function onChangeTitulo(nuevoTitulo) {
      setAttributes({
        tituloBloque: nuevoTitulo
      });
    };

    var onChangeTexto = function onChangeTexto(nuevoTexto) {
      setAttributes({
        textoBloque: nuevoTexto
      });
    };

    var onChangeURL = function onChangeURL(nuevaUrl) {
      setAttributes({
        enlaceBloque: nuevaUrl
      });
    };

    var onSeleccionarImagenIngredientes = function onSeleccionarImagenIngredientes(nuevaImagen) {
      setAttributes({
        imagenBloque: nuevaImagen.sizes.full.url
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "ingredientes-bloque",
      style: {
        backgroundImage: "url(".concat(imagenFondo, ")")
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onSeleccionarImagen,
      type: "image",
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(IconButton, {
          className: "lapizzeria-agregar-imagen",
          onClick: open,
          icon: "format-image",
          showTooltip: "true",
          label: "Cambiar Imagen"
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "contenido-ingredientes"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "texto-ingredientes"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", {
      className: "titulo"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: 'Agrega el Titulo del Hero',
      onChange: onChangeTitulo,
      value: tituloBloque
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: 'Agrega el Titulo del Hero',
      onChange: onChangeTexto,
      value: textoBloque
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: enlaceBloque,
      className: "boton boton-secundario"
    }, "Leer M\xE1s")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(URLInputButton, {
      onChange: onChangeURL,
      url: enlaceBloque
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "imagen-ingredientes"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: imagenBloque
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onSeleccionarImagenIngredientes,
      type: "image",
      render: function render(_ref2) {
        var open = _ref2.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(IconButton, {
          className: "lapizzeria-agregar-imagen",
          onClick: open,
          icon: "format-image",
          showTooltip: "true",
          label: "Cambiar Imagen"
        });
      }
    }))));
  },
  save: function save(props) {
    // extraer de props
    var _props$attributes2 = props.attributes,
        imagenFondo = _props$attributes2.imagenFondo,
        tituloBloque = _props$attributes2.tituloBloque,
        textoBloque = _props$attributes2.textoBloque,
        enlaceBloque = _props$attributes2.enlaceBloque,
        imagenBloque = _props$attributes2.imagenBloque;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "ingredientes-bloque",
      style: {
        backgroundImage: "url(".concat(imagenFondo, ")")
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "contenido-ingredientes"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "texto-ingredientes"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", {
      className: "titulo"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: tituloBloque
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: textoBloque
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: enlaceBloque,
      className: "boton boton-secundario"
    }, "Leer M\xE1s"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "imagen-ingredientes"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: imagenBloque
    }))));
  }
});

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