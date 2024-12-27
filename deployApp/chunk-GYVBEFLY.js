import{A as ft,D as l,E as w,F as pt,G as g,Ga as mt,H as a,I as ht,K as x,R as Z,S as gt,T as z,U as St,Y as yt,ba as I,d as V,e as E,f as st,g as at,h as G,j as U,k as _,l as N,m as L,n as D,o as j,p as X,q as m,r as b,s as H,t as Y,u as ct,v as ut,w as lt,x as v,y as dt,z as T,za as _t}from"./chunk-GNEPA3TN.js";var F=(()=>{class t{constructor(){this.bootstrap$=new at(1)}get appBootstrapped$(){return this.bootstrap$.asObservable()}bootstrap(){this.bootstrap$.next(!0),this.bootstrap$.complete()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function Kt(t,r){return t===r}function Wt(t,r,e){if(r===null||e===null||r.length!==e.length)return!1;let n=r.length;for(let o=0;o<n;o++)if(!t(r[o],e[o]))return!1;return!0}function R(t,r=Kt){let e=null,n=null;function o(){return Wt(r,e,arguments)||(n=t.apply(null,arguments)),e=arguments,n}return o.reset=function(){e=null,n=null},o}var qt=(()=>{class t{static set(e){this._value=e}static pop(){let e=this._value;return this._value={},e}}return t._value={},t})(),K=new g("INITIAL_STATE_TOKEN",{providedIn:"root",factory:()=>qt.pop()}),vt=new g("\u0275NGXS_STATE_FACTORY"),Ot=new g("\u0275NGXS_STATE_CONTEXT_FACTORY");function Et(t){return typeof t=="function"}function k(t){return t.constructor&&t.constructor.type?t.constructor.type:t.type}var Nt=(t,r,e)=>{t=Object.assign({},t);let n=r.split("."),o=n.length-1;return n.reduce((i,s,c)=>(c===o?i[s]=e:i[s]=Array.isArray(i[s])?i[s].slice():Object.assign({},i[s]),i&&i[s]),t),t},rt=(t,r)=>r.split(".").reduce((e,n)=>e&&e[n],t),W=t=>t&&typeof t=="object"&&!Array.isArray(t),q=(t,...r)=>{if(!r.length)return t;let e=r.shift();if(W(t)&&W(e))for(let n in e)W(e[n])?(t[n]||Object.assign(t,{[n]:{}}),q(t[n],e[n])):Object.assign(t,{[n]:e[n]});return q(t,...r)};function Qt(t,r,e){throw new Error(`State name '${t}' from ${r} already exists in ${e}.`)}function te(t){throw new Error(`States must be decorated with @State() decorator, but "${t}" isn't.`)}function ee(t){return`'${t}' class should be decorated with @Injectable() right after the @State() decorator`}var Dt=(()=>{class t{constructor(e,n){this._ngZone=e,this._platformId=n}enter(e){return mt(this._platformId)?this.runInsideAngular(e):this.runOutsideAngular(e)}leave(e){return this.runInsideAngular(e)}runInsideAngular(e){return I.isInAngularZone()?e():this._ngZone.run(e)}runOutsideAngular(e){return I.isInAngularZone()?this._ngZone.runOutsideAngular(e):e()}}return t.\u0275fac=function(e){return new(e||t)(a(I),a(St))},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var jt=new g("ROOT_OPTIONS"),bt=new g("ROOT_STATE_TOKEN"),Tt=new g("FEATURE_STATE_TOKEN"),ne=new g("NGXS_PLUGINS"),S="NGXS_META",wt="NGXS_OPTIONS_META",J="NGXS_SELECTOR_META",$=(()=>{class t{constructor(){this.defaultsState={},this.selectorOptions={injectContainerState:!0,suppressErrors:!0},this.compatibility={strictContentSecurityPolicy:!1},this.executionStrategy=Dt}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=l({token:t,factory:function(e){let n=null;return e?n=new e:n=(o=>q(new t,o))(a(jt)),n},providedIn:"root"}),t})(),Q=class{constructor(r,e,n){this.previousValue=r,this.currentValue=e,this.firstChange=n}},re=(()=>{class t{enter(e){return e()}leave(e){return e()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),xt=new g("USER_PROVIDED_NGXS_EXECUTION_STRATEGY"),oe=new g("NGXS_EXECUTION_STRATEGY",{providedIn:"root",factory:()=>{let t=ht(gt),r=t.get(xt);return r?t.get(r):t.get(typeof pt.Zone<"u"?Dt:re)}});function Ft(t){if(!t.hasOwnProperty(S)){let r={name:null,actions:{},defaults:{},path:null,makeRootSelector(e){return e.getStateGetter(r.name)},children:[]};Object.defineProperty(t,S,{value:r})}return A(t)}function A(t){return t[S]}function ie(t){return t.hasOwnProperty(J)||Object.defineProperty(t,J,{value:{makeRootSelector:null,originalFn:null,containerClass:null,selectorName:null,getSelectorOptions:()=>({})}}),Rt(t)}function Rt(t){return t[J]}function se(t){let r=t.slice();return e=>r.reduce((n,o)=>n&&n[o],e)}function ae(t){let r=t,e="store."+r[0],n=0,o=r.length,i=e;for(;++n<o;)i=i+" && "+(e=e+"."+r[n]);return new Function("store","return "+i+";")}function ce(t,r){return r&&r.compatibility&&r.compatibility.strictContentSecurityPolicy?se(t):ae(t)}function ue(t){let r=e=>t.find(o=>o===e)[S].name;return t.reduce((e,n)=>{let{name:o,children:i}=n[S];return e[o]=(i||[]).map(r),e},{})}function le(t){return t.reduce((r,e)=>{let n=e[S];return r[n.name]=e,r},{})}function de(t,r={}){let e=(n,o)=>{for(let i in n)if(n.hasOwnProperty(i)&&n[i].indexOf(o)>=0){let s=e(n,i);return s!==null?`${s}.${i}`:i}return null};for(let n in t)if(t.hasOwnProperty(n)){let o=e(t,n);r[n]=o?`${o}.${n}`:n}return r}function fe(t){let r=[],e={},n=(o,i=[])=>{Array.isArray(i)||(i=[]),i.push(o),e[o]=!0,t[o].forEach(s=>{e[s]||n(s,i.slice(0))}),r.indexOf(o)<0&&r.push(o)};return Object.keys(t).forEach(o=>n(o)),r.reverse()}function pe(t){return typeof t=="object"&&t!==null||typeof t=="function"}function he(...t){return ge(t,["DISPATCHED"])}function ge(t,r,e=ye){let n=_e(t),o=r&&me(r);return function(i){return i.pipe(Se(n,o),e())}}function Se(t,r){return m(e=>{let n=k(e.action),o=t[n],i=r?r[e.status]:!0;return o&&i})}function ye(){return D(t=>t.action)}function _e(t){return t.reduce((r,e)=>(r[k(e)]=!0,r),{})}function me(t){return t.reduce((r,e)=>(r[e]=!0,r),{})}function P(t){return r=>new V(e=>r.subscribe({next(n){t.leave(()=>e.next(n))},error(n){t.leave(()=>e.error(n))},complete(){t.leave(()=>e.complete())}}))}var Ct=(()=>{class t{constructor(e){this._executionStrategy=e}enter(e){return this._executionStrategy.enter(e)}leave(e){return this._executionStrategy.leave(e)}}return t.\u0275fac=function(e){return new(e||t)(a(oe))},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function Pt(t){let r=[],e=!1;return function(...o){if(e){r.unshift(o);return}for(e=!0,t(...o);r.length>0;){let i=r.pop();i&&t(...i)}e=!1}}var tt=class extends E{constructor(){super(...arguments),this._orderedNext=Pt(r=>super.next(r))}next(r){this._orderedNext(r)}},et=class extends st{constructor(r){super(r),this._orderedNext=Pt(e=>super.next(e)),this._currentValue=r}getValue(){return this._currentValue}next(r){this._currentValue=r,this._orderedNext(r)}},kt=(()=>{class t extends tt{ngOnDestroy(){this.complete()}}return t.\u0275fac=(()=>{let r;return function(n){return(r||(r=Z(t)))(n||t)}})(),t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var $t=t=>(...r)=>t.shift()(...r,(...n)=>$t(t)(...n));function ve(t,r){return e=>{let n=!1;return e.subscribe({error:o=>{r.enter(()=>Promise.resolve().then(()=>{n||r.leave(()=>t.reportErrorSafely(o))}))}}),new V(o=>(n=!0,e.pipe(P(r)).subscribe(o)))}}var Bt=(()=>{class t{constructor(e){this._injector=e,this._errorHandler=null}reportErrorSafely(e){this._errorHandler===null&&(this._errorHandler=this._injector.get(yt));try{this._errorHandler.handleError(e)}catch{}}}return t.\u0275fac=function(e){return new(e||t)(a(z))},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),ot=(()=>{class t extends et{constructor(){super({})}ngOnDestroy(){this.complete()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),nt=(()=>{class t{constructor(e,n){this._parentManager=e,this._pluginHandlers=n,this.plugins=[],this.registerHandlers()}get rootPlugins(){return this._parentManager&&this._parentManager.plugins||this.plugins}registerHandlers(){let e=this.getPluginHandlers();this.rootPlugins.push(...e)}getPluginHandlers(){return(this._pluginHandlers||[]).map(n=>n.handle?n.handle.bind(n):n)}}return t.\u0275fac=function(e){return new(e||t)(a(t,12),a(ne,8))},t.\u0275prov=l({token:t,factory:t.\u0275fac}),t})(),Vt=(()=>{class t extends E{}return t.\u0275fac=(()=>{let r;return function(n){return(r||(r=Z(t)))(n||t)}})(),t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),Oe=(()=>{class t{constructor(e,n,o,i,s,c){this._actions=e,this._actionResults=n,this._pluginManager=o,this._stateStream=i,this._ngxsExecutionStrategy=s,this._internalErrorReporter=c}dispatch(e){return this._ngxsExecutionStrategy.enter(()=>this.dispatchByEvents(e)).pipe(ve(this._internalErrorReporter,this._ngxsExecutionStrategy))}dispatchByEvents(e){return Array.isArray(e)?e.length===0?_(this._stateStream.getValue()):X(e.map(n=>this.dispatchSingle(n))):this.dispatchSingle(e)}dispatchSingle(e){let n=this._stateStream.getValue(),o=this._pluginManager.plugins;return $t([...o,(i,s)=>{i!==n&&this._stateStream.next(i);let c=this.getActionResultStream(s);return c.subscribe(u=>this._actions.next(u)),this._actions.next({action:s,status:"DISPATCHED"}),this.createDispatchObservable(c)}])(n,e).pipe(v())}getActionResultStream(e){return this._actionResults.pipe(m(n=>n.action===e&&n.status!=="DISPATCHED"),Y(1),v())}createDispatchObservable(e){return e.pipe(ut(n=>{switch(n.status){case"SUCCESSFUL":return _(this._stateStream.getValue());case"ERRORED":return N(n.error);default:return G}})).pipe(v())}}return t.\u0275fac=function(e){return new(e||t)(a(kt),a(Vt),a(nt),a(ot),a(Ct),a(Bt))},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var M=(()=>{class t{constructor(e,n,o){this._stateStream=e,this._dispatcher=n,this._config=o}getRootStateOperations(){return{getState:()=>this._stateStream.getValue(),setState:n=>this._stateStream.next(n),dispatch:n=>this._dispatcher.dispatch(n)}}setStateToTheCurrentWithNew(e){let n=this.getRootStateOperations(),o=n.getState();n.setState(Object.assign(Object.assign({},o),e.defaults))}}return t.\u0275fac=function(e){return new(e||t)(a(ot),a(Oe),a($))},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function Ee(t){return r=>{let e=Object.assign({},r);for(let n in t)e[n]=t[n];return e}}var it=(()=>{class t{constructor(e){this._internalStateOperations=e}createStateContext(e){let n=this._internalStateOperations.getRootStateOperations();return{getState(){let o=n.getState();return Ut(o,e.path)},patchState(o){let i=n.getState(),s=Ee(o);return It(n,i,s,e.path)},setState(o){let i=n.getState();return Et(o)?It(n,i,o,e.path):Gt(n,i,o,e.path)},dispatch(o){return n.dispatch(o)}}}}return t.\u0275fac=function(e){return new(e||t)(a(M))},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function Gt(t,r,e,n){let o=Nt(r,n,e);return t.setState(o),o}function It(t,r,e,n){let o=Ut(r,n),i=e(o);return Gt(t,r,i,n)}function Ut(t,r){return rt(t,r)}var on=new RegExp("^[a-zA-Z0-9_]+$");function Ie(t,r,e){let n=e[t];n&&n!==r&&Qt(t,r.name,n.name)}function Ae(t){t.forEach(r=>{A(r)||te(r.name)})}function Me(t){De(t)||Ne(t)||console.warn(ee(t.name))}function Ne(t){return!!t.\u0275prov}function De(t){return(t.__annotations__||[]).some(e=>e?.ngMetadataName==="Injectable")}var Lt=(()=>{class t{}return t.type="@@INIT",t})(),Xt=(()=>{class t{constructor(e){this.addedStates=e}}return t.type="@@UPDATE_STATE",t})(),je=new g("NGXS_DEVELOPMENT_OPTIONS",{providedIn:"root",factory:()=>({warnOnUnhandledActions:!0})}),be=(()=>{class t{constructor(e){this._ignoredActions=new Set([Lt.type,Xt.type]),typeof e.warnOnUnhandledActions=="object"&&this.ignoreActions(...e.warnOnUnhandledActions.ignore)}ignoreActions(...e){for(let n of e)this._ignoredActions.add(n.type)}warn(e){Array.from(this._ignoredActions).some(o=>o===k(e))||(e=e.constructor&&e.constructor.name!=="Object"?e.constructor.name:e.type,console.warn(`The ${e} action has been dispatched but hasn't been handled. This may happen if the state with an action handler for this action is not registered.`))}}return t.\u0275fac=function(e){return new(e||t)(a(je))},t.\u0275prov=l({token:t,factory:t.\u0275fac}),t})(),C=!1,O=(()=>{class t{constructor(e,n,o,i,s,c,u){this._injector=e,this._config=n,this._parentFactory=o,this._actions=i,this._actionResults=s,this._stateContextFactory=c,this._initialState=u,this._actionsSubscription=null,this._states=[],this._statesByName={},this._statePaths={},this.getRuntimeSelectorContext=R(()=>{let f=this;function y(p){let h=f.statePaths[p];return h?ce(h.split("."),f._config):null}return this._parentFactory?this._parentFactory.getRuntimeSelectorContext():{getStateGetter(p){let h=y(p);return h||((...Zt)=>(h||(h=y(p)),h?h(...Zt):void 0))},getSelectorOptions(p){let h=f._config.selectorOptions;return Object.assign(Object.assign({},h),p||{})}}})}get states(){return this._parentFactory?this._parentFactory.states:this._states}get statesByName(){return this._parentFactory?this._parentFactory.statesByName:this._statesByName}get statePaths(){return this._parentFactory?this._parentFactory.statePaths:this._statePaths}static _cloneDefaults(e){let n=e;return Array.isArray(e)?n=e.slice():pe(e)?n=Object.assign({},e):e===void 0&&(n={}),n}ngOnDestroy(){var e;(e=this._actionsSubscription)===null||e===void 0||e.unsubscribe()}add(e){C&&Ae(e);let{newStates:n}=this.addToStatesMap(e);if(!n.length)return[];let o=ue(n),i=fe(o),s=de(o),c=le(n),u=[];for(let f of i){let y=c[f],d=s[f],p=y[S];this.addRuntimeInfoToMeta(p,d),C&&Me(y);let h={name:f,path:d,isInitialised:!1,actions:p.actions,instance:this._injector.get(y),defaults:t._cloneDefaults(p.defaults)};this.hasBeenMountedAndBootstrapped(f,d)||u.push(h),this.states.push(h)}return u}addAndReturnDefaults(e){let n=e||[],o=this.add(n);return{defaults:o.reduce((s,c)=>Nt(s,c.path,c.defaults),{}),states:o}}connectActionHandlers(){if(this._parentFactory||this._actionsSubscription!==null)return;let e=new E;this._actionsSubscription=this._actions.pipe(m(n=>n.status==="DISPATCHED"),j(n=>{e.next(n);let o=n.action;return this.invokeActions(e,o).pipe(D(()=>({action:o,status:"SUCCESSFUL"})),H({action:o,status:"CANCELED"}),b(i=>_({action:o,status:"ERRORED",error:i})))})).subscribe(n=>this._actionResults.next(n))}invokeActions(e,n){let o=k(n),i=[],s=!1;for(let c of this.states){let u=c.actions[o];if(u)for(let f of u){let y=this._stateContextFactory.createStateContext(c);try{let d=c.instance[f.fn](y,n);d instanceof Promise&&(d=U(d)),L(d)?(d=d.pipe(j(p=>p instanceof Promise?U(p):L(p)?p:_(p)),H({})),f.options.cancelUncompleted&&(d=d.pipe(T(e.pipe(he(n)))))):d=_({}).pipe(v()),i.push(d)}catch(d){i.push(N(d))}s=!0}}if(C&&!s){let c=this._injector.get(be,null);c&&c.warn(n)}return i.length||i.push(_({})),X(i)}addToStatesMap(e){let n=[],o=this.statesByName;for(let i of e){let s=A(i).name;C&&Ie(s,i,o),!o[s]&&(n.push(i),o[s]=i)}return{newStates:n}}addRuntimeInfoToMeta(e,n){this.statePaths[e.name]=n,e.path=n}hasBeenMountedAndBootstrapped(e,n){let o=rt(this._initialState,n)!==void 0;return this.statesByName[e]&&o}}return t.\u0275fac=function(e){return new(e||t)(a(z),a($),a(t,12),a(kt),a(Vt),a(it),a(K,8))},t.\u0275prov=l({token:t,factory:t.\u0275fac}),t})();function Te(t,r,e){return n=>{let{argumentSelectorFunctions:o,selectorOptions:i}=xe(n,t,r);return function(c){let u=o.map(f=>f(c));try{return e(...u)}catch(f){if(f instanceof TypeError&&i.suppressErrors)return;throw f}}}}function we(t,r){let e=r&&r.containerClass,o=R(function(...s){let c=t.apply(e,s);return c instanceof Function?R.apply(null,[c]):c});return Object.setPrototypeOf(o,t),o}function xe(t,r,e=[]){let n=r.getSelectorOptions(),o=t.getSelectorOptions(n),s=Fe(e,o,r.containerClass).map(c=>Ht(c)(t));return{selectorOptions:o,argumentSelectorFunctions:s}}function Fe(t=[],r,e){let n=[],o=t.length===0||r.injectContainerState;return e&&o&&A(e)&&n.push(e),t&&n.push(...t),n}function Ht(t){let r=Rt(t)||A(t);return r&&r.makeRootSelector||(()=>t)}var B=(()=>{class t{constructor(e,n,o,i,s,c){this._stateStream=e,this._internalStateOperations=n,this._config=o,this._internalExecutionStrategy=i,this._stateFactory=s,this._selectableStateStream=this._stateStream.pipe(P(this._internalExecutionStrategy),v({bufferSize:1,refCount:!0})),this.initStateStream(c)}dispatch(e){return this._internalStateOperations.getRootStateOperations().dispatch(e)}select(e){let n=this.getStoreBoundSelectorFn(e);return this._selectableStateStream.pipe(D(n),b(o=>{let{suppressErrors:i}=this._config.selectorOptions;return o instanceof TypeError&&i?_(void 0):N(o)}),ct(),P(this._internalExecutionStrategy))}selectOnce(e){return this.select(e).pipe(Y(1))}selectSnapshot(e){return this.getStoreBoundSelectorFn(e)(this._stateStream.getValue())}subscribe(e){return this._selectableStateStream.pipe(P(this._internalExecutionStrategy)).subscribe(e)}snapshot(){return this._internalStateOperations.getRootStateOperations().getState()}reset(e){return this._internalStateOperations.getRootStateOperations().setState(e)}getStoreBoundSelectorFn(e){let n=Ht(e),o=this._stateFactory.getRuntimeSelectorContext();return n(o)}initStateStream(e){let n=this._stateStream.value;if(!n||Object.keys(n).length===0){let s=Object.keys(this._config.defaultsState).length>0?Object.assign(Object.assign({},this._config.defaultsState),e):e;this._stateStream.next(s)}}}return t.\u0275fac=function(e){return new(e||t)(a(ot),a(M),a($),a(Ct),a(O),a(K,8))},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),Re=(()=>{class t{constructor(e,n){t.store=e,t.config=n}ngOnDestroy(){t.store=null,t.config=null}}return t.store=null,t.config=null,t.\u0275fac=function(e){return new(e||t)(a(B),a($))},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),Yt=(()=>{class t{constructor(e,n,o,i,s){this._store=e,this._internalErrorReporter=n,this._internalStateOperations=o,this._stateContextFactory=i,this._bootstrapper=s,this._destroy$=new E}ngOnDestroy(){this._destroy$.next()}ngxsBootstrap(e,n){this._internalStateOperations.getRootStateOperations().dispatch(e).pipe(m(()=>!!n),ft(()=>this._invokeInitOnStates(n.states)),j(()=>this._bootstrapper.appBootstrapped$),m(o=>!!o),b(o=>(this._internalErrorReporter.reportErrorSafely(o),G)),T(this._destroy$)).subscribe(()=>this._invokeBootstrapOnStates(n.states))}_invokeInitOnStates(e){for(let n of e){let o=n.instance;o.ngxsOnChanges&&this._store.select(i=>rt(i,n.path)).pipe(dt(void 0),lt(),T(this._destroy$)).subscribe(([i,s])=>{let c=new Q(i,s,!n.isInitialised);o.ngxsOnChanges(c)}),o.ngxsOnInit&&o.ngxsOnInit(this._getStateContext(n)),n.isInitialised=!0}}_invokeBootstrapOnStates(e){for(let n of e){let o=n.instance;o.ngxsAfterBootstrap&&o.ngxsAfterBootstrap(this._getStateContext(n))}}_getStateContext(e){return this._stateContextFactory.createStateContext(e)}}return t.\u0275fac=function(e){return new(e||t)(a(B),a(Bt),a(M),a(it),a(F))},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),Ce=(()=>{class t{constructor(e,n,o,i,s=[],c){let u=e.addAndReturnDefaults(s);n.setStateToTheCurrentWithNew(u),e.connectActionHandlers(),c.ngxsBootstrap(new Lt,u)}}return t.\u0275fac=function(e){return new(e||t)(a(O),a(M),a(B),a(Re),a(bt,8),a(Yt))},t.\u0275mod=x({type:t}),t.\u0275inj=w({}),t})(),Pe=(()=>{class t{constructor(e,n,o,i=[],s){let c=t.flattenStates(i),u=o.addAndReturnDefaults(c);u.states.length&&(n.setStateToTheCurrentWithNew(u),s.ngxsBootstrap(new Xt(u.defaults),u))}static flattenStates(e=[]){return e.reduce((n,o)=>n.concat(o),[])}}return t.\u0275fac=function(e){return new(e||t)(a(B),a(M),a(O),a(Tt,8),a(Yt))},t.\u0275mod=x({type:t}),t.\u0275inj=w({}),t})(),sn=(()=>{class t{static forRoot(e=[],n={}){return{ngModule:Ce,providers:[O,nt,...e,...t.ngxsTokenProviders(e,n)]}}static forFeature(e=[]){return{ngModule:Pe,providers:[O,nt,...e,{provide:Tt,multi:!0,useValue:e}]}}static ngxsTokenProviders(e,n){return[{provide:xt,useValue:n.executionStrategy},{provide:bt,useValue:e},{provide:jt,useValue:n},{provide:_t,useFactory:t.appBootstrapListenerFactory,multi:!0,deps:[F]},{provide:Ot,useExisting:it},{provide:vt,useExisting:O}]}static appBootstrapListenerFactory(e){return()=>e.bootstrap()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=x({type:t}),t.\u0275inj=w({}),t})();function an(t,r){return(e,n)=>{let o=Ft(e.constructor);Array.isArray(t)||(t=[t]);for(let i of t){let s=i.type;o.actions[s]||(o.actions[s]=[]),o.actions[s].push({fn:n,options:r||{},type:s})}}}function cn(t){return r=>{let e=r,n=Ft(e),o=Object.getPrototypeOf(e),i=ke(o,t);$e({meta:n,inheritedStateClass:o,optionsWithInheritance:i}),e[wt]=i}}function ke(t,r){let e=t[wt]||{};return Object.assign(Object.assign({},e),r)}function $e(t){let{meta:r,inheritedStateClass:e,optionsWithInheritance:n}=t,{children:o,defaults:i,name:s}=n,c=typeof s=="string"?s:s&&s.getName()||null;if(e.hasOwnProperty(S)){let u=e[S]||{};r.actions=Object.assign(Object.assign({},r.actions),u.actions)}r.children=o,r.defaults=i,r.name=c}var At="NGXS_SELECTOR_OPTIONS_META",Mt={getOptions:t=>t&&t[At]||{},defineOptions:(t,r)=>{t&&(t[At]=r)}};function Be(t,r){let e=ie(t);e.originalFn=t;let n=()=>({});r&&(e.containerClass=r.containerClass,e.selectorName=r.selectorName||null,n=r.getSelectorOptions||n);let o=Object.assign({},e);return e.getSelectorOptions=()=>Ve(o,n()),e}function Ve(t,r){return Object.assign(Object.assign(Object.assign(Object.assign({},Mt.getOptions(t.containerClass)||{}),Mt.getOptions(t.originalFn)||{}),t.getSelectorOptions()||{}),r)}function Ge(t,r,e){let n=we(r,e),o=Be(r,e);return o.makeRootSelector=Te(o,t,n),n}function un(t){return(r,e,n)=>{n||(n=Object.getOwnPropertyDescriptor(r,e));let o=n?.value,i=Ge(t,o,{containerClass:r,selectorName:e.toString(),getSelectorOptions(){return{}}}),s={configurable:!0,get(){return i}};return s.originalFn=o,s}}var dn=(()=>{class t{payload;static type="[Cart] Add Product";constructor(e){this.payload=e}}return t})(),fn=(()=>{class t{payload;static type="[Cart] Del Product";constructor(e){this.payload=e}}return t})();export{B as a,sn as b,an as c,cn as d,un as e,dn as f,fn as g};
