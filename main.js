(()=>{"use strict";var e={15:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([e.id,".search-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 1.5rem;\n    width: 100%;\n    margin-bottom: 2rem;\n}\n\n#search-bar {\n    width: 25%;\n    padding: 8px;\n    outline: none;\n}\n\n#search-button {\n    border: none;\n    padding: 5px 8px;\n    border-radius: 5px;\n    cursor: pointer;\n}\n\n.hidden {\n    display: none;\n}\n",""]);const c=i},319:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([e.id,"#weather-card {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 75%;\n    gap: 1rem;\n}\n\n#weather-data-container {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n",""]);const c=i},365:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: 0;\n}\n\nbody {\n    width: 100%;\n    padding-top: 5%;\n    font-family: Arial, Helvetica, sans-serif;\n    overflow-x: hidden;\n    background-color: black;\n    color: white;\n}\n\n.heading {\n    text-align: center;\n    font-size: 4rem;\n    margin-bottom: 2rem;\n}\n\n#dynamic-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    padding: 1rem;\n}\n",""]);const c=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=t(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var u=t(a[d]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0;var r=t(72),o=t.n(r),a=t(825),i=t.n(a),c=t(659),s=t.n(c),d=t(56),u=t.n(d),l=t(540),p=t.n(l),m=t(113),f=t.n(m),h=t(365),v={};v.styleTagTransform=f(),v.setAttributes=u(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=p(),o()(h.A,v),h.A&&h.A.locals&&h.A.locals;var y=t(15),g={};g.styleTagTransform=f(),g.setAttributes=u(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),o()(y.A,g),y.A&&y.A.locals&&y.A.locals;var b=t(319),x={};function w(){const e=document.getElementById("dynamic-content"),n=document.createElement("div");n.className="search-container";const t=document.createElement("input");t.placeholder="Add location",t.id="search-bar";const r=document.createElement("button");r.id="search-button",r.innerText="Search",n.append(t,r),e.appendChild(n)}function T(){document.getElementById("search-button").addEventListener("click",E)}function E(){const e=document.getElementById("dynamic-content"),n=document.getElementById("search-bar");if(""===n.value)return;let t;e.innerText="",w(),T();(async function(e){const n=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${e}?unitGroup=us&include=current&key=B5S6D9FC2HU799G9X2B6QSQYK&contentType=json`;try{const e=await fetch(n);if(!e.ok)throw new Error(`HTTP Error Status: ${e.status}`);return await e.json()}catch(e){console.error(e.message)}})(n.value).then((n=>{var r;t={address:(r=n).resolvedAddress,temp:r.currentConditions.temp,dateTime:r.currentConditions.datetime,conditions:r.days[0].conditions,description:r.days[0].description,icon:r.days[0].icon};const o=function(e){const n=document.createElement("div");n.id="weather-card";const t=function(e){const n=document.createElement("div"),t=document.createElement("h1");t.id="weather-address",t.innerText=`${e.address}`;const r=document.createElement("p");r.id="weather-time",r.innerText=`Last time checked: ${e.dateTime}`;const o=document.createElement("p");var a;o.id="weather-temp",o.innerText=`Temperature: ${a=e.temp,Math.round(5*(a-32)/9)}°C`;const i=document.createElement("p");i.id="weather-conditions",i.innerText=`Conditions: ${e.conditions}`;const c=document.createElement("p");return c.id="weather-description",c.innerText=`Description: ${e.description}`,n.append(t,r,o,i,c),n}(e);t.id="weather-data-container";const r=function(e){const n=document.createElement("img");return async function(e){const n=`https://api.giphy.com/v1/gifs/translate?api_key=96hwjEWRpXYc3YVHw3G3YbSTK3fslPO3&s=${e}`;try{const e=await fetch(n),t=await e.json();if(!e.ok)throw new Error(`HTTP error Status: ${e.status}`);return t.data.images.original.url}catch(e){console.log(e.message)}}(e.icon).then((e=>{n.src=e})),n}(e);return r.id="weather-gif",n.append(t,r),n}(t);e.appendChild(o)})).catch((e=>{console.error(e)}))}x.styleTagTransform=f(),x.setAttributes=u(),x.insert=s().bind(null,"head"),x.domAPI=i(),x.insertStyleElement=p(),o()(b.A,x),b.A&&b.A.locals&&b.A.locals,w(),T()})();