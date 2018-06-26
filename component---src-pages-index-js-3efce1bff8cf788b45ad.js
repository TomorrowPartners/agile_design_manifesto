webpackJsonp([35783957827783],{97:function(e,t,n){"use strict";function o(e){return e}function r(e,t,n){function r(e,t){var n=E.hasOwnProperty(t)?E[t]:null;D.hasOwnProperty(t)&&l("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&l("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function a(e,n){if(n){l("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),l(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var o=e.prototype,a=o.__reactAutoBindPairs;n.hasOwnProperty(c)&&N.mixins(e,n.mixins);for(var i in n)if(n.hasOwnProperty(i)&&i!==c){var s=n[i],u=o.hasOwnProperty(i);if(r(u,i),N.hasOwnProperty(i))N[i](e,s);else{var p=E.hasOwnProperty(i),h="function"==typeof s,m=h&&!p&&!u&&n.autobind!==!1;if(m)a.push(i,s),o[i]=s;else if(u){var y=E[i];l(p&&("DEFINE_MANY_MERGED"===y||"DEFINE_MANY"===y),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",y,i),"DEFINE_MANY_MERGED"===y?o[i]=f(o[i],s):"DEFINE_MANY"===y&&(o[i]=d(o[i],s))}else o[i]=s}}}else;}function u(e,t){if(t)for(var n in t){var o=t[n];if(t.hasOwnProperty(n)){var r=n in N;l(!r,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var a=n in e;if(a){var i=v.hasOwnProperty(n)?v[n]:null;return l("DEFINE_MANY_MERGED"===i,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(e[n]=f(e[n],o))}e[n]=o}}}function p(e,t){l(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(l(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function f(e,t){return function(){var n=e.apply(this,arguments),o=t.apply(this,arguments);if(null==n)return o;if(null==o)return n;var r={};return p(r,n),p(r,o),r}}function d(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function h(e,t){var n=t.bind(e);return n}function m(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var o=t[n],r=t[n+1];e[o]=h(e,r)}}function y(e){var t=o(function(e,o,r){this.__reactAutoBindPairs.length&&m(this),this.props=e,this.context=o,this.refs=s,this.updater=r||n,this.state=null;var a=this.getInitialState?this.getInitialState():null;l("object"==typeof a&&!Array.isArray(a),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=a});t.prototype=new M,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],g.forEach(a.bind(null,t)),a(t,_),a(t,e),a(t,b),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),l(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var r in E)t.prototype[r]||(t.prototype[r]=null);return t}var g=[],E={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},v={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},N={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)a(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=i({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=i({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=f(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=i({},e.propTypes,t)},statics:function(e,t){u(e,t)},autobind:function(){}},_={componentDidMount:function(){this.__isMounted=!0}},b={componentWillUnmount:function(){this.__isMounted=!1}},D={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},M=function(){};return i(M.prototype,e.prototype,D),y}var a,i=n(4),s=n(34),l=n(1),c="mixins";a={},e.exports=r},157:function(e,t,n){!function(t,n){e.exports=n()}(this,function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n=Object.defineProperty,o=Object.getOwnPropertyNames,r=Object.getOwnPropertySymbols,a=Object.getOwnPropertyDescriptor,i=Object.getPrototypeOf,s=i&&i(Object);return function l(c,u,p){if("string"!=typeof u){if(s){var f=i(u);f&&f!==s&&l(c,f,p)}var d=o(u);r&&(d=d.concat(r(u)));for(var h=0;h<d.length;++h){var m=d[h];if(!(e[m]||t[m]||p&&p[m])){var y=a(u,m);try{n(c,m,y)}catch(e){}}}return c}return c}})},4:function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function o(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var o=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==o.join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=o()?Object.assign:function(e,t){for(var o,s,l=n(e),c=1;c<arguments.length;c++){o=Object(arguments[c]);for(var u in o)a.call(o,u)&&(l[u]=o[u]);if(r){s=r(o);for(var p=0;p<s.length;p++)i.call(o,s[p])&&(l[s[p]]=o[s[p]])}}return l}},199:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(5),a=o(r),i=n(100),s=(o(i),function(){return a.default.createElement("div",{className:"container-fluid"},a.default.createElement("div",{className:"row"},a.default.createElement("div",{className:"col-lg-7 offset-lg-2"},a.default.createElement("div",{className:"intro"},a.default.createElement("p",null,"Software drives every sphere of society, yet our processes are still leading to failures, some with serious consequences. We need to stop iterating solely for the sake of iterating, and instead iterate based on learning. From these failures, we designers, technologists, product and service leaders propose the Manifesto for Agile Design and Development, an attempt to make the agile process laser-focused on product vision and user needs."),a.default.createElement("p",null,"We are uncovering better ways of creating human-centered products and services by doing it and helping others do it. Through this work we have come to value:"),a.default.createElement("p",null,"Individuals and interactions over processes and tools Building the right product over building the product right Delivering iterations over comprehensive pre-planning Customer collaboration over contract negotiation Discovering customer needs over pre-determining a solution Responding to change over following a plan")))))});t.default=s,e.exports=t.default},200:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(5),l=o(s),c=n(100),u=(o(c),function(e){function t(n){r(this,t);var o=a(this,e.call(this,n));return o.state={isToggleOn:!1,copyState:{border:"0px solid red"}},o.handleClick=o.handleClick.bind(o),o}return i(t,e),t.prototype.handleClick=function(){console.log("eye click"),console.log(this.state.isToggleOn),console.log(this.state.isToggleOn),this.state.isToggleOn?this.setState({isToggleOn:!1,copyState:{border:"0px solid red"},activeClass:"off"}):(this.setState({isToggleOn:!0,copyState:{border:"0px solid red"},activeClass:"on"}),console.log(this.state.isToggleOn))},t.prototype.render=function(){var e=this;return console.log(),l.default.createElement("div",{onMouseEnter:function(){return e.handleClick()},onMouseLeave:function(){return e.handleClick()},className:"principle",style:{backgroundColor:this.props.post.frontmatter.color}},l.default.createElement("div",{className:"container-fluid"},l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-12 col-lg-8 offset-lg-2"},l.default.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.post.html},style:this.state.copyState,className:this.state.activeClass})))))},t}(s.Component));t.default=u,e.exports=t.default},203:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var r=n(5),a=o(r),i=n(200),s=o(i),l=n(199),c=o(l),u=function(e){var t=e.data.allMarkdownRemark.edges,n=t.map(function(e){return a.default.createElement(s.default,{color:e.node.frontmatter.color,key:e.node.id,post:e.node})});return a.default.createElement("div",null,a.default.createElement(c.default,null),a.default.createElement("div",null,n))};t.default=u;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-3efce1bff8cf788b45ad.js.map