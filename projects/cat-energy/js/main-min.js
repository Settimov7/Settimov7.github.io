if(document.documentElement.clientWidth<=767){var mainNavigation=document.querySelector(".main-navigation"),navigationToggle=mainNavigation.querySelector(".main-navigation__toggle");mainNavigation.classList.remove("main-navigation--nojs"),navigationToggle.addEventListener("click",function(e){e.preventDefault(),mainNavigation.classList.contains("main-navigation--closed")?(mainNavigation.classList.remove("main-navigation--closed"),mainNavigation.classList.add("main-navigation--opened")):(mainNavigation.classList.remove("main-navigation--opened"),mainNavigation.classList.add("main-navigation--closed"))})}!function(e){var t,n,i,s,r,a,c,l=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(l)&&l.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",(n=document.createElement("source"),i=function(e){var t,i,s=e.parentNode;"PICTURE"===s.nodeName.toUpperCase()?(t=n.cloneNode(),s.insertBefore(t,s.firstElementChild),setTimeout(function(){s.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,i=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=i}))},s=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)i(t[e])},r=function(){clearTimeout(t),t=setTimeout(s,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),c=function(){r(),a&&a.addListener&&a.addListener(r)},n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?c():document.addEventListener("DOMContentLoaded",c),r))}(window),function(e,r,o){"use strict";function u(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function T(e,t){return e.res-t.res}function y(e,t){var i,s,n;if(e&&t)for(n=z.parseSet(t),e=z.makeUrl(e),i=0;i<n.length;i++)if(e===z.makeUrl(n[i].url)){s=n[i];break}return s}r.createElement("picture");var n,d,l,s,a,t,i,c,f,m,p,g,h,A,v,S,x,w,L,E,_,b,z={},C=!1,R=function(){},D=r.createElement("img"),B=D.getAttribute,M=D.setAttribute,N=D.removeAttribute,k=r.documentElement,P={},I={algorithm:""},U="data-pfsrc",$=U+"set",W=navigator.userAgent,Q=/rident/.test(W)||/ecko/.test(W)&&W.match(/rv\:(\d+)/)&&35<RegExp.$1,q="currentSrc",G=/\s+\+?\d+(e\d+)?w/,H=/(\([^)]+\))?\s*(.+)/,F=e.picturefillCFG,O="font-size:100%!important;",j=!0,V={},K={},J=e.devicePixelRatio,X={px:1,in:96},Y=r.createElement("a"),Z=!1,ee=/^[ \t\n\r\u000c]+/,te=/^[, \t\n\r\u000c]+/,ie=/^[^ \t\n\r\u000c]+/,se=/[,]+$/,ne=/^\d+$/,re=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,ae=function(e,t,i,s){e.addEventListener?e.addEventListener(t,i,s||!1):e.attachEvent&&e.attachEvent("on"+t,i)},ce=function(t){var i={};return function(e){return e in i||(i[e]=t(e)),i[e]}},le=(s=/^([\d\.]+)(em|vw|px)$/,a=ce(function(e){return"return "+function(){for(var e=arguments,t=0,i=e[0];++t in e;)i=i.replace(e[t],e[++t]);return i}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"}),function(e,t){var i;if(!(e in V))if(V[e]=!1,t&&(i=e.match(s)))V[e]=i[1]*X[i[2]];else try{V[e]=new Function("e",a(e))(X)}catch(e){}return V[e]}),oe=function(e,t){return e.w?(e.cWidth=z.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},ue=function(e){if(C){var t,i,s,n=e||{};if(n.elements&&1===n.elements.nodeType&&("IMG"===n.elements.nodeName.toUpperCase()?n.elements=[n.elements]:(n.context=n.elements,n.elements=null)),s=(t=n.elements||z.qsa(n.context||r,n.reevaluate||n.reselect?z.sel:z.selShort)).length){for(z.setupRun(n),Z=!0,i=0;i<s;i++)z.fillImg(t[i],n);z.teardownRun(n)}}};e.console&&console.warn,q in D||(q="src"),P["image/jpeg"]=!0,P["image/gif"]=!0,P["image/png"]=!0,P["image/svg+xml"]=r.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),z.ns=("pf"+(new Date).getTime()).substr(0,9),z.supSrcset="srcset"in D,z.supSizes="sizes"in D,z.supPicture=!!e.HTMLPictureElement,z.supSrcset&&z.supPicture&&!z.supSizes&&(L=r.createElement("img"),D.srcset="data:,a",L.src="data:,a",z.supSrcset=D.complete===L.complete,z.supPicture=z.supSrcset&&z.supPicture),z.supSrcset&&!z.supSizes?(S="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",x=r.createElement("img"),w=function(){2===x.width&&(z.supSizes=!0),d=z.supSrcset&&!z.supSizes,C=!0,setTimeout(ue)},x.onload=w,x.onerror=w,x.setAttribute("sizes","9px"),x.srcset=S+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",x.src=S):C=!0,z.selShort="picture>img,img[srcset]",z.sel=z.selShort,z.cfg=I,z.DPR=J||1,z.u=X,z.types=P,z.setSize=R,z.makeUrl=ce(function(e){return Y.href=e,Y.href}),z.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},z.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?z.matchesMedia=function(e){return!e||matchMedia(e).matches}:z.matchesMedia=z.mMQ,z.matchesMedia.apply(this,arguments)},z.mMQ=function(e){return!e||le(e)},z.calcLength=function(e){var t=le(e,!0)||!1;return t<0&&(t=!1),t},z.supportsType=function(e){return!e||P[e]},z.parseSize=ce(function(e){var t=(e||"").match(H);return{media:t&&t[1],length:t&&t[2]}}),z.parseSet=function(e){return e.cands||(e.cands=function(s,d){function e(e){var t,i=e.exec(s.substring(l));return i?(t=i[0],l+=t.length,t):void 0}function t(){var e,t,i,s,n,r,a,c,l,o=!1,u={};for(s=0;s<m.length;s++)r=(n=m[s])[n.length-1],a=n.substring(0,n.length-1),c=parseInt(a,10),l=parseFloat(a),ne.test(a)&&"w"===r?((e||t)&&(o=!0),0===c?o=!0:e=c):re.test(a)&&"x"===r?((e||t||i)&&(o=!0),l<0?o=!0:t=l):ne.test(a)&&"h"===r?((i||t)&&(o=!0),0===c?o=!0:i=c):o=!0;o||(u.url=f,e&&(u.w=e),t&&(u.d=t),i&&(u.h=i),i||t||e||(u.d=1),1===u.d&&(d.has1x=!0),u.set=d,p.push(u))}function i(){for(e(ee),n="",r="in descriptor";;){if(a=s.charAt(l),"in descriptor"===r)if(u(a))n&&(m.push(n),n="",r="after descriptor");else{if(","===a)return l+=1,n&&m.push(n),void t();if("("===a)n+=a,r="in parens";else{if(""===a)return n&&m.push(n),void t();n+=a}}else if("in parens"===r)if(")"===a)n+=a,r="in descriptor";else{if(""===a)return m.push(n),void t();n+=a}else if("after descriptor"===r)if(u(a));else{if(""===a)return void t();r="in descriptor",l-=1}l+=1}}for(var f,m,n,r,a,c=s.length,l=0,p=[];;){if(e(te),c<=l)return p;f=e(ie),m=[],","===f.slice(-1)?(f=f.replace(se,""),t()):i()}}(e.srcset,e)),e.cands},z.getEmValue=function(){var e;if(!n&&(e=r.body)){var t=r.createElement("div"),i=k.style.cssText,s=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",k.style.cssText=O,e.style.cssText=O,e.appendChild(t),n=t.offsetWidth,e.removeChild(t),n=parseFloat(n,10),k.style.cssText=i,e.style.cssText=s}return n||16},z.calcListLength=function(e){if(!(e in K)||I.uT){var t=z.calcLength(function(e){var t,i,s,n,r,a,c,l=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,o=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(s=(i=function(e){function t(){n&&(r.push(n),n="")}function i(){r[0]&&(a.push(r),r=[])}for(var s,n="",r=[],a=[],c=0,l=0,o=!1;;){if(""===(s=e.charAt(l)))return t(),i(),a;if(o){if("*"===s&&"/"===e[l+1]){o=!1,l+=2,t();continue}l+=1}else{if(u(s)){if(e.charAt(l-1)&&u(e.charAt(l-1))||!n){l+=1;continue}if(0===c){t(),l+=1;continue}s=" "}else if("("===s)c+=1;else if(")"===s)c-=1;else{if(","===s){t(),i(),l+=1;continue}if("/"===s&&"*"===e.charAt(l+1)){o=!0,l+=2;continue}}n+=s,l+=1}}}(e)).length,t=0;t<s;t++)if(r=(n=i[t])[n.length-1],c=r,l.test(c)&&0<=parseFloat(c)||o.test(c)||"0"===c||"-0"===c||"+0"===c){if(a=r,n.pop(),0===n.length)return a;if(n=n.join(" "),z.matchesMedia(n))return a}return"100vw"}(e));K[e]=t||X.width}return K[e]},z.setRes=function(e){var t;if(e)for(var i=0,s=(t=z.parseSet(e)).length;i<s;i++)oe(t[i],e.sizes);return t},z.setRes.res=oe,z.applySetCandidate=function(e,t){if(e.length){var i,s,n,r,a,c,l,o,u,d=t[z.ns],f=z.DPR;if(c=d.curSrc||t[q],(l=d.curCan||(S=t,x=c,!(w=e[0].set)&&x&&(w=(w=S[z.ns].sets)&&w[w.length-1]),(L=y(x,w))&&(x=z.makeUrl(x),S[z.ns].curSrc=x,(S[z.ns].curCan=L).res||oe(L,L.set.sizes)),L))&&l.set===e[0].set&&((u=Q&&!t.complete&&l.res-.1>f)||(l.cached=!0,l.res>=f&&(a=l))),!a)for(e.sort(T),a=e[(r=e.length)-1],s=0;s<r;s++)if((i=e[s]).res>=f){a=e[n=s-1]&&(u||c!==z.makeUrl(i.url))&&(m=e[n].res,p=i.res,g=f,h=e[n].cached,v=A=void 0,g<("saveData"===I.algorithm?2.7<m?g+1:(v=(p-g)*(A=Math.pow(m-.6,1.5)),h&&(v+=.1*A),m+v):1<g?Math.sqrt(m*p):m))?e[n]:i;break}a&&(o=z.makeUrl(a.url),d.curSrc=o,d.curCan=a,o!==c&&z.setSrc(t,a),z.setSize(t))}var m,p,g,h,A,v,S,x,w,L},z.setSrc=function(e,t){var i;e.src=t.url,"image/svg+xml"===t.set.type&&(i=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=i))},z.getSet=function(e){var t,i,s,n=!1,r=e[z.ns].sets;for(t=0;t<r.length&&!n;t++)if((i=r[t]).srcset&&z.matchesMedia(i.media)&&(s=z.supportsType(i.type))){"pending"===s&&(i=s),n=i;break}return n},z.parseSets=function(e,t,i){var s,n,r,a,c=t&&"PICTURE"===t.nodeName.toUpperCase(),l=e[z.ns];(l.src===o||i.src)&&(l.src=B.call(e,"src"),l.src?M.call(e,U,l.src):N.call(e,U)),(l.srcset===o||i.srcset||!z.supSrcset||e.srcset)&&(s=B.call(e,"srcset"),l.srcset=s,a=!0),l.sets=[],c&&(l.pic=!0,function(e,t){var i,s,n,r,a=e.getElementsByTagName("source");for(i=0,s=a.length;i<s;i++)(n=a[i])[z.ns]=!0,(r=n.getAttribute("srcset"))&&t.push({srcset:r,media:n.getAttribute("media"),type:n.getAttribute("type"),sizes:n.getAttribute("sizes")})}(t,l.sets)),l.srcset?(n={srcset:l.srcset,sizes:B.call(e,"sizes")},l.sets.push(n),(r=(d||l.src)&&G.test(l.srcset||""))||!l.src||y(l.src,n)||n.has1x||(n.srcset+=", "+l.src,n.cands.push({url:l.src,d:1,set:n}))):l.src&&l.sets.push({srcset:l.src,sizes:null}),l.curCan=null,l.curSrc=o,l.supported=!(c||n&&!z.supSrcset||r&&!z.supSizes),a&&z.supSrcset&&!l.supported&&(s?(M.call(e,$,s),e.srcset=""):N.call(e,$)),l.supported&&!l.srcset&&(!l.src&&e.src||e.src!==z.makeUrl(l.src))&&(null===l.src?e.removeAttribute("src"):e.src=l.src),l.parsed=!0},z.fillImg=function(e,t){var i,s,n,r,a,c=t.reselect||t.reevaluate;e[z.ns]||(e[z.ns]={}),i=e[z.ns],(c||i.evaled!==l)&&((!i.parsed||t.reevaluate)&&z.parseSets(e,e.parentNode,t),i.supported?i.evaled=l:(s=e,r=z.getSet(s),a=!1,"pending"!==r&&(a=l,r&&(n=z.setRes(r),z.applySetCandidate(n,s))),s[z.ns].evaled=a))},z.setupRun=function(){(!Z||j||J!==e.devicePixelRatio)&&(j=!1,J=e.devicePixelRatio,V={},K={},z.DPR=J||1,X.width=Math.max(e.innerWidth||0,k.clientWidth),X.height=Math.max(e.innerHeight||0,k.clientHeight),X.vw=X.width/100,X.vh=X.height/100,l=[X.height,X.width,J].join("-"),X.em=z.getEmValue(),X.rem=X.em)},z.supPicture?(ue=R,z.fillImg=R):(g=e.attachEvent?/d$|^c/:/d$|^c|^i/,h=function(){var e=r.readyState||"";A=setTimeout(h,"loading"===e?200:999),r.body&&(z.fillImgs(),(t=t||g.test(e))&&clearTimeout(A))},A=setTimeout(h,r.body?9:99),v=k.clientHeight,ae(e,"resize",(i=function(){j=Math.max(e.innerWidth||0,k.clientWidth)!==X.width||k.clientHeight!==v,v=k.clientHeight,j&&z.fillImgs()},c=99,p=function(){var e=new Date-m;e<c?f=setTimeout(p,c-e):(f=null,i())},function(){m=new Date,f||(f=setTimeout(p,c))})),ae(r,"readystatechange",h)),z.picturefill=ue,z.fillImgs=ue,z.teardownRun=R,ue._=z,e.picturefillCFG={pf:z,push:function(e){var t=e.shift();"function"==typeof z[t]?z[t].apply(z,e):(I[t]=e[0],Z&&z.fillImgs({reselect:!0}))}};for(;F&&F.length;)e.picturefillCFG.push(F.shift());e.picturefill=ue,"object"==typeof module&&"object"==typeof module.exports?module.exports=ue:"function"==typeof define&&define.amd&&define("picturefill",function(){return ue}),z.supPicture||(P["image/webp"]=(E="image/webp",_="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",(b=new e.Image).onerror=function(){P[E]=!1,ue()},b.onload=function(){P[E]=1===b.width,ue()},b.src=_,"pending"))}(window,document);var slides=document.querySelectorAll(".example__slide"),sliderNavigation=document.querySelectorAll(".example__toggle-status"),sliderToggle=document.querySelector(".example__toggle-button");if(0<(slides=Array.prototype.slice.call(slides)).length)if(sliderNavigation=Array.prototype.slice.call(sliderNavigation),document.documentElement.clientWidth<=767){function changeToBeforeSlide(){slides[1].classList.remove("example__slide--active"),slides[0].classList.add("example__slide--active"),sliderToggle.classList.remove("example__toggle-button--right"),sliderToggle.classList.add("example__toggle-button--left")}function changeToAfterSlide(){slides[0].classList.remove("example__slide--active"),slides[1].classList.add("example__slide--active"),sliderToggle.classList.remove("example__toggle-button--left"),sliderToggle.classList.add("example__toggle-button--right")}sliderNavigation[0].addEventListener("click",function(e){e.preventDefault(),changeToBeforeSlide()}),sliderNavigation[1].addEventListener("click",function(e){e.preventDefault(),changeToAfterSlide()}),sliderToggle.addEventListener("click",function(e){e.preventDefault(),sliderToggle.classList.contains("example__toggle-button--left")?changeToAfterSlide():changeToBeforeSlide()})}else{function changeToBeforeSlide(){slides[0].classList.remove("example__slide--hide"),slides[0].classList.add("example__slide--full"),slides[1].classList.add("example__slide--hide")}function changeToAfterSlide(){slides[1].classList.remove("example__slide--hide"),slides[1].classList.add("example__slide--full"),slides[0].classList.add("example__slide--hide")}sliderNavigation[0].addEventListener("click",function(e){e.preventDefault(),changeToBeforeSlide()}),sliderNavigation[1].addEventListener("click",function(e){e.preventDefault(),changeToAfterSlide()})}