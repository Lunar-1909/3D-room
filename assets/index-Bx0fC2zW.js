(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function XS(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ch={exports:{}},Po={};var Hg;function WS(){if(Hg)return Po;Hg=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:a,key:f,ref:l!==void 0?l:null,props:c}}return Po.Fragment=t,Po.jsx=i,Po.jsxs=i,Po}var Gg;function qS(){return Gg||(Gg=1,ch.exports=WS()),ch.exports}var On=qS(),uh={exports:{}},re={};var Vg;function YS(){if(Vg)return re;Vg=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,x={};function v(N,nt,Mt){this.props=N,this.context=nt,this.refs=x,this.updater=Mt||E}v.prototype.isReactComponent={},v.prototype.setState=function(N,nt){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,nt,"setState")},v.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function F(){}F.prototype=v.prototype;function U(N,nt,Mt){this.props=N,this.context=nt,this.refs=x,this.updater=Mt||E}var w=U.prototype=new F;w.constructor=U,A(w,v.prototype),w.isPureReactComponent=!0;var H=Array.isArray;function I(){}var O={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function C(N,nt,Mt){var Ct=Mt.ref;return{$$typeof:s,type:N,key:nt,ref:Ct!==void 0?Ct:null,props:Mt}}function D(N,nt){return C(N.type,nt,N.props)}function z(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function rt(N){var nt={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Mt){return nt[Mt]})}var lt=/\/+/g;function ut(N,nt){return typeof N=="object"&&N!==null&&N.key!=null?rt(""+N.key):nt.toString(36)}function dt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(I,I):(N.status="pending",N.then(function(nt){N.status==="pending"&&(N.status="fulfilled",N.value=nt)},function(nt){N.status==="pending"&&(N.status="rejected",N.reason=nt)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function P(N,nt,Mt,Ct,Q){var _t=typeof N;(_t==="undefined"||_t==="boolean")&&(N=null);var J=!1;if(N===null)J=!0;else switch(_t){case"bigint":case"string":case"number":J=!0;break;case"object":switch(N.$$typeof){case s:case t:J=!0;break;case g:return J=N._init,P(J(N._payload),nt,Mt,Ct,Q)}}if(J)return Q=Q(N),J=Ct===""?"."+ut(N,0):Ct,H(Q)?(Mt="",J!=null&&(Mt=J.replace(lt,"$&/")+"/"),P(Q,nt,Mt,"",function(jt){return jt})):Q!=null&&(z(Q)&&(Q=D(Q,Mt+(Q.key==null||N&&N.key===Q.key?"":(""+Q.key).replace(lt,"$&/")+"/")+J)),nt.push(Q)),1;J=0;var At=Ct===""?".":Ct+":";if(H(N))for(var bt=0;bt<N.length;bt++)Ct=N[bt],_t=At+ut(Ct,bt),J+=P(Ct,nt,Mt,_t,Q);else if(bt=M(N),typeof bt=="function")for(N=bt.call(N),bt=0;!(Ct=N.next()).done;)Ct=Ct.value,_t=At+ut(Ct,bt++),J+=P(Ct,nt,Mt,_t,Q);else if(_t==="object"){if(typeof N.then=="function")return P(dt(N),nt,Mt,Ct,Q);throw nt=String(N),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return J}function K(N,nt,Mt){if(N==null)return N;var Ct=[],Q=0;return P(N,Ct,"","",function(_t){return nt.call(Mt,_t,Q++)}),Ct}function Y(N){if(N._status===-1){var nt=N._result;nt=nt(),nt.then(function(Mt){(N._status===0||N._status===-1)&&(N._status=1,N._result=Mt)},function(Mt){(N._status===0||N._status===-1)&&(N._status=2,N._result=Mt)}),N._status===-1&&(N._status=0,N._result=nt)}if(N._status===1)return N._result.default;throw N._result}var yt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},xt={map:K,forEach:function(N,nt,Mt){K(N,function(){nt.apply(this,arguments)},Mt)},count:function(N){var nt=0;return K(N,function(){nt++}),nt},toArray:function(N){return K(N,function(nt){return nt})||[]},only:function(N){if(!z(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return re.Activity=_,re.Children=xt,re.Component=v,re.Fragment=i,re.Profiler=l,re.PureComponent=U,re.StrictMode=a,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,re.__COMPILER_RUNTIME={__proto__:null,c:function(N){return O.H.useMemoCache(N)}},re.cache=function(N){return function(){return N.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(N,nt,Mt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Ct=A({},N.props),Q=N.key;if(nt!=null)for(_t in nt.key!==void 0&&(Q=""+nt.key),nt)!X.call(nt,_t)||_t==="key"||_t==="__self"||_t==="__source"||_t==="ref"&&nt.ref===void 0||(Ct[_t]=nt[_t]);var _t=arguments.length-2;if(_t===1)Ct.children=Mt;else if(1<_t){for(var J=Array(_t),At=0;At<_t;At++)J[At]=arguments[At+2];Ct.children=J}return C(N.type,Q,Ct)},re.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},re.createElement=function(N,nt,Mt){var Ct,Q={},_t=null;if(nt!=null)for(Ct in nt.key!==void 0&&(_t=""+nt.key),nt)X.call(nt,Ct)&&Ct!=="key"&&Ct!=="__self"&&Ct!=="__source"&&(Q[Ct]=nt[Ct]);var J=arguments.length-2;if(J===1)Q.children=Mt;else if(1<J){for(var At=Array(J),bt=0;bt<J;bt++)At[bt]=arguments[bt+2];Q.children=At}if(N&&N.defaultProps)for(Ct in J=N.defaultProps,J)Q[Ct]===void 0&&(Q[Ct]=J[Ct]);return C(N,_t,Q)},re.createRef=function(){return{current:null}},re.forwardRef=function(N){return{$$typeof:d,render:N}},re.isValidElement=z,re.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:Y}},re.memo=function(N,nt){return{$$typeof:p,type:N,compare:nt===void 0?null:nt}},re.startTransition=function(N){var nt=O.T,Mt={};O.T=Mt;try{var Ct=N(),Q=O.S;Q!==null&&Q(Mt,Ct),typeof Ct=="object"&&Ct!==null&&typeof Ct.then=="function"&&Ct.then(I,yt)}catch(_t){yt(_t)}finally{nt!==null&&Mt.types!==null&&(nt.types=Mt.types),O.T=nt}},re.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},re.use=function(N){return O.H.use(N)},re.useActionState=function(N,nt,Mt){return O.H.useActionState(N,nt,Mt)},re.useCallback=function(N,nt){return O.H.useCallback(N,nt)},re.useContext=function(N){return O.H.useContext(N)},re.useDebugValue=function(){},re.useDeferredValue=function(N,nt){return O.H.useDeferredValue(N,nt)},re.useEffect=function(N,nt){return O.H.useEffect(N,nt)},re.useEffectEvent=function(N){return O.H.useEffectEvent(N)},re.useId=function(){return O.H.useId()},re.useImperativeHandle=function(N,nt,Mt){return O.H.useImperativeHandle(N,nt,Mt)},re.useInsertionEffect=function(N,nt){return O.H.useInsertionEffect(N,nt)},re.useLayoutEffect=function(N,nt){return O.H.useLayoutEffect(N,nt)},re.useMemo=function(N,nt){return O.H.useMemo(N,nt)},re.useOptimistic=function(N,nt){return O.H.useOptimistic(N,nt)},re.useReducer=function(N,nt,Mt){return O.H.useReducer(N,nt,Mt)},re.useRef=function(N){return O.H.useRef(N)},re.useState=function(N){return O.H.useState(N)},re.useSyncExternalStore=function(N,nt,Mt){return O.H.useSyncExternalStore(N,nt,Mt)},re.useTransition=function(){return O.H.useTransition()},re.version="19.2.8",re}var kg;function Fd(){return kg||(kg=1,uh.exports=YS()),uh.exports}var Rs=Fd();const ZS=XS(Rs);var fh={exports:{}},zo={},hh={exports:{}},dh={};var Xg;function jS(){return Xg||(Xg=1,(function(s){function t(P,K){var Y=P.length;P.push(K);t:for(;0<Y;){var yt=Y-1>>>1,xt=P[yt];if(0<l(xt,K))P[yt]=K,P[Y]=xt,Y=yt;else break t}}function i(P){return P.length===0?null:P[0]}function a(P){if(P.length===0)return null;var K=P[0],Y=P.pop();if(Y!==K){P[0]=Y;t:for(var yt=0,xt=P.length,N=xt>>>1;yt<N;){var nt=2*(yt+1)-1,Mt=P[nt],Ct=nt+1,Q=P[Ct];if(0>l(Mt,Y))Ct<xt&&0>l(Q,Mt)?(P[yt]=Q,P[Ct]=Y,yt=Ct):(P[yt]=Mt,P[nt]=Y,yt=nt);else if(Ct<xt&&0>l(Q,Y))P[yt]=Q,P[Ct]=Y,yt=Ct;else break t}}return K}function l(P,K){var Y=P.sortIndex-K.sortIndex;return Y!==0?Y:P.id-K.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var m=[],p=[],g=1,_=null,S=3,M=!1,E=!1,A=!1,x=!1,v=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function w(P){for(var K=i(p);K!==null;){if(K.callback===null)a(p);else if(K.startTime<=P)a(p),K.sortIndex=K.expirationTime,t(m,K);else break;K=i(p)}}function H(P){if(A=!1,w(P),!E)if(i(m)!==null)E=!0,I||(I=!0,rt());else{var K=i(p);K!==null&&dt(H,K.startTime-P)}}var I=!1,O=-1,X=5,C=-1;function D(){return x?!0:!(s.unstable_now()-C<X)}function z(){if(x=!1,I){var P=s.unstable_now();C=P;var K=!0;try{t:{E=!1,A&&(A=!1,F(O),O=-1),M=!0;var Y=S;try{e:{for(w(P),_=i(m);_!==null&&!(_.expirationTime>P&&D());){var yt=_.callback;if(typeof yt=="function"){_.callback=null,S=_.priorityLevel;var xt=yt(_.expirationTime<=P);if(P=s.unstable_now(),typeof xt=="function"){_.callback=xt,w(P),K=!0;break e}_===i(m)&&a(m),w(P)}else a(m);_=i(m)}if(_!==null)K=!0;else{var N=i(p);N!==null&&dt(H,N.startTime-P),K=!1}}break t}finally{_=null,S=Y,M=!1}K=void 0}}finally{K?rt():I=!1}}}var rt;if(typeof U=="function")rt=function(){U(z)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,ut=lt.port2;lt.port1.onmessage=z,rt=function(){ut.postMessage(null)}}else rt=function(){v(z,0)};function dt(P,K){O=v(function(){P(s.unstable_now())},K)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(P){P.callback=null},s.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<P?Math.floor(1e3/P):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_next=function(P){switch(S){case 1:case 2:case 3:var K=3;break;default:K=S}var Y=S;S=K;try{return P()}finally{S=Y}},s.unstable_requestPaint=function(){x=!0},s.unstable_runWithPriority=function(P,K){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Y=S;S=P;try{return K()}finally{S=Y}},s.unstable_scheduleCallback=function(P,K,Y){var yt=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?yt+Y:yt):Y=yt,P){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=Y+xt,P={id:g++,callback:K,priorityLevel:P,startTime:Y,expirationTime:xt,sortIndex:-1},Y>yt?(P.sortIndex=Y,t(p,P),i(m)===null&&P===i(p)&&(A?(F(O),O=-1):A=!0,dt(H,Y-yt))):(P.sortIndex=xt,t(m,P),E||M||(E=!0,I||(I=!0,rt()))),P},s.unstable_shouldYield=D,s.unstable_wrapCallback=function(P){var K=S;return function(){var Y=S;S=K;try{return P.apply(this,arguments)}finally{S=Y}}}})(dh)),dh}var Wg;function KS(){return Wg||(Wg=1,hh.exports=jS()),hh.exports}var ph={exports:{}},Un={};var qg;function QS(){if(qg)return Un;qg=1;var s=Fd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Un.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Un.flushSync=function(m){var p=f.T,g=a.p;try{if(f.T=null,a.p=2,m)return m()}finally{f.T=p,a.p=g,a.d.f()}},Un.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},Un.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Un.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:M}):g==="script"&&a.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Un.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},Un.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);a.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Un.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},Un.requestFormReset=function(m){a.d.r(m)},Un.unstable_batchedUpdates=function(m,p){return m(p)},Un.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Un.useFormStatus=function(){return f.H.useHostTransitionStatus()},Un.version="19.2.8",Un}var Yg;function JS(){if(Yg)return ph.exports;Yg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),ph.exports=QS(),ph.exports}var Zg;function $S(){if(Zg)return zo;Zg=1;var s=KS(),t=Fd(),i=JS();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(a(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(a(188));return n!==e?null:e}for(var r=e,o=n;;){var u=r.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){r=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===r)return m(u),e;if(h===o)return m(u),n;h=h.sibling}throw Error(a(188))}if(r.return!==o.return)r=u,o=h;else{for(var y=!1,b=u.child;b;){if(b===r){y=!0,r=u,o=h;break}if(b===o){y=!0,o=u,r=h;break}b=b.sibling}if(!y){for(b=h.child;b;){if(b===r){y=!0,r=h,o=u;break}if(b===o){y=!0,o=h,r=u;break}b=b.sibling}if(!y)throw Error(a(189))}}if(r.alternate!==o)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),U=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function rt(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var lt=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case v:return"Profiler";case x:return"StrictMode";case H:return"Suspense";case I:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case U:return e.displayName||"Context";case F:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return n=e.displayName||null,n!==null?n:ut(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return ut(e(n))}catch{}}return null}var dt=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},yt=[],xt=-1;function N(e){return{current:e}}function nt(e){0>xt||(e.current=yt[xt],yt[xt]=null,xt--)}function Mt(e,n){xt++,yt[xt]=e.current,e.current=n}var Ct=N(null),Q=N(null),_t=N(null),J=N(null);function At(e,n){switch(Mt(_t,n),Mt(Q,e),Mt(Ct,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?cg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=cg(n),e=ug(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nt(Ct),Mt(Ct,e)}function bt(){nt(Ct),nt(Q),nt(_t)}function jt(e){e.memoizedState!==null&&Mt(J,e);var n=Ct.current,r=ug(n,e.type);n!==r&&(Mt(Q,e),Mt(Ct,r))}function Ie(e){Q.current===e&&(nt(Ct),nt(Q)),J.current===e&&(nt(J),Uo._currentValue=Y)}var ge,G;function be(e){if(ge===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);ge=n&&n[1]||"",G=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ge+e+G}var $t=!1;function Ee(e,n){if(!e||$t)return"";$t=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(ct){var it=ct}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(ct){it=ct}e.call(gt.prototype)}}else{try{throw Error()}catch(ct){it=ct}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(ct){if(ct&&it&&typeof ct.stack=="string")return[ct.stack,it.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),y=h[0],b=h[1];if(y&&b){var B=y.split(`
`),tt=b.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<tt.length&&!tt[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===tt.length)for(o=B.length-1,u=tt.length-1;1<=o&&0<=u&&B[o]!==tt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==tt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==tt[u]){var ht=`
`+B[o].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=o&&0<=u);break}}}finally{$t=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?be(r):""}function Kt(e,n){switch(e.tag){case 26:case 27:case 5:return be(e.type);case 16:return be("Lazy");case 13:return e.child!==n&&n!==null?be("Suspense Fallback"):be("Suspense");case 19:return be("SuspenseList");case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return be("Activity");default:return""}}function Xe(e){try{var n="",r=null;do n+=Kt(e,r),r=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ft=Object.prototype.hasOwnProperty,se=s.unstable_scheduleCallback,tn=s.unstable_cancelCallback,Je=s.unstable_shouldYield,L=s.unstable_requestPaint,T=s.unstable_now,et=s.unstable_getCurrentPriorityLevel,pt=s.unstable_ImmediatePriority,Et=s.unstable_UserBlockingPriority,ft=s.unstable_NormalPriority,Yt=s.unstable_LowPriority,Dt=s.unstable_IdlePriority,Wt=s.log,qt=s.unstable_setDisableYieldValue,Rt=null,Ut=null;function Zt(e){if(typeof Wt=="function"&&qt(e),Ut&&typeof Ut.setStrictMode=="function")try{Ut.setStrictMode(Rt,e)}catch{}}var Bt=Math.clz32?Math.clz32:W,Nt=Math.log,oe=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Nt(e)/oe|0)|0}var wt=256,Lt=262144,It=4194304;function Tt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vt(e,n,r){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~h,o!==0?u=Tt(o):(y&=b,y!==0?u=Tt(y):r||(r=b&~e,r!==0&&(u=Tt(r))))):(b=o&~h,b!==0?u=Tt(b):y!==0?u=Tt(y):r||(r=o&~e,r!==0&&(u=Tt(r)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,r=n&-n,h>=r||h===32&&(r&4194048)!==0)?n:u}function Ht(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ae(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pe(){var e=It;return It<<=1,(It&62914560)===0&&(It=4194304),e}function Ae(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function Pn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function oi(e,n,r,o,u,h){var y=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var b=e.entanglements,B=e.expirationTimes,tt=e.hiddenUpdates;for(r=y&~r;0<r;){var ht=31-Bt(r),gt=1<<ht;b[ht]=0,B[ht]=-1;var it=tt[ht];if(it!==null)for(tt[ht]=null,ht=0;ht<it.length;ht++){var ct=it[ht];ct!==null&&(ct.lane&=-536870913)}r&=~gt}o!==0&&Xs(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(y&~n))}function Xs(e,n,r){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Bt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|r&261930}function Ci(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var o=31-Bt(r),u=1<<o;u&n|e[o]&n&&(e[o]|=n),r&=~u}}function Ur(e,n){var r=n&-n;return r=(r&42)!==0?1:Lr(r),(r&(e.suspendedLanes|n))!==0?0:r}function Lr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Nr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Qa(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:Ng(e.type))}function Ws(e,n){var r=K.p;try{return K.p=e,n()}finally{K.p=r}}var Kn=Math.random().toString(36).slice(2),ln="__reactFiber$"+Kn,Tn="__reactProps$"+Kn,ga="__reactContainer$"+Kn,qs="__reactEvents$"+Kn,nu="__reactListeners$"+Kn,iu="__reactHandles$"+Kn,rl="__reactResources$"+Kn,Ja="__reactMarker$"+Kn;function R(e){delete e[ln],delete e[Tn],delete e[qs],delete e[nu],delete e[iu]}function q(e){var n=e[ln];if(n)return n;for(var r=e.parentNode;r;){if(n=r[ga]||r[ln]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=_g(e);e!==null;){if(r=e[ln])return r;e=_g(e)}return n}e=r,r=e.parentNode}return null}function at(e){if(e=e[ln]||e[ga]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function st(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function Z(e){var n=e[rl];return n||(n=e[rl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function St(e){e[Ja]=!0}var Ot=new Set,Vt={};function zt(e,n){Qt(e,n),Qt(e+"Capture",n)}function Qt(e,n){for(Vt[e]=n,e=0;e<n.length;e++)Ot.add(n[e])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jt={},de={};function Le(e){return Ft.call(de,e)?!0:Ft.call(Jt,e)?!1:ie.test(e)?de[e]=!0:(Jt[e]=!0,!1)}function We(e,n,r){if(Le(n))if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+r)}}function Ne(e,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+r)}}function _e(e,n,r,o){if(o===null)e.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(n,r,""+o)}}function kt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ye(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Re(e,n,r){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){r=""+y,h.call(this,y)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return r},setValue:function(y){r=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function bn(e){if(!e._valueTracker){var n=Ye(e)?"checked":"value";e._valueTracker=Re(e,n,""+e[n])}}function Vi(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return e&&(o=Ye(e)?e.checked?"true":"false":e.value),e=o,e!==r?(n.setValue(e),!0):!1}function Sn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var $a=/[\n"\\]/g;function Se(e){return e.replace($a,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Dn(e,n,r,o,u,h,y,b){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+kt(n)):e.value!==""+kt(n)&&(e.value=""+kt(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?pn(e,y,kt(n)):r!=null?pn(e,y,kt(r)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+kt(b):e.removeAttribute("name")}function zn(e,n,r,o,u,h,y,b){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||r!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){bn(e);return}r=r!=null?""+kt(r):"",n=n!=null?""+kt(n):r,b||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),bn(e)}function pn(e,n,r){n==="number"&&Sn(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function rn(e,n,r,o){if(e=e.options,n){n={};for(var u=0;u<r.length;u++)n["$"+r[u]]=!0;for(r=0;r<e.length;r++)u=n.hasOwnProperty("$"+e[r].value),e[r].selected!==u&&(e[r].selected=u),u&&o&&(e[r].defaultSelected=!0)}else{for(r=""+kt(r),n=null,u=0;u<e.length;u++){if(e[u].value===r){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Or(e,n,r){if(n!=null&&(n=""+kt(n),n!==e.value&&(e.value=n),r==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=r!=null?""+kt(r):""}function Di(e,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(a(92));if(dt(o)){if(1<o.length)throw Error(a(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=kt(n),e.defaultValue=r,o=e.textContent,o===r&&o!==""&&o!==null&&(e.value=o),bn(e)}function Pr(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var Fv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sp(e,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,r):typeof r!="number"||r===0||Fv.has(n)?n==="float"?e.cssFloat=r:e[n]=(""+r).trim():e[n]=r+"px"}function op(e,n,r){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&r[u]!==o&&sp(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&sp(e,h,n[h])}function au(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Gv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sl(e){return Gv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ki(){}var ru=null;function su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zr=null,Br=null;function lp(e){var n=at(e);if(n&&(e=n.stateNode)){var r=e[Tn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Dn(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Se(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==e&&o.form===e.form){var u=o[Tn]||null;if(!u)throw Error(a(90));Dn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===e.form&&Vi(o)}break t;case"textarea":Or(e,r.value,r.defaultValue);break t;case"select":n=r.value,n!=null&&rn(e,!!r.multiple,n,!1)}}}var ou=!1;function cp(e,n,r){if(ou)return e(n,r);ou=!0;try{var o=e(n);return o}finally{if(ou=!1,(zr!==null||Br!==null)&&(Yl(),zr&&(n=zr,e=Br,Br=zr=null,lp(n),e)))for(n=0;n<e.length;n++)lp(e[n])}}function Ys(e,n){var r=e.stateNode;if(r===null)return null;var o=r[Tn]||null;if(o===null)return null;r=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,n,typeof r));return r}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lu=!1;if(Xi)try{var Zs={};Object.defineProperty(Zs,"passive",{get:function(){lu=!0}}),window.addEventListener("test",Zs,Zs),window.removeEventListener("test",Zs,Zs)}catch{lu=!1}var _a=null,cu=null,ol=null;function up(){if(ol)return ol;var e,n=cu,r=n.length,o,u="value"in _a?_a.value:_a.textContent,h=u.length;for(e=0;e<r&&n[e]===u[e];e++);var y=r-e;for(o=1;o<=y&&n[r-o]===u[h-o];o++);return ol=u.slice(e,1<o?1-o:void 0)}function ll(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function cl(){return!0}function fp(){return!1}function Gn(e){function n(r,o,u,h,y){this._reactName=r,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(r=e[b],this[b]=r?r(h):h[b]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?cl:fp,this.isPropagationStopped=fp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),n}var tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ul=Gn(tr),js=_({},tr,{view:0,detail:0}),Vv=Gn(js),uu,fu,Ks,fl=_({},js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:du,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ks&&(Ks&&e.type==="mousemove"?(uu=e.screenX-Ks.screenX,fu=e.screenY-Ks.screenY):fu=uu=0,Ks=e),uu)},movementY:function(e){return"movementY"in e?e.movementY:fu}}),hp=Gn(fl),kv=_({},fl,{dataTransfer:0}),Xv=Gn(kv),Wv=_({},js,{relatedTarget:0}),hu=Gn(Wv),qv=_({},tr,{animationName:0,elapsedTime:0,pseudoElement:0}),Yv=Gn(qv),Zv=_({},tr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jv=Gn(Zv),Kv=_({},tr,{data:0}),dp=Gn(Kv),Qv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$v={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ty(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=$v[e])?!!n[e]:!1}function du(){return ty}var ey=_({},js,{key:function(e){if(e.key){var n=Qv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ll(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:du,charCode:function(e){return e.type==="keypress"?ll(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ll(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ny=Gn(ey),iy=_({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pp=Gn(iy),ay=_({},js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:du}),ry=Gn(ay),sy=_({},tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),oy=Gn(sy),ly=_({},fl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cy=Gn(ly),uy=_({},tr,{newState:0,oldState:0}),fy=Gn(uy),hy=[9,13,27,32],pu=Xi&&"CompositionEvent"in window,Qs=null;Xi&&"documentMode"in document&&(Qs=document.documentMode);var dy=Xi&&"TextEvent"in window&&!Qs,mp=Xi&&(!pu||Qs&&8<Qs&&11>=Qs),gp=" ",_p=!1;function vp(e,n){switch(e){case"keyup":return hy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ir=!1;function py(e,n){switch(e){case"compositionend":return yp(n);case"keypress":return n.which!==32?null:(_p=!0,gp);case"textInput":return e=n.data,e===gp&&_p?null:e;default:return null}}function my(e,n){if(Ir)return e==="compositionend"||!pu&&vp(e,n)?(e=up(),ol=cu=_a=null,Ir=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return mp&&n.locale!=="ko"?null:n.data;default:return null}}var gy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!gy[e.type]:n==="textarea"}function Mp(e,n,r,o){zr?Br?Br.push(o):Br=[o]:zr=o,n=tc(n,"onChange"),0<n.length&&(r=new ul("onChange","change",null,r,o),e.push({event:r,listeners:n}))}var Js=null,$s=null;function _y(e){ig(e,0)}function hl(e){var n=st(e);if(Vi(n))return e}function xp(e,n){if(e==="change")return n}var Ep=!1;if(Xi){var mu;if(Xi){var gu="oninput"in document;if(!gu){var Tp=document.createElement("div");Tp.setAttribute("oninput","return;"),gu=typeof Tp.oninput=="function"}mu=gu}else mu=!1;Ep=mu&&(!document.documentMode||9<document.documentMode)}function bp(){Js&&(Js.detachEvent("onpropertychange",Ap),$s=Js=null)}function Ap(e){if(e.propertyName==="value"&&hl($s)){var n=[];Mp(n,$s,e,su(e)),cp(_y,n)}}function vy(e,n,r){e==="focusin"?(bp(),Js=n,$s=r,Js.attachEvent("onpropertychange",Ap)):e==="focusout"&&bp()}function yy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hl($s)}function Sy(e,n){if(e==="click")return hl(n)}function My(e,n){if(e==="input"||e==="change")return hl(n)}function xy(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Qn=typeof Object.is=="function"?Object.is:xy;function to(e,n){if(Qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var u=r[o];if(!Ft.call(n,u)||!Qn(e[u],n[u]))return!1}return!0}function Rp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wp(e,n){var r=Rp(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=n&&o>=n)return{node:r,offset:n-e};e=o}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=Rp(r)}}function Cp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Cp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Dp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Sn(e.document);n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=Sn(e.document)}return n}function _u(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Ey=Xi&&"documentMode"in document&&11>=document.documentMode,Fr=null,vu=null,eo=null,yu=!1;function Up(e,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;yu||Fr==null||Fr!==Sn(o)||(o=Fr,"selectionStart"in o&&_u(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),eo&&to(eo,o)||(eo=o,o=tc(vu,"onSelect"),0<o.length&&(n=new ul("onSelect","select",null,n,r),e.push({event:n,listeners:o}),n.target=Fr)))}function er(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var Hr={animationend:er("Animation","AnimationEnd"),animationiteration:er("Animation","AnimationIteration"),animationstart:er("Animation","AnimationStart"),transitionrun:er("Transition","TransitionRun"),transitionstart:er("Transition","TransitionStart"),transitioncancel:er("Transition","TransitionCancel"),transitionend:er("Transition","TransitionEnd")},Su={},Lp={};Xi&&(Lp=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function nr(e){if(Su[e])return Su[e];if(!Hr[e])return e;var n=Hr[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in Lp)return Su[e]=n[r];return e}var Np=nr("animationend"),Op=nr("animationiteration"),Pp=nr("animationstart"),Ty=nr("transitionrun"),by=nr("transitionstart"),Ay=nr("transitioncancel"),zp=nr("transitionend"),Bp=new Map,Mu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mu.push("scrollEnd");function Si(e,n){Bp.set(e,n),zt(n,[e])}var dl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},li=[],Gr=0,xu=0;function pl(){for(var e=Gr,n=xu=Gr=0;n<e;){var r=li[n];li[n++]=null;var o=li[n];li[n++]=null;var u=li[n];li[n++]=null;var h=li[n];if(li[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}h!==0&&Ip(r,u,h)}}function ml(e,n,r,o){li[Gr++]=e,li[Gr++]=n,li[Gr++]=r,li[Gr++]=o,xu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Eu(e,n,r,o){return ml(e,n,r,o),gl(e)}function ir(e,n){return ml(e,null,null,n),gl(e)}function Ip(e,n,r){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r);for(var u=!1,h=e.return;h!==null;)h.childLanes|=r,o=h.alternate,o!==null&&(o.childLanes|=r),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Bt(r),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=r|536870912),h):null}function gl(e){if(50<To)throw To=0,Nf=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Vr={};function Ry(e,n,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(e,n,r,o){return new Ry(e,n,r,o)}function Tu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wi(e,n){var r=e.alternate;return r===null?(r=Jn(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function Fp(e,n){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,n=r.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function _l(e,n,r,o,u,h){var y=0;if(o=e,typeof e=="function")Tu(e)&&(y=1);else if(typeof e=="string")y=LS(e,r,Ct.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=Jn(31,r,n,u),e.elementType=C,e.lanes=h,e;case A:return ar(r.children,u,h,n);case x:y=8,u|=24;break;case v:return e=Jn(12,r,n,u|2),e.elementType=v,e.lanes=h,e;case H:return e=Jn(13,r,n,u),e.elementType=H,e.lanes=h,e;case I:return e=Jn(19,r,n,u),e.elementType=I,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:y=10;break t;case F:y=9;break t;case w:y=11;break t;case O:y=14;break t;case X:y=16,o=null;break t}y=29,r=Error(a(130,e===null?"null":typeof e,"")),o=null}return n=Jn(y,r,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function ar(e,n,r,o){return e=Jn(7,e,o,n),e.lanes=r,e}function bu(e,n,r){return e=Jn(6,e,null,n),e.lanes=r,e}function Hp(e){var n=Jn(18,null,null,0);return n.stateNode=e,n}function Au(e,n,r){return n=Jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Gp=new WeakMap;function ci(e,n){if(typeof e=="object"&&e!==null){var r=Gp.get(e);return r!==void 0?r:(n={value:e,source:n,stack:Xe(n)},Gp.set(e,n),n)}return{value:e,source:n,stack:Xe(n)}}var kr=[],Xr=0,vl=null,no=0,ui=[],fi=0,va=null,Ui=1,Li="";function qi(e,n){kr[Xr++]=no,kr[Xr++]=vl,vl=e,no=n}function Vp(e,n,r){ui[fi++]=Ui,ui[fi++]=Li,ui[fi++]=va,va=e;var o=Ui;e=Li;var u=32-Bt(o)-1;o&=~(1<<u),r+=1;var h=32-Bt(n)+u;if(30<h){var y=u-u%5;h=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Ui=1<<32-Bt(n)+u|r<<u|o,Li=h+e}else Ui=1<<h|r<<u|o,Li=e}function Ru(e){e.return!==null&&(qi(e,1),Vp(e,1,0))}function wu(e){for(;e===vl;)vl=kr[--Xr],kr[Xr]=null,no=kr[--Xr],kr[Xr]=null;for(;e===va;)va=ui[--fi],ui[fi]=null,Li=ui[--fi],ui[fi]=null,Ui=ui[--fi],ui[fi]=null}function kp(e,n){ui[fi++]=Ui,ui[fi++]=Li,ui[fi++]=va,Ui=n.id,Li=n.overflow,va=e}var An=null,Ze=null,Te=!1,ya=null,hi=!1,Cu=Error(a(519));function Sa(e){var n=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw io(ci(n,e)),Cu}function Xp(e){var n=e.stateNode,r=e.type,o=e.memoizedProps;switch(n[ln]=e,n[Tn]=o,r){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(r=0;r<Ao.length;r++)ye(Ao[r],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":ye("invalid",n),zn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ye("invalid",n);break;case"textarea":ye("invalid",n),Di(n,o.value,o.defaultValue,o.children)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||og(n.textContent,r)?(o.popover!=null&&(ye("beforetoggle",n),ye("toggle",n)),o.onScroll!=null&&ye("scroll",n),o.onScrollEnd!=null&&ye("scrollend",n),o.onClick!=null&&(n.onclick=ki),n=!0):n=!1,n||Sa(e,!0)}function Wp(e){for(An=e.return;An;)switch(An.tag){case 5:case 31:case 13:hi=!1;return;case 27:case 3:hi=!0;return;default:An=An.return}}function Wr(e){if(e!==An)return!1;if(!Te)return Wp(e),Te=!0,!1;var n=e.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Zf(e.type,e.memoizedProps)),r=!r),r&&Ze&&Sa(e),Wp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ze=gg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ze=gg(e)}else n===27?(n=Ze,Oa(e.type)?(e=$f,$f=null,Ze=e):Ze=n):Ze=An?pi(e.stateNode.nextSibling):null;return!0}function rr(){Ze=An=null,Te=!1}function Du(){var e=ya;return e!==null&&(Wn===null?Wn=e:Wn.push.apply(Wn,e),ya=null),e}function io(e){ya===null?ya=[e]:ya.push(e)}var Uu=N(null),sr=null,Yi=null;function Ma(e,n,r){Mt(Uu,n._currentValue),n._currentValue=r}function Zi(e){e._currentValue=Uu.current,nt(Uu)}function Lu(e,n,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===r)break;e=e.return}}function Nu(e,n,r,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var y=u.child;h=h.firstContext;t:for(;h!==null;){var b=h;h=u;for(var B=0;B<n.length;B++)if(b.context===n[B]){h.lanes|=r,b=h.alternate,b!==null&&(b.lanes|=r),Lu(h.return,r,e),o||(y=null);break t}h=b.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(a(341));y.lanes|=r,h=y.alternate,h!==null&&(h.lanes|=r),Lu(y,r,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function qr(e,n,r,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(a(387));if(y=y.memoizedProps,y!==null){var b=u.type;Qn(u.pendingProps.value,y.value)||(e!==null?e.push(b):e=[b])}}else if(u===J.current){if(y=u.alternate,y===null)throw Error(a(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Uo):e=[Uo])}u=u.return}e!==null&&Nu(n,e,r,o),n.flags|=262144}function yl(e){for(e=e.firstContext;e!==null;){if(!Qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function or(e){sr=e,Yi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return qp(sr,e)}function Sl(e,n){return sr===null&&or(e),qp(e,n)}function qp(e,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},Yi===null){if(e===null)throw Error(a(308));Yi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Yi=Yi.next=n;return r}var wy=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(r,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(r){return r()})}},Cy=s.unstable_scheduleCallback,Dy=s.unstable_NormalPriority,cn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ou(){return{controller:new wy,data:new Map,refCount:0}}function ao(e){e.refCount--,e.refCount===0&&Cy(Dy,function(){e.controller.abort()})}var ro=null,Pu=0,Yr=0,Zr=null;function Uy(e,n){if(ro===null){var r=ro=[];Pu=0,Yr=Ff(),Zr={status:"pending",value:void 0,then:function(o){r.push(o)}}}return Pu++,n.then(Yp,Yp),n}function Yp(){if(--Pu===0&&ro!==null){Zr!==null&&(Zr.status="fulfilled");var e=ro;ro=null,Yr=0,Zr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Ly(e,n){var r=[],o={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<r.length;u++)(0,r[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),o}var Zp=P.S;P.S=function(e,n){U0=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Uy(e,n),Zp!==null&&Zp(e,n)};var lr=N(null);function zu(){var e=lr.current;return e!==null?e:qe.pooledCache}function Ml(e,n){n===null?Mt(lr,lr.current):Mt(lr,n.pool)}function jp(){var e=zu();return e===null?null:{parent:cn._currentValue,pool:e}}var jr=Error(a(460)),Bu=Error(a(474)),xl=Error(a(542)),El={then:function(){}};function Kp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Qp(e,n,r){switch(r=e[r],r===void 0?e.push(n):r!==n&&(n.then(ki,ki),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,$p(e),e;default:if(typeof n.status=="string")n.then(ki,ki);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,$p(e),e}throw ur=n,jr}}function cr(e){try{var n=e._init;return n(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(ur=r,jr):r}}var ur=null;function Jp(){if(ur===null)throw Error(a(459));var e=ur;return ur=null,e}function $p(e){if(e===jr||e===xl)throw Error(a(483))}var Kr=null,so=0;function Tl(e){var n=so;return so+=1,Kr===null&&(Kr=[]),Qp(Kr,e,n)}function oo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function bl(e,n){throw n.$$typeof===S?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function tm(e){function n(j,k){if(e){var $=j.deletions;$===null?(j.deletions=[k],j.flags|=16):$.push(k)}}function r(j,k){if(!e)return null;for(;k!==null;)n(j,k),k=k.sibling;return null}function o(j){for(var k=new Map;j!==null;)j.key!==null?k.set(j.key,j):k.set(j.index,j),j=j.sibling;return k}function u(j,k){return j=Wi(j,k),j.index=0,j.sibling=null,j}function h(j,k,$){return j.index=$,e?($=j.alternate,$!==null?($=$.index,$<k?(j.flags|=67108866,k):$):(j.flags|=67108866,k)):(j.flags|=1048576,k)}function y(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function b(j,k,$,mt){return k===null||k.tag!==6?(k=bu($,j.mode,mt),k.return=j,k):(k=u(k,$),k.return=j,k)}function B(j,k,$,mt){var te=$.type;return te===A?ht(j,k,$.props.children,mt,$.key):k!==null&&(k.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===X&&cr(te)===k.type)?(k=u(k,$.props),oo(k,$),k.return=j,k):(k=_l($.type,$.key,$.props,null,j.mode,mt),oo(k,$),k.return=j,k)}function tt(j,k,$,mt){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=Au($,j.mode,mt),k.return=j,k):(k=u(k,$.children||[]),k.return=j,k)}function ht(j,k,$,mt,te){return k===null||k.tag!==7?(k=ar($,j.mode,mt,te),k.return=j,k):(k=u(k,$),k.return=j,k)}function gt(j,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=bu(""+k,j.mode,$),k.return=j,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return $=_l(k.type,k.key,k.props,null,j.mode,$),oo($,k),$.return=j,$;case E:return k=Au(k,j.mode,$),k.return=j,k;case X:return k=cr(k),gt(j,k,$)}if(dt(k)||rt(k))return k=ar(k,j.mode,$,null),k.return=j,k;if(typeof k.then=="function")return gt(j,Tl(k),$);if(k.$$typeof===U)return gt(j,Sl(j,k),$);bl(j,k)}return null}function it(j,k,$,mt){var te=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return te!==null?null:b(j,k,""+$,mt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case M:return $.key===te?B(j,k,$,mt):null;case E:return $.key===te?tt(j,k,$,mt):null;case X:return $=cr($),it(j,k,$,mt)}if(dt($)||rt($))return te!==null?null:ht(j,k,$,mt,null);if(typeof $.then=="function")return it(j,k,Tl($),mt);if($.$$typeof===U)return it(j,k,Sl(j,$),mt);bl(j,$)}return null}function ct(j,k,$,mt,te){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return j=j.get($)||null,b(k,j,""+mt,te);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case M:return j=j.get(mt.key===null?$:mt.key)||null,B(k,j,mt,te);case E:return j=j.get(mt.key===null?$:mt.key)||null,tt(k,j,mt,te);case X:return mt=cr(mt),ct(j,k,$,mt,te)}if(dt(mt)||rt(mt))return j=j.get($)||null,ht(k,j,mt,te,null);if(typeof mt.then=="function")return ct(j,k,$,Tl(mt),te);if(mt.$$typeof===U)return ct(j,k,$,Sl(k,mt),te);bl(k,mt)}return null}function Gt(j,k,$,mt){for(var te=null,we=null,Xt=k,ue=k=0,xe=null;Xt!==null&&ue<$.length;ue++){Xt.index>ue?(xe=Xt,Xt=null):xe=Xt.sibling;var Ce=it(j,Xt,$[ue],mt);if(Ce===null){Xt===null&&(Xt=xe);break}e&&Xt&&Ce.alternate===null&&n(j,Xt),k=h(Ce,k,ue),we===null?te=Ce:we.sibling=Ce,we=Ce,Xt=xe}if(ue===$.length)return r(j,Xt),Te&&qi(j,ue),te;if(Xt===null){for(;ue<$.length;ue++)Xt=gt(j,$[ue],mt),Xt!==null&&(k=h(Xt,k,ue),we===null?te=Xt:we.sibling=Xt,we=Xt);return Te&&qi(j,ue),te}for(Xt=o(Xt);ue<$.length;ue++)xe=ct(Xt,j,ue,$[ue],mt),xe!==null&&(e&&xe.alternate!==null&&Xt.delete(xe.key===null?ue:xe.key),k=h(xe,k,ue),we===null?te=xe:we.sibling=xe,we=xe);return e&&Xt.forEach(function(Fa){return n(j,Fa)}),Te&&qi(j,ue),te}function ne(j,k,$,mt){if($==null)throw Error(a(151));for(var te=null,we=null,Xt=k,ue=k=0,xe=null,Ce=$.next();Xt!==null&&!Ce.done;ue++,Ce=$.next()){Xt.index>ue?(xe=Xt,Xt=null):xe=Xt.sibling;var Fa=it(j,Xt,Ce.value,mt);if(Fa===null){Xt===null&&(Xt=xe);break}e&&Xt&&Fa.alternate===null&&n(j,Xt),k=h(Fa,k,ue),we===null?te=Fa:we.sibling=Fa,we=Fa,Xt=xe}if(Ce.done)return r(j,Xt),Te&&qi(j,ue),te;if(Xt===null){for(;!Ce.done;ue++,Ce=$.next())Ce=gt(j,Ce.value,mt),Ce!==null&&(k=h(Ce,k,ue),we===null?te=Ce:we.sibling=Ce,we=Ce);return Te&&qi(j,ue),te}for(Xt=o(Xt);!Ce.done;ue++,Ce=$.next())Ce=ct(Xt,j,ue,Ce.value,mt),Ce!==null&&(e&&Ce.alternate!==null&&Xt.delete(Ce.key===null?ue:Ce.key),k=h(Ce,k,ue),we===null?te=Ce:we.sibling=Ce,we=Ce);return e&&Xt.forEach(function(kS){return n(j,kS)}),Te&&qi(j,ue),te}function Ge(j,k,$,mt){if(typeof $=="object"&&$!==null&&$.type===A&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case M:t:{for(var te=$.key;k!==null;){if(k.key===te){if(te=$.type,te===A){if(k.tag===7){r(j,k.sibling),mt=u(k,$.props.children),mt.return=j,j=mt;break t}}else if(k.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===X&&cr(te)===k.type){r(j,k.sibling),mt=u(k,$.props),oo(mt,$),mt.return=j,j=mt;break t}r(j,k);break}else n(j,k);k=k.sibling}$.type===A?(mt=ar($.props.children,j.mode,mt,$.key),mt.return=j,j=mt):(mt=_l($.type,$.key,$.props,null,j.mode,mt),oo(mt,$),mt.return=j,j=mt)}return y(j);case E:t:{for(te=$.key;k!==null;){if(k.key===te)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){r(j,k.sibling),mt=u(k,$.children||[]),mt.return=j,j=mt;break t}else{r(j,k);break}else n(j,k);k=k.sibling}mt=Au($,j.mode,mt),mt.return=j,j=mt}return y(j);case X:return $=cr($),Ge(j,k,$,mt)}if(dt($))return Gt(j,k,$,mt);if(rt($)){if(te=rt($),typeof te!="function")throw Error(a(150));return $=te.call($),ne(j,k,$,mt)}if(typeof $.then=="function")return Ge(j,k,Tl($),mt);if($.$$typeof===U)return Ge(j,k,Sl(j,$),mt);bl(j,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(r(j,k.sibling),mt=u(k,$),mt.return=j,j=mt):(r(j,k),mt=bu($,j.mode,mt),mt.return=j,j=mt),y(j)):r(j,k)}return function(j,k,$,mt){try{so=0;var te=Ge(j,k,$,mt);return Kr=null,te}catch(Xt){if(Xt===jr||Xt===xl)throw Xt;var we=Jn(29,Xt,null,j.mode);return we.lanes=mt,we.return=j,we}}}var fr=tm(!0),em=tm(!1),xa=!1;function Iu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ea(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ta(e,n,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ue&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=gl(e),Ip(e,null,r),n}return ml(e,o,n,r),gl(e)}function lo(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,r|=o,n.lanes=r,Ci(e,r)}}function Hu(e,n){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var u=null,h=null;if(r=r.firstBaseUpdate,r!==null){do{var y={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};h===null?u=h=y:h=h.next=y,r=r.next}while(r!==null);h===null?u=h=n:h=h.next=n}else u=h=n;r={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}var Gu=!1;function co(){if(Gu){var e=Zr;if(e!==null)throw e}}function uo(e,n,r,o){Gu=!1;var u=e.updateQueue;xa=!1;var h=u.firstBaseUpdate,y=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var B=b,tt=B.next;B.next=null,y===null?h=tt:y.next=tt,y=B;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,b=ht.lastBaseUpdate,b!==y&&(b===null?ht.firstBaseUpdate=tt:b.next=tt,ht.lastBaseUpdate=B))}if(h!==null){var gt=u.baseState;y=0,ht=tt=B=null,b=h;do{var it=b.lane&-536870913,ct=it!==b.lane;if(ct?(Me&it)===it:(o&it)===it){it!==0&&it===Yr&&(Gu=!0),ht!==null&&(ht=ht.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Gt=e,ne=b;it=n;var Ge=r;switch(ne.tag){case 1:if(Gt=ne.payload,typeof Gt=="function"){gt=Gt.call(Ge,gt,it);break t}gt=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=ne.payload,it=typeof Gt=="function"?Gt.call(Ge,gt,it):Gt,it==null)break t;gt=_({},gt,it);break t;case 2:xa=!0}}it=b.callback,it!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[it]:ct.push(it))}else ct={lane:it,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ht===null?(tt=ht=ct,B=gt):ht=ht.next=ct,y|=it;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;ct=b,b=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);ht===null&&(B=gt),u.baseState=B,u.firstBaseUpdate=tt,u.lastBaseUpdate=ht,h===null&&(u.shared.lanes=0),Ca|=y,e.lanes=y,e.memoizedState=gt}}function nm(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function im(e,n){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)nm(r[e],n)}var Qr=N(null),Al=N(0);function am(e,n){e=ia,Mt(Al,e),Mt(Qr,n),ia=e|n.baseLanes}function Vu(){Mt(Al,ia),Mt(Qr,Qr.current)}function ku(){ia=Al.current,nt(Qr),nt(Al)}var $n=N(null),di=null;function ba(e){var n=e.alternate;Mt(sn,sn.current&1),Mt($n,e),di===null&&(n===null||Qr.current!==null||n.memoizedState!==null)&&(di=e)}function Xu(e){Mt(sn,sn.current),Mt($n,e),di===null&&(di=e)}function rm(e){e.tag===22?(Mt(sn,sn.current),Mt($n,e),di===null&&(di=e)):Aa()}function Aa(){Mt(sn,sn.current),Mt($n,$n.current)}function ti(e){nt($n),di===e&&(di=null),nt(sn)}var sn=N(0);function Rl(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Qf(r)||Jf(r)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ji=0,ce=null,Fe=null,un=null,wl=!1,Jr=!1,hr=!1,Cl=0,fo=0,$r=null,Ny=0;function en(){throw Error(a(321))}function Wu(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!Qn(e[r],n[r]))return!1;return!0}function qu(e,n,r,o,u,h){return ji=h,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?Vm:lf,hr=!1,h=r(o,u),hr=!1,Jr&&(h=om(n,r,o,u)),sm(e),h}function sm(e){P.H=mo;var n=Fe!==null&&Fe.next!==null;if(ji=0,un=Fe=ce=null,wl=!1,fo=0,$r=null,n)throw Error(a(300));e===null||fn||(e=e.dependencies,e!==null&&yl(e)&&(fn=!0))}function om(e,n,r,o){ce=e;var u=0;do{if(Jr&&($r=null),fo=0,Jr=!1,25<=u)throw Error(a(301));if(u+=1,un=Fe=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}P.H=km,h=n(r,o)}while(Jr);return h}function Oy(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?ho(n):n,e=e.useState()[0],(Fe!==null?Fe.memoizedState:null)!==e&&(ce.flags|=1024),n}function Yu(){var e=Cl!==0;return Cl=0,e}function Zu(e,n,r){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r}function ju(e){if(wl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}wl=!1}ji=0,un=Fe=ce=null,Jr=!1,fo=Cl=0,$r=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?ce.memoizedState=un=e:un=un.next=e,un}function on(){if(Fe===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var n=un===null?ce.memoizedState:un.next;if(n!==null)un=n,Fe=e;else{if(e===null)throw ce.alternate===null?Error(a(467)):Error(a(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},un===null?ce.memoizedState=un=e:un=un.next=e}return un}function Dl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ho(e){var n=fo;return fo+=1,$r===null&&($r=[]),e=Qp($r,e,n),n=ce,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Vm:lf),e}function Ul(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ho(e);if(e.$$typeof===U)return Rn(e)}throw Error(a(438,String(e)))}function Ku(e){var n=null,r=ce.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=ce.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=Dl(),ce.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(e),o=0;o<e;o++)r[o]=D;return n.index++,r}function Ki(e,n){return typeof n=="function"?n(e):n}function Ll(e){var n=on();return Qu(n,Fe,e)}function Qu(e,n,r){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=r;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var y=u.next;u.next=h.next,h.next=y}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var b=y=null,B=null,tt=n,ht=!1;do{var gt=tt.lane&-536870913;if(gt!==tt.lane?(Me&gt)===gt:(ji&gt)===gt){var it=tt.revertLane;if(it===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),gt===Yr&&(ht=!0);else if((ji&it)===it){tt=tt.next,it===Yr&&(ht=!0);continue}else gt={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},B===null?(b=B=gt,y=h):B=B.next=gt,ce.lanes|=it,Ca|=it;gt=tt.action,hr&&r(h,gt),h=tt.hasEagerState?tt.eagerState:r(h,gt)}else it={lane:gt,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},B===null?(b=B=it,y=h):B=B.next=it,ce.lanes|=gt,Ca|=gt;tt=tt.next}while(tt!==null&&tt!==n);if(B===null?y=h:B.next=b,!Qn(h,e.memoizedState)&&(fn=!0,ht&&(r=Zr,r!==null)))throw r;e.memoizedState=h,e.baseState=y,e.baseQueue=B,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Ju(e){var n=on(),r=n.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var o=r.dispatch,u=r.pending,h=n.memoizedState;if(u!==null){r.pending=null;var y=u=u.next;do h=e(h,y.action),y=y.next;while(y!==u);Qn(h,n.memoizedState)||(fn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),r.lastRenderedState=h}return[h,o]}function lm(e,n,r){var o=ce,u=on(),h=Te;if(h){if(r===void 0)throw Error(a(407));r=r()}else r=n();var y=!Qn((Fe||u).memoizedState,r);if(y&&(u.memoizedState=r,fn=!0),u=u.queue,ef(fm.bind(null,o,u,e),[e]),u.getSnapshot!==n||y||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,ts(9,{destroy:void 0},um.bind(null,o,u,r,n),null),qe===null)throw Error(a(349));h||(ji&127)!==0||cm(o,n,r)}return r}function cm(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=ce.updateQueue,n===null?(n=Dl(),ce.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function um(e,n,r,o){n.value=r,n.getSnapshot=o,hm(n)&&dm(e)}function fm(e,n,r){return r(function(){hm(n)&&dm(e)})}function hm(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!Qn(e,r)}catch{return!0}}function dm(e){var n=ir(e,2);n!==null&&qn(n,e,2)}function $u(e){var n=Bn();if(typeof e=="function"){var r=e;if(e=r(),hr){Zt(!0);try{r()}finally{Zt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:e},n}function pm(e,n,r,o){return e.baseState=r,Qu(e,Fe,typeof o=="function"?o:Ki)}function Py(e,n,r,o,u){if(Pl(e))throw Error(a(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){h.listeners.push(y)}};P.T!==null?r(!0):h.isTransition=!1,o(h),r=n.pending,r===null?(h.next=n.pending=h,mm(n,h)):(h.next=r.next,n.pending=r.next=h)}}function mm(e,n){var r=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=P.T,y={};P.T=y;try{var b=r(u,o),B=P.S;B!==null&&B(y,b),gm(e,n,b)}catch(tt){tf(e,n,tt)}finally{h!==null&&y.types!==null&&(h.types=y.types),P.T=h}}else try{h=r(u,o),gm(e,n,h)}catch(tt){tf(e,n,tt)}}function gm(e,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){_m(e,n,o)},function(o){return tf(e,n,o)}):_m(e,n,r)}function _m(e,n,r){n.status="fulfilled",n.value=r,vm(n),e.state=r,n=e.pending,n!==null&&(r=n.next,r===n?e.pending=null:(r=r.next,n.next=r,mm(e,r)))}function tf(e,n,r){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,vm(n),n=n.next;while(n!==o)}e.action=null}function vm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function ym(e,n){return n}function Sm(e,n){if(Te){var r=qe.formState;if(r!==null){t:{var o=ce;if(Te){if(Ze){e:{for(var u=Ze,h=hi;u.nodeType!==8;){if(!h){u=null;break e}if(u=pi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Ze=pi(u.nextSibling),o=u.data==="F!";break t}}Sa(o)}o=!1}o&&(n=r[0])}}return r=Bn(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ym,lastRenderedState:n},r.queue=o,r=Fm.bind(null,ce,o),o.dispatch=r,o=$u(!1),h=of.bind(null,ce,!1,o.queue),o=Bn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,r=Py.bind(null,ce,u,h,r),u.dispatch=r,o.memoizedState=e,[n,r,!1]}function Mm(e){var n=on();return xm(n,Fe,e)}function xm(e,n,r){if(n=Qu(e,n,ym)[0],e=Ll(Ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ho(n)}catch(y){throw y===jr?xl:y}else o=n;n=on();var u=n.queue,h=u.dispatch;return r!==n.memoizedState&&(ce.flags|=2048,ts(9,{destroy:void 0},zy.bind(null,u,r),null)),[o,h,e]}function zy(e,n){e.action=n}function Em(e){var n=on(),r=Fe;if(r!==null)return xm(n,r,e);on(),n=n.memoizedState,r=on();var o=r.queue.dispatch;return r.memoizedState=e,[n,o,!1]}function ts(e,n,r,o){return e={tag:e,create:r,deps:o,inst:n,next:null},n=ce.updateQueue,n===null&&(n=Dl(),ce.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,n.lastEffect=e),e}function Tm(){return on().memoizedState}function Nl(e,n,r,o){var u=Bn();ce.flags|=e,u.memoizedState=ts(1|n,{destroy:void 0},r,o===void 0?null:o)}function Ol(e,n,r,o){var u=on();o=o===void 0?null:o;var h=u.memoizedState.inst;Fe!==null&&o!==null&&Wu(o,Fe.memoizedState.deps)?u.memoizedState=ts(n,h,r,o):(ce.flags|=e,u.memoizedState=ts(1|n,h,r,o))}function bm(e,n){Nl(8390656,8,e,n)}function ef(e,n){Ol(2048,8,e,n)}function By(e){ce.flags|=4;var n=ce.updateQueue;if(n===null)n=Dl(),ce.updateQueue=n,n.events=[e];else{var r=n.events;r===null?n.events=[e]:r.push(e)}}function Am(e){var n=on().memoizedState;return By({ref:n,nextImpl:e}),function(){if((Ue&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}function Rm(e,n){return Ol(4,2,e,n)}function wm(e,n){return Ol(4,4,e,n)}function Cm(e,n){if(typeof n=="function"){e=e();var r=n(e);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Dm(e,n,r){r=r!=null?r.concat([e]):null,Ol(4,4,Cm.bind(null,n,e),r)}function nf(){}function Um(e,n){var r=on();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&Wu(n,o[1])?o[0]:(r.memoizedState=[e,n],e)}function Lm(e,n){var r=on();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&Wu(n,o[1]))return o[0];if(o=e(),hr){Zt(!0);try{e()}finally{Zt(!1)}}return r.memoizedState=[o,n],o}function af(e,n,r){return r===void 0||(ji&1073741824)!==0&&(Me&261930)===0?e.memoizedState=n:(e.memoizedState=r,e=N0(),ce.lanes|=e,Ca|=e,r)}function Nm(e,n,r,o){return Qn(r,n)?r:Qr.current!==null?(e=af(e,r,o),Qn(e,n)||(fn=!0),e):(ji&42)===0||(ji&1073741824)!==0&&(Me&261930)===0?(fn=!0,e.memoizedState=r):(e=N0(),ce.lanes|=e,Ca|=e,n)}function Om(e,n,r,o,u){var h=K.p;K.p=h!==0&&8>h?h:8;var y=P.T,b={};P.T=b,of(e,!1,n,r);try{var B=u(),tt=P.S;if(tt!==null&&tt(b,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ht=Ly(B,o);po(e,n,ht,ii(e))}else po(e,n,o,ii(e))}catch(gt){po(e,n,{then:function(){},status:"rejected",reason:gt},ii())}finally{K.p=h,y!==null&&b.types!==null&&(y.types=b.types),P.T=y}}function Iy(){}function rf(e,n,r,o){if(e.tag!==5)throw Error(a(476));var u=Pm(e).queue;Om(e,u,n,Y,r===null?Iy:function(){return zm(e),r(o)})}function Pm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:Y},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:r},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function zm(e){var n=Pm(e);n.next===null&&(n=e.alternate.memoizedState),po(e,n.next.queue,{},ii())}function sf(){return Rn(Uo)}function Bm(){return on().memoizedState}function Im(){return on().memoizedState}function Fy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var r=ii();e=Ea(r);var o=Ta(n,e,r);o!==null&&(qn(o,n,r),lo(o,n,r)),n={cache:Ou()},e.payload=n;return}n=n.return}}function Hy(e,n,r){var o=ii();r={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Pl(e)?Hm(n,r):(r=Eu(e,n,r,o),r!==null&&(qn(r,e,o),Gm(r,n,o)))}function Fm(e,n,r){var o=ii();po(e,n,r,o)}function po(e,n,r,o){var u={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Pl(e))Hm(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var y=n.lastRenderedState,b=h(y,r);if(u.hasEagerState=!0,u.eagerState=b,Qn(b,y))return ml(e,n,u,0),qe===null&&pl(),!1}catch{}if(r=Eu(e,n,u,o),r!==null)return qn(r,e,o),Gm(r,n,o),!0}return!1}function of(e,n,r,o){if(o={lane:2,revertLane:Ff(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Pl(e)){if(n)throw Error(a(479))}else n=Eu(e,r,o,2),n!==null&&qn(n,e,2)}function Pl(e){var n=e.alternate;return e===ce||n!==null&&n===ce}function Hm(e,n){Jr=wl=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function Gm(e,n,r){if((r&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,r|=o,n.lanes=r,Ci(e,r)}}var mo={readContext:Rn,use:Ul,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};mo.useEffectEvent=en;var Vm={readContext:Rn,use:Ul,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:bm,useImperativeHandle:function(e,n,r){r=r!=null?r.concat([e]):null,Nl(4194308,4,Cm.bind(null,n,e),r)},useLayoutEffect:function(e,n){return Nl(4194308,4,e,n)},useInsertionEffect:function(e,n){Nl(4,2,e,n)},useMemo:function(e,n){var r=Bn();n=n===void 0?null:n;var o=e();if(hr){Zt(!0);try{e()}finally{Zt(!1)}}return r.memoizedState=[o,n],o},useReducer:function(e,n,r){var o=Bn();if(r!==void 0){var u=r(n);if(hr){Zt(!0);try{r(n)}finally{Zt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Hy.bind(null,ce,e),[o.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=$u(e);var n=e.queue,r=Fm.bind(null,ce,n);return n.dispatch=r,[e.memoizedState,r]},useDebugValue:nf,useDeferredValue:function(e,n){var r=Bn();return af(r,e,n)},useTransition:function(){var e=$u(!1);return e=Om.bind(null,ce,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,r){var o=ce,u=Bn();if(Te){if(r===void 0)throw Error(a(407));r=r()}else{if(r=n(),qe===null)throw Error(a(349));(Me&127)!==0||cm(o,n,r)}u.memoizedState=r;var h={value:r,getSnapshot:n};return u.queue=h,bm(fm.bind(null,o,h,e),[e]),o.flags|=2048,ts(9,{destroy:void 0},um.bind(null,o,h,r,n),null),r},useId:function(){var e=Bn(),n=qe.identifierPrefix;if(Te){var r=Li,o=Ui;r=(o&~(1<<32-Bt(o)-1)).toString(32)+r,n="_"+n+"R_"+r,r=Cl++,0<r&&(n+="H"+r.toString(32)),n+="_"}else r=Ny++,n="_"+n+"r_"+r.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:sf,useFormState:Sm,useActionState:Sm,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=of.bind(null,ce,!0,r),r.dispatch=n,[e,n]},useMemoCache:Ku,useCacheRefresh:function(){return Bn().memoizedState=Fy.bind(null,ce)},useEffectEvent:function(e){var n=Bn(),r={impl:e};return n.memoizedState=r,function(){if((Ue&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},lf={readContext:Rn,use:Ul,useCallback:Um,useContext:Rn,useEffect:ef,useImperativeHandle:Dm,useInsertionEffect:Rm,useLayoutEffect:wm,useMemo:Lm,useReducer:Ll,useRef:Tm,useState:function(){return Ll(Ki)},useDebugValue:nf,useDeferredValue:function(e,n){var r=on();return Nm(r,Fe.memoizedState,e,n)},useTransition:function(){var e=Ll(Ki)[0],n=on().memoizedState;return[typeof e=="boolean"?e:ho(e),n]},useSyncExternalStore:lm,useId:Bm,useHostTransitionStatus:sf,useFormState:Mm,useActionState:Mm,useOptimistic:function(e,n){var r=on();return pm(r,Fe,e,n)},useMemoCache:Ku,useCacheRefresh:Im};lf.useEffectEvent=Am;var km={readContext:Rn,use:Ul,useCallback:Um,useContext:Rn,useEffect:ef,useImperativeHandle:Dm,useInsertionEffect:Rm,useLayoutEffect:wm,useMemo:Lm,useReducer:Ju,useRef:Tm,useState:function(){return Ju(Ki)},useDebugValue:nf,useDeferredValue:function(e,n){var r=on();return Fe===null?af(r,e,n):Nm(r,Fe.memoizedState,e,n)},useTransition:function(){var e=Ju(Ki)[0],n=on().memoizedState;return[typeof e=="boolean"?e:ho(e),n]},useSyncExternalStore:lm,useId:Bm,useHostTransitionStatus:sf,useFormState:Em,useActionState:Em,useOptimistic:function(e,n){var r=on();return Fe!==null?pm(r,Fe,e,n):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Ku,useCacheRefresh:Im};km.useEffectEvent=Am;function cf(e,n,r,o){n=e.memoizedState,r=r(o,n),r=r==null?n:_({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var uf={enqueueSetState:function(e,n,r){e=e._reactInternals;var o=ii(),u=Ea(o);u.payload=n,r!=null&&(u.callback=r),n=Ta(e,u,o),n!==null&&(qn(n,e,o),lo(n,e,o))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var o=ii(),u=Ea(o);u.tag=1,u.payload=n,r!=null&&(u.callback=r),n=Ta(e,u,o),n!==null&&(qn(n,e,o),lo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=ii(),o=Ea(r);o.tag=2,n!=null&&(o.callback=n),n=Ta(e,o,r),n!==null&&(qn(n,e,r),lo(n,e,r))}};function Xm(e,n,r,o,u,h,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,y):n.prototype&&n.prototype.isPureReactComponent?!to(r,o)||!to(u,h):!0}function Wm(e,n,r,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==e&&uf.enqueueReplaceState(n,n.state,null)}function dr(e,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(e=e.defaultProps){r===n&&(r=_({},r));for(var u in e)r[u]===void 0&&(r[u]=e[u])}return r}function qm(e){dl(e)}function Ym(e){console.error(e)}function Zm(e){dl(e)}function zl(e,n){try{var r=e.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function jm(e,n,r){try{var o=e.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ff(e,n,r){return r=Ea(r),r.tag=3,r.payload={element:null},r.callback=function(){zl(e,n)},r}function Km(e){return e=Ea(e),e.tag=3,e}function Qm(e,n,r,o){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){jm(n,r,o)}}var y=r.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){jm(n,r,o),typeof u!="function"&&(Da===null?Da=new Set([this]):Da.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function Gy(e,n,r,o,u){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&qr(n,r,u,!0),r=$n.current,r!==null){switch(r.tag){case 31:case 13:return di===null?Zl():r.alternate===null&&nn===0&&(nn=3),r.flags&=-257,r.flags|=65536,r.lanes=u,o===El?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),zf(e,o,u)),!1;case 22:return r.flags|=65536,o===El?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),zf(e,o,u)),!1}throw Error(a(435,r.tag))}return zf(e,o,u),Zl(),!1}if(Te)return n=$n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Cu&&(e=Error(a(422),{cause:o}),io(ci(e,r)))):(o!==Cu&&(n=Error(a(423),{cause:o}),io(ci(n,r))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ci(o,r),u=ff(e.stateNode,o,u),Hu(e,u),nn!==4&&(nn=2)),!1;var h=Error(a(520),{cause:o});if(h=ci(h,r),Eo===null?Eo=[h]:Eo.push(h),nn!==4&&(nn=2),n===null)return!0;o=ci(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,e=u&-u,r.lanes|=e,e=ff(r.stateNode,o,e),Hu(r,e),!1;case 1:if(n=r.type,h=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Da===null||!Da.has(h))))return r.flags|=65536,u&=-u,r.lanes|=u,u=Km(u),Qm(u,e,r,o),Hu(r,u),!1}r=r.return}while(r!==null);return!1}var hf=Error(a(461)),fn=!1;function wn(e,n,r,o){n.child=e===null?em(n,null,r,o):fr(n,e.child,r,o)}function Jm(e,n,r,o,u){r=r.render;var h=n.ref;if("ref"in o){var y={};for(var b in o)b!=="ref"&&(y[b]=o[b])}else y=o;return or(n),o=qu(e,n,r,y,h,u),b=Yu(),e!==null&&!fn?(Zu(e,n,u),Qi(e,n,u)):(Te&&b&&Ru(n),n.flags|=1,wn(e,n,o,u),n.child)}function $m(e,n,r,o,u){if(e===null){var h=r.type;return typeof h=="function"&&!Tu(h)&&h.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=h,t0(e,n,h,o,u)):(e=_l(r.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Sf(e,u)){var y=h.memoizedProps;if(r=r.compare,r=r!==null?r:to,r(y,o)&&e.ref===n.ref)return Qi(e,n,u)}return n.flags|=1,e=Wi(h,o),e.ref=n.ref,e.return=n,n.child=e}function t0(e,n,r,o,u){if(e!==null){var h=e.memoizedProps;if(to(h,o)&&e.ref===n.ref)if(fn=!1,n.pendingProps=o=h,Sf(e,u))(e.flags&131072)!==0&&(fn=!0);else return n.lanes=e.lanes,Qi(e,n,u)}return df(e,n,r,o,u)}function e0(e,n,r,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|r:r,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return n0(e,n,h,r,o)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ml(n,h!==null?h.cachePool:null),h!==null?am(n,h):Vu(),rm(n);else return o=n.lanes=536870912,n0(e,n,h!==null?h.baseLanes|r:r,r,o)}else h!==null?(Ml(n,h.cachePool),am(n,h),Aa(),n.memoizedState=null):(e!==null&&Ml(n,null),Vu(),Aa());return wn(e,n,u,r),n.child}function go(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function n0(e,n,r,o,u){var h=zu();return h=h===null?null:{parent:cn._currentValue,pool:h},n.memoizedState={baseLanes:r,cachePool:h},e!==null&&Ml(n,null),Vu(),rm(n),e!==null&&qr(e,n,o,!0),n.childLanes=u,null}function Bl(e,n){return n=Fl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function i0(e,n,r){return fr(n,e.child,null,r),e=Bl(n,n.pendingProps),e.flags|=2,ti(n),n.memoizedState=null,e}function Vy(e,n,r){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Te){if(o.mode==="hidden")return e=Bl(n,o),n.lanes=536870912,go(null,e);if(Xu(n),(e=Ze)?(e=mg(e,hi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:va!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},r=Hp(e),r.return=n,n.child=r,An=n,Ze=null)):e=null,e===null)throw Sa(n);return n.lanes=536870912,null}return Bl(n,o)}var h=e.memoizedState;if(h!==null){var y=h.dehydrated;if(Xu(n),u)if(n.flags&256)n.flags&=-257,n=i0(e,n,r);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(a(558));else if(fn||qr(e,n,r,!1),u=(r&e.childLanes)!==0,fn||u){if(o=qe,o!==null&&(y=Ur(o,r),y!==0&&y!==h.retryLane))throw h.retryLane=y,ir(e,y),qn(o,e,y),hf;Zl(),n=i0(e,n,r)}else e=h.treeContext,Ze=pi(y.nextSibling),An=n,Te=!0,ya=null,hi=!1,e!==null&&kp(n,e),n=Bl(n,o),n.flags|=4096;return n}return e=Wi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Il(e,n){var r=n.ref;if(r===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(n.flags|=4194816)}}function df(e,n,r,o,u){return or(n),r=qu(e,n,r,o,void 0,u),o=Yu(),e!==null&&!fn?(Zu(e,n,u),Qi(e,n,u)):(Te&&o&&Ru(n),n.flags|=1,wn(e,n,r,u),n.child)}function a0(e,n,r,o,u,h){return or(n),n.updateQueue=null,r=om(n,o,r,u),sm(e),o=Yu(),e!==null&&!fn?(Zu(e,n,h),Qi(e,n,h)):(Te&&o&&Ru(n),n.flags|=1,wn(e,n,r,h),n.child)}function r0(e,n,r,o,u){if(or(n),n.stateNode===null){var h=Vr,y=r.contextType;typeof y=="object"&&y!==null&&(h=Rn(y)),h=new r(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=uf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Iu(n),y=r.contextType,h.context=typeof y=="object"&&y!==null?Rn(y):Vr,h.state=n.memoizedState,y=r.getDerivedStateFromProps,typeof y=="function"&&(cf(n,r,y,o),h.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(y=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),y!==h.state&&uf.enqueueReplaceState(h,h.state,null),uo(n,o,h,u),co(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var b=n.memoizedProps,B=dr(r,b);h.props=B;var tt=h.context,ht=r.contextType;y=Vr,typeof ht=="object"&&ht!==null&&(y=Rn(ht));var gt=r.getDerivedStateFromProps;ht=typeof gt=="function"||typeof h.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ht||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(b||tt!==y)&&Wm(n,h,o,y),xa=!1;var it=n.memoizedState;h.state=it,uo(n,o,h,u),co(),tt=n.memoizedState,b||it!==tt||xa?(typeof gt=="function"&&(cf(n,r,gt,o),tt=n.memoizedState),(B=xa||Xm(n,r,B,o,it,tt,y))?(ht||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=tt),h.props=o,h.state=tt,h.context=y,o=B):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,Fu(e,n),y=n.memoizedProps,ht=dr(r,y),h.props=ht,gt=n.pendingProps,it=h.context,tt=r.contextType,B=Vr,typeof tt=="object"&&tt!==null&&(B=Rn(tt)),b=r.getDerivedStateFromProps,(tt=typeof b=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==gt||it!==B)&&Wm(n,h,o,B),xa=!1,it=n.memoizedState,h.state=it,uo(n,o,h,u),co();var ct=n.memoizedState;y!==gt||it!==ct||xa||e!==null&&e.dependencies!==null&&yl(e.dependencies)?(typeof b=="function"&&(cf(n,r,b,o),ct=n.memoizedState),(ht=xa||Xm(n,r,ht,o,it,ct,B)||e!==null&&e.dependencies!==null&&yl(e.dependencies))?(tt||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ct,B),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ct,B)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ct),h.props=o,h.state=ct,h.context=B,o=ht):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Il(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=fr(n,e.child,null,u),n.child=fr(n,null,r,u)):wn(e,n,r,u),n.memoizedState=h.state,e=n.child):e=Qi(e,n,u),e}function s0(e,n,r,o){return rr(),n.flags|=256,wn(e,n,r,o),n.child}var pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mf(e){return{baseLanes:e,cachePool:jp()}}function gf(e,n,r){return e=e!==null?e.childLanes&~r:0,n&&(e|=ni),e}function o0(e,n,r){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,y;if((y=h)||(y=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Te){if(u?ba(n):Aa(),(e=Ze)?(e=mg(e,hi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:va!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},r=Hp(e),r.return=n,n.child=r,An=n,Ze=null)):e=null,e===null)throw Sa(n);return Jf(e)?n.lanes=32:n.lanes=536870912,null}var b=o.children;return o=o.fallback,u?(Aa(),u=n.mode,b=Fl({mode:"hidden",children:b},u),o=ar(o,u,r,null),b.return=n,o.return=n,b.sibling=o,n.child=b,o=n.child,o.memoizedState=mf(r),o.childLanes=gf(e,y,r),n.memoizedState=pf,go(null,o)):(ba(n),_f(n,b))}var B=e.memoizedState;if(B!==null&&(b=B.dehydrated,b!==null)){if(h)n.flags&256?(ba(n),n.flags&=-257,n=vf(e,n,r)):n.memoizedState!==null?(Aa(),n.child=e.child,n.flags|=128,n=null):(Aa(),b=o.fallback,u=n.mode,o=Fl({mode:"visible",children:o.children},u),b=ar(b,u,r,null),b.flags|=2,o.return=n,b.return=n,o.sibling=b,n.child=o,fr(n,e.child,null,r),o=n.child,o.memoizedState=mf(r),o.childLanes=gf(e,y,r),n.memoizedState=pf,n=go(null,o));else if(ba(n),Jf(b)){if(y=b.nextSibling&&b.nextSibling.dataset,y)var tt=y.dgst;y=tt,o=Error(a(419)),o.stack="",o.digest=y,io({value:o,source:null,stack:null}),n=vf(e,n,r)}else if(fn||qr(e,n,r,!1),y=(r&e.childLanes)!==0,fn||y){if(y=qe,y!==null&&(o=Ur(y,r),o!==0&&o!==B.retryLane))throw B.retryLane=o,ir(e,o),qn(y,e,o),hf;Qf(b)||Zl(),n=vf(e,n,r)}else Qf(b)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,Ze=pi(b.nextSibling),An=n,Te=!0,ya=null,hi=!1,e!==null&&kp(n,e),n=_f(n,o.children),n.flags|=4096);return n}return u?(Aa(),b=o.fallback,u=n.mode,B=e.child,tt=B.sibling,o=Wi(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,tt!==null?b=Wi(tt,b):(b=ar(b,u,r,null),b.flags|=2),b.return=n,o.return=n,o.sibling=b,n.child=o,go(null,o),o=n.child,b=e.child.memoizedState,b===null?b=mf(r):(u=b.cachePool,u!==null?(B=cn._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=jp(),b={baseLanes:b.baseLanes|r,cachePool:u}),o.memoizedState=b,o.childLanes=gf(e,y,r),n.memoizedState=pf,go(e.child,o)):(ba(n),r=e.child,e=r.sibling,r=Wi(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=r,n.memoizedState=null,r)}function _f(e,n){return n=Fl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Fl(e,n){return e=Jn(22,e,null,n),e.lanes=0,e}function vf(e,n,r){return fr(n,e.child,null,r),e=_f(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function l0(e,n,r){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Lu(e.return,n,r)}function yf(e,n,r,o,u,h){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:u,treeForkCount:h}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=r,y.tailMode=u,y.treeForkCount=h)}function c0(e,n,r){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var y=sn.current,b=(y&2)!==0;if(b?(y=y&1|2,n.flags|=128):y&=1,Mt(sn,y),wn(e,n,o,r),o=Te?no:0,!b&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&l0(e,r,n);else if(e.tag===19)l0(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(r=n.child,u=null;r!==null;)e=r.alternate,e!==null&&Rl(e)===null&&(u=r),r=r.sibling;r=u,r===null?(u=n.child,n.child=null):(u=r.sibling,r.sibling=null),yf(n,!1,u,r,h,o);break;case"backwards":case"unstable_legacy-backwards":for(r=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Rl(e)===null){n.child=u;break}e=u.sibling,u.sibling=r,r=u,u=e}yf(n,!0,r,null,h,o);break;case"together":yf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Qi(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),Ca|=n.lanes,(r&n.childLanes)===0)if(e!==null){if(qr(e,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,r=Wi(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=Wi(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function Sf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&yl(e)))}function ky(e,n,r){switch(n.tag){case 3:At(n,n.stateNode.containerInfo),Ma(n,cn,e.memoizedState.cache),rr();break;case 27:case 5:jt(n);break;case 4:At(n,n.stateNode.containerInfo);break;case 10:Ma(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Xu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ba(n),n.flags|=128,null):(r&n.child.childLanes)!==0?o0(e,n,r):(ba(n),e=Qi(e,n,r),e!==null?e.sibling:null);ba(n);break;case 19:var u=(e.flags&128)!==0;if(o=(r&n.childLanes)!==0,o||(qr(e,n,r,!1),o=(r&n.childLanes)!==0),u){if(o)return c0(e,n,r);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Mt(sn,sn.current),o)break;return null;case 22:return n.lanes=0,e0(e,n,r,n.pendingProps);case 24:Ma(n,cn,e.memoizedState.cache)}return Qi(e,n,r)}function u0(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!Sf(e,r)&&(n.flags&128)===0)return fn=!1,ky(e,n,r);fn=(e.flags&131072)!==0}else fn=!1,Te&&(n.flags&1048576)!==0&&Vp(n,no,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=cr(n.elementType),n.type=e,typeof e=="function")Tu(e)?(o=dr(e,o),n.tag=1,n=r0(null,n,e,o,r)):(n.tag=0,n=df(null,n,e,o,r));else{if(e!=null){var u=e.$$typeof;if(u===w){n.tag=11,n=Jm(null,n,e,o,r);break t}else if(u===O){n.tag=14,n=$m(null,n,e,o,r);break t}}throw n=ut(e)||e,Error(a(306,n,""))}}return n;case 0:return df(e,n,n.type,n.pendingProps,r);case 1:return o=n.type,u=dr(o,n.pendingProps),r0(e,n,o,u,r);case 3:t:{if(At(n,n.stateNode.containerInfo),e===null)throw Error(a(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,Fu(e,n),uo(n,o,null,r);var y=n.memoizedState;if(o=y.cache,Ma(n,cn,o),o!==h.cache&&Nu(n,[cn],r,!0),co(),o=y.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=s0(e,n,o,r);break t}else if(o!==u){u=ci(Error(a(424)),n),io(u),n=s0(e,n,o,r);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ze=pi(e.firstChild),An=n,Te=!0,ya=null,hi=!0,r=em(n,null,o,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(rr(),o===u){n=Qi(e,n,r);break t}wn(e,n,o,r)}n=n.child}return n;case 26:return Il(e,n),e===null?(r=Mg(n.type,null,n.pendingProps,null))?n.memoizedState=r:Te||(r=n.type,e=n.pendingProps,o=ec(_t.current).createElement(r),o[ln]=n,o[Tn]=e,Cn(o,r,e),St(o),n.stateNode=o):n.memoizedState=Mg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return jt(n),e===null&&Te&&(o=n.stateNode=vg(n.type,n.pendingProps,_t.current),An=n,hi=!0,u=Ze,Oa(n.type)?($f=u,Ze=pi(o.firstChild)):Ze=u),wn(e,n,n.pendingProps.children,r),Il(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Te&&((u=o=Ze)&&(o=yS(o,n.type,n.pendingProps,hi),o!==null?(n.stateNode=o,An=n,Ze=pi(o.firstChild),hi=!1,u=!0):u=!1),u||Sa(n)),jt(n),u=n.type,h=n.pendingProps,y=e!==null?e.memoizedProps:null,o=h.children,Zf(u,h)?o=null:y!==null&&Zf(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=qu(e,n,Oy,null,null,r),Uo._currentValue=u),Il(e,n),wn(e,n,o,r),n.child;case 6:return e===null&&Te&&((e=r=Ze)&&(r=SS(r,n.pendingProps,hi),r!==null?(n.stateNode=r,An=n,Ze=null,e=!0):e=!1),e||Sa(n)),null;case 13:return o0(e,n,r);case 4:return At(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=fr(n,null,o,r):wn(e,n,o,r),n.child;case 11:return Jm(e,n,n.type,n.pendingProps,r);case 7:return wn(e,n,n.pendingProps,r),n.child;case 8:return wn(e,n,n.pendingProps.children,r),n.child;case 12:return wn(e,n,n.pendingProps.children,r),n.child;case 10:return o=n.pendingProps,Ma(n,n.type,o.value),wn(e,n,o.children,r),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,or(n),u=Rn(u),o=o(u),n.flags|=1,wn(e,n,o,r),n.child;case 14:return $m(e,n,n.type,n.pendingProps,r);case 15:return t0(e,n,n.type,n.pendingProps,r);case 19:return c0(e,n,r);case 31:return Vy(e,n,r);case 22:return e0(e,n,r,n.pendingProps);case 24:return or(n),o=Rn(cn),e===null?(u=zu(),u===null&&(u=qe,h=Ou(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=r),u=h),n.memoizedState={parent:o,cache:u},Iu(n),Ma(n,cn,u)):((e.lanes&r)!==0&&(Fu(e,n),uo(n,null,null,r),co()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ma(n,cn,o)):(o=h.cache,Ma(n,cn,o),o!==u.cache&&Nu(n,[cn],r,!0))),wn(e,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function Ji(e){e.flags|=4}function Mf(e,n,r,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(B0())e.flags|=8192;else throw ur=El,Bu}else e.flags&=-16777217}function f0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ag(n))if(B0())e.flags|=8192;else throw ur=El,Bu}function Hl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Pe():536870912,e.lanes|=n,as|=n)}function _o(e,n){if(!Te)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function je(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(n)for(var u=e.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=r,n}function Xy(e,n,r){var o=n.pendingProps;switch(wu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return je(n),null;case 3:return r=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Zi(cn),bt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Wr(n)?Ji(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Du())),je(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(Ji(n),h!==null?(je(n),f0(n,h)):(je(n),Mf(n,u,null,o,r))):h?h!==e.memoizedState?(Ji(n),je(n),f0(n,h)):(je(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Ji(n),je(n),Mf(n,u,e,o,r)),null;case 27:if(Ie(n),r=_t.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ji(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return je(n),null}e=Ct.current,Wr(n)?Xp(n):(e=vg(u,o,r),n.stateNode=e,Ji(n))}return je(n),null;case 5:if(Ie(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ji(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return je(n),null}if(h=Ct.current,Wr(n))Xp(n);else{var y=ec(_t.current);switch(h){case 1:h=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=y.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}h[ln]=n,h[Tn]=o;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)h.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=h;t:switch(Cn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Ji(n)}}return je(n),Mf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,r),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Ji(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(a(166));if(e=_t.current,Wr(n)){if(e=n.stateNode,r=n.memoizedProps,o=null,u=An,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[ln]=n,e=!!(e.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||og(e.nodeValue,r)),e||Sa(n,!0)}else e=ec(e).createTextNode(o),e[ln]=n,n.stateNode=e}return je(n),null;case 31:if(r=n.memoizedState,e===null||e.memoizedState!==null){if(o=Wr(n),r!==null){if(e===null){if(!o)throw Error(a(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[ln]=n}else rr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),e=!1}else r=Du(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(a(558))}return je(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Wr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(a(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[ln]=n}else rr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),u=!1}else u=Du(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=r,n):(r=o!==null,e=e!==null&&e.memoizedState!==null,r&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),r!==e&&r&&(n.child.flags|=8192),Hl(n,n.updateQueue),je(n),null);case 4:return bt(),e===null&&kf(n.stateNode.containerInfo),je(n),null;case 10:return Zi(n.type),je(n),null;case 19:if(nt(sn),o=n.memoizedState,o===null)return je(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)_o(o,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Rl(e),h!==null){for(n.flags|=128,_o(o,!1),e=h.updateQueue,n.updateQueue=e,Hl(n,e),n.subtreeFlags=0,e=r,r=n.child;r!==null;)Fp(r,e),r=r.sibling;return Mt(sn,sn.current&1|2),Te&&qi(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&T()>Wl&&(n.flags|=128,u=!0,_o(o,!1),n.lanes=4194304)}else{if(!u)if(e=Rl(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Hl(n,e),_o(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Te)return je(n),null}else 2*T()-o.renderingStartTime>Wl&&r!==536870912&&(n.flags|=128,u=!0,_o(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=T(),e.sibling=null,r=sn.current,Mt(sn,u?r&1|2:r&1),Te&&qi(n,o.treeForkCount),e):(je(n),null);case 22:case 23:return ti(n),ku(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),r=n.updateQueue,r!==null&&Hl(n,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),e!==null&&nt(lr),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Zi(cn),je(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function Wy(e,n){switch(wu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Zi(cn),bt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ie(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(a(340));rr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ti(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));rr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return nt(sn),null;case 4:return bt(),null;case 10:return Zi(n.type),null;case 22:case 23:return ti(n),ku(),e!==null&&nt(lr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Zi(cn),null;case 25:return null;default:return null}}function h0(e,n){switch(wu(n),n.tag){case 3:Zi(cn),bt();break;case 26:case 27:case 5:Ie(n);break;case 4:bt();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:nt(sn);break;case 10:Zi(n.type);break;case 22:case 23:ti(n),ku(),e!==null&&nt(lr);break;case 24:Zi(cn)}}function vo(e,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var u=o.next;r=u;do{if((r.tag&e)===e){o=void 0;var h=r.create,y=r.inst;o=h(),y.destroy=o}r=r.next}while(r!==u)}}catch(b){Be(n,n.return,b)}}function Ra(e,n,r){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var y=o.inst,b=y.destroy;if(b!==void 0){y.destroy=void 0,u=n;var B=r,tt=b;try{tt()}catch(ht){Be(u,B,ht)}}}o=o.next}while(o!==h)}}catch(ht){Be(n,n.return,ht)}}function d0(e){var n=e.updateQueue;if(n!==null){var r=e.stateNode;try{im(n,r)}catch(o){Be(e,e.return,o)}}}function p0(e,n,r){r.props=dr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(o){Be(e,n,o)}}function yo(e,n){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof r=="function"?e.refCleanup=r(o):r.current=o}}catch(u){Be(e,n,u)}}function Ni(e,n){var r=e.ref,o=e.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(u){Be(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){Be(e,n,u)}else r.current=null}function m0(e){var n=e.type,r=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break t;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(u){Be(e,e.return,u)}}function xf(e,n,r){try{var o=e.stateNode;dS(o,e.type,r,n),o[Tn]=n}catch(u){Be(e,e.return,u)}}function g0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Oa(e.type)||e.tag===4}function Ef(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||g0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Oa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tf(e,n,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(e),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=ki));else if(o!==4&&(o===27&&Oa(e.type)&&(r=e.stateNode,n=null),e=e.child,e!==null))for(Tf(e,n,r),e=e.sibling;e!==null;)Tf(e,n,r),e=e.sibling}function Gl(e,n,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(o!==4&&(o===27&&Oa(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Gl(e,n,r),e=e.sibling;e!==null;)Gl(e,n,r),e=e.sibling}function _0(e){var n=e.stateNode,r=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,o,r),n[ln]=e,n[Tn]=r}catch(h){Be(e,e.return,h)}}var $i=!1,hn=!1,bf=!1,v0=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function qy(e,n){if(e=e.containerInfo,qf=lc,e=Dp(e),_u(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{r.nodeType,h.nodeType}catch{r=null;break t}var y=0,b=-1,B=-1,tt=0,ht=0,gt=e,it=null;e:for(;;){for(var ct;gt!==r||u!==0&&gt.nodeType!==3||(b=y+u),gt!==h||o!==0&&gt.nodeType!==3||(B=y+o),gt.nodeType===3&&(y+=gt.nodeValue.length),(ct=gt.firstChild)!==null;)it=gt,gt=ct;for(;;){if(gt===e)break e;if(it===r&&++tt===u&&(b=y),it===h&&++ht===o&&(B=y),(ct=gt.nextSibling)!==null)break;gt=it,it=gt.parentNode}gt=ct}r=b===-1||B===-1?null:{start:b,end:B}}else r=null}r=r||{start:0,end:0}}else r=null;for(Yf={focusedElem:e,selectionRange:r},lc=!1,Mn=n;Mn!==null;)if(n=Mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Mn=e;else for(;Mn!==null;){switch(n=Mn,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)u=e[r],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,r=n,u=h.memoizedProps,h=h.memoizedState,o=r.stateNode;try{var Gt=dr(r.type,u);e=o.getSnapshotBeforeUpdate(Gt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(ne){Be(r,r.return,ne)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,r=e.nodeType,r===9)Kf(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Kf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,Mn=e;break}Mn=n.return}}function y0(e,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:ea(e,r),o&4&&vo(5,r);break;case 1:if(ea(e,r),o&4)if(e=r.stateNode,n===null)try{e.componentDidMount()}catch(y){Be(r,r.return,y)}else{var u=dr(r.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Be(r,r.return,y)}}o&64&&d0(r),o&512&&yo(r,r.return);break;case 3:if(ea(e,r),o&64&&(e=r.updateQueue,e!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{im(e,n)}catch(y){Be(r,r.return,y)}}break;case 27:n===null&&o&4&&_0(r);case 26:case 5:ea(e,r),n===null&&o&4&&m0(r),o&512&&yo(r,r.return);break;case 12:ea(e,r);break;case 31:ea(e,r),o&4&&x0(e,r);break;case 13:ea(e,r),o&4&&E0(e,r),o&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=eS.bind(null,r),MS(e,r))));break;case 22:if(o=r.memoizedState!==null||$i,!o){n=n!==null&&n.memoizedState!==null||hn,u=$i;var h=hn;$i=o,(hn=n)&&!h?na(e,r,(r.subtreeFlags&8772)!==0):ea(e,r),$i=u,hn=h}break;case 30:break;default:ea(e,r)}}function S0(e){var n=e.alternate;n!==null&&(e.alternate=null,S0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&R(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,Vn=!1;function ta(e,n,r){for(r=r.child;r!==null;)M0(e,n,r),r=r.sibling}function M0(e,n,r){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(Rt,r)}catch{}switch(r.tag){case 26:hn||Ni(r,n),ta(e,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:hn||Ni(r,n);var o=Qe,u=Vn;Oa(r.type)&&(Qe=r.stateNode,Vn=!1),ta(e,n,r),wo(r.stateNode),Qe=o,Vn=u;break;case 5:hn||Ni(r,n);case 6:if(o=Qe,u=Vn,Qe=null,ta(e,n,r),Qe=o,Vn=u,Qe!==null)if(Vn)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(r.stateNode)}catch(h){Be(r,n,h)}else try{Qe.removeChild(r.stateNode)}catch(h){Be(r,n,h)}break;case 18:Qe!==null&&(Vn?(e=Qe,dg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),hs(e)):dg(Qe,r.stateNode));break;case 4:o=Qe,u=Vn,Qe=r.stateNode.containerInfo,Vn=!0,ta(e,n,r),Qe=o,Vn=u;break;case 0:case 11:case 14:case 15:Ra(2,r,n),hn||Ra(4,r,n),ta(e,n,r);break;case 1:hn||(Ni(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&p0(r,n,o)),ta(e,n,r);break;case 21:ta(e,n,r);break;case 22:hn=(o=hn)||r.memoizedState!==null,ta(e,n,r),hn=o;break;default:ta(e,n,r)}}function x0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{hs(e)}catch(r){Be(n,n.return,r)}}}function E0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{hs(e)}catch(r){Be(n,n.return,r)}}function Yy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new v0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new v0),n;default:throw Error(a(435,e.tag))}}function Vl(e,n){var r=Yy(e);n.forEach(function(o){if(!r.has(o)){r.add(o);var u=nS.bind(null,e,o);o.then(u,u)}})}function kn(e,n){var r=n.deletions;if(r!==null)for(var o=0;o<r.length;o++){var u=r[o],h=e,y=n,b=y;t:for(;b!==null;){switch(b.tag){case 27:if(Oa(b.type)){Qe=b.stateNode,Vn=!1;break t}break;case 5:Qe=b.stateNode,Vn=!1;break t;case 3:case 4:Qe=b.stateNode.containerInfo,Vn=!0;break t}b=b.return}if(Qe===null)throw Error(a(160));M0(h,y,u),Qe=null,Vn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)T0(n,e),n=n.sibling}var Mi=null;function T0(e,n){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:kn(n,e),Xn(e),o&4&&(Ra(3,e,e.return),vo(3,e),Ra(5,e,e.return));break;case 1:kn(n,e),Xn(e),o&512&&(hn||r===null||Ni(r,r.return)),o&64&&$i&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var u=Mi;if(kn(n,e),Xn(e),o&512&&(hn||r===null||Ni(r,r.return)),o&4){var h=r!==null?r.memoizedState:null;if(o=e.memoizedState,r===null)if(o===null)if(e.stateNode===null){t:{o=e.type,r=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Ja]||h[ln]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Cn(h,o,r),h[ln]=e,St(h),o=h;break t;case"link":var y=Tg("link","href",u).get(o+(r.href||""));if(y){for(var b=0;b<y.length;b++)if(h=y[b],h.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&h.getAttribute("rel")===(r.rel==null?null:r.rel)&&h.getAttribute("title")===(r.title==null?null:r.title)&&h.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){y.splice(b,1);break e}}h=u.createElement(o),Cn(h,o,r),u.head.appendChild(h);break;case"meta":if(y=Tg("meta","content",u).get(o+(r.content||""))){for(b=0;b<y.length;b++)if(h=y[b],h.getAttribute("content")===(r.content==null?null:""+r.content)&&h.getAttribute("name")===(r.name==null?null:r.name)&&h.getAttribute("property")===(r.property==null?null:r.property)&&h.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&h.getAttribute("charset")===(r.charSet==null?null:r.charSet)){y.splice(b,1);break e}}h=u.createElement(o),Cn(h,o,r),u.head.appendChild(h);break;default:throw Error(a(468,o))}h[ln]=e,St(h),o=h}e.stateNode=o}else bg(u,e.type,e.stateNode);else e.stateNode=Eg(u,o,e.memoizedProps);else h!==o?(h===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):h.count--,o===null?bg(u,e.type,e.stateNode):Eg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&xf(e,e.memoizedProps,r.memoizedProps)}break;case 27:kn(n,e),Xn(e),o&512&&(hn||r===null||Ni(r,r.return)),r!==null&&o&4&&xf(e,e.memoizedProps,r.memoizedProps);break;case 5:if(kn(n,e),Xn(e),o&512&&(hn||r===null||Ni(r,r.return)),e.flags&32){u=e.stateNode;try{Pr(u,"")}catch(Gt){Be(e,e.return,Gt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,xf(e,u,r!==null?r.memoizedProps:u)),o&1024&&(bf=!0);break;case 6:if(kn(n,e),Xn(e),o&4){if(e.stateNode===null)throw Error(a(162));o=e.memoizedProps,r=e.stateNode;try{r.nodeValue=o}catch(Gt){Be(e,e.return,Gt)}}break;case 3:if(ac=null,u=Mi,Mi=nc(n.containerInfo),kn(n,e),Mi=u,Xn(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{hs(n.containerInfo)}catch(Gt){Be(e,e.return,Gt)}bf&&(bf=!1,b0(e));break;case 4:o=Mi,Mi=nc(e.stateNode.containerInfo),kn(n,e),Xn(e),Mi=o;break;case 12:kn(n,e),Xn(e);break;case 31:kn(n,e),Xn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Vl(e,o)));break;case 13:kn(n,e),Xn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Xl=T()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Vl(e,o)));break;case 22:u=e.memoizedState!==null;var B=r!==null&&r.memoizedState!==null,tt=$i,ht=hn;if($i=tt||u,hn=ht||B,kn(n,e),hn=ht,$i=tt,Xn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(r===null||B||$i||hn||pr(e)),r=null,n=e;;){if(n.tag===5||n.tag===26){if(r===null){B=r=n;try{if(h=B.stateNode,u)y=h.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{b=B.stateNode;var gt=B.memoizedProps.style,it=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;b.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(Gt){Be(B,B.return,Gt)}}}else if(n.tag===6){if(r===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(Gt){Be(B,B.return,Gt)}}}else if(n.tag===18){if(r===null){B=n;try{var ct=B.stateNode;u?pg(ct,!0):pg(B.stateNode,!1)}catch(Gt){Be(B,B.return,Gt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,Vl(e,r))));break;case 19:kn(n,e),Xn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Vl(e,o)));break;case 30:break;case 21:break;default:kn(n,e),Xn(e)}}function Xn(e){var n=e.flags;if(n&2){try{for(var r,o=e.return;o!==null;){if(g0(o)){r=o;break}o=o.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var u=r.stateNode,h=Ef(e);Gl(e,h,u);break;case 5:var y=r.stateNode;r.flags&32&&(Pr(y,""),r.flags&=-33);var b=Ef(e);Gl(e,b,y);break;case 3:case 4:var B=r.stateNode.containerInfo,tt=Ef(e);Tf(e,tt,B);break;default:throw Error(a(161))}}catch(ht){Be(e,e.return,ht)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function b0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;b0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ea(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)y0(e,n.alternate,n),n=n.sibling}function pr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ra(4,n,n.return),pr(n);break;case 1:Ni(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&p0(n,n.return,r),pr(n);break;case 27:wo(n.stateNode);case 26:case 5:Ni(n,n.return),pr(n);break;case 22:n.memoizedState===null&&pr(n);break;case 30:pr(n);break;default:pr(n)}e=e.sibling}}function na(e,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,y=h.flags;switch(h.tag){case 0:case 11:case 15:na(u,h,r),vo(4,h);break;case 1:if(na(u,h,r),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(tt){Be(o,o.return,tt)}if(o=h,u=o.updateQueue,u!==null){var b=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)nm(B[u],b)}catch(tt){Be(o,o.return,tt)}}r&&y&64&&d0(h),yo(h,h.return);break;case 27:_0(h);case 26:case 5:na(u,h,r),r&&o===null&&y&4&&m0(h),yo(h,h.return);break;case 12:na(u,h,r);break;case 31:na(u,h,r),r&&y&4&&x0(u,h);break;case 13:na(u,h,r),r&&y&4&&E0(u,h);break;case 22:h.memoizedState===null&&na(u,h,r),yo(h,h.return);break;case 30:break;default:na(u,h,r)}n=n.sibling}}function Af(e,n){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&ao(r))}function Rf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ao(e))}function xi(e,n,r,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)A0(e,n,r,o),n=n.sibling}function A0(e,n,r,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:xi(e,n,r,o),u&2048&&vo(9,n);break;case 1:xi(e,n,r,o);break;case 3:xi(e,n,r,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ao(e)));break;case 12:if(u&2048){xi(e,n,r,o),e=n.stateNode;try{var h=n.memoizedProps,y=h.id,b=h.onPostCommit;typeof b=="function"&&b(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){Be(n,n.return,B)}}else xi(e,n,r,o);break;case 31:xi(e,n,r,o);break;case 13:xi(e,n,r,o);break;case 23:break;case 22:h=n.stateNode,y=n.alternate,n.memoizedState!==null?h._visibility&2?xi(e,n,r,o):So(e,n):h._visibility&2?xi(e,n,r,o):(h._visibility|=2,es(e,n,r,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Af(y,n);break;case 24:xi(e,n,r,o),u&2048&&Rf(n.alternate,n);break;default:xi(e,n,r,o)}}function es(e,n,r,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,y=n,b=r,B=o,tt=y.flags;switch(y.tag){case 0:case 11:case 15:es(h,y,b,B,u),vo(8,y);break;case 23:break;case 22:var ht=y.stateNode;y.memoizedState!==null?ht._visibility&2?es(h,y,b,B,u):So(h,y):(ht._visibility|=2,es(h,y,b,B,u)),u&&tt&2048&&Af(y.alternate,y);break;case 24:es(h,y,b,B,u),u&&tt&2048&&Rf(y.alternate,y);break;default:es(h,y,b,B,u)}n=n.sibling}}function So(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=e,o=n,u=o.flags;switch(o.tag){case 22:So(r,o),u&2048&&Af(o.alternate,o);break;case 24:So(r,o),u&2048&&Rf(o.alternate,o);break;default:So(r,o)}n=n.sibling}}var Mo=8192;function ns(e,n,r){if(e.subtreeFlags&Mo)for(e=e.child;e!==null;)R0(e,n,r),e=e.sibling}function R0(e,n,r){switch(e.tag){case 26:ns(e,n,r),e.flags&Mo&&e.memoizedState!==null&&NS(r,Mi,e.memoizedState,e.memoizedProps);break;case 5:ns(e,n,r);break;case 3:case 4:var o=Mi;Mi=nc(e.stateNode.containerInfo),ns(e,n,r),Mi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Mo,Mo=16777216,ns(e,n,r),Mo=o):ns(e,n,r));break;default:ns(e,n,r)}}function w0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function xo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Mn=o,D0(o,e)}w0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)C0(e),e=e.sibling}function C0(e){switch(e.tag){case 0:case 11:case 15:xo(e),e.flags&2048&&Ra(9,e,e.return);break;case 3:xo(e);break;case 12:xo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,kl(e)):xo(e);break;default:xo(e)}}function kl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Mn=o,D0(o,e)}w0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ra(8,n,n.return),kl(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,kl(n));break;default:kl(n)}e=e.sibling}}function D0(e,n){for(;Mn!==null;){var r=Mn;switch(r.tag){case 0:case 11:case 15:Ra(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ao(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,Mn=o;else t:for(r=e;Mn!==null;){o=Mn;var u=o.sibling,h=o.return;if(S0(o),o===r){Mn=null;break t}if(u!==null){u.return=h,Mn=u;break t}Mn=h}}}var Zy={getCacheForType:function(e){var n=Rn(cn),r=n.data.get(e);return r===void 0&&(r=e(),n.data.set(e,r)),r},cacheSignal:function(){return Rn(cn).controller.signal}},jy=typeof WeakMap=="function"?WeakMap:Map,Ue=0,qe=null,ve=null,Me=0,ze=0,ei=null,wa=!1,is=!1,wf=!1,ia=0,nn=0,Ca=0,mr=0,Cf=0,ni=0,as=0,Eo=null,Wn=null,Df=!1,Xl=0,U0=0,Wl=1/0,ql=null,Da=null,mn=0,Ua=null,rs=null,aa=0,Uf=0,Lf=null,L0=null,To=0,Nf=null;function ii(){return(Ue&2)!==0&&Me!==0?Me&-Me:P.T!==null?Ff():Qa()}function N0(){if(ni===0)if((Me&536870912)===0||Te){var e=Lt;Lt<<=1,(Lt&3932160)===0&&(Lt=262144),ni=e}else ni=536870912;return e=$n.current,e!==null&&(e.flags|=32),ni}function qn(e,n,r){(e===qe&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(ss(e,0),La(e,Me,ni,!1)),Pn(e,r),((Ue&2)===0||e!==qe)&&(e===qe&&((Ue&2)===0&&(mr|=r),nn===4&&La(e,Me,ni,!1)),Oi(e))}function O0(e,n,r){if((Ue&6)!==0)throw Error(a(327));var o=!r&&(n&127)===0&&(n&e.expiredLanes)===0||Ht(e,n),u=o?Jy(e,n):Pf(e,n,!0),h=o;do{if(u===0){is&&!o&&La(e,n,0,!1);break}else{if(r=e.current.alternate,h&&!Ky(r)){u=Pf(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var b=e;u=Eo;var B=b.current.memoizedState.isDehydrated;if(B&&(ss(b,y).flags|=256),y=Pf(b,y,!1),y!==2){if(wf&&!B){b.errorRecoveryDisabledLanes|=h,mr|=h,u=4;break t}h=Wn,Wn=u,h!==null&&(Wn===null?Wn=h:Wn.push.apply(Wn,h))}u=y}if(h=!1,u!==2)continue}}if(u===1){ss(e,0),La(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:La(o,n,ni,!wa);break t;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(u=Xl+300-T(),10<u)){if(La(o,n,ni,!wa),vt(o,0,!0)!==0)break t;aa=n,o.timeoutHandle=fg(P0.bind(null,o,r,Wn,ql,Df,n,ni,mr,as,wa,h,"Throttled",-0,0),u);break t}P0(o,r,Wn,ql,Df,n,ni,mr,as,wa,h,null,-0,0)}}break}while(!0);Oi(e)}function P0(e,n,r,o,u,h,y,b,B,tt,ht,gt,it,ct){if(e.timeoutHandle=-1,gt=n.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ki},R0(n,h,gt);var Gt=(h&62914560)===h?Xl-T():(h&4194048)===h?U0-T():0;if(Gt=OS(gt,Gt),Gt!==null){aa=h,e.cancelPendingCommit=Gt(k0.bind(null,e,n,h,r,o,u,y,b,B,ht,gt,null,it,ct)),La(e,h,y,!tt);return}}k0(e,n,h,r,o,u,y,b,B)}function Ky(e){for(var n=e;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var u=r[o],h=u.getSnapshot;u=u.value;try{if(!Qn(h(),u))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function La(e,n,r,o){n&=~Cf,n&=~mr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Bt(u),y=1<<h;o[h]=-1,u&=~y}r!==0&&Xs(e,r,n)}function Yl(){return(Ue&6)===0?(bo(0),!1):!0}function Of(){if(ve!==null){if(ze===0)var e=ve.return;else e=ve,Yi=sr=null,ju(e),Kr=null,so=0,e=ve;for(;e!==null;)h0(e.alternate,e),e=e.return;ve=null}}function ss(e,n){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,gS(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),aa=0,Of(),qe=e,ve=r=Wi(e.current,null),Me=n,ze=0,ei=null,wa=!1,is=Ht(e,n),wf=!1,as=ni=Cf=mr=Ca=nn=0,Wn=Eo=null,Df=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Bt(o),h=1<<u;n|=e[u],o&=~h}return ia=n,pl(),r}function z0(e,n){ce=null,P.H=mo,n===jr||n===xl?(n=Jp(),ze=3):n===Bu?(n=Jp(),ze=4):ze=n===hf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ei=n,ve===null&&(nn=1,zl(e,ci(n,e.current)))}function B0(){var e=$n.current;return e===null?!0:(Me&4194048)===Me?di===null:(Me&62914560)===Me||(Me&536870912)!==0?e===di:!1}function I0(){var e=P.H;return P.H=mo,e===null?mo:e}function F0(){var e=P.A;return P.A=Zy,e}function Zl(){nn=4,wa||(Me&4194048)!==Me&&$n.current!==null||(is=!0),(Ca&134217727)===0&&(mr&134217727)===0||qe===null||La(qe,Me,ni,!1)}function Pf(e,n,r){var o=Ue;Ue|=2;var u=I0(),h=F0();(qe!==e||Me!==n)&&(ql=null,ss(e,n)),n=!1;var y=nn;t:do try{if(ze!==0&&ve!==null){var b=ve,B=ei;switch(ze){case 8:Of(),y=6;break t;case 3:case 2:case 9:case 6:$n.current===null&&(n=!0);var tt=ze;if(ze=0,ei=null,os(e,b,B,tt),r&&is){y=0;break t}break;default:tt=ze,ze=0,ei=null,os(e,b,B,tt)}}Qy(),y=nn;break}catch(ht){z0(e,ht)}while(!0);return n&&e.shellSuspendCounter++,Yi=sr=null,Ue=o,P.H=u,P.A=h,ve===null&&(qe=null,Me=0,pl()),y}function Qy(){for(;ve!==null;)H0(ve)}function Jy(e,n){var r=Ue;Ue|=2;var o=I0(),u=F0();qe!==e||Me!==n?(ql=null,Wl=T()+500,ss(e,n)):is=Ht(e,n);t:do try{if(ze!==0&&ve!==null){n=ve;var h=ei;e:switch(ze){case 1:ze=0,ei=null,os(e,n,h,1);break;case 2:case 9:if(Kp(h)){ze=0,ei=null,G0(n);break}n=function(){ze!==2&&ze!==9||qe!==e||(ze=7),Oi(e)},h.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:Kp(h)?(ze=0,ei=null,G0(n)):(ze=0,ei=null,os(e,n,h,7));break;case 5:var y=null;switch(ve.tag){case 26:y=ve.memoizedState;case 5:case 27:var b=ve;if(y?Ag(y):b.stateNode.complete){ze=0,ei=null;var B=b.sibling;if(B!==null)ve=B;else{var tt=b.return;tt!==null?(ve=tt,jl(tt)):ve=null}break e}}ze=0,ei=null,os(e,n,h,5);break;case 6:ze=0,ei=null,os(e,n,h,6);break;case 8:Of(),nn=6;break t;default:throw Error(a(462))}}$y();break}catch(ht){z0(e,ht)}while(!0);return Yi=sr=null,P.H=o,P.A=u,Ue=r,ve!==null?0:(qe=null,Me=0,pl(),nn)}function $y(){for(;ve!==null&&!Je();)H0(ve)}function H0(e){var n=u0(e.alternate,e,ia);e.memoizedProps=e.pendingProps,n===null?jl(e):ve=n}function G0(e){var n=e,r=n.alternate;switch(n.tag){case 15:case 0:n=a0(r,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=a0(r,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:ju(n);default:h0(r,n),n=ve=Fp(n,ia),n=u0(r,n,ia)}e.memoizedProps=e.pendingProps,n===null?jl(e):ve=n}function os(e,n,r,o){Yi=sr=null,ju(n),Kr=null,so=0;var u=n.return;try{if(Gy(e,u,n,r,Me)){nn=1,zl(e,ci(r,e.current)),ve=null;return}}catch(h){if(u!==null)throw ve=u,h;nn=1,zl(e,ci(r,e.current)),ve=null;return}n.flags&32768?(Te||o===1?e=!0:is||(Me&536870912)!==0?e=!1:(wa=e=!0,(o===2||o===9||o===3||o===6)&&(o=$n.current,o!==null&&o.tag===13&&(o.flags|=16384))),V0(n,e)):jl(n)}function jl(e){var n=e;do{if((n.flags&32768)!==0){V0(n,wa);return}e=n.return;var r=Xy(n.alternate,n,ia);if(r!==null){ve=r;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=e}while(n!==null);nn===0&&(nn=5)}function V0(e,n){do{var r=Wy(e.alternate,e);if(r!==null){r.flags&=32767,ve=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(e=e.sibling,e!==null)){ve=e;return}ve=e=r}while(e!==null);nn=6,ve=null}function k0(e,n,r,o,u,h,y,b,B){e.cancelPendingCommit=null;do Kl();while(mn!==0);if((Ue&6)!==0)throw Error(a(327));if(n!==null){if(n===e.current)throw Error(a(177));if(h=n.lanes|n.childLanes,h|=xu,oi(e,r,h,y,b,B),e===qe&&(ve=qe=null,Me=0),rs=n,Ua=e,aa=r,Uf=h,Lf=u,L0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,iS(ft,function(){return Z0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=K.p,K.p=2,y=Ue,Ue|=4;try{qy(e,n,r)}finally{Ue=y,K.p=u,P.T=o}}mn=1,X0(),W0(),q0()}}function X0(){if(mn===1){mn=0;var e=Ua,n=rs,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=P.T,P.T=null;var o=K.p;K.p=2;var u=Ue;Ue|=4;try{T0(n,e);var h=Yf,y=Dp(e.containerInfo),b=h.focusedElem,B=h.selectionRange;if(y!==b&&b&&b.ownerDocument&&Cp(b.ownerDocument.documentElement,b)){if(B!==null&&_u(b)){var tt=B.start,ht=B.end;if(ht===void 0&&(ht=tt),"selectionStart"in b)b.selectionStart=tt,b.selectionEnd=Math.min(ht,b.value.length);else{var gt=b.ownerDocument||document,it=gt&&gt.defaultView||window;if(it.getSelection){var ct=it.getSelection(),Gt=b.textContent.length,ne=Math.min(B.start,Gt),Ge=B.end===void 0?ne:Math.min(B.end,Gt);!ct.extend&&ne>Ge&&(y=Ge,Ge=ne,ne=y);var j=wp(b,ne),k=wp(b,Ge);if(j&&k&&(ct.rangeCount!==1||ct.anchorNode!==j.node||ct.anchorOffset!==j.offset||ct.focusNode!==k.node||ct.focusOffset!==k.offset)){var $=gt.createRange();$.setStart(j.node,j.offset),ct.removeAllRanges(),ne>Ge?(ct.addRange($),ct.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),ct.addRange($))}}}}for(gt=[],ct=b;ct=ct.parentNode;)ct.nodeType===1&&gt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<gt.length;b++){var mt=gt[b];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}lc=!!qf,Yf=qf=null}finally{Ue=u,K.p=o,P.T=r}}e.current=n,mn=2}}function W0(){if(mn===2){mn=0;var e=Ua,n=rs,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=P.T,P.T=null;var o=K.p;K.p=2;var u=Ue;Ue|=4;try{y0(e,n.alternate,n)}finally{Ue=u,K.p=o,P.T=r}}mn=3}}function q0(){if(mn===4||mn===3){mn=0,L();var e=Ua,n=rs,r=aa,o=L0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,rs=Ua=null,Y0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Da=null),Nr(r),n=n.stateNode,Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(Rt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=K.p,K.p=2,P.T=null;try{for(var h=e.onRecoverableError,y=0;y<o.length;y++){var b=o[y];h(b.value,{componentStack:b.stack})}}finally{P.T=n,K.p=u}}(aa&3)!==0&&Kl(),Oi(e),u=e.pendingLanes,(r&261930)!==0&&(u&42)!==0?e===Nf?To++:(To=0,Nf=e):To=0,bo(0)}}function Y0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ao(n)))}function Kl(){return X0(),W0(),q0(),Z0()}function Z0(){if(mn!==5)return!1;var e=Ua,n=Uf;Uf=0;var r=Nr(aa),o=P.T,u=K.p;try{K.p=32>r?32:r,P.T=null,r=Lf,Lf=null;var h=Ua,y=aa;if(mn=0,rs=Ua=null,aa=0,(Ue&6)!==0)throw Error(a(331));var b=Ue;if(Ue|=4,C0(h.current),A0(h,h.current,y,r),Ue=b,bo(0,!1),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(Rt,h)}catch{}return!0}finally{K.p=u,P.T=o,Y0(e,n)}}function j0(e,n,r){n=ci(r,n),n=ff(e.stateNode,n,2),e=Ta(e,n,2),e!==null&&(Pn(e,2),Oi(e))}function Be(e,n,r){if(e.tag===3)j0(e,e,r);else for(;n!==null;){if(n.tag===3){j0(n,e,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Da===null||!Da.has(o))){e=ci(r,e),r=Km(2),o=Ta(n,r,2),o!==null&&(Qm(r,o,n,e),Pn(o,2),Oi(o));break}}n=n.return}}function zf(e,n,r){var o=e.pingCache;if(o===null){o=e.pingCache=new jy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(r)||(wf=!0,u.add(r),e=tS.bind(null,e,n,r),n.then(e,e))}function tS(e,n,r){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,qe===e&&(Me&r)===r&&(nn===4||nn===3&&(Me&62914560)===Me&&300>T()-Xl?(Ue&2)===0&&ss(e,0):Cf|=r,as===Me&&(as=0)),Oi(e)}function K0(e,n){n===0&&(n=Pe()),e=ir(e,n),e!==null&&(Pn(e,n),Oi(e))}function eS(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),K0(e,r)}function nS(e,n){var r=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(r=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(n),K0(e,r)}function iS(e,n){return se(e,n)}var Ql=null,ls=null,Bf=!1,Jl=!1,If=!1,Na=0;function Oi(e){e!==ls&&e.next===null&&(ls===null?Ql=ls=e:ls=ls.next=e),Jl=!0,Bf||(Bf=!0,rS())}function bo(e,n){if(!If&&Jl){If=!0;do for(var r=!1,o=Ql;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var y=o.suspendedLanes,b=o.pingedLanes;h=(1<<31-Bt(42|e)+1)-1,h&=u&~(y&~b),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(r=!0,tg(o,h))}else h=Me,h=vt(o,o===qe?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Ht(o,h)||(r=!0,tg(o,h));o=o.next}while(r);If=!1}}function aS(){Q0()}function Q0(){Jl=Bf=!1;var e=0;Na!==0&&mS()&&(e=Na);for(var n=T(),r=null,o=Ql;o!==null;){var u=o.next,h=J0(o,n);h===0?(o.next=null,r===null?Ql=u:r.next=u,u===null&&(ls=r)):(r=o,(e!==0||(h&3)!==0)&&(Jl=!0)),o=u}mn!==0&&mn!==5||bo(e),Na!==0&&(Na=0)}function J0(e,n){for(var r=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var y=31-Bt(h),b=1<<y,B=u[y];B===-1?((b&r)===0||(b&o)!==0)&&(u[y]=ae(b,n)):B<=n&&(e.expiredLanes|=b),h&=~b}if(n=qe,r=Me,r=vt(e,e===n?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,r===0||e===n&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&tn(o),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Ht(e,r)){if(n=r&-r,n===e.callbackPriority)return n;switch(o!==null&&tn(o),Nr(r)){case 2:case 8:r=Et;break;case 32:r=ft;break;case 268435456:r=Dt;break;default:r=ft}return o=$0.bind(null,e),r=se(r,o),e.callbackPriority=n,e.callbackNode=r,n}return o!==null&&o!==null&&tn(o),e.callbackPriority=2,e.callbackNode=null,2}function $0(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(Kl()&&e.callbackNode!==r)return null;var o=Me;return o=vt(e,e===qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(O0(e,o,n),J0(e,T()),e.callbackNode!=null&&e.callbackNode===r?$0.bind(null,e):null)}function tg(e,n){if(Kl())return null;O0(e,n,!0)}function rS(){_S(function(){(Ue&6)!==0?se(pt,aS):Q0()})}function Ff(){if(Na===0){var e=Yr;e===0&&(e=wt,wt<<=1,(wt&261888)===0&&(wt=256)),Na=e}return Na}function eg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:sl(""+e)}function ng(e,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,e.id&&r.setAttribute("form",e.id),n.parentNode.insertBefore(r,n),e=new FormData(e),r.parentNode.removeChild(r),e}function sS(e,n,r,o,u){if(n==="submit"&&r&&r.stateNode===u){var h=eg((u[Tn]||null).action),y=o.submitter;y&&(n=(n=y[Tn]||null)?eg(n.formAction):y.getAttribute("formAction"),n!==null&&(h=n,y=null));var b=new ul("action","action",null,o,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Na!==0){var B=y?ng(u,y):new FormData(u);rf(r,{pending:!0,data:B,method:u.method,action:h},null,B)}}else typeof h=="function"&&(b.preventDefault(),B=y?ng(u,y):new FormData(u),rf(r,{pending:!0,data:B,method:u.method,action:h},h,B))},currentTarget:u}]})}}for(var Hf=0;Hf<Mu.length;Hf++){var Gf=Mu[Hf],oS=Gf.toLowerCase(),lS=Gf[0].toUpperCase()+Gf.slice(1);Si(oS,"on"+lS)}Si(Np,"onAnimationEnd"),Si(Op,"onAnimationIteration"),Si(Pp,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(Ty,"onTransitionRun"),Si(by,"onTransitionStart"),Si(Ay,"onTransitionCancel"),Si(zp,"onTransitionEnd"),Qt("onMouseEnter",["mouseout","mouseover"]),Qt("onMouseLeave",["mouseout","mouseover"]),Qt("onPointerEnter",["pointerout","pointerover"]),Qt("onPointerLeave",["pointerout","pointerover"]),zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),zt("onBeforeInput",["compositionend","keypress","textInput","paste"]),zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ao));function ig(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var y=o.length-1;0<=y;y--){var b=o[y],B=b.instance,tt=b.currentTarget;if(b=b.listener,B!==h&&u.isPropagationStopped())break t;h=b,u.currentTarget=tt;try{h(u)}catch(ht){dl(ht)}u.currentTarget=null,h=B}else for(y=0;y<o.length;y++){if(b=o[y],B=b.instance,tt=b.currentTarget,b=b.listener,B!==h&&u.isPropagationStopped())break t;h=b,u.currentTarget=tt;try{h(u)}catch(ht){dl(ht)}u.currentTarget=null,h=B}}}}function ye(e,n){var r=n[qs];r===void 0&&(r=n[qs]=new Set);var o=e+"__bubble";r.has(o)||(ag(n,e,2,!1),r.add(o))}function Vf(e,n,r){var o=0;n&&(o|=4),ag(r,e,o,n)}var $l="_reactListening"+Math.random().toString(36).slice(2);function kf(e){if(!e[$l]){e[$l]=!0,Ot.forEach(function(r){r!=="selectionchange"&&(cS.has(r)||Vf(r,!1,e),Vf(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[$l]||(n[$l]=!0,Vf("selectionchange",!1,n))}}function ag(e,n,r,o){switch(Ng(n)){case 2:var u=BS;break;case 8:u=IS;break;default:u=ah}r=u.bind(null,n,r,e),u=void 0,!lu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,r,{capture:!0,passive:u}):e.addEventListener(n,r,!0):u!==void 0?e.addEventListener(n,r,{passive:u}):e.addEventListener(n,r,!1)}function Xf(e,n,r,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var b=o.stateNode.containerInfo;if(b===u)break;if(y===4)for(y=o.return;y!==null;){var B=y.tag;if((B===3||B===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;b!==null;){if(y=q(b),y===null)return;if(B=y.tag,B===5||B===6||B===26||B===27){o=h=y;continue t}b=b.parentNode}}o=o.return}cp(function(){var tt=h,ht=su(r),gt=[];t:{var it=Bp.get(e);if(it!==void 0){var ct=ul,Gt=e;switch(e){case"keypress":if(ll(r)===0)break t;case"keydown":case"keyup":ct=ny;break;case"focusin":Gt="focus",ct=hu;break;case"focusout":Gt="blur",ct=hu;break;case"beforeblur":case"afterblur":ct=hu;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=hp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=Xv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=ry;break;case Np:case Op:case Pp:ct=Yv;break;case zp:ct=oy;break;case"scroll":case"scrollend":ct=Vv;break;case"wheel":ct=cy;break;case"copy":case"cut":case"paste":ct=jv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=pp;break;case"toggle":case"beforetoggle":ct=fy}var ne=(n&4)!==0,Ge=!ne&&(e==="scroll"||e==="scrollend"),j=ne?it!==null?it+"Capture":null:it;ne=[];for(var k=tt,$;k!==null;){var mt=k;if($=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||$===null||j===null||(mt=Ys(k,j),mt!=null&&ne.push(Ro(k,mt,$))),Ge)break;k=k.return}0<ne.length&&(it=new ct(it,Gt,null,r,ht),gt.push({event:it,listeners:ne}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",it&&r!==ru&&(Gt=r.relatedTarget||r.fromElement)&&(q(Gt)||Gt[ga]))break t;if((ct||it)&&(it=ht.window===ht?ht:(it=ht.ownerDocument)?it.defaultView||it.parentWindow:window,ct?(Gt=r.relatedTarget||r.toElement,ct=tt,Gt=Gt?q(Gt):null,Gt!==null&&(Ge=c(Gt),ne=Gt.tag,Gt!==Ge||ne!==5&&ne!==27&&ne!==6)&&(Gt=null)):(ct=null,Gt=tt),ct!==Gt)){if(ne=hp,mt="onMouseLeave",j="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ne=pp,mt="onPointerLeave",j="onPointerEnter",k="pointer"),Ge=ct==null?it:st(ct),$=Gt==null?it:st(Gt),it=new ne(mt,k+"leave",ct,r,ht),it.target=Ge,it.relatedTarget=$,mt=null,q(ht)===tt&&(ne=new ne(j,k+"enter",Gt,r,ht),ne.target=$,ne.relatedTarget=Ge,mt=ne),Ge=mt,ct&&Gt)e:{for(ne=uS,j=ct,k=Gt,$=0,mt=j;mt;mt=ne(mt))$++;mt=0;for(var te=k;te;te=ne(te))mt++;for(;0<$-mt;)j=ne(j),$--;for(;0<mt-$;)k=ne(k),mt--;for(;$--;){if(j===k||k!==null&&j===k.alternate){ne=j;break e}j=ne(j),k=ne(k)}ne=null}else ne=null;ct!==null&&rg(gt,it,ct,ne,!1),Gt!==null&&Ge!==null&&rg(gt,Ge,Gt,ne,!0)}}t:{if(it=tt?st(tt):window,ct=it.nodeName&&it.nodeName.toLowerCase(),ct==="select"||ct==="input"&&it.type==="file")var we=xp;else if(Sp(it))if(Ep)we=My;else{we=yy;var Xt=vy}else ct=it.nodeName,!ct||ct.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?tt&&au(tt.elementType)&&(we=xp):we=Sy;if(we&&(we=we(e,tt))){Mp(gt,we,r,ht);break t}Xt&&Xt(e,it,tt),e==="focusout"&&tt&&it.type==="number"&&tt.memoizedProps.value!=null&&pn(it,"number",it.value)}switch(Xt=tt?st(tt):window,e){case"focusin":(Sp(Xt)||Xt.contentEditable==="true")&&(Fr=Xt,vu=tt,eo=null);break;case"focusout":eo=vu=Fr=null;break;case"mousedown":yu=!0;break;case"contextmenu":case"mouseup":case"dragend":yu=!1,Up(gt,r,ht);break;case"selectionchange":if(Ey)break;case"keydown":case"keyup":Up(gt,r,ht)}var ue;if(pu)t:{switch(e){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else Ir?vp(e,r)&&(xe="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(xe="onCompositionStart");xe&&(mp&&r.locale!=="ko"&&(Ir||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Ir&&(ue=up()):(_a=ht,cu="value"in _a?_a.value:_a.textContent,Ir=!0)),Xt=tc(tt,xe),0<Xt.length&&(xe=new dp(xe,e,null,r,ht),gt.push({event:xe,listeners:Xt}),ue?xe.data=ue:(ue=yp(r),ue!==null&&(xe.data=ue)))),(ue=dy?py(e,r):my(e,r))&&(xe=tc(tt,"onBeforeInput"),0<xe.length&&(Xt=new dp("onBeforeInput","beforeinput",null,r,ht),gt.push({event:Xt,listeners:xe}),Xt.data=ue)),sS(gt,e,tt,r,ht)}ig(gt,n)})}function Ro(e,n,r){return{instance:e,listener:n,currentTarget:r}}function tc(e,n){for(var r=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Ys(e,r),u!=null&&o.unshift(Ro(e,u,h)),u=Ys(e,n),u!=null&&o.push(Ro(e,u,h))),e.tag===3)return o;e=e.return}return[]}function uS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function rg(e,n,r,o,u){for(var h=n._reactName,y=[];r!==null&&r!==o;){var b=r,B=b.alternate,tt=b.stateNode;if(b=b.tag,B!==null&&B===o)break;b!==5&&b!==26&&b!==27||tt===null||(B=tt,u?(tt=Ys(r,h),tt!=null&&y.unshift(Ro(r,tt,B))):u||(tt=Ys(r,h),tt!=null&&y.push(Ro(r,tt,B)))),r=r.return}y.length!==0&&e.push({event:n,listeners:y})}var fS=/\r\n?/g,hS=/\u0000|\uFFFD/g;function sg(e){return(typeof e=="string"?e:""+e).replace(fS,`
`).replace(hS,"")}function og(e,n){return n=sg(n),sg(e)===n}function He(e,n,r,o,u,h){switch(r){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Pr(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Pr(e,""+o);break;case"className":Ne(e,"class",o);break;case"tabIndex":Ne(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ne(e,r,o);break;case"style":op(e,o,h);break;case"data":if(n!=="object"){Ne(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){e.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=sl(""+o),e.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(r==="formAction"?(n!=="input"&&He(e,n,"name",u.name,u,null),He(e,n,"formEncType",u.formEncType,u,null),He(e,n,"formMethod",u.formMethod,u,null),He(e,n,"formTarget",u.formTarget,u,null)):(He(e,n,"encType",u.encType,u,null),He(e,n,"method",u.method,u,null),He(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=sl(""+o),e.setAttribute(r,o);break;case"onClick":o!=null&&(e.onclick=ki);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}r=sl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""+o):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":o===!0?e.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,o):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(r,o):e.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(r):e.setAttribute(r,o);break;case"popover":ye("beforetoggle",e),ye("toggle",e),We(e,"popover",o);break;case"xlinkActuate":_e(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":_e(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":_e(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":_e(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":_e(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":_e(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":_e(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":_e(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":_e(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":We(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Hv.get(r)||r,We(e,r,o))}}function Wf(e,n,r,o,u,h){switch(r){case"style":op(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof o=="string"?Pr(e,o):(typeof o=="number"||typeof o=="bigint")&&Pr(e,""+o);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vt.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),n=r.slice(2,u?r.length-7:void 0),h=e[Tn]||null,h=h!=null?h[r]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(n,o,u);break t}r in e?e[r]=o:o===!0?e.setAttribute(r,""):We(e,r,o)}}}function Cn(e,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var o=!1,u=!1,h;for(h in r)if(r.hasOwnProperty(h)){var y=r[h];if(y!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:He(e,n,h,y,r,null)}}u&&He(e,n,"srcSet",r.srcSet,r,null),o&&He(e,n,"src",r.src,r,null);return;case"input":ye("invalid",e);var b=h=y=u=null,B=null,tt=null;for(o in r)if(r.hasOwnProperty(o)){var ht=r[o];if(ht!=null)switch(o){case"name":u=ht;break;case"type":y=ht;break;case"checked":B=ht;break;case"defaultChecked":tt=ht;break;case"value":h=ht;break;case"defaultValue":b=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(a(137,n));break;default:He(e,n,o,ht,r,null)}}zn(e,h,b,B,tt,y,u,!1);return;case"select":ye("invalid",e),o=y=h=null;for(u in r)if(r.hasOwnProperty(u)&&(b=r[u],b!=null))switch(u){case"value":h=b;break;case"defaultValue":y=b;break;case"multiple":o=b;default:He(e,n,u,b,r,null)}n=h,r=y,e.multiple=!!o,n!=null?rn(e,!!o,n,!1):r!=null&&rn(e,!!o,r,!0);return;case"textarea":ye("invalid",e),h=u=o=null;for(y in r)if(r.hasOwnProperty(y)&&(b=r[y],b!=null))switch(y){case"value":o=b;break;case"defaultValue":u=b;break;case"children":h=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(a(91));break;default:He(e,n,y,b,r,null)}Di(e,o,u,h);return;case"option":for(B in r)r.hasOwnProperty(B)&&(o=r[B],o!=null)&&(B==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":He(e,n,B,o,r,null));return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(o=0;o<Ao.length;o++)ye(Ao[o],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in r)if(r.hasOwnProperty(tt)&&(o=r[tt],o!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:He(e,n,tt,o,r,null)}return;default:if(au(n)){for(ht in r)r.hasOwnProperty(ht)&&(o=r[ht],o!==void 0&&Wf(e,n,ht,o,r,void 0));return}}for(b in r)r.hasOwnProperty(b)&&(o=r[b],o!=null&&He(e,n,b,o,r,null))}function dS(e,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,y=null,b=null,B=null,tt=null,ht=null;for(ct in r){var gt=r[ct];if(r.hasOwnProperty(ct)&&gt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":B=gt;default:o.hasOwnProperty(ct)||He(e,n,ct,null,o,gt)}}for(var it in o){var ct=o[it];if(gt=r[it],o.hasOwnProperty(it)&&(ct!=null||gt!=null))switch(it){case"type":h=ct;break;case"name":u=ct;break;case"checked":tt=ct;break;case"defaultChecked":ht=ct;break;case"value":y=ct;break;case"defaultValue":b=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(a(137,n));break;default:ct!==gt&&He(e,n,it,ct,o,gt)}}Dn(e,y,b,B,tt,ht,h,u);return;case"select":ct=y=b=it=null;for(h in r)if(B=r[h],r.hasOwnProperty(h)&&B!=null)switch(h){case"value":break;case"multiple":ct=B;default:o.hasOwnProperty(h)||He(e,n,h,null,o,B)}for(u in o)if(h=o[u],B=r[u],o.hasOwnProperty(u)&&(h!=null||B!=null))switch(u){case"value":it=h;break;case"defaultValue":b=h;break;case"multiple":y=h;default:h!==B&&He(e,n,u,h,o,B)}n=b,r=y,o=ct,it!=null?rn(e,!!r,it,!1):!!o!=!!r&&(n!=null?rn(e,!!r,n,!0):rn(e,!!r,r?[]:"",!1));return;case"textarea":ct=it=null;for(b in r)if(u=r[b],r.hasOwnProperty(b)&&u!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:He(e,n,b,null,o,u)}for(y in o)if(u=o[y],h=r[y],o.hasOwnProperty(y)&&(u!=null||h!=null))switch(y){case"value":it=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==h&&He(e,n,y,u,o,h)}Or(e,it,ct);return;case"option":for(var Gt in r)it=r[Gt],r.hasOwnProperty(Gt)&&it!=null&&!o.hasOwnProperty(Gt)&&(Gt==="selected"?e.selected=!1:He(e,n,Gt,null,o,it));for(B in o)it=o[B],ct=r[B],o.hasOwnProperty(B)&&it!==ct&&(it!=null||ct!=null)&&(B==="selected"?e.selected=it&&typeof it!="function"&&typeof it!="symbol":He(e,n,B,it,o,ct));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in r)it=r[ne],r.hasOwnProperty(ne)&&it!=null&&!o.hasOwnProperty(ne)&&He(e,n,ne,null,o,it);for(tt in o)if(it=o[tt],ct=r[tt],o.hasOwnProperty(tt)&&it!==ct&&(it!=null||ct!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(a(137,n));break;default:He(e,n,tt,it,o,ct)}return;default:if(au(n)){for(var Ge in r)it=r[Ge],r.hasOwnProperty(Ge)&&it!==void 0&&!o.hasOwnProperty(Ge)&&Wf(e,n,Ge,void 0,o,it);for(ht in o)it=o[ht],ct=r[ht],!o.hasOwnProperty(ht)||it===ct||it===void 0&&ct===void 0||Wf(e,n,ht,it,o,ct);return}}for(var j in r)it=r[j],r.hasOwnProperty(j)&&it!=null&&!o.hasOwnProperty(j)&&He(e,n,j,null,o,it);for(gt in o)it=o[gt],ct=r[gt],!o.hasOwnProperty(gt)||it===ct||it==null&&ct==null||He(e,n,gt,it,o,ct)}function lg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function pS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,r=performance.getEntriesByType("resource"),o=0;o<r.length;o++){var u=r[o],h=u.transferSize,y=u.initiatorType,b=u.duration;if(h&&b&&lg(y)){for(y=0,b=u.responseEnd,o+=1;o<r.length;o++){var B=r[o],tt=B.startTime;if(tt>b)break;var ht=B.transferSize,gt=B.initiatorType;ht&&lg(gt)&&(B=B.responseEnd,y+=ht*(B<b?1:(b-tt)/(B-tt)))}if(--o,n+=8*(h+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var qf=null,Yf=null;function ec(e){return e.nodeType===9?e:e.ownerDocument}function cg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ug(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Zf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var jf=null;function mS(){var e=window.event;return e&&e.type==="popstate"?e===jf?!1:(jf=e,!0):(jf=null,!1)}var fg=typeof setTimeout=="function"?setTimeout:void 0,gS=typeof clearTimeout=="function"?clearTimeout:void 0,hg=typeof Promise=="function"?Promise:void 0,_S=typeof queueMicrotask=="function"?queueMicrotask:typeof hg<"u"?function(e){return hg.resolve(null).then(e).catch(vS)}:fg;function vS(e){setTimeout(function(){throw e})}function Oa(e){return e==="head"}function dg(e,n){var r=n,o=0;do{var u=r.nextSibling;if(e.removeChild(r),u&&u.nodeType===8)if(r=u.data,r==="/$"||r==="/&"){if(o===0){e.removeChild(u),hs(n);return}o--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")o++;else if(r==="html")wo(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,wo(r);for(var h=r.firstChild;h;){var y=h.nextSibling,b=h.nodeName;h[Ja]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&h.rel.toLowerCase()==="stylesheet"||r.removeChild(h),h=y}}else r==="body"&&wo(e.ownerDocument.body);r=u}while(r);hs(n)}function pg(e,n){var r=e;e=0;do{var o=r.nextSibling;if(r.nodeType===1?n?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(n?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=o}while(r)}function Kf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Kf(r),R(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function yS(e,n,r,o){for(;e.nodeType===1;){var u=r;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ja])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=pi(e.nextSibling),e===null)break}return null}function SS(e,n,r){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=pi(e.nextSibling),e===null))return null;return e}function mg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=pi(e.nextSibling),e===null))return null;return e}function Qf(e){return e.data==="$?"||e.data==="$~"}function Jf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function MS(e,n){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||r.readyState!=="loading")n();else{var o=function(){n(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function pi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var $f=null;function gg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(n===0)return pi(e.nextSibling);n--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||n++}e=e.nextSibling}return null}function _g(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(n===0)return e;n--}else r!=="/$"&&r!=="/&"||n++}e=e.previousSibling}return null}function vg(e,n,r){switch(n=ec(r),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function wo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);R(e)}var mi=new Map,yg=new Set;function nc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ra=K.d;K.d={f:xS,r:ES,D:TS,C:bS,L:AS,m:RS,X:CS,S:wS,M:DS};function xS(){var e=ra.f(),n=Yl();return e||n}function ES(e){var n=at(e);n!==null&&n.tag===5&&n.type==="form"?zm(n):ra.r(e)}var cs=typeof document>"u"?null:document;function Sg(e,n,r){var o=cs;if(o&&typeof n=="string"&&n){var u=Se(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),yg.has(u)||(yg.add(u),e={rel:e,crossOrigin:r,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Cn(n,"link",e),St(n),o.head.appendChild(n)))}}function TS(e){ra.D(e),Sg("dns-prefetch",e,null)}function bS(e,n){ra.C(e,n),Sg("preconnect",e,n)}function AS(e,n,r){ra.L(e,n,r);var o=cs;if(o&&e&&n){var u='link[rel="preload"][as="'+Se(n)+'"]';n==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+Se(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+Se(r.imageSizes)+'"]')):u+='[href="'+Se(e)+'"]';var h=u;switch(n){case"style":h=us(e);break;case"script":h=fs(e)}mi.has(h)||(e=_({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:e,as:n},r),mi.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Co(h))||n==="script"&&o.querySelector(Do(h))||(n=o.createElement("link"),Cn(n,"link",e),St(n),o.head.appendChild(n)))}}function RS(e,n){ra.m(e,n);var r=cs;if(r&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Se(o)+'"][href="'+Se(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=fs(e)}if(!mi.has(h)&&(e=_({rel:"modulepreload",href:e},n),mi.set(h,e),r.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Do(h)))return}o=r.createElement("link"),Cn(o,"link",e),St(o),r.head.appendChild(o)}}}function wS(e,n,r){ra.S(e,n,r);var o=cs;if(o&&e){var u=Z(o).hoistableStyles,h=us(e);n=n||"default";var y=u.get(h);if(!y){var b={loading:0,preload:null};if(y=o.querySelector(Co(h)))b.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},r),(r=mi.get(h))&&th(e,r);var B=y=o.createElement("link");St(B),Cn(B,"link",e),B._p=new Promise(function(tt,ht){B.onload=tt,B.onerror=ht}),B.addEventListener("load",function(){b.loading|=1}),B.addEventListener("error",function(){b.loading|=2}),b.loading|=4,ic(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:b},u.set(h,y)}}}function CS(e,n){ra.X(e,n);var r=cs;if(r&&e){var o=Z(r).hoistableScripts,u=fs(e),h=o.get(u);h||(h=r.querySelector(Do(u)),h||(e=_({src:e,async:!0},n),(n=mi.get(u))&&eh(e,n),h=r.createElement("script"),St(h),Cn(h,"link",e),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function DS(e,n){ra.M(e,n);var r=cs;if(r&&e){var o=Z(r).hoistableScripts,u=fs(e),h=o.get(u);h||(h=r.querySelector(Do(u)),h||(e=_({src:e,async:!0,type:"module"},n),(n=mi.get(u))&&eh(e,n),h=r.createElement("script"),St(h),Cn(h,"link",e),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function Mg(e,n,r,o){var u=(u=_t.current)?nc(u):null;if(!u)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=us(r.href),r=Z(u).hoistableStyles,o=r.get(n),o||(o={type:"style",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=us(r.href);var h=Z(u).hoistableStyles,y=h.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,y),(h=u.querySelector(Co(e)))&&!h._p&&(y.instance=h,y.state.loading=5),mi.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},mi.set(e,r),h||US(u,e,r,y.state))),n&&o===null)throw Error(a(528,""));return y}if(n&&o!==null)throw Error(a(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=fs(r),r=Z(u).hoistableScripts,o=r.get(n),o||(o={type:"script",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function us(e){return'href="'+Se(e)+'"'}function Co(e){return'link[rel="stylesheet"]['+e+"]"}function xg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function US(e,n,r,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",r),St(n),e.head.appendChild(n))}function fs(e){return'[src="'+Se(e)+'"]'}function Do(e){return"script[async]"+e}function Eg(e,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Se(r.href)+'"]');if(o)return n.instance=o,St(o),o;var u=_({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),St(o),Cn(o,"style",u),ic(o,r.precedence,e),n.instance=o;case"stylesheet":u=us(r.href);var h=e.querySelector(Co(u));if(h)return n.state.loading|=4,n.instance=h,St(h),h;o=xg(r),(u=mi.get(u))&&th(o,u),h=(e.ownerDocument||e).createElement("link"),St(h);var y=h;return y._p=new Promise(function(b,B){y.onload=b,y.onerror=B}),Cn(h,"link",o),n.state.loading|=4,ic(h,r.precedence,e),n.instance=h;case"script":return h=fs(r.src),(u=e.querySelector(Do(h)))?(n.instance=u,St(u),u):(o=r,(u=mi.get(h))&&(o=_({},r),eh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),St(u),Cn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ic(o,r.precedence,e));return n.instance}function ic(e,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,y=0;y<o.length;y++){var b=o[y];if(b.dataset.precedence===n)h=b;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(e,n.firstChild))}function th(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function eh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ac=null;function Tg(e,n,r){if(ac===null){var o=new Map,u=ac=new Map;u.set(r,o)}else u=ac,o=u.get(r),o||(o=new Map,u.set(r,o));if(o.has(e))return o;for(o.set(e,null),r=r.getElementsByTagName(e),u=0;u<r.length;u++){var h=r[u];if(!(h[Ja]||h[ln]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var y=h.getAttribute(n)||"";y=e+y;var b=o.get(y);b?b.push(h):o.set(y,[h])}}return o}function bg(e,n,r){e=e.ownerDocument||e,e.head.insertBefore(r,n==="title"?e.querySelector("head > title"):null)}function LS(e,n,r){if(r===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ag(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function NS(e,n,r,o){if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var u=us(o.href),h=n.querySelector(Co(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=rc.bind(e),n.then(e,e)),r.state.loading|=4,r.instance=h,St(h);return}h=n.ownerDocument||n,o=xg(o),(u=mi.get(u))&&th(o,u),h=h.createElement("link"),St(h);var y=h;y._p=new Promise(function(b,B){y.onload=b,y.onerror=B}),Cn(h,"link",o),r.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=rc.bind(e),n.addEventListener("load",r),n.addEventListener("error",r))}}var nh=0;function OS(e,n){return e.stylesheets&&e.count===0&&oc(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var o=setTimeout(function(){if(e.stylesheets&&oc(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&nh===0&&(nh=62500*pS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&oc(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>nh?50:800)+n);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function rc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)oc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var sc=null;function oc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,sc=new Map,n.forEach(PS,e),sc=null,rc.call(e))}function PS(e,n){if(!(n.state.loading&4)){var r=sc.get(e);if(r)var o=r.get(null);else{r=new Map,sc.set(e,r);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var y=u[h];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(r.set(y.dataset.precedence,y),o=y)}o&&r.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),h=r.get(y)||o,h===o&&r.set(null,u),r.set(y,u),this.count++,o=rc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Uo={$$typeof:U,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function zS(e,n,r,o,u,h,y,b,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function Rg(e,n,r,o,u,h,y,b,B,tt,ht,gt){return e=new zS(e,n,r,y,B,tt,ht,gt,b),n=1,h===!0&&(n|=24),h=Jn(3,null,null,n),e.current=h,h.stateNode=e,n=Ou(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:r,cache:n},Iu(h),e}function wg(e){return e?(e=Vr,e):Vr}function Cg(e,n,r,o,u,h){u=wg(u),o.context===null?o.context=u:o.pendingContext=u,o=Ea(n),o.payload={element:r},h=h===void 0?null:h,h!==null&&(o.callback=h),r=Ta(e,o,n),r!==null&&(qn(r,e,n),lo(r,e,n))}function Dg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function ih(e,n){Dg(e,n),(e=e.alternate)&&Dg(e,n)}function Ug(e){if(e.tag===13||e.tag===31){var n=ir(e,67108864);n!==null&&qn(n,e,67108864),ih(e,67108864)}}function Lg(e){if(e.tag===13||e.tag===31){var n=ii();n=Lr(n);var r=ir(e,n);r!==null&&qn(r,e,n),ih(e,n)}}var lc=!0;function BS(e,n,r,o){var u=P.T;P.T=null;var h=K.p;try{K.p=2,ah(e,n,r,o)}finally{K.p=h,P.T=u}}function IS(e,n,r,o){var u=P.T;P.T=null;var h=K.p;try{K.p=8,ah(e,n,r,o)}finally{K.p=h,P.T=u}}function ah(e,n,r,o){if(lc){var u=rh(o);if(u===null)Xf(e,n,o,cc,r),Og(e,o);else if(HS(u,e,n,r,o))o.stopPropagation();else if(Og(e,o),n&4&&-1<FS.indexOf(e)){for(;u!==null;){var h=at(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var y=Tt(h.pendingLanes);if(y!==0){var b=h;for(b.pendingLanes|=2,b.entangledLanes|=2;y;){var B=1<<31-Bt(y);b.entanglements[1]|=B,y&=~B}Oi(h),(Ue&6)===0&&(Wl=T()+500,bo(0))}}break;case 31:case 13:b=ir(h,2),b!==null&&qn(b,h,2),Yl(),ih(h,2)}if(h=rh(o),h===null&&Xf(e,n,o,cc,r),h===u)break;u=h}u!==null&&o.stopPropagation()}else Xf(e,n,o,null,r)}}function rh(e){return e=su(e),sh(e)}var cc=null;function sh(e){if(cc=null,e=q(e),e!==null){var n=c(e);if(n===null)e=null;else{var r=n.tag;if(r===13){if(e=f(n),e!==null)return e;e=null}else if(r===31){if(e=d(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return cc=e,null}function Ng(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(et()){case pt:return 2;case Et:return 8;case ft:case Yt:return 32;case Dt:return 268435456;default:return 32}default:return 32}}var oh=!1,Pa=null,za=null,Ba=null,Lo=new Map,No=new Map,Ia=[],FS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Og(e,n){switch(e){case"focusin":case"focusout":Pa=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":Ba=null;break;case"pointerover":case"pointerout":Lo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(n.pointerId)}}function Oo(e,n,r,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=at(n),n!==null&&Ug(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function HS(e,n,r,o,u){switch(n){case"focusin":return Pa=Oo(Pa,e,n,r,o,u),!0;case"dragenter":return za=Oo(za,e,n,r,o,u),!0;case"mouseover":return Ba=Oo(Ba,e,n,r,o,u),!0;case"pointerover":var h=u.pointerId;return Lo.set(h,Oo(Lo.get(h)||null,e,n,r,o,u)),!0;case"gotpointercapture":return h=u.pointerId,No.set(h,Oo(No.get(h)||null,e,n,r,o,u)),!0}return!1}function Pg(e){var n=q(e.target);if(n!==null){var r=c(n);if(r!==null){if(n=r.tag,n===13){if(n=f(r),n!==null){e.blockedOn=n,Ws(e.priority,function(){Lg(r)});return}}else if(n===31){if(n=d(r),n!==null){e.blockedOn=n,Ws(e.priority,function(){Lg(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function uc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=rh(e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);ru=o,r.target.dispatchEvent(o),ru=null}else return n=at(r),n!==null&&Ug(n),e.blockedOn=r,!1;n.shift()}return!0}function zg(e,n,r){uc(e)&&r.delete(n)}function GS(){oh=!1,Pa!==null&&uc(Pa)&&(Pa=null),za!==null&&uc(za)&&(za=null),Ba!==null&&uc(Ba)&&(Ba=null),Lo.forEach(zg),No.forEach(zg)}function fc(e,n){e.blockedOn===n&&(e.blockedOn=null,oh||(oh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,GS)))}var hc=null;function Bg(e){hc!==e&&(hc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){hc===e&&(hc=null);for(var n=0;n<e.length;n+=3){var r=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(sh(o||r)===null)continue;break}var h=at(r);h!==null&&(e.splice(n,3),n-=3,rf(h,{pending:!0,data:u,method:r.method,action:o},o,u))}}))}function hs(e){function n(B){return fc(B,e)}Pa!==null&&fc(Pa,e),za!==null&&fc(za,e),Ba!==null&&fc(Ba,e),Lo.forEach(n),No.forEach(n);for(var r=0;r<Ia.length;r++){var o=Ia[r];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ia.length&&(r=Ia[0],r.blockedOn===null);)Pg(r),r.blockedOn===null&&Ia.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var u=r[o],h=r[o+1],y=u[Tn]||null;if(typeof h=="function")y||Bg(r);else if(y){var b=null;if(h&&h.hasAttribute("formAction")){if(u=h,y=h[Tn]||null)b=y.formAction;else if(sh(u)!==null)continue}else b=y.action;typeof b=="function"?r[o+1]=b:(r.splice(o,3),o-=3),Bg(r)}}}function Ig(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(r,20)}function r(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(r,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function lh(e){this._internalRoot=e}dc.prototype.render=lh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var r=n.current,o=ii();Cg(r,o,e,n,null,null)},dc.prototype.unmount=lh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Cg(e.current,2,null,e,null,null),Yl(),n[ga]=null}};function dc(e){this._internalRoot=e}dc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Qa();e={blockedOn:null,target:e,priority:n};for(var r=0;r<Ia.length&&n!==0&&n<Ia[r].priority;r++);Ia.splice(r,0,e),r===0&&Pg(e)}};var Fg=t.version;if(Fg!=="19.2.8")throw Error(a(527,Fg,"19.2.8"));K.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var VS={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{Rt=pc.inject(VS),Ut=pc}catch{}}return zo.createRoot=function(e,n){if(!l(e))throw Error(a(299));var r=!1,o="",u=qm,h=Ym,y=Zm;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=Rg(e,1,!1,null,null,r,o,null,u,h,y,Ig),e[ga]=n.current,kf(e),new lh(n)},zo.hydrateRoot=function(e,n,r){if(!l(e))throw Error(a(299));var o=!1,u="",h=qm,y=Ym,b=Zm,B=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(y=r.onCaughtError),r.onRecoverableError!==void 0&&(b=r.onRecoverableError),r.formState!==void 0&&(B=r.formState)),n=Rg(e,1,!0,n,r??null,o,u,B,h,y,b,Ig),n.context=wg(null),r=n.current,o=ii(),o=Lr(o),u=Ea(o),u.callback=null,Ta(r,u,o),r=o,n.current.lanes=r,Pn(n,r),Oi(n),e[ga]=n.current,kf(e),new dc(n)},zo.version="19.2.8",zo}var jg;function tM(){if(jg)return fh.exports;jg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),fh.exports=$S(),fh.exports}var eM=tM();const Hd="179",nM=0,Kg=1,iM=2,av=1,rv=2,fa=3,ja=0,jn=1,ha=2,Ya=0,Ds=1,Qg=2,Jg=3,$g=4,aM=5,Tr=100,rM=101,sM=102,oM=103,lM=104,cM=200,uM=201,fM=202,hM=203,$h=204,td=205,dM=206,pM=207,mM=208,gM=209,_M=210,vM=211,yM=212,SM=213,MM=214,ed=0,nd=1,id=2,Ns=3,ad=4,rd=5,sd=6,od=7,sv=0,xM=1,EM=2,Za=0,TM=1,bM=2,AM=3,ov=4,RM=5,wM=6,CM=7,lv=300,Os=301,Ps=302,ld=303,cd=304,Qc=306,Qo=1e3,Ar=1001,ud=1002,wi=1003,DM=1004,mc=1005,zi=1006,mh=1007,Rr=1008,Fi=1009,cv=1010,uv=1011,Jo=1012,Gd=1013,wr=1014,da=1015,il=1016,Vd=1017,kd=1018,$o=1020,fv=35902,hv=1021,dv=1022,Ri=1023,tl=1026,el=1027,pv=1028,Xd=1029,mv=1030,Wd=1031,qd=1033,Hc=33776,Gc=33777,Vc=33778,kc=33779,fd=35840,hd=35841,dd=35842,pd=35843,md=36196,gd=37492,_d=37496,vd=37808,yd=37809,Sd=37810,Md=37811,xd=37812,Ed=37813,Td=37814,bd=37815,Ad=37816,Rd=37817,wd=37818,Cd=37819,Dd=37820,Ud=37821,Xc=36492,Ld=36494,Nd=36495,gv=36283,Od=36284,Pd=36285,zd=36286,UM=3200,LM=3201,_v=0,NM=1,qa="",Yn="srgb",zs="srgb-linear",qc="linear",Ve="srgb",ds=7680,t_=519,OM=512,PM=513,zM=514,vv=515,BM=516,IM=517,FM=518,HM=519,e_=35044,n_="300 es",Bi=2e3,Yc=2001;class Is{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(i)===-1&&a[t].push(i)}hasEventListener(t,i){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(i)!==-1}removeEventListener(t,i){const a=this._listeners;if(a===void 0)return;const l=a[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const a=i[t.type];if(a!==void 0){t.target=this;const l=a.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let i_=1234567;const qo=Math.PI/180,nl=180/Math.PI;function Fs(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[a&255]+Ln[a>>8&255]+Ln[a>>16&255]+Ln[a>>24&255]).toLowerCase()}function pe(s,t,i){return Math.max(t,Math.min(i,s))}function Yd(s,t){return(s%t+t)%t}function GM(s,t,i,a,l){return a+(s-t)*(l-a)/(i-t)}function VM(s,t,i){return s!==t?(i-s)/(t-s):0}function Yo(s,t,i){return(1-i)*s+i*t}function kM(s,t,i,a){return Yo(s,t,1-Math.exp(-i*a))}function XM(s,t=1){return t-Math.abs(Yd(s,t*2)-t)}function WM(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*(3-2*s))}function qM(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*s*(s*(s*6-15)+10))}function YM(s,t){return s+Math.floor(Math.random()*(t-s+1))}function ZM(s,t){return s+Math.random()*(t-s)}function jM(s){return s*(.5-Math.random())}function KM(s){s!==void 0&&(i_=s);let t=i_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function QM(s){return s*qo}function JM(s){return s*nl}function $M(s){return(s&s-1)===0&&s!==0}function tx(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ex(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function nx(s,t,i,a,l){const c=Math.cos,f=Math.sin,d=c(i/2),m=f(i/2),p=c((t+a)/2),g=f((t+a)/2),_=c((t-a)/2),S=f((t-a)/2),M=c((a-t)/2),E=f((a-t)/2);switch(l){case"XYX":s.set(d*g,m*_,m*S,d*p);break;case"YZY":s.set(m*S,d*g,m*_,d*p);break;case"ZXZ":s.set(m*_,m*S,d*g,d*p);break;case"XZX":s.set(d*g,m*E,m*M,d*p);break;case"YXY":s.set(m*M,d*g,m*E,d*p);break;case"ZYZ":s.set(m*E,m*M,d*g,d*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function ws(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function In(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const vi={DEG2RAD:qo,RAD2DEG:nl,generateUUID:Fs,clamp:pe,euclideanModulo:Yd,mapLinear:GM,inverseLerp:VM,lerp:Yo,damp:kM,pingpong:XM,smoothstep:WM,smootherstep:qM,randInt:YM,randFloat:ZM,randFloatSpread:jM,seededRandom:KM,degToRad:QM,radToDeg:JM,isPowerOfTwo:$M,ceilPowerOfTwo:tx,floorPowerOfTwo:ex,setQuaternionFromProperEuler:nx,normalize:In,denormalize:ws};class ee{constructor(t=0,i=0){ee.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,a=this.y,l=t.elements;return this.x=l[0]*i+l[3]*a+l[6],this.y=l[1]*i+l[4]*a+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=pe(this.x,t.x,i.x),this.y=pe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=pe(this.x,t,i),this.y=pe(this.y,t,i),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(pe(a,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(t)/i;return Math.acos(pe(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,a=this.y-t.y;return i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const a=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*a-f*l+t.x,this.y=c*l+f*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class al{constructor(t=0,i=0,a=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=a,this._w=l}static slerpFlat(t,i,a,l,c,f,d){let m=a[l+0],p=a[l+1],g=a[l+2],_=a[l+3];const S=c[f+0],M=c[f+1],E=c[f+2],A=c[f+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(d===1){t[i+0]=S,t[i+1]=M,t[i+2]=E,t[i+3]=A;return}if(_!==A||m!==S||p!==M||g!==E){let x=1-d;const v=m*S+p*M+g*E+_*A,F=v>=0?1:-1,U=1-v*v;if(U>Number.EPSILON){const H=Math.sqrt(U),I=Math.atan2(H,v*F);x=Math.sin(x*I)/H,d=Math.sin(d*I)/H}const w=d*F;if(m=m*x+S*w,p=p*x+M*w,g=g*x+E*w,_=_*x+A*w,x===1-d){const H=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=H,p*=H,g*=H,_*=H}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,a,l,c,f){const d=a[l],m=a[l+1],p=a[l+2],g=a[l+3],_=c[f],S=c[f+1],M=c[f+2],E=c[f+3];return t[i]=d*E+g*_+m*M-p*S,t[i+1]=m*E+g*S+p*_-d*M,t[i+2]=p*E+g*M+d*S-m*_,t[i+3]=g*E-d*_-m*S-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,a,l){return this._x=t,this._y=i,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const a=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(a/2),g=d(l/2),_=d(c/2),S=m(a/2),M=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=S*g*_+p*M*E,this._y=p*M*_-S*g*E,this._z=p*g*E+S*M*_,this._w=p*g*_-S*M*E;break;case"YXZ":this._x=S*g*_+p*M*E,this._y=p*M*_-S*g*E,this._z=p*g*E-S*M*_,this._w=p*g*_+S*M*E;break;case"ZXY":this._x=S*g*_-p*M*E,this._y=p*M*_+S*g*E,this._z=p*g*E+S*M*_,this._w=p*g*_-S*M*E;break;case"ZYX":this._x=S*g*_-p*M*E,this._y=p*M*_+S*g*E,this._z=p*g*E-S*M*_,this._w=p*g*_+S*M*E;break;case"YZX":this._x=S*g*_+p*M*E,this._y=p*M*_+S*g*E,this._z=p*g*E-S*M*_,this._w=p*g*_-S*M*E;break;case"XZY":this._x=S*g*_-p*M*E,this._y=p*M*_-S*g*E,this._z=p*g*E+S*M*_,this._w=p*g*_+S*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const a=i/2,l=Math.sin(a);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,a=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],S=a+d+_;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(a>d&&a>_){const M=2*Math.sqrt(1+a-d-_);this._w=(g-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(d>_){const M=2*Math.sqrt(1+d-a-_);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+_-a-d);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let a=t.dot(i)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,i){const a=this.angleTo(t);if(a===0)return this;const l=Math.min(1,i/a);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const a=t._x,l=t._y,c=t._z,f=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=a*g+f*d+l*p-c*m,this._y=l*g+f*m+c*d-a*p,this._z=c*g+f*p+a*m-l*d,this._w=f*g-a*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const a=this._x,l=this._y,c=this._z,f=this._w;let d=f*t._w+a*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=a,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*f+i*this._w,this._x=M*a+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),_=Math.sin((1-i)*g)/p,S=Math.sin(i*g)/p;return this._w=f*_+this._w*S,this._x=a*_+this._x*S,this._y=l*_+this._y*S,this._z=c*_+this._z*S,this._onChangeCallback(),this}slerpQuaternions(t,i,a){return this.copy(t).slerp(i,a)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),a=Math.random(),l=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,i=0,a=0){V.prototype.isVector3=!0,this.x=t,this.y=i,this.z=a}set(t,i,a){return a===void 0&&(a=this.z),this.x=t,this.y=i,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(a_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(a_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,a=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*a+c[6]*l,this.y=c[1]*i+c[4]*a+c[7]*l,this.z=c[2]*i+c[5]*a+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,a=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*a+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*a+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*a+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*a+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,a=this.y,l=this.z,c=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*a),g=2*(d*i-c*l),_=2*(c*a-f*i);return this.x=i+m*p+f*_-d*g,this.y=a+m*g+d*p-c*_,this.z=l+m*_+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,a=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*a+c[8]*l,this.y=c[1]*i+c[5]*a+c[9]*l,this.z=c[2]*i+c[6]*a+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=pe(this.x,t.x,i.x),this.y=pe(this.y,t.y,i.y),this.z=pe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=pe(this.x,t,i),this.y=pe(this.y,t,i),this.z=pe(this.z,t,i),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(pe(a,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this.z=t.z+(i.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const a=t.x,l=t.y,c=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-a*m,this.z=a*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const a=t.dot(this)/i;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return gh.copy(this).projectOnVector(t),this.sub(gh)}reflect(t){return this.sub(gh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(t)/i;return Math.acos(pe(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,a=this.y-t.y,l=this.z-t.z;return i*i+a*a+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,a){const l=Math.sin(i)*t;return this.x=l*Math.sin(a),this.y=Math.cos(i)*t,this.z=l*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,a){return this.x=t*Math.sin(i),this.y=a,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=a,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,a=Math.sqrt(1-i*i);return this.x=a*Math.cos(t),this.y=i,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gh=new V,a_=new al;class fe{constructor(t,i,a,l,c,f,d,m,p){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,a,l,c,f,d,m,p)}set(t,i,a,l,c,f,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=a,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,a=t.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],this}extractBasis(t,i,a){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const a=t.elements,l=i.elements,c=this.elements,f=a[0],d=a[3],m=a[6],p=a[1],g=a[4],_=a[7],S=a[2],M=a[5],E=a[8],A=l[0],x=l[3],v=l[6],F=l[1],U=l[4],w=l[7],H=l[2],I=l[5],O=l[8];return c[0]=f*A+d*F+m*H,c[3]=f*x+d*U+m*I,c[6]=f*v+d*w+m*O,c[1]=p*A+g*F+_*H,c[4]=p*x+g*U+_*I,c[7]=p*v+g*w+_*O,c[2]=S*A+M*F+E*H,c[5]=S*x+M*U+E*I,c[8]=S*v+M*w+E*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],a=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*f*g-i*d*p-a*c*g+a*d*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],a=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*f-d*p,S=d*m-g*c,M=p*c-f*m,E=i*_+a*S+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=_*A,t[1]=(l*p-g*a)*A,t[2]=(d*a-l*f)*A,t[3]=S*A,t[4]=(g*i-l*m)*A,t[5]=(l*c-d*i)*A,t[6]=M*A,t[7]=(a*m-p*i)*A,t[8]=(f*i-a*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,a,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(_h.makeScale(t,i)),this}rotate(t){return this.premultiply(_h.makeRotation(-t)),this}translate(t,i){return this.premultiply(_h.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,-a,0,a,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,a=t.elements;for(let l=0;l<9;l++)if(i[l]!==a[l])return!1;return!0}fromArray(t,i=0){for(let a=0;a<9;a++)this.elements[a]=t[a+i];return this}toArray(t=[],i=0){const a=this.elements;return t[i]=a[0],t[i+1]=a[1],t[i+2]=a[2],t[i+3]=a[3],t[i+4]=a[4],t[i+5]=a[5],t[i+6]=a[6],t[i+7]=a[7],t[i+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _h=new fe;function yv(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Zc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ix(){const s=Zc("canvas");return s.style.display="block",s}const r_={};function Us(s){s in r_||(r_[s]=!0,console.warn(s))}function ax(s,t,i){return new Promise(function(a,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:a()}}setTimeout(c,i)})}const s_=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),o_=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rx(){const s={enabled:!0,workingColorSpace:zs,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ve&&(l.r=pa(l.r),l.g=pa(l.g),l.b=pa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ve&&(l.r=Ls(l.r),l.g=Ls(l.g),l.b=Ls(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===qa?qc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Us("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Us("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[zs]:{primaries:t,whitePoint:a,transfer:qc,toXYZ:s_,fromXYZ:o_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Yn},outputColorSpaceConfig:{drawingBufferColorSpace:Yn}},[Yn]:{primaries:t,whitePoint:a,transfer:Ve,toXYZ:s_,fromXYZ:o_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Yn}}}),s}const De=rx();function pa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ls(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ps;class sx{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{ps===void 0&&(ps=Zc("canvas")),ps.width=t.width,ps.height=t.height;const l=ps.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),a=ps}return a.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Zc("canvas");i.width=t.width,i.height=t.height;const a=i.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const l=a.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=pa(c[f]/255)*255;return a.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let a=0;a<i.length;a++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[a]=Math.floor(pa(i[a]/255)*255):i[a]=pa(i[a]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ox=0;class Zd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=Fs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(vh(l[f].image)):c.push(vh(l[f]))}else c=vh(l);a.url=c}return i||(t.images[this.uuid]=a),a}}function vh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?sx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lx=0;const yh=new V;class Hn extends Is{constructor(t=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,a=Ar,l=Ar,c=zi,f=Rr,d=Ri,m=Fi,p=Hn.DEFAULT_ANISOTROPY,g=qa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=Fs(),this.name="",this.source=new Zd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=a,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(yh).x}get height(){return this.source.getSize(yh).y}get depth(){return this.source.getSize(yh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const a=t[i];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&a&&l.isVector2&&a.isVector2||l&&a&&l.isVector3&&a.isVector3||l&&a&&l.isMatrix3&&a.isMatrix3?l.copy(a):this[i]=a}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),i||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qo:t.x=t.x-Math.floor(t.x);break;case Ar:t.x=t.x<0?0:1;break;case ud:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qo:t.y=t.y-Math.floor(t.y);break;case Ar:t.y=t.y<0?0:1;break;case ud:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=lv;Hn.DEFAULT_ANISOTROPY=1;class ke{constructor(t=0,i=0,a=0,l=1){ke.prototype.isVector4=!0,this.x=t,this.y=i,this.z=a,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,a,l){return this.x=t,this.y=i,this.z=a,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,a=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*a+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*a+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*a+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*a+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,a,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],S=m[1],M=m[5],E=m[9],A=m[2],x=m[6],v=m[10];if(Math.abs(g-S)<.01&&Math.abs(_-A)<.01&&Math.abs(E-x)<.01){if(Math.abs(g+S)<.1&&Math.abs(_+A)<.1&&Math.abs(E+x)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,w=(M+1)/2,H=(v+1)/2,I=(g+S)/4,O=(_+A)/4,X=(E+x)/4;return U>w&&U>H?U<.01?(a=0,l=.707106781,c=.707106781):(a=Math.sqrt(U),l=I/a,c=O/a):w>H?w<.01?(a=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),a=I/l,c=X/l):H<.01?(a=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),a=O/c,l=X/c),this.set(a,l,c,i),this}let F=Math.sqrt((x-E)*(x-E)+(_-A)*(_-A)+(S-g)*(S-g));return Math.abs(F)<.001&&(F=1),this.x=(x-E)/F,this.y=(_-A)/F,this.z=(S-g)/F,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=pe(this.x,t.x,i.x),this.y=pe(this.y,t.y,i.y),this.z=pe(this.z,t.z,i.z),this.w=pe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=pe(this.x,t,i),this.y=pe(this.y,t,i),this.z=pe(this.z,t,i),this.w=pe(this.w,t,i),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(pe(a,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this.z=t.z+(i.z-t.z)*a,this.w=t.w+(i.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cx extends Is{constructor(t=1,i=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=a.depth,this.scissor=new ke(0,0,t,i),this.scissorTest=!1,this.viewport=new ke(0,0,t,i);const l={width:t,height:i,depth:a.depth},c=new Hn(l);this.textures=[];const f=a.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const i={minFilter:zi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,a=1){if(this.width!==t||this.height!==i||this.depth!==a){this.width=t,this.height=i,this.depth=a;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=a,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,a=t.textures.length;i<a;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Zd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cr extends cx{constructor(t=1,i=1,a={}){super(t,i,a),this.isWebGLRenderTarget=!0}}class Sv extends Hn{constructor(t=null,i=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:a,depth:l},this.magFilter=wi,this.minFilter=wi,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ux extends Hn{constructor(t=null,i=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:a,depth:l},this.magFilter=wi,this.minFilter=wi,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hs{constructor(t=new V(1/0,1/0,1/0),i=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,a=t.length;i<a;i+=3)this.expandByPoint(Ei.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,a=t.count;i<a;i++)this.expandByPoint(Ei.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,a=t.length;i<a;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const a=Ei.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Ei):Ei.fromBufferAttribute(c,f),Ei.applyMatrix4(t.matrixWorld),this.expandByPoint(Ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),gc.copy(a.boundingBox)),gc.applyMatrix4(t.matrixWorld),this.union(gc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ei),Ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,a;return t.normal.x>0?(i=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),i<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bo),_c.subVectors(this.max,Bo),ms.subVectors(t.a,Bo),gs.subVectors(t.b,Bo),_s.subVectors(t.c,Bo),Ha.subVectors(gs,ms),Ga.subVectors(_s,gs),gr.subVectors(ms,_s);let i=[0,-Ha.z,Ha.y,0,-Ga.z,Ga.y,0,-gr.z,gr.y,Ha.z,0,-Ha.x,Ga.z,0,-Ga.x,gr.z,0,-gr.x,-Ha.y,Ha.x,0,-Ga.y,Ga.x,0,-gr.y,gr.x,0];return!Sh(i,ms,gs,_s,_c)||(i=[1,0,0,0,1,0,0,0,1],!Sh(i,ms,gs,_s,_c))?!1:(vc.crossVectors(Ha,Ga),i=[vc.x,vc.y,vc.z],Sh(i,ms,gs,_s,_c))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(sa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const sa=[new V,new V,new V,new V,new V,new V,new V,new V],Ei=new V,gc=new Hs,ms=new V,gs=new V,_s=new V,Ha=new V,Ga=new V,gr=new V,Bo=new V,_c=new V,vc=new V,_r=new V;function Sh(s,t,i,a,l){for(let c=0,f=s.length-3;c<=f;c+=3){_r.fromArray(s,c);const d=l.x*Math.abs(_r.x)+l.y*Math.abs(_r.y)+l.z*Math.abs(_r.z),m=t.dot(_r),p=i.dot(_r),g=a.dot(_r);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const fx=new Hs,Io=new V,Mh=new V;class Jc{constructor(t=new V,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const a=this.center;i!==void 0?a.copy(i):fx.setFromPoints(t).getCenter(a);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const a=this.center.distanceToSquared(t);return i.copy(t),a>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Io.subVectors(t,this.center);const i=Io.lengthSq();if(i>this.radius*this.radius){const a=Math.sqrt(i),l=(a-this.radius)*.5;this.center.addScaledVector(Io,l/a),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Io.copy(t.center).add(Mh)),this.expandByPoint(Io.copy(t.center).sub(Mh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const oa=new V,xh=new V,yc=new V,Va=new V,Eh=new V,Sc=new V,Th=new V;class jd{constructor(t=new V,i=new V(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,oa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const a=i.dot(this.direction);return a<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=oa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(oa.copy(this.origin).addScaledVector(this.direction,i),oa.distanceToSquared(t))}distanceSqToSegment(t,i,a,l){xh.copy(t).add(i).multiplyScalar(.5),yc.copy(i).sub(t).normalize(),Va.copy(this.origin).sub(xh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(yc),d=Va.dot(this.direction),m=-Va.dot(yc),p=Va.lengthSq(),g=Math.abs(1-f*f);let _,S,M,E;if(g>0)if(_=f*m-d,S=f*d-m,E=c*g,_>=0)if(S>=-E)if(S<=E){const A=1/g;_*=A,S*=A,M=_*(_+f*S+2*d)+S*(f*_+S+2*m)+p}else S=c,_=Math.max(0,-(f*S+d)),M=-_*_+S*(S+2*m)+p;else S=-c,_=Math.max(0,-(f*S+d)),M=-_*_+S*(S+2*m)+p;else S<=-E?(_=Math.max(0,-(-f*c+d)),S=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+S*(S+2*m)+p):S<=E?(_=0,S=Math.min(Math.max(-c,-m),c),M=S*(S+2*m)+p):(_=Math.max(0,-(f*c+d)),S=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+S*(S+2*m)+p);else S=f>0?-c:c,_=Math.max(0,-(f*S+d)),M=-_*_+S*(S+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(xh).addScaledVector(yc,S),M}intersectSphere(t,i){oa.subVectors(t.center,this.origin);const a=oa.dot(this.direction),l=oa.dot(oa)-a*a,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=a-f,m=a+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/i;return a>=0?a:null}intersectPlane(t,i){const a=this.distanceToPlane(t);return a===null?null:this.at(a,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let a,l,c,f,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(a=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(a=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),g>=0?(c=(t.min.y-S.y)*g,f=(t.max.y-S.y)*g):(c=(t.max.y-S.y)*g,f=(t.min.y-S.y)*g),a>f||c>l||((c>a||isNaN(a))&&(a=c),(f<l||isNaN(l))&&(l=f),_>=0?(d=(t.min.z-S.z)*_,m=(t.max.z-S.z)*_):(d=(t.max.z-S.z)*_,m=(t.min.z-S.z)*_),a>m||d>l)||((d>a||a!==a)&&(a=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(a>=0?a:l,i)}intersectsBox(t){return this.intersectBox(t,oa)!==null}intersectTriangle(t,i,a,l,c){Eh.subVectors(i,t),Sc.subVectors(a,t),Th.crossVectors(Eh,Sc);let f=this.direction.dot(Th),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Va.subVectors(this.origin,t);const m=d*this.direction.dot(Sc.crossVectors(Va,Sc));if(m<0)return null;const p=d*this.direction.dot(Eh.cross(Va));if(p<0||m+p>f)return null;const g=-d*Va.dot(Th);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(t,i,a,l,c,f,d,m,p,g,_,S,M,E,A,x){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,a,l,c,f,d,m,p,g,_,S,M,E,A,x)}set(t,i,a,l,c,f,d,m,p,g,_,S,M,E,A,x){const v=this.elements;return v[0]=t,v[4]=i,v[8]=a,v[12]=l,v[1]=c,v[5]=f,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=S,v[3]=M,v[7]=E,v[11]=A,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(t){const i=this.elements,a=t.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],i[9]=a[9],i[10]=a[10],i[11]=a[11],i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],this}copyPosition(t){const i=this.elements,a=t.elements;return i[12]=a[12],i[13]=a[13],i[14]=a[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,a){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,i,a){return this.set(t.x,i.x,a.x,0,t.y,i.y,a.y,0,t.z,i.z,a.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,a=t.elements,l=1/vs.setFromMatrixColumn(t,0).length(),c=1/vs.setFromMatrixColumn(t,1).length(),f=1/vs.setFromMatrixColumn(t,2).length();return i[0]=a[0]*l,i[1]=a[1]*l,i[2]=a[2]*l,i[3]=0,i[4]=a[4]*c,i[5]=a[5]*c,i[6]=a[6]*c,i[7]=0,i[8]=a[8]*f,i[9]=a[9]*f,i[10]=a[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,a=t.x,l=t.y,c=t.z,f=Math.cos(a),d=Math.sin(a),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const S=f*g,M=f*_,E=d*g,A=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=M+E*p,i[5]=S-A*p,i[9]=-d*m,i[2]=A-S*p,i[6]=E+M*p,i[10]=f*m}else if(t.order==="YXZ"){const S=m*g,M=m*_,E=p*g,A=p*_;i[0]=S+A*d,i[4]=E*d-M,i[8]=f*p,i[1]=f*_,i[5]=f*g,i[9]=-d,i[2]=M*d-E,i[6]=A+S*d,i[10]=f*m}else if(t.order==="ZXY"){const S=m*g,M=m*_,E=p*g,A=p*_;i[0]=S-A*d,i[4]=-f*_,i[8]=E+M*d,i[1]=M+E*d,i[5]=f*g,i[9]=A-S*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const S=f*g,M=f*_,E=d*g,A=d*_;i[0]=m*g,i[4]=E*p-M,i[8]=S*p+A,i[1]=m*_,i[5]=A*p+S,i[9]=M*p-E,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const S=f*m,M=f*p,E=d*m,A=d*p;i[0]=m*g,i[4]=A-S*_,i[8]=E*_+M,i[1]=_,i[5]=f*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*_+E,i[10]=S-A*_}else if(t.order==="XZY"){const S=f*m,M=f*p,E=d*m,A=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=S*_+A,i[5]=f*g,i[9]=M*_-E,i[2]=E*_-M,i[6]=d*g,i[10]=A*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hx,t,dx)}lookAt(t,i,a){const l=this.elements;return ai.subVectors(t,i),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),ka.crossVectors(a,ai),ka.lengthSq()===0&&(Math.abs(a.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),ka.crossVectors(a,ai)),ka.normalize(),Mc.crossVectors(ai,ka),l[0]=ka.x,l[4]=Mc.x,l[8]=ai.x,l[1]=ka.y,l[5]=Mc.y,l[9]=ai.y,l[2]=ka.z,l[6]=Mc.z,l[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const a=t.elements,l=i.elements,c=this.elements,f=a[0],d=a[4],m=a[8],p=a[12],g=a[1],_=a[5],S=a[9],M=a[13],E=a[2],A=a[6],x=a[10],v=a[14],F=a[3],U=a[7],w=a[11],H=a[15],I=l[0],O=l[4],X=l[8],C=l[12],D=l[1],z=l[5],rt=l[9],lt=l[13],ut=l[2],dt=l[6],P=l[10],K=l[14],Y=l[3],yt=l[7],xt=l[11],N=l[15];return c[0]=f*I+d*D+m*ut+p*Y,c[4]=f*O+d*z+m*dt+p*yt,c[8]=f*X+d*rt+m*P+p*xt,c[12]=f*C+d*lt+m*K+p*N,c[1]=g*I+_*D+S*ut+M*Y,c[5]=g*O+_*z+S*dt+M*yt,c[9]=g*X+_*rt+S*P+M*xt,c[13]=g*C+_*lt+S*K+M*N,c[2]=E*I+A*D+x*ut+v*Y,c[6]=E*O+A*z+x*dt+v*yt,c[10]=E*X+A*rt+x*P+v*xt,c[14]=E*C+A*lt+x*K+v*N,c[3]=F*I+U*D+w*ut+H*Y,c[7]=F*O+U*z+w*dt+H*yt,c[11]=F*X+U*rt+w*P+H*xt,c[15]=F*C+U*lt+w*K+H*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],a=t[4],l=t[8],c=t[12],f=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],S=t[10],M=t[14],E=t[3],A=t[7],x=t[11],v=t[15];return E*(+c*m*_-l*p*_-c*d*S+a*p*S+l*d*M-a*m*M)+A*(+i*m*M-i*p*S+c*f*S-l*f*M+l*p*g-c*m*g)+x*(+i*p*_-i*d*M-c*f*_+a*f*M+c*d*g-a*p*g)+v*(-l*d*g-i*m*_+i*d*S+l*f*_-a*f*S+a*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,a){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=a),this}invert(){const t=this.elements,i=t[0],a=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],S=t[10],M=t[11],E=t[12],A=t[13],x=t[14],v=t[15],F=_*x*p-A*S*p+A*m*M-d*x*M-_*m*v+d*S*v,U=E*S*p-g*x*p-E*m*M+f*x*M+g*m*v-f*S*v,w=g*A*p-E*_*p+E*d*M-f*A*M-g*d*v+f*_*v,H=E*_*m-g*A*m-E*d*S+f*A*S+g*d*x-f*_*x,I=i*F+a*U+l*w+c*H;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/I;return t[0]=F*O,t[1]=(A*S*c-_*x*c-A*l*M+a*x*M+_*l*v-a*S*v)*O,t[2]=(d*x*c-A*m*c+A*l*p-a*x*p-d*l*v+a*m*v)*O,t[3]=(_*m*c-d*S*c-_*l*p+a*S*p+d*l*M-a*m*M)*O,t[4]=U*O,t[5]=(g*x*c-E*S*c+E*l*M-i*x*M-g*l*v+i*S*v)*O,t[6]=(E*m*c-f*x*c-E*l*p+i*x*p+f*l*v-i*m*v)*O,t[7]=(f*S*c-g*m*c+g*l*p-i*S*p-f*l*M+i*m*M)*O,t[8]=w*O,t[9]=(E*_*c-g*A*c-E*a*M+i*A*M+g*a*v-i*_*v)*O,t[10]=(f*A*c-E*d*c+E*a*p-i*A*p-f*a*v+i*d*v)*O,t[11]=(g*d*c-f*_*c-g*a*p+i*_*p+f*a*M-i*d*M)*O,t[12]=H*O,t[13]=(g*A*l-E*_*l+E*a*S-i*A*S-g*a*x+i*_*x)*O,t[14]=(E*d*l-f*A*l-E*a*m+i*A*m+f*a*x-i*d*x)*O,t[15]=(f*_*l-g*d*l+g*a*m-i*_*m-f*a*S+i*d*S)*O,this}scale(t){const i=this.elements,a=t.x,l=t.y,c=t.z;return i[0]*=a,i[4]*=l,i[8]*=c,i[1]*=a,i[5]*=l,i[9]*=c,i[2]*=a,i[6]*=l,i[10]*=c,i[3]*=a,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,a,l))}makeTranslation(t,i,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,a,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,i,-a,0,0,a,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,0,a,0,0,1,0,0,-a,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,-a,0,0,a,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const a=Math.cos(i),l=Math.sin(i),c=1-a,f=t.x,d=t.y,m=t.z,p=c*f,g=c*d;return this.set(p*f+a,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+a,g*m-l*f,0,p*m-l*d,g*m+l*f,c*m*m+a,0,0,0,0,1),this}makeScale(t,i,a){return this.set(t,0,0,0,0,i,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,i,a,l,c,f){return this.set(1,a,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,a){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,g=f+f,_=d+d,S=c*p,M=c*g,E=c*_,A=f*g,x=f*_,v=d*_,F=m*p,U=m*g,w=m*_,H=a.x,I=a.y,O=a.z;return l[0]=(1-(A+v))*H,l[1]=(M+w)*H,l[2]=(E-U)*H,l[3]=0,l[4]=(M-w)*I,l[5]=(1-(S+v))*I,l[6]=(x+F)*I,l[7]=0,l[8]=(E+U)*O,l[9]=(x-F)*O,l[10]=(1-(S+A))*O,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,a){const l=this.elements;let c=vs.set(l[0],l[1],l[2]).length();const f=vs.set(l[4],l[5],l[6]).length(),d=vs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ti.copy(this);const p=1/c,g=1/f,_=1/d;return Ti.elements[0]*=p,Ti.elements[1]*=p,Ti.elements[2]*=p,Ti.elements[4]*=g,Ti.elements[5]*=g,Ti.elements[6]*=g,Ti.elements[8]*=_,Ti.elements[9]*=_,Ti.elements[10]*=_,i.setFromRotationMatrix(Ti),a.x=c,a.y=f,a.z=d,this}makePerspective(t,i,a,l,c,f,d=Bi,m=!1){const p=this.elements,g=2*c/(i-t),_=2*c/(a-l),S=(i+t)/(i-t),M=(a+l)/(a-l);let E,A;if(m)E=c/(f-c),A=f*c/(f-c);else if(d===Bi)E=-(f+c)/(f-c),A=-2*f*c/(f-c);else if(d===Yc)E=-f/(f-c),A=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,a,l,c,f,d=Bi,m=!1){const p=this.elements,g=2/(i-t),_=2/(a-l),S=-(i+t)/(i-t),M=-(a+l)/(a-l);let E,A;if(m)E=1/(f-c),A=f/(f-c);else if(d===Bi)E=-2/(f-c),A=-(f+c)/(f-c);else if(d===Yc)E=-1/(f-c),A=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,a=t.elements;for(let l=0;l<16;l++)if(i[l]!==a[l])return!1;return!0}fromArray(t,i=0){for(let a=0;a<16;a++)this.elements[a]=t[a+i];return this}toArray(t=[],i=0){const a=this.elements;return t[i]=a[0],t[i+1]=a[1],t[i+2]=a[2],t[i+3]=a[3],t[i+4]=a[4],t[i+5]=a[5],t[i+6]=a[6],t[i+7]=a[7],t[i+8]=a[8],t[i+9]=a[9],t[i+10]=a[10],t[i+11]=a[11],t[i+12]=a[12],t[i+13]=a[13],t[i+14]=a[14],t[i+15]=a[15],t}}const vs=new V,Ti=new Ke,hx=new V(0,0,0),dx=new V(1,1,1),ka=new V,Mc=new V,ai=new V,l_=new Ke,c_=new al;class Hi{constructor(t=0,i=0,a=0,l=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=a,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,a,l=this._order){return this._x=t,this._y=i,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,a=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(pe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(pe(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-pe(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(pe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-pe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,a){return l_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(l_,i,a)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return c_.setFromEuler(this),this.setFromQuaternion(c_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class Kd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let px=0;const u_=new V,ys=new al,la=new Ke,xc=new V,Fo=new V,mx=new V,gx=new al,f_=new V(1,0,0),h_=new V(0,1,0),d_=new V(0,0,1),p_={type:"added"},_x={type:"removed"},Ss={type:"childadded",child:null},bh={type:"childremoved",child:null};class gn extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=Fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const t=new V,i=new Hi,a=new al,l=new V(1,1,1);function c(){a.setFromEuler(i,!1)}function f(){i.setFromQuaternion(a,void 0,!1)}i._onChange(c),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ke},normalMatrix:{value:new fe}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ys.setFromAxisAngle(t,i),this.quaternion.multiply(ys),this}rotateOnWorldAxis(t,i){return ys.setFromAxisAngle(t,i),this.quaternion.premultiply(ys),this}rotateX(t){return this.rotateOnAxis(f_,t)}rotateY(t){return this.rotateOnAxis(h_,t)}rotateZ(t){return this.rotateOnAxis(d_,t)}translateOnAxis(t,i){return u_.copy(t).applyQuaternion(this.quaternion),this.position.add(u_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(f_,t)}translateY(t){return this.translateOnAxis(h_,t)}translateZ(t){return this.translateOnAxis(d_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(la.copy(this.matrixWorld).invert())}lookAt(t,i,a){t.isVector3?xc.copy(t):xc.set(t,i,a);const l=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?la.lookAt(Fo,xc,this.up):la.lookAt(xc,Fo,this.up),this.quaternion.setFromRotationMatrix(la),l&&(la.extractRotation(l.matrixWorld),ys.setFromRotationMatrix(la),this.quaternion.premultiply(ys.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(p_),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(_x),bh.child=t,this.dispatchEvent(bh),bh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),la.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),la.multiply(t.parent.matrixWorld)),t.applyMatrix4(la),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(p_),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let a=0,l=this.children.length;a<l;a++){const f=this.children[a].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,a=[]){this[t]===i&&a.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,t,mx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,gx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].updateMatrixWorld(t)}updateWorldMatrix(t,i){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",a={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),_=f(t.shapes),S=f(t.skeletons),M=f(t.animations),E=f(t.nodes);d.length>0&&(a.geometries=d),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),S.length>0&&(a.skeletons=S),M.length>0&&(a.animations=M),E.length>0&&(a.nodes=E)}return a.object=l,a;function f(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let a=0;a<t.children.length;a++){const l=t.children[a];this.add(l.clone())}return this}}gn.DEFAULT_UP=new V(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new V,ca=new V,Ah=new V,ua=new V,Ms=new V,xs=new V,m_=new V,Rh=new V,wh=new V,Ch=new V,Dh=new ke,Uh=new ke,Lh=new ke;class Ai{constructor(t=new V,i=new V,a=new V){this.a=t,this.b=i,this.c=a}static getNormal(t,i,a,l){l.subVectors(a,i),bi.subVectors(t,i),l.cross(bi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,a,l,c){bi.subVectors(l,i),ca.subVectors(a,i),Ah.subVectors(t,i);const f=bi.dot(bi),d=bi.dot(ca),m=bi.dot(Ah),p=ca.dot(ca),g=ca.dot(Ah),_=f*p-d*d;if(_===0)return c.set(0,0,0),null;const S=1/_,M=(p*m-d*g)*S,E=(f*g-d*m)*S;return c.set(1-M-E,E,M)}static containsPoint(t,i,a,l){return this.getBarycoord(t,i,a,l,ua)===null?!1:ua.x>=0&&ua.y>=0&&ua.x+ua.y<=1}static getInterpolation(t,i,a,l,c,f,d,m){return this.getBarycoord(t,i,a,l,ua)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ua.x),m.addScaledVector(f,ua.y),m.addScaledVector(d,ua.z),m)}static getInterpolatedAttribute(t,i,a,l,c,f){return Dh.setScalar(0),Uh.setScalar(0),Lh.setScalar(0),Dh.fromBufferAttribute(t,i),Uh.fromBufferAttribute(t,a),Lh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Dh,c.x),f.addScaledVector(Uh,c.y),f.addScaledVector(Lh,c.z),f}static isFrontFacing(t,i,a,l){return bi.subVectors(a,i),ca.subVectors(t,i),bi.cross(ca).dot(l)<0}set(t,i,a){return this.a.copy(t),this.b.copy(i),this.c.copy(a),this}setFromPointsAndIndices(t,i,a,l){return this.a.copy(t[i]),this.b.copy(t[a]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,a,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bi.subVectors(this.c,this.b),ca.subVectors(this.a,this.b),bi.cross(ca).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ai.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ai.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,a,l,c){return Ai.getInterpolation(t,this.a,this.b,this.c,i,a,l,c)}containsPoint(t){return Ai.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ai.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const a=this.a,l=this.b,c=this.c;let f,d;Ms.subVectors(l,a),xs.subVectors(c,a),Rh.subVectors(t,a);const m=Ms.dot(Rh),p=xs.dot(Rh);if(m<=0&&p<=0)return i.copy(a);wh.subVectors(t,l);const g=Ms.dot(wh),_=xs.dot(wh);if(g>=0&&_<=g)return i.copy(l);const S=m*_-g*p;if(S<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(a).addScaledVector(Ms,f);Ch.subVectors(t,c);const M=Ms.dot(Ch),E=xs.dot(Ch);if(E>=0&&M<=E)return i.copy(c);const A=M*p-m*E;if(A<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(a).addScaledVector(xs,d);const x=g*E-M*_;if(x<=0&&_-g>=0&&M-E>=0)return m_.subVectors(c,l),d=(_-g)/(_-g+(M-E)),i.copy(l).addScaledVector(m_,d);const v=1/(x+A+S);return f=A*v,d=S*v,i.copy(a).addScaledVector(Ms,f).addScaledVector(xs,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Mv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xa={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function Nh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class me{constructor(t,i,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,a)}set(t,i,a){if(i===void 0&&a===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Yn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(t,i,a,l=De.workingColorSpace){return this.r=t,this.g=i,this.b=a,De.colorSpaceToWorking(this,l),this}setHSL(t,i,a,l=De.workingColorSpace){if(t=Yd(t,1),i=pe(i,0,1),a=pe(a,0,1),i===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+i):a+i-a*i,f=2*a-c;this.r=Nh(f,c,t+1/3),this.g=Nh(f,c,t),this.b=Nh(f,c,t-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(t,i=Yn){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Yn){const a=Mv[t.toLowerCase()];return a!==void 0?this.setHex(a,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pa(t.r),this.g=pa(t.g),this.b=pa(t.b),this}copyLinearToSRGB(t){return this.r=Ls(t.r),this.g=Ls(t.g),this.b=Ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Yn){return De.workingToColorSpace(Nn.copy(this),t),Math.round(pe(Nn.r*255,0,255))*65536+Math.round(pe(Nn.g*255,0,255))*256+Math.round(pe(Nn.b*255,0,255))}getHexString(t=Yn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=De.workingColorSpace){De.workingToColorSpace(Nn.copy(this),i);const a=Nn.r,l=Nn.g,c=Nn.b,f=Math.max(a,l,c),d=Math.min(a,l,c);let m,p;const g=(d+f)/2;if(d===f)m=0,p=0;else{const _=f-d;switch(p=g<=.5?_/(f+d):_/(2-f-d),f){case a:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-a)/_+2;break;case c:m=(a-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=De.workingColorSpace){return De.workingToColorSpace(Nn.copy(this),i),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=Yn){De.workingToColorSpace(Nn.copy(this),t);const i=Nn.r,a=Nn.g,l=Nn.b;return t!==Yn?`color(${t} ${i.toFixed(3)} ${a.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(a*255)},${Math.round(l*255)})`}offsetHSL(t,i,a){return this.getHSL(Xa),this.setHSL(Xa.h+t,Xa.s+i,Xa.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,a){return this.r=t.r+(i.r-t.r)*a,this.g=t.g+(i.g-t.g)*a,this.b=t.b+(i.b-t.b)*a,this}lerpHSL(t,i){this.getHSL(Xa),t.getHSL(Ec);const a=Yo(Xa.h,Ec.h,i),l=Yo(Xa.s,Ec.s,i),c=Yo(Xa.l,Ec.l,i);return this.setHSL(a,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,a=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*a+c[6]*l,this.g=c[1]*i+c[4]*a+c[7]*l,this.b=c[2]*i+c[5]*a+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new me;me.NAMES=Mv;let vx=0;class Gs extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vx++}),this.uuid=Fs(),this.name="",this.type="Material",this.blending=Ds,this.side=ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$h,this.blendDst=td,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=t_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const a=t[i];if(a===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(a):l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[i]=a}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(a.blending=this.blending),this.side!==ja&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==$h&&(a.blendSrc=this.blendSrc),this.blendDst!==td&&(a.blendDst=this.blendDst),this.blendEquation!==Tr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==t_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(a.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(a.textures=c),f.length>0&&(a.images=f)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let a=null;if(i!==null){const l=i.length;a=new Array(l);for(let c=0;c!==l;++c)a[c]=i[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Qd extends Gs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=sv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new V,Tc=new ee;let yx=0;class _i{constructor(t,i,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yx++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=a,this.usage=e_,this.updateRanges=[],this.gpuType=da,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,a){t*=this.itemSize,a*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[a+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,a=this.count;i<a;i++)Tc.fromBufferAttribute(this,i),Tc.applyMatrix3(t),this.setXY(i,Tc.x,Tc.y);else if(this.itemSize===3)for(let i=0,a=this.count;i<a;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,a=this.count;i<a;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,a=this.count;i<a;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,a=this.count;i<a;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let a=this.array[t*this.itemSize+i];return this.normalized&&(a=ws(a,this.array)),a}setComponent(t,i,a){return this.normalized&&(a=In(a,this.array)),this.array[t*this.itemSize+i]=a,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=ws(i,this.array)),i}setX(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=ws(i,this.array)),i}setY(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=ws(i,this.array)),i}setZ(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=ws(i,this.array)),i}setW(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,a){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),a=In(a,this.array)),this.array[t+0]=i,this.array[t+1]=a,this}setXYZ(t,i,a,l){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),a=In(a,this.array),l=In(l,this.array)),this.array[t+0]=i,this.array[t+1]=a,this.array[t+2]=l,this}setXYZW(t,i,a,l,c){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),a=In(a,this.array),l=In(l,this.array),c=In(c,this.array)),this.array[t+0]=i,this.array[t+1]=a,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==e_&&(t.usage=this.usage),t}}class xv extends _i{constructor(t,i,a){super(new Uint16Array(t),i,a)}}class Ev extends _i{constructor(t,i,a){super(new Uint32Array(t),i,a)}}class En extends _i{constructor(t,i,a){super(new Float32Array(t),i,a)}}let Sx=0;const gi=new Ke,Oh=new gn,Es=new V,ri=new Hs,Ho=new Hs,xn=new V;class yi extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=Fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yv(t)?Ev:xv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,a=0){this.groups.push({start:t,count:i,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new fe().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,i,a){return gi.makeTranslation(t,i,a),this.applyMatrix4(gi),this}scale(t,i,a){return gi.makeScale(t,i,a),this.applyMatrix4(gi),this}lookAt(t){return Oh.lookAt(t),Oh.updateMatrix(),this.applyMatrix4(Oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const a=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new En(a,3))}else{const a=Math.min(t.length,i.count);for(let l=0;l<a;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hs);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let a=0,l=i.length;a<l;a++){const c=i[a];ri.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const a=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Ho.setFromBufferAttribute(d),this.morphTargetsRelative?(xn.addVectors(ri.min,Ho.min),ri.expandByPoint(xn),xn.addVectors(ri.max,Ho.max),ri.expandByPoint(xn)):(ri.expandByPoint(Ho.min),ri.expandByPoint(Ho.max))}ri.getCenter(a);let l=0;for(let c=0,f=t.count;c<f;c++)xn.fromBufferAttribute(t,c),l=Math.max(l,a.distanceToSquared(xn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)xn.fromBufferAttribute(d,p),m&&(Es.fromBufferAttribute(t,p),xn.add(Es)),l=Math.max(l,a.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*a.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let X=0;X<a.count;X++)d[X]=new V,m[X]=new V;const p=new V,g=new V,_=new V,S=new ee,M=new ee,E=new ee,A=new V,x=new V;function v(X,C,D){p.fromBufferAttribute(a,X),g.fromBufferAttribute(a,C),_.fromBufferAttribute(a,D),S.fromBufferAttribute(c,X),M.fromBufferAttribute(c,C),E.fromBufferAttribute(c,D),g.sub(p),_.sub(p),M.sub(S),E.sub(S);const z=1/(M.x*E.y-E.x*M.y);isFinite(z)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(_,-M.y).multiplyScalar(z),x.copy(_).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(z),d[X].add(A),d[C].add(A),d[D].add(A),m[X].add(x),m[C].add(x),m[D].add(x))}let F=this.groups;F.length===0&&(F=[{start:0,count:t.count}]);for(let X=0,C=F.length;X<C;++X){const D=F[X],z=D.start,rt=D.count;for(let lt=z,ut=z+rt;lt<ut;lt+=3)v(t.getX(lt+0),t.getX(lt+1),t.getX(lt+2))}const U=new V,w=new V,H=new V,I=new V;function O(X){H.fromBufferAttribute(l,X),I.copy(H);const C=d[X];U.copy(C),U.sub(H.multiplyScalar(H.dot(C))).normalize(),w.crossVectors(I,C);const z=w.dot(m[X])<0?-1:1;f.setXYZW(X,U.x,U.y,U.z,z)}for(let X=0,C=F.length;X<C;++X){const D=F[X],z=D.start,rt=D.count;for(let lt=z,ut=z+rt;lt<ut;lt+=3)O(t.getX(lt+0)),O(t.getX(lt+1)),O(t.getX(lt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new _i(new Float32Array(i.count*3),3),this.setAttribute("normal",a);else for(let S=0,M=a.count;S<M;S++)a.setXYZ(S,0,0,0);const l=new V,c=new V,f=new V,d=new V,m=new V,p=new V,g=new V,_=new V;if(t)for(let S=0,M=t.count;S<M;S+=3){const E=t.getX(S+0),A=t.getX(S+1),x=t.getX(S+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,x),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(a,E),m.fromBufferAttribute(a,A),p.fromBufferAttribute(a,x),d.add(g),m.add(g),p.add(g),a.setXYZ(E,d.x,d.y,d.z),a.setXYZ(A,m.x,m.y,m.z),a.setXYZ(x,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),f.fromBufferAttribute(i,S+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),a.setXYZ(S+0,g.x,g.y,g.z),a.setXYZ(S+1,g.x,g.y,g.z),a.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,a=t.count;i<a;i++)xn.fromBufferAttribute(t,i),xn.normalize(),t.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,_=d.normalized,S=new p.constructor(m.length*g);let M=0,E=0;for(let A=0,x=m.length;A<x;A++){d.isInterleavedBufferAttribute?M=m[A]*d.data.stride+d.offset:M=m[A]*g;for(let v=0;v<g;v++)S[E++]=p[M++]}return new _i(S,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new yi,a=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,a);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const S=p[g],M=t(S,a);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const a=this.attributes;for(const m in a){const p=a[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,S=p.length;_<S;_++){const M=p[_];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let S=0,M=_.length;S<M;S++)g.push(_[S].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const g_=new Ke,vr=new jd,bc=new Jc,__=new V,Ac=new V,Rc=new V,wc=new V,Ph=new V,Cc=new V,v_=new V,Dc=new V;class Zn extends gn{constructor(t=new yi,i=new Qd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const l=i[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const a=this.geometry,l=a.attributes.position,c=a.morphAttributes.position,f=a.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Cc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(Ph.fromBufferAttribute(_,t),f?Cc.addScaledVector(Ph,g):Cc.addScaledVector(Ph.sub(i),g))}i.add(Cc)}return i}raycast(t,i){const a=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),bc.copy(a.boundingSphere),bc.applyMatrix4(c),vr.copy(t.ray).recast(t.near),!(bc.containsPoint(vr.origin)===!1&&(vr.intersectSphere(bc,__)===null||vr.origin.distanceToSquared(__)>(t.far-t.near)**2))&&(g_.copy(c).invert(),vr.copy(t.ray).applyMatrix4(g_),!(a.boundingBox!==null&&vr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,i,vr)))}_computeIntersections(t,i,a){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,S=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,A=S.length;E<A;E++){const x=S[E],v=f[x.materialIndex],F=Math.max(x.start,M.start),U=Math.min(d.count,Math.min(x.start+x.count,M.start+M.count));for(let w=F,H=U;w<H;w+=3){const I=d.getX(w),O=d.getX(w+1),X=d.getX(w+2);l=Uc(this,v,t,a,p,g,_,I,O,X),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let x=E,v=A;x<v;x+=3){const F=d.getX(x),U=d.getX(x+1),w=d.getX(x+2);l=Uc(this,f,t,a,p,g,_,F,U,w),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,A=S.length;E<A;E++){const x=S[E],v=f[x.materialIndex],F=Math.max(x.start,M.start),U=Math.min(m.count,Math.min(x.start+x.count,M.start+M.count));for(let w=F,H=U;w<H;w+=3){const I=w,O=w+1,X=w+2;l=Uc(this,v,t,a,p,g,_,I,O,X),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let x=E,v=A;x<v;x+=3){const F=x,U=x+1,w=x+2;l=Uc(this,f,t,a,p,g,_,F,U,w),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function Mx(s,t,i,a,l,c,f,d){let m;if(t.side===jn?m=a.intersectTriangle(f,c,l,!0,d):m=a.intersectTriangle(l,c,f,t.side===ja,d),m===null)return null;Dc.copy(d),Dc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Dc);return p<i.near||p>i.far?null:{distance:p,point:Dc.clone(),object:s}}function Uc(s,t,i,a,l,c,f,d,m,p){s.getVertexPosition(d,Ac),s.getVertexPosition(m,Rc),s.getVertexPosition(p,wc);const g=Mx(s,t,i,a,Ac,Rc,wc,v_);if(g){const _=new V;Ai.getBarycoord(v_,Ac,Rc,wc,_),l&&(g.uv=Ai.getInterpolatedAttribute(l,d,m,p,_,new ee)),c&&(g.uv1=Ai.getInterpolatedAttribute(c,d,m,p,_,new ee)),f&&(g.normal=Ai.getInterpolatedAttribute(f,d,m,p,_,new V),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new V,materialIndex:0};Ai.getNormal(Ac,Rc,wc,S.normal),g.face=S,g.barycoord=_}return g}class Dr extends yi{constructor(t=1,i=1,a=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:a,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],_=[];let S=0,M=0;E("z","y","x",-1,-1,a,i,t,f,c,0),E("z","y","x",1,-1,a,i,-t,f,c,1),E("x","z","y",1,1,t,a,i,l,f,2),E("x","z","y",1,-1,t,a,-i,l,f,3),E("x","y","z",1,-1,t,i,a,l,c,4),E("x","y","z",-1,-1,t,i,-a,l,c,5),this.setIndex(m),this.setAttribute("position",new En(p,3)),this.setAttribute("normal",new En(g,3)),this.setAttribute("uv",new En(_,2));function E(A,x,v,F,U,w,H,I,O,X,C){const D=w/O,z=H/X,rt=w/2,lt=H/2,ut=I/2,dt=O+1,P=X+1;let K=0,Y=0;const yt=new V;for(let xt=0;xt<P;xt++){const N=xt*z-lt;for(let nt=0;nt<dt;nt++){const Mt=nt*D-rt;yt[A]=Mt*F,yt[x]=N*U,yt[v]=ut,p.push(yt.x,yt.y,yt.z),yt[A]=0,yt[x]=0,yt[v]=I>0?1:-1,g.push(yt.x,yt.y,yt.z),_.push(nt/O),_.push(1-xt/X),K+=1}}for(let xt=0;xt<X;xt++)for(let N=0;N<O;N++){const nt=S+N+dt*xt,Mt=S+N+dt*(xt+1),Ct=S+(N+1)+dt*(xt+1),Q=S+(N+1)+dt*xt;m.push(nt,Mt,Q),m.push(Mt,Ct,Q),Y+=6}d.addGroup(M,Y,C),M+=Y,S+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Bs(s){const t={};for(const i in s){t[i]={};for(const a in s[i]){const l=s[i][a];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][a]=null):t[i][a]=l.clone():Array.isArray(l)?t[i][a]=l.slice():t[i][a]=l}}return t}function Fn(s){const t={};for(let i=0;i<s.length;i++){const a=Bs(s[i]);for(const l in a)t[l]=a[l]}return t}function xx(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function Tv(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const Ex={clone:Bs,merge:Fn};var Tx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ka extends Gs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tx,this.fragmentShader=bx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bs(t.uniforms),this.uniformsGroups=xx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(i.extensions=a),i}}class bv extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wa=new V,y_=new ee,S_=new ee;class si extends bv{constructor(t=50,i=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=nl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return nl*2*Math.atan(Math.tan(qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,a){Wa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wa.x,Wa.y).multiplyScalar(-t/Wa.z),Wa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Wa.x,Wa.y).multiplyScalar(-t/Wa.z)}getViewSize(t,i){return this.getViewBounds(t,y_,S_),i.subVectors(S_,y_)}setViewOffset(t,i,a,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(qo*.5*this.fov)/this.zoom,a=2*i,l=this.aspect*a,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*a/p,l*=f.width/m,a*=f.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ts=-90,bs=1;class Ax extends gn{constructor(t,i,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new si(Ts,bs,t,i);l.layers=this.layers,this.add(l);const c=new si(Ts,bs,t,i);c.layers=this.layers,this.add(c);const f=new si(Ts,bs,t,i);f.layers=this.layers,this.add(f);const d=new si(Ts,bs,t,i);d.layers=this.layers,this.add(d);const m=new si(Ts,bs,t,i);m.layers=this.layers,this.add(m);const p=new si(Ts,bs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[a,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(t===Bi)a.up.set(0,1,0),a.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Yc)a.up.set(0,-1,0),a.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,g]=this.children,_=t.getRenderTarget(),S=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,l),t.render(i,c),t.setRenderTarget(a,1,l),t.render(i,f),t.setRenderTarget(a,2,l),t.render(i,d),t.setRenderTarget(a,3,l),t.render(i,m),t.setRenderTarget(a,4,l),t.render(i,p),a.texture.generateMipmaps=A,t.setRenderTarget(a,5,l),t.render(i,g),t.setRenderTarget(_,S,M),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class Av extends Hn{constructor(t=[],i=Os,a,l,c,f,d,m,p,g){super(t,i,a,l,c,f,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rx extends Cr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},l=[a,a,a,a,a,a];this.texture=new Av(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Dr(5,5,5),c=new Ka({name:"CubemapFromEquirect",uniforms:Bs(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:jn,blending:Ya});c.uniforms.tEquirect.value=i;const f=new Zn(l,c),d=i.minFilter;return i.minFilter===Rr&&(i.minFilter=zi),new Ax(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,a=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,a,l);t.setRenderTarget(c)}}class le extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wx={type:"move"};class zh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const a of t.hand.values())this._getHandJoint(i,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,a){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const A of t.hand.values()){const x=i.getJointPose(A,a),v=this._getHandJoint(p,A);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=g.position.distanceTo(_.position),M=.02,E=.005;p.inputState.pinching&&S>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,a),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(wx)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const a=new le;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[i.jointName]=a,t.add(a)}return t.joints[i.jointName]}}class Jd{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new me(t),this.density=i}clone(){return new Jd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Cx extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Bh=new V,Dx=new V,Ux=new fe;class xr{constructor(t=new V(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,a,l){return this.normal.set(t,i,a),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,a){const l=Bh.subVectors(a,i).cross(Dx.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const a=t.delta(Bh),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return i<0&&a>0||a<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const a=i||Ux.getNormalMatrix(t),l=this.coplanarPoint(Bh).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new Jc,Lx=new ee(.5,.5),Lc=new V;class $d{constructor(t=new xr,i=new xr,a=new xr,l=new xr,c=new xr,f=new xr){this.planes=[t,i,a,l,c,f]}set(t,i,a,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(a),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let a=0;a<6;a++)i[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,i=Bi,a=!1){const l=this.planes,c=t.elements,f=c[0],d=c[1],m=c[2],p=c[3],g=c[4],_=c[5],S=c[6],M=c[7],E=c[8],A=c[9],x=c[10],v=c[11],F=c[12],U=c[13],w=c[14],H=c[15];if(l[0].setComponents(p-f,M-g,v-E,H-F).normalize(),l[1].setComponents(p+f,M+g,v+E,H+F).normalize(),l[2].setComponents(p+d,M+_,v+A,H+U).normalize(),l[3].setComponents(p-d,M-_,v-A,H-U).normalize(),a)l[4].setComponents(m,S,x,w).normalize(),l[5].setComponents(p-m,M-S,v-x,H-w).normalize();else if(l[4].setComponents(p-m,M-S,v-x,H-w).normalize(),i===Bi)l[5].setComponents(p+m,M+S,v+x,H+w).normalize();else if(i===Yc)l[5].setComponents(m,S,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),yr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(t){yr.center.set(0,0,0);const i=Lx.distanceTo(t.center);return yr.radius=.7071067811865476+i,yr.applyMatrix4(t.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(t){const i=this.planes,a=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(a)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let a=0;a<6;a++){const l=i[a];if(Lc.x=l.normal.x>0?t.max.x:t.min.x,Lc.y=l.normal.y>0?t.max.y:t.min.y,Lc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Lc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let a=0;a<6;a++)if(i[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tp extends Gs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const jc=new V,Kc=new V,M_=new Ke,Go=new jd,Nc=new Jc,Ih=new V,x_=new V;class Nx extends gn{constructor(t=new yi,i=new tp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,a=[0];for(let l=1,c=i.count;l<c;l++)jc.fromBufferAttribute(i,l-1),Kc.fromBufferAttribute(i,l),a[l]=a[l-1],a[l]+=jc.distanceTo(Kc);t.setAttribute("lineDistance",new En(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const a=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Nc.copy(a.boundingSphere),Nc.applyMatrix4(l),Nc.radius+=c,t.ray.intersectsSphere(Nc)===!1)return;M_.copy(l).invert(),Go.copy(t.ray).applyMatrix4(M_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=a.index,S=a.attributes.position;if(g!==null){const M=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let A=M,x=E-1;A<x;A+=p){const v=g.getX(A),F=g.getX(A+1),U=Oc(this,t,Go,m,v,F,A);U&&i.push(U)}if(this.isLineLoop){const A=g.getX(E-1),x=g.getX(M),v=Oc(this,t,Go,m,A,x,E-1);v&&i.push(v)}}else{const M=Math.max(0,f.start),E=Math.min(S.count,f.start+f.count);for(let A=M,x=E-1;A<x;A+=p){const v=Oc(this,t,Go,m,A,A+1,A);v&&i.push(v)}if(this.isLineLoop){const A=Oc(this,t,Go,m,E-1,M,E-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const l=i[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Oc(s,t,i,a,l,c,f){const d=s.geometry.attributes.position;if(jc.fromBufferAttribute(d,l),Kc.fromBufferAttribute(d,c),i.distanceSqToSegment(jc,Kc,Ih,x_)>a)return;Ih.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Ih);if(!(p<t.near||p>t.far))return{distance:p,point:x_.clone().applyMatrix4(s.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:s}}const E_=new V,T_=new V;class Ox extends Nx{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,a=[];for(let l=0,c=i.count;l<c;l+=2)E_.fromBufferAttribute(i,l),T_.fromBufferAttribute(i,l+1),a[l]=l===0?0:a[l-1],a[l+1]=a[l]+E_.distanceTo(T_);t.setAttribute("lineDistance",new En(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Px extends Hn{constructor(t,i,a,l,c,f,d,m,p){super(t,i,a,l,c,f,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Rv extends Hn{constructor(t,i,a=wr,l,c,f,d=wi,m=wi,p,g=tl,_=1){if(g!==tl&&g!==el)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:_};super(S,l,c,f,d,m,g,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Zd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ep extends yi{constructor(t=1,i=1,a=1,l=32,c=1,f=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:a,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const g=[],_=[],S=[],M=[];let E=0;const A=[],x=a/2;let v=0;F(),f===!1&&(t>0&&U(!0),i>0&&U(!1)),this.setIndex(g),this.setAttribute("position",new En(_,3)),this.setAttribute("normal",new En(S,3)),this.setAttribute("uv",new En(M,2));function F(){const w=new V,H=new V;let I=0;const O=(i-t)/a;for(let X=0;X<=c;X++){const C=[],D=X/c,z=D*(i-t)+t;for(let rt=0;rt<=l;rt++){const lt=rt/l,ut=lt*m+d,dt=Math.sin(ut),P=Math.cos(ut);H.x=z*dt,H.y=-D*a+x,H.z=z*P,_.push(H.x,H.y,H.z),w.set(dt,O,P).normalize(),S.push(w.x,w.y,w.z),M.push(lt,1-D),C.push(E++)}A.push(C)}for(let X=0;X<l;X++)for(let C=0;C<c;C++){const D=A[C][X],z=A[C+1][X],rt=A[C+1][X+1],lt=A[C][X+1];(t>0||C!==0)&&(g.push(D,z,lt),I+=3),(i>0||C!==c-1)&&(g.push(z,rt,lt),I+=3)}p.addGroup(v,I,0),v+=I}function U(w){const H=E,I=new ee,O=new V;let X=0;const C=w===!0?t:i,D=w===!0?1:-1;for(let rt=1;rt<=l;rt++)_.push(0,x*D,0),S.push(0,D,0),M.push(.5,.5),E++;const z=E;for(let rt=0;rt<=l;rt++){const ut=rt/l*m+d,dt=Math.cos(ut),P=Math.sin(ut);O.x=C*P,O.y=x*D,O.z=C*dt,_.push(O.x,O.y,O.z),S.push(0,D,0),I.x=dt*.5+.5,I.y=P*.5*D+.5,M.push(I.x,I.y),E++}for(let rt=0;rt<l;rt++){const lt=H+rt,ut=z+rt;w===!0?g.push(ut,ut+1,lt):g.push(ut+1,ut,lt),X+=3}p.addGroup(v,X,w===!0?1:2),v+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ep(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ma{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,i){const a=this.getUtoTmapping(t);return this.getPoint(a,i)}getPoints(t=5){const i=[];for(let a=0;a<=t;a++)i.push(this.getPoint(a/t));return i}getSpacedPoints(t=5){const i=[];for(let a=0;a<=t;a++)i.push(this.getPointAt(a/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let a,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)a=this.getPoint(f/t),c+=a.distanceTo(l),i.push(c),l=a;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const a=this.getLengths();let l=0;const c=a.length;let f;i?f=i:f=t*a[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=a[l]-f,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,a[l]===f)return l/(c-1);const g=a[l],S=a[l+1]-g,M=(f-g)/S;return(l+M)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),d=this.getPoint(c),m=i||(f.isVector2?new ee:new V);return m.copy(d).sub(f).normalize(),m}getTangentAt(t,i){const a=this.getUtoTmapping(t);return this.getTangent(a,i)}computeFrenetFrames(t,i=!1){const a=new V,l=[],c=[],f=[],d=new V,m=new Ke;for(let M=0;M<=t;M++){const E=M/t;l[M]=this.getTangentAt(E,new V)}c[0]=new V,f[0]=new V;let p=Number.MAX_VALUE;const g=Math.abs(l[0].x),_=Math.abs(l[0].y),S=Math.abs(l[0].z);g<=p&&(p=g,a.set(1,0,0)),_<=p&&(p=_,a.set(0,1,0)),S<=p&&a.set(0,0,1),d.crossVectors(l[0],a).normalize(),c[0].crossVectors(l[0],d),f[0].crossVectors(l[0],c[0]);for(let M=1;M<=t;M++){if(c[M]=c[M-1].clone(),f[M]=f[M-1].clone(),d.crossVectors(l[M-1],l[M]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(pe(l[M-1].dot(l[M]),-1,1));c[M].applyMatrix4(m.makeRotationAxis(d,E))}f[M].crossVectors(l[M],c[M])}if(i===!0){let M=Math.acos(pe(c[0].dot(c[t]),-1,1));M/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(M=-M);for(let E=1;E<=t;E++)c[E].applyMatrix4(m.makeRotationAxis(l[E],M*E)),f[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class wv extends ma{constructor(t=0,i=0,a=1,l=1,c=0,f=Math.PI*2,d=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=a,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=d,this.aRotation=m}getPoint(t,i=new ee){const a=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),S=m-this.aX,M=p-this.aY;m=S*g-M*_+this.aX,p=S*_+M*g+this.aY}return a.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class zx extends wv{constructor(t,i,a,l,c,f){super(t,i,a,a,l,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function np(){let s=0,t=0,i=0,a=0;function l(c,f,d,m){s=c,t=d,i=-3*c+3*f-2*d-m,a=2*c-2*f+d+m}return{initCatmullRom:function(c,f,d,m,p){l(f,d,p*(d-c),p*(m-f))},initNonuniformCatmullRom:function(c,f,d,m,p,g,_){let S=(f-c)/p-(d-c)/(p+g)+(d-f)/g,M=(d-f)/g-(m-f)/(g+_)+(m-d)/_;S*=g,M*=g,l(f,d,S,M)},calc:function(c){const f=c*c,d=f*c;return s+t*c+i*f+a*d}}}const Pc=new V,Fh=new np,Hh=new np,Gh=new np;class Cv extends ma{constructor(t=[],i=!1,a="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=a,this.tension=l}getPoint(t,i=new V){const a=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let d=Math.floor(f),m=f-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let p,g;this.closed||d>0?p=l[(d-1)%c]:(Pc.subVectors(l[0],l[1]).add(l[0]),p=Pc);const _=l[d%c],S=l[(d+1)%c];if(this.closed||d+2<c?g=l[(d+2)%c]:(Pc.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=Pc),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(_),M),A=Math.pow(_.distanceToSquared(S),M),x=Math.pow(S.distanceToSquared(g),M);A<1e-4&&(A=1),E<1e-4&&(E=A),x<1e-4&&(x=A),Fh.initNonuniformCatmullRom(p.x,_.x,S.x,g.x,E,A,x),Hh.initNonuniformCatmullRom(p.y,_.y,S.y,g.y,E,A,x),Gh.initNonuniformCatmullRom(p.z,_.z,S.z,g.z,E,A,x)}else this.curveType==="catmullrom"&&(Fh.initCatmullRom(p.x,_.x,S.x,g.x,this.tension),Hh.initCatmullRom(p.y,_.y,S.y,g.y,this.tension),Gh.initCatmullRom(p.z,_.z,S.z,g.z,this.tension));return a.set(Fh.calc(m),Hh.calc(m),Gh.calc(m)),a}copy(t){super.copy(t),this.points=[];for(let i=0,a=t.points.length;i<a;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,a=this.points.length;i<a;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,a=t.points.length;i<a;i++){const l=t.points[i];this.points.push(new V().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function b_(s,t,i,a,l){const c=(a-t)*.5,f=(l-i)*.5,d=s*s,m=s*d;return(2*i-2*a+c+f)*m+(-3*i+3*a-2*c-f)*d+c*s+i}function Bx(s,t){const i=1-s;return i*i*t}function Ix(s,t){return 2*(1-s)*s*t}function Fx(s,t){return s*s*t}function Zo(s,t,i,a){return Bx(s,t)+Ix(s,i)+Fx(s,a)}function Hx(s,t){const i=1-s;return i*i*i*t}function Gx(s,t){const i=1-s;return 3*i*i*s*t}function Vx(s,t){return 3*(1-s)*s*s*t}function kx(s,t){return s*s*s*t}function jo(s,t,i,a,l){return Hx(s,t)+Gx(s,i)+Vx(s,a)+kx(s,l)}class Xx extends ma{constructor(t=new ee,i=new ee,a=new ee,l=new ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=a,this.v3=l}getPoint(t,i=new ee){const a=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return a.set(jo(t,l.x,c.x,f.x,d.x),jo(t,l.y,c.y,f.y,d.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Wx extends ma{constructor(t=new V,i=new V,a=new V,l=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=a,this.v3=l}getPoint(t,i=new V){const a=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return a.set(jo(t,l.x,c.x,f.x,d.x),jo(t,l.y,c.y,f.y,d.y),jo(t,l.z,c.z,f.z,d.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qx extends ma{constructor(t=new ee,i=new ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new ee){const a=i;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new ee){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yx extends ma{constructor(t=new V,i=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new V){const a=i;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new V){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zx extends ma{constructor(t=new ee,i=new ee,a=new ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=a}getPoint(t,i=new ee){const a=i,l=this.v0,c=this.v1,f=this.v2;return a.set(Zo(t,l.x,c.x,f.x),Zo(t,l.y,c.y,f.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dv extends ma{constructor(t=new V,i=new V,a=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=a}getPoint(t,i=new V){const a=i,l=this.v0,c=this.v1,f=this.v2;return a.set(Zo(t,l.x,c.x,f.x),Zo(t,l.y,c.y,f.y),Zo(t,l.z,c.z,f.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jx extends ma{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new ee){const a=i,l=this.points,c=(l.length-1)*t,f=Math.floor(c),d=c-f,m=l[f===0?f:f-1],p=l[f],g=l[f>l.length-2?l.length-1:f+1],_=l[f>l.length-3?l.length-1:f+2];return a.set(b_(d,m.x,p.x,g.x,_.x),b_(d,m.y,p.y,g.y,_.y)),a}copy(t){super.copy(t),this.points=[];for(let i=0,a=t.points.length;i<a;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,a=this.points.length;i<a;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,a=t.points.length;i<a;i++){const l=t.points[i];this.points.push(new ee().fromArray(l))}return this}}var Kx=Object.freeze({__proto__:null,ArcCurve:zx,CatmullRomCurve3:Cv,CubicBezierCurve:Xx,CubicBezierCurve3:Wx,EllipseCurve:wv,LineCurve:qx,LineCurve3:Yx,QuadraticBezierCurve:Zx,QuadraticBezierCurve3:Dv,SplineCurve:jx});class $c extends yi{constructor(t=1,i=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:a,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(a),m=Math.floor(l),p=d+1,g=m+1,_=t/d,S=i/m,M=[],E=[],A=[],x=[];for(let v=0;v<g;v++){const F=v*S-f;for(let U=0;U<p;U++){const w=U*_-c;E.push(w,-F,0),A.push(0,0,1),x.push(U/d),x.push(1-v/m)}}for(let v=0;v<m;v++)for(let F=0;F<d;F++){const U=F+p*v,w=F+p*(v+1),H=F+1+p*(v+1),I=F+1+p*v;M.push(U,w,I),M.push(w,H,I)}this.setIndex(M),this.setAttribute("position",new En(E,3)),this.setAttribute("normal",new En(A,3)),this.setAttribute("uv",new En(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $c(t.width,t.height,t.widthSegments,t.heightSegments)}}class ip extends yi{constructor(t=1,i=32,a=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:a,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),a=Math.max(2,Math.floor(a));const m=Math.min(f+d,Math.PI);let p=0;const g=[],_=new V,S=new V,M=[],E=[],A=[],x=[];for(let v=0;v<=a;v++){const F=[],U=v/a;let w=0;v===0&&f===0?w=.5/i:v===a&&m===Math.PI&&(w=-.5/i);for(let H=0;H<=i;H++){const I=H/i;_.x=-t*Math.cos(l+I*c)*Math.sin(f+U*d),_.y=t*Math.cos(f+U*d),_.z=t*Math.sin(l+I*c)*Math.sin(f+U*d),E.push(_.x,_.y,_.z),S.copy(_).normalize(),A.push(S.x,S.y,S.z),x.push(I+w,1-U),F.push(p++)}g.push(F)}for(let v=0;v<a;v++)for(let F=0;F<i;F++){const U=g[v][F+1],w=g[v][F],H=g[v+1][F],I=g[v+1][F+1];(v!==0||f>0)&&M.push(U,w,I),(v!==a-1||m<Math.PI)&&M.push(w,H,I)}this.setIndex(M),this.setAttribute("position",new En(E,3)),this.setAttribute("normal",new En(A,3)),this.setAttribute("uv",new En(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ip(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ap extends yi{constructor(t=new Dv(new V(-1,-1,0),new V(-1,1,0),new V(1,1,0)),i=64,a=1,l=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:a,radialSegments:l,closed:c};const f=t.computeFrenetFrames(i,c);this.tangents=f.tangents,this.normals=f.normals,this.binormals=f.binormals;const d=new V,m=new V,p=new ee;let g=new V;const _=[],S=[],M=[],E=[];A(),this.setIndex(E),this.setAttribute("position",new En(_,3)),this.setAttribute("normal",new En(S,3)),this.setAttribute("uv",new En(M,2));function A(){for(let U=0;U<i;U++)x(U);x(c===!1?i:0),F(),v()}function x(U){g=t.getPointAt(U/i,g);const w=f.normals[U],H=f.binormals[U];for(let I=0;I<=l;I++){const O=I/l*Math.PI*2,X=Math.sin(O),C=-Math.cos(O);m.x=C*w.x+X*H.x,m.y=C*w.y+X*H.y,m.z=C*w.z+X*H.z,m.normalize(),S.push(m.x,m.y,m.z),d.x=g.x+a*m.x,d.y=g.y+a*m.y,d.z=g.z+a*m.z,_.push(d.x,d.y,d.z)}}function v(){for(let U=1;U<=i;U++)for(let w=1;w<=l;w++){const H=(l+1)*(U-1)+(w-1),I=(l+1)*U+(w-1),O=(l+1)*U+w,X=(l+1)*(U-1)+w;E.push(H,I,X),E.push(I,O,X)}}function F(){for(let U=0;U<=i;U++)for(let w=0;w<=l;w++)p.x=U/i,p.y=w/l,M.push(p.x,p.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ap(new Kx[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Oe extends Gs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_v,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Vh extends Oe{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Qx extends Gs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=UM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Jx extends Gs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class tu extends gn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new me(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class $x extends tu{constructor(t,i,a){super(t,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const kh=new Ke,A_=new V,R_=new V;class Uv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.mapType=Fi,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $d,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,a=this.matrix;A_.setFromMatrixPosition(t.matrixWorld),i.position.copy(A_),R_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(R_),i.updateMatrixWorld(),kh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(kh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const w_=new Ke,Vo=new V,Xh=new V;class t1 extends Uv{constructor(){super(new si(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ee(4,2),this._viewportCount=6,this._viewports=[new ke(2,1,1,1),new ke(0,1,1,1),new ke(3,1,1,1),new ke(1,1,1,1),new ke(3,0,1,1),new ke(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(t,i=0){const a=this.camera,l=this.matrix,c=t.distance||a.far;c!==a.far&&(a.far=c,a.updateProjectionMatrix()),Vo.setFromMatrixPosition(t.matrixWorld),a.position.copy(Vo),Xh.copy(a.position),Xh.add(this._cubeDirections[i]),a.up.copy(this._cubeUps[i]),a.lookAt(Xh),a.updateMatrixWorld(),l.makeTranslation(-Vo.x,-Vo.y,-Vo.z),w_.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(w_,a.coordinateSystem,a.reversedDepth)}}class Wh extends tu{constructor(t,i,a=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=l,this.shadow=new t1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Lv extends bv{constructor(t=-1,i=1,a=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=a,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,a,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=a-t,f=a+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class e1 extends Uv{constructor(){super(new Lv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class n1 extends tu{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new e1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class i1 extends tu{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class a1 extends si{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class r1{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}const C_=new Ke;class s1{constructor(t,i,a=0,l=1/0){this.ray=new jd(t,i),this.near=a,this.far=l,this.camera=null,this.layers=new Kd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return C_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(C_),this}intersectObject(t,i=!0,a=[]){return Bd(t,this,a,i),a.sort(D_),a}intersectObjects(t,i=!0,a=[]){for(let l=0,c=t.length;l<c;l++)Bd(t[l],this,a,i);return a.sort(D_),a}}function D_(s,t){return s.distance-t.distance}function Bd(s,t,i,a){let l=!0;if(s.layers.test(t.layers)&&s.raycast(t,i)===!1&&(l=!1),l===!0&&a===!0){const c=s.children;for(let f=0,d=c.length;f<d;f++)Bd(c[f],t,i,!0)}}const zc=new Hs;class o1 extends Ox{constructor(t,i=16776960){const a=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),l=new Float32Array(24),c=new yi;c.setIndex(new _i(a,1)),c.setAttribute("position",new _i(l,3)),super(c,new tp({color:i,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&zc.setFromObject(this.object),zc.isEmpty())return;const t=zc.min,i=zc.max,a=this.geometry.attributes.position,l=a.array;l[0]=i.x,l[1]=i.y,l[2]=i.z,l[3]=t.x,l[4]=i.y,l[5]=i.z,l[6]=t.x,l[7]=t.y,l[8]=i.z,l[9]=i.x,l[10]=t.y,l[11]=i.z,l[12]=i.x,l[13]=i.y,l[14]=t.z,l[15]=t.x,l[16]=i.y,l[17]=t.z,l[18]=t.x,l[19]=t.y,l[20]=t.z,l[21]=i.x,l[22]=t.y,l[23]=t.z,a.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,i){return super.copy(t,i),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function U_(s,t,i,a){const l=l1(a);switch(i){case hv:return s*t;case pv:return s*t/l.components*l.byteLength;case Xd:return s*t/l.components*l.byteLength;case mv:return s*t*2/l.components*l.byteLength;case Wd:return s*t*2/l.components*l.byteLength;case dv:return s*t*3/l.components*l.byteLength;case Ri:return s*t*4/l.components*l.byteLength;case qd:return s*t*4/l.components*l.byteLength;case Hc:case Gc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Vc:case kc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case hd:case pd:return Math.max(s,16)*Math.max(t,8)/4;case fd:case dd:return Math.max(s,8)*Math.max(t,8)/2;case md:case gd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case _d:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case vd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case yd:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Sd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Md:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case xd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ed:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Td:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case bd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ad:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Rd:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case wd:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Cd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Dd:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ud:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Xc:case Ld:case Nd:return Math.ceil(s/4)*Math.ceil(t/4)*16;case gv:case Od:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Pd:case zd:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function l1(s){switch(s){case Fi:case cv:return{byteLength:1,components:1};case Jo:case uv:case il:return{byteLength:2,components:1};case Vd:case kd:return{byteLength:2,components:4};case wr:case Gd:case da:return{byteLength:4,components:1};case fv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hd);function Nv(){let s=null,t=!1,i=null,a=null;function l(c,f){i(c,f),a=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(a=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function c1(s){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,S=s.createBuffer();s.bindBuffer(m,S),s.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function a(d,m,p){const g=m.array,_=m.updateRanges;if(s.bindBuffer(p,d),_.length===0)s.bufferSubData(p,0,g);else{_.sort((M,E)=>M.start-E.start);let S=0;for(let M=1;M<_.length;M++){const E=_[S],A=_[M];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++S,_[S]=A)}_.length=S+1;for(let M=0,E=_.length;M<E;M++){const A=_[M];s.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var u1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f1=`#ifdef USE_ALPHAHASH
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
#endif`,h1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g1=`#ifdef USE_AOMAP
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
#endif`,_1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,v1=`#ifdef USE_BATCHING
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
#endif`,y1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,S1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,M1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,x1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,E1=`#ifdef USE_IRIDESCENCE
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
#endif`,T1=`#ifdef USE_BUMPMAP
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
#endif`,b1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,A1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,D1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,U1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,L1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,N1=`#define PI 3.141592653589793
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
} // validated`,O1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,P1=`vec3 transformedNormal = objectNormal;
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
#endif`,z1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,I1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H1="gl_FragColor = linearToOutputTexel( gl_FragColor );",G1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,V1=`#ifdef USE_ENVMAP
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
#endif`,k1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,X1=`#ifdef USE_ENVMAP
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
#endif`,W1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,q1=`#ifdef USE_ENVMAP
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
#endif`,Y1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Q1=`#ifdef USE_GRADIENTMAP
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
}`,J1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eE=`uniform bool receiveShadow;
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
#endif`,nE=`#ifdef USE_ENVMAP
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
#endif`,iE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oE=`PhysicalMaterial material;
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
#endif`,lE=`struct PhysicalMaterial {
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
}`,cE=`
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
#endif`,uE=`#if defined( RE_IndirectDiffuse )
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
#endif`,fE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_E=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yE=`#if defined( USE_POINTS_UV )
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
#endif`,SE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ME=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,EE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bE=`#ifdef USE_MORPHTARGETS
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
#endif`,AE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,CE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LE=`#ifdef USE_NORMALMAP
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
#endif`,NE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,FE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,YE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ZE=`float getShadowMask() {
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
}`,jE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KE=`#ifdef USE_SKINNING
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
#endif`,QE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JE=`#ifdef USE_SKINNING
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
#endif`,$E=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iT=`#ifdef USE_TRANSMISSION
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
#endif`,aT=`#ifdef USE_TRANSMISSION
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
#endif`,rT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uT=`uniform sampler2D t2D;
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
}`,fT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mT=`#include <common>
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
}`,gT=`#if DEPTH_PACKING == 3200
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
}`,_T=`#define DISTANCE
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
}`,vT=`#define DISTANCE
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
}`,yT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ST=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MT=`uniform float scale;
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
}`,xT=`uniform vec3 diffuse;
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
}`,ET=`#include <common>
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
}`,TT=`uniform vec3 diffuse;
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
}`,bT=`#define LAMBERT
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
}`,AT=`#define LAMBERT
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
}`,RT=`#define MATCAP
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
}`,wT=`#define MATCAP
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
}`,CT=`#define NORMAL
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
}`,DT=`#define NORMAL
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
}`,UT=`#define PHONG
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
}`,LT=`#define PHONG
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
}`,NT=`#define STANDARD
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
}`,OT=`#define STANDARD
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
}`,PT=`#define TOON
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
}`,zT=`#define TOON
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
}`,BT=`uniform float size;
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
}`,IT=`uniform vec3 diffuse;
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
}`,FT=`#include <common>
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
}`,HT=`uniform vec3 color;
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
}`,GT=`uniform float rotation;
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
}`,VT=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:u1,alphahash_pars_fragment:f1,alphamap_fragment:h1,alphamap_pars_fragment:d1,alphatest_fragment:p1,alphatest_pars_fragment:m1,aomap_fragment:g1,aomap_pars_fragment:_1,batching_pars_vertex:v1,batching_vertex:y1,begin_vertex:S1,beginnormal_vertex:M1,bsdfs:x1,iridescence_fragment:E1,bumpmap_pars_fragment:T1,clipping_planes_fragment:b1,clipping_planes_pars_fragment:A1,clipping_planes_pars_vertex:R1,clipping_planes_vertex:w1,color_fragment:C1,color_pars_fragment:D1,color_pars_vertex:U1,color_vertex:L1,common:N1,cube_uv_reflection_fragment:O1,defaultnormal_vertex:P1,displacementmap_pars_vertex:z1,displacementmap_vertex:B1,emissivemap_fragment:I1,emissivemap_pars_fragment:F1,colorspace_fragment:H1,colorspace_pars_fragment:G1,envmap_fragment:V1,envmap_common_pars_fragment:k1,envmap_pars_fragment:X1,envmap_pars_vertex:W1,envmap_physical_pars_fragment:nE,envmap_vertex:q1,fog_vertex:Y1,fog_pars_vertex:Z1,fog_fragment:j1,fog_pars_fragment:K1,gradientmap_pars_fragment:Q1,lightmap_pars_fragment:J1,lights_lambert_fragment:$1,lights_lambert_pars_fragment:tE,lights_pars_begin:eE,lights_toon_fragment:iE,lights_toon_pars_fragment:aE,lights_phong_fragment:rE,lights_phong_pars_fragment:sE,lights_physical_fragment:oE,lights_physical_pars_fragment:lE,lights_fragment_begin:cE,lights_fragment_maps:uE,lights_fragment_end:fE,logdepthbuf_fragment:hE,logdepthbuf_pars_fragment:dE,logdepthbuf_pars_vertex:pE,logdepthbuf_vertex:mE,map_fragment:gE,map_pars_fragment:_E,map_particle_fragment:vE,map_particle_pars_fragment:yE,metalnessmap_fragment:SE,metalnessmap_pars_fragment:ME,morphinstance_vertex:xE,morphcolor_vertex:EE,morphnormal_vertex:TE,morphtarget_pars_vertex:bE,morphtarget_vertex:AE,normal_fragment_begin:RE,normal_fragment_maps:wE,normal_pars_fragment:CE,normal_pars_vertex:DE,normal_vertex:UE,normalmap_pars_fragment:LE,clearcoat_normal_fragment_begin:NE,clearcoat_normal_fragment_maps:OE,clearcoat_pars_fragment:PE,iridescence_pars_fragment:zE,opaque_fragment:BE,packing:IE,premultiplied_alpha_fragment:FE,project_vertex:HE,dithering_fragment:GE,dithering_pars_fragment:VE,roughnessmap_fragment:kE,roughnessmap_pars_fragment:XE,shadowmap_pars_fragment:WE,shadowmap_pars_vertex:qE,shadowmap_vertex:YE,shadowmask_pars_fragment:ZE,skinbase_vertex:jE,skinning_pars_vertex:KE,skinning_vertex:QE,skinnormal_vertex:JE,specularmap_fragment:$E,specularmap_pars_fragment:tT,tonemapping_fragment:eT,tonemapping_pars_fragment:nT,transmission_fragment:iT,transmission_pars_fragment:aT,uv_pars_fragment:rT,uv_pars_vertex:sT,uv_vertex:oT,worldpos_vertex:lT,background_vert:cT,background_frag:uT,backgroundCube_vert:fT,backgroundCube_frag:hT,cube_vert:dT,cube_frag:pT,depth_vert:mT,depth_frag:gT,distanceRGBA_vert:_T,distanceRGBA_frag:vT,equirect_vert:yT,equirect_frag:ST,linedashed_vert:MT,linedashed_frag:xT,meshbasic_vert:ET,meshbasic_frag:TT,meshlambert_vert:bT,meshlambert_frag:AT,meshmatcap_vert:RT,meshmatcap_frag:wT,meshnormal_vert:CT,meshnormal_frag:DT,meshphong_vert:UT,meshphong_frag:LT,meshphysical_vert:NT,meshphysical_frag:OT,meshtoon_vert:PT,meshtoon_frag:zT,points_vert:BT,points_frag:IT,shadow_vert:FT,shadow_frag:HT,sprite_vert:GT,sprite_frag:VT},Pt={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Pi={basic:{uniforms:Fn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Fn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new me(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Fn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Fn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Fn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new me(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Fn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Fn([Pt.points,Pt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Fn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Fn([Pt.common,Pt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Fn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Fn([Pt.sprite,Pt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:Fn([Pt.common,Pt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:Fn([Pt.lights,Pt.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Pi.physical={uniforms:Fn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const Bc={r:0,b:0,g:0},Sr=new Hi,kT=new Ke;function XT(s,t,i,a,l,c,f){const d=new me(0);let m=c===!0?0:1,p,g,_=null,S=0,M=null;function E(U){let w=U.isScene===!0?U.background:null;return w&&w.isTexture&&(w=(U.backgroundBlurriness>0?i:t).get(w)),w}function A(U){let w=!1;const H=E(U);H===null?v(d,m):H&&H.isColor&&(v(H,1),w=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?a.buffers.color.setClear(0,0,0,1,f):I==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,f),(s.autoClear||w)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(U,w){const H=E(w);H&&(H.isCubeTexture||H.mapping===Qc)?(g===void 0&&(g=new Zn(new Dr(1,1,1),new Ka({name:"BackgroundCubeMaterial",uniforms:Bs(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(I,O,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Sr.copy(w.backgroundRotation),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),g.material.uniforms.envMap.value=H,g.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(kT.makeRotationFromEuler(Sr)),g.material.toneMapped=De.getTransfer(H.colorSpace)!==Ve,(_!==H||S!==H.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,_=H,S=H.version,M=s.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new Zn(new $c(2,2),new Ka({name:"BackgroundMaterial",uniforms:Bs(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:ja,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=De.getTransfer(H.colorSpace)!==Ve,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(_!==H||S!==H.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,_=H,S=H.version,M=s.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function v(U,w){U.getRGB(Bc,Tv(s)),a.buffers.color.setClear(Bc.r,Bc.g,Bc.b,w,f)}function F(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,w=1){d.set(U),m=w,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,v(d,m)},render:A,addToRenderList:x,dispose:F}}function WT(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},l=S(null);let c=l,f=!1;function d(D,z,rt,lt,ut){let dt=!1;const P=_(lt,rt,z);c!==P&&(c=P,p(c.object)),dt=M(D,lt,rt,ut),dt&&E(D,lt,rt,ut),ut!==null&&t.update(ut,s.ELEMENT_ARRAY_BUFFER),(dt||f)&&(f=!1,w(D,z,rt,lt),ut!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ut).buffer))}function m(){return s.createVertexArray()}function p(D){return s.bindVertexArray(D)}function g(D){return s.deleteVertexArray(D)}function _(D,z,rt){const lt=rt.wireframe===!0;let ut=a[D.id];ut===void 0&&(ut={},a[D.id]=ut);let dt=ut[z.id];dt===void 0&&(dt={},ut[z.id]=dt);let P=dt[lt];return P===void 0&&(P=S(m()),dt[lt]=P),P}function S(D){const z=[],rt=[],lt=[];for(let ut=0;ut<i;ut++)z[ut]=0,rt[ut]=0,lt[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:rt,attributeDivisors:lt,object:D,attributes:{},index:null}}function M(D,z,rt,lt){const ut=c.attributes,dt=z.attributes;let P=0;const K=rt.getAttributes();for(const Y in K)if(K[Y].location>=0){const xt=ut[Y];let N=dt[Y];if(N===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(N=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(N=D.instanceColor)),xt===void 0||xt.attribute!==N||N&&xt.data!==N.data)return!0;P++}return c.attributesNum!==P||c.index!==lt}function E(D,z,rt,lt){const ut={},dt=z.attributes;let P=0;const K=rt.getAttributes();for(const Y in K)if(K[Y].location>=0){let xt=dt[Y];xt===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(xt=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(xt=D.instanceColor));const N={};N.attribute=xt,xt&&xt.data&&(N.data=xt.data),ut[Y]=N,P++}c.attributes=ut,c.attributesNum=P,c.index=lt}function A(){const D=c.newAttributes;for(let z=0,rt=D.length;z<rt;z++)D[z]=0}function x(D){v(D,0)}function v(D,z){const rt=c.newAttributes,lt=c.enabledAttributes,ut=c.attributeDivisors;rt[D]=1,lt[D]===0&&(s.enableVertexAttribArray(D),lt[D]=1),ut[D]!==z&&(s.vertexAttribDivisor(D,z),ut[D]=z)}function F(){const D=c.newAttributes,z=c.enabledAttributes;for(let rt=0,lt=z.length;rt<lt;rt++)z[rt]!==D[rt]&&(s.disableVertexAttribArray(rt),z[rt]=0)}function U(D,z,rt,lt,ut,dt,P){P===!0?s.vertexAttribIPointer(D,z,rt,ut,dt):s.vertexAttribPointer(D,z,rt,lt,ut,dt)}function w(D,z,rt,lt){A();const ut=lt.attributes,dt=rt.getAttributes(),P=z.defaultAttributeValues;for(const K in dt){const Y=dt[K];if(Y.location>=0){let yt=ut[K];if(yt===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(yt=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(yt=D.instanceColor)),yt!==void 0){const xt=yt.normalized,N=yt.itemSize,nt=t.get(yt);if(nt===void 0)continue;const Mt=nt.buffer,Ct=nt.type,Q=nt.bytesPerElement,_t=Ct===s.INT||Ct===s.UNSIGNED_INT||yt.gpuType===Gd;if(yt.isInterleavedBufferAttribute){const J=yt.data,At=J.stride,bt=yt.offset;if(J.isInstancedInterleavedBuffer){for(let jt=0;jt<Y.locationSize;jt++)v(Y.location+jt,J.meshPerAttribute);D.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let jt=0;jt<Y.locationSize;jt++)x(Y.location+jt);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let jt=0;jt<Y.locationSize;jt++)U(Y.location+jt,N/Y.locationSize,Ct,xt,At*Q,(bt+N/Y.locationSize*jt)*Q,_t)}else{if(yt.isInstancedBufferAttribute){for(let J=0;J<Y.locationSize;J++)v(Y.location+J,yt.meshPerAttribute);D.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let J=0;J<Y.locationSize;J++)x(Y.location+J);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let J=0;J<Y.locationSize;J++)U(Y.location+J,N/Y.locationSize,Ct,xt,N*Q,N/Y.locationSize*J*Q,_t)}}else if(P!==void 0){const xt=P[K];if(xt!==void 0)switch(xt.length){case 2:s.vertexAttrib2fv(Y.location,xt);break;case 3:s.vertexAttrib3fv(Y.location,xt);break;case 4:s.vertexAttrib4fv(Y.location,xt);break;default:s.vertexAttrib1fv(Y.location,xt)}}}}F()}function H(){X();for(const D in a){const z=a[D];for(const rt in z){const lt=z[rt];for(const ut in lt)g(lt[ut].object),delete lt[ut];delete z[rt]}delete a[D]}}function I(D){if(a[D.id]===void 0)return;const z=a[D.id];for(const rt in z){const lt=z[rt];for(const ut in lt)g(lt[ut].object),delete lt[ut];delete z[rt]}delete a[D.id]}function O(D){for(const z in a){const rt=a[z];if(rt[D.id]===void 0)continue;const lt=rt[D.id];for(const ut in lt)g(lt[ut].object),delete lt[ut];delete rt[D.id]}}function X(){C(),f=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:C,dispose:H,releaseStatesOfGeometry:I,releaseStatesOfProgram:O,initAttributes:A,enableAttribute:x,disableUnusedAttributes:F}}function qT(s,t,i){let a;function l(p){a=p}function c(p,g){s.drawArrays(a,p,g),i.update(g,a,1)}function f(p,g,_){_!==0&&(s.drawArraysInstanced(a,p,g,_),i.update(g,a,_))}function d(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,g,0,_);let M=0;for(let E=0;E<_;E++)M+=g[E];i.update(M,a,1)}function m(p,g,_,S){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)f(p[E],g[E],S[E]);else{M.multiDrawArraysInstancedWEBGL(a,p,0,g,0,S,0,_);let E=0;for(let A=0;A<_;A++)E+=g[A]*S[A];i.update(E,a,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function YT(s,t,i,a){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(O){return!(O!==Ri&&a.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const X=O===il&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==Fi&&a.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==da&&!X)}function m(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),F=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=E>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:F,maxVaryings:U,maxFragmentUniforms:w,vertexTextures:H,maxSamples:I}}function ZT(s){const t=this;let i=null,a=0,l=!1,c=!1;const f=new xr,d=new fe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const M=_.length!==0||S||a!==0||l;return l=S,a=_.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,S){i=g(_,S,0)},this.setState=function(_,S,M){const E=_.clippingPlanes,A=_.clipIntersection,x=_.clipShadows,v=s.get(_);if(!l||E===null||E.length===0||c&&!x)c?g(null):p();else{const F=c?0:a,U=F*4;let w=v.clippingState||null;m.value=w,w=g(E,S,U,M);for(let H=0;H!==U;++H)w[H]=i[H];v.clippingState=w,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=F}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(_,S,M,E){const A=_!==null?_.length:0;let x=null;if(A!==0){if(x=m.value,E!==!0||x===null){const v=M+A*4,F=S.matrixWorldInverse;d.getNormalMatrix(F),(x===null||x.length<v)&&(x=new Float32Array(v));for(let U=0,w=M;U!==A;++U,w+=4)f.copy(_[U]).applyMatrix4(F,d),f.normal.toArray(x,w),x[w+3]=f.constant}m.value=x,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,x}}function jT(s){let t=new WeakMap;function i(f,d){return d===ld?f.mapping=Os:d===cd&&(f.mapping=Ps),f}function a(f){if(f&&f.isTexture){const d=f.mapping;if(d===ld||d===cd)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new Rx(m.height);return p.fromEquirectangularTexture(s,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}const Cs=4,L_=[.125,.215,.35,.446,.526,.582],br=20,qh=new Lv,N_=new me;let Yh=null,Zh=0,jh=0,Kh=!1;const Er=(1+Math.sqrt(5))/2,As=1/Er,O_=[new V(-Er,As,0),new V(Er,As,0),new V(-As,0,Er),new V(As,0,Er),new V(0,Er,-As),new V(0,Er,As),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],KT=new V;class P_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,a=.1,l=100,c={}){const{size:f=256,position:d=KT}=c;Yh=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,a,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=I_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=B_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Yh,Zh,jh),this._renderer.xr.enabled=Kh,t.scissorTest=!1,Ic(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Os||t.mapping===Ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yh=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=i||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,a={magFilter:zi,minFilter:zi,generateMipmaps:!1,type:il,format:Ri,colorSpace:zs,depthBuffer:!1},l=z_(t,i,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=z_(t,i,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=QT(c)),this._blurMaterial=JT(c,t,i)}return l}_compileMaterial(t){const i=new Zn(this._lodPlanes[0],t);this._renderer.compile(i,qh)}_sceneToCubeUV(t,i,a,l,c){const m=new si(90,1,i,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,M=_.toneMapping;_.getClearColor(N_),_.toneMapping=Za,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null));const A=new Qd({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),x=new Zn(new Dr,A);let v=!1;const F=t.background;F?F.isColor&&(A.color.copy(F),t.background=null,v=!0):(A.color.copy(N_),v=!0);for(let U=0;U<6;U++){const w=U%3;w===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[U],c.y,c.z)):w===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[U]));const H=this._cubeSize;Ic(l,w*H,U>2?H:0,H,H),_.setRenderTarget(l),v&&_.render(x,m),_.render(t,m)}x.geometry.dispose(),x.material.dispose(),_.toneMapping=M,_.autoClear=S,t.background=F}_textureToCubeUV(t,i){const a=this._renderer,l=t.mapping===Os||t.mapping===Ps;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=I_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=B_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new Zn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Ic(i,0,0,3*m,2*m),a.setRenderTarget(i),a.render(f,qh)}_applyPMREM(t){const i=this._renderer,a=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=O_[(l-c-1)%O_.length];this._blur(t,c-1,c,f,d)}i.autoClear=a}_blur(t,i,a,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,a,l,"latitudinal",c),this._halfBlur(f,t,a,a,l,"longitudinal",c)}_halfBlur(t,i,a,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Zn(this._lodPlanes[l],p),S=p.uniforms,M=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*br-1),A=c/E,x=isFinite(c)?1+Math.floor(g*A):br;x>br&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${br}`);const v=[];let F=0;for(let O=0;O<br;++O){const X=O/A,C=Math.exp(-X*X/2);v.push(C),O===0?F+=C:O<x&&(F+=2*C)}for(let O=0;O<v.length;O++)v[O]=v[O]/F;S.envMap.value=t.texture,S.samples.value=x,S.weights.value=v,S.latitudinal.value=f==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:U}=this;S.dTheta.value=E,S.mipInt.value=U-a;const w=this._sizeLods[l],H=3*w*(l>U-Cs?l-U+Cs:0),I=4*(this._cubeSize-w);Ic(i,H,I,3*w,2*w),m.setRenderTarget(i),m.render(_,qh)}}function QT(s){const t=[],i=[],a=[];let l=s;const c=s-Cs+1+L_.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let m=1/d;f>s-Cs?m=L_[f-s+Cs-1]:f===0&&(m=0),a.push(m);const p=1/(d-2),g=-p,_=1+p,S=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,E=6,A=3,x=2,v=1,F=new Float32Array(A*E*M),U=new Float32Array(x*E*M),w=new Float32Array(v*E*M);for(let I=0;I<M;I++){const O=I%3*2/3-1,X=I>2?0:-1,C=[O,X,0,O+2/3,X,0,O+2/3,X+1,0,O,X,0,O+2/3,X+1,0,O,X+1,0];F.set(C,A*E*I),U.set(S,x*E*I);const D=[I,I,I,I,I,I];w.set(D,v*E*I)}const H=new yi;H.setAttribute("position",new _i(F,A)),H.setAttribute("uv",new _i(U,x)),H.setAttribute("faceIndex",new _i(w,v)),t.push(H),l>Cs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:a}}function z_(s,t,i){const a=new Cr(s,t,i);return a.texture.mapping=Qc,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Ic(s,t,i,a,l){s.viewport.set(t,i,a,l),s.scissor.set(t,i,a,l)}function JT(s,t,i){const a=new Float32Array(br),l=new V(0,1,0);return new Ka({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:rp(),fragmentShader:`

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
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function B_(){return new Ka({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rp(),fragmentShader:`

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
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function I_(){return new Ka({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function rp(){return`

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
	`}function $T(s){let t=new WeakMap,i=null;function a(d){if(d&&d.isTexture){const m=d.mapping,p=m===ld||m===cd,g=m===Os||m===Ps;if(p||g){let _=t.get(d);const S=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new P_(s)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new P_(s)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:f}}function tb(s){const t={};function i(a){if(t[a]!==void 0)return t[a];let l;switch(a){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(a)}return t[a]=l,l}return{has:function(a){return i(a)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(a){const l=i(a);return l===null&&Us("THREE.WebGLRenderer: "+a+" extension not supported."),l}}}function eb(s,t,i,a){const l={},c=new WeakMap;function f(_){const S=_.target;S.index!==null&&t.remove(S.index);for(const E in S.attributes)t.remove(S.attributes[E]);S.removeEventListener("dispose",f),delete l[S.id];const M=c.get(S);M&&(t.remove(M),c.delete(S)),a.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(_,S){return l[S.id]===!0||(S.addEventListener("dispose",f),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const M in S)t.update(S[M],s.ARRAY_BUFFER)}function p(_){const S=[],M=_.index,E=_.attributes.position;let A=0;if(M!==null){const F=M.array;A=M.version;for(let U=0,w=F.length;U<w;U+=3){const H=F[U+0],I=F[U+1],O=F[U+2];S.push(H,I,I,O,O,H)}}else if(E!==void 0){const F=E.array;A=E.version;for(let U=0,w=F.length/3-1;U<w;U+=3){const H=U+0,I=U+1,O=U+2;S.push(H,I,I,O,O,H)}}else return;const x=new(yv(S)?Ev:xv)(S,1);x.version=A;const v=c.get(_);v&&t.remove(v),c.set(_,x)}function g(_){const S=c.get(_);if(S){const M=_.index;M!==null&&S.version<M.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function nb(s,t,i){let a;function l(S){a=S}let c,f;function d(S){c=S.type,f=S.bytesPerElement}function m(S,M){s.drawElements(a,M,c,S*f),i.update(M,a,1)}function p(S,M,E){E!==0&&(s.drawElementsInstanced(a,M,c,S*f,E),i.update(M,a,E))}function g(S,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,M,0,c,S,0,E);let x=0;for(let v=0;v<E;v++)x+=M[v];i.update(x,a,1)}function _(S,M,E,A){if(E===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<S.length;v++)p(S[v]/f,M[v],A[v]);else{x.multiDrawElementsInstancedWEBGL(a,M,0,c,S,0,A,0,E);let v=0;for(let F=0;F<E;F++)v+=M[F]*A[F];i.update(v,a,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function ib(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,f,d){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:a}}function ab(s,t,i){const a=new WeakMap,l=new ke;function c(f,d,m){const p=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let S=a.get(d);if(S===void 0||S.count!==_){let D=function(){X.dispose(),a.delete(d),d.removeEventListener("dispose",D)};var M=D;S!==void 0&&S.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],F=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let w=0;E===!0&&(w=1),A===!0&&(w=2),x===!0&&(w=3);let H=d.attributes.position.count*w,I=1;H>t.maxTextureSize&&(I=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const O=new Float32Array(H*I*4*_),X=new Sv(O,H,I,_);X.type=da,X.needsUpdate=!0;const C=w*4;for(let z=0;z<_;z++){const rt=v[z],lt=F[z],ut=U[z],dt=H*I*4*z;for(let P=0;P<rt.count;P++){const K=P*C;E===!0&&(l.fromBufferAttribute(rt,P),O[dt+K+0]=l.x,O[dt+K+1]=l.y,O[dt+K+2]=l.z,O[dt+K+3]=0),A===!0&&(l.fromBufferAttribute(lt,P),O[dt+K+4]=l.x,O[dt+K+5]=l.y,O[dt+K+6]=l.z,O[dt+K+7]=0),x===!0&&(l.fromBufferAttribute(ut,P),O[dt+K+8]=l.x,O[dt+K+9]=l.y,O[dt+K+10]=l.z,O[dt+K+11]=ut.itemSize===4?l.w:1)}}S={count:_,texture:X,size:new ee(H,I)},a.set(d,S),d.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let x=0;x<p.length;x++)E+=p[x];const A=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}return{update:c}}function rb(s,t,i,a){let l=new WeakMap;function c(m){const p=a.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const Ov=new Hn,F_=new Rv(1,1),Pv=new Sv,zv=new ux,Bv=new Av,H_=[],G_=[],V_=new Float32Array(16),k_=new Float32Array(9),X_=new Float32Array(4);function Vs(s,t,i){const a=s[0];if(a<=0||a>0)return s;const l=t*i;let c=H_[l];if(c===void 0&&(c=new Float32Array(l),H_[l]=c),t!==0){a.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,s[f].toArray(c,d)}return c}function vn(s,t){if(s.length!==t.length)return!1;for(let i=0,a=s.length;i<a;i++)if(s[i]!==t[i])return!1;return!0}function yn(s,t){for(let i=0,a=t.length;i<a;i++)s[i]=t[i]}function eu(s,t){let i=G_[t];i===void 0&&(i=new Int32Array(t),G_[t]=i);for(let a=0;a!==t;++a)i[a]=s.allocateTextureUnit();return i}function sb(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function ob(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;s.uniform2fv(this.addr,t),yn(i,t)}}function lb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(vn(i,t))return;s.uniform3fv(this.addr,t),yn(i,t)}}function cb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;s.uniform4fv(this.addr,t),yn(i,t)}}function ub(s,t){const i=this.cache,a=t.elements;if(a===void 0){if(vn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),yn(i,t)}else{if(vn(i,a))return;X_.set(a),s.uniformMatrix2fv(this.addr,!1,X_),yn(i,a)}}function fb(s,t){const i=this.cache,a=t.elements;if(a===void 0){if(vn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),yn(i,t)}else{if(vn(i,a))return;k_.set(a),s.uniformMatrix3fv(this.addr,!1,k_),yn(i,a)}}function hb(s,t){const i=this.cache,a=t.elements;if(a===void 0){if(vn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),yn(i,t)}else{if(vn(i,a))return;V_.set(a),s.uniformMatrix4fv(this.addr,!1,V_),yn(i,a)}}function db(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function pb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;s.uniform2iv(this.addr,t),yn(i,t)}}function mb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;s.uniform3iv(this.addr,t),yn(i,t)}}function gb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;s.uniform4iv(this.addr,t),yn(i,t)}}function _b(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function vb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;s.uniform2uiv(this.addr,t),yn(i,t)}}function yb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;s.uniform3uiv(this.addr,t),yn(i,t)}}function Sb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;s.uniform4uiv(this.addr,t),yn(i,t)}}function Mb(s,t,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(F_.compareFunction=vv,c=F_):c=Ov,i.setTexture2D(t||c,l)}function xb(s,t,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),i.setTexture3D(t||zv,l)}function Eb(s,t,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),i.setTextureCube(t||Bv,l)}function Tb(s,t,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),i.setTexture2DArray(t||Pv,l)}function bb(s){switch(s){case 5126:return sb;case 35664:return ob;case 35665:return lb;case 35666:return cb;case 35674:return ub;case 35675:return fb;case 35676:return hb;case 5124:case 35670:return db;case 35667:case 35671:return pb;case 35668:case 35672:return mb;case 35669:case 35673:return gb;case 5125:return _b;case 36294:return vb;case 36295:return yb;case 36296:return Sb;case 35678:case 36198:case 36298:case 36306:case 35682:return Mb;case 35679:case 36299:case 36307:return xb;case 35680:case 36300:case 36308:case 36293:return Eb;case 36289:case 36303:case 36311:case 36292:return Tb}}function Ab(s,t){s.uniform1fv(this.addr,t)}function Rb(s,t){const i=Vs(t,this.size,2);s.uniform2fv(this.addr,i)}function wb(s,t){const i=Vs(t,this.size,3);s.uniform3fv(this.addr,i)}function Cb(s,t){const i=Vs(t,this.size,4);s.uniform4fv(this.addr,i)}function Db(s,t){const i=Vs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function Ub(s,t){const i=Vs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function Lb(s,t){const i=Vs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function Nb(s,t){s.uniform1iv(this.addr,t)}function Ob(s,t){s.uniform2iv(this.addr,t)}function Pb(s,t){s.uniform3iv(this.addr,t)}function zb(s,t){s.uniform4iv(this.addr,t)}function Bb(s,t){s.uniform1uiv(this.addr,t)}function Ib(s,t){s.uniform2uiv(this.addr,t)}function Fb(s,t){s.uniform3uiv(this.addr,t)}function Hb(s,t){s.uniform4uiv(this.addr,t)}function Gb(s,t,i){const a=this.cache,l=t.length,c=eu(i,l);vn(a,c)||(s.uniform1iv(this.addr,c),yn(a,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||Ov,c[f])}function Vb(s,t,i){const a=this.cache,l=t.length,c=eu(i,l);vn(a,c)||(s.uniform1iv(this.addr,c),yn(a,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||zv,c[f])}function kb(s,t,i){const a=this.cache,l=t.length,c=eu(i,l);vn(a,c)||(s.uniform1iv(this.addr,c),yn(a,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||Bv,c[f])}function Xb(s,t,i){const a=this.cache,l=t.length,c=eu(i,l);vn(a,c)||(s.uniform1iv(this.addr,c),yn(a,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||Pv,c[f])}function Wb(s){switch(s){case 5126:return Ab;case 35664:return Rb;case 35665:return wb;case 35666:return Cb;case 35674:return Db;case 35675:return Ub;case 35676:return Lb;case 5124:case 35670:return Nb;case 35667:case 35671:return Ob;case 35668:case 35672:return Pb;case 35669:case 35673:return zb;case 5125:return Bb;case 36294:return Ib;case 36295:return Fb;case 36296:return Hb;case 35678:case 36198:case 36298:case 36306:case 35682:return Gb;case 35679:case 36299:case 36307:return Vb;case 35680:case 36300:case 36308:case 36293:return kb;case 36289:case 36303:case 36311:case 36292:return Xb}}class qb{constructor(t,i,a){this.id=t,this.addr=a,this.cache=[],this.type=i.type,this.setValue=bb(i.type)}}class Yb{constructor(t,i,a){this.id=t,this.addr=a,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Wb(i.type)}}class Zb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,a){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],a)}}}const Qh=/(\w+)(\])?(\[|\.)?/g;function W_(s,t){s.seq.push(t),s.map[t.id]=t}function jb(s,t,i){const a=s.name,l=a.length;for(Qh.lastIndex=0;;){const c=Qh.exec(a),f=Qh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){W_(i,p===void 0?new qb(d,s,t):new Yb(d,s,t));break}else{let _=i.map[d];_===void 0&&(_=new Zb(d),W_(i,_)),i=_}}}class Wc{constructor(t,i){this.seq=[],this.map={};const a=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<a;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);jb(c,f,this)}}setValue(t,i,a,l){const c=this.map[i];c!==void 0&&c.setValue(t,a,l)}setOptional(t,i,a){const l=i[a];l!==void 0&&this.setValue(t,a,l)}static upload(t,i,a,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=a[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const a=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&a.push(f)}return a}}function q_(s,t,i){const a=s.createShader(t);return s.shaderSource(a,i),s.compileShader(a),a}const Kb=37297;let Qb=0;function Jb(s,t){const i=s.split(`
`),a=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;a.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return a.join(`
`)}const Y_=new fe;function $b(s){De._getMatrix(Y_,De.workingColorSpace,s);const t=`mat3( ${Y_.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(s)){case qc:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Z_(s,t,i){const a=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(a&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+Jb(s.getShaderSource(t),d)}else return c}function tA(s,t){const i=$b(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function eA(s,t){let i;switch(t){case TM:i="Linear";break;case bM:i="Reinhard";break;case AM:i="Cineon";break;case ov:i="ACESFilmic";break;case wM:i="AgX";break;case CM:i="Neutral";break;case RM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Fc=new V;function nA(){De.getLuminanceCoefficients(Fc);const s=Fc.x.toFixed(4),t=Fc.y.toFixed(4),i=Fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function aA(s){const t=[];for(const i in s){const a=s[i];a!==!1&&t.push("#define "+i+" "+a)}return t.join(`
`)}function rA(s,t){const i={},a=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<a;l++){const c=s.getActiveAttrib(t,l),f=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:s.getAttribLocation(t,f),locationSize:d}}return i}function Xo(s){return s!==""}function j_(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function K_(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const sA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Id(s){return s.replace(sA,lA)}const oA=new Map;function lA(s,t){let i=he[t];if(i===void 0){const a=oA.get(t);if(a!==void 0)i=he[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Id(i)}const cA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Q_(s){return s.replace(cA,uA)}function uA(s,t,i,a){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function J_(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function fA(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===av?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===rv?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===fa&&(t="SHADOWMAP_TYPE_VSM"),t}function hA(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Os:case Ps:t="ENVMAP_TYPE_CUBE";break;case Qc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function dA(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Ps&&(t="ENVMAP_MODE_REFRACTION"),t}function pA(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case sv:t="ENVMAP_BLENDING_MULTIPLY";break;case xM:t="ENVMAP_BLENDING_MIX";break;case EM:t="ENVMAP_BLENDING_ADD";break}return t}function mA(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:a,maxMip:i}}function gA(s,t,i,a){const l=s.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=fA(i),p=hA(i),g=dA(i),_=pA(i),S=mA(i),M=iA(i),E=aA(c),A=l.createProgram();let x,v,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Xo).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Xo).join(`
`),v.length>0&&(v+=`
`)):(x=[J_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),v=[J_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Za?"#define TONE_MAPPING":"",i.toneMapping!==Za?he.tonemapping_pars_fragment:"",i.toneMapping!==Za?eA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,tA("linearToOutputTexel",i.outputColorSpace),nA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Xo).join(`
`)),f=Id(f),f=j_(f,i),f=K_(f,i),d=Id(d),d=j_(d,i),d=K_(d,i),f=Q_(f),d=Q_(d),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",i.glslVersion===n_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===n_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=F+x+f,w=F+v+d,H=q_(l,l.VERTEX_SHADER,U),I=q_(l,l.FRAGMENT_SHADER,w);l.attachShader(A,H),l.attachShader(A,I),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function O(z){if(s.debug.checkShaderErrors){const rt=l.getProgramInfoLog(A)||"",lt=l.getShaderInfoLog(H)||"",ut=l.getShaderInfoLog(I)||"",dt=rt.trim(),P=lt.trim(),K=ut.trim();let Y=!0,yt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,H,I);else{const xt=Z_(l,H,"vertex"),N=Z_(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+dt+`
`+xt+`
`+N)}else dt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",dt):(P===""||K==="")&&(yt=!1);yt&&(z.diagnostics={runnable:Y,programLog:dt,vertexShader:{log:P,prefix:x},fragmentShader:{log:K,prefix:v}})}l.deleteShader(H),l.deleteShader(I),X=new Wc(l,A),C=rA(l,A)}let X;this.getUniforms=function(){return X===void 0&&O(this),X};let C;this.getAttributes=function(){return C===void 0&&O(this),C};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(A,Kb)),D},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Qb++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=H,this.fragmentShader=I,this}let _A=0;class vA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,a=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(a),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const a of i)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let a=i.get(t);return a===void 0&&(a=new Set,i.set(t,a)),a}_getShaderStage(t){const i=this.shaderCache;let a=i.get(t);return a===void 0&&(a=new yA(t),i.set(t,a)),a}}class yA{constructor(t){this.id=_A++,this.code=t,this.usedTimes=0}}function SA(s,t,i,a,l,c,f){const d=new Kd,m=new vA,p=new Set,g=[],_=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(C){return p.add(C),C===0?"uv":`uv${C}`}function x(C,D,z,rt,lt){const ut=rt.fog,dt=lt.geometry,P=C.isMeshStandardMaterial?rt.environment:null,K=(C.isMeshStandardMaterial?i:t).get(C.envMap||P),Y=K&&K.mapping===Qc?K.image.height:null,yt=E[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const xt=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,N=xt!==void 0?xt.length:0;let nt=0;dt.morphAttributes.position!==void 0&&(nt=1),dt.morphAttributes.normal!==void 0&&(nt=2),dt.morphAttributes.color!==void 0&&(nt=3);let Mt,Ct,Q,_t;if(yt){const Ae=Pi[yt];Mt=Ae.vertexShader,Ct=Ae.fragmentShader}else Mt=C.vertexShader,Ct=C.fragmentShader,m.update(C),Q=m.getVertexShaderID(C),_t=m.getFragmentShaderID(C);const J=s.getRenderTarget(),At=s.state.buffers.depth.getReversed(),bt=lt.isInstancedMesh===!0,jt=lt.isBatchedMesh===!0,Ie=!!C.map,ge=!!C.matcap,G=!!K,be=!!C.aoMap,$t=!!C.lightMap,Ee=!!C.bumpMap,Kt=!!C.normalMap,Xe=!!C.displacementMap,Ft=!!C.emissiveMap,se=!!C.metalnessMap,tn=!!C.roughnessMap,Je=C.anisotropy>0,L=C.clearcoat>0,T=C.dispersion>0,et=C.iridescence>0,pt=C.sheen>0,Et=C.transmission>0,ft=Je&&!!C.anisotropyMap,Yt=L&&!!C.clearcoatMap,Dt=L&&!!C.clearcoatNormalMap,Wt=L&&!!C.clearcoatRoughnessMap,qt=et&&!!C.iridescenceMap,Rt=et&&!!C.iridescenceThicknessMap,Ut=pt&&!!C.sheenColorMap,Zt=pt&&!!C.sheenRoughnessMap,Bt=!!C.specularMap,Nt=!!C.specularColorMap,oe=!!C.specularIntensityMap,W=Et&&!!C.transmissionMap,wt=Et&&!!C.thicknessMap,Lt=!!C.gradientMap,It=!!C.alphaMap,Tt=C.alphaTest>0,vt=!!C.alphaHash,Ht=!!C.extensions;let ae=Za;C.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(ae=s.toneMapping);const Pe={shaderID:yt,shaderType:C.type,shaderName:C.name,vertexShader:Mt,fragmentShader:Ct,defines:C.defines,customVertexShaderID:Q,customFragmentShaderID:_t,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:jt,batchingColor:jt&&lt._colorsTexture!==null,instancing:bt,instancingColor:bt&&lt.instanceColor!==null,instancingMorph:bt&&lt.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:J===null?s.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:zs,alphaToCoverage:!!C.alphaToCoverage,map:Ie,matcap:ge,envMap:G,envMapMode:G&&K.mapping,envMapCubeUVHeight:Y,aoMap:be,lightMap:$t,bumpMap:Ee,normalMap:Kt,displacementMap:S&&Xe,emissiveMap:Ft,normalMapObjectSpace:Kt&&C.normalMapType===NM,normalMapTangentSpace:Kt&&C.normalMapType===_v,metalnessMap:se,roughnessMap:tn,anisotropy:Je,anisotropyMap:ft,clearcoat:L,clearcoatMap:Yt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Wt,dispersion:T,iridescence:et,iridescenceMap:qt,iridescenceThicknessMap:Rt,sheen:pt,sheenColorMap:Ut,sheenRoughnessMap:Zt,specularMap:Bt,specularColorMap:Nt,specularIntensityMap:oe,transmission:Et,transmissionMap:W,thicknessMap:wt,gradientMap:Lt,opaque:C.transparent===!1&&C.blending===Ds&&C.alphaToCoverage===!1,alphaMap:It,alphaTest:Tt,alphaHash:vt,combine:C.combine,mapUv:Ie&&A(C.map.channel),aoMapUv:be&&A(C.aoMap.channel),lightMapUv:$t&&A(C.lightMap.channel),bumpMapUv:Ee&&A(C.bumpMap.channel),normalMapUv:Kt&&A(C.normalMap.channel),displacementMapUv:Xe&&A(C.displacementMap.channel),emissiveMapUv:Ft&&A(C.emissiveMap.channel),metalnessMapUv:se&&A(C.metalnessMap.channel),roughnessMapUv:tn&&A(C.roughnessMap.channel),anisotropyMapUv:ft&&A(C.anisotropyMap.channel),clearcoatMapUv:Yt&&A(C.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&A(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&A(C.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&A(C.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&A(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&A(C.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&A(C.sheenRoughnessMap.channel),specularMapUv:Bt&&A(C.specularMap.channel),specularColorMapUv:Nt&&A(C.specularColorMap.channel),specularIntensityMapUv:oe&&A(C.specularIntensityMap.channel),transmissionMapUv:W&&A(C.transmissionMap.channel),thicknessMapUv:wt&&A(C.thicknessMap.channel),alphaMapUv:It&&A(C.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(Kt||Je),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!dt.attributes.uv&&(Ie||It),fog:!!ut,useFog:C.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:At,skinning:lt.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:nt,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:ae,decodeVideoTexture:Ie&&C.map.isVideoTexture===!0&&De.getTransfer(C.map.colorSpace)===Ve,decodeVideoTextureEmissive:Ft&&C.emissiveMap.isVideoTexture===!0&&De.getTransfer(C.emissiveMap.colorSpace)===Ve,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ha,flipSided:C.side===jn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ht&&C.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&C.extensions.multiDraw===!0||jt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Pe.vertexUv1s=p.has(1),Pe.vertexUv2s=p.has(2),Pe.vertexUv3s=p.has(3),p.clear(),Pe}function v(C){const D=[];if(C.shaderID?D.push(C.shaderID):(D.push(C.customVertexShaderID),D.push(C.customFragmentShaderID)),C.defines!==void 0)for(const z in C.defines)D.push(z),D.push(C.defines[z]);return C.isRawShaderMaterial===!1&&(F(D,C),U(D,C),D.push(s.outputColorSpace)),D.push(C.customProgramCacheKey),D.join()}function F(C,D){C.push(D.precision),C.push(D.outputColorSpace),C.push(D.envMapMode),C.push(D.envMapCubeUVHeight),C.push(D.mapUv),C.push(D.alphaMapUv),C.push(D.lightMapUv),C.push(D.aoMapUv),C.push(D.bumpMapUv),C.push(D.normalMapUv),C.push(D.displacementMapUv),C.push(D.emissiveMapUv),C.push(D.metalnessMapUv),C.push(D.roughnessMapUv),C.push(D.anisotropyMapUv),C.push(D.clearcoatMapUv),C.push(D.clearcoatNormalMapUv),C.push(D.clearcoatRoughnessMapUv),C.push(D.iridescenceMapUv),C.push(D.iridescenceThicknessMapUv),C.push(D.sheenColorMapUv),C.push(D.sheenRoughnessMapUv),C.push(D.specularMapUv),C.push(D.specularColorMapUv),C.push(D.specularIntensityMapUv),C.push(D.transmissionMapUv),C.push(D.thicknessMapUv),C.push(D.combine),C.push(D.fogExp2),C.push(D.sizeAttenuation),C.push(D.morphTargetsCount),C.push(D.morphAttributeCount),C.push(D.numDirLights),C.push(D.numPointLights),C.push(D.numSpotLights),C.push(D.numSpotLightMaps),C.push(D.numHemiLights),C.push(D.numRectAreaLights),C.push(D.numDirLightShadows),C.push(D.numPointLightShadows),C.push(D.numSpotLightShadows),C.push(D.numSpotLightShadowsWithMaps),C.push(D.numLightProbes),C.push(D.shadowMapType),C.push(D.toneMapping),C.push(D.numClippingPlanes),C.push(D.numClipIntersection),C.push(D.depthPacking)}function U(C,D){d.disableAll(),D.supportsVertexTextures&&d.enable(0),D.instancing&&d.enable(1),D.instancingColor&&d.enable(2),D.instancingMorph&&d.enable(3),D.matcap&&d.enable(4),D.envMap&&d.enable(5),D.normalMapObjectSpace&&d.enable(6),D.normalMapTangentSpace&&d.enable(7),D.clearcoat&&d.enable(8),D.iridescence&&d.enable(9),D.alphaTest&&d.enable(10),D.vertexColors&&d.enable(11),D.vertexAlphas&&d.enable(12),D.vertexUv1s&&d.enable(13),D.vertexUv2s&&d.enable(14),D.vertexUv3s&&d.enable(15),D.vertexTangents&&d.enable(16),D.anisotropy&&d.enable(17),D.alphaHash&&d.enable(18),D.batching&&d.enable(19),D.dispersion&&d.enable(20),D.batchingColor&&d.enable(21),D.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),C.push(d.mask)}function w(C){const D=E[C.type];let z;if(D){const rt=Pi[D];z=Ex.clone(rt.uniforms)}else z=C.uniforms;return z}function H(C,D){let z;for(let rt=0,lt=g.length;rt<lt;rt++){const ut=g[rt];if(ut.cacheKey===D){z=ut,++z.usedTimes;break}}return z===void 0&&(z=new gA(s,D,C,c),g.push(z)),z}function I(C){if(--C.usedTimes===0){const D=g.indexOf(C);g[D]=g[g.length-1],g.pop(),C.destroy()}}function O(C){m.remove(C)}function X(){m.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:w,acquireProgram:H,releaseProgram:I,releaseShaderCache:O,programs:g,dispose:X}}function MA(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function a(f){s.delete(f)}function l(f,d,m){s.get(f)[d]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:a,update:l,dispose:c}}function xA(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function $_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function tv(){const s=[];let t=0;const i=[],a=[],l=[];function c(){t=0,i.length=0,a.length=0,l.length=0}function f(_,S,M,E,A,x){let v=s[t];return v===void 0?(v={id:_.id,object:_,geometry:S,material:M,groupOrder:E,renderOrder:_.renderOrder,z:A,group:x},s[t]=v):(v.id=_.id,v.object=_,v.geometry=S,v.material=M,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=A,v.group=x),t++,v}function d(_,S,M,E,A,x){const v=f(_,S,M,E,A,x);M.transmission>0?a.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(_,S,M,E,A,x){const v=f(_,S,M,E,A,x);M.transmission>0?a.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,S){i.length>1&&i.sort(_||xA),a.length>1&&a.sort(S||$_),l.length>1&&l.sort(S||$_)}function g(){for(let _=t,S=s.length;_<S;_++){const M=s[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:a,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function EA(){let s=new WeakMap;function t(a,l){const c=s.get(a);let f;return c===void 0?(f=new tv,s.set(a,[f])):l>=c.length?(f=new tv,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function TA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new V,color:new me};break;case"SpotLight":i={position:new V,direction:new V,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new V,color:new me,distance:0,decay:0};break;case"HemisphereLight":i={direction:new V,skyColor:new me,groundColor:new me};break;case"RectAreaLight":i={color:new me,position:new V,halfWidth:new V,halfHeight:new V};break}return s[t.id]=i,i}}}function bA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let AA=0;function RA(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function wA(s){const t=new TA,i=bA(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new V);const l=new V,c=new Ke,f=new Ke;function d(p){let g=0,_=0,S=0;for(let C=0;C<9;C++)a.probe[C].set(0,0,0);let M=0,E=0,A=0,x=0,v=0,F=0,U=0,w=0,H=0,I=0,O=0;p.sort(RA);for(let C=0,D=p.length;C<D;C++){const z=p[C],rt=z.color,lt=z.intensity,ut=z.distance,dt=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)g+=rt.r*lt,_+=rt.g*lt,S+=rt.b*lt;else if(z.isLightProbe){for(let P=0;P<9;P++)a.probe[P].addScaledVector(z.sh.coefficients[P],lt);O++}else if(z.isDirectionalLight){const P=t.get(z);if(P.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const K=z.shadow,Y=i.get(z);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,a.directionalShadow[M]=Y,a.directionalShadowMap[M]=dt,a.directionalShadowMatrix[M]=z.shadow.matrix,F++}a.directional[M]=P,M++}else if(z.isSpotLight){const P=t.get(z);P.position.setFromMatrixPosition(z.matrixWorld),P.color.copy(rt).multiplyScalar(lt),P.distance=ut,P.coneCos=Math.cos(z.angle),P.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),P.decay=z.decay,a.spot[A]=P;const K=z.shadow;if(z.map&&(a.spotLightMap[H]=z.map,H++,K.updateMatrices(z),z.castShadow&&I++),a.spotLightMatrix[A]=K.matrix,z.castShadow){const Y=i.get(z);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,a.spotShadow[A]=Y,a.spotShadowMap[A]=dt,w++}A++}else if(z.isRectAreaLight){const P=t.get(z);P.color.copy(rt).multiplyScalar(lt),P.halfWidth.set(z.width*.5,0,0),P.halfHeight.set(0,z.height*.5,0),a.rectArea[x]=P,x++}else if(z.isPointLight){const P=t.get(z);if(P.color.copy(z.color).multiplyScalar(z.intensity),P.distance=z.distance,P.decay=z.decay,z.castShadow){const K=z.shadow,Y=i.get(z);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,a.pointShadow[E]=Y,a.pointShadowMap[E]=dt,a.pointShadowMatrix[E]=z.shadow.matrix,U++}a.point[E]=P,E++}else if(z.isHemisphereLight){const P=t.get(z);P.skyColor.copy(z.color).multiplyScalar(lt),P.groundColor.copy(z.groundColor).multiplyScalar(lt),a.hemi[v]=P,v++}}x>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Pt.LTC_FLOAT_1,a.rectAreaLTC2=Pt.LTC_FLOAT_2):(a.rectAreaLTC1=Pt.LTC_HALF_1,a.rectAreaLTC2=Pt.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=S;const X=a.hash;(X.directionalLength!==M||X.pointLength!==E||X.spotLength!==A||X.rectAreaLength!==x||X.hemiLength!==v||X.numDirectionalShadows!==F||X.numPointShadows!==U||X.numSpotShadows!==w||X.numSpotMaps!==H||X.numLightProbes!==O)&&(a.directional.length=M,a.spot.length=A,a.rectArea.length=x,a.point.length=E,a.hemi.length=v,a.directionalShadow.length=F,a.directionalShadowMap.length=F,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=w,a.spotShadowMap.length=w,a.directionalShadowMatrix.length=F,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=w+H-I,a.spotLightMap.length=H,a.numSpotLightShadowsWithMaps=I,a.numLightProbes=O,X.directionalLength=M,X.pointLength=E,X.spotLength=A,X.rectAreaLength=x,X.hemiLength=v,X.numDirectionalShadows=F,X.numPointShadows=U,X.numSpotShadows=w,X.numSpotMaps=H,X.numLightProbes=O,a.version=AA++)}function m(p,g){let _=0,S=0,M=0,E=0,A=0;const x=g.matrixWorldInverse;for(let v=0,F=p.length;v<F;v++){const U=p[v];if(U.isDirectionalLight){const w=a.directional[_];w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(x),_++}else if(U.isSpotLight){const w=a.spot[M];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(x),M++}else if(U.isRectAreaLight){const w=a.rectArea[E];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(x),f.identity(),c.copy(U.matrixWorld),c.premultiply(x),f.extractRotation(c),w.halfWidth.set(U.width*.5,0,0),w.halfHeight.set(0,U.height*.5,0),w.halfWidth.applyMatrix4(f),w.halfHeight.applyMatrix4(f),E++}else if(U.isPointLight){const w=a.point[S];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(x),S++}else if(U.isHemisphereLight){const w=a.hemi[A];w.direction.setFromMatrixPosition(U.matrixWorld),w.direction.transformDirection(x),A++}}}return{setup:d,setupView:m,state:a}}function ev(s){const t=new wA(s),i=[],a=[];function l(g){p.camera=g,i.length=0,a.length=0}function c(g){i.push(g)}function f(g){a.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function CA(s){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new ev(s),t.set(l,[d])):c>=f.length?(d=new ev(s),f.push(d)):d=f[c],d}function a(){t=new WeakMap}return{get:i,dispose:a}}const DA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UA=`uniform sampler2D shadow_pass;
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
}`;function LA(s,t,i){let a=new $d;const l=new ee,c=new ee,f=new ke,d=new Qx({depthPacking:LM}),m=new Jx,p={},g=i.maxTextureSize,_={[ja]:jn,[jn]:ja,[ha]:ha},S=new Ka({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:DA,fragmentShader:UA}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const E=new yi;E.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Zn(E,S),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=av;let v=this.type;this.render=function(I,O,X){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;const C=s.getRenderTarget(),D=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),rt=s.state;rt.setBlending(Ya),rt.buffers.depth.getReversed()?rt.buffers.color.setClear(0,0,0,0):rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const lt=v!==fa&&this.type===fa,ut=v===fa&&this.type!==fa;for(let dt=0,P=I.length;dt<P;dt++){const K=I[dt],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const yt=Y.getFrameExtents();if(l.multiply(yt),c.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/yt.x),l.x=c.x*yt.x,Y.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/yt.y),l.y=c.y*yt.y,Y.mapSize.y=c.y)),Y.map===null||lt===!0||ut===!0){const N=this.type!==fa?{minFilter:wi,magFilter:wi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Cr(l.x,l.y,N),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const xt=Y.getViewportCount();for(let N=0;N<xt;N++){const nt=Y.getViewport(N);f.set(c.x*nt.x,c.y*nt.y,c.x*nt.z,c.y*nt.w),rt.viewport(f),Y.updateMatrices(K,N),a=Y.getFrustum(),w(O,X,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===fa&&F(Y,X),Y.needsUpdate=!1}v=this.type,x.needsUpdate=!1,s.setRenderTarget(C,D,z)};function F(I,O){const X=t.update(A);S.defines.VSM_SAMPLES!==I.blurSamples&&(S.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Cr(l.x,l.y)),S.uniforms.shadow_pass.value=I.map.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(O,null,X,S,A,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(O,null,X,M,A,null)}function U(I,O,X,C){let D=null;const z=X.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(z!==void 0)D=z;else if(D=X.isPointLight===!0?m:d,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const rt=D.uuid,lt=O.uuid;let ut=p[rt];ut===void 0&&(ut={},p[rt]=ut);let dt=ut[lt];dt===void 0&&(dt=D.clone(),ut[lt]=dt,O.addEventListener("dispose",H)),D=dt}if(D.visible=O.visible,D.wireframe=O.wireframe,C===fa?D.side=O.shadowSide!==null?O.shadowSide:O.side:D.side=O.shadowSide!==null?O.shadowSide:_[O.side],D.alphaMap=O.alphaMap,D.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,D.map=O.map,D.clipShadows=O.clipShadows,D.clippingPlanes=O.clippingPlanes,D.clipIntersection=O.clipIntersection,D.displacementMap=O.displacementMap,D.displacementScale=O.displacementScale,D.displacementBias=O.displacementBias,D.wireframeLinewidth=O.wireframeLinewidth,D.linewidth=O.linewidth,X.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const rt=s.properties.get(D);rt.light=X}return D}function w(I,O,X,C,D){if(I.visible===!1)return;if(I.layers.test(O.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&D===fa)&&(!I.frustumCulled||a.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,I.matrixWorld);const lt=t.update(I),ut=I.material;if(Array.isArray(ut)){const dt=lt.groups;for(let P=0,K=dt.length;P<K;P++){const Y=dt[P],yt=ut[Y.materialIndex];if(yt&&yt.visible){const xt=U(I,yt,C,D);I.onBeforeShadow(s,I,O,X,lt,xt,Y),s.renderBufferDirect(X,null,lt,xt,I,Y),I.onAfterShadow(s,I,O,X,lt,xt,Y)}}}else if(ut.visible){const dt=U(I,ut,C,D);I.onBeforeShadow(s,I,O,X,lt,dt,null),s.renderBufferDirect(X,null,lt,dt,I,null),I.onAfterShadow(s,I,O,X,lt,dt,null)}}const rt=I.children;for(let lt=0,ut=rt.length;lt<ut;lt++)w(rt[lt],O,X,C,D)}function H(I){I.target.removeEventListener("dispose",H);for(const X in p){const C=p[X],D=I.target.uuid;D in C&&(C[D].dispose(),delete C[D])}}}const NA={[ed]:nd,[id]:sd,[ad]:od,[Ns]:rd,[nd]:ed,[sd]:id,[od]:ad,[rd]:Ns};function OA(s,t){function i(){let W=!1;const wt=new ke;let Lt=null;const It=new ke(0,0,0,0);return{setMask:function(Tt){Lt!==Tt&&!W&&(s.colorMask(Tt,Tt,Tt,Tt),Lt=Tt)},setLocked:function(Tt){W=Tt},setClear:function(Tt,vt,Ht,ae,Pe){Pe===!0&&(Tt*=ae,vt*=ae,Ht*=ae),wt.set(Tt,vt,Ht,ae),It.equals(wt)===!1&&(s.clearColor(Tt,vt,Ht,ae),It.copy(wt))},reset:function(){W=!1,Lt=null,It.set(-1,0,0,0)}}}function a(){let W=!1,wt=!1,Lt=null,It=null,Tt=null;return{setReversed:function(vt){if(wt!==vt){const Ht=t.get("EXT_clip_control");vt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),wt=vt;const ae=Tt;Tt=null,this.setClear(ae)}},getReversed:function(){return wt},setTest:function(vt){vt?J(s.DEPTH_TEST):At(s.DEPTH_TEST)},setMask:function(vt){Lt!==vt&&!W&&(s.depthMask(vt),Lt=vt)},setFunc:function(vt){if(wt&&(vt=NA[vt]),It!==vt){switch(vt){case ed:s.depthFunc(s.NEVER);break;case nd:s.depthFunc(s.ALWAYS);break;case id:s.depthFunc(s.LESS);break;case Ns:s.depthFunc(s.LEQUAL);break;case ad:s.depthFunc(s.EQUAL);break;case rd:s.depthFunc(s.GEQUAL);break;case sd:s.depthFunc(s.GREATER);break;case od:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}It=vt}},setLocked:function(vt){W=vt},setClear:function(vt){Tt!==vt&&(wt&&(vt=1-vt),s.clearDepth(vt),Tt=vt)},reset:function(){W=!1,Lt=null,It=null,Tt=null,wt=!1}}}function l(){let W=!1,wt=null,Lt=null,It=null,Tt=null,vt=null,Ht=null,ae=null,Pe=null;return{setTest:function(Ae){W||(Ae?J(s.STENCIL_TEST):At(s.STENCIL_TEST))},setMask:function(Ae){wt!==Ae&&!W&&(s.stencilMask(Ae),wt=Ae)},setFunc:function(Ae,Pn,oi){(Lt!==Ae||It!==Pn||Tt!==oi)&&(s.stencilFunc(Ae,Pn,oi),Lt=Ae,It=Pn,Tt=oi)},setOp:function(Ae,Pn,oi){(vt!==Ae||Ht!==Pn||ae!==oi)&&(s.stencilOp(Ae,Pn,oi),vt=Ae,Ht=Pn,ae=oi)},setLocked:function(Ae){W=Ae},setClear:function(Ae){Pe!==Ae&&(s.clearStencil(Ae),Pe=Ae)},reset:function(){W=!1,wt=null,Lt=null,It=null,Tt=null,vt=null,Ht=null,ae=null,Pe=null}}}const c=new i,f=new a,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},S=new WeakMap,M=[],E=null,A=!1,x=null,v=null,F=null,U=null,w=null,H=null,I=null,O=new me(0,0,0),X=0,C=!1,D=null,z=null,rt=null,lt=null,ut=null;const dt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,K=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),P=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),P=K>=2);let yt=null,xt={};const N=s.getParameter(s.SCISSOR_BOX),nt=s.getParameter(s.VIEWPORT),Mt=new ke().fromArray(N),Ct=new ke().fromArray(nt);function Q(W,wt,Lt,It){const Tt=new Uint8Array(4),vt=s.createTexture();s.bindTexture(W,vt),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ht=0;Ht<Lt;Ht++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(wt,0,s.RGBA,1,1,It,0,s.RGBA,s.UNSIGNED_BYTE,Tt):s.texImage2D(wt+Ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Tt);return vt}const _t={};_t[s.TEXTURE_2D]=Q(s.TEXTURE_2D,s.TEXTURE_2D,1),_t[s.TEXTURE_CUBE_MAP]=Q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[s.TEXTURE_2D_ARRAY]=Q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_t[s.TEXTURE_3D]=Q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),J(s.DEPTH_TEST),f.setFunc(Ns),Ee(!1),Kt(Kg),J(s.CULL_FACE),be(Ya);function J(W){g[W]!==!0&&(s.enable(W),g[W]=!0)}function At(W){g[W]!==!1&&(s.disable(W),g[W]=!1)}function bt(W,wt){return _[W]!==wt?(s.bindFramebuffer(W,wt),_[W]=wt,W===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=wt),W===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=wt),!0):!1}function jt(W,wt){let Lt=M,It=!1;if(W){Lt=S.get(wt),Lt===void 0&&(Lt=[],S.set(wt,Lt));const Tt=W.textures;if(Lt.length!==Tt.length||Lt[0]!==s.COLOR_ATTACHMENT0){for(let vt=0,Ht=Tt.length;vt<Ht;vt++)Lt[vt]=s.COLOR_ATTACHMENT0+vt;Lt.length=Tt.length,It=!0}}else Lt[0]!==s.BACK&&(Lt[0]=s.BACK,It=!0);It&&s.drawBuffers(Lt)}function Ie(W){return E!==W?(s.useProgram(W),E=W,!0):!1}const ge={[Tr]:s.FUNC_ADD,[rM]:s.FUNC_SUBTRACT,[sM]:s.FUNC_REVERSE_SUBTRACT};ge[oM]=s.MIN,ge[lM]=s.MAX;const G={[cM]:s.ZERO,[uM]:s.ONE,[fM]:s.SRC_COLOR,[$h]:s.SRC_ALPHA,[_M]:s.SRC_ALPHA_SATURATE,[mM]:s.DST_COLOR,[dM]:s.DST_ALPHA,[hM]:s.ONE_MINUS_SRC_COLOR,[td]:s.ONE_MINUS_SRC_ALPHA,[gM]:s.ONE_MINUS_DST_COLOR,[pM]:s.ONE_MINUS_DST_ALPHA,[vM]:s.CONSTANT_COLOR,[yM]:s.ONE_MINUS_CONSTANT_COLOR,[SM]:s.CONSTANT_ALPHA,[MM]:s.ONE_MINUS_CONSTANT_ALPHA};function be(W,wt,Lt,It,Tt,vt,Ht,ae,Pe,Ae){if(W===Ya){A===!0&&(At(s.BLEND),A=!1);return}if(A===!1&&(J(s.BLEND),A=!0),W!==aM){if(W!==x||Ae!==C){if((v!==Tr||w!==Tr)&&(s.blendEquation(s.FUNC_ADD),v=Tr,w=Tr),Ae)switch(W){case Ds:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qg:s.blendFunc(s.ONE,s.ONE);break;case Jg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $g:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Ds:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qg:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Jg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $g:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}F=null,U=null,H=null,I=null,O.set(0,0,0),X=0,x=W,C=Ae}return}Tt=Tt||wt,vt=vt||Lt,Ht=Ht||It,(wt!==v||Tt!==w)&&(s.blendEquationSeparate(ge[wt],ge[Tt]),v=wt,w=Tt),(Lt!==F||It!==U||vt!==H||Ht!==I)&&(s.blendFuncSeparate(G[Lt],G[It],G[vt],G[Ht]),F=Lt,U=It,H=vt,I=Ht),(ae.equals(O)===!1||Pe!==X)&&(s.blendColor(ae.r,ae.g,ae.b,Pe),O.copy(ae),X=Pe),x=W,C=!1}function $t(W,wt){W.side===ha?At(s.CULL_FACE):J(s.CULL_FACE);let Lt=W.side===jn;wt&&(Lt=!Lt),Ee(Lt),W.blending===Ds&&W.transparent===!1?be(Ya):be(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const It=W.stencilWrite;d.setTest(It),It&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ft(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?J(s.SAMPLE_ALPHA_TO_COVERAGE):At(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(W){D!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),D=W)}function Kt(W){W!==nM?(J(s.CULL_FACE),W!==z&&(W===Kg?s.cullFace(s.BACK):W===iM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):At(s.CULL_FACE),z=W}function Xe(W){W!==rt&&(P&&s.lineWidth(W),rt=W)}function Ft(W,wt,Lt){W?(J(s.POLYGON_OFFSET_FILL),(lt!==wt||ut!==Lt)&&(s.polygonOffset(wt,Lt),lt=wt,ut=Lt)):At(s.POLYGON_OFFSET_FILL)}function se(W){W?J(s.SCISSOR_TEST):At(s.SCISSOR_TEST)}function tn(W){W===void 0&&(W=s.TEXTURE0+dt-1),yt!==W&&(s.activeTexture(W),yt=W)}function Je(W,wt,Lt){Lt===void 0&&(yt===null?Lt=s.TEXTURE0+dt-1:Lt=yt);let It=xt[Lt];It===void 0&&(It={type:void 0,texture:void 0},xt[Lt]=It),(It.type!==W||It.texture!==wt)&&(yt!==Lt&&(s.activeTexture(Lt),yt=Lt),s.bindTexture(W,wt||_t[W]),It.type=W,It.texture=wt)}function L(){const W=xt[yt];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function et(){try{s.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pt(){try{s.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Et(){try{s.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ft(){try{s.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Yt(){try{s.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Dt(){try{s.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Wt(){try{s.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qt(){try{s.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Rt(){try{s.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ut(W){Mt.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),Mt.copy(W))}function Zt(W){Ct.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Ct.copy(W))}function Bt(W,wt){let Lt=p.get(wt);Lt===void 0&&(Lt=new WeakMap,p.set(wt,Lt));let It=Lt.get(W);It===void 0&&(It=s.getUniformBlockIndex(wt,W.name),Lt.set(W,It))}function Nt(W,wt){const It=p.get(wt).get(W);m.get(wt)!==It&&(s.uniformBlockBinding(wt,It,W.__bindingPointIndex),m.set(wt,It))}function oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},yt=null,xt={},_={},S=new WeakMap,M=[],E=null,A=!1,x=null,v=null,F=null,U=null,w=null,H=null,I=null,O=new me(0,0,0),X=0,C=!1,D=null,z=null,rt=null,lt=null,ut=null,Mt.set(0,0,s.canvas.width,s.canvas.height),Ct.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:J,disable:At,bindFramebuffer:bt,drawBuffers:jt,useProgram:Ie,setBlending:be,setMaterial:$t,setFlipSided:Ee,setCullFace:Kt,setLineWidth:Xe,setPolygonOffset:Ft,setScissorTest:se,activeTexture:tn,bindTexture:Je,unbindTexture:L,compressedTexImage2D:T,compressedTexImage3D:et,texImage2D:qt,texImage3D:Rt,updateUBOMapping:Bt,uniformBlockBinding:Nt,texStorage2D:Dt,texStorage3D:Wt,texSubImage2D:pt,texSubImage3D:Et,compressedTexSubImage2D:ft,compressedTexSubImage3D:Yt,scissor:Ut,viewport:Zt,reset:oe}}function PA(s,t,i,a,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ee,g=new WeakMap;let _;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,T){return M?new OffscreenCanvas(L,T):Zc("canvas")}function A(L,T,et){let pt=1;const Et=Je(L);if((Et.width>et||Et.height>et)&&(pt=et/Math.max(Et.width,Et.height)),pt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ft=Math.floor(pt*Et.width),Yt=Math.floor(pt*Et.height);_===void 0&&(_=E(ft,Yt));const Dt=T?E(ft,Yt):_;return Dt.width=ft,Dt.height=Yt,Dt.getContext("2d").drawImage(L,0,0,ft,Yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+ft+"x"+Yt+")."),Dt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),L;return L}function x(L){return L.generateMipmaps}function v(L){s.generateMipmap(L)}function F(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(L,T,et,pt,Et=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ft=T;if(T===s.RED&&(et===s.FLOAT&&(ft=s.R32F),et===s.HALF_FLOAT&&(ft=s.R16F),et===s.UNSIGNED_BYTE&&(ft=s.R8)),T===s.RED_INTEGER&&(et===s.UNSIGNED_BYTE&&(ft=s.R8UI),et===s.UNSIGNED_SHORT&&(ft=s.R16UI),et===s.UNSIGNED_INT&&(ft=s.R32UI),et===s.BYTE&&(ft=s.R8I),et===s.SHORT&&(ft=s.R16I),et===s.INT&&(ft=s.R32I)),T===s.RG&&(et===s.FLOAT&&(ft=s.RG32F),et===s.HALF_FLOAT&&(ft=s.RG16F),et===s.UNSIGNED_BYTE&&(ft=s.RG8)),T===s.RG_INTEGER&&(et===s.UNSIGNED_BYTE&&(ft=s.RG8UI),et===s.UNSIGNED_SHORT&&(ft=s.RG16UI),et===s.UNSIGNED_INT&&(ft=s.RG32UI),et===s.BYTE&&(ft=s.RG8I),et===s.SHORT&&(ft=s.RG16I),et===s.INT&&(ft=s.RG32I)),T===s.RGB_INTEGER&&(et===s.UNSIGNED_BYTE&&(ft=s.RGB8UI),et===s.UNSIGNED_SHORT&&(ft=s.RGB16UI),et===s.UNSIGNED_INT&&(ft=s.RGB32UI),et===s.BYTE&&(ft=s.RGB8I),et===s.SHORT&&(ft=s.RGB16I),et===s.INT&&(ft=s.RGB32I)),T===s.RGBA_INTEGER&&(et===s.UNSIGNED_BYTE&&(ft=s.RGBA8UI),et===s.UNSIGNED_SHORT&&(ft=s.RGBA16UI),et===s.UNSIGNED_INT&&(ft=s.RGBA32UI),et===s.BYTE&&(ft=s.RGBA8I),et===s.SHORT&&(ft=s.RGBA16I),et===s.INT&&(ft=s.RGBA32I)),T===s.RGB&&et===s.UNSIGNED_INT_5_9_9_9_REV&&(ft=s.RGB9_E5),T===s.RGBA){const Yt=Et?qc:De.getTransfer(pt);et===s.FLOAT&&(ft=s.RGBA32F),et===s.HALF_FLOAT&&(ft=s.RGBA16F),et===s.UNSIGNED_BYTE&&(ft=Yt===Ve?s.SRGB8_ALPHA8:s.RGBA8),et===s.UNSIGNED_SHORT_4_4_4_4&&(ft=s.RGBA4),et===s.UNSIGNED_SHORT_5_5_5_1&&(ft=s.RGB5_A1)}return(ft===s.R16F||ft===s.R32F||ft===s.RG16F||ft===s.RG32F||ft===s.RGBA16F||ft===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function w(L,T){let et;return L?T===null||T===wr||T===$o?et=s.DEPTH24_STENCIL8:T===da?et=s.DEPTH32F_STENCIL8:T===Jo&&(et=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===wr||T===$o?et=s.DEPTH_COMPONENT24:T===da?et=s.DEPTH_COMPONENT32F:T===Jo&&(et=s.DEPTH_COMPONENT16),et}function H(L,T){return x(L)===!0||L.isFramebufferTexture&&L.minFilter!==wi&&L.minFilter!==zi?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function I(L){const T=L.target;T.removeEventListener("dispose",I),X(T),T.isVideoTexture&&g.delete(T)}function O(L){const T=L.target;T.removeEventListener("dispose",O),D(T)}function X(L){const T=a.get(L);if(T.__webglInit===void 0)return;const et=L.source,pt=S.get(et);if(pt){const Et=pt[T.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&C(L),Object.keys(pt).length===0&&S.delete(et)}a.remove(L)}function C(L){const T=a.get(L);s.deleteTexture(T.__webglTexture);const et=L.source,pt=S.get(et);delete pt[T.__cacheKey],f.memory.textures--}function D(L){const T=a.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),a.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(T.__webglFramebuffer[pt]))for(let Et=0;Et<T.__webglFramebuffer[pt].length;Et++)s.deleteFramebuffer(T.__webglFramebuffer[pt][Et]);else s.deleteFramebuffer(T.__webglFramebuffer[pt]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[pt])}else{if(Array.isArray(T.__webglFramebuffer))for(let pt=0;pt<T.__webglFramebuffer.length;pt++)s.deleteFramebuffer(T.__webglFramebuffer[pt]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pt=0;pt<T.__webglColorRenderbuffer.length;pt++)T.__webglColorRenderbuffer[pt]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[pt]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const et=L.textures;for(let pt=0,Et=et.length;pt<Et;pt++){const ft=a.get(et[pt]);ft.__webglTexture&&(s.deleteTexture(ft.__webglTexture),f.memory.textures--),a.remove(et[pt])}a.remove(L)}let z=0;function rt(){z=0}function lt(){const L=z;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),z+=1,L}function ut(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function dt(L,T){const et=a.get(L);if(L.isVideoTexture&&se(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&et.__version!==L.version){const pt=L.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_t(et,L,T);return}}else L.isExternalTexture&&(et.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,et.__webglTexture,s.TEXTURE0+T)}function P(L,T){const et=a.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&et.__version!==L.version){_t(et,L,T);return}i.bindTexture(s.TEXTURE_2D_ARRAY,et.__webglTexture,s.TEXTURE0+T)}function K(L,T){const et=a.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&et.__version!==L.version){_t(et,L,T);return}i.bindTexture(s.TEXTURE_3D,et.__webglTexture,s.TEXTURE0+T)}function Y(L,T){const et=a.get(L);if(L.version>0&&et.__version!==L.version){J(et,L,T);return}i.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture,s.TEXTURE0+T)}const yt={[Qo]:s.REPEAT,[Ar]:s.CLAMP_TO_EDGE,[ud]:s.MIRRORED_REPEAT},xt={[wi]:s.NEAREST,[DM]:s.NEAREST_MIPMAP_NEAREST,[mc]:s.NEAREST_MIPMAP_LINEAR,[zi]:s.LINEAR,[mh]:s.LINEAR_MIPMAP_NEAREST,[Rr]:s.LINEAR_MIPMAP_LINEAR},N={[OM]:s.NEVER,[HM]:s.ALWAYS,[PM]:s.LESS,[vv]:s.LEQUAL,[zM]:s.EQUAL,[FM]:s.GEQUAL,[BM]:s.GREATER,[IM]:s.NOTEQUAL};function nt(L,T){if(T.type===da&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===zi||T.magFilter===mh||T.magFilter===mc||T.magFilter===Rr||T.minFilter===zi||T.minFilter===mh||T.minFilter===mc||T.minFilter===Rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,yt[T.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,yt[T.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,yt[T.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,xt[T.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,xt[T.minFilter]),T.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,N[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===wi||T.minFilter!==mc&&T.minFilter!==Rr||T.type===da&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||a.get(T).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),a.get(T).__currentAnisotropy=T.anisotropy}}}function Mt(L,T){let et=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",I));const pt=T.source;let Et=S.get(pt);Et===void 0&&(Et={},S.set(pt,Et));const ft=ut(T);if(ft!==L.__cacheKey){Et[ft]===void 0&&(Et[ft]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,et=!0),Et[ft].usedTimes++;const Yt=Et[L.__cacheKey];Yt!==void 0&&(Et[L.__cacheKey].usedTimes--,Yt.usedTimes===0&&C(T)),L.__cacheKey=ft,L.__webglTexture=Et[ft].texture}return et}function Ct(L,T,et){return Math.floor(Math.floor(L/et)/T)}function Q(L,T,et,pt){const ft=L.updateRanges;if(ft.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,et,pt,T.data);else{ft.sort((Rt,Ut)=>Rt.start-Ut.start);let Yt=0;for(let Rt=1;Rt<ft.length;Rt++){const Ut=ft[Yt],Zt=ft[Rt],Bt=Ut.start+Ut.count,Nt=Ct(Zt.start,T.width,4),oe=Ct(Ut.start,T.width,4);Zt.start<=Bt+1&&Nt===oe&&Ct(Zt.start+Zt.count-1,T.width,4)===Nt?Ut.count=Math.max(Ut.count,Zt.start+Zt.count-Ut.start):(++Yt,ft[Yt]=Zt)}ft.length=Yt+1;const Dt=s.getParameter(s.UNPACK_ROW_LENGTH),Wt=s.getParameter(s.UNPACK_SKIP_PIXELS),qt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let Rt=0,Ut=ft.length;Rt<Ut;Rt++){const Zt=ft[Rt],Bt=Math.floor(Zt.start/4),Nt=Math.ceil(Zt.count/4),oe=Bt%T.width,W=Math.floor(Bt/T.width),wt=Nt,Lt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,oe),s.pixelStorei(s.UNPACK_SKIP_ROWS,W),i.texSubImage2D(s.TEXTURE_2D,0,oe,W,wt,Lt,et,pt,T.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Dt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Wt),s.pixelStorei(s.UNPACK_SKIP_ROWS,qt)}}function _t(L,T,et){let pt=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pt=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pt=s.TEXTURE_3D);const Et=Mt(L,T),ft=T.source;i.bindTexture(pt,L.__webglTexture,s.TEXTURE0+et);const Yt=a.get(ft);if(ft.version!==Yt.__version||Et===!0){i.activeTexture(s.TEXTURE0+et);const Dt=De.getPrimaries(De.workingColorSpace),Wt=T.colorSpace===qa?null:De.getPrimaries(T.colorSpace),qt=T.colorSpace===qa||Dt===Wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let Rt=A(T.image,!1,l.maxTextureSize);Rt=tn(T,Rt);const Ut=c.convert(T.format,T.colorSpace),Zt=c.convert(T.type);let Bt=U(T.internalFormat,Ut,Zt,T.colorSpace,T.isVideoTexture);nt(pt,T);let Nt;const oe=T.mipmaps,W=T.isVideoTexture!==!0,wt=Yt.__version===void 0||Et===!0,Lt=ft.dataReady,It=H(T,Rt);if(T.isDepthTexture)Bt=w(T.format===el,T.type),wt&&(W?i.texStorage2D(s.TEXTURE_2D,1,Bt,Rt.width,Rt.height):i.texImage2D(s.TEXTURE_2D,0,Bt,Rt.width,Rt.height,0,Ut,Zt,null));else if(T.isDataTexture)if(oe.length>0){W&&wt&&i.texStorage2D(s.TEXTURE_2D,It,Bt,oe[0].width,oe[0].height);for(let Tt=0,vt=oe.length;Tt<vt;Tt++)Nt=oe[Tt],W?Lt&&i.texSubImage2D(s.TEXTURE_2D,Tt,0,0,Nt.width,Nt.height,Ut,Zt,Nt.data):i.texImage2D(s.TEXTURE_2D,Tt,Bt,Nt.width,Nt.height,0,Ut,Zt,Nt.data);T.generateMipmaps=!1}else W?(wt&&i.texStorage2D(s.TEXTURE_2D,It,Bt,Rt.width,Rt.height),Lt&&Q(T,Rt,Ut,Zt)):i.texImage2D(s.TEXTURE_2D,0,Bt,Rt.width,Rt.height,0,Ut,Zt,Rt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){W&&wt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,It,Bt,oe[0].width,oe[0].height,Rt.depth);for(let Tt=0,vt=oe.length;Tt<vt;Tt++)if(Nt=oe[Tt],T.format!==Ri)if(Ut!==null)if(W){if(Lt)if(T.layerUpdates.size>0){const Ht=U_(Nt.width,Nt.height,T.format,T.type);for(const ae of T.layerUpdates){const Pe=Nt.data.subarray(ae*Ht/Nt.data.BYTES_PER_ELEMENT,(ae+1)*Ht/Nt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Tt,0,0,ae,Nt.width,Nt.height,1,Ut,Pe)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Tt,0,0,0,Nt.width,Nt.height,Rt.depth,Ut,Nt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Tt,Bt,Nt.width,Nt.height,Rt.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Lt&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Tt,0,0,0,Nt.width,Nt.height,Rt.depth,Ut,Zt,Nt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Tt,Bt,Nt.width,Nt.height,Rt.depth,0,Ut,Zt,Nt.data)}else{W&&wt&&i.texStorage2D(s.TEXTURE_2D,It,Bt,oe[0].width,oe[0].height);for(let Tt=0,vt=oe.length;Tt<vt;Tt++)Nt=oe[Tt],T.format!==Ri?Ut!==null?W?Lt&&i.compressedTexSubImage2D(s.TEXTURE_2D,Tt,0,0,Nt.width,Nt.height,Ut,Nt.data):i.compressedTexImage2D(s.TEXTURE_2D,Tt,Bt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Lt&&i.texSubImage2D(s.TEXTURE_2D,Tt,0,0,Nt.width,Nt.height,Ut,Zt,Nt.data):i.texImage2D(s.TEXTURE_2D,Tt,Bt,Nt.width,Nt.height,0,Ut,Zt,Nt.data)}else if(T.isDataArrayTexture)if(W){if(wt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,It,Bt,Rt.width,Rt.height,Rt.depth),Lt)if(T.layerUpdates.size>0){const Tt=U_(Rt.width,Rt.height,T.format,T.type);for(const vt of T.layerUpdates){const Ht=Rt.data.subarray(vt*Tt/Rt.data.BYTES_PER_ELEMENT,(vt+1)*Tt/Rt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,vt,Rt.width,Rt.height,1,Ut,Zt,Ht)}T.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,Ut,Zt,Rt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Bt,Rt.width,Rt.height,Rt.depth,0,Ut,Zt,Rt.data);else if(T.isData3DTexture)W?(wt&&i.texStorage3D(s.TEXTURE_3D,It,Bt,Rt.width,Rt.height,Rt.depth),Lt&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,Ut,Zt,Rt.data)):i.texImage3D(s.TEXTURE_3D,0,Bt,Rt.width,Rt.height,Rt.depth,0,Ut,Zt,Rt.data);else if(T.isFramebufferTexture){if(wt)if(W)i.texStorage2D(s.TEXTURE_2D,It,Bt,Rt.width,Rt.height);else{let Tt=Rt.width,vt=Rt.height;for(let Ht=0;Ht<It;Ht++)i.texImage2D(s.TEXTURE_2D,Ht,Bt,Tt,vt,0,Ut,Zt,null),Tt>>=1,vt>>=1}}else if(oe.length>0){if(W&&wt){const Tt=Je(oe[0]);i.texStorage2D(s.TEXTURE_2D,It,Bt,Tt.width,Tt.height)}for(let Tt=0,vt=oe.length;Tt<vt;Tt++)Nt=oe[Tt],W?Lt&&i.texSubImage2D(s.TEXTURE_2D,Tt,0,0,Ut,Zt,Nt):i.texImage2D(s.TEXTURE_2D,Tt,Bt,Ut,Zt,Nt);T.generateMipmaps=!1}else if(W){if(wt){const Tt=Je(Rt);i.texStorage2D(s.TEXTURE_2D,It,Bt,Tt.width,Tt.height)}Lt&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ut,Zt,Rt)}else i.texImage2D(s.TEXTURE_2D,0,Bt,Ut,Zt,Rt);x(T)&&v(pt),Yt.__version=ft.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function J(L,T,et){if(T.image.length!==6)return;const pt=Mt(L,T),Et=T.source;i.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+et);const ft=a.get(Et);if(Et.version!==ft.__version||pt===!0){i.activeTexture(s.TEXTURE0+et);const Yt=De.getPrimaries(De.workingColorSpace),Dt=T.colorSpace===qa?null:De.getPrimaries(T.colorSpace),Wt=T.colorSpace===qa||Yt===Dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const qt=T.isCompressedTexture||T.image[0].isCompressedTexture,Rt=T.image[0]&&T.image[0].isDataTexture,Ut=[];for(let vt=0;vt<6;vt++)!qt&&!Rt?Ut[vt]=A(T.image[vt],!0,l.maxCubemapSize):Ut[vt]=Rt?T.image[vt].image:T.image[vt],Ut[vt]=tn(T,Ut[vt]);const Zt=Ut[0],Bt=c.convert(T.format,T.colorSpace),Nt=c.convert(T.type),oe=U(T.internalFormat,Bt,Nt,T.colorSpace),W=T.isVideoTexture!==!0,wt=ft.__version===void 0||pt===!0,Lt=Et.dataReady;let It=H(T,Zt);nt(s.TEXTURE_CUBE_MAP,T);let Tt;if(qt){W&&wt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,It,oe,Zt.width,Zt.height);for(let vt=0;vt<6;vt++){Tt=Ut[vt].mipmaps;for(let Ht=0;Ht<Tt.length;Ht++){const ae=Tt[Ht];T.format!==Ri?Bt!==null?W?Lt&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht,0,0,ae.width,ae.height,Bt,ae.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht,oe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Lt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht,0,0,ae.width,ae.height,Bt,Nt,ae.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht,oe,ae.width,ae.height,0,Bt,Nt,ae.data)}}}else{if(Tt=T.mipmaps,W&&wt){Tt.length>0&&It++;const vt=Je(Ut[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,It,oe,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Rt){W?Lt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Ut[vt].width,Ut[vt].height,Bt,Nt,Ut[vt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,oe,Ut[vt].width,Ut[vt].height,0,Bt,Nt,Ut[vt].data);for(let Ht=0;Ht<Tt.length;Ht++){const Pe=Tt[Ht].image[vt].image;W?Lt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht+1,0,0,Pe.width,Pe.height,Bt,Nt,Pe.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht+1,oe,Pe.width,Pe.height,0,Bt,Nt,Pe.data)}}else{W?Lt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Bt,Nt,Ut[vt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,oe,Bt,Nt,Ut[vt]);for(let Ht=0;Ht<Tt.length;Ht++){const ae=Tt[Ht];W?Lt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht+1,0,0,Bt,Nt,ae.image[vt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht+1,oe,Bt,Nt,ae.image[vt])}}}x(T)&&v(s.TEXTURE_CUBE_MAP),ft.__version=Et.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function At(L,T,et,pt,Et,ft){const Yt=c.convert(et.format,et.colorSpace),Dt=c.convert(et.type),Wt=U(et.internalFormat,Yt,Dt,et.colorSpace),qt=a.get(T),Rt=a.get(et);if(Rt.__renderTarget=T,!qt.__hasExternalTextures){const Ut=Math.max(1,T.width>>ft),Zt=Math.max(1,T.height>>ft);Et===s.TEXTURE_3D||Et===s.TEXTURE_2D_ARRAY?i.texImage3D(Et,ft,Wt,Ut,Zt,T.depth,0,Yt,Dt,null):i.texImage2D(Et,ft,Wt,Ut,Zt,0,Yt,Dt,null)}i.bindFramebuffer(s.FRAMEBUFFER,L),Ft(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pt,Et,Rt.__webglTexture,0,Xe(T)):(Et===s.TEXTURE_2D||Et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pt,Et,Rt.__webglTexture,ft),i.bindFramebuffer(s.FRAMEBUFFER,null)}function bt(L,T,et){if(s.bindRenderbuffer(s.RENDERBUFFER,L),T.depthBuffer){const pt=T.depthTexture,Et=pt&&pt.isDepthTexture?pt.type:null,ft=w(T.stencilBuffer,Et),Yt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Dt=Xe(T);Ft(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Dt,ft,T.width,T.height):et?s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,ft,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ft,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Yt,s.RENDERBUFFER,L)}else{const pt=T.textures;for(let Et=0;Et<pt.length;Et++){const ft=pt[Et],Yt=c.convert(ft.format,ft.colorSpace),Dt=c.convert(ft.type),Wt=U(ft.internalFormat,Yt,Dt,ft.colorSpace),qt=Xe(T);et&&Ft(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,qt,Wt,T.width,T.height):Ft(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qt,Wt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Wt,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function jt(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=a.get(T.depthTexture);pt.__renderTarget=T,(!pt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),dt(T.depthTexture,0);const Et=pt.__webglTexture,ft=Xe(T);if(T.depthTexture.format===tl)Ft(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Et,0,ft):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Et,0);else if(T.depthTexture.format===el)Ft(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Et,0,ft):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function Ie(L){const T=a.get(L),et=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const pt=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pt){const Et=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pt.removeEventListener("dispose",Et)};pt.addEventListener("dispose",Et),T.__depthDisposeCallback=Et}T.__boundDepthTexture=pt}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const pt=L.texture.mipmaps;pt&&pt.length>0?jt(T.__webglFramebuffer[0],L):jt(T.__webglFramebuffer,L)}else if(et){T.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[pt]),T.__webglDepthbuffer[pt]===void 0)T.__webglDepthbuffer[pt]=s.createRenderbuffer(),bt(T.__webglDepthbuffer[pt],L,!1);else{const Et=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=T.__webglDepthbuffer[pt];s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,ft)}}else{const pt=L.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),bt(T.__webglDepthbuffer,L,!1);else{const Et=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,ft)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function ge(L,T,et){const pt=a.get(L);T!==void 0&&At(pt.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),et!==void 0&&Ie(L)}function G(L){const T=L.texture,et=a.get(L),pt=a.get(T);L.addEventListener("dispose",O);const Et=L.textures,ft=L.isWebGLCubeRenderTarget===!0,Yt=Et.length>1;if(Yt||(pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture()),pt.__version=T.version,f.memory.textures++),ft){et.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer[Dt]=[];for(let Wt=0;Wt<T.mipmaps.length;Wt++)et.__webglFramebuffer[Dt][Wt]=s.createFramebuffer()}else et.__webglFramebuffer[Dt]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer=[];for(let Dt=0;Dt<T.mipmaps.length;Dt++)et.__webglFramebuffer[Dt]=s.createFramebuffer()}else et.__webglFramebuffer=s.createFramebuffer();if(Yt)for(let Dt=0,Wt=Et.length;Dt<Wt;Dt++){const qt=a.get(Et[Dt]);qt.__webglTexture===void 0&&(qt.__webglTexture=s.createTexture(),f.memory.textures++)}if(L.samples>0&&Ft(L)===!1){et.__webglMultisampledFramebuffer=s.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Dt=0;Dt<Et.length;Dt++){const Wt=Et[Dt];et.__webglColorRenderbuffer[Dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,et.__webglColorRenderbuffer[Dt]);const qt=c.convert(Wt.format,Wt.colorSpace),Rt=c.convert(Wt.type),Ut=U(Wt.internalFormat,qt,Rt,Wt.colorSpace,L.isXRRenderTarget===!0),Zt=Xe(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt,Ut,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.RENDERBUFFER,et.__webglColorRenderbuffer[Dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(et.__webglDepthRenderbuffer=s.createRenderbuffer(),bt(et.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ft){i.bindTexture(s.TEXTURE_CUBE_MAP,pt.__webglTexture),nt(s.TEXTURE_CUBE_MAP,T);for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Wt=0;Wt<T.mipmaps.length;Wt++)At(et.__webglFramebuffer[Dt][Wt],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Wt);else At(et.__webglFramebuffer[Dt],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);x(T)&&v(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Yt){for(let Dt=0,Wt=Et.length;Dt<Wt;Dt++){const qt=Et[Dt],Rt=a.get(qt);let Ut=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ut=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ut,Rt.__webglTexture),nt(Ut,qt),At(et.__webglFramebuffer,L,qt,s.COLOR_ATTACHMENT0+Dt,Ut,0),x(qt)&&v(Ut)}i.unbindTexture()}else{let Dt=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Dt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Dt,pt.__webglTexture),nt(Dt,T),T.mipmaps&&T.mipmaps.length>0)for(let Wt=0;Wt<T.mipmaps.length;Wt++)At(et.__webglFramebuffer[Wt],L,T,s.COLOR_ATTACHMENT0,Dt,Wt);else At(et.__webglFramebuffer,L,T,s.COLOR_ATTACHMENT0,Dt,0);x(T)&&v(Dt),i.unbindTexture()}L.depthBuffer&&Ie(L)}function be(L){const T=L.textures;for(let et=0,pt=T.length;et<pt;et++){const Et=T[et];if(x(Et)){const ft=F(L),Yt=a.get(Et).__webglTexture;i.bindTexture(ft,Yt),v(ft),i.unbindTexture()}}}const $t=[],Ee=[];function Kt(L){if(L.samples>0){if(Ft(L)===!1){const T=L.textures,et=L.width,pt=L.height;let Et=s.COLOR_BUFFER_BIT;const ft=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Yt=a.get(L),Dt=T.length>1;if(Dt)for(let qt=0;qt<T.length;qt++)i.bindFramebuffer(s.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer);const Wt=L.texture.mipmaps;Wt&&Wt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let qt=0;qt<T.length;qt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Et|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Et|=s.STENCIL_BUFFER_BIT)),Dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Yt.__webglColorRenderbuffer[qt]);const Rt=a.get(T[qt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Rt,0)}s.blitFramebuffer(0,0,et,pt,0,0,et,pt,Et,s.NEAREST),m===!0&&($t.length=0,Ee.length=0,$t.push(s.COLOR_ATTACHMENT0+qt),L.depthBuffer&&L.resolveDepthBuffer===!1&&($t.push(ft),Ee.push(ft),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ee)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,$t))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Dt)for(let qt=0;qt<T.length;qt++){i.bindFramebuffer(s.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qt,s.RENDERBUFFER,Yt.__webglColorRenderbuffer[qt]);const Rt=a.get(T[qt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qt,s.TEXTURE_2D,Rt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const T=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Xe(L){return Math.min(l.maxSamples,L.samples)}function Ft(L){const T=a.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function se(L){const T=f.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function tn(L,T){const et=L.colorSpace,pt=L.format,Et=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||et!==zs&&et!==qa&&(De.getTransfer(et)===Ve?(pt!==Ri||Et!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),T}function Je(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=lt,this.resetTextureUnits=rt,this.setTexture2D=dt,this.setTexture2DArray=P,this.setTexture3D=K,this.setTextureCube=Y,this.rebindTextures=ge,this.setupRenderTarget=G,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Ft}function zA(s,t){function i(a,l=qa){let c;const f=De.getTransfer(l);if(a===Fi)return s.UNSIGNED_BYTE;if(a===Vd)return s.UNSIGNED_SHORT_4_4_4_4;if(a===kd)return s.UNSIGNED_SHORT_5_5_5_1;if(a===fv)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===cv)return s.BYTE;if(a===uv)return s.SHORT;if(a===Jo)return s.UNSIGNED_SHORT;if(a===Gd)return s.INT;if(a===wr)return s.UNSIGNED_INT;if(a===da)return s.FLOAT;if(a===il)return s.HALF_FLOAT;if(a===hv)return s.ALPHA;if(a===dv)return s.RGB;if(a===Ri)return s.RGBA;if(a===tl)return s.DEPTH_COMPONENT;if(a===el)return s.DEPTH_STENCIL;if(a===pv)return s.RED;if(a===Xd)return s.RED_INTEGER;if(a===mv)return s.RG;if(a===Wd)return s.RG_INTEGER;if(a===qd)return s.RGBA_INTEGER;if(a===Hc||a===Gc||a===Vc||a===kc)if(f===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Hc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Hc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Gc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Vc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===fd||a===hd||a===dd||a===pd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===fd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===hd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===dd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===pd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===md||a===gd||a===_d)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===md||a===gd)return f===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===_d)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===vd||a===yd||a===Sd||a===Md||a===xd||a===Ed||a===Td||a===bd||a===Ad||a===Rd||a===wd||a===Cd||a===Dd||a===Ud)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===vd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===yd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Sd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Md)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===xd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Ed)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Td)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===bd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Ad)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Rd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===wd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Cd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Dd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Ud)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Xc||a===Ld||a===Nd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===Xc)return f===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Ld)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Nd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===gv||a===Od||a===Pd||a===zd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===Xc)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Od)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Pd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===zd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===$o?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:i}}class Iv extends Hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const BA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IA=`
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

}`;class FA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const a=new Iv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,a=new Ka({vertexShader:BA,fragmentShader:IA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Zn(new $c(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HA extends Is{constructor(t,i){super();const a=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,g=null,_=null,S=null,M=null,E=null;const A=new FA,x={},v=i.getContextAttributes();let F=null,U=null;const w=[],H=[],I=new ee;let O=null;const X=new si;X.viewport=new ke;const C=new si;C.viewport=new ke;const D=[X,C],z=new a1;let rt=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let _t=w[Q];return _t===void 0&&(_t=new zh,w[Q]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(Q){let _t=w[Q];return _t===void 0&&(_t=new zh,w[Q]=_t),_t.getGripSpace()},this.getHand=function(Q){let _t=w[Q];return _t===void 0&&(_t=new zh,w[Q]=_t),_t.getHandSpace()};function ut(Q){const _t=H.indexOf(Q.inputSource);if(_t===-1)return;const J=w[_t];J!==void 0&&(J.update(Q.inputSource,Q.frame,p||f),J.dispatchEvent({type:Q.type,data:Q.inputSource}))}function dt(){l.removeEventListener("select",ut),l.removeEventListener("selectstart",ut),l.removeEventListener("selectend",ut),l.removeEventListener("squeeze",ut),l.removeEventListener("squeezestart",ut),l.removeEventListener("squeezeend",ut),l.removeEventListener("end",dt),l.removeEventListener("inputsourceschange",P);for(let Q=0;Q<w.length;Q++){const _t=H[Q];_t!==null&&(H[Q]=null,w[Q].disconnect(_t))}rt=null,lt=null,A.reset();for(const Q in x)delete x[Q];t.setRenderTarget(F),M=null,S=null,_=null,l=null,U=null,Ct.stop(),a.isPresenting=!1,t.setPixelRatio(O),t.setSize(I.width,I.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(F=t.getRenderTarget(),l.addEventListener("select",ut),l.addEventListener("selectstart",ut),l.addEventListener("selectend",ut),l.addEventListener("squeeze",ut),l.addEventListener("squeezestart",ut),l.addEventListener("squeezeend",ut),l.addEventListener("end",dt),l.addEventListener("inputsourceschange",P),v.xrCompatible!==!0&&await i.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(I),typeof XRWebGLBinding<"u"&&(_=new XRWebGLBinding(l,i)),_!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,At=null,bt=null;v.depth&&(bt=v.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,J=v.stencil?el:tl,At=v.stencil?$o:wr);const jt={colorFormat:i.RGBA8,depthFormat:bt,scaleFactor:c};S=_.createProjectionLayer(jt),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),U=new Cr(S.textureWidth,S.textureHeight,{format:Ri,type:Fi,depthTexture:new Rv(S.textureWidth,S.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const J={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,J),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new Cr(M.framebufferWidth,M.framebufferHeight,{format:Ri,type:Fi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Ct.setContext(l),Ct.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function P(Q){for(let _t=0;_t<Q.removed.length;_t++){const J=Q.removed[_t],At=H.indexOf(J);At>=0&&(H[At]=null,w[At].disconnect(J))}for(let _t=0;_t<Q.added.length;_t++){const J=Q.added[_t];let At=H.indexOf(J);if(At===-1){for(let jt=0;jt<w.length;jt++)if(jt>=H.length){H.push(J),At=jt;break}else if(H[jt]===null){H[jt]=J,At=jt;break}if(At===-1)break}const bt=w[At];bt&&bt.connect(J)}}const K=new V,Y=new V;function yt(Q,_t,J){K.setFromMatrixPosition(_t.matrixWorld),Y.setFromMatrixPosition(J.matrixWorld);const At=K.distanceTo(Y),bt=_t.projectionMatrix.elements,jt=J.projectionMatrix.elements,Ie=bt[14]/(bt[10]-1),ge=bt[14]/(bt[10]+1),G=(bt[9]+1)/bt[5],be=(bt[9]-1)/bt[5],$t=(bt[8]-1)/bt[0],Ee=(jt[8]+1)/jt[0],Kt=Ie*$t,Xe=Ie*Ee,Ft=At/(-$t+Ee),se=Ft*-$t;if(_t.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(se),Q.translateZ(Ft),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),bt[10]===-1)Q.projectionMatrix.copy(_t.projectionMatrix),Q.projectionMatrixInverse.copy(_t.projectionMatrixInverse);else{const tn=Ie+Ft,Je=ge+Ft,L=Kt-se,T=Xe+(At-se),et=G*ge/Je*tn,pt=be*ge/Je*tn;Q.projectionMatrix.makePerspective(L,T,et,pt,tn,Je),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function xt(Q,_t){_t===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(_t.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let _t=Q.near,J=Q.far;A.texture!==null&&(A.depthNear>0&&(_t=A.depthNear),A.depthFar>0&&(J=A.depthFar)),z.near=C.near=X.near=_t,z.far=C.far=X.far=J,(rt!==z.near||lt!==z.far)&&(l.updateRenderState({depthNear:z.near,depthFar:z.far}),rt=z.near,lt=z.far),z.layers.mask=Q.layers.mask|6,X.layers.mask=z.layers.mask&3,C.layers.mask=z.layers.mask&5;const At=Q.parent,bt=z.cameras;xt(z,At);for(let jt=0;jt<bt.length;jt++)xt(bt[jt],At);bt.length===2?yt(z,X,C):z.projectionMatrix.copy(X.projectionMatrix),N(Q,z,At)};function N(Q,_t,J){J===null?Q.matrix.copy(_t.matrixWorld):(Q.matrix.copy(J.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(_t.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(_t.projectionMatrix),Q.projectionMatrixInverse.copy(_t.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=nl*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(Q){m=Q,S!==null&&(S.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(z)},this.getCameraTexture=function(Q){return x[Q]};let nt=null;function Mt(Q,_t){if(g=_t.getViewerPose(p||f),E=_t,g!==null){const J=g.views;M!==null&&(t.setRenderTargetFramebuffer(U,M.framebuffer),t.setRenderTarget(U));let At=!1;J.length!==z.cameras.length&&(z.cameras.length=0,At=!0);for(let ge=0;ge<J.length;ge++){const G=J[ge];let be=null;if(M!==null)be=M.getViewport(G);else{const Ee=_.getViewSubImage(S,G);be=Ee.viewport,ge===0&&(t.setRenderTargetTextures(U,Ee.colorTexture,Ee.depthStencilTexture),t.setRenderTarget(U))}let $t=D[ge];$t===void 0&&($t=new si,$t.layers.enable(ge),$t.viewport=new ke,D[ge]=$t),$t.matrix.fromArray(G.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(G.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(be.x,be.y,be.width,be.height),ge===0&&(z.matrix.copy($t.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),At===!0&&z.cameras.push($t)}const bt=l.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const ge=_.getDepthInformation(J[0]);ge&&ge.isValid&&ge.texture&&A.init(ge,l.renderState)}if(bt&&bt.includes("camera-access")&&(t.state.unbindTexture(),_))for(let ge=0;ge<J.length;ge++){const G=J[ge].camera;if(G){let be=x[G];be||(be=new Iv,x[G]=be);const $t=_.getCameraImage(G);be.sourceTexture=$t}}}for(let J=0;J<w.length;J++){const At=H[J],bt=w[J];At!==null&&bt!==void 0&&bt.update(At,_t,p||f)}nt&&nt(Q,_t),_t.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:_t}),E=null}const Ct=new Nv;Ct.setAnimationLoop(Mt),this.setAnimationLoop=function(Q){nt=Q},this.dispose=function(){}}}const Mr=new Hi,GA=new Ke;function VA(s,t){function i(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function a(x,v){v.color.getRGB(x.fogColor.value,Tv(s)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function l(x,v,F,U,w){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(x,v):v.isMeshToonMaterial?(c(x,v),_(x,v)):v.isMeshPhongMaterial?(c(x,v),g(x,v)):v.isMeshStandardMaterial?(c(x,v),S(x,v),v.isMeshPhysicalMaterial&&M(x,v,w)):v.isMeshMatcapMaterial?(c(x,v),E(x,v)):v.isMeshDepthMaterial?c(x,v):v.isMeshDistanceMaterial?(c(x,v),A(x,v)):v.isMeshNormalMaterial?c(x,v):v.isLineBasicMaterial?(f(x,v),v.isLineDashedMaterial&&d(x,v)):v.isPointsMaterial?m(x,v,F,U):v.isSpriteMaterial?p(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,i(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,i(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===jn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,i(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===jn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,i(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,i(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const F=t.get(v),U=F.envMap,w=F.envMapRotation;U&&(x.envMap.value=U,Mr.copy(w),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),x.envMapRotation.value.setFromMatrix4(GA.makeRotationFromEuler(Mr)),x.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,x.aoMapTransform))}function f(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,i(v.map,x.mapTransform))}function d(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function m(x,v,F,U){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*F,x.scale.value=U*.5,v.map&&(x.map.value=v.map,i(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function p(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,i(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function g(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function _(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function S(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function M(x,v,F){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===jn&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=F.texture,x.transmissionSamplerSize.value.set(F.width,F.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,v){v.matcap&&(x.matcap.value=v.matcap)}function A(x,v){const F=t.get(v).light;x.referencePosition.value.setFromMatrixPosition(F.matrixWorld),x.nearDistance.value=F.shadow.camera.near,x.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:l}}function kA(s,t,i,a){let l={},c={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(F,U){const w=U.program;a.uniformBlockBinding(F,w)}function p(F,U){let w=l[F.id];w===void 0&&(E(F),w=g(F),l[F.id]=w,F.addEventListener("dispose",x));const H=U.program;a.updateUBOMapping(F,H);const I=t.render.frame;c[F.id]!==I&&(S(F),c[F.id]=I)}function g(F){const U=_();F.__bindingPointIndex=U;const w=s.createBuffer(),H=F.__size,I=F.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,H,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,w),w}function _(){for(let F=0;F<d;F++)if(f.indexOf(F)===-1)return f.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(F){const U=l[F.id],w=F.uniforms,H=F.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let I=0,O=w.length;I<O;I++){const X=Array.isArray(w[I])?w[I]:[w[I]];for(let C=0,D=X.length;C<D;C++){const z=X[C];if(M(z,I,C,H)===!0){const rt=z.__offset,lt=Array.isArray(z.value)?z.value:[z.value];let ut=0;for(let dt=0;dt<lt.length;dt++){const P=lt[dt],K=A(P);typeof P=="number"||typeof P=="boolean"?(z.__data[0]=P,s.bufferSubData(s.UNIFORM_BUFFER,rt+ut,z.__data)):P.isMatrix3?(z.__data[0]=P.elements[0],z.__data[1]=P.elements[1],z.__data[2]=P.elements[2],z.__data[3]=0,z.__data[4]=P.elements[3],z.__data[5]=P.elements[4],z.__data[6]=P.elements[5],z.__data[7]=0,z.__data[8]=P.elements[6],z.__data[9]=P.elements[7],z.__data[10]=P.elements[8],z.__data[11]=0):(P.toArray(z.__data,ut),ut+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,rt,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(F,U,w,H){const I=F.value,O=U+"_"+w;if(H[O]===void 0)return typeof I=="number"||typeof I=="boolean"?H[O]=I:H[O]=I.clone(),!0;{const X=H[O];if(typeof I=="number"||typeof I=="boolean"){if(X!==I)return H[O]=I,!0}else if(X.equals(I)===!1)return X.copy(I),!0}return!1}function E(F){const U=F.uniforms;let w=0;const H=16;for(let O=0,X=U.length;O<X;O++){const C=Array.isArray(U[O])?U[O]:[U[O]];for(let D=0,z=C.length;D<z;D++){const rt=C[D],lt=Array.isArray(rt.value)?rt.value:[rt.value];for(let ut=0,dt=lt.length;ut<dt;ut++){const P=lt[ut],K=A(P),Y=w%H,yt=Y%K.boundary,xt=Y+yt;w+=yt,xt!==0&&H-xt<K.storage&&(w+=H-xt),rt.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=w,w+=K.storage}}}const I=w%H;return I>0&&(w+=H-I),F.__size=w,F.__cache={},this}function A(F){const U={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(U.boundary=4,U.storage=4):F.isVector2?(U.boundary=8,U.storage=8):F.isVector3||F.isColor?(U.boundary=16,U.storage=12):F.isVector4?(U.boundary=16,U.storage=16):F.isMatrix3?(U.boundary=48,U.storage=48):F.isMatrix4?(U.boundary=64,U.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),U}function x(F){const U=F.target;U.removeEventListener("dispose",x);const w=f.indexOf(U.__bindingPointIndex);f.splice(w,1),s.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function v(){for(const F in l)s.deleteBuffer(l[F]);f=[],l={},c={}}return{bind:m,update:p,dispose:v}}class XA{constructor(t={}){const{canvas:i=ix(),context:a=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let M;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=a.getContextAttributes().alpha}else M=f;const E=new Uint32Array(4),A=new Int32Array(4);let x=null,v=null;const F=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Za,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let H=!1;this._outputColorSpace=Yn;let I=0,O=0,X=null,C=-1,D=null;const z=new ke,rt=new ke;let lt=null;const ut=new me(0);let dt=0,P=i.width,K=i.height,Y=1,yt=null,xt=null;const N=new ke(0,0,P,K),nt=new ke(0,0,P,K);let Mt=!1;const Ct=new $d;let Q=!1,_t=!1;const J=new Ke,At=new V,bt=new ke,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function ge(){return X===null?Y:1}let G=a;function be(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Hd}`),i.addEventListener("webglcontextlost",Lt,!1),i.addEventListener("webglcontextrestored",It,!1),i.addEventListener("webglcontextcreationerror",Tt,!1),G===null){const q="webgl2";if(G=be(q,R),G===null)throw be(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let $t,Ee,Kt,Xe,Ft,se,tn,Je,L,T,et,pt,Et,ft,Yt,Dt,Wt,qt,Rt,Ut,Zt,Bt,Nt,oe;function W(){$t=new tb(G),$t.init(),Bt=new zA(G,$t),Ee=new YT(G,$t,t,Bt),Kt=new OA(G,$t),Ee.reversedDepthBuffer&&S&&Kt.buffers.depth.setReversed(!0),Xe=new ib(G),Ft=new MA,se=new PA(G,$t,Kt,Ft,Ee,Bt,Xe),tn=new jT(w),Je=new $T(w),L=new c1(G),Nt=new WT(G,L),T=new eb(G,L,Xe,Nt),et=new rb(G,T,L,Xe),Rt=new ab(G,Ee,se),Dt=new ZT(Ft),pt=new SA(w,tn,Je,$t,Ee,Nt,Dt),Et=new VA(w,Ft),ft=new EA,Yt=new CA($t),qt=new XT(w,tn,Je,Kt,et,M,m),Wt=new LA(w,et,Ee),oe=new kA(G,Xe,Ee,Kt),Ut=new qT(G,$t,Xe),Zt=new nb(G,$t,Xe),Xe.programs=pt.programs,w.capabilities=Ee,w.extensions=$t,w.properties=Ft,w.renderLists=ft,w.shadowMap=Wt,w.state=Kt,w.info=Xe}W();const wt=new HA(w,G);this.xr=wt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=$t.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=$t.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(P,K,!1))},this.getSize=function(R){return R.set(P,K)},this.setSize=function(R,q,at=!0){if(wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,K=q,i.width=Math.floor(R*Y),i.height=Math.floor(q*Y),at===!0&&(i.style.width=R+"px",i.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(P*Y,K*Y).floor()},this.setDrawingBufferSize=function(R,q,at){P=R,K=q,Y=at,i.width=Math.floor(R*at),i.height=Math.floor(q*at),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(z)},this.getViewport=function(R){return R.copy(N)},this.setViewport=function(R,q,at,st){R.isVector4?N.set(R.x,R.y,R.z,R.w):N.set(R,q,at,st),Kt.viewport(z.copy(N).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(nt)},this.setScissor=function(R,q,at,st){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,q,at,st),Kt.scissor(rt.copy(nt).multiplyScalar(Y).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(R){Kt.setScissorTest(Mt=R)},this.setOpaqueSort=function(R){yt=R},this.setTransparentSort=function(R){xt=R},this.getClearColor=function(R){return R.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,at=!0){let st=0;if(R){let Z=!1;if(X!==null){const St=X.texture.format;Z=St===qd||St===Wd||St===Xd}if(Z){const St=X.texture.type,Ot=St===Fi||St===wr||St===Jo||St===$o||St===Vd||St===kd,Vt=qt.getClearColor(),zt=qt.getClearAlpha(),Qt=Vt.r,ie=Vt.g,Jt=Vt.b;Ot?(E[0]=Qt,E[1]=ie,E[2]=Jt,E[3]=zt,G.clearBufferuiv(G.COLOR,0,E)):(A[0]=Qt,A[1]=ie,A[2]=Jt,A[3]=zt,G.clearBufferiv(G.COLOR,0,A))}else st|=G.COLOR_BUFFER_BIT}q&&(st|=G.DEPTH_BUFFER_BIT),at&&(st|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Lt,!1),i.removeEventListener("webglcontextrestored",It,!1),i.removeEventListener("webglcontextcreationerror",Tt,!1),qt.dispose(),ft.dispose(),Yt.dispose(),Ft.dispose(),tn.dispose(),Je.dispose(),et.dispose(),Nt.dispose(),oe.dispose(),pt.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",oi),wt.removeEventListener("sessionend",Xs),Ci.stop()};function Lt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const R=Xe.autoReset,q=Wt.enabled,at=Wt.autoUpdate,st=Wt.needsUpdate,Z=Wt.type;W(),Xe.autoReset=R,Wt.enabled=q,Wt.autoUpdate=at,Wt.needsUpdate=st,Wt.type=Z}function Tt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function vt(R){const q=R.target;q.removeEventListener("dispose",vt),Ht(q)}function Ht(R){ae(R),Ft.remove(R)}function ae(R){const q=Ft.get(R).programs;q!==void 0&&(q.forEach(function(at){pt.releaseProgram(at)}),R.isShaderMaterial&&pt.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,at,st,Z,St){q===null&&(q=jt);const Ot=Z.isMesh&&Z.matrixWorld.determinant()<0,Vt=ga(R,q,at,st,Z);Kt.setMaterial(st,Ot);let zt=at.index,Qt=1;if(st.wireframe===!0){if(zt=T.getWireframeAttribute(at),zt===void 0)return;Qt=2}const ie=at.drawRange,Jt=at.attributes.position;let de=ie.start*Qt,Le=(ie.start+ie.count)*Qt;St!==null&&(de=Math.max(de,St.start*Qt),Le=Math.min(Le,(St.start+St.count)*Qt)),zt!==null?(de=Math.max(de,0),Le=Math.min(Le,zt.count)):Jt!=null&&(de=Math.max(de,0),Le=Math.min(Le,Jt.count));const We=Le-de;if(We<0||We===1/0)return;Nt.setup(Z,st,Vt,at,zt);let Ne,_e=Ut;if(zt!==null&&(Ne=L.get(zt),_e=Zt,_e.setIndex(Ne)),Z.isMesh)st.wireframe===!0?(Kt.setLineWidth(st.wireframeLinewidth*ge()),_e.setMode(G.LINES)):_e.setMode(G.TRIANGLES);else if(Z.isLine){let kt=st.linewidth;kt===void 0&&(kt=1),Kt.setLineWidth(kt*ge()),Z.isLineSegments?_e.setMode(G.LINES):Z.isLineLoop?_e.setMode(G.LINE_LOOP):_e.setMode(G.LINE_STRIP)}else Z.isPoints?_e.setMode(G.POINTS):Z.isSprite&&_e.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Us("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))_e.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const kt=Z._multiDrawStarts,Ye=Z._multiDrawCounts,Re=Z._multiDrawCount,bn=zt?L.get(zt).bytesPerElement:1,Vi=Ft.get(st).currentProgram.getUniforms();for(let Sn=0;Sn<Re;Sn++)Vi.setValue(G,"_gl_DrawID",Sn),_e.render(kt[Sn]/bn,Ye[Sn])}else if(Z.isInstancedMesh)_e.renderInstances(de,We,Z.count);else if(at.isInstancedBufferGeometry){const kt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Ye=Math.min(at.instanceCount,kt);_e.renderInstances(de,We,Ye)}else _e.render(de,We)};function Pe(R,q,at){R.transparent===!0&&R.side===ha&&R.forceSinglePass===!1?(R.side=jn,R.needsUpdate=!0,Kn(R,q,at),R.side=ja,R.needsUpdate=!0,Kn(R,q,at),R.side=ha):Kn(R,q,at)}this.compile=function(R,q,at=null){at===null&&(at=R),v=Yt.get(at),v.init(q),U.push(v),at.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),R!==at&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),v.setupLights();const st=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const St=Z.material;if(St)if(Array.isArray(St))for(let Ot=0;Ot<St.length;Ot++){const Vt=St[Ot];Pe(Vt,at,Z),st.add(Vt)}else Pe(St,at,Z),st.add(St)}),v=U.pop(),st},this.compileAsync=function(R,q,at=null){const st=this.compile(R,q,at);return new Promise(Z=>{function St(){if(st.forEach(function(Ot){Ft.get(Ot).currentProgram.isReady()&&st.delete(Ot)}),st.size===0){Z(R);return}setTimeout(St,10)}$t.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Ae=null;function Pn(R){Ae&&Ae(R)}function oi(){Ci.stop()}function Xs(){Ci.start()}const Ci=new Nv;Ci.setAnimationLoop(Pn),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(R){Ae=R,wt.setAnimationLoop(R),R===null?Ci.stop():Ci.start()},wt.addEventListener("sessionstart",oi),wt.addEventListener("sessionend",Xs),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(q),q=wt.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,q,X),v=Yt.get(R,U.length),v.init(q),U.push(v),J.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ct.setFromProjectionMatrix(J,Bi,q.reversedDepth),_t=this.localClippingEnabled,Q=Dt.init(this.clippingPlanes,_t),x=ft.get(R,F.length),x.init(),F.push(x),wt.enabled===!0&&wt.isPresenting===!0){const St=w.xr.getDepthSensingMesh();St!==null&&Ur(St,q,-1/0,w.sortObjects)}Ur(R,q,0,w.sortObjects),x.finish(),w.sortObjects===!0&&x.sort(yt,xt),Ie=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,Ie&&qt.addToRenderList(x,R),this.info.render.frame++,Q===!0&&Dt.beginShadows();const at=v.state.shadowsArray;Wt.render(at,R,q),Q===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=x.opaque,Z=x.transmissive;if(v.setupLights(),q.isArrayCamera){const St=q.cameras;if(Z.length>0)for(let Ot=0,Vt=St.length;Ot<Vt;Ot++){const zt=St[Ot];Nr(st,Z,R,zt)}Ie&&qt.render(R);for(let Ot=0,Vt=St.length;Ot<Vt;Ot++){const zt=St[Ot];Lr(x,R,zt,zt.viewport)}}else Z.length>0&&Nr(st,Z,R,q),Ie&&qt.render(R),Lr(x,R,q);X!==null&&O===0&&(se.updateMultisampleRenderTarget(X),se.updateRenderTargetMipmap(X)),R.isScene===!0&&R.onAfterRender(w,R,q),Nt.resetDefaultState(),C=-1,D=null,U.pop(),U.length>0?(v=U[U.length-1],Q===!0&&Dt.setGlobalState(w.clippingPlanes,v.state.camera)):v=null,F.pop(),F.length>0?x=F[F.length-1]:x=null};function Ur(R,q,at,st){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)at=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ct.intersectsSprite(R)){st&&bt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(J);const Ot=et.update(R),Vt=R.material;Vt.visible&&x.push(R,Ot,Vt,at,bt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ct.intersectsObject(R))){const Ot=et.update(R),Vt=R.material;if(st&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),bt.copy(R.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),bt.copy(Ot.boundingSphere.center)),bt.applyMatrix4(R.matrixWorld).applyMatrix4(J)),Array.isArray(Vt)){const zt=Ot.groups;for(let Qt=0,ie=zt.length;Qt<ie;Qt++){const Jt=zt[Qt],de=Vt[Jt.materialIndex];de&&de.visible&&x.push(R,Ot,de,at,bt.z,Jt)}}else Vt.visible&&x.push(R,Ot,Vt,at,bt.z,null)}}const St=R.children;for(let Ot=0,Vt=St.length;Ot<Vt;Ot++)Ur(St[Ot],q,at,st)}function Lr(R,q,at,st){const Z=R.opaque,St=R.transmissive,Ot=R.transparent;v.setupLightsView(at),Q===!0&&Dt.setGlobalState(w.clippingPlanes,at),st&&Kt.viewport(z.copy(st)),Z.length>0&&Qa(Z,q,at),St.length>0&&Qa(St,q,at),Ot.length>0&&Qa(Ot,q,at),Kt.buffers.depth.setTest(!0),Kt.buffers.depth.setMask(!0),Kt.buffers.color.setMask(!0),Kt.setPolygonOffset(!1)}function Nr(R,q,at,st){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[st.id]===void 0&&(v.state.transmissionRenderTarget[st.id]=new Cr(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?il:Fi,minFilter:Rr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const St=v.state.transmissionRenderTarget[st.id],Ot=st.viewport||z;St.setSize(Ot.z*w.transmissionResolutionScale,Ot.w*w.transmissionResolutionScale);const Vt=w.getRenderTarget(),zt=w.getActiveCubeFace(),Qt=w.getActiveMipmapLevel();w.setRenderTarget(St),w.getClearColor(ut),dt=w.getClearAlpha(),dt<1&&w.setClearColor(16777215,.5),w.clear(),Ie&&qt.render(at);const ie=w.toneMapping;w.toneMapping=Za;const Jt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),v.setupLightsView(st),Q===!0&&Dt.setGlobalState(w.clippingPlanes,st),Qa(R,at,st),se.updateMultisampleRenderTarget(St),se.updateRenderTargetMipmap(St),$t.has("WEBGL_multisampled_render_to_texture")===!1){let de=!1;for(let Le=0,We=q.length;Le<We;Le++){const Ne=q[Le],_e=Ne.object,kt=Ne.geometry,Ye=Ne.material,Re=Ne.group;if(Ye.side===ha&&_e.layers.test(st.layers)){const bn=Ye.side;Ye.side=jn,Ye.needsUpdate=!0,Ws(_e,at,st,kt,Ye,Re),Ye.side=bn,Ye.needsUpdate=!0,de=!0}}de===!0&&(se.updateMultisampleRenderTarget(St),se.updateRenderTargetMipmap(St))}w.setRenderTarget(Vt,zt,Qt),w.setClearColor(ut,dt),Jt!==void 0&&(st.viewport=Jt),w.toneMapping=ie}function Qa(R,q,at){const st=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,St=R.length;Z<St;Z++){const Ot=R[Z],Vt=Ot.object,zt=Ot.geometry,Qt=Ot.group;let ie=Ot.material;ie.allowOverride===!0&&st!==null&&(ie=st),Vt.layers.test(at.layers)&&Ws(Vt,q,at,zt,ie,Qt)}}function Ws(R,q,at,st,Z,St){R.onBeforeRender(w,q,at,st,Z,St),R.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(w,q,at,st,R,St),Z.transparent===!0&&Z.side===ha&&Z.forceSinglePass===!1?(Z.side=jn,Z.needsUpdate=!0,w.renderBufferDirect(at,q,st,Z,R,St),Z.side=ja,Z.needsUpdate=!0,w.renderBufferDirect(at,q,st,Z,R,St),Z.side=ha):w.renderBufferDirect(at,q,st,Z,R,St),R.onAfterRender(w,q,at,st,Z,St)}function Kn(R,q,at){q.isScene!==!0&&(q=jt);const st=Ft.get(R),Z=v.state.lights,St=v.state.shadowsArray,Ot=Z.state.version,Vt=pt.getParameters(R,Z.state,St,q,at),zt=pt.getProgramCacheKey(Vt);let Qt=st.programs;st.environment=R.isMeshStandardMaterial?q.environment:null,st.fog=q.fog,st.envMap=(R.isMeshStandardMaterial?Je:tn).get(R.envMap||st.environment),st.envMapRotation=st.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,Qt===void 0&&(R.addEventListener("dispose",vt),Qt=new Map,st.programs=Qt);let ie=Qt.get(zt);if(ie!==void 0){if(st.currentProgram===ie&&st.lightsStateVersion===Ot)return Tn(R,Vt),ie}else Vt.uniforms=pt.getUniforms(R),R.onBeforeCompile(Vt,w),ie=pt.acquireProgram(Vt,zt),Qt.set(zt,ie),st.uniforms=Vt.uniforms;const Jt=st.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Jt.clippingPlanes=Dt.uniform),Tn(R,Vt),st.needsLights=nu(R),st.lightsStateVersion=Ot,st.needsLights&&(Jt.ambientLightColor.value=Z.state.ambient,Jt.lightProbe.value=Z.state.probe,Jt.directionalLights.value=Z.state.directional,Jt.directionalLightShadows.value=Z.state.directionalShadow,Jt.spotLights.value=Z.state.spot,Jt.spotLightShadows.value=Z.state.spotShadow,Jt.rectAreaLights.value=Z.state.rectArea,Jt.ltc_1.value=Z.state.rectAreaLTC1,Jt.ltc_2.value=Z.state.rectAreaLTC2,Jt.pointLights.value=Z.state.point,Jt.pointLightShadows.value=Z.state.pointShadow,Jt.hemisphereLights.value=Z.state.hemi,Jt.directionalShadowMap.value=Z.state.directionalShadowMap,Jt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Jt.spotShadowMap.value=Z.state.spotShadowMap,Jt.spotLightMatrix.value=Z.state.spotLightMatrix,Jt.spotLightMap.value=Z.state.spotLightMap,Jt.pointShadowMap.value=Z.state.pointShadowMap,Jt.pointShadowMatrix.value=Z.state.pointShadowMatrix),st.currentProgram=ie,st.uniformsList=null,ie}function ln(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Wc.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Tn(R,q){const at=Ft.get(R);at.outputColorSpace=q.outputColorSpace,at.batching=q.batching,at.batchingColor=q.batchingColor,at.instancing=q.instancing,at.instancingColor=q.instancingColor,at.instancingMorph=q.instancingMorph,at.skinning=q.skinning,at.morphTargets=q.morphTargets,at.morphNormals=q.morphNormals,at.morphColors=q.morphColors,at.morphTargetsCount=q.morphTargetsCount,at.numClippingPlanes=q.numClippingPlanes,at.numIntersection=q.numClipIntersection,at.vertexAlphas=q.vertexAlphas,at.vertexTangents=q.vertexTangents,at.toneMapping=q.toneMapping}function ga(R,q,at,st,Z){q.isScene!==!0&&(q=jt),se.resetTextureUnits();const St=q.fog,Ot=st.isMeshStandardMaterial?q.environment:null,Vt=X===null?w.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:zs,zt=(st.isMeshStandardMaterial?Je:tn).get(st.envMap||Ot),Qt=st.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,ie=!!at.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Jt=!!at.morphAttributes.position,de=!!at.morphAttributes.normal,Le=!!at.morphAttributes.color;let We=Za;st.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(We=w.toneMapping);const Ne=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,_e=Ne!==void 0?Ne.length:0,kt=Ft.get(st),Ye=v.state.lights;if(Q===!0&&(_t===!0||R!==D)){const pn=R===D&&st.id===C;Dt.setState(st,R,pn)}let Re=!1;st.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Ye.state.version||kt.outputColorSpace!==Vt||Z.isBatchedMesh&&kt.batching===!1||!Z.isBatchedMesh&&kt.batching===!0||Z.isBatchedMesh&&kt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&kt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&kt.instancing===!1||!Z.isInstancedMesh&&kt.instancing===!0||Z.isSkinnedMesh&&kt.skinning===!1||!Z.isSkinnedMesh&&kt.skinning===!0||Z.isInstancedMesh&&kt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&kt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&kt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&kt.instancingMorph===!1&&Z.morphTexture!==null||kt.envMap!==zt||st.fog===!0&&kt.fog!==St||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Dt.numPlanes||kt.numIntersection!==Dt.numIntersection)||kt.vertexAlphas!==Qt||kt.vertexTangents!==ie||kt.morphTargets!==Jt||kt.morphNormals!==de||kt.morphColors!==Le||kt.toneMapping!==We||kt.morphTargetsCount!==_e)&&(Re=!0):(Re=!0,kt.__version=st.version);let bn=kt.currentProgram;Re===!0&&(bn=Kn(st,q,Z));let Vi=!1,Sn=!1,$a=!1;const Se=bn.getUniforms(),Dn=kt.uniforms;if(Kt.useProgram(bn.program)&&(Vi=!0,Sn=!0,$a=!0),st.id!==C&&(C=st.id,Sn=!0),Vi||D!==R){Kt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Se.setValue(G,"projectionMatrix",R.projectionMatrix),Se.setValue(G,"viewMatrix",R.matrixWorldInverse);const rn=Se.map.cameraPosition;rn!==void 0&&rn.setValue(G,At.setFromMatrixPosition(R.matrixWorld)),Ee.logarithmicDepthBuffer&&Se.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Se.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),D!==R&&(D=R,Sn=!0,$a=!0)}if(Z.isSkinnedMesh){Se.setOptional(G,Z,"bindMatrix"),Se.setOptional(G,Z,"bindMatrixInverse");const pn=Z.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Se.setValue(G,"boneTexture",pn.boneTexture,se))}Z.isBatchedMesh&&(Se.setOptional(G,Z,"batchingTexture"),Se.setValue(G,"batchingTexture",Z._matricesTexture,se),Se.setOptional(G,Z,"batchingIdTexture"),Se.setValue(G,"batchingIdTexture",Z._indirectTexture,se),Se.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Se.setValue(G,"batchingColorTexture",Z._colorsTexture,se));const zn=at.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&Rt.update(Z,at,bn),(Sn||kt.receiveShadow!==Z.receiveShadow)&&(kt.receiveShadow=Z.receiveShadow,Se.setValue(G,"receiveShadow",Z.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Dn.envMap.value=zt,Dn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&q.environment!==null&&(Dn.envMapIntensity.value=q.environmentIntensity),Sn&&(Se.setValue(G,"toneMappingExposure",w.toneMappingExposure),kt.needsLights&&qs(Dn,$a),St&&st.fog===!0&&Et.refreshFogUniforms(Dn,St),Et.refreshMaterialUniforms(Dn,st,Y,K,v.state.transmissionRenderTarget[R.id]),Wc.upload(G,ln(kt),Dn,se)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Wc.upload(G,ln(kt),Dn,se),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Se.setValue(G,"center",Z.center),Se.setValue(G,"modelViewMatrix",Z.modelViewMatrix),Se.setValue(G,"normalMatrix",Z.normalMatrix),Se.setValue(G,"modelMatrix",Z.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const pn=st.uniformsGroups;for(let rn=0,Or=pn.length;rn<Or;rn++){const Di=pn[rn];oe.update(Di,bn),oe.bind(Di,bn)}}return bn}function qs(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function nu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,q,at){const st=Ft.get(R);st.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),Ft.get(R.texture).__webglTexture=q,Ft.get(R.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:at,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const at=Ft.get(R);at.__webglFramebuffer=q,at.__useDefaultFramebuffer=q===void 0};const iu=G.createFramebuffer();this.setRenderTarget=function(R,q=0,at=0){X=R,I=q,O=at;let st=!0,Z=null,St=!1,Ot=!1;if(R){const zt=Ft.get(R);if(zt.__useDefaultFramebuffer!==void 0)Kt.bindFramebuffer(G.FRAMEBUFFER,null),st=!1;else if(zt.__webglFramebuffer===void 0)se.setupRenderTarget(R);else if(zt.__hasExternalTextures)se.rebindTextures(R,Ft.get(R.texture).__webglTexture,Ft.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Jt=R.depthTexture;if(zt.__boundDepthTexture!==Jt){if(Jt!==null&&Ft.has(Jt)&&(R.width!==Jt.image.width||R.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(R)}}const Qt=R.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Ot=!0);const ie=Ft.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ie[q])?Z=ie[q][at]:Z=ie[q],St=!0):R.samples>0&&se.useMultisampledRTT(R)===!1?Z=Ft.get(R).__webglMultisampledFramebuffer:Array.isArray(ie)?Z=ie[at]:Z=ie,z.copy(R.viewport),rt.copy(R.scissor),lt=R.scissorTest}else z.copy(N).multiplyScalar(Y).floor(),rt.copy(nt).multiplyScalar(Y).floor(),lt=Mt;if(at!==0&&(Z=iu),Kt.bindFramebuffer(G.FRAMEBUFFER,Z)&&st&&Kt.drawBuffers(R,Z),Kt.viewport(z),Kt.scissor(rt),Kt.setScissorTest(lt),St){const zt=Ft.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,zt.__webglTexture,at)}else if(Ot){const zt=q;for(let Qt=0;Qt<R.textures.length;Qt++){const ie=Ft.get(R.textures[Qt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Qt,ie.__webglTexture,at,zt)}}else if(R!==null&&at!==0){const zt=Ft.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,zt.__webglTexture,at)}C=-1},this.readRenderTargetPixels=function(R,q,at,st,Z,St,Ot,Vt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=Ft.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(zt=zt[Ot]),zt){Kt.bindFramebuffer(G.FRAMEBUFFER,zt);try{const Qt=R.textures[Vt],ie=Qt.format,Jt=Qt.type;if(!Ee.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ee.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-st&&at>=0&&at<=R.height-Z&&(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Vt),G.readPixels(q,at,st,Z,Bt.convert(ie),Bt.convert(Jt),St))}finally{const Qt=X!==null?Ft.get(X).__webglFramebuffer:null;Kt.bindFramebuffer(G.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(R,q,at,st,Z,St,Ot,Vt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=Ft.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(zt=zt[Ot]),zt)if(q>=0&&q<=R.width-st&&at>=0&&at<=R.height-Z){Kt.bindFramebuffer(G.FRAMEBUFFER,zt);const Qt=R.textures[Vt],ie=Qt.format,Jt=Qt.type;if(!Ee.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ee.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const de=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,de),G.bufferData(G.PIXEL_PACK_BUFFER,St.byteLength,G.STREAM_READ),R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Vt),G.readPixels(q,at,st,Z,Bt.convert(ie),Bt.convert(Jt),0);const Le=X!==null?Ft.get(X).__webglFramebuffer:null;Kt.bindFramebuffer(G.FRAMEBUFFER,Le);const We=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await ax(G,We,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,de),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,St),G.deleteBuffer(de),G.deleteSync(We),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,at=0){const st=Math.pow(2,-at),Z=Math.floor(R.image.width*st),St=Math.floor(R.image.height*st),Ot=q!==null?q.x:0,Vt=q!==null?q.y:0;se.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,at,0,0,Ot,Vt,Z,St),Kt.unbindTexture()};const rl=G.createFramebuffer(),Ja=G.createFramebuffer();this.copyTextureToTexture=function(R,q,at=null,st=null,Z=0,St=null){St===null&&(Z!==0?(Us("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),St=Z,Z=0):St=0);let Ot,Vt,zt,Qt,ie,Jt,de,Le,We;const Ne=R.isCompressedTexture?R.mipmaps[St]:R.image;if(at!==null)Ot=at.max.x-at.min.x,Vt=at.max.y-at.min.y,zt=at.isBox3?at.max.z-at.min.z:1,Qt=at.min.x,ie=at.min.y,Jt=at.isBox3?at.min.z:0;else{const zn=Math.pow(2,-Z);Ot=Math.floor(Ne.width*zn),Vt=Math.floor(Ne.height*zn),R.isDataArrayTexture?zt=Ne.depth:R.isData3DTexture?zt=Math.floor(Ne.depth*zn):zt=1,Qt=0,ie=0,Jt=0}st!==null?(de=st.x,Le=st.y,We=st.z):(de=0,Le=0,We=0);const _e=Bt.convert(q.format),kt=Bt.convert(q.type);let Ye;q.isData3DTexture?(se.setTexture3D(q,0),Ye=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(se.setTexture2DArray(q,0),Ye=G.TEXTURE_2D_ARRAY):(se.setTexture2D(q,0),Ye=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const Re=G.getParameter(G.UNPACK_ROW_LENGTH),bn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Vi=G.getParameter(G.UNPACK_SKIP_PIXELS),Sn=G.getParameter(G.UNPACK_SKIP_ROWS),$a=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ne.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ne.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Qt),G.pixelStorei(G.UNPACK_SKIP_ROWS,ie),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Jt);const Se=R.isDataArrayTexture||R.isData3DTexture,Dn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const zn=Ft.get(R),pn=Ft.get(q),rn=Ft.get(zn.__renderTarget),Or=Ft.get(pn.__renderTarget);Kt.bindFramebuffer(G.READ_FRAMEBUFFER,rn.__webglFramebuffer),Kt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Or.__webglFramebuffer);for(let Di=0;Di<zt;Di++)Se&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ft.get(R).__webglTexture,Z,Jt+Di),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ft.get(q).__webglTexture,St,We+Di)),G.blitFramebuffer(Qt,ie,Ot,Vt,de,Le,Ot,Vt,G.DEPTH_BUFFER_BIT,G.NEAREST);Kt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Kt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||Ft.has(R)){const zn=Ft.get(R),pn=Ft.get(q);Kt.bindFramebuffer(G.READ_FRAMEBUFFER,rl),Kt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ja);for(let rn=0;rn<zt;rn++)Se?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,zn.__webglTexture,Z,Jt+rn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,zn.__webglTexture,Z),Dn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,pn.__webglTexture,St,We+rn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,pn.__webglTexture,St),Z!==0?G.blitFramebuffer(Qt,ie,Ot,Vt,de,Le,Ot,Vt,G.COLOR_BUFFER_BIT,G.NEAREST):Dn?G.copyTexSubImage3D(Ye,St,de,Le,We+rn,Qt,ie,Ot,Vt):G.copyTexSubImage2D(Ye,St,de,Le,Qt,ie,Ot,Vt);Kt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Kt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Dn?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(Ye,St,de,Le,We,Ot,Vt,zt,_e,kt,Ne.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(Ye,St,de,Le,We,Ot,Vt,zt,_e,Ne.data):G.texSubImage3D(Ye,St,de,Le,We,Ot,Vt,zt,_e,kt,Ne):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,St,de,Le,Ot,Vt,_e,kt,Ne.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,St,de,Le,Ne.width,Ne.height,_e,Ne.data):G.texSubImage2D(G.TEXTURE_2D,St,de,Le,Ot,Vt,_e,kt,Ne);G.pixelStorei(G.UNPACK_ROW_LENGTH,Re),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,bn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Vi),G.pixelStorei(G.UNPACK_SKIP_ROWS,Sn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,$a),St===0&&q.generateMipmaps&&G.generateMipmap(Ye),Kt.unbindTexture()},this.copyTextureToTexture3D=function(R,q,at=null,st=null,Z=0){return Us('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,q,at,st,Z)},this.initRenderTarget=function(R){Ft.get(R).__webglFramebuffer===void 0&&se.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?se.setTextureCube(R,0):R.isData3DTexture?se.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?se.setTexture2DArray(R,0):se.setTexture2D(R,0),Kt.unbindTexture()},this.resetState=function(){I=0,O=0,X=null,Kt.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),i.unpackColorSpace=De._getUnpackColorSpace()}}const ko=(s,t,i)=>(s.wrapS=Qo,s.wrapT=Qo,s.repeat.set(t,i),s.anisotropy=4,s),ks=(s,t,i)=>{const a=document.createElement("canvas");a.width=s,a.height=t;const l=a.getContext("2d");i(l,s,t);const c=new Px(a);return c.colorSpace=Yn,c.needsUpdate=!0,c},WA=()=>ks(512,512,(s,t,i)=>{const a=s.createLinearGradient(0,0,t,i);a.addColorStop(0,"#c98954"),a.addColorStop(.45,"#e5b47c"),a.addColorStop(1,"#a9693b"),s.fillStyle=a,s.fillRect(0,0,t,i);for(let l=0;l<26;l+=1){const c=l/26*i;s.fillStyle=l%2?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.08)",s.fillRect(0,c,t,8+Math.sin(l)*5)}s.strokeStyle="rgba(54, 31, 18, 0.38)",s.lineWidth=2;for(let l=0;l<t;l+=64)s.beginPath(),s.moveTo(l+.5,0),s.lineTo(l+.5,i),s.stroke();for(let l=0;l<90;l+=1){const c=Math.random()*t,f=Math.random()*i;s.strokeStyle=`rgba(78, 48, 26, ${.06+Math.random()*.12})`,s.beginPath(),s.ellipse(c,f,18+Math.random()*26,2+Math.random()*4,Math.random()*Math.PI,0,Math.PI*2),s.stroke()}}),qA=()=>ks(1024,1024,(s,t,i)=>{s.fillStyle="#f4d8c8",s.fillRect(0,0,t,i);const a=58,l=146;for(let c=0;c<i+a;c+=a){const f=Math.floor(c/a)%2?-l/2:0;for(let d=f;d<t+l;d+=l){const m=205+Math.floor(Math.random()*34),p=176+Math.floor(Math.random()*36);s.fillStyle=`rgb(${m}, ${p}, ${145+Math.floor(Math.random()*28)})`,s.fillRect(d+4,c+4,l-8,a-8),s.fillStyle="rgba(255,255,255,0.2)",s.fillRect(d+10,c+9,l-24,4),s.fillStyle="rgba(114,72,52,0.08)",s.fillRect(d+7,c+a-13,l-18,5)}}s.strokeStyle="rgba(255,250,244,0.82)",s.lineWidth=5;for(let c=0;c<i+a;c+=a)s.beginPath(),s.moveTo(0,c),s.lineTo(t,c),s.stroke()}),YA=()=>ks(512,512,(s,t,i)=>{s.fillStyle="#dbe5eb",s.fillRect(0,0,t,i),s.strokeStyle="#aab7c1",s.lineWidth=3;for(let a=0;a<=t;a+=64)s.beginPath(),s.moveTo(a,0),s.lineTo(a,i),s.stroke();for(let a=0;a<=i;a+=64)s.beginPath(),s.moveTo(0,a),s.lineTo(t,a),s.stroke();for(let a=0;a<120;a+=1)s.fillStyle=`rgba(88, 106, 121, ${.04+Math.random()*.08})`,s.beginPath(),s.arc(Math.random()*t,Math.random()*i,1+Math.random()*3,0,Math.PI*2),s.fill()}),ZA=()=>ks(1024,1024,(s,t,i)=>{const a=s.createRadialGradient(t*.5,i*.5,0,t*.5,i*.5,t*.7);a.addColorStop(0,"#ffffff"),a.addColorStop(.5,"#f6fbff"),a.addColorStop(1,"#e9eff6"),s.fillStyle=a,s.fillRect(0,0,t,i);const l=s.createRadialGradient(t*.78,i*.22,0,t*.78,i*.22,t*.42);l.addColorStop(0,"rgba(244,114,182,0.32)"),l.addColorStop(.48,"rgba(34,211,238,0.12)"),l.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=l,s.fillRect(0,0,t,i);for(let c=0;c<360;c+=1){const f=Math.random();s.fillStyle=f>.94?"#0f172a":f>.82?"#0891b2":"#64748b",s.globalAlpha=.16+Math.random()*.34,s.beginPath(),s.arc(Math.random()*t,Math.random()*i,.5+Math.random()*1.8,0,Math.PI*2),s.fill()}s.globalAlpha=1,s.strokeStyle="rgba(124, 58, 237, 0.16)",s.lineWidth=2;for(let c=0;c<12;c+=1)s.beginPath(),s.moveTo(Math.random()*t,Math.random()*i),s.bezierCurveTo(Math.random()*t,Math.random()*i,Math.random()*t,Math.random()*i,Math.random()*t,Math.random()*i),s.stroke()}),nv=(s="#334155",t="#22d3ee")=>ks(256,256,(i,a,l)=>{i.fillStyle=s,i.fillRect(0,0,a,l);for(let c=0;c<l;c+=5)i.strokeStyle=c%2?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.12)",i.beginPath(),i.moveTo(0,c),i.lineTo(a,c+Math.sin(c*.05)*4),i.stroke();i.strokeStyle=t,i.globalAlpha=.45,i.lineWidth=2;for(let c=0;c<7;c+=1)i.beginPath(),i.moveTo(-20,c*42),i.lineTo(a+20,c*42+88),i.stroke();i.globalAlpha=1}),jA=()=>ks(1024,512,(s,t,i)=>{s.fillStyle="#fff7ed",s.fillRect(0,0,t,i),s.strokeStyle="#111827",s.lineWidth=18,s.strokeRect(18,18,t-36,i-36),s.strokeStyle="#b91c1c",s.lineWidth=9,s.strokeRect(48,48,t-96,i-96),s.strokeStyle="#111827",s.lineWidth=5;for(let a=86;a<t-86;a+=138)s.beginPath(),s.moveTo(a,70),s.lineTo(a+52,128),s.lineTo(a,186),s.lineTo(a-52,128),s.closePath(),s.stroke(),s.fillStyle=a%2?"#ea580c":"#0f766e",s.globalAlpha=.72,s.fill(),s.globalAlpha=1;for(let a=110;a<t-110;a+=185)s.strokeStyle="#111827",s.lineWidth=6,s.beginPath(),s.moveTo(a,i*.52),s.lineTo(a+76,i*.28),s.lineTo(a+152,i*.52),s.lineTo(a+76,i*.76),s.closePath(),s.stroke(),s.fillStyle=a%2?"#dc2626":"#f59e0b",s.globalAlpha=.76,s.fill(),s.globalAlpha=1;for(let a=34;a<t;a+=28)s.strokeStyle="rgba(17,24,39,0.45)",s.lineWidth=2,s.beginPath(),s.moveTo(a,i-26),s.lineTo(a+12,i-5),s.stroke()}),KA=()=>{const s={wood:ko(WA(),5,4),tile:ko(YA(),2,2),wall:ko(qA(),3.8,2.4),stars:ko(ZA(),2,1),darkFabric:nv("#d7dde8","#64748b"),purpleFabric:nv("#8f7d99","#334155"),carpet:ko(jA(),2,1.5)},t={floor:new Oe({map:s.wood,roughness:.55,metalness:.04}),balconyFloor:new Oe({color:"#d9e2e8",roughness:.58,metalness:.04}),bathroomFloor:new Oe({map:s.tile,roughness:.38,metalness:.02}),wall:new Oe({map:s.wall,roughness:.72}),accentWall:new Oe({color:"#f9e9dc",roughness:.68,metalness:.02}),ceiling:new Oe({map:s.stars,roughness:.46,metalness:.02,emissive:"#f8fbff",emissiveIntensity:.42}),black:new Oe({color:"#111827",roughness:.42,metalness:.14}),charcoal:new Oe({color:"#263142",roughness:.5,metalness:.12}),graphite:new Oe({color:"#4b5563",roughness:.55,metalness:.18}),chrome:new Oe({color:"#cbd5e1",roughness:.18,metalness:.72}),white:new Oe({color:"#f8fafc",roughness:.45,metalness:.02}),cream:new Oe({color:"#e9dfd2",roughness:.58}),bedBase:new Oe({color:"#5d6278",roughness:.54,metalness:.08}),mattress:new Oe({map:s.darkFabric,roughness:.72}),blanket:new Oe({map:s.purpleFabric,roughness:.78}),purpleFabric:new Oe({map:s.purpleFabric,roughness:.8}),carpet:new Oe({map:s.carpet,roughness:.86}),glass:new Vh({color:"#b8ecff",transparent:!0,opacity:.28,roughness:.04,metalness:0,transmission:.42,thickness:.12}),blueGlass:new Vh({color:"#67e8f9",transparent:!0,opacity:.36,roughness:.08,transmission:.22,thickness:.08}),neonCyan:new Oe({color:"#22d3ee",emissive:"#22d3ee",emissiveIntensity:1.8,roughness:.2}),neonPink:new Oe({color:"#f472b6",emissive:"#f472b6",emissiveIntensity:1.7,roughness:.2}),neonGreen:new Oe({color:"#86efac",emissive:"#22c55e",emissiveIntensity:1.25,roughness:.2}),neonViolet:new Oe({color:"#a78bfa",emissive:"#7c3aed",emissiveIntensity:1.35,roughness:.22}),red:new Oe({color:"#ef4444",roughness:.56}),yellow:new Oe({color:"#facc15",roughness:.52}),blue:new Oe({color:"#38bdf8",roughness:.5}),green:new Oe({color:"#22c55e",roughness:.54}),woodDark:new Oe({color:"#8a5632",roughness:.6,metalness:.02}),plant:new Oe({color:"#16a34a",roughness:.74}),soil:new Oe({color:"#3f2b1d",roughness:.9}),mirror:new Vh({color:"#d9fbff",roughness:.05,metalness:.28,transparent:!0,opacity:.65})},i=[...Object.values(s),...Object.values(t)];return{...t,dispose(){i.forEach(a=>a.dispose())}}},Ko=Math.PI*2,Wo=vi.clamp,_n={door:{name:"Cửa chính chống ồn",price:"4.900.000 vnd",use:"Cửa gỗ bản lề êm, tạo lối vào phòng và giảm tiếng ồn từ hành lang.",action:"Click để mở hoặc đóng cửa."},curtain:{name:"Rèm ban công hai lớp",price:"2.650.000 vnd",use:"Lớp voan + lớp cản sáng, che cửa kính và làm nền ánh sáng RGB mềm hơn.",action:"Click để kéo rèm."},ac:{name:"Máy lạnh âm trần nối ống gió",price:"18.500.000 vnd",use:"Cấp gió lạnh qua khe dài sát trần, hợp phòng nhỏ vì không chiếm diện tích tường.",action:"Click để bật/tắt luồng hơi lạnh."},washer:{name:"Máy giặt cửa ngang",price:"7.800.000 vnd",use:"Đặt cạnh khu vệ sinh để gom đường nước; drum có mô phỏng đang quay.",action:"Click để chạy hoặc dừng."},wardrobe:{name:"Tủ quần áo kính khói",price:"12.900.000 vnd",use:"Tủ cao có đèn led, treo áo hoodie, đồ gaming, balo và ngăn phụ kiện.",action:"Click để mở hoặc đóng cánh tủ."},stairDrawer:{name:"Bậc thang kéo hộc chứa đồ",price:"1.250.000 vnd / bậc",use:"Mỗi bậc là một hộc kéo để cất chăn mỏng, dây sạc, hộp phụ kiện hoặc giày nhẹ.",action:"Click từng bậc để kéo hộc ra/vào."},bed:{name:"Giường tầng cao gaming",price:"16.800.000 vnd",use:"Nâng giường lên cao để bên dưới có kho bí mật, tủ và lối sinh hoạt rộng hơn."},secretCabinet:{name:"Kho bí mật dưới giường",price:"5.600.000 vnd",use:"Kho âm bên dưới giường để vali, thùng máy dự phòng, hộp đồ hiếm và đồ ít dùng.",action:"Click để trượt cánh kho."},desk:{name:"Bàn học + góc PC RGB",price:"9.400.000 vnd",use:"Bàn làm việc có màn hình đôi, PC kính, dây RGB và hộc kỹ thuật giấu dây."},chair:{name:"Ghế gaming công thái học",price:"3.900.000 vnd",use:"Ghế lưng cao, tựa cổ và tay vịn, đặt sát bàn học để chơi game/làm việc lâu."},tvConsole:{name:"Kệ dưới tivi treo tường",price:"6.200.000 vnd",use:"Kệ thấp có ngăn kéo, mô hình trang trí và khe đi dây sạch.",action:"Click để kéo ngăn giữa."},sofa:{name:"Sofa mini + bàn trà",price:"7.700.000 vnd",use:"Khu nghỉ nhỏ đối diện tivi, có bàn trà thấp và thảm caro neon."},balconyDry:{name:"Khu phơi đồ ban công",price:"3.300.000 vnd",use:"Thanh phơi gấp, quần áo đang phơi, chậu cây và sàn chống nước."},shoeRack:{name:"Kệ giày cửa vào",price:"1.850.000 vnd",use:"Giữ giày dép gọn ở cửa, phía trên có khay chìa khóa và mũ bảo hiểm."},bathroom:{name:"Toilet + phòng tắm kính",price:"22.000.000 vnd",use:"Khu vệ sinh lát gạch, có bồn cầu, lavabo, phòng tắm kính và bồn nước máy giặt."},dining:{name:"Bàn ăn gấp 2 lớp",price:"4.400.000 vnd",use:"Bàn ăn cạnh sofa, mặt bàn phụ có thể mở rộng khi cần ăn hoặc làm đồ thủ công.",action:"Click để mở/cất cánh bàn."},window:{name:"Cửa kính ban công",price:"8.500.000 vnd",use:"Cửa kính lấy sáng, tách khu phơi với phòng chính và giữ hơi lạnh."},rgb:{name:"Dây LED RGB chạy viền",price:"1.600.000 vnd",use:"Viền led chạy trần, giường và bàn tạo vibe vũ trụ + gaming nhưng vẫn đủ sáng sinh hoạt."},shelf:{name:"Kệ nhiên tầng cao",price:"4.950.000 vnd",use:"Kệ cao chứa sách, hộp đồ, mô hình sưu tầm và thiết bị mạng gần cửa gió máy lạnh."}};class QA{constructor(){this.tweens=[]}add(t,i,a){this.tweens.push({duration:t,update:i,done:a,elapsed:0})}tick(t){this.tweens=this.tweens.filter(i=>{i.elapsed+=t;const a=Wo(i.elapsed/i.duration,0,1),l=1-Math.pow(1-a,3);return i.update(l),a>=1?(i.done?.(),!1):!0})}}const ot=(s,t,i,a,l="box")=>{const c=new Zn(new Dr(i[0],i[1],i[2]),t);return c.name=l,c.position.set(a[0],a[1],a[2]),c.castShadow=!0,c.receiveShadow=!0,s.add(c),c},an=(s,t,i,a,l,c,f=[0,0,0],d=32,m="cylinder")=>{const p=new Zn(new ep(i,a,l,d),t);return p.name=m,p.position.set(c[0],c[1],c[2]),p.rotation.set(f[0],f[1],f[2]),p.castShadow=!0,p.receiveShadow=!0,s.add(p),p},Gi=(s,t,i,a,l=[1,1,1],c="sphere")=>{const f=new Zn(new ip(i,24,16),t);return f.name=c,f.position.set(a[0],a[1],a[2]),f.scale.set(l[0],l[1],l[2]),f.castShadow=!0,f.receiveShadow=!0,s.add(f),f},Ii=(s,t,i,a,l=.035)=>{const c=a[0]-i[0],f=a[1]-i[1],d=a[2]-i[2],m=Math.sqrt(c*c+f*f+d*d),p=new Zn(new Dr(m,l,l),t);return p.position.set((i[0]+a[0])/2,(i[1]+a[1])/2,(i[2]+a[2])/2),p.rotation.y=Math.atan2(d,c),s.add(p),p},$e=(s,t,i,a)=>{s.userData.info=t,s.userData.action=i,s.traverse(l=>{l.isMesh&&(l.userData.hotspot=s,a.push(l))})},JA=(s,t)=>{if(!t){s.visible=!1;return}s.visible=!0,s.setFromObject(t)},iv=(s,t,i,a,l,c)=>{const f=new le;f.name=c,f.position.set(i[0],i[1],i[2]),s.add(f),ot(f,t.black,[a+.2,l+.2,.045],[0,0,-.018],`${c} black trim`),ot(f,t.glass,[a,l,.055],[0,0,.012],`${c} glass`);for(let m=-1;m<=1;m+=1)ot(f,t.black,[.04,l,.07],[m*a/4,0,.055],`${c} vertical mullion`);for(let m=-1;m<=1;m+=1)ot(f,t.black,[a,.04,.07],[0,m*l/4,.055],`${c} horizontal mullion`);const d=new Oe({color:"#c45a22",roughness:.72});for(let m=0;m<34;m+=1){const p=ot(f,d,[.08+Math.random()*.06,.04+Math.random()*.08,.018],[-a*.44+Math.random()*a*.88,-l*.42+Math.random()*l*.92,.09],`${c} autumn leaf`);p.rotation.z=Math.random()*Ko}return f},Jh=(s,t,i,a=1,l="floor plant")=>{const c=new le;c.name=l,c.position.set(i[0],i[1],i[2]),c.scale.setScalar(a),s.add(c),an(c,t.soil,.22,.18,.42,[0,.21,0],[0,0,0],28,`${l} pot`);for(let f=0;f<13;f+=1)Gi(c,t.plant,.17,[Math.cos(f/13*Ko)*(.18+Math.random()*.16),.58+Math.random()*.38,Math.sin(f/13*Ko)*(.18+Math.random()*.16)],[.45,1.45,.18],`${l} leaf`).rotation.set(Math.random()*.7,Math.random()*Ko,Math.random()*.7);return c},$A=(s,t,i)=>{const a=new le;a.name="room-shell",s.add(a),ot(a,t.floor,[15.2,.12,8.4],[0,-.06,.1],"wood floor"),ot(a,t.balconyFloor,[2.9,.11,5.8],[8.85,-.055,.85],"balcony floor"),ot(a,t.bathroomFloor,[3.8,.13,2.55],[-5.25,-.035,2.95],"bathroom tile floor"),ot(a,t.wall,[15.5,3.1,.14],[0,1.55,-4.15],"back wall"),ot(a,t.wall,[.14,3.1,7.6],[-7.62,1.55,.38],"left wall"),ot(a,t.wall,[5,3.1,.14],[-5.1,1.55,4.27],"front bath wall"),ot(a,t.wall,[3.1,3.1,.14],[5.9,1.55,4.27],"front desk wall"),ot(a,t.wall,[.14,3.1,3.1],[-3.15,1.55,2.75],"bath divider"),ot(a,t.wall,[3.75,3.1,.14],[-5.4,1.55,1.63],"bath top divider"),ot(a,t.accentWall,[4.8,3.05,.08],[-.15,1.58,-4.06],"tv accent wall");const l=ot(a,t.ceiling,[15.2,.08,8.3],[0,3.12,.08],"star ceiling");l.receiveShadow=!1,Ii(a,t.neonCyan,[-7.05,2.94,-3.62],[7.05,2.94,-3.62],.035),Ii(a,t.neonPink,[7.05,2.94,-3.62],[7.05,2.94,3.86],.035),Ii(a,t.neonViolet,[-7.05,2.94,3.86],[7.05,2.94,3.86],.035),Ii(a,t.neonGreen,[-7.05,2.94,-3.62],[-7.05,2.94,3.86],.035),iv(a,t,[-5.15,1.65,-4.03],2.2,1.55,"wide back window"),iv(a,t,[2.65,1.65,-4.03],2.35,1.55,"desk view window");const c=new le;c.name="balcony glass",ot(c,t.glass,[.08,2.55,4.9],[7.42,1.35,.95],"glass panel");for(let f=-1.3;f<=3.2;f+=1.5)ot(c,t.chrome,[.12,2.55,.04],[7.37,1.35,f],"glass mullion");return ot(c,t.chrome,[.12,.04,4.9],[7.36,2.62,.95],"glass top rail"),ot(c,t.chrome,[.12,.04,4.9],[7.36,.12,.95],"glass bottom rail"),a.add(c),$e(c,_n.window,null,i),a},t2=(s,t,i,a)=>{const l=new le;l.position.set(-7.56,0,-3.32),l.name="main door pivot";const c=ot(l,t.woodDark,[.08,2.35,1.05],[.02,1.18,.52],"main door");c.castShadow=!0,an(l,t.chrome,.035,.035,.08,[.1,1.17,.88],[Math.PI/2,0,0],18,"door knob"),s.add(l);let f=!1;$e(l,_n.door,()=>{const d=l.rotation.y,m=f?0:-Math.PI*.58;return f=!f,i.add(.68,p=>{l.rotation.y=vi.lerp(d,m,p)}),f?"Cửa đã mở":"Cửa đã đóng"},a)},e2=(s,t,i,a)=>{const l=new le;l.name="tv console",l.position.set(-.25,0,-3.78),s.add(l),ot(l,t.charcoal,[3.9,.46,.42],[0,.58,0],"tv cabinet body"),ot(l,t.black,[1,.38,.45],[-1.35,.6,.04],"left drawer");const c=new le;ot(c,t.graphite,[1.05,.38,.48],[0,.6,.04],"center drawer"),ot(c,t.chrome,[.36,.025,.03],[0,.64,.29],"drawer handle"),l.add(c),ot(l,t.black,[1,.38,.45],[1.35,.6,.04],"right drawer"),ot(l,t.black,[2.95,1.18,.08],[0,1.75,-.07],"tv screen"),ot(l,t.neonCyan,[2.64,.05,.035],[0,2.26,-.02],"tv glow top"),ot(l,t.neonPink,[2.64,.05,.035],[0,1.23,-.02],"tv glow bottom"),Gi(l,t.neonViolet,.12,[1.88,.93,.08],[1,1,1],"astronaut model"),an(l,t.chrome,.08,.14,.32,[-1.9,.9,.05],[0,0,0],6,"small plant pot"),Gi(l,t.plant,.22,[-1.9,1.16,.05],[.7,1.1,.7],"small plant");let f=!1;$e(l,_n.tvConsole,()=>{const d=c.position.z,m=f?0:.54;return f=!f,i.add(.55,p=>{c.position.z=vi.lerp(d,m,p)}),f?"Ngăn tivi đã kéo ra":"Ngăn tivi đã đóng"},a)},n2=(s,t,i,a,l)=>{const c=new le;c.name="ducted ac",c.position.set(3.85,2.64,-4.02),s.add(c),ot(c,t.white,[5.2,.42,.34],[0,0,.05],"ac soffit"),ot(c,t.white,[5.35,.18,.38],[0,-.3,.08],"ac face");for(let m=0;m<29;m+=1){const p=-2.42+m*.17,g=ot(c,t.graphite,[.045,.12,.035],[p,-.3,.29],"ac grille blade");g.rotation.x=-.18,l.acBlades.push(g)}ot(c,t.chrome,[5.15,.035,.035],[0,-.42,.31],"ac lower trim");const f=new le;f.visible=!1;for(let m=0;m<46;m+=1){const p=new Qd({color:m%3?"#a7f3ff":"#dbeafe",transparent:!0,opacity:.16,depthWrite:!1}),g=Gi(f,p,.06+Math.random()*.04,[-2.35+Math.random()*4.7,-.46-Math.random()*.18,.36+Math.random()*.18],[1.7,.45,.65],"cold mist");g.userData.seed=Math.random()*100,g.castShadow=!1,g.receiveShadow=!1}c.add(f);let d=!1;$e(c,_n.ac,()=>{d=!d,f.visible=d,l.acRunning=d;const m=c.children[1].material.emissiveIntensity||0;return i.add(.45,p=>{const g=vi.lerp(m,d?.35:0,p);c.children[1].material.emissive=new me("#b6f3ff"),c.children[1].material.emissiveIntensity=g}),d?"Máy lạnh đang thổi hơi lạnh":"Máy lạnh đã tắt"},a),l.acMist=f},i2=(s,t,i,a)=>{const l=new le;l.name="balcony curtain",l.position.set(7.13,0,.94),s.add(l);const c=ot(l,t.chrome,[.07,.08,5.3],[0,2.72,0],"curtain rail");c.castShadow=!1;const f=new le,d=new le;l.add(f,d);for(let p=0;p<5;p+=1){const g=ot(f,t.purpleFabric,[.055,2.28,.32],[-.03,1.38,-1.96+p*.34],"left curtain fold");g.rotation.y=Math.sin(p)*.05}for(let p=0;p<5;p+=1){const g=ot(d,t.bedBase,[.055,2.28,.32],[-.03,1.38,.64+p*.34],"right curtain fold");g.rotation.y=Math.sin(p+1)*.05}ot(f,t.neonPink,[.035,2.26,.05],[-.08,1.37,-1.1],"curtain led seam"),ot(d,t.neonCyan,[.035,2.26,.05],[-.08,1.37,1.48],"curtain led seam");let m=!1;$e(l,_n.curtain,()=>{const p=f.position.z,g=d.position.z,_=m?0:-1.05,S=m?0:1.05;return m=!m,i.add(.78,M=>{f.position.z=vi.lerp(p,_,M),d.position.z=vi.lerp(g,S,M)}),m?"Rèm đã kéo sang hai bên":"Rèm đã đóng"},a)},a2=(s,t,i,a)=>{const l=new le;l.name="sofa corner",l.position.set(2.55,0,-.45),s.add(l),ot(l,t.carpet,[5.4,.045,2.9],[.5,.028,.42],"large patterned rug"),ot(l,t.charcoal,[1.65,.42,.62],[-.55,.36,-.18],"sofa seat"),ot(l,t.charcoal,[1.65,.78,.18],[-.55,.72,-.55],"sofa back"),ot(l,t.graphite,[.18,.48,.62],[-1.48,.42,-.18],"sofa arm left"),ot(l,t.graphite,[.18,.48,.62],[.38,.42,-.18],"sofa arm right"),ot(l,t.neonPink,[1.2,.045,.05],[-.55,.88,-.45],"sofa led"),ot(l,t.blue,[.42,.16,.36],[-.92,.67,-.16],"blue cushion"),ot(l,t.yellow,[.42,.16,.36],[-.23,.67,-.16],"yellow cushion"),ot(l,t.white,[.5,.13,.34],[.18,.68,-.16],"white cushion");const c=new le;c.position.set(.9,0,.55),ot(c,t.woodDark,[1.08,.09,.68],[0,.51,0],"coffee table top"),ot(c,t.chrome,[.06,.46,.06],[-.42,.25,-.24],"table leg"),ot(c,t.chrome,[.06,.46,.06],[.42,.25,-.24],"table leg"),ot(c,t.chrome,[.06,.46,.06],[-.42,.25,.24],"table leg"),ot(c,t.chrome,[.06,.46,.06],[.42,.25,.24],"table leg"),an(c,t.white,.12,.09,.13,[-.22,.64,-.08],[0,0,0],28,"cup"),ot(c,t.green,[.3,.05,.22],[.24,.62,.12],"book"),l.add(c),$e(l,_n.sofa,null,a);const f=new le;f.name="folding dining table",f.position.set(5.65,0,-1),s.add(f),ot(f,t.woodDark,[1.05,.08,.74],[0,.73,0],"fold table center");const d=new le;ot(d,t.woodDark,[.78,.07,.74],[.39,.73,0],"fold table wing"),d.position.x=.54,f.add(d),ot(f,t.chrome,[.05,.72,.05],[-.44,.36,-.28],"fold table leg"),ot(f,t.chrome,[.05,.72,.05],[-.44,.36,.28],"fold table leg"),ot(f,t.chrome,[.05,.72,.05],[.44,.36,-.28],"fold table leg"),ot(f,t.chrome,[.05,.72,.05],[.44,.36,.28],"fold table leg"),ot(f,t.charcoal,[.45,.1,.45],[-.9,.42,.05],"dining stool"),ot(f,t.charcoal,[.45,.1,.45],[.95,.42,.05],"dining stool");let m=!1;$e(f,_n.dining,()=>{const p=d.rotation.z,g=m?0:-Math.PI/2.2;return m=!m,i.add(.58,_=>{d.rotation.z=vi.lerp(p,g,_)}),m?"Cánh bàn đã gập xuống gọn":"Cánh bàn đã mở rộng"},a)},r2=(s,t,i)=>{const a=new le;a.name="soft decor",s.add(a);const l=new le;l.name="floor lounge mattress",l.position.set(5.25,0,.95),l.rotation.y=-.22,ot(l,t.mattress,[1.55,.2,.86],[0,.18,0],"floor mattress"),ot(l,t.blanket,[1.52,.08,.34],[0,.33,.22],"folded throw blanket"),ot(l,t.white,[.54,.13,.32],[-.42,.39,-.2],"floor pillow white"),ot(l,t.blue,[.48,.12,.3],[.24,.38,-.2],"floor pillow blue"),a.add(l),$e(l,{name:"Nệm thư giãn + gối sàn",price:"2.900.000 vnd",use:"Khu nằm đọc sách/chill nhanh cạnh ban công, làm phòng đỡ trống và mềm hơn."},null,i);const c=new le;c.name="warm floor lamp",c.position.set(4.55,0,-2.35),an(c,t.black,.055,.055,1.05,[0,.72,0],[0,0,0],18,"lamp stem"),an(c,t.black,.24,.16,.32,[0,1.35,0],[0,0,0],28,"lamp shade"),Gi(c,t.yellow,.12,[0,1.27,0],[1,.85,1],"warm bulb"),a.add(c),$e(c,{name:"Đèn cây ánh sáng ấm",price:"1.450.000 vnd",use:"Tăng sáng cho góc sofa và tạo cảm giác phòng thật hơn vào buổi tối."},null,i);const f=new le;f.name="abstract wall art",f.position.set(-1.1,1.92,-4),ot(f,t.white,[1.85,1,.05],[0,0,0],"canvas base"),ot(f,t.green,[.72,.38,.06],[.38,.05,.04],"green paint block"),ot(f,t.yellow,[.58,.24,.06],[-.3,.27,.05],"yellow paint block"),ot(f,t.black,[.72,.16,.06],[.02,-.2,.06],"black brush stroke"),ot(f,t.red,[.34,.18,.06],[.44,-.34,.06],"red paint accent"),a.add(f),$e(f,{name:"Tranh canvas trừu tượng",price:"1.250.000 vnd",use:"Mảng trang trí sáng giống ảnh mẫu, cân bằng lại LED gaming trong phòng."},null,i);const d=new le;d.name="decor plants",a.add(d),Jh(d,t,[-2.2,0,-2.7],1.05,"plant near tv"),Jh(d,t,[5.95,0,-2.15],.95,"plant near window"),Jh(d,t,[6.45,0,2.1],.75,"small balcony plant"),$e(d,{name:"Cây xanh trang trí",price:"2.200.000 vnd",use:"Làm phòng sáng và thật hơn, lấy cảm hứng từ cây trong ảnh thiết kế."},null,i)},s2=(s,t,i,a)=>{const l=new le;l.name="loft bed",l.position.set(-.65,0,2.7),s.add(l),ot(l,t.bedBase,[3.35,.22,2.26],[0,2.05,0],"loft platform"),ot(l,t.mattress,[3.12,.32,1.88],[0,2.35,-.05],"mattress"),ot(l,t.blanket,[1.72,.18,1.78],[.42,2.56,-.04],"blanket"),ot(l,t.white,[.7,.18,.46],[-1,2.58,-.56],"pillow"),ot(l,t.white,[.7,.18,.46],[-1,2.58,.32],"pillow"),ot(l,t.chrome,[3.45,.08,.08],[0,2.68,-1.13],"bed front rail"),ot(l,t.chrome,[.08,.76,.08],[-1.72,2.42,-1.13],"bed rail post"),ot(l,t.chrome,[.08,.76,.08],[1.72,2.42,-1.13],"bed rail post"),Ii(l,t.neonViolet,[-1.62,2.18,-1.11],[1.62,2.18,-1.11],.045);const c=new le;c.name="secret under bed",ot(c,t.charcoal,[2.85,1.42,.12],[0,.83,-1.03],"secret sliding door"),ot(c,t.neonGreen,[1.8,.035,.045],[0,1.38,-1.1],"secret led line"),ot(c,t.graphite,[1,.62,.8],[-.82,.38,-.18],"storage box"),ot(c,t.black,[.7,.54,.62],[.58,.35,-.1],"pc spare tower"),l.add(c);let f=!1;$e(l,_n.bed,null,a),$e(c,_n.secretCabinet,()=>{const g=c.position.x,_=f?0:1.75;return f=!f,i.add(.66,S=>{c.position.x=vi.lerp(g,_,S)}),f?"Kho dưới giường đã mở":"Kho dưới giường đã đóng"},a);const d=new le;d.name="storage stairs",d.position.set(2,0,2.7),s.add(d);const m=5;for(let g=0;g<m;g+=1){const _=new le;_.name=`drawer stair ${g+1}`;const S=.22+g*.36,M=.82-g*.38;ot(_,t.woodDark,[.84,.34,.58],[0,S,M],"stair shell");const E=new le;E.name=`step drawer ${g+1}`,ot(E,t.bedBase,[.77,.25,.08],[.02,S,M-.31],"drawer face"),ot(E,t.chrome,[.3,.025,.025],[.02,S+.02,M-.36],"drawer pull"),ot(E,t.graphite,[.66,.2,.38],[.02,S-.01,M-.14],"drawer box"),_.add(E),d.add(_);let A=!1;$e(_,_n.stairDrawer,()=>{const x=E.position.z,v=A?0:-.55;return A=!A,i.add(.48,F=>{E.position.z=vi.lerp(x,v,F)}),A?`Hộc bậc ${g+1} đã kéo ra`:`Hộc bậc ${g+1} đã đóng`},a)}ot(d,t.chrome,[.06,2.05,.06],[.55,1.2,-.36],"stair rail post"),ot(d,t.chrome,[.06,1.8,.06],[.55,1.1,.88],"stair rail post");const p=ot(d,t.chrome,[.07,.07,1.55],[.55,1.82,.26],"stair handrail");p.rotation.x=.35},o2=(s,t,i,a)=>{const l=new le;l.name="wardrobe",l.position.set(8.55,0,1.75),s.add(l),ot(l,t.woodDark,[1.08,2.48,2.4],[0,1.24,0],"wardrobe body"),ot(l,t.black,[1.02,.07,2.22],[0,2.36,0],"wardrobe top"),ot(l,t.neonCyan,[.04,2.16,.04],[-.55,1.25,-1.05],"wardrobe led"),ot(l,t.neonPink,[.04,2.16,.04],[-.55,1.25,1.05],"wardrobe led");const c=new le;c.name="wardrobe interior",ot(c,t.cream,[.86,.08,2.08],[-.04,.72,0],"shelf low"),ot(c,t.cream,[.86,.08,2.08],[-.04,1.55,0],"shelf mid"),an(c,t.chrome,.025,.025,1.85,[-.09,1.92,0],[Math.PI/2,0,0],16,"clothes rail");const f=[t.red,t.blue,t.green,t.yellow,t.neonViolet,t.white];for(let g=0;g<6;g+=1){const _=-.78+g*.31;ot(c,f[g],[.08,.66,.24],[-.1,1.63,_],"hanging clothes"),an(c,t.chrome,.035,.035,.16,[-.1,1.99,_],[Math.PI/2,0,0],8,"hanger")}ot(c,t.graphite,[.46,.3,.7],[-.1,.34,-.62],"backpack"),ot(c,t.black,[.46,.24,.58],[-.1,.32,.55],"accessory box"),l.add(c);const d=new le;d.position.set(-.58,0,-1.12),ot(d,t.blueGlass,[.05,2.16,1.08],[0,1.24,.54],"left glass wardrobe door"),l.add(d);const m=new le;m.position.set(-.58,0,1.12),ot(m,t.blueGlass,[.05,2.16,1.08],[0,1.24,-.54],"right glass wardrobe door"),l.add(m);let p=!1;$e(l,_n.wardrobe,()=>{const g=d.rotation.y,_=m.rotation.y,S=p?0:-Math.PI*.55,M=p?0:Math.PI*.55;return p=!p,i.add(.72,E=>{d.rotation.y=vi.lerp(g,S,E),m.rotation.y=vi.lerp(_,M,E)}),p?"Tủ quần áo đã mở":"Tủ quần áo đã đóng"},a)},l2=(s,t,i)=>{const a=new le;a.name="gaming desk",a.position.set(5.85,0,2.55),a.rotation.y=-Math.PI/2,s.add(a),ot(a,t.woodDark,[2.22,.12,.75],[0,.78,0],"desk top"),ot(a,t.charcoal,[.22,.76,.68],[-.9,.39,0],"desk drawer block"),ot(a,t.chrome,[.07,.76,.07],[.9,.39,-.28],"desk leg"),ot(a,t.chrome,[.07,.76,.07],[.9,.39,.28],"desk leg"),ot(a,t.black,[.88,.56,.06],[-.46,1.17,-.24],"left monitor"),ot(a,t.black,[.88,.56,.06],[.5,1.17,-.24],"right monitor"),ot(a,t.neonCyan,[.72,.035,.03],[-.46,1.39,-.2],"monitor glow"),ot(a,t.neonPink,[.72,.035,.03],[.5,.95,-.2],"monitor glow"),ot(a,t.black,[.86,.05,.22],[.04,.87,.16],"keyboard");for(let c=0;c<8;c+=1)ot(a,c%2?t.neonCyan:t.neonPink,[.055,.018,.055],[-.28+c*.08,.91,.16],"rgb keyboard key");Gi(a,t.neonGreen,.13,[.72,.89,.18],[1.25,.42,.86],"rgb mouse"),an(a,t.soil,.09,.07,.12,[-.86,.9,.22],[0,0,0],18,"desk mini plant pot"),Gi(a,t.plant,.16,[-.86,1.06,.22],[.8,1.15,.8],"desk mini plant"),an(a,t.chrome,.025,.025,.42,[-1.02,1.02,-.08],[0,0,0],16,"desk lamp stem"),an(a,t.yellow,.11,.07,.16,[-1.02,1.28,-.08],[0,0,0],20,"desk lamp shade"),ot(a,t.black,[.48,.92,.64],[1.32,.58,.02],"pc case"),ot(a,t.blueGlass,[.04,.76,.52],[1.07,.6,.02],"pc glass side"),an(a,t.neonCyan,.11,.11,.035,[1.04,.75,-.16],[Math.PI/2,0,0],32,"pc fan"),an(a,t.neonPink,.11,.11,.035,[1.04,.45,-.16],[Math.PI/2,0,0],32,"pc fan"),Ii(a,t.neonCyan,[-1,.86,.42],[1.1,.86,.42],.035),Ii(a,t.neonPink,[1.08,.25,.42],[1.08,.86,.42],.035);const l=new le;l.position.set(.1,0,1),ot(l,t.charcoal,[.64,.18,.62],[0,.55,0],"chair seat"),ot(l,t.black,[.7,1.05,.18],[0,1.08,.34],"chair back"),ot(l,t.neonViolet,[.5,.05,.035],[0,1.46,.25],"chair led"),an(l,t.chrome,.05,.05,.55,[0,.28,0],[0,0,0],16,"chair gas lift");for(let c=0;c<5;c+=1){const f=ot(l,t.chrome,[.06,.05,.54],[0,.14,0],"chair base leg");f.rotation.y=c/5*Ko}a.add(l),$e(a,_n.desk,null,i),$e(l,_n.chair,null,i)},c2=(s,t,i)=>{const a=new le;a.name="bathroom",a.position.set(-5.2,0,2.9),s.add(a),ot(a,t.glass,[1.22,2.18,.08],[-.9,1.12,-.67],"shower glass front"),ot(a,t.glass,[.08,2.18,1.18],[-1.48,1.12,-.1],"shower glass side"),an(a,t.chrome,.06,.06,.08,[-1.1,1.98,-.66],[Math.PI/2,0,0],28,"shower head"),ot(a,t.chrome,[.045,1,.045],[-1.1,1.42,-.66],"shower pipe"),an(a,t.white,.27,.32,.32,[.76,.32,.54],[0,0,0],32,"toilet bowl"),ot(a,t.white,[.46,.66,.18],[.76,.75,.86],"toilet tank"),an(a,t.white,.3,.26,.16,[.22,.78,-.64],[0,0,0],32,"sink bowl"),ot(a,t.white,[.56,.12,.42],[.22,.86,-.64],"sink counter"),ot(a,t.mirror,[.62,.78,.035],[.22,1.45,-.94],"mirror"),ot(a,t.neonCyan,[.7,.035,.035],[.22,1.9,-.91],"mirror led"),an(a,t.chrome,.035,.035,.2,[.22,1.04,-.66],[Math.PI/2,0,0],16,"faucet"),$e(a,_n.bathroom,null,i)},u2=(s,t,i,a,l)=>{const c=new le;c.name="washing machine",c.position.set(-6.82,0,.72),s.add(c),ot(c,t.white,[.82,.92,.72],[0,.46,0],"washer body"),ot(c,t.graphite,[.68,.16,.06],[0,.82,-.37],"washer control panel");const f=an(c,t.black,.28,.28,.08,[0,.47,-.39],[Math.PI/2,0,0],40,"washer door ring"),d=an(c,t.blueGlass,.22,.22,.09,[0,.47,-.43],[Math.PI/2,0,0],40,"washer glass drum");ot(c,t.neonGreen,[.12,.045,.035],[.22,.82,-.42],"washer status led"),f.receiveShadow=!1,d.receiveShadow=!1;let m=!1;$e(c,_n.washer,()=>(m=!m,l.washerRunning=m,i.add(.38,p=>{const g=vi.lerp(m?.8:1.15,m?1.15:.8,p);c.scale.setScalar(g)},()=>{c.scale.setScalar(1)}),m?"Máy giặt đang quay":"Máy giặt đã dừng"),a),l.washerDrum=d},f2=(s,t,i)=>{const a=new le;a.name="drying balcony",a.position.set(8.9,0,-.6),s.add(a),ot(a,t.glass,[2.6,1.05,.08],[0,.86,-2.54],"balcony glass rail"),ot(a,t.chrome,[2.65,.08,.08],[0,1.42,-2.54],"balcony top rail"),ot(a,t.chrome,[.05,1.36,.05],[-1.12,.76,-2.54],"balcony post"),ot(a,t.chrome,[.05,1.36,.05],[1.12,.76,-2.54],"balcony post");const l=new le;l.position.set(.1,0,-1.28),an(l,t.chrome,.035,.035,2,[0,1.55,0],[Math.PI/2,0,0],16,"drying rod"),ot(l,t.chrome,[.04,1.1,.04],[-.92,.92,-.82],"drying stand"),ot(l,t.chrome,[.04,1.1,.04],[.92,.92,.82],"drying stand");const c=[t.red,t.blue,t.green,t.white,t.yellow];for(let f=0;f<5;f+=1){const d=-.74+f*.37;ot(l,c[f],[.05,.72-f*.04,.28],[0,1.18,d],"hanging laundry")}a.add(l),an(a,t.soil,.22,.18,.24,[.95,.12,1.52],[0,0,0],22,"plant pot"),Gi(a,t.plant,.28,[.95,.48,1.52],[.8,1.15,.8],"balcony plant"),ot(a,t.graphite,[.7,.86,.42],[-.88,.43,1.34],"laundry basket"),$e(a,_n.balconyDry,null,i)},h2=(s,t,i)=>{const a=new le;a.name="shoe rack",a.position.set(-7.08,0,-2.2),s.add(a),ot(a,t.woodDark,[.62,1.1,1.12],[0,.55,0],"shoe rack body");for(let c=0;c<3;c+=1)ot(a,t.cream,[.55,.04,1.02],[.02,.25+c*.32,0],"shoe shelf");const l=[t.black,t.white,t.red,t.blue,t.charcoal,t.yellow];for(let c=0;c<6;c+=1){const f=Math.floor(c/2),d=c%2?.25:-.25;Gi(a,l[c],.12,[0,.16+f*.32,d],[1.5,.42,.68],"pair of shoes")}ot(a,t.black,[.48,.28,.38],[.04,1.24,-.22],"helmet"),ot(a,t.chrome,[.38,.04,.04],[.04,1.08,.28],"key tray"),$e(a,_n.shoeRack,null,i)},d2=(s,t,i)=>{const a=new le;a.name="tall shelf",a.position.set(6.85,0,-3.24),s.add(a),ot(a,t.woodDark,[1.2,2.1,.42],[0,1.05,0],"tall shelf frame");for(let l=0;l<5;l+=1)ot(a,t.cream,[1.05,.05,.38],[0,.28+l*.38,0],"shelf plank");for(let l=0;l<10;l+=1){const c=-.44+l%5*.22,f=.38+Math.floor(l/5)*.74;ot(a,l%3===0?t.neonViolet:l%3===1?t.blue:t.yellow,[.12,.34,.24],[c,f,-.05],"books and game boxes")}Gi(a,t.neonCyan,.15,[.36,1.78,-.04],[1,1,1],"collectible orb"),ot(a,t.black,[.48,.22,.32],[-.28,1.78,-.02],"router"),$e(a,_n.shelf,null,i)},p2=(s,t,i)=>{const a=new le;a.name="rgb strips and cables",s.add(a),Ii(a,t.neonCyan,[4.2,1,3.55],[6.2,1,3.55],.03),Ii(a,t.neonPink,[6.2,1,3.55],[6.2,1.95,3.55],.03),Ii(a,t.neonGreen,[-1.9,2.12,1.49],[1,2.12,1.49],.03),new tp({color:"#22d3ee",transparent:!0,opacity:.85});const l=[new V(4.36,.83,3.34),new V(4.8,.64,3.16),new V(5.28,.8,3.36),new V(5.76,.64,3.12),new V(6.18,.82,3.34)],c=new Cv(l),f=new Zn(new ap(c,48,.015,8,!1),t.neonCyan);f.name="rgb cable tube",a.add(f),$e(a,_n.rgb,null,i)},m2=s=>{s.add(new $x("#ffffff","#d9c0ad",1.65)),s.add(new i1("#ffffff",.48));const t=new n1("#fff8e7",3.55);t.position.set(-5,7.6,5.5),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.left=-11,t.shadow.camera.right=11,t.shadow.camera.top=8,t.shadow.camera.bottom=-8,s.add(t);const i=new Wh("#22d3ee",1.2,8,1.6);i.position.set(4.5,2.2,3.25),s.add(i);const a=new Wh("#f472b6",.95,7,1.8);a.position.set(-.3,2.5,2.1),s.add(a);const l=new Wh("#22c55e",.65,5.4,1.9);l.position.set(7,2.1,-2.9),s.add(l)},g2=s=>{s.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(i=>i.dispose()):t.material.dispose())})},_2=({mount:s,onHover:t,onFocus:i})=>{const a=new XA({antialias:!0,powerPreference:"high-performance"});a.setPixelRatio(Math.min(window.devicePixelRatio,1.8)),a.setSize(s.clientWidth,s.clientHeight),a.setClearColor("#f4f6fb",1),a.shadowMap.enabled=!0,a.shadowMap.type=rv,a.outputColorSpace=Yn,a.toneMapping=ov,a.toneMappingExposure=1.28,s.appendChild(a.domElement),a.domElement.tabIndex=0;const l=new Cx;l.background=new me("#f4f6fb"),l.fog=new Jd("#f4f6fb",.015);const c=new si(62,s.clientWidth/s.clientHeight,.04,80),f=new V(-6.35,1.55,-2.85);c.position.copy(f);let d=-1.95,m=-.22;const p=KA(),g=new QA,_=[],S={washerRunning:!1,washerDrum:null,acRunning:!1,acMist:null,acBlades:[]};m2(l),$A(l,p,_),t2(l,p,g,_),e2(l,p,g,_),n2(l,p,g,_,S),i2(l,p,g,_),a2(l,p,g,_),r2(l,p,_),s2(l,p,g,_),o2(l,p,g,_),l2(l,p,_),c2(l,p,_),u2(l,p,g,_,S),f2(l,p,_),h2(l,p,_),d2(l,p,_),p2(l,p,_);const M=new o1(new gn,"#22d3ee");M.material.transparent=!0,M.material.opacity=.85,M.visible=!1,l.add(M);const E=new s1;E.far=7.2;const A=new ee(0,0),x={x:window.innerWidth*.5,y:window.innerHeight*.5};let v=null,F=!1;const U=new Set,w=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight","ShiftLeft","ShiftRight"]);let H=!1,I=0,O={x:0,y:0};const X=()=>{m=Wo(m,-1.16,.72),c.rotation.order="YXZ",c.rotation.y=d,c.rotation.x=m};X();const C=J=>{const At=a.domElement.getBoundingClientRect();A.x=(J.clientX-At.left)/At.width*2-1,A.y=-((J.clientY-At.top)/At.height)*2+1,x.x=J.clientX,x.y=J.clientY},D=()=>{E.setFromCamera(A,c);const J=E.intersectObjects(_,!1),At=J.length?J[0].object.userData.hotspot:null;if(At!==v&&(v=At,JA(M,v),v?.userData.info?i?.(v.userData.info.name):i?.("Sẵn sàng")),v?.userData.info){const bt=v.userData.info,jt=Wo(x.x,8,window.innerWidth-360),Ie=Wo(x.y,8,window.innerHeight-180);t?.({x:jt,y:Ie,name:bt.name,price:bt.price,use:bt.use,action:bt.action})}else t?.(null)},z=J=>{if(C(J),H){const At=J.clientX-O.x,bt=J.clientY-O.y;I+=Math.abs(At)+Math.abs(bt),d-=At*.0042,m-=bt*.0034,X(),O={x:J.clientX,y:J.clientY}}D()},rt=J=>{C(J),a.domElement.focus(),H=!0,I=0,O={x:J.clientX,y:J.clientY},a.domElement.setPointerCapture?.(J.pointerId),D()},lt=J=>{if(C(J),a.domElement.releasePointerCapture?.(J.pointerId),H=!1,D(),I<8&&v?.userData.action){const At=v.userData.action();At&&i?.(At)}},ut=J=>{c.fov=Wo(c.fov+Math.sign(J.deltaY)*3,38,78),c.updateProjectionMatrix()},dt=J=>{w.has(J.code)&&J.preventDefault(),U.add(J.code)},P=J=>{w.has(J.code)&&J.preventDefault(),U.delete(J.code)},K=()=>{!s.clientWidth||!s.clientHeight||(c.aspect=s.clientWidth/s.clientHeight,c.updateProjectionMatrix(),a.setSize(s.clientWidth,s.clientHeight))};a.domElement.addEventListener("pointermove",z),a.domElement.addEventListener("pointerdown",rt),a.domElement.addEventListener("pointerup",lt),a.domElement.addEventListener("wheel",ut,{passive:!0}),window.addEventListener("keydown",dt),window.addEventListener("keyup",P),window.addEventListener("resize",K);const Y=new r1,yt=new V,xt=new V,N=new V,nt=(J,At)=>J>-7.15&&J<7.15&&At>-3.78&&At<3.88||J>7.15&&J<9.9&&At>-2.25&&At<3.3,Mt=J=>{if(yt.set(0,0,0),xt.set(-Math.sin(d),0,-Math.cos(d)),N.set(Math.cos(d),0,-Math.sin(d)),(U.has("KeyW")||U.has("ArrowUp"))&&yt.add(xt),(U.has("KeyS")||U.has("ArrowDown"))&&yt.sub(xt),(U.has("KeyA")||U.has("ArrowLeft"))&&yt.sub(N),(U.has("KeyD")||U.has("ArrowRight"))&&yt.add(N),yt.lengthSq()>0){yt.normalize().multiplyScalar((U.has("ShiftLeft")||U.has("ShiftRight")?4.25:2.45)*J);const At=c.position.x+yt.x,bt=c.position.z+yt.z;nt(At,c.position.z)&&(c.position.x=At),nt(c.position.x,bt)&&(c.position.z=bt)}c.position.y=1.55},Ct=(J,At)=>{S.washerRunning&&S.washerDrum&&(S.washerDrum.rotation.z+=At*11,S.washerDrum.material.opacity=.38+Math.sin(J*9)*.08),S.acRunning&&(S.acBlades.forEach((bt,jt)=>{bt.rotation.x=-.22+Math.sin(J*8+jt*.45)*.24}),S.acMist?.children.forEach((bt,jt)=>{bt.position.y-=At*(.14+jt%5*.03),bt.position.z+=At*(.42+jt%7*.04),bt.position.x+=Math.sin(J*1.8+bt.userData.seed)*At*.12,bt.material.opacity=.08+Math.sin(J*2.6+bt.userData.seed)*.045,(bt.position.z>1.6||bt.position.y<-1.2)&&(bt.position.y=-.46-Math.random()*.18,bt.position.z=.36+Math.random()*.18)}))};let Q=0;const _t=()=>{if(F)return;Q=requestAnimationFrame(_t);const J=Math.min(Y.getDelta(),.05),At=Y.elapsedTime;g.tick(J),Mt(J),Ct(At,J),D(),a.render(l,c)};return _t(),{resetView(){c.position.copy(f),d=-1.95,m=-.22,c.fov=62,c.updateProjectionMatrix(),X(),i?.("Sẵn sàng")},dispose(){F=!0,cancelAnimationFrame(Q),a.domElement.removeEventListener("pointermove",z),a.domElement.removeEventListener("pointerdown",rt),a.domElement.removeEventListener("pointerup",lt),a.domElement.removeEventListener("wheel",ut),window.removeEventListener("keydown",dt),window.removeEventListener("keyup",P),window.removeEventListener("resize",K),t?.(null),g2(l),p.dispose(),a.dispose(),a.domElement.remove()}}};function v2(){const s=Rs.useRef(null),t=Rs.useRef(null),[i,a]=Rs.useState(null),[l,c]=Rs.useState("Sẵn sàng");return Rs.useEffect(()=>{if(!s.current)return;const f=_2({mount:s.current,onHover:a,onFocus:c});return t.current=f,()=>{f.dispose(),t.current=null}},[]),On.jsxs("main",{className:"app-shell",children:[On.jsx("div",{ref:s,className:"scene-host","aria-label":"Mô hình phòng 3D phong cách vũ trụ gaming"}),On.jsxs("div",{className:"topbar",children:[On.jsxs("div",{children:[On.jsx("strong",{children:"Cosmic Gaming Room"}),On.jsx("span",{children:l})]}),On.jsx("button",{type:"button",onClick:()=>t.current?.resetView(),"aria-label":"Đưa góc nhìn về vị trí ban đầu",children:"Reset"})]}),On.jsx("div",{className:"crosshair","aria-hidden":"true"}),i?On.jsxs("aside",{className:"item-card",style:{left:i.x,top:i.y},children:[On.jsxs("header",{children:[On.jsx("strong",{children:i.name}),On.jsx("span",{children:i.price})]}),On.jsx("p",{children:i.use}),i.action?On.jsx("small",{children:i.action}):null]}):null]})}eM.createRoot(document.getElementById("root")).render(On.jsx(ZS.StrictMode,{children:On.jsx(v2,{})}));
