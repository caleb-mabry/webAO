!function(){"use strict";var e,t,n={2557:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){document.cookie="".concat(e,"=").concat(t)}}},o={};function l(e){var t=o[e];if(void 0!==t)return t.exports;var c=o[e]={exports:{}};return n[e](c,c.exports,l),c.exports}l.d=function(e,t){for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e=l(2557),window.changeSFXVolume=function(){(0,e.default)("sfxVolume",document.getElementById("client_sfxaudio").volume)},window.changeTestimonyVolume=function(){(0,e.default)("testimonyVolume",document.getElementById("client_testimonyaudio").volume)},window.changeShoutVolume=function(){(0,e.default)("shoutVolume",document.getElementById("client_shoutaudio").volume)},window.resetOffset=function(e){document.getElementById("pair_offset").value="0",document.getElementById("pair_y_offset").value="0"},t=l(2557),window.showname_click=function(e){(0,t.default)("showname",String(document.getElementById("showname").checked)),(0,t.default)("ic_chat_name",document.getElementById("ic_chat_name").value);var n=document.getElementById("nameplate_setting");document.getElementById("showname").checked?n.href="styles/shownames.css":n.href="styles/nameplates.css"},window.toggleEffect=function(e){e.classList.contains("dark")?e.className="client_button":e.className="client_button dark"},window.toggleElement=function(e){var t=document.getElementById(e);"none"!==t.style.display?t.style.display="none":t.style.display="block"},window.updateActionCommands=function(e){"jud"===e?(document.getElementById("judge_action").style.display="inline-table",document.getElementById("no_action").style.display="none"):(document.getElementById("judge_action").style.display="none",document.getElementById("no_action").style.display="inline-table");for(var t=0,n=document.getElementById("role_select");t<n.options.length;t++)if(e===n.options[t].value)return void(n.options.selectedIndex=t)}}();
//# sourceMappingURL=dom.7628d7ec8bd3546f5c5d.bundle.js.map