!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var i=window.localStorage,o=function(){var e=JSON.parse(i.getItem("contacts")),t=document.querySelector("#contact-list");if(e){t.innerHTML="";var n=document.createElement("div");e.forEach((function(e){var t=document.createElement("div");t.innerHTML='\n        <div class="ui card" id="profile-div">\n          <div class="image">\n            <img src="https://semantic-ui.com/images/avatar/large/daniel.jpg" class="visible content">\n          </div>\n          <div class="content">\n              <div> <i class="users icon"></i>'+e.name+'</div>\n\n              <div> <i class="suitcase icon"></i>'+e.company+'</div>\n              <div>\n              <i class="phone square icon"></i>'+e.phone+'\n            </div>\n            <div>\n            <i class="twitter square icon"></i>\n              <a href="https://www.twitter.com/">'+e.twitter+'</a>\n              </div>\n              \n              <div>\n              <i class="envelope open icon"></i>'+e.email+'</div>\n              \n              <div class="description"> '+e.notes+"</div>\n            </div>\n            <button onClick=\"var c = JSON.parse(localStorage.getItem('contacts')); c.forEach((item, index, array) => item.id === "+e.id+' && array.splice(index, 1) ); localStorage.setItem(\'contacts\', JSON.stringify(c)); window.location.reload()" class="delete-this-contact" class="ui black basic button">Delete this contact</button>\n          \n        </div>\n       ',n.appendChild(t)})),t.appendChild(n)}else t.innerHTML="<p>You have no contacts in your address book</p>"};document.addEventListener("DOMContentLoaded",(function(){o();var e=document.querySelector(".new-contact-form");e.addEventListener("submit",(function(t){t.preventDefault();var n=e.elements,a=n.name,r=n.email,c=n.phone,s=n.company,l=n.notes,u=n.twitter,d={id:Date.now(),name:a.value,email:r.value,phone:c.value,company:s.value,notes:l.value,twitter:u.value};console.log("Saving the following contact: "+JSON.stringify(d));var v=JSON.parse(i.getItem("contacts"))||[];v.push(d),i.setItem("contacts",JSON.stringify(v)),o(),e.reset()}))}))}]);