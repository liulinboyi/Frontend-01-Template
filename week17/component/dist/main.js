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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./gesture.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function enableGesture(element) {
  var contexts = Object.create(null);
  var MOUSE_SYMBOL = Symbol("mouse");

  if (document.ontouchstart !== null) {
    element.addEventListener("mousedown", function (event) {
      contexts[MOUSE_SYMBOL] = Object.create(null);
      start(event, contexts[MOUSE_SYMBOL]);

      var mousemove = function mousemove(event) {
        move(event, contexts[MOUSE_SYMBOL]);
      };

      var mouseend = function mouseend(event) {
        end(event, contexts[MOUSE_SYMBOL]);
        document.removeEventListener("mousemove", mousemove);
        document.removeEventListener("mouseup", mouseend);
      };

      document.addEventListener("mousemove", mousemove);
      document.addEventListener("mouseup", mouseend);
    });
  }

  element.addEventListener("touchstart", function (event) {
    var _iterator = _createForOfIteratorHelper(event.changedTouches),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var touch = _step.value;
        contexts[touch.identifier] = Object.create(null);
        start(touch, contexts[touch.identifier]);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
  element.addEventListener("touchmove", function (event) {
    var _iterator2 = _createForOfIteratorHelper(event.changedTouches),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var touch = _step2.value;
        move(touch, contexts[touch.identifier]);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  });
  element.addEventListener("touchend", function (event) {
    var _iterator3 = _createForOfIteratorHelper(event.changedTouches),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var touch = _step3.value;
        end(touch, contexts[touch.identifier]);
        delete contexts[touch.identifier];
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  });
  element.addEventListener("touchcancel", function (event) {
    var _iterator4 = _createForOfIteratorHelper(event.changedTouches),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var touch = _step4.value;
        cancel(touch, contexts[touch.identifier]);
        delete contexts[touch.identifier];
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }); //tap
  //pan - panstart panmove panend
  //flick
  //press - pressstart pressend

  var start = function start(point, context) {
    var e = new CustomEvent("start");
    Object.assign(e, {
      startX: point.clientX,
      startY: point.clientY,
      clientX: point.clientX,
      clientY: point.clientY
    });
    element.dispatchEvent(e);
    context.startX = point.clientX, context.startY = point.clientY;
    context.moves = [];
    context.isTap = true;
    context.isPan = false;
    context.isPress = false;
    console.log("tapstart");
    context.timeoutHandler = setTimeout(function () {
      if (context.isPan) return;
      context.isTap = false;
      context.isPan = false;
      context.isPress = true;
      element.dispatchEvent(new CustomEvent("pressstart", {}));
    }, 500);
  };

  var move = function move(point, context) {
    var dx = point.clientX - context.startX,
        dy = point.clientY - context.startY;

    if (Math.pow(dx, 2) + Math.pow(dy, 2) > 100 && !context.isPan) {
      if (context.isPress) element.dispatchEvent(new CustomEvent("presscancel", {}));
      context.isTap = false;
      context.isPan = true;
      context.isPress = false;
      var e = new CustomEvent("panstart");
      Object.assign(e, {
        startX: context.startX,
        startY: context.startY,
        clientX: point.clientX,
        clientY: point.clientY
      });
      element.dispatchEvent(e);
    } //


    if (context.isPan) {
      context.moves.push({
        dx: dx,
        dy: dy,
        t: Date.now()
      });
      context.moves = context.moves.filter(function (record) {
        return Date.now() - record.t < 300;
      });

      var _e = new CustomEvent("pan");

      Object.assign(_e, {
        startX: context.startX,
        startY: context.startY,
        clientX: point.clientX,
        clientY: point.clientY
      });
      element.dispatchEvent(_e);
    }
  };

  var end = function end(point, context) {
    var dx = point.clientX - context.startX,
        dy = point.clientY - context.startY;

    if (context.isPan) {
      var record = context.moves[0];
      var speed = Math.sqrt(Math.pow(record.dx - dx, 2) + Math.pow(record.dy - dy, 2)) / (Date.now() - record.t);
      var isFlick = speed > 2.5;

      if (isFlick) {
        var flickE = new CustomEvent("flick");
        Object.assign(flickE, {
          startX: context.startX,
          startY: context.startY,
          clientX: point.clientX,
          clientY: point.clientY,
          speed: speed
        });
        element.dispatchEvent(flickE);
      }

      var e = new CustomEvent("panend");
      Object.assign(e, {
        startX: context.startX,
        startY: context.startY,
        clientX: point.clientX,
        clientY: point.clientY,
        speed: speed,
        isFlick: isFlick
      });
      element.dispatchEvent(e);
    }

    if (context.isTap) {
      element.dispatchEvent(new CustomEvent("tap", {}));
    }

    if (context.isPress) element.dispatchEvent(new CustomEvent("pressend", {}));
    clearTimeout(context.timeoutHandler);
  };

  var cancel = function cancel(point, context) {
    element.dispatchEvent(new CustomEvent("cancelend", {}));
    clearTimeout(context.timeoutHandler);
  };
}
// CONCATENATED MODULE: ./createElement.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function createElement_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = createElement_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function createElement_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return createElement_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return createElement_arrayLikeToArray(o, minLen); }

function createElement_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


function createElement(Cls, attributes) {
  var o;

  if (typeof Cls === "string") {
    o = new createElement_Wrapper(Cls);
  } else {
    o = new Cls({
      timer: {}
    });
  }

  for (var name in attributes) {
    o.setAttribute(name, attributes[name]);
  }

  var visit = function visit(children) {
    var _iterator = createElement_createForOfIteratorHelper(children),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var child = _step.value;

        if (_typeof(child) === "object" && child instanceof Array) {
          visit(child);
          continue;
        }

        if (typeof child === "string") child = new Text(child);
        o.appendChild(child);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  visit(children);
  return o;
}
var Text = /*#__PURE__*/function () {
  function Text(text) {
    _classCallCheck(this, Text);

    this.children = [];
    this.root = document.createTextNode(text);
  }

  _createClass(Text, [{
    key: "mountTo",
    value: function mountTo(parent) {
      parent.appendChild(this.root);
    }
  }]);

  return Text;
}();
var createElement_Wrapper = /*#__PURE__*/function () {
  function Wrapper(type) {
    _classCallCheck(this, Wrapper);

    this.children = [];
    this.root = document.createElement(type);
  }

  _createClass(Wrapper, [{
    key: "setAttribute",
    value: function setAttribute(name, value) {
      this.root.setAttribute(name, value);

      if (name.match(/^on([\s\S]+)$/)) {
        console.log(111111);
        var eventName = RegExp.$1.replace(/^[\s\S]/, function (c) {
          return c.toLowerCase();
        });
        this.addEventListener(eventName, value);
      }

      if (name === 'enableGesture') {
        enableGesture(this.root);
      }
    }
  }, {
    key: "appendChild",
    value: function appendChild(child) {
      this.children.push(child);
    }
  }, {
    key: "mountTo",
    value: function mountTo(parent) {
      parent.appendChild(this.root);

      var _iterator2 = createElement_createForOfIteratorHelper(this.children),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var child = _step2.value;
          child.mountTo(this.root);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "addEventListener",
    value: function addEventListener() {
      var _this$root;

      (_this$root = this.root).addEventListener.apply(_this$root, arguments);
    }
  }, {
    key: "style",
    get: function get() {
      return this.root.style;
    }
  }]);

  return Wrapper;
}();
// CONCATENATED MODULE: ./animation.js
function animation_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = animation_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function animation_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return animation_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return animation_arrayLikeToArray(o, minLen); }

function animation_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function animation_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function animation_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function animation_createClass(Constructor, protoProps, staticProps) { if (protoProps) animation_defineProperties(Constructor.prototype, protoProps); if (staticProps) animation_defineProperties(Constructor, staticProps); return Constructor; }

var Timeline = /*#__PURE__*/function () {
  function Timeline() {
    animation_classCallCheck(this, Timeline);

    this.animations = new Set();
    this.finishedAnimations = new Set();
    this.requestID = null;
    this.pauseTime = null;
    this.addTimes = new Map();
    this.state = "inited";
  }

  animation_createClass(Timeline, [{
    key: "tick",
    value: function tick() {
      var _this = this;

      var t = Date.now() - this.startTime; // let animations = this.animations.filter((animation) => !animation.finished);

      var _iterator = animation_createForOfIteratorHelper(this.animations),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var animation = _step.value;
          var object = animation.object,
              property = animation.property,
              template = animation.template,
              start = animation.start,
              end = animation.end,
              duration = animation.duration,
              delay = animation.delay,
              timingFunction = animation.timingFunction;
          var addTime = this.addTimes.get(animation);
          if (t < delay + addTime) continue;
          var progression = timingFunction((t - delay - addTime) / duration);

          if (t > duration + delay + addTime) {
            progression = 1;
            this.animations["delete"](animation);
            this.finishedAnimations.add(animation);
          }

          var value = animation.valueFromProgression(progression);
          object[property] = template(value);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (this.animations.size) this.requestID = requestAnimationFrame(function () {
        return _this.tick();
      });else this.requestID = null;
    }
  }, {
    key: "pause",
    value: function pause() {
      if (this.state !== "playing") return;
      this.state = "paused";
      this.pauseTime = Date.now();

      if (this.requestID !== null) {
        cancelAnimationFrame(this.requestID);
        this.requestID = null;
      }
    }
  }, {
    key: "resume",
    value: function resume() {
      if (this.state !== "paused") return;
      this.state = "playing";
      this.startTime += Date.now() - this.pauseTime;
      this.tick();
    }
  }, {
    key: "start",
    value: function start() {
      if (this.state !== "inited") return;
      this.state = "playing";
      this.startTime = Date.now();
      this.tick();
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this.state === "playing") this.pause();
      this.animations = new Set();
      this.finishedAnimations = new Set();
      this.addTimes = new Map();
      this.requestID = null;
      this.pauseTime = null;
      this.state = "playing";
      this.startTime = Date.now();
      this.state = "inited";
    }
  }, {
    key: "restart",
    value: function restart() {
      if (this.state === "playing") this.pause();

      var _iterator2 = animation_createForOfIteratorHelper(this.finishedAnimations),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var animation = _step2.value;
          this.animations.add(animation);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      this.finishedAnimations = new Set();
      this.requestID = null;
      this.pauseTime = null;
      this.state = "playing";
      this.startTime = Date.now();
      this.tick();
    }
  }, {
    key: "add",
    value: function add(animation, addTime) {
      this.animations.add(animation);
      if (this.state === "playing" && this.requestID === null) this.tick();
      if (this.state === "playing") this.addTimes.set(animation, addTime !== void 0 ? addTime : Date.now() - this.startTime);else this.addTimes.set(addTime !== void 0 ? addTime : 0);
    }
  }]);

  return Timeline;
}();
var Animation = /*#__PURE__*/function () {
  function Animation(object, property, template, start, end, duration, delay, timingFunction) {
    animation_classCallCheck(this, Animation);

    this.object = object;
    this.property = property;
    this.template = template;
    this.start = start;
    this.end = end;
    this.duration = duration;
    this.delay = delay;
    this.timingFunction = timingFunction;
  }

  animation_createClass(Animation, [{
    key: "valueFromProgression",
    value: function valueFromProgression(progression) {
      return this.start + progression * (this.end - this.start);
    }
  }]);

  return Animation;
}();
var ColorAnimation = /*#__PURE__*/function () {
  function ColorAnimation(object, property, start, end, duration, delay, timingFunction, template) {
    animation_classCallCheck(this, ColorAnimation);

    this.object = object;
    this.property = property;

    this.template = template || function (v) {
      return "rgba(".concat(v.r, ",").concat(v.g, ",").concat(v.b, ",").concat(v.a, ")");
    };

    this.start = start;
    this.end = end;
    this.duration = duration;
    this.delay = delay;
    this.timingFunction = timingFunction;
  }

  animation_createClass(ColorAnimation, [{
    key: "valueFromProgression",
    value: function valueFromProgression(progression) {
      return {
        r: this.start.r + progression * (this.end.r - this.start.r),
        g: this.start.g + progression * (this.end.g - this.start.g),
        b: this.start.b + progression * (this.end.b - this.start.b),
        a: this.start.a + progression * (this.end.a - this.start.a)
      };
    }
  }]);

  return ColorAnimation;
}();
// CONCATENATED MODULE: ./cubic_bezier.js
function cubicBezier(p1x, p1y, p2x, p2y) {
  var ZERO_LIMIT = 1e-6;
  var ax = 3 * p1x - 3 * p2x + 1;
  var bx = 3 * p2x - 6 * p1x;
  var cx = 3 * p1x;
  var ay = 3 * p1y - 3 * p2y + 1;
  var by = 3 * p2y - 6 * p1y;
  var cy = 3 * p1y;

  function sampleCurveDerivativeX(t) {
    return (3 * ax * t + 2 * bx) * t + cx;
  }

  function sampleCurveX(t) {
    return ((ax * t + bx) * t + cx) * t;
  }

  function sampleCurveY(t) {
    return ((ay * t + by) * t + cy) * t;
  }

  function solveCurveX(x) {
    var t2 = x;
    var derivative;
    var x2;

    for (var i = 0; i < 8; i++) {
      x2 = sampleCurveX(t2) - x;

      if (Math.abs(x2) < ZERO_LIMIT) {
        return t2;
      }

      derivative = sampleCurveDerivativeX(t2);

      if (Math.abs(derivative) < ZERO_LIMIT) {
        break;
      }

      t2 -= x2 / derivative;
    }

    var t1 = 1;
    var t0 = 0;
    t2 = x;

    while (t1 > t0) {
      x2 = sampleCurveX(t2) - x;

      if (Math.abs(x2) < ZERO_LIMIT) {
        return t2;
      }

      if (x2 > 0) {
        t1 = t2;
      } else {
        t0 = t2;
      }

      t2 = (t1 + t0) / 2;
    }

    return t2;
  }

  function solve(x) {
    return sampleCurveY(solveCurveX(x));
  }

  return solve;
}
var ease = cubicBezier(.25, .1, .25, 1);
var linear = cubicBezier(0, 0, 1, 1);
// CONCATENATED MODULE: ./Carousel.js
function Carousel_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Carousel_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Carousel_createClass(Constructor, protoProps, staticProps) { if (protoProps) Carousel_defineProperties(Constructor.prototype, protoProps); if (staticProps) Carousel_defineProperties(Constructor, staticProps); return Constructor; }




var Carousel_Carousel = /*#__PURE__*/function () {
  function Carousel(config) {
    Carousel_classCallCheck(this, Carousel);

    this.children = [];
    this.attributes = new Map();
    this.properties = new Map();
  }

  Carousel_createClass(Carousel, [{
    key: "setAttribute",
    value: function setAttribute(name, value) {
      this[name] = value;
    }
  }, {
    key: "mountTo",
    value: function mountTo(parent) {
      this.render().mountTo(parent);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var position = 0;
      var timeline = new Timeline();
      timeline.start();
      var nextPicStopHandler = null;
      var children = this.data.map(function (url, currentPosition) {
        var lastPosition = (currentPosition - 1 + _this.data.length) % _this.data.length;
        var nextPosition = (currentPosition + 1) % _this.data.length;
        var offset = 0;

        var onStart = function onStart() {
          timeline.pause();
          clearTimeout(nextPicStopHandler);
          var currentElement = children[currentPosition];
          var currentTransformValue = currentElement.style.transform.match(/translateX\(([\s\S]+)px\)$/)[1];
          var offset = currentTransformValue + 500 * currentPosition;
        };

        var onPan = function onPan(event) {
          var lastElement = children[lastPosition];
          var currentElement = children[currentPosition];
          var nextElement = children[nextPosition];
          var dx = event.clientX - event.startX;
          var currentTransformValue = -500 * currentPosition + offset + dx;
          var lastTransformValue = -500 - 500 * lastPosition + offset + dx;
          var nextTransformValue = 500 - 500 * nextPosition + offset + dx;
          lastElement.style.transform = "translateX(".concat(lastTransformValue, "px)");
          currentElement.style.transform = "translateX(".concat(currentTransformValue, "px)");
          nextElement.style.transform = "translateX(".concat(nextTransformValue, "px)");
        };

        var onPanend = function onPanend(event) {
          var direction = 0;
          var dx = event.clientX - event.startX;

          if (dx + offset > 250) {
            direction = 1;
          } else if (dx + offset < -250) {
            direction = -1;
          }

          timeline.reset();
          timeline.start();
          var lastElement = children[lastPosition];
          var currentElement = children[currentPosition];
          var nextElement = children[nextPosition];
          var lastAnimation = new Animation(lastElement.style, "transform", function (v) {
            return "translateX(".concat(v, "px)");
          }, -500 - 500 * lastPosition + offset + dx, -500 - 500 * lastPosition + direction * 500, 500, 0, ease);
          var currentAnimation = new Animation(currentElement.style, "transform", function (v) {
            return "translateX(".concat(v, "px)");
          }, -500 * currentPosition + offset + dx, -500 * currentPosition + direction * 500, 500, 0, ease);
          var nextAnimation = new Animation(nextElement.style, "transform", function (v) {
            return "translateX(".concat(v, "px)");
          }, 500 - 500 * nextPosition + offset + dx, 500 - 500 * nextPosition + direction * 500, 500, 0, ease);
          timeline.add(lastAnimation);
          timeline.add(currentAnimation);
          timeline.add(nextAnimation);
          position = (position - direction + _this.data.length) % _this.data.length;
          nextPicStopHandler = setTimeout(nextPic, 3000);
        };

        var element = createElement("img", {
          src: url,
          onStart: onStart,
          onPan: onPan,
          onPanend: onPanend,
          enableGesture: true
        });
        element.style.transform = "translateX(0px)";
        element.addEventListener("dragstart", function (event) {
          return event.preventDefault();
        });
        return element;
      });

      var nextPic = function nextPic() {
        var nextPosition = (position + 1) % _this.data.length;
        var current = children[position];
        var next = children[nextPosition];
        var currentAnimation = new Animation(current.style, "transform", function (v) {
          return "translateX(".concat(5 * v, "px)");
        }, -100 * position, -100 - 100 * position, 500, 0, ease);
        var nextAnimation = new Animation(next.style, "transform", function (v) {
          return "translateX(".concat(5 * v, "px)");
        }, 100 - 100 * nextPosition, -100 * nextPosition, 500, 0, ease);
        timeline.add(currentAnimation);
        timeline.add(nextAnimation);
        position = nextPosition;
        nextPicStopHandler = setTimeout(nextPic, 1000);
      };

      nextPicStopHandler = setTimeout(nextPic, 1000);
      return createElement("div", {
        "class": "carousel"
      }, children);
    }
  }, {
    key: "mountTo",
    value: function mountTo(parent) {
      this.render().mountTo(parent);
    }
  }]);

  return Carousel;
}();
// CONCATENATED MODULE: ./main.js


var component = createElement(Carousel_Carousel, {
  data: ["https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg", "https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg", "https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg", "https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg"]
});
component.mountTo(document.body);

/***/ })
/******/ ]);