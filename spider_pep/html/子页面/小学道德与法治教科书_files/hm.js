(function(){var h={},mt={},c={id:"505934b537b966bd0bc99ecac4714092",dm:["pep.com.cn"],js:"tongji.baidu.com/hm-web/js/",etrk:[],cetrk:[],cptrk:[],icon:'',ctrk:false,align:-1,nv:-1,vdur:1800000,age:31536000000,rec:1,rp:[],trust:0,vcard:0,qiao:0,lxb:0,kbtrk:0,pt:0,spa:0,aet:'',hca:'C91C4D9B8363D504',conv:0,med:0,cvcc:'',cvcf:[],apps:''};var r=void 0,u=!0,v=null,x=!1;mt.cookie={};mt.cookie.set=function(a,b,g){var d;g.P&&(d=new Date,d.setTime(d.getTime()+g.P));document.cookie=a+"="+b+(g.domain?"; domain="+g.domain:"")+(g.path?"; path="+g.path:"")+(d?"; expires="+d.toGMTString():"")+(g.Dc?"; secure":"")};mt.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:v};
mt.cookie.bc=function(a,b){try{var g="Hm_ck_"+ +new Date;mt.cookie.set(g,"is-cookie-enabled",{domain:a,path:b,P:r});var d="is-cookie-enabled"===mt.cookie.get(g)?"1":"0";mt.cookie.set(g,"",{domain:a,path:b,P:-1});return d}catch(e){return"0"}};mt.lang={};mt.lang.d=function(a,b){return"[object "+b+"]"==={}.toString.call(a)};mt.lang.Ra=function(a){return mt.lang.d(a,"Number")&&isFinite(a)};mt.lang.G=function(a){return mt.lang.d(a,"String")};mt.lang.isArray=function(a){return mt.lang.d(a,"Array")};
mt.lang.h=function(a){return a.replace?a.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):a};mt.lang.trim=function(a){return a.replace(/^\s+|\s+$/g,"")};mt.lang.F=function(a,b){var g=x;if(a==v||!mt.lang.d(a,"Array")||b===r)return g;if(Array.prototype.indexOf)g=-1!==a.indexOf(b);else for(var d=0;d<a.length;d++)if(a[d]===b){g=u;break}return g};mt.url={};mt.url.m=function(a,b){var g=a.match(RegExp("(^|&|\\?|#)("+b+")=([^&#]*)(&|$|#)",""));return g?g[3]:v};
mt.url.zc=function(a){return(a=a.match(/^(https?:)\/\//))?a[1]:v};mt.url.Gb=function(a){return(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):v};mt.url.K=function(a){return(a=mt.url.Gb(a))?a.replace(/:\d+$/,""):a};mt.url.ta=function(a){return(a=a.match(/^(https?:\/\/)?[^\/]*(.*)/))?a[2].replace(/[\?#].*/,"").replace(/^$/,"/"):v};
(function(){var a=mt.lang,b=mt.url;mt.f={};mt.f.La=function(a){return document.getElementById(a)};mt.f.ra=function(a){if(!a)return v;try{a=String(a);if(0===a.indexOf("!HMCQ!"))return a;if(0===a.indexOf("!HMCC!"))return document.querySelector(a.substring(6,a.length));for(var d=a.split(">"),e=document.body,b=d.length-1;0<=b;b--)if(-1<d[b].indexOf("#")){var f=d[b].split("#")[1];(e=document.getElementById(f))||(e=document.getElementById(decodeURIComponent(f)));d=d.splice(b+1,d.length-(b+1));break}for(a=
0;e&&a<d.length;){var m=String(d[a]).toLowerCase();if(!("html"===m||"body"===m)){var b=0,p=d[a].match(/\[(\d+)\]/i),f=[];if(p)b=p[1]-1,m=m.split("[")[0];else if(1!==e.childNodes.length){for(var s=0,t=0,q=e.childNodes.length;t<q;t++){var w=e.childNodes[t];1===w.nodeType&&w.nodeName.toLowerCase()===m&&s++;if(1<s)return v}if(1!==s)return v}for(s=0;s<e.childNodes.length;s++)1===e.childNodes[s].nodeType&&e.childNodes[s].nodeName.toLowerCase()===m&&f.push(e.childNodes[s]);if(!f[b])return v;e=f[b]}a++}return e}catch(k){return v}};
mt.f.ta=function(a,d){var b=[],l=[];if(!a)return l;for(;a.parentNode!=v;){for(var f=0,m=0,p=a.parentNode.childNodes.length,s=0;s<p;s++){var t=a.parentNode.childNodes[s];if(t.nodeName===a.nodeName&&(f++,t===a&&(m=f),0<m&&1<f))break}if((p=""!==a.id)&&d){b.unshift("#"+encodeURIComponent(a.id));break}else p&&(p="#"+encodeURIComponent(a.id),p=0<b.length?p+">"+b.join(">"):p,l.push(p)),b.unshift(encodeURIComponent(String(a.nodeName).toLowerCase())+(1<f?"["+m+"]":""));a=a.parentNode}l.push(b.join(">"));return l};
mt.f.ua=function(a){return(a=mt.f.ta(a,u))&&a.length?String(a[0]):""};mt.f.Kb=function(a){return mt.f.ta(a,x)};mt.f.Ab=function(a){var d;for(d="A";(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==d)return a;return v};mt.f.Cb=function(a){return 9===a.nodeType?a:a.ownerDocument||a.document};mt.f.Ib=function(a){var d={top:0,left:0};if(!a)return d;var b=mt.f.Cb(a).documentElement;"undefined"!==typeof a.getBoundingClientRect&&(d=a.getBoundingClientRect());return{top:d.top+(window.pageYOffset||b.scrollTop)-
(b.clientTop||0),left:d.left+(window.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}};mt.f.getAttribute=function(a,d){var b=a.getAttribute&&a.getAttribute(d)||v;if(!b&&a.attributes&&a.attributes.length)for(var l=a.attributes,f=l.length,m=0;m<f;m++)l[m].nodeName===d&&(b=l[m].nodeValue);return b};mt.f.S=function(a){var d="document";a.tagName!==r&&(d=a.tagName);return d.toLowerCase()};mt.f.Nb=function(b){var d="";b.textContent?d=a.trim(b.textContent):b.innerText&&(d=a.trim(b.innerText));d&&(d=d.replace(/\s+/g,
" ").substring(0,255));return d};mt.f.R=function(g,d){var e;a.G(g)&&0===String(g).indexOf("!HMCQ!")?(e=String(g),e=b.m(document.location.href,e.substring(6,e.length))):a.G(g)||(e=mt.f.S(g),"input"===e&&d&&("button"===g.type||"submit"===g.type)?e=a.trim(g.value)||"":"input"===e&&!d&&"password"!==g.type?e=a.trim(g.value)||"":"img"===e?(e=mt.f.getAttribute,e=e(g,"alt")||e(g,"title")||e(g,"src")):e="body"===e||"html"===e?["(hm-default-content-for-",e,")"].join(""):mt.f.Nb(g));return String(e||"").substring(0,
255)};(function(){(mt.f.$a=function(){function a(){if(!a.da){a.da=u;for(var d=0,b=l.length;d<b;d++)l[d]()}}function d(){try{document.documentElement.doScroll("left")}catch(b){setTimeout(d,1);return}a()}var b=x,l=[],f;document.addEventListener?f=function(){document.removeEventListener("DOMContentLoaded",f,x);a()}:document.attachEvent&&(f=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",f),a())});(function(){if(!b)if(b=u,"complete"===document.readyState)a.da=u;
else if(document.addEventListener)document.addEventListener("DOMContentLoaded",f,x),window.addEventListener("load",a,x);else if(document.attachEvent){document.attachEvent("onreadystatechange",f);window.attachEvent("onload",a);var l=x;try{l=window.frameElement==v}catch(p){}document.documentElement.doScroll&&l&&d()}})();return function(d){a.da?d():l.push(d)}}()).da=x})();return mt.f})();mt.event={};
mt.event.e=function(a,b,g){a.attachEvent?a.attachEvent("on"+b,function(d){g.call(a,d)}):a.addEventListener&&a.addEventListener(b,g,x)};mt.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=x};
(function(){var a=mt.event;mt.g={};mt.g.ya=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.g.Hb=function(){if(document.documentMode)return document.documentMode;var a=/msie (\d+\.\d+)/i.exec(navigator.userAgent);return a?+a[1]||0:0};mt.g.$b=function(){try{return!!navigator.userAgent.match(/safari/i)&&!navigator.userAgent.match(/chrome/i)&&"undefined"!==typeof document.body.style.webkitFilter&&!window.chrome}catch(a){return x}};mt.g.cookieEnabled=navigator.cookieEnabled;mt.g.javaEnabled=navigator.javaEnabled();
mt.g.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.g.fc=(window.screen.width||0)+"x"+(window.screen.height||0);mt.g.colorDepth=window.screen.colorDepth||0;mt.g.T=function(){var a;a=a||document;return parseInt(window.pageYOffset||a.documentElement.scrollTop||a.body&&a.body.scrollTop||0,10)};mt.g.L=function(){var a=document;return parseInt(window.innerHeight||a.documentElement.clientHeight||a.body&&a.body.clientHeight||0,10)};mt.g.uc=
0;mt.g.Pb=function(){var a=document;return parseInt(window.innerWidth||a.documentElement.clientWidth||a.body.offsetWidth||0,10)};mt.g.orientation=0;(function(){function b(){var a=0;window.orientation!==r&&(a=window.orientation);screen&&(screen.orientation&&screen.orientation.angle!==r)&&(a=screen.orientation.angle);mt.g.orientation=a;mt.g.uc=mt.g.Pb()}b();a.e(window,"orientationchange",b)})();return mt.g})();mt.o={};mt.o.parse=function(a){return(new Function("return ("+a+")"))()};
mt.o.stringify=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var d=g[a];if(d)return d;d=a.charCodeAt();return"\\u00"+Math.floor(d/16).toString(16)+(d%16).toString(16)}));return'"'+a+'"'}function b(a){return 10>a?"0"+a:a}var g={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(d){switch(typeof d){case "undefined":return"undefined";case "number":return isFinite(d)?String(d):"null";case "string":return a(d);case "boolean":return String(d);
default:if(d===v)return"null";if(d instanceof Array){var e=["["],g=d.length,f,m,p;for(m=0;m<g;m++)switch(p=d[m],typeof p){case "undefined":case "function":case "unknown":break;default:f&&e.push(","),e.push(mt.o.stringify(p)),f=1}e.push("]");return e.join("")}if(d instanceof Date)return'"'+d.getFullYear()+"-"+b(d.getMonth()+1)+"-"+b(d.getDate())+"T"+b(d.getHours())+":"+b(d.getMinutes())+":"+b(d.getSeconds())+'"';f=["{"];m=mt.o.stringify;for(g in d)if(Object.prototype.hasOwnProperty.call(d,g))switch(p=
d[g],typeof p){case "undefined":case "unknown":case "function":break;default:e&&f.push(","),e=1,f.push(m(g)+":"+m(p))}f.push("}");return f.join("")}}}();mt.localStorage={};mt.localStorage.ka=function(){if(!mt.localStorage.l)try{mt.localStorage.l=document.createElement("input"),mt.localStorage.l.type="hidden",mt.localStorage.l.style.display="none",mt.localStorage.l.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.l)}catch(a){return x}return u};
mt.localStorage.set=function(a,b,g){var d=new Date;d.setTime(d.getTime()+g||31536E6);try{window.localStorage?(b=d.getTime()+"|"+b,window.localStorage.setItem(a,b)):mt.localStorage.ka()&&(mt.localStorage.l.expires=d.toUTCString(),mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.setAttribute(a,b),mt.localStorage.l.save(document.location.hostname))}catch(e){}};
mt.localStorage.get=function(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var b=a.indexOf("|"),g=a.substring(0,b)-0;if(g&&g>(new Date).getTime())return a.substring(b+1)}}else if(mt.localStorage.ka())try{return mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.getAttribute(a)}catch(d){}return v};
mt.localStorage.remove=function(a){if(window.localStorage)window.localStorage.removeItem(a);else if(mt.localStorage.ka())try{mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.removeAttribute(a),mt.localStorage.l.save(document.location.hostname)}catch(b){}};mt.sessionStorage={};mt.sessionStorage.set=function(a,b){try{window.sessionStorage&&window.sessionStorage.setItem(a,b)}catch(g){}};
mt.sessionStorage.get=function(a){try{return window.sessionStorage?window.sessionStorage.getItem(a):v}catch(b){return v}};mt.sessionStorage.remove=function(a){try{window.sessionStorage&&window.sessionStorage.removeItem(a)}catch(b){}};mt.eb={};mt.eb.log=function(a,b){var g=new Image,d="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[d]=g;g.onload=function(){g.onload=v;g=window[d]=v;b&&b(a)};g.src=a};mt.Da={};
mt.Da.Ob=function(){var a="";if(navigator.plugins&&navigator.mimeTypes.length){var b=navigator.plugins["Shockwave Flash"];b&&b.description&&(a=b.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a=b.GetVariable("$version"))&&(a=a.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(g){}return a};
mt.Da.yc=function(a,b,g,d,e){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+a+'" width="'+g+'" height="'+d+'"><param name="movie" value="'+b+'" /><param name="flashvars" value="'+(e||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+a+'" width="'+g+'" height="'+d+'" src="'+b+'" flashvars="'+(e||"")+'" allowscriptaccess="always" /></object>'};
h.C={Ac:"http://tongji.baidu.com/hm-web/welcome/ico",Za:"hm.baidu.com/hm.gif",pb:/^(tongji|hmcdn).baidu.com$/,hb:"tongji.baidu.com",Tb:"hmmd",Ub:"hmpl",rc:"utm_medium",Sb:"hmkw",tc:"utm_term",Qb:"hmci",qc:"utm_content",Vb:"hmsr",sc:"utm_source",Rb:"hmcu",pc:"utm_campaign",M:0,I:Math.round(+new Date/1E3),protocol:"https:"===document.location.protocol?"https:":"http:",za:"https:",Bc:0,wc:6E5,Cc:6E5,gc:5E3,xc:5,na:1024,vc:1,Aa:2147483647,gb:"hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn p ct u tt".split(" "),
U:u,Ia:["a","input","button"],Fa:{id:"data-hm-id",$:"data-hm-class",Z:"data-hm-xpath",content:"data-hm-content",ga:"data-hm-tag",link:"data-hm-link"},Ha:"data-hm-enabled",Ga:"data-hm-disabled",dc:"https://hmcdn.baidu.com/static/tongji/plugins/",Ya:["UrlChangeTracker"]};(function(){var a={D:{},e:function(a,g){this.D[a]=this.D[a]||[];this.D[a].push(g)},J:function(a,g){this.D[a]=this.D[a]||[];for(var d=this.D[a].length,e=0;e<d;e++)this.D[a][e](g)}};return h.w=a})();
(function(){function a(a,d){var e=document.createElement("script");e.charset="utf-8";b.d(d,"Function")&&(e.readyState?e.onreadystatechange=function(){if("loaded"===e.readyState||"complete"===e.readyState)e.onreadystatechange=v,d()}:e.onload=function(){d()});e.src=a;var l=document.getElementsByTagName("script")[0];l.parentNode.insertBefore(e,l)}var b=mt.lang;return h.load=a})();
(function(){var a=mt.cookie,b=mt.localStorage,g=mt.sessionStorage,d={getData:function(d){try{return a.get(d)||g.get(d)||b.get(d)}catch(l){}},setData:function(e,l,f){try{a.set(e,l,{domain:d.Q(),path:d.ba(),P:f}),f?b.set(e,l,f):g.set(e,l)}catch(m){}},removeData:function(e){try{a.set(e,"",{domain:d.Q(),path:d.ba(),P:-1}),g.remove(e),b.remove(e)}catch(l){}},V:function(a,d){a="."+a.replace(/:\d+/,"");d="."+d.replace(/:\d+/,"");var b=a.indexOf(d);return-1<b&&b+d.length===a.length},ea:function(a,d){a=a.replace(/^https?:\/\//,
"");return 0===a.indexOf(d)},Q:function(){for(var a=document.location.hostname,b=0,f=c.dm.length;b<f;b++)if(d.V(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[/?#].*/,"");return a},ba:function(){for(var a=0,b=c.dm.length;a<b;a++){var f=c.dm[a];if(-1<f.indexOf("/")&&d.ea(document.location.href,f))return f.replace(/^[^/]+(\/.*)/,"$1")+"/"}return"/"}};return h.oa=d})();
(function(){var a=mt.lang,b=mt.o,g=h.oa,d={pageview:{},session:{},autoEventTracking:{},customEvent:{},user:{}},e={user:1,session:2,pageview:3,autoEventTracking:3,customEvent:3,others:3},l=["session","user"],f="Hm_up_"+c.id,m={init:function(){m.Yb()},Yb:function(){try{var e=b.parse(decodeURIComponent(g.getData(f)));a.d(e,"Object")&&(d.user=e)}catch(s){}},z:function(a){var b={};d[a]!==r&&(b=d[a]);a=this.va();for(var e in b)b.hasOwnProperty(e)&&(a[e]=b[e]);return a},va:function(){for(var a={},b,e=l.length-
1;0<=e;e--){b=d[l[e]];for(var q in b)b.hasOwnProperty(q)&&(a[q]=b[q])}return a},setProperty:function(e,f,g){var q=d[e];if(a.d(q,"Object")&&a.d(f,"Object")){for(var w in f)if(f.hasOwnProperty(w)){var k=a.h(String(w));if(g||!/^_/.test(k)&&!/_$/.test(k)||/^(_iden|ei_|ec_|ex_|en_|et_|el_)$/.test(k)){var n=f[w];if(n==v)delete q[k];else{if(a.d(n,"Object")||a.d(n,"Array"))n=b.stringify(n);n=a.h(String(n));m.ac(e,k,n)&&(q[k]={value:n,scope:m.Na(e)})}}}"user"===e&&m.Ba()}},r:function(b){b!==r&&("userId"===
b&&a.d(d.user,"Object")?(delete d.user.uid_,m.Ba()):"user"===b&&a.d(d.user,"Object")?(b=d.user.uid_,d.user=b===r?{}:{uid_:b},m.Ba()):d[b]!==r&&(d[b]={}))},Ba:function(){try{g.setData(f,encodeURIComponent(b.stringify(d.user)),c.age)}catch(a){}},ac:function(a,b,e){var q=u,f=d[a];if(256<encodeURIComponent(String(b)).length||256<encodeURIComponent(String(e)).length)q=x;else{var k=f[b];f[b]={value:e,scope:m.Na(a)};a=m.N(m.z(a));2048<encodeURIComponent(a).length&&(k!==r?f[b]=k:delete f[b],q=x)}return q},
N:function(a){var d=[],b,e;for(e in a)a.hasOwnProperty(e)&&(b=[e,a[e].value],(1===a[e].scope||2===a[e].scope)&&b.push(a[e].scope),d.push(b.join("*")));return d.join("!")},Na:function(a){a=e[a];return a!==r?a:e.others}};return h.O=m})();
(function(){var a=mt.f,b=mt.lang,g=mt.o,d=h.w,e=h.O,l=e.N;if(b.isArray(c.cptrk)&&0<c.cptrk.length){var f={Xa:{},ha:{},init:function(){for(var a,d=0;d<c.cptrk.length;d++)try{if(a=g.parse(decodeURIComponent(String(c.cptrk[d]))),a.a!==r&&b.d(a.a,"Object")){var e=a.a,l;for(l in e)e.hasOwnProperty(l)&&(f.ha[l]=String(e[l]))}}catch(q){}},Wa:function(){var d,b,e;for(e in f.ha)if(f.ha.hasOwnProperty(e)&&f.Xa[e]===r&&(d=f.ha[e],d=a.ra(d)))b=b===r?{}:b,b[e]=a.R(d,x),f.Xa[e]=u;return b},wa:function(){var a=
f.Wa();a&&f.ic(a)},Xb:function(){"MutationObserver"in window?(new MutationObserver(f.wa)).observe(document.body,{childList:u,subtree:u}):window.setInterval(f.wa,15E3)},ic:function(a){if(b.d(a,"Object")){e.setProperty("pageview",a);a=h.c.b.p;var d=h.c.b.ep;h.c.b.et=9;h.c.b.ep="";h.c.b.p=l(e.z("pageview"));h.c.i();h.c.b.p=a;h.c.b.ep=d;e.r("pageview")}}};f.init();d.e("pv-b",function(){var a=f.Wa();a&&e.setProperty("pageview",a)});f.Xb();a.$a(f.wa)}})();
(function(){var a=mt.lang,b=mt.f,g={aa:function(a,e){return function(l){var f=l.target||l.srcElement;if(f){var m=f.getAttribute(a.ia);l=l.clientX+":"+l.clientY;if(m&&m===l)f.removeAttribute(a.ia);else if(e&&0<e.length&&(f=b.Kb(f))&&f.length)if(m=f.length,l=f[f.length-1],1E4>m*l.split(">").length)for(l=0;l<m;l++)g.cb(a,f[l]);else g.cb(a,l)}}},cb:function(d,b){for(var g={},f=String(b).split(">").length,m=0;m<f;m++)g[b]="",b=b.substring(0,b.lastIndexOf(">"));d&&(a.d(d,"Object")&&d.Ja)&&d.Ja(g)},ec:function(a,
b){return function(g){(g.target||g.srcElement).setAttribute(a.ia,g.clientX+":"+g.clientY);a&&a.s&&(b?a.s(b):a.s("#"+encodeURIComponent(this.id),g.type))}}};return h.qa=g})();
(function(){var a=mt.f,b=mt.o,g=mt.event,d=mt.lang,e=h.C,l=h.qa,f=h.O,m=f.N,p={ia:"HM_ce",jb:function(){if(c.cetrk&&c.cetrk.length){g.e(document,"click",l.aa(p,c.cetrk));for(var d=0,e=c.cetrk.length;d<e;d++){var f;try{f=b.parse(decodeURIComponent(String(c.cetrk[d])))}catch(w){f={}}var k=f.p||"";-1===k.indexOf(">")&&(0===k.indexOf("#")&&(k=k.substring(1)),(k=a.La(k))&&g.e(k,"click",l.ec(p,f)))}}},Ja:function(a){if(c.cetrk&&c.cetrk.length)for(var d=0,e=c.cetrk.length;d<e;d++){var f;try{f=b.parse(decodeURIComponent(String(c.cetrk[d])))}catch(k){f=
{}}var n=p.Eb(f.p,a);n&&p.s(f,n)}},Eb:function(a,b){a=String(a);if(0<a.indexOf("*")){var d=RegExp("^"+a.replace(/\[/g,"\\[").replace(/\]/g,"\\]").replace(/\*/,"\\d+")+"$"),e;for(e in b)if(b.hasOwnProperty(e)&&d.test(e))return e;return v}return b.hasOwnProperty(a)?a:v},s:function(b,e){h.c.b.et=7;var g=b&&b.k||"",g=d.h(g),w={};if(b&&b.a&&d.d(b.a,"Object")){var k=b.a,n;for(n in k)if(k.hasOwnProperty(n)){var y=p.Lb(k[n]||"",e),y=y?a.R(y,x):"";w[n]=y}}w=p.Bb(w,e||b&&b.p);w._iden=g;f.setProperty("customEvent",
w);h.c.b.ep="";h.c.b.p=m(f.z("customEvent"));h.c.i();h.c.b.p="";f.r("customEvent")},Bb:function(b,d){var f=a.ra(d),g=e.Fa;f&&(c.aet&&c.aet.length?(b.ei_=a.getAttribute(f,g.id)||a.getAttribute(f,"id")||"",b.ec_=a.getAttribute(f,g.$)||a.getAttribute(f,"class")||"",b.ex_=a.getAttribute(f,g.Z)||a.ua(f),b.en_=a.getAttribute(f,g.content)||a.R(f,u),b.et_=a.getAttribute(f,g.ga)||a.S(f),b.el_=a.getAttribute(f,g.link)||a.getAttribute(f,"href")||""):(b.ex_=a.getAttribute(f,g.Z)||a.ua(f),b.en_=a.getAttribute(f,
g.content)||a.R(f,u)));return b},Lb:function(b,d){b=String(b);d=String(d);if(0<b.indexOf("*")){var e=/.*\[(\d+)\]$/.exec(d);b=b.replace("*",e?e[1]:"1")}return a.ra(b)}};h.w.e("pv-b",p.jb);return p})();
(function(){var a=mt.lang,b=mt.f,g=mt.event,d=mt.g,e=h.C,l=h.w,f=h.O,m=f.N,p=+new Date,s=[],t={aa:function(){return function(d){if(h.c&&h.c.U&&c.aet&&c.aet.length){var f=d.target||d.srcElement;if(f){var k=h.c.Ia,n=b.getAttribute(f,e.Ha)!=v?u:x;if(b.getAttribute(f,e.Ga)==v)if(n)t.la(t.sa(f,d));else{var y=b.S(f);if(a.F(k,"*")||a.F(k,y))t.la(t.sa(f,d));else for(;f.parentNode!=v;){var n=f.parentNode,y=b.S(n),z="a"===y&&a.F(k,"a")?u:x,y="button"===y&&a.F(k,"button")?u:x,A=b.getAttribute(n,e.Ha)!=v?u:x;
if(b.getAttribute(n,e.Ga)==v&&(z||y||A)){t.la(t.sa(n,d));break}f=f.parentNode}}}}}},sa:function(f,g){var k={},n=e.Fa;k.id=b.getAttribute(f,n.id)||b.getAttribute(f,"id")||"";k.$=b.getAttribute(f,n.$)||b.getAttribute(f,"class")||"";k.Z=b.getAttribute(f,n.Z)||b.ua(f);k.content=b.getAttribute(f,n.content)||b.R(f,u);k.ga=b.getAttribute(f,n.ga)||b.S(f);k.link=b.getAttribute(f,n.link)||b.getAttribute(f,"href")||"";k.type=g.type||"click";n=a.Ra(f.offsetTop)?f.offsetTop:0;"click"===g.type?n=d.ya?g.clientY+
Math.max(document.documentElement.scrollTop,document.body.scrollTop):g.pageY:"touchend"===g.type&&(g.Va&&g.Va.changedTouches)&&(n=g.Va.changedTouches[0].pageY);k.oc=n;n=this.Db(g);k.Ta=n.Ta||0;k.Ua=n.Ua||0;k.ib=n.ib||0;k.Oa=n.Oa||0;k.fb=n.fb||"b";return k},Db:function(f){var e=f.target||f.srcElement,g;if(d.ya){var n=Math.max(document.documentElement.scrollTop,document.body.scrollTop);g=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft);g=f.clientX+g;f=f.clientY+n}else g=f.pageX,
f=f.pageY;var y=n=0,z=0,A=0;if(e&&(n=e.offsetWidth||e.clientWidth,y=e.offsetHeight||e.clientHeight,A=b.Ib(e),z=A.left,A=A.top,a.d(e.getBBox,"Function")&&(y=e.getBBox(),n=y.width,y=y.height),"html"===(e.tagName||"").toLowerCase()))n=Math.max(n,e.clientWidth),y=Math.max(y,e.clientHeight);return{Ta:Math.round(100*((g-z)/n)),Ua:Math.round(100*((f-A)/y)),ib:n,Oa:y,fb:("a"===(e.tagName||"").toLowerCase()?e:b.Ab(e))?"a":"b"}},la:function(b){var d=a.h;b=[+new Date-(h.c.W!==r?h.c.W:p),d(b.id),d(b.$),d(b.ga),
d(b.Z),d(b.link),d(b.content),b.type,b.oc].join("*");t.ma(b);a.d(this.Y(),"Function")&&this.Y()()},ma:function(a){a.length>e.na||(encodeURIComponent(s.join("!")+a).length>e.na&&(t.s(s.join("!")),s=[]),s.push(a))},s:function(a){h.c.b.et=5;h.c.b.ep=a;h.c.b.p=m(f.z("autoEventTracking"));h.c.i();h.c.b.p=""},Y:function(){return function(){s&&s.length&&(t.s(s.join("!")),s=[])}}};a.G(c.aet)&&""!==c.aet&&l.e("pv-b",function(){g.e(document,"click",t.aa());"ontouchend"in document&&g.e(window,"touchend",t.aa());
g.e(window,"unload",t.Y())});return t})();
(function(){var a=mt.lang,b=mt.event,g=mt.g,d=h.C,e=h.w,l=+new Date,f=[],m=v,p={nb:function(){a.G(c.aet)&&""!==c.aet&&setInterval(p.bb,d.gc)},bb:function(){var a=g.T()+g.L();0<a-h.c.b.vl&&(h.c.b.vl=a)}},s={wb:function(){return function(){h.c&&(h.c.U&&c.aet&&c.aet.length)&&(window.clearTimeout(m),m=window.setTimeout(function(){s.mb(g.T()+g.L())},150))}},mb:function(a){s.ma([+new Date-(h.c.W!==r?h.c.W:l),a].join("*"))},ma:function(a){if(encodeURIComponent(f.join("!")+a).length>d.na||3<f.length)s.s(f.join("!")),
f=[];f.push(a)},s:function(a){p.bb();h.c.b.et=6;h.c.b.vh=g.L();h.c.b.ep=a;h.c.i()},Y:function(){return function(){f&&f.length&&(s.s(f.join("!")),f=[])}}};a.G(c.aet)&&""!==c.aet&&e.e("pv-b",function(){b.e(window,"scroll",s.wb());b.e(window,"unload",s.Y());p.nb()});return s})();
(function(){function a(){return function(){h.c.b.nv=0;h.c.b.st=4;h.c.b.et=3;h.c.b.ep=h.pa.Jb()+","+h.pa.Fb();h.c.i()}}function b(){clearTimeout(z);var a;n&&(a="visible"==document[n]);y&&(a=!document[y]);m="undefined"==typeof a?u:a;if((!f||!p)&&m&&s)k=u,q=+new Date;else if(f&&p&&(!m||!s))k=x,w+=+new Date-q;f=m;p=s;z=setTimeout(b,100)}function g(a){var n=document,b="";if(a in n)b=a;else for(var d=["webkit","ms","moz","o"],f=0;f<d.length;f++){var e=d[f]+a.charAt(0).toUpperCase()+a.slice(1);if(e in n){b=
e;break}}return b}function d(a){if(!("focus"==a.type||"blur"==a.type)||!(a.target&&a.target!=window))s="focus"==a.type||"focusin"==a.type?u:x,b()}var e=mt.event,l=h.w,f=u,m=u,p=u,s=u,t=+new Date,q=t,w=0,k=u,n=g("visibilityState"),y=g("hidden"),z;b();(function(){var a=n.replace(/[vV]isibilityState/,"visibilitychange");e.e(document,a,b);e.e(window,"pageshow",b);e.e(window,"pagehide",b);"object"==typeof document.onfocusin?(e.e(document,"focusin",d),e.e(document,"focusout",d)):(e.e(window,"focus",d),
e.e(window,"blur",d))})();h.pa={Jb:function(){return+new Date-t},Fb:function(){return k?+new Date-q+w:w}};l.e("pv-b",function(){e.e(window,"unload",a())});l.e("duration-send",a());l.e("duration-done",function(){q=t=+new Date;w=0});return h.pa})();
(function(){var a=mt.lang,b=h.C,g=h.load,d={Wb:function(d){if((window._dxt===r||a.d(window._dxt,"Array"))&&"undefined"!==typeof h.c){var l=h.c.Q();g([b.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(l)].join(""),d)}},nc:function(b){if(a.d(b,"String")||a.d(b,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",b])}};return h.ub=d})();
(function(){function a(a,b,d,f){if(!(a===r||b===r||f===r)){if(""===a)return[b,d,f].join("*");a=String(a).split("!");for(var e,g=x,k=0;k<a.length;k++)if(e=a[k].split("*"),String(b)===e[0]){e[1]=d;e[2]=f;a[k]=e.join("*");g=u;break}g||a.push([b,d,f].join("*"));return a.join("!")}}function b(a){for(var f in a)if({}.hasOwnProperty.call(a,f)){var e=a[f];d.d(e,"Object")||d.d(e,"Array")?b(e):a[f]=String(e)}}var g=mt.url,d=mt.lang,e=mt.o,l=mt.g,f=h.C,m=h.w,p=h.ub,s=h.load,t=h.oa,q=h.O,w=q.N,k={X:[],fa:0,Sa:x,
B:{Ea:"",page:""},init:function(){k.j=0;q.init();m.e("pv-b",function(){k.vb();k.xb()});m.e("pv-d",function(){k.yb();k.B.page=""});m.e("stag-b",function(){h.c.b.api=k.j||k.fa?k.j+"_"+k.fa:"";h.c.b.ct=[decodeURIComponent(t.getData("Hm_ct_"+c.id)||""),k.B.Ea,k.B.page].join("!")});m.e("stag-d",function(){h.c.b.api=0;k.j=0;k.fa=0})},vb:function(){var a=window._hmt||[];if(!a||d.d(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,b=0;b<arguments.length;b++){var n=arguments[b];
d.d(n,"Array")&&(a.cmd[a.id].push(n),"_setAccount"===n[0]&&(1<n.length&&/^[0-9a-f]{32}$/.test(n[1]))&&(n=n[1],a.id=n,a.cmd[n]=a.cmd[n]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},xb:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var b=a.cmd[c.id],d=/^_track(Event|MobConv|Order)$/,f=0,e=b.length;f<e;f++){var g=b[f];d.test(g[0])?k.X.push(g):k.Ca(g)}a.cmd[c.id]={push:k.Ca}},yb:function(){if(0<k.X.length)for(var a=0,b=k.X.length;a<b;a++)k.Ca(k.X[a]);k.X=v},Ca:function(a){var b=
a[0];if(k.hasOwnProperty(b)&&d.d(k[b],"Function"))k[b](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(k.j|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],x===a||u===a))k.j|=2,h.c.Pa=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){k.j|=4;h.c.b.sn=h.c.Ma();h.c.b.et=0;h.c.b.ep="";h.c.b.vl=l.T()+l.L();h.c.b.kb=0;h.c.xa?(h.c.b.nv=0,h.c.b.st=4):h.c.xa=u;var b=h.c.b.u,d=h.c.b.su;h.c.b.u=f.protocol+"//"+document.location.host+a[1];k.Sa||(h.c.b.su=
document.location.href);h.c.b.p=w(q.z("pageview"));h.c.i();h.c.b.u=b;h.c.b.su=d;h.c.b.p="";h.c.W=+new Date;q.r("pageview")}},_trackEvent:function(a){2<a.length&&(k.j|=8,h.c.b.nv=0,h.c.b.st=4,h.c.b.et=4,h.c.b.ep=d.h(a[1])+"*"+d.h(a[2])+(a[3]?"*"+d.h(a[3]):"")+(a[4]?"*"+d.h(a[4]):""),h.c.b.p=w(q.va()),h.c.i(),h.c.b.p="")},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],f=a[4]||3;if(0<b&&6>b&&0<f&&4>f){k.fa++;for(var e=(h.c.b.cv||"*").split("!"),g=e.length;g<b-1;g++)e.push("*");e[b-1]=f+"*"+d.h(a[2])+
"*"+d.h(a[3]);h.c.b.cv=e.join("!");a=h.c.b.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==a?t.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):t.removeData("Hm_cv_"+c.id)}}},_setUserTag:function(b){if(!(3>b.length)){var f=d.h(b[1]);b=d.h(b[2]);if(f!==r&&b!==r){var e=decodeURIComponent(t.getData("Hm_ct_"+c.id)||""),e=a(e,f,1,b);t.setData("Hm_ct_"+c.id,encodeURIComponent(e),c.age)}}},_setVisitTag:function(b){if(!(3>b.length)){var f=d.h(b[1]);b=d.h(b[2]);if(f!==r&&b!==r){var e=
k.B.Ea,e=a(e,f,2,b);k.B.Ea=e}}},_setPageTag:function(b){if(!(3>b.length)){var f=d.h(b[1]);b=d.h(b[2]);if(f!==r&&b!==r){var e=k.B.page,e=a(e,f,3,b);k.B.page=e}}},_setReferrerOverride:function(a){1<a.length&&(h.c.b.su=a[1].charAt&&"/"===a[1].charAt(0)?f.protocol+"//"+window.location.host+a[1]:a[1],k.Sa=u)},_trackOrder:function(a){a=a[1];d.d(a,"Object")&&(b(a),k.j|=16,h.c.b.nv=0,h.c.b.st=4,h.c.b.et=94,h.c.b.ep=e.stringify(a),h.c.b.p=w(q.va()),h.c.i(),h.c.b.p="")},_trackMobConv:function(a){if(a={webim:1,
tel:2,map:3,sms:4,callback:5,share:6}[a[1]])k.j|=32,h.c.b.et=93,h.c.b.ep=a,h.c.i()},_setDataxId:function(a){a=a[1];p.Wb();p.nc(a)},_setUserId:function(a){a=a[1];if(a!==r&&(d.G(a)||d.Ra(a))){var b=q.z("user").uid_;if(!(b&&b.value===d.h(String(a)))){var b=h.c.b.p,f=h.c.b.ep;h.c.b.et=8;h.c.b.ep="";h.c.b.p="uid_*"+d.h(String(a));h.c.i();var e={};e.uid_=a;q.setProperty("user",e,u);h.c.b.p=b;h.c.b.ep=f}}},_clearUserId:function(a){1<a.length&&u===a[1]&&q.r("userId")},_setUserProperty:function(a){a=a[1];
d.d(a,"Object")&&q.setProperty("user",a)},_clearUserProperty:function(a){1<a.length&&u===a[1]&&q.r("user")},_setSessionProperty:function(a){a=a[1];d.d(a,"Object")&&q.setProperty("session",a)},_clearSessionProperty:function(a){1<a.length&&u===a[1]&&q.r("session")},_setPageviewProperty:function(a){a=a[1];d.d(a,"Object")&&q.setProperty("pageview",a)},_clearPageviewProperty:function(a){1<a.length&&u===a[1]&&q.r("pageview")},_setAutoEventTrackingProperty:function(a){a=a[1];d.d(a,"Object")&&q.setProperty("autoEventTracking",
a)},_clearAutoEventTrackingProperty:function(a){1<a.length&&u===a[1]&&q.r("autoEventTracking")},_setAutoTracking:function(a){if(1<a.length&&(a=a[1],x===a||u===a))h.c.Qa=a},_setAutoEventTracking:function(a){if(1<a.length&&(a=a[1],x===a||u===a))h.c.U=a},_trackPageDuration:function(a){1<a.length?(a=a[1],2===String(a).split(",").length&&(h.c.b.et=3,h.c.b.ep=a,h.c.i())):m.J("duration-send");m.J("duration-done")},_require:function(a){1<a.length&&(a=a[1],f.pb.test(g.K(a))&&s(a))},_providePlugin:function(a){if(1<
a.length){var b=window._hmt,e=a[1];a=a[2];if(d.F(f.Ya,e)&&d.d(a,"Function")&&(b.plugins=b.plugins||{},b.H=b.H||{},b.plugins[e]=a,b.A=b.A||[],a=b.A.slice(),e&&a.length&&a[0][1]===e))for(var g=0,k=a.length;g<k;g++){var l=a[g][2]||{};if(b.plugins[e]&&!b.H[e])b.H[e]=new b.plugins[e](l),b.A.shift();else break}}},_requirePlugin:function(a){if(1<a.length){var b=window._hmt,e=a[1],g=a[2]||{};if(d.F(f.Ya,e))if(b.plugins=b.plugins||{},b.H=b.H||{},b.plugins[e]&&!b.H[e])b.H[e]=new b.plugins[e](g);else{b.A=b.A||
[];for(var g=0,l=b.A.length;g<l;g++)if(b.A[g][1]===e)return;b.A.push(a);k._require([v,f.dc+e+".js"])}}},_trackCustomEvent:function(a){if(1<a.length){var b=a[1];a=a[2];d.d(a,"Object")||(a={});a._iden=b;q.setProperty("customEvent",a);h.c.b.et=7;h.c.b.ep="";h.c.b.p=w(q.z("customEvent"));h.c.i();h.c.b.p="";q.r("customEvent")}}};k.init();h.qb=k;return h.qb})();
(function(){var a=h.w;c.spa!==r&&"1"===String(c.spa)&&(window._hmt=window._hmt||[],window._hmt.push(["_requirePlugin","UrlChangeTracker"]),a.e("pv-b",function(){""!==window.location.hash&&(h.c.b.u=window.location.href)}))})();
(function(){function a(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=u,this.b={},this.Qa=this.Pa=u,this.U=k.U,this.Ia=e.G(c.aet)&&0<c.aet.length?c.aet.split(","):"",this.xa=x,this.init())}var b=mt.url,g=mt.eb,d=mt.Da,e=mt.lang,l=mt.cookie,f=mt.g,m=mt.sessionStorage,p=mt.o,s=mt.event,t=h.oa,q=h.O,w=q.N,k=h.C,n=h.load,y=h.w;a.prototype={V:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},ea:function(a,
b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},ca:function(a){for(var d=0;d<c.dm.length;d++)if(-1<c.dm[d].indexOf("/")){if(this.ea(a,c.dm[d]))return u}else{var e=b.K(a);if(e&&this.V(e,c.dm[d]))return u}return x},Q:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.V(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[/?#].*/,"");return a},ba:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.ea(document.location.href,d))return d.replace(/^[^/]+(\/.*)/,
"$1")+"/"}return"/"},Mb:function(){if(!document.referrer)return k.I-k.M>c.vdur?1:4;var a=x;this.ca(document.referrer)&&this.ca(document.location.href)?a=u:(a=b.K(document.referrer),a=this.V(a||"",document.location.hostname));return a?k.I-k.M>c.vdur?1:4:3},lc:function(){var a,b,d,e,f,g;k.M=t.getData("Hm_lpvt_"+c.id)||0;13===k.M.length&&(k.M=Math.round(k.M/1E3));b=this.Mb();a=4!==b?1:0;if(g=t.getData("Hm_lvt_"+c.id)){e=g.split(",");for(f=e.length-1;0<=f;f--)13===e[f].length&&(e[f]=""+Math.round(e[f]/
1E3));for(;2592E3<k.I-e[0];)e.shift();f=4>e.length?2:3;for(1===a&&e.push(k.I);4<e.length;)e.shift();g=e.join(",");e=e[e.length-1]}else g=k.I,e="",f=1;this.Zb()?(t.setData("Hm_lvt_"+c.id,g,c.age),t.setData("Hm_lpvt_"+c.id,k.I),d=l.bc(this.Q(),this.ba())):this.zb();if(0===c.nv&&this.ca(document.location.href)&&(""===document.referrer||this.ca(document.referrer)))a=0,b=4;this.b.nv=a;this.b.st=b;this.b.cc=d;this.b.lt=e;this.b.lv=f},Zb:function(){var a=b.K(document.location.href);return!e.F("sjh.baidu.com isite.baidu.com ls.wejianzhan.com bs.wejianzhan.com product.weijianzhan.com qianhu.weijianzhan.com aisite.wejianzhan.com".split(" "),
a)},zb:function(){for(var a=document.cookie.split(";"),b=0;b<a.length;b++){var d=a[b].split("=");d.length&&/Hm_(up|ct|cv|lp?vt)_[0-9a-f]{31}/.test(String(d[0]))&&t.removeData(d[0]);d.length&&/Hm_ck_[0-9]{13}/.test(String(d[0]))&&t.removeData(d[0])}},kc:function(){for(var a=[],b=this.b.et,d=0,e=k.gb.length;d<e;d++){var f=k.gb[d],g=this.b[f];"undefined"!==typeof g&&""!==g&&("tt"!==f||"tt"===f&&0===b)&&("ct"!==f||"ct"===f&&0===b)&&a.push(f+"="+encodeURIComponent(g))}return a.join("&")},mc:function(){this.lc();
this.b.si=c.id;this.b.sn=this.Ma();this.b.su=document.referrer;this.b.ds=f.fc;this.b.cl=f.colorDepth+"-bit";this.b.ln=String(f.language).toLowerCase();this.b.ja=f.javaEnabled?1:0;this.b.ck=f.cookieEnabled?1:0;this.b.lo="number"===typeof _bdhm_top?1:0;this.b.fl=d.Ob();this.b.v="1.2.72";this.b.cv=decodeURIComponent(t.getData("Hm_cv_"+c.id)||"");this.b.tt=document.title||"";this.b.vl=f.T()+f.L();var a=document.location.href;this.b.cm=b.m(a,k.Tb)||"";this.b.cp=b.m(a,k.Ub)||b.m(a,k.rc)||"";this.b.cw=b.m(a,
k.Sb)||b.m(a,k.tc)||"";this.b.ci=b.m(a,k.Qb)||b.m(a,k.qc)||"";this.b.cf=b.m(a,k.Vb)||b.m(a,k.sc)||"";this.b.cu=b.m(a,k.Rb)||b.m(a,k.pc)||"";f.$b()&&(this.b.u=window.location.href)},init:function(){try{this.mc(),0===this.b.nv?this.jc():this.Ka(),h.c=this,this.tb(),this.rb(),y.J("pv-b"),this.hc()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));g.log(k.za+"//"+k.Za+"?"+b.join("&"))}},
hc:function(){function a(){y.J("pv-d")}this.Pa?(this.xa=u,this.b.et=0,this.b.ep="",this.b.p=w(q.z("pageview")),this.b.vl=f.T()+f.L(),this.i(a),this.b.p=""):a();this.W=+new Date;q.r("pageview")},i:function(a){if(this.Qa){var b=this;b.b.rnd=Math.round(Math.random()*k.Aa);y.J("stag-b");var d=k.za+"//"+k.Za+"?"+b.kc();y.J("stag-d");b.ob(d);g.log(d,function(d){b.ab(d);e.d(a,"Function")&&a.call(b)})}},tb:function(){var a=document.location.hash.substring(1),d=RegExp(c.id),e=b.K(document.referrer)===k.hb?
1:0,f=b.m(a,"jn"),g=/^heatlink$|^select$|^pageclick$/.test(f);a&&(d.test(a)&&e&&g)&&(this.b.rnd=Math.round(Math.random()*k.Aa),a=document.createElement("script"),a.setAttribute("type","text/javascript"),a.setAttribute("charset","utf-8"),a.setAttribute("src",k.protocol+"//"+c.js+f+".js?"+this.b.rnd),f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(a,f))},rb:function(){if(window.postMessage&&window.self!==window.parent){var a=this;s.e(window,"message",function(d){if(b.K(d.origin)===
k.hb){d=d.data||{};var e=d.jn||"",f=/^customevent$|^heatmap$/.test(e);if(RegExp(c.id).test(d.sd||"")&&f)a.b.rnd=Math.round(Math.random()*k.Aa),n(k.protocol+"//"+c.js+e+".js?"+a.b.rnd)}});window.parent.postMessage({id:c.id,url:document.location.href,status:"__Messenger__hmLoaded"},"*")}},ob:function(a){var b;try{b=p.parse(m.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}var e=this.b.u?"":"&u="+encodeURIComponent(document.location.href);b.push(a.replace(/^https?:\/\//,"")+e);m.set("Hm_unsent_"+c.id,p.stringify(b))},
ab:function(a){var b;try{b=p.parse(m.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}if(b.length){a=a.replace(/^https?:\/\//,"");for(var e=0;e<b.length;e++)if(a.replace(/&u=[^&]*/,"")===b[e].replace(/&u=[^&]*/,"")){b.splice(e,1);break}b.length?m.set("Hm_unsent_"+c.id,p.stringify(b)):this.Ka()}},Ka:function(){m.remove("Hm_unsent_"+c.id)},jc:function(){var a=this,b;try{b=p.parse(m.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}if(b.length)for(var e=function(b){g.log(k.za+"//"+b,function(b){a.ab(b)})},f=0;f<
b.length;f++)e(b[f])},Ma:function(){return Math.round(+new Date/1E3)%65535}};return new a})();var B=h.C,C=h.load;c.pt&&C([B.protocol,"//ada.baidu.com/phone-tracker/insert_bdtj?sid=",c.pt].join(""));
(function(){var a=mt.g,b=mt.lang,g=mt.event,d=mt.o;if("undefined"!==typeof h.c&&(c.med||(!a.ya||7<a.Hb())&&c.cvcc)){var e,l,f,m,p=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},s=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===x)return x},t=function(a,g){var k={};k.n=e;k.t="clk";k.v=a;if(g){var l=g.getAttribute("href"),m=g.getAttribute("onclick")?""+g.getAttribute("onclick"):v,p=g.getAttribute("id")||"";f.test(l)?(k.sn=
"mediate",k.snv=l):b.d(m,"String")&&f.test(m)&&(k.sn="wrap",k.snv=m);k.id=p}h.c.b.et=86;h.c.b.ep=d.stringify(k);h.c.i();for(k=+new Date;400>=+new Date-k;);};if(c.med)l="/zoosnet",e="swt",f=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,m={click:function(){for(var a=[],b=p(document.getElementsByTagName("a")),b=[].concat.apply(b,p(document.getElementsByTagName("area"))),b=[].concat.apply(b,p(document.getElementsByTagName("img"))),d,e,g=0,k=b.length;g<k;g++)d=b[g],e=
d.getAttribute("onclick"),d=d.getAttribute("href"),(f.test(e)||f.test(d))&&a.push(b[g]);return a}};else if(c.cvcc){l="/other-comm";e="other";f=c.cvcc.q||r;var q=c.cvcc.id||r;m={click:function(){for(var a=[],b=p(document.getElementsByTagName("a")),b=[].concat.apply(b,p(document.getElementsByTagName("area"))),b=[].concat.apply(b,p(document.getElementsByTagName("img"))),d,e,g,k=0,l=b.length;k<l;k++)d=b[k],f!==r?(e=d.getAttribute("onclick"),g=d.getAttribute("href"),q?(d=d.getAttribute("id"),(f.test(e)||
f.test(g)||q.test(d))&&a.push(b[k])):(f.test(e)||f.test(g))&&a.push(b[k])):q!==r&&(d=d.getAttribute("id"),q.test(d)&&a.push(b[k]));return a}}}if("undefined"!==typeof m&&"undefined"!==typeof f){var w;l+=/\/$/.test(l)?"":"/";var k=function(a,d){if(w===d)return t(l+a,d),x;if(b.d(d,"Array")||b.d(d,"NodeList"))for(var e=0,f=d.length;e<f;e++)if(w===d[e])return t(l+a+"/"+(e+1),d[e]),x};g.e(document,"mousedown",function(a){a=a||window.event;w=a.target||a.srcElement;var d={};for(s(m,function(a,e){d[a]=b.d(e,
"Function")?e():document.getElementById(e)});w&&w!==document&&s(d,k)!==x;)w=w.parentNode})}}})();(function(){var a=mt.f,b=mt.lang,g=mt.event,d=mt.o;if("undefined"!==typeof h.c&&b.d(c.cvcf,"Array")&&0<c.cvcf.length){var e={lb:function(){for(var b=c.cvcf.length,d,m=0;m<b;m++)(d=a.La(decodeURIComponent(c.cvcf[m])))&&g.e(d,"click",e.qa())},qa:function(){return function(){h.c.b.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.c.b.ep=d.stringify(a);h.c.i()}}};a.$a(function(){e.lb()})}})();
(function(){var a=mt.event,b=mt.o;if(c.med&&"undefined"!==typeof h.c){var g={n:"anti",sb:0,kb:0,clk:0},d=function(){h.c.b.et=86;h.c.b.ep=b.stringify(g);h.c.i()};a.e(document,"click",function(){g.clk++});a.e(document,"keyup",function(){g.kb=1});a.e(window,"scroll",function(){g.sb++});a.e(window,"load",function(){setTimeout(d,5E3)})}})();})();
