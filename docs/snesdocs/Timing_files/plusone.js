var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){var j=void 0,m=!0,n=null,p=!1,aa=encodeURIComponent,q=window,ba=Object,r=document,s=String,ca=decodeURIComponent,da="appendChild",v="push",w="test",ea="exec",x="replace",fa="getElementById",ga="concat",y="indexOf",ha="readyState",z="createElement",ia="firstChild",B="setAttribute",ja="getTime",ka="getElementsByTagName",E="length",F="split",H="location",I="style",la="call",J="getAttribute",K="href",ma="action",L="apply",M="parentNode",N="join",na="toLowerCase";var O=q,P=r,oa=O[H],pa=function(){},qa=/\[native code\]/,Q=function(a,b,c){return a[b]=a[b]||c},ra=function(a){for(var b=0;b<this[E];b++)if(this[b]===a)return b;return-1},sa=/&/g,ta=/</g,ua=/>/g,va=/"/g,wa=/'/g,xa=function(a){return s(a)[x](sa,"&amp;")[x](ta,"&lt;")[x](ua,"&gt;")[x](va,"&quot;")[x](wa,"&#39;")},R=function(){var a;if((a=ba.create)&&qa[w](a))a=a(n);else{a={};for(var b in a)a[b]=j}return a},S=function(a,b){return ba.prototype.hasOwnProperty[la](a,b)},ya=function(a){if(qa[w](ba.keys))return ba.keys(a);
var b=[],c;for(c in a)S(a,c)&&b[v](c);return b},T=function(a,b){var a=a||{},c;for(c in a)S(a,c)&&(b[c]=a[c])},U=Q(O,"gapi",{});var za=function(a,b,c){var f=RegExp("([#].*&|[#])"+b+"=([^&#]*)","g"),b=RegExp("([?#].*&|[?#])"+b+"=([^&#]*)","g");if(a=a&&(f[ea](a)||b[ea](a)))try{c=ca(a[2])}catch(d){}return c},Aa=/^([^?#]*)(\?([^#]*))?(\#(.*))?$/,Ba=function(a){var a=a.match(Aa),b=R();b.k=a[1];b.c=a[3]?[a[3]]:[];b.d=a[5]?[a[5]]:[];return b},Ca=function(a){return a.k+(0<a.c[E]?"?"+a.c[N]("&"):"")+(0<a.d[E]?"#"+a.d[N]("&"):"")},Da=function(a){var b=[];if(a)for(var c in a)S(a,c)&&a[c]!=n&&b[v](aa(c)+"="+aa(a[c]));return b},Ea=function(a,
b,c){a=Ba(a);a.c[v][L](a.c,Da(b));a.d[v][L](a.d,Da(c));return Ca(a)};var Ha=function(a,b,c){if(O[b+"EventListener"])O[b+"EventListener"]("message",a,p);else if(O[c+"tachEvent"])O[c+"tachEvent"]("onmessage",a)};var V;V=Q(O,"___jsl",R());Q(V,"I",0);Q(V,"hel",10);var Ia=function(a){return!V.dpo?za(a,"jsh",V.h):V.h},Ja=function(a){return Q(Q(V,"H",R()),a,R())};var Ka=Q(V,"perf",R()),La=Q(Ka,"g",R()),Ma=Q(Ka,"i",R());Q(Ka,"r",[]);R();R();var Na=function(a,b,c){var f=Ka.r;"function"===typeof f?f(a,b,c):f[v]([a,b,c])},W=function(a,b,c){La[a]=!b&&La[a]||c||(new Date)[ja]();Na(a)},Pa=function(a,b,c){b&&0<b[E]&&(b=Oa(b),c&&0<c[E]&&(b+="___"+Oa(c)),28<b[E]&&(b=b.substr(0,28)+(b[E]-28)),c=b,b=Q(Ma,"_p",R()),Q(b,c,R())[a]=(new Date)[ja](),Na(a,"_p",c))},Oa=function(a){return a[N]("__")[x](/\./g,"_")[x](/\-/g,"_")[x](/\,/g,"_")};var Qa=R(),Ra=[],X;X={b:"callback",o:"sync",l:"config",e:"_c",g:"h",p:"platform",j:"jsl",TIMEOUT:"timeout",n:"ontimeout",q:"mh"};Ra[v]([X.j,function(a){for(var b in a)if(S(a,b)){var c=a[b];"object"==typeof c?V[b]=Q(V,b,[])[ga](c):Q(V,b,c)}if(a=a.u)b=Q(V,"us",[]),b[v](a),(c=/^https:(.*)$/[ea](a))&&b[v]("http:"+c[1]),Q(V,"u",a)}]);var Sa=decodeURI("%73cript");Qa.m=function(a){var b=V.ms||"https://apis.google.com",a=a[0];if(!a||0<=a[y](".."))throw"Bad hint";return b+"/"+a[x](/^\//,"")};
var Ta=function(a){return a[N](",")[x](/\./g,"_")[x](/-/g,"_")},Ua=function(a,b){for(var c=[],f=0;f<a[E];++f){var d=a[f];d&&0>ra[la](b,d)&&c[v](d)}return c},Va=/[@"'<>#\?&%]/,Wa=/^https?:\/\/[^\/\?#]+\.google\.com(:\d+)?\/[^\?#]+$/,Xa=/\/cb=/g,Ya=function(a){var b=P[z](Sa);b[B]("src",a);b.async="true";a=P[ka](Sa)[0];a[M].insertBefore(b,a)},$a=function(a,b){var c=b||{};"function"==typeof b&&(c={},c[X.b]=b);var f=c,d=f&&f[X.e];if(d)for(var e=0;e<Ra[E];e++){var g=Ra[e][0],h=Ra[e][1];h&&S(d,g)&&h(d[g],
a,f)}f=a?a[F](":"):[];if(!(d=c[X.g]))if(d=Ia(oa[K]),!d)throw"Bad hint";e=d;g=Q(V,"ah",R());if(!g["::"]||!f[E])Za(f||[],c,e);else{d=[];for(h=n;h=f.shift();){var i=h[F]("."),i=g[h]||g[i[1]&&"ns:"+i[0]||""]||e,k=d[E]&&d[d[E]-1]||n,l=k;if(!k||k.hint!=i)l={hint:i,i:[]},d[v](l);l.i[v](h)}var t=d[E];if(1<t){var u=c[X.b];u&&(c[X.b]=function(){0==--t&&u()})}for(;f=d.shift();)Za(f.i,c,f.hint)}},Za=function(a,b,c){for(var f=a.sort(),a=[],d=j,e=0;e<f[E];e++){var g=f[e];g!=d&&a[v](g);d=g}var a=a||[],h=b[X.b],
i=b[X.l],d=b[X.TIMEOUT],k=b[X.n],l=n,t=p;if(d&&!k||!d&&k)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var f=Q(Ja(c),"r",[]).sort(),u=Q(Ja(c),"L",[]).sort(),A=[][ga](f),Fa=function(a,b){if(t)return 0;O.clearTimeout(l);u[v][L](u,C);var d=((U||{}).config||{}).update;d?d(i):i&&Q(V,"cu",[])[v](i);if(b){Pa("me0",a,A);try{ab(function(){var a;a=c===Ia(oa[K])?Q(U,"_",R()):R();a=Q(Ja(c),"_",a);b(a)})}finally{Pa("me1",a,A)}}h&&h();return 1};0<d&&(l=O.setTimeout(function(){t=
m;k()},d));var C=Ua(a,u);if(C[E]){var C=Ua(a,f),G=Q(V,"CP",[]),D=G[E];G[D]=function(a){if(!a)return 0;Pa("ml1",C,A);var b=function(){G[D]=n;return Fa(C,a)};if(0<D&&G[D-1])G[D]=b;else for(b();(b=G[++D])&&b(););};if(C[E]){var Ga="loaded_"+V.I++;U[Ga]=function(a){G[D](a);U[Ga]=n};a=c[F](";");a=(d=Qa[a.shift()])&&d(a);if(!a)throw"Bad hint:"+c;d=a=a[x]("__features__",Ta(C))[x](/\/$/,"")+(f[E]?"/ed=1/exm="+Ta(f):"")+("/cb=gapi."+Ga);e=d.match(Xa);if(!e||!(1===e[E]&&Wa[w](d)&&!Va[w](d)))throw"Bad URL "+
a;f[v][L](f,C);Pa("ml0",C,A);b[X.o]||O.___gapisync?(b=a,"loading"!=P[ha]?Ya(b):P.write("<"+Sa+' src="'+encodeURI(b)+'"></'+Sa+">")):Ya(a)}else G[D](pa)}else Fa(C)};var ab=function(a){if(V.hee&&0<V.hel)try{return a()}catch(b){V.hel--,$a("debug_error",function(){q.___jsl.hefn(b)})}else return a()};U.load=function(a,b){return ab(function(){return $a(a,b)})};var bb=function(){return q.___jsl=q.___jsl||{}},cb=function(a){var b=bb();b[a]=b[a]||[];return b[a]},Y=function(a){var b=bb();b.cfg=!a&&b.cfg||{};return b.cfg},db=function(a){return"object"===typeof a&&/\[native code\]/[w](a[v])},Z=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]&&b[c]&&"object"===typeof a[c]&&"object"===typeof b[c]&&!db(a[c])&&!db(b[c])?Z(a[c],b[c]):b[c]&&"object"===typeof b[c]?(a[c]=db(b[c])?[]:{},Z(a[c],b[c])):a[c]=b[c])},$=function(a){if(!a)return Y();for(var a=a[F]("/"),
b=Y(),c=0,f=a[E];b&&"object"===typeof b&&c<f;++c)b=b[a[c]];return c===a[E]&&b!==j?b:j};var eb=function(a){var b=r[z]("div"),c=r[z]("a");c.href=a;b[da](c);b.innerHTML=b.innerHTML;return b[ia][K]},fb=function(a){for(var a=a||"canonical",b=r[ka]("link"),c=0,f=b[E];c<f;c++){var d=b[c],e=d[J]("rel");if(e&&e[na]()==a&&(d=d[J]("href")))if(d=eb(d))return d}return q[H][K]};var gb={allowtransparency:"true",frameborder:"0",hspace:"0",marginheight:"0",marginwidth:"0",scrolling:"no",style:"",tabindex:"0",vspace:"0",width:"100%"},hb=0,ib=function(a,b,c){var f;try{f=a[z]('<iframe frameborder="'+xa(c.frameborder)+'" scrolling="'+xa(c.scrolling)+'" name="'+xa(c.name)+'"/>')}catch(d){f=a[z]("iframe")}for(var e in c)a=c[e],"style"==e&&"object"===typeof a?T(a,f[I]):f[B](e,c[e]);for(;b[ia];)b.removeChild(b[ia]);b[da](f);c.allowtransparency&&(f.allowTransparency=m);return f};var jb=ib,ib=function(a,b,c,f,d,e){if((e||{}).allowPost&&2E3<f[E]){c.src="";var c=jb(a,b,c,f,d),g;if(-1!=navigator.userAgent[y]("WebKit")){g=b[ia].contentWindow.document;g.open();var e=g[z]("div"),h={},i=d+"_inner";h.name=i;h.src="";h.style="display:none";jb(a,e,h,"",i)}e=Ba(f);h=(f=e.c[0])?f[F]("&"):[];f=[];for(i=0;i<h[E];i++){var k=h[i][F]("=",2);f[v]([ca(k[0]),ca(k[1])])}e.c=[];h=Ca(e);e=a[z]("form");e.action=h;e.method="POST";e.target=d;e[I].display="none";for(d=0;d<f[E];d++)h=a[z]("input"),h.type=
"hidden",h.name=f[d][0],h.value=f[d][1],e[da](h);b[da](e);e.submit();e[M].removeChild(e);g&&g.close();a=c}else a=jb(a,b,c,f,d);return a};var kb=/:([a-zA-Z_]+):/g,lb={style:"position:absolute;top:-10000px;width:300px;margin:0px;borderStyle:none"},mb="onPlusOne _ready _close,_open _resizeMe _renderstart oncircled".split(" "),nb=n,ob=Q(V,"WI",R()),pb=function(){var a=$("googleapis.config/sessionIndex");a==n&&(a=q.__X_GOOG_AUTHUSER);if(a==n){var b=q.google;b&&(a=b.authuser)}a==n&&(a=j,a==n&&(a=q[H][K]),a=a?za(a,"authuser")||n:n);return a==n?n:s(a)},qb=function(a,b){if(!nb){var c=$("iframes/:socialhost:"),f=pb()||"0",d=pb();nb={socialhost:c,
session_index:f,session_prefix:d!==j&&d!==n&&""!==d?"u/"+d+"/":""}}return nb[b]||""},tb=function(a,b,c,f){if(!b[M])return n;if(!f){for(var f=R(),d=0!=b.nodeName[na]()[y]("g:"),e=0,g=b.attributes[E];e<g;e++){var h=b.attributes[e],i=h.name,h=h.value;0<=ra[la](rb,i)||(d&&0!=i[y]("data-")||"null"===h)||(d&&(i=i.substr(5)),f[i[na]()]=h)}d=b[I];(e=sb(d&&d.height))&&(f.height=s(e));(d=sb(d&&d.width))&&(f.width=s(d))}d=e=a;"plus"==a&&f[ma]&&(e=a+"_"+f[ma],d=a+"/"+f[ma]);(e=$("iframes/"+e+"/url"))||(e=":socialhost:/_/widget/render/"+
d);d=e[x](kb,qb);e={};T(f,e);e.hl=$("lang")||"en-US";e.origin=q[H].origin||q[H].protocol+"//"+q[H].host;"plus"===a&&(g=e[K]?eb(e[K]):fb(f[ma]?n:"publisher"),e.url=g,delete e[K]);"plusone"===a&&(e.url=f[K]?eb(f[K]):fb(),g=f.db,i=$(),g==n&&i&&(g=i.db,g==n&&(g=i.gwidget&&i.gwidget.db)),e.db=g||j,g=f.ecp,i=$(),g==n&&i&&(g=i.ecp,g==n&&(g=i.gwidget&&i.gwidget.ecp)),e.ecp=g||j,delete e[K]);e.hl=$("lang")||"en-US";V.ILI&&(e.iloader="1");delete e["data-onload"];delete e.rd;g=$("inline/css");"undefined"!==
typeof g&&(0<c&&g>=c)&&(e.ic="1");var g=/^#|^fr-/,c={},k;for(k in e)S(e,k)&&g[w](k)&&(c[k[x](g,"")]=e[k],delete e[k]);k=[][ga](mb);g=$("iframes/"+a+"/methods");"object"===typeof g&&qa[w](g[v])&&(k=k[ga](g));for(var l in f)if(S(f,l)&&/^on/[w](l)&&("plus"!=a||"onconnect"!=l))k[v](l),delete e[l];delete e.callback;c._methods=k[N](",");d=Ea(d,e,c);f.rd?l=b:(l=r[z]("div"),b[B]("data-gapistub",m),l[I].cssText="position:absolute;width:100px;left:-10000px;",b[M].insertBefore(l,b));l.id||(b=l,Q(ob,a,0),k="___"+
a+"_"+ob[a]++,b.id=k);b=R();b[">type"]=a;T(f,b);l[B]("data-gwattr",Da(b)[N](":"));var t;k=d;a=l;b={allowPost:1,attributes:lb};l=a.ownerDocument;e=0;do c=b.id||["I",hb++,"_",(new Date)[ja]()][N]("");while(l[fa](c)&&5>++e);if(!(5>e))throw Error("Error creating iframe id");g=l[H][K];e=R();(i=za(g,"_bsh",V.bsh))&&(e._bsh=i);(g=Ia(g))&&(e.jsh=g);g=R();g.id=c;g.parent=l[H].protocol+"//"+l[H].host;i=za(l[H][K],"id","");h=za(l[H][K],"pfname","");(i=i?h+"/"+i:"")&&(g.pfname=i);b.hintInFragment?T(e,g):t=e;
t=Ea(k,t,g);k=R();T(gb,k);k.name=k.id=c;T(b.attributes,k);k.src=t;t=ib(l,a,k,t,c,b);a={};a.userParams=f;a.url=d;a.iframeNode=t;a.id=t[J]("id");return a},rb=["style","data-gapiscan"],sb=function(a){var b=j;"number"===typeof a?b=a:"string"===typeof a&&(b=parseInt(a,10));return b},ub=function(){};var vb,wb=/(?:^|\s)g-((\S)*)(?:$|\s)/,xb=R(),yb=R(),zb=Q(V,"FW",[]),Bb=function(a,b){Ab(j,p,a,b)},Ab=function(a,b,c,f){W("ps0",m);var c=("string"===typeof c?r[fa](c):c)||P,d;d=P.documentMode;if(c.querySelectorAll&&(!d||8<d)){d=f?[f]:ya(xb)[ga](ya(yb));for(var e=[],g=0;g<d[E];g++){var h=d[g];e[v](".g-"+h,"g\\:"+h)}d=c.querySelectorAll(e[N](","))}else d=c[ka]("*");c=R();for(e=0;e<d[E];e++){g=d[e];var i=g,h=f,k=i.nodeName[na](),l=j;i[J]("data-gapiscan")?h=n:(0==k[y]("g:")?l=k.substr(2):(i=(i=s(i.className||
i[J]("class")))&&wb[ea](i))&&(l=i[1]),h=l&&(xb[l]||yb[l])&&(!h||l===h)?l:n);h&&(g[B]("data-gapiscan",m),Q(c,h,[])[v](g))}if(b)for(var t in c){b=c[t];for(f=0;f<b[E];f++)b[f][B]("data-onload",m)}for(var u in c)zb[v](u);W("ps1",m);t=zb[N](":");U.load(t,a);if(Cb(vb||{}))for(var A in c){a=c[A];u=0;for(b=a[E];u<b;u++)a[u].removeAttribute("data-gapiscan");Db(A)}else{f=[];for(A in c){a=c[A];u=0;for(b=a[E];u<b;u++)if(yb[A])d={},d.iframeNode=a[u],Db(A,d);else if(d=tb(A,a[u],b))(e=d.id)&&f[v](e),Db(A,d)}Eb(t,
f)}},Fb=function(a){var b=Q(U,a,{});b.go||(b.go=function(b){return Bb(b,a)},b.render=function(b,f){var d=f||{};d.type=a;var e=d,d=e.type;delete e.type;if(!d||!xb[d])throw Error("Unsupported widget "+d||"");var g=("string"===typeof b?r[fa](b):b)||j;if(g&&1===g.nodeType){var h={},i;for(i in e)S(e,i)&&(h[i[na]()]=e[i]);e=h;e.rd=1;i=tb(d,g,0,e);Db(d,i);(i=i.id)&&Eb(d,[i])}})};var Db=function(a,b){var c=Q(V,"watt",R())[a];b&&c?c(b):U.load(a,function(){var c=Q(V,"watt",R())[a],d=b&&b.iframeNode;!d||!c?(0,U[a].go)(d&&d[M]):c(b)})},Cb=function(){return p},Eb=function(){};Q(U,"platform",{}).go=Bb;Cb=function(a){for(var b=[X.e,X.j,X.g],c=0;c<b[E]&&a;c++)a=a[b[c]];b=Ia(oa[K]);return!a||0!=a[y]("n;")&&0!=b[y]("n;")&&a!==b};Eb=function(a,b){var c=function(){Ha(f,"remove","de")},f=function(e){var f=e.data,h=e.origin;if(Gb(f,b)){var i=d;d=p;i&&W("rqe");$a(a,function(){i&&W("rqd");c();for(var a=Q(V,"RPMQ",[]),b=0;b<a[E];b++)a[b]({data:f,origin:h})})}};if(!(0===b[E]||!q.JSON||!q.JSON.parse)){var d=m;Ha(f,"add","at");$a(a,c)}};
Ra[v]([X.p,function(a,b,c){vb=c;b&&zb[v](b);for(b=0;b<a[E];b++)xb[a[b]]=1;for(var f=c[X.e].annotation||[],b=0;b<f[E];++b)yb[f[b]]=1;for(b=0;b<a[E];b++)Fb(a[b]);if(b=q.__GOOGLEAPIS)b.googleapis&&!b["googleapis.config"]&&(b["googleapis.config"]=b.googleapis),Q(V,"ci",[])[v](b),q.__GOOGLEAPIS=j;Y(m);f=q.___gcfg;b=cb("cu");if(f&&f!==q.___gu){var d={};Z(d,f);b[v](d);q.___gu=f}var f=cb("cu"),e=r.scripts||r[ka]("script")||[],d=[],g=[],h=bb().u;h&&g[v](h);bb().us&&g[v][L](g,bb().us);for(h=0;h<e[E];++h)for(var i=
e[h],k=0;k<g[E];++k)i.src&&0==i.src[y](g[k])&&d[v](i);0==d[E]&&e[e[E]-1].src&&d[v](e[e[E]-1]);for(e=0;e<d[E];++e)if(!d[e][J]("gapi_processed")){d[e][B]("gapi_processed",m);(g=d[e])?(h=g.nodeType,g=3==h||4==h?g.nodeValue:g.textContent||g.innerText||g.innerHTML||""):g=j;if(g){for(;0==g.charCodeAt(g[E]-1);)g=g.substring(0,g[E]-1);h=j;try{h=(new Function("return ("+g+"\n)"))()}catch(l){}if("object"===typeof h)g=h;else{try{h=(new Function("return ({"+g+"\n})"))()}catch(t){}g="object"===typeof h?h:{}}}else g=
j;g&&f[v](g)}e=cb("cd");f=0;for(d=e[E];f<d;++f)Z(Y(),e[f]);e=cb("ci");f=0;for(d=e[E];f<d;++f)Z(Y(),e[f]);f=0;for(d=b[E];f<d;++f)Z(Y(),b[f]);if("explicit"!=$("parsetags")){b=Q(V,"sws",[]);b[v][L](b,a);var u;if(c){var A=c[X.b];A&&(u=function(){O.setTimeout(A,0)},delete c[X.b])}if("complete"!==P[ha])try{Ab(j,m)}catch(Fa){}var C=function(){Ab(u,m)};if("complete"===P[ha])C();else{var G=p,D=function(){if(!G)return G=m,C[L](this,arguments)};O.addEventListener?(O.addEventListener("load",D,p),O.addEventListener("DOMContentLoaded",
D,p)):O.attachEvent&&(O.attachEvent("onreadystatechange",function(){"complete"===P[ha]&&D[L](this,arguments)}),O.attachEvent("onload",D))}}}]);var Hb=/^\{h\:'/,Ib=/^!_/,Gb=function(a,b){a=s(a);if(Hb[w](a))return m;a=a[x](Ib,"");if(!/^\{/[w](a))return p;try{var c=q.JSON.parse(a)}catch(f){return p}if(!c)return p;var d=c.f;return c.s&&d&&-1!=ra[la](b,d)?("_renderstart"===c.s&&(c=c.a&&c.a[1],d=P[fa](d),c&&d&&ub(d[M],d,c)),m):p};ub=function(a,b,c){if(c.width&&c.height){a[I].cssText="";var f=c.width,c=c.height,d=a[I];d.textIndent="0";d.margin="0";d.padding="0";d.background="transparent";d.borderStyle="none";d.cssFloat="none";d.styleFloat="none";d.lineHeight="normal";d.fontSize="1px";d.verticalAlign="baseline";a[I].display="inline-block";a=b[I];a.position="static";a.left=0;a.top=0;a.visibility="visible";f&&(a.width=f+"px");c&&(a.height=c+"px");b["data-csi-wdt"]=(new Date)[ja]()}};W("bs0",m,q.gapi._bs);W("bs1",m);delete q.gapi._bs;})();
gapi.load("plusone",{callback:window["gapi_onload"],_c:{"annotation":[],"platform":["plusone","plus","additnow"],"jsl":{"u":"https://apis.google.com/js/plusone.js","dpo":false,"hee":true,"ci":{"services":{},"inline":{"css":1},"lexps":[17,69,71,36,40,61,74,75,30,45,60],"oauth-flow":{},"report":{},"iframes":{"additnow":{"url":"https://apis.google.com/additnow/additnow.html?bsv=m&abtk=AEIZW7S5u%2Bja7h/EAm2TkrESVE3kNLHhb7TBV7kLfCn3P7PFaA%2BJgtcr0sbr7zOihzIqxSZTa6Gkw2MVGBl1AwqZtqtuUNK%2BtqrzU9y4Or7y0N3xLU90Z5w%3D"},"plus":{"methods":["onauth"],"url":":socialhost:/u/:session_index:/_/pages/badge?bsv=m&abtk=AEIZW7QVAG2qOW/JKOCRBB6olHucBzuwY/YSMHuUCfKnVgzi0Mqtm7PwDL8AEcCbiLGTUrlESIojTBd35ZXCoU6k7rclja8ydSQBaOETu%2BNgjdJNwLghsBw%3D"},":socialhost:":"https://plusone.google.com","plus_circle":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/plus/circle?bsv=m&abtk=AEIZW7S2oQ/wSpfs1fDextJqhiDV%2BHgRlBhjJ%2Bd3ZI1JTX2b9rTyNmrsRjkbjWF7qYiRcToNakXxlqa123XQ5v85smIrIAHZPAPNu8hmtxQHI/0GmPJAMzw%3D"},"evwidget":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/events/widget?bsv=m&abtk=AEIZW7SIo2Z6XsITYfKS/yGb8IXXkBM3FTOV2mHDhs5Xze5i9bBW4mXxgU20Ik6bvFphxKcQvrLv6oGhjg2BkyRcOP0JNpYPZ5WKqpp7Zhk/9YautenYAVw%3D"},":signuphost:":"https://plus.google.com","plusone":{"preloadUrl":["https://ssl.gstatic.com/s2/oz/images/stars/po/Publisher/sprite4-a67f741843ffc4220554c34bd01bb0bb.png"],"params":{"count":"","url":"","size":""},"url":":socialhost:/:session_prefix:_/+1/fastbutton?bsv=m&abtk=AEIZW7RndWKmnWBAeJZ5j46DoQBEDhpQ93tPW82W66yOhJftVbsreEWWyTfavm1XqiHINus004BMQ2x73G80WGTyTBFt6WIaR%2BmDpn2EinPfiAJ9M8BblmI%3D"},"plus_share":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/+1/sharebutton?plusShare=true&bsv=m&abtk=AEIZW7TV2GH1S/yD%2Bb2/XYtsspjbso8X5/3b7fkWQvJYxCsd%2BDUAzQfdrk%2BirUGEssOepCuajoa6OBT65CIOiEVfsu4dg0K5C1FtTeMmMIaXeGda9Fa0hww%3D"}},"isPlusUser":false,"debug":{"host":"https://plusone.google.com","reportExceptionRate":0.05,"rethrowException":true},"csi":{"rate":0},"googleapis.config":{"mobilesignupurl":"https://m.google.com/app/plus/oob?"}},"h":"m;/_/apps-static/_/js/gapi/__features__/rt=j/ver=rPTFdxkdgIA.en./sv=1/am=!2H2H8ZqGj6aIqyfgIg/d=1/rs=AItRSTPVu2k8_XZ3z1WYjAwvmGpld4cesA","fp":"9e2616f51b7ea2663cba82e5da40423704cadfb3"},"fp":"9e2616f51b7ea2663cba82e5da40423704cadfb3"}});