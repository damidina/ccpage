/*!
 * jQuery JavaScript Library v1.11.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-17T15:27Z
 */
/*!
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
 *
 * @version 1.0.3
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */
function FastClick(e,t){"use strict";var n;if(t=t||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=t.touchBoundary||10,this.layer=e,this.tapDelay=t.tapDelay||200,!FastClick.notNeeded(e)){for(var o=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],i=this,r=0,a=o.length;r<a;r++)i[o[r]]=function(e,t){return function(){return e.apply(t,arguments)}}(i[o[r]],i);deviceIsAndroid&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,n,o){var i=Node.prototype.removeEventListener;"click"===t?i.call(e,t,n.hijacked||n,o):i.call(e,t,n,o)},e.addEventListener=function(t,n,o){var i=Node.prototype.addEventListener;"click"===t?i.call(e,t,n.hijacked||(n.hijacked=function(e){e.propagationStopped||n(e)}),o):i.call(e,t,n,o)}),"function"==typeof e.onclick&&(n=e.onclick,e.addEventListener("click",function(e){n(e)},!1),e.onclick=null)}}!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t=e.length,n=oe.type(e);return"function"!==n&&!oe.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e))}function o(e,t,n){if(oe.isFunction(t))return oe.grep(e,function(e,o){return!!t.call(e,o,e)!==n});if(t.nodeType)return oe.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(fe.test(t))return oe.filter(t,e,n);t=oe.filter(t,e)}return oe.grep(e,function(e){return oe.inArray(e,t)>=0!==n})}function i(e,t){do{e=e[t]}while(e&&1!==e.nodeType);return e}function r(e){var t=ve[e]={};return oe.each(e.match(ye)||[],function(e,n){t[n]=!0}),t}function a(){pe.addEventListener?(pe.removeEventListener("DOMContentLoaded",s,!1),e.removeEventListener("load",s,!1)):(pe.detachEvent("onreadystatechange",s),e.detachEvent("onload",s))}function s(){(pe.addEventListener||"load"===event.type||"complete"===pe.readyState)&&(a(),oe.ready())}function l(e,t,n){if(void 0===n&&1===e.nodeType){var o="data-"+t.replace(Ce,"-$1").toLowerCase();if("string"==typeof(n=e.getAttribute(o))){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:_e.test(n)?oe.parseJSON(n):n)}catch(e){}oe.data(e,t,n)}else n=void 0}return n}function u(e){var t;for(t in e)if(("data"!==t||!oe.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function c(e,t,n,o){if(oe.acceptData(e)){var i,r,a=oe.expando,s=e.nodeType,l=s?oe.cache:e,u=s?e[a]:e[a]&&a;if(u&&l[u]&&(o||l[u].data)||void 0!==n||"string"!=typeof t)return u||(u=s?e[a]=G.pop()||oe.guid++:a),l[u]||(l[u]=s?{}:{toJSON:oe.noop}),"object"!=typeof t&&"function"!=typeof t||(o?l[u]=oe.extend(l[u],t):l[u].data=oe.extend(l[u].data,t)),r=l[u],o||(r.data||(r.data={}),r=r.data),void 0!==n&&(r[oe.camelCase(t)]=n),"string"==typeof t?null==(i=r[t])&&(i=r[oe.camelCase(t)]):i=r,i}}function f(e,t,n){if(oe.acceptData(e)){var o,i,r=e.nodeType,a=r?oe.cache:e,s=r?e[oe.expando]:oe.expando;if(a[s]){if(t&&(o=n?a[s]:a[s].data)){oe.isArray(t)?t=t.concat(oe.map(t,oe.camelCase)):t in o?t=[t]:(t=oe.camelCase(t),t=t in o?[t]:t.split(" ")),i=t.length;for(;i--;)delete o[t[i]];if(n?!u(o):!oe.isEmptyObject(o))return}(n||(delete a[s].data,u(a[s])))&&(r?oe.cleanData([e],!0):ne.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}function d(){return!0}function p(){return!1}function h(){try{return pe.activeElement}catch(e){}}function m(e){var t=Me.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}function g(e,t){var n,o,i=0,r=typeof e.getElementsByTagName!==xe?e.getElementsByTagName(t||"*"):typeof e.querySelectorAll!==xe?e.querySelectorAll(t||"*"):void 0;if(!r)for(r=[],n=e.childNodes||e;null!=(o=n[i]);i++)!t||oe.nodeName(o,t)?r.push(o):oe.merge(r,g(o,t));return void 0===t||t&&oe.nodeName(e,t)?oe.merge([e],r):r}function y(e){Ee.test(e.type)&&(e.defaultChecked=e.checked)}function v(e,t){return oe.nodeName(e,"table")&&oe.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function w(e){return e.type=(null!==oe.find.attr(e,"type"))+"/"+e.type,e}function b(e){var t=ze.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function x(e,t){for(var n,o=0;null!=(n=e[o]);o++)oe._data(n,"globalEval",!t||oe._data(t[o],"globalEval"))}function _(e,t){if(1===t.nodeType&&oe.hasData(e)){var n,o,i,r=oe._data(e),a=oe._data(t,r),s=r.events;if(s){delete a.handle,a.events={};for(n in s)for(o=0,i=s[n].length;o<i;o++)oe.event.add(t,n,s[n][o])}a.data&&(a.data=oe.extend({},a.data))}}function C(e,t){var n,o,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!ne.noCloneEvent&&t[oe.expando]){i=oe._data(t);for(o in i.events)oe.removeEvent(t,o,i.handle);t.removeAttribute(oe.expando)}"script"===n&&t.text!==e.text?(w(t).text=e.text,b(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),ne.html5Clone&&e.innerHTML&&!oe.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ee.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}}function T(t,n){var o,i=oe(n.createElement(t)).appendTo(n.body),r=e.getDefaultComputedStyle&&(o=e.getDefaultComputedStyle(i[0]))?o.display:oe.css(i[0],"display");return i.detach(),r}function S(e){var t=pe,n=Qe[e];return n||(n=T(e,t),"none"!==n&&n||(Ke=(Ke||oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=(Ke[0].contentWindow||Ke[0].contentDocument).document,t.write(),t.close(),n=T(e,t),Ke.detach()),Qe[e]=n),n}function k(e,t){return{get:function(){var n=e();if(null!=n)return n?void delete this.get:(this.get=t).apply(this,arguments)}}}function N(e,t){if(t in e)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),o=t,i=ct.length;i--;)if((t=ct[i]+n)in e)return t;return o}function E(e,t){for(var n,o,i,r=[],a=0,s=e.length;a<s;a++)o=e[a],o.style&&(r[a]=oe._data(o,"olddisplay"),n=o.style.display,t?(r[a]||"none"!==n||(o.style.display=""),""===o.style.display&&ke(o)&&(r[a]=oe._data(o,"olddisplay",S(o.nodeName)))):(i=ke(o),(n&&"none"!==n||!i)&&oe._data(o,"olddisplay",i?n:oe.css(o,"display"))));for(a=0;a<s;a++)o=e[a],o.style&&(t&&"none"!==o.style.display&&""!==o.style.display||(o.style.display=t?r[a]||"":"none"));return e}function P(e,t,n){var o=at.exec(t);return o?Math.max(0,o[1]-(n||0))+(o[2]||"px"):t}function A(e,t,n,o,i){for(var r=n===(o?"border":"content")?4:"width"===t?1:0,a=0;r<4;r+=2)"margin"===n&&(a+=oe.css(e,n+Se[r],!0,i)),o?("content"===n&&(a-=oe.css(e,"padding"+Se[r],!0,i)),"margin"!==n&&(a-=oe.css(e,"border"+Se[r]+"Width",!0,i))):(a+=oe.css(e,"padding"+Se[r],!0,i),"padding"!==n&&(a+=oe.css(e,"border"+Se[r]+"Width",!0,i)));return a}function D(e,t,n){var o=!0,i="width"===t?e.offsetWidth:e.offsetHeight,r=Ze(e),a=ne.boxSizing&&"border-box"===oe.css(e,"boxSizing",!1,r);if(i<=0||null==i){if(i=Je(e,t,r),(i<0||null==i)&&(i=e.style[t]),tt.test(i))return i;o=a&&(ne.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+A(e,t,n||(a?"border":"content"),o,r)+"px"}function I(e,t,n,o,i){return new I.prototype.init(e,t,n,o,i)}function L(){return setTimeout(function(){ft=void 0}),ft=oe.now()}function M(e,t){var n,o={height:e},i=0;for(t=t?1:0;i<4;i+=2-t)n=Se[i],o["margin"+n]=o["padding"+n]=e;return t&&(o.opacity=o.width=e),o}function j(e,t,n){for(var o,i=(yt[t]||[]).concat(yt["*"]),r=0,a=i.length;r<a;r++)if(o=i[r].call(n,t,e))return o}function H(e,t,n){var o,i,r,a,s,l,u,c=this,f={},d=e.style,p=e.nodeType&&ke(e),h=oe._data(e,"fxshow");n.queue||(s=oe._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,c.always(function(){c.always(function(){s.unqueued--,oe.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],u=oe.css(e,"display"),"inline"===("none"===u?oe._data(e,"olddisplay")||S(e.nodeName):u)&&"none"===oe.css(e,"float")&&(ne.inlineBlockNeedsLayout&&"inline"!==S(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",ne.shrinkWrapBlocks()||c.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(o in t)if(i=t[o],pt.exec(i)){if(delete t[o],r=r||"toggle"===i,i===(p?"hide":"show")){if("show"!==i||!h||void 0===h[o])continue;p=!0}f[o]=h&&h[o]||oe.style(e,o)}else u=void 0;if(oe.isEmptyObject(f))"inline"===("none"===u?S(e.nodeName):u)&&(d.display=u);else{h?"hidden"in h&&(p=h.hidden):h=oe._data(e,"fxshow",{}),r&&(h.hidden=!p),p?oe(e).show():c.done(function(){oe(e).hide()}),c.done(function(){var t;oe._removeData(e,"fxshow");for(t in f)oe.style(e,t,f[t])});for(o in f)a=j(p?h[o]:0,o,c),o in h||(h[o]=a.start,p&&(a.end=a.start,a.start="width"===o||"height"===o?1:0))}}function W(e,t){var n,o,i,r,a;for(n in e)if(o=oe.camelCase(n),i=t[o],r=e[n],oe.isArray(r)&&(i=r[1],r=e[n]=r[0]),n!==o&&(e[o]=r,delete e[n]),(a=oe.cssHooks[o])&&"expand"in a){r=a.expand(r),delete e[o];for(n in r)n in e||(e[n]=r[n],t[n]=i)}else t[o]=i}function F(e,t,n){var o,i,r=0,a=gt.length,s=oe.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;for(var t=ft||L(),n=Math.max(0,u.startTime+u.duration-t),o=n/u.duration||0,r=1-o,a=0,l=u.tweens.length;a<l;a++)u.tweens[a].run(r);return s.notifyWith(e,[u,r,n]),r<1&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:oe.extend({},t),opts:oe.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:ft||L(),duration:n.duration,tweens:[],createTween:function(t,n){var o=oe.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(o),o},stop:function(t){var n=0,o=t?u.tweens.length:0;if(i)return this;for(i=!0;n<o;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(W(c,u.opts.specialEasing);r<a;r++)if(o=gt[r].call(u,e,c,u.opts))return o;return oe.map(c,j,u),oe.isFunction(u.opts.start)&&u.opts.start.call(e,u),oe.fx.timer(oe.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function $(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var o,i=0,r=t.toLowerCase().match(ye)||[];if(oe.isFunction(n))for(;o=r[i++];)"+"===o.charAt(0)?(o=o.slice(1)||"*",(e[o]=e[o]||[]).unshift(n)):(e[o]=e[o]||[]).push(n)}}function R(e,t,n,o){function i(s){var l;return r[s]=!0,oe.each(e[s]||[],function(e,s){var u=s(t,n,o);return"string"!=typeof u||a||r[u]?a?!(l=u):void 0:(t.dataTypes.unshift(u),i(u),!1)}),l}var r={},a=e===Ot;return i(t.dataTypes[0])||!r["*"]&&i("*")}function O(e,t){var n,o,i=oe.ajaxSettings.flatOptions||{};for(o in t)void 0!==t[o]&&((i[o]?e:n||(n={}))[o]=t[o]);return n&&oe.extend(!0,e,n),e}function B(e,t,n){for(var o,i,r,a,s=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(a in s)if(s[a]&&s[a].test(i)){l.unshift(a);break}if(l[0]in n)r=l[0];else{for(a in n){if(!l[0]||e.converters[a+" "+l[0]]){r=a;break}o||(o=a)}r=r||o}if(r)return r!==l[0]&&l.unshift(r),n[r]}function q(e,t,n,o){var i,r,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];for(r=c.shift();r;)if(e.responseFields[r]&&(n[e.responseFields[r]]=t),!l&&o&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=r,r=c.shift())if("*"===r)r=l;else if("*"!==l&&l!==r){if(!(a=u[l+" "+r]||u["* "+r]))for(i in u)if(s=i.split(" "),s[1]===r&&(a=u[l+" "+s[0]]||u["* "+s[0]])){!0===a?a=u[i]:!0!==u[i]&&(r=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+l+" to "+r}}}return{state:"success",data:t}}function V(e,t,n,o){var i;if(oe.isArray(t))oe.each(t,function(t,i){n||Vt.test(e)?o(e,i):V(e+"["+("object"==typeof i?t:"")+"]",i,n,o)});else if(n||"object"!==oe.type(t))o(e,t);else for(i in t)V(e+"["+i+"]",t[i],n,o)}function z(){try{return new e.XMLHttpRequest}catch(e){}}function X(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}function U(e){return oe.isWindow(e)?e:9===e.nodeType&&(e.defaultView||e.parentWindow)}var G=[],Y=G.slice,K=G.concat,Q=G.push,Z=G.indexOf,J={},ee=J.toString,te=J.hasOwnProperty,ne={},oe=function(e,t){return new oe.fn.init(e,t)},ie=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,re=/^-ms-/,ae=/-([\da-z])/gi,se=function(e,t){return t.toUpperCase()};oe.fn=oe.prototype={jquery:"1.11.2",constructor:oe,selector:"",length:0,toArray:function(){return Y.call(this)},get:function(e){return null!=e?e<0?this[e+this.length]:this[e]:Y.call(this)},pushStack:function(e){var t=oe.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return oe.each(this,e,t)},map:function(e){return this.pushStack(oe.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(Y.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:Q,sort:G.sort,splice:G.splice},oe.extend=oe.fn.extend=function(){var e,t,n,o,i,r,a=arguments[0]||{},s=1,l=arguments.length,u=!1;for("boolean"==typeof a&&(u=a,a=arguments[s]||{},s++),"object"==typeof a||oe.isFunction(a)||(a={}),s===l&&(a=this,s--);s<l;s++)if(null!=(i=arguments[s]))for(o in i)e=a[o],n=i[o],a!==n&&(u&&n&&(oe.isPlainObject(n)||(t=oe.isArray(n)))?(t?(t=!1,r=e&&oe.isArray(e)?e:[]):r=e&&oe.isPlainObject(e)?e:{},a[o]=oe.extend(u,r,n)):void 0!==n&&(a[o]=n));return a},oe.extend({expando:"jQuery"+("1.11.2"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===oe.type(e)},isArray:Array.isArray||function(e){return"array"===oe.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!oe.isArray(e)&&e-parseFloat(e)+1>=0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},isPlainObject:function(e){var t;if(!e||"object"!==oe.type(e)||e.nodeType||oe.isWindow(e))return!1;try{if(e.constructor&&!te.call(e,"constructor")&&!te.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}if(ne.ownLast)for(t in e)return te.call(e,t);for(t in e);return void 0===t||te.call(e,t)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?J[ee.call(e)]||"object":typeof e},globalEval:function(t){t&&oe.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(re,"ms-").replace(ae,se)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,o){var i=0,r=e.length,a=n(e);if(o){if(a)for(;i<r&&!1!==t.apply(e[i],o);i++);else for(i in e)if(!1===t.apply(e[i],o))break}else if(a)for(;i<r&&!1!==t.call(e[i],i,e[i]);i++);else for(i in e)if(!1===t.call(e[i],i,e[i]))break;return e},trim:function(e){return null==e?"":(e+"").replace(ie,"")},makeArray:function(e,t){var o=t||[];return null!=e&&(n(Object(e))?oe.merge(o,"string"==typeof e?[e]:e):Q.call(o,e)),o},inArray:function(e,t,n){var o;if(t){if(Z)return Z.call(t,e,n);for(o=t.length,n=n?n<0?Math.max(0,o+n):n:0;n<o;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,t){for(var n=+t.length,o=0,i=e.length;o<n;)e[i++]=t[o++];if(n!==n)for(;void 0!==t[o];)e[i++]=t[o++];return e.length=i,e},grep:function(e,t,n){for(var o=[],i=0,r=e.length,a=!n;i<r;i++)!t(e[i],i)!==a&&o.push(e[i]);return o},map:function(e,t,o){var i,r=0,a=e.length,s=n(e),l=[];if(s)for(;r<a;r++)null!=(i=t(e[r],r,o))&&l.push(i);else for(r in e)null!=(i=t(e[r],r,o))&&l.push(i);return K.apply([],l)},guid:1,proxy:function(e,t){var n,o,i;if("string"==typeof t&&(i=e[t],t=e,e=i),oe.isFunction(e))return n=Y.call(arguments,2),o=function(){return e.apply(t||this,n.concat(Y.call(arguments)))},o.guid=e.guid=e.guid||oe.guid++,o},now:function(){return+new Date},support:ne}),oe.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){J["[object "+t+"]"]=t.toLowerCase()});var le=/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
function(e){function t(e,t,n,o){var i,r,a,s,u,f,d,p,h,m;if((t?t.ownerDocument||t:F)!==A&&P(t),t=t||A,n=n||[],s=t.nodeType,"string"!=typeof e||!e||1!==s&&9!==s&&11!==s)return n;if(!o&&I){if(11!==s&&(i=ge.exec(e)))if(a=i[1]){if(9===s){if(!(r=t.getElementById(a))||!r.parentNode)return n;if(r.id===a)return n.push(r),n}else if(t.ownerDocument&&(r=t.ownerDocument.getElementById(a))&&H(t,r)&&r.id===a)return n.push(r),n}else{if(i[2])return K.apply(n,t.getElementsByTagName(e)),n;if((a=i[3])&&w.getElementsByClassName)return K.apply(n,t.getElementsByClassName(a)),n}if(w.qsa&&(!L||!L.test(e))){if(p=d=W,h=t,m=1!==s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(f=C(e),(d=t.getAttribute("id"))?p=d.replace(ve,"\\$&"):t.setAttribute("id",p),p="[id='"+p+"'] ",u=f.length;u--;)f[u]=p+c(f[u]);h=ye.test(e)&&l(t.parentNode)||t,m=f.join(",")}if(m)try{return K.apply(n,h.querySelectorAll(m)),n}catch(e){}finally{d||t.removeAttribute("id")}}}return S(e.replace(ae,"$1"),t,n,o)}function n(){function e(n,o){return t.push(n+" ")>b.cacheLength&&delete e[t.shift()],e[n+" "]=o}var t=[];return e}function o(e){return e[W]=!0,e}function i(e){var t=A.createElement("div");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function r(e,t){for(var n=e.split("|"),o=e.length;o--;)b.attrHandle[n[o]]=t}function a(e,t){var n=t&&e,o=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||z)-(~e.sourceIndex||z);if(o)return o;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function s(e){return o(function(t){return t=+t,o(function(n,o){for(var i,r=e([],n.length,t),a=r.length;a--;)n[i=r[a]]&&(n[i]=!(o[i]=n[i]))})})}function l(e){return e&&void 0!==e.getElementsByTagName&&e}function u(){}function c(e){for(var t=0,n=e.length,o="";t<n;t++)o+=e[t].value;return o}function f(e,t,n){var o=t.dir,i=n&&"parentNode"===o,r=R++;return t.first?function(t,n,r){for(;t=t[o];)if(1===t.nodeType||i)return e(t,n,r)}:function(t,n,a){var s,l,u=[$,r];if(a){for(;t=t[o];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[o];)if(1===t.nodeType||i){if(l=t[W]||(t[W]={}),(s=l[o])&&s[0]===$&&s[1]===r)return u[2]=s[2];if(l[o]=u,u[2]=e(t,n,a))return!0}}}function d(e){return e.length>1?function(t,n,o){for(var i=e.length;i--;)if(!e[i](t,n,o))return!1;return!0}:e[0]}function p(e,n,o){for(var i=0,r=n.length;i<r;i++)t(e,n[i],o);return o}function h(e,t,n,o,i){for(var r,a=[],s=0,l=e.length,u=null!=t;s<l;s++)(r=e[s])&&(n&&!n(r,o,i)||(a.push(r),u&&t.push(s)));return a}function m(e,t,n,i,r,a){return i&&!i[W]&&(i=m(i)),r&&!r[W]&&(r=m(r,a)),o(function(o,a,s,l){var u,c,f,d=[],m=[],g=a.length,y=o||p(t||"*",s.nodeType?[s]:s,[]),v=!e||!o&&t?y:h(y,d,e,s,l),w=n?r||(o?e:g||i)?[]:a:v;if(n&&n(v,w,s,l),i)for(u=h(w,m),i(u,[],s,l),c=u.length;c--;)(f=u[c])&&(w[m[c]]=!(v[m[c]]=f));if(o){if(r||e){if(r){for(u=[],c=w.length;c--;)(f=w[c])&&u.push(v[c]=f);r(null,w=[],u,l)}for(c=w.length;c--;)(f=w[c])&&(u=r?Z(o,f):d[c])>-1&&(o[u]=!(a[u]=f))}}else w=h(w===a?w.splice(g,w.length):w),r?r(null,a,w,l):K.apply(a,w)})}function g(e){for(var t,n,o,i=e.length,r=b.relative[e[0].type],a=r||b.relative[" "],s=r?1:0,l=f(function(e){return e===t},a,!0),u=f(function(e){return Z(t,e)>-1},a,!0),p=[function(e,n,o){var i=!r&&(o||n!==k)||((t=n).nodeType?l(e,n,o):u(e,n,o));return t=null,i}];s<i;s++)if(n=b.relative[e[s].type])p=[f(d(p),n)];else{if(n=b.filter[e[s].type].apply(null,e[s].matches),n[W]){for(o=++s;o<i&&!b.relative[e[o].type];o++);return m(s>1&&d(p),s>1&&c(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ae,"$1"),n,s<o&&g(e.slice(s,o)),o<i&&g(e=e.slice(o)),o<i&&c(e))}p.push(n)}return d(p)}function y(e,n){var i=n.length>0,r=e.length>0,a=function(o,a,s,l,u){var c,f,d,p=0,m="0",g=o&&[],y=[],v=k,w=o||r&&b.find.TAG("*",u),x=$+=null==v?1:Math.random()||.1,_=w.length;for(u&&(k=a!==A&&a);m!==_&&null!=(c=w[m]);m++){if(r&&c){for(f=0;d=e[f++];)if(d(c,a,s)){l.push(c);break}u&&($=x)}i&&((c=!d&&c)&&p--,o&&g.push(c))}if(p+=m,i&&m!==p){for(f=0;d=n[f++];)d(g,y,a,s);if(o){if(p>0)for(;m--;)g[m]||y[m]||(y[m]=G.call(l));y=h(y)}K.apply(l,y),u&&!o&&y.length>0&&p+n.length>1&&t.uniqueSort(l)}return u&&($=x,k=v),g};return i?o(a):a}var v,w,b,x,_,C,T,S,k,N,E,P,A,D,I,L,M,j,H,W="sizzle"+1*new Date,F=e.document,$=0,R=0,O=n(),B=n(),q=n(),V=function(e,t){return e===t&&(E=!0),0},z=1<<31,X={}.hasOwnProperty,U=[],G=U.pop,Y=U.push,K=U.push,Q=U.slice,Z=function(e,t){for(var n=0,o=e.length;n<o;n++)if(e[n]===t)return n;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ee="[\\x20\\t\\r\\n\\f]",te="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ne=te.replace("w","w#"),oe="\\["+ee+"*("+te+")(?:"+ee+"*([*^$|!~]?=)"+ee+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ne+"))|)"+ee+"*\\]",ie=":("+te+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+oe+")*)|.*)\\)|)",re=new RegExp(ee+"+","g"),ae=new RegExp("^"+ee+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ee+"+$","g"),se=new RegExp("^"+ee+"*,"+ee+"*"),le=new RegExp("^"+ee+"*([>+~]|"+ee+")"+ee+"*"),ue=new RegExp("="+ee+"*([^\\]'\"]*?)"+ee+"*\\]","g"),ce=new RegExp(ie),fe=new RegExp("^"+ne+"$"),de={ID:new RegExp("^#("+te+")"),CLASS:new RegExp("^\\.("+te+")"),TAG:new RegExp("^("+te.replace("w","w*")+")"),ATTR:new RegExp("^"+oe),PSEUDO:new RegExp("^"+ie),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ee+"*(even|odd|(([+-]|)(\\d*)n|)"+ee+"*(?:([+-]|)"+ee+"*(\\d+)|))"+ee+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+ee+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ee+"*((?:-\\d)?\\d*)"+ee+"*\\)|)(?=[^-]|$)","i")},pe=/^(?:input|select|textarea|button)$/i,he=/^h\d$/i,me=/^[^{]+\{\s*\[native \w/,ge=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ye=/[+~]/,ve=/'|\\/g,we=new RegExp("\\\\([\\da-f]{1,6}"+ee+"?|("+ee+")|.)","ig"),be=function(e,t,n){var o="0x"+t-65536;return o!==o||n?t:o<0?String.fromCharCode(o+65536):String.fromCharCode(o>>10|55296,1023&o|56320)},xe=function(){P()};try{K.apply(U=Q.call(F.childNodes),F.childNodes),U[F.childNodes.length].nodeType}catch(e){K={apply:U.length?function(e,t){Y.apply(e,Q.call(t))}:function(e,t){for(var n=e.length,o=0;e[n++]=t[o++];);e.length=n-1}}}w=t.support={},_=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},P=t.setDocument=function(e){var t,n,o=e?e.ownerDocument||e:F;return o!==A&&9===o.nodeType&&o.documentElement?(A=o,D=o.documentElement,n=o.defaultView,n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",xe,!1):n.attachEvent&&n.attachEvent("onunload",xe)),I=!_(o),w.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),w.getElementsByTagName=i(function(e){return e.appendChild(o.createComment("")),!e.getElementsByTagName("*").length}),w.getElementsByClassName=me.test(o.getElementsByClassName),w.getById=i(function(e){return D.appendChild(e).id=W,!o.getElementsByName||!o.getElementsByName(W).length}),w.getById?(b.find.ID=function(e,t){if(void 0!==t.getElementById&&I){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},b.filter.ID=function(e){var t=e.replace(we,be);return function(e){return e.getAttribute("id")===t}}):(delete b.find.ID,b.filter.ID=function(e){var t=e.replace(we,be);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),b.find.TAG=w.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):w.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,o=[],i=0,r=t.getElementsByTagName(e);if("*"===e){for(;n=r[i++];)1===n.nodeType&&o.push(n);return o}return r},b.find.CLASS=w.getElementsByClassName&&function(e,t){if(I)return t.getElementsByClassName(e)},M=[],L=[],(w.qsa=me.test(o.querySelectorAll))&&(i(function(e){D.appendChild(e).innerHTML="<a id='"+W+"'></a><select id='"+W+"-\f]' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&L.push("[*^$]="+ee+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||L.push("\\["+ee+"*(?:value|"+J+")"),e.querySelectorAll("[id~="+W+"-]").length||L.push("~="),e.querySelectorAll(":checked").length||L.push(":checked"),e.querySelectorAll("a#"+W+"+*").length||L.push(".#.+[+~]")}),i(function(e){var t=o.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&L.push("name"+ee+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||L.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),L.push(",.*:")})),(w.matchesSelector=me.test(j=D.matches||D.webkitMatchesSelector||D.mozMatchesSelector||D.oMatchesSelector||D.msMatchesSelector))&&i(function(e){w.disconnectedMatch=j.call(e,"div"),j.call(e,"[s!='']:x"),M.push("!=",ie)}),L=L.length&&new RegExp(L.join("|")),M=M.length&&new RegExp(M.join("|")),t=me.test(D.compareDocumentPosition),H=t||me.test(D.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,o=t&&t.parentNode;return e===o||!(!o||1!==o.nodeType||!(n.contains?n.contains(o):e.compareDocumentPosition&&16&e.compareDocumentPosition(o)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},V=t?function(e,t){if(e===t)return E=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!w.sortDetached&&t.compareDocumentPosition(e)===n?e===o||e.ownerDocument===F&&H(F,e)?-1:t===o||t.ownerDocument===F&&H(F,t)?1:N?Z(N,e)-Z(N,t):0:4&n?-1:1)}:function(e,t){if(e===t)return E=!0,0;var n,i=0,r=e.parentNode,s=t.parentNode,l=[e],u=[t];if(!r||!s)return e===o?-1:t===o?1:r?-1:s?1:N?Z(N,e)-Z(N,t):0;if(r===s)return a(e,t);for(n=e;n=n.parentNode;)l.unshift(n);for(n=t;n=n.parentNode;)u.unshift(n);for(;l[i]===u[i];)i++;return i?a(l[i],u[i]):l[i]===F?-1:u[i]===F?1:0},o):A},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==A&&P(e),n=n.replace(ue,"='$1']"),w.matchesSelector&&I&&(!M||!M.test(n))&&(!L||!L.test(n)))try{var o=j.call(e,n);if(o||w.disconnectedMatch||e.document&&11!==e.document.nodeType)return o}catch(e){}return t(n,A,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==A&&P(e),H(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==A&&P(e);var n=b.attrHandle[t.toLowerCase()],o=n&&X.call(b.attrHandle,t.toLowerCase())?n(e,t,!I):void 0;return void 0!==o?o:w.attributes||!I?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],o=0,i=0;if(E=!w.detectDuplicates,N=!w.sortStable&&e.slice(0),e.sort(V),E){for(;t=e[i++];)t===e[i]&&(o=n.push(i));for(;o--;)e.splice(n[o],1)}return N=null,e},x=t.getText=function(e){var t,n="",o=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=x(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[o++];)n+=x(t);return n},b=t.selectors={cacheLength:50,createPseudo:o,match:de,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(we,be),e[3]=(e[3]||e[4]||e[5]||"").replace(we,be),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return de.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&ce.test(n)&&(t=C(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(we,be).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=O[e+" "];return t||(t=new RegExp("(^|"+ee+")"+e+"("+ee+"|$)"))&&O(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,o){return function(i){var r=t.attr(i,e);return null==r?"!="===n:!n||(r+="","="===n?r===o:"!="===n?r!==o:"^="===n?o&&0===r.indexOf(o):"*="===n?o&&r.indexOf(o)>-1:"$="===n?o&&r.slice(-o.length)===o:"~="===n?(" "+r.replace(re," ")+" ").indexOf(o)>-1:"|="===n&&(r===o||r.slice(0,o.length+1)===o+"-"))}},CHILD:function(e,t,n,o,i){var r="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===o&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,f,d,p,h,m=r!==a?"nextSibling":"previousSibling",g=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(g){if(r){for(;m;){for(f=t;f=f[m];)if(s?f.nodeName.toLowerCase()===y:1===f.nodeType)return!1;h=m="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?g.firstChild:g.lastChild],a&&v){for(c=g[W]||(g[W]={}),u=c[e]||[],p=u[0]===$&&u[1],d=u[0]===$&&u[2],f=p&&g.childNodes[p];f=++p&&f&&f[m]||(d=p=0)||h.pop();)if(1===f.nodeType&&++d&&f===t){c[e]=[$,p,d];break}}else if(v&&(u=(t[W]||(t[W]={}))[e])&&u[0]===$)d=u[1];else for(;(f=++p&&f&&f[m]||(d=p=0)||h.pop())&&((s?f.nodeName.toLowerCase()!==y:1!==f.nodeType)||!++d||(v&&((f[W]||(f[W]={}))[e]=[$,d]),f!==t)););return(d-=i)===o||d%o==0&&d/o>=0}}},PSEUDO:function(e,n){var i,r=b.pseudos[e]||b.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return r[W]?r(n):r.length>1?(i=[e,e,"",n],b.setFilters.hasOwnProperty(e.toLowerCase())?o(function(e,t){for(var o,i=r(e,n),a=i.length;a--;)o=Z(e,i[a]),e[o]=!(t[o]=i[a])}):function(e){return r(e,0,i)}):r}},pseudos:{not:o(function(e){var t=[],n=[],i=T(e.replace(ae,"$1"));return i[W]?o(function(e,t,n,o){for(var r,a=i(e,null,o,[]),s=e.length;s--;)(r=a[s])&&(e[s]=!(t[s]=r))}):function(e,o,r){return t[0]=e,i(t,null,r,n),t[0]=null,!n.pop()}}),has:o(function(e){return function(n){return t(e,n).length>0}}),contains:o(function(e){return e=e.replace(we,be),function(t){return(t.textContent||t.innerText||x(t)).indexOf(e)>-1}}),lang:o(function(e){return fe.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(we,be).toLowerCase(),function(t){var n;do{if(n=I?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===D},focus:function(e){return e===A.activeElement&&(!A.hasFocus||A.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return he.test(e.nodeName)},input:function(e){return pe.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:s(function(){return[0]}),last:s(function(e,t){return[t-1]}),eq:s(function(e,t,n){return[n<0?n+t:n]}),even:s(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:s(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:s(function(e,t,n){for(var o=n<0?n+t:n;--o>=0;)e.push(o);return e}),gt:s(function(e,t,n){for(var o=n<0?n+t:n;++o<t;)e.push(o);return e})}},b.pseudos.nth=b.pseudos.eq;for(v in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[v]=function(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}(v);for(v in{submit:!0,reset:!0})b.pseudos[v]=function(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}(v);return u.prototype=b.filters=b.pseudos,b.setFilters=new u,C=t.tokenize=function(e,n){var o,i,r,a,s,l,u,c=B[e+" "];if(c)return n?0:c.slice(0);for(s=e,l=[],u=b.preFilter;s;){o&&!(i=se.exec(s))||(i&&(s=s.slice(i[0].length)||s),l.push(r=[])),o=!1,(i=le.exec(s))&&(o=i.shift(),r.push({value:o,type:i[0].replace(ae," ")}),s=s.slice(o.length));for(a in b.filter)!(i=de[a].exec(s))||u[a]&&!(i=u[a](i))||(o=i.shift(),r.push({value:o,type:a,matches:i}),s=s.slice(o.length));if(!o)break}return n?s.length:s?t.error(e):B(e,l).slice(0)},T=t.compile=function(e,t){var n,o=[],i=[],r=q[e+" "];if(!r){for(t||(t=C(e)),n=t.length;n--;)r=g(t[n]),r[W]?o.push(r):i.push(r);r=q(e,y(i,o)),r.selector=e}return r},S=t.select=function(e,t,n,o){var i,r,a,s,u,f="function"==typeof e&&e,d=!o&&C(e=f.selector||e);if(n=n||[],1===d.length){if(r=d[0]=d[0].slice(0),r.length>2&&"ID"===(a=r[0]).type&&w.getById&&9===t.nodeType&&I&&b.relative[r[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(we,be),t)||[])[0]))return n;f&&(t=t.parentNode),e=e.slice(r.shift().value.length)}for(i=de.needsContext.test(e)?0:r.length;i--&&(a=r[i],!b.relative[s=a.type]);)if((u=b.find[s])&&(o=u(a.matches[0].replace(we,be),ye.test(r[0].type)&&l(t.parentNode)||t))){if(r.splice(i,1),!(e=o.length&&c(r)))return K.apply(n,o),n;break}}return(f||T(e,d))(o,t,!I,n,ye.test(e)&&l(t.parentNode)||t),n},w.sortStable=W.split("").sort(V).join("")===W,w.detectDuplicates=!!E,P(),w.sortDetached=i(function(e){return 1&e.compareDocumentPosition(A.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||r("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),w.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||r("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||r(J,function(e,t,n){var o;if(!n)return!0===e[t]?t.toLowerCase():(o=e.getAttributeNode(t))&&o.specified?o.value:null}),t}(e);oe.find=le,oe.expr=le.selectors,oe.expr[":"]=oe.expr.pseudos,oe.unique=le.uniqueSort,oe.text=le.getText,oe.isXMLDoc=le.isXML,oe.contains=le.contains;var ue=oe.expr.match.needsContext,ce=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,fe=/^.[^:#\[\.,]*$/;oe.filter=function(e,t,n){var o=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===o.nodeType?oe.find.matchesSelector(o,e)?[o]:[]:oe.find.matches(e,oe.grep(t,function(e){return 1===e.nodeType}))},oe.fn.extend({find:function(e){var t,n=[],o=this,i=o.length;if("string"!=typeof e)return this.pushStack(oe(e).filter(function(){for(t=0;t<i;t++)if(oe.contains(o[t],this))return!0}));for(t=0;t<i;t++)oe.find(e,o[t],n);return n=this.pushStack(i>1?oe.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},filter:function(e){return this.pushStack(o(this,e||[],!1))},not:function(e){return this.pushStack(o(this,e||[],!0))},is:function(e){return!!o(this,"string"==typeof e&&ue.test(e)?oe(e):e||[],!1).length}});var de,pe=e.document,he=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(oe.fn.init=function(e,t){var n,o;if(!e)return this;if("string"==typeof e){if(!(n="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:he.exec(e))||!n[1]&&t)return!t||t.jquery?(t||de).find(e):this.constructor(t).find(e);if(n[1]){if(t=t instanceof oe?t[0]:t,oe.merge(this,oe.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:pe,!0)),ce.test(n[1])&&oe.isPlainObject(t))for(n in t)oe.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}if((o=pe.getElementById(n[2]))&&o.parentNode){if(o.id!==n[2])return de.find(e);this.length=1,this[0]=o}return this.context=pe,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):oe.isFunction(e)?void 0!==de.ready?de.ready(e):e(oe):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),oe.makeArray(e,this))}).prototype=oe.fn,de=oe(pe);var me=/^(?:parents|prev(?:Until|All))/,ge={children:!0,contents:!0,next:!0,prev:!0};oe.extend({dir:function(e,t,n){for(var o=[],i=e[t];i&&9!==i.nodeType&&(void 0===n||1!==i.nodeType||!oe(i).is(n));)1===i.nodeType&&o.push(i),i=i[t];return o},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),oe.fn.extend({has:function(e){var t,n=oe(e,this),o=n.length;return this.filter(function(){for(t=0;t<o;t++)if(oe.contains(this,n[t]))return!0})},closest:function(e,t){for(var n,o=0,i=this.length,r=[],a=ue.test(e)||"string"!=typeof e?oe(e,t||this.context):0;o<i;o++)for(n=this[o];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&oe.find.matchesSelector(n,e))){r.push(n);break}return this.pushStack(r.length>1?oe.unique(r):r)},index:function(e){return e?"string"==typeof e?oe.inArray(this[0],oe(e)):oe.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(oe.unique(oe.merge(this.get(),oe(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),oe.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return oe.dir(e,"parentNode")},parentsUntil:function(e,t,n){return oe.dir(e,"parentNode",n)},next:function(e){return i(e,"nextSibling")},prev:function(e){return i(e,"previousSibling")},nextAll:function(e){return oe.dir(e,"nextSibling")},prevAll:function(e){return oe.dir(e,"previousSibling")},nextUntil:function(e,t,n){return oe.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return oe.dir(e,"previousSibling",n)},siblings:function(e){return oe.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return oe.sibling(e.firstChild)},contents:function(e){return oe.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:oe.merge([],e.childNodes)}},function(e,t){oe.fn[e]=function(n,o){var i=oe.map(this,t,n);return"Until"!==e.slice(-5)&&(o=n),o&&"string"==typeof o&&(i=oe.filter(o,i)),this.length>1&&(ge[e]||(i=oe.unique(i)),me.test(e)&&(i=i.reverse())),this.pushStack(i)}});var ye=/\S+/g,ve={};oe.Callbacks=function(e){e="string"==typeof e?ve[e]||r(e):oe.extend({},e);var t,n,o,i,a,s,l=[],u=!e.once&&[],c=function(r){for(n=e.memory&&r,o=!0,a=s||0,s=0,i=l.length,t=!0;l&&a<i;a++)if(!1===l[a].apply(r[0],r[1])&&e.stopOnFalse){n=!1;break}t=!1,l&&(u?u.length&&c(u.shift()):n?l=[]:f.disable())},f={add:function(){if(l){var o=l.length;!function t(n){oe.each(n,function(n,o){var i=oe.type(o);"function"===i?e.unique&&f.has(o)||l.push(o):o&&o.length&&"string"!==i&&t(o)})}(arguments),t?i=l.length:n&&(s=o,c(n))}return this},remove:function(){return l&&oe.each(arguments,function(e,n){for(var o;(o=oe.inArray(n,l,o))>-1;)l.splice(o,1),t&&(o<=i&&i--,o<=a&&a--)}),this},has:function(e){return e?oe.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],i=0,this},disable:function(){return l=u=n=void 0,this},disabled:function(){return!l},lock:function(){return u=void 0,n||f.disable(),this},locked:function(){return!u},fireWith:function(e,n){return!l||o&&!u||(n=n||[],n=[e,n.slice?n.slice():n],t?u.push(n):c(n)),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},oe.extend({Deferred:function(e){var t=[["resolve","done",oe.Callbacks("once memory"),"resolved"],["reject","fail",oe.Callbacks("once memory"),"rejected"],["notify","progress",oe.Callbacks("memory")]],n="pending",o={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return oe.Deferred(function(n){oe.each(t,function(t,r){var a=oe.isFunction(e[t])&&e[t];i[r[1]](function(){var e=a&&a.apply(this,arguments);e&&oe.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[r[0]+"With"](this===o?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?oe.extend(e,o):o}},i={};return o.pipe=o.then,oe.each(t,function(e,r){var a=r[2],s=r[3];o[r[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[r[0]]=function(){return i[r[0]+"With"](this===i?o:this,arguments),this},i[r[0]+"With"]=a.fireWith}),o.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,o,i=0,r=Y.call(arguments),a=r.length,s=1!==a||e&&oe.isFunction(e.promise)?a:0,l=1===s?e:oe.Deferred(),u=function(e,n,o){return function(i){n[e]=this,o[e]=arguments.length>1?Y.call(arguments):i,o===t?l.notifyWith(n,o):--s||l.resolveWith(n,o)}};if(a>1)for(t=new Array(a),n=new Array(a),o=new Array(a);i<a;i++)r[i]&&oe.isFunction(r[i].promise)?r[i].promise().done(u(i,o,r)).fail(l.reject).progress(u(i,n,t)):--s;return s||l.resolveWith(o,r),l.promise()}});var we;oe.fn.ready=function(e){return oe.ready.promise().done(e),this},oe.extend({isReady:!1,readyWait:1,holdReady:function(e){e?oe.readyWait++:oe.ready(!0)},ready:function(e){if(!0===e?!--oe.readyWait:!oe.isReady){if(!pe.body)return setTimeout(oe.ready);oe.isReady=!0,!0!==e&&--oe.readyWait>0||(we.resolveWith(pe,[oe]),oe.fn.triggerHandler&&(oe(pe).triggerHandler("ready"),oe(pe).off("ready")))}}}),oe.ready.promise=function(t){if(!we)if(we=oe.Deferred(),"complete"===pe.readyState)setTimeout(oe.ready);else if(pe.addEventListener)pe.addEventListener("DOMContentLoaded",s,!1),e.addEventListener("load",s,!1);else{pe.attachEvent("onreadystatechange",s),e.attachEvent("onload",s);var n=!1;try{n=null==e.frameElement&&pe.documentElement}catch(e){}n&&n.doScroll&&function e(){if(!oe.isReady){try{n.doScroll("left")}catch(t){return setTimeout(e,50)}a(),oe.ready()}}()}return we.promise(t)};var be,xe="undefined";for(be in oe(ne))break;ne.ownLast="0"!==be,ne.inlineBlockNeedsLayout=!1,oe(function(){var e,t,n,o;(n=pe.getElementsByTagName("body")[0])&&n.style&&(t=pe.createElement("div"),o=pe.createElement("div"),o.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(o).appendChild(t),typeof t.style.zoom!==xe&&(t.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",ne.inlineBlockNeedsLayout=e=3===t.offsetWidth,e&&(n.style.zoom=1)),n.removeChild(o))}),function(){var e=pe.createElement("div");if(null==ne.deleteExpando){ne.deleteExpando=!0;try{delete e.test}catch(e){ne.deleteExpando=!1}}e=null}(),oe.acceptData=function(e){var t=oe.noData[(e.nodeName+" ").toLowerCase()],n=+e.nodeType||1;return(1===n||9===n)&&(!t||!0!==t&&e.getAttribute("classid")===t)};var _e=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ce=/([A-Z])/g;oe.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return!!(e=e.nodeType?oe.cache[e[oe.expando]]:e[oe.expando])&&!u(e)},data:function(e,t,n){return c(e,t,n)},removeData:function(e,t){return f(e,t)},_data:function(e,t,n){return c(e,t,n,!0)},_removeData:function(e,t){return f(e,t,!0)}}),oe.fn.extend({data:function(e,t){var n,o,i,r=this[0],a=r&&r.attributes;if(void 0===e){if(this.length&&(i=oe.data(r),1===r.nodeType&&!oe._data(r,"parsedAttrs"))){for(n=a.length;n--;)a[n]&&(o=a[n].name,0===o.indexOf("data-")&&(o=oe.camelCase(o.slice(5)),l(r,o,i[o])));oe._data(r,"parsedAttrs",!0)}return i}return"object"==typeof e?this.each(function(){oe.data(this,e)}):arguments.length>1?this.each(function(){oe.data(this,e,t)}):r?l(r,e,oe.data(r,e)):void 0},removeData:function(e){return this.each(function(){oe.removeData(this,e)})}}),oe.extend({queue:function(e,t,n){var o;if(e)return t=(t||"fx")+"queue",o=oe._data(e,t),n&&(!o||oe.isArray(n)?o=oe._data(e,t,oe.makeArray(n)):o.push(n)),o||[]},dequeue:function(e,t){t=t||"fx";var n=oe.queue(e,t),o=n.length,i=n.shift(),r=oe._queueHooks(e,t),a=function(){oe.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),o--),i&&("fx"===t&&n.unshift("inprogress"),delete r.stop,i.call(e,a,r)),!o&&r&&r.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return oe._data(e,n)||oe._data(e,n,{empty:oe.Callbacks("once memory").add(function(){oe._removeData(e,t+"queue"),oe._removeData(e,n)})})}}),oe.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?oe.queue(this[0],e):void 0===t?this:this.each(function(){var n=oe.queue(this,e,t);oe._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&oe.dequeue(this,e)})},dequeue:function(e){return this.each(function(){oe.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,o=1,i=oe.Deferred(),r=this,a=this.length,s=function(){--o||i.resolveWith(r,[r])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=oe._data(r[a],e+"queueHooks"))&&n.empty&&(o++,n.empty.add(s));return s(),i.promise(t)}});var Te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Se=["Top","Right","Bottom","Left"],ke=function(e,t){return e=t||e,"none"===oe.css(e,"display")||!oe.contains(e.ownerDocument,e)},Ne=oe.access=function(e,t,n,o,i,r,a){var s=0,l=e.length,u=null==n;if("object"===oe.type(n)){i=!0;for(s in n)oe.access(e,t,s,n[s],!0,r,a)}else if(void 0!==o&&(i=!0,oe.isFunction(o)||(a=!0),u&&(a?(t.call(e,o),t=null):(u=t,t=function(e,t,n){return u.call(oe(e),n)})),t))for(;s<l;s++)t(e[s],n,a?o:o.call(e[s],s,t(e[s],n)));return i?e:u?t.call(e):l?t(e[0],n):r},Ee=/^(?:checkbox|radio)$/i;!function(){var e=pe.createElement("input"),t=pe.createElement("div"),n=pe.createDocumentFragment();if(t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",ne.leadingWhitespace=3===t.firstChild.nodeType,ne.tbody=!t.getElementsByTagName("tbody").length,ne.htmlSerialize=!!t.getElementsByTagName("link").length,ne.html5Clone="<:nav></:nav>"!==pe.createElement("nav").cloneNode(!0).outerHTML,e.type="checkbox",e.checked=!0,n.appendChild(e),ne.appendChecked=e.checked,t.innerHTML="<textarea>x</textarea>",ne.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue,n.appendChild(t),t.innerHTML="<input type='radio' checked='checked' name='t'/>",ne.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,ne.noCloneEvent=!0,t.attachEvent&&(t.attachEvent("onclick",function(){ne.noCloneEvent=!1}),t.cloneNode(!0).click()),null==ne.deleteExpando){ne.deleteExpando=!0;try{delete t.test}catch(e){ne.deleteExpando=!1}}}(),function(){var t,n,o=pe.createElement("div");for(t in{submit:!0,change:!0,focusin:!0})n="on"+t,(ne[t+"Bubbles"]=n in e)||(o.setAttribute(n,"t"),ne[t+"Bubbles"]=!1===o.attributes[n].expando);o=null}();var Pe=/^(?:input|select|textarea)$/i,Ae=/^key/,De=/^(?:mouse|pointer|contextmenu)|click/,Ie=/^(?:focusinfocus|focusoutblur)$/,Le=/^([^.]*)(?:\.(.+)|)$/;oe.event={global:{},add:function(e,t,n,o,i){var r,a,s,l,u,c,f,d,p,h,m,g=oe._data(e);if(g){for(n.handler&&(l=n,n=l.handler,i=l.selector),n.guid||(n.guid=oe.guid++),(a=g.events)||(a=g.events={}),(c=g.handle)||(c=g.handle=function(e){return typeof oe===xe||e&&oe.event.triggered===e.type?void 0:oe.event.dispatch.apply(c.elem,arguments)},c.elem=e),t=(t||"").match(ye)||[""],s=t.length;s--;)r=Le.exec(t[s])||[],p=m=r[1],h=(r[2]||"").split(".").sort(),p&&(u=oe.event.special[p]||{},p=(i?u.delegateType:u.bindType)||p,u=oe.event.special[p]||{},f=oe.extend({type:p,origType:m,data:o,handler:n,guid:n.guid,selector:i,needsContext:i&&oe.expr.match.needsContext.test(i),namespace:h.join(".")},l),(d=a[p])||(d=a[p]=[],d.delegateCount=0,u.setup&&!1!==u.setup.call(e,o,h,c)||(e.addEventListener?e.addEventListener(p,c,!1):e.attachEvent&&e.attachEvent("on"+p,c))),u.add&&(u.add.call(e,f),f.handler.guid||(f.handler.guid=n.guid)),i?d.splice(d.delegateCount++,0,f):d.push(f),oe.event.global[p]=!0);e=null}},remove:function(e,t,n,o,i){var r,a,s,l,u,c,f,d,p,h,m,g=oe.hasData(e)&&oe._data(e);if(g&&(c=g.events)){for(t=(t||"").match(ye)||[""],u=t.length;u--;)if(s=Le.exec(t[u])||[],p=m=s[1],h=(s[2]||"").split(".").sort(),p){for(f=oe.event.special[p]||{},p=(o?f.delegateType:f.bindType)||p,d=c[p]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=r=d.length;r--;)a=d[r],
!i&&m!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||o&&o!==a.selector&&("**"!==o||!a.selector)||(d.splice(r,1),a.selector&&d.delegateCount--,f.remove&&f.remove.call(e,a));l&&!d.length&&(f.teardown&&!1!==f.teardown.call(e,h,g.handle)||oe.removeEvent(e,p,g.handle),delete c[p])}else for(p in c)oe.event.remove(e,p+t[u],n,o,!0);oe.isEmptyObject(c)&&(delete g.handle,oe._removeData(e,"events"))}},trigger:function(t,n,o,i){var r,a,s,l,u,c,f,d=[o||pe],p=te.call(t,"type")?t.type:t,h=te.call(t,"namespace")?t.namespace.split("."):[];if(s=c=o=o||pe,3!==o.nodeType&&8!==o.nodeType&&!Ie.test(p+oe.event.triggered)&&(p.indexOf(".")>=0&&(h=p.split("."),p=h.shift(),h.sort()),a=p.indexOf(":")<0&&"on"+p,t=t[oe.expando]?t:new oe.Event(p,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=h.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=o),n=null==n?[t]:oe.makeArray(n,[t]),u=oe.event.special[p]||{},i||!u.trigger||!1!==u.trigger.apply(o,n))){if(!i&&!u.noBubble&&!oe.isWindow(o)){for(l=u.delegateType||p,Ie.test(l+p)||(s=s.parentNode);s;s=s.parentNode)d.push(s),c=s;c===(o.ownerDocument||pe)&&d.push(c.defaultView||c.parentWindow||e)}for(f=0;(s=d[f++])&&!t.isPropagationStopped();)t.type=f>1?l:u.bindType||p,r=(oe._data(s,"events")||{})[t.type]&&oe._data(s,"handle"),r&&r.apply(s,n),(r=a&&s[a])&&r.apply&&oe.acceptData(s)&&(t.result=r.apply(s,n),!1===t.result&&t.preventDefault());if(t.type=p,!i&&!t.isDefaultPrevented()&&(!u._default||!1===u._default.apply(d.pop(),n))&&oe.acceptData(o)&&a&&o[p]&&!oe.isWindow(o)){c=o[a],c&&(o[a]=null),oe.event.triggered=p;try{o[p]()}catch(e){}oe.event.triggered=void 0,c&&(o[a]=c)}return t.result}},dispatch:function(e){e=oe.event.fix(e);var t,n,o,i,r,a=[],s=Y.call(arguments),l=(oe._data(this,"events")||{})[e.type]||[],u=oe.event.special[e.type]||{};if(s[0]=e,e.delegateTarget=this,!u.preDispatch||!1!==u.preDispatch.call(this,e)){for(a=oe.event.handlers.call(this,e,l),t=0;(i=a[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,r=0;(o=i.handlers[r++])&&!e.isImmediatePropagationStopped();)e.namespace_re&&!e.namespace_re.test(o.namespace)||(e.handleObj=o,e.data=o.data,void 0!==(n=((oe.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(e.result=n)&&(e.preventDefault(),e.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,o,i,r,a=[],s=t.delegateCount,l=e.target;if(s&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(!0!==l.disabled||"click"!==e.type)){for(i=[],r=0;r<s;r++)o=t[r],n=o.selector+" ",void 0===i[n]&&(i[n]=o.needsContext?oe(n,this).index(l)>=0:oe.find(n,this,null,[l]).length),i[n]&&i.push(o);i.length&&a.push({elem:l,handlers:i})}return s<t.length&&a.push({elem:this,handlers:t.slice(s)}),a},fix:function(e){if(e[oe.expando])return e;var t,n,o,i=e.type,r=e,a=this.fixHooks[i];for(a||(this.fixHooks[i]=a=De.test(i)?this.mouseHooks:Ae.test(i)?this.keyHooks:{}),o=a.props?this.props.concat(a.props):this.props,e=new oe.Event(r),t=o.length;t--;)n=o[t],e[n]=r[n];return e.target||(e.target=r.srcElement||pe),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,a.filter?a.filter(e,r):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,o,i,r=t.button,a=t.fromElement;return null==e.pageX&&null!=t.clientX&&(o=e.target.ownerDocument||pe,i=o.documentElement,n=o.body,e.pageX=t.clientX+(i&&i.scrollLeft||n&&n.scrollLeft||0)-(i&&i.clientLeft||n&&n.clientLeft||0),e.pageY=t.clientY+(i&&i.scrollTop||n&&n.scrollTop||0)-(i&&i.clientTop||n&&n.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?t.toElement:a),e.which||void 0===r||(e.which=1&r?1:2&r?3:4&r?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==h()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){if(this===h()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(oe.nodeName(this,"input")&&"checkbox"===this.type&&this.click)return this.click(),!1},_default:function(e){return oe.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,o){var i=oe.extend(new oe.Event,n,{type:e,isSimulated:!0,originalEvent:{}});o?oe.event.trigger(i,null,t):oe.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},oe.removeEvent=pe.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var o="on"+t;e.detachEvent&&(typeof e[o]===xe&&(e[o]=null),e.detachEvent(o,n))},oe.Event=function(e,t){if(!(this instanceof oe.Event))return new oe.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?d:p):this.type=e,t&&oe.extend(this,t),this.timeStamp=e&&e.timeStamp||oe.now(),this[oe.expando]=!0},oe.Event.prototype={isDefaultPrevented:p,isPropagationStopped:p,isImmediatePropagationStopped:p,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=d,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=d,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=d,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},oe.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){oe.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,o=this,i=e.relatedTarget,r=e.handleObj;return i&&(i===o||oe.contains(o,i))||(e.type=r.origType,n=r.handler.apply(this,arguments),e.type=t),n}}}),ne.submitBubbles||(oe.event.special.submit={setup:function(){if(oe.nodeName(this,"form"))return!1;oe.event.add(this,"click._submit keypress._submit",function(e){var t=e.target,n=oe.nodeName(t,"input")||oe.nodeName(t,"button")?t.form:void 0;n&&!oe._data(n,"submitBubbles")&&(oe.event.add(n,"submit._submit",function(e){e._submit_bubble=!0}),oe._data(n,"submitBubbles",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&oe.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(oe.nodeName(this,"form"))return!1;oe.event.remove(this,"._submit")}}),ne.changeBubbles||(oe.event.special.change={setup:function(){if(Pe.test(this.nodeName))return"checkbox"!==this.type&&"radio"!==this.type||(oe.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),oe.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),oe.event.simulate("change",this,e,!0)})),!1;oe.event.add(this,"beforeactivate._change",function(e){var t=e.target;Pe.test(t.nodeName)&&!oe._data(t,"changeBubbles")&&(oe.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||oe.event.simulate("change",this.parentNode,e,!0)}),oe._data(t,"changeBubbles",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type)return e.handleObj.handler.apply(this,arguments)},teardown:function(){return oe.event.remove(this,"._change"),!Pe.test(this.nodeName)}}),ne.focusinBubbles||oe.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){oe.event.simulate(t,e.target,oe.event.fix(e),!0)};oe.event.special[t]={setup:function(){var o=this.ownerDocument||this,i=oe._data(o,t);i||o.addEventListener(e,n,!0),oe._data(o,t,(i||0)+1)},teardown:function(){var o=this.ownerDocument||this,i=oe._data(o,t)-1;i?oe._data(o,t,i):(o.removeEventListener(e,n,!0),oe._removeData(o,t))}}}),oe.fn.extend({on:function(e,t,n,o,i){var r,a;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=void 0);for(r in e)this.on(r,t,n,e[r],i);return this}if(null==n&&null==o?(o=t,n=t=void 0):null==o&&("string"==typeof t?(o=n,n=void 0):(o=n,n=t,t=void 0)),!1===o)o=p;else if(!o)return this;return 1===i&&(a=o,o=function(e){return oe().off(e),a.apply(this,arguments)},o.guid=a.guid||(a.guid=oe.guid++)),this.each(function(){oe.event.add(this,e,o,n,t)})},one:function(e,t,n,o){return this.on(e,t,n,o,1)},off:function(e,t,n){var o,i;if(e&&e.preventDefault&&e.handleObj)return o=e.handleObj,oe(e.delegateTarget).off(o.namespace?o.origType+"."+o.namespace:o.origType,o.selector,o.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=p),this.each(function(){oe.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){oe.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return oe.event.trigger(e,t,n,!0)}});var Me="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",je=/ jQuery\d+="(?:null|\d+)"/g,He=new RegExp("<(?:"+Me+")[\\s/>]","i"),We=/^\s+/,Fe=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,$e=/<([\w:]+)/,Re=/<tbody/i,Oe=/<|&#?\w+;/,Be=/<(?:script|style|link)/i,qe=/checked\s*(?:[^=]|=\s*.checked.)/i,Ve=/^$|\/(?:java|ecma)script/i,ze=/^true\/(.*)/,Xe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Ue={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:ne.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},Ge=m(pe),Ye=Ge.appendChild(pe.createElement("div"));Ue.optgroup=Ue.option,Ue.tbody=Ue.tfoot=Ue.colgroup=Ue.caption=Ue.thead,Ue.th=Ue.td,oe.extend({clone:function(e,t,n){var o,i,r,a,s,l=oe.contains(e.ownerDocument,e);if(ne.html5Clone||oe.isXMLDoc(e)||!He.test("<"+e.nodeName+">")?r=e.cloneNode(!0):(Ye.innerHTML=e.outerHTML,Ye.removeChild(r=Ye.firstChild)),!(ne.noCloneEvent&&ne.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||oe.isXMLDoc(e)))for(o=g(r),s=g(e),a=0;null!=(i=s[a]);++a)o[a]&&C(i,o[a]);if(t)if(n)for(s=s||g(e),o=o||g(r),a=0;null!=(i=s[a]);a++)_(i,o[a]);else _(e,r);return o=g(r,"script"),o.length>0&&x(o,!l&&g(e,"script")),o=s=i=null,r},buildFragment:function(e,t,n,o){for(var i,r,a,s,l,u,c,f=e.length,d=m(t),p=[],h=0;h<f;h++)if((r=e[h])||0===r)if("object"===oe.type(r))oe.merge(p,r.nodeType?[r]:r);else if(Oe.test(r)){for(s=s||d.appendChild(t.createElement("div")),l=($e.exec(r)||["",""])[1].toLowerCase(),c=Ue[l]||Ue._default,s.innerHTML=c[1]+r.replace(Fe,"<$1></$2>")+c[2],i=c[0];i--;)s=s.lastChild;if(!ne.leadingWhitespace&&We.test(r)&&p.push(t.createTextNode(We.exec(r)[0])),!ne.tbody)for(r="table"!==l||Re.test(r)?"<table>"!==c[1]||Re.test(r)?0:s:s.firstChild,i=r&&r.childNodes.length;i--;)oe.nodeName(u=r.childNodes[i],"tbody")&&!u.childNodes.length&&r.removeChild(u);for(oe.merge(p,s.childNodes),s.textContent="";s.firstChild;)s.removeChild(s.firstChild);s=d.lastChild}else p.push(t.createTextNode(r));for(s&&d.removeChild(s),ne.appendChecked||oe.grep(g(p,"input"),y),h=0;r=p[h++];)if((!o||-1===oe.inArray(r,o))&&(a=oe.contains(r.ownerDocument,r),s=g(d.appendChild(r),"script"),a&&x(s),n))for(i=0;r=s[i++];)Ve.test(r.type||"")&&n.push(r);return s=null,d},cleanData:function(e,t){for(var n,o,i,r,a=0,s=oe.expando,l=oe.cache,u=ne.deleteExpando,c=oe.event.special;null!=(n=e[a]);a++)if((t||oe.acceptData(n))&&(i=n[s],r=i&&l[i])){if(r.events)for(o in r.events)c[o]?oe.event.remove(n,o):oe.removeEvent(n,o,r.handle);l[i]&&(delete l[i],u?delete n[s]:typeof n.removeAttribute!==xe?n.removeAttribute(s):n[s]=null,G.push(i))}}}),oe.fn.extend({text:function(e){return Ne(this,function(e){return void 0===e?oe.text(this):this.empty().append((this[0]&&this[0].ownerDocument||pe).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){v(this,e).appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=v(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,o=e?oe.filter(e,this):this,i=0;null!=(n=o[i]);i++)t||1!==n.nodeType||oe.cleanData(g(n)),n.parentNode&&(t&&oe.contains(n.ownerDocument,n)&&x(g(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&oe.cleanData(g(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&oe.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return oe.clone(this,e,t)})},html:function(e){return Ne(this,function(e){var t=this[0]||{},n=0,o=this.length;if(void 0===e)return 1===t.nodeType?t.innerHTML.replace(je,""):void 0;if("string"==typeof e&&!Be.test(e)&&(ne.htmlSerialize||!He.test(e))&&(ne.leadingWhitespace||!We.test(e))&&!Ue[($e.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(Fe,"<$1></$2>");try{for(;n<o;n++)t=this[n]||{},1===t.nodeType&&(oe.cleanData(g(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,function(t){e=this.parentNode,oe.cleanData(g(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=K.apply([],e);var n,o,i,r,a,s,l=0,u=this.length,c=this,f=u-1,d=e[0],p=oe.isFunction(d);if(p||u>1&&"string"==typeof d&&!ne.checkClone&&qe.test(d))return this.each(function(n){var o=c.eq(n);p&&(e[0]=d.call(this,n,o.html())),o.domManip(e,t)});if(u&&(s=oe.buildFragment(e,this[0].ownerDocument,!1,this),n=s.firstChild,1===s.childNodes.length&&(s=n),n)){for(r=oe.map(g(s,"script"),w),i=r.length;l<u;l++)o=s,l!==f&&(o=oe.clone(o,!0,!0),i&&oe.merge(r,g(o,"script"))),t.call(this[l],o,l);if(i)for(a=r[r.length-1].ownerDocument,oe.map(r,b),l=0;l<i;l++)o=r[l],Ve.test(o.type||"")&&!oe._data(o,"globalEval")&&oe.contains(a,o)&&(o.src?oe._evalUrl&&oe._evalUrl(o.src):oe.globalEval((o.text||o.textContent||o.innerHTML||"").replace(Xe,"")));s=n=null}return this}}),oe.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){oe.fn[e]=function(e){for(var n,o=0,i=[],r=oe(e),a=r.length-1;o<=a;o++)n=o===a?this:this.clone(!0),oe(r[o])[t](n),Q.apply(i,n.get());return this.pushStack(i)}});var Ke,Qe={};!function(){var e;ne.shrinkWrapBlocks=function(){if(null!=e)return e;e=!1;var t,n,o;return(n=pe.getElementsByTagName("body")[0])&&n.style?(t=pe.createElement("div"),o=pe.createElement("div"),o.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(o).appendChild(t),typeof t.style.zoom!==xe&&(t.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",t.appendChild(pe.createElement("div")).style.width="5px",e=3!==t.offsetWidth),n.removeChild(o),e):void 0}}();var Ze,Je,et=/^margin/,tt=new RegExp("^("+Te+")(?!px)[a-z%]+$","i"),nt=/^(top|right|bottom|left)$/;e.getComputedStyle?(Ze=function(t){return t.ownerDocument.defaultView.opener?t.ownerDocument.defaultView.getComputedStyle(t,null):e.getComputedStyle(t,null)},Je=function(e,t,n){var o,i,r,a,s=e.style;return n=n||Ze(e),a=n?n.getPropertyValue(t)||n[t]:void 0,n&&(""!==a||oe.contains(e.ownerDocument,e)||(a=oe.style(e,t)),tt.test(a)&&et.test(t)&&(o=s.width,i=s.minWidth,r=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=o,s.minWidth=i,s.maxWidth=r)),void 0===a?a:a+""}):pe.documentElement.currentStyle&&(Ze=function(e){return e.currentStyle},Je=function(e,t,n){var o,i,r,a,s=e.style;return n=n||Ze(e),a=n?n[t]:void 0,null==a&&s&&s[t]&&(a=s[t]),tt.test(a)&&!nt.test(t)&&(o=s.left,i=e.runtimeStyle,r=i&&i.left,r&&(i.left=e.currentStyle.left),s.left="fontSize"===t?"1em":a,a=s.pixelLeft+"px",s.left=o,r&&(i.left=r)),void 0===a?a:a+""||"auto"}),function(){function t(){var t,n,o,i;(n=pe.getElementsByTagName("body")[0])&&n.style&&(t=pe.createElement("div"),o=pe.createElement("div"),o.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(o).appendChild(t),t.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",r=a=!1,l=!0,e.getComputedStyle&&(r="1%"!==(e.getComputedStyle(t,null)||{}).top,a="4px"===(e.getComputedStyle(t,null)||{width:"4px"}).width,i=t.appendChild(pe.createElement("div")),i.style.cssText=t.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",t.style.width="1px",l=!parseFloat((e.getComputedStyle(i,null)||{}).marginRight),t.removeChild(i)),t.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=t.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",s=0===i[0].offsetHeight,s&&(i[0].style.display="",i[1].style.display="none",s=0===i[0].offsetHeight),n.removeChild(o))}var n,o,i,r,a,s,l;n=pe.createElement("div"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",i=n.getElementsByTagName("a")[0],(o=i&&i.style)&&(o.cssText="float:left;opacity:.5",ne.opacity="0.5"===o.opacity,ne.cssFloat=!!o.cssFloat,n.style.backgroundClip="content-box",n.cloneNode(!0).style.backgroundClip="",ne.clearCloneStyle="content-box"===n.style.backgroundClip,ne.boxSizing=""===o.boxSizing||""===o.MozBoxSizing||""===o.WebkitBoxSizing,oe.extend(ne,{reliableHiddenOffsets:function(){return null==s&&t(),s},boxSizingReliable:function(){return null==a&&t(),a},pixelPosition:function(){return null==r&&t(),r},reliableMarginRight:function(){return null==l&&t(),l}}))}(),oe.swap=function(e,t,n,o){var i,r,a={};for(r in t)a[r]=e.style[r],e.style[r]=t[r];i=n.apply(e,o||[]);for(r in t)e.style[r]=a[r];return i};var ot=/alpha\([^)]*\)/i,it=/opacity\s*=\s*([^)]*)/,rt=/^(none|table(?!-c[ea]).+)/,at=new RegExp("^("+Te+")(.*)$","i"),st=new RegExp("^([+-])=("+Te+")","i"),lt={position:"absolute",visibility:"hidden",display:"block"},ut={letterSpacing:"0",fontWeight:"400"},ct=["Webkit","O","Moz","ms"];oe.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Je(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:ne.cssFloat?"cssFloat":"styleFloat"},style:function(e,t,n,o){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,r,a,s=oe.camelCase(t),l=e.style;if(t=oe.cssProps[s]||(oe.cssProps[s]=N(l,s)),a=oe.cssHooks[t]||oe.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,o))?i:l[t];if(r=typeof n,"string"===r&&(i=st.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(oe.css(e,t)),r="number"),null!=n&&n===n&&("number"!==r||oe.cssNumber[s]||(n+="px"),ne.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),!(a&&"set"in a&&void 0===(n=a.set(e,n,o)))))try{l[t]=n}catch(e){}}},css:function(e,t,n,o){var i,r,a,s=oe.camelCase(t);return t=oe.cssProps[s]||(oe.cssProps[s]=N(e.style,s)),a=oe.cssHooks[t]||oe.cssHooks[s],a&&"get"in a&&(r=a.get(e,!0,n)),void 0===r&&(r=Je(e,t,o)),"normal"===r&&t in ut&&(r=ut[t]),""===n||n?(i=parseFloat(r),!0===n||oe.isNumeric(i)?i||0:r):r}}),oe.each(["height","width"],function(e,t){oe.cssHooks[t]={get:function(e,n,o){if(n)return rt.test(oe.css(e,"display"))&&0===e.offsetWidth?oe.swap(e,lt,function(){return D(e,t,o)}):D(e,t,o)},set:function(e,n,o){var i=o&&Ze(e);return P(e,n,o?A(e,t,o,ne.boxSizing&&"border-box"===oe.css(e,"boxSizing",!1,i),i):0)}}}),ne.opacity||(oe.cssHooks.opacity={get:function(e,t){return it.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,o=e.currentStyle,i=oe.isNumeric(t)?"alpha(opacity="+100*t+")":"",r=o&&o.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===oe.trim(r.replace(ot,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||o&&!o.filter)||(n.filter=ot.test(r)?r.replace(ot,i):r+" "+i)}}),oe.cssHooks.marginRight=k(ne.reliableMarginRight,function(e,t){if(t)return oe.swap(e,{display:"inline-block"},Je,[e,"marginRight"])}),oe.each({margin:"",padding:"",border:"Width"},function(e,t){oe.cssHooks[e+t]={expand:function(n){for(var o=0,i={},r="string"==typeof n?n.split(" "):[n];o<4;o++)i[e+Se[o]+t]=r[o]||r[o-2]||r[0];return i}},et.test(e)||(oe.cssHooks[e+t].set=P)}),oe.fn.extend({css:function(e,t){return Ne(this,function(e,t,n){var o,i,r={},a=0;if(oe.isArray(t)){for(o=Ze(e),i=t.length;a<i;a++)r[t[a]]=oe.css(e,t[a],!1,o);return r}return void 0!==n?oe.style(e,t,n):oe.css(e,t)},e,t,arguments.length>1)},show:function(){return E(this,!0)},hide:function(){return E(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ke(this)?oe(this).show():oe(this).hide()})}}),oe.Tween=I,I.prototype={constructor:I,init:function(e,t,n,o,i,r){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=o,this.unit=r||(oe.cssNumber[n]?"":"px")},cur:function(){var e=I.propHooks[this.prop];return e&&e.get?e.get(this):I.propHooks._default.get(this)},run:function(e){var t,n=I.propHooks[this.prop];return this.options.duration?this.pos=t=oe.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):I.propHooks._default.set(this),this}},I.prototype.init.prototype=I.prototype,I.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=oe.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){oe.fx.step[e.prop]?oe.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[oe.cssProps[e.prop]]||oe.cssHooks[e.prop])?oe.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},I.propHooks.scrollTop=I.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},oe.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},oe.fx=I.prototype.init,oe.fx.step={};var ft,dt,pt=/^(?:toggle|show|hide)$/,ht=new RegExp("^(?:([+-])=|)("+Te+")([a-z%]*)$","i"),mt=/queueHooks$/,gt=[H],yt={"*":[function(e,t){var n=this.createTween(e,t),o=n.cur(),i=ht.exec(t),r=i&&i[3]||(oe.cssNumber[e]?"":"px"),a=(oe.cssNumber[e]||"px"!==r&&+o)&&ht.exec(oe.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==r){r=r||a[3],i=i||[],a=+o||1;do{s=s||".5",a/=s,oe.style(n.elem,e,a+r)}while(s!==(s=n.cur()/o)&&1!==s&&--l)}return i&&(a=n.start=+a||+o||0,n.unit=r,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};oe.Animation=oe.extend(F,{tweener:function(e,t){oe.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,o=0,i=e.length;o<i;o++)n=e[o],yt[n]=yt[n]||[],yt[n].unshift(t)},prefilter:function(e,t){t?gt.unshift(e):gt.push(e)}}),oe.speed=function(e,t,n){var o=e&&"object"==typeof e?oe.extend({},e):{complete:n||!n&&t||oe.isFunction(e)&&e,duration:e,easing:n&&t||t&&!oe.isFunction(t)&&t};return o.duration=oe.fx.off?0:"number"==typeof o.duration?o.duration:o.duration in oe.fx.speeds?oe.fx.speeds[o.duration]:oe.fx.speeds._default,null!=o.queue&&!0!==o.queue||(o.queue="fx"),o.old=o.complete,o.complete=function(){oe.isFunction(o.old)&&o.old.call(this),o.queue&&oe.dequeue(this,o.queue)},o},oe.fn.extend({fadeTo:function(e,t,n,o){return this.filter(ke).css("opacity",0).show().end().animate({opacity:t},e,n,o)},animate:function(e,t,n,o){var i=oe.isEmptyObject(e),r=oe.speed(t,n,o),a=function(){var t=F(this,oe.extend({},e),r);(i||oe._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===r.queue?this.each(a):this.queue(r.queue,a)},stop:function(e,t,n){var o=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",r=oe.timers,a=oe._data(this);if(i)a[i]&&a[i].stop&&o(a[i]);else for(i in a)a[i]&&a[i].stop&&mt.test(i)&&o(a[i]);for(i=r.length;i--;)r[i].elem!==this||null!=e&&r[i].queue!==e||(r[i].anim.stop(n),t=!1,r.splice(i,1));!t&&n||oe.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=oe._data(this),o=n[e+"queue"],i=n[e+"queueHooks"],r=oe.timers,a=o?o.length:0;for(n.finish=!0,oe.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=r.length;t--;)r[t].elem===this&&r[t].queue===e&&(r[t].anim.stop(!0),r.splice(t,1));for(t=0;t<a;t++)o[t]&&o[t].finish&&o[t].finish.call(this);delete n.finish})}}),oe.each(["toggle","show","hide"],function(e,t){var n=oe.fn[t];oe.fn[t]=function(e,o,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(M(t,!0),e,o,i)}}),oe.each({slideDown:M("show"),slideUp:M("hide"),slideToggle:M("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){oe.fn[e]=function(e,n,o){return this.animate(t,e,n,o)}}),oe.timers=[],oe.fx.tick=function(){var e,t=oe.timers,n=0;for(ft=oe.now();n<t.length;n++)(e=t[n])()||t[n]!==e||t.splice(n--,1);t.length||oe.fx.stop(),ft=void 0},oe.fx.timer=function(e){oe.timers.push(e),e()?oe.fx.start():oe.timers.pop()},oe.fx.interval=13,oe.fx.start=function(){dt||(dt=setInterval(oe.fx.tick,oe.fx.interval))},oe.fx.stop=function(){clearInterval(dt),dt=null},oe.fx.speeds={slow:600,fast:200,_default:400},oe.fn.delay=function(e,t){return e=oe.fx?oe.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var o=setTimeout(t,e);n.stop=function(){clearTimeout(o)}})},function(){var e,t,n,o,i;t=pe.createElement("div"),t.setAttribute("className","t"),t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",o=t.getElementsByTagName("a")[0],n=pe.createElement("select"),i=n.appendChild(pe.createElement("option")),e=t.getElementsByTagName("input")[0],o.style.cssText="top:1px",ne.getSetAttribute="t"!==t.className,ne.style=/top/.test(o.getAttribute("style")),ne.hrefNormalized="/a"===o.getAttribute("href"),ne.checkOn=!!e.value,ne.optSelected=i.selected,ne.enctype=!!pe.createElement("form").enctype,n.disabled=!0,ne.optDisabled=!i.disabled,e=pe.createElement("input"),e.setAttribute("value",""),ne.input=""===e.getAttribute("value"),e.value="t",e.setAttribute("type","radio"),ne.radioValue="t"===e.value}();var vt=/\r/g;oe.fn.extend({val:function(e){var t,n,o,i=this[0];{if(arguments.length)return o=oe.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=o?e.call(this,n,oe(this).val()):e,null==i?i="":"number"==typeof i?i+="":oe.isArray(i)&&(i=oe.map(i,function(e){return null==e?"":e+""})),(t=oe.valHooks[this.type]||oe.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=oe.valHooks[i.type]||oe.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(vt,""):null==n?"":n)}}}),oe.extend({valHooks:{option:{get:function(e){var t=oe.find.attr(e,"value");return null!=t?t:oe.trim(oe.text(e))}},select:{get:function(e){for(var t,n,o=e.options,i=e.selectedIndex,r="select-one"===e.type||i<0,a=r?null:[],s=r?i+1:o.length,l=i<0?s:r?i:0;l<s;l++)if(n=o[l],(n.selected||l===i)&&(ne.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!oe.nodeName(n.parentNode,"optgroup"))){if(t=oe(n).val(),r)return t;a.push(t)}return a},set:function(e,t){for(var n,o,i=e.options,r=oe.makeArray(t),a=i.length;a--;)if(o=i[a],oe.inArray(oe.valHooks.option.get(o),r)>=0)try{o.selected=n=!0}catch(e){o.scrollHeight}else o.selected=!1;return n||(e.selectedIndex=-1),i}}}}),oe.each(["radio","checkbox"],function(){oe.valHooks[this]={set:function(e,t){if(oe.isArray(t))return e.checked=oe.inArray(oe(e).val(),t)>=0}},ne.checkOn||(oe.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var wt,bt,xt=oe.expr.attrHandle,_t=/^(?:checked|selected)$/i,Ct=ne.getSetAttribute,Tt=ne.input;oe.fn.extend({attr:function(e,t){return Ne(this,oe.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){oe.removeAttr(this,e)})}}),oe.extend({attr:function(e,t,n){var o,i,r=e.nodeType;if(e&&3!==r&&8!==r&&2!==r)return typeof e.getAttribute===xe?oe.prop(e,t,n):(1===r&&oe.isXMLDoc(e)||(t=t.toLowerCase(),o=oe.attrHooks[t]||(oe.expr.match.bool.test(t)?bt:wt)),void 0===n?o&&"get"in o&&null!==(i=o.get(e,t))?i:(i=oe.find.attr(e,t),null==i?void 0:i):null!==n?o&&"set"in o&&void 0!==(i=o.set(e,n,t))?i:(e.setAttribute(t,n+""),n):void oe.removeAttr(e,t))},removeAttr:function(e,t){var n,o,i=0,r=t&&t.match(ye);if(r&&1===e.nodeType)for(;n=r[i++];)o=oe.propFix[n]||n,oe.expr.match.bool.test(n)?Tt&&Ct||!_t.test(n)?e[o]=!1:e[oe.camelCase("default-"+n)]=e[o]=!1:oe.attr(e,n,""),e.removeAttribute(Ct?n:o)},attrHooks:{type:{set:function(e,t){if(!ne.radioValue&&"radio"===t&&oe.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),bt={set:function(e,t,n){return!1===t?oe.removeAttr(e,n):Tt&&Ct||!_t.test(n)?e.setAttribute(!Ct&&oe.propFix[n]||n,n):e[oe.camelCase("default-"+n)]=e[n]=!0,n}},oe.each(oe.expr.match.bool.source.match(/\w+/g),function(e,t){var n=xt[t]||oe.find.attr;xt[t]=Tt&&Ct||!_t.test(t)?function(e,t,o){var i,r;return o||(r=xt[t],xt[t]=i,i=null!=n(e,t,o)?t.toLowerCase():null,xt[t]=r),i}:function(e,t,n){if(!n)return e[oe.camelCase("default-"+t)]?t.toLowerCase():null}}),Tt&&Ct||(oe.attrHooks.value={set:function(e,t,n){if(!oe.nodeName(e,"input"))return wt&&wt.set(e,t,n);e.defaultValue=t}}),Ct||(wt={set:function(e,t,n){var o=e.getAttributeNode(n);if(o||e.setAttributeNode(o=e.ownerDocument.createAttribute(n)),o.value=t+="","value"===n||t===e.getAttribute(n))return t}},xt.id=xt.name=xt.coords=function(e,t,n){var o;if(!n)return(o=e.getAttributeNode(t))&&""!==o.value?o.value:null},oe.valHooks.button={get:function(e,t){var n=e.getAttributeNode(t);if(n&&n.specified)return n.value},set:wt.set},oe.attrHooks.contenteditable={set:function(e,t,n){wt.set(e,""!==t&&t,n)}},oe.each(["width","height"],function(e,t){oe.attrHooks[t]={set:function(e,n){if(""===n)return e.setAttribute(t,"auto"),n}}})),ne.style||(oe.attrHooks.style={get:function(e){return e.style.cssText||void 0},set:function(e,t){return e.style.cssText=t+""}});var St=/^(?:input|select|textarea|button|object)$/i,kt=/^(?:a|area)$/i;oe.fn.extend({prop:function(e,t){return Ne(this,oe.prop,e,t,arguments.length>1)},removeProp:function(e){return e=oe.propFix[e]||e,this.each(function(){try{this[e]=void 0,delete this[e]}catch(e){}})}}),oe.extend({propFix:{for:"htmlFor",class:"className"},prop:function(e,t,n){var o,i,r,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return r=1!==a||!oe.isXMLDoc(e),r&&(t=oe.propFix[t]||t,i=oe.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(o=i.set(e,n,t))?o:e[t]=n:i&&"get"in i&&null!==(o=i.get(e,t))?o:e[t]},propHooks:{
tabIndex:{get:function(e){var t=oe.find.attr(e,"tabindex");return t?parseInt(t,10):St.test(e.nodeName)||kt.test(e.nodeName)&&e.href?0:-1}}}}),ne.hrefNormalized||oe.each(["href","src"],function(e,t){oe.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),ne.optSelected||(oe.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),oe.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){oe.propFix[this.toLowerCase()]=this}),ne.enctype||(oe.propFix.enctype="encoding");var Nt=/[\t\r\n\f]/g;oe.fn.extend({addClass:function(e){var t,n,o,i,r,a,s=0,l=this.length,u="string"==typeof e&&e;if(oe.isFunction(e))return this.each(function(t){oe(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(ye)||[];s<l;s++)if(n=this[s],o=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Nt," "):" ")){for(r=0;i=t[r++];)o.indexOf(" "+i+" ")<0&&(o+=i+" ");a=oe.trim(o),n.className!==a&&(n.className=a)}return this},removeClass:function(e){var t,n,o,i,r,a,s=0,l=this.length,u=0===arguments.length||"string"==typeof e&&e;if(oe.isFunction(e))return this.each(function(t){oe(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(ye)||[];s<l;s++)if(n=this[s],o=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Nt," "):"")){for(r=0;i=t[r++];)for(;o.indexOf(" "+i+" ")>=0;)o=o.replace(" "+i+" "," ");a=e?oe.trim(o):"",n.className!==a&&(n.className=a)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):oe.isFunction(e)?this.each(function(n){oe(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n)for(var t,o=0,i=oe(this),r=e.match(ye)||[];t=r[o++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else n!==xe&&"boolean"!==n||(this.className&&oe._data(this,"__className__",this.className),this.className=this.className||!1===e?"":oe._data(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,o=this.length;n<o;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(Nt," ").indexOf(t)>=0)return!0;return!1}}),oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){oe.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),oe.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,o){return this.on(t,e,n,o)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Et=oe.now(),Pt=/\?/,At=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;oe.parseJSON=function(t){if(e.JSON&&e.JSON.parse)return e.JSON.parse(t+"");var n,o=null,i=oe.trim(t+"");return i&&!oe.trim(i.replace(At,function(e,t,i,r){return n&&t&&(o=0),0===o?e:(n=i||t,o+=!r-!i,"")}))?Function("return "+i)():oe.error("Invalid JSON: "+t)},oe.parseXML=function(t){var n,o;if(!t||"string"!=typeof t)return null;try{e.DOMParser?(o=new DOMParser,n=o.parseFromString(t,"text/xml")):(n=new ActiveXObject("Microsoft.XMLDOM"),n.async="false",n.loadXML(t))}catch(e){n=void 0}return n&&n.documentElement&&!n.getElementsByTagName("parsererror").length||oe.error("Invalid XML: "+t),n};var Dt,It,Lt=/#.*$/,Mt=/([?&])_=[^&]*/,jt=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ht=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Wt=/^(?:GET|HEAD)$/,Ft=/^\/\//,$t=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Rt={},Ot={},Bt="*/".concat("*");try{It=location.href}catch(e){It=pe.createElement("a"),It.href="",It=It.href}Dt=$t.exec(It.toLowerCase())||[],oe.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:It,type:"GET",isLocal:Ht.test(Dt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Bt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":oe.parseJSON,"text xml":oe.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?O(O(e,oe.ajaxSettings),t):O(oe.ajaxSettings,e)},ajaxPrefilter:$(Rt),ajaxTransport:$(Ot),ajax:function(e,t){function n(e,t,n,o){var i,c,y,v,b,_=t;2!==w&&(w=2,s&&clearTimeout(s),u=void 0,a=o||"",x.readyState=e>0?4:0,i=e>=200&&e<300||304===e,n&&(v=B(f,x,n)),v=q(f,v,x,i),i?(f.ifModified&&(b=x.getResponseHeader("Last-Modified"),b&&(oe.lastModified[r]=b),(b=x.getResponseHeader("etag"))&&(oe.etag[r]=b)),204===e||"HEAD"===f.type?_="nocontent":304===e?_="notmodified":(_=v.state,c=v.data,y=v.error,i=!y)):(y=_,!e&&_||(_="error",e<0&&(e=0))),x.status=e,x.statusText=(t||_)+"",i?h.resolveWith(d,[c,_,x]):h.rejectWith(d,[x,_,y]),x.statusCode(g),g=void 0,l&&p.trigger(i?"ajaxSuccess":"ajaxError",[x,f,i?c:y]),m.fireWith(d,[x,_]),l&&(p.trigger("ajaxComplete",[x,f]),--oe.active||oe.event.trigger("ajaxStop")))}"object"==typeof e&&(t=e,e=void 0),t=t||{};var o,i,r,a,s,l,u,c,f=oe.ajaxSetup({},t),d=f.context||f,p=f.context&&(d.nodeType||d.jquery)?oe(d):oe.event,h=oe.Deferred(),m=oe.Callbacks("once memory"),g=f.statusCode||{},y={},v={},w=0,b="canceled",x={readyState:0,getResponseHeader:function(e){var t;if(2===w){if(!c)for(c={};t=jt.exec(a);)c[t[1].toLowerCase()]=t[2];t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===w?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return w||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return w||(f.mimeType=e),this},statusCode:function(e){var t;if(e)if(w<2)for(t in e)g[t]=[g[t],e[t]];else x.always(e[x.status]);return this},abort:function(e){var t=e||b;return u&&u.abort(t),n(0,t),this}};if(h.promise(x).complete=m.add,x.success=x.done,x.error=x.fail,f.url=((e||f.url||It)+"").replace(Lt,"").replace(Ft,Dt[1]+"//"),f.type=t.method||t.type||f.method||f.type,f.dataTypes=oe.trim(f.dataType||"*").toLowerCase().match(ye)||[""],null==f.crossDomain&&(o=$t.exec(f.url.toLowerCase()),f.crossDomain=!(!o||o[1]===Dt[1]&&o[2]===Dt[2]&&(o[3]||("http:"===o[1]?"80":"443"))===(Dt[3]||("http:"===Dt[1]?"80":"443")))),f.data&&f.processData&&"string"!=typeof f.data&&(f.data=oe.param(f.data,f.traditional)),R(Rt,f,t,x),2===w)return x;l=oe.event&&f.global,l&&0==oe.active++&&oe.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!Wt.test(f.type),r=f.url,f.hasContent||(f.data&&(r=f.url+=(Pt.test(r)?"&":"?")+f.data,delete f.data),!1===f.cache&&(f.url=Mt.test(r)?r.replace(Mt,"$1_="+Et++):r+(Pt.test(r)?"&":"?")+"_="+Et++)),f.ifModified&&(oe.lastModified[r]&&x.setRequestHeader("If-Modified-Since",oe.lastModified[r]),oe.etag[r]&&x.setRequestHeader("If-None-Match",oe.etag[r])),(f.data&&f.hasContent&&!1!==f.contentType||t.contentType)&&x.setRequestHeader("Content-Type",f.contentType),x.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Bt+"; q=0.01":""):f.accepts["*"]);for(i in f.headers)x.setRequestHeader(i,f.headers[i]);if(f.beforeSend&&(!1===f.beforeSend.call(d,x,f)||2===w))return x.abort();b="abort";for(i in{success:1,error:1,complete:1})x[i](f[i]);if(u=R(Ot,f,t,x)){x.readyState=1,l&&p.trigger("ajaxSend",[x,f]),f.async&&f.timeout>0&&(s=setTimeout(function(){x.abort("timeout")},f.timeout));try{w=1,u.send(y,n)}catch(e){if(!(w<2))throw e;n(-1,e)}}else n(-1,"No Transport");return x},getJSON:function(e,t,n){return oe.get(e,t,n,"json")},getScript:function(e,t){return oe.get(e,void 0,t,"script")}}),oe.each(["get","post"],function(e,t){oe[t]=function(e,n,o,i){return oe.isFunction(n)&&(i=i||o,o=n,n=void 0),oe.ajax({url:e,type:t,dataType:i,data:n,success:o})}}),oe._evalUrl=function(e){return oe.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})},oe.fn.extend({wrapAll:function(e){if(oe.isFunction(e))return this.each(function(t){oe(this).wrapAll(e.call(this,t))});if(this[0]){var t=oe(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return oe.isFunction(e)?this.each(function(t){oe(this).wrapInner(e.call(this,t))}):this.each(function(){var t=oe(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=oe.isFunction(e);return this.each(function(n){oe(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){oe.nodeName(this,"body")||oe(this).replaceWith(this.childNodes)}).end()}}),oe.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0||!ne.reliableHiddenOffsets()&&"none"===(e.style&&e.style.display||oe.css(e,"display"))},oe.expr.filters.visible=function(e){return!oe.expr.filters.hidden(e)};var qt=/%20/g,Vt=/\[\]$/,zt=/\r?\n/g,Xt=/^(?:submit|button|image|reset|file)$/i,Ut=/^(?:input|select|textarea|keygen)/i;oe.param=function(e,t){var n,o=[],i=function(e,t){t=oe.isFunction(t)?t():null==t?"":t,o[o.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=oe.ajaxSettings&&oe.ajaxSettings.traditional),oe.isArray(e)||e.jquery&&!oe.isPlainObject(e))oe.each(e,function(){i(this.name,this.value)});else for(n in e)V(n,e[n],t,i);return o.join("&").replace(qt,"+")},oe.fn.extend({serialize:function(){return oe.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=oe.prop(this,"elements");return e?oe.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!oe(this).is(":disabled")&&Ut.test(this.nodeName)&&!Xt.test(e)&&(this.checked||!Ee.test(e))}).map(function(e,t){var n=oe(this).val();return null==n?null:oe.isArray(n)?oe.map(n,function(e){return{name:t.name,value:e.replace(zt,"\r\n")}}):{name:t.name,value:n.replace(zt,"\r\n")}}).get()}}),oe.ajaxSettings.xhr=void 0!==e.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&z()||X()}:z;var Gt=0,Yt={},Kt=oe.ajaxSettings.xhr();e.attachEvent&&e.attachEvent("onunload",function(){for(var e in Yt)Yt[e](void 0,!0)}),ne.cors=!!Kt&&"withCredentials"in Kt,Kt=ne.ajax=!!Kt,Kt&&oe.ajaxTransport(function(e){if(!e.crossDomain||ne.cors){var t;return{send:function(n,o){var i,r=e.xhr(),a=++Gt;if(r.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)r[i]=e.xhrFields[i];e.mimeType&&r.overrideMimeType&&r.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)void 0!==n[i]&&r.setRequestHeader(i,n[i]+"");r.send(e.hasContent&&e.data||null),t=function(n,i){var s,l,u;if(t&&(i||4===r.readyState))if(delete Yt[a],t=void 0,r.onreadystatechange=oe.noop,i)4!==r.readyState&&r.abort();else{u={},s=r.status,"string"==typeof r.responseText&&(u.text=r.responseText);try{l=r.statusText}catch(e){l=""}s||!e.isLocal||e.crossDomain?1223===s&&(s=204):s=u.text?200:404}u&&o(s,l,u,r.getAllResponseHeaders())},e.async?4===r.readyState?setTimeout(t):r.onreadystatechange=Yt[a]=t:t()},abort:function(){t&&t(void 0,!0)}}}}),oe.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return oe.globalEval(e),e}}}),oe.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),oe.ajaxTransport("script",function(e){if(e.crossDomain){var t,n=pe.head||oe("head")[0]||pe.documentElement;return{send:function(o,i){t=pe.createElement("script"),t.async=!0,e.scriptCharset&&(t.charset=e.scriptCharset),t.src=e.url,t.onload=t.onreadystatechange=function(e,n){(n||!t.readyState||/loaded|complete/.test(t.readyState))&&(t.onload=t.onreadystatechange=null,t.parentNode&&t.parentNode.removeChild(t),t=null,n||i(200,"success"))},n.insertBefore(t,n.firstChild)},abort:function(){t&&t.onload(void 0,!0)}}}});var Qt=[],Zt=/(=)\?(?=&|$)|\?\?/;oe.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Qt.pop()||oe.expando+"_"+Et++;return this[e]=!0,e}}),oe.ajaxPrefilter("json jsonp",function(t,n,o){var i,r,a,s=!1!==t.jsonp&&(Zt.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Zt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=oe.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Zt,"$1"+i):!1!==t.jsonp&&(t.url+=(Pt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||oe.error(i+" was not called"),a[0]},t.dataTypes[0]="json",r=e[i],e[i]=function(){a=arguments},o.always(function(){e[i]=r,t[i]&&(t.jsonpCallback=n.jsonpCallback,Qt.push(i)),a&&oe.isFunction(r)&&r(a[0]),a=r=void 0}),"script"}),oe.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||pe;var o=ce.exec(e),i=!n&&[];return o?[t.createElement(o[1])]:(o=oe.buildFragment([e],t,i),i&&i.length&&oe(i).remove(),oe.merge([],o.childNodes))};var Jt=oe.fn.load;oe.fn.load=function(e,t,n){if("string"!=typeof e&&Jt)return Jt.apply(this,arguments);var o,i,r,a=this,s=e.indexOf(" ");return s>=0&&(o=oe.trim(e.slice(s,e.length)),e=e.slice(0,s)),oe.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(r="POST"),a.length>0&&oe.ajax({url:e,type:r,dataType:"html",data:t}).done(function(e){i=arguments,a.html(o?oe("<div>").append(oe.parseHTML(e)).find(o):e)}).complete(n&&function(e,t){a.each(n,i||[e.responseText,t,e])}),this},oe.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){oe.fn[t]=function(e){return this.on(t,e)}}),oe.expr.filters.animated=function(e){return oe.grep(oe.timers,function(t){return e===t.elem}).length};var en=e.document.documentElement;oe.offset={setOffset:function(e,t,n){var o,i,r,a,s,l,u,c=oe.css(e,"position"),f=oe(e),d={};"static"===c&&(e.style.position="relative"),s=f.offset(),r=oe.css(e,"top"),l=oe.css(e,"left"),u=("absolute"===c||"fixed"===c)&&oe.inArray("auto",[r,l])>-1,u?(o=f.position(),a=o.top,i=o.left):(a=parseFloat(r)||0,i=parseFloat(l)||0),oe.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(d.top=t.top-s.top+a),null!=t.left&&(d.left=t.left-s.left+i),"using"in t?t.using.call(e,d):f.css(d)}},oe.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){oe.offset.setOffset(this,e,t)});var t,n,o={top:0,left:0},i=this[0],r=i&&i.ownerDocument;if(r)return t=r.documentElement,oe.contains(t,i)?(typeof i.getBoundingClientRect!==xe&&(o=i.getBoundingClientRect()),n=U(r),{top:o.top+(n.pageYOffset||t.scrollTop)-(t.clientTop||0),left:o.left+(n.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}):o},position:function(){if(this[0]){var e,t,n={top:0,left:0},o=this[0];return"fixed"===oe.css(o,"position")?t=o.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),oe.nodeName(e[0],"html")||(n=e.offset()),n.top+=oe.css(e[0],"borderTopWidth",!0),n.left+=oe.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-oe.css(o,"marginTop",!0),left:t.left-n.left-oe.css(o,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||en;e&&!oe.nodeName(e,"html")&&"static"===oe.css(e,"position");)e=e.offsetParent;return e||en})}}),oe.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n=/Y/.test(t);oe.fn[e]=function(o){return Ne(this,function(e,o,i){var r=U(e);if(void 0===i)return r?t in r?r[t]:r.document.documentElement[o]:e[o];r?r.scrollTo(n?oe(r).scrollLeft():i,n?i:oe(r).scrollTop()):e[o]=i},e,o,arguments.length,null)}}),oe.each(["top","left"],function(e,t){oe.cssHooks[t]=k(ne.pixelPosition,function(e,n){if(n)return n=Je(e,t),tt.test(n)?oe(e).position()[t]+"px":n})}),oe.each({Height:"height",Width:"width"},function(e,t){oe.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,o){oe.fn[o]=function(o,i){var r=arguments.length&&(n||"boolean"!=typeof o),a=n||(!0===o||!0===i?"margin":"border");return Ne(this,function(t,n,o){var i;return oe.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===o?oe.css(t,n,a):oe.style(t,n,o,a)},t,r?o:void 0,r,null)}})}),oe.fn.size=function(){return this.length},oe.fn.andSelf=oe.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return oe});var tn=e.jQuery,nn=e.$;return oe.noConflict=function(t){return e.$===oe&&(e.$=nn),t&&e.jQuery===oe&&(e.jQuery=tn),oe},typeof t===xe&&(e.jQuery=e.$=oe),oe});var deviceIsAndroid=navigator.userAgent.indexOf("Android")>0,deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),deviceIsIOS4=deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),deviceIsIOSWithBadTarget=deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),deviceIsBlackBerry10=navigator.userAgent.indexOf("BB10")>0;/*!
 * Currency tools
 *
 * Copyright (c) 2014 Caroline Schnapp (mllegeorgesand@gmail.com)
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
if(FastClick.prototype.needsClick=function(e){"use strict";switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled)return!0;break;case"input":if(deviceIsIOS&&"file"===e.type||e.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(e.className)},FastClick.prototype.needsFocus=function(e){"use strict";switch(e.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!deviceIsAndroid;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}},FastClick.prototype.sendClick=function(e,t){"use strict";var n,o;document.activeElement&&document.activeElement!==e&&document.activeElement.blur(),o=t.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(e),!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,e.dispatchEvent(n)},FastClick.prototype.determineEventType=function(e){"use strict";return deviceIsAndroid&&"select"===e.tagName.toLowerCase()?"mousedown":"click"},FastClick.prototype.focus=function(e){"use strict";var t;deviceIsIOS&&e.setSelectionRange&&0!==e.type.indexOf("date")&&"time"!==e.type?(t=e.value.length,e.setSelectionRange(t,t)):e.focus()},FastClick.prototype.updateScrollParent=function(e){"use strict";var t,n;if(!(t=e.fastClickScrollParent)||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n,e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}t&&(t.fastClickLastScrollTop=t.scrollTop)},FastClick.prototype.getTargetElementFromEventTarget=function(e){"use strict";return e.nodeType===Node.TEXT_NODE?e.parentNode:e},FastClick.prototype.onTouchStart=function(e){"use strict";var t,n,o;if(e.targetTouches.length>1)return!0;if(t=this.getTargetElementFromEventTarget(e.target),n=e.targetTouches[0],deviceIsIOS){if(o=window.getSelection(),o.rangeCount&&!o.isCollapsed)return!0;if(!deviceIsIOS4){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return e.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(t)}}return this.trackingClick=!0,this.trackingClickStart=e.timeStamp,this.targetElement=t,this.touchStartX=n.pageX,this.touchStartY=n.pageY,e.timeStamp-this.lastClickTime<this.tapDelay&&e.preventDefault(),!0},FastClick.prototype.touchHasMoved=function(e){"use strict";var t=e.changedTouches[0],n=this.touchBoundary;return Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n},FastClick.prototype.onTouchMove=function(e){"use strict";return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e))&&(this.trackingClick=!1,this.targetElement=null),!0)},FastClick.prototype.findControl=function(e){"use strict";return void 0!==e.control?e.control:e.htmlFor?document.getElementById(e.htmlFor):e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},FastClick.prototype.onTouchEnd=function(e){"use strict";var t,n,o,i,r,a=this.targetElement;if(!this.trackingClick)return!0;if(e.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(this.cancelNextClick=!1,this.lastClickTime=e.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,deviceIsIOSWithBadTarget&&(r=e.changedTouches[0],a=document.elementFromPoint(r.pageX-window.pageXOffset,r.pageY-window.pageYOffset)||a,a.fastClickScrollParent=this.targetElement.fastClickScrollParent),"label"===(o=a.tagName.toLowerCase())){if(t=this.findControl(a)){if(this.focus(a),deviceIsAndroid)return!1;a=t}}else if(this.needsFocus(a))return e.timeStamp-n>100||deviceIsIOS&&window.top!==window&&"input"===o?(this.targetElement=null,!1):(this.focus(a),this.sendClick(a,e),deviceIsIOS&&"select"===o||(this.targetElement=null,e.preventDefault()),!1);return!(!deviceIsIOS||deviceIsIOS4||!(i=a.fastClickScrollParent)||i.fastClickLastScrollTop===i.scrollTop)||(this.needsClick(a)||(e.preventDefault(),this.sendClick(a,e)),!1)},FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=!1,this.targetElement=null},FastClick.prototype.onMouse=function(e){"use strict";return!this.targetElement||(!!e.forwardedTouchEvent||(!e.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(e.stopImmediatePropagation?e.stopImmediatePropagation():e.propagationStopped=!0,e.stopPropagation(),e.preventDefault(),!1))))},FastClick.prototype.onClick=function(e){"use strict";var t;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===e.target.type&&0===e.detail||(t=this.onMouse(e),t||(this.targetElement=null),t)},FastClick.prototype.destroy=function(){"use strict";var e=this.layer;deviceIsAndroid&&(e.removeEventListener("mouseover",this.onMouse,!0),e.removeEventListener("mousedown",this.onMouse,!0),e.removeEventListener("mouseup",this.onMouse,!0)),e.removeEventListener("click",this.onClick,!0),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1),e.removeEventListener("touchcancel",this.onTouchCancel,!1)},FastClick.notNeeded=function(e){"use strict";var t,n,o;if(void 0===window.ontouchstart)return!0;if(n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!deviceIsAndroid)return!0;if(t=document.querySelector("meta[name=viewport]")){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(n>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(deviceIsBlackBerry10&&(o=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),o[1]>=10&&o[2]>=3&&(t=document.querySelector("meta[name=viewport]")))){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===e.style.msTouchAction},FastClick.attach=function(e,t){"use strict";return new FastClick(e,t)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){"use strict";return FastClick}):"undefined"!=typeof module&&module.exports?(module.exports=FastClick.attach,module.exports.FastClick=FastClick):window.FastClick=FastClick,/*!
 *  jQuery OwlCarousel v1.3.2
 *
 *  Copyright (c) 2013 Bartosz Wojciechowski
 *  http://www.owlgraphic.com/owlcarousel/
 *
 *  Licensed under MIT
 *
 */
"function"!=typeof Object.create&&(Object.create=function(e){function t(){}return t.prototype=e,new t}),function(e,t,n){var o={init:function(t,n){var o=this;o.$elem=e(n),o.options=e.extend({},e.fn.owlCarousel.options,o.$elem.data(),t),o.userOptions=t,o.loadContent()},loadContent:function(){function t(e){var t,n="";if("function"==typeof o.options.jsonSuccess)o.options.jsonSuccess.apply(this,[e]);else{for(t in e.owl)e.owl.hasOwnProperty(t)&&(n+=e.owl[t].item);o.$elem.html(n)}o.logIn()}var n,o=this;"function"==typeof o.options.beforeInit&&o.options.beforeInit.apply(this,[o.$elem]),"string"==typeof o.options.jsonPath?(n=o.options.jsonPath,e.getJSON(n,t)):o.logIn()},logIn:function(){var e=this;e.$elem.data("owl-originalStyles",e.$elem.attr("style")).data("owl-originalClasses",e.$elem.attr("class")),e.$elem.css({opacity:0}),e.orignalItems=e.options.items,e.checkBrowser(),e.wrapperWidth=0,e.checkVisible=null,e.setVars()},setVars:function(){var e=this;if(0===e.$elem.children().length)return!1;e.baseClass(),e.eventTypes(),e.$userItems=e.$elem.children(),e.itemsAmount=e.$userItems.length,e.wrapItems(),e.$owlItems=e.$elem.find(".owl-item"),e.$owlWrapper=e.$elem.find(".owl-wrapper"),e.playDirection="next",e.prevItem=0,e.prevArr=[0],e.currentItem=0,e.customEvents(),e.onStartup()},onStartup:function(){var e=this;e.updateItems(),e.calculateAll(),e.buildControls(),e.updateControls(),e.response(),e.moveEvents(),e.stopOnHover(),e.owlStatus(),!1!==e.options.transitionStyle&&e.transitionTypes(e.options.transitionStyle),!0===e.options.autoPlay&&(e.options.autoPlay=5e3),e.play(),e.$elem.find(".owl-wrapper").css("display","block"),e.$elem.is(":visible")?e.$elem.css("opacity",1):e.watchVisibility(),e.onstartup=!1,e.eachMoveUpdate(),"function"==typeof e.options.afterInit&&e.options.afterInit.apply(this,[e.$elem])},eachMoveUpdate:function(){var e=this;!0===e.options.lazyLoad&&e.lazyLoad(),!0===e.options.autoHeight&&e.autoHeight(),e.onVisibleItems(),"function"==typeof e.options.afterAction&&e.options.afterAction.apply(this,[e.$elem])},updateVars:function(){var e=this;"function"==typeof e.options.beforeUpdate&&e.options.beforeUpdate.apply(this,[e.$elem]),e.watchVisibility(),e.updateItems(),e.calculateAll(),e.updatePosition(),e.updateControls(),e.eachMoveUpdate(),"function"==typeof e.options.afterUpdate&&e.options.afterUpdate.apply(this,[e.$elem])},reload:function(){var e=this;t.setTimeout(function(){e.updateVars()},0)},watchVisibility:function(){var e=this;if(!1!==e.$elem.is(":visible"))return!1;e.$elem.css({opacity:0}),t.clearInterval(e.autoPlayInterval),t.clearInterval(e.checkVisible),e.checkVisible=t.setInterval(function(){e.$elem.is(":visible")&&(e.reload(),e.$elem.animate({opacity:1},200),t.clearInterval(e.checkVisible))},500)},wrapItems:function(){var e=this;e.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'),e.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'),e.wrapperOuter=e.$elem.find(".owl-wrapper-outer"),e.$elem.css("display","block")},baseClass:function(){var e=this,t=e.$elem.hasClass(e.options.baseClass),n=e.$elem.hasClass(e.options.theme);t||e.$elem.addClass(e.options.baseClass),n||e.$elem.addClass(e.options.theme)},updateItems:function(){var t,n,o=this;if(!1===o.options.responsive)return!1;if(!0===o.options.singleItem)return o.options.items=o.orignalItems=1,o.options.itemsCustom=!1,o.options.itemsDesktop=!1,o.options.itemsDesktopSmall=!1,o.options.itemsTablet=!1,o.options.itemsTabletSmall=!1,o.options.itemsMobile=!1,!1;if(t=e(o.options.responsiveBaseWidth).width(),t>(o.options.itemsDesktop[0]||o.orignalItems)&&(o.options.items=o.orignalItems),!1!==o.options.itemsCustom)for(o.options.itemsCustom.sort(function(e,t){return e[0]-t[0]}),n=0;n<o.options.itemsCustom.length;n+=1)o.options.itemsCustom[n][0]<=t&&(o.options.items=o.options.itemsCustom[n][1]);else t<=o.options.itemsDesktop[0]&&!1!==o.options.itemsDesktop&&(o.options.items=o.options.itemsDesktop[1]),t<=o.options.itemsDesktopSmall[0]&&!1!==o.options.itemsDesktopSmall&&(o.options.items=o.options.itemsDesktopSmall[1]),t<=o.options.itemsTablet[0]&&!1!==o.options.itemsTablet&&(o.options.items=o.options.itemsTablet[1]),t<=o.options.itemsTabletSmall[0]&&!1!==o.options.itemsTabletSmall&&(o.options.items=o.options.itemsTabletSmall[1]),t<=o.options.itemsMobile[0]&&!1!==o.options.itemsMobile&&(o.options.items=o.options.itemsMobile[1]);o.options.items>o.itemsAmount&&!0===o.options.itemsScaleUp&&(o.options.items=o.itemsAmount)},response:function(){var n,o,i=this;if(!0!==i.options.responsive)return!1;o=e(t).width(),i.resizer=function(){e(t).width()!==o&&(!1!==i.options.autoPlay&&t.clearInterval(i.autoPlayInterval),t.clearTimeout(n),n=t.setTimeout(function(){o=e(t).width(),i.updateVars()},i.options.responsiveRefreshRate))},e(t).resize(i.resizer)},updatePosition:function(){var e=this;e.jumpTo(e.currentItem),!1!==e.options.autoPlay&&e.checkAp()},appendItemsSizes:function(){var t=this,n=0,o=t.itemsAmount-t.options.items;t.$owlItems.each(function(i){var r=e(this);r.css({width:t.itemWidth}).data("owl-item",Number(i)),i%t.options.items!=0&&i!==o||i>o||(n+=1),r.data("owl-roundPages",n)})},appendWrapperSizes:function(){var e=this,t=e.$owlItems.length*e.itemWidth;e.$owlWrapper.css({width:2*t,left:0}),e.appendItemsSizes()},calculateAll:function(){var e=this;e.calculateWidth(),e.appendWrapperSizes(),e.loops(),e.max()},calculateWidth:function(){var e=this;e.itemWidth=Math.round(e.$elem.width()/e.options.items)},max:function(){var e=this,t=-1*(e.itemsAmount*e.itemWidth-e.options.items*e.itemWidth);return e.options.items>e.itemsAmount?(e.maximumItem=0,t=0,e.maximumPixels=0):(e.maximumItem=e.itemsAmount-e.options.items,e.maximumPixels=t),t},min:function(){return 0},loops:function(){var t,n,o,i=this,r=0,a=0;for(i.positionsInArray=[0],i.pagesInArray=[],t=0;t<i.itemsAmount;t+=1)a+=i.itemWidth,i.positionsInArray.push(-a),!0===i.options.scrollPerPage&&(n=e(i.$owlItems[t]),(o=n.data("owl-roundPages"))!==r&&(i.pagesInArray[r]=i.positionsInArray[t],r=o))},buildControls:function(){var t=this;!0!==t.options.navigation&&!0!==t.options.pagination||(t.owlControls=e('<div class="owl-controls"/>').toggleClass("clickable",!t.browser.isTouch).appendTo(t.$elem)),!0===t.options.pagination&&t.buildPagination(),!0===t.options.navigation&&t.buildButtons()},buildButtons:function(){var t=this,n=e('<div class="owl-buttons"/>');t.owlControls.append(n),t.buttonPrev=e("<div/>",{class:"owl-prev",html:t.options.navigationText[0]||""}),t.buttonNext=e("<div/>",{class:"owl-next",html:t.options.navigationText[1]||""}),n.append(t.buttonPrev).append(t.buttonNext),n.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(e){e.preventDefault()}),n.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(n){n.preventDefault(),e(this).hasClass("owl-next")?t.next():t.prev()})},buildPagination:function(){var t=this;t.paginationWrapper=e('<div class="owl-pagination"/>'),t.owlControls.append(t.paginationWrapper),t.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(n){n.preventDefault(),Number(e(this).data("owl-page"))!==t.currentItem&&t.goTo(Number(e(this).data("owl-page")),!0)})},updatePagination:function(){var t,n,o,i,r,a,s=this;if(!1===s.options.pagination)return!1;for(s.paginationWrapper.html(""),t=0,n=s.itemsAmount-s.itemsAmount%s.options.items,i=0;i<s.itemsAmount;i+=1)i%s.options.items==0&&(t+=1,n===i&&(o=s.itemsAmount-s.options.items),r=e("<div/>",{class:"owl-page"}),a=e("<span></span>",{text:!0===s.options.paginationNumbers?t:"",class:!0===s.options.paginationNumbers?"owl-numbers":""}),r.append(a),r.data("owl-page",n===i?o:i),r.data("owl-roundPages",t),s.paginationWrapper.append(r));s.checkPagination()},checkPagination:function(){var t=this;if(!1===t.options.pagination)return!1;t.paginationWrapper.find(".owl-page").each(function(){e(this).data("owl-roundPages")===e(t.$owlItems[t.currentItem]).data("owl-roundPages")&&(t.paginationWrapper.find(".owl-page").removeClass("active"),e(this).addClass("active"))})},checkNavigation:function(){var e=this;if(!1===e.options.navigation)return!1;!1===e.options.rewindNav&&(0===e.currentItem&&0===e.maximumItem?(e.buttonPrev.addClass("disabled"),e.buttonNext.addClass("disabled")):0===e.currentItem&&0!==e.maximumItem?(e.buttonPrev.addClass("disabled"),e.buttonNext.removeClass("disabled")):e.currentItem===e.maximumItem?(e.buttonPrev.removeClass("disabled"),e.buttonNext.addClass("disabled")):0!==e.currentItem&&e.currentItem!==e.maximumItem&&(e.buttonPrev.removeClass("disabled"),e.buttonNext.removeClass("disabled")))},updateControls:function(){var e=this;e.updatePagination(),e.checkNavigation(),e.owlControls&&(e.options.items>=e.itemsAmount?e.owlControls.hide():e.owlControls.show())},destroyControls:function(){var e=this;e.owlControls&&e.owlControls.remove()},next:function(e){var t=this;if(t.isTransition)return!1;if(t.currentItem+=!0===t.options.scrollPerPage?t.options.items:1,t.currentItem>t.maximumItem+(!0===t.options.scrollPerPage?t.options.items-1:0)){if(!0!==t.options.rewindNav)return t.currentItem=t.maximumItem,!1;t.currentItem=0,e="rewind"}t.goTo(t.currentItem,e)},prev:function(e){var t=this;if(t.isTransition)return!1;if(!0===t.options.scrollPerPage&&t.currentItem>0&&t.currentItem<t.options.items?t.currentItem=0:t.currentItem-=!0===t.options.scrollPerPage?t.options.items:1,t.currentItem<0){if(!0!==t.options.rewindNav)return t.currentItem=0,!1;t.currentItem=t.maximumItem,e="rewind"}t.goTo(t.currentItem,e)},goTo:function(e,n,o){var i,r=this;return!r.isTransition&&("function"==typeof r.options.beforeMove&&r.options.beforeMove.apply(this,[r.$elem]),e>=r.maximumItem?e=r.maximumItem:e<=0&&(e=0),r.currentItem=r.owl.currentItem=e,!1!==r.options.transitionStyle&&"drag"!==o&&1===r.options.items&&!0===r.browser.support3d?(r.swapSpeed(0),!0===r.browser.support3d?r.transition3d(r.positionsInArray[e]):r.css2slide(r.positionsInArray[e],1),r.afterGo(),r.singleItemTransition(),!1):(i=r.positionsInArray[e],!0===r.browser.support3d?(r.isCss3Finish=!1,!0===n?(r.swapSpeed("paginationSpeed"),t.setTimeout(function(){r.isCss3Finish=!0},r.options.paginationSpeed)):"rewind"===n?(r.swapSpeed(r.options.rewindSpeed),t.setTimeout(function(){r.isCss3Finish=!0},r.options.rewindSpeed)):(r.swapSpeed("slideSpeed"),t.setTimeout(function(){r.isCss3Finish=!0},r.options.slideSpeed)),r.transition3d(i)):!0===n?r.css2slide(i,r.options.paginationSpeed):"rewind"===n?r.css2slide(i,r.options.rewindSpeed):r.css2slide(i,r.options.slideSpeed),void r.afterGo()))},jumpTo:function(e){var t=this;"function"==typeof t.options.beforeMove&&t.options.beforeMove.apply(this,[t.$elem]),e>=t.maximumItem||-1===e?e=t.maximumItem:e<=0&&(e=0),t.swapSpeed(0),!0===t.browser.support3d?t.transition3d(t.positionsInArray[e]):t.css2slide(t.positionsInArray[e],1),t.currentItem=t.owl.currentItem=e,t.afterGo()},afterGo:function(){var e=this;e.prevArr.push(e.currentItem),e.prevItem=e.owl.prevItem=e.prevArr[e.prevArr.length-2],e.prevArr.shift(0),e.prevItem!==e.currentItem&&(e.checkPagination(),e.checkNavigation(),e.eachMoveUpdate(),!1!==e.options.autoPlay&&e.checkAp()),"function"==typeof e.options.afterMove&&e.prevItem!==e.currentItem&&e.options.afterMove.apply(this,[e.$elem])},stop:function(){var e=this;e.apStatus="stop",t.clearInterval(e.autoPlayInterval)},checkAp:function(){var e=this;"stop"!==e.apStatus&&e.play()},play:function(){var e=this;if(e.apStatus="play",!1===e.options.autoPlay)return!1;t.clearInterval(e.autoPlayInterval),e.autoPlayInterval=t.setInterval(function(){e.next(!0)},e.options.autoPlay)},swapSpeed:function(e){var t=this;"slideSpeed"===e?t.$owlWrapper.css(t.addCssSpeed(t.options.slideSpeed)):"paginationSpeed"===e?t.$owlWrapper.css(t.addCssSpeed(t.options.paginationSpeed)):"string"!=typeof e&&t.$owlWrapper.css(t.addCssSpeed(e))},addCssSpeed:function(e){return{"-webkit-transition":"all "+e+"ms ease","-moz-transition":"all "+e+"ms ease","-o-transition":"all "+e+"ms ease",transition:"all "+e+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(e){return{"-webkit-transform":"translate3d("+e+"px, 0px, 0px)","-moz-transform":"translate3d("+e+"px, 0px, 0px)","-o-transform":"translate3d("+e+"px, 0px, 0px)","-ms-transform":"translate3d("+e+"px, 0px, 0px)",transform:"translate3d("+e+"px, 0px,0px)"}},transition3d:function(e){var t=this;t.$owlWrapper.css(t.doTranslate(e))},css2move:function(e){this.$owlWrapper.css({left:e})},css2slide:function(e,t){var n=this;n.isCssFinish=!1,n.$owlWrapper.stop(!0,!0).animate({left:e},{duration:t||n.options.slideSpeed,complete:function(){n.isCssFinish=!0}})},checkBrowser:function(){var e,o,i,r,a=this,s="translate3d(0px, 0px, 0px)",l=n.createElement("div");l.style.cssText="  -moz-transform:"+s+"; -ms-transform:"+s+"; -o-transform:"+s+"; -webkit-transform:"+s+"; transform:"+s,e=/translate3d\(0px, 0px, 0px\)/g,o=l.style.cssText.match(e),i=null!==o&&1===o.length,r="ontouchstart"in t||t.navigator.msMaxTouchPoints,a.browser={support3d:i,isTouch:r}},moveEvents:function(){var e=this;!1===e.options.mouseDrag&&!1===e.options.touchDrag||(e.gestures(),e.disabledEvents())},eventTypes:function(){var e=this,t=["s","e","x"];e.ev_types={},!0===e.options.mouseDrag&&!0===e.options.touchDrag?t=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:!1===e.options.mouseDrag&&!0===e.options.touchDrag?t=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:!0===e.options.mouseDrag&&!1===e.options.touchDrag&&(t=["mousedown.owl","mousemove.owl","mouseup.owl"]),e.ev_types.start=t[0],e.ev_types.move=t[1],e.ev_types.end=t[2]},disabledEvents:function(){var t=this;t.$elem.on("dragstart.owl",function(e){e.preventDefault()}),t.$elem.on("mousedown.disableTextSelect",function(t){return e(t.target).is("input, textarea, select, option")})},gestures:function(){function o(e){if(void 0!==e.touches)return{x:e.touches[0].pageX,y:e.touches[0].pageY};if(void 0===e.touches){if(void 0!==e.pageX)return{x:e.pageX,y:e.pageY};if(void 0===e.pageX)return{x:e.clientX,y:e.clientY}}}function i(t){"on"===t?(e(n).on(l.ev_types.move,a),e(n).on(l.ev_types.end,s)):"off"===t&&(e(n).off(l.ev_types.move),e(n).off(l.ev_types.end))}function r(n){var r,a=n.originalEvent||n||t.event;if(3===a.which)return!1;if(!(l.itemsAmount<=l.options.items)){if(!1===l.isCssFinish&&!l.options.dragBeforeAnimFinish)return!1;if(!1===l.isCss3Finish&&!l.options.dragBeforeAnimFinish)return!1;!1!==l.options.autoPlay&&t.clearInterval(l.autoPlayInterval),!0===l.browser.isTouch||l.$owlWrapper.hasClass("grabbing")||l.$owlWrapper.addClass("grabbing"),l.newPosX=0,l.newRelativeX=0,e(this).css(l.removeTransition()),r=e(this).position(),u.relativePos=r.left,u.offsetX=o(a).x-r.left,u.offsetY=o(a).y-r.top,i("on"),u.sliding=!1,u.targetElement=a.target||a.srcElement}}function a(i){var r,a,s=i.originalEvent||i||t.event;l.newPosX=o(s).x-u.offsetX,l.newPosY=o(s).y-u.offsetY,l.newRelativeX=l.newPosX-u.relativePos,"function"==typeof l.options.startDragging&&!0!==u.dragging&&0!==l.newRelativeX&&(u.dragging=!0,l.options.startDragging.apply(l,[l.$elem])),(l.newRelativeX>8||l.newRelativeX<-8)&&!0===l.browser.isTouch&&(void 0!==s.preventDefault?s.preventDefault():s.returnValue=!1,u.sliding=!0),(l.newPosY>10||l.newPosY<-10)&&!1===u.sliding&&e(n).off("touchmove.owl"),r=function(){return l.newRelativeX/5},a=function(){return l.maximumPixels+l.newRelativeX/5},l.newPosX=Math.max(Math.min(l.newPosX,r()),a()),!0===l.browser.support3d?l.transition3d(l.newPosX):l.css2move(l.newPosX)}function s(n){var o,r,a,s=n.originalEvent||n||t.event;s.target=s.target||s.srcElement,u.dragging=!1,!0!==l.browser.isTouch&&l.$owlWrapper.removeClass("grabbing"),l.newRelativeX<0?l.dragDirection=l.owl.dragDirection="left":l.dragDirection=l.owl.dragDirection="right",0!==l.newRelativeX&&(o=l.getNewPosition(),l.goTo(o,!1,"drag"),u.targetElement===s.target&&!0!==l.browser.isTouch&&(e(s.target).on("click.disable",function(t){t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault(),e(t.target).off("click.disable")}),r=e._data(s.target,"events").click,a=r.pop(),r.splice(0,0,a))),i("off")}var l=this,u={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};l.isCssFinish=!0,l.$elem.on(l.ev_types.start,".owl-wrapper",r)},getNewPosition:function(){var e=this,t=e.closestItem();return t>e.maximumItem?(e.currentItem=e.maximumItem,t=e.maximumItem):e.newPosX>=0&&(t=0,e.currentItem=0),t},closestItem:function(){var t=this,n=!0===t.options.scrollPerPage?t.pagesInArray:t.positionsInArray,o=t.newPosX,i=null;return e.each(n,function(r,a){o-t.itemWidth/20>n[r+1]&&o-t.itemWidth/20<a&&"left"===t.moveDirection()?(i=a,!0===t.options.scrollPerPage?t.currentItem=e.inArray(i,t.positionsInArray):t.currentItem=r):o+t.itemWidth/20<a&&o+t.itemWidth/20>(n[r+1]||n[r]-t.itemWidth)&&"right"===t.moveDirection()&&(!0===t.options.scrollPerPage?(i=n[r+1]||n[n.length-1],t.currentItem=e.inArray(i,t.positionsInArray)):(i=n[r+1],t.currentItem=r+1))}),t.currentItem},moveDirection:function(){var e,t=this;return t.newRelativeX<0?(e="right",t.playDirection="next"):(e="left",t.playDirection="prev"),e},customEvents:function(){var e=this;e.$elem.on("owl.next",function(){e.next()}),e.$elem.on("owl.prev",function(){e.prev()}),e.$elem.on("owl.play",function(t,n){e.options.autoPlay=n,e.play(),e.hoverStatus="play"}),e.$elem.on("owl.stop",function(){e.stop(),e.hoverStatus="stop"}),e.$elem.on("owl.goTo",function(t,n){e.goTo(n)}),e.$elem.on("owl.jumpTo",function(t,n){e.jumpTo(n)})},stopOnHover:function(){var e=this;!0===e.options.stopOnHover&&!0!==e.browser.isTouch&&!1!==e.options.autoPlay&&(e.$elem.on("mouseover",function(){e.stop()}),e.$elem.on("mouseout",function(){"stop"!==e.hoverStatus&&e.play()}))},lazyLoad:function(){var t,n,o,i,r=this;if(!1===r.options.lazyLoad)return!1;for(t=0;t<r.itemsAmount;t+=1)n=e(r.$owlItems[t]),"loaded"!==n.data("owl-loaded")&&(o=n.data("owl-item"),i=n.find(".lazyOwl"),"string"==typeof i.data("src")?(void 0===n.data("owl-loaded")&&(i.hide(),n.addClass("loading").data("owl-loaded","checked")),(!0!==r.options.lazyFollow||o>=r.currentItem)&&o<r.currentItem+r.options.items&&i.length&&r.lazyPreload(n,i)):n.data("owl-loaded","loaded"))},lazyPreload:function(e,n){function o(){e.data("owl-loaded","loaded").removeClass("loading"),n.removeAttr("data-src"),"fade"===a.options.lazyEffect?n.fadeIn(400):n.show(),"function"==typeof a.options.afterLazyLoad&&a.options.afterLazyLoad.apply(this,[a.$elem])}function i(){s+=1,a.completeImg(n.get(0))||!0===r?o():s<=100?t.setTimeout(i,100):o()}var r,a=this,s=0;"DIV"===n.prop("tagName")?(n.css("background-image","url("+n.data("src")+")"),r=!0):n[0].src=n.data("src"),i()},autoHeight:function(){function n(){var n=e(r.$owlItems[r.currentItem]).height();r.wrapperOuter.css("height",n+"px"),r.wrapperOuter.hasClass("autoHeight")||t.setTimeout(function(){r.wrapperOuter.addClass("autoHeight")},0)}function o(){i+=1,r.completeImg(a.get(0))?n():i<=100?t.setTimeout(o,100):r.wrapperOuter.css("height","")}var i,r=this,a=e(r.$owlItems[r.currentItem]).find("img");void 0!==a.get(0)?(i=0,o()):n()},completeImg:function(e){return!!e.complete&&("undefined"===typeof e.naturalWidth||0!==e.naturalWidth)},onVisibleItems:function(){var t,n=this;for(!0===n.options.addClassActive&&n.$owlItems.removeClass("active"),n.visibleItems=[],t=n.currentItem;t<n.currentItem+n.options.items;t+=1)n.visibleItems.push(t),!0===n.options.addClassActive&&e(n.$owlItems[t]).addClass("active");n.owl.visibleItems=n.visibleItems},transitionTypes:function(e){var t=this;t.outClass="owl-"+e+"-out",t.inClass="owl-"+e+"-in"},singleItemTransition:function(){var e=this,t=e.outClass,n=e.inClass,o=e.$owlItems.eq(e.currentItem),i=e.$owlItems.eq(e.prevItem),r=Math.abs(e.positionsInArray[e.currentItem])+e.positionsInArray[e.prevItem],a=Math.abs(e.positionsInArray[e.currentItem])+e.itemWidth/2,s="webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";e.isTransition=!0,e.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":a+"px","-moz-perspective-origin":a+"px","perspective-origin":a+"px"}),i.css(function(e){return{position:"relative",left:e+"px"}}(r)).addClass(t).on(s,function(){e.endPrev=!0,i.off(s),e.clearTransStyle(i,t)}),o.addClass(n).on(s,function(){e.endCurrent=!0,o.off(s),e.clearTransStyle(o,n)})},clearTransStyle:function(e,t){var n=this;e.css({position:"",left:""}).removeClass(t),n.endPrev&&n.endCurrent&&(n.$owlWrapper.removeClass("owl-origin"),n.endPrev=!1,n.endCurrent=!1,n.isTransition=!1)},owlStatus:function(){var e=this;e.owl={userOptions:e.userOptions,baseElement:e.$elem,userItems:e.$userItems,owlItems:e.$owlItems,currentItem:e.currentItem,prevItem:e.prevItem,visibleItems:e.visibleItems,isTouch:e.browser.isTouch,browser:e.browser,dragDirection:e.dragDirection}},clearEvents:function(){var o=this;o.$elem.off(".owl owl mousedown.disableTextSelect"),e(n).off(".owl owl"),e(t).off("resize",o.resizer)},unWrap:function(){var e=this;0!==e.$elem.children().length&&(e.$owlWrapper.unwrap(),e.$userItems.unwrap().unwrap(),e.owlControls&&e.owlControls.remove()),e.clearEvents(),e.$elem.attr("style",e.$elem.data("owl-originalStyles")||"").attr("class",e.$elem.data("owl-originalClasses"))},destroy:function(){var e=this;e.stop(),t.clearInterval(e.checkVisible),e.unWrap(),e.$elem.removeData()},reinit:function(t){var n=this,o=e.extend({},n.userOptions,t);n.unWrap(),n.init(o,n.$elem)},addItem:function(e,t){var n,o=this;return!!e&&(0===o.$elem.children().length?(o.$elem.append(e),o.setVars(),!1):(o.unWrap(),n=void 0===t||-1===t?-1:t,n>=o.$userItems.length||-1===n?o.$userItems.eq(-1).after(e):o.$userItems.eq(n).before(e),void o.setVars()))},removeItem:function(e){var t,n=this;if(0===n.$elem.children().length)return!1;t=void 0===e||-1===e?-1:e,n.unWrap(),n.$userItems.eq(t).remove(),n.setVars()}};e.fn.owlCarousel=function(t){return this.each(function(){if(!0===e(this).data("owl-init"))return!1;e(this).data("owl-init",!0);var n=Object.create(o);n.init(t,this),e.data(this,"owlCarousel",n)})},e.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1e3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:t,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}}(jQuery,window,document),/*!
 * Spin.js
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 */
function(e,t){"object"==typeof exports?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Spinner=t()}(this,function(){"use strict";function e(e,t){var n,o=document.createElement(e||"div");for(n in t)o[n]=t[n];return o}function t(e){for(var t=1,n=arguments.length;t<n;t++)e.appendChild(arguments[t]);return e}function n(e,t,n,o){var i=["opacity",t,~~(100*e),n,o].join("-"),r=.01+n/o*100,a=Math.max(1-(1-e)/t*(100-r),e),s=l.substring(0,l.indexOf("Animation")).toLowerCase(),u=s&&"-"+s+"-"||"";return c[i]||(f.insertRule("@"+u+"keyframes "+i+"{0%{opacity:"+a+"}"+r+"%{opacity:"+e+"}"+(r+.01)+"%{opacity:1}"+(r+t)%100+"%{opacity:"+e+"}100%{opacity:"+a+"}}",f.cssRules.length),c[i]=1),i}function o(e,t){var n,o,i=e.style;for(t=t.charAt(0).toUpperCase()+t.slice(1),o=0;o<u.length;o++)if(n=u[o]+t,void 0!==i[n])return n;if(void 0!==i[t])return t}function i(e,t){for(var n in t)e.style[o(e,n)||n]=t[n];return e}function r(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)void 0===e[o]&&(e[o]=n[o])}return e}function a(e,t){return"string"==typeof e?e:e[t%e.length]}function s(e){this.opts=r(e||{},s.defaults,d)}var l,u=["webkit","Moz","ms","O"],c={},f=function(){var n=e("style",{type:"text/css"});return t(document.getElementsByTagName("head")[0],n),n.sheet||n.styleSheet}(),d={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",position:"absolute"};s.defaults={},r(s.prototype,{spin:function(t){this.stop();var n=this,o=n.opts,r=n.el=i(e(0,{className:o.className}),{position:o.position,width:0,zIndex:o.zIndex});o.radius,o.length,o.width;if(i(r,{left:o.left,top:o.top}),t&&t.insertBefore(r,t.firstChild||null),r.setAttribute("role","progressbar"),n.lines(r,n.opts),!l){var a,s=0,u=(o.lines-1)*(1-o.direction)/2,c=o.fps,f=c/o.speed,d=(1-o.opacity)/(f*o.trail/100),p=f/o.lines;!function e(){s++;for(var t=0;t<o.lines;t++)a=Math.max(1-(s+(o.lines-t)*p)%f*d,o.opacity),n.opacity(r,t*o.direction+u,a,o);n.timeout=n.el&&setTimeout(e,~~(1e3/c))}()}return n},stop:function(){var e=this.el;return e&&(clearTimeout(this.timeout),e.parentNode&&e.parentNode.removeChild(e),this.el=void 0),this},lines:function(o,r){function s(t,n){return i(e(),{position:"absolute",width:r.length+r.width+"px",height:r.width+"px",background:t,boxShadow:n,transformOrigin:"left",transform:"rotate("+~~(360/r.lines*c+r.rotate)+"deg) translate("+r.radius+"px,0)",borderRadius:(r.corners*r.width>>1)+"px"})}for(var u,c=0,f=(r.lines-1)*(1-r.direction)/2;c<r.lines;c++)u=i(e(),{position:"absolute",top:1+~(r.width/2)+"px",transform:r.hwaccel?"translate3d(0,0,0)":"",opacity:r.opacity,animation:l&&n(r.opacity,r.trail,f+c*r.direction,r.lines)+" "+1/r.speed+"s linear infinite"}),r.shadow&&t(u,i(s("#000","0 0 4px #000"),{top:"2px"})),t(o,t(u,s(a(r.color,c),"0 0 1px rgba(0,0,0,.1)")));return o},opacity:function(e,t,n){t<e.childNodes.length&&(e.childNodes[t].style.opacity=n)}});var p=i(e("group"),{behavior:"url(#default#VML)"});return!o(p,"transform")&&p.adj?function(){function n(t,n){return e("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',n)}f.addRule(".spin-vml","behavior:url(#default#VML)"),s.prototype.lines=function(e,o){function r(){return i(n("group",{coordsize:c+" "+c,coordorigin:-u+" "+-u}),{width:c,height:c})}function s(e,s,l){t(d,t(i(r(),{rotation:360/o.lines*e+"deg",left:~~s}),t(i(n("roundrect",{arcsize:o.corners}),{width:u,height:o.width,left:o.radius,top:-o.width>>1,filter:l}),n("fill",{color:a(o.color,e),opacity:o.opacity}),n("stroke",{opacity:0}))))}var l,u=o.length+o.width,c=2*u,f=2*-(o.width+o.length)+"px",d=i(r(),{position:"absolute",top:f,left:f});if(o.shadow)for(l=1;l<=o.lines;l++)s(l,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(l=1;l<=o.lines;l++)s(l);return t(e,d)},s.prototype.opacity=function(e,t,n,o){var i=e.firstChild;o=o.shadow&&o.lines||0,i&&t+o<i.childNodes.length&&(i=i.childNodes[t+o],i=i&&i.firstChild,(i=i&&i.firstChild)&&(i.opacity=n))}}():l=o(p,"animation"),s}),/**
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 */
function(e){if("object"==typeof exports)e(require("jquery"),require("spin"));else if("function"==typeof define&&define.amd)define(["jquery","spin"],e);else{if(!window.Spinner)throw new Error("Spin.js not present");e(window.jQuery,window.Spinner)}}(function(e,t){e.fn.spin=function(n,o){return this.each(function(){var i=e(this),r=i.data();r.spinner&&(r.spinner.stop(),delete r.spinner),!1!==n&&(n=e.extend({color:o||i.css("color")},e.fn.spin.presets[n]||n),r.spinner=new t(n).spin(this))})},e.fn.spin.presets={tiny:{lines:8,length:2,width:2,radius:3},small:{lines:8,length:4,width:3,radius:5},large:{lines:10,length:8,width:4,radius:8}}}),function(e){function t(e){var t=e.length,o=n.type(e);return"function"!==o&&!n.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===o||0===t||"number"==typeof t&&t>0&&t-1 in e))}if(!e.jQuery){var n=function(e,t){return new n.fn.init(e,t)};n.isWindow=function(e){return null!=e&&e==e.window},n.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?i[a.call(e)]||"object":typeof e},n.isArray=Array.isArray||function(e){return"array"===n.type(e)},n.isPlainObject=function(e){var t;if(!e||"object"!==n.type(e)||e.nodeType||n.isWindow(e))return!1;try{if(e.constructor&&!r.call(e,"constructor")&&!r.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}for(t in e);return void 0===t||r.call(e,t)},n.each=function(e,n,o){var i=0,r=e.length,a=t(e);if(o){if(a)for(;i<r&&!1!==n.apply(e[i],o);i++);else for(i in e)if(!1===n.apply(e[i],o))break}else if(a)for(;i<r&&!1!==n.call(e[i],i,e[i]);i++);else for(i in e)if(!1===n.call(e[i],i,e[i]))break;return e},n.data=function(e,t,i){if(void 0===i){var r=e[n.expando],a=r&&o[r];if(void 0===t)return a;if(a&&t in a)return a[t]}else if(void 0!==t){var r=e[n.expando]||(e[n.expando]=++n.uuid);return o[r]=o[r]||{},o[r][t]=i,i}},n.removeData=function(e,t){var i=e[n.expando],r=i&&o[i];r&&n.each(t,function(e,t){delete r[t]})},n.extend=function(){var e,t,o,i,r,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[l]||{},l++),"object"!=typeof s&&"function"!==n.type(s)&&(s={}),l===u&&(s=this,l--);l<u;l++)if(null!=(r=arguments[l]))for(i in r)e=s[i],o=r[i],s!==o&&(c&&o&&(n.isPlainObject(o)||(t=n.isArray(o)))?(t?(t=!1,a=e&&n.isArray(e)?e:[]):a=e&&n.isPlainObject(e)?e:{},s[i]=n.extend(c,a,o)):void 0!==o&&(s[i]=o));return s},n.queue=function(e,o,i){if(e){o=(o||"fx")+"queue";var r=n.data(e,o);return i?(!r||n.isArray(i)?r=n.data(e,o,function(e,n){var o=n||[];return null!=e&&(t(Object(e))?function(e,t){for(var n=+t.length,o=0,i=e.length;o<n;)e[i++]=t[o++];if(n!==n)for(;void 0!==t[o];)e[i++]=t[o++];e.length=i}(o,"string"==typeof e?[e]:e):[].push.call(o,e)),o}(i)):r.push(i),r):r||[]}},n.dequeue=function(e,t){n.each(e.nodeType?[e]:e,function(e,o){t=t||"fx";var i=n.queue(o,t),r=i.shift();"inprogress"===r&&(r=i.shift()),r&&("fx"===t&&i.unshift("inprogress"),r.call(o,function(){n.dequeue(o,t)}))})},n.fn=n.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),o=this.offset(),i=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:n(e).offset();return o.top-=parseFloat(t.style.marginTop)||0,o.left-=parseFloat(t.style.marginLeft)||0,e.style&&(i.top+=parseFloat(e.style.borderTopWidth)||0,i.left+=parseFloat(e.style.borderLeftWidth)||0),{top:o.top-i.top,left:o.left-i.left}}};var o={};n.expando="velocity"+(new Date).getTime(),n.uuid=0;for(var i={},r=i.hasOwnProperty,a=i.toString,s="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<s.length;l++)i["[object "+s[l]+"]"]=s[l].toLowerCase();n.fn.init.prototype=n.fn,e.Velocity={Utilities:n}}}(window),function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){return function(e,t,n,o){/* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */
function i(e){for(var t=-1,n=e?e.length:0,o=[];++t<n;){var i=e[t];i&&o.push(i)}return o}function r(e){return m.isWrapped(e)?e=[].slice.call(e):m.isNode(e)&&(e=[e]),e}function a(e){var t=d.data(e,"velocity");return null===t?o:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}/* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
function l(e,n,o,i){function r(e,t){return 1-3*t+3*e}function a(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,n){return((r(t,n)*e+a(t,n))*e+s(t))*e}function u(e,t,n){return 3*r(t,n)*e*e+2*a(t,n)*e+s(t)}function c(t,n){for(var i=0;i<m;++i){var r=u(n,e,o);if(0===r)return n;n-=(l(n,e,o)-t)/r}return n}function f(){for(var t=0;t<w;++t)C[t]=l(t*b,e,o)}function d(t,n,i){var r,a,s=0;do{a=n+(i-n)/2,r=l(a,e,o)-t,r>0?i=a:n=a}while(Math.abs(r)>y&&++s<v);return a}function p(t){for(var n=0,i=1,r=w-1;i!=r&&C[i]<=t;++i)n+=b;--i;var a=(t-C[i])/(C[i+1]-C[i]),s=n+a*b,l=u(s,e,o);return l>=g?c(t,s):0==l?s:d(t,n,n+b)}function h(){T=!0,e==n&&o==i||f()}var m=4,g=.001,y=1e-7,v=10,w=11,b=1/(w-1),x="Float32Array"in t;if(4!==arguments.length)return!1;for(var _=0;_<4;++_)if("number"!=typeof arguments[_]||isNaN(arguments[_])||!isFinite(arguments[_]))return!1;e=Math.min(e,1),o=Math.min(o,1),e=Math.max(e,0),o=Math.max(o,0);var C=x?new Float32Array(w):new Array(w),T=!1,S=function(t){return T||h(),e===n&&o===i?t:0===t?0:1===t?1:l(p(t),n,i)};S.getControlPoints=function(){return[{x:e,y:n},{x:o,y:i}]};var k="generateBezier("+[e,n,o,i]+")";return S.toString=function(){return k},S}function u(e,t){var n=e;return m.isString(e)?w.Easings[e]||(n=!1):n=m.isArray(e)&&1===e.length?s.apply(null,e):m.isArray(e)&&2===e.length?b.apply(null,e.concat([t])):!(!m.isArray(e)||4!==e.length)&&l.apply(null,e),!1===n&&(n=w.Easings[w.defaults.easing]?w.defaults.easing:v),n}function c(e){if(e)for(var t=(new Date).getTime(),n=0,i=w.State.calls.length;n<i;n++)if(w.State.calls[n]){var r=w.State.calls[n],s=r[0],l=r[2],u=r[3],p=!!u;u||(u=w.State.calls[n][3]=t-16);for(var h=Math.min((t-u)/l.duration,1),g=0,y=s.length;g<y;g++){var v=s[g],b=v.element;if(a(b)){var _=!1;if(l.display!==o&&null!==l.display&&"none"!==l.display){if("flex"===l.display){var T=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];d.each(T,function(e,t){x.setPropertyValue(b,"display",t)})}x.setPropertyValue(b,"display",l.display)}l.visibility!==o&&"hidden"!==l.visibility&&x.setPropertyValue(b,"visibility",l.visibility);for(var S in v)if("element"!==S){var k,N=v[S],E=m.isString(N.easing)?w.Easings[N.easing]:N.easing;if(1===h)k=N.endValue;else if(k=N.startValue+(N.endValue-N.startValue)*E(h),!p&&k===N.currentValue)continue;if(N.currentValue=k,x.Hooks.registered[S]){var P=x.Hooks.getRoot(S),A=a(b).rootPropertyValueCache[P];A&&(N.rootPropertyValue=A)}var D=x.setPropertyValue(b,S,N.currentValue+(0===parseFloat(k)?"":N.unitType),N.rootPropertyValue,N.scrollData);x.Hooks.registered[S]&&(x.Normalizations.registered[P]?a(b).rootPropertyValueCache[P]=x.Normalizations.registered[P]("extract",null,D[1]):a(b).rootPropertyValueCache[P]=D[1]),"transform"===D[0]&&(_=!0)}l.mobileHA&&a(b).transformCache.translate3d===o&&(a(b).transformCache.translate3d="(0px, 0px, 0px)",_=!0),_&&x.flushTransformCache(b)}}l.display!==o&&"none"!==l.display&&(w.State.calls[n][2].display=!1),l.visibility!==o&&"hidden"!==l.visibility&&(w.State.calls[n][2].visibility=!1),l.progress&&l.progress.call(r[1],r[1],h,Math.max(0,u+l.duration-t),u),1===h&&f(n)}w.State.isTicking&&C(c)}function f(e,t){if(!w.State.calls[e])return!1;for(var n=w.State.calls[e][0],i=w.State.calls[e][1],r=w.State.calls[e][2],s=w.State.calls[e][4],l=!1,u=0,c=n.length;u<c;u++){var f=n[u].element;if(t||r.loop||("none"===r.display&&x.setPropertyValue(f,"display",r.display),"hidden"===r.visibility&&x.setPropertyValue(f,"visibility",r.visibility)),!0!==r.loop&&(d.queue(f)[1]===o||!/\.velocityQueueEntryFlag/i.test(d.queue(f)[1]))&&a(f)){a(f).isAnimating=!1,a(f).rootPropertyValueCache={};var p=!1;d.each(x.Lists.transforms3D,function(e,t){var n=/^scale/.test(t)?1:0,i=a(f).transformCache[t];a(f).transformCache[t]!==o&&new RegExp("^\\("+n+"[^.]").test(i)&&(p=!0,delete a(f).transformCache[t])}),r.mobileHA&&(p=!0,delete a(f).transformCache.translate3d),p&&x.flushTransformCache(f),x.Values.removeClass(f,"velocity-animating")}if(!t&&r.complete&&!r.loop&&u===c-1)try{r.complete.call(i,i)}catch(e){setTimeout(function(){throw e},1)}s&&!0!==r.loop&&s(i),!0!==r.loop||t||(d.each(a(f).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360)}),w(f,"reverse",{loop:!0,delay:r.delay})),!1!==r.queue&&d.dequeue(f,r.queue)}w.State.calls[e]=!1;for(var h=0,m=w.State.calls.length;h<m;h++)if(!1!==w.State.calls[h]){l=!0;break}!1===l&&(w.State.isTicking=!1,delete w.State.calls,w.State.calls=[])}var d,p=function(){if(n.documentMode)return n.documentMode;for(var e=7;e>4;e--){var t=n.createElement("div");if(t.innerHTML="\x3c!--[if IE "+e+"]><span></span><![endif]--\x3e",t.getElementsByTagName("span").length)return t=null,e}return o}(),h=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var n,o=(new Date).getTime();/* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */
return n=Math.max(0,16-(o-e)),e=o+n,setTimeout(function(){t(o+n)},n)}}(),m={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},/* Copyright Martin Bohm. MIT License: https://gist.github.com/Tomalak/818a78a226a0738eaade */
isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==o&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},g=!1;if(e.fn&&e.fn.jquery?(d=e,g=!0):d=t.Velocity.Utilities,p<=8&&!g)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(p<=7)return void(jQuery.fn.velocity=jQuery.fn.animate);var y=400,v="swing",w={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:n.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:d,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:y,easing:v,begin:o,complete:o,progress:o,display:o,visibility:o,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){d.data(e,"velocity",{isSVG:m.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:1,patch:0},debug:!1};t.pageYOffset!==o?(w.State.scrollAnchor=t,w.State.scrollPropertyLeft="pageXOffset",w.State.scrollPropertyTop="pageYOffset"):(w.State.scrollAnchor=n.documentElement||n.body.parentNode||n.body,w.State.scrollPropertyLeft="scrollLeft",w.State.scrollPropertyTop="scrollTop");/* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
/* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
       then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */
var b=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,n,o){var i={x:t.x+o.dx*n,v:t.v+o.dv*n,tension:t.tension,friction:t.friction};return{dx:i.v,dv:e(i)}}function n(n,o){var i={dx:n.v,dv:e(n)},r=t(n,.5*o,i),a=t(n,.5*o,r),s=t(n,o,a),l=1/6*(i.dx+2*(r.dx+a.dx)+s.dx),u=1/6*(i.dv+2*(r.dv+a.dv)+s.dv);return n.x=n.x+l*o,n.v=n.v+u*o,n}return function e(t,o,i){var r,a,s,l={x:-1,v:0,tension:null,friction:null},u=[0],c=0;for(t=parseFloat(t)||500,o=parseFloat(o)||20,i=i||null,l.tension=t,l.friction=o,r=null!==i,r?(c=e(t,o),a=c/i*.016):a=.016;;)if(s=n(s||l,a),u.push(1+s.x),c+=16,!(Math.abs(s.x)>1e-4&&Math.abs(s.v)>1e-4))break;return r?function(e){return u[e*(u.length-1)|0]}:c}}();w.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},d.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){w.Easings[t[0]]=l.apply(null,t[1])});var x=w.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<x.Lists.colors.length;e++){var t="color"===x.Lists.colors[e]?"0 0 0 1":"255 255 255 1";x.Hooks.templates[x.Lists.colors[e]]=["Red Green Blue Alpha",t]}var n,o,i;if(p)for(n in x.Hooks.templates){o=x.Hooks.templates[n],i=o[0].split(" ");var r=o[1].match(x.RegEx.valueSplit);"Color"===i[0]&&(i.push(i.shift()),r.push(r.shift()),x.Hooks.templates[n]=[i.join(" "),r.join(" ")])}for(n in x.Hooks.templates){o=x.Hooks.templates[n],i=o[0].split(" ");for(var e in i){var a=n+i[e],s=e;x.Hooks.registered[a]=[n,s]}}},getRoot:function(e){var t=x.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return x.RegEx.valueUnwrap.test(t)&&(t=t.match(x.RegEx.valueUnwrap)[1]),x.Values.isCSSNullValue(t)&&(t=x.Hooks.templates[e][1]),t},extractValue:function(e,t){var n=x.Hooks.registered[e];if(n){var o=n[0],i=n[1];return t=x.Hooks.cleanRootPropertyValue(o,t),t.toString().match(x.RegEx.valueSplit)[i]}return t},injectValue:function(e,t,n){var o=x.Hooks.registered[e];if(o){var i,r=o[0],a=o[1];return n=x.Hooks.cleanRootPropertyValue(r,n),i=n.toString().match(x.RegEx.valueSplit),i[a]=t,i.join(" ")}return n}},Normalizations:{registered:{clip:function(e,t,n){switch(e){case"name":return"clip";case"extract":var o;return x.RegEx.wrappedValueAlreadyExtracted.test(n)?o=n:(o=n.toString().match(x.RegEx.valueUnwrap),o=o?o[1].replace(/,(\s+)?/g," "):n),o;case"inject":return"rect("+n+")"}},blur:function(e,t,n){switch(e){case"name":return"-webkit-filter";case"extract":var o=parseFloat(n);if(!o&&0!==o){var i=n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);o=i?i[1]:0}return o;case"inject":return parseFloat(n)?"blur("+n+")":"none"}},opacity:function(e,t,n){if(p<=8)switch(e){case"name":return"filter";case"extract":var o=n.toString().match(/alpha\(opacity=(.*)\)/i);return n=o?o[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(n)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(n),10)+")"}else switch(e){case"name":return"opacity";case"extract":case"inject":return n}}},register:function(){p<=9||w.State.isGingerbread||(x.Lists.transformsBase=x.Lists.transformsBase.concat(x.Lists.transforms3D));for(var e=0;e<x.Lists.transformsBase.length;e++)!function(){var t=x.Lists.transformsBase[e];x.Normalizations.registered[t]=function(e,n,i){switch(e){case"name":return"transform";case"extract":return a(n)===o||a(n).transformCache[t]===o?/^scale/i.test(t)?1:0:a(n).transformCache[t].replace(/[()]/g,"");case"inject":var r=!1;switch(t.substr(0,t.length-1)){case"translate":r=!/(%|px|em|rem|vw|vh|\d)$/i.test(i);break;case"scal":case"scale":w.State.isAndroid&&a(n).transformCache[t]===o&&i<1&&(i=1),r=!/(\d)$/i.test(i);break;case"skew":case"rotate":r=!/(deg|\d)$/i.test(i)}return r||(a(n).transformCache[t]="("+i+")"),a(n).transformCache[t]}}}();for(var e=0;e<x.Lists.colors.length;e++)!function(){var t=x.Lists.colors[e];x.Normalizations.registered[t]=function(e,n,i){switch(e){case"name":return t;case"extract":var r;if(x.RegEx.wrappedValueAlreadyExtracted.test(i))r=i;else{var a,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(i)?a=s[i]!==o?s[i]:s.black:x.RegEx.isHex.test(i)?a="rgb("+x.Values.hexToRgb(i).join(" ")+")":/^rgba?\(/i.test(i)||(a=s.black),r=(a||i).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return p<=8||3!==r.split(" ").length||(r+=" 1"),r;case"inject":return p<=8?4===i.split(" ").length&&(i=i.split(/\s+/).slice(0,3).join(" ")):3===i.split(" ").length&&(i+=" 1"),(p<=8?"rgb":"rgba")+"("+i.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(p||w.State.isAndroid&&!w.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(w.State.prefixMatches[e])return[w.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],n=0,o=t.length;n<o;n++){var i;if(i=0===n?e:t[n]+e.replace(/^\w/,function(e){return e.toUpperCase()}),m.isString(w.State.prefixElement.style[i]))return w.State.prefixMatches[e]=i,[i,!0]}return[e,!1]}},Values:{/* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
hexToRgb:function(e){var t,n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e=e.replace(n,function(e,t,n,o){return t+t+n+n+o+o}),t=o.exec(e),t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,n,i,r){function s(e,n){function i(){u&&x.setPropertyValue(e,"display","none")}var l=0;if(p<=8)l=d.css(e,n);else{var u=!1;if(/^(width|height)$/.test(n)&&0===x.getPropertyValue(e,"display")&&(u=!0,x.setPropertyValue(e,"display",x.Values.getDisplayType(e))),!r){if("height"===n&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(x.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(x.getPropertyValue(e,"paddingBottom"))||0);return i(),c}if("width"===n&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var f=e.offsetWidth-(parseFloat(x.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(x.getPropertyValue(e,"paddingRight"))||0);return i(),f}}var h;h=a(e)===o?t.getComputedStyle(e,null):a(e).computedStyle?a(e).computedStyle:a(e).computedStyle=t.getComputedStyle(e,null),(p||w.State.isFirefox)&&"borderColor"===n&&(n="borderTopColor"),l=9===p&&"filter"===n?h.getPropertyValue(n):h[n],""!==l&&null!==l||(l=e.style[n]),i()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(n)){var m=s(e,"position");("fixed"===m||"absolute"===m&&/top|left/i.test(n))&&(l=d(e).position()[n]+"px")}return l}var l;if(x.Hooks.registered[n]){var u=n,c=x.Hooks.getRoot(u);i===o&&(i=x.getPropertyValue(e,x.Names.prefixCheck(c)[0])),x.Normalizations.registered[c]&&(i=x.Normalizations.registered[c]("extract",e,i)),l=x.Hooks.extractValue(u,i)}else if(x.Normalizations.registered[n]){var f,h;f=x.Normalizations.registered[n]("name",e),"transform"!==f&&(h=s(e,x.Names.prefixCheck(f)[0]),x.Values.isCSSNullValue(h)&&x.Hooks.templates[n]&&(h=x.Hooks.templates[n][1])),l=x.Normalizations.registered[n]("extract",e,h)}return/^[\d-]/.test(l)||(l=a(e)&&a(e).isSVG&&x.Names.SVGAttribute(n)?/^(height|width)$/i.test(n)?e.getBBox()[n]:e.getAttribute(n):s(e,x.Names.prefixCheck(n)[0])),x.Values.isCSSNullValue(l)&&(l=0),w.debug>=2&&console.log("Get "+n+": "+l),l},setPropertyValue:function(e,n,o,i,r){var s=n;if("scroll"===n)r.container?r.container["scroll"+r.direction]=o:"Left"===r.direction?t.scrollTo(o,r.alternateValue):t.scrollTo(r.alternateValue,o);else if(x.Normalizations.registered[n]&&"transform"===x.Normalizations.registered[n]("name",e))x.Normalizations.registered[n]("inject",e,o),s="transform",o=a(e).transformCache[n];else{if(x.Hooks.registered[n]){var l=n,u=x.Hooks.getRoot(n);i=i||x.getPropertyValue(e,u),o=x.Hooks.injectValue(l,o,i),n=u}if(x.Normalizations.registered[n]&&(o=x.Normalizations.registered[n]("inject",e,o),n=x.Normalizations.registered[n]("name",e)),s=x.Names.prefixCheck(n)[0],p<=8)try{e.style[s]=o}catch(e){w.debug&&console.log("Browser does not support ["+o+"] for ["+s+"]")}else a(e)&&a(e).isSVG&&x.Names.SVGAttribute(n)?e.setAttribute(n,o):e.style[s]=o;w.debug>=2&&console.log("Set "+n+" ("+s+"): "+o)}return[s,o]},flushTransformCache:function(e){function t(t){return parseFloat(x.getPropertyValue(e,t))}var n="";if((p||w.State.isAndroid&&!w.State.isChrome)&&a(e).isSVG){var o={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};d.each(a(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),o[e]&&(n+=e+"("+o[e].join(" ")+") ",delete o[e])})}else{var i,r;d.each(a(e).transformCache,function(t){if(i=a(e).transformCache[t],"transformPerspective"===t)return r=i,!0;9===p&&"rotateZ"===t&&(t="rotate"),n+=t+i+" "}),r&&(n="perspective"+r+" "+n)}x.setPropertyValue(e,"transform",n)}};x.Hooks.register(),x.Normalizations.register(),w.hook=function(e,t,n){var i=o;return e=r(e),d.each(e,function(e,r){if(a(r)===o&&w.init(r),n===o)i===o&&(i=w.CSS.getPropertyValue(r,t));else{var s=w.CSS.setPropertyValue(r,t,n);"transform"===s[0]&&w.CSS.flushTransformCache(r),i=s}}),i};var _=function(){function e(){return l?E.promise||null:p}function s(){function e(e){function p(e,t){var n=o,i=o,r=o;return m.isArray(e)?(n=e[0],!m.isArray(e[1])&&/^[\d-]/.test(e[1])||m.isFunction(e[1])||x.RegEx.isHex.test(e[1])?r=e[1]:(m.isString(e[1])&&!x.RegEx.isHex.test(e[1])||m.isArray(e[1]))&&(i=t?e[1]:u(e[1],l.duration),e[2]!==o&&(r=e[2]))):n=e,t||(i=i||l.easing),m.isFunction(n)&&(n=n.call(s,S,T)),m.isFunction(r)&&(r=r.call(s,S,T)),[n||0,i,r]}function h(e,t){var n,o;return o=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return n=e,""}),n||(n=x.Values.getUnitType(e)),[o,n]}if(l.begin&&0===S)try{l.begin.call(g,g)}catch(e){setTimeout(function(){throw e},1)}if("scroll"===P){var y,_,C,k=/^x$/i.test(l.axis)?"Left":"Top",N=parseFloat(l.offset)||0;l.container?m.isWrapped(l.container)||m.isNode(l.container)?(l.container=l.container[0]||l.container,y=l.container["scroll"+k],C=y+d(s).position()[k.toLowerCase()]+N):l.container=null:(y=w.State.scrollAnchor[w.State["scrollProperty"+k]],_=w.State.scrollAnchor[w.State["scrollProperty"+("Left"===k?"Top":"Left")]],C=d(s).offset()[k.toLowerCase()]+N),f={scroll:{rootPropertyValue:!1,startValue:y,currentValue:y,endValue:C,unitType:"",easing:l.easing,scrollData:{container:l.container,direction:k,alternateValue:_}},element:s},w.debug&&console.log("tweensContainer (scroll): ",f.scroll,s)}else if("reverse"===P){if(!a(s).tweensContainer)return void d.dequeue(s,l.queue);"none"===a(s).opts.display&&(a(s).opts.display="auto"),"hidden"===a(s).opts.visibility&&(a(s).opts.visibility="visible"),a(s).opts.loop=!1,a(s).opts.begin=null,a(s).opts.complete=null,b.easing||delete l.easing,b.duration||delete l.duration,l=d.extend({},a(s).opts,l);var A=d.extend(!0,{},a(s).tweensContainer);for(var D in A)if("element"!==D){var I=A[D].startValue;A[D].startValue=A[D].currentValue=A[D].endValue,A[D].endValue=I,m.isEmptyObject(b)||(A[D].easing=l.easing),w.debug&&console.log("reverse tweensContainer ("+D+"): "+JSON.stringify(A[D]),s)}f=A}else if("start"===P){var A;a(s).tweensContainer&&!0===a(s).isAnimating&&(A=a(s).tweensContainer),d.each(v,function(e,t){if(RegExp("^"+x.Lists.colors.join("$|^")+"$").test(e)){var n=p(t,!0),i=n[0],r=n[1],a=n[2];if(x.RegEx.isHex.test(i)){for(var s=["Red","Green","Blue"],l=x.Values.hexToRgb(i),u=a?x.Values.hexToRgb(a):o,c=0;c<s.length;c++){var f=[l[c]];r&&f.push(r),u!==o&&f.push(u[c]),v[e+s[c]]=f}delete v[e]}}});for(var L in v){var M=p(v[L]),W=M[0],F=M[1],$=M[2];L=x.Names.camelCase(L);var R=x.Hooks.getRoot(L),O=!1;if(a(s).isSVG||!1!==x.Names.prefixCheck(R)[1]||x.Normalizations.registered[R]!==o){(l.display!==o&&null!==l.display&&"none"!==l.display||l.visibility!==o&&"hidden"!==l.visibility)&&/opacity|filter/.test(L)&&!$&&0!==W&&($=0),l._cacheValues&&A&&A[L]?($===o&&($=A[L].endValue+A[L].unitType),O=a(s).rootPropertyValueCache[R]):x.Hooks.registered[L]?$===o?(O=x.getPropertyValue(s,R),$=x.getPropertyValue(s,L,O)):O=x.Hooks.templates[R][1]:$===o&&($=x.getPropertyValue(s,L));var B,q,V,z=!1;if(B=h(L,$),$=B[0],V=B[1],B=h(L,W),W=B[0].replace(/^([+-\/*])=/,function(e,t){return z=t,""}),q=B[1],$=parseFloat($)||0,W=parseFloat(W)||0,"%"===q&&(/^(fontSize|lineHeight)$/.test(L)?(W/=100,q="em"):/^scale/.test(L)?(W/=100,q=""):/(Red|Green|Blue)$/i.test(L)&&(W=W/100*255,q="")),/[\/*]/.test(z))q=V;else if(V!==q&&0!==$)if(0===W)q=V;else{r=r||function(){var e={myParent:s.parentNode||n.body,position:x.getPropertyValue(s,"position"),fontSize:x.getPropertyValue(s,"fontSize")},o=e.position===j.lastPosition&&e.myParent===j.lastParent,i=e.fontSize===j.lastFontSize;j.lastParent=e.myParent,j.lastPosition=e.position,j.lastFontSize=e.fontSize;var r={};if(i&&o)r.emToPx=j.lastEmToPx,r.percentToPxWidth=j.lastPercentToPxWidth,r.percentToPxHeight=j.lastPercentToPxHeight;else{var l=a(s).isSVG?n.createElementNS("http://www.w3.org/2000/svg","rect"):n.createElement("div");w.init(l),e.myParent.appendChild(l),d.each(["overflow","overflowX","overflowY"],function(e,t){w.CSS.setPropertyValue(l,t,"hidden")}),w.CSS.setPropertyValue(l,"position",e.position),w.CSS.setPropertyValue(l,"fontSize",e.fontSize),w.CSS.setPropertyValue(l,"boxSizing","content-box"),d.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){w.CSS.setPropertyValue(l,t,"100%")}),w.CSS.setPropertyValue(l,"paddingLeft","100em"),r.percentToPxWidth=j.lastPercentToPxWidth=(parseFloat(x.getPropertyValue(l,"width",null,!0))||1)/100,r.percentToPxHeight=j.lastPercentToPxHeight=(parseFloat(x.getPropertyValue(l,"height",null,!0))||1)/100,r.emToPx=j.lastEmToPx=(parseFloat(x.getPropertyValue(l,"paddingLeft"))||1)/100,e.myParent.removeChild(l)}return null===j.remToPx&&(j.remToPx=parseFloat(x.getPropertyValue(n.body,"fontSize"))||16),null===j.vwToPx&&(j.vwToPx=parseFloat(t.innerWidth)/100,j.vhToPx=parseFloat(t.innerHeight)/100),r.remToPx=j.remToPx,r.vwToPx=j.vwToPx,r.vhToPx=j.vhToPx,w.debug>=1&&console.log("Unit ratios: "+JSON.stringify(r),s),r}();var X=/margin|padding|left|right|width|text|word|letter/i.test(L)||/X$/.test(L)||"x"===L?"x":"y";switch(V){case"%":$*="x"===X?r.percentToPxWidth:r.percentToPxHeight;break;case"px":break;default:$*=r[V+"ToPx"]}switch(q){case"%":$*=1/("x"===X?r.percentToPxWidth:r.percentToPxHeight);break;case"px":break;default:$*=1/r[q+"ToPx"]}}switch(z){case"+":W=$+W;break;case"-":W=$-W;break;case"*":W*=$;break;case"/":W=$/W}f[L]={rootPropertyValue:O,startValue:$,currentValue:$,endValue:W,unitType:q,easing:F},w.debug&&console.log("tweensContainer ("+L+"): "+JSON.stringify(f[L]),s)}else w.debug&&console.log("Skipping ["+R+"] due to a lack of browser support.")}f.element=s}f.element&&(x.Values.addClass(s,"velocity-animating"),H.push(f),""===l.queue&&(a(s).tweensContainer=f,a(s).opts=l),a(s).isAnimating=!0,S===T-1?(w.State.calls.length>1e4&&(w.State.calls=i(w.State.calls)),w.State.calls.push([H,g,l,null,E.resolver]),!1===w.State.isTicking&&(w.State.isTicking=!0,c())):S++)}var r,s=this,l=d.extend({},w.defaults,b),f={};switch(a(s)===o&&w.init(s),parseFloat(l.delay)&&!1!==l.queue&&d.queue(s,l.queue,function(e){w.velocityQueueEntryFlag=!0,a(s).delayTimer={setTimeout:setTimeout(e,parseFloat(l.delay)),next:e}}),l.duration.toString().toLowerCase()){case"fast":l.duration=200;break;case"normal":l.duration=y;break;case"slow":l.duration=600;break;default:l.duration=parseFloat(l.duration)||1}!1!==w.mock&&(!0===w.mock?l.duration=l.delay=1:(l.duration*=parseFloat(w.mock)||1,l.delay*=parseFloat(w.mock)||1)),l.easing=u(l.easing,l.duration),l.begin&&!m.isFunction(l.begin)&&(l.begin=null),l.progress&&!m.isFunction(l.progress)&&(l.progress=null),l.complete&&!m.isFunction(l.complete)&&(l.complete=null),l.display!==o&&null!==l.display&&(l.display=l.display.toString().toLowerCase(),"auto"===l.display&&(l.display=w.CSS.Values.getDisplayType(s))),l.visibility!==o&&null!==l.visibility&&(l.visibility=l.visibility.toString().toLowerCase()),l.mobileHA=l.mobileHA&&w.State.isMobile&&!w.State.isGingerbread,!1===l.queue?l.delay?setTimeout(e,l.delay):e():d.queue(s,l.queue,function(t,n){if(!0===n)return E.promise&&E.resolver(g),!0;w.velocityQueueEntryFlag=!0,e(t)}),""!==l.queue&&"fx"!==l.queue||"inprogress"===d.queue(s)[0]||d.dequeue(s)}var l,p,h,g,v,b,C=arguments[0]&&(d.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||m.isString(arguments[0].properties));if(m.isWrapped(this)?(l=!1,h=0,g=this,p=this):(l=!0,h=1,g=C?arguments[0].elements:arguments[0]),g=r(g)){C?(v=arguments[0].properties,b=arguments[0].options):(v=arguments[h],b=arguments[h+1]);var T=g.length,S=0;if("stop"!==v&&!d.isPlainObject(b)){var k=h+1;b={};for(var N=k;N<arguments.length;N++)m.isArray(arguments[N])||!/^(fast|normal|slow)$/i.test(arguments[N])&&!/^\d/.test(arguments[N])?m.isString(arguments[N])||m.isArray(arguments[N])?b.easing=arguments[N]:m.isFunction(arguments[N])&&(b.complete=arguments[N]):b.duration=arguments[N]}var E={promise:null,resolver:null,rejecter:null};l&&w.Promise&&(E.promise=new w.Promise(function(e,t){E.resolver=e,E.rejecter=t}));var P;switch(v){case"scroll":P="scroll";break;case"reverse":P="reverse";break;case"stop":d.each(g,function(e,t){a(t)&&a(t).delayTimer&&(clearTimeout(a(t).delayTimer.setTimeout),a(t).delayTimer.next&&a(t).delayTimer.next(),delete a(t).delayTimer)});var A=[];return d.each(w.State.calls,function(e,t){t&&d.each(t[1],function(n,i){var r=m.isString(b)?b:"";if(b!==o&&t[2].queue!==r)return!0;d.each(g,function(t,n){n===i&&(b!==o&&(d.each(d.queue(n,r),function(e,t){m.isFunction(t)&&t(null,!0)}),d.queue(n,r,[])),a(n)&&""===r&&d.each(a(n).tweensContainer,function(e,t){t.endValue=t.currentValue}),A.push(e))})})}),d.each(A,function(e,t){f(t,!0)}),E.promise&&E.resolver(g),e();default:if(!d.isPlainObject(v)||m.isEmptyObject(v)){if(m.isString(v)&&w.Redirects[v]){var D=d.extend({},b),I=D.duration,L=D.delay||0;return!0===D.backwards&&(g=d.extend(!0,[],g).reverse()),d.each(g,function(e,t){parseFloat(D.stagger)?D.delay=L+parseFloat(D.stagger)*e:m.isFunction(D.stagger)&&(D.delay=L+D.stagger.call(t,e,T)),D.drag&&(D.duration=parseFloat(I)||(/^(callout|transition)/.test(v)?1e3:y),D.duration=Math.max(D.duration*(D.backwards?1-e/T:(e+1)/T),.75*D.duration,200)),w.Redirects[v].call(t,t,D||{},e,T,g,E.promise?E:o)}),e()}var M="Velocity: First argument ("+v+") was not a property map, a known action, or a registered redirect. Aborting.";return E.promise?E.rejecter(new Error(M)):console.log(M),e()}P="start"}var j={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},H=[];d.each(g,function(e,t){m.isNode(t)&&s.call(t)});var W,D=d.extend({},w.defaults,b);if(D.loop=parseInt(D.loop),W=2*D.loop-1,D.loop)for(var F=0;F<W;F++){var $={delay:D.delay,progress:D.progress};F===W-1&&($.display=D.display,$.visibility=D.visibility,$.complete=D.complete),_(g,"reverse",$)}return e()}};w=d.extend(_,w),w.animate=_;var C=t.requestAnimationFrame||h;return w.State.isMobile||n.hidden===o||n.addEventListener("visibilitychange",function(){n.hidden?(C=function(e){return setTimeout(function(){e(!0)},16)},c()):C=t.requestAnimationFrame||h}),e.Velocity=w,e!==t&&(e.fn.velocity=_,e.fn.velocity.defaults=w.defaults),d.each(["Down","Up"],function(e,t){w.Redirects["slide"+t]=function(e,n,i,r,a,s){var l=d.extend({},n),u=l.begin,c=l.complete,f={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},p={};l.display===o&&(l.display="Down"===t?"inline"===w.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(a,a);for(var n in f){p[n]=e.style[n];var o=w.CSS.getPropertyValue(e,n);f[n]="Down"===t?[o,0]:[0,o]}p.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in p)e.style[t]=p[t];c&&c.call(a,a),s&&s.resolver(a)},w(e,f,l)}}),d.each(["In","Out"],function(e,t){w.Redirects["fade"+t]=function(e,n,i,r,a,s){var l=d.extend({},n),u={opacity:"In"===t?1:0},c=l.complete;l.complete=i!==r-1?l.begin=null:function(){c&&c.call(a,a),s&&s.resolver(a)},l.display===o&&(l.display="In"===t?"auto":"none"),w(this,u,l)}}),w}(window.jQuery||window.Zepto||window,window,document)}),function(e){"use strict";e.fn.fitVids=function(t){var n={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("div");i.innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',o.appendChild(i.childNodes[1])}return t&&e.extend(n,t),this.each(function(){var t=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];n.customSelector&&t.push(n.customSelector);var o=".fitvidsignore";n.ignore&&(o=o+", "+n.ignore);var i=e(this).find(t.join(","));i=i.not("object object"),i=i.not(o),i.each(function(){var t=e(this);if(!(t.parents(o).length>0||"embed"===this.tagName.toLowerCase()&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)){t.css("height")||t.css("width")||!isNaN(t.attr("height"))&&!isNaN(t.attr("width"))||(t.attr("height",9),t.attr("width",16));var n="object"===this.tagName.toLowerCase()||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height(),i=isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10),r=n/i;if(!t.attr("name")){var a="fitvid"+e.fn.fitVids._count;t.attr("name",a),e.fn.fitVids._count++}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*r+"%"),t.removeAttr("height").removeAttr("width")}})})},e.fn.fitVids._count=0}(window.jQuery||window.Zepto),/*
 *	jQuery dotdotdot 1.6.16
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 *
 *	Plugin website:
 *	dotdotdot.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */
function(e,t){function n(e,t,n){var o=e.children(),i=!1;e.empty();for(var a=0,s=o.length;a<s;a++){var l=o.eq(a);if(e.append(l),n&&e.append(n),r(e,t)){l.remove(),i=!0;break}n&&n.detach()}return i}function o(t,n,a,s,l){var u=!1,c=function(e){l&&e[e.is("table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style")?"after":"append"](l)};return t.contents().detach().each(function(){var f=this,d=e(f);if(void 0===f||3==f.nodeType&&0==e.trim(f.data).length)return!0;if(d.is("script, .dotdotdot-keep"))t.append(d);else{if(u)return!0;t.append(d),c(t),r(a,s)&&((u=3==f.nodeType?i(d,n,a,s,l):o(d,n,a,s,l))||(c(e(t.contents().last())),u=!0)),u||l&&l.detach()}}),u}function i(t,n,o,i,s){var c=t[0];if(!c)return!1;var d=u(c),p=-1!==d.indexOf(" ")?" ":"　",h="letter"==i.wrap?"":p,m=d.split(h),g=-1,y=-1,v=0,w=m.length-1;for(i.fallbackToLetter&&0==v&&0==w&&(h="",m=d.split(h),w=m.length-1);v<=w&&(0!=v||0!=w);){var b=Math.floor((v+w)/2);if(b==y)break;y=b,l(c,m.slice(0,y+1).join(h)+i.ellipsis),r(o,i)?(w=y,i.fallbackToLetter&&0==v&&0==w&&(h="",m=m[0].split(h),g=-1,y=-1,v=0,w=m.length-1)):(g=y,v=y)}if(-1==g||1==m.length&&0==m[0].length){var x=t.parent();t.detach();var _=s&&s.closest(x).length?s.length:0;x.contents().length>_?c=f(x.contents().eq(-1-_),n):(c=f(x,n,!0),_||x.detach()),c&&(d=a(u(c),i),l(c,d),_&&s&&e(c).parent().append(s))}else d=a(m.slice(0,g+1).join(h),i),l(c,d);return!0}function r(e,t){return e.innerHeight()>t.maxHeight}function a(t,n){for(;e.inArray(t.slice(-1),n.lastCharacter.remove)>-1;)t=t.slice(0,-1);return e.inArray(t.slice(-1),n.lastCharacter.noEllipsis)<0&&(t+=n.ellipsis),t}function s(e){return{width:e.innerWidth(),height:e.innerHeight()}}function l(e,t){e.innerText?e.innerText=t:e.nodeValue?e.nodeValue=t:e.textContent&&(e.textContent=t)}function u(e){return e.innerText?e.innerText:e.nodeValue?e.nodeValue:e.textContent?e.textContent:""}function c(e){do{e=e.previousSibling}while(e&&1!==e.nodeType&&3!==e.nodeType);return e}function f(t,n,o){var i,r=t&&t[0];if(r){if(!o){if(3===r.nodeType)return r;if(e.trim(t.text()))return f(t.contents().last(),n)}for(i=c(r);!i;){if(t=t.parent(),t.is(n)||!t.length)return!1;i=c(t[0])}if(i)return f(e(i),n)}return!1}function d(t,n){return!!t&&("string"==typeof t?(t=e(t,n),!!t.length&&t):!!t.jquery&&t)}function p(e){for(var t=e.innerHeight(),n=["paddingTop","paddingBottom"],o=0,i=n.length;o<i;o++){var r=parseInt(e.css(n[o]),10);isNaN(r)&&(r=0),t-=r}return t}if(!e.fn.dotdotdot){e.fn.dotdotdot=function(t){if(0==this.length)return e.fn.dotdotdot.debug('No element found for "'+this.selector+'".'),this;if(this.length>1)return this.each(function(){e(this).dotdotdot(t)});var i=this;i.data("dotdotdot")&&i.trigger("destroy.dot"),i.data("dotdotdot-style",i.attr("style")||""),i.css("word-wrap","break-word"),"nowrap"===i.css("white-space")&&i.css("white-space","normal"),i.bind_events=function(){return i.bind("update.dot",function(t,s){t.preventDefault(),t.stopPropagation(),l.maxHeight="number"==typeof l.height?l.height:p(i),l.maxHeight+=l.tolerance,void 0!==s&&(("string"==typeof s||s instanceof HTMLElement)&&(s=e("<div />").append(s).contents()),s instanceof e&&(a=s)),m=i.wrapInner('<div class="dotdotdot" />').children(),m.contents().detach().end().append(a.clone(!0)).find("br").replaceWith("  <br />  ").end().css({height:"auto",width:"auto",border:"none",padding:0,margin:0});var c=!1,f=!1;return u.afterElement&&(c=u.afterElement.clone(!0),c.show(),u.afterElement.detach()),r(m,l)&&(f="children"==l.wrap?n(m,l,c):o(m,i,m,l,c)),m.replaceWith(m.contents()),m=null,e.isFunction(l.callback)&&l.callback.call(i[0],f,a),u.isTruncated=f,f}).bind("isTruncated.dot",function(e,t){return e.preventDefault(),e.stopPropagation(),"function"==typeof t&&t.call(i[0],u.isTruncated),u.isTruncated}).bind("originalContent.dot",function(e,t){return e.preventDefault(),e.stopPropagation(),"function"==typeof t&&t.call(i[0],a),a}).bind("destroy.dot",function(e){e.preventDefault(),e.stopPropagation(),i.unwatch().unbind_events().contents().detach().end().append(a).attr("style",i.data("dotdotdot-style")||"").data("dotdotdot",!1)}),i},i.unbind_events=function(){return i.unbind(".dot"),i},i.watch=function(){if(i.unwatch(),"window"==l.watch){var t=e(window),n=t.width(),o=t.height();t.bind("resize.dot"+u.dotId,function(){n==t.width()&&o==t.height()&&l.windowResizeFix||(n=t.width(),o=t.height(),f&&clearInterval(f),f=setTimeout(function(){i.trigger("update.dot")},100))})}else c=s(i),f=setInterval(function(){if(i.is(":visible")){var e=s(i);c.width==e.width&&c.height==e.height||(i.trigger("update.dot"),c=e)}},500);return i},i.unwatch=function(){return e(window).unbind("resize.dot"+u.dotId),f&&clearInterval(f),i};var a=i.contents(),l=e.extend(!0,{},e.fn.dotdotdot.defaults,t),u={},c={},f=null,m=null;return l.lastCharacter.remove instanceof Array||(l.lastCharacter.remove=e.fn.dotdotdot.defaultArrays.lastCharacter.remove),l.lastCharacter.noEllipsis instanceof Array||(l.lastCharacter.noEllipsis=e.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),u.afterElement=d(l.after,i),u.isTruncated=!1,u.dotId=h++,i.data("dotdotdot",!0).bind_events().trigger("update.dot"),l.watch&&i.watch(),i},e.fn.dotdotdot.defaults={ellipsis:"... ",wrap:"word",fallbackToLetter:!0,lastCharacter:{},tolerance:0,callback:null,after:null,height:null,watch:!1,windowResizeFix:!0},e.fn.dotdotdot.defaultArrays={lastCharacter:{remove:[" ","　",",",";",".","!","?"],noEllipsis:[]}},e.fn.dotdotdot.debug=function(e){};var h=1,m=e.fn.html;e.fn.html=function(t){/*
 *	jQuery dotdotdot 1.6.16
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 *
 *	Plugin website:
 *	dotdotdot.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */
return void 0!=t&&!e.isFunction(t)&&this.data("dotdotdot")?this.trigger("update",[t]):m.apply(this,arguments)};var g=e.fn.text;e.fn.text=function(t){return void 0!=t&&!e.isFunction(t)&&this.data("dotdotdot")?(t=e("<div />").text(t).html(),this.trigger("update",[t])):g.apply(this,arguments)}}}(jQuery),/*! jQuery UI - v1.11.4 - 2015-10-18
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */
function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(t,o){var i,r,a,s=t.nodeName.toLowerCase();return"area"===s?(i=t.parentNode,r=i.name,!(!t.href||!r||"map"!==i.nodeName.toLowerCase())&&(!!(a=e("img[usemap='#"+r+"']")[0])&&n(a))):(/^(input|select|textarea|button|object)$/.test(s)?!t.disabled:"a"===s?t.href||o:o)&&n(t)}function n(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var n=this.css("position"),o="absolute"===n,i=t?/(auto|scroll|hidden)/:/(auto|scroll)/,r=this.parents().filter(function(){var t=e(this);return(!o||"static"!==t.css("position"))&&i.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==n&&r.length?r:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,o){return!!e.data(t,o[3])},focusable:function(n){return t(n,!isNaN(e.attr(n,"tabindex")))},tabbable:function(n){var o=e.attr(n,"tabindex"),i=isNaN(o);return(i||o>=0)&&t(n,!i)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,n){function o(t,n,o,r){return e.each(i,function(){n-=parseFloat(e.css(t,"padding"+this))||0,o&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),r&&(n-=parseFloat(e.css(t,"margin"+this))||0)}),n}var i="Width"===n?["Left","Right"]:["Top","Bottom"],r=n.toLowerCase(),a={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+n]=function(t){return void 0===t?a["inner"+n].call(this):this.each(function(){e(this).css(r,o(this,t)+"px")})},e.fn["outer"+n]=function(t,i){return"number"!=typeof t?a["outer"+n].call(this,t):this.each(function(){e(this).css(r,o(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(n){return arguments.length?t.call(this,e.camelCase(n)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(n,o){return"number"==typeof n?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),o&&o.call(t)},n)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var n,o,i=e(this[0]);i.length&&i[0]!==document;){if(("absolute"===(n=i.css("position"))||"relative"===n||"fixed"===n)&&(o=parseInt(i.css("zIndex"),10),!isNaN(o)&&0!==o))return o;i=i.parent()}return 0}}),e.ui.plugin={add:function(t,n,o){var i,r=e.ui[t].prototype;for(i in o)r.plugins[i]=r.plugins[i]||[],r.plugins[i].push([n,o[i]])},call:function(e,t,n,o){var i,r=e.plugins[t];if(r&&(o||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(i=0;i<r.length;i++)e.options[r[i][0]]&&r[i][1].apply(e.element,n)}};/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
var o=0,i=Array.prototype.slice;e.cleanData=function(t){return function(n){var o,i,r;for(r=0;null!=(i=n[r]);r++)try{o=e._data(i,"events"),o&&o.remove&&e(i).triggerHandler("remove")}catch(e){}t(n)}}(e.cleanData),e.widget=function(t,n,o){var i,r,a,s,l={},u=t.split(".")[0];return t=t.split(".")[1],i=u+"-"+t,o||(o=n,n=e.Widget),e.expr[":"][i.toLowerCase()]=function(t){return!!e.data(t,i)},e[u]=e[u]||{},r=e[u][t],a=e[u][t]=function(e,t){if(!this._createWidget)return new a(e,t);arguments.length&&this._createWidget(e,t)},e.extend(a,r,{version:o.version,_proto:e.extend({},o),_childConstructors:[]}),s=new n,s.options=e.widget.extend({},s.options),e.each(o,function(t,o){if(!e.isFunction(o))return void(l[t]=o);l[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},i=function(e){return n.prototype[t].apply(this,e)};return function(){var t,n=this._super,r=this._superApply;return this._super=e,this._superApply=i,t=o.apply(this,arguments),this._super=n,this._superApply=r,t}}()}),a.prototype=e.widget.extend(s,{widgetEventPrefix:r?s.widgetEventPrefix||t:t},l,{constructor:a,namespace:u,widgetName:t,widgetFullName:i}),r?(e.each(r._childConstructors,function(t,n){var o=n.prototype;e.widget(o.namespace+"."+o.widgetName,a,n._proto)}),delete r._childConstructors):n._childConstructors.push(a),e.widget.bridge(t,a),a},e.widget.extend=function(t){for(var n,o,r=i.call(arguments,1),a=0,s=r.length;a<s;a++)for(n in r[a])o=r[a][n],r[a].hasOwnProperty(n)&&void 0!==o&&(e.isPlainObject(o)?t[n]=e.isPlainObject(t[n])?e.widget.extend({},t[n],o):e.widget.extend({},o):t[n]=o);return t},e.widget.bridge=function(t,n){var o=n.prototype.widgetFullName||t;e.fn[t]=function(r){var a="string"==typeof r,s=i.call(arguments,1),l=this;return a?this.each(function(){var n,i=e.data(this,o);return"instance"===r?(l=i,!1):i?e.isFunction(i[r])&&"_"!==r.charAt(0)?(n=i[r].apply(i,s),n!==i&&void 0!==n?(l=n&&n.jquery?l.pushStack(n.get()):n,!1):void 0):e.error("no such method '"+r+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; attempted to call method '"+r+"'")}):(s.length&&(r=e.widget.extend.apply(null,[r].concat(s))),this.each(function(){var t=e.data(this,o);t?(t.option(r||{}),t._init&&t._init()):e.data(this,o,new n(r,this))})),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,n){n=e(n||this.defaultElement||this)[0],this.element=e(n),this.uuid=o++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),n!==this&&(e.data(n,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===n&&this.destroy()}}),this.document=e(n.style?n.ownerDocument:n.document||n),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,n){var o,i,r,a=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(a={},o=t.split("."),t=o.shift(),o.length){for(i=a[t]=e.widget.extend({},this.options[t]),r=0;r<o.length-1;r++)i[o[r]]=i[o[r]]||{},i=i[o[r]];if(t=o.pop(),1===arguments.length)return void 0===i[t]?null:i[t];i[t]=n}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];a[t]=n}return this._setOptions(a),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,n,o){var i,r=this;"boolean"!=typeof t&&(o=n,n=t,t=!1),o?(n=i=e(n),this.bindings=this.bindings.add(n)):(o=n,n=this.element,i=this.widget()),e.each(o,function(o,a){function s(){if(t||!0!==r.options.disabled&&!e(this).hasClass("ui-state-disabled"))return("string"==typeof a?r[a]:a).apply(r,arguments)}"string"!=typeof a&&(s.guid=a.guid=a.guid||s.guid||e.guid++);var l=o.match(/^([\w:-]*)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?i.delegate(c,u,s):n.bind(u,s)})},_off:function(t,n){n=(n||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(n).undelegate(n),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function n(){return("string"==typeof e?o[e]:e).apply(o,arguments)}var o=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,o){var i,r,a=this.options[t];if(o=o||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],r=n.originalEvent)for(i in r)i in n||(n[i]=r[i]);return this.element.trigger(n,o),!(e.isFunction(a)&&!1===a.apply(this.element[0],[n].concat(o))||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(o,i,r){"string"==typeof i&&(i={effect:i});var a,s=i?!0===i||"number"==typeof i?n:i.effect||n:t;i=i||{},"number"==typeof i&&(i={duration:i}),a=!e.isEmptyObject(i),i.complete=r,i.delay&&o.delay(i.delay),a&&e.effects&&e.effects.effect[s]?o[t](i):s!==t&&o[s]?o[s](i.duration,i.easing,r):o.queue(function(n){e(this)[t](),r&&r.call(o[0]),n()})}});var r=(e.widget,!1);e(document).mouseup(function(){r=!1});e.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(n){if(!0===e.data(n.target,t.widgetName+".preventClickEvent"))return e.removeData(n.target,t.widgetName+".preventClickEvent"),n.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(!r){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var n=this,o=1===t.which,i=!("string"!=typeof this.options.cancel||!t.target.nodeName)&&e(t.target).closest(this.options.cancel).length;return!(o&&!i&&this._mouseCapture(t))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){n.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=!1!==this._mouseStart(t),!this._mouseStarted)?(t.preventDefault(),!0):(!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return n._mouseMove(e)},this._mouseUpDelegate=function(e){return n._mouseUp(e)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),r=!0,!0))}},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button)return this._mouseUp(t);if(!t.which)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,t),this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),r=!1,!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}});/*!
 * jQuery UI Position 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
!function(){function t(e,t,n){return[parseFloat(e[0])*(p.test(e[0])?t/100:1),parseFloat(e[1])*(p.test(e[1])?n/100:1)]}function n(t,n){return parseInt(e.css(t,n),10)||0}function o(t){var n=t[0];return 9===n.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(n)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:n.preventDefault?{width:0,height:0,offset:{top:n.pageY,left:n.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var i,r,a=Math.max,s=Math.abs,l=Math.round,u=/left|center|right/,c=/top|center|bottom/,f=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,h=e.fn.position;e.position={scrollbarWidth:function(){if(void 0!==i)return i;var t,n,o=e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),r=o.children()[0];return e("body").append(o),t=r.offsetWidth,o.css("overflow","scroll"),n=r.offsetWidth,t===n&&(n=o[0].clientWidth),o.remove(),i=t-n},getScrollInfo:function(t){var n=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),o=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),i="scroll"===n||"auto"===n&&t.width<t.element[0].scrollWidth;return{width:"scroll"===o||"auto"===o&&t.height<t.element[0].scrollHeight?e.position.scrollbarWidth():0,height:i?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var n=e(t||window),o=e.isWindow(n[0]),i=!!n[0]&&9===n[0].nodeType;return{element:n,isWindow:o,isDocument:i,offset:n.offset()||{left:0,top:0},scrollLeft:n.scrollLeft(),scrollTop:n.scrollTop(),width:o||i?n.width():n.outerWidth(),height:o||i?n.height():n.outerHeight()}}},e.fn.position=function(i){if(!i||!i.of)return h.apply(this,arguments);i=e.extend({},i);var p,m,g,y,v,w,b=e(i.of),x=e.position.getWithinInfo(i.within),_=e.position.getScrollInfo(x),C=(i.collision||"flip").split(" "),T={};return w=o(b),b[0].preventDefault&&(i.at="left top"),m=w.width,g=w.height,y=w.offset,v=e.extend({},y),e.each(["my","at"],function(){var e,t,n=(i[this]||"").split(" ");1===n.length&&(n=u.test(n[0])?n.concat(["center"]):c.test(n[0])?["center"].concat(n):["center","center"]),n[0]=u.test(n[0])?n[0]:"center",n[1]=c.test(n[1])?n[1]:"center",e=f.exec(n[0]),t=f.exec(n[1]),T[this]=[e?e[0]:0,t?t[0]:0],i[this]=[d.exec(n[0])[0],d.exec(n[1])[0]]}),1===C.length&&(C[1]=C[0]),"right"===i.at[0]?v.left+=m:"center"===i.at[0]&&(v.left+=m/2),"bottom"===i.at[1]?v.top+=g:"center"===i.at[1]&&(v.top+=g/2),p=t(T.at,m,g),v.left+=p[0],v.top+=p[1],this.each(function(){var o,u,c=e(this),f=c.outerWidth(),d=c.outerHeight(),h=n(this,"marginLeft"),w=n(this,"marginTop"),S=f+h+n(this,"marginRight")+_.width,k=d+w+n(this,"marginBottom")+_.height,N=e.extend({},v),E=t(T.my,c.outerWidth(),c.outerHeight());"right"===i.my[0]?N.left-=f:"center"===i.my[0]&&(N.left-=f/2),"bottom"===i.my[1]?N.top-=d:"center"===i.my[1]&&(N.top-=d/2),N.left+=E[0],N.top+=E[1],r||(N.left=l(N.left),N.top=l(N.top)),o={marginLeft:h,marginTop:w},e.each(["left","top"],function(t,n){e.ui.position[C[t]]&&e.ui.position[C[t]][n](N,{targetWidth:m,targetHeight:g,elemWidth:f,elemHeight:d,collisionPosition:o,collisionWidth:S,collisionHeight:k,offset:[p[0]+E[0],p[1]+E[1]],my:i.my,at:i.at,within:x,elem:c})}),i.using&&(u=function(e){var t=y.left-N.left,n=t+m-f,o=y.top-N.top,r=o+g-d,l={target:{element:b,left:y.left,top:y.top,width:m,height:g},element:{element:c,left:N.left,top:N.top,width:f,height:d},horizontal:n<0?"left":t>0?"right":"center",vertical:r<0?"top":o>0?"bottom":"middle"};m<f&&s(t+n)<m&&(l.horizontal="center"),g<d&&s(o+r)<g&&(l.vertical="middle"),a(s(t),s(n))>a(s(o),s(r))?l.important="horizontal":l.important="vertical",i.using.call(this,e,l)}),c.offset(e.extend(N,{using:u}))})},e.ui.position={fit:{left:function(e,t){var n,o=t.within,i=o.isWindow?o.scrollLeft:o.offset.left,r=o.width,s=e.left-t.collisionPosition.marginLeft,l=i-s,u=s+t.collisionWidth-r-i;t.collisionWidth>r?l>0&&u<=0?(n=e.left+l+t.collisionWidth-r-i,e.left+=l-n):e.left=u>0&&l<=0?i:l>u?i+r-t.collisionWidth:i:l>0?e.left+=l:u>0?e.left-=u:e.left=a(e.left-s,e.left)},top:function(e,t){var n,o=t.within,i=o.isWindow?o.scrollTop:o.offset.top,r=t.within.height,s=e.top-t.collisionPosition.marginTop,l=i-s,u=s+t.collisionHeight-r-i;t.collisionHeight>r?l>0&&u<=0?(n=e.top+l+t.collisionHeight-r-i,e.top+=l-n):e.top=u>0&&l<=0?i:l>u?i+r-t.collisionHeight:i:l>0?e.top+=l:u>0?e.top-=u:e.top=a(e.top-s,e.top)}},flip:{left:function(e,t){var n,o,i=t.within,r=i.offset.left+i.scrollLeft,a=i.width,l=i.isWindow?i.scrollLeft:i.offset.left,u=e.left-t.collisionPosition.marginLeft,c=u-l,f=u+t.collisionWidth-a-l,d="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,p="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,h=-2*t.offset[0];c<0?((n=e.left+d+p+h+t.collisionWidth-a-r)<0||n<s(c))&&(e.left+=d+p+h):f>0&&((o=e.left-t.collisionPosition.marginLeft+d+p+h-l)>0||s(o)<f)&&(e.left+=d+p+h)},top:function(e,t){var n,o,i=t.within,r=i.offset.top+i.scrollTop,a=i.height,l=i.isWindow?i.scrollTop:i.offset.top,u=e.top-t.collisionPosition.marginTop,c=u-l,f=u+t.collisionHeight-a-l,d="top"===t.my[1],p=d?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,h="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,m=-2*t.offset[1];c<0?((o=e.top+p+h+m+t.collisionHeight-a-r)<0||o<s(c))&&(e.top+=p+h+m):f>0&&((n=e.top-t.collisionPosition.marginTop+p+h+m-l)>0||s(n)<f)&&(e.top+=p+h+m)}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,n,o,i,a,s=document.getElementsByTagName("body")[0],l=document.createElement("div");t=document.createElement(s?"div":"body"),o={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},s&&e.extend(o,{position:"absolute",left:"-1000px",top:"-1000px"});for(a in o)t.style[a]=o[a];t.appendChild(l),n=s||document.documentElement,n.insertBefore(t,n.firstChild),l.style.cssText="position: absolute; left: 10.7432222px;",i=e(l).offset().left,r=i>10&&i<11,t.innerHTML="",n.removeChild(t)}()}();var a=(e.ui.position,e);e.effects={effect:{}},/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
function(e,t){function n(e,t,n){var o=c[t.type]||{};return null==e?n||!t.def?null:t.def:(e=o.floor?~~e:parseFloat(e),isNaN(e)?t.def:o.mod?(e+o.mod)%o.mod:0>e?0:o.max<e?o.max:e)}function o(t){var n=l(),o=n._rgba=[];return t=t.toLowerCase(),p(s,function(e,i){var r,a=i.re.exec(t),s=a&&i.parse(a),l=i.space||"rgba";if(s)return r=n[l](s),n[u[l].cache]=r[u[l].cache],o=n._rgba=r._rgba,!1}),o.length?("0,0,0,0"===o.join()&&e.extend(o,r.transparent),n):r[t]}function i(e,t,n){return n=(n+1)%1,6*n<1?e+(t-e)*n*6:2*n<1?t:3*n<2?e+(t-e)*(2/3-n)*6:e}var r,a=/^([\-+])=\s*(\d+\.?\d*)/,s=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],l=e.Color=function(t,n,o,i){return new e.Color.fn.parse(t,n,o,i)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},c={byte:{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},f=l.support={},d=e("<p>")[0],p=e.each;d.style.cssText="background-color:rgba(1,1,1,.5)",f.rgba=d.style.backgroundColor.indexOf("rgba")>-1,p(u,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),l.fn=e.extend(l.prototype,{parse:function(t,i,a,s){if(void 0===t)return this._rgba=[null,null,null,null],this;(t.jquery||t.nodeType)&&(t=e(t).css(i),i=void 0);var c=this,f=e.type(t),d=this._rgba=[];/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
return void 0!==i&&(t=[t,i,a,s],f="array"),"string"===f?this.parse(o(t)||r._default):"array"===f?(p(u.rgba.props,function(e,o){d[o.idx]=n(t[o.idx],o)}),this):"object"===f?(t instanceof l?p(u,function(e,n){t[n.cache]&&(c[n.cache]=t[n.cache].slice())}):p(u,function(o,i){var r=i.cache;p(i.props,function(e,o){if(!c[r]&&i.to){if("alpha"===e||null==t[e])return;c[r]=i.to(c._rgba)}c[r][o.idx]=n(t[e],o,!0)}),c[r]&&e.inArray(null,c[r].slice(0,3))<0&&(c[r][3]=1,i.from&&(c._rgba=i.from(c[r])))}),this):void 0},is:function(e){var t=l(e),n=!0,o=this;return p(u,function(e,i){var r,a=t[i.cache];return a&&(r=o[i.cache]||i.to&&i.to(o._rgba)||[],p(i.props,function(e,t){if(null!=a[t.idx])return n=a[t.idx]===r[t.idx]})),n}),n},_space:function(){var e=[],t=this;return p(u,function(n,o){t[o.cache]&&e.push(n)}),e.pop()},transition:function(e,t){var o=l(e),i=o._space(),r=u[i],a=0===this.alpha()?l("transparent"):this,s=a[r.cache]||r.to(a._rgba),f=s.slice();return o=o[r.cache],p(r.props,function(e,i){var r=i.idx,a=s[r],l=o[r],u=c[i.type]||{};null!==l&&(null===a?f[r]=l:(u.mod&&(l-a>u.mod/2?a+=u.mod:a-l>u.mod/2&&(a-=u.mod)),f[r]=n((l-a)*t+a,i)))}),this[i](f)},blend:function(t){if(1===this._rgba[3])return this;var n=this._rgba.slice(),o=n.pop(),i=l(t)._rgba;return l(e.map(n,function(e,t){return(1-o)*i[t]+o*e}))},toRgbaString:function(){var t="rgba(",n=e.map(this._rgba,function(e,t){return null==e?t>2?1:0:e});return 1===n[3]&&(n.pop(),t="rgb("),t+n.join()+")"},toHslaString:function(){var t="hsla(",n=e.map(this.hsla(),function(e,t){return null==e&&(e=t>2?1:0),t&&t<3&&(e=Math.round(100*e)+"%"),e});return 1===n[3]&&(n.pop(),t="hsl("),t+n.join()+")"},toHexString:function(t){var n=this._rgba.slice(),o=n.pop();return t&&n.push(~~(255*o)),"#"+e.map(n,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,u.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t,n,o=e[0]/255,i=e[1]/255,r=e[2]/255,a=e[3],s=Math.max(o,i,r),l=Math.min(o,i,r),u=s-l,c=s+l,f=.5*c;return t=l===s?0:o===s?60*(i-r)/u+360:i===s?60*(r-o)/u+120:60*(o-i)/u+240,n=0===u?0:f<=.5?u/c:u/(2-c),[Math.round(t)%360,n,f,null==a?1:a]},u.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t=e[0]/360,n=e[1],o=e[2],r=e[3],a=o<=.5?o*(1+n):o+n-o*n,s=2*o-a;return[Math.round(255*i(s,a,t+1/3)),Math.round(255*i(s,a,t)),Math.round(255*i(s,a,t-1/3)),r]},p(u,function(t,o){var i=o.props,r=o.cache,s=o.to,u=o.from;l.fn[t]=function(t){if(s&&!this[r]&&(this[r]=s(this._rgba)),void 0===t)return this[r].slice();var o,a=e.type(t),c="array"===a||"object"===a?t:arguments,f=this[r].slice();return p(i,function(e,t){var o=c["object"===a?e:t.idx];null==o&&(o=f[t.idx]),f[t.idx]=n(o,t)}),u?(o=l(u(f)),o[r]=f,o):l(f)},p(i,function(n,o){l.fn[n]||(l.fn[n]=function(i){var r,s=e.type(i),l="alpha"===n?this._hsla?"hsla":"rgba":t,u=this[l](),c=u[o.idx];return"undefined"===s?c:("function"===s&&(i=i.call(this,c),s=e.type(i)),null==i&&o.empty?this:("string"===s&&(r=a.exec(i))&&(i=c+parseFloat(r[2])*("+"===r[1]?1:-1)),u[o.idx]=i,this[l](u)))})})}),l.hook=function(t){var n=t.split(" ");p(n,function(t,n){e.cssHooks[n]={set:function(t,i){var r,a,s="";if("transparent"!==i&&("string"!==e.type(i)||(r=o(i)))){if(i=l(r||i),!f.rgba&&1!==i._rgba[3]){for(a="backgroundColor"===n?t.parentNode:t;(""===s||"transparent"===s)&&a&&a.style;)try{s=e.css(a,"backgroundColor"),a=a.parentNode}catch(e){}i=i.blend(s&&"transparent"!==s?s:"_default")}i=i.toRgbaString()}try{t.style[n]=i}catch(e){}}},e.fx.step[n]=function(t){t.colorInit||(t.start=l(t.elem,n),t.end=l(t.end),t.colorInit=!0),e.cssHooks[n].set(t.elem,t.start.transition(t.end,t.pos))}})},l.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"),e.cssHooks.borderColor={expand:function(e){var t={};return p(["Top","Right","Bottom","Left"],function(n,o){t["border"+o+"Color"]=e}),t}},r=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(a),function(){function t(t){var n,o,i=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,r={};if(i&&i.length&&i[0]&&i[i[0]])for(o=i.length;o--;)n=i[o],"string"==typeof i[n]&&(r[e.camelCase(n)]=i[n]);else for(n in i)"string"==typeof i[n]&&(r[n]=i[n]);return r}function n(t,n){var o,r,a={};for(o in n)r=n[o],t[o]!==r&&(i[o]||!e.fx.step[o]&&isNaN(parseFloat(r))||(a[o]=r));return a}var o=["add","remove","toggle"],i={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,n){e.fx.step[n]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(a.style(e.elem,n,e.end),e.setAttr=!0)}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=function(i,r,a,s){var l=e.speed(r,a,s);return this.queue(function(){var r,a=e(this),s=a.attr("class")||"",u=l.children?a.find("*").addBack():a;u=u.map(function(){return{el:e(this),start:t(this)}}),r=function(){e.each(o,function(e,t){i[t]&&a[t+"Class"](i[t])})},r(),u=u.map(function(){return this.end=t(this.el[0]),this.diff=n(this.start,this.end),this}),a.attr("class",s),u=u.map(function(){var t=this,n=e.Deferred(),o=e.extend({},l,{queue:!1,complete:function(){n.resolve(t)}});return this.el.animate(this.diff,o),n.promise()}),e.when.apply(e,u.get()).done(function(){r(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),l.complete.call(a[0])})})},e.fn.extend({addClass:function(t){return function(n,o,i,r){return o?e.effects.animateClass.call(this,{add:n},o,i,r):t.apply(this,arguments)}}(e.fn.addClass),removeClass:function(t){return function(n,o,i,r){return arguments.length>1?e.effects.animateClass.call(this,{remove:n},o,i,r):t.apply(this,arguments)}}(e.fn.removeClass),toggleClass:function(t){return function(n,o,i,r,a){return"boolean"==typeof o||void 0===o?i?e.effects.animateClass.call(this,o?{add:n}:{remove:n},i,r,a):t.apply(this,arguments):e.effects.animateClass.call(this,{toggle:n},o,i,r)}}(e.fn.toggleClass),switchClass:function(t,n,o,i,r){return e.effects.animateClass.call(this,{add:n,remove:t},o,i,r)}})}(),function(){function t(t,n,o,i){return e.isPlainObject(t)&&(n=t,t=t.effect),t={effect:t},null==n&&(n={}),e.isFunction(n)&&(i=n,o=null,n={}),("number"==typeof n||e.fx.speeds[n])&&(i=o,o=n,n={}),e.isFunction(o)&&(i=o,o=null),n&&e.extend(t,n),o=o||n.duration,t.duration=e.fx.off?0:"number"==typeof o?o:o in e.fx.speeds?e.fx.speeds[o]:e.fx.speeds._default,t.complete=i||n.complete,t}function n(t){return!(t&&"number"!=typeof t&&!e.fx.speeds[t])||("string"==typeof t&&!e.effects.effect[t]||(!!e.isFunction(t)||"object"==typeof t&&!t.effect))}e.extend(e.effects,{version:"1.11.4",save:function(e,t){for(var n=0;n<t.length;n++)null!==t[n]&&e.data("ui-effects-"+t[n],e[0].style[t[n]])},restore:function(e,t){var n,o;for(o=0;o<t.length;o++)null!==t[o]&&(n=e.data("ui-effects-"+t[o]),void 0===n&&(n=""),e.css(t[o],n))},setMode:function(e,t){return"toggle"===t&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var n,o;switch(e[0]){case"top":n=0;break;case"middle":n=.5;break;case"bottom":n=1;break;default:n=e[0]/t.height}switch(e[1]){case"left":o=0;break;case"center":o=.5;break;case"right":o=1;break;default:o=e[1]/t.width}return{x:o,y:n}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var n={width:t.outerWidth(!0),height:t.outerHeight(!0),float:t.css("float")},o=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),i={width:t.width(),height:t.height()},r=document.activeElement;try{r.id}catch(e){r=document.body}return t.wrap(o),(t[0]===r||e.contains(t[0],r))&&e(r).focus(),o=t.parent(),"static"===t.css("position")?(o.css({position:"relative"}),t.css({position:"relative"})):(e.extend(n,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,o){n[o]=t.css(o),isNaN(parseInt(n[o],10))&&(n[o]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(i),o.css(n).show()},removeWrapper:function(t){var n=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===n||e.contains(t[0],n))&&e(n).focus()),t},setTransition:function(t,n,o,i){return i=i||{},e.each(n,function(e,n){var r=t.cssUnit(n);r[0]>0&&(i[n]=r[0]*o+r[1])}),i}}),e.fn.extend({effect:function(){function n(t){function n(){e.isFunction(r)&&r.call(i[0]),e.isFunction(t)&&t()}var i=e(this),r=o.complete,s=o.mode;(i.is(":hidden")?"hide"===s:"show"===s)?(i[s](),n()):a.call(i[0],o,n)}var o=t.apply(this,arguments),i=o.mode,r=o.queue,a=e.effects.effect[o.effect];return e.fx.off||!a?i?this[i](o.duration,o.complete):this.each(function(){o.complete&&o.complete.call(this)}):!1===r?this.each(n):this.queue(r||"fx",n)},show:function(e){return function(o){if(n(o))return e.apply(this,arguments);var i=t.apply(this,arguments);return i.mode="show",this.effect.call(this,i)}}(e.fn.show),hide:function(e){return function(o){if(n(o))return e.apply(this,arguments);var i=t.apply(this,arguments);return i.mode="hide",this.effect.call(this,i)}}(e.fn.hide),toggle:function(e){return function(o){if(n(o)||"boolean"==typeof o)return e.apply(this,arguments);var i=t.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)}}(e.fn.toggle),cssUnit:function(t){var n=this.css(t),o=[];return e.each(["em","px","%","pt"],function(e,t){n.indexOf(t)>0&&(o=[parseFloat(n),t])}),o}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,n){t[n]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,n=4;e<((t=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,n){e.easing["easeIn"+t]=n,e.easing["easeOut"+t]=function(e){return 1-n(1-e)},e.easing["easeInOut"+t]=function(e){return e<.5?n(2*e)/2:1-n(-2*e+2)/2}})}();e.effects,e.effects.effect.blind=function(t,n){var o,i,r,a=e(this),s=/up|down|vertical/,l=/up|left|vertical|horizontal/,u=["position","top","bottom","left","right","height","width"],c=e.effects.setMode(a,t.mode||"hide"),f=t.direction||"up",d=s.test(f),p=d?"height":"width",h=d?"top":"left",m=l.test(f),g={},y="show"===c;a.parent().is(".ui-effects-wrapper")?e.effects.save(a.parent(),u):e.effects.save(a,u),a.show(),o=e.effects.createWrapper(a).css({overflow:"hidden"}),i=o[p](),r=parseFloat(o.css(h))||0,g[p]=y?i:0,m||(a.css(d?"bottom":"right",0).css(d?"top":"left","auto").css({position:"absolute"}),g[h]=y?r:i+r),y&&(o.css(p,0),m||o.css(h,r+i)),o.animate(g,{duration:t.duration,easing:t.easing,queue:!1,complete:function(){"hide"===c&&a.hide(),e.effects.restore(a,u),e.effects.removeWrapper(a),n()}})},e.effects.effect.bounce=function(t,n){var o,i,r,a=e(this),s=["position","top","bottom","left","right","height","width"],l=e.effects.setMode(a,t.mode||"effect"),u="hide"===l,c="show"===l,f=t.direction||"up",d=t.distance,p=t.times||5,h=2*p+(c||u?1:0),m=t.duration/h,g=t.easing,y="up"===f||"down"===f?"top":"left",v="up"===f||"left"===f,w=a.queue(),b=w.length;for((c||u)&&s.push("opacity"),e.effects.save(a,s),a.show(),e.effects.createWrapper(a),d||(d=a["top"===y?"outerHeight":"outerWidth"]()/3),c&&(r={opacity:1},r[y]=0,a.css("opacity",0).css(y,v?2*-d:2*d).animate(r,m,g)),u&&(d/=Math.pow(2,p-1)),r={},r[y]=0,o=0;o<p;o++)i={},i[y]=(v?"-=":"+=")+d,a.animate(i,m,g).animate(r,m,g),d=u?2*d:d/2;u&&(i={opacity:0},i[y]=(v?"-=":"+=")+d,a.animate(i,m,g)),a.queue(function(){u&&a.hide(),e.effects.restore(a,s),e.effects.removeWrapper(a),n()}),b>1&&w.splice.apply(w,[1,0].concat(w.splice(b,h+1))),a.dequeue()},e.effects.effect.clip=function(t,n){var o,i,r,a=e(this),s=["position","top","bottom","left","right","height","width"],l=e.effects.setMode(a,t.mode||"hide"),u="show"===l,c=t.direction||"vertical",f="vertical"===c,d=f?"height":"width",p=f?"top":"left",h={};e.effects.save(a,s),a.show(),o=e.effects.createWrapper(a).css({overflow:"hidden"}),i="IMG"===a[0].tagName?o:a,r=i[d](),u&&(i.css(d,0),i.css(p,r/2)),h[d]=u?r:0,h[p]=u?0:r/2,i.animate(h,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){u||a.hide(),e.effects.restore(a,s),e.effects.removeWrapper(a),n()}})},e.effects.effect.drop=function(t,n){var o,i=e(this),r=["position","top","bottom","left","right","opacity","height","width"],a=e.effects.setMode(i,t.mode||"hide"),s="show"===a,l=t.direction||"left",u="up"===l||"down"===l?"top":"left",c="up"===l||"left"===l?"pos":"neg",f={opacity:s?1:0};e.effects.save(i,r),i.show(),e.effects.createWrapper(i),o=t.distance||i["top"===u?"outerHeight":"outerWidth"](!0)/2,s&&i.css("opacity",0).css(u,"pos"===c?-o:o),f[u]=(s?"pos"===c?"+=":"-=":"pos"===c?"-=":"+=")+o,i.animate(f,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===a&&i.hide(),e.effects.restore(i,r),e.effects.removeWrapper(i),n()}})},e.effects.effect.explode=function(t,n){function o(){w.push(this),w.length===f*d&&i()}function i(){p.css({visibility:"visible"}),e(w).remove(),m||p.hide(),n()}var r,a,s,l,u,c,f=t.pieces?Math.round(Math.sqrt(t.pieces)):3,d=f,p=e(this),h=e.effects.setMode(p,t.mode||"hide"),m="show"===h,g=p.show().css("visibility","hidden").offset(),y=Math.ceil(p.outerWidth()/d),v=Math.ceil(p.outerHeight()/f),w=[];for(r=0;r<f;r++)for(l=g.top+r*v,c=r-(f-1)/2,a=0;a<d;a++)s=g.left+a*y,u=a-(d-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-a*y,top:-r*v}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:y,height:v,left:s+(m?u*y:0),top:l+(m?c*v:0),opacity:m?0:1}).animate({left:s+(m?0:u*y),top:l+(m?0:c*v),opacity:m?1:0},t.duration||500,t.easing,o)},e.effects.effect.fade=function(t,n){var o=e(this),i=e.effects.setMode(o,t.mode||"toggle");o.animate({opacity:i},{queue:!1,duration:t.duration,easing:t.easing,complete:n})},e.effects.effect.fold=function(t,n){var o,i,r=e(this),a=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(r,t.mode||"hide"),l="show"===s,u="hide"===s,c=t.size||15,f=/([0-9]+)%/.exec(c),d=!!t.horizFirst,p=l!==d,h=p?["width","height"]:["height","width"],m=t.duration/2,g={},y={};e.effects.save(r,a),r.show(),o=e.effects.createWrapper(r).css({overflow:"hidden"}),i=p?[o.width(),o.height()]:[o.height(),o.width()],f&&(c=parseInt(f[1],10)/100*i[u?0:1]),l&&o.css(d?{height:0,width:c}:{height:c,width:0}),g[h[0]]=l?i[0]:c,y[h[1]]=l?i[1]:0,o.animate(g,m,t.easing).animate(y,m,t.easing,function(){u&&r.hide(),e.effects.restore(r,a),e.effects.removeWrapper(r),n()})},e.effects.effect.highlight=function(t,n){var o=e(this),i=["backgroundImage","backgroundColor","opacity"],r=e.effects.setMode(o,t.mode||"show"),a={backgroundColor:o.css("backgroundColor")};"hide"===r&&(a.opacity=0),e.effects.save(o,i),o.show().css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(a,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===r&&o.hide(),e.effects.restore(o,i),n()}})},e.effects.effect.size=function(t,n){var o,i,r,a=e(this),s=["position","top","bottom","left","right","width","height","overflow","opacity"],l=["position","top","bottom","left","right","overflow","opacity"],u=["width","height","overflow"],c=["fontSize"],f=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],d=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=e.effects.setMode(a,t.mode||"effect"),h=t.restore||"effect"!==p,m=t.scale||"both",g=t.origin||["middle","center"],y=a.css("position"),v=h?s:l,w={height:0,width:0,outerHeight:0,outerWidth:0};"show"===p&&a.show(),o={height:a.height(),width:a.width(),outerHeight:a.outerHeight(),outerWidth:a.outerWidth()},"toggle"===t.mode&&"show"===p?(a.from=t.to||w,a.to=t.from||o):(a.from=t.from||("show"===p?w:o),a.to=t.to||("hide"===p?w:o)),r={from:{y:a.from.height/o.height,x:a.from.width/o.width},to:{y:a.to.height/o.height,x:a.to.width/o.width}},"box"!==m&&"both"!==m||(r.from.y!==r.to.y&&(v=v.concat(f),a.from=e.effects.setTransition(a,f,r.from.y,a.from),a.to=e.effects.setTransition(a,f,r.to.y,a.to)),r.from.x!==r.to.x&&(v=v.concat(d),a.from=e.effects.setTransition(a,d,r.from.x,a.from),a.to=e.effects.setTransition(a,d,r.to.x,a.to))),"content"!==m&&"both"!==m||r.from.y!==r.to.y&&(v=v.concat(c).concat(u),a.from=e.effects.setTransition(a,c,r.from.y,a.from),a.to=e.effects.setTransition(a,c,r.to.y,a.to)),e.effects.save(a,v),a.show(),e.effects.createWrapper(a),a.css("overflow","hidden").css(a.from),g&&(i=e.effects.getBaseline(g,o),a.from.top=(o.outerHeight-a.outerHeight())*i.y,a.from.left=(o.outerWidth-a.outerWidth())*i.x,a.to.top=(o.outerHeight-a.to.outerHeight)*i.y,a.to.left=(o.outerWidth-a.to.outerWidth)*i.x),a.css(a.from),"content"!==m&&"both"!==m||(f=f.concat(["marginTop","marginBottom"]).concat(c),d=d.concat(["marginLeft","marginRight"]),u=s.concat(f).concat(d),a.find("*[width]").each(function(){var n=e(this),o={height:n.height(),width:n.width(),outerHeight:n.outerHeight(),outerWidth:n.outerWidth()};h&&e.effects.save(n,u),n.from={height:o.height*r.from.y,width:o.width*r.from.x,outerHeight:o.outerHeight*r.from.y,outerWidth:o.outerWidth*r.from.x},n.to={height:o.height*r.to.y,width:o.width*r.to.x,outerHeight:o.height*r.to.y,outerWidth:o.width*r.to.x},r.from.y!==r.to.y&&(n.from=e.effects.setTransition(n,f,r.from.y,n.from),n.to=e.effects.setTransition(n,f,r.to.y,n.to)),r.from.x!==r.to.x&&(n.from=e.effects.setTransition(n,d,r.from.x,n.from),n.to=e.effects.setTransition(n,d,r.to.x,n.to)),n.css(n.from),n.animate(n.to,t.duration,t.easing,function(){h&&e.effects.restore(n,u)})})),a.animate(a.to,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){0===a.to.opacity&&a.css("opacity",a.from.opacity),"hide"===p&&a.hide(),e.effects.restore(a,v),h||("static"===y?a.css({position:"relative",top:a.to.top,left:a.to.left}):e.each(["top","left"],function(e,t){a.css(t,function(t,n){var o=parseInt(n,10),i=e?a.to.left:a.to.top;return"auto"===n?i+"px":o+i+"px"})})),e.effects.removeWrapper(a),n()}})},e.effects.effect.scale=function(t,n){var o=e(this),i=e.extend(!0,{},t),r=e.effects.setMode(o,t.mode||"effect"),a=parseInt(t.percent,10)||(0===parseInt(t.percent,10)?0:"hide"===r?0:100),s=t.direction||"both",l=t.origin,u={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()},c={y:"horizontal"!==s?a/100:1,x:"vertical"!==s?a/100:1};i.effect="size",i.queue=!1,i.complete=n,"effect"!==r&&(i.origin=l||["middle","center"],i.restore=!0),i.from=t.from||("show"===r?{height:0,width:0,outerHeight:0,outerWidth:0}:u),i.to={height:u.height*c.y,width:u.width*c.x,outerHeight:u.outerHeight*c.y,outerWidth:u.outerWidth*c.x},i.fade&&("show"===r&&(i.from.opacity=0,i.to.opacity=1),"hide"===r&&(i.from.opacity=1,i.to.opacity=0)),o.effect(i)},e.effects.effect.puff=function(t,n){var o=e(this),i=e.effects.setMode(o,t.mode||"hide"),r="hide"===i,a=parseInt(t.percent,10)||150,s=a/100,l={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()};e.extend(t,{effect:"scale",queue:!1,fade:!0,mode:i,complete:n,percent:r?a:100,from:r?l:{height:l.height*s,width:l.width*s,outerHeight:l.outerHeight*s,outerWidth:l.outerWidth*s}}),o.effect(t)},e.effects.effect.pulsate=function(t,n){var o,i=e(this),r=e.effects.setMode(i,t.mode||"show"),a="show"===r,s="hide"===r,l=a||"hide"===r,u=2*(t.times||5)+(l?1:0),c=t.duration/u,f=0,d=i.queue(),p=d.length;for(!a&&i.is(":visible")||(i.css("opacity",0).show(),f=1),o=1;o<u;o++)i.animate({opacity:f},c,t.easing),f=1-f;i.animate({opacity:f},c,t.easing),i.queue(function(){s&&i.hide(),n()}),p>1&&d.splice.apply(d,[1,0].concat(d.splice(p,u+1))),i.dequeue()},e.effects.effect.shake=function(t,n){var o,i=e(this),r=["position","top","bottom","left","right","height","width"],a=e.effects.setMode(i,t.mode||"effect"),s=t.direction||"left",l=t.distance||20,u=t.times||3,c=2*u+1,f=Math.round(t.duration/c),d="up"===s||"down"===s?"top":"left",p="up"===s||"left"===s,h={},m={},g={},y=i.queue(),v=y.length;for(e.effects.save(i,r),i.show(),e.effects.createWrapper(i),h[d]=(p?"-=":"+=")+l,m[d]=(p?"+=":"-=")+2*l,g[d]=(p?"-=":"+=")+2*l,i.animate(h,f,t.easing),o=1;o<u;o++)i.animate(m,f,t.easing).animate(g,f,t.easing);i.animate(m,f,t.easing).animate(h,f/2,t.easing).queue(function(){"hide"===a&&i.hide(),e.effects.restore(i,r),e.effects.removeWrapper(i),n()}),v>1&&y.splice.apply(y,[1,0].concat(y.splice(v,c+1))),i.dequeue()},e.effects.effect.slide=function(t,n){var o,i=e(this),r=["position","top","bottom","left","right","width","height"],a=e.effects.setMode(i,t.mode||"show"),s="show"===a,l=t.direction||"left",u="up"===l||"down"===l?"top":"left",c="up"===l||"left"===l,f={};e.effects.save(i,r),i.show(),o=t.distance||i["top"===u?"outerHeight":"outerWidth"](!0),e.effects.createWrapper(i).css({overflow:"hidden"}),s&&i.css(u,c?isNaN(o)?"-"+o:-o:o),f[u]=(s?c?"+=":"-=":c?"-=":"+=")+o,i.animate(f,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===a&&i.hide(),e.effects.restore(i,r),e.effects.removeWrapper(i),n()}})},e.effects.effect.transfer=function(t,n){var o=e(this),i=e(t.to),r="fixed"===i.css("position"),a=e("body"),s=r?a.scrollTop():0,l=r?a.scrollLeft():0,u=i.offset(),c={top:u.top-s,left:u.left-l,height:i.innerHeight(),width:i.innerWidth()},f=o.offset(),d=e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({top:f.top-s,left:f.left-l,height:o.innerHeight(),width:o.innerWidth(),position:r?"fixed":"absolute"}).animate(c,t.duration,t.easing,function(){d.remove(),n()})}}),/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){function t(e){return s.raw?e:encodeURIComponent(e)}function n(e){return s.raw?e:decodeURIComponent(e)}function o(e){return t(s.json?JSON.stringify(e):String(e))}function i(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(a," ")),s.json?JSON.parse(e):e}catch(e){}}function r(t,n){var o=s.raw?t:i(t);return e.isFunction(n)?n(o):o}var a=/\+/g,s=e.cookie=function(i,a,l){if(arguments.length>1&&!e.isFunction(a)){if(l=e.extend({},s.defaults,l),"number"==typeof l.expires){var u=l.expires,c=l.expires=new Date;c.setMilliseconds(c.getMilliseconds()+864e5*u)}return document.cookie=[t(i),"=",o(a),l.expires?"; expires="+l.expires.toUTCString():"",l.path?"; path="+l.path:"",l.domain?"; domain="+l.domain:"",l.secure?"; secure":""].join("")}for(var f=i?void 0:{},d=document.cookie?document.cookie.split("; "):[],p=0,h=d.length;p<h;p++){var m=d[p].split("="),g=n(m.shift()),y=m.join("=");if(i===g){f=r(y,a);break}i||void 0===(y=r(y))||(f[g]=y)}return f};s.defaults={},e.removeCookie=function(t,n){return e.cookie(t,"",e.extend({},n,{expires:-1})),!e.cookie(t)}}),void 0===Currency)var Currency={};Currency.cookie={configuration:{expires:365,path:"/",domain:window.location.hostname},name:"currency",write:function(e){jQuery.cookie(this.name,e,this.configuration)},read:function(){return jQuery.cookie(this.name)},destroy:function(){jQuery.cookie(this.name,null,this.configuration)}},Currency.moneyFormats={USD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} USD"},EUR:{money_format:"&euro;{{amount}}",money_with_currency_format:"&euro;{{amount}} EUR"},GBP:{money_format:"&pound;{{amount}}",money_with_currency_format:"&pound;{{amount}} GBP"},CAD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} CAD"},ALL:{money_format:"Lek {{amount}}",money_with_currency_format:"Lek {{amount}} ALL"},DZD:{money_format:"DA {{amount}}",money_with_currency_format:"DA {{amount}} DZD"},AOA:{money_format:"Kz{{amount}}",money_with_currency_format:"Kz{{amount}} AOA"},ARS:{money_format:"${{amount_with_comma_separator}}",money_with_currency_format:"${{amount_with_comma_separator}} ARS"},AMD:{money_format:"{{amount}} AMD",money_with_currency_format:"{{amount}} AMD"},AWG:{money_format:"Afl{{amount}}",money_with_currency_format:"Afl{{amount}} AWG"},AUD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} AUD"},BBD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} Bds"},AZN:{money_format:"m.{{amount}}",money_with_currency_format:"m.{{amount}} AZN"},BDT:{money_format:"Tk {{amount}}",money_with_currency_format:"Tk {{amount}} BDT"},BSD:{money_format:"BS${{amount}}",money_with_currency_format:"BS${{amount}} BSD"},BHD:{money_format:"{{amount}}0 BD",money_with_currency_format:"{{amount}}0 BHD"},BYR:{money_format:"Br {{amount}}",money_with_currency_format:"Br {{amount}} BYR"},BZD:{money_format:"BZ${{amount}}",money_with_currency_format:"BZ${{amount}} BZD"},BTN:{money_format:"Nu {{amount}}",money_with_currency_format:"Nu {{amount}} BTN"},BAM:{money_format:"KM {{amount_with_comma_separator}}",money_with_currency_format:"KM {{amount_with_comma_separator}} BAM"},BRL:{money_format:"R$ {{amount_with_comma_separator}}",money_with_currency_format:"R$ {{amount_with_comma_separator}} BRL"},BOB:{money_format:"Bs{{amount_with_comma_separator}}",money_with_currency_format:"Bs{{amount_with_comma_separator}} BOB"},BWP:{money_format:"P{{amount}}",money_with_currency_format:"P{{amount}} BWP"},BND:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} BND"},BGN:{money_format:"{{amount}} лв",money_with_currency_format:"{{amount}} лв BGN"},MMK:{money_format:"K{{amount}}",money_with_currency_format:"K{{amount}} MMK"},KHR:{money_format:"KHR{{amount}}",money_with_currency_format:"KHR{{amount}}"},KYD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} KYD"},XAF:{money_format:"FCFA{{amount}}",money_with_currency_format:"FCFA{{amount}} XAF"},CLP:{money_format:"${{amount_no_decimals}}",money_with_currency_format:"${{amount_no_decimals}} CLP"},CNY:{money_format:"&#165;{{amount}}",money_with_currency_format:"&#165;{{amount}} CNY"},COP:{money_format:"${{amount_with_comma_separator}}",money_with_currency_format:"${{amount_with_comma_separator}} COP"},CRC:{money_format:"&#8353; {{amount_with_comma_separator}}",money_with_currency_format:"&#8353; {{amount_with_comma_separator}} CRC"},HRK:{money_format:"{{amount_with_comma_separator}} kn",money_with_currency_format:"{{amount_with_comma_separator}} kn HRK"},CZK:{money_format:"{{amount_with_comma_separator}} K&#269;",money_with_currency_format:"{{amount_with_comma_separator}} K&#269;"},DKK:{money_format:"{{amount_with_comma_separator}}",money_with_currency_format:"kr.{{amount_with_comma_separator}}"},DOP:{money_format:"RD$ {{amount_with_comma_separator}}",money_with_currency_format:"RD$ {{amount_with_comma_separator}}"},XCD:{money_format:"${{amount}}",money_with_currency_format:"EC${{amount}}"},EGP:{money_format:"LE {{amount}}",money_with_currency_format:"LE {{amount}} EGP"},ETB:{money_format:"Br{{amount}}",money_with_currency_format:"Br{{amount}} ETB"},XPF:{money_format:"{{amount_no_decimals_with_comma_separator}} XPF",money_with_currency_format:"{{amount_no_decimals_with_comma_separator}} XPF"},FJD:{money_format:"${{amount}}",money_with_currency_format:"FJ${{amount}}"},GMD:{money_format:"D {{amount}}",money_with_currency_format:"D {{amount}} GMD"},GHS:{money_format:"GH&#8373;{{amount}}",money_with_currency_format:"GH&#8373;{{amount}}"},GTQ:{money_format:"Q{{amount}}",money_with_currency_format:"{{amount}} GTQ"},GYD:{money_format:"G${{amount}}",money_with_currency_format:"${{amount}} GYD"},GEL:{money_format:"{{amount}} GEL",money_with_currency_format:"{{amount}} GEL"},HNL:{money_format:"L {{amount}}",money_with_currency_format:"L {{amount}} HNL"},HKD:{money_format:"${{amount}}",money_with_currency_format:"HK${{amount}}"},HUF:{money_format:"{{amount_no_decimals_with_comma_separator}}",money_with_currency_format:"{{amount_no_decimals_with_comma_separator}} Ft"},ISK:{money_format:"{{amount_no_decimals}} kr",money_with_currency_format:"{{amount_no_decimals}} kr ISK"},INR:{money_format:"Rs. {{amount}}",money_with_currency_format:"Rs. {{amount}}"},IDR:{money_format:"{{amount_with_comma_separator}}",money_with_currency_format:"Rp {{amount_with_comma_separator}}"},ILS:{money_format:"{{amount}} NIS",money_with_currency_format:"{{amount}} NIS"},JMD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} JMD"},JPY:{money_format:"&#165;{{amount_no_decimals}}",money_with_currency_format:"&#165;{{amount_no_decimals}} JPY"},JEP:{money_format:"&pound;{{amount}}",money_with_currency_format:"&pound;{{amount}} JEP"},JOD:{money_format:"{{amount}}0 JD",money_with_currency_format:"{{amount}}0 JOD"},KZT:{money_format:"{{amount}} KZT",money_with_currency_format:"{{amount}} KZT"},KES:{money_format:"KSh{{amount}}",money_with_currency_format:"KSh{{amount}}"},KWD:{money_format:"{{amount}}0 KD",money_with_currency_format:"{{amount}}0 KWD"},KGS:{money_format:"лв{{amount}}",money_with_currency_format:"лв{{amount}}"},LVL:{money_format:"Ls {{amount}}",money_with_currency_format:"Ls {{amount}} LVL"},LBP:{money_format:"L&pound;{{amount}}",money_with_currency_format:"L&pound;{{amount}} LBP"},LTL:{money_format:"{{amount}} Lt",money_with_currency_format:"{{amount}} Lt"},MGA:{money_format:"Ar {{amount}}",money_with_currency_format:"Ar {{amount}} MGA"},MKD:{money_format:"ден {{amount}}",money_with_currency_format:"ден {{amount}} MKD"},MOP:{money_format:"MOP${{amount}}",money_with_currency_format:"MOP${{amount}}"},MVR:{money_format:"Rf{{amount}}",money_with_currency_format:"Rf{{amount}} MRf"},MXN:{money_format:"$ {{amount}}",money_with_currency_format:"$ {{amount}} MXN"},MYR:{money_format:"RM{{amount}} MYR",money_with_currency_format:"RM{{amount}} MYR"},MUR:{money_format:"Rs {{amount}}",money_with_currency_format:"Rs {{amount}} MUR"},MDL:{money_format:"{{amount}} MDL",money_with_currency_format:"{{amount}} MDL"},MAD:{money_format:"{{amount}} dh",money_with_currency_format:"Dh {{amount}} MAD"},MNT:{money_format:"{{amount_no_decimals}} &#8366",money_with_currency_format:"{{amount_no_decimals}} MNT"},MZN:{money_format:"{{amount}} Mt",money_with_currency_format:"Mt {{amount}} MZN"},NAD:{money_format:"N${{amount}}",money_with_currency_format:"N${{amount}} NAD"},NPR:{money_format:"Rs{{amount}}",money_with_currency_format:"Rs{{amount}} NPR"},ANG:{money_format:"&fnof;{{amount}}",money_with_currency_format:"{{amount}} NA&fnof;"},NZD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} NZD"},NIO:{money_format:"C${{amount}}",money_with_currency_format:"C${{amount}} NIO"},NGN:{money_format:"&#8358;{{amount}}",money_with_currency_format:"&#8358;{{amount}} NGN"},NOK:{money_format:"kr {{amount_with_comma_separator}}",money_with_currency_format:"kr {{amount_with_comma_separator}} NOK"},OMR:{money_format:"{{amount_with_comma_separator}} OMR",money_with_currency_format:"{{amount_with_comma_separator}} OMR"},PKR:{money_format:"Rs.{{amount}}",money_with_currency_format:"Rs.{{amount}} PKR"},PGK:{money_format:"K {{amount}}",money_with_currency_format:"K {{amount}} PGK"},PYG:{money_format:"Gs. {{amount_no_decimals_with_comma_separator}}",money_with_currency_format:"Gs. {{amount_no_decimals_with_comma_separator}} PYG"},PEN:{money_format:"S/. {{amount}}",money_with_currency_format:"S/. {{amount}} PEN"},PHP:{money_format:"&#8369;{{amount}}",money_with_currency_format:"&#8369;{{amount}} PHP"},PLN:{money_format:"{{amount_with_comma_separator}} zl",money_with_currency_format:"{{amount_with_comma_separator}} zl PLN"},QAR:{money_format:"QAR {{amount_with_comma_separator}}",money_with_currency_format:"QAR {{amount_with_comma_separator}}"},RON:{money_format:"{{amount_with_comma_separator}} lei",money_with_currency_format:"{{amount_with_comma_separator}} lei RON"},RUB:{money_format:"&#1088;&#1091;&#1073;{{amount_with_comma_separator}}",money_with_currency_format:"&#1088;&#1091;&#1073;{{amount_with_comma_separator}} RUB"},RWF:{money_format:"{{amount_no_decimals}} RF",money_with_currency_format:"{{amount_no_decimals}} RWF"},WST:{money_format:"WS$ {{amount}}",money_with_currency_format:"WS$ {{amount}} WST"},SAR:{money_format:"{{amount}} SR",money_with_currency_format:"{{amount}} SAR"},STD:{money_format:"Db {{amount}}",money_with_currency_format:"Db {{amount}} STD"},RSD:{money_format:"{{amount}} RSD",money_with_currency_format:"{{amount}} RSD"},SCR:{money_format:"Rs {{amount}}",money_with_currency_format:"Rs {{amount}} SCR"},SGD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} SGD"},SYP:{money_format:"S&pound;{{amount}}",money_with_currency_format:"S&pound;{{amount}} SYP"},ZAR:{money_format:"R {{amount}}",money_with_currency_format:"R {{amount}} ZAR"},KRW:{money_format:"&#8361;{{amount_no_decimals}}",money_with_currency_format:"&#8361;{{amount_no_decimals}} KRW"},LKR:{money_format:"Rs {{amount}}",money_with_currency_format:"Rs {{amount}} LKR"},SEK:{money_format:"{{amount_no_decimals}} kr",money_with_currency_format:"{{amount_no_decimals}} kr SEK"},CHF:{money_format:"SFr. {{amount}}",money_with_currency_format:"SFr. {{amount}} CHF"},TWD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} TWD"},THB:{money_format:"{{amount}} &#xe3f;",money_with_currency_format:"{{amount}} &#xe3f; THB"},TZS:{money_format:"{{amount}} TZS",money_with_currency_format:"{{amount}} TZS"},TTD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} TTD"},TND:{money_format:"{{amount}}",money_with_currency_format:"{{amount}} DT"},TRY:{money_format:"{{amount}}TL",money_with_currency_format:"{{amount}}TL"},UGX:{money_format:"Ush {{amount_no_decimals}}",money_with_currency_format:"Ush {{amount_no_decimals}} UGX"},UAH:{money_format:"₴{{amount}}",money_with_currency_format:"₴{{amount}} UAH"},AED:{money_format:"Dhs. {{amount}}",money_with_currency_format:"Dhs. {{amount}} AED"},UYU:{money_format:"${{amount_with_comma_separator}}",money_with_currency_format:"${{amount_with_comma_separator}} UYU"},VUV:{money_format:"${{amount}}",money_with_currency_format:"${{amount}}VT"},VEF:{money_format:"Bs. {{amount_with_comma_separator}}",money_with_currency_format:"Bs. {{amount_with_comma_separator}} VEF"},VND:{money_format:"{{amount_no_decimals_with_comma_separator}}&#8363;",money_with_currency_format:"{{amount_no_decimals_with_comma_separator}} VND"},XBT:{money_format:"{{amount_no_decimals}} BTC",money_with_currency_format:"{{amount_no_decimals}} BTC"},XOF:{money_format:"CFA{{amount}}",money_with_currency_format:"CFA{{amount}} XOF"},ZMW:{money_format:"K{{amount_no_decimals_with_comma_separator}}",money_with_currency_format:"ZMW{{amount_no_decimals_with_comma_separator}}"}},Currency.formatMoney=function(e,t){function n(e,t){return void 0===e?t:e}function o(e,t,o,i){if(t=n(t,2),o=n(o,","),i=n(i,"."),isNaN(e)||null==e)return 0;e=(e/100).toFixed(t);var r=e.split(".");return r[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+o)+(r[1]?i+r[1]:"")}if("function"==typeof Shopify.formatMoney)return Shopify.formatMoney(e,t);"string"==typeof e&&(e=e.replace(".",""));var i="",r=/\{\{\s*(\w+)\s*\}\}/,a=t||"${{amount}}";switch(a.match(r)[1]){case"amount":i=o(e,2);break;case"amount_no_decimals":i=o(e,0);break;case"amount_with_comma_separator":i=o(e,2,".",",");break;case"amount_no_decimals_with_comma_separator":i=o(e,0,".",",")}return a.replace(r,i)},Currency.currentCurrency="",Currency.format="money_with_currency_format",Currency.convertAll=function(e,t,n,o,i){jQuery(n||"span.money").each(function(){if(0!=jQuery(this).html().length&&(jQuery(this).attr("data-currency")!==t||0!=i)){if(jQuery(this).attr("data-currency-"+t)&&0==i)jQuery(this).html(jQuery(this).attr("data-currency-"+t));else{var n=0,r=Currency.moneyFormats[e][o||Currency.format]||"{{amount}}",a=Currency.moneyFormats[t][o||Currency.format]||"{{amount}}";n=-1!==r.indexOf("amount_no_decimals")?Currency.convert(100*parseInt(jQuery(this).html().replace(/[^0-9]/g,""),10),e,t):"JOD"===e||"KWD"==e||"BHD"==e?Currency.convert(parseInt(jQuery(this).html().replace(/[^0-9]/g,""),10)/10,e,t):Currency.convert(parseInt(jQuery(this).html().replace(/[^0-9]/g,""),10),e,t);var s=Currency.formatMoney(n,a);jQuery(this).html(s),jQuery(this).attr("data-currency-"+t,s)}jQuery(this).attr("data-currency",t)}}),this.currentCurrency=t,this.cookie.write(t)},function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){var t=e.event.dispatch||e.event.handle,n=e.event.special,o="D"+ +new Date,i="D"+(+new Date+1);n.scrollstart={setup:function(i){var r,a=e.extend({latency:n.scrollstop.latency},i),s=function(e){var n=this,o=arguments;r?clearTimeout(r):(e.type="scrollstart",t.apply(n,o)),r=setTimeout(function(){r=null},a.latency)};e(this).bind("scroll",s).data(o,s)},teardown:function(){e(this).unbind("scroll",e(this).data(o))}},n.scrollstop={latency:250,setup:function(o){var r,a=e.extend({latency:n.scrollstop.latency},o),s=function(e){var n=this,o=arguments;r&&clearTimeout(r),r=setTimeout(function(){r=null,e.type="scrollstop",t.apply(n,o)},a.latency)};e(this).bind("scroll",s).data(i,s)},teardown:function(){e(this).unbind("scroll",e(this).data(i))}}}),/*!

 matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license

*/
window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),n=document.getElementsByTagName("script")[0],o=null;t.type="text/css",t.id="matchmediajs-test",n.parentNode.insertBefore(t,n),o="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle,e={matchMedium:function(e){var n="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return t.styleSheet?t.styleSheet.cssText=n:t.textContent=n,"1px"===o.width}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}()),function(e,t,n){function o(e,t){return typeof e===t}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):_?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function r(){var e=t.body;return e||(e=i(_?"svg":"body"),e.fake=!0),e}function a(e,n,o,a){var s,l,u,c,f="modernizr",d=i("div"),p=r();if(parseInt(o,10))for(;o--;)u=i("div"),u.id=a?a[o]:f+(o+1),d.appendChild(u);return s=i("style"),s.type="text/css",s.id="s"+f,(p.fake?p:d).appendChild(s),p.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),d.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",c=x.style.overflow,x.style.overflow="hidden",x.appendChild(p)),l=n(d,e),p.fake?(p.parentNode.removeChild(p),x.style.overflow=c,x.offsetHeight):d.parentNode.removeChild(d),!!l}function s(e,t){return!!~(""+e).indexOf(t)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(e,t){return function(){return e.apply(t,arguments)}}function c(e,t,n){var i;for(var r in e)if(e[r]in t)return!1===n?e[r]:(i=t[e[r]],o(i,"function")?u(i,n||t):i);return!1}function f(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(t,n,o){var i;if("getComputedStyle"in e){i=getComputedStyle.call(e,t,n);var r=e.console;if(null!==i)o&&(i=i.getPropertyValue(o));else if(r){var a=r.error?"error":"log";r[a].call(r,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else i=!n&&t.currentStyle&&t.currentStyle[o];return i}function p(t,o){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(f(t[i]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var r=[];i--;)r.push("("+f(t[i])+":"+o+")");return r=r.join(" or "),a("@supports ("+r+") { #modernizr { position: absolute; } }",function(e){return"absolute"==d(e,null,"position")})}return n}function h(e,t,r,a){function u(){f&&(delete P.style,delete P.modElem)}if(a=!o(a,"undefined")&&a,!o(r,"undefined")){var c=p(e,r);if(!o(c,"undefined"))return c}for(var f,d,h,m,g,y=["modernizr","tspan","samp"];!P.style&&y.length;)f=!0,P.modElem=i(y.shift()),P.style=P.modElem.style;for(h=e.length,d=0;h>d;d++)if(m=e[d],g=P.style[m],s(m,"-")&&(m=l(m)),P.style[m]!==n){if(a||o(r,"undefined"))return u(),"pfx"!=t||m;try{P.style[m]=r}catch(e){}if(P.style[m]!=g)return u(),"pfx"!=t||m}return u(),!1}function m(e,t,n,i,r){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+k.join(a+" ")+a).split(" ");return o(t,"string")||o(t,"undefined")?h(s,t,i,r):(s=(e+" "+N.join(a+" ")+a).split(" "),c(s,t,n))}function g(e,t,o){return m(e,n,n,t,o)}var y=[],v=[],w={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){v.push({name:e,fn:t,options:n})},addAsyncTest:function(e){v.push({name:null,fn:e})}},b=function(){};b.prototype=w,b=new b,b.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}});var x=t.documentElement,_="svg"===x.nodeName.toLowerCase(),C=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];w._prefixes=C;var T=w.testStyles=a;b.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var o=["@media (",C.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");T(o,function(e){n=9===e.offsetTop})}return n});var S="Moz O ms Webkit",k=w._config.usePrefixes?S.split(" "):[];w._cssomPrefixes=k;var N=w._config.usePrefixes?S.toLowerCase().split(" "):[];w._domPrefixes=N;var E={elem:i("modernizr")};b._q.push(function(){delete E.elem});var P={style:E.elem.style};b._q.unshift(function(){delete P.style}),w.testAllProps=m,w.testAllProps=g,b.addTest("cssgridlegacy",g("grid-columns","10px",!0)),b.addTest("cssgrid",g("grid-template-rows","none",!0)),function(){var e,t,n,i,r,a,s;for(var l in v)if(v.hasOwnProperty(l)){if(e=[],t=v[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=o(t.fn,"function")?t.fn():t.fn,r=0;r<e.length;r++)a=e[r],s=a.split("."),1===s.length?b[s[0]]=i:(!b[s[0]]||b[s[0]]instanceof Boolean||(b[s[0]]=new Boolean(b[s[0]])),b[s[0]][s[1]]=i),y.push((i?"":"no-")+s.join("-"))}}(),function(e){var t=x.className,n=b._config.classPrefix||"";if(_&&(t=t.baseVal),b._config.enableJSClass){var o=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(o,"$1"+n+"js$2")}b._config.enableClasses&&(t+=" "+n+e.join(" "+n),_?x.className.baseVal=t:x.className=t)}(y),delete w.addTest,delete w.addAsyncTest;for(var A=0;A<b._q.length;A++)b._q[A]();e.Modernizr=b}(window,document);
(function() {
  var FrameworkAlign,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  FrameworkAlign = (function() {
    function FrameworkAlign(element1, type1) {
      this.element = element1;
      this.type = type1;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.fillYSpace = bind(this.fillYSpace, this);
      this.checkOverlap = bind(this.checkOverlap, this);
      this.createOverlapDetectors = bind(this.createOverlapDetectors, this);
      this.position = bind(this.position, this);
      this.parent = this.element.parent();
      this.left_side_border;
      this.right_element_width = null;
      this.position();
      this.fillYSpace();
      this.createOverlapDetectors();
      this.resizeListeners();
    }

    FrameworkAlign.prototype.position = function() {
      if (this.type === 'center-x') {
        this.element.css({
          'margin-left': -(this.element.outerWidth() / 2)
        });
      }
      if (this.type === 'center-y') {
        return this.element.css({
          'margin-top': -(this.element.outerHeight() / 2)
        });
      }
    };

    FrameworkAlign.prototype.createOverlapDetectors = function() {
      var _this;
      _this = this;
      if (_this.type === 'right') {
        return this.right_element_width = _this.element.outerWidth();
      }
    };

    FrameworkAlign.prototype.checkOverlap = function() {
      var _this, left_element, left_side_border, right_side_border;
      _this = this;
      if (_this.type === 'right') {
        _this.parent.removeClass('overlap');
        left_element = _this.parent.children().eq(_this.element.index() - 1);
        left_side_border = left_element.position().left + left_element.outerWidth();
        right_side_border = _this.parent.outerWidth() - _this.right_element_width;
        if (left_side_border >= right_side_border) {
          return _this.parent.addClass('overlap');
        }
      }
    };

    FrameworkAlign.prototype.fillYSpace = function() {
      var _this, container_height, text_panel_height;
      _this = this;
      if (_this.type === 'fill-y--dynamic') {
        container_height = _this.parent.outerHeight();
        text_panel_height = _this.parent.find('.fw--align--fill-y--fixed').outerHeight();
        return _this.element.outerHeight(container_height - text_panel_height);
      }
    };

    FrameworkAlign.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      $(window).on('resize.FrameworkAlign', function() {
        _this.checkOverlap();
        return _this.fillYSpace();
      });
      return setTimeout(function() {
        return _this.checkOverlap();
      }, 1);
    };

    return FrameworkAlign;

  })();

  theme.classes.FrameworkAnimation = (function() {
    function FrameworkAnimation() {}

    return FrameworkAnimation;

  })();

  theme.classes.FrameworkCart = (function() {
    function FrameworkCart(root) {
      var _this;
      this.root = root;
      this.convertCurrency = bind(this.convertCurrency, this);
      this.openModalListener = bind(this.openModalListener, this);
      this.openOffCanvasListener = bind(this.openOffCanvasListener, this);
      this.removeItem = bind(this.removeItem, this);
      this.removeItemListeners = bind(this.removeItemListeners, this);
      this.updateTotalsComplete = bind(this.updateTotalsComplete, this);
      this.updateTotals = bind(this.updateTotals, this);
      this.plusQuantity = bind(this.plusQuantity, this);
      this.minusQuantity = bind(this.minusQuantity, this);
      this.updateQuantityListeners = bind(this.updateQuantityListeners, this);
      this.addItem = bind(this.addItem, this);
      this.renderOther = bind(this.renderOther, this);
      this.renderListener = bind(this.renderListener, this);
      this.renderCart = bind(this.renderCart, this);
      _this = this;
      _this.adjusting_qty_timer = null;
      _this.table_content = _this.root.find('form > .content');
      _this.render_trigger = $('.fw--cart-modal--trigger-render');
      _this.totals = {};
      _this.add_locked = false;
      _this.render_locked = false;
      if (_this.root.hasClass('off-canvas')) {
        _this.view = 'off canvas';
      }
      if (_this.root.hasClass('modal--content')) {
        _this.view = 'modal';
      }
      _this.temp_quantity = 0;
      _this.renderCart();
      if (_this.view === 'off canvas') {
        _this.openOffCanvasListener();
      }
      _this.openModalListener();
      _this.renderListener();
    }

    FrameworkCart.prototype.renderCart = function(callback) {
      var _this;
      _this = this;
	console.log("render locked:"+_this.render_locked)
      if (!_this.render_locked) {
        _this.render_locked = true;
        _this.table_content.empty();
        return $.ajax({
          type: "GET",
          url: "/cart.js",
          dataType: "json"
        }).done(function(data, textStatus, jqXHR) {
          	console.log("text status:"+textStatus)
          var cart, index, item, j, len, ref, row;
          if (textStatus === 'success') {
            cart = data;
            if (cart.items.length) {
              _this.root.removeClass('no-items');
            } else {
              _this.root.addClass('no-items');
            }
            ref = cart.items;
//             console.log(ref);
            for (index = j = 0, len = ref.length; j < len; index = ++j) {
              item = ref[index];
//               console.log(item);
              item.image_url = Shopify.resizeImage(item.image, "400x");
              item.price = Currency.formatMoney(item.price, theme.money_format);
              if ((index + 1) === cart.items.length) {
                row = '<div product-id="'+ item.id +'" class="variant-id last-variant width--12" data-variant-id=' + item.variant_id + '>';
              } else {
                row = '<div product-id="'+ item.id +'" class="variant-id last-variant width--12" data-variant-id=' + item.variant_id + '>';
              }
              row += '<div class="container-cart">';
              if (item.image_url === null) {
                row += '<div class="test"></div>';
              } else {
                row += '<div class="image-cart"><a href="' + item.url + '"><img src="' + item.image_url + '" alt="' + item.title + '"></a></div>';
              }
              row += '<div class="rightside"><div class="cart-title"><a href="' + item.url + '">' + item.title + '</a></div>';
              row += '<div class="containthing">';
              row += '<div class="input--number" id=' + item.variant_id + '  data-variant-id=' + item.variant_id + '>';
              row += '<a tabindex="0" aria-label="' + theme.translations.remove_one_item + '" class="minus">' + theme.utils.addSymbol('minus') + '</a>';
              row += '<input type="text" value="' + item.quantity + '" min="1" pattern="[1-9]*">';
              row += '<a tabindex="0" aria-label="' + theme.translations.add_one_item + '" class="plus">' + theme.utils.addSymbol('plus') + '</a>';
              row += '</div>';
              if ( item.properties ) {
                if ( item.properties['_free']) {
                  row += '<div class="cart-price money">FREE</div>';
                } else {
                  row += '<div class="cart-price" data-variant-id=' + item.variant_id + '>' + item.price + '</div>';
                }
              } else {
                row += '<div class="cart-price money" data-variant-id=' + item.variant_id + '>' + item.price + '</div>';
              }

              if ( item.properties ) {
                if (item.properties['_free']) {
                  row += '<span class="cart--discount-message">This gift is on us!</span>';
                }
              }
              row += '</div></div></div>';
              row += '<div class="remove-cart" data-variant-id=' + item.variant_id + '>';
              row += '<a aria-label="' + theme.translations.remove_item + '" role="button" href="#" class="cart--remove-button remove  '+ item.variant_id +'"><img src="https://cdn.shopify.com/s/files/1/2112/6981/t/28/assets/close.png?6280"/></a>';
              row += '</div>';

              row += '</div>';
              row += '</div>';
              row += '<div class="spacer spacing--3y"></div>';
              _this.table_content.append(row);
            }
            row = '<div class="totals width--12 text-align--center ">';
            row += '<div class="block spacing--3y width--12 width--large-4 font--size-3 text-align--large-right text--uppercase">';
            row += '<span class="spacing--3">' + theme.translations.cart_subtotal + '</span>';
            row += '<span class="total spacing--3 money font--accent font--subheading--size cstmmoneyy">' + _this.totals.price + '</span>';
            row += '</div>';
            row += '</div>';
            row += '<div class="spacer spacing--3y show--small-medium"></div>';
            _this.table_content.append(row);
            _this.updateTotals();
            if (callback) {
              callback();
            }
            $(window).trigger('resize.FrameworkModal');
            _this.render_locked = false;
            _this.removeItemListeners();
            _this.updateQuantityListeners();

            // Added for free gift function
            if (theme.crFreeGiftEnable == 'true') {
              console.log('--- Called Free giftify from theme.js ---');
//               crFreeGiftify();
            }

            return _this.convertCurrency(_this.root.find('.money'));
          } else {
            return console.log('cart - render item status - ' + textStatus);
          }
        }).fail(function(jqXHR, textStatus) {
          console.log("cart rendering failed");
          return _this.render_locked = false;
        });
      }
    };

    FrameworkCart.prototype.renderListener = function() {
      var _this;
      _this = this;
      return _this.root.on('renderCart', function() {
        return _this.renderCart();
      });
    };

    FrameworkCart.prototype.renderOther = function() {
      var _this;
      _this = this;
      if (theme.utils.mqs.current_window === 'small') {
        return $('.fw--cart.modal--content').trigger('renderCart');
      } else {
        return $('.fw--cart.off-canvas').trigger('renderCart');
      }
    };

    FrameworkCart.prototype.addItem = function(form, callback) {
      var _this;
      _this = this;
      console.log("Add item")
      if (!_this.add_locked) {
        _this.add_locked = true;
        return $.ajax({
          type: "POST",
          url: "/cart/add.js",
          dataType: "json",
          data: form.serialize()
        }).done(function(data, textStatus, jqXHR) {
          callback(true);
          _this.renderOther();
          return _this.add_locked = false;
        }).fail(function(jqXHR, textStatus) {
          callback(false, $.parseJSON(jqXHR.responseText).description);
          return _this.add_locked = false;
        });
      }
    };


    FrameworkCart.prototype.updateQuantityListeners = function() {
      var _this;
      _this = this;
//            console.log("Update item")


      _this.table_content.find('.input--number input').attr("autocomplete", "off").on('keyup.LayoutCartModal paste.LayoutCartModal', function() {
        var input, input_wrapper, variant_id;
        input_wrapper = $(this).closest('.input--number');
        input = input_wrapper.find('input');
        if (parseInt(input.val()) > 0) {
          input_wrapper.addClass('updating');
          clearTimeout(_this.adjusting_qty_timer);
          variant_id = $(this).closest('.variant-id').data('variant-id');
          _this.adjusting_qty_timer = setTimeout(function() {
            input_wrapper.removeClass('updating');
            return _this.updateTotals();
          }, 500);
        } else if (parseInt(input.val()) === 0) {
          variant_id = $(this).closest('.variant-id').data('variant-id');
          _this.removeItem(variant_id);
          if ($(this).closest('form').find('.variant-id').length === 1) {
            _this.root.addClass('no-items');
          } else {
            $(this).closest('.variant-id').remove();
          }
        }
        return false;
      });
      _this.table_content.find('.input--number .minus').on('keypress.LayoutCartModal click.LayoutCartModal', function(e) {
        var input, input_wrapper, variant_id;
        if (theme.utils.a11yClick(e) === true) {
          input_wrapper = $(this).closest('.input--number');
          input = input_wrapper.find('input');
          if (parseInt(input.val()) > 1) {
            input_wrapper.addClass('updating');
            clearTimeout(_this.adjusting_qty_timer);
            input.val(parseInt(input.val()) - 1);
            variant_id = $(this).closest('.variant-id').data('variant-id');
            _this.adjusting_qty_timer = setTimeout(function() {
              _this.minusQuantity(variant_id, parseInt(input.val()));
              input_wrapper.removeClass('updating');
              return _this.updateTotals();
            }, 500);
          }
          return false;
        }
      });
      return _this.table_content.find('.input--number .plus').on('keypress.LayoutCartModal click.LayoutCartModal', function(e) {
        var input, input_wrapper, variant_id;
        if (theme.utils.a11yClick(e) === true) {
          clearTimeout(_this.adjusting_qty_timer);
          input_wrapper = $(this).closest('.input--number');
          input = input_wrapper.find('input');
          if (_this.temp_quantity === 0) {
            _this.temp_quantity = parseInt(input.val());
          }
          input_wrapper.addClass('updating');
          input.val(1 + parseInt(input.val()));
          variant_id = $(this).closest('.variant-id').data('variant-id');
          _this.adjusting_qty_timer = setTimeout(function() {
            var add_quantity;
            add_quantity = parseInt(input.val()) - _this.temp_quantity;
            return _this.plusQuantity(variant_id, add_quantity, function(pass, error) {
              if (pass) {
                input_wrapper.removeClass('updating');
                _this.updateTotals();
                return _this.temp_quantity = 0;
              } else {
                input.val(_this.temp_quantity);
                input_wrapper.removeClass('updating');
                _this.updateTotals();
                return _this.temp_quantity = 0;
              }
            });
          }, 500);
          return false;
        }
      });
    };

    FrameworkCart.prototype.minusQuantity = function(variant_id, quantity) {
      var _this;
      _this = this;
      return $.ajax({
        type: "POST",
        url: "/cart/change.js",
        dataType: "json",
        data: 'quantity=' + quantity + '&id=' + variant_id
      }).done(function(data, textStatus, jqXHR) {
        if (textStatus === 'success') {
          _this.updateTotals();
          return _this.renderOther();
        } else {
          return console.log('cart - update cart item status - ' + textStatus);
        }
      }).fail(function(jqXHR, textStatus) {
        return console.log("cart - update failed");
      });
    };

    FrameworkCart.prototype.plusQuantity = function(variant_id, quantity, callback) {
      var _this;
      _this = this;
      if (!_this.add_locked) {
        _this.add_locked = true;
        return $.ajax({
          type: "POST",
          url: "/cart/add.js",
          dataType: "json",
          data: 'quantity=' + quantity + '&id=' + variant_id
        }).done(function(data, textStatus, jqXHR) {
          callback(true);
          _this.renderOther();
          return _this.add_locked = false;
        }).fail(function(jqXHR, textStatus) {
          callback(false, $.parseJSON(jqXHR.responseText).description);
          return _this.add_locked = false;
        });
      }
    };

    FrameworkCart.prototype.updateTotals = function() {
      var _this;
      _this = this;
      return $.ajax({
        type: "GET",
        url: "/cart.js",
        dataType: "json"
      }).done(function(data, textStatus, jqXHR) {
        var cart, cart_total, item, j, len, ref;
        if (textStatus === 'success') {
          cart = data;
          cart_total = {};
          cart_total.quantity = 0;
          cart_total.price = 0;
          ref = cart.items;
          for (j = 0, len = ref.length; j < len; j++) {
            item = ref[j];
            cart_total.quantity += item.quantity;
            cart_total.price += item.price * item.quantity;
          }
          _this.totals.count = cart_total.quantity;
          _this.totals.price = Currency.formatMoney(cart_total.price, theme.money_format);
          _this.render_trigger.find('.count').html(_this.totals.count);
          _this.render_trigger.find('.total-price').html(_this.totals.price);
          _this.table_content.find('.total').html(_this.totals.price);
          $('.layout--header .layout--off-canvas--open.right').html(_this.totals.count);
          $('.layout--header .cart-link .count').html('(' + _this.totals.count + ')');
          $('.layout--header .cart-link .count.no-bracket').html( _this.totals.count );
          if (_this.totals.count > 0) {
            _this.render_trigger.css('display', 'inline-block');
            $('.layout--header .cart-link .count').css('display', 'inline');
            $('.header--cart-count').css('display', 'inline-block');
          } else {
            _this.render_trigger.hide();
            $('.layout--header .cart-link .count').hide();
          }
          if (theme.currency_switcher_enabled) {
            _this.convertCurrency(_this.render_trigger.find('.total-price'));
            _this.convertCurrency(_this.table_content.find('.total'));
          }

          // Added by Craig R for currency converter - April 28, 2019 */
          if (theme.multiple_currencies) {
            // Currency.resetCartTotalAttr();
            // Currency.convertModalPrices(shopCurrency, $('[name=currencies]').val());
          }

          return _this.updateTotalsComplete();

        } else {
          return console.log('cart - update totals item status - ' + textStatus);
        }
      }).fail(function(jqXHR, textStatus) {
        return console.log("cart - updating totals failed");
      });
    };

    FrameworkCart.prototype.updateTotalsComplete = function() {
      var _this;
      check_cart();
//       valupdate();
       checkitemcountcart();

      return _this = this;
    };

    FrameworkCart.prototype.removeItemListeners = function() {
      var _this;
      _this = this;
      console.log("Remove item listensers")
      return _this.table_content.find('a.remove').on('click.LayoutCartModal', function() {
        var variant_id;
        variant_id = $(this).closest('.variant-id').data('variant-id');
        console.log("Tried to remove item")
        _this.removeItem(variant_id);
                console.log(variant_id)
        if ($(this).closest('form').find('.variant-id').length === 1) {
          _this.root.addClass('no-items');
          $(window).trigger('resize.FrameworkModal');
        } else {
          $(this).closest('.variant-id').remove();
        }
        _this.updateTotals();
        return false;
      });
    };

    FrameworkCart.prototype.removeItem = function(variant_id) {
      var _this;
      _this = this;
      return _this.minusQuantity(variant_id, 0);
    };

    FrameworkCart.prototype.openOffCanvasListener = function() {
      var _this;
      _this = this;
      return $('.layout--off-canvas--cart--open-trigger').on('click', function() {
        $('.layout--off-canvas--right-sidebar').trigger('open');
        return false;
      });
    };

    FrameworkCart.prototype.openModalListener = function() {
      var _this;
      _this = this;
      return $('.fw--cart-modal--trigger-render').on('click', function() {
        $('.cart-link .modal--link').trigger('click');
        return false;
      });
    };

    FrameworkCart.prototype.convertCurrency = function(elems) {
      var _this;
      _this = this;
      if (theme.currency_switcher_enabled) {
        return Currency.convertAll(shopCurrency, jQuery('[name=currencies]').val());
      } else {
        return false;
      }
    };

    return FrameworkCart;

  })();

  theme.classes.FrameworkFeaturedCollections = (function() {
    function FrameworkFeaturedCollections(root) {
      var _this;
      this.root = root;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      _this = this;
      _this.item_container = _this.root.find('.featured-collections--body');
      _this.items = _this.root.find('.featured-collections--item');
      _this.matchImageHeights();
      _this.resizeListeners();
    }

    FrameworkFeaturedCollections.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      return theme.utils.matchImageHeights(_this.item_container, _this.items, '.featured-collections--image');
    };

    FrameworkFeaturedCollections.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.FeaturedCollections', theme.utils.debounce(100, function() {
        return _this.matchImageHeights();
      }));
    };

    return FrameworkFeaturedCollections;

  })();

  theme.classes.FrameworkFeaturedGrid = (function() {
    function FrameworkFeaturedGrid(root) {
      var _this;
      this.root = root;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      _this = this;
      _this.item_container = _this.root.find('.featured-grid--body');
      _this.items = _this.root.find('.featured-grid--item');
      _this.text_position = _this.root.data('text-position');
      _this.matchImageHeights();
      _this.resizeListeners();
    }

    FrameworkFeaturedGrid.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      _this.items.find('.featured-grid--item--image, .placeholder--root').css('height', 'auto');
      if (_this.text_position === 'center' && theme.utils.mqs.current_window !== 'small') {
        return;
      }
      return theme.utils.matchImageHeights(_this.item_container, _this.items, '.featured-grid--item--image');
    };

    FrameworkFeaturedGrid.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.FeaturedGrid', theme.utils.debounce(100, function() {
        return _this.matchImageHeights();
      }));
    };

    return FrameworkFeaturedGrid;

  })();

  theme.classes.FrameworkFeaturedProduct = (function() {
    function FrameworkFeaturedProduct(root) {
      var _this;
      this.root = root;
      this.addProductComplete = bind(this.addProductComplete, this);
      this.renderCart = bind(this.renderCart, this);
      this.addToCartListener = bind(this.addToCartListener, this);
      this.updateVariantImage = bind(this.updateVariantImage, this);
      this.sectionListeners = bind(this.sectionListeners, this);
      this.variantSelected = bind(this.variantSelected, this);
      this.initiateVariants = bind(this.initiateVariants, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.id = _this.root.data('id');
      _this.add_button = _this.root.find('.featured-product--add-to-cart');
      _this.cart_form = _this.root.find('.featured-product--cart-form > form');
      _this.compare_price = _this.root.find('.featured-product--compare-price');
      _this.main_images = _this.root.find('.featured-product--image');
      _this.price = _this.root.find('.featured-product--actual-price');
      _this.price_wrapper = _this.root.find('.featured-product--price-wrapper');
      _this.smart_payment_buttons = _this.root.find('.featured-product--smart-payment-buttons');
      _this.unavailable_variant = _this.root.find('.featured-product--unavailable-variant');
      _this.variant_sold_out = _this.root.find('.featured-product--sold-out--variant');
      _this.cart_form = _this.root.find('.featured-product--cart-form > form');
      _this.json = $.parseJSON(_this.root.find('.featured-product--json').text());
      _this.load();
    }

    FrameworkFeaturedProduct.prototype.load = function() {
      var _this;
      _this = this;
      _this.initiateVariants();
      return _this.addToCartListener();
    };

    FrameworkFeaturedProduct.prototype.initiateVariants = function() {
      var _this, id, options;
      _this = this;
      if (_this.root.find('select').length > 0) {
        id = 'featured-product--select--' + _this.id;
        return options = new Shopify.OptionSelectors(id, {
          product: _this.json,
          onVariantSelected: _this.variantSelected,
          enableHistoryState: false
        });
      }
    };

    FrameworkFeaturedProduct.prototype.variantSelected = function(variant, selector, options) {
      var _this, product_sold_out;
      _this = this;
      product_sold_out = false;
      if (_this.root.find('.featured-product--sold-out--product').length) {
        product_sold_out = true;
      }
      _this.variant_sold_out.hide();
      _this.unavailable_variant.hide();
      _this.add_button.hide();
      _this.price_wrapper.hide();
      if (!variant) {
        _this.unavailable_variant.show();
        _this.smart_payment_buttons.hide();
        return false;
      } else if (variant && variant.available) {
        _this.price_wrapper.show();
        _this.add_button.show();
        _this.smart_payment_buttons.show();
      } else if (product_sold_out) {
        _this.variant_sold_out.hide();
        _this.add_button.hide();
        _this.smart_payment_buttons.hide();
      } else {
        _this.variant_sold_out.show();
        _this.smart_payment_buttons.hide();
      }
      _this.price.html(Shopify.formatMoney(variant.price, theme.money_format));
      if (variant.compare_at_price > variant.price) {
        _this.compare_price.html(Shopify.formatMoney(variant.compare_at_price, theme.money_format));
        _this.compare_price.show();
      } else {
        _this.compare_price.hide();
      }
      if (variant.featured_image) {
        return _this.updateVariantImage(variant.featured_image.id);
      }
    };

    FrameworkFeaturedProduct.prototype.sectionListeners = function() {
      var _this;
      _this = this;
      return _this.root.on('theme:section:load', function() {
        return new Shopify.OptionSelectors('featured-product--select', {
          product: theme.product_json,
          onVariantSelected: _this.variantSelected,
          enableHistoryState: true
        });
      });
    };

    FrameworkFeaturedProduct.prototype.updateVariantImage = function(variant_id) {
      var _this, variant_image;
      _this = this;
      _this.main_images.attr('data-active', 'false');
      variant_image = _this.main_images.filter('[data-image-id="' + variant_id + '"]');
      return variant_image.attr('data-active', 'true');
    };

    FrameworkFeaturedProduct.prototype.addToCartListener = function() {
      var _this;
      _this = this;
      if (_this.cart_form.length > 0) {
        return _this.cart_form.submit(function() {
          _this.cart_form.find('.error').remove();
          _this.add_button.attr('data-loading', 'true');
          theme.partials.Cart.addItem($(this), function(pass, error) {
                        console.log("pass:"+pass)
            if (pass) {
              return _this.renderCart();
            } else {
              _this.cart_form.append('<div class="featured-product--error error">' + error + '</div>');
              return _this.add_button.attr('data-loading', 'false');
            }
          });
          return false;
        });
      }
    };

    FrameworkFeaturedProduct.prototype.renderCart = function() {
      var _this;
      _this = this;
      return theme.partials.Cart.renderCart(function() {
        return _this.addProductComplete();
      });
    };

    FrameworkFeaturedProduct.prototype.addProductComplete = function() {
      var _this;
      _this = this;
      _this.add_button.attr('data-loading', 'false');
      return $('.modal.cart-link .modal--link').trigger('click');
    };

    return FrameworkFeaturedProduct;

  })();

  theme.classes.FrameworkFeedbackBar = (function() {
    function FrameworkFeedbackBar(root) {
      var _this;
      this.root = root;
      this.load = bind(this.load, this);
      _this = this;
      _this.messages = _this.root.find('.feedback-bar--message span');
      _this.load();
    }

    FrameworkFeedbackBar.prototype.load = function() {
      var _this, anchor_tag, message, message_elem;
      _this = this;
      _this.messages.hide();
      anchor_tag = window.location.hash.substr(1);
      message = anchor_tag.replace('feedback-bar--', '');
      message_elem = _this.messages.filter('[data-feedback-bar--message="' + message + '"]');
      if (message_elem.length) {
        message_elem.show();
        setTimeout(function() {
          return _this.root.attr('data-feedback-bar--open', 'true');
        }, 200);
        return setTimeout(function() {
          return _this.root.attr('data-feedback-bar--open', 'false');
        }, 3000);
      }
    };

    return FrameworkFeedbackBar;

  })();

  theme.classes.FrameworkInstagram = (function() {
    function FrameworkInstagram(container1) {
      var _this;
      this.container = container1;
      this.load = bind(this.load, this);
      _this = this;
      _this.username = _this.container.data('username');
      _this.access_token = _this.container.data('access-token');
      _this.body = _this.container.find('.instagram--body');
      _this.rows = _this.container.data('rows');
      _this.columns = _this.container.data('columns');
      _this.total_items = _this.rows * _this.columns;
      if (theme.utils.mqs.current_window === 'small') {
        _this.total_items = 4;
      }
      _this.load();
    }

    FrameworkInstagram.prototype.load = function() {
      var _this;
      _this = this;
      if (_this.access_token.length < 1) {
        return false;
      }
      return $.ajax({
        dataType: "jsonp",
        url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + _this.access_token + '&count=' + _this.total_items,
        success: function(response) {
          var data, i, img_src, j, ref, results1;
          if (response.meta.code === 200) {
            data = response.data;
            results1 = [];
            for (i = j = 0, ref = _this.total_items - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
              if (data[i]) {
                img_src = data[i].images.standard_resolution.url;
                img_src = img_src.replace("http:", "https:");
                results1.push(_this.body.append('<a class="instagram--item" target="_blank" href="' + data[i].link + '" > <div class="instagram--item-container"> <div class="instagram--image" style="background-image: url(\'' + img_src + '\');" > </div> </div> </a>'));
              } else {
                results1.push(void 0);
              }
            }
            return results1;
          } else {
            return _this.items.append('<h4 class="error">' + response.meta.error_message + '</h4>');
          }
        },
        error: function(jqXHR, textStatus) {
          console.log(jqXHR);
          return console.log(textStatus);
        }
      });
    };

    return FrameworkInstagram;

  })();

  theme.classes.FrameworkLoadingAnimation = (function() {
    function FrameworkLoadingAnimation(root) {
      var _this;
      this.root = root;
      _this = this;
      if (_this.root.hasClass('tiny')) {
        _this.root.spin('tiny');
      } else {
        _this.root.spin('small');
      }
    }

    return FrameworkLoadingAnimation;

  })();

  theme.classes.FrameworkMap = (function() {
    function FrameworkMap(root) {
      var _this;
      this.root = root;
      this.buildStyles = bind(this.buildStyles, this);
      this.buildMap = bind(this.buildMap, this);
      this.geolocate = bind(this.geolocate, this);
      this.loadMapsApi = bind(this.loadMapsApi, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.api_status = null;
      _this.map_instance = null;
      _this.key = _this.root.data('api-key');
      _this.address = _this.root.data('address');
      _this.theme = _this.root.data('theme');
      _this.styles = null;
      _this.container = _this.root.find('.map--google-maps');
      _this.center = null;
      _this.load();
    }

    FrameworkMap.prototype.load = function() {
      var _this;
      _this = this;
      if (_this.container.length > 0) {
        return _this.loadMapsApi();
      }
    };

    FrameworkMap.prototype.loadMapsApi = function() {
      var _this, other_map_loading_checker;
      _this = this;
      if (theme.utils.google_map_api_status === 'loading') {
        return other_map_loading_checker = setInterval(function() {
          if (theme.utils.google_map_api_status === 'loaded') {
            _this.geolocate();
            return clearInterval(other_map_loading_checker);
          }
        }, 100);
      } else if (typeof window.google === 'undefined') {
        theme.utils.google_map_api_status = 'loading';
        return $.getScript('https://maps.googleapis.com/maps/api/js?key=' + _this.key).then(function() {
          _this.geolocate();
          return theme.utils.google_map_api_status = 'loaded';
        });
      } else {
        return _this.geolocate();
      }
    };

    FrameworkMap.prototype.geolocate = function() {
      var _this, geocoder;
      _this = this;
      geocoder = new google.maps.Geocoder;
      return geocoder.geocode({
        address: _this.address
      }, function(results, status) {
        if (status === 'OK') {
          _this.center = results[0].geometry.location;
          _this.buildStyles();
          return _this.buildMap();
        } else {
          return console.log('couldn\'t convert address with geocoder');
        }
      });
    };

    FrameworkMap.prototype.buildMap = function() {
      var _this, center, map, mapOptions, marker;
      _this = this;
      mapOptions = {
        zoom: 15,
        center: _this.center,
        disableDefaultUI: true,
        zoomControl: true,
        scrollwheel: false,
        styles: _this.styles
      };
      map = new google.maps.Map(_this.container[0], mapOptions);
      center = map.getCenter();
      marker = new google.maps.Marker({
        map: map,
        position: map.getCenter()
      });
      return _this.map_instance = google.maps.event.addDomListener(window, 'resize', theme.utils.debounce(500, function() {
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
      }));
    };

    FrameworkMap.prototype.buildStyles = function() {
      var _this;
      _this = this;
      if (_this.theme === 'grayscale') {
        return _this.styles = [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          }, {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }, {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          }, {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          }, {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          }, {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          }, {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dadada"
              }
            ]
          }, {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          }, {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }, {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          }, {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#c9c9c9"
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }
        ];
      } else if (_this.theme === 'dark') {
        return _this.styles = [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          }, {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }, {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          }, {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }, {
            "featureType": "administrative.land_parcel",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }, {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          }, {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#181818"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1b1b1b"
              }
            ]
          }, {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#2c2c2c"
              }
            ]
          }, {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#8a8a8a"
              }
            ]
          }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#373737"
              }
            ]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#3c3c3c"
              }
            ]
          }, {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#4e4e4e"
              }
            ]
          }, {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          }, {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#000000"
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#3d3d3d"
              }
            ]
          }
        ];
      }
    };

    return FrameworkMap;

  })();

  theme.classes.FrameworkMediaQueries = (function() {
    function FrameworkMediaQueries() {
      this.screenSizeListener = bind(this.screenSizeListener, this);
      this.getScreenSize = bind(this.getScreenSize, this);
      this.medium_screen = 768;
      this.large_screen = 1024;
      this.current_window = null;
      this.getScreenSize();
      this.screenSizeListener();
    }

    FrameworkMediaQueries.prototype.getScreenSize = function() {
      var _this;
      _this = this;
      if (window.matchMedia('only screen and (min-width: ' + _this.large_screen + 'px)').matches) {
        if (_this.current_window !== 'large') {
          $.event.trigger("largeWindow");
          return _this.current_window = 'large';
        }
      } else if (window.matchMedia('only screen and (min-width: ' + _this.medium_screen + 'px)').matches) {
        if (_this.current_window !== 'medium') {
          $.event.trigger("mediumWindow");
          return _this.current_window = 'medium';
        }
      } else {
        if (_this.current_window !== 'small') {
          $.event.trigger("smallWindow");
          return _this.current_window = 'small';
        }
      }
    };

    FrameworkMediaQueries.prototype.screenSizeListener = function() {
      var _this;
      _this = this;
      return $(window).resize(function() {
        return _this.getScreenSize();
      });
    };

    return FrameworkMediaQueries;

  })();

  theme.classes.FrameworkModal = (function() {
    function FrameworkModal(container1) {
      var _this;
      this.container = container1;
      _this = this;
      _this.fullscreen = _this.container.data('modal--fullscreen') ? true : false;
      if (_this.container.data('modal--custom-close')) {
        _this.custom_close_button = _this.container.data('modal--custom-close');
      } else {
        _this.custom_close_button = '';
      }
      _this.force_view = _this.container.data('force-view');
      _this.view = _this.container.data('modal--view');
      _this.links = _this.container.find('.modal--link');
      _this.content = _this.container.find('.modal--content');
      _this.window = _this.createModalWindow();
      _this.window_container = _this.window.find('.modal--container');
      _this.mask = _this.window.find('.modal--mask');
      _this.close_button = _this.window.find('.modal--close');
      _this.next_button = _this.window.find('.modal--next');
      _this.prev_button = _this.window.find('.modal--prev');
      _this.slider = null;
      _this.slides = null;
      _this.main_content_window = $('.off-canvas--main-content');
      _this.openListeners();
      _this.modal_state = 'closed';
      _this.nav_lock = false;
    }

    FrameworkModal.prototype.createModalWindow = function() {
      var _this, window, window_html;
      _this = this;
      window = null;
      if ($('.modal-holder').length) {
        window = $('.modal-holder');
      } else {
        window_html = '</div> <div class="modal-holder"> <div class="modal--mask"></div> <div class="modal--container"></div> <button class="modal--close">' + theme.utils.addSymbol('cross') + '</button> <button class="modal--prev">' + theme.utils.addSymbol('chevron-left') + '</button> <button class="modal--next">' + theme.utils.addSymbol('chevron-right') + '</button> </div>';
        window = $(window_html).appendTo('body');
      }
      return window;
    };

    FrameworkModal.prototype.openListeners = function() {
      var _this;
      _this = this;
      return _this.links.on('keypress.FrameworkModal, click.FrameworkModal, quick-open', function(e) {
        var clicked_item;
        if (e.type === 'keypress' && theme.utils.a11yClick(e) === false) {
          return false;
        }
        clicked_item = $(this);
        // Edited by Craig R
        // Replaces product image modals by swapping main image with thumbnail on large screens - clicking main image still opens modal for zoomed in view
        if (
          window.matchMedia("(min-width: 1200px)").matches &&
          this.classList.contains('image-wrapper') &&
          $(".product_page--thumbnails-custom").length > 0
        ) {
          const product = $('.product');
          const main_image = product.find('.product-page--featured-image > a .product-page--image img');
          const main_image_width = main_image.width();
          const new_main_image = clicked_item.find('.product-page--image img');
          new_main_image.attr('sizes', main_image_width + 'px');
          const main_image_clone = main_image.clone();
          const new_main_clone = new_main_image.clone();
          const modal_images = product.closest('.modal--root').find('.modal--content .product-page--image');
          const clicked_thumb_id = clicked_item.find('.product-page--image').attr('data-image-id');
          const new_first_modal_image = modal_images.filter(`[data-image-id="${clicked_thumb_id}"]`);
          function customSwapImages(img_1, img_2) {
            let img_1_clone, img_2_clone;
            img_1_clone = img_1.clone();
            img_2_clone = img_2.clone();
            img_1.replaceWith(img_2_clone);
            return img_2.replaceWith(img_1_clone);
          };

          function replaceWithThumbnail(main, thumbnail) {
            let thumb_clone;
            thumb_clone = thumbnail.clone();
            main.replaceWith(thumb_clone);
          };

          replaceWithThumbnail(main_image, new_main_image);
          customSwapImages(modal_images.first(), new_first_modal_image);
        } else {
          _this.links.each(function(index) {
            if ($(this).is(clicked_item)) {
              if (e.type === 'quick-open') {
                return _this.open(index, true);
              } else {
                return _this.open(index);
              }
            }
          })
        };
        return false;
      });
    };

    FrameworkModal.prototype.open = function(index, quick_open) {
      var _this, scrolled_position;
      if (quick_open == null) {
        quick_open = false;
      }
      _this = this;
      if (_this.modal_state === 'closed') {
        _this.modal_state = 'opened';
        $('html').addClass('modal-open');
        _this.window.attr('data-modal--fullscreen', _this.fullscreen);
        _this.window.attr('data-modal--custom-close', _this.custom_close_button);
        _this.window.attr('data-modal--view', _this.view);
        _this.closeListeners();
        _this.positionListeners();
        _this.moveContentToWindow();
        if (_this.slides.length > 1) {
          _this.next_button.show();
          _this.prev_button.show();
          _this.prevListeners();
          _this.nextListeners();
        }
        _this.window.show();
        _this.window_container.show();
        _this.renderVideo(_this.slides.eq(index));
        if (quick_open) {
          _this.slides.eq(index).addClass('active');
          return _this.position();
        } else {
          _this.mask.fadeIn();
          return _this.loadModal(_this.slides.eq(index), function() {
            return setTimeout(function() {
              return _this.window_container.find('input[type="text"]').focus();
            }, 0);
          });
        }
      }
    };

    FrameworkModal.prototype.moveContentToWindow = function(index) {
      var _this, content;
      _this = this;
      content = _this.container.find('.modal--content');
      _this.window_container.append(content);
      _this.window_container.prepend('<form class="hiddenform hideform" action="/cart" method="post" novalidate="" class=""><div class="test fixedbottom"> <button class="button checkout" type="submit" name="checkout">Checkout</button></form>');
      return _this.slides = _this.window_container.find('.modal--content');
    };

    FrameworkModal.prototype.detectImageSlide = function(slide) {
      var _this;
      return _this = this;
    };

    FrameworkModal.prototype.renderVideo = function(slide) {
      var _this, id, iframe, src_url, type, video;
      _this = this;
      video = slide.find('.responsive-video').first();
      src_url = video.data('video');
      type = _this.extractVideoType(src_url);
      id = _this.extractVideoId(src_url, type);
      iframe = _this.createIframe(type, id);
      if (type === 'vimeo') {
        video.addClass('vimeo');
      }
      if (type === 'kickstarter') {
        video.addClass('kickstarter');
      }
      return video.append(iframe);
    };

    FrameworkModal.prototype.extractVideoType = function(src_url) {
      var _this, matches, re;
      _this = this;
      re = /\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9_\-]+)/i;
      matches = re.exec(src_url);
      if (matches) {
        return 'youtube';
      }
      re = /^.*(vimeo)\.com\/(?:watch\?v=)?(.*?)(?:\z|$|&)/;
      matches = re.exec(src_url);
      if (matches) {
        return 'vimeo';
      }
      re = /^.*(kickstarter)\.com/g;
      matches = re.exec(src_url);
      if (matches) {
        return 'kickstarter';
      }
      return false;
    };

    FrameworkModal.prototype.extractVideoId = function(src_url, type) {
      var _this, match, regExp;
      _this = this;
      if (type === 'youtube') {
        regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        match = src_url.match(regExp);
        if (match && match[2].length === 11) {
          return match[2];
        }
      } else if (type === "vimeo") {
        regExp = /^.*(vimeo)\.com\/(?:watch\?v=)?(.*?)(?:\z|$|&)/;
        match = src_url.match(regExp);
        if (match) {
          return match[2];
        }
      } else if (type === "kickstarter") {
        regExp = /(?:kickstarter\.com\/projects\/)(.*)(|\?)/;
        match = src_url.match(regExp);
        if (match) {
          return match[1];
        }
      }
    };

    FrameworkModal.prototype.createIframe = function(type, id) {
      var _this;
      _this = this;
      if (type === "youtube") {
        return '<iframe  src="//www.youtube.com/embed/' + id + '?autoplay=1" frameborder="0" allowfullwidth></iframe>';
      } else if (type === "vimeo") {
        return '<iframe src="//player.vimeo.com/video/' + id + '?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&amp;autoplay=1?" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
      } else if (type === "kickstarter") {
        return '<iframe src="//www.kickstarter.com/projects/' + id + '/widget/video.html" frameborder="0" webkitallowfullwidth mozallowfullwidth allowfullwidth></iframe>';
      }
    };

    FrameworkModal.prototype.removeVideos = function() {
      var _this;
      _this = this;
      return _this.slides.find('.responsive-video').each(function() {
        if ($(this).data('video')) {
          return $(this).find('iframe').remove();
        }
      });
    };

    FrameworkModal.prototype.loadModal = function(modal, callback) {
      var _this;
      _this = this;
      modal.addClass('active');
      _this.position();
      if (callback) {
        callback();
      }
      return _this.nav_lock = false;
    };

    FrameworkModal.prototype.position = function() {
      var _this, active_modal, entire_modal_height, modal_height, modal_width;
      _this = this;
      if (_this.window_container != null) {
        active_modal = _this.content.filter('.active');
        _this.window_container.attr('style', '');
        _this.positionVideoColumns(active_modal);
        _this.detectImageSlide(active_modal);
        _this.window.removeClass('fixed');
        modal_height = active_modal.outerHeight();
        modal_width = active_modal.outerWidth();
        entire_modal_height = modal_height;
        if (_this.fullscreen) {
          return;
        }
        if (active_modal.hasClass('type--image')) {
          entire_modal_height = modal_height;
        }
        if ($(window).height() >= entire_modal_height && _this.force_view !== 'absolute') {
          return _this.window.addClass('fixed');
        } else {
          $("html, body").animate({
            scrollTop: 0
          }, '0');
          $('body,html').on('DOMMouseScroll.FrameworkModal mousewheel.FrameworkModal touchmove.FrameworkModal', function(e) {
            if (e.which > 0 || e.type === "mousewheel" || e.type === "touchmove") {
              return $("html,body").stop();
            }
          });
          return _this.window.removeClass('fixed');
        }
      }
    };

    FrameworkModal.prototype.positionVideoColumns = function(modal) {
      var _this, column_one, column_two, height_one, height_two;
      _this = this;
      if (modal.find('.responsive-video').length > 0) {
        column_one = modal.find('.fw--blocks > div').eq(0);
        column_two = modal.find('.fw--blocks > div').eq(1);
        column_one.css({
          width: ''
        });
        column_two.css({
          width: ''
        });
        height_one = column_one.outerHeight();
        height_two = column_two.outerHeight();
        if (height_one < height_two) {
          column_one.css({
            width: '100%'
          });
          return column_two.css({
            width: '100%'
          });
        }
      }
    };

    FrameworkModal.prototype.positionListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.FrameworkModal', function() {
        return _this.position();
      });
    };

    FrameworkModal.prototype.nextListeners = function() {
      var _this;
      _this = this;
      $(document).on('keydown.FrameworkModal', function(e) {
        if (e.keyCode === 39) {
          return _this.next();
        }
      });
      return _this.next_button.on('click.FrameworkModal', function() {
        return _this.next();
      });
    };

    FrameworkModal.prototype.next = function() {
      var _this, active_slide, index;
      _this = this;
      if (!_this.nav_lock) {
        _this.nav_lock = true;
        index = _this.slides.filter('.active').index();
        _this.slides.removeClass('active');
        _this.removeVideos();
        if ((index + 1) === _this.slides.length) {
          active_slide = _this.slides.eq(0);
        } else {
          active_slide = _this.slides.eq(index + 1);
        }
        _this.renderVideo(active_slide);
        return _this.loadModal(active_slide);
      }
    };

    FrameworkModal.prototype.prevListeners = function() {
      var _this;
      _this = this;
      $(document).on('keydown.FrameworkModal', function(e) {
        if (e.keyCode === 37) {
          return _this.prev();
        }
      });
      return _this.prev_button.on('click.FrameworkModal', function() {
        return _this.prev();
      });
    };

    FrameworkModal.prototype.prev = function() {
      var _this, active_slide, index;
      _this = this;
      if (!_this.nav_lock) {
        _this.nav_lock = true;
        index = _this.slides.filter('.active').index();
        _this.slides.removeClass('active');
        _this.removeVideos();
        if (index === 0) {
          active_slide = _this.slides.eq(_this.slides.length - 1);
        } else {
          active_slide = _this.slides.eq(index - 1);
        }
        _this.renderVideo(active_slide);
        return _this.loadModal(active_slide);
      }
    };

    FrameworkModal.prototype.closeListeners = function() {
      var _this;
      _this = this;
      _this.container.on('quick-close', function() {
        return _this.close(true);
      });
      $(document).on('keydown.FrameworkModal', function(e) {
        if (e.keyCode === 27) {
          return _this.close();
        }
      });
      _this.mask.on('click.FrameworkModal', function() {
        return _this.close();
      });
//       _this.window_container.on('click.FrameworkModal', function() {
//         return _this.close();
//       });
      _this.content.on('click.FrameworkModal', function(e) {
        return e.stopPropagation();
      });
      return _this.close_button.on('click.FrameworkModal', function() {
        return _this.close();
      });
    };

    FrameworkModal.prototype.close = function(quick_close) {
      var _this, scrolled_position;
      if (quick_close == null) {
        quick_close = false;
      }
      _this = this;
      scrolled_position = parseInt(_this.main_content_window.css('top')) * -1;
      _this.container.trigger('modalClosed');
      _this.main_content_window.css({
        top: '0',
        position: 'relative'
      });
      $(window).scrollTop(scrolled_position);
      _this.putBackContent();
      _this.next_button.hide();
      _this.prev_button.hide();
      _this.window.hide();
      if (quick_close) {
        _this.mask.hide();
        this.window_container.empty();
        _this.modal_state = 'closed';
      } else {
        _this.mask.fadeOut(function() {
          _this.window_container.empty();
          return _this.modal_state = 'closed';
        });
      }
      $('html').removeClass('modal-open');
      _this.removeListeners();
      return $(window).trigger('FrameworkModal.afterClose');
    };

    FrameworkModal.prototype.putBackContent = function() {
      var _this;
      _this = this;
      _this.removeVideos();
      return _this.slides.removeClass('active').appendTo(_this.container);
    };

    FrameworkModal.prototype.removeListeners = function() {
      var _this;
      _this = this;
      $(document).off('keydown.FrameworkModal');
      $(window).off('resize.FrameworkModal');
      $('body,html').off('DOMMouseScroll.FrameworkModal mousewheel.FrameworkModal touchmove.FrameworkModal');
      _this.next_button.off('click.FrameworkModal');
      _this.prev_button.off('click.FrameworkModal');
      _this.close_button.off('click.FrameworkModal');
      _this.mask.off('click.FrameworkModal');
      return _this.window_container.off('click.FrameworkModal');
    };

    return FrameworkModal;

  })();

  theme.classes.FrameworkOffCanvas = (function() {
    function FrameworkOffCanvas(root) {
      var _this;
      this.root = root;
      this.touchListener = bind(this.touchListener, this);
      this.closeRight = bind(this.closeRight, this);
      this.closeLeft = bind(this.closeLeft, this);
      this.fadeInOverlay = bind(this.fadeInOverlay, this);
      this.openRight = bind(this.openRight, this);
      this.openLeft = bind(this.openLeft, this);
      this.toggle = bind(this.toggle, this);
      this.toggleListeners = bind(this.toggleListeners, this);
      this.viewPortHeightListener = bind(this.viewPortHeightListener, this);
      this.setViewPortHeight = bind(this.setViewPortHeight, this);
      this.setState = bind(this.setState, this);
      this.unload = bind(this.unload, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.viewport = $('.off-canvas--viewport');
      _this.left_sidebar = $('.off-canvas--left-sidebar');
      _this.right_sidebar = $('.off-canvas--right-sidebar');
      _this.main_content = $('.off-canvas--main-content');
      _this.overlay = $('.off-canvas--overlay');
      _this.state = 'closed';
      _this.load();
    }

    FrameworkOffCanvas.prototype.load = function() {
      var _this;
      _this = this;
      _this.close = $('.off-canvas--close');
      _this.triggers = $('.off-canvas--open');
      _this.setViewPortHeight();
      _this.viewPortHeightListener();
      _this.toggleListeners();
      return _this.touchListener();
    };

    FrameworkOffCanvas.prototype.unload = function() {
      var _this;
      _this = this;
      _this.triggers.off('click');
      _this.overlay.add(_this.close).off('click');
      $(document).off('touchstart.FrameworkOffCanvas');
      return $(document).off('touchend.FrameworkOffCanvas');
    };

    FrameworkOffCanvas.prototype.setState = function(state) {
      var _this;
      _this = this;
      _this.state = state;
      return _this.root.attr('data-off-canvas--state', state);
    };

    FrameworkOffCanvas.prototype.setViewPortHeight = function() {
      var _this;
      _this = this;
      return _this.viewport.css({
        'min-height': $(window).height()
      });
    };

    FrameworkOffCanvas.prototype.viewPortHeightListener = function() {
      var _this;
      _this = this;
      return $(window).resize(function() {
        return _this.setViewPortHeight();
      });
    };

    FrameworkOffCanvas.prototype.toggleListeners = function() {
      var _this;
      _this = this;
      _this.triggers.on('click', function() {
        if ($(this).data('off-canvas--open') === 'left-sidebar') {
          _this.toggle('left-sidebar');
        } else if ($(this).data('off-canvas--open') === 'right-sidebar') {
          _this.toggle('right-sidebar');
        }
        return false;
      });
      return _this.overlay.add(_this.close).on('click', function() {
        if (_this.state === 'left-open') {
          return _this.toggle('left-sidebar');
        } else if (_this.state === 'right-open') {
          return _this.toggle('right-sidebar');
        }
      });
    };

    FrameworkOffCanvas.prototype.toggle = function(element) {
      var _this;
      _this = this;
      if (element === 'left-sidebar' && _this.state === 'closed') {
        return _this.openLeft();
      } else if (element === 'left-sidebar' && _this.state === 'left-open') {
        return _this.closeLeft();
      } else if (element === 'right-sidebar' && _this.state === 'closed') {
        return _this.openRight();
      } else if (element === 'right-sidebar' && _this.state === 'right-open') {
        return _this.closeRight();
      }
    };

    FrameworkOffCanvas.prototype.openLeft = function() {
      var _this;
      _this = this;
      _this.setState('left-open');
      _this.main_content.css({
        position: 'fixed',
        top: -($(window).scrollTop())
      });
      _this.left_sidebar.velocity({
        translateX: [0, '-100%']
      }, {
        complete: function() {
          return _this.left_sidebar.css({
            position: 'relative'
          });
        }
      });
      return _this.fadeInOverlay();
    };

    FrameworkOffCanvas.prototype.openRight = function() {
      var _this;
      _this = this;
      _this.setState('right-open');
      _this.main_content.css({
        position: 'fixed',
        top: -($(window).scrollTop())
      });
      _this.right_sidebar.velocity({
        translateX: ['-100%', 0]
      }, {
        complete: function() {
          return _this.right_sidebar.css({
            position: 'relative',
            display: 'block'
          });
        }
      });
      return _this.fadeInOverlay();
    };

    FrameworkOffCanvas.prototype.fadeInOverlay = function() {
      var _this;
      _this = this;
      _this.overlay.show();
      return _this.overlay.velocity({
        opacity: '0.3'
      });
    };

    FrameworkOffCanvas.prototype.closeLeft = function() {
      var _this, scrolled_position;
      _this = this;
      if (_this.state !== 'left-open') {
        return false;
      }
      _this.setState('closed');
      scrolled_position = parseInt(_this.main_content.css('top')) * -1;
      _this.left_sidebar.velocity({
        translateX: ['-100%', 0],
        display: ['block', 'none']
      }, {
        complete: function() {
          _this.left_sidebar.css({
            position: 'absolute'
          });
          _this.main_content.css({
            position: 'relative',
            top: 'initial'
          });
          return $(window).scrollTop(scrolled_position);
        }
      });
      return _this.overlay.velocity('fadeOut');
    };

    FrameworkOffCanvas.prototype.closeRight = function() {
      var _this, scrolled_position;
      _this = this;
      if (_this.state !== 'right-open') {
        return false;
      }
      _this.setState('closed');
      scrolled_position = parseInt(_this.main_content.css('top')) * -1;
      _this.right_sidebar.velocity({
        translateX: [0, '-100%']
      }, {
        complete: function() {
          _this.right_sidebar.css({
            position: 'absolute'
          });
          _this.main_content.css({
            position: 'relative',
            top: 'initial'
          });
          return $(window).scrollTop(scrolled_position);
        }
      });
      return _this.overlay.velocity('fadeOut');
    };

    FrameworkOffCanvas.prototype.touchListener = function() {
      var _this, position;
      _this = this;
      if (!Modernizr.touchevents) {
        return false;
      }
      position = {
        start: {},
        end: {}
      };
      $(document).on('touchstart.FrameworkOffCanvas', function(e) {
        position.start.x = e.originalEvent.touches[0].clientX;
        position.start.y = e.originalEvent.touches[0].clientY;
      });
      return $(document).on('touchend.FrameworkOffCanvas', function(e) {
        position.end.x = e.originalEvent.changedTouches[0].clientX;
        position.end.y = e.originalEvent.changedTouches[0].clientY;
        if (Math.abs(position.start.y - position.end.y) > 30) {
          return false;
        }
        if (position.start.x > position.end.x + 5) {
          return _this.closeLeft();
        } else if (position.start.x < position.end.x - 5) {
          return _this.closeRight();
        }
      });
    };

    return FrameworkOffCanvas;

  })();

  theme.classes.FrameworkSearch = (function() {
    function FrameworkSearch(root) {
      var _this;
      this.root = root;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      this.getResults = bind(this.getResults, this);
      this.listenForKeyEntered = bind(this.listenForKeyEntered, this);
      this.getSearchUrl = bind(this.getSearchUrl, this);
      this.searchLinks = bind(this.searchLinks, this);
      this.loadSpinners = bind(this.loadSpinners, this);
      this.onOpen = bind(this.onOpen, this);
      _this = this;
      _this.articles = _this.root.find('.search--articles');
      _this.form = _this.root.find('form');
      _this.icon = _this.root.find('.search--icon');
      _this.loading = _this.root.find('.search--loading');
      _this.no_results = _this.root.find('.search--no-results');
      _this.products = _this.root.find('.search--products');
      _this.results = _this.root.find('.search--results');
      _this.text_box = _this.root.find('.search--textbox');
      _this.toggle_link = _this.root.find('.search--toggle');
      _this.show_articles = _this.root.data('show-articles');
      _this.show_pages = _this.root.data('show-pages');
      _this.view = _this.root.data('view');
      _this.ajax_request = null;
      _this.search_term = null;
      _this.search_url = null;
      _this.close_results_timer = null;
      _this.typing_timer = null;
      _this.article_page_combination = "";
      _this.offCanvas = null;
      if (theme.partials.OffCanvas !== void 0) {
        _this.offCanvas = theme.partials.OffCanvas;
      } else {
        _this.offCanvas = theme.partials.FrameworkOffCanvas;
      }
      if (_this.show_articles && _this.show_pages) {
        _this.article_page_combination = 'article,page';
      } else if (_this.show_articles) {
        _this.article_page_combination = 'article';
      } else if (_this.show_pages) {
        _this.article_page_combination = 'page';
      }
      if (_this.view === 'modal') {
        _this.searchLinks();
        _this.getSearchUrl();
        _this.listenForKeyEntered();
        _this.loadSpinners();
      }
      _this.resizeListeners();
      _this.matchImageHeights();
    }

    FrameworkSearch.prototype.onOpen = function() {
      var _this, temp_val;
      _this = this;
      _this.text_box.focus();
      temp_val = _this.text_box.val();
      _this.text_box.val('');
      _this.text_box.val(temp_val);
      return _this.text_box.trigger('keyup');
    };

    FrameworkSearch.prototype.loadSpinners = function() {
      var _this, spinner;
      _this = this;
      spinner = _this.loading.find('.animation');
      if (spinner.hasClass('tiny')) {
        return spinner.spin('tiny');
      } else {
        return spinner.spin('small');
      }
    };

    FrameworkSearch.prototype.searchLinks = function() {
      var _this;
      _this = this;
      $('.off-canvas--main-content a[href="/search"]').on('click', function() {
        $('[data-trigger="search-modal"]').trigger('click');
        _this.onOpen();
        return false;
      });
      $('.off-canvas--right-sidebar a[href="/search"]').on('click', function() {
        _this.offCanvas.closeRight();
        setTimeout(function() {
          $('[data-trigger="search-modal"]').trigger('click');
          return _this.onOpen();
        }, 450);
        return false;
      });
      return $('.off-canvas--left-sidebar a[href="/search"]').on('click', function() {
        _this.offCanvas.closeLeft();
        setTimeout(function() {
          $('[data-trigger="search-modal"]').trigger('click');
          return _this.onOpen();
        }, 450);
        return false;
      });
    };

    FrameworkSearch.prototype.getSearchUrl = function() {
      var _this;
      _this = this;
      _this.search_url = window.location.href;
      _this.search_url = _this.search_url.replace(window.location.hostname + window.location.pathname, window.location.hostname + '/search');
      _this.search_url = _this.search_url.replace('#', '');
      if (_this.search_url.indexOf("?") >= 0) {
        return _this.search_url = _this.search_url + '&';
      } else {
        return _this.search_url = _this.search_url + '?';
      }
    };

    FrameworkSearch.prototype.listenForKeyEntered = function() {
      var _this;
      _this = this;
      return _this.text_box.attr("autocomplete", "off").on("keyup paste", function() {
        var term;
        clearTimeout(_this.typing_timer);
        term = $(this).val();
        if (term.length < 2) {
          _this.products.empty();
          _this.articles.empty();
          _this.loading.hide();
          _this.icon.show();
          return false;
        }
        _this.loading.show();
        _this.icon.hide();
        return _this.typing_timer = setTimeout(function() {
          var url;
          clearTimeout(_this.typing_timer);
          url = _this.search_url + "view=ajax-product&type=product&q=" + term + "*";
          _this.getResults(url, term, 'product');
          if (_this.show_articles || _this.show_pages) {
            url = _this.search_url + "view=ajax-article-page&type=" + _this.article_page_combination + "&q=" + term + "*";
            return _this.getResults(url, term, 'article');
          }
        }, 750);
      });
    };

    FrameworkSearch.prototype.getResults = function(url, term, type) {
      var _this;
      _this = this;
      _this.products.empty();
      _this.articles.empty();
      $.ajax({
        url: url,
        type: "GET",
        dataType: "html",
        success: function(data) {
          _this.loading.hide();
          _this.icon.show();
          if (type === 'product') {
            _this.products.empty();
            _this.products.append(data);
            return _this.matchImageHeights();
          } else if (type === 'article') {
            _this.articles.empty();
            return _this.articles.append(data);
          }
        },
        error: function(jqxhr, textStatus, error) {
          var err;
          err = textStatus + ', ' + error;
          return console.log('search.json Request Failed: ' + err);
        }
      });
    };

    FrameworkSearch.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      return theme.utils.matchImageHeights(_this.products, _this.products.find('.product--root'), '.product--image-wrapper');
    };

    FrameworkSearch.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.Search', theme.utils.debounce(100, function() {
        return _this.matchImageHeights();
      }));
    };

    return FrameworkSearch;

  })();

  theme.classes.Sections = (function() {
    function Sections() {
      this.unload = bind(this.unload, this);
      this.deselectBlock = bind(this.deselectBlock, this);
      this.selectBlock = bind(this.selectBlock, this);
      this.deselectSection = bind(this.deselectSection, this);
      this.selectSection = bind(this.selectSection, this);
      this.load = bind(this.load, this);
      this.getActiveBlock = bind(this.getActiveBlock, this);
      this.getActiveSection = bind(this.getActiveSection, this);
      this.listeners = bind(this.listeners, this);
      var _this;
      _this = this;
      _this.listeners();
    }

    Sections.prototype.listeners = function() {
      var _this;
      _this = this;
      _this.load();
      _this.unload();
      _this.selectSection();
      _this.deselectSection();
      _this.selectBlock();
      return _this.deselectBlock();
    };

    Sections.prototype.getActiveSection = function(evt) {
      var _this, active_section;
      _this = this;
      active_section = $(evt.target).find('[data-section-id]');
      return active_section;
    };

    Sections.prototype.getActiveBlock = function(evt) {
      var _this, active_block;
      _this = this;
      active_block = $(evt.target);
      return active_block;
    };

    Sections.prototype.load = function(evt) {
      var _this;
      _this = this;
      return $(document).on('shopify:section:load', function(evt) {
        var active_section;
        theme.utils.loadJsClasses();
        active_section = _this.getActiveSection(evt);
        active_section.triggerHandler("theme:section:load");
        return active_section.find('[data-js-class]').each(function() {
          return $(this).triggerHandler("theme:section:load");
        });
      });
    };

    Sections.prototype.selectSection = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:section:select', function(evt) {
        var active_section;
        active_section = _this.getActiveSection(evt);
        return active_section.triggerHandler("theme:section:select");
      });
    };

    Sections.prototype.deselectSection = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:section:deselect', function(evt) {
        var active_section;
        active_section = _this.getActiveSection(evt);
        return active_section.triggerHandler('theme:section:deselect');
      });
    };

    Sections.prototype.selectBlock = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:block:select', function(evt) {
        var active_block;
        active_block = _this.getActiveBlock(evt);
        return active_block.triggerHandler('theme:block:select');
      });
    };

    Sections.prototype.deselectBlock = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:block:deselect', function(evt) {
        var active_block;
        active_block = _this.getActiveBlock(evt);
        return active_block.triggerHandler('theme:block:deselect');
      });
    };

    Sections.prototype.unload = function(evt) {
      var _this;
      _this = this;
      return $(document).on('shopify:section:unload', function(evt) {
        var active_section;
        active_section = _this.getActiveSection(evt);
        active_section.triggerHandler("theme:section:unload");
        return active_section.find('[data-js-loaded="true"]').each(function() {
          return $(this).triggerHandler("theme:section:unload");
        });
      });
    };

    return Sections;

  })();

  theme.classes.FrameworkSlider = (function() {
    function FrameworkSlider(container1) {
      this.container = container1;
      this.eventListeners = bind(this.eventListeners, this);
      this.alignPlayButton = bind(this.alignPlayButton, this);
      this.updateContextMenu = bind(this.updateContextMenu, this);
      this.autoplay = bind(this.autoplay, this);
      this.formatPaginationNumbers = bind(this.formatPaginationNumbers, this);
      this.getActiveIndex = bind(this.getActiveIndex, this);
      this.createSlider = bind(this.createSlider, this);
      this.autoplay_enabled = this.container.data('autoplay') ? true : false;
      this.navigation = this.container.data('navigation') ? true : false;
      this.pagination_numbers = this.container.data('pagination-numbers') ? true : false;
      this.autoplay_frequency = 3000;
      this.slide_length = this.container.children().length;
      this.active_index = 0;
      this.news_panel = this.container.data('news-panel') ? true : false;
      this.createSlider();
      this.eventListeners();
      this.owl = this.container.data('owlCarousel');
    }

    FrameworkSlider.prototype.createSlider = function() {
      var _this, slider;
      _this = this;
      slider = this.container.owlCarousel({
        singleItem: false,
        navigation: _this.navigation,
        navigationText: false,
        pagination: _this.container.data('pagination') ? true : false,
        paginationNumbers: _this.pagination_numbers,
        scrollPerPageNav: true,
        slideSpeed: 800,
        autoHeight: false,
        autoPlay: _this.autoplay(),
        afterInit: function() {},
        afterAction: function() {
          _this.alignPlayButton();
          _this.active_index = _this.getActiveIndex();
          _this.updateContextMenu(_this.active_index);
          return _this.formatPaginationNumbers();
        }
      });
      if (_this.navigation) {
        slider.find('.owl-prev').html(theme.utils.addSymbol('chevron-left'));
        slider.find('.owl-next').html(theme.utils.addSymbol('chevron-right'));
      }
      return slider;
    };

    FrameworkSlider.prototype.getActiveIndex = function() {
      return this.container.find('.owl-pagination .owl-page.active').index();
    };

    FrameworkSlider.prototype.formatPaginationNumbers = function() {
      return this.container.find('.owl-page.active .owl-numbers').text((this.active_index + 1) + "/" + this.slide_length);
    };

    FrameworkSlider.prototype.autoplay = function() {
      if (this.autoplay_enabled) {
        return this.autoplay_frequency;
      }
      return false;
    };

    FrameworkSlider.prototype.updateContextMenu = function(index) {
      var context_navigation, type_class;
      if (this.news_panel) {
        type_class = '.' + this.container.find('.slide').eq(index).data('feed-type');
        context_navigation = this.container.closest('.template--index--news').find('.context-navigation');
        context_navigation.find('.item').hide();
        return context_navigation.find(type_class).show();
      }
    };

    FrameworkSlider.prototype.alignPlayButton = function() {
      var play_button, play_button_height, slide, slide_height, video_offset;
      slide = this.container.find('.owl-item').eq(this.active_index);
      play_button = slide.find('.play-button');
      if (play_button.length === 0) {
        return;
      }
      play_button.css('visibility', 'hidden');
      if (PAGE.hasClass('transparent-menu') && $('.main-header').css('position') === 'absolute') {
        slide_height = slide.outerHeight();
        play_button_height = play_button.outerHeight();
        video_offset = (slide_height - play_button_height) / 2;
        play_button.css({
          'margin-top': 0,
          'top': video_offset
        });
      } else {
        play_button.css({
          'margin-top': '-40px',
          'top': '50%'
        });
      }
      return play_button.css('visibility', 'visible');
    };

    FrameworkSlider.prototype.eventListeners = function() {
      var _this;
      _this = this;
      this.container.find(".play-button").on('click', function() {
        var video_modal;
        video_modal = new VideoModal($(this).closest('.video'));
        video_modal.open();
        _this.owl.stop();
        return false;
      });
      return this.container.find('.owl-pagination .owl-page, .skip-to-next').on('click', function() {
        _this.owl.next();
        return false;
      });
    };

    return FrameworkSlider;

  })();

  theme.classes.FrameworkStickyColumn = (function() {
    function FrameworkStickyColumn(container1, column_a, column_b, mq) {
      this.container = container1;
      this.column_a = column_a;
      this.column_b = column_b;
      this.mq = mq;
      this.Listeners = bind(this.Listeners, this);
      this.setColumnPosition = bind(this.setColumnPosition, this);
      this.getAlignment = bind(this.getAlignment, this);
      this.getState = bind(this.getState, this);
      this.resetLargerColumn = bind(this.resetLargerColumn, this);
      this.getSmallerColumn = bind(this.getSmallerColumn, this);
      this.heightsHaveChanged = bind(this.heightsHaveChanged, this);
      this.setHeights = bind(this.setHeights, this);
      this.loadColumns = bind(this.loadColumns, this);
      if (Modernizr.touchevents) {
        return false;
      }
      this.current_state = 'auto';
      this.column_a_height = 0;
      this.column_b_height = 0;
      this.loadColumns();
    }

    FrameworkStickyColumn.prototype.loadColumns = function() {
      var _this;
      _this = this;
      return theme.utils.imagesLoaded(_this.container, function() {
        _this.Listeners();
        return _this.setColumnPosition();
      });
    };

    FrameworkStickyColumn.prototype.setHeights = function() {
      this.column_a_height = this.column_a.outerHeight();
      return this.column_b_height = this.column_b.outerHeight();
    };

    FrameworkStickyColumn.prototype.heightsHaveChanged = function() {
      if (this.column_a.outerHeight() !== this.column_a_height) {
        this.setHeights();
        return true;
      }
      if (this.column_b.outerHeight() !== this.column_b_height) {
        this.setHeights();
        return true;
      }
      return false;
    };

    FrameworkStickyColumn.prototype.getSmallerColumn = function() {
      if (this.column_a_height < this.column_b_height) {
        return this.column_a;
      } else {
        return this.column_b;
      }
    };

    FrameworkStickyColumn.prototype.resetLargerColumn = function() {
      if (this.column_a_height > this.column_b_height) {
        return this.column_a.css({
          'position': 'relative',
          'top': 'auto',
          'bottom': 'auto'
        });
      } else {
        return this.column_b.css({
          'position': 'relative',
          'top': 'auto',
          'bottom': 'auto'
        });
      }
    };

    FrameworkStickyColumn.prototype.getState = function(scroll_pos, window_height, column) {
      var column_height, height_for_bottom, overflowing_column, state;
      state = 'auto';
      if (this.mq.current_window === 'small') {
        return 'auto';
      }
      column_height = column.outerHeight();
      if (window_height > column_height) {
        overflowing_column = true;
      }
      if (scroll_pos < this.container.offset().top) {
        state = 'auto';
      }
      if (overflowing_column) {
        height_for_bottom = column_height;
      } else {
        height_for_bottom = window_height;
      }
      if ((scroll_pos + height_for_bottom) > (this.container.offset().top + this.container.outerHeight())) {
        state = 'absolute-bottom';
      } else if (scroll_pos > this.container.offset().top && overflowing_column) {
        state = 'fixed-top';
      } else if (window_height < column_height && (scroll_pos + window_height) > (this.container.offset().top + column.outerHeight())) {
        state = 'fixed-bottom';
      }
      return state;
    };

    FrameworkStickyColumn.prototype.getAlignment = function(column) {
      if (column.hasClass('column-a')) {
        return 'left';
      } else if (column.hasClass('column-b')) {
        return 'right';
      }
    };

    FrameworkStickyColumn.prototype.setColumnPosition = function() {
      var _this, align, column, state;
      _this = this;
      _this.setHeights();
      column = _this.getSmallerColumn();
      state = _this.getState($(window).scrollTop(), $(window).height(), column);
      align = _this.getAlignment(column);
      if (state === 'auto' && this.current_state !== 'auto') {
        this.current_state = 'auto';
        column.css({
          'position': 'relative',
          'top': 'auto',
          'bottom': 'auto'
        });
      } else if (state === 'fixed-bottom' && this.current_state !== 'fixed-bottom') {
        this.current_state = 'fixed-bottom';
        column.css({
          'position': 'fixed',
          'top': 'auto',
          'bottom': 0
        });
      } else if (state === 'fixed-top' && this.current_state !== 'fixed-top') {
        this.current_state = 'fixed-top';
        column.css({
          'position': 'fixed',
          'top': 0,
          'bottom': 'auto'
        });
      } else if (state === 'absolute-bottom' && this.current_state !== 'absolute-bottom') {
        this.current_state = 'absolute-bottom';
        column.css({
          'position': 'absolute',
          'top': 'auto',
          'bottom': 0
        });
      }
      if (align === 'right') {
        return column.css({
          'right': 0
        });
      }
    };

    FrameworkStickyColumn.prototype.Listeners = function() {
      var _this;
      _this = this;
      $(window).scroll(function() {
        return _this.setColumnPosition();
      });
      setInterval(function() {
        if (_this.heightsHaveChanged()) {
          _this.resetLargerColumn();
          return _this.setColumnPosition();
        }
      }, 250);
      return $(window).resize(function() {
        _this.resetLargerColumn();
        return _this.setColumnPosition();
      });
    };

    return FrameworkStickyColumn;

  })();

  theme.classes.FrameworkUtils = (function() {
    function FrameworkUtils() {
      var _this;
      _this = this;
      _this.google_map_api_status = null;
    }

    FrameworkUtils.prototype.debounce = function(delay, fn) {
      var timeoutId;
      timeoutId = void 0;
      return function() {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(fn.bind(this), delay, arguments);
      };
    };

    FrameworkUtils.prototype.imagesLoaded = function(selector, callback) {
      var count, images_length;
      count = 0;
      images_length = selector.find('img[data-sizes="auto"]').length;
      if (images_length < 1) {
        callback();
        return;
      }
      return selector.on('lazybeforeunveil', function(e) {
        return $(e.target).one('load', function() {
          count++;
          if (count === images_length) {
            return callback();
          }
        });
      });
    };

    FrameworkUtils.prototype.a11yClick = function(event) {
      var code;
      if (event.type === 'click') {
        return true;
      } else if (event.type === 'keypress') {
        code = event.charCode || event.keyCode;
        if (code === 32) {
          event.preventDefault();
        }
        if (code === 32 || code === 13) {
          return true;
        }
      }
      return false;
    };

    FrameworkUtils.prototype.matchImageHeights = function(container, items, image_class) {
      var _this, greatest_image_height, items_per_row, row_items;
      _this = this;
      items_per_row = Math.round(container.width() / items.first().outerWidth());
      greatest_image_height = 0;
      row_items = $();
      items.find(image_class).css('height', 'auto');
      items.find('.placeholder--root').css('height', 'auto');
      return items.each(function(index) {
        var this_height;
        if ($(this).find('.image--root').length > 0) {
          this_height = $(this).find(image_class + ' .image--root').outerHeight();
        } else {
          this_height = $(this).find('.placeholder--root').outerHeight();
        }
        row_items = row_items.add($(this));
        if (this_height > greatest_image_height) {
          greatest_image_height = this_height;
        }
        if (index % items_per_row === items_per_row - 1 || index + 1 === items.length) {
          row_items.find(image_class + ', .placeholder--root').height(greatest_image_height);
          greatest_image_height = 0;
          return row_items = $();
        }
      });
    };

    return FrameworkUtils;

  })();

  theme.classes.FrameworkVideo = (function() {
    function FrameworkVideo(root) {
      var _this;
      this.root = root;
      _this = this;
      _this.root.fitVids();
    }

    return FrameworkVideo;

  })();

  theme.classes.FrameworkXMenu = (function() {
    function FrameworkXMenu(root) {
      var _this;
      this.root = root;
      this.slideUp = bind(this.slideUp, this);
      this.slideDown = bind(this.slideDown, this);
      this.arrangeMegaNav = bind(this.arrangeMegaNav, this);
      this.resizeListeners = bind(this.resizeListeners, this);
      this.checkOverlap = bind(this.checkOverlap, this);
      this.listeners = bind(this.listeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.debugging = false;
      _this.state = 'closed';
      _this.parent_links = _this.root.find('.x-menu--level-1--link > a');
      _this.sub_menu_links = _this.root.find('.x-menu--level-1--link:not([data-x-menu--depth="1"]) > a');
      _this.sub_menu_items = _this.sub_menu_links.parent().find('ul a');
      _this.parents_with_sub_menu = _this.sub_menu_links.parent();
      _this.overlap_parent = _this.root.data('x-menu--overlap-parent');
      _this.load();
    }

    FrameworkXMenu.prototype.load = function() {
      var _this;
      _this = this;
      _this.arrangeMegaNav();
      _this.listeners();
      _this.checkOverlap();
      return _this.resizeListeners();
    };

    FrameworkXMenu.prototype.listeners = function() {
      var _this;
      _this = this;
      _this.parents_with_sub_menu.on('mouseenter.XMenu', function(e) {
        return _this.slideDown($(this).find('> a'));
      });
      _this.parents_with_sub_menu.on('mouseleave.XMenu', function() {
        return _this.slideUp();
      });
      _this.parent_links.on('focus', function(e) {
        return _this.slideUp();
      });
      _this.sub_menu_links.on('focus', function(e) {
        return _this.slideDown($(this));
      });
      return _this.sub_menu_links.on('touchstart.XMenu', function(e) {
        e.preventDefault();
        if ($(this).parent().attr('data-x-menu--open') === 'true') {
          return _this.slideUp();
        } else {
          return _this.slideDown($(this));
        }
      });
    };

    FrameworkXMenu.prototype.checkOverlap = function() {
      var _this, center_index, center_item, center_item_left_edge, center_item_right_edge, center_item_width, container, container_width, first_center_child, last_center_child, left_break_point, left_item, right_item, right_item_edge;
      _this = this;
      if (Modernizr.touchevents && theme.utils.mqs.current_window !== 'large') {
        _this.root.attr('data-x-menu--overlap', 'true');
        return false;
      }
      _this.root.attr('data-x-menu--overlap', 'false');
      center_item = _this.root;
      if (_this.overlap_parent === 1) {
        center_item = center_item.parent();
      } else if (_this.overlap_parent === 2) {
        center_item = center_item.parent().parent();
      }
      container = center_item.parent();
      center_index = center_item.index();
      left_item = false;
      if (center_index > 1) {
        left_item = container.children().eq(center_index - 1);
      }
      right_item = false;
      if (center_index + 1 < container.children().length) {
        right_item = container.children().eq(center_index + 1);
      }
      container_width = container.width();
      center_item_width = _this.root.outerWidth();
      if (left_item) {
        first_center_child = center_item.find('> :first-child');
        center_item_left_edge = first_center_child.offset().left - 1;
        left_break_point = (container_width - center_item_width) / 2;
        if (left_edge >= center_item_left_edge) {
          _this.root.attr('data-x-menu--overlap', 'true');
        }
      }
      if (right_item) {
        last_center_child = center_item.find('> :last-child');
        center_item_right_edge = last_center_child.outerWidth() + last_center_child.offset().left + 1;
        right_item_edge = right_item.offset().left;
        if (center_item_right_edge >= right_item_edge) {
          return _this.root.attr('data-x-menu--overlap', 'true');
        }
      }
    };

    FrameworkXMenu.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.XMenu', _this.debounce(100, function() {
        return _this.checkOverlap();
      }));
    };

    FrameworkXMenu.prototype.debounce = function(delay, fn) {
      var timeoutId;
      timeoutId = void 0;
      return function() {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(fn.bind(this), delay, arguments);
      };
    };

    FrameworkXMenu.prototype.arrangeMegaNav = function() {
      var _this, mega_navs;
      _this = this;
      if (_this.parents_with_sub_menu.length === 0) {
        return false;
      }
      mega_navs = _this.root.find('[data-x-menu--depth="3"] .x-menu--level-2--container');
      return mega_navs.each(function() {
        var container, single_parents, single_parents_container;
        container = $(this);
        single_parents = container.find('[data-x-menu--single-parent="true"]');
        if (single_parents.length > 0) {
          single_parents_container = $('<div class="x-menu--single-parents"></div>').insertAfter(container.find('.x-menu--bg'));
          return single_parents_container.append('<ul>').find('ul').append(single_parents);
        }
      });
    };

    FrameworkXMenu.prototype.slideDown = function(link, delay) {
      var _this, display_type, link_wrapper, menu_height, sub_menu;
      if (delay == null) {
        delay = false;
      }
      _this = this;
      clearTimeout(_this.timer);
      link_wrapper = link.parent();
      if (link_wrapper.attr('data-x-menu--open') === 'true' || _this.state === 'closing') {
        return false;
      }
      _this.slideUp(false);
      if (delay && delay !== 'complete') {
        _this.timer = setTimeout(function() {
          return _this.slideDown(link, 'complete');
        }, delay);
      } else {
        link.closest('.x-menu--level-1--link').find('.fw--icon--expand-less').show();
        link.closest('.x-menu--level-1--link').find('.fw--icon--expand-more').hide();
        link.closest('.x-menu--level-1--link').find('.fw--icon--minus').show();
        link.closest('.x-menu--level-1--link').find('.fw--icon--plus').hide();
        _this.state = 'open';
        link_wrapper.attr('data-x-menu--open', 'true');
        link.attr('aria-expanded', 'true');
        sub_menu = link.closest('.x-menu--level-1--link').find('.x-menu--level-2--container');
        display_type = 'block';
        if (link_wrapper.attr('data-x-menu--depth') === "3") {
          display_type = 'flex';
        }
        sub_menu.velocity('stop');
        sub_menu.css({
          height: 'auto',
          display: display_type
        });
        sub_menu.find('.x-menu--level-2--list').css({
          display: display_type
        });
        menu_height = sub_menu.outerHeight();
        sub_menu.css({
          height: 0,
          opacity: 1
        });
        sub_menu.velocity({
          height: [menu_height, 0]
        }, {
          queue: false,
          duration: 600,
          easing: "easeOutExpo"
        });
      }
    };

    FrameworkXMenu.prototype.slideUp = function(delay) {
      var _this, link, link_wrapper, sub_menu;
      if (delay == null) {
        delay = 300;
      }
      _this = this;
      if (_this.debugging) {
        return false;
      }
      link_wrapper = _this.parents_with_sub_menu.filter('[data-x-menu--open="true"]');
      link = link_wrapper.find('> a');
      if (link_wrapper.attr('data-x-menu--open') === 'false') {
        return false;
      }
      if (delay) {
        return _this.timer = setTimeout(function() {
          return _this.slideUp(false);
        }, delay);
      } else {
        link.closest('.x-menu--level-1--link').find('.fw--icon--expand-less').hide();
        link.closest('.x-menu--level-1--link').find('.fw--icon--expand-more').show();
        link.closest('.x-menu--level-1--link').find('.fw--icon--minus').hide();
        link.closest('.x-menu--level-1--link').find('.fw--icon--plus').show();
        sub_menu = link.closest('.x-menu--level-1--link').find('.x-menu--level-2--container');
        link_wrapper.attr('data-x-menu--open', 'false');
        link.attr('aria-expanded', 'false');
        return sub_menu.velocity({
          opacity: 0
        }, {
          begin: function() {
            return _this.state = 'closing';
          },
          complete: function() {
            sub_menu.css({
              'display': 'none'
            });
            return _this.state = 'closed';
          },
          duration: 200
        });
      }
    };

    return FrameworkXMenu;

  })();

  theme.classes.FrameworkYMenu = (function() {
    function FrameworkYMenu(root) {
      var _this;
      this.root = root;
      this.slideRight = bind(this.slideRight, this);
      this.slideLeft = bind(this.slideLeft, this);
      this.adjustHeight = bind(this.adjustHeight, this);
      this.listeners = bind(this.listeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.state = 'closed';
      _this.sub_menu_links = _this.root.find('.fw--icon--chevron-right').parent();
      _this.back_links = _this.root.find('.y-menu--back-link a');
      _this.regular_links = _this.root.find('.y-menu--level-1--link > a:not([data-submenu="true"]), .y-menu--level-2--link > a:not([data-submenu="true"]), .y-menu--level-3--link > a:not([data-submenu="true"])');
      _this.timer = null;
      _this.load();
    }

    FrameworkYMenu.prototype.load = function() {
      var _this;
      _this = this;
      return _this.listeners();
    };

    FrameworkYMenu.prototype.listeners = function() {
      var _this;
      _this = this;
      _this.regular_links.on('click', function(e) {
        var href;
        href = $(this).attr('href');
        if (href.indexOf('#') !== -1) {
          if (theme.partials.FrameworkOffCanvas.state === 'left-open') {
            theme.partials.FrameworkOffCanvas.closeLeft();
          } else if (theme.partials.FrameworkOffCanvas.state === 'right-open') {
            theme.partials.FrameworkOffCanvas.closeRight();
          }
          setTimeout(function() {
            return window.location.href = href;
          }, 450);
        }
      });
      _this.sub_menu_links.on('click', function(e) {
        _this.slideLeft($(this));
        return false;
      });
      return _this.back_links.on('click', function(e) {
        _this.slideRight($(this));
        return false;
      });
    };

    FrameworkYMenu.prototype.adjustHeight = function(open_list) {
      var _this, current_height, open_list_height;
      _this = this;
      _this.root.css({
        height: 'auto'
      });
      current_height = _this.root.outerHeight();
      open_list_height = open_list.outerHeight();
      if (open_list.css('position') === 'absolute') {
        open_list.css('position', 'relative');
        open_list_height = open_list.outerHeight();
        open_list.css('position', 'absolute');
      }
      return _this.root.velocity({
        height: open_list_height
      });
    };

    FrameworkYMenu.prototype.slideLeft = function(link) {
      var _this, sub_menu;
      _this = this;
      sub_menu = link.closest('li').find('ul').first();
      sub_menu.css({
        display: 'block'
      });
      _this.adjustHeight(sub_menu);
      return sub_menu.velocity({
        translateX: ['-100%', 0]
      });
    };

    FrameworkYMenu.prototype.slideRight = function(link) {
      var _this, container, parent_container;
      _this = this;
      container = link.closest('ul');
      parent_container = container.parent().closest('ul');
      _this.adjustHeight(parent_container);
      return container.velocity({
        translateX: [0, '-100%']
      });
    };

    return FrameworkYMenu;

  })();

  theme.classes.Popup = (function() {
    function Popup(root) {
      var _this;
      this.root = root;
      _this = this;
      _this.container = _this.root.find('.popup--container');
      _this.open_link = $('.popup--open');
      _this.close_link = _this.root.find('.popup--close');
      _this.show_again_after = _this.root.data('show-again-after');
      _this.mode = _this.root.data('mode');
      _this.newsletter_form = _this.root.find('#contact_form');
      _this.body = $('body');
      _this.eventListeners();
      _this.autoPopup();
    }

    Popup.prototype.eventListeners = function() {
      var _this;
      _this = this;
      _this.open_link.on('keypress.Popup, click.Popup', function(e) {
        if (_this.body.hasClass('popup--opened')) {
          _this.close();
        } else {
          _this.open();
        }
        return false;
      });
      _this.close_link.on('keypress.Popup, click.Popup', function(e) {
        _this.close();
        return false;
      });
      return _this.newsletter_form.on('submit', function(event) {
        var form, form_dom;
        form_dom = this;
        form = $(this);
        form.find('.error, .success').remove();
        event.preventDefault();
        if (form.find('input[type="email"]').val().length === 0) {
          form.prepend('<p class="error">' + theme.translations.mailing_list_email_blank + '</p>');
          return false;
        } else {
          form.find('input[type="email"], input[type="submit"]').hide();
          form.prepend('<p class="success">' + theme.translations.mailing_list_success_message + '</p>').show();
          setTimeout(function() {
            return form_dom.submit();
          }, 500);
        }
        return false;
      });
    };

    Popup.prototype.open = function(source) {
      var _this;
      _this = this;
      _this.container.removeClass('popup--closed');
      _this.container.velocity({
        translateY: [0, _this.container.outerHeight()]
      }, {
        duration: 300
      });
      _this.body.addClass('popup--opened');
      return setTimeout(function() {
        return _this.body.css('padding-bottom', _this.container.outerHeight());
      }, 300);
    };

    Popup.prototype.delayUntilValidScrollPosition = function() {
      var _this;
      _this = this;
      return $(window).on("DOMMouseScroll.Popup mousewheel.Popup touchmove.Popup scroll.Popup touchmove.Popup", function(e) {
        var header_offset, scroll_top;
        header_offset = $('.header').offset().top;
        scroll_top = $(window).scrollTop();
        if (scroll_top > header_offset) {
          _this.open();
          return $(window).off("DOMMouseScroll.Popup mousewheel.Popup touchmove.Popup scroll.Popup touchmove.Popup");
        }
      });
    };

    Popup.prototype.close = function() {
      var _this;
      _this = this;
      _this.body.removeClass('popup--opened');
      _this.body.velocity({
        paddingBottom: 0
      }, {
        duration: 300
      });
      return _this.container.velocity({
        translateY: [_this.container.outerHeight(), 0]
      }, {
        duration: 300,
        complete: function() {
          return _this.container.addClass('popup--closed');
        }
      });
    };

    Popup.prototype.autoPopup = function() {
      var _this;
      _this = this;
      if (_this.mode === 'manual') {
        return;
      }
      if (!Modernizr.localstorage || _this.mode === 'test') {
        return setTimeout(function() {
          return _this.open('auto');
        }, 1000);
      } else if (localStorage['troop-themes'] === void 0) {
        _this.setResetTime();
        return setTimeout(function() {
          return _this.open('auto');
        }, 1000);
      } else if (_this.readyToReset()) {
        _this.setResetTime();
        return setTimeout(function() {
          return _this.open('auto');
        }, 1000);
      }
    };

    Popup.prototype.readyToReset = function() {
      var _this, expires, now, troop_local_storage;
      _this = this;
      troop_local_storage = JSON.parse(localStorage['troop-themes']);
      expires = troop_local_storage.popup_expires;
      now = new Date().getTime();
      if (parseFloat(expires - now) <= 0) {
        _this.setResetTime();
        return true;
      }
      return false;
    };

    Popup.prototype.setResetTime = function() {
      var _this, date, expires, object, seconds_from_now;
      _this = this;
      date = new Date();
      seconds_from_now = 1000 * 60 * 60 * 24 * _this.show_again_after;
      expires = date.setTime(date.getTime() + seconds_from_now);
      object = {
        popup_expires: expires
      };
      localStorage['troop-themes'] = JSON.stringify(object);
      return _this;
    };

    return Popup;

  })();

  theme.classes.Cart = (function(superClass) {
    extend(Cart, superClass);

    function Cart() {
      return Cart.__super__.constructor.apply(this, arguments);
    }

    return Cart;

  })(theme.classes.FrameworkCart);

  theme.classes.FeaturedBlog = (function() {
    function FeaturedBlog(root) {
      var _this;
      this.root = root;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      _this = this;
      _this.item_container = _this.root.find('.featured-blog--body');
      _this.items = _this.root.find('.featured-blog--item');
      _this.matchImageHeights();
      _this.resizeListeners();
    }

    FeaturedBlog.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      return theme.utils.matchImageHeights(_this.item_container, _this.items, '.featured-blog--item--image');
    };

    FeaturedBlog.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.FeaturedGrid', theme.utils.debounce(100, function() {
        return _this.matchImageHeights();
      }));
    };

    return FeaturedBlog;

  })();

  theme.classes.FeaturedProduct = (function(superClass) {
    extend(FeaturedProduct, superClass);

    function FeaturedProduct() {
      return FeaturedProduct.__super__.constructor.apply(this, arguments);
    }

    return FeaturedProduct;

  })(theme.classes.FrameworkFeaturedProduct);

  theme.classes.Footer = (function() {
    function Footer(container1) {
      var _this;
      this.container = container1;
      _this = this;
    }

    return Footer;

  })();

  theme.classes.Slideshow = (function() {
    function Slideshow(root) {
      var _this, slide_parent;
      this.root = root;
      this.eventListeners = bind(this.eventListeners, this);
      this.alignPlayButton = bind(this.alignPlayButton, this);
      this.alignCaption = bind(this.alignCaption, this);
      this.isFirstSlider = bind(this.isFirstSlider, this);
      this.getActiveIndex = bind(this.getActiveIndex, this);
      this.autoplay = bind(this.autoplay, this);
      this.createSlider = bind(this.createSlider, this);
      _this = this;
      this.el = _this.root.find('.slides');
      slide_parent = this.el.closest('.slider');
      this.autoplay_enabled = slide_parent.data('autoplay');
      if (slide_parent.find('.slide').length < 2) {
        this.autoplay_enabled = false;
      }
      this.autoplay_frequency = slide_parent.data('rotateFrequency');
      this.transition_style = slide_parent.data('transitionStyle');
      this.createSlider();
      this.owl = $(".owl-carousel").data('owlCarousel');
    }

    Slideshow.prototype.createSlider = function() {
      var slider, slider_options;
      slider = this;
      slider_options = {
        singleItem: true,
        navigation: false,
        paginationNumbers: false,
        scrollPerPageNav: true,
        slideSpeed: 800,
        pagination: true,
        autoHeight: false,
        autoPlay: slider.autoplay(),
        afterInit: function() {
          return slider.eventListeners();
        },
        afterAction: function() {
          slider.alignCaption();
          return slider.alignPlayButton();
        }
      };
      if (this.transition_style !== 'default') {
        slider_options['transitionStyle'] = this.transition_style;
      }
      return slider.el.owlCarousel(slider_options);
    };

    Slideshow.prototype.autoplay = function() {
      if (this.autoplay_enabled) {
        return this.autoplay_frequency;
      }
      return false;
    };

    Slideshow.prototype.getActiveIndex = function() {
      return this.el.find('.owl-pagination .owl-page.active').index();
    };

    Slideshow.prototype.isFirstSlider = function() {
      var current_section_id, first_section, first_section_id;
      first_section = $('.index-sections').children('div:first');
      first_section_id = first_section.find('.slider').data('sectionId');
      current_section_id = this.el.closest('.slider').data('sectionId');
      if (first_section.hasClass('section--slideshow')) {
        return current_section_id === first_section_id;
      }
      return false;
    };

    Slideshow.prototype.alignCaption = function() {
      var caption, caption_height, caption_width, left_offset, middle_top, slide, slide_height, slide_padding, slide_width, top_offset;
      slide = this.el.find('.owl-item').eq(this.getActiveIndex());
      caption = slide.find('.caption');
      caption.css('visibility', 'hidden');
      caption_height = caption.outerHeight();
      caption_width = caption.outerWidth();
      slide_padding = 30;
      slide_height = slide.outerHeight();
      slide_width = slide.outerWidth();
      top_offset = 0;
      if (caption.hasClass('top')) {
        caption.css('top', top_offset + slide_padding);
      } else if (caption.hasClass('middle')) {
        caption.css('top', '45%');
      }
      if (caption.hasClass('center')) {
        left_offset = (slide_width - caption_width) / 2;
        caption.css('left', left_offset);
      }
      return caption.css('visibility', 'visible');
    };

    Slideshow.prototype.alignPlayButton = function() {
      var play_button, slide;
      slide = this.el.find('.owl-item').eq(this.getActiveIndex());
      play_button = slide.find('.play-button');
      play_button.css('visibility', 'hidden');
      play_button.css({
        'margin-top': '-40px',
        'top': '50%'
      });
      return play_button.css('visibility', 'visible');
    };

    Slideshow.prototype.eventListeners = function() {
      var slider;
      slider = this;
      return this.el.find('.owl-pagination .owl-page').on('click', function() {
        return slider.owl.stop();
      });
    };

    return Slideshow;

  })();

  theme.classes.Header = (function() {
    function Header(root) {
      var _this;
      this.root = root;
      this.moveYMenu = bind(this.moveYMenu, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.load();
    }

    Header.prototype.load = function() {
      var _this;
      _this = this;
      _this.moveYMenu();
      if ($('.modal.window').css('display') === 'block') {
        $('.modal.window .close').trigger('click');
      }
      return _this.root.on('theme:section:load', function() {
        theme.partials.FrameworkOffCanvas.unload();
        return theme.partials.FrameworkOffCanvas.load();
      });
    };

    Header.prototype.moveYMenu = function() {
      var _this;
      _this = this;
      $('.mobile-nav--menu').empty();
      return $('.y-menu').appendTo('.mobile-nav--menu');
    };

    return Header;

  })();

  theme.classes.OffCanvas = (function(superClass) {
    extend(OffCanvas, superClass);

    function OffCanvas(root) {
      this.root = root;
      OffCanvas.__super__.constructor.apply(this, arguments);
    }

    return OffCanvas;

  })(theme.classes.FrameworkOffCanvas);

  theme.classes.XMenu = (function(superClass) {
    extend(XMenu, superClass);

    function XMenu(root) {
      var _this;
      this.root = root;
      this.checkOverlap = bind(this.checkOverlap, this);
      this.alignSubmenus = bind(this.alignSubmenus, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.cart_count = $('.header--cart-count');
      _this.hide_when_overlapping = $('.layout--header .layout--login, .layout--header .popup--open, .layout--header .modal.cart-link, .layout--header .header--search');
      XMenu.__super__.constructor.apply(this, arguments);
    }

    XMenu.prototype.load = function() {
      var _this;
      _this = this;
      XMenu.__super__.load.apply(this, arguments);
      return _this.alignSubmenus();
    };

    XMenu.prototype.alignSubmenus = function() {
      var _this, logo, logo_offset, sub_menus;
      _this = this;
      logo = $('.layout--header .fw--logo');
      logo_offset = logo.outerWidth();
      sub_menus = _this.root.find('[data-x-menu--depth="3"] .x-menu--level-2--container');
      return sub_menus.each(function() {
        return $(this).css({
          left: logo_offset,
          width: "calc(100% - " + logo_offset + "px)"
        });
      });
    };

    XMenu.prototype.checkOverlap = function() {
      var _this, header;
      _this = this;
      header = $('.layout--header');
      _this.cart_count.attr('data-menu-overlap', 'false');
      header.attr('data-menu-overlap', 'false');
      _this.hide_when_overlapping.css({
        display: 'inline-block'
      });
      XMenu.__super__.checkOverlap.apply(this, arguments);
      if (_this.root.attr('data-x-menu--overlap') === 'true') {
        header.attr('data-menu-overlap', 'true');
        _this.hide_when_overlapping.hide();
        if (parseInt(_this.cart_count.find('.count').text()) > 0) {
          return _this.cart_count.attr('data-menu-overlap', 'true');
        }
      }
    };

    return XMenu;

  })(theme.classes.FrameworkXMenu);

  theme.classes.CollectionPage = (function() {
    function CollectionPage(root) {
      var _this;
      this.root = root;
      this.matchImageHeights = bind(this.matchImageHeights, this);
      _this = this;
      _this.product_grid = _this.root.find('.product-grid');
      _this.items = _this.product_grid.find('.block');
      _this.load();
    }

    CollectionPage.prototype.load = function() {
      var _this;
      _this = this;
      _this.eventListeners();
      return _this.matchImageHeights();
    };

    CollectionPage.prototype.eventListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.CollectionPage', function() {
        return _this.matchImageHeights();
      });
    };

    CollectionPage.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      return theme.utils.matchImageHeights(_this.product_grid, _this.items, '.product--image-wrapper');
    };

    return CollectionPage;

  })();

  theme.classes.IndexCollection = (function() {
    function IndexCollection(container1) {
      var _this;
      this.container = container1;
      this.load = bind(this.load, this);
      _this = this;
      _this.load();
    }

    IndexCollection.prototype.load = function() {
      var _this;
      _this = this;
      return _this.container.on('theme:section:load', function() {
        return $(_this.container.find('.fw--align--fill-y--dynamic')).each(function() {
          return new FrameworkAlign($(this), 'fill-y--dynamic');
        });
      });
    };

    return IndexCollection;

  })();

  theme.classes.ProductPage = (function() {
    function ProductPage(root) {
      var _this;
      this.root = root;
      this.initiateVariants = bind(this.initiateVariants, this);
      this.variantSelected = bind(this.variantSelected, this);
      this.swapImages = bind(this.swapImages, this);
      this.updateVariantImage = bind(this.updateVariantImage, this);
      this.addProductComplete = bind(this.addProductComplete, this);
      this.renderCart = bind(this.renderCart, this);
      this.addToCartListener = bind(this.addToCartListener, this);
      this.quantityListeners = bind(this.quantityListeners, this);
      this.resizeListeners = bind(this.resizeListeners, this);
      this.copyLink = bind(this.copyLink, this);
      this.reorderModalImages = bind(this.reorderModalImages, this);
      this.balanceColumns = bind(this.balanceColumns, this);
      this.indexContentBlocks = bind(this.indexContentBlocks, this);
      this.load = bind(this.load, this);
      _this = this;
      if (_this.root.hasClass('partial--product')) {
        _this.product = _this.root;
      } else {
        _this.product = _this.root.find('.partial--product');
      }
      _this.form = _this.product.find('.add-to-cart form');
      _this.add_button = _this.product.find('button.add');
      _this.compare_price = _this.product.find('.compare-price');
      _this.actual_price = _this.product.find('.actual-price');
      _this.sezzle_price = _this.product.find('.interest-free span.money');
      _this.product_unavailable = _this.product.find('.product-unavailable');
      _this.quantity = _this.product.find('.quantity');
      _this.handle = _this.product.data('handle');
      _this.id = _this.product.data('id');
      _this.view = _this.product.data('view');
      _this.smart_payment_buttons = _this.root.find('.product-page--smart-payment-buttons');
      _this.load();
      _this.low_in_stock = _this.product.find('.product-page-cart--low-in-stock'); // Added by Craig R
    }

    ProductPage.prototype.load = function() {
      var _this;
      _this = this;
      _this.initiateVariants();
      _this.quantityListeners();
      _this.indexContentBlocks();
      _this.copyLink();
      _this.balanceColumns();
      _this.reorderModalImages();
      _this.resizeListeners();
      if (theme.cart_type === 'modal') {
        _this.addToCartListener();
      }
      return _this.root.on('theme:section:load', function() {
        new Shopify.OptionSelectors('product-select-' + theme.product.id, {
          product: theme.product.json,
          onVariantSelected: _this.variantSelected,
          enableHistoryState: true
        });
        return _this.root.find('.fw--align--right').each(function() {
          return new FrameworkAlign($(this), 'right');
        });
      });
    };

    ProductPage.prototype.indexContentBlocks = function() {
      var content_blocks;
      content_blocks = $('.layout--main-content .product .content .block');
      return content_blocks.each(function(index) {
        return $(this).attr('data-block-index', index);
      });
    };

    ProductPage.prototype.balanceColumns = function() {
      var _this, content, content_blocks, image_count, images, left_side, right_side, single_column;
      _this = this;
      images = $('.layout--main-content .product .content .product-page--image');
      content = $('.layout--main-content .product .content');
      single_column = content.find('.single-column');
      content_blocks = content.find('.block');
      left_side = content.find('.left-side');
      right_side = content.find('.right-side');
      image_count = content.find('.photo:not(.hidden-variant-image)').length;
      if (content_blocks.find('iframe').length && theme.utils.mqs.current_window !== 'small' && left_side.children().length) {
        return false;
      }
      content_blocks.sort(function(a, b) {
        return +a.getAttribute('data-block-index') - +b.getAttribute('data-block-index');
      }).appendTo(single_column);
      single_column.show();
      left_side.hide();
      right_side.hide();
      if (image_count > 0 && theme.utils.mqs.current_window !== 'small') {
        content_blocks.each(function(index) {
          var left_height, right_height;
          left_height = left_side.outerHeight();
          right_height = right_side.outerHeight();
          if (left_height <= right_height) {
            return $(this).appendTo(left_side);
          } else {
            return $(this).appendTo(right_side);
          }
        });
        single_column.hide();
        left_side.show();
        return right_side.show();
      }
    };

    ProductPage.prototype.reorderModalImages = function() {
      var _this, modal_content_wrapper, modal_images, product_images;
      _this = this;
      product_images = _this.root.find('.modal--root >:not(.modal--content-wrapper) .product-page--image');
      modal_images = _this.root.find('.modal--root .modal--content .product-page--image');
      modal_content_wrapper = _this.root.find('.modal--content-wrapper');
      return product_images.each(function() {
        var modal_content;
        modal_content = modal_images.filter('[data-image-id="' + $(this).attr('data-image-id') + '"]').closest('.modal--content');
        return modal_content_wrapper.append(modal_content);
      });
    };

    ProductPage.prototype.copyLink = function() {
      var copy_link, copy_link_textarea;
      copy_link = $('.partial--social-media .copy-link a');
      copy_link_textarea = copy_link.parent().find('textarea');
      copy_link.on('click', function() {
        copy_link_textarea.toggle();
        copy_link_textarea.focus();
        return false;
      });
      return copy_link.parent().find('textarea').on('focus', function() {
        var $this;
        $this = $(this);
        $this.select();
        return $this.on('mouseup', function() {
          $this.unbind("mouseup");
          return false;
        });
      });
    };

    ProductPage.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.TemplateProduct', function() {
        _this.balanceColumns();
        return _this.reorderModalImages();
      });
    };

    ProductPage.prototype.quantityListeners = function() {
      var _this;
      _this = this;
      _this.quantity.find('.plus').on('click.PartialProduct', function() {
        var input;
        input = _this.quantity.find('input');
        return input.val(1 + parseInt(input.val()));
      });
      return _this.quantity.find('.minus').on('click.PartialProduct', function() {
        var input;
        input = _this.quantity.find('input');
        if (parseInt(input.val()) > 1) {
          return input.val(parseInt(input.val()) - 1);
        }
      });
    };

    ProductPage.prototype.addToCartListener = function() {
      var _this;
      _this = this;
      _this.renderCart();
      if (_this.form.length > 0) {
        return _this.form.submit(function() {
          _this.form.find('p.error').remove();
          _this.add_button.addClass('loading');
          theme.partials.Cart.addItem($(this), function(pass, error) {
            if (pass) {
              return _this.renderCart();
            } else {
              _this.form.append('<p class="error">' + error + '</p>');
              return _this.add_button.removeClass('loading');
            }
          });
          return false;
        });
      }
    };

    ProductPage.prototype.renderCart = function() {
      var _this;
      _this = this;
      return theme.partials.Cart.renderCart(function() {
        return _this.addProductComplete();
      });
    };

    ProductPage.prototype.addProductComplete = function() {
      var _this;
      _this = this;
      _this.add_button.removeClass('loading');
      return $('.modal.cart-link .modal--link').trigger('click');
    };

    ProductPage.prototype.updateVariantImage = function(variant_id) {
      var _this, featured_image, modal_images, new_featured_image, new_first_modal_image, other_images, product;
      _this = this;
      product = $('.product');
      featured_image = product.find('.product-page--featured-image .product-page--image');
      other_images = product.find('.content .image-wrapper .product-page--image');
      modal_images = product.closest('.modal--root').find('.modal--content .product-page--image');
      if (variant_id && variant_id !== parseInt(featured_image.attr('data-image-id'))) {
        new_featured_image = other_images.filter('[data-image-id="' + variant_id + '"]');
        new_first_modal_image = modal_images.filter('[data-image-id="' + variant_id + '"]');
        _this.swapImages(featured_image, new_featured_image);
        _this.swapImages(modal_images.first(), new_first_modal_image);
        _this.balanceColumns();
        _this.reorderModalImages();
      }
    };

    ProductPage.prototype.swapImages = function(img_1, img_2) {
      var _this, img_1_clone, img_2_clone;
      _this = this;
      img_1_clone = img_1.clone();
      img_2_clone = img_2.clone();
      img_1.replaceWith(img_2_clone);
      return img_2.replaceWith(img_1_clone);
    };

    ProductPage.prototype.variantSelected = function(variant, selector, options) {
      var _this, product, product_title, product_variant_size;
      _this = this;
      product = $('#' + selector.domIdPrefix).closest('.partial--product');
      product_variant_size = product.data('variants-size');
      product_title = product.closest('.product').find('.details .title').html();
      var addCartPanel = $('.add-to-cart-panel');
      _this.compare_price.html("");
      if (variant && variant.available) {
        _this.quantity.show();
        _this.add_button.show();
        _this.product_unavailable.hide();
        _this.smart_payment_buttons.show();
        addCartPanel.removeClass('product__sold-out'); // Added by Craig
        _this.low_in_stock.show();
      } else {
        _this.quantity.hide();
        _this.add_button.hide();
        _this.smart_payment_buttons.hide();
        _this.product_unavailable.show();
        _this.low_in_stock.hide();
        addCartPanel.addClass('product__sold-out'); // Added by Craig
        if (product_variant_size > 1 && variant) {
          _this.product_unavailable.find('form .email-body').attr('value', theme.translations.products_sold_out_email_description + ": " + product_title + ' - ' + variant.title);
        }
      }
      if (variant) {
        _this.actual_price.html(Shopify.formatMoney(variant.price, theme.money_format));
        // to change sezzle price on variant change
        _this.sezzle_price.html(Shopify.formatMoney((variant.price)/4, theme.money_format));
        if (variant.compare_at_price > variant.price) {
          _this.compare_price.html(Shopify.formatMoney(variant.compare_at_price, theme.money_format));
        }
        if (theme.currency_switcher_enabled) {
          Currency.convertAll(Currency.shop_currency, Currency.currentCurrency, _this.actual_price, null, true);
          Currency.convertAll(Currency.shop_currency, Currency.currentCurrency, _this.compare_price, null, true);
        }
        if (_this.view === 'product-page') {
          if (variant.featured_image) {
            _this.updateVariantImage(variant.featured_image.id);
          } else {
            _this.updateVariantImage(0);
          }
        }
      }
    };

    ProductPage.prototype.initiateVariants = function(json) {
      var _this, duplicate_exists, history_state, variant_id;
      _this = this;
      if (!$('.template--product').length) {
        variant_id = "product-select-" + _this.id;
        duplicate_exists = false;
        if ($.inArray(variant_id, theme.variant_id_list) === -1) {
          theme.variant_id_list.push(variant_id);
        } else {
          duplicate_exists = true;
          $("#" + variant_id).first().attr("id", variant_id + "--disabled");
        }
        history_state = false;
        if (_this.view === 'product-page') {
          history_state = true;
        }
        if (_this.product.find('select').length > 0) {
          new Shopify.OptionSelectors(variant_id, {
            product: theme.product_json[_this.id],
            onVariantSelected: _this.variantSelected,
            enableHistoryState: history_state
          });
        }
        if (duplicate_exists) {
          return $("#" + variant_id + "--disabled").first().attr("id", variant_id);
        }
      }
    };

    return ProductPage;

  })();

  jQuery(function($) {
    var MAIN, PAGE, copyLink, digitalDownloads, fw_media_queries, isFirefox, resize_timer, stickyFooter, templateArticle;
    PAGE = $('body');
    MAIN = $('.layout--main-content');
    $('.fw--cart-modal--trigger-render span.total-price').addClass('money');
    $('.template--product .partial--product.view--full .actual-price').addClass('money');
    theme.sections = new theme.classes.Sections();
    fw_media_queries = new theme.classes.FrameworkMediaQueries();
    theme.utils = new theme.classes.FrameworkUtils();
    theme.utils.mqs = fw_media_queries;
    theme.utils.a11yClick = function(event) {
      var code;
      if (event.type === 'click') {
        return true;
      } else if (event.type === 'keypress') {
        code = event.charCode || event.keyCode;
        if (code === 32) {
          event.preventDefault();
        }
        if (code === 32 || code === 13) {
          return true;
        }
      } else {
        return false;
      }
    };
    theme.utils.addSymbol = function(icon_name) {
      return '<svg class="fw--icon fw--icon--' + icon_name + '"> <use xlink:href="#fw--icon--' + icon_name + '" /> </svg>';
    };
    theme.utils.loadJsClasses = function() {
      return $('[data-js-class]').each(function() {
        var js_class, partial_class;
        js_class = $(this).attr('data-js-class');
        if ($(this).attr('data-js-loaded') !== 'true') {
          partial_class = theme.classes[js_class];
          if (typeof partial_class !== "undefined") {
            theme.partials[js_class] = new partial_class($(this));
            return $(this).attr('data-js-loaded', 'true');
          }
        }
      });
    };
    $('a').each(function() {
      var _this;
      _this = $(this);
      if (this.host === location.host) {
        if (_this.hasClass('return-policy-link') ) {
          return _this.attr('target', '_blank').attr('rel', 'noopener');
        } else {
          return _this.attr('target', '_self');
        }
      } else {
        return _this.attr('target', '_blank').attr('rel', 'noopener');
      }
    });
    isFirefox = typeof InstallTrigger !== "undefined";
    if (isFirefox) {
      $('img').addClass('image-scale-hack');
    }
    $('.fw--align--left').each(function() {
      return new FrameworkAlign($(this), 'left');
    });
    $('.fw--align--center-x').each(function() {
      return new FrameworkAlign($(this), 'center-x');
    });
    $('.fw--align--right').each(function() {
      return new FrameworkAlign($(this), 'right');
    });
    $('.fw--align--top').each(function() {
      return new FrameworkAlign($(this), 'top');
    });
    $('.fw--align--center-y').each(function() {
      return new FrameworkAlign($(this), 'center-y');
    });
    $('.fw--align--bottom').each(function() {
      return new FrameworkAlign($(this), 'bottom');
    });
    $('.partial--popup #mc-embedded-subscribe-form').on('submit', function(event) {
      $('.modal .close').click();
      return true;
    });
    $('.partial--popup #contact_form').on('submit', function(event) {
      var form, modal, wrapper;
      form = this;
      modal = $(this).closest('.partial--popup');
      modal.find('.error, .success').remove();
      wrapper = modal.find('.wrapper');
      event.preventDefault();
      if (modal.find('[type="email"]').val().length === 0) {
        return false;
      } else {
        wrapper.find('*').remove().end().prepend('<p class="success">' + theme.translations.mailing_list_success_message + '</p>').show();
        setTimeout(function() {
          return form.submit();
        }, 500);
      }
      return false;
    });
    if (PAGE.hasClass('template--search')) {
      $(document).on('shopify:section:load', function() {
        return checkLogoHeight();
      });
    }
    if (PAGE.hasClass('template--password')) {
      $(document).on('click', '.login-link', function() {
        $(this).css('visibility', 'hidden');
        $('.wrapper').hide();
        $('.login-form').css('visibility', 'visible');
        $('.login-form input[type="password"]').focus();
        return false;
      }).on('click', '.login-form .cancel', function() {
        $('.login-link').css('visibility', 'visible');
        $('.wrapper').fadeIn();
        $('.login-form').css('visibility', 'hidden');
        return false;
      });
      if ($('.login-form .errors').size()) {
        $('.login-link').click();
      }
    }
    if (PAGE.hasClass('template--article')) {
      templateArticle = function() {
        var first_article_img, pinterest_button;
        pinterest_button = $('.share-buttons-list .link--pinterest');
        first_article_img = $('article img').first().attr('src');
        return pinterest_button.attr('href', pinterest_button.attr('href') + '&media=' + first_article_img);
      };
      templateArticle();
      copyLink = function() {
        var copy_link, copy_link_textarea;
        copy_link = $('.partial--social-media .copy-link a');
        copy_link_textarea = copy_link.parent().find('textarea');
        copy_link.on('click', function() {
          copy_link_textarea.toggle();
          copy_link_textarea.focus();
          return false;
        });
        return copy_link.parent().find('textarea').on('focus', function() {
          var $this;
          $this = $(this);
          $this.select();
          return $this.on('mouseup', function() {
            $this.unbind("mouseup");
            return false;
          });
        });
      };
      copyLink();
    }
    digitalDownloads = function() {
      if ($('.sdd-download').length) {
        return $('.sdd-download-button').removeClass('sdd-download-button').css('visibility', 'visible');
      }
    };
    digitalDownloads();
    theme.utils.loadJsClasses();
    resize_timer = null;
    $(window).on('resize', function() {
      clearTimeout(resize_timer);
      return resize_timer = setTimeout(function() {
        return $('.fw--align--fill-y--dynamic').each(function() {
          return new FrameworkAlign($(this), 'fill-y--dynamic');
        });
      }, 250);
    });
    $('#admin_bar_iframe').load(function() {
      var iframe;
      iframe = $('#admin_bar_iframe').contents();
      if (iframe.find('#storefront-bar-minimized').css('display') === 'none') {
        return setTimeout(function() {
          return $('html').css('padding-top', '40px');
        }, 10);
      }
    });
    $('.fw--align--fill-y--dynamic').each(function() {
      return new FrameworkAlign($(this), 'fill-y--dynamic');
    });
    $('.fw--align--max-img-height').each(function() {
      return new FrameworkAlign($(this), 'max-img-height');
    });
    $('html').addClass('after-js-loaded');
    if (!PAGE.hasClass('template--index')) {
      stickyFooter = function() {
        if ($(window).outerHeight() > $('.fw--off-canvas--main-content').outerHeight()) {
          return $('.layout--main-content').css({
            'min-height': $(window).outerHeight() - $('.layout--footer').outerHeight()
          });
        }
      };
      stickyFooter();
      $(window).resize(function() {
        return stickyFooter();
      });
    }
    return setTimeout(function() {
      return $(".owl-carousel").each(function() {
        return $(this).data('owlCarousel').calculateAll();
      });
    }, 0);


  });


}).call(this);
                                                                                      
