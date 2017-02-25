(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.hyperapp=t.hyperapp||{})}(this,function(t){"use strict";function e(t,n,o){n.ns="http://www.w3.org/2000/svg";for(var r=0;r<o.length;r++){var a=o[r];a.data&&e(a.tag,a.data,a.children)}}var n=function(t,n){n=n||{};var o=[];o.push.apply(o,arguments),o.shift(),o.shift();var r=o[0];return o=Array.isArray(r)||void 0===r?r:o,"function"==typeof t?(n.children=o||[],t(n)):("svg"===t&&e(t,n,o),{tag:t,data:n,children:[].concat.apply([],o)})},o=function(t){function e(t){"loading"!==document.readyState?t():document.addEventListener("DOMContentLoaded",t)}function n(t,e,n){s(p,l=e(t,y),n,0)}function o(t,e){var n,o={};if(r(typeof e)||Array.isArray(e))return e;for(n in t)o[n]=t[n];for(n in e)o[n]=e[n];return o}function r(t){return"string"===t||"number"===t||"boolean"===t}function a(t,e){setTimeout(function(){t(e)},0)}function i(t,e){return t.tag!==e.tag||typeof t!=typeof e||r(typeof t)&&t!==e}function c(t){var e;if(r(typeof t))e=document.createTextNode(t);else{e=t.data&&t.data.ns?document.createElementNS(t.data.ns,t.tag):document.createElement(t.tag);for(var n in t.data)"oncreate"===n?a(t.data[n],e):d(e,n,t.data[n]);for(var o=0;o<t.children.length;o++)e.appendChild(c(t.children[o]))}return e}function f(t,e,n){t.removeAttribute("className"===e?"class":e),"boolean"!=typeof n&&"true"!==n&&"false"!==n||(t[e]=!1)}function d(t,e,n,o){if("style"===e)for(var r in n)t.style[r]=n[r];else if("on"===e.substr(0,2)){var a=e.substr(2).toLowerCase();t.removeEventListener(a,o),t.addEventListener(a,n)}else"false"===n||n===!1?(t.removeAttribute(e),t[e]=!1):(t.setAttribute(e,n),t[e]=n)}function u(t,e,n){for(var r in o(n,e)){var i=e[r],c=n[r];void 0===i?f(t,r,c):i!==c&&("onupdate"===r?a(i,t):d(t,r,i,c))}}function s(t,e,n,o){if(void 0===n)t.appendChild(c(e));else if(void 0===e){for(;o>0&&!t.childNodes[o];)o--;var r=t.childNodes[o];if(n&&n.data){var f=n.data.onremove;f&&a(f,r)}t.removeChild(r)}else if(i(e,n))t.replaceChild(c(e),t.childNodes[o]);else if(e.tag){var r=t.childNodes[o];u(r,e.data,n.data);for(var d=e.children.length,l=n.children.length,p=0;p<d||p<l;p++)s(r,e.children[p],n.children[p],p)}}var l,p,v=t.model,h=t.view,y={},m=t.effects||{},g=t.update||{},w=t.subscriptions,b=t.router||Function.prototype,A=o({onAction:Function.prototype,onUpdate:Function.prototype,onError:function(t){throw t}},t.hooks);for(var E in o(g,m))!function(t){y[t]=function(e){A.onAction(t,e);var r=m[t];if(r)return r(v,y,e,A.onError);var a=g[t],i=v;n(v=o(v,a(v,e)),h,l),A.onUpdate(i,v,e)}}(E);e(function(){p=t.root||document.body.appendChild(document.createElement("div")),"function"==typeof h&&n(v,h),b(function(t){n(v,h=t?t:h,l)},t);for(var e in w)w[e](v,y,A.onError)})},r=function(t,e){function n(e){t(o(a,e)),history.pushState({},"",e)}function o(t,e){for(var o in t){var a,i=r(o),c={};if(e.replace(new RegExp(i.re,"g"),function(){for(var e=1;e<arguments.length-2;e++)c[i.keys.shift()]=arguments[e];a=function(e,r){return r.setLocation=n,t[o](e,r,c)}}),a)return a}return t["/"]}function r(t){var e=[];return{re:"^"+t.replace(/\//g,"\\/").replace(/:([A-Za-z0-9_]+)/g,function(t,n){return e.push(n),"([A-Za-z0-9_]+)"})+"/?$",keys:e}}var a=e.view;window.addEventListener("popstate",function(){t(o(a,location.pathname))}),window.addEventListener("click",function(t){if(!(t.metaKey||t.shiftKey||t.ctrlKey||t.altKey)){for(var e=t.target;e&&"a"!==e.localName;)e=e.parentNode;if(e&&e.host===location.host&&!e.hasAttribute("data-no-routing")){var o=document.querySelector(""===e.hash?o:e.hash);o?o.scrollIntoView(!0):(t.preventDefault(),n(e.pathname))}}}),t(o(a,location.pathname))};t.h=n,t.app=o,t.router=r});


},{}],2:[function(require,module,exports){
'use strict';

var _require = require('hyperapp'),
    h = _require.h,
    app = _require.app,
    router = _require.router;

var effects = require('./effects');
var subscriptions = require('./subscriptions');
var update = require('./reducers');
var model = require('./models');
var view = require('./pages');
var root = document.querySelector('main');

var state = {
  router: router,
  effects: effects,
  subscriptions: subscriptions,
  update: update,
  model: model,
  view: view,
  root: root
};

console.log(state);
app(state);

},{"./effects":6,"./models":10,"./pages":13,"./reducers":16,"./subscriptions":19,"hyperapp":1}],3:[function(require,module,exports){
'use strict';

var _require = require('hyperapp'),
    h = _require.h;

module.exports = function (_ref) {
  var m = _ref.m,
      a = _ref.a;
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

},{"hyperapp":1}],4:[function(require,module,exports){
'use strict';

var _require = require('hyperapp'),
    h = _require.h;

module.exports = function (_ref) {
  var m = _ref.m;
  return h(
    'todos-',
    null,
    m.list.map(function (x) {
      return x.text;
    })
  );
};

},{"hyperapp":1}],5:[function(require,module,exports){
"use strict";

module.exports = {
  fetch: function fetch(m, a, d) {
    return console.log(m, a, d);
  },
  refresh: function refresh(m, a, d) {
    return console.log(m, a, d);
  }
};

},{}],6:[function(require,module,exports){
'use strict';

var _require = require('../helpers'),
    uniteActions = _require.uniteActions;

var counter = require('./counter');
var todos = require('./todos');

module.exports = uniteActions({
  counter: counter,
  todos: todos
});

},{"../helpers":8,"./counter":5,"./todos":7}],7:[function(require,module,exports){
"use strict";

module.exports = {
  fetch: function fetch(m, a, d) {
    return console.log(m, a, d);
  },
  refresh: function refresh(m, a, d) {
    return console.log(m, a, d);
  }
};

},{}],8:[function(require,module,exports){
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
  count: 0
};

},{}],10:[function(require,module,exports){
'use strict';

var counter = require('./counter');
var todos = require('./todos');

module.exports = {
  counter: counter,
  todos: todos
};

},{"./counter":9,"./todos":11}],11:[function(require,module,exports){
'use strict';

module.exports = {
  list: [{ text: 'Make coffee' }, { text: 'Have a beer' }]
};

},{}],12:[function(require,module,exports){
'use strict';

var _require = require('hyperapp'),
    h = _require.h;

var Counter = require('../components/counter');

module.exports = function (m, a, p) {
  return h(
    'view-',
    null,
    h(Counter, { m: m.counter, a: a, p: p })
  );
};

},{"../components/counter":3,"hyperapp":1}],13:[function(require,module,exports){
'use strict';

var _require = require('../helpers'),
    uniteViews = _require.uniteViews;

var Index = require('../view');
var Counter = require('./counter');
var Todos = require('./todos');

module.exports = uniteViews({
  '': Index,
  Counter: Counter,
  Todos: Todos
});

},{"../helpers":8,"../view":21,"./counter":12,"./todos":14}],14:[function(require,module,exports){
'use strict';

var _require = require('hyperapp'),
    h = _require.h;

var Todos = require('../components/todos');

module.exports = function (m, a, p) {
  return h(
    'view-',
    null,
    h(Todos, { m: m.todos, a: a, p: p })
  );
};

},{"../components/todos":4,"hyperapp":1}],15:[function(require,module,exports){
"use strict";

module.exports = {
  inc: function inc(m, d, p) {
    return { counter: { count: m.counter.count + 1 } };
  },
  dec: function dec(m, d, p) {
    return { counter: { count: m.counter.count - 1 } };
  }
};

},{}],16:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"../helpers":8,"./counter":15,"./todos":17,"dup":6}],17:[function(require,module,exports){
"use strict";

module.exports = {
  add: function add(m, d, p) {
    return m;
  },
  remove: function remove(m, d, p) {
    return m;
  }
};

},{}],18:[function(require,module,exports){
"use strict";

module.exports = [function (m, a) {
  return console.log(m, a);
}, function (m, a) {
  return console.log(m, a);
}];

},{}],19:[function(require,module,exports){
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var counter = require('./counter');
var todos = require('./todos');

module.exports = [].concat(_toConsumableArray(counter), _toConsumableArray(todos));

},{"./counter":18,"./todos":20}],20:[function(require,module,exports){
"use strict";

module.exports = [function (m, a) {
  return console.log(m, a);
}, function (m, a) {
  return console.log(m, a);
}];

},{}],21:[function(require,module,exports){
'use strict';

var _require = require('hyperapp'),
    h = _require.h;

var Counter = require('./components/counter');
var Todos = require('./components/todos');

module.exports = function (m, a) {
  return h(
    'view-',
    null,
    h(Counter, { m: m.counter, a: a }),
    h(Todos, { m: m.todos })
  );
};

},{"./components/counter":3,"./components/todos":4,"hyperapp":1}]},{},[2]);
