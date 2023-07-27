(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Anton&family=Belanosima:wght@400;700&family=Lilita+One&family=Open+Sans:wght@400;700;800&family=Roboto:ital,wght@0,700;0,900;1,400&display=swap);"]),a.push([n.id,"* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: 'Open Sans';\n    /* border: 1px solid; */\n}\n\nbody,\nhtml {\n    height: 100%;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: min(35%, 350px) repeat(3, 1fr);\n    grid-template-rows: 100px repeat(3, 1fr);\n}\n\n/* Header */\n\n.header {\n    grid-row: 1;\n    grid-column: 1 / 5;\n    background-color: #f1faee;\n    padding: 12px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow: 1px 1px 6px rgb(169, 166, 166);\n}\n.header h1 {\n    font-weight: 800;\n}\n\n/* Sidebar */\n\n.sidebar {\n    grid-row: 2 / 5;\n    background-color: #a8dadc;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 15px;\n    padding: 12px;\n}\n.sidebar h2 {\n    padding: 7px 50px;\n    border-bottom: 1px solid;\n}\n.project-container {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n.project-container a {\n    font-size: 18px;\n    text-decoration: none;\n    padding: 6px 16px;\n    color: black;\n}\n.project-container a:hover {\n    background-color: #f1faee;\n}\n.sidebar form {\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n}\n.sidebar input {\n    padding: 6px 4px;\n    font-size: 16px;\n    border: none;\n    outline: none;\n    border-radius: 16px;\n}\n\n.sidebar input:first-child {\n    padding-left: 15px;\n}\ninput:focus::placeholder {\n    opacity: 0.6;\n}\n.sidebar button {\n    padding: 6px 0;\n    font-size: 16px;\n    background-color: #1d3557;\n    color: white;\n    border: none;\n    border-radius: 16px;\n}\n/* Main */\n\n.main {\n    grid-column: 2 / 5;\n    grid-row: 2 / 5;\n    padding: 30px;\n}\n\n.todos {\n    /* display: none; */\n}\n\n.todo-list {\n    display: flex;\n    flex-direction: column;\n}\n.todo-list > div {\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background-color: #f1faee;\n    padding: 12px;\n}\n.todo-elements {\n    display: flex;\n    align-items: center;\n}\n.todo-list p {\n    display: inline-block;\n}\n.todo-list label {\n    font-weight: 100;\n}\n.todo-list svg {\n    width: 30px;\n}\n.todo-list button {\n    background: none;\n    border: none;\n}\n.todos > button {\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n    font-size: 40px;\n    border: none;\n    color: white;\n    background-color: #2b2d42;\n}\n\n.create-todo {\n    width: 400px;\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    background-color: #415a77;\n    border-radius: 12px;\n    display: none;\n}\n.create-todo input,\n.create-todo textarea,\n.create-todo select{\n    padding: 8px;\n    background-color: /* #e5e5e5 */ white;\n    border: none;\n    outline: none;\n    border-radius: 3px;\n}\n.create-todo label {\n    color: white;\n\n}\n.create-todo button {\n    font-size: 16px;\n    padding: 6px 0;\n    background-color: white;\n    border: 1px solid;\n}\n.create-todo div{\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 15px;\n    gap: 3px;\n}\n",""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);o&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),e.push(s))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var d=n[c],l=o.base?d[0]+o.base:d[0],s=i[l]||0,u="".concat(l," ").concat(s);i[l]=s+1;var p=t(u),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var d=o(n,r),l=0;l<i.length;l++){var s=t(i[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}i=d}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),a=t.n(i),c=t(565),d=t.n(c),l=t(216),s=t.n(l),u=t(589),p=t.n(u),f=t(426),m={};m.styleTagTransform=p(),m.setAttributes=d(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=s(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;let x=[];function y(n){for(const e of n)if(!0===e.selected)return console.log(e),e}function g(n){document.querySelector(".todo-list").textContent="",function(n){n.forEach((n=>{n.selected=!1}))}(x),console.log(x),document.querySelector(".todos").style.display="block",document.querySelector(".todo-list"),x.forEach((e=>{n.target.innerText===e.title&&(function(n){n.selected=!0}(e),console.log(e))})),function(n){const e=document.querySelector(".todo-list"),t=y(n);console.log(t),t.todoItems.forEach((n=>{e.textContent+=`${n.title} - ${n.dueDate} - ${n.priority} - ${n.description}`}))}(x)}const h=document.querySelector(".add-project"),b=document.querySelector("form");let v=[];b.addEventListener("submit",(n=>{n.preventDefault(),v.push(document.querySelector(".project-container").lastChild),v[v.length-1].addEventListener("click",g)})),h.addEventListener("click",(function(){const n={title:document.querySelector(".sidebar input").value,selected:!1,todoItems:[]};if(document.querySelector(".sidebar input").value="",e=n,x.find((n=>n.title===e.title)))return void alert("Project with that title already exists");var e;!function(n){x.push(n)}(n),console.log(x);const t=document.createElement("a");t.setAttribute("href","#"),t.innerText=n.title,document.querySelector(".project-container").appendChild(t)})),document.querySelector(".create-todo-button").addEventListener("click",(function(){document.querySelector(".create-todo").style.display="flex"})),document.querySelector(".main form").addEventListener("submit",(n=>{n.preventDefault()})),document.querySelector(".main form button").addEventListener("click",(()=>{const n={title:document.querySelector("#title").value,description:document.querySelector("#description").value,dueDate:document.querySelector("#due-date").value,priority:document.querySelector("#priority").value};!function(n,e){n.forEach((n=>{!0===n.selected&&(n.todoItems.push(e),console.log(n.todoItems))}))}(x,n),function(n){const e=document.querySelector(".todo-list"),t=y(n),o=t.todoItems[t.todoItems.length-1];e.textContent+=`${o.title} - ${o.dueDate} - ${o.priority} - ${o.description} \n    \n    `}(x)}))})()})();