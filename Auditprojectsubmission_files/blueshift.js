!function(){var n=("https:"===document.location.protocol?"https:":"http:")+"//"+(window._bsfthost||"api.getblueshift.com")+"/",l=n+"unity.gif",t=!1,u="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest,d={};var o,f={eventApiKey:void 0,userParams:{},slots:[],slotParams:{},tz:(new Date).getTimezoneOffset()};function i(){for(var a=[],e=0;e<f.slots.length;e++)!function(s){var e,t;a[s]=p(),a[s].open("POST",n+"live",!0),a[s].setRequestHeader("Content-Type","application/json"),a[s].onreadystatechange=function(){if(4===a[s].readyState&&200==a[s].status){try{var e=JSON.parse(a[s].responseText)}catch(e){console.log("error loading slot",e)}e&&e.show&&(e.lightbox?(t=f.slots[s].el,n=e.width,o=e.height,i=e.content,r=e.lightbox_config,function(e,t,n,o,i){var r="https://cdn.getblueshift.com/live/modal.js";document.getElementById(r)&&renderLightbox(e,t,n,o,i);var s=document.createElement("script");s.id=r,s.src=r,s.async=!0,s.onload=()=>{renderLightbox(e,t,n,o,i)},document.body.append(s)}(t,n,o,i,r)):(n=f.slots[s].el,o=e.width,i=e.height,r=e.content,e=document.createElement("iframe"),n.innerHTML="",n.appendChild(e),e.src="about:blank",e.style.width=o,e.style.height=i,e.style.border="none",e.contentWindow.document.open(),e.contentWindow.document.write(r),e.contentWindow.document.close(),n.style.width=o,n.style.height=i,n.style.display="block"))}var t,n,o,i,r},f.slotParams[f.slots[s].name]||(f.slotParams[f.slots[s].name]={}),a[s].send((e=f.slots[s].name,(t=f.slotParams[f.slots[s].name]).tz=f.tz,t.href=window.location.href,t={x:f.eventApiKey,slot:e,user:f.userParams,context:t},"true"==c("dev")&&(t.dev=!0),"true"==c("preview")&&(t.preview=!0),JSON.stringify(t)))}(e)}function r(e){e&&(f.slotParams=e),function(){f.slots=[];for(var e=document.querySelectorAll("[data-bsft-slot]"),t=!1,n=0;n<e.length;n++){var o=e[n].dataset.bsftSlot;"lightbox"===o&&(t=!0),f.slots.push({name:o,el:e[n]})}f.slotParams.lightbox&&!t&&f.slots.push({name:"lightbox"})}(),i()}function h(e){try{var t=p();t.open("GET",e,!0),t.send(e)}catch(e){}}function p(){if(window.XMLHttpRequest)try{var t=new XMLHttpRequest}catch(e){t=new window.ActiveXObject("Microsoft.XMLHTTP")}return t}function m(e,t,n){var o=new Date;o.setDate(o.getDate()+n);var i=window.location.hostname,r=i.split(".");4==r.length&&0<=r[0]&&r[0]<=255&&0<=r[1]&&r[1]<=255&&0<=r[2]&&r[2]<=255&&0<=r[3]&&r[3]<=255||(i="."+i.replace(/^www./,""));i=escape(t)+(null==n?"":";expires="+o.toUTCString())+";path=/;domain="+i+";SameSite=Strict;";document.cookie=e+"="+i}function c(e){var t=window.location.href;e=e.replace(/[\[\]]/g,"\\$&");t=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return t?t[2]?decodeURIComponent(t[2].replace(/\+/g," ")):"":null}function s(e){var t,n,o=e[0],i=function(){var t="";try{t=window.top.document.referrer}catch(e){if(window.parent)try{t=window.parent.document.referrer}catch(e){t=""}}return t=""===t?document.referrer:t}(),r=Math.floor(1e6*Math.random()+1),s=Math.round(new Date/1e3),a=function(e){for(var t,n,o=document.cookie.split(";"),i=0;i<o.length;i++)if(t=o[i].substr(0,o[i].indexOf("=")),n=o[i].substr(o[i].indexOf("=")+1),(t=t.replace(/^\s+|\s+$/g,""))==e)return unescape(n)}("_bs");function c(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}if("object"==typeof analytics&&"function"==typeof analytics.user&&(a!=(t=analytics.user().anonymousId())&&m("_bs",t,365),a=t),null==a&&m("_bs",a=c()+c()+"-"+c()+"-"+c()+"-"+c()+"-"+c()+c()+c(),365),"config"==o&&e[1])return d=e[1],1;if("identify"==o&&(f.userParams=e[1]||{},f.userParams.cookie=a),"track"==o)o=e[1],e=e[2];else{if("retarget"==o)return 1;e=e[1]}for(n in req=l+"?t="+s+"&e="+o+"&r="+encodeURIComponent(i)+"&z="+r+"&x="+window._blueshiftid+"&k="+a+"&u="+encodeURIComponent(window.location.href),e)v=e[n],"object"==typeof v?req+="&"+n+"_json="+encodeURIComponent(JSON.stringify(v)):req+="&"+n+"="+encodeURIComponent(v);return u?d.usePOST?((e=null==e?{}:e).t=s,e.e=o,e.r=i,e.z=r,e.x=window._blueshiftid,e.k=a,e.u=window.location.href,function(e,t){try{var n=p();n.open("POST",e,!0),n.setRequestHeader("Content-Type","application/json"),n.send(JSON.stringify(t))}catch(e){}}(l,e)):h(req):(a=req,new Image(1,1).src=a),1}function a(e,t){setTimeout(function(){w(e)},t)}function w(e){null!=e[0]&&(t?"identify"!==e[0]&&"config"!==e[0]?f.userParams.cookie||1e3<new Date-o?"live"===e[0]?r(e[1]):s(e):a(e,20):s(e):a(e,20))}function e(){t=!0,o=new Date,f.eventApiKey=_blueshiftid;var e=new CustomEvent("blueshift-ready",{config:d});document.dispatchEvent(e)}if("object"==typeof blueshift){var g=void 0===blueshift.slice?[]:blueshift.slice(0);for(blueshift={events:[],load:function(){e()},retarget:function(){w(["retarget"])},track:function(e,t){w(["track",e,t])},pageload:function(e){w(["pageload",e])},identify:function(e){w(["identify",e])},live:function(e){w(["live",e])},sendXHR:h},y=0;y<g.length;y++)blueshift.events.push(g[y])}for(var y=0;y<blueshift.events.length;y++)w(blueshift.events[y]);"complete"===document.readyState?e():window.addEventListener("load",e,!1)}();