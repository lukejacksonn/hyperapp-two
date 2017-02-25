(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.hyperapp=e.hyperapp||{})}(this,function(e){"use strict";function t(e,n,o){n.ns="http://www.w3.org/2000/svg";for(var r=0;r<o.length;r++){var a=o[r];a.data&&t(a.tag,a.data,a.children)}}var n=function(e,n){n=n||{};var o=[];o.push.apply(o,arguments),o.shift(),o.shift();var r=o[0];return o=Array.isArray(r)||void 0===r?r:o,"function"==typeof e?e(n,o||[]):("svg"===e&&t(e,n,o),{tag:e,data:n,children:[].concat.apply([],o)})},o=function(e){function t(e){"loading"!==document.readyState?e():document.addEventListener("DOMContentLoaded",e)}function n(e,t,n){l(p,s=t(e,y),n,0)}function o(e,t){var n,o={};if(r(typeof t)||Array.isArray(t))return t;for(n in e)o[n]=e[n];for(n in t)o[n]=t[n];return o}function r(e){return"string"===e||"number"===e||"boolean"===e}function a(e,t){setTimeout(function(){e(t)},0)}function i(e,t){return e.tag!==t.tag||typeof e!=typeof t||r(typeof e)&&e!==t}function f(e){var t;if(r(typeof e))t=document.createTextNode(e);else{t=e.data&&e.data.ns?document.createElementNS(e.data.ns,e.tag):document.createElement(e.tag);for(var n in e.data)"oncreate"===n?a(e.data[n],t):d(t,n,e.data[n]);for(var o=0;o<e.children.length;o++){var i=e.children[o];void 0!==i&&"boolean"!=typeof i&&null!==i&&t.appendChild(f(i))}}return t}function c(e,t,n){e.removeAttribute("className"===t?"class":t),"boolean"!=typeof n&&"true"!==n&&"false"!==n||(e[t]=!1)}function d(e,t,n,o){if("style"===t)for(var r in n)e.style[r]=n[r];else if("o"===t[0]&&"n"===t[1]){var a=t.substr(2);e.removeEventListener(a,o),e.addEventListener(a,n)}else"false"===n||n===!1?(e.removeAttribute(t),e[t]=!1):(e.setAttribute(t,n),"http://www.w3.org/2000/svg"!==e.namespaceURI&&(e[t]=n))}function u(e,t,n){for(var r in o(n,t)){var i=t[r],f=n[r],u=e[r];void 0===i?c(e,r,f):"onupdate"===r?a(i,e):(i!==f||"boolean"==typeof u&&u!==i)&&d(e,r,i,f)}}function l(e,t,n,o){if(null!==t)if(void 0===n)e.appendChild(f(t));else if(void 0===t){for(;o>0&&!e.childNodes[o];)o--;var r=e.childNodes[o];if(n&&n.data){var c=n.data.onremove;c&&a(c,r)}e.removeChild(r)}else if(i(t,n)){var r=e.childNodes[o];"boolean"==typeof t?e.removeChild(r):void 0===r?e.appendChild(f(t)):e.replaceChild(f(t),r)}else if(t.tag){var r=e.childNodes[o];u(r,t.data,n.data);for(var d=t.children.length,s=n.children.length,p=0;p<d||p<s;p++)l(r,t.children[p],n.children[p],p)}}var s,p,v=e.model,h=e.view,y={},m=e.effects||{},g=e.reducers||e.update||{},w=e.subscriptions,b=e.router||Function.prototype,A=o({onAction:Function.prototype,onUpdate:Function.prototype,onError:function(e){throw e}},e.hooks);for(var E in o(g,m))!function(e){y[e]=function(t){A.onAction(e,t);var r=m[e];if(r)return r(v,y,t,A.onError);var a=g[e],i=v;n(v=o(v,a(v,t)),h,s),A.onUpdate(i,v,t)}}(E);t(function(){p=e.root||document.body.appendChild(document.createElement("div")),"function"==typeof h&&n(v,h),b(function(e){n(v,h=e?e:h,s)},e);for(var t in w)w[t](v,y,A.onError)})},r=function(e,t){function n(t){e(o(a,t)),history.pushState({},"",t)}function o(e,t){for(var o in e){var a,i=r(o),f={};if(t.replace(new RegExp(i.re,"g"),function(){for(var t=1;t<arguments.length-2;t++)f[i.keys.shift()]=arguments[t];a=function(t,r){return r.setLocation=n,e[o](t,r,f)}}),a)return a}return e["/"]}function r(e){var t=[];return{re:"^"+e.replace(/\//g,"\\/").replace(/:([A-Za-z0-9_]+)/g,function(e,n){return t.push(n),"([A-Za-z0-9_]+)"})+"/?$",keys:t}}var a=t.view;window.addEventListener("popstate",function(){e(o(a,location.pathname))}),window.addEventListener("click",function(e){if(!(e.metaKey||e.shiftKey||e.ctrlKey||e.altKey)){for(var t=e.target;t&&"a"!==t.localName;)t=t.parentNode;if(t&&t.host===location.host&&!t.hasAttribute("data-no-routing")){var o=document.querySelector(""===t.hash?o:t.hash);o?o.scrollIntoView(!0):(e.preventDefault(),n(t.pathname))}}}),e(o(a,location.pathname))};e.h=n,e.app=o,e.router=r});


},{}],2:[function(require,module,exports){
'use strict';

var _require = require('hyperapp'),
    h = _require.h,
    app = _require.app,
    router = _require.router;

var effects = require('./effects');
var subscriptions = require('./subs');
var reducers = require('./reducers');
var model = require('./models');
var view = require('./views');
var root = document.querySelector('main');

var state = {
  router: router,
  effects: effects,
  subscriptions: subscriptions,
  reducers: reducers,
  model: model,
  view: view,
  root: root
};

console.log(state);
app(state);

},{"./effects":3,"./models":4,"./reducers":5,"./subs":6,"./views":7,"hyperapp":1}],3:[function(require,module,exports){
'use strict';

var _require = require('../helpers/index.js'),
    uniteActions = _require.uniteActions;

var counter = require('../parts/counter/effects');
var todos = require('../parts/todos/effects');

module.exports = uniteActions({
  counter: counter,
  todos: todos
});

},{"../helpers/index.js":8,"../parts/counter/effects":9,"../parts/todos/effects":14}],4:[function(require,module,exports){
'use strict';

var counter = require('../parts/counter/model');
var todos = require('../parts/todos/model');

module.exports = {
  counter: counter,
  todos: todos
};

},{"../parts/counter/model":10,"../parts/todos/model":15}],5:[function(require,module,exports){
'use strict';

var _require = require('../helpers/index.js'),
    uniteActions = _require.uniteActions;

var counter = require('../parts/counter/reducer');
var todos = require('../parts/todos/reducer');

module.exports = uniteActions({
  counter: counter,
  todos: todos
});

},{"../helpers/index.js":8,"../parts/counter/reducer":11,"../parts/todos/reducer":16}],6:[function(require,module,exports){
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var counter = require('../parts/counter/subs');
var ideas = require('../parts/todos/subs');

module.exports = [].concat(_toConsumableArray(counter), _toConsumableArray(ideas));

},{"../parts/counter/subs":12,"../parts/todos/subs":17}],7:[function(require,module,exports){
'use strict';

var _require = require('../helpers/index.js'),
    uniteViews = _require.uniteViews;

var Index = require('../view');
var Counter = require('../parts/counter/view');
var Todos = require('../parts/todos/view');

module.exports = uniteViews({
  '': Index,
  Counter: Counter,
  Todos: Todos
});

},{"../helpers/index.js":8,"../parts/counter/view":13,"../parts/todos/view":18,"../view":19}],8:[function(require,module,exports){
'use strict';

var capitalize = function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

var decapitalize = function decapitalize(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
};

var namespace = function namespace(obj, prefix) {
  return Object.keys(obj).reduce(function (acc, key) {
    acc[key + capitalize(prefix)] = obj[key];
    return acc;
  }, {});
};

var uniteActions = function uniteActions(actions) {
  return Object.keys(actions).reduce(function (acc, key) {
    var nsa = namespace(actions[key], key);
    return Object.assign({}, acc, nsa);
  }, {});
};

var uniteViews = function uniteViews(views) {
  return Object.keys(views).reduce(function (acc, key) {
    acc['/' + decapitalize(key)] = views[key];
    return acc;
  }, {});
};

module.exports = {
  uniteActions: uniteActions,
  uniteViews: uniteViews
};

},{}],9:[function(require,module,exports){
"use strict";

module.exports = {
  fetch: function fetch(m, a, d) {
    return console.log(m, a, d);
  },
  refresh: function refresh(m, a, d) {
    return console.log(m, a, d);
  }
};

},{}],10:[function(require,module,exports){
"use strict";

module.exports = {
  count: 0
};

},{}],11:[function(require,module,exports){
"use strict";

module.exports = {
  inc: function inc(m, d, p) {
    return { counter: { count: m.counter.count + 1 } };
  },
  dec: function dec(m, d, p) {
    return { counter: { count: m.counter.count - 1 } };
  }
};

},{}],12:[function(require,module,exports){
"use strict";

module.exports = [function (m, a) {
  return console.log(m, a);
}, function (m, a) {
  return console.log(m, a);
}];

},{}],13:[function(require,module,exports){
'use strict';

var _require = require('hyperapp'),
    h = _require.h;

module.exports = function (_ref) {
  var m = _ref.m,
      a = _ref.a,
      p = _ref.p;
  return h(
    'counter-',
    null,
    h(
      'button',
      { onClick: function onClick(e) {
          return a.decCounter();
        } },
      'DEC'
    ),
    h(
      'count-',
      null,
      m.count
    ),
    h(
      'button',
      { onClick: function onClick(e) {
          return a.incCounter();
        } },
      'INC'
    )
  );
};

},{"hyperapp":1}],14:[function(require,module,exports){
arguments[4][9][0].apply(exports,arguments)
},{"dup":9}],15:[function(require,module,exports){
'use strict';

module.exports = {
  list: [{ text: 'Make coffee' }, { text: 'Have a beer' }]
};

},{}],16:[function(require,module,exports){
"use strict";

module.exports = {
  add: function add(m, d, p) {
    return m;
  },
  remove: function remove(m, d, p) {
    return m;
  }
};

},{}],17:[function(require,module,exports){
arguments[4][12][0].apply(exports,arguments)
},{"dup":12}],18:[function(require,module,exports){
'use strict';

var _require = require('hyperapp'),
    h = _require.h;

module.exports = function (_ref) {
  var m = _ref.m,
      a = _ref.a,
      p = _ref.p;
  return h(
    'todos-',
    null,
    m.list.map(function (x) {
      return x.text;
    })
  );
};

},{"hyperapp":1}],19:[function(require,module,exports){
'use strict';

var _require = require('hyperapp'),
    h = _require.h;

var Counter = require('./parts/counter/view');
var Todos = require('./parts/todos/view');

module.exports = function (m, a, p) {
  return h(
    'app-',
    null,
    h(
      'button',
      { onClick: function onClick(e) {
          return alert('YOYO');
        } },
      'CLICK'
    ),
    h(Counter, { m: m.counter, a: a, p: p }),
    h(Todos, { m: m.todos, a: a, p: p })
  );
};

},{"./parts/counter/view":13,"./parts/todos/view":18,"hyperapp":1}]},{},[2]);
