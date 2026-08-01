(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function YS(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var fh={exports:{}},zo={};var kg;function ZS(){if(kg)return zo;kg=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:a,key:f,ref:l!==void 0?l:null,props:c}}return zo.Fragment=t,zo.jsx=i,zo.jsxs=i,zo}var Xg;function jS(){return Xg||(Xg=1,fh.exports=ZS()),fh.exports}var On=jS(),hh={exports:{}},re={};var Wg;function KS(){if(Wg)return re;Wg=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,x={};function v(N,it,Mt){this.props=N,this.context=it,this.refs=x,this.updater=Mt||T}v.prototype.isReactComponent={},v.prototype.setState=function(N,it){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,it,"setState")},v.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function z(){}z.prototype=v.prototype;function U(N,it,Mt){this.props=N,this.context=it,this.refs=x,this.updater=Mt||T}var w=U.prototype=new z;w.constructor=U,E(w,v.prototype),w.isPureReactComponent=!0;var H=Array.isArray;function F(){}var O={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function C(N,it,Mt){var Ct=Mt.ref;return{$$typeof:s,type:N,key:it,ref:Ct!==void 0?Ct:null,props:Mt}}function D(N,it){return C(N.type,it,N.props)}function B(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function st(N){var it={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Mt){return it[Mt]})}var lt=/\/+/g;function ut(N,it){return typeof N=="object"&&N!==null&&N.key!=null?st(""+N.key):it.toString(36)}function dt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(F,F):(N.status="pending",N.then(function(it){N.status==="pending"&&(N.status="fulfilled",N.value=it)},function(it){N.status==="pending"&&(N.status="rejected",N.reason=it)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function P(N,it,Mt,Ct,J){var _t=typeof N;(_t==="undefined"||_t==="boolean")&&(N=null);var $=!1;if(N===null)$=!0;else switch(_t){case"bigint":case"string":case"number":$=!0;break;case"object":switch(N.$$typeof){case s:case t:$=!0;break;case g:return $=N._init,P($(N._payload),it,Mt,Ct,J)}}if($)return J=J(N),$=Ct===""?"."+ut(N,0):Ct,H(J)?(Mt="",$!=null&&(Mt=$.replace(lt,"$&/")+"/"),P(J,it,Mt,"",function(jt){return jt})):J!=null&&(B(J)&&(J=D(J,Mt+(J.key==null||N&&N.key===J.key?"":(""+J.key).replace(lt,"$&/")+"/")+$)),it.push(J)),1;$=0;var At=Ct===""?".":Ct+":";if(H(N))for(var Tt=0;Tt<N.length;Tt++)Ct=N[Tt],_t=At+ut(Ct,Tt),$+=P(Ct,it,Mt,_t,J);else if(Tt=M(N),typeof Tt=="function")for(N=Tt.call(N),Tt=0;!(Ct=N.next()).done;)Ct=Ct.value,_t=At+ut(Ct,Tt++),$+=P(Ct,it,Mt,_t,J);else if(_t==="object"){if(typeof N.then=="function")return P(dt(N),it,Mt,Ct,J);throw it=String(N),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return $}function K(N,it,Mt){if(N==null)return N;var Ct=[],J=0;return P(N,Ct,"","",function(_t){return it.call(Mt,_t,J++)}),Ct}function Y(N){if(N._status===-1){var it=N._result;it=it(),it.then(function(Mt){(N._status===0||N._status===-1)&&(N._status=1,N._result=Mt)},function(Mt){(N._status===0||N._status===-1)&&(N._status=2,N._result=Mt)}),N._status===-1&&(N._status=0,N._result=it)}if(N._status===1)return N._result.default;throw N._result}var yt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},xt={map:K,forEach:function(N,it,Mt){K(N,function(){it.apply(this,arguments)},Mt)},count:function(N){var it=0;return K(N,function(){it++}),it},toArray:function(N){return K(N,function(it){return it})||[]},only:function(N){if(!B(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return re.Activity=_,re.Children=xt,re.Component=v,re.Fragment=i,re.Profiler=l,re.PureComponent=U,re.StrictMode=a,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,re.__COMPILER_RUNTIME={__proto__:null,c:function(N){return O.H.useMemoCache(N)}},re.cache=function(N){return function(){return N.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(N,it,Mt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Ct=E({},N.props),J=N.key;if(it!=null)for(_t in it.key!==void 0&&(J=""+it.key),it)!X.call(it,_t)||_t==="key"||_t==="__self"||_t==="__source"||_t==="ref"&&it.ref===void 0||(Ct[_t]=it[_t]);var _t=arguments.length-2;if(_t===1)Ct.children=Mt;else if(1<_t){for(var $=Array(_t),At=0;At<_t;At++)$[At]=arguments[At+2];Ct.children=$}return C(N.type,J,Ct)},re.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},re.createElement=function(N,it,Mt){var Ct,J={},_t=null;if(it!=null)for(Ct in it.key!==void 0&&(_t=""+it.key),it)X.call(it,Ct)&&Ct!=="key"&&Ct!=="__self"&&Ct!=="__source"&&(J[Ct]=it[Ct]);var $=arguments.length-2;if($===1)J.children=Mt;else if(1<$){for(var At=Array($),Tt=0;Tt<$;Tt++)At[Tt]=arguments[Tt+2];J.children=At}if(N&&N.defaultProps)for(Ct in $=N.defaultProps,$)J[Ct]===void 0&&(J[Ct]=$[Ct]);return C(N,_t,J)},re.createRef=function(){return{current:null}},re.forwardRef=function(N){return{$$typeof:d,render:N}},re.isValidElement=B,re.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:Y}},re.memo=function(N,it){return{$$typeof:p,type:N,compare:it===void 0?null:it}},re.startTransition=function(N){var it=O.T,Mt={};O.T=Mt;try{var Ct=N(),J=O.S;J!==null&&J(Mt,Ct),typeof Ct=="object"&&Ct!==null&&typeof Ct.then=="function"&&Ct.then(F,yt)}catch(_t){yt(_t)}finally{it!==null&&Mt.types!==null&&(it.types=Mt.types),O.T=it}},re.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},re.use=function(N){return O.H.use(N)},re.useActionState=function(N,it,Mt){return O.H.useActionState(N,it,Mt)},re.useCallback=function(N,it){return O.H.useCallback(N,it)},re.useContext=function(N){return O.H.useContext(N)},re.useDebugValue=function(){},re.useDeferredValue=function(N,it){return O.H.useDeferredValue(N,it)},re.useEffect=function(N,it){return O.H.useEffect(N,it)},re.useEffectEvent=function(N){return O.H.useEffectEvent(N)},re.useId=function(){return O.H.useId()},re.useImperativeHandle=function(N,it,Mt){return O.H.useImperativeHandle(N,it,Mt)},re.useInsertionEffect=function(N,it){return O.H.useInsertionEffect(N,it)},re.useLayoutEffect=function(N,it){return O.H.useLayoutEffect(N,it)},re.useMemo=function(N,it){return O.H.useMemo(N,it)},re.useOptimistic=function(N,it){return O.H.useOptimistic(N,it)},re.useReducer=function(N,it,Mt){return O.H.useReducer(N,it,Mt)},re.useRef=function(N){return O.H.useRef(N)},re.useState=function(N){return O.H.useState(N)},re.useSyncExternalStore=function(N,it,Mt){return O.H.useSyncExternalStore(N,it,Mt)},re.useTransition=function(){return O.H.useTransition()},re.version="19.2.8",re}var qg;function Gd(){return qg||(qg=1,hh.exports=KS()),hh.exports}var ws=Gd();const QS=YS(ws);var dh={exports:{}},Bo={},ph={exports:{}},mh={};var Yg;function JS(){return Yg||(Yg=1,(function(s){function t(P,K){var Y=P.length;P.push(K);t:for(;0<Y;){var yt=Y-1>>>1,xt=P[yt];if(0<l(xt,K))P[yt]=K,P[Y]=xt,Y=yt;else break t}}function i(P){return P.length===0?null:P[0]}function a(P){if(P.length===0)return null;var K=P[0],Y=P.pop();if(Y!==K){P[0]=Y;t:for(var yt=0,xt=P.length,N=xt>>>1;yt<N;){var it=2*(yt+1)-1,Mt=P[it],Ct=it+1,J=P[Ct];if(0>l(Mt,Y))Ct<xt&&0>l(J,Mt)?(P[yt]=J,P[Ct]=Y,yt=Ct):(P[yt]=Mt,P[it]=Y,yt=it);else if(Ct<xt&&0>l(J,Y))P[yt]=J,P[Ct]=Y,yt=Ct;else break t}}return K}function l(P,K){var Y=P.sortIndex-K.sortIndex;return Y!==0?Y:P.id-K.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var m=[],p=[],g=1,_=null,S=3,M=!1,T=!1,E=!1,x=!1,v=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function w(P){for(var K=i(p);K!==null;){if(K.callback===null)a(p);else if(K.startTime<=P)a(p),K.sortIndex=K.expirationTime,t(m,K);else break;K=i(p)}}function H(P){if(E=!1,w(P),!T)if(i(m)!==null)T=!0,F||(F=!0,st());else{var K=i(p);K!==null&&dt(H,K.startTime-P)}}var F=!1,O=-1,X=5,C=-1;function D(){return x?!0:!(s.unstable_now()-C<X)}function B(){if(x=!1,F){var P=s.unstable_now();C=P;var K=!0;try{t:{T=!1,E&&(E=!1,z(O),O=-1),M=!0;var Y=S;try{e:{for(w(P),_=i(m);_!==null&&!(_.expirationTime>P&&D());){var yt=_.callback;if(typeof yt=="function"){_.callback=null,S=_.priorityLevel;var xt=yt(_.expirationTime<=P);if(P=s.unstable_now(),typeof xt=="function"){_.callback=xt,w(P),K=!0;break e}_===i(m)&&a(m),w(P)}else a(m);_=i(m)}if(_!==null)K=!0;else{var N=i(p);N!==null&&dt(H,N.startTime-P),K=!1}}break t}finally{_=null,S=Y,M=!1}K=void 0}}finally{K?st():F=!1}}}var st;if(typeof U=="function")st=function(){U(B)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,ut=lt.port2;lt.port1.onmessage=B,st=function(){ut.postMessage(null)}}else st=function(){v(B,0)};function dt(P,K){O=v(function(){P(s.unstable_now())},K)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(P){P.callback=null},s.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<P?Math.floor(1e3/P):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_next=function(P){switch(S){case 1:case 2:case 3:var K=3;break;default:K=S}var Y=S;S=K;try{return P()}finally{S=Y}},s.unstable_requestPaint=function(){x=!0},s.unstable_runWithPriority=function(P,K){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Y=S;S=P;try{return K()}finally{S=Y}},s.unstable_scheduleCallback=function(P,K,Y){var yt=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?yt+Y:yt):Y=yt,P){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=Y+xt,P={id:g++,callback:K,priorityLevel:P,startTime:Y,expirationTime:xt,sortIndex:-1},Y>yt?(P.sortIndex=Y,t(p,P),i(m)===null&&P===i(p)&&(E?(z(O),O=-1):E=!0,dt(H,Y-yt))):(P.sortIndex=xt,t(m,P),T||M||(T=!0,F||(F=!0,st()))),P},s.unstable_shouldYield=D,s.unstable_wrapCallback=function(P){var K=S;return function(){var Y=S;S=K;try{return P.apply(this,arguments)}finally{S=Y}}}})(mh)),mh}var Zg;function $S(){return Zg||(Zg=1,ph.exports=JS()),ph.exports}var gh={exports:{}},Un={};var jg;function tM(){if(jg)return Un;jg=1;var s=Gd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Un.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Un.flushSync=function(m){var p=f.T,g=a.p;try{if(f.T=null,a.p=2,m)return m()}finally{f.T=p,a.p=g,a.d.f()}},Un.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},Un.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Un.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:M}):g==="script"&&a.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Un.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},Un.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);a.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Un.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},Un.requestFormReset=function(m){a.d.r(m)},Un.unstable_batchedUpdates=function(m,p){return m(p)},Un.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Un.useFormStatus=function(){return f.H.useHostTransitionStatus()},Un.version="19.2.8",Un}var Kg;function eM(){if(Kg)return gh.exports;Kg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),gh.exports=tM(),gh.exports}var Qg;function nM(){if(Qg)return Bo;Qg=1;var s=$S(),t=Gd(),i=eM();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(a(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(a(188));return n!==e?null:e}for(var r=e,o=n;;){var u=r.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){r=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===r)return m(u),e;if(h===o)return m(u),n;h=h.sibling}throw Error(a(188))}if(r.return!==o.return)r=u,o=h;else{for(var y=!1,A=u.child;A;){if(A===r){y=!0,r=u,o=h;break}if(A===o){y=!0,o=u,r=h;break}A=A.sibling}if(!y){for(A=h.child;A;){if(A===r){y=!0,r=h,o=u;break}if(A===o){y=!0,o=h,r=u;break}A=A.sibling}if(!y)throw Error(a(189))}}if(r.alternate!==o)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),U=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function st(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var lt=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case v:return"Profiler";case x:return"StrictMode";case H:return"Suspense";case F:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case U:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return n=e.displayName||null,n!==null?n:ut(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return ut(e(n))}catch{}}return null}var dt=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},yt=[],xt=-1;function N(e){return{current:e}}function it(e){0>xt||(e.current=yt[xt],yt[xt]=null,xt--)}function Mt(e,n){xt++,yt[xt]=e.current,e.current=n}var Ct=N(null),J=N(null),_t=N(null),$=N(null);function At(e,n){switch(Mt(_t,n),Mt(J,e),Mt(Ct,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?hg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=hg(n),e=dg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}it(Ct),Mt(Ct,e)}function Tt(){it(Ct),it(J),it(_t)}function jt(e){e.memoizedState!==null&&Mt($,e);var n=Ct.current,r=dg(n,e.type);n!==r&&(Mt(J,e),Mt(Ct,r))}function Ie(e){J.current===e&&(it(Ct),it(J)),$.current===e&&(it($),Lo._currentValue=Y)}var ge,G;function Ae(e){if(ge===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);ge=n&&n[1]||"",G=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ge+e+G}var $t=!1;function be(e,n){if(!e||$t)return"";$t=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(ct){var at=ct}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(ct){at=ct}e.call(gt.prototype)}}else{try{throw Error()}catch(ct){at=ct}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(ct){if(ct&&at&&typeof ct.stack=="string")return[ct.stack,at.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),y=h[0],A=h[1];if(y&&A){var I=y.split(`
`),et=A.split(`
`);for(u=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(o===I.length||u===et.length)for(o=I.length-1,u=et.length-1;1<=o&&0<=u&&I[o]!==et[u];)u--;for(;1<=o&&0<=u;o--,u--)if(I[o]!==et[u]){if(o!==1||u!==1)do if(o--,u--,0>u||I[o]!==et[u]){var ht=`
`+I[o].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=o&&0<=u);break}}}finally{$t=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?Ae(r):""}function Kt(e,n){switch(e.tag){case 26:case 27:case 5:return Ae(e.type);case 16:return Ae("Lazy");case 13:return e.child!==n&&n!==null?Ae("Suspense Fallback"):Ae("Suspense");case 19:return Ae("SuspenseList");case 0:case 15:return be(e.type,!1);case 11:return be(e.type.render,!1);case 1:return be(e.type,!0);case 31:return Ae("Activity");default:return""}}function Xe(e){try{var n="",r=null;do n+=Kt(e,r),r=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ft=Object.prototype.hasOwnProperty,se=s.unstable_scheduleCallback,en=s.unstable_cancelCallback,$e=s.unstable_shouldYield,L=s.unstable_requestPaint,b=s.unstable_now,nt=s.unstable_getCurrentPriorityLevel,pt=s.unstable_ImmediatePriority,Et=s.unstable_UserBlockingPriority,ft=s.unstable_NormalPriority,Yt=s.unstable_LowPriority,Dt=s.unstable_IdlePriority,Wt=s.log,qt=s.unstable_setDisableYieldValue,Rt=null,Ut=null;function Zt(e){if(typeof Wt=="function"&&qt(e),Ut&&typeof Ut.setStrictMode=="function")try{Ut.setStrictMode(Rt,e)}catch{}}var Bt=Math.clz32?Math.clz32:W,Nt=Math.log,oe=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Nt(e)/oe|0)|0}var wt=256,Lt=262144,It=4194304;function bt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vt(e,n,r){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~h,o!==0?u=bt(o):(y&=A,y!==0?u=bt(y):r||(r=A&~e,r!==0&&(u=bt(r))))):(A=o&~h,A!==0?u=bt(A):y!==0?u=bt(y):r||(r=o&~e,r!==0&&(u=bt(r)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,r=n&-n,h>=r||h===32&&(r&4194048)!==0)?n:u}function Ht(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ae(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pe(){var e=It;return It<<=1,(It&62914560)===0&&(It=4194304),e}function Re(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function Pn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function li(e,n,r,o,u,h){var y=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var A=e.entanglements,I=e.expirationTimes,et=e.hiddenUpdates;for(r=y&~r;0<r;){var ht=31-Bt(r),gt=1<<ht;A[ht]=0,I[ht]=-1;var at=et[ht];if(at!==null)for(et[ht]=null,ht=0;ht<at.length;ht++){var ct=at[ht];ct!==null&&(ct.lane&=-536870913)}r&=~gt}o!==0&&Ws(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(y&~n))}function Ws(e,n,r){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Bt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|r&261930}function Ui(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var o=31-Bt(r),u=1<<o;u&n|e[o]&n&&(e[o]|=n),r&=~u}}function Lr(e,n){var r=n&-n;return r=(r&42)!==0?1:Nr(r),(r&(e.suspendedLanes|n))!==0?0:r}function Nr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Or(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function $a(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:zg(e.type))}function qs(e,n){var r=K.p;try{return K.p=e,n()}finally{K.p=r}}var Kn=Math.random().toString(36).slice(2),ln="__reactFiber$"+Kn,bn="__reactProps$"+Kn,_a="__reactContainer$"+Kn,Ys="__reactEvents$"+Kn,au="__reactListeners$"+Kn,ru="__reactHandles$"+Kn,ol="__reactResources$"+Kn,tr="__reactMarker$"+Kn;function R(e){delete e[ln],delete e[bn],delete e[Ys],delete e[au],delete e[ru]}function q(e){var n=e[ln];if(n)return n;for(var r=e.parentNode;r;){if(n=r[_a]||r[ln]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=Sg(e);e!==null;){if(r=e[ln])return r;e=Sg(e)}return n}e=r,r=e.parentNode}return null}function rt(e){if(e=e[ln]||e[_a]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ot(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function Z(e){var n=e[ol];return n||(n=e[ol]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function St(e){e[tr]=!0}var Ot=new Set,Vt={};function zt(e,n){Qt(e,n),Qt(e+"Capture",n)}function Qt(e,n){for(Vt[e]=n,e=0;e<n.length;e++)Ot.add(n[e])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jt={},de={};function Ne(e){return Ft.call(de,e)?!0:Ft.call(Jt,e)?!1:ie.test(e)?de[e]=!0:(Jt[e]=!0,!1)}function We(e,n,r){if(Ne(n))if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+r)}}function Oe(e,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+r)}}function _e(e,n,r,o){if(o===null)e.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(n,r,""+o)}}function kt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ye(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function we(e,n,r){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){r=""+y,h.call(this,y)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return r},setValue:function(y){r=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Tn(e){if(!e._valueTracker){var n=Ye(e)?"checked":"value";e._valueTracker=we(e,n,""+e[n])}}function ki(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return e&&(o=Ye(e)?e.checked?"true":"false":e.value),e=o,e!==r?(n.setValue(e),!0):!1}function Sn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var er=/[\n"\\]/g;function Me(e){return e.replace(er,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Dn(e,n,r,o,u,h,y,A){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+kt(n)):e.value!==""+kt(n)&&(e.value=""+kt(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?mn(e,y,kt(n)):r!=null?mn(e,y,kt(r)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+kt(A):e.removeAttribute("name")}function zn(e,n,r,o,u,h,y,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||r!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Tn(e);return}r=r!=null?""+kt(r):"",n=n!=null?""+kt(n):r,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),Tn(e)}function mn(e,n,r){n==="number"&&Sn(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function rn(e,n,r,o){if(e=e.options,n){n={};for(var u=0;u<r.length;u++)n["$"+r[u]]=!0;for(r=0;r<e.length;r++)u=n.hasOwnProperty("$"+e[r].value),e[r].selected!==u&&(e[r].selected=u),u&&o&&(e[r].defaultSelected=!0)}else{for(r=""+kt(r),n=null,u=0;u<e.length;u++){if(e[u].value===r){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Pr(e,n,r){if(n!=null&&(n=""+kt(n),n!==e.value&&(e.value=n),r==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=r!=null?""+kt(r):""}function Li(e,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(a(92));if(dt(o)){if(1<o.length)throw Error(a(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=kt(n),e.defaultValue=r,o=e.textContent,o===r&&o!==""&&o!==null&&(e.value=o),Tn(e)}function zr(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var Vv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cp(e,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,r):typeof r!="number"||r===0||Vv.has(n)?n==="float"?e.cssFloat=r:e[n]=(""+r).trim():e[n]=r+"px"}function up(e,n,r){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&r[u]!==o&&cp(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&cp(e,h,n[h])}function su(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ll(e){return Xv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Xi(){}var ou=null;function lu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Br=null,Ir=null;function fp(e){var n=rt(e);if(n&&(e=n.stateNode)){var r=e[bn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Dn(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Me(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==e&&o.form===e.form){var u=o[bn]||null;if(!u)throw Error(a(90));Dn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===e.form&&ki(o)}break t;case"textarea":Pr(e,r.value,r.defaultValue);break t;case"select":n=r.value,n!=null&&rn(e,!!r.multiple,n,!1)}}}var cu=!1;function hp(e,n,r){if(cu)return e(n,r);cu=!0;try{var o=e(n);return o}finally{if(cu=!1,(Br!==null||Ir!==null)&&(jl(),Br&&(n=Br,e=Ir,Ir=Br=null,fp(n),e)))for(n=0;n<e.length;n++)fp(e[n])}}function Zs(e,n){var r=e.stateNode;if(r===null)return null;var o=r[bn]||null;if(o===null)return null;r=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,n,typeof r));return r}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uu=!1;if(Wi)try{var js={};Object.defineProperty(js,"passive",{get:function(){uu=!0}}),window.addEventListener("test",js,js),window.removeEventListener("test",js,js)}catch{uu=!1}var va=null,fu=null,cl=null;function dp(){if(cl)return cl;var e,n=fu,r=n.length,o,u="value"in va?va.value:va.textContent,h=u.length;for(e=0;e<r&&n[e]===u[e];e++);var y=r-e;for(o=1;o<=y&&n[r-o]===u[h-o];o++);return cl=u.slice(e,1<o?1-o:void 0)}function ul(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function fl(){return!0}function pp(){return!1}function Gn(e){function n(r,o,u,h,y){this._reactName=r,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(r=e[A],this[A]=r?r(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?fl:pp,this.isPropagationStopped=pp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),n}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hl=Gn(nr),Ks=_({},nr,{view:0,detail:0}),Wv=Gn(Ks),hu,du,Qs,dl=_({},Ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qs&&(Qs&&e.type==="mousemove"?(hu=e.screenX-Qs.screenX,du=e.screenY-Qs.screenY):du=hu=0,Qs=e),hu)},movementY:function(e){return"movementY"in e?e.movementY:du}}),mp=Gn(dl),qv=_({},dl,{dataTransfer:0}),Yv=Gn(qv),Zv=_({},Ks,{relatedTarget:0}),pu=Gn(Zv),jv=_({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),Kv=Gn(jv),Qv=_({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jv=Gn(Qv),$v=_({},nr,{data:0}),gp=Gn($v),ty={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ey={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ny={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iy(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ny[e])?!!n[e]:!1}function mu(){return iy}var ay=_({},Ks,{key:function(e){if(e.key){var n=ty[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ul(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ey[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mu,charCode:function(e){return e.type==="keypress"?ul(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ul(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ry=Gn(ay),sy=_({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_p=Gn(sy),oy=_({},Ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mu}),ly=Gn(oy),cy=_({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),uy=Gn(cy),fy=_({},dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hy=Gn(fy),dy=_({},nr,{newState:0,oldState:0}),py=Gn(dy),my=[9,13,27,32],gu=Wi&&"CompositionEvent"in window,Js=null;Wi&&"documentMode"in document&&(Js=document.documentMode);var gy=Wi&&"TextEvent"in window&&!Js,vp=Wi&&(!gu||Js&&8<Js&&11>=Js),yp=" ",Sp=!1;function Mp(e,n){switch(e){case"keyup":return my.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fr=!1;function _y(e,n){switch(e){case"compositionend":return xp(n);case"keypress":return n.which!==32?null:(Sp=!0,yp);case"textInput":return e=n.data,e===yp&&Sp?null:e;default:return null}}function vy(e,n){if(Fr)return e==="compositionend"||!gu&&Mp(e,n)?(e=dp(),cl=fu=va=null,Fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return vp&&n.locale!=="ko"?null:n.data;default:return null}}var yy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ep(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!yy[e.type]:n==="textarea"}function bp(e,n,r,o){Br?Ir?Ir.push(o):Ir=[o]:Br=o,n=nc(n,"onChange"),0<n.length&&(r=new hl("onChange","change",null,r,o),e.push({event:r,listeners:n}))}var $s=null,to=null;function Sy(e){sg(e,0)}function pl(e){var n=ot(e);if(ki(n))return e}function Tp(e,n){if(e==="change")return n}var Ap=!1;if(Wi){var _u;if(Wi){var vu="oninput"in document;if(!vu){var Rp=document.createElement("div");Rp.setAttribute("oninput","return;"),vu=typeof Rp.oninput=="function"}_u=vu}else _u=!1;Ap=_u&&(!document.documentMode||9<document.documentMode)}function wp(){$s&&($s.detachEvent("onpropertychange",Cp),to=$s=null)}function Cp(e){if(e.propertyName==="value"&&pl(to)){var n=[];bp(n,to,e,lu(e)),hp(Sy,n)}}function My(e,n,r){e==="focusin"?(wp(),$s=n,to=r,$s.attachEvent("onpropertychange",Cp)):e==="focusout"&&wp()}function xy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pl(to)}function Ey(e,n){if(e==="click")return pl(n)}function by(e,n){if(e==="input"||e==="change")return pl(n)}function Ty(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Qn=typeof Object.is=="function"?Object.is:Ty;function eo(e,n){if(Qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var u=r[o];if(!Ft.call(n,u)||!Qn(e[u],n[u]))return!1}return!0}function Dp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Up(e,n){var r=Dp(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=n&&o>=n)return{node:r,offset:n-e};e=o}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=Dp(r)}}function Lp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Lp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Np(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Sn(e.document);n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=Sn(e.document)}return n}function yu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Ay=Wi&&"documentMode"in document&&11>=document.documentMode,Hr=null,Su=null,no=null,Mu=!1;function Op(e,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Mu||Hr==null||Hr!==Sn(o)||(o=Hr,"selectionStart"in o&&yu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),no&&eo(no,o)||(no=o,o=nc(Su,"onSelect"),0<o.length&&(n=new hl("onSelect","select",null,n,r),e.push({event:n,listeners:o}),n.target=Hr)))}function ir(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var Gr={animationend:ir("Animation","AnimationEnd"),animationiteration:ir("Animation","AnimationIteration"),animationstart:ir("Animation","AnimationStart"),transitionrun:ir("Transition","TransitionRun"),transitionstart:ir("Transition","TransitionStart"),transitioncancel:ir("Transition","TransitionCancel"),transitionend:ir("Transition","TransitionEnd")},xu={},Pp={};Wi&&(Pp=document.createElement("div").style,"AnimationEvent"in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),"TransitionEvent"in window||delete Gr.transitionend.transition);function ar(e){if(xu[e])return xu[e];if(!Gr[e])return e;var n=Gr[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in Pp)return xu[e]=n[r];return e}var zp=ar("animationend"),Bp=ar("animationiteration"),Ip=ar("animationstart"),Ry=ar("transitionrun"),wy=ar("transitionstart"),Cy=ar("transitioncancel"),Fp=ar("transitionend"),Hp=new Map,Eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Eu.push("scrollEnd");function xi(e,n){Hp.set(e,n),zt(n,[e])}var ml=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ci=[],Vr=0,bu=0;function gl(){for(var e=Vr,n=bu=Vr=0;n<e;){var r=ci[n];ci[n++]=null;var o=ci[n];ci[n++]=null;var u=ci[n];ci[n++]=null;var h=ci[n];if(ci[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}h!==0&&Gp(r,u,h)}}function _l(e,n,r,o){ci[Vr++]=e,ci[Vr++]=n,ci[Vr++]=r,ci[Vr++]=o,bu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Tu(e,n,r,o){return _l(e,n,r,o),vl(e)}function rr(e,n){return _l(e,null,null,n),vl(e)}function Gp(e,n,r){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r);for(var u=!1,h=e.return;h!==null;)h.childLanes|=r,o=h.alternate,o!==null&&(o.childLanes|=r),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Bt(r),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=r|536870912),h):null}function vl(e){if(50<To)throw To=0,Pf=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var kr={};function Dy(e,n,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(e,n,r,o){return new Dy(e,n,r,o)}function Au(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qi(e,n){var r=e.alternate;return r===null?(r=Jn(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function Vp(e,n){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,n=r.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function yl(e,n,r,o,u,h){var y=0;if(o=e,typeof e=="function")Au(e)&&(y=1);else if(typeof e=="string")y=PS(e,r,Ct.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=Jn(31,r,n,u),e.elementType=C,e.lanes=h,e;case E:return sr(r.children,u,h,n);case x:y=8,u|=24;break;case v:return e=Jn(12,r,n,u|2),e.elementType=v,e.lanes=h,e;case H:return e=Jn(13,r,n,u),e.elementType=H,e.lanes=h,e;case F:return e=Jn(19,r,n,u),e.elementType=F,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:y=10;break t;case z:y=9;break t;case w:y=11;break t;case O:y=14;break t;case X:y=16,o=null;break t}y=29,r=Error(a(130,e===null?"null":typeof e,"")),o=null}return n=Jn(y,r,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function sr(e,n,r,o){return e=Jn(7,e,o,n),e.lanes=r,e}function Ru(e,n,r){return e=Jn(6,e,null,n),e.lanes=r,e}function kp(e){var n=Jn(18,null,null,0);return n.stateNode=e,n}function wu(e,n,r){return n=Jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Xp=new WeakMap;function ui(e,n){if(typeof e=="object"&&e!==null){var r=Xp.get(e);return r!==void 0?r:(n={value:e,source:n,stack:Xe(n)},Xp.set(e,n),n)}return{value:e,source:n,stack:Xe(n)}}var Xr=[],Wr=0,Sl=null,io=0,fi=[],hi=0,ya=null,Ni=1,Oi="";function Yi(e,n){Xr[Wr++]=io,Xr[Wr++]=Sl,Sl=e,io=n}function Wp(e,n,r){fi[hi++]=Ni,fi[hi++]=Oi,fi[hi++]=ya,ya=e;var o=Ni;e=Oi;var u=32-Bt(o)-1;o&=~(1<<u),r+=1;var h=32-Bt(n)+u;if(30<h){var y=u-u%5;h=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Ni=1<<32-Bt(n)+u|r<<u|o,Oi=h+e}else Ni=1<<h|r<<u|o,Oi=e}function Cu(e){e.return!==null&&(Yi(e,1),Wp(e,1,0))}function Du(e){for(;e===Sl;)Sl=Xr[--Wr],Xr[Wr]=null,io=Xr[--Wr],Xr[Wr]=null;for(;e===ya;)ya=fi[--hi],fi[hi]=null,Oi=fi[--hi],fi[hi]=null,Ni=fi[--hi],fi[hi]=null}function qp(e,n){fi[hi++]=Ni,fi[hi++]=Oi,fi[hi++]=ya,Ni=n.id,Oi=n.overflow,ya=e}var An=null,Ze=null,Te=!1,Sa=null,di=!1,Uu=Error(a(519));function Ma(e){var n=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ao(ui(n,e)),Uu}function Yp(e){var n=e.stateNode,r=e.type,o=e.memoizedProps;switch(n[ln]=e,n[bn]=o,r){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(r=0;r<Ro.length;r++)ye(Ro[r],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":ye("invalid",n),zn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ye("invalid",n);break;case"textarea":ye("invalid",n),Li(n,o.value,o.defaultValue,o.children)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||ug(n.textContent,r)?(o.popover!=null&&(ye("beforetoggle",n),ye("toggle",n)),o.onScroll!=null&&ye("scroll",n),o.onScrollEnd!=null&&ye("scrollend",n),o.onClick!=null&&(n.onclick=Xi),n=!0):n=!1,n||Ma(e,!0)}function Zp(e){for(An=e.return;An;)switch(An.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:An=An.return}}function qr(e){if(e!==An)return!1;if(!Te)return Zp(e),Te=!0,!1;var n=e.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Kf(e.type,e.memoizedProps)),r=!r),r&&Ze&&Ma(e),Zp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ze=yg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ze=yg(e)}else n===27?(n=Ze,Pa(e.type)?(e=eh,eh=null,Ze=e):Ze=n):Ze=An?mi(e.stateNode.nextSibling):null;return!0}function or(){Ze=An=null,Te=!1}function Lu(){var e=Sa;return e!==null&&(Wn===null?Wn=e:Wn.push.apply(Wn,e),Sa=null),e}function ao(e){Sa===null?Sa=[e]:Sa.push(e)}var Nu=N(null),lr=null,Zi=null;function xa(e,n,r){Mt(Nu,n._currentValue),n._currentValue=r}function ji(e){e._currentValue=Nu.current,it(Nu)}function Ou(e,n,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===r)break;e=e.return}}function Pu(e,n,r,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var y=u.child;h=h.firstContext;t:for(;h!==null;){var A=h;h=u;for(var I=0;I<n.length;I++)if(A.context===n[I]){h.lanes|=r,A=h.alternate,A!==null&&(A.lanes|=r),Ou(h.return,r,e),o||(y=null);break t}h=A.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(a(341));y.lanes|=r,h=y.alternate,h!==null&&(h.lanes|=r),Ou(y,r,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function Yr(e,n,r,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(a(387));if(y=y.memoizedProps,y!==null){var A=u.type;Qn(u.pendingProps.value,y.value)||(e!==null?e.push(A):e=[A])}}else if(u===$.current){if(y=u.alternate,y===null)throw Error(a(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Lo):e=[Lo])}u=u.return}e!==null&&Pu(n,e,r,o),n.flags|=262144}function Ml(e){for(e=e.firstContext;e!==null;){if(!Qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function cr(e){lr=e,Zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return jp(lr,e)}function xl(e,n){return lr===null&&cr(e),jp(e,n)}function jp(e,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},Zi===null){if(e===null)throw Error(a(308));Zi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Zi=Zi.next=n;return r}var Uy=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(r,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(r){return r()})}},Ly=s.unstable_scheduleCallback,Ny=s.unstable_NormalPriority,cn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zu(){return{controller:new Uy,data:new Map,refCount:0}}function ro(e){e.refCount--,e.refCount===0&&Ly(Ny,function(){e.controller.abort()})}var so=null,Bu=0,Zr=0,jr=null;function Oy(e,n){if(so===null){var r=so=[];Bu=0,Zr=Gf(),jr={status:"pending",value:void 0,then:function(o){r.push(o)}}}return Bu++,n.then(Kp,Kp),n}function Kp(){if(--Bu===0&&so!==null){jr!==null&&(jr.status="fulfilled");var e=so;so=null,Zr=0,jr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Py(e,n){var r=[],o={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<r.length;u++)(0,r[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),o}var Qp=P.S;P.S=function(e,n){O0=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Oy(e,n),Qp!==null&&Qp(e,n)};var ur=N(null);function Iu(){var e=ur.current;return e!==null?e:qe.pooledCache}function El(e,n){n===null?Mt(ur,ur.current):Mt(ur,n.pool)}function Jp(){var e=Iu();return e===null?null:{parent:cn._currentValue,pool:e}}var Kr=Error(a(460)),Fu=Error(a(474)),bl=Error(a(542)),Tl={then:function(){}};function $p(e){return e=e.status,e==="fulfilled"||e==="rejected"}function tm(e,n,r){switch(r=e[r],r===void 0?e.push(n):r!==n&&(n.then(Xi,Xi),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,nm(e),e;default:if(typeof n.status=="string")n.then(Xi,Xi);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,nm(e),e}throw hr=n,Kr}}function fr(e){try{var n=e._init;return n(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(hr=r,Kr):r}}var hr=null;function em(){if(hr===null)throw Error(a(459));var e=hr;return hr=null,e}function nm(e){if(e===Kr||e===bl)throw Error(a(483))}var Qr=null,oo=0;function Al(e){var n=oo;return oo+=1,Qr===null&&(Qr=[]),tm(Qr,e,n)}function lo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Rl(e,n){throw n.$$typeof===S?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function im(e){function n(j,k){if(e){var tt=j.deletions;tt===null?(j.deletions=[k],j.flags|=16):tt.push(k)}}function r(j,k){if(!e)return null;for(;k!==null;)n(j,k),k=k.sibling;return null}function o(j){for(var k=new Map;j!==null;)j.key!==null?k.set(j.key,j):k.set(j.index,j),j=j.sibling;return k}function u(j,k){return j=qi(j,k),j.index=0,j.sibling=null,j}function h(j,k,tt){return j.index=tt,e?(tt=j.alternate,tt!==null?(tt=tt.index,tt<k?(j.flags|=67108866,k):tt):(j.flags|=67108866,k)):(j.flags|=1048576,k)}function y(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function A(j,k,tt,mt){return k===null||k.tag!==6?(k=Ru(tt,j.mode,mt),k.return=j,k):(k=u(k,tt),k.return=j,k)}function I(j,k,tt,mt){var te=tt.type;return te===E?ht(j,k,tt.props.children,mt,tt.key):k!==null&&(k.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===X&&fr(te)===k.type)?(k=u(k,tt.props),lo(k,tt),k.return=j,k):(k=yl(tt.type,tt.key,tt.props,null,j.mode,mt),lo(k,tt),k.return=j,k)}function et(j,k,tt,mt){return k===null||k.tag!==4||k.stateNode.containerInfo!==tt.containerInfo||k.stateNode.implementation!==tt.implementation?(k=wu(tt,j.mode,mt),k.return=j,k):(k=u(k,tt.children||[]),k.return=j,k)}function ht(j,k,tt,mt,te){return k===null||k.tag!==7?(k=sr(tt,j.mode,mt,te),k.return=j,k):(k=u(k,tt),k.return=j,k)}function gt(j,k,tt){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Ru(""+k,j.mode,tt),k.return=j,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return tt=yl(k.type,k.key,k.props,null,j.mode,tt),lo(tt,k),tt.return=j,tt;case T:return k=wu(k,j.mode,tt),k.return=j,k;case X:return k=fr(k),gt(j,k,tt)}if(dt(k)||st(k))return k=sr(k,j.mode,tt,null),k.return=j,k;if(typeof k.then=="function")return gt(j,Al(k),tt);if(k.$$typeof===U)return gt(j,xl(j,k),tt);Rl(j,k)}return null}function at(j,k,tt,mt){var te=k!==null?k.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return te!==null?null:A(j,k,""+tt,mt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case M:return tt.key===te?I(j,k,tt,mt):null;case T:return tt.key===te?et(j,k,tt,mt):null;case X:return tt=fr(tt),at(j,k,tt,mt)}if(dt(tt)||st(tt))return te!==null?null:ht(j,k,tt,mt,null);if(typeof tt.then=="function")return at(j,k,Al(tt),mt);if(tt.$$typeof===U)return at(j,k,xl(j,tt),mt);Rl(j,tt)}return null}function ct(j,k,tt,mt,te){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return j=j.get(tt)||null,A(k,j,""+mt,te);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case M:return j=j.get(mt.key===null?tt:mt.key)||null,I(k,j,mt,te);case T:return j=j.get(mt.key===null?tt:mt.key)||null,et(k,j,mt,te);case X:return mt=fr(mt),ct(j,k,tt,mt,te)}if(dt(mt)||st(mt))return j=j.get(tt)||null,ht(k,j,mt,te,null);if(typeof mt.then=="function")return ct(j,k,tt,Al(mt),te);if(mt.$$typeof===U)return ct(j,k,tt,xl(k,mt),te);Rl(k,mt)}return null}function Gt(j,k,tt,mt){for(var te=null,Ce=null,Xt=k,ue=k=0,Ee=null;Xt!==null&&ue<tt.length;ue++){Xt.index>ue?(Ee=Xt,Xt=null):Ee=Xt.sibling;var De=at(j,Xt,tt[ue],mt);if(De===null){Xt===null&&(Xt=Ee);break}e&&Xt&&De.alternate===null&&n(j,Xt),k=h(De,k,ue),Ce===null?te=De:Ce.sibling=De,Ce=De,Xt=Ee}if(ue===tt.length)return r(j,Xt),Te&&Yi(j,ue),te;if(Xt===null){for(;ue<tt.length;ue++)Xt=gt(j,tt[ue],mt),Xt!==null&&(k=h(Xt,k,ue),Ce===null?te=Xt:Ce.sibling=Xt,Ce=Xt);return Te&&Yi(j,ue),te}for(Xt=o(Xt);ue<tt.length;ue++)Ee=ct(Xt,j,ue,tt[ue],mt),Ee!==null&&(e&&Ee.alternate!==null&&Xt.delete(Ee.key===null?ue:Ee.key),k=h(Ee,k,ue),Ce===null?te=Ee:Ce.sibling=Ee,Ce=Ee);return e&&Xt.forEach(function(Ha){return n(j,Ha)}),Te&&Yi(j,ue),te}function ne(j,k,tt,mt){if(tt==null)throw Error(a(151));for(var te=null,Ce=null,Xt=k,ue=k=0,Ee=null,De=tt.next();Xt!==null&&!De.done;ue++,De=tt.next()){Xt.index>ue?(Ee=Xt,Xt=null):Ee=Xt.sibling;var Ha=at(j,Xt,De.value,mt);if(Ha===null){Xt===null&&(Xt=Ee);break}e&&Xt&&Ha.alternate===null&&n(j,Xt),k=h(Ha,k,ue),Ce===null?te=Ha:Ce.sibling=Ha,Ce=Ha,Xt=Ee}if(De.done)return r(j,Xt),Te&&Yi(j,ue),te;if(Xt===null){for(;!De.done;ue++,De=tt.next())De=gt(j,De.value,mt),De!==null&&(k=h(De,k,ue),Ce===null?te=De:Ce.sibling=De,Ce=De);return Te&&Yi(j,ue),te}for(Xt=o(Xt);!De.done;ue++,De=tt.next())De=ct(Xt,j,ue,De.value,mt),De!==null&&(e&&De.alternate!==null&&Xt.delete(De.key===null?ue:De.key),k=h(De,k,ue),Ce===null?te=De:Ce.sibling=De,Ce=De);return e&&Xt.forEach(function(qS){return n(j,qS)}),Te&&Yi(j,ue),te}function Ge(j,k,tt,mt){if(typeof tt=="object"&&tt!==null&&tt.type===E&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case M:t:{for(var te=tt.key;k!==null;){if(k.key===te){if(te=tt.type,te===E){if(k.tag===7){r(j,k.sibling),mt=u(k,tt.props.children),mt.return=j,j=mt;break t}}else if(k.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===X&&fr(te)===k.type){r(j,k.sibling),mt=u(k,tt.props),lo(mt,tt),mt.return=j,j=mt;break t}r(j,k);break}else n(j,k);k=k.sibling}tt.type===E?(mt=sr(tt.props.children,j.mode,mt,tt.key),mt.return=j,j=mt):(mt=yl(tt.type,tt.key,tt.props,null,j.mode,mt),lo(mt,tt),mt.return=j,j=mt)}return y(j);case T:t:{for(te=tt.key;k!==null;){if(k.key===te)if(k.tag===4&&k.stateNode.containerInfo===tt.containerInfo&&k.stateNode.implementation===tt.implementation){r(j,k.sibling),mt=u(k,tt.children||[]),mt.return=j,j=mt;break t}else{r(j,k);break}else n(j,k);k=k.sibling}mt=wu(tt,j.mode,mt),mt.return=j,j=mt}return y(j);case X:return tt=fr(tt),Ge(j,k,tt,mt)}if(dt(tt))return Gt(j,k,tt,mt);if(st(tt)){if(te=st(tt),typeof te!="function")throw Error(a(150));return tt=te.call(tt),ne(j,k,tt,mt)}if(typeof tt.then=="function")return Ge(j,k,Al(tt),mt);if(tt.$$typeof===U)return Ge(j,k,xl(j,tt),mt);Rl(j,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,k!==null&&k.tag===6?(r(j,k.sibling),mt=u(k,tt),mt.return=j,j=mt):(r(j,k),mt=Ru(tt,j.mode,mt),mt.return=j,j=mt),y(j)):r(j,k)}return function(j,k,tt,mt){try{oo=0;var te=Ge(j,k,tt,mt);return Qr=null,te}catch(Xt){if(Xt===Kr||Xt===bl)throw Xt;var Ce=Jn(29,Xt,null,j.mode);return Ce.lanes=mt,Ce.return=j,Ce}}}var dr=im(!0),am=im(!1),Ea=!1;function Hu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ta(e,n,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Le&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=vl(e),Gp(e,null,r),n}return _l(e,o,n,r),vl(e)}function co(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,r|=o,n.lanes=r,Ui(e,r)}}function Vu(e,n){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var u=null,h=null;if(r=r.firstBaseUpdate,r!==null){do{var y={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};h===null?u=h=y:h=h.next=y,r=r.next}while(r!==null);h===null?u=h=n:h=h.next=n}else u=h=n;r={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}var ku=!1;function uo(){if(ku){var e=jr;if(e!==null)throw e}}function fo(e,n,r,o){ku=!1;var u=e.updateQueue;Ea=!1;var h=u.firstBaseUpdate,y=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var I=A,et=I.next;I.next=null,y===null?h=et:y.next=et,y=I;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,A=ht.lastBaseUpdate,A!==y&&(A===null?ht.firstBaseUpdate=et:A.next=et,ht.lastBaseUpdate=I))}if(h!==null){var gt=u.baseState;y=0,ht=et=I=null,A=h;do{var at=A.lane&-536870913,ct=at!==A.lane;if(ct?(xe&at)===at:(o&at)===at){at!==0&&at===Zr&&(ku=!0),ht!==null&&(ht=ht.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Gt=e,ne=A;at=n;var Ge=r;switch(ne.tag){case 1:if(Gt=ne.payload,typeof Gt=="function"){gt=Gt.call(Ge,gt,at);break t}gt=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=ne.payload,at=typeof Gt=="function"?Gt.call(Ge,gt,at):Gt,at==null)break t;gt=_({},gt,at);break t;case 2:Ea=!0}}at=A.callback,at!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[at]:ct.push(at))}else ct={lane:at,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ht===null?(et=ht=ct,I=gt):ht=ht.next=ct,y|=at;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ct=A,A=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);ht===null&&(I=gt),u.baseState=I,u.firstBaseUpdate=et,u.lastBaseUpdate=ht,h===null&&(u.shared.lanes=0),Da|=y,e.lanes=y,e.memoizedState=gt}}function rm(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function sm(e,n){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)rm(r[e],n)}var Jr=N(null),wl=N(0);function om(e,n){e=aa,Mt(wl,e),Mt(Jr,n),aa=e|n.baseLanes}function Xu(){Mt(wl,aa),Mt(Jr,Jr.current)}function Wu(){aa=wl.current,it(Jr),it(wl)}var $n=N(null),pi=null;function Aa(e){var n=e.alternate;Mt(sn,sn.current&1),Mt($n,e),pi===null&&(n===null||Jr.current!==null||n.memoizedState!==null)&&(pi=e)}function qu(e){Mt(sn,sn.current),Mt($n,e),pi===null&&(pi=e)}function lm(e){e.tag===22?(Mt(sn,sn.current),Mt($n,e),pi===null&&(pi=e)):Ra()}function Ra(){Mt(sn,sn.current),Mt($n,$n.current)}function ti(e){it($n),pi===e&&(pi=null),it(sn)}var sn=N(0);function Cl(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||$f(r)||th(r)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ki=0,ce=null,Fe=null,un=null,Dl=!1,$r=!1,pr=!1,Ul=0,ho=0,ts=null,zy=0;function nn(){throw Error(a(321))}function Yu(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!Qn(e[r],n[r]))return!1;return!0}function Zu(e,n,r,o,u,h){return Ki=h,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?Wm:uf,pr=!1,h=r(o,u),pr=!1,$r&&(h=um(n,r,o,u)),cm(e),h}function cm(e){P.H=go;var n=Fe!==null&&Fe.next!==null;if(Ki=0,un=Fe=ce=null,Dl=!1,ho=0,ts=null,n)throw Error(a(300));e===null||fn||(e=e.dependencies,e!==null&&Ml(e)&&(fn=!0))}function um(e,n,r,o){ce=e;var u=0;do{if($r&&(ts=null),ho=0,$r=!1,25<=u)throw Error(a(301));if(u+=1,un=Fe=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}P.H=qm,h=n(r,o)}while($r);return h}function By(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?po(n):n,e=e.useState()[0],(Fe!==null?Fe.memoizedState:null)!==e&&(ce.flags|=1024),n}function ju(){var e=Ul!==0;return Ul=0,e}function Ku(e,n,r){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r}function Qu(e){if(Dl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Dl=!1}Ki=0,un=Fe=ce=null,$r=!1,ho=Ul=0,ts=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?ce.memoizedState=un=e:un=un.next=e,un}function on(){if(Fe===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var n=un===null?ce.memoizedState:un.next;if(n!==null)un=n,Fe=e;else{if(e===null)throw ce.alternate===null?Error(a(467)):Error(a(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},un===null?ce.memoizedState=un=e:un=un.next=e}return un}function Ll(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function po(e){var n=ho;return ho+=1,ts===null&&(ts=[]),e=tm(ts,e,n),n=ce,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Wm:uf),e}function Nl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return po(e);if(e.$$typeof===U)return Rn(e)}throw Error(a(438,String(e)))}function Ju(e){var n=null,r=ce.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=ce.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=Ll(),ce.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(e),o=0;o<e;o++)r[o]=D;return n.index++,r}function Qi(e,n){return typeof n=="function"?n(e):n}function Ol(e){var n=on();return $u(n,Fe,e)}function $u(e,n,r){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=r;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var y=u.next;u.next=h.next,h.next=y}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var A=y=null,I=null,et=n,ht=!1;do{var gt=et.lane&-536870913;if(gt!==et.lane?(xe&gt)===gt:(Ki&gt)===gt){var at=et.revertLane;if(at===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),gt===Zr&&(ht=!0);else if((Ki&at)===at){et=et.next,at===Zr&&(ht=!0);continue}else gt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},I===null?(A=I=gt,y=h):I=I.next=gt,ce.lanes|=at,Da|=at;gt=et.action,pr&&r(h,gt),h=et.hasEagerState?et.eagerState:r(h,gt)}else at={lane:gt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},I===null?(A=I=at,y=h):I=I.next=at,ce.lanes|=gt,Da|=gt;et=et.next}while(et!==null&&et!==n);if(I===null?y=h:I.next=A,!Qn(h,e.memoizedState)&&(fn=!0,ht&&(r=jr,r!==null)))throw r;e.memoizedState=h,e.baseState=y,e.baseQueue=I,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function tf(e){var n=on(),r=n.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var o=r.dispatch,u=r.pending,h=n.memoizedState;if(u!==null){r.pending=null;var y=u=u.next;do h=e(h,y.action),y=y.next;while(y!==u);Qn(h,n.memoizedState)||(fn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),r.lastRenderedState=h}return[h,o]}function fm(e,n,r){var o=ce,u=on(),h=Te;if(h){if(r===void 0)throw Error(a(407));r=r()}else r=n();var y=!Qn((Fe||u).memoizedState,r);if(y&&(u.memoizedState=r,fn=!0),u=u.queue,af(pm.bind(null,o,u,e),[e]),u.getSnapshot!==n||y||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,es(9,{destroy:void 0},dm.bind(null,o,u,r,n),null),qe===null)throw Error(a(349));h||(Ki&127)!==0||hm(o,n,r)}return r}function hm(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=ce.updateQueue,n===null?(n=Ll(),ce.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function dm(e,n,r,o){n.value=r,n.getSnapshot=o,mm(n)&&gm(e)}function pm(e,n,r){return r(function(){mm(n)&&gm(e)})}function mm(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!Qn(e,r)}catch{return!0}}function gm(e){var n=rr(e,2);n!==null&&qn(n,e,2)}function ef(e){var n=Bn();if(typeof e=="function"){var r=e;if(e=r(),pr){Zt(!0);try{r()}finally{Zt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:e},n}function _m(e,n,r,o){return e.baseState=r,$u(e,Fe,typeof o=="function"?o:Qi)}function Iy(e,n,r,o,u){if(Bl(e))throw Error(a(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){h.listeners.push(y)}};P.T!==null?r(!0):h.isTransition=!1,o(h),r=n.pending,r===null?(h.next=n.pending=h,vm(n,h)):(h.next=r.next,n.pending=r.next=h)}}function vm(e,n){var r=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=P.T,y={};P.T=y;try{var A=r(u,o),I=P.S;I!==null&&I(y,A),ym(e,n,A)}catch(et){nf(e,n,et)}finally{h!==null&&y.types!==null&&(h.types=y.types),P.T=h}}else try{h=r(u,o),ym(e,n,h)}catch(et){nf(e,n,et)}}function ym(e,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){Sm(e,n,o)},function(o){return nf(e,n,o)}):Sm(e,n,r)}function Sm(e,n,r){n.status="fulfilled",n.value=r,Mm(n),e.state=r,n=e.pending,n!==null&&(r=n.next,r===n?e.pending=null:(r=r.next,n.next=r,vm(e,r)))}function nf(e,n,r){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,Mm(n),n=n.next;while(n!==o)}e.action=null}function Mm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function xm(e,n){return n}function Em(e,n){if(Te){var r=qe.formState;if(r!==null){t:{var o=ce;if(Te){if(Ze){e:{for(var u=Ze,h=di;u.nodeType!==8;){if(!h){u=null;break e}if(u=mi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Ze=mi(u.nextSibling),o=u.data==="F!";break t}}Ma(o)}o=!1}o&&(n=r[0])}}return r=Bn(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xm,lastRenderedState:n},r.queue=o,r=Vm.bind(null,ce,o),o.dispatch=r,o=ef(!1),h=cf.bind(null,ce,!1,o.queue),o=Bn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,r=Iy.bind(null,ce,u,h,r),u.dispatch=r,o.memoizedState=e,[n,r,!1]}function bm(e){var n=on();return Tm(n,Fe,e)}function Tm(e,n,r){if(n=$u(e,n,xm)[0],e=Ol(Qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=po(n)}catch(y){throw y===Kr?bl:y}else o=n;n=on();var u=n.queue,h=u.dispatch;return r!==n.memoizedState&&(ce.flags|=2048,es(9,{destroy:void 0},Fy.bind(null,u,r),null)),[o,h,e]}function Fy(e,n){e.action=n}function Am(e){var n=on(),r=Fe;if(r!==null)return Tm(n,r,e);on(),n=n.memoizedState,r=on();var o=r.queue.dispatch;return r.memoizedState=e,[n,o,!1]}function es(e,n,r,o){return e={tag:e,create:r,deps:o,inst:n,next:null},n=ce.updateQueue,n===null&&(n=Ll(),ce.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,n.lastEffect=e),e}function Rm(){return on().memoizedState}function Pl(e,n,r,o){var u=Bn();ce.flags|=e,u.memoizedState=es(1|n,{destroy:void 0},r,o===void 0?null:o)}function zl(e,n,r,o){var u=on();o=o===void 0?null:o;var h=u.memoizedState.inst;Fe!==null&&o!==null&&Yu(o,Fe.memoizedState.deps)?u.memoizedState=es(n,h,r,o):(ce.flags|=e,u.memoizedState=es(1|n,h,r,o))}function wm(e,n){Pl(8390656,8,e,n)}function af(e,n){zl(2048,8,e,n)}function Hy(e){ce.flags|=4;var n=ce.updateQueue;if(n===null)n=Ll(),ce.updateQueue=n,n.events=[e];else{var r=n.events;r===null?n.events=[e]:r.push(e)}}function Cm(e){var n=on().memoizedState;return Hy({ref:n,nextImpl:e}),function(){if((Le&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}function Dm(e,n){return zl(4,2,e,n)}function Um(e,n){return zl(4,4,e,n)}function Lm(e,n){if(typeof n=="function"){e=e();var r=n(e);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Nm(e,n,r){r=r!=null?r.concat([e]):null,zl(4,4,Lm.bind(null,n,e),r)}function rf(){}function Om(e,n){var r=on();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&Yu(n,o[1])?o[0]:(r.memoizedState=[e,n],e)}function Pm(e,n){var r=on();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&Yu(n,o[1]))return o[0];if(o=e(),pr){Zt(!0);try{e()}finally{Zt(!1)}}return r.memoizedState=[o,n],o}function sf(e,n,r){return r===void 0||(Ki&1073741824)!==0&&(xe&261930)===0?e.memoizedState=n:(e.memoizedState=r,e=z0(),ce.lanes|=e,Da|=e,r)}function zm(e,n,r,o){return Qn(r,n)?r:Jr.current!==null?(e=sf(e,r,o),Qn(e,n)||(fn=!0),e):(Ki&42)===0||(Ki&1073741824)!==0&&(xe&261930)===0?(fn=!0,e.memoizedState=r):(e=z0(),ce.lanes|=e,Da|=e,n)}function Bm(e,n,r,o,u){var h=K.p;K.p=h!==0&&8>h?h:8;var y=P.T,A={};P.T=A,cf(e,!1,n,r);try{var I=u(),et=P.S;if(et!==null&&et(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ht=Py(I,o);mo(e,n,ht,ii(e))}else mo(e,n,o,ii(e))}catch(gt){mo(e,n,{then:function(){},status:"rejected",reason:gt},ii())}finally{K.p=h,y!==null&&A.types!==null&&(y.types=A.types),P.T=y}}function Gy(){}function of(e,n,r,o){if(e.tag!==5)throw Error(a(476));var u=Im(e).queue;Bm(e,u,n,Y,r===null?Gy:function(){return Fm(e),r(o)})}function Im(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:Y},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:r},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Fm(e){var n=Im(e);n.next===null&&(n=e.alternate.memoizedState),mo(e,n.next.queue,{},ii())}function lf(){return Rn(Lo)}function Hm(){return on().memoizedState}function Gm(){return on().memoizedState}function Vy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var r=ii();e=ba(r);var o=Ta(n,e,r);o!==null&&(qn(o,n,r),co(o,n,r)),n={cache:zu()},e.payload=n;return}n=n.return}}function ky(e,n,r){var o=ii();r={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Bl(e)?km(n,r):(r=Tu(e,n,r,o),r!==null&&(qn(r,e,o),Xm(r,n,o)))}function Vm(e,n,r){var o=ii();mo(e,n,r,o)}function mo(e,n,r,o){var u={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Bl(e))km(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var y=n.lastRenderedState,A=h(y,r);if(u.hasEagerState=!0,u.eagerState=A,Qn(A,y))return _l(e,n,u,0),qe===null&&gl(),!1}catch{}if(r=Tu(e,n,u,o),r!==null)return qn(r,e,o),Xm(r,n,o),!0}return!1}function cf(e,n,r,o){if(o={lane:2,revertLane:Gf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Bl(e)){if(n)throw Error(a(479))}else n=Tu(e,r,o,2),n!==null&&qn(n,e,2)}function Bl(e){var n=e.alternate;return e===ce||n!==null&&n===ce}function km(e,n){$r=Dl=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function Xm(e,n,r){if((r&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,r|=o,n.lanes=r,Ui(e,r)}}var go={readContext:Rn,use:Nl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};go.useEffectEvent=nn;var Wm={readContext:Rn,use:Nl,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:wm,useImperativeHandle:function(e,n,r){r=r!=null?r.concat([e]):null,Pl(4194308,4,Lm.bind(null,n,e),r)},useLayoutEffect:function(e,n){return Pl(4194308,4,e,n)},useInsertionEffect:function(e,n){Pl(4,2,e,n)},useMemo:function(e,n){var r=Bn();n=n===void 0?null:n;var o=e();if(pr){Zt(!0);try{e()}finally{Zt(!1)}}return r.memoizedState=[o,n],o},useReducer:function(e,n,r){var o=Bn();if(r!==void 0){var u=r(n);if(pr){Zt(!0);try{r(n)}finally{Zt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=ky.bind(null,ce,e),[o.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=ef(e);var n=e.queue,r=Vm.bind(null,ce,n);return n.dispatch=r,[e.memoizedState,r]},useDebugValue:rf,useDeferredValue:function(e,n){var r=Bn();return sf(r,e,n)},useTransition:function(){var e=ef(!1);return e=Bm.bind(null,ce,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,r){var o=ce,u=Bn();if(Te){if(r===void 0)throw Error(a(407));r=r()}else{if(r=n(),qe===null)throw Error(a(349));(xe&127)!==0||hm(o,n,r)}u.memoizedState=r;var h={value:r,getSnapshot:n};return u.queue=h,wm(pm.bind(null,o,h,e),[e]),o.flags|=2048,es(9,{destroy:void 0},dm.bind(null,o,h,r,n),null),r},useId:function(){var e=Bn(),n=qe.identifierPrefix;if(Te){var r=Oi,o=Ni;r=(o&~(1<<32-Bt(o)-1)).toString(32)+r,n="_"+n+"R_"+r,r=Ul++,0<r&&(n+="H"+r.toString(32)),n+="_"}else r=zy++,n="_"+n+"r_"+r.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:lf,useFormState:Em,useActionState:Em,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=cf.bind(null,ce,!0,r),r.dispatch=n,[e,n]},useMemoCache:Ju,useCacheRefresh:function(){return Bn().memoizedState=Vy.bind(null,ce)},useEffectEvent:function(e){var n=Bn(),r={impl:e};return n.memoizedState=r,function(){if((Le&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},uf={readContext:Rn,use:Nl,useCallback:Om,useContext:Rn,useEffect:af,useImperativeHandle:Nm,useInsertionEffect:Dm,useLayoutEffect:Um,useMemo:Pm,useReducer:Ol,useRef:Rm,useState:function(){return Ol(Qi)},useDebugValue:rf,useDeferredValue:function(e,n){var r=on();return zm(r,Fe.memoizedState,e,n)},useTransition:function(){var e=Ol(Qi)[0],n=on().memoizedState;return[typeof e=="boolean"?e:po(e),n]},useSyncExternalStore:fm,useId:Hm,useHostTransitionStatus:lf,useFormState:bm,useActionState:bm,useOptimistic:function(e,n){var r=on();return _m(r,Fe,e,n)},useMemoCache:Ju,useCacheRefresh:Gm};uf.useEffectEvent=Cm;var qm={readContext:Rn,use:Nl,useCallback:Om,useContext:Rn,useEffect:af,useImperativeHandle:Nm,useInsertionEffect:Dm,useLayoutEffect:Um,useMemo:Pm,useReducer:tf,useRef:Rm,useState:function(){return tf(Qi)},useDebugValue:rf,useDeferredValue:function(e,n){var r=on();return Fe===null?sf(r,e,n):zm(r,Fe.memoizedState,e,n)},useTransition:function(){var e=tf(Qi)[0],n=on().memoizedState;return[typeof e=="boolean"?e:po(e),n]},useSyncExternalStore:fm,useId:Hm,useHostTransitionStatus:lf,useFormState:Am,useActionState:Am,useOptimistic:function(e,n){var r=on();return Fe!==null?_m(r,Fe,e,n):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Ju,useCacheRefresh:Gm};qm.useEffectEvent=Cm;function ff(e,n,r,o){n=e.memoizedState,r=r(o,n),r=r==null?n:_({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var hf={enqueueSetState:function(e,n,r){e=e._reactInternals;var o=ii(),u=ba(o);u.payload=n,r!=null&&(u.callback=r),n=Ta(e,u,o),n!==null&&(qn(n,e,o),co(n,e,o))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var o=ii(),u=ba(o);u.tag=1,u.payload=n,r!=null&&(u.callback=r),n=Ta(e,u,o),n!==null&&(qn(n,e,o),co(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=ii(),o=ba(r);o.tag=2,n!=null&&(o.callback=n),n=Ta(e,o,r),n!==null&&(qn(n,e,r),co(n,e,r))}};function Ym(e,n,r,o,u,h,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,y):n.prototype&&n.prototype.isPureReactComponent?!eo(r,o)||!eo(u,h):!0}function Zm(e,n,r,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==e&&hf.enqueueReplaceState(n,n.state,null)}function mr(e,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(e=e.defaultProps){r===n&&(r=_({},r));for(var u in e)r[u]===void 0&&(r[u]=e[u])}return r}function jm(e){ml(e)}function Km(e){console.error(e)}function Qm(e){ml(e)}function Il(e,n){try{var r=e.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Jm(e,n,r){try{var o=e.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function df(e,n,r){return r=ba(r),r.tag=3,r.payload={element:null},r.callback=function(){Il(e,n)},r}function $m(e){return e=ba(e),e.tag=3,e}function t0(e,n,r,o){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){Jm(n,r,o)}}var y=r.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){Jm(n,r,o),typeof u!="function"&&(Ua===null?Ua=new Set([this]):Ua.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function Xy(e,n,r,o,u){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&Yr(n,r,u,!0),r=$n.current,r!==null){switch(r.tag){case 31:case 13:return pi===null?Kl():r.alternate===null&&an===0&&(an=3),r.flags&=-257,r.flags|=65536,r.lanes=u,o===Tl?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),If(e,o,u)),!1;case 22:return r.flags|=65536,o===Tl?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),If(e,o,u)),!1}throw Error(a(435,r.tag))}return If(e,o,u),Kl(),!1}if(Te)return n=$n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Uu&&(e=Error(a(422),{cause:o}),ao(ui(e,r)))):(o!==Uu&&(n=Error(a(423),{cause:o}),ao(ui(n,r))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ui(o,r),u=df(e.stateNode,o,u),Vu(e,u),an!==4&&(an=2)),!1;var h=Error(a(520),{cause:o});if(h=ui(h,r),bo===null?bo=[h]:bo.push(h),an!==4&&(an=2),n===null)return!0;o=ui(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,e=u&-u,r.lanes|=e,e=df(r.stateNode,o,e),Vu(r,e),!1;case 1:if(n=r.type,h=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ua===null||!Ua.has(h))))return r.flags|=65536,u&=-u,r.lanes|=u,u=$m(u),t0(u,e,r,o),Vu(r,u),!1}r=r.return}while(r!==null);return!1}var pf=Error(a(461)),fn=!1;function wn(e,n,r,o){n.child=e===null?am(n,null,r,o):dr(n,e.child,r,o)}function e0(e,n,r,o,u){r=r.render;var h=n.ref;if("ref"in o){var y={};for(var A in o)A!=="ref"&&(y[A]=o[A])}else y=o;return cr(n),o=Zu(e,n,r,y,h,u),A=ju(),e!==null&&!fn?(Ku(e,n,u),Ji(e,n,u)):(Te&&A&&Cu(n),n.flags|=1,wn(e,n,o,u),n.child)}function n0(e,n,r,o,u){if(e===null){var h=r.type;return typeof h=="function"&&!Au(h)&&h.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=h,i0(e,n,h,o,u)):(e=yl(r.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!xf(e,u)){var y=h.memoizedProps;if(r=r.compare,r=r!==null?r:eo,r(y,o)&&e.ref===n.ref)return Ji(e,n,u)}return n.flags|=1,e=qi(h,o),e.ref=n.ref,e.return=n,n.child=e}function i0(e,n,r,o,u){if(e!==null){var h=e.memoizedProps;if(eo(h,o)&&e.ref===n.ref)if(fn=!1,n.pendingProps=o=h,xf(e,u))(e.flags&131072)!==0&&(fn=!0);else return n.lanes=e.lanes,Ji(e,n,u)}return mf(e,n,r,o,u)}function a0(e,n,r,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|r:r,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return r0(e,n,h,r,o)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&El(n,h!==null?h.cachePool:null),h!==null?om(n,h):Xu(),lm(n);else return o=n.lanes=536870912,r0(e,n,h!==null?h.baseLanes|r:r,r,o)}else h!==null?(El(n,h.cachePool),om(n,h),Ra(),n.memoizedState=null):(e!==null&&El(n,null),Xu(),Ra());return wn(e,n,u,r),n.child}function _o(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function r0(e,n,r,o,u){var h=Iu();return h=h===null?null:{parent:cn._currentValue,pool:h},n.memoizedState={baseLanes:r,cachePool:h},e!==null&&El(n,null),Xu(),lm(n),e!==null&&Yr(e,n,o,!0),n.childLanes=u,null}function Fl(e,n){return n=Gl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function s0(e,n,r){return dr(n,e.child,null,r),e=Fl(n,n.pendingProps),e.flags|=2,ti(n),n.memoizedState=null,e}function Wy(e,n,r){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Te){if(o.mode==="hidden")return e=Fl(n,o),n.lanes=536870912,_o(null,e);if(qu(n),(e=Ze)?(e=vg(e,di),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ya!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},r=kp(e),r.return=n,n.child=r,An=n,Ze=null)):e=null,e===null)throw Ma(n);return n.lanes=536870912,null}return Fl(n,o)}var h=e.memoizedState;if(h!==null){var y=h.dehydrated;if(qu(n),u)if(n.flags&256)n.flags&=-257,n=s0(e,n,r);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(a(558));else if(fn||Yr(e,n,r,!1),u=(r&e.childLanes)!==0,fn||u){if(o=qe,o!==null&&(y=Lr(o,r),y!==0&&y!==h.retryLane))throw h.retryLane=y,rr(e,y),qn(o,e,y),pf;Kl(),n=s0(e,n,r)}else e=h.treeContext,Ze=mi(y.nextSibling),An=n,Te=!0,Sa=null,di=!1,e!==null&&qp(n,e),n=Fl(n,o),n.flags|=4096;return n}return e=qi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Hl(e,n){var r=n.ref;if(r===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(n.flags|=4194816)}}function mf(e,n,r,o,u){return cr(n),r=Zu(e,n,r,o,void 0,u),o=ju(),e!==null&&!fn?(Ku(e,n,u),Ji(e,n,u)):(Te&&o&&Cu(n),n.flags|=1,wn(e,n,r,u),n.child)}function o0(e,n,r,o,u,h){return cr(n),n.updateQueue=null,r=um(n,o,r,u),cm(e),o=ju(),e!==null&&!fn?(Ku(e,n,h),Ji(e,n,h)):(Te&&o&&Cu(n),n.flags|=1,wn(e,n,r,h),n.child)}function l0(e,n,r,o,u){if(cr(n),n.stateNode===null){var h=kr,y=r.contextType;typeof y=="object"&&y!==null&&(h=Rn(y)),h=new r(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=hf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Hu(n),y=r.contextType,h.context=typeof y=="object"&&y!==null?Rn(y):kr,h.state=n.memoizedState,y=r.getDerivedStateFromProps,typeof y=="function"&&(ff(n,r,y,o),h.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(y=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),y!==h.state&&hf.enqueueReplaceState(h,h.state,null),fo(n,o,h,u),uo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var A=n.memoizedProps,I=mr(r,A);h.props=I;var et=h.context,ht=r.contextType;y=kr,typeof ht=="object"&&ht!==null&&(y=Rn(ht));var gt=r.getDerivedStateFromProps;ht=typeof gt=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ht||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||et!==y)&&Zm(n,h,o,y),Ea=!1;var at=n.memoizedState;h.state=at,fo(n,o,h,u),uo(),et=n.memoizedState,A||at!==et||Ea?(typeof gt=="function"&&(ff(n,r,gt,o),et=n.memoizedState),(I=Ea||Ym(n,r,I,o,at,et,y))?(ht||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=et),h.props=o,h.state=et,h.context=y,o=I):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,Gu(e,n),y=n.memoizedProps,ht=mr(r,y),h.props=ht,gt=n.pendingProps,at=h.context,et=r.contextType,I=kr,typeof et=="object"&&et!==null&&(I=Rn(et)),A=r.getDerivedStateFromProps,(et=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==gt||at!==I)&&Zm(n,h,o,I),Ea=!1,at=n.memoizedState,h.state=at,fo(n,o,h,u),uo();var ct=n.memoizedState;y!==gt||at!==ct||Ea||e!==null&&e.dependencies!==null&&Ml(e.dependencies)?(typeof A=="function"&&(ff(n,r,A,o),ct=n.memoizedState),(ht=Ea||Ym(n,r,ht,o,at,ct,I)||e!==null&&e.dependencies!==null&&Ml(e.dependencies))?(et||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ct,I),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ct,I)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ct),h.props=o,h.state=ct,h.context=I,o=ht):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Hl(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=dr(n,e.child,null,u),n.child=dr(n,null,r,u)):wn(e,n,r,u),n.memoizedState=h.state,e=n.child):e=Ji(e,n,u),e}function c0(e,n,r,o){return or(),n.flags|=256,wn(e,n,r,o),n.child}var gf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _f(e){return{baseLanes:e,cachePool:Jp()}}function vf(e,n,r){return e=e!==null?e.childLanes&~r:0,n&&(e|=ni),e}function u0(e,n,r){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,y;if((y=h)||(y=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Te){if(u?Aa(n):Ra(),(e=Ze)?(e=vg(e,di),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ya!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},r=kp(e),r.return=n,n.child=r,An=n,Ze=null)):e=null,e===null)throw Ma(n);return th(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Ra(),u=n.mode,A=Gl({mode:"hidden",children:A},u),o=sr(o,u,r,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=_f(r),o.childLanes=vf(e,y,r),n.memoizedState=gf,_o(null,o)):(Aa(n),yf(n,A))}var I=e.memoizedState;if(I!==null&&(A=I.dehydrated,A!==null)){if(h)n.flags&256?(Aa(n),n.flags&=-257,n=Sf(e,n,r)):n.memoizedState!==null?(Ra(),n.child=e.child,n.flags|=128,n=null):(Ra(),A=o.fallback,u=n.mode,o=Gl({mode:"visible",children:o.children},u),A=sr(A,u,r,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,dr(n,e.child,null,r),o=n.child,o.memoizedState=_f(r),o.childLanes=vf(e,y,r),n.memoizedState=gf,n=_o(null,o));else if(Aa(n),th(A)){if(y=A.nextSibling&&A.nextSibling.dataset,y)var et=y.dgst;y=et,o=Error(a(419)),o.stack="",o.digest=y,ao({value:o,source:null,stack:null}),n=Sf(e,n,r)}else if(fn||Yr(e,n,r,!1),y=(r&e.childLanes)!==0,fn||y){if(y=qe,y!==null&&(o=Lr(y,r),o!==0&&o!==I.retryLane))throw I.retryLane=o,rr(e,o),qn(y,e,o),pf;$f(A)||Kl(),n=Sf(e,n,r)}else $f(A)?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,Ze=mi(A.nextSibling),An=n,Te=!0,Sa=null,di=!1,e!==null&&qp(n,e),n=yf(n,o.children),n.flags|=4096);return n}return u?(Ra(),A=o.fallback,u=n.mode,I=e.child,et=I.sibling,o=qi(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,et!==null?A=qi(et,A):(A=sr(A,u,r,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,_o(null,o),o=n.child,A=e.child.memoizedState,A===null?A=_f(r):(u=A.cachePool,u!==null?(I=cn._currentValue,u=u.parent!==I?{parent:I,pool:I}:u):u=Jp(),A={baseLanes:A.baseLanes|r,cachePool:u}),o.memoizedState=A,o.childLanes=vf(e,y,r),n.memoizedState=gf,_o(e.child,o)):(Aa(n),r=e.child,e=r.sibling,r=qi(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=r,n.memoizedState=null,r)}function yf(e,n){return n=Gl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Gl(e,n){return e=Jn(22,e,null,n),e.lanes=0,e}function Sf(e,n,r){return dr(n,e.child,null,r),e=yf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function f0(e,n,r){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Ou(e.return,n,r)}function Mf(e,n,r,o,u,h){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:u,treeForkCount:h}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=r,y.tailMode=u,y.treeForkCount=h)}function h0(e,n,r){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var y=sn.current,A=(y&2)!==0;if(A?(y=y&1|2,n.flags|=128):y&=1,Mt(sn,y),wn(e,n,o,r),o=Te?io:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&f0(e,r,n);else if(e.tag===19)f0(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(r=n.child,u=null;r!==null;)e=r.alternate,e!==null&&Cl(e)===null&&(u=r),r=r.sibling;r=u,r===null?(u=n.child,n.child=null):(u=r.sibling,r.sibling=null),Mf(n,!1,u,r,h,o);break;case"backwards":case"unstable_legacy-backwards":for(r=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Cl(e)===null){n.child=u;break}e=u.sibling,u.sibling=r,r=u,u=e}Mf(n,!0,r,null,h,o);break;case"together":Mf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Ji(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),Da|=n.lanes,(r&n.childLanes)===0)if(e!==null){if(Yr(e,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,r=qi(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=qi(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function xf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ml(e)))}function qy(e,n,r){switch(n.tag){case 3:At(n,n.stateNode.containerInfo),xa(n,cn,e.memoizedState.cache),or();break;case 27:case 5:jt(n);break;case 4:At(n,n.stateNode.containerInfo);break;case 10:xa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,qu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Aa(n),n.flags|=128,null):(r&n.child.childLanes)!==0?u0(e,n,r):(Aa(n),e=Ji(e,n,r),e!==null?e.sibling:null);Aa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(r&n.childLanes)!==0,o||(Yr(e,n,r,!1),o=(r&n.childLanes)!==0),u){if(o)return h0(e,n,r);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Mt(sn,sn.current),o)break;return null;case 22:return n.lanes=0,a0(e,n,r,n.pendingProps);case 24:xa(n,cn,e.memoizedState.cache)}return Ji(e,n,r)}function d0(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!xf(e,r)&&(n.flags&128)===0)return fn=!1,qy(e,n,r);fn=(e.flags&131072)!==0}else fn=!1,Te&&(n.flags&1048576)!==0&&Wp(n,io,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=fr(n.elementType),n.type=e,typeof e=="function")Au(e)?(o=mr(e,o),n.tag=1,n=l0(null,n,e,o,r)):(n.tag=0,n=mf(null,n,e,o,r));else{if(e!=null){var u=e.$$typeof;if(u===w){n.tag=11,n=e0(null,n,e,o,r);break t}else if(u===O){n.tag=14,n=n0(null,n,e,o,r);break t}}throw n=ut(e)||e,Error(a(306,n,""))}}return n;case 0:return mf(e,n,n.type,n.pendingProps,r);case 1:return o=n.type,u=mr(o,n.pendingProps),l0(e,n,o,u,r);case 3:t:{if(At(n,n.stateNode.containerInfo),e===null)throw Error(a(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,Gu(e,n),fo(n,o,null,r);var y=n.memoizedState;if(o=y.cache,xa(n,cn,o),o!==h.cache&&Pu(n,[cn],r,!0),uo(),o=y.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=c0(e,n,o,r);break t}else if(o!==u){u=ui(Error(a(424)),n),ao(u),n=c0(e,n,o,r);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ze=mi(e.firstChild),An=n,Te=!0,Sa=null,di=!0,r=am(n,null,o,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(or(),o===u){n=Ji(e,n,r);break t}wn(e,n,o,r)}n=n.child}return n;case 26:return Hl(e,n),e===null?(r=bg(n.type,null,n.pendingProps,null))?n.memoizedState=r:Te||(r=n.type,e=n.pendingProps,o=ic(_t.current).createElement(r),o[ln]=n,o[bn]=e,Cn(o,r,e),St(o),n.stateNode=o):n.memoizedState=bg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return jt(n),e===null&&Te&&(o=n.stateNode=Mg(n.type,n.pendingProps,_t.current),An=n,di=!0,u=Ze,Pa(n.type)?(eh=u,Ze=mi(o.firstChild)):Ze=u),wn(e,n,n.pendingProps.children,r),Hl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Te&&((u=o=Ze)&&(o=xS(o,n.type,n.pendingProps,di),o!==null?(n.stateNode=o,An=n,Ze=mi(o.firstChild),di=!1,u=!0):u=!1),u||Ma(n)),jt(n),u=n.type,h=n.pendingProps,y=e!==null?e.memoizedProps:null,o=h.children,Kf(u,h)?o=null:y!==null&&Kf(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=Zu(e,n,By,null,null,r),Lo._currentValue=u),Hl(e,n),wn(e,n,o,r),n.child;case 6:return e===null&&Te&&((e=r=Ze)&&(r=ES(r,n.pendingProps,di),r!==null?(n.stateNode=r,An=n,Ze=null,e=!0):e=!1),e||Ma(n)),null;case 13:return u0(e,n,r);case 4:return At(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=dr(n,null,o,r):wn(e,n,o,r),n.child;case 11:return e0(e,n,n.type,n.pendingProps,r);case 7:return wn(e,n,n.pendingProps,r),n.child;case 8:return wn(e,n,n.pendingProps.children,r),n.child;case 12:return wn(e,n,n.pendingProps.children,r),n.child;case 10:return o=n.pendingProps,xa(n,n.type,o.value),wn(e,n,o.children,r),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,cr(n),u=Rn(u),o=o(u),n.flags|=1,wn(e,n,o,r),n.child;case 14:return n0(e,n,n.type,n.pendingProps,r);case 15:return i0(e,n,n.type,n.pendingProps,r);case 19:return h0(e,n,r);case 31:return Wy(e,n,r);case 22:return a0(e,n,r,n.pendingProps);case 24:return cr(n),o=Rn(cn),e===null?(u=Iu(),u===null&&(u=qe,h=zu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=r),u=h),n.memoizedState={parent:o,cache:u},Hu(n),xa(n,cn,u)):((e.lanes&r)!==0&&(Gu(e,n),fo(n,null,null,r),uo()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),xa(n,cn,o)):(o=h.cache,xa(n,cn,o),o!==u.cache&&Pu(n,[cn],r,!0))),wn(e,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function $i(e){e.flags|=4}function Ef(e,n,r,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(H0())e.flags|=8192;else throw hr=Tl,Fu}else e.flags&=-16777217}function p0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Cg(n))if(H0())e.flags|=8192;else throw hr=Tl,Fu}function Vl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Pe():536870912,e.lanes|=n,rs|=n)}function vo(e,n){if(!Te)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function je(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(n)for(var u=e.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=r,n}function Yy(e,n,r){var o=n.pendingProps;switch(Du(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return je(n),null;case 3:return r=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ji(cn),Tt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(qr(n)?$i(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Lu())),je(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?($i(n),h!==null?(je(n),p0(n,h)):(je(n),Ef(n,u,null,o,r))):h?h!==e.memoizedState?($i(n),je(n),p0(n,h)):(je(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&$i(n),je(n),Ef(n,u,e,o,r)),null;case 27:if(Ie(n),r=_t.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&$i(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return je(n),null}e=Ct.current,qr(n)?Yp(n):(e=Mg(u,o,r),n.stateNode=e,$i(n))}return je(n),null;case 5:if(Ie(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&$i(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return je(n),null}if(h=Ct.current,qr(n))Yp(n);else{var y=ic(_t.current);switch(h){case 1:h=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=y.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}h[ln]=n,h[bn]=o;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)h.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=h;t:switch(Cn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&$i(n)}}return je(n),Ef(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,r),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&$i(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(a(166));if(e=_t.current,qr(n)){if(e=n.stateNode,r=n.memoizedProps,o=null,u=An,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[ln]=n,e=!!(e.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||ug(e.nodeValue,r)),e||Ma(n,!0)}else e=ic(e).createTextNode(o),e[ln]=n,n.stateNode=e}return je(n),null;case 31:if(r=n.memoizedState,e===null||e.memoizedState!==null){if(o=qr(n),r!==null){if(e===null){if(!o)throw Error(a(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[ln]=n}else or(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),e=!1}else r=Lu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(a(558))}return je(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=qr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(a(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[ln]=n}else or(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),u=!1}else u=Lu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=r,n):(r=o!==null,e=e!==null&&e.memoizedState!==null,r&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),r!==e&&r&&(n.child.flags|=8192),Vl(n,n.updateQueue),je(n),null);case 4:return Tt(),e===null&&Wf(n.stateNode.containerInfo),je(n),null;case 10:return ji(n.type),je(n),null;case 19:if(it(sn),o=n.memoizedState,o===null)return je(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)vo(o,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Cl(e),h!==null){for(n.flags|=128,vo(o,!1),e=h.updateQueue,n.updateQueue=e,Vl(n,e),n.subtreeFlags=0,e=r,r=n.child;r!==null;)Vp(r,e),r=r.sibling;return Mt(sn,sn.current&1|2),Te&&Yi(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&b()>Yl&&(n.flags|=128,u=!0,vo(o,!1),n.lanes=4194304)}else{if(!u)if(e=Cl(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Vl(n,e),vo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Te)return je(n),null}else 2*b()-o.renderingStartTime>Yl&&r!==536870912&&(n.flags|=128,u=!0,vo(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=b(),e.sibling=null,r=sn.current,Mt(sn,u?r&1|2:r&1),Te&&Yi(n,o.treeForkCount),e):(je(n),null);case 22:case 23:return ti(n),Wu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),r=n.updateQueue,r!==null&&Vl(n,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),e!==null&&it(ur),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ji(cn),je(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function Zy(e,n){switch(Du(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ji(cn),Tt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ie(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(a(340));or()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ti(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));or()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return it(sn),null;case 4:return Tt(),null;case 10:return ji(n.type),null;case 22:case 23:return ti(n),Wu(),e!==null&&it(ur),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ji(cn),null;case 25:return null;default:return null}}function m0(e,n){switch(Du(n),n.tag){case 3:ji(cn),Tt();break;case 26:case 27:case 5:Ie(n);break;case 4:Tt();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:it(sn);break;case 10:ji(n.type);break;case 22:case 23:ti(n),Wu(),e!==null&&it(ur);break;case 24:ji(cn)}}function yo(e,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var u=o.next;r=u;do{if((r.tag&e)===e){o=void 0;var h=r.create,y=r.inst;o=h(),y.destroy=o}r=r.next}while(r!==u)}}catch(A){Be(n,n.return,A)}}function wa(e,n,r){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var y=o.inst,A=y.destroy;if(A!==void 0){y.destroy=void 0,u=n;var I=r,et=A;try{et()}catch(ht){Be(u,I,ht)}}}o=o.next}while(o!==h)}}catch(ht){Be(n,n.return,ht)}}function g0(e){var n=e.updateQueue;if(n!==null){var r=e.stateNode;try{sm(n,r)}catch(o){Be(e,e.return,o)}}}function _0(e,n,r){r.props=mr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(o){Be(e,n,o)}}function So(e,n){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof r=="function"?e.refCleanup=r(o):r.current=o}}catch(u){Be(e,n,u)}}function Pi(e,n){var r=e.ref,o=e.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(u){Be(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){Be(e,n,u)}else r.current=null}function v0(e){var n=e.type,r=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break t;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(u){Be(e,e.return,u)}}function bf(e,n,r){try{var o=e.stateNode;gS(o,e.type,r,n),o[bn]=n}catch(u){Be(e,e.return,u)}}function y0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Pa(e.type)||e.tag===4}function Tf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||y0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Pa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Af(e,n,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(e),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Xi));else if(o!==4&&(o===27&&Pa(e.type)&&(r=e.stateNode,n=null),e=e.child,e!==null))for(Af(e,n,r),e=e.sibling;e!==null;)Af(e,n,r),e=e.sibling}function kl(e,n,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(o!==4&&(o===27&&Pa(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(kl(e,n,r),e=e.sibling;e!==null;)kl(e,n,r),e=e.sibling}function S0(e){var n=e.stateNode,r=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,o,r),n[ln]=e,n[bn]=r}catch(h){Be(e,e.return,h)}}var ta=!1,hn=!1,Rf=!1,M0=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function jy(e,n){if(e=e.containerInfo,Zf=uc,e=Np(e),yu(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{r.nodeType,h.nodeType}catch{r=null;break t}var y=0,A=-1,I=-1,et=0,ht=0,gt=e,at=null;e:for(;;){for(var ct;gt!==r||u!==0&&gt.nodeType!==3||(A=y+u),gt!==h||o!==0&&gt.nodeType!==3||(I=y+o),gt.nodeType===3&&(y+=gt.nodeValue.length),(ct=gt.firstChild)!==null;)at=gt,gt=ct;for(;;){if(gt===e)break e;if(at===r&&++et===u&&(A=y),at===h&&++ht===o&&(I=y),(ct=gt.nextSibling)!==null)break;gt=at,at=gt.parentNode}gt=ct}r=A===-1||I===-1?null:{start:A,end:I}}else r=null}r=r||{start:0,end:0}}else r=null;for(jf={focusedElem:e,selectionRange:r},uc=!1,Mn=n;Mn!==null;)if(n=Mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Mn=e;else for(;Mn!==null;){switch(n=Mn,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)u=e[r],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,r=n,u=h.memoizedProps,h=h.memoizedState,o=r.stateNode;try{var Gt=mr(r.type,u);e=o.getSnapshotBeforeUpdate(Gt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(ne){Be(r,r.return,ne)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,r=e.nodeType,r===9)Jf(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Jf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,Mn=e;break}Mn=n.return}}function x0(e,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:na(e,r),o&4&&yo(5,r);break;case 1:if(na(e,r),o&4)if(e=r.stateNode,n===null)try{e.componentDidMount()}catch(y){Be(r,r.return,y)}else{var u=mr(r.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Be(r,r.return,y)}}o&64&&g0(r),o&512&&So(r,r.return);break;case 3:if(na(e,r),o&64&&(e=r.updateQueue,e!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{sm(e,n)}catch(y){Be(r,r.return,y)}}break;case 27:n===null&&o&4&&S0(r);case 26:case 5:na(e,r),n===null&&o&4&&v0(r),o&512&&So(r,r.return);break;case 12:na(e,r);break;case 31:na(e,r),o&4&&T0(e,r);break;case 13:na(e,r),o&4&&A0(e,r),o&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=aS.bind(null,r),bS(e,r))));break;case 22:if(o=r.memoizedState!==null||ta,!o){n=n!==null&&n.memoizedState!==null||hn,u=ta;var h=hn;ta=o,(hn=n)&&!h?ia(e,r,(r.subtreeFlags&8772)!==0):na(e,r),ta=u,hn=h}break;case 30:break;default:na(e,r)}}function E0(e){var n=e.alternate;n!==null&&(e.alternate=null,E0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&R(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,Vn=!1;function ea(e,n,r){for(r=r.child;r!==null;)b0(e,n,r),r=r.sibling}function b0(e,n,r){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(Rt,r)}catch{}switch(r.tag){case 26:hn||Pi(r,n),ea(e,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:hn||Pi(r,n);var o=Qe,u=Vn;Pa(r.type)&&(Qe=r.stateNode,Vn=!1),ea(e,n,r),Co(r.stateNode),Qe=o,Vn=u;break;case 5:hn||Pi(r,n);case 6:if(o=Qe,u=Vn,Qe=null,ea(e,n,r),Qe=o,Vn=u,Qe!==null)if(Vn)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(r.stateNode)}catch(h){Be(r,n,h)}else try{Qe.removeChild(r.stateNode)}catch(h){Be(r,n,h)}break;case 18:Qe!==null&&(Vn?(e=Qe,gg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),ds(e)):gg(Qe,r.stateNode));break;case 4:o=Qe,u=Vn,Qe=r.stateNode.containerInfo,Vn=!0,ea(e,n,r),Qe=o,Vn=u;break;case 0:case 11:case 14:case 15:wa(2,r,n),hn||wa(4,r,n),ea(e,n,r);break;case 1:hn||(Pi(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&_0(r,n,o)),ea(e,n,r);break;case 21:ea(e,n,r);break;case 22:hn=(o=hn)||r.memoizedState!==null,ea(e,n,r),hn=o;break;default:ea(e,n,r)}}function T0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ds(e)}catch(r){Be(n,n.return,r)}}}function A0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ds(e)}catch(r){Be(n,n.return,r)}}function Ky(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new M0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new M0),n;default:throw Error(a(435,e.tag))}}function Xl(e,n){var r=Ky(e);n.forEach(function(o){if(!r.has(o)){r.add(o);var u=rS.bind(null,e,o);o.then(u,u)}})}function kn(e,n){var r=n.deletions;if(r!==null)for(var o=0;o<r.length;o++){var u=r[o],h=e,y=n,A=y;t:for(;A!==null;){switch(A.tag){case 27:if(Pa(A.type)){Qe=A.stateNode,Vn=!1;break t}break;case 5:Qe=A.stateNode,Vn=!1;break t;case 3:case 4:Qe=A.stateNode.containerInfo,Vn=!0;break t}A=A.return}if(Qe===null)throw Error(a(160));b0(h,y,u),Qe=null,Vn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)R0(n,e),n=n.sibling}var Ei=null;function R0(e,n){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:kn(n,e),Xn(e),o&4&&(wa(3,e,e.return),yo(3,e),wa(5,e,e.return));break;case 1:kn(n,e),Xn(e),o&512&&(hn||r===null||Pi(r,r.return)),o&64&&ta&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var u=Ei;if(kn(n,e),Xn(e),o&512&&(hn||r===null||Pi(r,r.return)),o&4){var h=r!==null?r.memoizedState:null;if(o=e.memoizedState,r===null)if(o===null)if(e.stateNode===null){t:{o=e.type,r=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[tr]||h[ln]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Cn(h,o,r),h[ln]=e,St(h),o=h;break t;case"link":var y=Rg("link","href",u).get(o+(r.href||""));if(y){for(var A=0;A<y.length;A++)if(h=y[A],h.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&h.getAttribute("rel")===(r.rel==null?null:r.rel)&&h.getAttribute("title")===(r.title==null?null:r.title)&&h.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){y.splice(A,1);break e}}h=u.createElement(o),Cn(h,o,r),u.head.appendChild(h);break;case"meta":if(y=Rg("meta","content",u).get(o+(r.content||""))){for(A=0;A<y.length;A++)if(h=y[A],h.getAttribute("content")===(r.content==null?null:""+r.content)&&h.getAttribute("name")===(r.name==null?null:r.name)&&h.getAttribute("property")===(r.property==null?null:r.property)&&h.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&h.getAttribute("charset")===(r.charSet==null?null:r.charSet)){y.splice(A,1);break e}}h=u.createElement(o),Cn(h,o,r),u.head.appendChild(h);break;default:throw Error(a(468,o))}h[ln]=e,St(h),o=h}e.stateNode=o}else wg(u,e.type,e.stateNode);else e.stateNode=Ag(u,o,e.memoizedProps);else h!==o?(h===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):h.count--,o===null?wg(u,e.type,e.stateNode):Ag(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&bf(e,e.memoizedProps,r.memoizedProps)}break;case 27:kn(n,e),Xn(e),o&512&&(hn||r===null||Pi(r,r.return)),r!==null&&o&4&&bf(e,e.memoizedProps,r.memoizedProps);break;case 5:if(kn(n,e),Xn(e),o&512&&(hn||r===null||Pi(r,r.return)),e.flags&32){u=e.stateNode;try{zr(u,"")}catch(Gt){Be(e,e.return,Gt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,bf(e,u,r!==null?r.memoizedProps:u)),o&1024&&(Rf=!0);break;case 6:if(kn(n,e),Xn(e),o&4){if(e.stateNode===null)throw Error(a(162));o=e.memoizedProps,r=e.stateNode;try{r.nodeValue=o}catch(Gt){Be(e,e.return,Gt)}}break;case 3:if(sc=null,u=Ei,Ei=ac(n.containerInfo),kn(n,e),Ei=u,Xn(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{ds(n.containerInfo)}catch(Gt){Be(e,e.return,Gt)}Rf&&(Rf=!1,w0(e));break;case 4:o=Ei,Ei=ac(e.stateNode.containerInfo),kn(n,e),Xn(e),Ei=o;break;case 12:kn(n,e),Xn(e);break;case 31:kn(n,e),Xn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Xl(e,o)));break;case 13:kn(n,e),Xn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(ql=b()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Xl(e,o)));break;case 22:u=e.memoizedState!==null;var I=r!==null&&r.memoizedState!==null,et=ta,ht=hn;if(ta=et||u,hn=ht||I,kn(n,e),hn=ht,ta=et,Xn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(r===null||I||ta||hn||gr(e)),r=null,n=e;;){if(n.tag===5||n.tag===26){if(r===null){I=r=n;try{if(h=I.stateNode,u)y=h.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{A=I.stateNode;var gt=I.memoizedProps.style,at=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;A.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(Gt){Be(I,I.return,Gt)}}}else if(n.tag===6){if(r===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(Gt){Be(I,I.return,Gt)}}}else if(n.tag===18){if(r===null){I=n;try{var ct=I.stateNode;u?_g(ct,!0):_g(I.stateNode,!1)}catch(Gt){Be(I,I.return,Gt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,Xl(e,r))));break;case 19:kn(n,e),Xn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Xl(e,o)));break;case 30:break;case 21:break;default:kn(n,e),Xn(e)}}function Xn(e){var n=e.flags;if(n&2){try{for(var r,o=e.return;o!==null;){if(y0(o)){r=o;break}o=o.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var u=r.stateNode,h=Tf(e);kl(e,h,u);break;case 5:var y=r.stateNode;r.flags&32&&(zr(y,""),r.flags&=-33);var A=Tf(e);kl(e,A,y);break;case 3:case 4:var I=r.stateNode.containerInfo,et=Tf(e);Af(e,et,I);break;default:throw Error(a(161))}}catch(ht){Be(e,e.return,ht)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function w0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;w0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function na(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)x0(e,n.alternate,n),n=n.sibling}function gr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:wa(4,n,n.return),gr(n);break;case 1:Pi(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&_0(n,n.return,r),gr(n);break;case 27:Co(n.stateNode);case 26:case 5:Pi(n,n.return),gr(n);break;case 22:n.memoizedState===null&&gr(n);break;case 30:gr(n);break;default:gr(n)}e=e.sibling}}function ia(e,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,y=h.flags;switch(h.tag){case 0:case 11:case 15:ia(u,h,r),yo(4,h);break;case 1:if(ia(u,h,r),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){Be(o,o.return,et)}if(o=h,u=o.updateQueue,u!==null){var A=o.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)rm(I[u],A)}catch(et){Be(o,o.return,et)}}r&&y&64&&g0(h),So(h,h.return);break;case 27:S0(h);case 26:case 5:ia(u,h,r),r&&o===null&&y&4&&v0(h),So(h,h.return);break;case 12:ia(u,h,r);break;case 31:ia(u,h,r),r&&y&4&&T0(u,h);break;case 13:ia(u,h,r),r&&y&4&&A0(u,h);break;case 22:h.memoizedState===null&&ia(u,h,r),So(h,h.return);break;case 30:break;default:ia(u,h,r)}n=n.sibling}}function wf(e,n){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&ro(r))}function Cf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ro(e))}function bi(e,n,r,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)C0(e,n,r,o),n=n.sibling}function C0(e,n,r,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:bi(e,n,r,o),u&2048&&yo(9,n);break;case 1:bi(e,n,r,o);break;case 3:bi(e,n,r,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ro(e)));break;case 12:if(u&2048){bi(e,n,r,o),e=n.stateNode;try{var h=n.memoizedProps,y=h.id,A=h.onPostCommit;typeof A=="function"&&A(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Be(n,n.return,I)}}else bi(e,n,r,o);break;case 31:bi(e,n,r,o);break;case 13:bi(e,n,r,o);break;case 23:break;case 22:h=n.stateNode,y=n.alternate,n.memoizedState!==null?h._visibility&2?bi(e,n,r,o):Mo(e,n):h._visibility&2?bi(e,n,r,o):(h._visibility|=2,ns(e,n,r,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&wf(y,n);break;case 24:bi(e,n,r,o),u&2048&&Cf(n.alternate,n);break;default:bi(e,n,r,o)}}function ns(e,n,r,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,y=n,A=r,I=o,et=y.flags;switch(y.tag){case 0:case 11:case 15:ns(h,y,A,I,u),yo(8,y);break;case 23:break;case 22:var ht=y.stateNode;y.memoizedState!==null?ht._visibility&2?ns(h,y,A,I,u):Mo(h,y):(ht._visibility|=2,ns(h,y,A,I,u)),u&&et&2048&&wf(y.alternate,y);break;case 24:ns(h,y,A,I,u),u&&et&2048&&Cf(y.alternate,y);break;default:ns(h,y,A,I,u)}n=n.sibling}}function Mo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=e,o=n,u=o.flags;switch(o.tag){case 22:Mo(r,o),u&2048&&wf(o.alternate,o);break;case 24:Mo(r,o),u&2048&&Cf(o.alternate,o);break;default:Mo(r,o)}n=n.sibling}}var xo=8192;function is(e,n,r){if(e.subtreeFlags&xo)for(e=e.child;e!==null;)D0(e,n,r),e=e.sibling}function D0(e,n,r){switch(e.tag){case 26:is(e,n,r),e.flags&xo&&e.memoizedState!==null&&zS(r,Ei,e.memoizedState,e.memoizedProps);break;case 5:is(e,n,r);break;case 3:case 4:var o=Ei;Ei=ac(e.stateNode.containerInfo),is(e,n,r),Ei=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=xo,xo=16777216,is(e,n,r),xo=o):is(e,n,r));break;default:is(e,n,r)}}function U0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Eo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Mn=o,N0(o,e)}U0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)L0(e),e=e.sibling}function L0(e){switch(e.tag){case 0:case 11:case 15:Eo(e),e.flags&2048&&wa(9,e,e.return);break;case 3:Eo(e);break;case 12:Eo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Wl(e)):Eo(e);break;default:Eo(e)}}function Wl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Mn=o,N0(o,e)}U0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:wa(8,n,n.return),Wl(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,Wl(n));break;default:Wl(n)}e=e.sibling}}function N0(e,n){for(;Mn!==null;){var r=Mn;switch(r.tag){case 0:case 11:case 15:wa(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ro(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,Mn=o;else t:for(r=e;Mn!==null;){o=Mn;var u=o.sibling,h=o.return;if(E0(o),o===r){Mn=null;break t}if(u!==null){u.return=h,Mn=u;break t}Mn=h}}}var Qy={getCacheForType:function(e){var n=Rn(cn),r=n.data.get(e);return r===void 0&&(r=e(),n.data.set(e,r)),r},cacheSignal:function(){return Rn(cn).controller.signal}},Jy=typeof WeakMap=="function"?WeakMap:Map,Le=0,qe=null,ve=null,xe=0,ze=0,ei=null,Ca=!1,as=!1,Df=!1,aa=0,an=0,Da=0,_r=0,Uf=0,ni=0,rs=0,bo=null,Wn=null,Lf=!1,ql=0,O0=0,Yl=1/0,Zl=null,Ua=null,gn=0,La=null,ss=null,ra=0,Nf=0,Of=null,P0=null,To=0,Pf=null;function ii(){return(Le&2)!==0&&xe!==0?xe&-xe:P.T!==null?Gf():$a()}function z0(){if(ni===0)if((xe&536870912)===0||Te){var e=Lt;Lt<<=1,(Lt&3932160)===0&&(Lt=262144),ni=e}else ni=536870912;return e=$n.current,e!==null&&(e.flags|=32),ni}function qn(e,n,r){(e===qe&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(os(e,0),Na(e,xe,ni,!1)),Pn(e,r),((Le&2)===0||e!==qe)&&(e===qe&&((Le&2)===0&&(_r|=r),an===4&&Na(e,xe,ni,!1)),zi(e))}function B0(e,n,r){if((Le&6)!==0)throw Error(a(327));var o=!r&&(n&127)===0&&(n&e.expiredLanes)===0||Ht(e,n),u=o?eS(e,n):Bf(e,n,!0),h=o;do{if(u===0){as&&!o&&Na(e,n,0,!1);break}else{if(r=e.current.alternate,h&&!$y(r)){u=Bf(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var A=e;u=bo;var I=A.current.memoizedState.isDehydrated;if(I&&(os(A,y).flags|=256),y=Bf(A,y,!1),y!==2){if(Df&&!I){A.errorRecoveryDisabledLanes|=h,_r|=h,u=4;break t}h=Wn,Wn=u,h!==null&&(Wn===null?Wn=h:Wn.push.apply(Wn,h))}u=y}if(h=!1,u!==2)continue}}if(u===1){os(e,0),Na(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:Na(o,n,ni,!Ca);break t;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(u=ql+300-b(),10<u)){if(Na(o,n,ni,!Ca),vt(o,0,!0)!==0)break t;ra=n,o.timeoutHandle=pg(I0.bind(null,o,r,Wn,Zl,Lf,n,ni,_r,rs,Ca,h,"Throttled",-0,0),u);break t}I0(o,r,Wn,Zl,Lf,n,ni,_r,rs,Ca,h,null,-0,0)}}break}while(!0);zi(e)}function I0(e,n,r,o,u,h,y,A,I,et,ht,gt,at,ct){if(e.timeoutHandle=-1,gt=n.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xi},D0(n,h,gt);var Gt=(h&62914560)===h?ql-b():(h&4194048)===h?O0-b():0;if(Gt=BS(gt,Gt),Gt!==null){ra=h,e.cancelPendingCommit=Gt(q0.bind(null,e,n,h,r,o,u,y,A,I,ht,gt,null,at,ct)),Na(e,h,y,!et);return}}q0(e,n,h,r,o,u,y,A,I)}function $y(e){for(var n=e;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var u=r[o],h=u.getSnapshot;u=u.value;try{if(!Qn(h(),u))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Na(e,n,r,o){n&=~Uf,n&=~_r,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Bt(u),y=1<<h;o[h]=-1,u&=~y}r!==0&&Ws(e,r,n)}function jl(){return(Le&6)===0?(Ao(0),!1):!0}function zf(){if(ve!==null){if(ze===0)var e=ve.return;else e=ve,Zi=lr=null,Qu(e),Qr=null,oo=0,e=ve;for(;e!==null;)m0(e.alternate,e),e=e.return;ve=null}}function os(e,n){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,yS(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),ra=0,zf(),qe=e,ve=r=qi(e.current,null),xe=n,ze=0,ei=null,Ca=!1,as=Ht(e,n),Df=!1,rs=ni=Uf=_r=Da=an=0,Wn=bo=null,Lf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Bt(o),h=1<<u;n|=e[u],o&=~h}return aa=n,gl(),r}function F0(e,n){ce=null,P.H=go,n===Kr||n===bl?(n=em(),ze=3):n===Fu?(n=em(),ze=4):ze=n===pf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ei=n,ve===null&&(an=1,Il(e,ui(n,e.current)))}function H0(){var e=$n.current;return e===null?!0:(xe&4194048)===xe?pi===null:(xe&62914560)===xe||(xe&536870912)!==0?e===pi:!1}function G0(){var e=P.H;return P.H=go,e===null?go:e}function V0(){var e=P.A;return P.A=Qy,e}function Kl(){an=4,Ca||(xe&4194048)!==xe&&$n.current!==null||(as=!0),(Da&134217727)===0&&(_r&134217727)===0||qe===null||Na(qe,xe,ni,!1)}function Bf(e,n,r){var o=Le;Le|=2;var u=G0(),h=V0();(qe!==e||xe!==n)&&(Zl=null,os(e,n)),n=!1;var y=an;t:do try{if(ze!==0&&ve!==null){var A=ve,I=ei;switch(ze){case 8:zf(),y=6;break t;case 3:case 2:case 9:case 6:$n.current===null&&(n=!0);var et=ze;if(ze=0,ei=null,ls(e,A,I,et),r&&as){y=0;break t}break;default:et=ze,ze=0,ei=null,ls(e,A,I,et)}}tS(),y=an;break}catch(ht){F0(e,ht)}while(!0);return n&&e.shellSuspendCounter++,Zi=lr=null,Le=o,P.H=u,P.A=h,ve===null&&(qe=null,xe=0,gl()),y}function tS(){for(;ve!==null;)k0(ve)}function eS(e,n){var r=Le;Le|=2;var o=G0(),u=V0();qe!==e||xe!==n?(Zl=null,Yl=b()+500,os(e,n)):as=Ht(e,n);t:do try{if(ze!==0&&ve!==null){n=ve;var h=ei;e:switch(ze){case 1:ze=0,ei=null,ls(e,n,h,1);break;case 2:case 9:if($p(h)){ze=0,ei=null,X0(n);break}n=function(){ze!==2&&ze!==9||qe!==e||(ze=7),zi(e)},h.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:$p(h)?(ze=0,ei=null,X0(n)):(ze=0,ei=null,ls(e,n,h,7));break;case 5:var y=null;switch(ve.tag){case 26:y=ve.memoizedState;case 5:case 27:var A=ve;if(y?Cg(y):A.stateNode.complete){ze=0,ei=null;var I=A.sibling;if(I!==null)ve=I;else{var et=A.return;et!==null?(ve=et,Ql(et)):ve=null}break e}}ze=0,ei=null,ls(e,n,h,5);break;case 6:ze=0,ei=null,ls(e,n,h,6);break;case 8:zf(),an=6;break t;default:throw Error(a(462))}}nS();break}catch(ht){F0(e,ht)}while(!0);return Zi=lr=null,P.H=o,P.A=u,Le=r,ve!==null?0:(qe=null,xe=0,gl(),an)}function nS(){for(;ve!==null&&!$e();)k0(ve)}function k0(e){var n=d0(e.alternate,e,aa);e.memoizedProps=e.pendingProps,n===null?Ql(e):ve=n}function X0(e){var n=e,r=n.alternate;switch(n.tag){case 15:case 0:n=o0(r,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=o0(r,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:Qu(n);default:m0(r,n),n=ve=Vp(n,aa),n=d0(r,n,aa)}e.memoizedProps=e.pendingProps,n===null?Ql(e):ve=n}function ls(e,n,r,o){Zi=lr=null,Qu(n),Qr=null,oo=0;var u=n.return;try{if(Xy(e,u,n,r,xe)){an=1,Il(e,ui(r,e.current)),ve=null;return}}catch(h){if(u!==null)throw ve=u,h;an=1,Il(e,ui(r,e.current)),ve=null;return}n.flags&32768?(Te||o===1?e=!0:as||(xe&536870912)!==0?e=!1:(Ca=e=!0,(o===2||o===9||o===3||o===6)&&(o=$n.current,o!==null&&o.tag===13&&(o.flags|=16384))),W0(n,e)):Ql(n)}function Ql(e){var n=e;do{if((n.flags&32768)!==0){W0(n,Ca);return}e=n.return;var r=Yy(n.alternate,n,aa);if(r!==null){ve=r;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=e}while(n!==null);an===0&&(an=5)}function W0(e,n){do{var r=Zy(e.alternate,e);if(r!==null){r.flags&=32767,ve=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(e=e.sibling,e!==null)){ve=e;return}ve=e=r}while(e!==null);an=6,ve=null}function q0(e,n,r,o,u,h,y,A,I){e.cancelPendingCommit=null;do Jl();while(gn!==0);if((Le&6)!==0)throw Error(a(327));if(n!==null){if(n===e.current)throw Error(a(177));if(h=n.lanes|n.childLanes,h|=bu,li(e,r,h,y,A,I),e===qe&&(ve=qe=null,xe=0),ss=n,La=e,ra=r,Nf=h,Of=u,P0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,sS(ft,function(){return Q0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=K.p,K.p=2,y=Le,Le|=4;try{jy(e,n,r)}finally{Le=y,K.p=u,P.T=o}}gn=1,Y0(),Z0(),j0()}}function Y0(){if(gn===1){gn=0;var e=La,n=ss,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=P.T,P.T=null;var o=K.p;K.p=2;var u=Le;Le|=4;try{R0(n,e);var h=jf,y=Np(e.containerInfo),A=h.focusedElem,I=h.selectionRange;if(y!==A&&A&&A.ownerDocument&&Lp(A.ownerDocument.documentElement,A)){if(I!==null&&yu(A)){var et=I.start,ht=I.end;if(ht===void 0&&(ht=et),"selectionStart"in A)A.selectionStart=et,A.selectionEnd=Math.min(ht,A.value.length);else{var gt=A.ownerDocument||document,at=gt&&gt.defaultView||window;if(at.getSelection){var ct=at.getSelection(),Gt=A.textContent.length,ne=Math.min(I.start,Gt),Ge=I.end===void 0?ne:Math.min(I.end,Gt);!ct.extend&&ne>Ge&&(y=Ge,Ge=ne,ne=y);var j=Up(A,ne),k=Up(A,Ge);if(j&&k&&(ct.rangeCount!==1||ct.anchorNode!==j.node||ct.anchorOffset!==j.offset||ct.focusNode!==k.node||ct.focusOffset!==k.offset)){var tt=gt.createRange();tt.setStart(j.node,j.offset),ct.removeAllRanges(),ne>Ge?(ct.addRange(tt),ct.extend(k.node,k.offset)):(tt.setEnd(k.node,k.offset),ct.addRange(tt))}}}}for(gt=[],ct=A;ct=ct.parentNode;)ct.nodeType===1&&gt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<gt.length;A++){var mt=gt[A];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}uc=!!Zf,jf=Zf=null}finally{Le=u,K.p=o,P.T=r}}e.current=n,gn=2}}function Z0(){if(gn===2){gn=0;var e=La,n=ss,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=P.T,P.T=null;var o=K.p;K.p=2;var u=Le;Le|=4;try{x0(e,n.alternate,n)}finally{Le=u,K.p=o,P.T=r}}gn=3}}function j0(){if(gn===4||gn===3){gn=0,L();var e=La,n=ss,r=ra,o=P0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,ss=La=null,K0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ua=null),Or(r),n=n.stateNode,Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(Rt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=K.p,K.p=2,P.T=null;try{for(var h=e.onRecoverableError,y=0;y<o.length;y++){var A=o[y];h(A.value,{componentStack:A.stack})}}finally{P.T=n,K.p=u}}(ra&3)!==0&&Jl(),zi(e),u=e.pendingLanes,(r&261930)!==0&&(u&42)!==0?e===Pf?To++:(To=0,Pf=e):To=0,Ao(0)}}function K0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ro(n)))}function Jl(){return Y0(),Z0(),j0(),Q0()}function Q0(){if(gn!==5)return!1;var e=La,n=Nf;Nf=0;var r=Or(ra),o=P.T,u=K.p;try{K.p=32>r?32:r,P.T=null,r=Of,Of=null;var h=La,y=ra;if(gn=0,ss=La=null,ra=0,(Le&6)!==0)throw Error(a(331));var A=Le;if(Le|=4,L0(h.current),C0(h,h.current,y,r),Le=A,Ao(0,!1),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(Rt,h)}catch{}return!0}finally{K.p=u,P.T=o,K0(e,n)}}function J0(e,n,r){n=ui(r,n),n=df(e.stateNode,n,2),e=Ta(e,n,2),e!==null&&(Pn(e,2),zi(e))}function Be(e,n,r){if(e.tag===3)J0(e,e,r);else for(;n!==null;){if(n.tag===3){J0(n,e,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ua===null||!Ua.has(o))){e=ui(r,e),r=$m(2),o=Ta(n,r,2),o!==null&&(t0(r,o,n,e),Pn(o,2),zi(o));break}}n=n.return}}function If(e,n,r){var o=e.pingCache;if(o===null){o=e.pingCache=new Jy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(r)||(Df=!0,u.add(r),e=iS.bind(null,e,n,r),n.then(e,e))}function iS(e,n,r){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,qe===e&&(xe&r)===r&&(an===4||an===3&&(xe&62914560)===xe&&300>b()-ql?(Le&2)===0&&os(e,0):Uf|=r,rs===xe&&(rs=0)),zi(e)}function $0(e,n){n===0&&(n=Pe()),e=rr(e,n),e!==null&&(Pn(e,n),zi(e))}function aS(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),$0(e,r)}function rS(e,n){var r=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(r=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(n),$0(e,r)}function sS(e,n){return se(e,n)}var $l=null,cs=null,Ff=!1,tc=!1,Hf=!1,Oa=0;function zi(e){e!==cs&&e.next===null&&(cs===null?$l=cs=e:cs=cs.next=e),tc=!0,Ff||(Ff=!0,lS())}function Ao(e,n){if(!Hf&&tc){Hf=!0;do for(var r=!1,o=$l;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var y=o.suspendedLanes,A=o.pingedLanes;h=(1<<31-Bt(42|e)+1)-1,h&=u&~(y&~A),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(r=!0,ig(o,h))}else h=xe,h=vt(o,o===qe?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Ht(o,h)||(r=!0,ig(o,h));o=o.next}while(r);Hf=!1}}function oS(){tg()}function tg(){tc=Ff=!1;var e=0;Oa!==0&&vS()&&(e=Oa);for(var n=b(),r=null,o=$l;o!==null;){var u=o.next,h=eg(o,n);h===0?(o.next=null,r===null?$l=u:r.next=u,u===null&&(cs=r)):(r=o,(e!==0||(h&3)!==0)&&(tc=!0)),o=u}gn!==0&&gn!==5||Ao(e),Oa!==0&&(Oa=0)}function eg(e,n){for(var r=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var y=31-Bt(h),A=1<<y,I=u[y];I===-1?((A&r)===0||(A&o)!==0)&&(u[y]=ae(A,n)):I<=n&&(e.expiredLanes|=A),h&=~A}if(n=qe,r=xe,r=vt(e,e===n?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,r===0||e===n&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&en(o),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Ht(e,r)){if(n=r&-r,n===e.callbackPriority)return n;switch(o!==null&&en(o),Or(r)){case 2:case 8:r=Et;break;case 32:r=ft;break;case 268435456:r=Dt;break;default:r=ft}return o=ng.bind(null,e),r=se(r,o),e.callbackPriority=n,e.callbackNode=r,n}return o!==null&&o!==null&&en(o),e.callbackPriority=2,e.callbackNode=null,2}function ng(e,n){if(gn!==0&&gn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(Jl()&&e.callbackNode!==r)return null;var o=xe;return o=vt(e,e===qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(B0(e,o,n),eg(e,b()),e.callbackNode!=null&&e.callbackNode===r?ng.bind(null,e):null)}function ig(e,n){if(Jl())return null;B0(e,n,!0)}function lS(){SS(function(){(Le&6)!==0?se(pt,oS):tg()})}function Gf(){if(Oa===0){var e=Zr;e===0&&(e=wt,wt<<=1,(wt&261888)===0&&(wt=256)),Oa=e}return Oa}function ag(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ll(""+e)}function rg(e,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,e.id&&r.setAttribute("form",e.id),n.parentNode.insertBefore(r,n),e=new FormData(e),r.parentNode.removeChild(r),e}function cS(e,n,r,o,u){if(n==="submit"&&r&&r.stateNode===u){var h=ag((u[bn]||null).action),y=o.submitter;y&&(n=(n=y[bn]||null)?ag(n.formAction):y.getAttribute("formAction"),n!==null&&(h=n,y=null));var A=new hl("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Oa!==0){var I=y?rg(u,y):new FormData(u);of(r,{pending:!0,data:I,method:u.method,action:h},null,I)}}else typeof h=="function"&&(A.preventDefault(),I=y?rg(u,y):new FormData(u),of(r,{pending:!0,data:I,method:u.method,action:h},h,I))},currentTarget:u}]})}}for(var Vf=0;Vf<Eu.length;Vf++){var kf=Eu[Vf],uS=kf.toLowerCase(),fS=kf[0].toUpperCase()+kf.slice(1);xi(uS,"on"+fS)}xi(zp,"onAnimationEnd"),xi(Bp,"onAnimationIteration"),xi(Ip,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(Ry,"onTransitionRun"),xi(wy,"onTransitionStart"),xi(Cy,"onTransitionCancel"),xi(Fp,"onTransitionEnd"),Qt("onMouseEnter",["mouseout","mouseover"]),Qt("onMouseLeave",["mouseout","mouseover"]),Qt("onPointerEnter",["pointerout","pointerover"]),Qt("onPointerLeave",["pointerout","pointerover"]),zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),zt("onBeforeInput",["compositionend","keypress","textInput","paste"]),zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ro));function sg(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var y=o.length-1;0<=y;y--){var A=o[y],I=A.instance,et=A.currentTarget;if(A=A.listener,I!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=et;try{h(u)}catch(ht){ml(ht)}u.currentTarget=null,h=I}else for(y=0;y<o.length;y++){if(A=o[y],I=A.instance,et=A.currentTarget,A=A.listener,I!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=et;try{h(u)}catch(ht){ml(ht)}u.currentTarget=null,h=I}}}}function ye(e,n){var r=n[Ys];r===void 0&&(r=n[Ys]=new Set);var o=e+"__bubble";r.has(o)||(og(n,e,2,!1),r.add(o))}function Xf(e,n,r){var o=0;n&&(o|=4),og(r,e,o,n)}var ec="_reactListening"+Math.random().toString(36).slice(2);function Wf(e){if(!e[ec]){e[ec]=!0,Ot.forEach(function(r){r!=="selectionchange"&&(hS.has(r)||Xf(r,!1,e),Xf(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ec]||(n[ec]=!0,Xf("selectionchange",!1,n))}}function og(e,n,r,o){switch(zg(n)){case 2:var u=HS;break;case 8:u=GS;break;default:u=sh}r=u.bind(null,n,r,e),u=void 0,!uu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,r,{capture:!0,passive:u}):e.addEventListener(n,r,!0):u!==void 0?e.addEventListener(n,r,{passive:u}):e.addEventListener(n,r,!1)}function qf(e,n,r,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var A=o.stateNode.containerInfo;if(A===u)break;if(y===4)for(y=o.return;y!==null;){var I=y.tag;if((I===3||I===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;A!==null;){if(y=q(A),y===null)return;if(I=y.tag,I===5||I===6||I===26||I===27){o=h=y;continue t}A=A.parentNode}}o=o.return}hp(function(){var et=h,ht=lu(r),gt=[];t:{var at=Hp.get(e);if(at!==void 0){var ct=hl,Gt=e;switch(e){case"keypress":if(ul(r)===0)break t;case"keydown":case"keyup":ct=ry;break;case"focusin":Gt="focus",ct=pu;break;case"focusout":Gt="blur",ct=pu;break;case"beforeblur":case"afterblur":ct=pu;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=mp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=Yv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=ly;break;case zp:case Bp:case Ip:ct=Kv;break;case Fp:ct=uy;break;case"scroll":case"scrollend":ct=Wv;break;case"wheel":ct=hy;break;case"copy":case"cut":case"paste":ct=Jv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=_p;break;case"toggle":case"beforetoggle":ct=py}var ne=(n&4)!==0,Ge=!ne&&(e==="scroll"||e==="scrollend"),j=ne?at!==null?at+"Capture":null:at;ne=[];for(var k=et,tt;k!==null;){var mt=k;if(tt=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||tt===null||j===null||(mt=Zs(k,j),mt!=null&&ne.push(wo(k,mt,tt))),Ge)break;k=k.return}0<ne.length&&(at=new ct(at,Gt,null,r,ht),gt.push({event:at,listeners:ne}))}}if((n&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",at&&r!==ou&&(Gt=r.relatedTarget||r.fromElement)&&(q(Gt)||Gt[_a]))break t;if((ct||at)&&(at=ht.window===ht?ht:(at=ht.ownerDocument)?at.defaultView||at.parentWindow:window,ct?(Gt=r.relatedTarget||r.toElement,ct=et,Gt=Gt?q(Gt):null,Gt!==null&&(Ge=c(Gt),ne=Gt.tag,Gt!==Ge||ne!==5&&ne!==27&&ne!==6)&&(Gt=null)):(ct=null,Gt=et),ct!==Gt)){if(ne=mp,mt="onMouseLeave",j="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ne=_p,mt="onPointerLeave",j="onPointerEnter",k="pointer"),Ge=ct==null?at:ot(ct),tt=Gt==null?at:ot(Gt),at=new ne(mt,k+"leave",ct,r,ht),at.target=Ge,at.relatedTarget=tt,mt=null,q(ht)===et&&(ne=new ne(j,k+"enter",Gt,r,ht),ne.target=tt,ne.relatedTarget=Ge,mt=ne),Ge=mt,ct&&Gt)e:{for(ne=dS,j=ct,k=Gt,tt=0,mt=j;mt;mt=ne(mt))tt++;mt=0;for(var te=k;te;te=ne(te))mt++;for(;0<tt-mt;)j=ne(j),tt--;for(;0<mt-tt;)k=ne(k),mt--;for(;tt--;){if(j===k||k!==null&&j===k.alternate){ne=j;break e}j=ne(j),k=ne(k)}ne=null}else ne=null;ct!==null&&lg(gt,at,ct,ne,!1),Gt!==null&&Ge!==null&&lg(gt,Ge,Gt,ne,!0)}}t:{if(at=et?ot(et):window,ct=at.nodeName&&at.nodeName.toLowerCase(),ct==="select"||ct==="input"&&at.type==="file")var Ce=Tp;else if(Ep(at))if(Ap)Ce=by;else{Ce=xy;var Xt=My}else ct=at.nodeName,!ct||ct.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?et&&su(et.elementType)&&(Ce=Tp):Ce=Ey;if(Ce&&(Ce=Ce(e,et))){bp(gt,Ce,r,ht);break t}Xt&&Xt(e,at,et),e==="focusout"&&et&&at.type==="number"&&et.memoizedProps.value!=null&&mn(at,"number",at.value)}switch(Xt=et?ot(et):window,e){case"focusin":(Ep(Xt)||Xt.contentEditable==="true")&&(Hr=Xt,Su=et,no=null);break;case"focusout":no=Su=Hr=null;break;case"mousedown":Mu=!0;break;case"contextmenu":case"mouseup":case"dragend":Mu=!1,Op(gt,r,ht);break;case"selectionchange":if(Ay)break;case"keydown":case"keyup":Op(gt,r,ht)}var ue;if(gu)t:{switch(e){case"compositionstart":var Ee="onCompositionStart";break t;case"compositionend":Ee="onCompositionEnd";break t;case"compositionupdate":Ee="onCompositionUpdate";break t}Ee=void 0}else Fr?Mp(e,r)&&(Ee="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Ee="onCompositionStart");Ee&&(vp&&r.locale!=="ko"&&(Fr||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Fr&&(ue=dp()):(va=ht,fu="value"in va?va.value:va.textContent,Fr=!0)),Xt=nc(et,Ee),0<Xt.length&&(Ee=new gp(Ee,e,null,r,ht),gt.push({event:Ee,listeners:Xt}),ue?Ee.data=ue:(ue=xp(r),ue!==null&&(Ee.data=ue)))),(ue=gy?_y(e,r):vy(e,r))&&(Ee=nc(et,"onBeforeInput"),0<Ee.length&&(Xt=new gp("onBeforeInput","beforeinput",null,r,ht),gt.push({event:Xt,listeners:Ee}),Xt.data=ue)),cS(gt,e,et,r,ht)}sg(gt,n)})}function wo(e,n,r){return{instance:e,listener:n,currentTarget:r}}function nc(e,n){for(var r=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Zs(e,r),u!=null&&o.unshift(wo(e,u,h)),u=Zs(e,n),u!=null&&o.push(wo(e,u,h))),e.tag===3)return o;e=e.return}return[]}function dS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function lg(e,n,r,o,u){for(var h=n._reactName,y=[];r!==null&&r!==o;){var A=r,I=A.alternate,et=A.stateNode;if(A=A.tag,I!==null&&I===o)break;A!==5&&A!==26&&A!==27||et===null||(I=et,u?(et=Zs(r,h),et!=null&&y.unshift(wo(r,et,I))):u||(et=Zs(r,h),et!=null&&y.push(wo(r,et,I)))),r=r.return}y.length!==0&&e.push({event:n,listeners:y})}var pS=/\r\n?/g,mS=/\u0000|\uFFFD/g;function cg(e){return(typeof e=="string"?e:""+e).replace(pS,`
`).replace(mS,"")}function ug(e,n){return n=cg(n),cg(e)===n}function He(e,n,r,o,u,h){switch(r){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||zr(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&zr(e,""+o);break;case"className":Oe(e,"class",o);break;case"tabIndex":Oe(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Oe(e,r,o);break;case"style":up(e,o,h);break;case"data":if(n!=="object"){Oe(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){e.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=ll(""+o),e.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(r==="formAction"?(n!=="input"&&He(e,n,"name",u.name,u,null),He(e,n,"formEncType",u.formEncType,u,null),He(e,n,"formMethod",u.formMethod,u,null),He(e,n,"formTarget",u.formTarget,u,null)):(He(e,n,"encType",u.encType,u,null),He(e,n,"method",u.method,u,null),He(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=ll(""+o),e.setAttribute(r,o);break;case"onClick":o!=null&&(e.onclick=Xi);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}r=ll(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""+o):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":o===!0?e.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,o):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(r,o):e.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(r):e.setAttribute(r,o);break;case"popover":ye("beforetoggle",e),ye("toggle",e),We(e,"popover",o);break;case"xlinkActuate":_e(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":_e(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":_e(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":_e(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":_e(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":_e(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":_e(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":_e(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":_e(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":We(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=kv.get(r)||r,We(e,r,o))}}function Yf(e,n,r,o,u,h){switch(r){case"style":up(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof o=="string"?zr(e,o):(typeof o=="number"||typeof o=="bigint")&&zr(e,""+o);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Xi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vt.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),n=r.slice(2,u?r.length-7:void 0),h=e[bn]||null,h=h!=null?h[r]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(n,o,u);break t}r in e?e[r]=o:o===!0?e.setAttribute(r,""):We(e,r,o)}}}function Cn(e,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var o=!1,u=!1,h;for(h in r)if(r.hasOwnProperty(h)){var y=r[h];if(y!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:He(e,n,h,y,r,null)}}u&&He(e,n,"srcSet",r.srcSet,r,null),o&&He(e,n,"src",r.src,r,null);return;case"input":ye("invalid",e);var A=h=y=u=null,I=null,et=null;for(o in r)if(r.hasOwnProperty(o)){var ht=r[o];if(ht!=null)switch(o){case"name":u=ht;break;case"type":y=ht;break;case"checked":I=ht;break;case"defaultChecked":et=ht;break;case"value":h=ht;break;case"defaultValue":A=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(a(137,n));break;default:He(e,n,o,ht,r,null)}}zn(e,h,A,I,et,y,u,!1);return;case"select":ye("invalid",e),o=y=h=null;for(u in r)if(r.hasOwnProperty(u)&&(A=r[u],A!=null))switch(u){case"value":h=A;break;case"defaultValue":y=A;break;case"multiple":o=A;default:He(e,n,u,A,r,null)}n=h,r=y,e.multiple=!!o,n!=null?rn(e,!!o,n,!1):r!=null&&rn(e,!!o,r,!0);return;case"textarea":ye("invalid",e),h=u=o=null;for(y in r)if(r.hasOwnProperty(y)&&(A=r[y],A!=null))switch(y){case"value":o=A;break;case"defaultValue":u=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:He(e,n,y,A,r,null)}Li(e,o,u,h);return;case"option":for(I in r)r.hasOwnProperty(I)&&(o=r[I],o!=null)&&(I==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":He(e,n,I,o,r,null));return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(o=0;o<Ro.length;o++)ye(Ro[o],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in r)if(r.hasOwnProperty(et)&&(o=r[et],o!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:He(e,n,et,o,r,null)}return;default:if(su(n)){for(ht in r)r.hasOwnProperty(ht)&&(o=r[ht],o!==void 0&&Yf(e,n,ht,o,r,void 0));return}}for(A in r)r.hasOwnProperty(A)&&(o=r[A],o!=null&&He(e,n,A,o,r,null))}function gS(e,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,y=null,A=null,I=null,et=null,ht=null;for(ct in r){var gt=r[ct];if(r.hasOwnProperty(ct)&&gt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":I=gt;default:o.hasOwnProperty(ct)||He(e,n,ct,null,o,gt)}}for(var at in o){var ct=o[at];if(gt=r[at],o.hasOwnProperty(at)&&(ct!=null||gt!=null))switch(at){case"type":h=ct;break;case"name":u=ct;break;case"checked":et=ct;break;case"defaultChecked":ht=ct;break;case"value":y=ct;break;case"defaultValue":A=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(a(137,n));break;default:ct!==gt&&He(e,n,at,ct,o,gt)}}Dn(e,y,A,I,et,ht,h,u);return;case"select":ct=y=A=at=null;for(h in r)if(I=r[h],r.hasOwnProperty(h)&&I!=null)switch(h){case"value":break;case"multiple":ct=I;default:o.hasOwnProperty(h)||He(e,n,h,null,o,I)}for(u in o)if(h=o[u],I=r[u],o.hasOwnProperty(u)&&(h!=null||I!=null))switch(u){case"value":at=h;break;case"defaultValue":A=h;break;case"multiple":y=h;default:h!==I&&He(e,n,u,h,o,I)}n=A,r=y,o=ct,at!=null?rn(e,!!r,at,!1):!!o!=!!r&&(n!=null?rn(e,!!r,n,!0):rn(e,!!r,r?[]:"",!1));return;case"textarea":ct=at=null;for(A in r)if(u=r[A],r.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:He(e,n,A,null,o,u)}for(y in o)if(u=o[y],h=r[y],o.hasOwnProperty(y)&&(u!=null||h!=null))switch(y){case"value":at=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==h&&He(e,n,y,u,o,h)}Pr(e,at,ct);return;case"option":for(var Gt in r)at=r[Gt],r.hasOwnProperty(Gt)&&at!=null&&!o.hasOwnProperty(Gt)&&(Gt==="selected"?e.selected=!1:He(e,n,Gt,null,o,at));for(I in o)at=o[I],ct=r[I],o.hasOwnProperty(I)&&at!==ct&&(at!=null||ct!=null)&&(I==="selected"?e.selected=at&&typeof at!="function"&&typeof at!="symbol":He(e,n,I,at,o,ct));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in r)at=r[ne],r.hasOwnProperty(ne)&&at!=null&&!o.hasOwnProperty(ne)&&He(e,n,ne,null,o,at);for(et in o)if(at=o[et],ct=r[et],o.hasOwnProperty(et)&&at!==ct&&(at!=null||ct!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(a(137,n));break;default:He(e,n,et,at,o,ct)}return;default:if(su(n)){for(var Ge in r)at=r[Ge],r.hasOwnProperty(Ge)&&at!==void 0&&!o.hasOwnProperty(Ge)&&Yf(e,n,Ge,void 0,o,at);for(ht in o)at=o[ht],ct=r[ht],!o.hasOwnProperty(ht)||at===ct||at===void 0&&ct===void 0||Yf(e,n,ht,at,o,ct);return}}for(var j in r)at=r[j],r.hasOwnProperty(j)&&at!=null&&!o.hasOwnProperty(j)&&He(e,n,j,null,o,at);for(gt in o)at=o[gt],ct=r[gt],!o.hasOwnProperty(gt)||at===ct||at==null&&ct==null||He(e,n,gt,at,o,ct)}function fg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function _S(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,r=performance.getEntriesByType("resource"),o=0;o<r.length;o++){var u=r[o],h=u.transferSize,y=u.initiatorType,A=u.duration;if(h&&A&&fg(y)){for(y=0,A=u.responseEnd,o+=1;o<r.length;o++){var I=r[o],et=I.startTime;if(et>A)break;var ht=I.transferSize,gt=I.initiatorType;ht&&fg(gt)&&(I=I.responseEnd,y+=ht*(I<A?1:(A-et)/(I-et)))}if(--o,n+=8*(h+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Zf=null,jf=null;function ic(e){return e.nodeType===9?e:e.ownerDocument}function hg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Kf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Qf=null;function vS(){var e=window.event;return e&&e.type==="popstate"?e===Qf?!1:(Qf=e,!0):(Qf=null,!1)}var pg=typeof setTimeout=="function"?setTimeout:void 0,yS=typeof clearTimeout=="function"?clearTimeout:void 0,mg=typeof Promise=="function"?Promise:void 0,SS=typeof queueMicrotask=="function"?queueMicrotask:typeof mg<"u"?function(e){return mg.resolve(null).then(e).catch(MS)}:pg;function MS(e){setTimeout(function(){throw e})}function Pa(e){return e==="head"}function gg(e,n){var r=n,o=0;do{var u=r.nextSibling;if(e.removeChild(r),u&&u.nodeType===8)if(r=u.data,r==="/$"||r==="/&"){if(o===0){e.removeChild(u),ds(n);return}o--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")o++;else if(r==="html")Co(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,Co(r);for(var h=r.firstChild;h;){var y=h.nextSibling,A=h.nodeName;h[tr]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&h.rel.toLowerCase()==="stylesheet"||r.removeChild(h),h=y}}else r==="body"&&Co(e.ownerDocument.body);r=u}while(r);ds(n)}function _g(e,n){var r=e;e=0;do{var o=r.nextSibling;if(r.nodeType===1?n?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(n?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=o}while(r)}function Jf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Jf(r),R(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function xS(e,n,r,o){for(;e.nodeType===1;){var u=r;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[tr])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=mi(e.nextSibling),e===null)break}return null}function ES(e,n,r){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=mi(e.nextSibling),e===null))return null;return e}function vg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=mi(e.nextSibling),e===null))return null;return e}function $f(e){return e.data==="$?"||e.data==="$~"}function th(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function bS(e,n){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||r.readyState!=="loading")n();else{var o=function(){n(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function mi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var eh=null;function yg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(n===0)return mi(e.nextSibling);n--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||n++}e=e.nextSibling}return null}function Sg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(n===0)return e;n--}else r!=="/$"&&r!=="/&"||n++}e=e.previousSibling}return null}function Mg(e,n,r){switch(n=ic(r),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Co(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);R(e)}var gi=new Map,xg=new Set;function ac(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var sa=K.d;K.d={f:TS,r:AS,D:RS,C:wS,L:CS,m:DS,X:LS,S:US,M:NS};function TS(){var e=sa.f(),n=jl();return e||n}function AS(e){var n=rt(e);n!==null&&n.tag===5&&n.type==="form"?Fm(n):sa.r(e)}var us=typeof document>"u"?null:document;function Eg(e,n,r){var o=us;if(o&&typeof n=="string"&&n){var u=Me(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),xg.has(u)||(xg.add(u),e={rel:e,crossOrigin:r,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Cn(n,"link",e),St(n),o.head.appendChild(n)))}}function RS(e){sa.D(e),Eg("dns-prefetch",e,null)}function wS(e,n){sa.C(e,n),Eg("preconnect",e,n)}function CS(e,n,r){sa.L(e,n,r);var o=us;if(o&&e&&n){var u='link[rel="preload"][as="'+Me(n)+'"]';n==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+Me(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+Me(r.imageSizes)+'"]')):u+='[href="'+Me(e)+'"]';var h=u;switch(n){case"style":h=fs(e);break;case"script":h=hs(e)}gi.has(h)||(e=_({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:e,as:n},r),gi.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Do(h))||n==="script"&&o.querySelector(Uo(h))||(n=o.createElement("link"),Cn(n,"link",e),St(n),o.head.appendChild(n)))}}function DS(e,n){sa.m(e,n);var r=us;if(r&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Me(o)+'"][href="'+Me(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=hs(e)}if(!gi.has(h)&&(e=_({rel:"modulepreload",href:e},n),gi.set(h,e),r.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Uo(h)))return}o=r.createElement("link"),Cn(o,"link",e),St(o),r.head.appendChild(o)}}}function US(e,n,r){sa.S(e,n,r);var o=us;if(o&&e){var u=Z(o).hoistableStyles,h=fs(e);n=n||"default";var y=u.get(h);if(!y){var A={loading:0,preload:null};if(y=o.querySelector(Do(h)))A.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},r),(r=gi.get(h))&&nh(e,r);var I=y=o.createElement("link");St(I),Cn(I,"link",e),I._p=new Promise(function(et,ht){I.onload=et,I.onerror=ht}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,rc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:A},u.set(h,y)}}}function LS(e,n){sa.X(e,n);var r=us;if(r&&e){var o=Z(r).hoistableScripts,u=hs(e),h=o.get(u);h||(h=r.querySelector(Uo(u)),h||(e=_({src:e,async:!0},n),(n=gi.get(u))&&ih(e,n),h=r.createElement("script"),St(h),Cn(h,"link",e),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function NS(e,n){sa.M(e,n);var r=us;if(r&&e){var o=Z(r).hoistableScripts,u=hs(e),h=o.get(u);h||(h=r.querySelector(Uo(u)),h||(e=_({src:e,async:!0,type:"module"},n),(n=gi.get(u))&&ih(e,n),h=r.createElement("script"),St(h),Cn(h,"link",e),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function bg(e,n,r,o){var u=(u=_t.current)?ac(u):null;if(!u)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=fs(r.href),r=Z(u).hoistableStyles,o=r.get(n),o||(o={type:"style",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=fs(r.href);var h=Z(u).hoistableStyles,y=h.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,y),(h=u.querySelector(Do(e)))&&!h._p&&(y.instance=h,y.state.loading=5),gi.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},gi.set(e,r),h||OS(u,e,r,y.state))),n&&o===null)throw Error(a(528,""));return y}if(n&&o!==null)throw Error(a(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=hs(r),r=Z(u).hoistableScripts,o=r.get(n),o||(o={type:"script",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function fs(e){return'href="'+Me(e)+'"'}function Do(e){return'link[rel="stylesheet"]['+e+"]"}function Tg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function OS(e,n,r,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",r),St(n),e.head.appendChild(n))}function hs(e){return'[src="'+Me(e)+'"]'}function Uo(e){return"script[async]"+e}function Ag(e,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Me(r.href)+'"]');if(o)return n.instance=o,St(o),o;var u=_({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),St(o),Cn(o,"style",u),rc(o,r.precedence,e),n.instance=o;case"stylesheet":u=fs(r.href);var h=e.querySelector(Do(u));if(h)return n.state.loading|=4,n.instance=h,St(h),h;o=Tg(r),(u=gi.get(u))&&nh(o,u),h=(e.ownerDocument||e).createElement("link"),St(h);var y=h;return y._p=new Promise(function(A,I){y.onload=A,y.onerror=I}),Cn(h,"link",o),n.state.loading|=4,rc(h,r.precedence,e),n.instance=h;case"script":return h=hs(r.src),(u=e.querySelector(Uo(h)))?(n.instance=u,St(u),u):(o=r,(u=gi.get(h))&&(o=_({},r),ih(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),St(u),Cn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,rc(o,r.precedence,e));return n.instance}function rc(e,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,y=0;y<o.length;y++){var A=o[y];if(A.dataset.precedence===n)h=A;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(e,n.firstChild))}function nh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function ih(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var sc=null;function Rg(e,n,r){if(sc===null){var o=new Map,u=sc=new Map;u.set(r,o)}else u=sc,o=u.get(r),o||(o=new Map,u.set(r,o));if(o.has(e))return o;for(o.set(e,null),r=r.getElementsByTagName(e),u=0;u<r.length;u++){var h=r[u];if(!(h[tr]||h[ln]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var y=h.getAttribute(n)||"";y=e+y;var A=o.get(y);A?A.push(h):o.set(y,[h])}}return o}function wg(e,n,r){e=e.ownerDocument||e,e.head.insertBefore(r,n==="title"?e.querySelector("head > title"):null)}function PS(e,n,r){if(r===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Cg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function zS(e,n,r,o){if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var u=fs(o.href),h=n.querySelector(Do(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=oc.bind(e),n.then(e,e)),r.state.loading|=4,r.instance=h,St(h);return}h=n.ownerDocument||n,o=Tg(o),(u=gi.get(u))&&nh(o,u),h=h.createElement("link"),St(h);var y=h;y._p=new Promise(function(A,I){y.onload=A,y.onerror=I}),Cn(h,"link",o),r.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=oc.bind(e),n.addEventListener("load",r),n.addEventListener("error",r))}}var ah=0;function BS(e,n){return e.stylesheets&&e.count===0&&cc(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var o=setTimeout(function(){if(e.stylesheets&&cc(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&ah===0&&(ah=62500*_S());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&cc(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>ah?50:800)+n);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function oc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)cc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var lc=null;function cc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,lc=new Map,n.forEach(IS,e),lc=null,oc.call(e))}function IS(e,n){if(!(n.state.loading&4)){var r=lc.get(e);if(r)var o=r.get(null);else{r=new Map,lc.set(e,r);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var y=u[h];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(r.set(y.dataset.precedence,y),o=y)}o&&r.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),h=r.get(y)||o,h===o&&r.set(null,u),r.set(y,u),this.count++,o=oc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Lo={$$typeof:U,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function FS(e,n,r,o,u,h,y,A,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function Dg(e,n,r,o,u,h,y,A,I,et,ht,gt){return e=new FS(e,n,r,y,I,et,ht,gt,A),n=1,h===!0&&(n|=24),h=Jn(3,null,null,n),e.current=h,h.stateNode=e,n=zu(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:r,cache:n},Hu(h),e}function Ug(e){return e?(e=kr,e):kr}function Lg(e,n,r,o,u,h){u=Ug(u),o.context===null?o.context=u:o.pendingContext=u,o=ba(n),o.payload={element:r},h=h===void 0?null:h,h!==null&&(o.callback=h),r=Ta(e,o,n),r!==null&&(qn(r,e,n),co(r,e,n))}function Ng(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function rh(e,n){Ng(e,n),(e=e.alternate)&&Ng(e,n)}function Og(e){if(e.tag===13||e.tag===31){var n=rr(e,67108864);n!==null&&qn(n,e,67108864),rh(e,67108864)}}function Pg(e){if(e.tag===13||e.tag===31){var n=ii();n=Nr(n);var r=rr(e,n);r!==null&&qn(r,e,n),rh(e,n)}}var uc=!0;function HS(e,n,r,o){var u=P.T;P.T=null;var h=K.p;try{K.p=2,sh(e,n,r,o)}finally{K.p=h,P.T=u}}function GS(e,n,r,o){var u=P.T;P.T=null;var h=K.p;try{K.p=8,sh(e,n,r,o)}finally{K.p=h,P.T=u}}function sh(e,n,r,o){if(uc){var u=oh(o);if(u===null)qf(e,n,o,fc,r),Bg(e,o);else if(kS(u,e,n,r,o))o.stopPropagation();else if(Bg(e,o),n&4&&-1<VS.indexOf(e)){for(;u!==null;){var h=rt(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var y=bt(h.pendingLanes);if(y!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;y;){var I=1<<31-Bt(y);A.entanglements[1]|=I,y&=~I}zi(h),(Le&6)===0&&(Yl=b()+500,Ao(0))}}break;case 31:case 13:A=rr(h,2),A!==null&&qn(A,h,2),jl(),rh(h,2)}if(h=oh(o),h===null&&qf(e,n,o,fc,r),h===u)break;u=h}u!==null&&o.stopPropagation()}else qf(e,n,o,null,r)}}function oh(e){return e=lu(e),lh(e)}var fc=null;function lh(e){if(fc=null,e=q(e),e!==null){var n=c(e);if(n===null)e=null;else{var r=n.tag;if(r===13){if(e=f(n),e!==null)return e;e=null}else if(r===31){if(e=d(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return fc=e,null}function zg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(nt()){case pt:return 2;case Et:return 8;case ft:case Yt:return 32;case Dt:return 268435456;default:return 32}default:return 32}}var ch=!1,za=null,Ba=null,Ia=null,No=new Map,Oo=new Map,Fa=[],VS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Bg(e,n){switch(e){case"focusin":case"focusout":za=null;break;case"dragenter":case"dragleave":Ba=null;break;case"mouseover":case"mouseout":Ia=null;break;case"pointerover":case"pointerout":No.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(n.pointerId)}}function Po(e,n,r,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=rt(n),n!==null&&Og(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function kS(e,n,r,o,u){switch(n){case"focusin":return za=Po(za,e,n,r,o,u),!0;case"dragenter":return Ba=Po(Ba,e,n,r,o,u),!0;case"mouseover":return Ia=Po(Ia,e,n,r,o,u),!0;case"pointerover":var h=u.pointerId;return No.set(h,Po(No.get(h)||null,e,n,r,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Oo.set(h,Po(Oo.get(h)||null,e,n,r,o,u)),!0}return!1}function Ig(e){var n=q(e.target);if(n!==null){var r=c(n);if(r!==null){if(n=r.tag,n===13){if(n=f(r),n!==null){e.blockedOn=n,qs(e.priority,function(){Pg(r)});return}}else if(n===31){if(n=d(r),n!==null){e.blockedOn=n,qs(e.priority,function(){Pg(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=oh(e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);ou=o,r.target.dispatchEvent(o),ou=null}else return n=rt(r),n!==null&&Og(n),e.blockedOn=r,!1;n.shift()}return!0}function Fg(e,n,r){hc(e)&&r.delete(n)}function XS(){ch=!1,za!==null&&hc(za)&&(za=null),Ba!==null&&hc(Ba)&&(Ba=null),Ia!==null&&hc(Ia)&&(Ia=null),No.forEach(Fg),Oo.forEach(Fg)}function dc(e,n){e.blockedOn===n&&(e.blockedOn=null,ch||(ch=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,XS)))}var pc=null;function Hg(e){pc!==e&&(pc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){pc===e&&(pc=null);for(var n=0;n<e.length;n+=3){var r=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(lh(o||r)===null)continue;break}var h=rt(r);h!==null&&(e.splice(n,3),n-=3,of(h,{pending:!0,data:u,method:r.method,action:o},o,u))}}))}function ds(e){function n(I){return dc(I,e)}za!==null&&dc(za,e),Ba!==null&&dc(Ba,e),Ia!==null&&dc(Ia,e),No.forEach(n),Oo.forEach(n);for(var r=0;r<Fa.length;r++){var o=Fa[r];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Fa.length&&(r=Fa[0],r.blockedOn===null);)Ig(r),r.blockedOn===null&&Fa.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var u=r[o],h=r[o+1],y=u[bn]||null;if(typeof h=="function")y||Hg(r);else if(y){var A=null;if(h&&h.hasAttribute("formAction")){if(u=h,y=h[bn]||null)A=y.formAction;else if(lh(u)!==null)continue}else A=y.action;typeof A=="function"?r[o+1]=A:(r.splice(o,3),o-=3),Hg(r)}}}function Gg(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(r,20)}function r(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(r,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function uh(e){this._internalRoot=e}mc.prototype.render=uh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var r=n.current,o=ii();Lg(r,o,e,n,null,null)},mc.prototype.unmount=uh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Lg(e.current,2,null,e,null,null),jl(),n[_a]=null}};function mc(e){this._internalRoot=e}mc.prototype.unstable_scheduleHydration=function(e){if(e){var n=$a();e={blockedOn:null,target:e,priority:n};for(var r=0;r<Fa.length&&n!==0&&n<Fa[r].priority;r++);Fa.splice(r,0,e),r===0&&Ig(e)}};var Vg=t.version;if(Vg!=="19.2.8")throw Error(a(527,Vg,"19.2.8"));K.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var WS={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{Rt=gc.inject(WS),Ut=gc}catch{}}return Bo.createRoot=function(e,n){if(!l(e))throw Error(a(299));var r=!1,o="",u=jm,h=Km,y=Qm;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=Dg(e,1,!1,null,null,r,o,null,u,h,y,Gg),e[_a]=n.current,Wf(e),new uh(n)},Bo.hydrateRoot=function(e,n,r){if(!l(e))throw Error(a(299));var o=!1,u="",h=jm,y=Km,A=Qm,I=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(y=r.onCaughtError),r.onRecoverableError!==void 0&&(A=r.onRecoverableError),r.formState!==void 0&&(I=r.formState)),n=Dg(e,1,!0,n,r??null,o,u,I,h,y,A,Gg),n.context=Ug(null),r=n.current,o=ii(),o=Nr(o),u=ba(o),u.callback=null,Ta(r,u,o),r=o,n.current.lanes=r,Pn(n,r),zi(n),e[_a]=n.current,Wf(e),new mc(n)},Bo.version="19.2.8",Bo}var Jg;function iM(){if(Jg)return dh.exports;Jg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),dh.exports=nM(),dh.exports}var aM=iM();const Vd="179",rM=0,$g=1,sM=2,ov=1,lv=2,ha=3,Ka=0,jn=1,da=2,Za=0,Us=1,t_=2,e_=3,n_=4,oM=5,Ar=100,lM=101,cM=102,uM=103,fM=104,hM=200,dM=201,pM=202,mM=203,ed=204,nd=205,gM=206,_M=207,vM=208,yM=209,SM=210,MM=211,xM=212,EM=213,bM=214,id=0,ad=1,rd=2,Os=3,sd=4,od=5,ld=6,cd=7,cv=0,TM=1,AM=2,ja=0,RM=1,wM=2,CM=3,uv=4,DM=5,UM=6,LM=7,fv=300,Ps=301,zs=302,ud=303,fd=304,$c=306,$o=1e3,wr=1001,hd=1002,Di=1003,NM=1004,_c=1005,Ii=1006,_h=1007,Cr=1008,Gi=1009,hv=1010,dv=1011,tl=1012,kd=1013,Dr=1014,pa=1015,rl=1016,Xd=1017,Wd=1018,el=1020,pv=35902,mv=1021,gv=1022,Ci=1023,nl=1026,il=1027,_v=1028,qd=1029,vv=1030,Yd=1031,Zd=1033,Vc=33776,kc=33777,Xc=33778,Wc=33779,dd=35840,pd=35841,md=35842,gd=35843,_d=36196,vd=37492,yd=37496,Sd=37808,Md=37809,xd=37810,Ed=37811,bd=37812,Td=37813,Ad=37814,Rd=37815,wd=37816,Cd=37817,Dd=37818,Ud=37819,Ld=37820,Nd=37821,qc=36492,Od=36494,Pd=36495,yv=36283,zd=36284,Bd=36285,Id=36286,OM=3200,PM=3201,Sv=0,zM=1,Ya="",Yn="srgb",Bs="srgb-linear",Zc="linear",Ve="srgb",ps=7680,i_=519,BM=512,IM=513,FM=514,Mv=515,HM=516,GM=517,VM=518,kM=519,a_=35044,r_="300 es",Fi=2e3,jc=2001;class Fs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(i)===-1&&a[t].push(i)}hasEventListener(t,i){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(i)!==-1}removeEventListener(t,i){const a=this._listeners;if(a===void 0)return;const l=a[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const a=i[t.type];if(a!==void 0){t.target=this;const l=a.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let s_=1234567;const Zo=Math.PI/180,al=180/Math.PI;function Hs(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[a&255]+Ln[a>>8&255]+Ln[a>>16&255]+Ln[a>>24&255]).toLowerCase()}function pe(s,t,i){return Math.max(t,Math.min(i,s))}function jd(s,t){return(s%t+t)%t}function XM(s,t,i,a,l){return a+(s-t)*(l-a)/(i-t)}function WM(s,t,i){return s!==t?(i-s)/(t-s):0}function jo(s,t,i){return(1-i)*s+i*t}function qM(s,t,i,a){return jo(s,t,1-Math.exp(-i*a))}function YM(s,t=1){return t-Math.abs(jd(s,t*2)-t)}function ZM(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*(3-2*s))}function jM(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*s*(s*(s*6-15)+10))}function KM(s,t){return s+Math.floor(Math.random()*(t-s+1))}function QM(s,t){return s+Math.random()*(t-s)}function JM(s){return s*(.5-Math.random())}function $M(s){s!==void 0&&(s_=s);let t=s_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function tx(s){return s*Zo}function ex(s){return s*al}function nx(s){return(s&s-1)===0&&s!==0}function ix(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ax(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function rx(s,t,i,a,l){const c=Math.cos,f=Math.sin,d=c(i/2),m=f(i/2),p=c((t+a)/2),g=f((t+a)/2),_=c((t-a)/2),S=f((t-a)/2),M=c((a-t)/2),T=f((a-t)/2);switch(l){case"XYX":s.set(d*g,m*_,m*S,d*p);break;case"YZY":s.set(m*S,d*g,m*_,d*p);break;case"ZXZ":s.set(m*_,m*S,d*g,d*p);break;case"XZX":s.set(d*g,m*T,m*M,d*p);break;case"YXY":s.set(m*M,d*g,m*T,d*p);break;case"ZYZ":s.set(m*T,m*M,d*g,d*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Cs(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function In(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const oi={DEG2RAD:Zo,RAD2DEG:al,generateUUID:Hs,clamp:pe,euclideanModulo:jd,mapLinear:XM,inverseLerp:WM,lerp:jo,damp:qM,pingpong:YM,smoothstep:ZM,smootherstep:jM,randInt:KM,randFloat:QM,randFloatSpread:JM,seededRandom:$M,degToRad:tx,radToDeg:ex,isPowerOfTwo:nx,ceilPowerOfTwo:ix,floorPowerOfTwo:ax,setQuaternionFromProperEuler:rx,normalize:In,denormalize:Cs};class ee{constructor(t=0,i=0){ee.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,a=this.y,l=t.elements;return this.x=l[0]*i+l[3]*a+l[6],this.y=l[1]*i+l[4]*a+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=pe(this.x,t.x,i.x),this.y=pe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=pe(this.x,t,i),this.y=pe(this.y,t,i),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(pe(a,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(t)/i;return Math.acos(pe(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,a=this.y-t.y;return i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const a=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*a-f*l+t.x,this.y=c*l+f*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class sl{constructor(t=0,i=0,a=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=a,this._w=l}static slerpFlat(t,i,a,l,c,f,d){let m=a[l+0],p=a[l+1],g=a[l+2],_=a[l+3];const S=c[f+0],M=c[f+1],T=c[f+2],E=c[f+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(d===1){t[i+0]=S,t[i+1]=M,t[i+2]=T,t[i+3]=E;return}if(_!==E||m!==S||p!==M||g!==T){let x=1-d;const v=m*S+p*M+g*T+_*E,z=v>=0?1:-1,U=1-v*v;if(U>Number.EPSILON){const H=Math.sqrt(U),F=Math.atan2(H,v*z);x=Math.sin(x*F)/H,d=Math.sin(d*F)/H}const w=d*z;if(m=m*x+S*w,p=p*x+M*w,g=g*x+T*w,_=_*x+E*w,x===1-d){const H=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=H,p*=H,g*=H,_*=H}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,a,l,c,f){const d=a[l],m=a[l+1],p=a[l+2],g=a[l+3],_=c[f],S=c[f+1],M=c[f+2],T=c[f+3];return t[i]=d*T+g*_+m*M-p*S,t[i+1]=m*T+g*S+p*_-d*M,t[i+2]=p*T+g*M+d*S-m*_,t[i+3]=g*T-d*_-m*S-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,a,l){return this._x=t,this._y=i,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const a=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(a/2),g=d(l/2),_=d(c/2),S=m(a/2),M=m(l/2),T=m(c/2);switch(f){case"XYZ":this._x=S*g*_+p*M*T,this._y=p*M*_-S*g*T,this._z=p*g*T+S*M*_,this._w=p*g*_-S*M*T;break;case"YXZ":this._x=S*g*_+p*M*T,this._y=p*M*_-S*g*T,this._z=p*g*T-S*M*_,this._w=p*g*_+S*M*T;break;case"ZXY":this._x=S*g*_-p*M*T,this._y=p*M*_+S*g*T,this._z=p*g*T+S*M*_,this._w=p*g*_-S*M*T;break;case"ZYX":this._x=S*g*_-p*M*T,this._y=p*M*_+S*g*T,this._z=p*g*T-S*M*_,this._w=p*g*_+S*M*T;break;case"YZX":this._x=S*g*_+p*M*T,this._y=p*M*_+S*g*T,this._z=p*g*T-S*M*_,this._w=p*g*_-S*M*T;break;case"XZY":this._x=S*g*_-p*M*T,this._y=p*M*_-S*g*T,this._z=p*g*T+S*M*_,this._w=p*g*_+S*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const a=i/2,l=Math.sin(a);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,a=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],S=a+d+_;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(a>d&&a>_){const M=2*Math.sqrt(1+a-d-_);this._w=(g-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(d>_){const M=2*Math.sqrt(1+d-a-_);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+_-a-d);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let a=t.dot(i)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,i){const a=this.angleTo(t);if(a===0)return this;const l=Math.min(1,i/a);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const a=t._x,l=t._y,c=t._z,f=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=a*g+f*d+l*p-c*m,this._y=l*g+f*m+c*d-a*p,this._z=c*g+f*p+a*m-l*d,this._w=f*g-a*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const a=this._x,l=this._y,c=this._z,f=this._w;let d=f*t._w+a*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=a,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*f+i*this._w,this._x=M*a+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),_=Math.sin((1-i)*g)/p,S=Math.sin(i*g)/p;return this._w=f*_+this._w*S,this._x=a*_+this._x*S,this._y=l*_+this._y*S,this._z=c*_+this._z*S,this._onChangeCallback(),this}slerpQuaternions(t,i,a){return this.copy(t).slerp(i,a)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),a=Math.random(),l=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,i=0,a=0){V.prototype.isVector3=!0,this.x=t,this.y=i,this.z=a}set(t,i,a){return a===void 0&&(a=this.z),this.x=t,this.y=i,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(o_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(o_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,a=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*a+c[6]*l,this.y=c[1]*i+c[4]*a+c[7]*l,this.z=c[2]*i+c[5]*a+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,a=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*a+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*a+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*a+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*a+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,a=this.y,l=this.z,c=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*a),g=2*(d*i-c*l),_=2*(c*a-f*i);return this.x=i+m*p+f*_-d*g,this.y=a+m*g+d*p-c*_,this.z=l+m*_+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,a=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*a+c[8]*l,this.y=c[1]*i+c[5]*a+c[9]*l,this.z=c[2]*i+c[6]*a+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=pe(this.x,t.x,i.x),this.y=pe(this.y,t.y,i.y),this.z=pe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=pe(this.x,t,i),this.y=pe(this.y,t,i),this.z=pe(this.z,t,i),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(pe(a,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this.z=t.z+(i.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const a=t.x,l=t.y,c=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-a*m,this.z=a*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const a=t.dot(this)/i;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return vh.copy(this).projectOnVector(t),this.sub(vh)}reflect(t){return this.sub(vh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(t)/i;return Math.acos(pe(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,a=this.y-t.y,l=this.z-t.z;return i*i+a*a+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,a){const l=Math.sin(i)*t;return this.x=l*Math.sin(a),this.y=Math.cos(i)*t,this.z=l*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,a){return this.x=t*Math.sin(i),this.y=a,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=a,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,a=Math.sqrt(1-i*i);return this.x=a*Math.cos(t),this.y=i,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vh=new V,o_=new sl;class fe{constructor(t,i,a,l,c,f,d,m,p){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,a,l,c,f,d,m,p)}set(t,i,a,l,c,f,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=a,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,a=t.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],this}extractBasis(t,i,a){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const a=t.elements,l=i.elements,c=this.elements,f=a[0],d=a[3],m=a[6],p=a[1],g=a[4],_=a[7],S=a[2],M=a[5],T=a[8],E=l[0],x=l[3],v=l[6],z=l[1],U=l[4],w=l[7],H=l[2],F=l[5],O=l[8];return c[0]=f*E+d*z+m*H,c[3]=f*x+d*U+m*F,c[6]=f*v+d*w+m*O,c[1]=p*E+g*z+_*H,c[4]=p*x+g*U+_*F,c[7]=p*v+g*w+_*O,c[2]=S*E+M*z+T*H,c[5]=S*x+M*U+T*F,c[8]=S*v+M*w+T*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],a=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*f*g-i*d*p-a*c*g+a*d*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],a=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*f-d*p,S=d*m-g*c,M=p*c-f*m,T=i*_+a*S+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/T;return t[0]=_*E,t[1]=(l*p-g*a)*E,t[2]=(d*a-l*f)*E,t[3]=S*E,t[4]=(g*i-l*m)*E,t[5]=(l*c-d*i)*E,t[6]=M*E,t[7]=(a*m-p*i)*E,t[8]=(f*i-a*c)*E,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,a,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(yh.makeScale(t,i)),this}rotate(t){return this.premultiply(yh.makeRotation(-t)),this}translate(t,i){return this.premultiply(yh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,-a,0,a,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,a=t.elements;for(let l=0;l<9;l++)if(i[l]!==a[l])return!1;return!0}fromArray(t,i=0){for(let a=0;a<9;a++)this.elements[a]=t[a+i];return this}toArray(t=[],i=0){const a=this.elements;return t[i]=a[0],t[i+1]=a[1],t[i+2]=a[2],t[i+3]=a[3],t[i+4]=a[4],t[i+5]=a[5],t[i+6]=a[6],t[i+7]=a[7],t[i+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const yh=new fe;function xv(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Kc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function sx(){const s=Kc("canvas");return s.style.display="block",s}const l_={};function Ls(s){s in l_||(l_[s]=!0,console.warn(s))}function ox(s,t,i){return new Promise(function(a,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:a()}}setTimeout(c,i)})}const c_=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),u_=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lx(){const s={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ve&&(l.r=ma(l.r),l.g=ma(l.g),l.b=ma(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ve&&(l.r=Ns(l.r),l.g=Ns(l.g),l.b=Ns(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ya?Zc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Ls("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Ls("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[Bs]:{primaries:t,whitePoint:a,transfer:Zc,toXYZ:c_,fromXYZ:u_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Yn},outputColorSpaceConfig:{drawingBufferColorSpace:Yn}},[Yn]:{primaries:t,whitePoint:a,transfer:Ve,toXYZ:c_,fromXYZ:u_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Yn}}}),s}const Ue=lx();function ma(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ns(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ms;class cx{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{ms===void 0&&(ms=Kc("canvas")),ms.width=t.width,ms.height=t.height;const l=ms.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),a=ms}return a.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Kc("canvas");i.width=t.width,i.height=t.height;const a=i.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const l=a.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ma(c[f]/255)*255;return a.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let a=0;a<i.length;a++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[a]=Math.floor(ma(i[a]/255)*255):i[a]=ma(i[a]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ux=0;class Kd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=Hs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(Sh(l[f].image)):c.push(Sh(l[f]))}else c=Sh(l);a.url=c}return i||(t.images[this.uuid]=a),a}}function Sh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?cx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fx=0;const Mh=new V;class Hn extends Fs{constructor(t=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,a=wr,l=wr,c=Ii,f=Cr,d=Ci,m=Gi,p=Hn.DEFAULT_ANISOTROPY,g=Ya){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=Hs(),this.name="",this.source=new Kd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=a,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Mh).x}get height(){return this.source.getSize(Mh).y}get depth(){return this.source.getSize(Mh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const a=t[i];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&a&&l.isVector2&&a.isVector2||l&&a&&l.isVector3&&a.isVector3||l&&a&&l.isMatrix3&&a.isMatrix3?l.copy(a):this[i]=a}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),i||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $o:t.x=t.x-Math.floor(t.x);break;case wr:t.x=t.x<0?0:1;break;case hd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $o:t.y=t.y-Math.floor(t.y);break;case wr:t.y=t.y<0?0:1;break;case hd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=fv;Hn.DEFAULT_ANISOTROPY=1;class ke{constructor(t=0,i=0,a=0,l=1){ke.prototype.isVector4=!0,this.x=t,this.y=i,this.z=a,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,a,l){return this.x=t,this.y=i,this.z=a,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,a=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*a+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*a+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*a+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*a+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,a,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],S=m[1],M=m[5],T=m[9],E=m[2],x=m[6],v=m[10];if(Math.abs(g-S)<.01&&Math.abs(_-E)<.01&&Math.abs(T-x)<.01){if(Math.abs(g+S)<.1&&Math.abs(_+E)<.1&&Math.abs(T+x)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,w=(M+1)/2,H=(v+1)/2,F=(g+S)/4,O=(_+E)/4,X=(T+x)/4;return U>w&&U>H?U<.01?(a=0,l=.707106781,c=.707106781):(a=Math.sqrt(U),l=F/a,c=O/a):w>H?w<.01?(a=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),a=F/l,c=X/l):H<.01?(a=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),a=O/c,l=X/c),this.set(a,l,c,i),this}let z=Math.sqrt((x-T)*(x-T)+(_-E)*(_-E)+(S-g)*(S-g));return Math.abs(z)<.001&&(z=1),this.x=(x-T)/z,this.y=(_-E)/z,this.z=(S-g)/z,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=pe(this.x,t.x,i.x),this.y=pe(this.y,t.y,i.y),this.z=pe(this.z,t.z,i.z),this.w=pe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=pe(this.x,t,i),this.y=pe(this.y,t,i),this.z=pe(this.z,t,i),this.w=pe(this.w,t,i),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(pe(a,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this.z=t.z+(i.z-t.z)*a,this.w=t.w+(i.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hx extends Fs{constructor(t=1,i=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=a.depth,this.scissor=new ke(0,0,t,i),this.scissorTest=!1,this.viewport=new ke(0,0,t,i);const l={width:t,height:i,depth:a.depth},c=new Hn(l);this.textures=[];const f=a.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const i={minFilter:Ii,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,a=1){if(this.width!==t||this.height!==i||this.depth!==a){this.width=t,this.height=i,this.depth=a;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=a,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,a=t.textures.length;i<a;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Kd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ur extends hx{constructor(t=1,i=1,a={}){super(t,i,a),this.isWebGLRenderTarget=!0}}class Ev extends Hn{constructor(t=null,i=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:a,depth:l},this.magFilter=Di,this.minFilter=Di,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class dx extends Hn{constructor(t=null,i=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:a,depth:l},this.magFilter=Di,this.minFilter=Di,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gs{constructor(t=new V(1/0,1/0,1/0),i=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,a=t.length;i<a;i+=3)this.expandByPoint(Ti.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,a=t.count;i<a;i++)this.expandByPoint(Ti.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,a=t.length;i<a;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const a=Ti.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Ti):Ti.fromBufferAttribute(c,f),Ti.applyMatrix4(t.matrixWorld),this.expandByPoint(Ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),vc.copy(a.boundingBox)),vc.applyMatrix4(t.matrixWorld),this.union(vc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ti),Ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,a;return t.normal.x>0?(i=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),i<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Io),yc.subVectors(this.max,Io),gs.subVectors(t.a,Io),_s.subVectors(t.b,Io),vs.subVectors(t.c,Io),Ga.subVectors(_s,gs),Va.subVectors(vs,_s),vr.subVectors(gs,vs);let i=[0,-Ga.z,Ga.y,0,-Va.z,Va.y,0,-vr.z,vr.y,Ga.z,0,-Ga.x,Va.z,0,-Va.x,vr.z,0,-vr.x,-Ga.y,Ga.x,0,-Va.y,Va.x,0,-vr.y,vr.x,0];return!xh(i,gs,_s,vs,yc)||(i=[1,0,0,0,1,0,0,0,1],!xh(i,gs,_s,vs,yc))?!1:(Sc.crossVectors(Ga,Va),i=[Sc.x,Sc.y,Sc.z],xh(i,gs,_s,vs,yc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const oa=[new V,new V,new V,new V,new V,new V,new V,new V],Ti=new V,vc=new Gs,gs=new V,_s=new V,vs=new V,Ga=new V,Va=new V,vr=new V,Io=new V,yc=new V,Sc=new V,yr=new V;function xh(s,t,i,a,l){for(let c=0,f=s.length-3;c<=f;c+=3){yr.fromArray(s,c);const d=l.x*Math.abs(yr.x)+l.y*Math.abs(yr.y)+l.z*Math.abs(yr.z),m=t.dot(yr),p=i.dot(yr),g=a.dot(yr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const px=new Gs,Fo=new V,Eh=new V;class tu{constructor(t=new V,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const a=this.center;i!==void 0?a.copy(i):px.setFromPoints(t).getCenter(a);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const a=this.center.distanceToSquared(t);return i.copy(t),a>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fo.subVectors(t,this.center);const i=Fo.lengthSq();if(i>this.radius*this.radius){const a=Math.sqrt(i),l=(a-this.radius)*.5;this.center.addScaledVector(Fo,l/a),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Eh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fo.copy(t.center).add(Eh)),this.expandByPoint(Fo.copy(t.center).sub(Eh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const la=new V,bh=new V,Mc=new V,ka=new V,Th=new V,xc=new V,Ah=new V;class Qd{constructor(t=new V,i=new V(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,la)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const a=i.dot(this.direction);return a<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=la.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(la.copy(this.origin).addScaledVector(this.direction,i),la.distanceToSquared(t))}distanceSqToSegment(t,i,a,l){bh.copy(t).add(i).multiplyScalar(.5),Mc.copy(i).sub(t).normalize(),ka.copy(this.origin).sub(bh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Mc),d=ka.dot(this.direction),m=-ka.dot(Mc),p=ka.lengthSq(),g=Math.abs(1-f*f);let _,S,M,T;if(g>0)if(_=f*m-d,S=f*d-m,T=c*g,_>=0)if(S>=-T)if(S<=T){const E=1/g;_*=E,S*=E,M=_*(_+f*S+2*d)+S*(f*_+S+2*m)+p}else S=c,_=Math.max(0,-(f*S+d)),M=-_*_+S*(S+2*m)+p;else S=-c,_=Math.max(0,-(f*S+d)),M=-_*_+S*(S+2*m)+p;else S<=-T?(_=Math.max(0,-(-f*c+d)),S=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+S*(S+2*m)+p):S<=T?(_=0,S=Math.min(Math.max(-c,-m),c),M=S*(S+2*m)+p):(_=Math.max(0,-(f*c+d)),S=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+S*(S+2*m)+p);else S=f>0?-c:c,_=Math.max(0,-(f*S+d)),M=-_*_+S*(S+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(bh).addScaledVector(Mc,S),M}intersectSphere(t,i){la.subVectors(t.center,this.origin);const a=la.dot(this.direction),l=la.dot(la)-a*a,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=a-f,m=a+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/i;return a>=0?a:null}intersectPlane(t,i){const a=this.distanceToPlane(t);return a===null?null:this.at(a,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let a,l,c,f,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(a=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(a=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),g>=0?(c=(t.min.y-S.y)*g,f=(t.max.y-S.y)*g):(c=(t.max.y-S.y)*g,f=(t.min.y-S.y)*g),a>f||c>l||((c>a||isNaN(a))&&(a=c),(f<l||isNaN(l))&&(l=f),_>=0?(d=(t.min.z-S.z)*_,m=(t.max.z-S.z)*_):(d=(t.max.z-S.z)*_,m=(t.min.z-S.z)*_),a>m||d>l)||((d>a||a!==a)&&(a=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(a>=0?a:l,i)}intersectsBox(t){return this.intersectBox(t,la)!==null}intersectTriangle(t,i,a,l,c){Th.subVectors(i,t),xc.subVectors(a,t),Ah.crossVectors(Th,xc);let f=this.direction.dot(Ah),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;ka.subVectors(this.origin,t);const m=d*this.direction.dot(xc.crossVectors(ka,xc));if(m<0)return null;const p=d*this.direction.dot(Th.cross(ka));if(p<0||m+p>f)return null;const g=-d*ka.dot(Ah);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(t,i,a,l,c,f,d,m,p,g,_,S,M,T,E,x){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,a,l,c,f,d,m,p,g,_,S,M,T,E,x)}set(t,i,a,l,c,f,d,m,p,g,_,S,M,T,E,x){const v=this.elements;return v[0]=t,v[4]=i,v[8]=a,v[12]=l,v[1]=c,v[5]=f,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=S,v[3]=M,v[7]=T,v[11]=E,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(t){const i=this.elements,a=t.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],i[9]=a[9],i[10]=a[10],i[11]=a[11],i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],this}copyPosition(t){const i=this.elements,a=t.elements;return i[12]=a[12],i[13]=a[13],i[14]=a[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,a){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,i,a){return this.set(t.x,i.x,a.x,0,t.y,i.y,a.y,0,t.z,i.z,a.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,a=t.elements,l=1/ys.setFromMatrixColumn(t,0).length(),c=1/ys.setFromMatrixColumn(t,1).length(),f=1/ys.setFromMatrixColumn(t,2).length();return i[0]=a[0]*l,i[1]=a[1]*l,i[2]=a[2]*l,i[3]=0,i[4]=a[4]*c,i[5]=a[5]*c,i[6]=a[6]*c,i[7]=0,i[8]=a[8]*f,i[9]=a[9]*f,i[10]=a[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,a=t.x,l=t.y,c=t.z,f=Math.cos(a),d=Math.sin(a),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const S=f*g,M=f*_,T=d*g,E=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=M+T*p,i[5]=S-E*p,i[9]=-d*m,i[2]=E-S*p,i[6]=T+M*p,i[10]=f*m}else if(t.order==="YXZ"){const S=m*g,M=m*_,T=p*g,E=p*_;i[0]=S+E*d,i[4]=T*d-M,i[8]=f*p,i[1]=f*_,i[5]=f*g,i[9]=-d,i[2]=M*d-T,i[6]=E+S*d,i[10]=f*m}else if(t.order==="ZXY"){const S=m*g,M=m*_,T=p*g,E=p*_;i[0]=S-E*d,i[4]=-f*_,i[8]=T+M*d,i[1]=M+T*d,i[5]=f*g,i[9]=E-S*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const S=f*g,M=f*_,T=d*g,E=d*_;i[0]=m*g,i[4]=T*p-M,i[8]=S*p+E,i[1]=m*_,i[5]=E*p+S,i[9]=M*p-T,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const S=f*m,M=f*p,T=d*m,E=d*p;i[0]=m*g,i[4]=E-S*_,i[8]=T*_+M,i[1]=_,i[5]=f*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*_+T,i[10]=S-E*_}else if(t.order==="XZY"){const S=f*m,M=f*p,T=d*m,E=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=S*_+E,i[5]=f*g,i[9]=M*_-T,i[2]=T*_-M,i[6]=d*g,i[10]=E*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mx,t,gx)}lookAt(t,i,a){const l=this.elements;return ai.subVectors(t,i),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Xa.crossVectors(a,ai),Xa.lengthSq()===0&&(Math.abs(a.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Xa.crossVectors(a,ai)),Xa.normalize(),Ec.crossVectors(ai,Xa),l[0]=Xa.x,l[4]=Ec.x,l[8]=ai.x,l[1]=Xa.y,l[5]=Ec.y,l[9]=ai.y,l[2]=Xa.z,l[6]=Ec.z,l[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const a=t.elements,l=i.elements,c=this.elements,f=a[0],d=a[4],m=a[8],p=a[12],g=a[1],_=a[5],S=a[9],M=a[13],T=a[2],E=a[6],x=a[10],v=a[14],z=a[3],U=a[7],w=a[11],H=a[15],F=l[0],O=l[4],X=l[8],C=l[12],D=l[1],B=l[5],st=l[9],lt=l[13],ut=l[2],dt=l[6],P=l[10],K=l[14],Y=l[3],yt=l[7],xt=l[11],N=l[15];return c[0]=f*F+d*D+m*ut+p*Y,c[4]=f*O+d*B+m*dt+p*yt,c[8]=f*X+d*st+m*P+p*xt,c[12]=f*C+d*lt+m*K+p*N,c[1]=g*F+_*D+S*ut+M*Y,c[5]=g*O+_*B+S*dt+M*yt,c[9]=g*X+_*st+S*P+M*xt,c[13]=g*C+_*lt+S*K+M*N,c[2]=T*F+E*D+x*ut+v*Y,c[6]=T*O+E*B+x*dt+v*yt,c[10]=T*X+E*st+x*P+v*xt,c[14]=T*C+E*lt+x*K+v*N,c[3]=z*F+U*D+w*ut+H*Y,c[7]=z*O+U*B+w*dt+H*yt,c[11]=z*X+U*st+w*P+H*xt,c[15]=z*C+U*lt+w*K+H*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],a=t[4],l=t[8],c=t[12],f=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],S=t[10],M=t[14],T=t[3],E=t[7],x=t[11],v=t[15];return T*(+c*m*_-l*p*_-c*d*S+a*p*S+l*d*M-a*m*M)+E*(+i*m*M-i*p*S+c*f*S-l*f*M+l*p*g-c*m*g)+x*(+i*p*_-i*d*M-c*f*_+a*f*M+c*d*g-a*p*g)+v*(-l*d*g-i*m*_+i*d*S+l*f*_-a*f*S+a*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,a){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=a),this}invert(){const t=this.elements,i=t[0],a=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],S=t[10],M=t[11],T=t[12],E=t[13],x=t[14],v=t[15],z=_*x*p-E*S*p+E*m*M-d*x*M-_*m*v+d*S*v,U=T*S*p-g*x*p-T*m*M+f*x*M+g*m*v-f*S*v,w=g*E*p-T*_*p+T*d*M-f*E*M-g*d*v+f*_*v,H=T*_*m-g*E*m-T*d*S+f*E*S+g*d*x-f*_*x,F=i*z+a*U+l*w+c*H;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/F;return t[0]=z*O,t[1]=(E*S*c-_*x*c-E*l*M+a*x*M+_*l*v-a*S*v)*O,t[2]=(d*x*c-E*m*c+E*l*p-a*x*p-d*l*v+a*m*v)*O,t[3]=(_*m*c-d*S*c-_*l*p+a*S*p+d*l*M-a*m*M)*O,t[4]=U*O,t[5]=(g*x*c-T*S*c+T*l*M-i*x*M-g*l*v+i*S*v)*O,t[6]=(T*m*c-f*x*c-T*l*p+i*x*p+f*l*v-i*m*v)*O,t[7]=(f*S*c-g*m*c+g*l*p-i*S*p-f*l*M+i*m*M)*O,t[8]=w*O,t[9]=(T*_*c-g*E*c-T*a*M+i*E*M+g*a*v-i*_*v)*O,t[10]=(f*E*c-T*d*c+T*a*p-i*E*p-f*a*v+i*d*v)*O,t[11]=(g*d*c-f*_*c-g*a*p+i*_*p+f*a*M-i*d*M)*O,t[12]=H*O,t[13]=(g*E*l-T*_*l+T*a*S-i*E*S-g*a*x+i*_*x)*O,t[14]=(T*d*l-f*E*l-T*a*m+i*E*m+f*a*x-i*d*x)*O,t[15]=(f*_*l-g*d*l+g*a*m-i*_*m-f*a*S+i*d*S)*O,this}scale(t){const i=this.elements,a=t.x,l=t.y,c=t.z;return i[0]*=a,i[4]*=l,i[8]*=c,i[1]*=a,i[5]*=l,i[9]*=c,i[2]*=a,i[6]*=l,i[10]*=c,i[3]*=a,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,a,l))}makeTranslation(t,i,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,a,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,i,-a,0,0,a,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,0,a,0,0,1,0,0,-a,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,-a,0,0,a,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const a=Math.cos(i),l=Math.sin(i),c=1-a,f=t.x,d=t.y,m=t.z,p=c*f,g=c*d;return this.set(p*f+a,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+a,g*m-l*f,0,p*m-l*d,g*m+l*f,c*m*m+a,0,0,0,0,1),this}makeScale(t,i,a){return this.set(t,0,0,0,0,i,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,i,a,l,c,f){return this.set(1,a,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,a){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,g=f+f,_=d+d,S=c*p,M=c*g,T=c*_,E=f*g,x=f*_,v=d*_,z=m*p,U=m*g,w=m*_,H=a.x,F=a.y,O=a.z;return l[0]=(1-(E+v))*H,l[1]=(M+w)*H,l[2]=(T-U)*H,l[3]=0,l[4]=(M-w)*F,l[5]=(1-(S+v))*F,l[6]=(x+z)*F,l[7]=0,l[8]=(T+U)*O,l[9]=(x-z)*O,l[10]=(1-(S+E))*O,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,a){const l=this.elements;let c=ys.set(l[0],l[1],l[2]).length();const f=ys.set(l[4],l[5],l[6]).length(),d=ys.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ai.copy(this);const p=1/c,g=1/f,_=1/d;return Ai.elements[0]*=p,Ai.elements[1]*=p,Ai.elements[2]*=p,Ai.elements[4]*=g,Ai.elements[5]*=g,Ai.elements[6]*=g,Ai.elements[8]*=_,Ai.elements[9]*=_,Ai.elements[10]*=_,i.setFromRotationMatrix(Ai),a.x=c,a.y=f,a.z=d,this}makePerspective(t,i,a,l,c,f,d=Fi,m=!1){const p=this.elements,g=2*c/(i-t),_=2*c/(a-l),S=(i+t)/(i-t),M=(a+l)/(a-l);let T,E;if(m)T=c/(f-c),E=f*c/(f-c);else if(d===Fi)T=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(d===jc)T=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,a,l,c,f,d=Fi,m=!1){const p=this.elements,g=2/(i-t),_=2/(a-l),S=-(i+t)/(i-t),M=-(a+l)/(a-l);let T,E;if(m)T=1/(f-c),E=f/(f-c);else if(d===Fi)T=-2/(f-c),E=-(f+c)/(f-c);else if(d===jc)T=-1/(f-c),E=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=T,p[14]=E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,a=t.elements;for(let l=0;l<16;l++)if(i[l]!==a[l])return!1;return!0}fromArray(t,i=0){for(let a=0;a<16;a++)this.elements[a]=t[a+i];return this}toArray(t=[],i=0){const a=this.elements;return t[i]=a[0],t[i+1]=a[1],t[i+2]=a[2],t[i+3]=a[3],t[i+4]=a[4],t[i+5]=a[5],t[i+6]=a[6],t[i+7]=a[7],t[i+8]=a[8],t[i+9]=a[9],t[i+10]=a[10],t[i+11]=a[11],t[i+12]=a[12],t[i+13]=a[13],t[i+14]=a[14],t[i+15]=a[15],t}}const ys=new V,Ai=new Ke,mx=new V(0,0,0),gx=new V(1,1,1),Xa=new V,Ec=new V,ai=new V,f_=new Ke,h_=new sl;class Vi{constructor(t=0,i=0,a=0,l=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=a,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,a,l=this._order){return this._x=t,this._y=i,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,a=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(pe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(pe(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-pe(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(pe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-pe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,a){return f_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(f_,i,a)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return h_.setFromEuler(this),this.setFromQuaternion(h_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class Jd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _x=0;const d_=new V,Ss=new sl,ca=new Ke,bc=new V,Ho=new V,vx=new V,yx=new sl,p_=new V(1,0,0),m_=new V(0,1,0),g_=new V(0,0,1),__={type:"added"},Sx={type:"removed"},Ms={type:"childadded",child:null},Rh={type:"childremoved",child:null};class _n extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=Hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const t=new V,i=new Vi,a=new sl,l=new V(1,1,1);function c(){a.setFromEuler(i,!1)}function f(){i.setFromQuaternion(a,void 0,!1)}i._onChange(c),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ke},normalMatrix:{value:new fe}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ss.setFromAxisAngle(t,i),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(t,i){return Ss.setFromAxisAngle(t,i),this.quaternion.premultiply(Ss),this}rotateX(t){return this.rotateOnAxis(p_,t)}rotateY(t){return this.rotateOnAxis(m_,t)}rotateZ(t){return this.rotateOnAxis(g_,t)}translateOnAxis(t,i){return d_.copy(t).applyQuaternion(this.quaternion),this.position.add(d_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(p_,t)}translateY(t){return this.translateOnAxis(m_,t)}translateZ(t){return this.translateOnAxis(g_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ca.copy(this.matrixWorld).invert())}lookAt(t,i,a){t.isVector3?bc.copy(t):bc.set(t,i,a);const l=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ca.lookAt(Ho,bc,this.up):ca.lookAt(bc,Ho,this.up),this.quaternion.setFromRotationMatrix(ca),l&&(ca.extractRotation(l.matrixWorld),Ss.setFromRotationMatrix(ca),this.quaternion.premultiply(Ss.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(__),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Sx),Rh.child=t,this.dispatchEvent(Rh),Rh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ca.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ca.multiply(t.parent.matrixWorld)),t.applyMatrix4(ca),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(__),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let a=0,l=this.children.length;a<l;a++){const f=this.children[a].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,a=[]){this[t]===i&&a.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,t,vx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,yx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].updateMatrixWorld(t)}updateWorldMatrix(t,i){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",a={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),_=f(t.shapes),S=f(t.skeletons),M=f(t.animations),T=f(t.nodes);d.length>0&&(a.geometries=d),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),S.length>0&&(a.skeletons=S),M.length>0&&(a.animations=M),T.length>0&&(a.nodes=T)}return a.object=l,a;function f(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let a=0;a<t.children.length;a++){const l=t.children[a];this.add(l.clone())}return this}}_n.DEFAULT_UP=new V(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new V,ua=new V,wh=new V,fa=new V,xs=new V,Es=new V,v_=new V,Ch=new V,Dh=new V,Uh=new V,Lh=new ke,Nh=new ke,Oh=new ke;class wi{constructor(t=new V,i=new V,a=new V){this.a=t,this.b=i,this.c=a}static getNormal(t,i,a,l){l.subVectors(a,i),Ri.subVectors(t,i),l.cross(Ri);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,a,l,c){Ri.subVectors(l,i),ua.subVectors(a,i),wh.subVectors(t,i);const f=Ri.dot(Ri),d=Ri.dot(ua),m=Ri.dot(wh),p=ua.dot(ua),g=ua.dot(wh),_=f*p-d*d;if(_===0)return c.set(0,0,0),null;const S=1/_,M=(p*m-d*g)*S,T=(f*g-d*m)*S;return c.set(1-M-T,T,M)}static containsPoint(t,i,a,l){return this.getBarycoord(t,i,a,l,fa)===null?!1:fa.x>=0&&fa.y>=0&&fa.x+fa.y<=1}static getInterpolation(t,i,a,l,c,f,d,m){return this.getBarycoord(t,i,a,l,fa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,fa.x),m.addScaledVector(f,fa.y),m.addScaledVector(d,fa.z),m)}static getInterpolatedAttribute(t,i,a,l,c,f){return Lh.setScalar(0),Nh.setScalar(0),Oh.setScalar(0),Lh.fromBufferAttribute(t,i),Nh.fromBufferAttribute(t,a),Oh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Lh,c.x),f.addScaledVector(Nh,c.y),f.addScaledVector(Oh,c.z),f}static isFrontFacing(t,i,a,l){return Ri.subVectors(a,i),ua.subVectors(t,i),Ri.cross(ua).dot(l)<0}set(t,i,a){return this.a.copy(t),this.b.copy(i),this.c.copy(a),this}setFromPointsAndIndices(t,i,a,l){return this.a.copy(t[i]),this.b.copy(t[a]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,a,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),ua.subVectors(this.a,this.b),Ri.cross(ua).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return wi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,a,l,c){return wi.getInterpolation(t,this.a,this.b,this.c,i,a,l,c)}containsPoint(t){return wi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const a=this.a,l=this.b,c=this.c;let f,d;xs.subVectors(l,a),Es.subVectors(c,a),Ch.subVectors(t,a);const m=xs.dot(Ch),p=Es.dot(Ch);if(m<=0&&p<=0)return i.copy(a);Dh.subVectors(t,l);const g=xs.dot(Dh),_=Es.dot(Dh);if(g>=0&&_<=g)return i.copy(l);const S=m*_-g*p;if(S<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(a).addScaledVector(xs,f);Uh.subVectors(t,c);const M=xs.dot(Uh),T=Es.dot(Uh);if(T>=0&&M<=T)return i.copy(c);const E=M*p-m*T;if(E<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(a).addScaledVector(Es,d);const x=g*T-M*_;if(x<=0&&_-g>=0&&M-T>=0)return v_.subVectors(c,l),d=(_-g)/(_-g+(M-T)),i.copy(l).addScaledVector(v_,d);const v=1/(x+E+S);return f=E*v,d=S*v,i.copy(a).addScaledVector(xs,f).addScaledVector(Es,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const bv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wa={h:0,s:0,l:0},Tc={h:0,s:0,l:0};function Ph(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class me{constructor(t,i,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,a)}set(t,i,a){if(i===void 0&&a===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Yn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.colorSpaceToWorking(this,i),this}setRGB(t,i,a,l=Ue.workingColorSpace){return this.r=t,this.g=i,this.b=a,Ue.colorSpaceToWorking(this,l),this}setHSL(t,i,a,l=Ue.workingColorSpace){if(t=jd(t,1),i=pe(i,0,1),a=pe(a,0,1),i===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+i):a+i-a*i,f=2*a-c;this.r=Ph(f,c,t+1/3),this.g=Ph(f,c,t),this.b=Ph(f,c,t-1/3)}return Ue.colorSpaceToWorking(this,l),this}setStyle(t,i=Yn){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Yn){const a=bv[t.toLowerCase()];return a!==void 0?this.setHex(a,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ma(t.r),this.g=ma(t.g),this.b=ma(t.b),this}copyLinearToSRGB(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Yn){return Ue.workingToColorSpace(Nn.copy(this),t),Math.round(pe(Nn.r*255,0,255))*65536+Math.round(pe(Nn.g*255,0,255))*256+Math.round(pe(Nn.b*255,0,255))}getHexString(t=Yn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ue.workingColorSpace){Ue.workingToColorSpace(Nn.copy(this),i);const a=Nn.r,l=Nn.g,c=Nn.b,f=Math.max(a,l,c),d=Math.min(a,l,c);let m,p;const g=(d+f)/2;if(d===f)m=0,p=0;else{const _=f-d;switch(p=g<=.5?_/(f+d):_/(2-f-d),f){case a:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-a)/_+2;break;case c:m=(a-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ue.workingColorSpace){return Ue.workingToColorSpace(Nn.copy(this),i),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=Yn){Ue.workingToColorSpace(Nn.copy(this),t);const i=Nn.r,a=Nn.g,l=Nn.b;return t!==Yn?`color(${t} ${i.toFixed(3)} ${a.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(a*255)},${Math.round(l*255)})`}offsetHSL(t,i,a){return this.getHSL(Wa),this.setHSL(Wa.h+t,Wa.s+i,Wa.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,a){return this.r=t.r+(i.r-t.r)*a,this.g=t.g+(i.g-t.g)*a,this.b=t.b+(i.b-t.b)*a,this}lerpHSL(t,i){this.getHSL(Wa),t.getHSL(Tc);const a=jo(Wa.h,Tc.h,i),l=jo(Wa.s,Tc.s,i),c=jo(Wa.l,Tc.l,i);return this.setHSL(a,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,a=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*a+c[6]*l,this.g=c[1]*i+c[4]*a+c[7]*l,this.b=c[2]*i+c[5]*a+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new me;me.NAMES=bv;let Mx=0;class Vs extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=Hs(),this.name="",this.type="Material",this.blending=Us,this.side=Ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ed,this.blendDst=nd,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=i_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const a=t[i];if(a===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(a):l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[i]=a}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(a.blending=this.blending),this.side!==Ka&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==ed&&(a.blendSrc=this.blendSrc),this.blendDst!==nd&&(a.blendDst=this.blendDst),this.blendEquation!==Ar&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==i_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(a.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(a.textures=c),f.length>0&&(a.images=f)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let a=null;if(i!==null){const l=i.length;a=new Array(l);for(let c=0;c!==l;++c)a[c]=i[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class $d extends Vs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=cv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new V,Ac=new ee;let xx=0;class yi{constructor(t,i,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xx++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=a,this.usage=a_,this.updateRanges=[],this.gpuType=pa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,a){t*=this.itemSize,a*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[a+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,a=this.count;i<a;i++)Ac.fromBufferAttribute(this,i),Ac.applyMatrix3(t),this.setXY(i,Ac.x,Ac.y);else if(this.itemSize===3)for(let i=0,a=this.count;i<a;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,a=this.count;i<a;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,a=this.count;i<a;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,a=this.count;i<a;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let a=this.array[t*this.itemSize+i];return this.normalized&&(a=Cs(a,this.array)),a}setComponent(t,i,a){return this.normalized&&(a=In(a,this.array)),this.array[t*this.itemSize+i]=a,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Cs(i,this.array)),i}setX(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Cs(i,this.array)),i}setY(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Cs(i,this.array)),i}setZ(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Cs(i,this.array)),i}setW(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,a){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),a=In(a,this.array)),this.array[t+0]=i,this.array[t+1]=a,this}setXYZ(t,i,a,l){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),a=In(a,this.array),l=In(l,this.array)),this.array[t+0]=i,this.array[t+1]=a,this.array[t+2]=l,this}setXYZW(t,i,a,l,c){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),a=In(a,this.array),l=In(l,this.array),c=In(c,this.array)),this.array[t+0]=i,this.array[t+1]=a,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==a_&&(t.usage=this.usage),t}}class Tv extends yi{constructor(t,i,a){super(new Uint16Array(t),i,a)}}class Av extends yi{constructor(t,i,a){super(new Uint32Array(t),i,a)}}class En extends yi{constructor(t,i,a){super(new Float32Array(t),i,a)}}let Ex=0;const _i=new Ke,zh=new _n,bs=new V,ri=new Gs,Go=new Gs,xn=new V;class Mi extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=Hs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xv(t)?Av:Tv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,a=0){this.groups.push({start:t,count:i,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new fe().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _i.makeRotationFromQuaternion(t),this.applyMatrix4(_i),this}rotateX(t){return _i.makeRotationX(t),this.applyMatrix4(_i),this}rotateY(t){return _i.makeRotationY(t),this.applyMatrix4(_i),this}rotateZ(t){return _i.makeRotationZ(t),this.applyMatrix4(_i),this}translate(t,i,a){return _i.makeTranslation(t,i,a),this.applyMatrix4(_i),this}scale(t,i,a){return _i.makeScale(t,i,a),this.applyMatrix4(_i),this}lookAt(t){return zh.lookAt(t),zh.updateMatrix(),this.applyMatrix4(zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const a=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new En(a,3))}else{const a=Math.min(t.length,i.count);for(let l=0;l<a;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gs);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let a=0,l=i.length;a<l;a++){const c=i[a];ri.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const a=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Go.setFromBufferAttribute(d),this.morphTargetsRelative?(xn.addVectors(ri.min,Go.min),ri.expandByPoint(xn),xn.addVectors(ri.max,Go.max),ri.expandByPoint(xn)):(ri.expandByPoint(Go.min),ri.expandByPoint(Go.max))}ri.getCenter(a);let l=0;for(let c=0,f=t.count;c<f;c++)xn.fromBufferAttribute(t,c),l=Math.max(l,a.distanceToSquared(xn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)xn.fromBufferAttribute(d,p),m&&(bs.fromBufferAttribute(t,p),xn.add(bs)),l=Math.max(l,a.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*a.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let X=0;X<a.count;X++)d[X]=new V,m[X]=new V;const p=new V,g=new V,_=new V,S=new ee,M=new ee,T=new ee,E=new V,x=new V;function v(X,C,D){p.fromBufferAttribute(a,X),g.fromBufferAttribute(a,C),_.fromBufferAttribute(a,D),S.fromBufferAttribute(c,X),M.fromBufferAttribute(c,C),T.fromBufferAttribute(c,D),g.sub(p),_.sub(p),M.sub(S),T.sub(S);const B=1/(M.x*T.y-T.x*M.y);isFinite(B)&&(E.copy(g).multiplyScalar(T.y).addScaledVector(_,-M.y).multiplyScalar(B),x.copy(_).multiplyScalar(M.x).addScaledVector(g,-T.x).multiplyScalar(B),d[X].add(E),d[C].add(E),d[D].add(E),m[X].add(x),m[C].add(x),m[D].add(x))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let X=0,C=z.length;X<C;++X){const D=z[X],B=D.start,st=D.count;for(let lt=B,ut=B+st;lt<ut;lt+=3)v(t.getX(lt+0),t.getX(lt+1),t.getX(lt+2))}const U=new V,w=new V,H=new V,F=new V;function O(X){H.fromBufferAttribute(l,X),F.copy(H);const C=d[X];U.copy(C),U.sub(H.multiplyScalar(H.dot(C))).normalize(),w.crossVectors(F,C);const B=w.dot(m[X])<0?-1:1;f.setXYZW(X,U.x,U.y,U.z,B)}for(let X=0,C=z.length;X<C;++X){const D=z[X],B=D.start,st=D.count;for(let lt=B,ut=B+st;lt<ut;lt+=3)O(t.getX(lt+0)),O(t.getX(lt+1)),O(t.getX(lt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new yi(new Float32Array(i.count*3),3),this.setAttribute("normal",a);else for(let S=0,M=a.count;S<M;S++)a.setXYZ(S,0,0,0);const l=new V,c=new V,f=new V,d=new V,m=new V,p=new V,g=new V,_=new V;if(t)for(let S=0,M=t.count;S<M;S+=3){const T=t.getX(S+0),E=t.getX(S+1),x=t.getX(S+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,E),f.fromBufferAttribute(i,x),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(a,T),m.fromBufferAttribute(a,E),p.fromBufferAttribute(a,x),d.add(g),m.add(g),p.add(g),a.setXYZ(T,d.x,d.y,d.z),a.setXYZ(E,m.x,m.y,m.z),a.setXYZ(x,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),f.fromBufferAttribute(i,S+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),a.setXYZ(S+0,g.x,g.y,g.z),a.setXYZ(S+1,g.x,g.y,g.z),a.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,a=t.count;i<a;i++)xn.fromBufferAttribute(t,i),xn.normalize(),t.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,_=d.normalized,S=new p.constructor(m.length*g);let M=0,T=0;for(let E=0,x=m.length;E<x;E++){d.isInterleavedBufferAttribute?M=m[E]*d.data.stride+d.offset:M=m[E]*g;for(let v=0;v<g;v++)S[T++]=p[M++]}return new yi(S,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Mi,a=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,a);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const S=p[g],M=t(S,a);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const a=this.attributes;for(const m in a){const p=a[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,S=p.length;_<S;_++){const M=p[_];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let S=0,M=_.length;S<M;S++)g.push(_[S].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const y_=new Ke,Sr=new Qd,Rc=new tu,S_=new V,wc=new V,Cc=new V,Dc=new V,Bh=new V,Uc=new V,M_=new V,Lc=new V;class Zn extends _n{constructor(t=new Mi,i=new $d){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const l=i[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const a=this.geometry,l=a.attributes.position,c=a.morphAttributes.position,f=a.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Uc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(Bh.fromBufferAttribute(_,t),f?Uc.addScaledVector(Bh,g):Uc.addScaledVector(Bh.sub(i),g))}i.add(Uc)}return i}raycast(t,i){const a=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Rc.copy(a.boundingSphere),Rc.applyMatrix4(c),Sr.copy(t.ray).recast(t.near),!(Rc.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(Rc,S_)===null||Sr.origin.distanceToSquared(S_)>(t.far-t.near)**2))&&(y_.copy(c).invert(),Sr.copy(t.ray).applyMatrix4(y_),!(a.boundingBox!==null&&Sr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,i,Sr)))}_computeIntersections(t,i,a){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,S=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(f))for(let T=0,E=S.length;T<E;T++){const x=S[T],v=f[x.materialIndex],z=Math.max(x.start,M.start),U=Math.min(d.count,Math.min(x.start+x.count,M.start+M.count));for(let w=z,H=U;w<H;w+=3){const F=d.getX(w),O=d.getX(w+1),X=d.getX(w+2);l=Nc(this,v,t,a,p,g,_,F,O,X),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),E=Math.min(d.count,M.start+M.count);for(let x=T,v=E;x<v;x+=3){const z=d.getX(x),U=d.getX(x+1),w=d.getX(x+2);l=Nc(this,f,t,a,p,g,_,z,U,w),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let T=0,E=S.length;T<E;T++){const x=S[T],v=f[x.materialIndex],z=Math.max(x.start,M.start),U=Math.min(m.count,Math.min(x.start+x.count,M.start+M.count));for(let w=z,H=U;w<H;w+=3){const F=w,O=w+1,X=w+2;l=Nc(this,v,t,a,p,g,_,F,O,X),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),E=Math.min(m.count,M.start+M.count);for(let x=T,v=E;x<v;x+=3){const z=x,U=x+1,w=x+2;l=Nc(this,f,t,a,p,g,_,z,U,w),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function bx(s,t,i,a,l,c,f,d){let m;if(t.side===jn?m=a.intersectTriangle(f,c,l,!0,d):m=a.intersectTriangle(l,c,f,t.side===Ka,d),m===null)return null;Lc.copy(d),Lc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Lc);return p<i.near||p>i.far?null:{distance:p,point:Lc.clone(),object:s}}function Nc(s,t,i,a,l,c,f,d,m,p){s.getVertexPosition(d,wc),s.getVertexPosition(m,Cc),s.getVertexPosition(p,Dc);const g=bx(s,t,i,a,wc,Cc,Dc,M_);if(g){const _=new V;wi.getBarycoord(M_,wc,Cc,Dc,_),l&&(g.uv=wi.getInterpolatedAttribute(l,d,m,p,_,new ee)),c&&(g.uv1=wi.getInterpolatedAttribute(c,d,m,p,_,new ee)),f&&(g.normal=wi.getInterpolatedAttribute(f,d,m,p,_,new V),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new V,materialIndex:0};wi.getNormal(wc,Cc,Dc,S.normal),g.face=S,g.barycoord=_}return g}class Ja extends Mi{constructor(t=1,i=1,a=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:a,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],_=[];let S=0,M=0;T("z","y","x",-1,-1,a,i,t,f,c,0),T("z","y","x",1,-1,a,i,-t,f,c,1),T("x","z","y",1,1,t,a,i,l,f,2),T("x","z","y",1,-1,t,a,-i,l,f,3),T("x","y","z",1,-1,t,i,a,l,c,4),T("x","y","z",-1,-1,t,i,-a,l,c,5),this.setIndex(m),this.setAttribute("position",new En(p,3)),this.setAttribute("normal",new En(g,3)),this.setAttribute("uv",new En(_,2));function T(E,x,v,z,U,w,H,F,O,X,C){const D=w/O,B=H/X,st=w/2,lt=H/2,ut=F/2,dt=O+1,P=X+1;let K=0,Y=0;const yt=new V;for(let xt=0;xt<P;xt++){const N=xt*B-lt;for(let it=0;it<dt;it++){const Mt=it*D-st;yt[E]=Mt*z,yt[x]=N*U,yt[v]=ut,p.push(yt.x,yt.y,yt.z),yt[E]=0,yt[x]=0,yt[v]=F>0?1:-1,g.push(yt.x,yt.y,yt.z),_.push(it/O),_.push(1-xt/X),K+=1}}for(let xt=0;xt<X;xt++)for(let N=0;N<O;N++){const it=S+N+dt*xt,Mt=S+N+dt*(xt+1),Ct=S+(N+1)+dt*(xt+1),J=S+(N+1)+dt*xt;m.push(it,Mt,J),m.push(Mt,Ct,J),Y+=6}d.addGroup(M,Y,C),M+=Y,S+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ja(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Is(s){const t={};for(const i in s){t[i]={};for(const a in s[i]){const l=s[i][a];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][a]=null):t[i][a]=l.clone():Array.isArray(l)?t[i][a]=l.slice():t[i][a]=l}}return t}function Fn(s){const t={};for(let i=0;i<s.length;i++){const a=Is(s[i]);for(const l in a)t[l]=a[l]}return t}function Tx(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function Rv(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}const Ax={clone:Is,merge:Fn};var Rx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qa extends Vs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rx,this.fragmentShader=wx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=Tx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(i.extensions=a),i}}class wv extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qa=new V,x_=new ee,E_=new ee;class si extends wv{constructor(t=50,i=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=al*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return al*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,a){qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qa.x,qa.y).multiplyScalar(-t/qa.z),qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(qa.x,qa.y).multiplyScalar(-t/qa.z)}getViewSize(t,i){return this.getViewBounds(t,x_,E_),i.subVectors(E_,x_)}setViewOffset(t,i,a,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Zo*.5*this.fov)/this.zoom,a=2*i,l=this.aspect*a,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*a/p,l*=f.width/m,a*=f.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ts=-90,As=1;class Cx extends _n{constructor(t,i,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new si(Ts,As,t,i);l.layers=this.layers,this.add(l);const c=new si(Ts,As,t,i);c.layers=this.layers,this.add(c);const f=new si(Ts,As,t,i);f.layers=this.layers,this.add(f);const d=new si(Ts,As,t,i);d.layers=this.layers,this.add(d);const m=new si(Ts,As,t,i);m.layers=this.layers,this.add(m);const p=new si(Ts,As,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[a,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(t===Fi)a.up.set(0,1,0),a.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===jc)a.up.set(0,-1,0),a.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,g]=this.children,_=t.getRenderTarget(),S=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const E=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,l),t.render(i,c),t.setRenderTarget(a,1,l),t.render(i,f),t.setRenderTarget(a,2,l),t.render(i,d),t.setRenderTarget(a,3,l),t.render(i,m),t.setRenderTarget(a,4,l),t.render(i,p),a.texture.generateMipmaps=E,t.setRenderTarget(a,5,l),t.render(i,g),t.setRenderTarget(_,S,M),t.xr.enabled=T,a.texture.needsPMREMUpdate=!0}}class Cv extends Hn{constructor(t=[],i=Ps,a,l,c,f,d,m,p,g){super(t,i,a,l,c,f,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Dx extends Ur{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},l=[a,a,a,a,a,a];this.texture=new Cv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ja(5,5,5),c=new Qa({name:"CubemapFromEquirect",uniforms:Is(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:jn,blending:Za});c.uniforms.tEquirect.value=i;const f=new Zn(l,c),d=i.minFilter;return i.minFilter===Cr&&(i.minFilter=Ii),new Cx(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,a=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,a,l);t.setRenderTarget(c)}}class le extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ux={type:"move"};class Ih{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const a of t.hand.values())this._getHandJoint(i,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,a){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const E of t.hand.values()){const x=i.getJointPose(E,a),v=this._getHandJoint(p,E);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=g.position.distanceTo(_.position),M=.02,T=.005;p.inputState.pinching&&S>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,a),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Ux)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const a=new le;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[i.jointName]=a,t.add(a)}return t.joints[i.jointName]}}class tp{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new me(t),this.density=i}clone(){return new tp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Lx extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Fh=new V,Nx=new V,Ox=new fe;class br{constructor(t=new V(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,a,l){return this.normal.set(t,i,a),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,a){const l=Fh.subVectors(a,i).cross(Nx.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const a=t.delta(Fh),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return i<0&&a>0||a<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const a=i||Ox.getNormalMatrix(t),l=this.coplanarPoint(Fh).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mr=new tu,Px=new ee(.5,.5),Oc=new V;class ep{constructor(t=new br,i=new br,a=new br,l=new br,c=new br,f=new br){this.planes=[t,i,a,l,c,f]}set(t,i,a,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(a),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let a=0;a<6;a++)i[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,i=Fi,a=!1){const l=this.planes,c=t.elements,f=c[0],d=c[1],m=c[2],p=c[3],g=c[4],_=c[5],S=c[6],M=c[7],T=c[8],E=c[9],x=c[10],v=c[11],z=c[12],U=c[13],w=c[14],H=c[15];if(l[0].setComponents(p-f,M-g,v-T,H-z).normalize(),l[1].setComponents(p+f,M+g,v+T,H+z).normalize(),l[2].setComponents(p+d,M+_,v+E,H+U).normalize(),l[3].setComponents(p-d,M-_,v-E,H-U).normalize(),a)l[4].setComponents(m,S,x,w).normalize(),l[5].setComponents(p-m,M-S,v-x,H-w).normalize();else if(l[4].setComponents(p-m,M-S,v-x,H-w).normalize(),i===Fi)l[5].setComponents(p+m,M+S,v+x,H+w).normalize();else if(i===jc)l[5].setComponents(m,S,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Mr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(t){Mr.center.set(0,0,0);const i=Px.distanceTo(t.center);return Mr.radius=.7071067811865476+i,Mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(t){const i=this.planes,a=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(a)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let a=0;a<6;a++){const l=i[a];if(Oc.x=l.normal.x>0?t.max.x:t.min.x,Oc.y=l.normal.y>0?t.max.y:t.min.y,Oc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Oc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let a=0;a<6;a++)if(i[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class np extends Vs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Qc=new V,Jc=new V,b_=new Ke,Vo=new Qd,Pc=new tu,Hh=new V,T_=new V;class zx extends _n{constructor(t=new Mi,i=new np){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,a=[0];for(let l=1,c=i.count;l<c;l++)Qc.fromBufferAttribute(i,l-1),Jc.fromBufferAttribute(i,l),a[l]=a[l-1],a[l]+=Qc.distanceTo(Jc);t.setAttribute("lineDistance",new En(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const a=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Pc.copy(a.boundingSphere),Pc.applyMatrix4(l),Pc.radius+=c,t.ray.intersectsSphere(Pc)===!1)return;b_.copy(l).invert(),Vo.copy(t.ray).applyMatrix4(b_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=a.index,S=a.attributes.position;if(g!==null){const M=Math.max(0,f.start),T=Math.min(g.count,f.start+f.count);for(let E=M,x=T-1;E<x;E+=p){const v=g.getX(E),z=g.getX(E+1),U=zc(this,t,Vo,m,v,z,E);U&&i.push(U)}if(this.isLineLoop){const E=g.getX(T-1),x=g.getX(M),v=zc(this,t,Vo,m,E,x,T-1);v&&i.push(v)}}else{const M=Math.max(0,f.start),T=Math.min(S.count,f.start+f.count);for(let E=M,x=T-1;E<x;E+=p){const v=zc(this,t,Vo,m,E,E+1,E);v&&i.push(v)}if(this.isLineLoop){const E=zc(this,t,Vo,m,T-1,M,T-1);E&&i.push(E)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const l=i[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function zc(s,t,i,a,l,c,f){const d=s.geometry.attributes.position;if(Qc.fromBufferAttribute(d,l),Jc.fromBufferAttribute(d,c),i.distanceSqToSegment(Qc,Jc,Hh,T_)>a)return;Hh.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Hh);if(!(p<t.near||p>t.far))return{distance:p,point:T_.clone().applyMatrix4(s.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:s}}const A_=new V,R_=new V;class Bx extends zx{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,a=[];for(let l=0,c=i.count;l<c;l+=2)A_.fromBufferAttribute(i,l),R_.fromBufferAttribute(i,l+1),a[l]=l===0?0:a[l-1],a[l+1]=a[l]+A_.distanceTo(R_);t.setAttribute("lineDistance",new En(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ix extends Hn{constructor(t,i,a,l,c,f,d,m,p){super(t,i,a,l,c,f,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Dv extends Hn{constructor(t,i,a=Dr,l,c,f,d=Di,m=Di,p,g=nl,_=1){if(g!==nl&&g!==il)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:_};super(S,l,c,f,d,m,g,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Kd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ip extends Mi{constructor(t=1,i=1,a=1,l=32,c=1,f=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:a,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const g=[],_=[],S=[],M=[];let T=0;const E=[],x=a/2;let v=0;z(),f===!1&&(t>0&&U(!0),i>0&&U(!1)),this.setIndex(g),this.setAttribute("position",new En(_,3)),this.setAttribute("normal",new En(S,3)),this.setAttribute("uv",new En(M,2));function z(){const w=new V,H=new V;let F=0;const O=(i-t)/a;for(let X=0;X<=c;X++){const C=[],D=X/c,B=D*(i-t)+t;for(let st=0;st<=l;st++){const lt=st/l,ut=lt*m+d,dt=Math.sin(ut),P=Math.cos(ut);H.x=B*dt,H.y=-D*a+x,H.z=B*P,_.push(H.x,H.y,H.z),w.set(dt,O,P).normalize(),S.push(w.x,w.y,w.z),M.push(lt,1-D),C.push(T++)}E.push(C)}for(let X=0;X<l;X++)for(let C=0;C<c;C++){const D=E[C][X],B=E[C+1][X],st=E[C+1][X+1],lt=E[C][X+1];(t>0||C!==0)&&(g.push(D,B,lt),F+=3),(i>0||C!==c-1)&&(g.push(B,st,lt),F+=3)}p.addGroup(v,F,0),v+=F}function U(w){const H=T,F=new ee,O=new V;let X=0;const C=w===!0?t:i,D=w===!0?1:-1;for(let st=1;st<=l;st++)_.push(0,x*D,0),S.push(0,D,0),M.push(.5,.5),T++;const B=T;for(let st=0;st<=l;st++){const ut=st/l*m+d,dt=Math.cos(ut),P=Math.sin(ut);O.x=C*P,O.y=x*D,O.z=C*dt,_.push(O.x,O.y,O.z),S.push(0,D,0),F.x=dt*.5+.5,F.y=P*.5*D+.5,M.push(F.x,F.y),T++}for(let st=0;st<l;st++){const lt=H+st,ut=B+st;w===!0?g.push(ut,ut+1,lt):g.push(ut+1,ut,lt),X+=3}p.addGroup(v,X,w===!0?1:2),v+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ip(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ga{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,i){const a=this.getUtoTmapping(t);return this.getPoint(a,i)}getPoints(t=5){const i=[];for(let a=0;a<=t;a++)i.push(this.getPoint(a/t));return i}getSpacedPoints(t=5){const i=[];for(let a=0;a<=t;a++)i.push(this.getPointAt(a/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let a,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)a=this.getPoint(f/t),c+=a.distanceTo(l),i.push(c),l=a;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const a=this.getLengths();let l=0;const c=a.length;let f;i?f=i:f=t*a[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=a[l]-f,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,a[l]===f)return l/(c-1);const g=a[l],S=a[l+1]-g,M=(f-g)/S;return(l+M)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),d=this.getPoint(c),m=i||(f.isVector2?new ee:new V);return m.copy(d).sub(f).normalize(),m}getTangentAt(t,i){const a=this.getUtoTmapping(t);return this.getTangent(a,i)}computeFrenetFrames(t,i=!1){const a=new V,l=[],c=[],f=[],d=new V,m=new Ke;for(let M=0;M<=t;M++){const T=M/t;l[M]=this.getTangentAt(T,new V)}c[0]=new V,f[0]=new V;let p=Number.MAX_VALUE;const g=Math.abs(l[0].x),_=Math.abs(l[0].y),S=Math.abs(l[0].z);g<=p&&(p=g,a.set(1,0,0)),_<=p&&(p=_,a.set(0,1,0)),S<=p&&a.set(0,0,1),d.crossVectors(l[0],a).normalize(),c[0].crossVectors(l[0],d),f[0].crossVectors(l[0],c[0]);for(let M=1;M<=t;M++){if(c[M]=c[M-1].clone(),f[M]=f[M-1].clone(),d.crossVectors(l[M-1],l[M]),d.length()>Number.EPSILON){d.normalize();const T=Math.acos(pe(l[M-1].dot(l[M]),-1,1));c[M].applyMatrix4(m.makeRotationAxis(d,T))}f[M].crossVectors(l[M],c[M])}if(i===!0){let M=Math.acos(pe(c[0].dot(c[t]),-1,1));M/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(M=-M);for(let T=1;T<=t;T++)c[T].applyMatrix4(m.makeRotationAxis(l[T],M*T)),f[T].crossVectors(l[T],c[T])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Uv extends ga{constructor(t=0,i=0,a=1,l=1,c=0,f=Math.PI*2,d=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=a,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=d,this.aRotation=m}getPoint(t,i=new ee){const a=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),S=m-this.aX,M=p-this.aY;m=S*g-M*_+this.aX,p=S*_+M*g+this.aY}return a.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Fx extends Uv{constructor(t,i,a,l,c,f){super(t,i,a,a,l,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function ap(){let s=0,t=0,i=0,a=0;function l(c,f,d,m){s=c,t=d,i=-3*c+3*f-2*d-m,a=2*c-2*f+d+m}return{initCatmullRom:function(c,f,d,m,p){l(f,d,p*(d-c),p*(m-f))},initNonuniformCatmullRom:function(c,f,d,m,p,g,_){let S=(f-c)/p-(d-c)/(p+g)+(d-f)/g,M=(d-f)/g-(m-f)/(g+_)+(m-d)/_;S*=g,M*=g,l(f,d,S,M)},calc:function(c){const f=c*c,d=f*c;return s+t*c+i*f+a*d}}}const Bc=new V,Gh=new ap,Vh=new ap,kh=new ap;class Lv extends ga{constructor(t=[],i=!1,a="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=a,this.tension=l}getPoint(t,i=new V){const a=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let d=Math.floor(f),m=f-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let p,g;this.closed||d>0?p=l[(d-1)%c]:(Bc.subVectors(l[0],l[1]).add(l[0]),p=Bc);const _=l[d%c],S=l[(d+1)%c];if(this.closed||d+2<c?g=l[(d+2)%c]:(Bc.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=Bc),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let T=Math.pow(p.distanceToSquared(_),M),E=Math.pow(_.distanceToSquared(S),M),x=Math.pow(S.distanceToSquared(g),M);E<1e-4&&(E=1),T<1e-4&&(T=E),x<1e-4&&(x=E),Gh.initNonuniformCatmullRom(p.x,_.x,S.x,g.x,T,E,x),Vh.initNonuniformCatmullRom(p.y,_.y,S.y,g.y,T,E,x),kh.initNonuniformCatmullRom(p.z,_.z,S.z,g.z,T,E,x)}else this.curveType==="catmullrom"&&(Gh.initCatmullRom(p.x,_.x,S.x,g.x,this.tension),Vh.initCatmullRom(p.y,_.y,S.y,g.y,this.tension),kh.initCatmullRom(p.z,_.z,S.z,g.z,this.tension));return a.set(Gh.calc(m),Vh.calc(m),kh.calc(m)),a}copy(t){super.copy(t),this.points=[];for(let i=0,a=t.points.length;i<a;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,a=this.points.length;i<a;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,a=t.points.length;i<a;i++){const l=t.points[i];this.points.push(new V().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function w_(s,t,i,a,l){const c=(a-t)*.5,f=(l-i)*.5,d=s*s,m=s*d;return(2*i-2*a+c+f)*m+(-3*i+3*a-2*c-f)*d+c*s+i}function Hx(s,t){const i=1-s;return i*i*t}function Gx(s,t){return 2*(1-s)*s*t}function Vx(s,t){return s*s*t}function Ko(s,t,i,a){return Hx(s,t)+Gx(s,i)+Vx(s,a)}function kx(s,t){const i=1-s;return i*i*i*t}function Xx(s,t){const i=1-s;return 3*i*i*s*t}function Wx(s,t){return 3*(1-s)*s*s*t}function qx(s,t){return s*s*s*t}function Qo(s,t,i,a,l){return kx(s,t)+Xx(s,i)+Wx(s,a)+qx(s,l)}class Yx extends ga{constructor(t=new ee,i=new ee,a=new ee,l=new ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=a,this.v3=l}getPoint(t,i=new ee){const a=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return a.set(Qo(t,l.x,c.x,f.x,d.x),Qo(t,l.y,c.y,f.y,d.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Zx extends ga{constructor(t=new V,i=new V,a=new V,l=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=a,this.v3=l}getPoint(t,i=new V){const a=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return a.set(Qo(t,l.x,c.x,f.x,d.x),Qo(t,l.y,c.y,f.y,d.y),Qo(t,l.z,c.z,f.z,d.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class jx extends ga{constructor(t=new ee,i=new ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new ee){const a=i;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new ee){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kx extends ga{constructor(t=new V,i=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new V){const a=i;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new V){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qx extends ga{constructor(t=new ee,i=new ee,a=new ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=a}getPoint(t,i=new ee){const a=i,l=this.v0,c=this.v1,f=this.v2;return a.set(Ko(t,l.x,c.x,f.x),Ko(t,l.y,c.y,f.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nv extends ga{constructor(t=new V,i=new V,a=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=a}getPoint(t,i=new V){const a=i,l=this.v0,c=this.v1,f=this.v2;return a.set(Ko(t,l.x,c.x,f.x),Ko(t,l.y,c.y,f.y),Ko(t,l.z,c.z,f.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jx extends ga{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new ee){const a=i,l=this.points,c=(l.length-1)*t,f=Math.floor(c),d=c-f,m=l[f===0?f:f-1],p=l[f],g=l[f>l.length-2?l.length-1:f+1],_=l[f>l.length-3?l.length-1:f+2];return a.set(w_(d,m.x,p.x,g.x,_.x),w_(d,m.y,p.y,g.y,_.y)),a}copy(t){super.copy(t),this.points=[];for(let i=0,a=t.points.length;i<a;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,a=this.points.length;i<a;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,a=t.points.length;i<a;i++){const l=t.points[i];this.points.push(new ee().fromArray(l))}return this}}var $x=Object.freeze({__proto__:null,ArcCurve:Fx,CatmullRomCurve3:Lv,CubicBezierCurve:Yx,CubicBezierCurve3:Zx,EllipseCurve:Uv,LineCurve:jx,LineCurve3:Kx,QuadraticBezierCurve:Qx,QuadraticBezierCurve3:Nv,SplineCurve:Jx});class eu extends Mi{constructor(t=1,i=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:a,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(a),m=Math.floor(l),p=d+1,g=m+1,_=t/d,S=i/m,M=[],T=[],E=[],x=[];for(let v=0;v<g;v++){const z=v*S-f;for(let U=0;U<p;U++){const w=U*_-c;T.push(w,-z,0),E.push(0,0,1),x.push(U/d),x.push(1-v/m)}}for(let v=0;v<m;v++)for(let z=0;z<d;z++){const U=z+p*v,w=z+p*(v+1),H=z+1+p*(v+1),F=z+1+p*v;M.push(U,w,F),M.push(w,H,F)}this.setIndex(M),this.setAttribute("position",new En(T,3)),this.setAttribute("normal",new En(E,3)),this.setAttribute("uv",new En(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eu(t.width,t.height,t.widthSegments,t.heightSegments)}}class rp extends Mi{constructor(t=1,i=32,a=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:a,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),a=Math.max(2,Math.floor(a));const m=Math.min(f+d,Math.PI);let p=0;const g=[],_=new V,S=new V,M=[],T=[],E=[],x=[];for(let v=0;v<=a;v++){const z=[],U=v/a;let w=0;v===0&&f===0?w=.5/i:v===a&&m===Math.PI&&(w=-.5/i);for(let H=0;H<=i;H++){const F=H/i;_.x=-t*Math.cos(l+F*c)*Math.sin(f+U*d),_.y=t*Math.cos(f+U*d),_.z=t*Math.sin(l+F*c)*Math.sin(f+U*d),T.push(_.x,_.y,_.z),S.copy(_).normalize(),E.push(S.x,S.y,S.z),x.push(F+w,1-U),z.push(p++)}g.push(z)}for(let v=0;v<a;v++)for(let z=0;z<i;z++){const U=g[v][z+1],w=g[v][z],H=g[v+1][z],F=g[v+1][z+1];(v!==0||f>0)&&M.push(U,w,F),(v!==a-1||m<Math.PI)&&M.push(w,H,F)}this.setIndex(M),this.setAttribute("position",new En(T,3)),this.setAttribute("normal",new En(E,3)),this.setAttribute("uv",new En(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class sp extends Mi{constructor(t=new Nv(new V(-1,-1,0),new V(-1,1,0),new V(1,1,0)),i=64,a=1,l=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:a,radialSegments:l,closed:c};const f=t.computeFrenetFrames(i,c);this.tangents=f.tangents,this.normals=f.normals,this.binormals=f.binormals;const d=new V,m=new V,p=new ee;let g=new V;const _=[],S=[],M=[],T=[];E(),this.setIndex(T),this.setAttribute("position",new En(_,3)),this.setAttribute("normal",new En(S,3)),this.setAttribute("uv",new En(M,2));function E(){for(let U=0;U<i;U++)x(U);x(c===!1?i:0),z(),v()}function x(U){g=t.getPointAt(U/i,g);const w=f.normals[U],H=f.binormals[U];for(let F=0;F<=l;F++){const O=F/l*Math.PI*2,X=Math.sin(O),C=-Math.cos(O);m.x=C*w.x+X*H.x,m.y=C*w.y+X*H.y,m.z=C*w.z+X*H.z,m.normalize(),S.push(m.x,m.y,m.z),d.x=g.x+a*m.x,d.y=g.y+a*m.y,d.z=g.z+a*m.z,_.push(d.x,d.y,d.z)}}function v(){for(let U=1;U<=i;U++)for(let w=1;w<=l;w++){const H=(l+1)*(U-1)+(w-1),F=(l+1)*U+(w-1),O=(l+1)*U+w,X=(l+1)*(U-1)+w;T.push(H,F,X),T.push(F,O,X)}}function z(){for(let U=0;U<=i;U++)for(let w=0;w<=l;w++)p.x=U/i,p.y=w/l,M.push(p.x,p.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new sp(new $x[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Se extends Vs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sv,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xh extends Se{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class t1 extends Vs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=OM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class e1 extends Vs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class nu extends _n{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new me(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class n1 extends nu{constructor(t,i,a){super(t,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const Wh=new Ke,C_=new V,D_=new V;class Ov{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.mapType=Gi,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ep,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,a=this.matrix;C_.setFromMatrixPosition(t.matrixWorld),i.position.copy(C_),D_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(D_),i.updateMatrixWorld(),Wh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Wh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const U_=new Ke,ko=new V,qh=new V;class i1 extends Ov{constructor(){super(new si(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ee(4,2),this._viewportCount=6,this._viewports=[new ke(2,1,1,1),new ke(0,1,1,1),new ke(3,1,1,1),new ke(1,1,1,1),new ke(3,0,1,1),new ke(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(t,i=0){const a=this.camera,l=this.matrix,c=t.distance||a.far;c!==a.far&&(a.far=c,a.updateProjectionMatrix()),ko.setFromMatrixPosition(t.matrixWorld),a.position.copy(ko),qh.copy(a.position),qh.add(this._cubeDirections[i]),a.up.copy(this._cubeUps[i]),a.lookAt(qh),a.updateMatrixWorld(),l.makeTranslation(-ko.x,-ko.y,-ko.z),U_.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(U_,a.coordinateSystem,a.reversedDepth)}}class Yh extends nu{constructor(t,i,a=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=l,this.shadow=new i1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Pv extends wv{constructor(t=-1,i=1,a=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=a,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,a,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=a-t,f=a+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class a1 extends Ov{constructor(){super(new Pv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class r1 extends nu{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new a1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class s1 extends nu{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class o1 extends si{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class l1{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}const L_=new Ke;class c1{constructor(t,i,a=0,l=1/0){this.ray=new Qd(t,i),this.near=a,this.far=l,this.camera=null,this.layers=new Jd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return L_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(L_),this}intersectObject(t,i=!0,a=[]){return Fd(t,this,a,i),a.sort(N_),a}intersectObjects(t,i=!0,a=[]){for(let l=0,c=t.length;l<c;l++)Fd(t[l],this,a,i);return a.sort(N_),a}}function N_(s,t){return s.distance-t.distance}function Fd(s,t,i,a){let l=!0;if(s.layers.test(t.layers)&&s.raycast(t,i)===!1&&(l=!1),l===!0&&a===!0){const c=s.children;for(let f=0,d=c.length;f<d;f++)Fd(c[f],t,i,!0)}}const Ic=new Gs;class u1 extends Bx{constructor(t,i=16776960){const a=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),l=new Float32Array(24),c=new Mi;c.setIndex(new yi(a,1)),c.setAttribute("position",new yi(l,3)),super(c,new np({color:i,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Ic.setFromObject(this.object),Ic.isEmpty())return;const t=Ic.min,i=Ic.max,a=this.geometry.attributes.position,l=a.array;l[0]=i.x,l[1]=i.y,l[2]=i.z,l[3]=t.x,l[4]=i.y,l[5]=i.z,l[6]=t.x,l[7]=t.y,l[8]=i.z,l[9]=i.x,l[10]=t.y,l[11]=i.z,l[12]=i.x,l[13]=i.y,l[14]=t.z,l[15]=t.x,l[16]=i.y,l[17]=t.z,l[18]=t.x,l[19]=t.y,l[20]=t.z,l[21]=i.x,l[22]=t.y,l[23]=t.z,a.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,i){return super.copy(t,i),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function O_(s,t,i,a){const l=f1(a);switch(i){case mv:return s*t;case _v:return s*t/l.components*l.byteLength;case qd:return s*t/l.components*l.byteLength;case vv:return s*t*2/l.components*l.byteLength;case Yd:return s*t*2/l.components*l.byteLength;case gv:return s*t*3/l.components*l.byteLength;case Ci:return s*t*4/l.components*l.byteLength;case Zd:return s*t*4/l.components*l.byteLength;case Vc:case kc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Xc:case Wc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case pd:case gd:return Math.max(s,16)*Math.max(t,8)/4;case dd:case md:return Math.max(s,8)*Math.max(t,8)/2;case _d:case vd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case yd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Sd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Md:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case xd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ed:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case bd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Td:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ad:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Rd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case wd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Cd:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Dd:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ud:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ld:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Nd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case qc:case Od:case Pd:return Math.ceil(s/4)*Math.ceil(t/4)*16;case yv:case zd:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Bd:case Id:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function f1(s){switch(s){case Gi:case hv:return{byteLength:1,components:1};case tl:case dv:case rl:return{byteLength:2,components:1};case Xd:case Wd:return{byteLength:2,components:4};case Dr:case kd:case pa:return{byteLength:4,components:1};case pv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vd);function zv(){let s=null,t=!1,i=null,a=null;function l(c,f){i(c,f),a=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(a=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function h1(s){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,S=s.createBuffer();s.bindBuffer(m,S),s.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function a(d,m,p){const g=m.array,_=m.updateRanges;if(s.bindBuffer(p,d),_.length===0)s.bufferSubData(p,0,g);else{_.sort((M,T)=>M.start-T.start);let S=0;for(let M=1;M<_.length;M++){const T=_[S],E=_[M];E.start<=T.start+T.count+1?T.count=Math.max(T.count,E.start+E.count-T.start):(++S,_[S]=E)}_.length=S+1;for(let M=0,T=_.length;M<T;M++){const E=_[M];s.bufferSubData(p,E.start*g.BYTES_PER_ELEMENT,g,E.start,E.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var d1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,m1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,g1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,y1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,S1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,x1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,E1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,A1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,R1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,C1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,D1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,L1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,N1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,O1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,P1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,z1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,B1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,I1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,F1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,H1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,G1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,V1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,k1="gl_FragColor = linearToOutputTexel( gl_FragColor );",X1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,W1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,q1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Y1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Z1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,j1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,K1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Q1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_E=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ME=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,EE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,CE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,UE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,LE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,BE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,FE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,VE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,jE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,KE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,QE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,JE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$E=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ib=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ab=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ob=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,db=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_b=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Mb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Eb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ab=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Db=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ub=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Nb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ob=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ib=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:d1,alphahash_pars_fragment:p1,alphamap_fragment:m1,alphamap_pars_fragment:g1,alphatest_fragment:_1,alphatest_pars_fragment:v1,aomap_fragment:y1,aomap_pars_fragment:S1,batching_pars_vertex:M1,batching_vertex:x1,begin_vertex:E1,beginnormal_vertex:b1,bsdfs:T1,iridescence_fragment:A1,bumpmap_pars_fragment:R1,clipping_planes_fragment:w1,clipping_planes_pars_fragment:C1,clipping_planes_pars_vertex:D1,clipping_planes_vertex:U1,color_fragment:L1,color_pars_fragment:N1,color_pars_vertex:O1,color_vertex:P1,common:z1,cube_uv_reflection_fragment:B1,defaultnormal_vertex:I1,displacementmap_pars_vertex:F1,displacementmap_vertex:H1,emissivemap_fragment:G1,emissivemap_pars_fragment:V1,colorspace_fragment:k1,colorspace_pars_fragment:X1,envmap_fragment:W1,envmap_common_pars_fragment:q1,envmap_pars_fragment:Y1,envmap_pars_vertex:Z1,envmap_physical_pars_fragment:rE,envmap_vertex:j1,fog_vertex:K1,fog_pars_vertex:Q1,fog_fragment:J1,fog_pars_fragment:$1,gradientmap_pars_fragment:tE,lightmap_pars_fragment:eE,lights_lambert_fragment:nE,lights_lambert_pars_fragment:iE,lights_pars_begin:aE,lights_toon_fragment:sE,lights_toon_pars_fragment:oE,lights_phong_fragment:lE,lights_phong_pars_fragment:cE,lights_physical_fragment:uE,lights_physical_pars_fragment:fE,lights_fragment_begin:hE,lights_fragment_maps:dE,lights_fragment_end:pE,logdepthbuf_fragment:mE,logdepthbuf_pars_fragment:gE,logdepthbuf_pars_vertex:_E,logdepthbuf_vertex:vE,map_fragment:yE,map_pars_fragment:SE,map_particle_fragment:ME,map_particle_pars_fragment:xE,metalnessmap_fragment:EE,metalnessmap_pars_fragment:bE,morphinstance_vertex:TE,morphcolor_vertex:AE,morphnormal_vertex:RE,morphtarget_pars_vertex:wE,morphtarget_vertex:CE,normal_fragment_begin:DE,normal_fragment_maps:UE,normal_pars_fragment:LE,normal_pars_vertex:NE,normal_vertex:OE,normalmap_pars_fragment:PE,clearcoat_normal_fragment_begin:zE,clearcoat_normal_fragment_maps:BE,clearcoat_pars_fragment:IE,iridescence_pars_fragment:FE,opaque_fragment:HE,packing:GE,premultiplied_alpha_fragment:VE,project_vertex:kE,dithering_fragment:XE,dithering_pars_fragment:WE,roughnessmap_fragment:qE,roughnessmap_pars_fragment:YE,shadowmap_pars_fragment:ZE,shadowmap_pars_vertex:jE,shadowmap_vertex:KE,shadowmask_pars_fragment:QE,skinbase_vertex:JE,skinning_pars_vertex:$E,skinning_vertex:tb,skinnormal_vertex:eb,specularmap_fragment:nb,specularmap_pars_fragment:ib,tonemapping_fragment:ab,tonemapping_pars_fragment:rb,transmission_fragment:sb,transmission_pars_fragment:ob,uv_pars_fragment:lb,uv_pars_vertex:cb,uv_vertex:ub,worldpos_vertex:fb,background_vert:hb,background_frag:db,backgroundCube_vert:pb,backgroundCube_frag:mb,cube_vert:gb,cube_frag:_b,depth_vert:vb,depth_frag:yb,distanceRGBA_vert:Sb,distanceRGBA_frag:Mb,equirect_vert:xb,equirect_frag:Eb,linedashed_vert:bb,linedashed_frag:Tb,meshbasic_vert:Ab,meshbasic_frag:Rb,meshlambert_vert:wb,meshlambert_frag:Cb,meshmatcap_vert:Db,meshmatcap_frag:Ub,meshnormal_vert:Lb,meshnormal_frag:Nb,meshphong_vert:Ob,meshphong_frag:Pb,meshphysical_vert:zb,meshphysical_frag:Bb,meshtoon_vert:Ib,meshtoon_frag:Fb,points_vert:Hb,points_frag:Gb,shadow_vert:Vb,shadow_frag:kb,sprite_vert:Xb,sprite_frag:Wb},Pt={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Bi={basic:{uniforms:Fn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Fn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new me(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Fn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Fn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Fn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new me(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Fn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Fn([Pt.points,Pt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Fn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Fn([Pt.common,Pt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Fn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Fn([Pt.sprite,Pt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:Fn([Pt.common,Pt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:Fn([Pt.lights,Pt.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Bi.physical={uniforms:Fn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const Fc={r:0,b:0,g:0},xr=new Vi,qb=new Ke;function Yb(s,t,i,a,l,c,f){const d=new me(0);let m=c===!0?0:1,p,g,_=null,S=0,M=null;function T(U){let w=U.isScene===!0?U.background:null;return w&&w.isTexture&&(w=(U.backgroundBlurriness>0?i:t).get(w)),w}function E(U){let w=!1;const H=T(U);H===null?v(d,m):H&&H.isColor&&(v(H,1),w=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?a.buffers.color.setClear(0,0,0,1,f):F==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,f),(s.autoClear||w)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(U,w){const H=T(w);H&&(H.isCubeTexture||H.mapping===$c)?(g===void 0&&(g=new Zn(new Ja(1,1,1),new Qa({name:"BackgroundCubeMaterial",uniforms:Is(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,O,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),xr.copy(w.backgroundRotation),xr.x*=-1,xr.y*=-1,xr.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),g.material.uniforms.envMap.value=H,g.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(qb.makeRotationFromEuler(xr)),g.material.toneMapped=Ue.getTransfer(H.colorSpace)!==Ve,(_!==H||S!==H.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,_=H,S=H.version,M=s.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new Zn(new eu(2,2),new Qa({name:"BackgroundMaterial",uniforms:Is(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:Ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=Ue.getTransfer(H.colorSpace)!==Ve,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(_!==H||S!==H.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,_=H,S=H.version,M=s.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function v(U,w){U.getRGB(Fc,Rv(s)),a.buffers.color.setClear(Fc.r,Fc.g,Fc.b,w,f)}function z(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,w=1){d.set(U),m=w,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,v(d,m)},render:E,addToRenderList:x,dispose:z}}function Zb(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},l=S(null);let c=l,f=!1;function d(D,B,st,lt,ut){let dt=!1;const P=_(lt,st,B);c!==P&&(c=P,p(c.object)),dt=M(D,lt,st,ut),dt&&T(D,lt,st,ut),ut!==null&&t.update(ut,s.ELEMENT_ARRAY_BUFFER),(dt||f)&&(f=!1,w(D,B,st,lt),ut!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ut).buffer))}function m(){return s.createVertexArray()}function p(D){return s.bindVertexArray(D)}function g(D){return s.deleteVertexArray(D)}function _(D,B,st){const lt=st.wireframe===!0;let ut=a[D.id];ut===void 0&&(ut={},a[D.id]=ut);let dt=ut[B.id];dt===void 0&&(dt={},ut[B.id]=dt);let P=dt[lt];return P===void 0&&(P=S(m()),dt[lt]=P),P}function S(D){const B=[],st=[],lt=[];for(let ut=0;ut<i;ut++)B[ut]=0,st[ut]=0,lt[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:st,attributeDivisors:lt,object:D,attributes:{},index:null}}function M(D,B,st,lt){const ut=c.attributes,dt=B.attributes;let P=0;const K=st.getAttributes();for(const Y in K)if(K[Y].location>=0){const xt=ut[Y];let N=dt[Y];if(N===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(N=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(N=D.instanceColor)),xt===void 0||xt.attribute!==N||N&&xt.data!==N.data)return!0;P++}return c.attributesNum!==P||c.index!==lt}function T(D,B,st,lt){const ut={},dt=B.attributes;let P=0;const K=st.getAttributes();for(const Y in K)if(K[Y].location>=0){let xt=dt[Y];xt===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(xt=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(xt=D.instanceColor));const N={};N.attribute=xt,xt&&xt.data&&(N.data=xt.data),ut[Y]=N,P++}c.attributes=ut,c.attributesNum=P,c.index=lt}function E(){const D=c.newAttributes;for(let B=0,st=D.length;B<st;B++)D[B]=0}function x(D){v(D,0)}function v(D,B){const st=c.newAttributes,lt=c.enabledAttributes,ut=c.attributeDivisors;st[D]=1,lt[D]===0&&(s.enableVertexAttribArray(D),lt[D]=1),ut[D]!==B&&(s.vertexAttribDivisor(D,B),ut[D]=B)}function z(){const D=c.newAttributes,B=c.enabledAttributes;for(let st=0,lt=B.length;st<lt;st++)B[st]!==D[st]&&(s.disableVertexAttribArray(st),B[st]=0)}function U(D,B,st,lt,ut,dt,P){P===!0?s.vertexAttribIPointer(D,B,st,ut,dt):s.vertexAttribPointer(D,B,st,lt,ut,dt)}function w(D,B,st,lt){E();const ut=lt.attributes,dt=st.getAttributes(),P=B.defaultAttributeValues;for(const K in dt){const Y=dt[K];if(Y.location>=0){let yt=ut[K];if(yt===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(yt=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(yt=D.instanceColor)),yt!==void 0){const xt=yt.normalized,N=yt.itemSize,it=t.get(yt);if(it===void 0)continue;const Mt=it.buffer,Ct=it.type,J=it.bytesPerElement,_t=Ct===s.INT||Ct===s.UNSIGNED_INT||yt.gpuType===kd;if(yt.isInterleavedBufferAttribute){const $=yt.data,At=$.stride,Tt=yt.offset;if($.isInstancedInterleavedBuffer){for(let jt=0;jt<Y.locationSize;jt++)v(Y.location+jt,$.meshPerAttribute);D.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let jt=0;jt<Y.locationSize;jt++)x(Y.location+jt);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let jt=0;jt<Y.locationSize;jt++)U(Y.location+jt,N/Y.locationSize,Ct,xt,At*J,(Tt+N/Y.locationSize*jt)*J,_t)}else{if(yt.isInstancedBufferAttribute){for(let $=0;$<Y.locationSize;$++)v(Y.location+$,yt.meshPerAttribute);D.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let $=0;$<Y.locationSize;$++)x(Y.location+$);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let $=0;$<Y.locationSize;$++)U(Y.location+$,N/Y.locationSize,Ct,xt,N*J,N/Y.locationSize*$*J,_t)}}else if(P!==void 0){const xt=P[K];if(xt!==void 0)switch(xt.length){case 2:s.vertexAttrib2fv(Y.location,xt);break;case 3:s.vertexAttrib3fv(Y.location,xt);break;case 4:s.vertexAttrib4fv(Y.location,xt);break;default:s.vertexAttrib1fv(Y.location,xt)}}}}z()}function H(){X();for(const D in a){const B=a[D];for(const st in B){const lt=B[st];for(const ut in lt)g(lt[ut].object),delete lt[ut];delete B[st]}delete a[D]}}function F(D){if(a[D.id]===void 0)return;const B=a[D.id];for(const st in B){const lt=B[st];for(const ut in lt)g(lt[ut].object),delete lt[ut];delete B[st]}delete a[D.id]}function O(D){for(const B in a){const st=a[B];if(st[D.id]===void 0)continue;const lt=st[D.id];for(const ut in lt)g(lt[ut].object),delete lt[ut];delete st[D.id]}}function X(){C(),f=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:C,dispose:H,releaseStatesOfGeometry:F,releaseStatesOfProgram:O,initAttributes:E,enableAttribute:x,disableUnusedAttributes:z}}function jb(s,t,i){let a;function l(p){a=p}function c(p,g){s.drawArrays(a,p,g),i.update(g,a,1)}function f(p,g,_){_!==0&&(s.drawArraysInstanced(a,p,g,_),i.update(g,a,_))}function d(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,g,0,_);let M=0;for(let T=0;T<_;T++)M+=g[T];i.update(M,a,1)}function m(p,g,_,S){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<p.length;T++)f(p[T],g[T],S[T]);else{M.multiDrawArraysInstancedWEBGL(a,p,0,g,0,S,0,_);let T=0;for(let E=0;E<_;E++)T+=g[E]*S[E];i.update(T,a,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function Kb(s,t,i,a){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(O){return!(O!==Ci&&a.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const X=O===rl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==Gi&&a.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==pa&&!X)}function m(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),z=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=T>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:T,maxTextureSize:E,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:z,maxVaryings:U,maxFragmentUniforms:w,vertexTextures:H,maxSamples:F}}function Qb(s){const t=this;let i=null,a=0,l=!1,c=!1;const f=new br,d=new fe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const M=_.length!==0||S||a!==0||l;return l=S,a=_.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,S){i=g(_,S,0)},this.setState=function(_,S,M){const T=_.clippingPlanes,E=_.clipIntersection,x=_.clipShadows,v=s.get(_);if(!l||T===null||T.length===0||c&&!x)c?g(null):p();else{const z=c?0:a,U=z*4;let w=v.clippingState||null;m.value=w,w=g(T,S,U,M);for(let H=0;H!==U;++H)w[H]=i[H];v.clippingState=w,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(_,S,M,T){const E=_!==null?_.length:0;let x=null;if(E!==0){if(x=m.value,T!==!0||x===null){const v=M+E*4,z=S.matrixWorldInverse;d.getNormalMatrix(z),(x===null||x.length<v)&&(x=new Float32Array(v));for(let U=0,w=M;U!==E;++U,w+=4)f.copy(_[U]).applyMatrix4(z,d),f.normal.toArray(x,w),x[w+3]=f.constant}m.value=x,m.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,x}}function Jb(s){let t=new WeakMap;function i(f,d){return d===ud?f.mapping=Ps:d===fd&&(f.mapping=zs),f}function a(f){if(f&&f.isTexture){const d=f.mapping;if(d===ud||d===fd)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new Dx(m.height);return p.fromEquirectangularTexture(s,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}const Ds=4,P_=[.125,.215,.35,.446,.526,.582],Rr=20,Zh=new Pv,z_=new me;let jh=null,Kh=0,Qh=0,Jh=!1;const Tr=(1+Math.sqrt(5))/2,Rs=1/Tr,B_=[new V(-Tr,Rs,0),new V(Tr,Rs,0),new V(-Rs,0,Tr),new V(Rs,0,Tr),new V(0,Tr,-Rs),new V(0,Tr,Rs),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],$b=new V;class I_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,a=.1,l=100,c={}){const{size:f=256,position:d=$b}=c;jh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),Qh=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,a,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=G_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=H_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(jh,Kh,Qh),this._renderer.xr.enabled=Jh,t.scissorTest=!1,Hc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ps||t.mapping===zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),Qh=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=i||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,a={magFilter:Ii,minFilter:Ii,generateMipmaps:!1,type:rl,format:Ci,colorSpace:Bs,depthBuffer:!1},l=F_(t,i,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=F_(t,i,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tT(c)),this._blurMaterial=eT(c,t,i)}return l}_compileMaterial(t){const i=new Zn(this._lodPlanes[0],t);this._renderer.compile(i,Zh)}_sceneToCubeUV(t,i,a,l,c){const m=new si(90,1,i,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,M=_.toneMapping;_.getClearColor(z_),_.toneMapping=ja,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null));const E=new $d({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),x=new Zn(new Ja,E);let v=!1;const z=t.background;z?z.isColor&&(E.color.copy(z),t.background=null,v=!0):(E.color.copy(z_),v=!0);for(let U=0;U<6;U++){const w=U%3;w===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[U],c.y,c.z)):w===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[U]));const H=this._cubeSize;Hc(l,w*H,U>2?H:0,H,H),_.setRenderTarget(l),v&&_.render(x,m),_.render(t,m)}x.geometry.dispose(),x.material.dispose(),_.toneMapping=M,_.autoClear=S,t.background=z}_textureToCubeUV(t,i){const a=this._renderer,l=t.mapping===Ps||t.mapping===zs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=G_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=H_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new Zn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Hc(i,0,0,3*m,2*m),a.setRenderTarget(i),a.render(f,Zh)}_applyPMREM(t){const i=this._renderer,a=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=B_[(l-c-1)%B_.length];this._blur(t,c-1,c,f,d)}i.autoClear=a}_blur(t,i,a,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,a,l,"latitudinal",c),this._halfBlur(f,t,a,a,l,"longitudinal",c)}_halfBlur(t,i,a,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Zn(this._lodPlanes[l],p),S=p.uniforms,M=this._sizeLods[a]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Rr-1),E=c/T,x=isFinite(c)?1+Math.floor(g*E):Rr;x>Rr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Rr}`);const v=[];let z=0;for(let O=0;O<Rr;++O){const X=O/E,C=Math.exp(-X*X/2);v.push(C),O===0?z+=C:O<x&&(z+=2*C)}for(let O=0;O<v.length;O++)v[O]=v[O]/z;S.envMap.value=t.texture,S.samples.value=x,S.weights.value=v,S.latitudinal.value=f==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:U}=this;S.dTheta.value=T,S.mipInt.value=U-a;const w=this._sizeLods[l],H=3*w*(l>U-Ds?l-U+Ds:0),F=4*(this._cubeSize-w);Hc(i,H,F,3*w,2*w),m.setRenderTarget(i),m.render(_,Zh)}}function tT(s){const t=[],i=[],a=[];let l=s;const c=s-Ds+1+P_.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let m=1/d;f>s-Ds?m=P_[f-s+Ds-1]:f===0&&(m=0),a.push(m);const p=1/(d-2),g=-p,_=1+p,S=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,T=6,E=3,x=2,v=1,z=new Float32Array(E*T*M),U=new Float32Array(x*T*M),w=new Float32Array(v*T*M);for(let F=0;F<M;F++){const O=F%3*2/3-1,X=F>2?0:-1,C=[O,X,0,O+2/3,X,0,O+2/3,X+1,0,O,X,0,O+2/3,X+1,0,O,X+1,0];z.set(C,E*T*F),U.set(S,x*T*F);const D=[F,F,F,F,F,F];w.set(D,v*T*F)}const H=new Mi;H.setAttribute("position",new yi(z,E)),H.setAttribute("uv",new yi(U,x)),H.setAttribute("faceIndex",new yi(w,v)),t.push(H),l>Ds&&l--}return{lodPlanes:t,sizeLods:i,sigmas:a}}function F_(s,t,i){const a=new Ur(s,t,i);return a.texture.mapping=$c,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Hc(s,t,i,a,l){s.viewport.set(t,i,a,l),s.scissor.set(t,i,a,l)}function eT(s,t,i){const a=new Float32Array(Rr),l=new V(0,1,0);return new Qa({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:op(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Za,depthTest:!1,depthWrite:!1})}function H_(){return new Qa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:op(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Za,depthTest:!1,depthWrite:!1})}function G_(){return new Qa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:op(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Za,depthTest:!1,depthWrite:!1})}function op(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nT(s){let t=new WeakMap,i=null;function a(d){if(d&&d.isTexture){const m=d.mapping,p=m===ud||m===fd,g=m===Ps||m===zs;if(p||g){let _=t.get(d);const S=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new I_(s)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new I_(s)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:f}}function iT(s){const t={};function i(a){if(t[a]!==void 0)return t[a];let l;switch(a){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(a)}return t[a]=l,l}return{has:function(a){return i(a)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(a){const l=i(a);return l===null&&Ls("THREE.WebGLRenderer: "+a+" extension not supported."),l}}}function aT(s,t,i,a){const l={},c=new WeakMap;function f(_){const S=_.target;S.index!==null&&t.remove(S.index);for(const T in S.attributes)t.remove(S.attributes[T]);S.removeEventListener("dispose",f),delete l[S.id];const M=c.get(S);M&&(t.remove(M),c.delete(S)),a.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(_,S){return l[S.id]===!0||(S.addEventListener("dispose",f),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const M in S)t.update(S[M],s.ARRAY_BUFFER)}function p(_){const S=[],M=_.index,T=_.attributes.position;let E=0;if(M!==null){const z=M.array;E=M.version;for(let U=0,w=z.length;U<w;U+=3){const H=z[U+0],F=z[U+1],O=z[U+2];S.push(H,F,F,O,O,H)}}else if(T!==void 0){const z=T.array;E=T.version;for(let U=0,w=z.length/3-1;U<w;U+=3){const H=U+0,F=U+1,O=U+2;S.push(H,F,F,O,O,H)}}else return;const x=new(xv(S)?Av:Tv)(S,1);x.version=E;const v=c.get(_);v&&t.remove(v),c.set(_,x)}function g(_){const S=c.get(_);if(S){const M=_.index;M!==null&&S.version<M.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function rT(s,t,i){let a;function l(S){a=S}let c,f;function d(S){c=S.type,f=S.bytesPerElement}function m(S,M){s.drawElements(a,M,c,S*f),i.update(M,a,1)}function p(S,M,T){T!==0&&(s.drawElementsInstanced(a,M,c,S*f,T),i.update(M,a,T))}function g(S,M,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,M,0,c,S,0,T);let x=0;for(let v=0;v<T;v++)x+=M[v];i.update(x,a,1)}function _(S,M,T,E){if(T===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<S.length;v++)p(S[v]/f,M[v],E[v]);else{x.multiDrawElementsInstancedWEBGL(a,M,0,c,S,0,E,0,T);let v=0;for(let z=0;z<T;z++)v+=M[z]*E[z];i.update(v,a,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function sT(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,f,d){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:a}}function oT(s,t,i){const a=new WeakMap,l=new ke;function c(f,d,m){const p=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let S=a.get(d);if(S===void 0||S.count!==_){let D=function(){X.dispose(),a.delete(d),d.removeEventListener("dispose",D)};var M=D;S!==void 0&&S.texture.dispose();const T=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],z=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let w=0;T===!0&&(w=1),E===!0&&(w=2),x===!0&&(w=3);let H=d.attributes.position.count*w,F=1;H>t.maxTextureSize&&(F=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const O=new Float32Array(H*F*4*_),X=new Ev(O,H,F,_);X.type=pa,X.needsUpdate=!0;const C=w*4;for(let B=0;B<_;B++){const st=v[B],lt=z[B],ut=U[B],dt=H*F*4*B;for(let P=0;P<st.count;P++){const K=P*C;T===!0&&(l.fromBufferAttribute(st,P),O[dt+K+0]=l.x,O[dt+K+1]=l.y,O[dt+K+2]=l.z,O[dt+K+3]=0),E===!0&&(l.fromBufferAttribute(lt,P),O[dt+K+4]=l.x,O[dt+K+5]=l.y,O[dt+K+6]=l.z,O[dt+K+7]=0),x===!0&&(l.fromBufferAttribute(ut,P),O[dt+K+8]=l.x,O[dt+K+9]=l.y,O[dt+K+10]=l.z,O[dt+K+11]=ut.itemSize===4?l.w:1)}}S={count:_,texture:X,size:new ee(H,F)},a.set(d,S),d.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let T=0;for(let x=0;x<p.length;x++)T+=p[x];const E=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(s,"morphTargetBaseInfluence",E),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}return{update:c}}function lT(s,t,i,a){let l=new WeakMap;function c(m){const p=a.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const Bv=new Hn,V_=new Dv(1,1),Iv=new Ev,Fv=new dx,Hv=new Cv,k_=[],X_=[],W_=new Float32Array(16),q_=new Float32Array(9),Y_=new Float32Array(4);function ks(s,t,i){const a=s[0];if(a<=0||a>0)return s;const l=t*i;let c=k_[l];if(c===void 0&&(c=new Float32Array(l),k_[l]=c),t!==0){a.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,s[f].toArray(c,d)}return c}function vn(s,t){if(s.length!==t.length)return!1;for(let i=0,a=s.length;i<a;i++)if(s[i]!==t[i])return!1;return!0}function yn(s,t){for(let i=0,a=t.length;i<a;i++)s[i]=t[i]}function iu(s,t){let i=X_[t];i===void 0&&(i=new Int32Array(t),X_[t]=i);for(let a=0;a!==t;++a)i[a]=s.allocateTextureUnit();return i}function cT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function uT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;s.uniform2fv(this.addr,t),yn(i,t)}}function fT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(vn(i,t))return;s.uniform3fv(this.addr,t),yn(i,t)}}function hT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;s.uniform4fv(this.addr,t),yn(i,t)}}function dT(s,t){const i=this.cache,a=t.elements;if(a===void 0){if(vn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),yn(i,t)}else{if(vn(i,a))return;Y_.set(a),s.uniformMatrix2fv(this.addr,!1,Y_),yn(i,a)}}function pT(s,t){const i=this.cache,a=t.elements;if(a===void 0){if(vn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),yn(i,t)}else{if(vn(i,a))return;q_.set(a),s.uniformMatrix3fv(this.addr,!1,q_),yn(i,a)}}function mT(s,t){const i=this.cache,a=t.elements;if(a===void 0){if(vn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),yn(i,t)}else{if(vn(i,a))return;W_.set(a),s.uniformMatrix4fv(this.addr,!1,W_),yn(i,a)}}function gT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function _T(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;s.uniform2iv(this.addr,t),yn(i,t)}}function vT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;s.uniform3iv(this.addr,t),yn(i,t)}}function yT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;s.uniform4iv(this.addr,t),yn(i,t)}}function ST(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function MT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;s.uniform2uiv(this.addr,t),yn(i,t)}}function xT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;s.uniform3uiv(this.addr,t),yn(i,t)}}function ET(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;s.uniform4uiv(this.addr,t),yn(i,t)}}function bT(s,t,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(V_.compareFunction=Mv,c=V_):c=Bv,i.setTexture2D(t||c,l)}function TT(s,t,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),i.setTexture3D(t||Fv,l)}function AT(s,t,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),i.setTextureCube(t||Hv,l)}function RT(s,t,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),i.setTexture2DArray(t||Iv,l)}function wT(s){switch(s){case 5126:return cT;case 35664:return uT;case 35665:return fT;case 35666:return hT;case 35674:return dT;case 35675:return pT;case 35676:return mT;case 5124:case 35670:return gT;case 35667:case 35671:return _T;case 35668:case 35672:return vT;case 35669:case 35673:return yT;case 5125:return ST;case 36294:return MT;case 36295:return xT;case 36296:return ET;case 35678:case 36198:case 36298:case 36306:case 35682:return bT;case 35679:case 36299:case 36307:return TT;case 35680:case 36300:case 36308:case 36293:return AT;case 36289:case 36303:case 36311:case 36292:return RT}}function CT(s,t){s.uniform1fv(this.addr,t)}function DT(s,t){const i=ks(t,this.size,2);s.uniform2fv(this.addr,i)}function UT(s,t){const i=ks(t,this.size,3);s.uniform3fv(this.addr,i)}function LT(s,t){const i=ks(t,this.size,4);s.uniform4fv(this.addr,i)}function NT(s,t){const i=ks(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function OT(s,t){const i=ks(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function PT(s,t){const i=ks(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function zT(s,t){s.uniform1iv(this.addr,t)}function BT(s,t){s.uniform2iv(this.addr,t)}function IT(s,t){s.uniform3iv(this.addr,t)}function FT(s,t){s.uniform4iv(this.addr,t)}function HT(s,t){s.uniform1uiv(this.addr,t)}function GT(s,t){s.uniform2uiv(this.addr,t)}function VT(s,t){s.uniform3uiv(this.addr,t)}function kT(s,t){s.uniform4uiv(this.addr,t)}function XT(s,t,i){const a=this.cache,l=t.length,c=iu(i,l);vn(a,c)||(s.uniform1iv(this.addr,c),yn(a,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||Bv,c[f])}function WT(s,t,i){const a=this.cache,l=t.length,c=iu(i,l);vn(a,c)||(s.uniform1iv(this.addr,c),yn(a,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||Fv,c[f])}function qT(s,t,i){const a=this.cache,l=t.length,c=iu(i,l);vn(a,c)||(s.uniform1iv(this.addr,c),yn(a,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||Hv,c[f])}function YT(s,t,i){const a=this.cache,l=t.length,c=iu(i,l);vn(a,c)||(s.uniform1iv(this.addr,c),yn(a,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||Iv,c[f])}function ZT(s){switch(s){case 5126:return CT;case 35664:return DT;case 35665:return UT;case 35666:return LT;case 35674:return NT;case 35675:return OT;case 35676:return PT;case 5124:case 35670:return zT;case 35667:case 35671:return BT;case 35668:case 35672:return IT;case 35669:case 35673:return FT;case 5125:return HT;case 36294:return GT;case 36295:return VT;case 36296:return kT;case 35678:case 36198:case 36298:case 36306:case 35682:return XT;case 35679:case 36299:case 36307:return WT;case 35680:case 36300:case 36308:case 36293:return qT;case 36289:case 36303:case 36311:case 36292:return YT}}class jT{constructor(t,i,a){this.id=t,this.addr=a,this.cache=[],this.type=i.type,this.setValue=wT(i.type)}}class KT{constructor(t,i,a){this.id=t,this.addr=a,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=ZT(i.type)}}class QT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,a){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],a)}}}const $h=/(\w+)(\])?(\[|\.)?/g;function Z_(s,t){s.seq.push(t),s.map[t.id]=t}function JT(s,t,i){const a=s.name,l=a.length;for($h.lastIndex=0;;){const c=$h.exec(a),f=$h.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){Z_(i,p===void 0?new jT(d,s,t):new KT(d,s,t));break}else{let _=i.map[d];_===void 0&&(_=new QT(d),Z_(i,_)),i=_}}}class Yc{constructor(t,i){this.seq=[],this.map={};const a=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<a;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);JT(c,f,this)}}setValue(t,i,a,l){const c=this.map[i];c!==void 0&&c.setValue(t,a,l)}setOptional(t,i,a){const l=i[a];l!==void 0&&this.setValue(t,a,l)}static upload(t,i,a,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=a[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const a=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&a.push(f)}return a}}function j_(s,t,i){const a=s.createShader(t);return s.shaderSource(a,i),s.compileShader(a),a}const $T=37297;let t2=0;function e2(s,t){const i=s.split(`
`),a=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;a.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return a.join(`
`)}const K_=new fe;function n2(s){Ue._getMatrix(K_,Ue.workingColorSpace,s);const t=`mat3( ${K_.elements.map(i=>i.toFixed(4))} )`;switch(Ue.getTransfer(s)){case Zc:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Q_(s,t,i){const a=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(a&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+e2(s.getShaderSource(t),d)}else return c}function i2(s,t){const i=n2(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function a2(s,t){let i;switch(t){case RM:i="Linear";break;case wM:i="Reinhard";break;case CM:i="Cineon";break;case uv:i="ACESFilmic";break;case UM:i="AgX";break;case LM:i="Neutral";break;case DM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Gc=new V;function r2(){Ue.getLuminanceCoefficients(Gc);const s=Gc.x.toFixed(4),t=Gc.y.toFixed(4),i=Gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s2(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function o2(s){const t=[];for(const i in s){const a=s[i];a!==!1&&t.push("#define "+i+" "+a)}return t.join(`
`)}function l2(s,t){const i={},a=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<a;l++){const c=s.getActiveAttrib(t,l),f=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:s.getAttribLocation(t,f),locationSize:d}}return i}function qo(s){return s!==""}function J_(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $_(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const c2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hd(s){return s.replace(c2,f2)}const u2=new Map;function f2(s,t){let i=he[t];if(i===void 0){const a=u2.get(t);if(a!==void 0)i=he[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Hd(i)}const h2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tv(s){return s.replace(h2,d2)}function d2(s,t,i,a){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function ev(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function p2(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ov?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===lv?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ha&&(t="SHADOWMAP_TYPE_VSM"),t}function m2(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ps:case zs:t="ENVMAP_TYPE_CUBE";break;case $c:t="ENVMAP_TYPE_CUBE_UV";break}return t}function g2(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===zs&&(t="ENVMAP_MODE_REFRACTION"),t}function _2(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case cv:t="ENVMAP_BLENDING_MULTIPLY";break;case TM:t="ENVMAP_BLENDING_MIX";break;case AM:t="ENVMAP_BLENDING_ADD";break}return t}function v2(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:a,maxMip:i}}function y2(s,t,i,a){const l=s.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=p2(i),p=m2(i),g=g2(i),_=_2(i),S=v2(i),M=s2(i),T=o2(c),E=l.createProgram();let x,v,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(qo).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(qo).join(`
`),v.length>0&&(v+=`
`)):(x=[ev(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),v=[ev(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ja?"#define TONE_MAPPING":"",i.toneMapping!==ja?he.tonemapping_pars_fragment:"",i.toneMapping!==ja?a2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,i2("linearToOutputTexel",i.outputColorSpace),r2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(qo).join(`
`)),f=Hd(f),f=J_(f,i),f=$_(f,i),d=Hd(d),d=J_(d,i),d=$_(d,i),f=tv(f),d=tv(d),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",i.glslVersion===r_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===r_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=z+x+f,w=z+v+d,H=j_(l,l.VERTEX_SHADER,U),F=j_(l,l.FRAGMENT_SHADER,w);l.attachShader(E,H),l.attachShader(E,F),i.index0AttributeName!==void 0?l.bindAttribLocation(E,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(E,0,"position"),l.linkProgram(E);function O(B){if(s.debug.checkShaderErrors){const st=l.getProgramInfoLog(E)||"",lt=l.getShaderInfoLog(H)||"",ut=l.getShaderInfoLog(F)||"",dt=st.trim(),P=lt.trim(),K=ut.trim();let Y=!0,yt=!0;if(l.getProgramParameter(E,l.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,E,H,F);else{const xt=Q_(l,H,"vertex"),N=Q_(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(E,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+dt+`
`+xt+`
`+N)}else dt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",dt):(P===""||K==="")&&(yt=!1);yt&&(B.diagnostics={runnable:Y,programLog:dt,vertexShader:{log:P,prefix:x},fragmentShader:{log:K,prefix:v}})}l.deleteShader(H),l.deleteShader(F),X=new Yc(l,E),C=l2(l,E)}let X;this.getUniforms=function(){return X===void 0&&O(this),X};let C;this.getAttributes=function(){return C===void 0&&O(this),C};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(E,$T)),D},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(E),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=t2++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=H,this.fragmentShader=F,this}let S2=0;class M2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,a=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(a),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const a of i)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let a=i.get(t);return a===void 0&&(a=new Set,i.set(t,a)),a}_getShaderStage(t){const i=this.shaderCache;let a=i.get(t);return a===void 0&&(a=new x2(t),i.set(t,a)),a}}class x2{constructor(t){this.id=S2++,this.code=t,this.usedTimes=0}}function E2(s,t,i,a,l,c,f){const d=new Jd,m=new M2,p=new Set,g=[],_=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(C){return p.add(C),C===0?"uv":`uv${C}`}function x(C,D,B,st,lt){const ut=st.fog,dt=lt.geometry,P=C.isMeshStandardMaterial?st.environment:null,K=(C.isMeshStandardMaterial?i:t).get(C.envMap||P),Y=K&&K.mapping===$c?K.image.height:null,yt=T[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const xt=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,N=xt!==void 0?xt.length:0;let it=0;dt.morphAttributes.position!==void 0&&(it=1),dt.morphAttributes.normal!==void 0&&(it=2),dt.morphAttributes.color!==void 0&&(it=3);let Mt,Ct,J,_t;if(yt){const Re=Bi[yt];Mt=Re.vertexShader,Ct=Re.fragmentShader}else Mt=C.vertexShader,Ct=C.fragmentShader,m.update(C),J=m.getVertexShaderID(C),_t=m.getFragmentShaderID(C);const $=s.getRenderTarget(),At=s.state.buffers.depth.getReversed(),Tt=lt.isInstancedMesh===!0,jt=lt.isBatchedMesh===!0,Ie=!!C.map,ge=!!C.matcap,G=!!K,Ae=!!C.aoMap,$t=!!C.lightMap,be=!!C.bumpMap,Kt=!!C.normalMap,Xe=!!C.displacementMap,Ft=!!C.emissiveMap,se=!!C.metalnessMap,en=!!C.roughnessMap,$e=C.anisotropy>0,L=C.clearcoat>0,b=C.dispersion>0,nt=C.iridescence>0,pt=C.sheen>0,Et=C.transmission>0,ft=$e&&!!C.anisotropyMap,Yt=L&&!!C.clearcoatMap,Dt=L&&!!C.clearcoatNormalMap,Wt=L&&!!C.clearcoatRoughnessMap,qt=nt&&!!C.iridescenceMap,Rt=nt&&!!C.iridescenceThicknessMap,Ut=pt&&!!C.sheenColorMap,Zt=pt&&!!C.sheenRoughnessMap,Bt=!!C.specularMap,Nt=!!C.specularColorMap,oe=!!C.specularIntensityMap,W=Et&&!!C.transmissionMap,wt=Et&&!!C.thicknessMap,Lt=!!C.gradientMap,It=!!C.alphaMap,bt=C.alphaTest>0,vt=!!C.alphaHash,Ht=!!C.extensions;let ae=ja;C.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(ae=s.toneMapping);const Pe={shaderID:yt,shaderType:C.type,shaderName:C.name,vertexShader:Mt,fragmentShader:Ct,defines:C.defines,customVertexShaderID:J,customFragmentShaderID:_t,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:jt,batchingColor:jt&&lt._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&lt.instanceColor!==null,instancingMorph:Tt&&lt.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:$===null?s.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Bs,alphaToCoverage:!!C.alphaToCoverage,map:Ie,matcap:ge,envMap:G,envMapMode:G&&K.mapping,envMapCubeUVHeight:Y,aoMap:Ae,lightMap:$t,bumpMap:be,normalMap:Kt,displacementMap:S&&Xe,emissiveMap:Ft,normalMapObjectSpace:Kt&&C.normalMapType===zM,normalMapTangentSpace:Kt&&C.normalMapType===Sv,metalnessMap:se,roughnessMap:en,anisotropy:$e,anisotropyMap:ft,clearcoat:L,clearcoatMap:Yt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Wt,dispersion:b,iridescence:nt,iridescenceMap:qt,iridescenceThicknessMap:Rt,sheen:pt,sheenColorMap:Ut,sheenRoughnessMap:Zt,specularMap:Bt,specularColorMap:Nt,specularIntensityMap:oe,transmission:Et,transmissionMap:W,thicknessMap:wt,gradientMap:Lt,opaque:C.transparent===!1&&C.blending===Us&&C.alphaToCoverage===!1,alphaMap:It,alphaTest:bt,alphaHash:vt,combine:C.combine,mapUv:Ie&&E(C.map.channel),aoMapUv:Ae&&E(C.aoMap.channel),lightMapUv:$t&&E(C.lightMap.channel),bumpMapUv:be&&E(C.bumpMap.channel),normalMapUv:Kt&&E(C.normalMap.channel),displacementMapUv:Xe&&E(C.displacementMap.channel),emissiveMapUv:Ft&&E(C.emissiveMap.channel),metalnessMapUv:se&&E(C.metalnessMap.channel),roughnessMapUv:en&&E(C.roughnessMap.channel),anisotropyMapUv:ft&&E(C.anisotropyMap.channel),clearcoatMapUv:Yt&&E(C.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&E(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&E(C.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&E(C.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&E(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&E(C.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&E(C.sheenRoughnessMap.channel),specularMapUv:Bt&&E(C.specularMap.channel),specularColorMapUv:Nt&&E(C.specularColorMap.channel),specularIntensityMapUv:oe&&E(C.specularIntensityMap.channel),transmissionMapUv:W&&E(C.transmissionMap.channel),thicknessMapUv:wt&&E(C.thicknessMap.channel),alphaMapUv:It&&E(C.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(Kt||$e),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!dt.attributes.uv&&(Ie||It),fog:!!ut,useFog:C.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:At,skinning:lt.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:it,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:ae,decodeVideoTexture:Ie&&C.map.isVideoTexture===!0&&Ue.getTransfer(C.map.colorSpace)===Ve,decodeVideoTextureEmissive:Ft&&C.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(C.emissiveMap.colorSpace)===Ve,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===da,flipSided:C.side===jn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ht&&C.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&C.extensions.multiDraw===!0||jt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Pe.vertexUv1s=p.has(1),Pe.vertexUv2s=p.has(2),Pe.vertexUv3s=p.has(3),p.clear(),Pe}function v(C){const D=[];if(C.shaderID?D.push(C.shaderID):(D.push(C.customVertexShaderID),D.push(C.customFragmentShaderID)),C.defines!==void 0)for(const B in C.defines)D.push(B),D.push(C.defines[B]);return C.isRawShaderMaterial===!1&&(z(D,C),U(D,C),D.push(s.outputColorSpace)),D.push(C.customProgramCacheKey),D.join()}function z(C,D){C.push(D.precision),C.push(D.outputColorSpace),C.push(D.envMapMode),C.push(D.envMapCubeUVHeight),C.push(D.mapUv),C.push(D.alphaMapUv),C.push(D.lightMapUv),C.push(D.aoMapUv),C.push(D.bumpMapUv),C.push(D.normalMapUv),C.push(D.displacementMapUv),C.push(D.emissiveMapUv),C.push(D.metalnessMapUv),C.push(D.roughnessMapUv),C.push(D.anisotropyMapUv),C.push(D.clearcoatMapUv),C.push(D.clearcoatNormalMapUv),C.push(D.clearcoatRoughnessMapUv),C.push(D.iridescenceMapUv),C.push(D.iridescenceThicknessMapUv),C.push(D.sheenColorMapUv),C.push(D.sheenRoughnessMapUv),C.push(D.specularMapUv),C.push(D.specularColorMapUv),C.push(D.specularIntensityMapUv),C.push(D.transmissionMapUv),C.push(D.thicknessMapUv),C.push(D.combine),C.push(D.fogExp2),C.push(D.sizeAttenuation),C.push(D.morphTargetsCount),C.push(D.morphAttributeCount),C.push(D.numDirLights),C.push(D.numPointLights),C.push(D.numSpotLights),C.push(D.numSpotLightMaps),C.push(D.numHemiLights),C.push(D.numRectAreaLights),C.push(D.numDirLightShadows),C.push(D.numPointLightShadows),C.push(D.numSpotLightShadows),C.push(D.numSpotLightShadowsWithMaps),C.push(D.numLightProbes),C.push(D.shadowMapType),C.push(D.toneMapping),C.push(D.numClippingPlanes),C.push(D.numClipIntersection),C.push(D.depthPacking)}function U(C,D){d.disableAll(),D.supportsVertexTextures&&d.enable(0),D.instancing&&d.enable(1),D.instancingColor&&d.enable(2),D.instancingMorph&&d.enable(3),D.matcap&&d.enable(4),D.envMap&&d.enable(5),D.normalMapObjectSpace&&d.enable(6),D.normalMapTangentSpace&&d.enable(7),D.clearcoat&&d.enable(8),D.iridescence&&d.enable(9),D.alphaTest&&d.enable(10),D.vertexColors&&d.enable(11),D.vertexAlphas&&d.enable(12),D.vertexUv1s&&d.enable(13),D.vertexUv2s&&d.enable(14),D.vertexUv3s&&d.enable(15),D.vertexTangents&&d.enable(16),D.anisotropy&&d.enable(17),D.alphaHash&&d.enable(18),D.batching&&d.enable(19),D.dispersion&&d.enable(20),D.batchingColor&&d.enable(21),D.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),C.push(d.mask)}function w(C){const D=T[C.type];let B;if(D){const st=Bi[D];B=Ax.clone(st.uniforms)}else B=C.uniforms;return B}function H(C,D){let B;for(let st=0,lt=g.length;st<lt;st++){const ut=g[st];if(ut.cacheKey===D){B=ut,++B.usedTimes;break}}return B===void 0&&(B=new y2(s,D,C,c),g.push(B)),B}function F(C){if(--C.usedTimes===0){const D=g.indexOf(C);g[D]=g[g.length-1],g.pop(),C.destroy()}}function O(C){m.remove(C)}function X(){m.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:w,acquireProgram:H,releaseProgram:F,releaseShaderCache:O,programs:g,dispose:X}}function b2(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function a(f){s.delete(f)}function l(f,d,m){s.get(f)[d]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:a,update:l,dispose:c}}function T2(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function nv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function iv(){const s=[];let t=0;const i=[],a=[],l=[];function c(){t=0,i.length=0,a.length=0,l.length=0}function f(_,S,M,T,E,x){let v=s[t];return v===void 0?(v={id:_.id,object:_,geometry:S,material:M,groupOrder:T,renderOrder:_.renderOrder,z:E,group:x},s[t]=v):(v.id=_.id,v.object=_,v.geometry=S,v.material=M,v.groupOrder=T,v.renderOrder=_.renderOrder,v.z=E,v.group=x),t++,v}function d(_,S,M,T,E,x){const v=f(_,S,M,T,E,x);M.transmission>0?a.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(_,S,M,T,E,x){const v=f(_,S,M,T,E,x);M.transmission>0?a.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,S){i.length>1&&i.sort(_||T2),a.length>1&&a.sort(S||nv),l.length>1&&l.sort(S||nv)}function g(){for(let _=t,S=s.length;_<S;_++){const M=s[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:a,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function A2(){let s=new WeakMap;function t(a,l){const c=s.get(a);let f;return c===void 0?(f=new iv,s.set(a,[f])):l>=c.length?(f=new iv,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function R2(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new V,color:new me};break;case"SpotLight":i={position:new V,direction:new V,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new V,color:new me,distance:0,decay:0};break;case"HemisphereLight":i={direction:new V,skyColor:new me,groundColor:new me};break;case"RectAreaLight":i={color:new me,position:new V,halfWidth:new V,halfHeight:new V};break}return s[t.id]=i,i}}}function w2(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let C2=0;function D2(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function U2(s){const t=new R2,i=w2(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new V);const l=new V,c=new Ke,f=new Ke;function d(p){let g=0,_=0,S=0;for(let C=0;C<9;C++)a.probe[C].set(0,0,0);let M=0,T=0,E=0,x=0,v=0,z=0,U=0,w=0,H=0,F=0,O=0;p.sort(D2);for(let C=0,D=p.length;C<D;C++){const B=p[C],st=B.color,lt=B.intensity,ut=B.distance,dt=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)g+=st.r*lt,_+=st.g*lt,S+=st.b*lt;else if(B.isLightProbe){for(let P=0;P<9;P++)a.probe[P].addScaledVector(B.sh.coefficients[P],lt);O++}else if(B.isDirectionalLight){const P=t.get(B);if(P.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const K=B.shadow,Y=i.get(B);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,a.directionalShadow[M]=Y,a.directionalShadowMap[M]=dt,a.directionalShadowMatrix[M]=B.shadow.matrix,z++}a.directional[M]=P,M++}else if(B.isSpotLight){const P=t.get(B);P.position.setFromMatrixPosition(B.matrixWorld),P.color.copy(st).multiplyScalar(lt),P.distance=ut,P.coneCos=Math.cos(B.angle),P.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),P.decay=B.decay,a.spot[E]=P;const K=B.shadow;if(B.map&&(a.spotLightMap[H]=B.map,H++,K.updateMatrices(B),B.castShadow&&F++),a.spotLightMatrix[E]=K.matrix,B.castShadow){const Y=i.get(B);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,a.spotShadow[E]=Y,a.spotShadowMap[E]=dt,w++}E++}else if(B.isRectAreaLight){const P=t.get(B);P.color.copy(st).multiplyScalar(lt),P.halfWidth.set(B.width*.5,0,0),P.halfHeight.set(0,B.height*.5,0),a.rectArea[x]=P,x++}else if(B.isPointLight){const P=t.get(B);if(P.color.copy(B.color).multiplyScalar(B.intensity),P.distance=B.distance,P.decay=B.decay,B.castShadow){const K=B.shadow,Y=i.get(B);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,a.pointShadow[T]=Y,a.pointShadowMap[T]=dt,a.pointShadowMatrix[T]=B.shadow.matrix,U++}a.point[T]=P,T++}else if(B.isHemisphereLight){const P=t.get(B);P.skyColor.copy(B.color).multiplyScalar(lt),P.groundColor.copy(B.groundColor).multiplyScalar(lt),a.hemi[v]=P,v++}}x>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Pt.LTC_FLOAT_1,a.rectAreaLTC2=Pt.LTC_FLOAT_2):(a.rectAreaLTC1=Pt.LTC_HALF_1,a.rectAreaLTC2=Pt.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=S;const X=a.hash;(X.directionalLength!==M||X.pointLength!==T||X.spotLength!==E||X.rectAreaLength!==x||X.hemiLength!==v||X.numDirectionalShadows!==z||X.numPointShadows!==U||X.numSpotShadows!==w||X.numSpotMaps!==H||X.numLightProbes!==O)&&(a.directional.length=M,a.spot.length=E,a.rectArea.length=x,a.point.length=T,a.hemi.length=v,a.directionalShadow.length=z,a.directionalShadowMap.length=z,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=w,a.spotShadowMap.length=w,a.directionalShadowMatrix.length=z,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=w+H-F,a.spotLightMap.length=H,a.numSpotLightShadowsWithMaps=F,a.numLightProbes=O,X.directionalLength=M,X.pointLength=T,X.spotLength=E,X.rectAreaLength=x,X.hemiLength=v,X.numDirectionalShadows=z,X.numPointShadows=U,X.numSpotShadows=w,X.numSpotMaps=H,X.numLightProbes=O,a.version=C2++)}function m(p,g){let _=0,S=0,M=0,T=0,E=0;const x=g.matrixWorldInverse;for(let v=0,z=p.length;v<z;v++){const U=p[v];if(U.isDirectionalLight){const w=a.directional[_];w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(x),_++}else if(U.isSpotLight){const w=a.spot[M];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(x),M++}else if(U.isRectAreaLight){const w=a.rectArea[T];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(x),f.identity(),c.copy(U.matrixWorld),c.premultiply(x),f.extractRotation(c),w.halfWidth.set(U.width*.5,0,0),w.halfHeight.set(0,U.height*.5,0),w.halfWidth.applyMatrix4(f),w.halfHeight.applyMatrix4(f),T++}else if(U.isPointLight){const w=a.point[S];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(x),S++}else if(U.isHemisphereLight){const w=a.hemi[E];w.direction.setFromMatrixPosition(U.matrixWorld),w.direction.transformDirection(x),E++}}}return{setup:d,setupView:m,state:a}}function av(s){const t=new U2(s),i=[],a=[];function l(g){p.camera=g,i.length=0,a.length=0}function c(g){i.push(g)}function f(g){a.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function L2(s){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new av(s),t.set(l,[d])):c>=f.length?(d=new av(s),f.push(d)):d=f[c],d}function a(){t=new WeakMap}return{get:i,dispose:a}}const N2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function P2(s,t,i){let a=new ep;const l=new ee,c=new ee,f=new ke,d=new t1({depthPacking:PM}),m=new e1,p={},g=i.maxTextureSize,_={[Ka]:jn,[jn]:Ka,[da]:da},S=new Qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:N2,fragmentShader:O2}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const T=new Mi;T.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Zn(T,S),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ov;let v=this.type;this.render=function(F,O,X){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||F.length===0)return;const C=s.getRenderTarget(),D=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),st=s.state;st.setBlending(Za),st.buffers.depth.getReversed()?st.buffers.color.setClear(0,0,0,0):st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const lt=v!==ha&&this.type===ha,ut=v===ha&&this.type!==ha;for(let dt=0,P=F.length;dt<P;dt++){const K=F[dt],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const yt=Y.getFrameExtents();if(l.multiply(yt),c.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/yt.x),l.x=c.x*yt.x,Y.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/yt.y),l.y=c.y*yt.y,Y.mapSize.y=c.y)),Y.map===null||lt===!0||ut===!0){const N=this.type!==ha?{minFilter:Di,magFilter:Di}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ur(l.x,l.y,N),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const xt=Y.getViewportCount();for(let N=0;N<xt;N++){const it=Y.getViewport(N);f.set(c.x*it.x,c.y*it.y,c.x*it.z,c.y*it.w),st.viewport(f),Y.updateMatrices(K,N),a=Y.getFrustum(),w(O,X,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===ha&&z(Y,X),Y.needsUpdate=!1}v=this.type,x.needsUpdate=!1,s.setRenderTarget(C,D,B)};function z(F,O){const X=t.update(E);S.defines.VSM_SAMPLES!==F.blurSamples&&(S.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Ur(l.x,l.y)),S.uniforms.shadow_pass.value=F.map.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(O,null,X,S,E,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(O,null,X,M,E,null)}function U(F,O,X,C){let D=null;const B=X.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(B!==void 0)D=B;else if(D=X.isPointLight===!0?m:d,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const st=D.uuid,lt=O.uuid;let ut=p[st];ut===void 0&&(ut={},p[st]=ut);let dt=ut[lt];dt===void 0&&(dt=D.clone(),ut[lt]=dt,O.addEventListener("dispose",H)),D=dt}if(D.visible=O.visible,D.wireframe=O.wireframe,C===ha?D.side=O.shadowSide!==null?O.shadowSide:O.side:D.side=O.shadowSide!==null?O.shadowSide:_[O.side],D.alphaMap=O.alphaMap,D.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,D.map=O.map,D.clipShadows=O.clipShadows,D.clippingPlanes=O.clippingPlanes,D.clipIntersection=O.clipIntersection,D.displacementMap=O.displacementMap,D.displacementScale=O.displacementScale,D.displacementBias=O.displacementBias,D.wireframeLinewidth=O.wireframeLinewidth,D.linewidth=O.linewidth,X.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const st=s.properties.get(D);st.light=X}return D}function w(F,O,X,C,D){if(F.visible===!1)return;if(F.layers.test(O.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&D===ha)&&(!F.frustumCulled||a.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,F.matrixWorld);const lt=t.update(F),ut=F.material;if(Array.isArray(ut)){const dt=lt.groups;for(let P=0,K=dt.length;P<K;P++){const Y=dt[P],yt=ut[Y.materialIndex];if(yt&&yt.visible){const xt=U(F,yt,C,D);F.onBeforeShadow(s,F,O,X,lt,xt,Y),s.renderBufferDirect(X,null,lt,xt,F,Y),F.onAfterShadow(s,F,O,X,lt,xt,Y)}}}else if(ut.visible){const dt=U(F,ut,C,D);F.onBeforeShadow(s,F,O,X,lt,dt,null),s.renderBufferDirect(X,null,lt,dt,F,null),F.onAfterShadow(s,F,O,X,lt,dt,null)}}const st=F.children;for(let lt=0,ut=st.length;lt<ut;lt++)w(st[lt],O,X,C,D)}function H(F){F.target.removeEventListener("dispose",H);for(const X in p){const C=p[X],D=F.target.uuid;D in C&&(C[D].dispose(),delete C[D])}}}const z2={[id]:ad,[rd]:ld,[sd]:cd,[Os]:od,[ad]:id,[ld]:rd,[cd]:sd,[od]:Os};function B2(s,t){function i(){let W=!1;const wt=new ke;let Lt=null;const It=new ke(0,0,0,0);return{setMask:function(bt){Lt!==bt&&!W&&(s.colorMask(bt,bt,bt,bt),Lt=bt)},setLocked:function(bt){W=bt},setClear:function(bt,vt,Ht,ae,Pe){Pe===!0&&(bt*=ae,vt*=ae,Ht*=ae),wt.set(bt,vt,Ht,ae),It.equals(wt)===!1&&(s.clearColor(bt,vt,Ht,ae),It.copy(wt))},reset:function(){W=!1,Lt=null,It.set(-1,0,0,0)}}}function a(){let W=!1,wt=!1,Lt=null,It=null,bt=null;return{setReversed:function(vt){if(wt!==vt){const Ht=t.get("EXT_clip_control");vt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),wt=vt;const ae=bt;bt=null,this.setClear(ae)}},getReversed:function(){return wt},setTest:function(vt){vt?$(s.DEPTH_TEST):At(s.DEPTH_TEST)},setMask:function(vt){Lt!==vt&&!W&&(s.depthMask(vt),Lt=vt)},setFunc:function(vt){if(wt&&(vt=z2[vt]),It!==vt){switch(vt){case id:s.depthFunc(s.NEVER);break;case ad:s.depthFunc(s.ALWAYS);break;case rd:s.depthFunc(s.LESS);break;case Os:s.depthFunc(s.LEQUAL);break;case sd:s.depthFunc(s.EQUAL);break;case od:s.depthFunc(s.GEQUAL);break;case ld:s.depthFunc(s.GREATER);break;case cd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}It=vt}},setLocked:function(vt){W=vt},setClear:function(vt){bt!==vt&&(wt&&(vt=1-vt),s.clearDepth(vt),bt=vt)},reset:function(){W=!1,Lt=null,It=null,bt=null,wt=!1}}}function l(){let W=!1,wt=null,Lt=null,It=null,bt=null,vt=null,Ht=null,ae=null,Pe=null;return{setTest:function(Re){W||(Re?$(s.STENCIL_TEST):At(s.STENCIL_TEST))},setMask:function(Re){wt!==Re&&!W&&(s.stencilMask(Re),wt=Re)},setFunc:function(Re,Pn,li){(Lt!==Re||It!==Pn||bt!==li)&&(s.stencilFunc(Re,Pn,li),Lt=Re,It=Pn,bt=li)},setOp:function(Re,Pn,li){(vt!==Re||Ht!==Pn||ae!==li)&&(s.stencilOp(Re,Pn,li),vt=Re,Ht=Pn,ae=li)},setLocked:function(Re){W=Re},setClear:function(Re){Pe!==Re&&(s.clearStencil(Re),Pe=Re)},reset:function(){W=!1,wt=null,Lt=null,It=null,bt=null,vt=null,Ht=null,ae=null,Pe=null}}}const c=new i,f=new a,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},S=new WeakMap,M=[],T=null,E=!1,x=null,v=null,z=null,U=null,w=null,H=null,F=null,O=new me(0,0,0),X=0,C=!1,D=null,B=null,st=null,lt=null,ut=null;const dt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,K=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),P=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),P=K>=2);let yt=null,xt={};const N=s.getParameter(s.SCISSOR_BOX),it=s.getParameter(s.VIEWPORT),Mt=new ke().fromArray(N),Ct=new ke().fromArray(it);function J(W,wt,Lt,It){const bt=new Uint8Array(4),vt=s.createTexture();s.bindTexture(W,vt),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ht=0;Ht<Lt;Ht++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(wt,0,s.RGBA,1,1,It,0,s.RGBA,s.UNSIGNED_BYTE,bt):s.texImage2D(wt+Ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,bt);return vt}const _t={};_t[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),_t[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_t[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),$(s.DEPTH_TEST),f.setFunc(Os),be(!1),Kt($g),$(s.CULL_FACE),Ae(Za);function $(W){g[W]!==!0&&(s.enable(W),g[W]=!0)}function At(W){g[W]!==!1&&(s.disable(W),g[W]=!1)}function Tt(W,wt){return _[W]!==wt?(s.bindFramebuffer(W,wt),_[W]=wt,W===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=wt),W===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=wt),!0):!1}function jt(W,wt){let Lt=M,It=!1;if(W){Lt=S.get(wt),Lt===void 0&&(Lt=[],S.set(wt,Lt));const bt=W.textures;if(Lt.length!==bt.length||Lt[0]!==s.COLOR_ATTACHMENT0){for(let vt=0,Ht=bt.length;vt<Ht;vt++)Lt[vt]=s.COLOR_ATTACHMENT0+vt;Lt.length=bt.length,It=!0}}else Lt[0]!==s.BACK&&(Lt[0]=s.BACK,It=!0);It&&s.drawBuffers(Lt)}function Ie(W){return T!==W?(s.useProgram(W),T=W,!0):!1}const ge={[Ar]:s.FUNC_ADD,[lM]:s.FUNC_SUBTRACT,[cM]:s.FUNC_REVERSE_SUBTRACT};ge[uM]=s.MIN,ge[fM]=s.MAX;const G={[hM]:s.ZERO,[dM]:s.ONE,[pM]:s.SRC_COLOR,[ed]:s.SRC_ALPHA,[SM]:s.SRC_ALPHA_SATURATE,[vM]:s.DST_COLOR,[gM]:s.DST_ALPHA,[mM]:s.ONE_MINUS_SRC_COLOR,[nd]:s.ONE_MINUS_SRC_ALPHA,[yM]:s.ONE_MINUS_DST_COLOR,[_M]:s.ONE_MINUS_DST_ALPHA,[MM]:s.CONSTANT_COLOR,[xM]:s.ONE_MINUS_CONSTANT_COLOR,[EM]:s.CONSTANT_ALPHA,[bM]:s.ONE_MINUS_CONSTANT_ALPHA};function Ae(W,wt,Lt,It,bt,vt,Ht,ae,Pe,Re){if(W===Za){E===!0&&(At(s.BLEND),E=!1);return}if(E===!1&&($(s.BLEND),E=!0),W!==oM){if(W!==x||Re!==C){if((v!==Ar||w!==Ar)&&(s.blendEquation(s.FUNC_ADD),v=Ar,w=Ar),Re)switch(W){case Us:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case t_:s.blendFunc(s.ONE,s.ONE);break;case e_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case n_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Us:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case t_:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case e_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case n_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}z=null,U=null,H=null,F=null,O.set(0,0,0),X=0,x=W,C=Re}return}bt=bt||wt,vt=vt||Lt,Ht=Ht||It,(wt!==v||bt!==w)&&(s.blendEquationSeparate(ge[wt],ge[bt]),v=wt,w=bt),(Lt!==z||It!==U||vt!==H||Ht!==F)&&(s.blendFuncSeparate(G[Lt],G[It],G[vt],G[Ht]),z=Lt,U=It,H=vt,F=Ht),(ae.equals(O)===!1||Pe!==X)&&(s.blendColor(ae.r,ae.g,ae.b,Pe),O.copy(ae),X=Pe),x=W,C=!1}function $t(W,wt){W.side===da?At(s.CULL_FACE):$(s.CULL_FACE);let Lt=W.side===jn;wt&&(Lt=!Lt),be(Lt),W.blending===Us&&W.transparent===!1?Ae(Za):Ae(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const It=W.stencilWrite;d.setTest(It),It&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ft(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?$(s.SAMPLE_ALPHA_TO_COVERAGE):At(s.SAMPLE_ALPHA_TO_COVERAGE)}function be(W){D!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),D=W)}function Kt(W){W!==rM?($(s.CULL_FACE),W!==B&&(W===$g?s.cullFace(s.BACK):W===sM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):At(s.CULL_FACE),B=W}function Xe(W){W!==st&&(P&&s.lineWidth(W),st=W)}function Ft(W,wt,Lt){W?($(s.POLYGON_OFFSET_FILL),(lt!==wt||ut!==Lt)&&(s.polygonOffset(wt,Lt),lt=wt,ut=Lt)):At(s.POLYGON_OFFSET_FILL)}function se(W){W?$(s.SCISSOR_TEST):At(s.SCISSOR_TEST)}function en(W){W===void 0&&(W=s.TEXTURE0+dt-1),yt!==W&&(s.activeTexture(W),yt=W)}function $e(W,wt,Lt){Lt===void 0&&(yt===null?Lt=s.TEXTURE0+dt-1:Lt=yt);let It=xt[Lt];It===void 0&&(It={type:void 0,texture:void 0},xt[Lt]=It),(It.type!==W||It.texture!==wt)&&(yt!==Lt&&(s.activeTexture(Lt),yt=Lt),s.bindTexture(W,wt||_t[W]),It.type=W,It.texture=wt)}function L(){const W=xt[yt];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function nt(){try{s.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pt(){try{s.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Et(){try{s.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ft(){try{s.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Yt(){try{s.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Dt(){try{s.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Wt(){try{s.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qt(){try{s.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Rt(){try{s.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ut(W){Mt.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),Mt.copy(W))}function Zt(W){Ct.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Ct.copy(W))}function Bt(W,wt){let Lt=p.get(wt);Lt===void 0&&(Lt=new WeakMap,p.set(wt,Lt));let It=Lt.get(W);It===void 0&&(It=s.getUniformBlockIndex(wt,W.name),Lt.set(W,It))}function Nt(W,wt){const It=p.get(wt).get(W);m.get(wt)!==It&&(s.uniformBlockBinding(wt,It,W.__bindingPointIndex),m.set(wt,It))}function oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},yt=null,xt={},_={},S=new WeakMap,M=[],T=null,E=!1,x=null,v=null,z=null,U=null,w=null,H=null,F=null,O=new me(0,0,0),X=0,C=!1,D=null,B=null,st=null,lt=null,ut=null,Mt.set(0,0,s.canvas.width,s.canvas.height),Ct.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:$,disable:At,bindFramebuffer:Tt,drawBuffers:jt,useProgram:Ie,setBlending:Ae,setMaterial:$t,setFlipSided:be,setCullFace:Kt,setLineWidth:Xe,setPolygonOffset:Ft,setScissorTest:se,activeTexture:en,bindTexture:$e,unbindTexture:L,compressedTexImage2D:b,compressedTexImage3D:nt,texImage2D:qt,texImage3D:Rt,updateUBOMapping:Bt,uniformBlockBinding:Nt,texStorage2D:Dt,texStorage3D:Wt,texSubImage2D:pt,texSubImage3D:Et,compressedTexSubImage2D:ft,compressedTexSubImage3D:Yt,scissor:Ut,viewport:Zt,reset:oe}}function I2(s,t,i,a,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ee,g=new WeakMap;let _;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,b){return M?new OffscreenCanvas(L,b):Kc("canvas")}function E(L,b,nt){let pt=1;const Et=$e(L);if((Et.width>nt||Et.height>nt)&&(pt=nt/Math.max(Et.width,Et.height)),pt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ft=Math.floor(pt*Et.width),Yt=Math.floor(pt*Et.height);_===void 0&&(_=T(ft,Yt));const Dt=b?T(ft,Yt):_;return Dt.width=ft,Dt.height=Yt,Dt.getContext("2d").drawImage(L,0,0,ft,Yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+ft+"x"+Yt+")."),Dt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),L;return L}function x(L){return L.generateMipmaps}function v(L){s.generateMipmap(L)}function z(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(L,b,nt,pt,Et=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ft=b;if(b===s.RED&&(nt===s.FLOAT&&(ft=s.R32F),nt===s.HALF_FLOAT&&(ft=s.R16F),nt===s.UNSIGNED_BYTE&&(ft=s.R8)),b===s.RED_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ft=s.R8UI),nt===s.UNSIGNED_SHORT&&(ft=s.R16UI),nt===s.UNSIGNED_INT&&(ft=s.R32UI),nt===s.BYTE&&(ft=s.R8I),nt===s.SHORT&&(ft=s.R16I),nt===s.INT&&(ft=s.R32I)),b===s.RG&&(nt===s.FLOAT&&(ft=s.RG32F),nt===s.HALF_FLOAT&&(ft=s.RG16F),nt===s.UNSIGNED_BYTE&&(ft=s.RG8)),b===s.RG_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ft=s.RG8UI),nt===s.UNSIGNED_SHORT&&(ft=s.RG16UI),nt===s.UNSIGNED_INT&&(ft=s.RG32UI),nt===s.BYTE&&(ft=s.RG8I),nt===s.SHORT&&(ft=s.RG16I),nt===s.INT&&(ft=s.RG32I)),b===s.RGB_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ft=s.RGB8UI),nt===s.UNSIGNED_SHORT&&(ft=s.RGB16UI),nt===s.UNSIGNED_INT&&(ft=s.RGB32UI),nt===s.BYTE&&(ft=s.RGB8I),nt===s.SHORT&&(ft=s.RGB16I),nt===s.INT&&(ft=s.RGB32I)),b===s.RGBA_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ft=s.RGBA8UI),nt===s.UNSIGNED_SHORT&&(ft=s.RGBA16UI),nt===s.UNSIGNED_INT&&(ft=s.RGBA32UI),nt===s.BYTE&&(ft=s.RGBA8I),nt===s.SHORT&&(ft=s.RGBA16I),nt===s.INT&&(ft=s.RGBA32I)),b===s.RGB&&nt===s.UNSIGNED_INT_5_9_9_9_REV&&(ft=s.RGB9_E5),b===s.RGBA){const Yt=Et?Zc:Ue.getTransfer(pt);nt===s.FLOAT&&(ft=s.RGBA32F),nt===s.HALF_FLOAT&&(ft=s.RGBA16F),nt===s.UNSIGNED_BYTE&&(ft=Yt===Ve?s.SRGB8_ALPHA8:s.RGBA8),nt===s.UNSIGNED_SHORT_4_4_4_4&&(ft=s.RGBA4),nt===s.UNSIGNED_SHORT_5_5_5_1&&(ft=s.RGB5_A1)}return(ft===s.R16F||ft===s.R32F||ft===s.RG16F||ft===s.RG32F||ft===s.RGBA16F||ft===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function w(L,b){let nt;return L?b===null||b===Dr||b===el?nt=s.DEPTH24_STENCIL8:b===pa?nt=s.DEPTH32F_STENCIL8:b===tl&&(nt=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Dr||b===el?nt=s.DEPTH_COMPONENT24:b===pa?nt=s.DEPTH_COMPONENT32F:b===tl&&(nt=s.DEPTH_COMPONENT16),nt}function H(L,b){return x(L)===!0||L.isFramebufferTexture&&L.minFilter!==Di&&L.minFilter!==Ii?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function F(L){const b=L.target;b.removeEventListener("dispose",F),X(b),b.isVideoTexture&&g.delete(b)}function O(L){const b=L.target;b.removeEventListener("dispose",O),D(b)}function X(L){const b=a.get(L);if(b.__webglInit===void 0)return;const nt=L.source,pt=S.get(nt);if(pt){const Et=pt[b.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&C(L),Object.keys(pt).length===0&&S.delete(nt)}a.remove(L)}function C(L){const b=a.get(L);s.deleteTexture(b.__webglTexture);const nt=L.source,pt=S.get(nt);delete pt[b.__cacheKey],f.memory.textures--}function D(L){const b=a.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),a.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(b.__webglFramebuffer[pt]))for(let Et=0;Et<b.__webglFramebuffer[pt].length;Et++)s.deleteFramebuffer(b.__webglFramebuffer[pt][Et]);else s.deleteFramebuffer(b.__webglFramebuffer[pt]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[pt])}else{if(Array.isArray(b.__webglFramebuffer))for(let pt=0;pt<b.__webglFramebuffer.length;pt++)s.deleteFramebuffer(b.__webglFramebuffer[pt]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let pt=0;pt<b.__webglColorRenderbuffer.length;pt++)b.__webglColorRenderbuffer[pt]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[pt]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const nt=L.textures;for(let pt=0,Et=nt.length;pt<Et;pt++){const ft=a.get(nt[pt]);ft.__webglTexture&&(s.deleteTexture(ft.__webglTexture),f.memory.textures--),a.remove(nt[pt])}a.remove(L)}let B=0;function st(){B=0}function lt(){const L=B;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),B+=1,L}function ut(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function dt(L,b){const nt=a.get(L);if(L.isVideoTexture&&se(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&nt.__version!==L.version){const pt=L.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_t(nt,L,b);return}}else L.isExternalTexture&&(nt.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,nt.__webglTexture,s.TEXTURE0+b)}function P(L,b){const nt=a.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&nt.__version!==L.version){_t(nt,L,b);return}i.bindTexture(s.TEXTURE_2D_ARRAY,nt.__webglTexture,s.TEXTURE0+b)}function K(L,b){const nt=a.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&nt.__version!==L.version){_t(nt,L,b);return}i.bindTexture(s.TEXTURE_3D,nt.__webglTexture,s.TEXTURE0+b)}function Y(L,b){const nt=a.get(L);if(L.version>0&&nt.__version!==L.version){$(nt,L,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture,s.TEXTURE0+b)}const yt={[$o]:s.REPEAT,[wr]:s.CLAMP_TO_EDGE,[hd]:s.MIRRORED_REPEAT},xt={[Di]:s.NEAREST,[NM]:s.NEAREST_MIPMAP_NEAREST,[_c]:s.NEAREST_MIPMAP_LINEAR,[Ii]:s.LINEAR,[_h]:s.LINEAR_MIPMAP_NEAREST,[Cr]:s.LINEAR_MIPMAP_LINEAR},N={[BM]:s.NEVER,[kM]:s.ALWAYS,[IM]:s.LESS,[Mv]:s.LEQUAL,[FM]:s.EQUAL,[VM]:s.GEQUAL,[HM]:s.GREATER,[GM]:s.NOTEQUAL};function it(L,b){if(b.type===pa&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ii||b.magFilter===_h||b.magFilter===_c||b.magFilter===Cr||b.minFilter===Ii||b.minFilter===_h||b.minFilter===_c||b.minFilter===Cr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,yt[b.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,yt[b.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,yt[b.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,xt[b.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,xt[b.minFilter]),b.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,N[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Di||b.minFilter!==_c&&b.minFilter!==Cr||b.type===pa&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||a.get(b).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),a.get(b).__currentAnisotropy=b.anisotropy}}}function Mt(L,b){let nt=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",F));const pt=b.source;let Et=S.get(pt);Et===void 0&&(Et={},S.set(pt,Et));const ft=ut(b);if(ft!==L.__cacheKey){Et[ft]===void 0&&(Et[ft]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,nt=!0),Et[ft].usedTimes++;const Yt=Et[L.__cacheKey];Yt!==void 0&&(Et[L.__cacheKey].usedTimes--,Yt.usedTimes===0&&C(b)),L.__cacheKey=ft,L.__webglTexture=Et[ft].texture}return nt}function Ct(L,b,nt){return Math.floor(Math.floor(L/nt)/b)}function J(L,b,nt,pt){const ft=L.updateRanges;if(ft.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,nt,pt,b.data);else{ft.sort((Rt,Ut)=>Rt.start-Ut.start);let Yt=0;for(let Rt=1;Rt<ft.length;Rt++){const Ut=ft[Yt],Zt=ft[Rt],Bt=Ut.start+Ut.count,Nt=Ct(Zt.start,b.width,4),oe=Ct(Ut.start,b.width,4);Zt.start<=Bt+1&&Nt===oe&&Ct(Zt.start+Zt.count-1,b.width,4)===Nt?Ut.count=Math.max(Ut.count,Zt.start+Zt.count-Ut.start):(++Yt,ft[Yt]=Zt)}ft.length=Yt+1;const Dt=s.getParameter(s.UNPACK_ROW_LENGTH),Wt=s.getParameter(s.UNPACK_SKIP_PIXELS),qt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let Rt=0,Ut=ft.length;Rt<Ut;Rt++){const Zt=ft[Rt],Bt=Math.floor(Zt.start/4),Nt=Math.ceil(Zt.count/4),oe=Bt%b.width,W=Math.floor(Bt/b.width),wt=Nt,Lt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,oe),s.pixelStorei(s.UNPACK_SKIP_ROWS,W),i.texSubImage2D(s.TEXTURE_2D,0,oe,W,wt,Lt,nt,pt,b.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Dt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Wt),s.pixelStorei(s.UNPACK_SKIP_ROWS,qt)}}function _t(L,b,nt){let pt=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(pt=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(pt=s.TEXTURE_3D);const Et=Mt(L,b),ft=b.source;i.bindTexture(pt,L.__webglTexture,s.TEXTURE0+nt);const Yt=a.get(ft);if(ft.version!==Yt.__version||Et===!0){i.activeTexture(s.TEXTURE0+nt);const Dt=Ue.getPrimaries(Ue.workingColorSpace),Wt=b.colorSpace===Ya?null:Ue.getPrimaries(b.colorSpace),qt=b.colorSpace===Ya||Dt===Wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let Rt=E(b.image,!1,l.maxTextureSize);Rt=en(b,Rt);const Ut=c.convert(b.format,b.colorSpace),Zt=c.convert(b.type);let Bt=U(b.internalFormat,Ut,Zt,b.colorSpace,b.isVideoTexture);it(pt,b);let Nt;const oe=b.mipmaps,W=b.isVideoTexture!==!0,wt=Yt.__version===void 0||Et===!0,Lt=ft.dataReady,It=H(b,Rt);if(b.isDepthTexture)Bt=w(b.format===il,b.type),wt&&(W?i.texStorage2D(s.TEXTURE_2D,1,Bt,Rt.width,Rt.height):i.texImage2D(s.TEXTURE_2D,0,Bt,Rt.width,Rt.height,0,Ut,Zt,null));else if(b.isDataTexture)if(oe.length>0){W&&wt&&i.texStorage2D(s.TEXTURE_2D,It,Bt,oe[0].width,oe[0].height);for(let bt=0,vt=oe.length;bt<vt;bt++)Nt=oe[bt],W?Lt&&i.texSubImage2D(s.TEXTURE_2D,bt,0,0,Nt.width,Nt.height,Ut,Zt,Nt.data):i.texImage2D(s.TEXTURE_2D,bt,Bt,Nt.width,Nt.height,0,Ut,Zt,Nt.data);b.generateMipmaps=!1}else W?(wt&&i.texStorage2D(s.TEXTURE_2D,It,Bt,Rt.width,Rt.height),Lt&&J(b,Rt,Ut,Zt)):i.texImage2D(s.TEXTURE_2D,0,Bt,Rt.width,Rt.height,0,Ut,Zt,Rt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){W&&wt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,It,Bt,oe[0].width,oe[0].height,Rt.depth);for(let bt=0,vt=oe.length;bt<vt;bt++)if(Nt=oe[bt],b.format!==Ci)if(Ut!==null)if(W){if(Lt)if(b.layerUpdates.size>0){const Ht=O_(Nt.width,Nt.height,b.format,b.type);for(const ae of b.layerUpdates){const Pe=Nt.data.subarray(ae*Ht/Nt.data.BYTES_PER_ELEMENT,(ae+1)*Ht/Nt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,bt,0,0,ae,Nt.width,Nt.height,1,Ut,Pe)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,bt,0,0,0,Nt.width,Nt.height,Rt.depth,Ut,Nt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,bt,Bt,Nt.width,Nt.height,Rt.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Lt&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,bt,0,0,0,Nt.width,Nt.height,Rt.depth,Ut,Zt,Nt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,bt,Bt,Nt.width,Nt.height,Rt.depth,0,Ut,Zt,Nt.data)}else{W&&wt&&i.texStorage2D(s.TEXTURE_2D,It,Bt,oe[0].width,oe[0].height);for(let bt=0,vt=oe.length;bt<vt;bt++)Nt=oe[bt],b.format!==Ci?Ut!==null?W?Lt&&i.compressedTexSubImage2D(s.TEXTURE_2D,bt,0,0,Nt.width,Nt.height,Ut,Nt.data):i.compressedTexImage2D(s.TEXTURE_2D,bt,Bt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Lt&&i.texSubImage2D(s.TEXTURE_2D,bt,0,0,Nt.width,Nt.height,Ut,Zt,Nt.data):i.texImage2D(s.TEXTURE_2D,bt,Bt,Nt.width,Nt.height,0,Ut,Zt,Nt.data)}else if(b.isDataArrayTexture)if(W){if(wt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,It,Bt,Rt.width,Rt.height,Rt.depth),Lt)if(b.layerUpdates.size>0){const bt=O_(Rt.width,Rt.height,b.format,b.type);for(const vt of b.layerUpdates){const Ht=Rt.data.subarray(vt*bt/Rt.data.BYTES_PER_ELEMENT,(vt+1)*bt/Rt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,vt,Rt.width,Rt.height,1,Ut,Zt,Ht)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,Ut,Zt,Rt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Bt,Rt.width,Rt.height,Rt.depth,0,Ut,Zt,Rt.data);else if(b.isData3DTexture)W?(wt&&i.texStorage3D(s.TEXTURE_3D,It,Bt,Rt.width,Rt.height,Rt.depth),Lt&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,Ut,Zt,Rt.data)):i.texImage3D(s.TEXTURE_3D,0,Bt,Rt.width,Rt.height,Rt.depth,0,Ut,Zt,Rt.data);else if(b.isFramebufferTexture){if(wt)if(W)i.texStorage2D(s.TEXTURE_2D,It,Bt,Rt.width,Rt.height);else{let bt=Rt.width,vt=Rt.height;for(let Ht=0;Ht<It;Ht++)i.texImage2D(s.TEXTURE_2D,Ht,Bt,bt,vt,0,Ut,Zt,null),bt>>=1,vt>>=1}}else if(oe.length>0){if(W&&wt){const bt=$e(oe[0]);i.texStorage2D(s.TEXTURE_2D,It,Bt,bt.width,bt.height)}for(let bt=0,vt=oe.length;bt<vt;bt++)Nt=oe[bt],W?Lt&&i.texSubImage2D(s.TEXTURE_2D,bt,0,0,Ut,Zt,Nt):i.texImage2D(s.TEXTURE_2D,bt,Bt,Ut,Zt,Nt);b.generateMipmaps=!1}else if(W){if(wt){const bt=$e(Rt);i.texStorage2D(s.TEXTURE_2D,It,Bt,bt.width,bt.height)}Lt&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ut,Zt,Rt)}else i.texImage2D(s.TEXTURE_2D,0,Bt,Ut,Zt,Rt);x(b)&&v(pt),Yt.__version=ft.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function $(L,b,nt){if(b.image.length!==6)return;const pt=Mt(L,b),Et=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+nt);const ft=a.get(Et);if(Et.version!==ft.__version||pt===!0){i.activeTexture(s.TEXTURE0+nt);const Yt=Ue.getPrimaries(Ue.workingColorSpace),Dt=b.colorSpace===Ya?null:Ue.getPrimaries(b.colorSpace),Wt=b.colorSpace===Ya||Yt===Dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const qt=b.isCompressedTexture||b.image[0].isCompressedTexture,Rt=b.image[0]&&b.image[0].isDataTexture,Ut=[];for(let vt=0;vt<6;vt++)!qt&&!Rt?Ut[vt]=E(b.image[vt],!0,l.maxCubemapSize):Ut[vt]=Rt?b.image[vt].image:b.image[vt],Ut[vt]=en(b,Ut[vt]);const Zt=Ut[0],Bt=c.convert(b.format,b.colorSpace),Nt=c.convert(b.type),oe=U(b.internalFormat,Bt,Nt,b.colorSpace),W=b.isVideoTexture!==!0,wt=ft.__version===void 0||pt===!0,Lt=Et.dataReady;let It=H(b,Zt);it(s.TEXTURE_CUBE_MAP,b);let bt;if(qt){W&&wt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,It,oe,Zt.width,Zt.height);for(let vt=0;vt<6;vt++){bt=Ut[vt].mipmaps;for(let Ht=0;Ht<bt.length;Ht++){const ae=bt[Ht];b.format!==Ci?Bt!==null?W?Lt&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht,0,0,ae.width,ae.height,Bt,ae.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht,oe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Lt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht,0,0,ae.width,ae.height,Bt,Nt,ae.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht,oe,ae.width,ae.height,0,Bt,Nt,ae.data)}}}else{if(bt=b.mipmaps,W&&wt){bt.length>0&&It++;const vt=$e(Ut[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,It,oe,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Rt){W?Lt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Ut[vt].width,Ut[vt].height,Bt,Nt,Ut[vt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,oe,Ut[vt].width,Ut[vt].height,0,Bt,Nt,Ut[vt].data);for(let Ht=0;Ht<bt.length;Ht++){const Pe=bt[Ht].image[vt].image;W?Lt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht+1,0,0,Pe.width,Pe.height,Bt,Nt,Pe.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht+1,oe,Pe.width,Pe.height,0,Bt,Nt,Pe.data)}}else{W?Lt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Bt,Nt,Ut[vt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,oe,Bt,Nt,Ut[vt]);for(let Ht=0;Ht<bt.length;Ht++){const ae=bt[Ht];W?Lt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht+1,0,0,Bt,Nt,ae.image[vt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht+1,oe,Bt,Nt,ae.image[vt])}}}x(b)&&v(s.TEXTURE_CUBE_MAP),ft.__version=Et.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function At(L,b,nt,pt,Et,ft){const Yt=c.convert(nt.format,nt.colorSpace),Dt=c.convert(nt.type),Wt=U(nt.internalFormat,Yt,Dt,nt.colorSpace),qt=a.get(b),Rt=a.get(nt);if(Rt.__renderTarget=b,!qt.__hasExternalTextures){const Ut=Math.max(1,b.width>>ft),Zt=Math.max(1,b.height>>ft);Et===s.TEXTURE_3D||Et===s.TEXTURE_2D_ARRAY?i.texImage3D(Et,ft,Wt,Ut,Zt,b.depth,0,Yt,Dt,null):i.texImage2D(Et,ft,Wt,Ut,Zt,0,Yt,Dt,null)}i.bindFramebuffer(s.FRAMEBUFFER,L),Ft(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pt,Et,Rt.__webglTexture,0,Xe(b)):(Et===s.TEXTURE_2D||Et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pt,Et,Rt.__webglTexture,ft),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Tt(L,b,nt){if(s.bindRenderbuffer(s.RENDERBUFFER,L),b.depthBuffer){const pt=b.depthTexture,Et=pt&&pt.isDepthTexture?pt.type:null,ft=w(b.stencilBuffer,Et),Yt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Dt=Xe(b);Ft(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Dt,ft,b.width,b.height):nt?s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,ft,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ft,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Yt,s.RENDERBUFFER,L)}else{const pt=b.textures;for(let Et=0;Et<pt.length;Et++){const ft=pt[Et],Yt=c.convert(ft.format,ft.colorSpace),Dt=c.convert(ft.type),Wt=U(ft.internalFormat,Yt,Dt,ft.colorSpace),qt=Xe(b);nt&&Ft(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,qt,Wt,b.width,b.height):Ft(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qt,Wt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Wt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function jt(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=a.get(b.depthTexture);pt.__renderTarget=b,(!pt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),dt(b.depthTexture,0);const Et=pt.__webglTexture,ft=Xe(b);if(b.depthTexture.format===nl)Ft(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Et,0,ft):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Et,0);else if(b.depthTexture.format===il)Ft(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Et,0,ft):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function Ie(L){const b=a.get(L),nt=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const pt=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),pt){const Et=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,pt.removeEventListener("dispose",Et)};pt.addEventListener("dispose",Et),b.__depthDisposeCallback=Et}b.__boundDepthTexture=pt}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");const pt=L.texture.mipmaps;pt&&pt.length>0?jt(b.__webglFramebuffer[0],L):jt(b.__webglFramebuffer,L)}else if(nt){b.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[pt]),b.__webglDepthbuffer[pt]===void 0)b.__webglDepthbuffer[pt]=s.createRenderbuffer(),Tt(b.__webglDepthbuffer[pt],L,!1);else{const Et=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer[pt];s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,ft)}}else{const pt=L.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Tt(b.__webglDepthbuffer,L,!1);else{const Et=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,ft)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function ge(L,b,nt){const pt=a.get(L);b!==void 0&&At(pt.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),nt!==void 0&&Ie(L)}function G(L){const b=L.texture,nt=a.get(L),pt=a.get(b);L.addEventListener("dispose",O);const Et=L.textures,ft=L.isWebGLCubeRenderTarget===!0,Yt=Et.length>1;if(Yt||(pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture()),pt.__version=b.version,f.memory.textures++),ft){nt.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(b.mipmaps&&b.mipmaps.length>0){nt.__webglFramebuffer[Dt]=[];for(let Wt=0;Wt<b.mipmaps.length;Wt++)nt.__webglFramebuffer[Dt][Wt]=s.createFramebuffer()}else nt.__webglFramebuffer[Dt]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Dt=0;Dt<b.mipmaps.length;Dt++)nt.__webglFramebuffer[Dt]=s.createFramebuffer()}else nt.__webglFramebuffer=s.createFramebuffer();if(Yt)for(let Dt=0,Wt=Et.length;Dt<Wt;Dt++){const qt=a.get(Et[Dt]);qt.__webglTexture===void 0&&(qt.__webglTexture=s.createTexture(),f.memory.textures++)}if(L.samples>0&&Ft(L)===!1){nt.__webglMultisampledFramebuffer=s.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Dt=0;Dt<Et.length;Dt++){const Wt=Et[Dt];nt.__webglColorRenderbuffer[Dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,nt.__webglColorRenderbuffer[Dt]);const qt=c.convert(Wt.format,Wt.colorSpace),Rt=c.convert(Wt.type),Ut=U(Wt.internalFormat,qt,Rt,Wt.colorSpace,L.isXRRenderTarget===!0),Zt=Xe(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt,Ut,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.RENDERBUFFER,nt.__webglColorRenderbuffer[Dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(nt.__webglDepthRenderbuffer=s.createRenderbuffer(),Tt(nt.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ft){i.bindTexture(s.TEXTURE_CUBE_MAP,pt.__webglTexture),it(s.TEXTURE_CUBE_MAP,b);for(let Dt=0;Dt<6;Dt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Wt=0;Wt<b.mipmaps.length;Wt++)At(nt.__webglFramebuffer[Dt][Wt],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Wt);else At(nt.__webglFramebuffer[Dt],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);x(b)&&v(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Yt){for(let Dt=0,Wt=Et.length;Dt<Wt;Dt++){const qt=Et[Dt],Rt=a.get(qt);let Ut=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ut=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ut,Rt.__webglTexture),it(Ut,qt),At(nt.__webglFramebuffer,L,qt,s.COLOR_ATTACHMENT0+Dt,Ut,0),x(qt)&&v(Ut)}i.unbindTexture()}else{let Dt=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Dt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Dt,pt.__webglTexture),it(Dt,b),b.mipmaps&&b.mipmaps.length>0)for(let Wt=0;Wt<b.mipmaps.length;Wt++)At(nt.__webglFramebuffer[Wt],L,b,s.COLOR_ATTACHMENT0,Dt,Wt);else At(nt.__webglFramebuffer,L,b,s.COLOR_ATTACHMENT0,Dt,0);x(b)&&v(Dt),i.unbindTexture()}L.depthBuffer&&Ie(L)}function Ae(L){const b=L.textures;for(let nt=0,pt=b.length;nt<pt;nt++){const Et=b[nt];if(x(Et)){const ft=z(L),Yt=a.get(Et).__webglTexture;i.bindTexture(ft,Yt),v(ft),i.unbindTexture()}}}const $t=[],be=[];function Kt(L){if(L.samples>0){if(Ft(L)===!1){const b=L.textures,nt=L.width,pt=L.height;let Et=s.COLOR_BUFFER_BIT;const ft=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Yt=a.get(L),Dt=b.length>1;if(Dt)for(let qt=0;qt<b.length;qt++)i.bindFramebuffer(s.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer);const Wt=L.texture.mipmaps;Wt&&Wt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let qt=0;qt<b.length;qt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Et|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Et|=s.STENCIL_BUFFER_BIT)),Dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Yt.__webglColorRenderbuffer[qt]);const Rt=a.get(b[qt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Rt,0)}s.blitFramebuffer(0,0,nt,pt,0,0,nt,pt,Et,s.NEAREST),m===!0&&($t.length=0,be.length=0,$t.push(s.COLOR_ATTACHMENT0+qt),L.depthBuffer&&L.resolveDepthBuffer===!1&&($t.push(ft),be.push(ft),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,be)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,$t))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Dt)for(let qt=0;qt<b.length;qt++){i.bindFramebuffer(s.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qt,s.RENDERBUFFER,Yt.__webglColorRenderbuffer[qt]);const Rt=a.get(b[qt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qt,s.TEXTURE_2D,Rt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const b=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Xe(L){return Math.min(l.maxSamples,L.samples)}function Ft(L){const b=a.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function se(L){const b=f.render.frame;g.get(L)!==b&&(g.set(L,b),L.update())}function en(L,b){const nt=L.colorSpace,pt=L.format,Et=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||nt!==Bs&&nt!==Ya&&(Ue.getTransfer(nt)===Ve?(pt!==Ci||Et!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),b}function $e(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=lt,this.resetTextureUnits=st,this.setTexture2D=dt,this.setTexture2DArray=P,this.setTexture3D=K,this.setTextureCube=Y,this.rebindTextures=ge,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Ft}function F2(s,t){function i(a,l=Ya){let c;const f=Ue.getTransfer(l);if(a===Gi)return s.UNSIGNED_BYTE;if(a===Xd)return s.UNSIGNED_SHORT_4_4_4_4;if(a===Wd)return s.UNSIGNED_SHORT_5_5_5_1;if(a===pv)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===hv)return s.BYTE;if(a===dv)return s.SHORT;if(a===tl)return s.UNSIGNED_SHORT;if(a===kd)return s.INT;if(a===Dr)return s.UNSIGNED_INT;if(a===pa)return s.FLOAT;if(a===rl)return s.HALF_FLOAT;if(a===mv)return s.ALPHA;if(a===gv)return s.RGB;if(a===Ci)return s.RGBA;if(a===nl)return s.DEPTH_COMPONENT;if(a===il)return s.DEPTH_STENCIL;if(a===_v)return s.RED;if(a===qd)return s.RED_INTEGER;if(a===vv)return s.RG;if(a===Yd)return s.RG_INTEGER;if(a===Zd)return s.RGBA_INTEGER;if(a===Vc||a===kc||a===Xc||a===Wc)if(f===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Vc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Vc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===kc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Xc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Wc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===dd||a===pd||a===md||a===gd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===dd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===pd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===md)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===gd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===_d||a===vd||a===yd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===_d||a===vd)return f===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===yd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Sd||a===Md||a===xd||a===Ed||a===bd||a===Td||a===Ad||a===Rd||a===wd||a===Cd||a===Dd||a===Ud||a===Ld||a===Nd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Sd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Md)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===xd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Ed)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===bd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Td)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Ad)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Rd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===wd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Cd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Dd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Ud)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Ld)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Nd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===qc||a===Od||a===Pd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===qc)return f===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Od)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Pd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===yv||a===zd||a===Bd||a===Id)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===qc)return c.COMPRESSED_RED_RGTC1_EXT;if(a===zd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Bd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Id)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===el?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:i}}class Gv extends Hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const H2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,G2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class V2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const a=new Gv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,a=new Qa({vertexShader:H2,fragmentShader:G2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Zn(new eu(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class k2 extends Fs{constructor(t,i){super();const a=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,g=null,_=null,S=null,M=null,T=null;const E=new V2,x={},v=i.getContextAttributes();let z=null,U=null;const w=[],H=[],F=new ee;let O=null;const X=new si;X.viewport=new ke;const C=new si;C.viewport=new ke;const D=[X,C],B=new o1;let st=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let _t=w[J];return _t===void 0&&(_t=new Ih,w[J]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(J){let _t=w[J];return _t===void 0&&(_t=new Ih,w[J]=_t),_t.getGripSpace()},this.getHand=function(J){let _t=w[J];return _t===void 0&&(_t=new Ih,w[J]=_t),_t.getHandSpace()};function ut(J){const _t=H.indexOf(J.inputSource);if(_t===-1)return;const $=w[_t];$!==void 0&&($.update(J.inputSource,J.frame,p||f),$.dispatchEvent({type:J.type,data:J.inputSource}))}function dt(){l.removeEventListener("select",ut),l.removeEventListener("selectstart",ut),l.removeEventListener("selectend",ut),l.removeEventListener("squeeze",ut),l.removeEventListener("squeezestart",ut),l.removeEventListener("squeezeend",ut),l.removeEventListener("end",dt),l.removeEventListener("inputsourceschange",P);for(let J=0;J<w.length;J++){const _t=H[J];_t!==null&&(H[J]=null,w[J].disconnect(_t))}st=null,lt=null,E.reset();for(const J in x)delete x[J];t.setRenderTarget(z),M=null,S=null,_=null,l=null,U=null,Ct.stop(),a.isPresenting=!1,t.setPixelRatio(O),t.setSize(F.width,F.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return _},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(z=t.getRenderTarget(),l.addEventListener("select",ut),l.addEventListener("selectstart",ut),l.addEventListener("selectend",ut),l.addEventListener("squeeze",ut),l.addEventListener("squeezestart",ut),l.addEventListener("squeezeend",ut),l.addEventListener("end",dt),l.addEventListener("inputsourceschange",P),v.xrCompatible!==!0&&await i.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(F),typeof XRWebGLBinding<"u"&&(_=new XRWebGLBinding(l,i)),_!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let $=null,At=null,Tt=null;v.depth&&(Tt=v.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,$=v.stencil?il:nl,At=v.stencil?el:Dr);const jt={colorFormat:i.RGBA8,depthFormat:Tt,scaleFactor:c};S=_.createProjectionLayer(jt),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),U=new Ur(S.textureWidth,S.textureHeight,{format:Ci,type:Gi,depthTexture:new Dv(S.textureWidth,S.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const $={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,$),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new Ur(M.framebufferWidth,M.framebufferHeight,{format:Ci,type:Gi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Ct.setContext(l),Ct.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function P(J){for(let _t=0;_t<J.removed.length;_t++){const $=J.removed[_t],At=H.indexOf($);At>=0&&(H[At]=null,w[At].disconnect($))}for(let _t=0;_t<J.added.length;_t++){const $=J.added[_t];let At=H.indexOf($);if(At===-1){for(let jt=0;jt<w.length;jt++)if(jt>=H.length){H.push($),At=jt;break}else if(H[jt]===null){H[jt]=$,At=jt;break}if(At===-1)break}const Tt=w[At];Tt&&Tt.connect($)}}const K=new V,Y=new V;function yt(J,_t,$){K.setFromMatrixPosition(_t.matrixWorld),Y.setFromMatrixPosition($.matrixWorld);const At=K.distanceTo(Y),Tt=_t.projectionMatrix.elements,jt=$.projectionMatrix.elements,Ie=Tt[14]/(Tt[10]-1),ge=Tt[14]/(Tt[10]+1),G=(Tt[9]+1)/Tt[5],Ae=(Tt[9]-1)/Tt[5],$t=(Tt[8]-1)/Tt[0],be=(jt[8]+1)/jt[0],Kt=Ie*$t,Xe=Ie*be,Ft=At/(-$t+be),se=Ft*-$t;if(_t.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(se),J.translateZ(Ft),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Tt[10]===-1)J.projectionMatrix.copy(_t.projectionMatrix),J.projectionMatrixInverse.copy(_t.projectionMatrixInverse);else{const en=Ie+Ft,$e=ge+Ft,L=Kt-se,b=Xe+(At-se),nt=G*ge/$e*en,pt=Ae*ge/$e*en;J.projectionMatrix.makePerspective(L,b,nt,pt,en,$e),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function xt(J,_t){_t===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(_t.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let _t=J.near,$=J.far;E.texture!==null&&(E.depthNear>0&&(_t=E.depthNear),E.depthFar>0&&($=E.depthFar)),B.near=C.near=X.near=_t,B.far=C.far=X.far=$,(st!==B.near||lt!==B.far)&&(l.updateRenderState({depthNear:B.near,depthFar:B.far}),st=B.near,lt=B.far),B.layers.mask=J.layers.mask|6,X.layers.mask=B.layers.mask&3,C.layers.mask=B.layers.mask&5;const At=J.parent,Tt=B.cameras;xt(B,At);for(let jt=0;jt<Tt.length;jt++)xt(Tt[jt],At);Tt.length===2?yt(B,X,C):B.projectionMatrix.copy(X.projectionMatrix),N(J,B,At)};function N(J,_t,$){$===null?J.matrix.copy(_t.matrixWorld):(J.matrix.copy($.matrixWorld),J.matrix.invert(),J.matrix.multiply(_t.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(_t.projectionMatrix),J.projectionMatrixInverse.copy(_t.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=al*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(J){m=J,S!==null&&(S.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(B)},this.getCameraTexture=function(J){return x[J]};let it=null;function Mt(J,_t){if(g=_t.getViewerPose(p||f),T=_t,g!==null){const $=g.views;M!==null&&(t.setRenderTargetFramebuffer(U,M.framebuffer),t.setRenderTarget(U));let At=!1;$.length!==B.cameras.length&&(B.cameras.length=0,At=!0);for(let ge=0;ge<$.length;ge++){const G=$[ge];let Ae=null;if(M!==null)Ae=M.getViewport(G);else{const be=_.getViewSubImage(S,G);Ae=be.viewport,ge===0&&(t.setRenderTargetTextures(U,be.colorTexture,be.depthStencilTexture),t.setRenderTarget(U))}let $t=D[ge];$t===void 0&&($t=new si,$t.layers.enable(ge),$t.viewport=new ke,D[ge]=$t),$t.matrix.fromArray(G.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(G.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),ge===0&&(B.matrix.copy($t.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),At===!0&&B.cameras.push($t)}const Tt=l.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const ge=_.getDepthInformation($[0]);ge&&ge.isValid&&ge.texture&&E.init(ge,l.renderState)}if(Tt&&Tt.includes("camera-access")&&(t.state.unbindTexture(),_))for(let ge=0;ge<$.length;ge++){const G=$[ge].camera;if(G){let Ae=x[G];Ae||(Ae=new Gv,x[G]=Ae);const $t=_.getCameraImage(G);Ae.sourceTexture=$t}}}for(let $=0;$<w.length;$++){const At=H[$],Tt=w[$];At!==null&&Tt!==void 0&&Tt.update(At,_t,p||f)}it&&it(J,_t),_t.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:_t}),T=null}const Ct=new zv;Ct.setAnimationLoop(Mt),this.setAnimationLoop=function(J){it=J},this.dispose=function(){}}}const Er=new Vi,X2=new Ke;function W2(s,t){function i(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function a(x,v){v.color.getRGB(x.fogColor.value,Rv(s)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function l(x,v,z,U,w){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(x,v):v.isMeshToonMaterial?(c(x,v),_(x,v)):v.isMeshPhongMaterial?(c(x,v),g(x,v)):v.isMeshStandardMaterial?(c(x,v),S(x,v),v.isMeshPhysicalMaterial&&M(x,v,w)):v.isMeshMatcapMaterial?(c(x,v),T(x,v)):v.isMeshDepthMaterial?c(x,v):v.isMeshDistanceMaterial?(c(x,v),E(x,v)):v.isMeshNormalMaterial?c(x,v):v.isLineBasicMaterial?(f(x,v),v.isLineDashedMaterial&&d(x,v)):v.isPointsMaterial?m(x,v,z,U):v.isSpriteMaterial?p(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,i(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,i(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===jn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,i(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===jn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,i(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,i(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const z=t.get(v),U=z.envMap,w=z.envMapRotation;U&&(x.envMap.value=U,Er.copy(w),Er.x*=-1,Er.y*=-1,Er.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),x.envMapRotation.value.setFromMatrix4(X2.makeRotationFromEuler(Er)),x.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,x.aoMapTransform))}function f(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,i(v.map,x.mapTransform))}function d(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function m(x,v,z,U){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*z,x.scale.value=U*.5,v.map&&(x.map.value=v.map,i(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function p(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,i(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function g(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function _(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function S(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function M(x,v,z){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===jn&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=z.texture,x.transmissionSamplerSize.value.set(z.width,z.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,x.specularIntensityMapTransform))}function T(x,v){v.matcap&&(x.matcap.value=v.matcap)}function E(x,v){const z=t.get(v).light;x.referencePosition.value.setFromMatrixPosition(z.matrixWorld),x.nearDistance.value=z.shadow.camera.near,x.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:l}}function q2(s,t,i,a){let l={},c={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,U){const w=U.program;a.uniformBlockBinding(z,w)}function p(z,U){let w=l[z.id];w===void 0&&(T(z),w=g(z),l[z.id]=w,z.addEventListener("dispose",x));const H=U.program;a.updateUBOMapping(z,H);const F=t.render.frame;c[z.id]!==F&&(S(z),c[z.id]=F)}function g(z){const U=_();z.__bindingPointIndex=U;const w=s.createBuffer(),H=z.__size,F=z.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,H,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,w),w}function _(){for(let z=0;z<d;z++)if(f.indexOf(z)===-1)return f.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(z){const U=l[z.id],w=z.uniforms,H=z.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let F=0,O=w.length;F<O;F++){const X=Array.isArray(w[F])?w[F]:[w[F]];for(let C=0,D=X.length;C<D;C++){const B=X[C];if(M(B,F,C,H)===!0){const st=B.__offset,lt=Array.isArray(B.value)?B.value:[B.value];let ut=0;for(let dt=0;dt<lt.length;dt++){const P=lt[dt],K=E(P);typeof P=="number"||typeof P=="boolean"?(B.__data[0]=P,s.bufferSubData(s.UNIFORM_BUFFER,st+ut,B.__data)):P.isMatrix3?(B.__data[0]=P.elements[0],B.__data[1]=P.elements[1],B.__data[2]=P.elements[2],B.__data[3]=0,B.__data[4]=P.elements[3],B.__data[5]=P.elements[4],B.__data[6]=P.elements[5],B.__data[7]=0,B.__data[8]=P.elements[6],B.__data[9]=P.elements[7],B.__data[10]=P.elements[8],B.__data[11]=0):(P.toArray(B.__data,ut),ut+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,st,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(z,U,w,H){const F=z.value,O=U+"_"+w;if(H[O]===void 0)return typeof F=="number"||typeof F=="boolean"?H[O]=F:H[O]=F.clone(),!0;{const X=H[O];if(typeof F=="number"||typeof F=="boolean"){if(X!==F)return H[O]=F,!0}else if(X.equals(F)===!1)return X.copy(F),!0}return!1}function T(z){const U=z.uniforms;let w=0;const H=16;for(let O=0,X=U.length;O<X;O++){const C=Array.isArray(U[O])?U[O]:[U[O]];for(let D=0,B=C.length;D<B;D++){const st=C[D],lt=Array.isArray(st.value)?st.value:[st.value];for(let ut=0,dt=lt.length;ut<dt;ut++){const P=lt[ut],K=E(P),Y=w%H,yt=Y%K.boundary,xt=Y+yt;w+=yt,xt!==0&&H-xt<K.storage&&(w+=H-xt),st.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=w,w+=K.storage}}}const F=w%H;return F>0&&(w+=H-F),z.__size=w,z.__cache={},this}function E(z){const U={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(U.boundary=4,U.storage=4):z.isVector2?(U.boundary=8,U.storage=8):z.isVector3||z.isColor?(U.boundary=16,U.storage=12):z.isVector4?(U.boundary=16,U.storage=16):z.isMatrix3?(U.boundary=48,U.storage=48):z.isMatrix4?(U.boundary=64,U.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),U}function x(z){const U=z.target;U.removeEventListener("dispose",x);const w=f.indexOf(U.__bindingPointIndex);f.splice(w,1),s.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function v(){for(const z in l)s.deleteBuffer(l[z]);f=[],l={},c={}}return{bind:m,update:p,dispose:v}}class Y2{constructor(t={}){const{canvas:i=sx(),context:a=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let M;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=a.getContextAttributes().alpha}else M=f;const T=new Uint32Array(4),E=new Int32Array(4);let x=null,v=null;const z=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ja,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let H=!1;this._outputColorSpace=Yn;let F=0,O=0,X=null,C=-1,D=null;const B=new ke,st=new ke;let lt=null;const ut=new me(0);let dt=0,P=i.width,K=i.height,Y=1,yt=null,xt=null;const N=new ke(0,0,P,K),it=new ke(0,0,P,K);let Mt=!1;const Ct=new ep;let J=!1,_t=!1;const $=new Ke,At=new V,Tt=new ke,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function ge(){return X===null?Y:1}let G=a;function Ae(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Vd}`),i.addEventListener("webglcontextlost",Lt,!1),i.addEventListener("webglcontextrestored",It,!1),i.addEventListener("webglcontextcreationerror",bt,!1),G===null){const q="webgl2";if(G=Ae(q,R),G===null)throw Ae(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let $t,be,Kt,Xe,Ft,se,en,$e,L,b,nt,pt,Et,ft,Yt,Dt,Wt,qt,Rt,Ut,Zt,Bt,Nt,oe;function W(){$t=new iT(G),$t.init(),Bt=new F2(G,$t),be=new Kb(G,$t,t,Bt),Kt=new B2(G,$t),be.reversedDepthBuffer&&S&&Kt.buffers.depth.setReversed(!0),Xe=new sT(G),Ft=new b2,se=new I2(G,$t,Kt,Ft,be,Bt,Xe),en=new Jb(w),$e=new nT(w),L=new h1(G),Nt=new Zb(G,L),b=new aT(G,L,Xe,Nt),nt=new lT(G,b,L,Xe),Rt=new oT(G,be,se),Dt=new Qb(Ft),pt=new E2(w,en,$e,$t,be,Nt,Dt),Et=new W2(w,Ft),ft=new A2,Yt=new L2($t),qt=new Yb(w,en,$e,Kt,nt,M,m),Wt=new P2(w,nt,be),oe=new q2(G,Xe,be,Kt),Ut=new jb(G,$t,Xe),Zt=new rT(G,$t,Xe),Xe.programs=pt.programs,w.capabilities=be,w.extensions=$t,w.properties=Ft,w.renderLists=ft,w.shadowMap=Wt,w.state=Kt,w.info=Xe}W();const wt=new k2(w,G);this.xr=wt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=$t.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=$t.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(P,K,!1))},this.getSize=function(R){return R.set(P,K)},this.setSize=function(R,q,rt=!0){if(wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,K=q,i.width=Math.floor(R*Y),i.height=Math.floor(q*Y),rt===!0&&(i.style.width=R+"px",i.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(P*Y,K*Y).floor()},this.setDrawingBufferSize=function(R,q,rt){P=R,K=q,Y=rt,i.width=Math.floor(R*rt),i.height=Math.floor(q*rt),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(B)},this.getViewport=function(R){return R.copy(N)},this.setViewport=function(R,q,rt,ot){R.isVector4?N.set(R.x,R.y,R.z,R.w):N.set(R,q,rt,ot),Kt.viewport(B.copy(N).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(it)},this.setScissor=function(R,q,rt,ot){R.isVector4?it.set(R.x,R.y,R.z,R.w):it.set(R,q,rt,ot),Kt.scissor(st.copy(it).multiplyScalar(Y).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(R){Kt.setScissorTest(Mt=R)},this.setOpaqueSort=function(R){yt=R},this.setTransparentSort=function(R){xt=R},this.getClearColor=function(R){return R.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,rt=!0){let ot=0;if(R){let Z=!1;if(X!==null){const St=X.texture.format;Z=St===Zd||St===Yd||St===qd}if(Z){const St=X.texture.type,Ot=St===Gi||St===Dr||St===tl||St===el||St===Xd||St===Wd,Vt=qt.getClearColor(),zt=qt.getClearAlpha(),Qt=Vt.r,ie=Vt.g,Jt=Vt.b;Ot?(T[0]=Qt,T[1]=ie,T[2]=Jt,T[3]=zt,G.clearBufferuiv(G.COLOR,0,T)):(E[0]=Qt,E[1]=ie,E[2]=Jt,E[3]=zt,G.clearBufferiv(G.COLOR,0,E))}else ot|=G.COLOR_BUFFER_BIT}q&&(ot|=G.DEPTH_BUFFER_BIT),rt&&(ot|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Lt,!1),i.removeEventListener("webglcontextrestored",It,!1),i.removeEventListener("webglcontextcreationerror",bt,!1),qt.dispose(),ft.dispose(),Yt.dispose(),Ft.dispose(),en.dispose(),$e.dispose(),nt.dispose(),Nt.dispose(),oe.dispose(),pt.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",li),wt.removeEventListener("sessionend",Ws),Ui.stop()};function Lt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const R=Xe.autoReset,q=Wt.enabled,rt=Wt.autoUpdate,ot=Wt.needsUpdate,Z=Wt.type;W(),Xe.autoReset=R,Wt.enabled=q,Wt.autoUpdate=rt,Wt.needsUpdate=ot,Wt.type=Z}function bt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function vt(R){const q=R.target;q.removeEventListener("dispose",vt),Ht(q)}function Ht(R){ae(R),Ft.remove(R)}function ae(R){const q=Ft.get(R).programs;q!==void 0&&(q.forEach(function(rt){pt.releaseProgram(rt)}),R.isShaderMaterial&&pt.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,rt,ot,Z,St){q===null&&(q=jt);const Ot=Z.isMesh&&Z.matrixWorld.determinant()<0,Vt=_a(R,q,rt,ot,Z);Kt.setMaterial(ot,Ot);let zt=rt.index,Qt=1;if(ot.wireframe===!0){if(zt=b.getWireframeAttribute(rt),zt===void 0)return;Qt=2}const ie=rt.drawRange,Jt=rt.attributes.position;let de=ie.start*Qt,Ne=(ie.start+ie.count)*Qt;St!==null&&(de=Math.max(de,St.start*Qt),Ne=Math.min(Ne,(St.start+St.count)*Qt)),zt!==null?(de=Math.max(de,0),Ne=Math.min(Ne,zt.count)):Jt!=null&&(de=Math.max(de,0),Ne=Math.min(Ne,Jt.count));const We=Ne-de;if(We<0||We===1/0)return;Nt.setup(Z,ot,Vt,rt,zt);let Oe,_e=Ut;if(zt!==null&&(Oe=L.get(zt),_e=Zt,_e.setIndex(Oe)),Z.isMesh)ot.wireframe===!0?(Kt.setLineWidth(ot.wireframeLinewidth*ge()),_e.setMode(G.LINES)):_e.setMode(G.TRIANGLES);else if(Z.isLine){let kt=ot.linewidth;kt===void 0&&(kt=1),Kt.setLineWidth(kt*ge()),Z.isLineSegments?_e.setMode(G.LINES):Z.isLineLoop?_e.setMode(G.LINE_LOOP):_e.setMode(G.LINE_STRIP)}else Z.isPoints?_e.setMode(G.POINTS):Z.isSprite&&_e.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Ls("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))_e.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const kt=Z._multiDrawStarts,Ye=Z._multiDrawCounts,we=Z._multiDrawCount,Tn=zt?L.get(zt).bytesPerElement:1,ki=Ft.get(ot).currentProgram.getUniforms();for(let Sn=0;Sn<we;Sn++)ki.setValue(G,"_gl_DrawID",Sn),_e.render(kt[Sn]/Tn,Ye[Sn])}else if(Z.isInstancedMesh)_e.renderInstances(de,We,Z.count);else if(rt.isInstancedBufferGeometry){const kt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ye=Math.min(rt.instanceCount,kt);_e.renderInstances(de,We,Ye)}else _e.render(de,We)};function Pe(R,q,rt){R.transparent===!0&&R.side===da&&R.forceSinglePass===!1?(R.side=jn,R.needsUpdate=!0,Kn(R,q,rt),R.side=Ka,R.needsUpdate=!0,Kn(R,q,rt),R.side=da):Kn(R,q,rt)}this.compile=function(R,q,rt=null){rt===null&&(rt=R),v=Yt.get(rt),v.init(q),U.push(v),rt.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),R!==rt&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),v.setupLights();const ot=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const St=Z.material;if(St)if(Array.isArray(St))for(let Ot=0;Ot<St.length;Ot++){const Vt=St[Ot];Pe(Vt,rt,Z),ot.add(Vt)}else Pe(St,rt,Z),ot.add(St)}),v=U.pop(),ot},this.compileAsync=function(R,q,rt=null){const ot=this.compile(R,q,rt);return new Promise(Z=>{function St(){if(ot.forEach(function(Ot){Ft.get(Ot).currentProgram.isReady()&&ot.delete(Ot)}),ot.size===0){Z(R);return}setTimeout(St,10)}$t.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Re=null;function Pn(R){Re&&Re(R)}function li(){Ui.stop()}function Ws(){Ui.start()}const Ui=new zv;Ui.setAnimationLoop(Pn),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(R){Re=R,wt.setAnimationLoop(R),R===null?Ui.stop():Ui.start()},wt.addEventListener("sessionstart",li),wt.addEventListener("sessionend",Ws),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(q),q=wt.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,q,X),v=Yt.get(R,U.length),v.init(q),U.push(v),$.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ct.setFromProjectionMatrix($,Fi,q.reversedDepth),_t=this.localClippingEnabled,J=Dt.init(this.clippingPlanes,_t),x=ft.get(R,z.length),x.init(),z.push(x),wt.enabled===!0&&wt.isPresenting===!0){const St=w.xr.getDepthSensingMesh();St!==null&&Lr(St,q,-1/0,w.sortObjects)}Lr(R,q,0,w.sortObjects),x.finish(),w.sortObjects===!0&&x.sort(yt,xt),Ie=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,Ie&&qt.addToRenderList(x,R),this.info.render.frame++,J===!0&&Dt.beginShadows();const rt=v.state.shadowsArray;Wt.render(rt,R,q),J===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=x.opaque,Z=x.transmissive;if(v.setupLights(),q.isArrayCamera){const St=q.cameras;if(Z.length>0)for(let Ot=0,Vt=St.length;Ot<Vt;Ot++){const zt=St[Ot];Or(ot,Z,R,zt)}Ie&&qt.render(R);for(let Ot=0,Vt=St.length;Ot<Vt;Ot++){const zt=St[Ot];Nr(x,R,zt,zt.viewport)}}else Z.length>0&&Or(ot,Z,R,q),Ie&&qt.render(R),Nr(x,R,q);X!==null&&O===0&&(se.updateMultisampleRenderTarget(X),se.updateRenderTargetMipmap(X)),R.isScene===!0&&R.onAfterRender(w,R,q),Nt.resetDefaultState(),C=-1,D=null,U.pop(),U.length>0?(v=U[U.length-1],J===!0&&Dt.setGlobalState(w.clippingPlanes,v.state.camera)):v=null,z.pop(),z.length>0?x=z[z.length-1]:x=null};function Lr(R,q,rt,ot){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ct.intersectsSprite(R)){ot&&Tt.setFromMatrixPosition(R.matrixWorld).applyMatrix4($);const Ot=nt.update(R),Vt=R.material;Vt.visible&&x.push(R,Ot,Vt,rt,Tt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ct.intersectsObject(R))){const Ot=nt.update(R),Vt=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Tt.copy(R.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),Tt.copy(Ot.boundingSphere.center)),Tt.applyMatrix4(R.matrixWorld).applyMatrix4($)),Array.isArray(Vt)){const zt=Ot.groups;for(let Qt=0,ie=zt.length;Qt<ie;Qt++){const Jt=zt[Qt],de=Vt[Jt.materialIndex];de&&de.visible&&x.push(R,Ot,de,rt,Tt.z,Jt)}}else Vt.visible&&x.push(R,Ot,Vt,rt,Tt.z,null)}}const St=R.children;for(let Ot=0,Vt=St.length;Ot<Vt;Ot++)Lr(St[Ot],q,rt,ot)}function Nr(R,q,rt,ot){const Z=R.opaque,St=R.transmissive,Ot=R.transparent;v.setupLightsView(rt),J===!0&&Dt.setGlobalState(w.clippingPlanes,rt),ot&&Kt.viewport(B.copy(ot)),Z.length>0&&$a(Z,q,rt),St.length>0&&$a(St,q,rt),Ot.length>0&&$a(Ot,q,rt),Kt.buffers.depth.setTest(!0),Kt.buffers.depth.setMask(!0),Kt.buffers.color.setMask(!0),Kt.setPolygonOffset(!1)}function Or(R,q,rt,ot){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ot.id]===void 0&&(v.state.transmissionRenderTarget[ot.id]=new Ur(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?rl:Gi,minFilter:Cr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));const St=v.state.transmissionRenderTarget[ot.id],Ot=ot.viewport||B;St.setSize(Ot.z*w.transmissionResolutionScale,Ot.w*w.transmissionResolutionScale);const Vt=w.getRenderTarget(),zt=w.getActiveCubeFace(),Qt=w.getActiveMipmapLevel();w.setRenderTarget(St),w.getClearColor(ut),dt=w.getClearAlpha(),dt<1&&w.setClearColor(16777215,.5),w.clear(),Ie&&qt.render(rt);const ie=w.toneMapping;w.toneMapping=ja;const Jt=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),v.setupLightsView(ot),J===!0&&Dt.setGlobalState(w.clippingPlanes,ot),$a(R,rt,ot),se.updateMultisampleRenderTarget(St),se.updateRenderTargetMipmap(St),$t.has("WEBGL_multisampled_render_to_texture")===!1){let de=!1;for(let Ne=0,We=q.length;Ne<We;Ne++){const Oe=q[Ne],_e=Oe.object,kt=Oe.geometry,Ye=Oe.material,we=Oe.group;if(Ye.side===da&&_e.layers.test(ot.layers)){const Tn=Ye.side;Ye.side=jn,Ye.needsUpdate=!0,qs(_e,rt,ot,kt,Ye,we),Ye.side=Tn,Ye.needsUpdate=!0,de=!0}}de===!0&&(se.updateMultisampleRenderTarget(St),se.updateRenderTargetMipmap(St))}w.setRenderTarget(Vt,zt,Qt),w.setClearColor(ut,dt),Jt!==void 0&&(ot.viewport=Jt),w.toneMapping=ie}function $a(R,q,rt){const ot=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,St=R.length;Z<St;Z++){const Ot=R[Z],Vt=Ot.object,zt=Ot.geometry,Qt=Ot.group;let ie=Ot.material;ie.allowOverride===!0&&ot!==null&&(ie=ot),Vt.layers.test(rt.layers)&&qs(Vt,q,rt,zt,ie,Qt)}}function qs(R,q,rt,ot,Z,St){R.onBeforeRender(w,q,rt,ot,Z,St),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(w,q,rt,ot,R,St),Z.transparent===!0&&Z.side===da&&Z.forceSinglePass===!1?(Z.side=jn,Z.needsUpdate=!0,w.renderBufferDirect(rt,q,ot,Z,R,St),Z.side=Ka,Z.needsUpdate=!0,w.renderBufferDirect(rt,q,ot,Z,R,St),Z.side=da):w.renderBufferDirect(rt,q,ot,Z,R,St),R.onAfterRender(w,q,rt,ot,Z,St)}function Kn(R,q,rt){q.isScene!==!0&&(q=jt);const ot=Ft.get(R),Z=v.state.lights,St=v.state.shadowsArray,Ot=Z.state.version,Vt=pt.getParameters(R,Z.state,St,q,rt),zt=pt.getProgramCacheKey(Vt);let Qt=ot.programs;ot.environment=R.isMeshStandardMaterial?q.environment:null,ot.fog=q.fog,ot.envMap=(R.isMeshStandardMaterial?$e:en).get(R.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,Qt===void 0&&(R.addEventListener("dispose",vt),Qt=new Map,ot.programs=Qt);let ie=Qt.get(zt);if(ie!==void 0){if(ot.currentProgram===ie&&ot.lightsStateVersion===Ot)return bn(R,Vt),ie}else Vt.uniforms=pt.getUniforms(R),R.onBeforeCompile(Vt,w),ie=pt.acquireProgram(Vt,zt),Qt.set(zt,ie),ot.uniforms=Vt.uniforms;const Jt=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Jt.clippingPlanes=Dt.uniform),bn(R,Vt),ot.needsLights=au(R),ot.lightsStateVersion=Ot,ot.needsLights&&(Jt.ambientLightColor.value=Z.state.ambient,Jt.lightProbe.value=Z.state.probe,Jt.directionalLights.value=Z.state.directional,Jt.directionalLightShadows.value=Z.state.directionalShadow,Jt.spotLights.value=Z.state.spot,Jt.spotLightShadows.value=Z.state.spotShadow,Jt.rectAreaLights.value=Z.state.rectArea,Jt.ltc_1.value=Z.state.rectAreaLTC1,Jt.ltc_2.value=Z.state.rectAreaLTC2,Jt.pointLights.value=Z.state.point,Jt.pointLightShadows.value=Z.state.pointShadow,Jt.hemisphereLights.value=Z.state.hemi,Jt.directionalShadowMap.value=Z.state.directionalShadowMap,Jt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Jt.spotShadowMap.value=Z.state.spotShadowMap,Jt.spotLightMatrix.value=Z.state.spotLightMatrix,Jt.spotLightMap.value=Z.state.spotLightMap,Jt.pointShadowMap.value=Z.state.pointShadowMap,Jt.pointShadowMatrix.value=Z.state.pointShadowMatrix),ot.currentProgram=ie,ot.uniformsList=null,ie}function ln(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Yc.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function bn(R,q){const rt=Ft.get(R);rt.outputColorSpace=q.outputColorSpace,rt.batching=q.batching,rt.batchingColor=q.batchingColor,rt.instancing=q.instancing,rt.instancingColor=q.instancingColor,rt.instancingMorph=q.instancingMorph,rt.skinning=q.skinning,rt.morphTargets=q.morphTargets,rt.morphNormals=q.morphNormals,rt.morphColors=q.morphColors,rt.morphTargetsCount=q.morphTargetsCount,rt.numClippingPlanes=q.numClippingPlanes,rt.numIntersection=q.numClipIntersection,rt.vertexAlphas=q.vertexAlphas,rt.vertexTangents=q.vertexTangents,rt.toneMapping=q.toneMapping}function _a(R,q,rt,ot,Z){q.isScene!==!0&&(q=jt),se.resetTextureUnits();const St=q.fog,Ot=ot.isMeshStandardMaterial?q.environment:null,Vt=X===null?w.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Bs,zt=(ot.isMeshStandardMaterial?$e:en).get(ot.envMap||Ot),Qt=ot.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ie=!!rt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Jt=!!rt.morphAttributes.position,de=!!rt.morphAttributes.normal,Ne=!!rt.morphAttributes.color;let We=ja;ot.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(We=w.toneMapping);const Oe=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,_e=Oe!==void 0?Oe.length:0,kt=Ft.get(ot),Ye=v.state.lights;if(J===!0&&(_t===!0||R!==D)){const mn=R===D&&ot.id===C;Dt.setState(ot,R,mn)}let we=!1;ot.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Ye.state.version||kt.outputColorSpace!==Vt||Z.isBatchedMesh&&kt.batching===!1||!Z.isBatchedMesh&&kt.batching===!0||Z.isBatchedMesh&&kt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&kt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&kt.instancing===!1||!Z.isInstancedMesh&&kt.instancing===!0||Z.isSkinnedMesh&&kt.skinning===!1||!Z.isSkinnedMesh&&kt.skinning===!0||Z.isInstancedMesh&&kt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&kt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&kt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&kt.instancingMorph===!1&&Z.morphTexture!==null||kt.envMap!==zt||ot.fog===!0&&kt.fog!==St||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Dt.numPlanes||kt.numIntersection!==Dt.numIntersection)||kt.vertexAlphas!==Qt||kt.vertexTangents!==ie||kt.morphTargets!==Jt||kt.morphNormals!==de||kt.morphColors!==Ne||kt.toneMapping!==We||kt.morphTargetsCount!==_e)&&(we=!0):(we=!0,kt.__version=ot.version);let Tn=kt.currentProgram;we===!0&&(Tn=Kn(ot,q,Z));let ki=!1,Sn=!1,er=!1;const Me=Tn.getUniforms(),Dn=kt.uniforms;if(Kt.useProgram(Tn.program)&&(ki=!0,Sn=!0,er=!0),ot.id!==C&&(C=ot.id,Sn=!0),ki||D!==R){Kt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Me.setValue(G,"projectionMatrix",R.projectionMatrix),Me.setValue(G,"viewMatrix",R.matrixWorldInverse);const rn=Me.map.cameraPosition;rn!==void 0&&rn.setValue(G,At.setFromMatrixPosition(R.matrixWorld)),be.logarithmicDepthBuffer&&Me.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Me.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),D!==R&&(D=R,Sn=!0,er=!0)}if(Z.isSkinnedMesh){Me.setOptional(G,Z,"bindMatrix"),Me.setOptional(G,Z,"bindMatrixInverse");const mn=Z.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Me.setValue(G,"boneTexture",mn.boneTexture,se))}Z.isBatchedMesh&&(Me.setOptional(G,Z,"batchingTexture"),Me.setValue(G,"batchingTexture",Z._matricesTexture,se),Me.setOptional(G,Z,"batchingIdTexture"),Me.setValue(G,"batchingIdTexture",Z._indirectTexture,se),Me.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Me.setValue(G,"batchingColorTexture",Z._colorsTexture,se));const zn=rt.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&Rt.update(Z,rt,Tn),(Sn||kt.receiveShadow!==Z.receiveShadow)&&(kt.receiveShadow=Z.receiveShadow,Me.setValue(G,"receiveShadow",Z.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Dn.envMap.value=zt,Dn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&q.environment!==null&&(Dn.envMapIntensity.value=q.environmentIntensity),Sn&&(Me.setValue(G,"toneMappingExposure",w.toneMappingExposure),kt.needsLights&&Ys(Dn,er),St&&ot.fog===!0&&Et.refreshFogUniforms(Dn,St),Et.refreshMaterialUniforms(Dn,ot,Y,K,v.state.transmissionRenderTarget[R.id]),Yc.upload(G,ln(kt),Dn,se)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Yc.upload(G,ln(kt),Dn,se),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Me.setValue(G,"center",Z.center),Me.setValue(G,"modelViewMatrix",Z.modelViewMatrix),Me.setValue(G,"normalMatrix",Z.normalMatrix),Me.setValue(G,"modelMatrix",Z.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const mn=ot.uniformsGroups;for(let rn=0,Pr=mn.length;rn<Pr;rn++){const Li=mn[rn];oe.update(Li,Tn),oe.bind(Li,Tn)}}return Tn}function Ys(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function au(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,q,rt){const ot=Ft.get(R);ot.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Ft.get(R.texture).__webglTexture=q,Ft.get(R.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:rt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const rt=Ft.get(R);rt.__webglFramebuffer=q,rt.__useDefaultFramebuffer=q===void 0};const ru=G.createFramebuffer();this.setRenderTarget=function(R,q=0,rt=0){X=R,F=q,O=rt;let ot=!0,Z=null,St=!1,Ot=!1;if(R){const zt=Ft.get(R);if(zt.__useDefaultFramebuffer!==void 0)Kt.bindFramebuffer(G.FRAMEBUFFER,null),ot=!1;else if(zt.__webglFramebuffer===void 0)se.setupRenderTarget(R);else if(zt.__hasExternalTextures)se.rebindTextures(R,Ft.get(R.texture).__webglTexture,Ft.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Jt=R.depthTexture;if(zt.__boundDepthTexture!==Jt){if(Jt!==null&&Ft.has(Jt)&&(R.width!==Jt.image.width||R.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(R)}}const Qt=R.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Ot=!0);const ie=Ft.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ie[q])?Z=ie[q][rt]:Z=ie[q],St=!0):R.samples>0&&se.useMultisampledRTT(R)===!1?Z=Ft.get(R).__webglMultisampledFramebuffer:Array.isArray(ie)?Z=ie[rt]:Z=ie,B.copy(R.viewport),st.copy(R.scissor),lt=R.scissorTest}else B.copy(N).multiplyScalar(Y).floor(),st.copy(it).multiplyScalar(Y).floor(),lt=Mt;if(rt!==0&&(Z=ru),Kt.bindFramebuffer(G.FRAMEBUFFER,Z)&&ot&&Kt.drawBuffers(R,Z),Kt.viewport(B),Kt.scissor(st),Kt.setScissorTest(lt),St){const zt=Ft.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,zt.__webglTexture,rt)}else if(Ot){const zt=q;for(let Qt=0;Qt<R.textures.length;Qt++){const ie=Ft.get(R.textures[Qt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Qt,ie.__webglTexture,rt,zt)}}else if(R!==null&&rt!==0){const zt=Ft.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,zt.__webglTexture,rt)}C=-1},this.readRenderTargetPixels=function(R,q,rt,ot,Z,St,Ot,Vt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=Ft.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(zt=zt[Ot]),zt){Kt.bindFramebuffer(G.FRAMEBUFFER,zt);try{const Qt=R.textures[Vt],ie=Qt.format,Jt=Qt.type;if(!be.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!be.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-ot&&rt>=0&&rt<=R.height-Z&&(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Vt),G.readPixels(q,rt,ot,Z,Bt.convert(ie),Bt.convert(Jt),St))}finally{const Qt=X!==null?Ft.get(X).__webglFramebuffer:null;Kt.bindFramebuffer(G.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(R,q,rt,ot,Z,St,Ot,Vt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=Ft.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(zt=zt[Ot]),zt)if(q>=0&&q<=R.width-ot&&rt>=0&&rt<=R.height-Z){Kt.bindFramebuffer(G.FRAMEBUFFER,zt);const Qt=R.textures[Vt],ie=Qt.format,Jt=Qt.type;if(!be.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!be.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const de=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,de),G.bufferData(G.PIXEL_PACK_BUFFER,St.byteLength,G.STREAM_READ),R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Vt),G.readPixels(q,rt,ot,Z,Bt.convert(ie),Bt.convert(Jt),0);const Ne=X!==null?Ft.get(X).__webglFramebuffer:null;Kt.bindFramebuffer(G.FRAMEBUFFER,Ne);const We=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await ox(G,We,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,de),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,St),G.deleteBuffer(de),G.deleteSync(We),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,rt=0){const ot=Math.pow(2,-rt),Z=Math.floor(R.image.width*ot),St=Math.floor(R.image.height*ot),Ot=q!==null?q.x:0,Vt=q!==null?q.y:0;se.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,rt,0,0,Ot,Vt,Z,St),Kt.unbindTexture()};const ol=G.createFramebuffer(),tr=G.createFramebuffer();this.copyTextureToTexture=function(R,q,rt=null,ot=null,Z=0,St=null){St===null&&(Z!==0?(Ls("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),St=Z,Z=0):St=0);let Ot,Vt,zt,Qt,ie,Jt,de,Ne,We;const Oe=R.isCompressedTexture?R.mipmaps[St]:R.image;if(rt!==null)Ot=rt.max.x-rt.min.x,Vt=rt.max.y-rt.min.y,zt=rt.isBox3?rt.max.z-rt.min.z:1,Qt=rt.min.x,ie=rt.min.y,Jt=rt.isBox3?rt.min.z:0;else{const zn=Math.pow(2,-Z);Ot=Math.floor(Oe.width*zn),Vt=Math.floor(Oe.height*zn),R.isDataArrayTexture?zt=Oe.depth:R.isData3DTexture?zt=Math.floor(Oe.depth*zn):zt=1,Qt=0,ie=0,Jt=0}ot!==null?(de=ot.x,Ne=ot.y,We=ot.z):(de=0,Ne=0,We=0);const _e=Bt.convert(q.format),kt=Bt.convert(q.type);let Ye;q.isData3DTexture?(se.setTexture3D(q,0),Ye=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(se.setTexture2DArray(q,0),Ye=G.TEXTURE_2D_ARRAY):(se.setTexture2D(q,0),Ye=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const we=G.getParameter(G.UNPACK_ROW_LENGTH),Tn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),ki=G.getParameter(G.UNPACK_SKIP_PIXELS),Sn=G.getParameter(G.UNPACK_SKIP_ROWS),er=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Oe.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Oe.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Qt),G.pixelStorei(G.UNPACK_SKIP_ROWS,ie),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Jt);const Me=R.isDataArrayTexture||R.isData3DTexture,Dn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const zn=Ft.get(R),mn=Ft.get(q),rn=Ft.get(zn.__renderTarget),Pr=Ft.get(mn.__renderTarget);Kt.bindFramebuffer(G.READ_FRAMEBUFFER,rn.__webglFramebuffer),Kt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Pr.__webglFramebuffer);for(let Li=0;Li<zt;Li++)Me&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ft.get(R).__webglTexture,Z,Jt+Li),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ft.get(q).__webglTexture,St,We+Li)),G.blitFramebuffer(Qt,ie,Ot,Vt,de,Ne,Ot,Vt,G.DEPTH_BUFFER_BIT,G.NEAREST);Kt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Kt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||Ft.has(R)){const zn=Ft.get(R),mn=Ft.get(q);Kt.bindFramebuffer(G.READ_FRAMEBUFFER,ol),Kt.bindFramebuffer(G.DRAW_FRAMEBUFFER,tr);for(let rn=0;rn<zt;rn++)Me?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,zn.__webglTexture,Z,Jt+rn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,zn.__webglTexture,Z),Dn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,mn.__webglTexture,St,We+rn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,mn.__webglTexture,St),Z!==0?G.blitFramebuffer(Qt,ie,Ot,Vt,de,Ne,Ot,Vt,G.COLOR_BUFFER_BIT,G.NEAREST):Dn?G.copyTexSubImage3D(Ye,St,de,Ne,We+rn,Qt,ie,Ot,Vt):G.copyTexSubImage2D(Ye,St,de,Ne,Qt,ie,Ot,Vt);Kt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Kt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Dn?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(Ye,St,de,Ne,We,Ot,Vt,zt,_e,kt,Oe.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(Ye,St,de,Ne,We,Ot,Vt,zt,_e,Oe.data):G.texSubImage3D(Ye,St,de,Ne,We,Ot,Vt,zt,_e,kt,Oe):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,St,de,Ne,Ot,Vt,_e,kt,Oe.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,St,de,Ne,Oe.width,Oe.height,_e,Oe.data):G.texSubImage2D(G.TEXTURE_2D,St,de,Ne,Ot,Vt,_e,kt,Oe);G.pixelStorei(G.UNPACK_ROW_LENGTH,we),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Tn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ki),G.pixelStorei(G.UNPACK_SKIP_ROWS,Sn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,er),St===0&&q.generateMipmaps&&G.generateMipmap(Ye),Kt.unbindTexture()},this.copyTextureToTexture3D=function(R,q,rt=null,ot=null,Z=0){return Ls('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,q,rt,ot,Z)},this.initRenderTarget=function(R){Ft.get(R).__webglFramebuffer===void 0&&se.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?se.setTextureCube(R,0):R.isData3DTexture?se.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?se.setTexture2DArray(R,0):se.setTexture2D(R,0),Kt.unbindTexture()},this.resetState=function(){F=0,O=0,X=null,Kt.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ue._getUnpackColorSpace()}}const Xo=new V;function vi(s,t,i,a,l,c){const f=2*Math.PI*l/4,d=Math.max(c-2*l,0),m=Math.PI/4;Xo.copy(t),Xo[a]=0,Xo.normalize();const p=.5*f/(f+d),g=1-Xo.angleTo(s)/m;return Math.sign(Xo[i])===1?g*p:d/(f+d)+p+p*(1-g)}class lp extends Ja{constructor(t=1,i=1,a=1,l=2,c=.1){const f=l*2+1;if(c=Math.min(t/2,i/2,a/2,c),super(1,1,1,f,f,f),this.type="RoundedBoxGeometry",this.parameters={width:t,height:i,depth:a,segments:l,radius:c},f===1)return;const d=this.toNonIndexed();this.index=null,this.attributes.position=d.attributes.position,this.attributes.normal=d.attributes.normal,this.attributes.uv=d.attributes.uv;const m=new V,p=new V,g=new V(t,i,a).divideScalar(2).subScalar(c),_=this.attributes.position.array,S=this.attributes.normal.array,M=this.attributes.uv.array,T=_.length/6,E=new V,x=.5/f;for(let v=0,z=0;v<_.length;v+=3,z+=2)switch(m.fromArray(_,v),p.copy(m),p.x-=Math.sign(p.x)*x,p.y-=Math.sign(p.y)*x,p.z-=Math.sign(p.z)*x,p.normalize(),_[v+0]=g.x*Math.sign(m.x)+p.x*c,_[v+1]=g.y*Math.sign(m.y)+p.y*c,_[v+2]=g.z*Math.sign(m.z)+p.z*c,S[v+0]=p.x,S[v+1]=p.y,S[v+2]=p.z,Math.floor(v/T)){case 0:E.set(1,0,0),M[z+0]=vi(E,p,"z","y",c,a),M[z+1]=1-vi(E,p,"y","z",c,i);break;case 1:E.set(-1,0,0),M[z+0]=1-vi(E,p,"z","y",c,a),M[z+1]=1-vi(E,p,"y","z",c,i);break;case 2:E.set(0,1,0),M[z+0]=1-vi(E,p,"x","z",c,t),M[z+1]=vi(E,p,"z","x",c,a);break;case 3:E.set(0,-1,0),M[z+0]=1-vi(E,p,"x","z",c,t),M[z+1]=1-vi(E,p,"z","x",c,a);break;case 4:E.set(0,0,1),M[z+0]=1-vi(E,p,"x","y",c,t),M[z+1]=1-vi(E,p,"y","x",c,i);break;case 5:E.set(0,0,-1),M[z+0]=vi(E,p,"x","y",c,t),M[z+1]=1-vi(E,p,"y","x",c,i);break}}static fromJSON(t){return new lp(t.width,t.height,t.depth,t.segments,t.radius)}}const Wo=(s,t,i)=>(s.wrapS=$o,s.wrapT=$o,s.repeat.set(t,i),s.anisotropy=8,s),Xs=(s,t,i)=>{const a=document.createElement("canvas");a.width=s,a.height=t;const l=a.getContext("2d");i(l,s,t);const c=new Ix(a);return c.colorSpace=Yn,c.needsUpdate=!0,c},Z2=()=>Xs(1024,1024,(s,t,i)=>{const a=s.createLinearGradient(0,0,t,i);a.addColorStop(0,"#c98954"),a.addColorStop(.45,"#e5b47c"),a.addColorStop(1,"#a9693b"),s.fillStyle=a,s.fillRect(0,0,t,i);for(let l=0;l<26;l+=1){const c=l/26*i;s.fillStyle=l%2?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.08)",s.fillRect(0,c,t,8+Math.sin(l)*5)}s.strokeStyle="rgba(54, 31, 18, 0.38)",s.lineWidth=2;for(let l=0;l<t;l+=64)s.beginPath(),s.moveTo(l+.5,0),s.lineTo(l+.5,i),s.stroke();for(let l=0;l<90;l+=1){const c=Math.random()*t,f=Math.random()*i;s.strokeStyle=`rgba(78, 48, 26, ${.06+Math.random()*.12})`,s.beginPath(),s.ellipse(c,f,18+Math.random()*26,2+Math.random()*4,Math.random()*Math.PI,0,Math.PI*2),s.stroke()}}),j2=()=>Xs(1024,1024,(s,t,i)=>{s.fillStyle="#f4d8c8",s.fillRect(0,0,t,i);const a=58,l=146;for(let c=0;c<i+a;c+=a){const f=Math.floor(c/a)%2?-l/2:0;for(let d=f;d<t+l;d+=l){const m=205+Math.floor(Math.random()*34),p=176+Math.floor(Math.random()*36);s.fillStyle=`rgb(${m}, ${p}, ${145+Math.floor(Math.random()*28)})`,s.fillRect(d+4,c+4,l-8,a-8),s.fillStyle="rgba(255,255,255,0.2)",s.fillRect(d+10,c+9,l-24,4),s.fillStyle="rgba(114,72,52,0.08)",s.fillRect(d+7,c+a-13,l-18,5)}}s.strokeStyle="rgba(255,250,244,0.82)",s.lineWidth=5;for(let c=0;c<i+a;c+=a)s.beginPath(),s.moveTo(0,c),s.lineTo(t,c),s.stroke()}),K2=()=>Xs(1024,1024,(s,t,i)=>{s.fillStyle="#dbe5eb",s.fillRect(0,0,t,i),s.strokeStyle="#aab7c1",s.lineWidth=3;for(let a=0;a<=t;a+=64)s.beginPath(),s.moveTo(a,0),s.lineTo(a,i),s.stroke();for(let a=0;a<=i;a+=64)s.beginPath(),s.moveTo(0,a),s.lineTo(t,a),s.stroke();for(let a=0;a<120;a+=1)s.fillStyle=`rgba(88, 106, 121, ${.04+Math.random()*.08})`,s.beginPath(),s.arc(Math.random()*t,Math.random()*i,1+Math.random()*3,0,Math.PI*2),s.fill()}),Q2=()=>Xs(1024,1024,(s,t,i)=>{const a=s.createRadialGradient(t*.5,i*.5,0,t*.5,i*.5,t*.7);a.addColorStop(0,"#ffffff"),a.addColorStop(.5,"#f6fbff"),a.addColorStop(1,"#e9eff6"),s.fillStyle=a,s.fillRect(0,0,t,i);const l=s.createRadialGradient(t*.78,i*.22,0,t*.78,i*.22,t*.42);l.addColorStop(0,"rgba(244,114,182,0.32)"),l.addColorStop(.48,"rgba(34,211,238,0.12)"),l.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=l,s.fillRect(0,0,t,i);for(let c=0;c<360;c+=1){const f=Math.random();s.fillStyle=f>.94?"#0f172a":f>.82?"#0891b2":"#64748b",s.globalAlpha=.16+Math.random()*.34,s.beginPath(),s.arc(Math.random()*t,Math.random()*i,.5+Math.random()*1.8,0,Math.PI*2),s.fill()}s.globalAlpha=1,s.strokeStyle="rgba(124, 58, 237, 0.16)",s.lineWidth=2;for(let c=0;c<12;c+=1)s.beginPath(),s.moveTo(Math.random()*t,Math.random()*i),s.bezierCurveTo(Math.random()*t,Math.random()*i,Math.random()*t,Math.random()*i,Math.random()*t,Math.random()*i),s.stroke()}),rv=(s="#334155",t="#22d3ee")=>Xs(512,512,(i,a,l)=>{i.fillStyle=s,i.fillRect(0,0,a,l);for(let c=0;c<l;c+=5)i.strokeStyle=c%2?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.12)",i.beginPath(),i.moveTo(0,c),i.lineTo(a,c+Math.sin(c*.05)*4),i.stroke();i.strokeStyle=t,i.globalAlpha=.45,i.lineWidth=2;for(let c=0;c<7;c+=1)i.beginPath(),i.moveTo(-20,c*42),i.lineTo(a+20,c*42+88),i.stroke();i.globalAlpha=1}),J2=()=>Xs(1024,512,(s,t,i)=>{s.fillStyle="#fff7ed",s.fillRect(0,0,t,i),s.strokeStyle="#111827",s.lineWidth=18,s.strokeRect(18,18,t-36,i-36),s.strokeStyle="#b91c1c",s.lineWidth=9,s.strokeRect(48,48,t-96,i-96),s.strokeStyle="#111827",s.lineWidth=5;for(let a=86;a<t-86;a+=138)s.beginPath(),s.moveTo(a,70),s.lineTo(a+52,128),s.lineTo(a,186),s.lineTo(a-52,128),s.closePath(),s.stroke(),s.fillStyle=a%2?"#ea580c":"#0f766e",s.globalAlpha=.72,s.fill(),s.globalAlpha=1;for(let a=110;a<t-110;a+=185)s.strokeStyle="#111827",s.lineWidth=6,s.beginPath(),s.moveTo(a,i*.52),s.lineTo(a+76,i*.28),s.lineTo(a+152,i*.52),s.lineTo(a+76,i*.76),s.closePath(),s.stroke(),s.fillStyle=a%2?"#dc2626":"#f59e0b",s.globalAlpha=.76,s.fill(),s.globalAlpha=1;for(let a=34;a<t;a+=28)s.strokeStyle="rgba(17,24,39,0.45)",s.lineWidth=2,s.beginPath(),s.moveTo(a,i-26),s.lineTo(a+12,i-5),s.stroke()}),$2=()=>{const s={wood:Wo(Z2(),5,4),tile:Wo(K2(),2,2),wall:Wo(j2(),3.8,2.4),stars:Wo(Q2(),2,1),darkFabric:rv("#d7dde8","#64748b"),purpleFabric:rv("#8f7d99","#334155"),carpet:Wo(J2(),2,1.5)},t={floor:new Se({map:s.wood,roughness:.55,metalness:.04}),balconyFloor:new Se({color:"#d9e2e8",roughness:.58,metalness:.04}),bathroomFloor:new Se({map:s.tile,roughness:.38,metalness:.02}),wall:new Se({map:s.wall,roughness:.72}),accentWall:new Se({color:"#f9e9dc",roughness:.68,metalness:.02}),ceiling:new Se({map:s.stars,roughness:.46,metalness:.02,emissive:"#f8fbff",emissiveIntensity:.42}),black:new Se({color:"#111827",roughness:.42,metalness:.14}),charcoal:new Se({color:"#263142",roughness:.5,metalness:.12}),graphite:new Se({color:"#4b5563",roughness:.55,metalness:.18}),chrome:new Se({color:"#cbd5e1",roughness:.18,metalness:.72}),white:new Se({color:"#f8fafc",roughness:.45,metalness:.02}),cream:new Se({color:"#e9dfd2",roughness:.58}),trim:new Se({color:"#f8f1e7",roughness:.5,metalness:.02}),warmWood:new Se({color:"#b87945",roughness:.58,metalness:.02}),cabinetInterior:new Se({color:"#f1e7d7",roughness:.62,metalness:.02}),shadowGap:new Se({color:"#111827",roughness:.7,metalness:.02}),rubber:new Se({color:"#0f172a",roughness:.72,metalness:.02}),warmLight:new Se({color:"#fde68a",emissive:"#f59e0b",emissiveIntensity:.9,roughness:.34}),whitePlastic:new Se({color:"#f9fafb",roughness:.32,metalness:.01}),bedBase:new Se({color:"#5d6278",roughness:.54,metalness:.08}),mattress:new Se({map:s.darkFabric,roughness:.72}),blanket:new Se({map:s.purpleFabric,roughness:.78}),purpleFabric:new Se({map:s.purpleFabric,roughness:.8}),carpet:new Se({map:s.carpet,roughness:.86}),glass:new Xh({color:"#b8ecff",transparent:!0,opacity:.28,roughness:.04,metalness:0,transmission:.42,thickness:.12}),blueGlass:new Xh({color:"#67e8f9",transparent:!0,opacity:.36,roughness:.08,transmission:.22,thickness:.08}),neonCyan:new Se({color:"#22d3ee",emissive:"#22d3ee",emissiveIntensity:1.8,roughness:.2}),neonPink:new Se({color:"#f472b6",emissive:"#f472b6",emissiveIntensity:1.7,roughness:.2}),neonGreen:new Se({color:"#86efac",emissive:"#22c55e",emissiveIntensity:1.25,roughness:.2}),neonViolet:new Se({color:"#a78bfa",emissive:"#7c3aed",emissiveIntensity:1.35,roughness:.22}),red:new Se({color:"#ef4444",roughness:.56}),yellow:new Se({color:"#facc15",roughness:.52}),blue:new Se({color:"#38bdf8",roughness:.5}),green:new Se({color:"#22c55e",roughness:.54}),woodDark:new Se({color:"#8a5632",roughness:.6,metalness:.02}),plant:new Se({color:"#16a34a",roughness:.74}),soil:new Se({color:"#3f2b1d",roughness:.9}),mirror:new Xh({color:"#d9fbff",roughness:.05,metalness:.28,transparent:!0,opacity:.65})},i=[...Object.values(s),...Object.values(t)];return{...t,dispose(){i.forEach(a=>a.dispose())}}},Jo=Math.PI*2,Yo=oi.clamp,pn={door:{name:"Cửa chính chống ồn",price:"4.900.000 vnd",use:"Cửa gỗ bản lề êm, tạo lối vào phòng và giảm tiếng ồn từ hành lang.",action:"Click để mở hoặc đóng cửa."},curtain:{name:"Rèm ban công hai lớp",price:"2.650.000 vnd",use:"Lớp voan + lớp cản sáng, che cửa kính và làm nền ánh sáng RGB mềm hơn.",action:"Click để kéo rèm."},ac:{name:"Máy lạnh âm trần nối ống gió",price:"18.500.000 vnd",use:"Cấp gió lạnh qua khe dài sát trần, hợp phòng nhỏ vì không chiếm diện tích tường.",action:"Click để bật/tắt luồng hơi lạnh."},washer:{name:"Máy giặt cửa ngang",price:"7.800.000 vnd",use:"Đặt cạnh khu vệ sinh để gom đường nước; drum có mô phỏng đang quay.",action:"Click để chạy hoặc dừng."},wardrobe:{name:"Tủ quần áo kính khói",price:"12.900.000 vnd",use:"Tủ cao có đèn led, treo áo hoodie, đồ gaming, balo và ngăn phụ kiện.",action:"Click để mở hoặc đóng cánh tủ."},stairDrawer:{name:"Bậc thang kéo hộc chứa đồ",price:"1.250.000 vnd / bậc",use:"Mỗi bậc là một hộc kéo để cất chăn mỏng, dây sạc, hộp phụ kiện hoặc giày nhẹ.",action:"Click từng bậc để kéo hộc ra/vào."},bed:{name:"Giường tầng cao gaming",price:"16.800.000 vnd",use:"Nâng giường lên cao để bên dưới có kho bí mật, tủ và lối sinh hoạt rộng hơn."},secretCabinet:{name:"Kho bí mật dưới giường",price:"5.600.000 vnd",use:"Kho âm bên dưới giường để vali, thùng máy dự phòng, hộp đồ hiếm và đồ ít dùng.",action:"Click để trượt cánh kho."},desk:{name:"Bàn học + góc PC RGB",price:"9.400.000 vnd",use:"Bàn làm việc có màn hình đôi, PC kính, dây RGB và hộc kỹ thuật giấu dây."},chair:{name:"Ghế gaming công thái học",price:"3.900.000 vnd",use:"Ghế lưng cao, tựa cổ và tay vịn, đặt sát bàn học để chơi game/làm việc lâu."},tvConsole:{name:"Kệ dưới tivi treo tường",price:"6.200.000 vnd",use:"Kệ thấp có ngăn kéo, mô hình trang trí và khe đi dây sạch.",action:"Click để kéo ngăn giữa."},sofa:{name:"Sofa mini + bàn trà",price:"7.700.000 vnd",use:"Khu nghỉ nhỏ đối diện tivi, có bàn trà thấp và thảm caro neon."},balconyDry:{name:"Khu phơi đồ ban công",price:"3.300.000 vnd",use:"Thanh phơi gấp, quần áo đang phơi, chậu cây và sàn chống nước."},shoeRack:{name:"Kệ giày cửa vào",price:"1.850.000 vnd",use:"Giữ giày dép gọn ở cửa, phía trên có khay chìa khóa và mũ bảo hiểm."},bathroom:{name:"Toilet + phòng tắm kính",price:"22.000.000 vnd",use:"Khu vệ sinh lát gạch, có bồn cầu, lavabo, phòng tắm kính và bồn nước máy giặt."},bathroomDoor:{name:"Cửa toilet bản lề êm",price:"3.200.000 vnd",use:"Cửa riêng cho khu toilet/phòng tắm, đặt đúng ở vách ngăn theo mặt bằng để lối đi không bị lẫn với cửa chính.",action:"Click để mở hoặc đóng cửa toilet."},dining:{name:"Bàn ăn gấp 2 lớp",price:"4.400.000 vnd",use:"Bàn ăn cạnh sofa, mặt bàn phụ có thể mở rộng khi cần ăn hoặc làm đồ thủ công.",action:"Click để mở/cất cánh bàn."},window:{name:"Cửa kính ban công",price:"8.500.000 vnd",use:"Cửa kính lấy sáng, tách khu phơi với phòng chính và giữ hơi lạnh."},rgb:{name:"Dây LED RGB chạy viền",price:"1.600.000 vnd",use:"Viền led chạy trần, giường và bàn tạo vibe vũ trụ + gaming nhưng vẫn đủ sáng sinh hoạt."},shelf:{name:"Kệ nhiên tầng cao",price:"4.950.000 vnd",use:"Kệ cao chứa sách, hộp đồ, mô hình sưu tầm và thiết bị mạng gần cửa gió máy lạnh."}};class tA{constructor(){this.tweens=[]}add(t,i,a){this.tweens.push({duration:t,update:i,done:a,elapsed:0})}tick(t){this.tweens=this.tweens.filter(i=>{i.elapsed+=t;const a=Yo(i.elapsed/i.duration,0,1),l=1-Math.pow(1-a,3);return i.update(l),a>=1?(i.done?.(),!1):!0})}}const Q=(s,t,i,a,l="box")=>{const c=Math.min(i[0],i[1],i[2]),f=c>=.08&&i[0]<=6&&i[1]<=3&&i[2]<=6,d=Math.min(.032,c*.18),m=f?new lp(i[0],i[1],i[2],1,d):new Ja(i[0],i[1],i[2]),p=new Zn(m,t);return p.name=l,p.position.set(a[0],a[1],a[2]),p.castShadow=!0,p.receiveShadow=!0,s.add(p),p},tn=(s,t,i,a,l,c,f=[0,0,0],d=32,m="cylinder")=>{const p=new Zn(new ip(i,a,l,d),t);return p.name=m,p.position.set(c[0],c[1],c[2]),p.rotation.set(f[0],f[1],f[2]),p.castShadow=!0,p.receiveShadow=!0,s.add(p),p},Si=(s,t,i,a,l=[1,1,1],c="sphere")=>{const f=new Zn(new rp(i,24,16),t);return f.name=c,f.position.set(a[0],a[1],a[2]),f.scale.set(l[0],l[1],l[2]),f.castShadow=!0,f.receiveShadow=!0,s.add(f),f},Hi=(s,t,i,a,l=.035)=>{const c=a[0]-i[0],f=a[1]-i[1],d=a[2]-i[2],m=Math.sqrt(c*c+f*f+d*d),p=new Zn(new Ja(m,l,l),t);return p.position.set((i[0]+a[0])/2,(i[1]+a[1])/2,(i[2]+a[2])/2),p.rotation.y=Math.atan2(d,c),s.add(p),p},Je=(s,t,i,a)=>{s.userData.info=t,s.userData.action=i,s.traverse(l=>{l.isMesh&&(l.userData.hotspot=s,a.push(l))})},eA=(s,t)=>{if(!t){s.visible=!1;return}s.visible=!0,s.setFromObject(t)},sv=(s,t,i,a,l,c)=>{const f=new le;f.name=c,f.position.set(i[0],i[1],i[2]),s.add(f),Q(f,t.black,[a+.2,l+.2,.045],[0,0,-.018],`${c} black trim`),Q(f,t.glass,[a,l,.055],[0,0,.012],`${c} glass`);for(let m=-1;m<=1;m+=1)Q(f,t.black,[.04,l,.07],[m*a/4,0,.055],`${c} vertical mullion`);for(let m=-1;m<=1;m+=1)Q(f,t.black,[a,.04,.07],[0,m*l/4,.055],`${c} horizontal mullion`);const d=new Se({color:"#c45a22",roughness:.72});for(let m=0;m<34;m+=1){const p=Q(f,d,[.08+Math.random()*.06,.04+Math.random()*.08,.018],[-a*.44+Math.random()*a*.88,-l*.42+Math.random()*l*.92,.09],`${c} autumn leaf`);p.rotation.z=Math.random()*Jo}return f},td=(s,t,i,a=1,l="floor plant")=>{const c=new le;c.name=l,c.position.set(i[0],i[1],i[2]),c.scale.setScalar(a),s.add(c),tn(c,t.soil,.22,.18,.42,[0,.21,0],[0,0,0],28,`${l} pot`);for(let f=0;f<13;f+=1)Si(c,t.plant,.17,[Math.cos(f/13*Jo)*(.18+Math.random()*.16),.58+Math.random()*.38,Math.sin(f/13*Jo)*(.18+Math.random()*.16)],[.45,1.45,.18],`${l} leaf`).rotation.set(Math.random()*.7,Math.random()*Jo,Math.random()*.7);return c},nA=(s,t,i)=>{const a=new le;a.name="room-shell",s.add(a),Q(a,t.floor,[15.2,.12,8.4],[0,-.06,.1],"wood floor"),Q(a,t.balconyFloor,[2.9,.11,5.8],[8.85,-.055,.85],"balcony floor"),Q(a,t.bathroomFloor,[3.8,.13,2.55],[-5.25,-.035,2.95],"bathroom tile floor"),Q(a,t.wall,[15.5,3.1,.14],[0,1.55,-4.15],"back wall"),Q(a,t.wall,[.14,3.1,.78],[-7.62,1.55,-3.72],"left wall before main door"),Q(a,t.wall,[.14,3.1,6],[-7.62,1.55,.88],"left wall after main door"),Q(a,t.wall,[5,3.1,.14],[-5.1,1.55,4.27],"front bath wall"),Q(a,t.wall,[3.1,3.1,.14],[5.9,1.55,4.27],"front desk wall"),Q(a,t.wall,[.14,3.1,3.1],[-3.15,1.55,2.75],"bath divider"),Q(a,t.wall,[2.05,3.1,.14],[-6.18,1.55,1.63],"bath top divider left"),Q(a,t.wall,[.7,3.1,.14],[-3.5,1.55,1.63],"bath top divider right"),Q(a,t.accentWall,[4.8,3.05,.08],[-.15,1.58,-4.06],"tv accent wall"),Q(a,t.trim,[15.35,.08,.08],[0,.18,-4],"back wall baseboard"),Q(a,t.trim,[.08,.08,5.85],[-7.48,.18,.92],"left wall baseboard"),Q(a,t.trim,[4.85,.08,.08],[-5.1,.18,4.12],"front bath baseboard"),Q(a,t.trim,[3,.08,.08],[5.9,.18,4.12],"front desk baseboard"),Q(a,t.trim,[.12,2.5,.08],[-7.48,1.3,-3.36],"main door back jamb"),Q(a,t.trim,[.12,2.5,.08],[-7.48,1.3,-2.28],"main door front jamb"),Q(a,t.trim,[.12,.08,1.22],[-7.48,2.52,-2.82],"main door header"),Q(a,t.trim,[.08,2.36,.12],[-5.15,1.25,1.52],"toilet door left jamb"),Q(a,t.trim,[.08,2.36,.12],[-4.15,1.25,1.52],"toilet door right jamb"),Q(a,t.trim,[1.12,.08,.12],[-4.65,2.42,1.52],"toilet door header");const l=Q(a,t.ceiling,[15.2,.08,8.3],[0,3.12,.08],"star ceiling");l.receiveShadow=!1,Hi(a,t.neonCyan,[-7.05,2.94,-3.62],[7.05,2.94,-3.62],.035),Hi(a,t.neonPink,[7.05,2.94,-3.62],[7.05,2.94,3.86],.035),Hi(a,t.neonViolet,[-7.05,2.94,3.86],[7.05,2.94,3.86],.035),Hi(a,t.neonGreen,[-7.05,2.94,-3.62],[-7.05,2.94,3.86],.035),sv(a,t,[-5.15,1.65,-4.03],2.2,1.55,"wide back window"),sv(a,t,[2.65,1.65,-4.03],2.35,1.55,"desk view window");const c=new le;c.name="balcony glass",Q(c,t.glass,[.08,2.55,4.9],[7.42,1.35,.95],"glass panel");for(let f=-1.3;f<=3.2;f+=1.5)Q(c,t.chrome,[.12,2.55,.04],[7.37,1.35,f],"glass mullion");return Q(c,t.chrome,[.12,.04,4.9],[7.36,2.62,.95],"glass top rail"),Q(c,t.chrome,[.12,.04,4.9],[7.36,.12,.95],"glass bottom rail"),a.add(c),Je(c,pn.window,null,i),a},iA=(s,t,i,a)=>{const l=new le;l.position.set(-7.56,0,-3.32),l.name="main door pivot";const c=Q(l,t.woodDark,[.08,2.35,1.05],[.02,1.18,.52],"main door");c.castShadow=!0,tn(l,t.chrome,.035,.035,.08,[.1,1.17,.88],[Math.PI/2,0,0],18,"door knob"),s.add(l);let f=!1;Je(l,pn.door,()=>{const d=l.rotation.y,m=f?0:Math.PI*.52;return f=!f,i.add(.68,p=>{l.rotation.y=oi.lerp(d,m,p)}),f?"Cửa đã mở":"Cửa đã đóng"},a)},aA=(s,t,i,a)=>{const l=new le;l.name="bathroom door pivot",l.position.set(-4.15,0,1.58),s.add(l),Q(l,t.trim,[.98,2.18,.08],[-.49,1.09,.02],"bathroom door panel"),Q(l,t.chrome,[.18,.035,.035],[-.12,1.08,-.05],"bathroom door handle"),Q(l,t.shadowGap,[.88,.02,.045],[-.5,.09,-.03],"bathroom door threshold");let c=!1;Je(l,pn.bathroomDoor,()=>{const f=l.rotation.y,d=c?0:Math.PI/2;return c=!c,i.add(.58,m=>{l.rotation.y=oi.lerp(f,d,m)}),c?"Cửa toilet đã mở":"Cửa toilet đã đóng"},a)},rA=(s,t,i,a)=>{const l=new le;l.name="tv console",l.position.set(-.25,0,-3.78),s.add(l),Q(l,t.charcoal,[3.9,.46,.42],[0,.58,0],"tv cabinet body"),Q(l,t.black,[1,.38,.45],[-1.35,.6,.04],"left drawer");const c=new le;Q(c,t.graphite,[1.05,.38,.48],[0,.6,.04],"center drawer"),Q(c,t.chrome,[.36,.025,.03],[0,.64,.29],"drawer handle"),l.add(c),Q(l,t.black,[1,.38,.45],[1.35,.6,.04],"right drawer"),Q(l,t.black,[2.95,1.18,.08],[0,1.75,-.07],"tv screen"),Q(l,t.neonCyan,[2.64,.05,.035],[0,2.26,-.02],"tv glow top"),Q(l,t.neonPink,[2.64,.05,.035],[0,1.23,-.02],"tv glow bottom"),Si(l,t.neonViolet,.12,[1.88,.93,.08],[1,1,1],"astronaut model"),tn(l,t.chrome,.08,.14,.32,[-1.9,.9,.05],[0,0,0],6,"small plant pot"),Si(l,t.plant,.22,[-1.9,1.16,.05],[.7,1.1,.7],"small plant");let f=!1;Je(l,pn.tvConsole,()=>{const d=c.position.z,m=f?0:.54;return f=!f,i.add(.55,p=>{c.position.z=oi.lerp(d,m,p)}),f?"Ngăn tivi đã kéo ra":"Ngăn tivi đã đóng"},a)},sA=(s,t,i,a,l)=>{const c=new le;c.name="ducted ac",c.position.set(3.85,2.64,-4.02),s.add(c),Q(c,t.white,[5.2,.42,.34],[0,0,.05],"ac soffit"),Q(c,t.white,[5.35,.18,.38],[0,-.3,.08],"ac face");for(let m=0;m<29;m+=1){const p=-2.42+m*.17,g=Q(c,t.graphite,[.045,.12,.035],[p,-.3,.29],"ac grille blade");g.rotation.x=-.18,l.acBlades.push(g)}Q(c,t.chrome,[5.15,.035,.035],[0,-.42,.31],"ac lower trim");const f=new le;f.visible=!1;for(let m=0;m<46;m+=1){const p=new $d({color:m%3?"#a7f3ff":"#dbeafe",transparent:!0,opacity:.16,depthWrite:!1}),g=Si(f,p,.06+Math.random()*.04,[-2.35+Math.random()*4.7,-.46-Math.random()*.18,.36+Math.random()*.18],[1.7,.45,.65],"cold mist");g.userData.seed=Math.random()*100,g.castShadow=!1,g.receiveShadow=!1}c.add(f);let d=!1;Je(c,pn.ac,()=>{d=!d,f.visible=d,l.acRunning=d;const m=c.children[1].material.emissiveIntensity||0;return i.add(.45,p=>{const g=oi.lerp(m,d?.35:0,p);c.children[1].material.emissive=new me("#b6f3ff"),c.children[1].material.emissiveIntensity=g}),d?"Máy lạnh đang thổi hơi lạnh":"Máy lạnh đã tắt"},a),l.acMist=f},oA=(s,t,i,a)=>{const l=new le;l.name="balcony curtain",l.position.set(7.13,0,.94),s.add(l);const c=Q(l,t.chrome,[.07,.08,5.3],[0,2.72,0],"curtain rail");c.castShadow=!1;const f=new le,d=new le;l.add(f,d);for(let p=0;p<5;p+=1){const g=Q(f,t.purpleFabric,[.055,2.28,.32],[-.03,1.38,-1.96+p*.34],"left curtain fold");g.rotation.y=Math.sin(p)*.05}for(let p=0;p<5;p+=1){const g=Q(d,t.bedBase,[.055,2.28,.32],[-.03,1.38,.64+p*.34],"right curtain fold");g.rotation.y=Math.sin(p+1)*.05}Q(f,t.neonPink,[.035,2.26,.05],[-.08,1.37,-1.1],"curtain led seam"),Q(d,t.neonCyan,[.035,2.26,.05],[-.08,1.37,1.48],"curtain led seam");let m=!1;Je(l,pn.curtain,()=>{const p=f.position.z,g=d.position.z,_=m?0:-1.05,S=m?0:1.05;return m=!m,i.add(.78,M=>{f.position.z=oi.lerp(p,_,M),d.position.z=oi.lerp(g,S,M)}),m?"Rèm đã kéo sang hai bên":"Rèm đã đóng"},a)},lA=(s,t,i,a)=>{const l=new le;l.name="sofa corner",l.position.set(2.55,0,-.45),s.add(l),Q(l,t.carpet,[5.4,.045,2.9],[.5,.028,.42],"large patterned rug"),Q(l,t.charcoal,[1.65,.42,.62],[-.55,.36,-.18],"sofa seat"),Q(l,t.charcoal,[1.65,.78,.18],[-.55,.72,-.55],"sofa back"),Q(l,t.graphite,[.18,.48,.62],[-1.48,.42,-.18],"sofa arm left"),Q(l,t.graphite,[.18,.48,.62],[.38,.42,-.18],"sofa arm right"),Q(l,t.neonPink,[1.2,.045,.05],[-.55,.88,-.45],"sofa led"),Q(l,t.blue,[.42,.16,.36],[-.92,.67,-.16],"blue cushion"),Q(l,t.yellow,[.42,.16,.36],[-.23,.67,-.16],"yellow cushion"),Q(l,t.white,[.5,.13,.34],[.18,.68,-.16],"white cushion");const c=new le;c.position.set(.9,0,.55),Q(c,t.woodDark,[1.08,.09,.68],[0,.51,0],"coffee table top"),Q(c,t.chrome,[.06,.46,.06],[-.42,.25,-.24],"table leg"),Q(c,t.chrome,[.06,.46,.06],[.42,.25,-.24],"table leg"),Q(c,t.chrome,[.06,.46,.06],[-.42,.25,.24],"table leg"),Q(c,t.chrome,[.06,.46,.06],[.42,.25,.24],"table leg"),tn(c,t.white,.12,.09,.13,[-.22,.64,-.08],[0,0,0],28,"cup"),Q(c,t.green,[.3,.05,.22],[.24,.62,.12],"book"),l.add(c),Je(l,pn.sofa,null,a);const f=new le;f.name="folding dining table",f.position.set(5.65,0,-1),s.add(f),Q(f,t.woodDark,[1.05,.08,.74],[0,.73,0],"fold table center");const d=new le;Q(d,t.woodDark,[.78,.07,.74],[.39,.73,0],"fold table wing"),d.position.x=.54,f.add(d),Q(f,t.chrome,[.05,.72,.05],[-.44,.36,-.28],"fold table leg"),Q(f,t.chrome,[.05,.72,.05],[-.44,.36,.28],"fold table leg"),Q(f,t.chrome,[.05,.72,.05],[.44,.36,-.28],"fold table leg"),Q(f,t.chrome,[.05,.72,.05],[.44,.36,.28],"fold table leg"),Q(f,t.charcoal,[.45,.1,.45],[-.9,.42,.05],"dining stool"),Q(f,t.charcoal,[.45,.1,.45],[.95,.42,.05],"dining stool");let m=!1;Je(f,pn.dining,()=>{const p=d.rotation.z,g=m?0:-Math.PI/2.2;return m=!m,i.add(.58,_=>{d.rotation.z=oi.lerp(p,g,_)}),m?"Cánh bàn đã gập xuống gọn":"Cánh bàn đã mở rộng"},a)},cA=(s,t,i)=>{const a=new le;a.name="soft decor",s.add(a);const l=new le;l.name="floor lounge mattress",l.position.set(5.25,0,.95),l.rotation.y=-.22,Q(l,t.mattress,[1.55,.2,.86],[0,.18,0],"floor mattress"),Q(l,t.blanket,[1.52,.08,.34],[0,.33,.22],"folded throw blanket"),Q(l,t.white,[.54,.13,.32],[-.42,.39,-.2],"floor pillow white"),Q(l,t.blue,[.48,.12,.3],[.24,.38,-.2],"floor pillow blue"),a.add(l),Je(l,{name:"Nệm thư giãn + gối sàn",price:"2.900.000 vnd",use:"Khu nằm đọc sách/chill nhanh cạnh ban công, làm phòng đỡ trống và mềm hơn."},null,i);const c=new le;c.name="warm floor lamp",c.position.set(4.55,0,-2.35),tn(c,t.black,.055,.055,1.05,[0,.72,0],[0,0,0],18,"lamp stem"),tn(c,t.black,.24,.16,.32,[0,1.35,0],[0,0,0],28,"lamp shade"),Si(c,t.yellow,.12,[0,1.27,0],[1,.85,1],"warm bulb"),a.add(c),Je(c,{name:"Đèn cây ánh sáng ấm",price:"1.450.000 vnd",use:"Tăng sáng cho góc sofa và tạo cảm giác phòng thật hơn vào buổi tối."},null,i);const f=new le;f.name="abstract wall art",f.position.set(-1.1,1.92,-4),Q(f,t.white,[1.85,1,.05],[0,0,0],"canvas base"),Q(f,t.green,[.72,.38,.06],[.38,.05,.04],"green paint block"),Q(f,t.yellow,[.58,.24,.06],[-.3,.27,.05],"yellow paint block"),Q(f,t.black,[.72,.16,.06],[.02,-.2,.06],"black brush stroke"),Q(f,t.red,[.34,.18,.06],[.44,-.34,.06],"red paint accent"),a.add(f),Je(f,{name:"Tranh canvas trừu tượng",price:"1.250.000 vnd",use:"Mảng trang trí sáng giống ảnh mẫu, cân bằng lại LED gaming trong phòng."},null,i);const d=new le;d.name="decor plants",a.add(d),td(d,t,[-2.2,0,-2.7],1.05,"plant near tv"),td(d,t,[5.95,0,-2.15],.95,"plant near window"),td(d,t,[6.45,0,2.1],.75,"small balcony plant"),Je(d,{name:"Cây xanh trang trí",price:"2.200.000 vnd",use:"Làm phòng sáng và thật hơn, lấy cảm hứng từ cây trong ảnh thiết kế."},null,i)},uA=(s,t,i,a)=>{const l=new le;l.name="loft bed",l.position.set(-.65,0,2.7),s.add(l),Q(l,t.bedBase,[3.35,.22,2.26],[0,2.05,0],"loft platform");for(const E of[-1.64,1.64])for(const x of[-1.05,1.05])Q(l,t.woodDark,[.13,2.1,.13],[E,1.05,x],"loft bed structural post");Q(l,t.warmWood,[3.48,.12,.12],[0,1.92,1.13],"rear loft support beam"),Q(l,t.warmWood,[.12,.12,2.18],[-1.72,1.92,0],"left loft support beam"),Q(l,t.warmWood,[.12,.12,2.18],[1.72,1.92,0],"right loft support beam"),Q(l,t.mattress,[3.12,.32,1.88],[0,2.35,-.05],"mattress"),Q(l,t.blanket,[1.72,.18,1.78],[.42,2.56,-.04],"blanket"),Q(l,t.white,[.7,.18,.46],[-1,2.58,-.56],"pillow"),Q(l,t.white,[.7,.18,.46],[-1,2.58,.32],"pillow"),Q(l,t.chrome,[3.45,.08,.08],[0,2.68,-1.13],"bed front rail"),Q(l,t.chrome,[.08,.76,.08],[-1.72,2.42,-1.13],"bed rail post"),Q(l,t.chrome,[.08,.76,.08],[1.72,2.42,-1.13],"bed rail post"),Hi(l,t.neonViolet,[-1.62,2.18,-1.11],[1.62,2.18,-1.11],.045);const c=new le;c.name="secret under bed",c.position.set(0,0,1.18),Q(c,t.charcoal,[2.85,1.42,.12],[0,.83,-1.03],"secret sliding door"),Q(c,t.neonGreen,[1.8,.035,.045],[0,1.38,-1.1],"secret led line"),Q(c,t.graphite,[1,.62,.8],[-.82,.38,-.18],"storage box"),Q(c,t.black,[.7,.54,.62],[.58,.35,-.1],"pc spare tower"),l.add(c);let f=!1;Je(l,pn.bed,null,a),Je(c,pn.secretCabinet,()=>{const E=c.position.x,x=f?0:1.75;return f=!f,i.add(.66,v=>{c.position.x=oi.lerp(E,x,v)}),f?"Kho dưới giường đã mở":"Kho dưới giường đã đóng"},a);const d=new le;d.name="under bed wardrobe cabinet",Q(d,t.cabinetInterior,[3.08,1.5,.08],[0,.84,.96],"cabinet back panel"),Q(d,t.warmWood,[.08,1.54,2.06],[-1.55,.84,-.02],"cabinet left side"),Q(d,t.warmWood,[.08,1.54,2.06],[1.55,.84,-.02],"cabinet right side"),Q(d,t.warmWood,[3.16,.08,2.06],[0,.1,-.02],"cabinet plinth"),Q(d,t.warmWood,[3.16,.08,2.06],[0,1.58,-.02],"cabinet upper beam"),Q(d,t.warmWood,[.06,1.42,1.92],[-.42,.86,-.02],"cabinet vertical divider"),Q(d,t.warmWood,[.06,1.42,1.92],[.68,.86,-.02],"cabinet vertical divider"),Q(d,t.cabinetInterior,[.98,.06,1.78],[-1,.62,-.02],"folded clothes shelf"),Q(d,t.cabinetInterior,[.8,.06,1.78],[1.08,.92,-.02],"accessory shelf"),tn(d,t.chrome,.025,.025,.96,[.13,1.32,-.1],[0,0,Math.PI/2],16,"wardrobe hanging rail");const m=[t.blue,t.white,t.neonViolet,t.green,t.yellow];for(let E=0;E<m.length;E+=1){const x=-.24+E*.19;Q(d,m[E],[.12,.58,.34],[x,.94,-.22],"hanging shirt"),tn(d,t.chrome,.025,.025,.14,[x,1.26,-.22],[Math.PI/2,0,0],8,"shirt hanger")}Q(d,t.graphite,[.68,.34,.52],[-1.02,.34,-.42],"storage fabric bin"),Q(d,t.cream,[.7,.18,.44],[-1.02,.78,.36],"folded blanket stack"),Q(d,t.black,[.56,.3,.48],[1.08,.36,-.48],"gaming gear box"),Si(d,t.black,.12,[1,.24,.48],[1.65,.42,.75],"left shoe pair"),Si(d,t.white,.12,[1.25,.24,.48],[1.65,.42,.75],"right shoe pair");const p=new le;p.name="left sliding wardrobe door",Q(p,t.blueGlass,[1.48,1.36,.08],[-.76,.86,-1.03],"left smoked glass door"),Q(p,t.chrome,[.03,1.05,.04],[-.12,.86,-1.09],"left vertical pull"),d.add(p);const g=new le;g.name="right sliding wardrobe door",Q(g,t.blueGlass,[1.48,1.36,.08],[.76,.86,-1],"right smoked glass door"),Q(g,t.chrome,[.03,1.05,.04],[.12,.86,-1.06],"right vertical pull"),d.add(g),Q(d,t.neonGreen,[2.85,.035,.045],[0,1.42,-1.11],"under bed wardrobe led line"),l.add(d);let _=!1;Je(d,pn.wardrobe,()=>{const E=p.position.x,x=g.position.x,v=_?0:-.72,z=_?0:.72;return _=!_,i.add(.66,U=>{p.position.x=oi.lerp(E,v,U),g.position.x=oi.lerp(x,z,U)}),_?"Tủ dưới giường đã mở":"Tủ dưới giường đã đóng"},a);const S=new le;S.name="storage stairs",S.position.set(2,0,2.7),s.add(S);const M=5;for(let E=0;E<M;E+=1){const x=new le;x.name=`drawer stair ${E+1}`;const v=.22+E*.36,z=.82-E*.38;Q(x,t.woodDark,[.84,.34,.58],[0,v,z],"stair shell");const U=new le;U.name=`step drawer ${E+1}`,Q(U,t.bedBase,[.77,.25,.08],[.02,v,z-.31],"drawer face"),Q(U,t.chrome,[.3,.025,.025],[.02,v+.02,z-.36],"drawer pull"),Q(U,t.graphite,[.66,.2,.38],[.02,v-.01,z-.14],"drawer box"),x.add(U),S.add(x);let w=!1;Je(x,pn.stairDrawer,()=>{const H=U.position.z,F=w?0:-.55;return w=!w,i.add(.48,O=>{U.position.z=oi.lerp(H,F,O)}),w?`Hộc bậc ${E+1} đã kéo ra`:`Hộc bậc ${E+1} đã đóng`},a)}Q(S,t.chrome,[.06,2.05,.06],[.55,1.2,-.36],"stair rail post"),Q(S,t.chrome,[.06,1.8,.06],[.55,1.1,.88],"stair rail post");const T=Q(S,t.chrome,[.07,.07,1.55],[.55,1.82,.26],"stair handrail");T.rotation.x=.35},fA=(s,t,i)=>{const a=new le;a.name="gaming desk",a.position.set(5.85,0,2.55),a.rotation.y=-Math.PI/2,s.add(a),Q(a,t.woodDark,[2.22,.12,.75],[0,.78,0],"desk top"),Q(a,t.charcoal,[.22,.76,.68],[-.9,.39,0],"desk drawer block"),Q(a,t.chrome,[.07,.76,.07],[.9,.39,-.28],"desk leg"),Q(a,t.chrome,[.07,.76,.07],[.9,.39,.28],"desk leg"),Q(a,t.black,[.88,.56,.06],[-.46,1.17,-.24],"left monitor"),Q(a,t.black,[.88,.56,.06],[.5,1.17,-.24],"right monitor"),Q(a,t.neonCyan,[.72,.035,.03],[-.46,1.39,-.2],"monitor glow"),Q(a,t.neonPink,[.72,.035,.03],[.5,.95,-.2],"monitor glow"),Q(a,t.black,[.86,.05,.22],[.04,.87,.16],"keyboard");for(let c=0;c<8;c+=1)Q(a,c%2?t.neonCyan:t.neonPink,[.055,.018,.055],[-.28+c*.08,.91,.16],"rgb keyboard key");Si(a,t.neonGreen,.13,[.72,.89,.18],[1.25,.42,.86],"rgb mouse"),tn(a,t.soil,.09,.07,.12,[-.86,.9,.22],[0,0,0],18,"desk mini plant pot"),Si(a,t.plant,.16,[-.86,1.06,.22],[.8,1.15,.8],"desk mini plant"),tn(a,t.chrome,.025,.025,.42,[-1.02,1.02,-.08],[0,0,0],16,"desk lamp stem"),tn(a,t.yellow,.11,.07,.16,[-1.02,1.28,-.08],[0,0,0],20,"desk lamp shade"),Q(a,t.black,[.48,.92,.64],[1.32,.58,.02],"pc case"),Q(a,t.blueGlass,[.04,.76,.52],[1.07,.6,.02],"pc glass side"),tn(a,t.neonCyan,.11,.11,.035,[1.04,.75,-.16],[Math.PI/2,0,0],32,"pc fan"),tn(a,t.neonPink,.11,.11,.035,[1.04,.45,-.16],[Math.PI/2,0,0],32,"pc fan"),Hi(a,t.neonCyan,[-1,.86,.42],[1.1,.86,.42],.035),Hi(a,t.neonPink,[1.08,.25,.42],[1.08,.86,.42],.035);const l=new le;l.position.set(.1,0,1),Q(l,t.charcoal,[.64,.18,.62],[0,.55,0],"chair seat"),Q(l,t.black,[.7,1.05,.18],[0,1.08,.34],"chair back"),Q(l,t.neonViolet,[.5,.05,.035],[0,1.46,.25],"chair led"),tn(l,t.chrome,.05,.05,.55,[0,.28,0],[0,0,0],16,"chair gas lift");for(let c=0;c<5;c+=1){const f=Q(l,t.chrome,[.06,.05,.54],[0,.14,0],"chair base leg");f.rotation.y=c/5*Jo}a.add(l),Je(a,pn.desk,null,i),Je(l,pn.chair,null,i)},hA=(s,t,i)=>{const a=new le;a.name="bathroom",a.position.set(-5.2,0,2.9),s.add(a),Q(a,t.glass,[1.22,2.18,.08],[-.9,1.12,-.67],"shower glass front"),Q(a,t.glass,[.08,2.18,1.18],[-1.48,1.12,-.1],"shower glass side"),tn(a,t.chrome,.06,.06,.08,[-1.1,1.98,-.66],[Math.PI/2,0,0],28,"shower head"),Q(a,t.chrome,[.045,1,.045],[-1.1,1.42,-.66],"shower pipe"),tn(a,t.white,.27,.32,.32,[.76,.32,.54],[0,0,0],32,"toilet bowl"),Q(a,t.white,[.46,.66,.18],[.76,.75,.86],"toilet tank"),tn(a,t.white,.3,.26,.16,[.22,.78,-.64],[0,0,0],32,"sink bowl"),Q(a,t.white,[.56,.12,.42],[.22,.86,-.64],"sink counter"),Q(a,t.mirror,[.62,.78,.035],[.22,1.45,-.94],"mirror"),Q(a,t.neonCyan,[.7,.035,.035],[.22,1.9,-.91],"mirror led"),tn(a,t.chrome,.035,.035,.2,[.22,1.04,-.66],[Math.PI/2,0,0],16,"faucet"),Je(a,pn.bathroom,null,i)},dA=(s,t,i,a,l)=>{const c=new le;c.name="washing machine",c.position.set(8.2,0,2.62),c.rotation.y=Math.PI/2,s.add(c),Q(c,t.whitePlastic,[.92,.98,.78],[0,.49,0],"washer body"),Q(c,t.graphite,[.68,.16,.06],[0,.82,-.37],"washer control panel");const f=tn(c,t.black,.28,.28,.08,[0,.47,-.39],[Math.PI/2,0,0],40,"washer door ring"),d=tn(c,t.blueGlass,.22,.22,.09,[0,.47,-.43],[Math.PI/2,0,0],40,"washer glass drum");Q(c,t.neonGreen,[.12,.045,.035],[.22,.82,-.42],"washer status led"),Q(c,t.chrome,[.75,.035,.035],[0,1,-.22],"washer top trim"),tn(c,t.chrome,.028,.028,.72,[-.56,.78,.18],[0,0,Math.PI/2],16,"washer water pipe"),Q(c,t.blue,[.18,.28,.14],[.38,1.14,.02],"detergent bottle"),f.receiveShadow=!1,d.receiveShadow=!1;let m=!1;Je(c,pn.washer,()=>(m=!m,l.washerRunning=m,i.add(.38,p=>{const g=oi.lerp(m?.8:1.15,m?1.15:.8,p);c.scale.setScalar(g)},()=>{c.scale.setScalar(1)}),m?"Máy giặt đang quay":"Máy giặt đã dừng"),a),l.washerDrum=d},pA=(s,t,i)=>{const a=new le;a.name="drying balcony",a.position.set(8.9,0,-.6),s.add(a),Q(a,t.glass,[2.6,1.05,.08],[0,.86,-2.54],"balcony glass rail"),Q(a,t.chrome,[2.65,.08,.08],[0,1.42,-2.54],"balcony top rail"),Q(a,t.chrome,[.05,1.36,.05],[-1.12,.76,-2.54],"balcony post"),Q(a,t.chrome,[.05,1.36,.05],[1.12,.76,-2.54],"balcony post");const l=new le;l.position.set(.1,0,-1.28),tn(l,t.chrome,.035,.035,2,[0,1.55,0],[Math.PI/2,0,0],16,"drying rod"),Q(l,t.chrome,[.04,1.1,.04],[-.92,.92,-.82],"drying stand"),Q(l,t.chrome,[.04,1.1,.04],[.92,.92,.82],"drying stand");const c=[t.red,t.blue,t.green,t.white,t.yellow];for(let f=0;f<5;f+=1){const d=-.74+f*.37;Q(l,c[f],[.05,.72-f*.04,.28],[0,1.18,d],"hanging laundry")}a.add(l),tn(a,t.soil,.22,.18,.24,[.95,.12,1.52],[0,0,0],22,"plant pot"),Si(a,t.plant,.28,[.95,.48,1.52],[.8,1.15,.8],"balcony plant"),Q(a,t.graphite,[.7,.86,.42],[-.88,.43,1.34],"laundry basket"),Je(a,pn.balconyDry,null,i)},mA=(s,t,i)=>{const a=new le;a.name="shoe rack",a.position.set(-7.08,0,-2.2),s.add(a),Q(a,t.woodDark,[.62,1.1,1.12],[0,.55,0],"shoe rack body");for(let c=0;c<3;c+=1)Q(a,t.cream,[.55,.04,1.02],[.02,.25+c*.32,0],"shoe shelf");const l=[t.black,t.white,t.red,t.blue,t.charcoal,t.yellow];for(let c=0;c<6;c+=1){const f=Math.floor(c/2),d=c%2?.25:-.25;Si(a,l[c],.12,[0,.16+f*.32,d],[1.5,.42,.68],"pair of shoes")}Q(a,t.black,[.48,.28,.38],[.04,1.24,-.22],"helmet"),Q(a,t.chrome,[.38,.04,.04],[.04,1.08,.28],"key tray"),Je(a,pn.shoeRack,null,i)},gA=(s,t,i)=>{const a=new le;a.name="tall shelf",a.position.set(6.85,0,-3.24),s.add(a),Q(a,t.woodDark,[1.2,2.1,.42],[0,1.05,0],"tall shelf frame");for(let l=0;l<5;l+=1)Q(a,t.cream,[1.05,.05,.38],[0,.28+l*.38,0],"shelf plank");for(let l=0;l<10;l+=1){const c=-.44+l%5*.22,f=.38+Math.floor(l/5)*.74;Q(a,l%3===0?t.neonViolet:l%3===1?t.blue:t.yellow,[.12,.34,.24],[c,f,-.05],"books and game boxes")}Si(a,t.neonCyan,.15,[.36,1.78,-.04],[1,1,1],"collectible orb"),Q(a,t.black,[.48,.22,.32],[-.28,1.78,-.02],"router"),Je(a,pn.shelf,null,i)},_A=(s,t,i)=>{const a=new le;a.name="rgb strips and cables",s.add(a),Hi(a,t.neonCyan,[4.2,1,3.55],[6.2,1,3.55],.03),Hi(a,t.neonPink,[6.2,1,3.55],[6.2,1.95,3.55],.03),Hi(a,t.neonGreen,[-1.9,2.12,1.49],[1,2.12,1.49],.03),new np({color:"#22d3ee",transparent:!0,opacity:.85});const l=[new V(4.36,.83,3.34),new V(4.8,.64,3.16),new V(5.28,.8,3.36),new V(5.76,.64,3.12),new V(6.18,.82,3.34)],c=new Lv(l),f=new Zn(new sp(c,48,.015,8,!1),t.neonCyan);f.name="rgb cable tube",a.add(f),Je(a,pn.rgb,null,i)},vA=s=>{s.add(new n1("#ffffff","#d9c0ad",1.65)),s.add(new s1("#ffffff",.48));const t=new r1("#fff8e7",3.55);t.position.set(-5,7.6,5.5),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.left=-11,t.shadow.camera.right=11,t.shadow.camera.top=8,t.shadow.camera.bottom=-8,s.add(t);const i=new Yh("#22d3ee",1.2,8,1.6);i.position.set(4.5,2.2,3.25),s.add(i);const a=new Yh("#f472b6",.95,7,1.8);a.position.set(-.3,2.5,2.1),s.add(a);const l=new Yh("#22c55e",.65,5.4,1.9);l.position.set(7,2.1,-2.9),s.add(l)},yA=s=>{s.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(i=>i.dispose()):t.material.dispose())})},SA=({mount:s,onHover:t,onFocus:i})=>{const a=new Y2({antialias:!0,powerPreference:"high-performance"});a.setPixelRatio(Math.min(window.devicePixelRatio||1,2.5)),a.setSize(s.clientWidth,s.clientHeight),a.setClearColor("#f4f6fb",1),a.shadowMap.enabled=!0,a.shadowMap.type=lv,a.outputColorSpace=Yn,a.toneMapping=uv,a.toneMappingExposure=1.28,s.appendChild(a.domElement),a.domElement.tabIndex=0,a.domElement.style.width="100%",a.domElement.style.height="100%";const l=new Lx;l.background=new me("#f4f6fb"),l.fog=new tp("#f4f6fb",.015);const c=new si(62,s.clientWidth/s.clientHeight,.04,80),f=new V(-6.55,1.55,-2.82);c.position.copy(f);let d=-2.04,m=-.18;const p=$2(),g=new tA,_=[],S={washerRunning:!1,washerDrum:null,acRunning:!1,acMist:null,acBlades:[]};vA(l),nA(l,p,_),iA(l,p,g,_),aA(l,p,g,_),rA(l,p,g,_),sA(l,p,g,_,S),oA(l,p,g,_),lA(l,p,g,_),cA(l,p,_),uA(l,p,g,_),fA(l,p,_),hA(l,p,_),dA(l,p,g,_,S),pA(l,p,_),mA(l,p,_),gA(l,p,_),_A(l,p,_);const M=new u1(new _n,"#22d3ee");M.material.transparent=!0,M.material.opacity=.85,M.visible=!1,l.add(M);const T=new c1;T.far=7.2;const E=new ee(0,0),x={x:window.innerWidth*.5,y:window.innerHeight*.5};let v=null,z=!1;const U=new Set,w=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight","ShiftLeft","ShiftRight"]);let H=!1,F=0,O={x:0,y:0};const X=()=>{m=Yo(m,-1.16,.72),c.rotation.order="YXZ",c.rotation.y=d,c.rotation.x=m};X();const C=$=>{const At=a.domElement.getBoundingClientRect();E.x=($.clientX-At.left)/At.width*2-1,E.y=-(($.clientY-At.top)/At.height)*2+1,x.x=$.clientX,x.y=$.clientY},D=()=>{T.setFromCamera(E,c);const $=T.intersectObjects(_,!1),At=$.length?$[0].object.userData.hotspot:null;if(At!==v&&(v=At,eA(M,v),v?.userData.info?i?.(v.userData.info.name):i?.("Sẵn sàng")),v?.userData.info){const Tt=v.userData.info,jt=Yo(x.x,8,window.innerWidth-360),Ie=Yo(x.y,8,window.innerHeight-180);t?.({x:jt,y:Ie,name:Tt.name,price:Tt.price,use:Tt.use,action:Tt.action})}else t?.(null)},B=$=>{if(C($),H){const At=$.clientX-O.x,Tt=$.clientY-O.y;F+=Math.abs(At)+Math.abs(Tt),d-=At*.0042,m-=Tt*.0034,X(),O={x:$.clientX,y:$.clientY}}D()},st=$=>{C($),a.domElement.focus(),H=!0,F=0,O={x:$.clientX,y:$.clientY},a.domElement.setPointerCapture?.($.pointerId),D()},lt=$=>{if(C($),a.domElement.releasePointerCapture?.($.pointerId),H=!1,D(),F<8&&v?.userData.action){const At=v.userData.action();At&&i?.(At)}},ut=$=>{c.fov=Yo(c.fov+Math.sign($.deltaY)*3,38,78),c.updateProjectionMatrix()},dt=$=>{w.has($.code)&&$.preventDefault(),U.add($.code)},P=$=>{w.has($.code)&&$.preventDefault(),U.delete($.code)},K=()=>{!s.clientWidth||!s.clientHeight||(c.aspect=s.clientWidth/s.clientHeight,c.updateProjectionMatrix(),a.setPixelRatio(Math.min(window.devicePixelRatio||1,2.5)),a.setSize(s.clientWidth,s.clientHeight))};a.domElement.addEventListener("pointermove",B),a.domElement.addEventListener("pointerdown",st),a.domElement.addEventListener("pointerup",lt),a.domElement.addEventListener("wheel",ut,{passive:!0}),window.addEventListener("keydown",dt),window.addEventListener("keyup",P),window.addEventListener("resize",K);const Y=new l1,yt=new V,xt=new V,N=new V,it=($,At)=>$>-7.15&&$<7.15&&At>-3.78&&At<3.88||$>7.15&&$<9.9&&At>-2.25&&At<3.3,Mt=$=>{if(yt.set(0,0,0),xt.set(-Math.sin(d),0,-Math.cos(d)),N.set(Math.cos(d),0,-Math.sin(d)),(U.has("KeyW")||U.has("ArrowUp"))&&yt.add(xt),(U.has("KeyS")||U.has("ArrowDown"))&&yt.sub(xt),(U.has("KeyA")||U.has("ArrowLeft"))&&yt.sub(N),(U.has("KeyD")||U.has("ArrowRight"))&&yt.add(N),yt.lengthSq()>0){yt.normalize().multiplyScalar((U.has("ShiftLeft")||U.has("ShiftRight")?4.25:2.45)*$);const At=c.position.x+yt.x,Tt=c.position.z+yt.z;it(At,c.position.z)&&(c.position.x=At),it(c.position.x,Tt)&&(c.position.z=Tt)}c.position.y=1.55},Ct=($,At)=>{S.washerRunning&&S.washerDrum&&(S.washerDrum.rotation.z+=At*11,S.washerDrum.material.opacity=.38+Math.sin($*9)*.08),S.acRunning&&(S.acBlades.forEach((Tt,jt)=>{Tt.rotation.x=-.22+Math.sin($*8+jt*.45)*.24}),S.acMist?.children.forEach((Tt,jt)=>{Tt.position.y-=At*(.14+jt%5*.03),Tt.position.z+=At*(.42+jt%7*.04),Tt.position.x+=Math.sin($*1.8+Tt.userData.seed)*At*.12,Tt.material.opacity=.08+Math.sin($*2.6+Tt.userData.seed)*.045,(Tt.position.z>1.6||Tt.position.y<-1.2)&&(Tt.position.y=-.46-Math.random()*.18,Tt.position.z=.36+Math.random()*.18)}))};let J=0;const _t=()=>{if(z)return;J=requestAnimationFrame(_t);const $=Math.min(Y.getDelta(),.05),At=Y.elapsedTime;g.tick($),Mt($),Ct(At,$),D(),a.render(l,c)};return _t(),{resetView(){c.position.copy(f),d=-2.04,m=-.18,c.fov=62,c.updateProjectionMatrix(),X(),i?.("Sẵn sàng")},dispose(){z=!0,cancelAnimationFrame(J),a.domElement.removeEventListener("pointermove",B),a.domElement.removeEventListener("pointerdown",st),a.domElement.removeEventListener("pointerup",lt),a.domElement.removeEventListener("wheel",ut),window.removeEventListener("keydown",dt),window.removeEventListener("keyup",P),window.removeEventListener("resize",K),t?.(null),yA(l),p.dispose(),a.dispose(),a.domElement.remove()}}};function MA(){const s=ws.useRef(null),t=ws.useRef(null),[i,a]=ws.useState(null),[l,c]=ws.useState("Sẵn sàng");return ws.useEffect(()=>{if(!s.current)return;const f=SA({mount:s.current,onHover:a,onFocus:c});return t.current=f,()=>{f.dispose(),t.current=null}},[]),On.jsxs("main",{className:"app-shell",children:[On.jsx("div",{ref:s,className:"scene-host","aria-label":"Mô hình phòng 3D phong cách vũ trụ gaming"}),On.jsxs("div",{className:"topbar",children:[On.jsxs("div",{children:[On.jsx("strong",{children:"Cosmic Gaming Room"}),On.jsx("span",{children:l})]}),On.jsx("button",{type:"button",onClick:()=>t.current?.resetView(),"aria-label":"Đưa góc nhìn về vị trí ban đầu",children:"Reset"})]}),On.jsx("div",{className:"crosshair","aria-hidden":"true"}),i?On.jsxs("aside",{className:"item-card",style:{left:i.x,top:i.y},children:[On.jsxs("header",{children:[On.jsx("strong",{children:i.name}),On.jsx("span",{children:i.price})]}),On.jsx("p",{children:i.use}),i.action?On.jsx("small",{children:i.action}):null]}):null]})}aM.createRoot(document.getElementById("root")).render(On.jsx(QS.StrictMode,{children:On.jsx(MA,{})}));
