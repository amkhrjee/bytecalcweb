function e(e,t,o,i){var s,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(a=(r<3?s(a):r>3?s(t,o,a):s(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=e=>(t,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,o=globalThis,i=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),r=new WeakMap;let a=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=r.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&r.set(t,e))}return e}toString(){return this.cssText}};const n=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1]),e[0]);return new a(o,e,s)},l=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new a("string"==typeof e?e:e+"",void 0,s))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:d,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:p,getOwnPropertySymbols:u,getPrototypeOf:m}=Object,v=globalThis,b=v.trustedTypes,f=b?b.emptyScript:"",y=v.reactiveElementPolyfillSupport,g=(e,t)=>e,x={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},_=(e,t)=>!d(e,t),w={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:_};Symbol.metadata??=Symbol("metadata"),v.litPropertyMetadata??=new WeakMap;class C extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,t);void 0!==i&&c(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){const{get:i,set:s}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){const r=i?.call(this);s.call(this,t),this.requestUpdate(e,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const e=m(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const e=this.properties,t=[...p(e),...u(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(l(e))}else void 0!==e&&t.push(l(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(i)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const i of t){const t=document.createElement("style"),s=o.litNonce;void 0!==s&&t.setAttribute("nonce",s),t.textContent=i.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EC(e,t){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(void 0!==i&&!0===o.reflect){const s=(void 0!==o.converter?.toAttribute?o.converter:x).toAttribute(t,o.type);this._$Em=e,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,t){const o=this.constructor,i=o._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=o.getPropertyOptions(i),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:x;this._$Em=i,this[i]=s.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??_)(this[e],t))return;this.P(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[g("elementProperties")]=new Map,C[g("finalized")]=new Map,y?.({ReactiveElement:C}),(v.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:_},E=(e=$,t,o)=>{const{kind:i,metadata:s}=o;let r=globalThis.litPropertyMetadata.get(s);if(void 0===r&&globalThis.litPropertyMetadata.set(s,r=new Map),r.set(o.name,e),"accessor"===i){const{name:i}=o;return{set(o){const s=t.get.call(this);t.set.call(this,o),this.requestUpdate(i,s,e)},init(t){return void 0!==t&&this.P(i,void 0,e),t}}}if("setter"===i){const{name:i}=o;return function(o){const s=this[i];t.call(this,o),this.requestUpdate(i,s,e)}}throw Error("Unsupported decorator location: "+i)};function A(e){return(t,o)=>"object"==typeof o?E(e,t,o):((e,t,o)=>{const i=t.hasOwnProperty(o);return t.constructor.createProperty(o,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function k(e){return A({...e,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function S(e,t){return(o,i,s)=>{const r=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof i?o:s??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return I(o,i,{get(){let o=e.call(this);return void 0===o&&(o=r(this),(null!==o||this.hasUpdated)&&t.call(this,o)),o}})}return I(o,i,{get(){return r(this)}})}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let R;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function P(e){return(t,o)=>{const{slot:i,selector:s}=e??{},r="slot"+(i?`[name=${i}]`:":not([name])");return I(t,o,{get(){const t=this.renderRoot?.querySelector(r),o=t?.assignedElements(e)??[];return void 0===s?o:o.filter((e=>e.matches(s)))}})}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const O=globalThis,T=O.trustedTypes,z=T?T.createPolicy("lit-html",{createHTML:e=>e}):void 0,L="$lit$",U=`lit$${(Math.random()+"").slice(9)}$`,M="?"+U,B=`<${M}>`,D=document,N=()=>D.createComment(""),H=e=>null===e||"object"!=typeof e&&"function"!=typeof e,F=Array.isArray,V="[ \t\n\f\r]",q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,W=/-->/g,j=/>/g,K=RegExp(`>|${V}(?:([^\\s"'>=/]+)(${V}*=${V}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),G=/'/g,Y=/"/g,X=/^(?:script|style|textarea|title)$/i,Z=(e=>(t,...o)=>({_$litType$:e,strings:t,values:o}))(1),J=Symbol.for("lit-noChange"),Q=Symbol.for("lit-nothing"),ee=new WeakMap,te=D.createTreeWalker(D,129);function oe(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==z?z.createHTML(t):t}const ie=(e,t)=>{const o=e.length-1,i=[];let s,r=2===t?"<svg>":"",a=q;for(let t=0;t<o;t++){const o=e[t];let n,l,d=-1,c=0;for(;c<o.length&&(a.lastIndex=c,l=a.exec(o),null!==l);)c=a.lastIndex,a===q?"!--"===l[1]?a=W:void 0!==l[1]?a=j:void 0!==l[2]?(X.test(l[2])&&(s=RegExp("</"+l[2],"g")),a=K):void 0!==l[3]&&(a=K):a===K?">"===l[0]?(a=s??q,d=-1):void 0===l[1]?d=-2:(d=a.lastIndex-l[2].length,n=l[1],a=void 0===l[3]?K:'"'===l[3]?Y:G):a===Y||a===G?a=K:a===W||a===j?a=q:(a=K,s=void 0);const h=a===K&&e[t+1].startsWith("/>")?" ":"";r+=a===q?o+B:d>=0?(i.push(n),o.slice(0,d)+L+o.slice(d)+U+h):o+U+(-2===d?t:h)}return[oe(e,r+(e[o]||"<?>")+(2===t?"</svg>":"")),i]};class se{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let s=0,r=0;const a=e.length-1,n=this.parts,[l,d]=ie(e,t);if(this.el=se.createElement(l,o),te.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=te.nextNode())&&n.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(L)){const t=d[r++],o=i.getAttribute(e).split(U),a=/([.?@])?(.*)/.exec(t);n.push({type:1,index:s,name:a[2],strings:o,ctor:"."===a[1]?de:"?"===a[1]?ce:"@"===a[1]?he:le}),i.removeAttribute(e)}else e.startsWith(U)&&(n.push({type:6,index:s}),i.removeAttribute(e));if(X.test(i.tagName)){const e=i.textContent.split(U),t=e.length-1;if(t>0){i.textContent=T?T.emptyScript:"";for(let o=0;o<t;o++)i.append(e[o],N()),te.nextNode(),n.push({type:2,index:++s});i.append(e[t],N())}}}else if(8===i.nodeType)if(i.data===M)n.push({type:2,index:s});else{let e=-1;for(;-1!==(e=i.data.indexOf(U,e+1));)n.push({type:7,index:s}),e+=U.length-1}s++}}static createElement(e,t){const o=D.createElement("template");return o.innerHTML=e,o}}function re(e,t,o=e,i){if(t===J)return t;let s=void 0!==i?o._$Co?.[i]:o._$Cl;const r=H(t)?void 0:t._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),void 0===r?s=void 0:(s=new r(e),s._$AT(e,o,i)),void 0!==i?(o._$Co??=[])[i]=s:o._$Cl=s),void 0!==s&&(t=re(e,s._$AS(e,t.values),s,i)),t}class ae{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,i=(e?.creationScope??D).importNode(t,!0);te.currentNode=i;let s=te.nextNode(),r=0,a=0,n=o[0];for(;void 0!==n;){if(r===n.index){let t;2===n.type?t=new ne(s,s.nextSibling,this,e):1===n.type?t=new n.ctor(s,n.name,n.strings,this,e):6===n.type&&(t=new pe(s,this,e)),this._$AV.push(t),n=o[++a]}r!==n?.index&&(s=te.nextNode(),r++)}return te.currentNode=D,i}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class ne{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,i){this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=re(this,e,t),H(e)?e===Q||null==e||""===e?(this._$AH!==Q&&this._$AR(),this._$AH=Q):e!==this._$AH&&e!==J&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>F(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==Q&&H(this._$AH)?this._$AA.nextSibling.data=e:this.T(D.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,i="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=se.createElement(oe(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new ae(i,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=ee.get(e.strings);return void 0===t&&ee.set(e.strings,t=new se(e)),t}k(e){F(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const s of e)i===t.length?t.push(o=new ne(this.S(N()),this.S(N()),this,this.options)):o=t[i],o._$AI(s),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class le{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,i,s){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Q}_$AI(e,t=this,o,i){const s=this.strings;let r=!1;if(void 0===s)e=re(this,e,t,0),r=!H(e)||e!==this._$AH&&e!==J,r&&(this._$AH=e);else{const i=e;let a,n;for(e=s[0],a=0;a<s.length-1;a++)n=re(this,i[o+a],t,a),n===J&&(n=this._$AH[a]),r||=!H(n)||n!==this._$AH[a],n===Q?e=Q:e!==Q&&(e+=(n??"")+s[a+1]),this._$AH[a]=n}r&&!i&&this.j(e)}j(e){e===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class de extends le{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Q?void 0:e}}class ce extends le{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Q)}}class he extends le{constructor(e,t,o,i,s){super(e,t,o,i,s),this.type=5}_$AI(e,t=this){if((e=re(this,e,t,0)??Q)===J)return;const o=this._$AH,i=e===Q&&o!==Q||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==Q&&(o===Q||i);i&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class pe{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){re(this,e)}}const ue=O.litHtmlPolyfillSupport;ue?.(se,ne),(O.litHtmlVersions??=[]).push("3.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let me=class extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const i=o?.renderBefore??t;let s=i._$litPart$;if(void 0===s){const e=o?.renderBefore??null;i._$litPart$=s=new ne(t.insertBefore(N(),e),e,void 0,o??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return J}};me._$litElement$=!0,me.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:me});const ve=globalThis.litElementPolyfillSupport;ve?.({LitElement:me}),(globalThis.litElementVersions??=[]).push("4.0.4");
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class be extends me{render(){return Z`<slot></slot>`}connectedCallback(){super.connectedCallback();"false"!==this.getAttribute("aria-hidden")?this.setAttribute("aria-hidden","true"):this.removeAttribute("aria-hidden")}}
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const fe=n`:host{font-size:var(--md-icon-size, 24px);width:var(--md-icon-size, 24px);height:var(--md-icon-size, 24px);color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}/*# sourceMappingURL=icon-styles.css.map */
`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let ye=class extends be{};ye.styles=[fe],ye=e([t("md-icon")],ye);
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ge extends me{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return Z`<span class="shadow"></span>`}}
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const xe=n`:host{display:flex;pointer-events:none}:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}/*# sourceMappingURL=elevation-styles.css.map */
`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let _e=class extends ge{};_e.styles=[xe],_e=e([t("md-elevation")],_e);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const we=Symbol("attachableController");let Ce;Ce=new MutationObserver((e=>{for(const t of e)t.target[we]?.hostConnected()}));class $e{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(e){null===e?this.host.removeAttribute("for"):this.host.setAttribute("for",e)}get control(){return this.host.hasAttribute("for")?this.htmlFor&&this.host.isConnected?this.host.getRootNode().querySelector(`#${this.htmlFor}`):null:this.currentControl||this.host.parentElement}set control(e){e?this.attach(e):this.detach()}constructor(e,t){this.host=e,this.onControlChange=t,this.currentControl=null,e.addController(this),e[we]=this,Ce?.observe(e,{attributeFilter:["for"]})}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(e){this.onControlChange(this.currentControl,e),this.currentControl=e}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ee=["focusin","focusout","pointerdown"];class Ae extends me{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new $e(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}handleEvent(e){if(!e[ke]){switch(e.type){default:return;case"focusin":this.visible=this.control?.matches(":focus-visible")??!1;break;case"focusout":case"pointerdown":this.visible=!1}e[ke]=!0}}onControlChange(e,t){for(const o of Ee)e?.removeEventListener(o,this),t?.addEventListener(o,this)}update(e){e.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(e)}}e([A({type:Boolean,reflect:!0})],Ae.prototype,"visible",void 0),e([A({type:Boolean,reflect:!0})],Ae.prototype,"inward",void 0);const ke=Symbol("handledByFocusRing"),Ie=n`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */let Se=class extends Ae{};Se.styles=[Ie],Se=e([t("md-focus-ring")],Se);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Re=1,Pe=e=>(...t)=>({_$litDirective$:e,values:t});let Oe=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Te=Pe(class extends Oe{constructor(e){if(super(e),e.type!==Re||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const o=e.element.classList;for(const e of this.st)e in t||(o.remove(e),this.st.delete(e));for(const e in t){const i=!!t[e];i===this.st.has(e)||this.nt?.has(e)||(i?(o.add(e),this.st.add(e)):(o.remove(e),this.st.delete(e)))}return J}}),ze="important",Le=" !"+ze,Ue=Pe(class extends Oe{constructor(e){if(super(e),e.type!==Re||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,o)=>{const i=e[o];return null==i?t:t+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(e,[t]){const{style:o}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?o.removeProperty(e):o[e]=null);for(const e in t){const i=t[e];if(null!=i){this.ft.add(e);const t="string"==typeof i&&i.endsWith(Le);e.includes("-")||t?o.setProperty(e,t?i.slice(0,-11):i,t?ze:""):o[e]=i}}return J}}),Me="cubic-bezier(0.2, 0, 0, 1)",Be="cubic-bezier(.3,0,0,1)",De="cubic-bezier(.3,0,.8,.15)";
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Ne(e,t=Ke){const o=Ve(e,t);return o&&(o.tabIndex=0,o.focus()),o}function He(e,t=Ke){const o=qe(e,t);return o&&(o.tabIndex=0,o.focus()),o}function Fe(e,t=Ke){for(let o=0;o<e.length;o++){const i=e[o];if(0===i.tabIndex&&t(i))return{item:i,index:o}}return null}function Ve(e,t=Ke){for(const o of e)if(t(o))return o;return null}function qe(e,t=Ke){for(let o=e.length-1;o>=0;o--){const i=e[o];if(t(i))return i}return null}function We(e,t,o=Ke){if(t){const i=function(e,t,o=Ke){for(let i=1;i<e.length;i++){const s=e[(i+t)%e.length];if(o(s))return s}return e[t]?e[t]:null}(e,t.index,o);return i&&(i.tabIndex=0,i.focus()),i}return Ne(e,o)}function je(e,t,o=Ke){if(t){const i=function(e,t,o=Ke){for(let i=1;i<e.length;i++){const s=e[(t-i+e.length)%e.length];if(o(s))return s}return e[t]?e[t]:null}(e,t.index,o);return i&&(i.tabIndex=0,i.focus()),i}return He(e,o)}function Ke(e){return!e.disabled}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ge={ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",Home:"Home",End:"End"};class Ye{constructor(e){this.handleKeydown=e=>{const t=e.key;if(e.defaultPrevented||!this.isNavigableKey(t))return;const o=this.items;if(!o.length)return;const i=Fe(o,this.isActivatable);i&&(i.item.tabIndex=-1),e.preventDefault();const s=this.isRtl();switch(t){case Ge.ArrowDown:case s?Ge.ArrowLeft:Ge.ArrowRight:We(o,i,this.isActivatable);break;case Ge.ArrowUp:case s?Ge.ArrowRight:Ge.ArrowLeft:je(o,i,this.isActivatable);break;case Ge.Home:Ne(o,this.isActivatable);break;case Ge.End:He(o,this.isActivatable)}},this.onDeactivateItems=()=>{const e=this.items;for(const t of e)this.deactivateItem(t)},this.onRequestActivation=e=>{this.onDeactivateItems();const t=e.target;this.activateItem(t),t.focus()},this.onSlotchange=()=>{const e=this.items;let t=!1;for(const o of e){!(!o.disabled&&o.tabIndex>-1)||t?o.tabIndex=-1:(t=!0,o.tabIndex=0)}if(t)return;const o=Ve(e,this.isActivatable);o&&(o.tabIndex=0)};const{isItem:t,getPossibleItems:o,isRtl:i,deactivateItem:s,activateItem:r,isNavigableKey:a,isActivatable:n}=e;this.isItem=t,this.getPossibleItems=o,this.isRtl=i,this.deactivateItem=s,this.activateItem=r,this.isNavigableKey=a,this.isActivatable=n}get items(){const e=this.getPossibleItems(),t=[];for(const o of e){if(this.isItem(o)){t.push(o);continue}const e=o.item;e&&this.isItem(e)&&t.push(e)}return t}activateNextItem(){const e=this.items,t=Fe(e,this.isActivatable);return t&&(t.item.tabIndex=-1),We(e,t,this.isActivatable)}activatePreviousItem(){const e=this.items,t=Fe(e,this.isActivatable);return t&&(t.item.tabIndex=-1),je(e,t,this.isActivatable)}}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Xe=function(e,t){return new CustomEvent("close-menu",{bubbles:!0,composed:!0,detail:{initiator:e,reason:t,itemPath:[e]}})},Ze="click-selection",Je="keydown",Qe={ESCAPE:"Escape",SPACE:"Space",ENTER:"Enter"};function et(e){return Object.values(Qe).some((t=>t===e))}function tt(e,t){const o=new Event("md-contains",{bubbles:!0,composed:!0});let i=[];const s=e=>{i=e.composedPath()};t.addEventListener("md-contains",s),e.dispatchEvent(o),t.removeEventListener("md-contains",s);return i.length>0}const ot="none",it="list-root",st="first-item",rt="last-item",at="end-start",nt="start-start";
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class lt{constructor(e,t){this.host=e,this.getProperties=t,this.surfaceStylesInternal={display:"none"},this.lastValues={isOpen:!1},this.host.addController(this)}get surfaceStyles(){return this.surfaceStylesInternal}async position(){const{surfaceEl:e,anchorEl:t,anchorCorner:o,surfaceCorner:i,positioning:s,xOffset:r,yOffset:a,repositionStrategy:n}=this.getProperties(),l=o.toLowerCase().trim(),d=i.toLowerCase().trim();if(!e||!t)return;const c=window.innerWidth,h=window.innerHeight,p=document.createElement("div");p.style.opacity="0",p.style.position="fixed",p.style.display="block",p.style.inset="0",document.body.appendChild(p);const u=p.getBoundingClientRect();p.remove();const m=window.innerHeight-u.bottom,v=window.innerWidth-u.right;this.surfaceStylesInternal={display:"block",opacity:"0"},this.host.requestUpdate(),await this.host.updateComplete,e.popover&&e.isConnected&&e.showPopover();const b=e.getSurfacePositionClientRect?e.getSurfacePositionClientRect():e.getBoundingClientRect(),f=t.getSurfacePositionClientRect?t.getSurfacePositionClientRect():t.getBoundingClientRect(),[y,g]=d.split("-"),[x,_]=l.split("-"),w="ltr"===getComputedStyle(e).direction;let{blockInset:C,blockOutOfBoundsCorrection:$,surfaceBlockProperty:E}=this.calculateBlock({surfaceRect:b,anchorRect:f,anchorBlock:x,surfaceBlock:y,yOffset:a,positioning:s,windowInnerHeight:h,blockScrollbarHeight:m});if($){const e="start"===y?"end":"start",t="start"===x?"end":"start",o=this.calculateBlock({surfaceRect:b,anchorRect:f,anchorBlock:t,surfaceBlock:e,yOffset:a,positioning:s,windowInnerHeight:h,blockScrollbarHeight:m});$>o.blockOutOfBoundsCorrection&&(C=o.blockInset,$=o.blockOutOfBoundsCorrection,E=o.surfaceBlockProperty)}let{inlineInset:A,inlineOutOfBoundsCorrection:k,surfaceInlineProperty:I}=this.calculateInline({surfaceRect:b,anchorRect:f,anchorInline:_,surfaceInline:g,xOffset:r,positioning:s,isLTR:w,windowInnerWidth:c,inlineScrollbarWidth:v});if(k){const e="start"===g?"end":"start",t="start"===_?"end":"start",o=this.calculateInline({surfaceRect:b,anchorRect:f,anchorInline:t,surfaceInline:e,xOffset:r,positioning:s,isLTR:w,windowInnerWidth:c,inlineScrollbarWidth:v});Math.abs(k)>Math.abs(o.inlineOutOfBoundsCorrection)&&(A=o.inlineInset,k=o.inlineOutOfBoundsCorrection,I=o.surfaceInlineProperty)}"move"===n&&(C-=$,A-=k),this.surfaceStylesInternal={display:"block",opacity:"1",[E]:`${C}px`,[I]:`${A}px`},"resize"===n&&($&&(this.surfaceStylesInternal.height=b.height-$+"px"),k&&(this.surfaceStylesInternal.width=b.width-k+"px")),this.host.requestUpdate()}calculateBlock(e){const{surfaceRect:t,anchorRect:o,anchorBlock:i,surfaceBlock:s,yOffset:r,positioning:a,windowInnerHeight:n,blockScrollbarHeight:l}=e,d="fixed"===a||"document"===a?1:0,c="document"===a?1:0,h="start"===s?1:0,p="end"===s?1:0,u=(i!==s?1:0)*o.height+r,m=h*o.top+p*(n-o.bottom-l);return{blockInset:d*m+c*(h*window.scrollY-p*window.scrollY)+u,blockOutOfBoundsCorrection:Math.abs(Math.min(0,n-m-u-t.height)),surfaceBlockProperty:"start"===s?"inset-block-start":"inset-block-end"}}calculateInline(e){const{isLTR:t,surfaceInline:o,anchorInline:i,anchorRect:s,surfaceRect:r,xOffset:a,positioning:n,windowInnerWidth:l,inlineScrollbarWidth:d}=e,c="fixed"===n||"document"===n?1:0,h="document"===n?1:0,p=t?1:0,u=t?0:1,m="start"===o?1:0,v="end"===o?1:0,b=(i!==o?1:0)*s.width+a,f=p*(m*s.left+v*(l-s.right-d))+u*(m*(l-s.right-d)+v*s.left);let y="start"===o?"inset-inline-start":"inset-inline-end";return"document"!==n&&"fixed"!==n||(y="start"===o&&t||"end"===o&&!t?"left":"right"),{inlineInset:c*f+b+h*(p*(m*window.scrollX-v*window.scrollX)+u*(v*window.scrollX-m*window.scrollX)),inlineOutOfBoundsCorrection:Math.abs(Math.min(0,l-f-b-r.width)),surfaceInlineProperty:y}}hostUpdate(){this.onUpdate()}hostUpdated(){this.onUpdate()}async onUpdate(){const e=this.getProperties();let t=!1;for(const[o,i]of Object.entries(e))if(t=t||i!==this.lastValues[o],t)break;const o=this.lastValues.isOpen!==e.isOpen,i=!!e.anchorEl,s=!!e.surfaceEl;t&&i&&s&&(this.lastValues.isOpen=e.isOpen,e.isOpen?(this.lastValues=e,await this.position(),e.onOpen()):o&&(await e.beforeClose(),this.close(),e.onClose()))}close(){this.surfaceStylesInternal={display:"none"},this.host.requestUpdate();const e=this.getProperties().surfaceEl;e?.popover&&e?.isConnected&&e.hidePopover()}}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const dt=0,ct=1,ht=2;class pt{constructor(e){this.getProperties=e,this.typeaheadRecords=[],this.typaheadBuffer="",this.cancelTypeaheadTimeout=0,this.isTypingAhead=!1,this.lastActiveRecord=null,this.onKeydown=e=>{this.isTypingAhead?this.typeahead(e):this.beginTypeahead(e)},this.endTypeahead=()=>{this.isTypingAhead=!1,this.typaheadBuffer="",this.typeaheadRecords=[]}}get items(){return this.getProperties().getItems()}get active(){return this.getProperties().active}beginTypeahead(e){this.active&&("Space"===e.code||"Enter"===e.code||e.code.startsWith("Arrow")||"Escape"===e.code||(this.isTypingAhead=!0,this.typeaheadRecords=this.items.map(((e,t)=>[t,e,e.typeaheadText.trim().toLowerCase()])),this.lastActiveRecord=this.typeaheadRecords.find((e=>0===e[ct].tabIndex))??null,this.lastActiveRecord&&(this.lastActiveRecord[ct].tabIndex=-1),this.typeahead(e)))}typeahead(e){if(e.defaultPrevented)return;if(clearTimeout(this.cancelTypeaheadTimeout),"Enter"===e.code||e.code.startsWith("Arrow")||"Escape"===e.code)return this.endTypeahead(),void(this.lastActiveRecord&&(this.lastActiveRecord[ct].tabIndex=-1));"Space"===e.code&&e.preventDefault(),this.cancelTypeaheadTimeout=setTimeout(this.endTypeahead,this.getProperties().typeaheadBufferTime),this.typaheadBuffer+=e.key.toLowerCase();const t=this.lastActiveRecord?this.lastActiveRecord[dt]:-1,o=this.typeaheadRecords.length,i=e=>(e[dt]+o-t)%o,s=this.typeaheadRecords.filter((e=>!e[ct].disabled&&e[ht].startsWith(this.typaheadBuffer))).sort(((e,t)=>i(e)-i(t)));if(0===s.length)return clearTimeout(this.cancelTypeaheadTimeout),this.lastActiveRecord&&(this.lastActiveRecord[ct].tabIndex=-1),void this.endTypeahead();const r=1===this.typaheadBuffer.length;let a;a=this.lastActiveRecord===s[0]&&r?s[1]??s[0]:s[0],this.lastActiveRecord&&(this.lastActiveRecord[ct].tabIndex=-1),this.lastActiveRecord=a,a[ct].tabIndex=0,a[ct].focus()}}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ut=new Set([Ge.ArrowDown,Ge.ArrowUp,Ge.Home,Ge.End]),mt=new Set([Ge.ArrowLeft,Ge.ArrowRight,...ut]);class vt extends me{get openDirection(){return"start"===this.menuCorner.split("-")[0]?"DOWN":"UP"}get anchorElement(){return this.anchor?this.getRootNode().querySelector(`#${this.anchor}`):this.currentAnchorElement}set anchorElement(e){this.currentAnchorElement=e,this.requestUpdate("anchorElement")}constructor(){super(),this.anchor="",this.positioning="absolute",this.quick=!1,this.hasOverflow=!1,this.open=!1,this.xOffset=0,this.yOffset=0,this.typeaheadDelay=200,this.anchorCorner=at,this.menuCorner=nt,this.stayOpenOnOutsideClick=!1,this.stayOpenOnFocusout=!1,this.skipRestoreFocus=!1,this.defaultFocus=st,this.typeaheadActive=!0,this.isSubmenu=!1,this.pointerPath=[],this.isRepositioning=!1,this.openCloseAnimationSignal=function(){let e=null;return{start:()=>(e?.abort(),e=new AbortController,e.signal),finish(){e=null}}}(),this.listController=new Ye({isItem:e=>e.hasAttribute("md-menu-item"),getPossibleItems:()=>this.slotItems,isRtl:()=>"rtl"===getComputedStyle(this).direction,deactivateItem:e=>{e.selected=!1,e.tabIndex=-1},activateItem:e=>{e.selected=!0,e.tabIndex=0},isNavigableKey:e=>{if(!this.isSubmenu)return mt.has(e);return e===("rtl"===getComputedStyle(this).direction?Ge.ArrowLeft:Ge.ArrowRight)||ut.has(e)}}),this.lastFocusedElement=null,this.typeaheadController=new pt((()=>({getItems:()=>this.items,typeaheadBufferTime:this.typeaheadDelay,active:this.typeaheadActive}))),this.currentAnchorElement=null,this.internals=this.attachInternals(),this.menuPositionController=new lt(this,(()=>({anchorCorner:this.anchorCorner,surfaceCorner:this.menuCorner,surfaceEl:this.surfaceEl,anchorEl:this.anchorElement,positioning:"popover"===this.positioning?"document":this.positioning,isOpen:this.open,xOffset:this.xOffset,yOffset:this.yOffset,onOpen:this.onOpened,beforeClose:this.beforeClose,onClose:this.onClosed,repositionStrategy:this.hasOverflow&&"popover"!==this.positioning?"move":"resize"}))),this.onWindowResize=()=>{this.isRepositioning||"document"!==this.positioning&&"fixed"!==this.positioning&&"popover"!==this.positioning||(this.isRepositioning=!0,this.reposition(),this.isRepositioning=!1)},this.handleFocusout=async e=>{const t=this.anchorElement;if(this.stayOpenOnFocusout||!this.open||this.pointerPath.includes(t))return;if(e.relatedTarget){if(tt(e.relatedTarget,this)||0!==this.pointerPath.length&&tt(e.relatedTarget,t))return}else if(this.pointerPath.includes(this))return;const o=this.skipRestoreFocus;this.skipRestoreFocus=!0,this.close(),await this.updateComplete,this.skipRestoreFocus=o},this.onOpened=async()=>{this.lastFocusedElement=function(e=document){let t=e.activeElement;for(;t&&t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;return t}();const e=this.items,t=Fe(e);t&&this.defaultFocus!==ot&&(t.item.tabIndex=-1);let o=!this.quick;switch(this.quick?this.dispatchEvent(new Event("opening")):o=!!await this.animateOpen(),this.defaultFocus){case st:const t=Ve(e);t&&(t.tabIndex=0,t.focus(),await t.updateComplete);break;case rt:const o=qe(e);o&&(o.tabIndex=0,o.focus(),await o.updateComplete);break;case it:this.focus()}o||this.dispatchEvent(new Event("opened"))},this.beforeClose=async()=>{this.open=!1,this.skipRestoreFocus||this.lastFocusedElement?.focus?.(),this.quick||await this.animateClose()},this.onClosed=()=>{this.quick&&(this.dispatchEvent(new Event("closing")),this.dispatchEvent(new Event("closed")))},this.onWindowPointerdown=e=>{this.pointerPath=e.composedPath()},this.onDocumentClick=e=>{if(!this.open)return;const t=e.composedPath();this.stayOpenOnOutsideClick||t.includes(this)||t.includes(this.anchorElement)||(this.open=!1)},this.internals.role="menu",this.addEventListener("keydown",this.handleKeydown),this.addEventListener("keydown",this.captureKeydown,{capture:!0}),this.addEventListener("focusout",this.handleFocusout)}get items(){return this.listController.items}willUpdate(e){e.has("open")&&(this.open?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true"))}update(e){e.has("open")&&(this.open?this.setUpGlobalEventListeners():this.cleanUpGlobalEventListeners()),e.has("positioning")&&"popover"===this.positioning&&!this.showPopover&&(this.positioning="fixed"),super.update(e)}connectedCallback(){super.connectedCallback(),this.open&&this.setUpGlobalEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.cleanUpGlobalEventListeners()}render(){return this.renderSurface()}renderSurface(){return Z`
      <div
        class="menu ${Te(this.getSurfaceClasses())}"
        style=${Ue(this.menuPositionController.surfaceStyles)}
        popover=${"popover"===this.positioning?"manual":Q}>
        ${this.renderElevation()}
        <div class="items">
          <div class="item-padding"> ${this.renderMenuItems()} </div>
        </div>
      </div>
    `}renderMenuItems(){return Z`<slot
      @close-menu=${this.onCloseMenu}
      @deactivate-items=${this.onDeactivateItems}
      @request-activation=${this.onRequestActivation}
      @deactivate-typeahead=${this.handleDeactivateTypeahead}
      @activate-typeahead=${this.handleActivateTypeahead}
      @stay-open-on-focusout=${this.handleStayOpenOnFocusout}
      @close-on-focusout=${this.handleCloseOnFocusout}
      @slotchange=${this.listController.onSlotchange}></slot>`}renderElevation(){return Z`<md-elevation part="elevation"></md-elevation>`}getSurfaceClasses(){return{open:this.open,fixed:"fixed"===this.positioning,"has-overflow":this.hasOverflow}}captureKeydown(e){e.target===this&&!e.defaultPrevented&&et(e.code)&&(e.preventDefault(),this.close()),this.typeaheadController.onKeydown(e)}async animateOpen(){const e=this.surfaceEl,t=this.slotEl;if(!e||!t)return!0;const o=this.openDirection;this.dispatchEvent(new Event("opening")),e.classList.toggle("animating",!0);const i=this.openCloseAnimationSignal.start(),s=e.offsetHeight,r="UP"===o,a=this.items,n=250/a.length,l=e.animate([{height:"0px"},{height:`${s}px`}],{duration:500,easing:Be}),d=t.animate([{transform:r?`translateY(-${s}px)`:""},{transform:""}],{duration:500,easing:Be}),c=e.animate([{opacity:0},{opacity:1}],50),h=[];for(let e=0;e<a.length;e++){const t=a[r?a.length-1-e:e],o=t.animate([{opacity:0},{opacity:1}],{duration:250,delay:n*e});t.classList.toggle("md-menu-hidden",!0),o.addEventListener("finish",(()=>{t.classList.toggle("md-menu-hidden",!1)})),h.push([t,o])}let p=e=>{};const u=new Promise((e=>{p=e}));return i.addEventListener("abort",(()=>{l.cancel(),d.cancel(),c.cancel(),h.forEach((([e,t])=>{e.classList.toggle("md-menu-hidden",!1),t.cancel()})),p(!0)})),l.addEventListener("finish",(()=>{e.classList.toggle("animating",!1),this.openCloseAnimationSignal.finish(),p(!1)})),await u}animateClose(){let e,t;const o=new Promise(((o,i)=>{e=o,t=i})),i=this.surfaceEl,s=this.slotEl;if(!i||!s)return t(),o;const r="UP"===this.openDirection;this.dispatchEvent(new Event("closing")),i.classList.toggle("animating",!0);const a=this.openCloseAnimationSignal.start(),n=i.offsetHeight,l=this.items,d=150,c=50/l.length,h=i.animate([{height:`${n}px`},{height:.35*n+"px"}],{duration:d,easing:De}),p=s.animate([{transform:""},{transform:r?`translateY(-${.65*n}px)`:""}],{duration:d,easing:De}),u=i.animate([{opacity:1},{opacity:0}],{duration:50,delay:100}),m=[];for(let e=0;e<l.length;e++){const t=l[r?e:l.length-1-e],o=t.animate([{opacity:1},{opacity:0}],{duration:50,delay:50+c*e});o.addEventListener("finish",(()=>{t.classList.toggle("md-menu-hidden",!0)})),m.push([t,o])}return a.addEventListener("abort",(()=>{h.cancel(),p.cancel(),u.cancel(),m.forEach((([e,t])=>{t.cancel(),e.classList.toggle("md-menu-hidden",!1)})),t()})),h.addEventListener("finish",(()=>{i.classList.toggle("animating",!1),m.forEach((([e])=>{e.classList.toggle("md-menu-hidden",!1)})),this.openCloseAnimationSignal.finish(),this.dispatchEvent(new Event("closed")),e(!0)})),o}handleKeydown(e){this.pointerPath=[],this.listController.handleKeydown(e)}setUpGlobalEventListeners(){document.addEventListener("click",this.onDocumentClick,{capture:!0}),window.addEventListener("pointerdown",this.onWindowPointerdown),document.addEventListener("resize",this.onWindowResize,{passive:!0}),window.addEventListener("resize",this.onWindowResize,{passive:!0})}cleanUpGlobalEventListeners(){document.removeEventListener("click",this.onDocumentClick,{capture:!0}),window.removeEventListener("pointerdown",this.onWindowPointerdown),document.removeEventListener("resize",this.onWindowResize),window.removeEventListener("resize",this.onWindowResize)}onCloseMenu(){this.close()}onDeactivateItems(e){e.stopPropagation(),this.listController.onDeactivateItems()}onRequestActivation(e){e.stopPropagation(),this.listController.onRequestActivation(e)}handleDeactivateTypeahead(e){e.stopPropagation(),this.typeaheadActive=!1}handleActivateTypeahead(e){e.stopPropagation(),this.typeaheadActive=!0}handleStayOpenOnFocusout(e){e.stopPropagation(),this.stayOpenOnFocusout=!0}handleCloseOnFocusout(e){e.stopPropagation(),this.stayOpenOnFocusout=!1}close(){this.open=!1;this.slotItems.forEach((e=>{e.close?.()}))}show(){this.open=!0}activateNextItem(){return this.listController.activateNextItem()??null}activatePreviousItem(){return this.listController.activatePreviousItem()??null}reposition(){this.open&&this.menuPositionController.position()}}e([S(".menu")],vt.prototype,"surfaceEl",void 0),e([S("slot")],vt.prototype,"slotEl",void 0),e([A()],vt.prototype,"anchor",void 0),e([A()],vt.prototype,"positioning",void 0),e([A({type:Boolean})],vt.prototype,"quick",void 0),e([A({type:Boolean,attribute:"has-overflow"})],vt.prototype,"hasOverflow",void 0),e([A({type:Boolean,reflect:!0})],vt.prototype,"open",void 0),e([A({type:Number,attribute:"x-offset"})],vt.prototype,"xOffset",void 0),e([A({type:Number,attribute:"y-offset"})],vt.prototype,"yOffset",void 0),e([A({type:Number,attribute:"typeahead-delay"})],vt.prototype,"typeaheadDelay",void 0),e([A({attribute:"anchor-corner"})],vt.prototype,"anchorCorner",void 0),e([A({attribute:"menu-corner"})],vt.prototype,"menuCorner",void 0),e([A({type:Boolean,attribute:"stay-open-on-outside-click"})],vt.prototype,"stayOpenOnOutsideClick",void 0),e([A({type:Boolean,attribute:"stay-open-on-focusout"})],vt.prototype,"stayOpenOnFocusout",void 0),e([A({type:Boolean,attribute:"skip-restore-focus"})],vt.prototype,"skipRestoreFocus",void 0),e([A({attribute:"default-focus"})],vt.prototype,"defaultFocus",void 0),e([P({flatten:!0})],vt.prototype,"slotItems",void 0),e([k()],vt.prototype,"typeaheadActive",void 0);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const bt=n`:host{--md-elevation-level: var(--md-menu-container-elevation, 2);--md-elevation-shadow-color: var(--md-menu-container-shadow-color, var(--md-sys-color-shadow, #000));min-width:112px;color:unset;display:contents}md-focus-ring{--md-focus-ring-shape: var(--md-menu-container-shape, 4px)}.menu{border-radius:var(--md-menu-container-shape, 4px);display:none;inset:auto;border:none;padding:0px;overflow:visible;background-color:rgba(0,0,0,0);color:inherit;opacity:0;z-index:20;position:absolute;user-select:none;max-height:inherit;height:inherit;min-width:inherit;max-width:inherit}.menu::backdrop{display:none}.fixed{position:fixed}.items{display:block;list-style-type:none;margin:0;outline:none;box-sizing:border-box;background-color:var(--md-menu-container-color, var(--md-sys-color-surface-container, #f3edf7));height:inherit;max-height:inherit;overflow:auto;min-width:inherit;max-width:inherit;border-radius:inherit}.item-padding{padding-block:8px}.has-overflow:not([popover]) .items{overflow:visible}.has-overflow.animating .items,.animating .items{overflow:hidden}.has-overflow.animating .items{pointer-events:none}.animating ::slotted(.md-menu-hidden){opacity:0}slot{display:block;height:inherit;max-height:inherit}::slotted(:is(md-divider,[role=separator])){margin:8px 0}@media(forced-colors: active){.menu{border-style:solid;border-color:CanvasText;border-width:1px}}/*# sourceMappingURL=menu-styles.css.map */
`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let ft=class extends vt{};ft.styles=[bt],ft=e([t("md-menu")],ft);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class yt extends me{constructor(){super(...arguments),this.multiline=!1}render(){return Z`
      <slot name="container"></slot>
      <slot class="non-text" name="start"></slot>
      <div class="text">
        <slot name="overline" @slotchange=${this.handleTextSlotChange}></slot>
        <slot
          class="default-slot"
          @slotchange=${this.handleTextSlotChange}></slot>
        <slot name="headline" @slotchange=${this.handleTextSlotChange}></slot>
        <slot
          name="supporting-text"
          @slotchange=${this.handleTextSlotChange}></slot>
      </div>
      <slot class="non-text" name="trailing-supporting-text"></slot>
      <slot class="non-text" name="end"></slot>
    `}handleTextSlotChange(){let e=!1,t=0;for(const o of this.textSlots)if(gt(o)&&(t+=1),t>1){e=!0;break}this.multiline=e}}function gt(e){for(const t of e.assignedNodes({flatten:!0})){const e=t.nodeType===Node.ELEMENT_NODE,o=t.nodeType===Node.TEXT_NODE&&t.textContent?.match(/\S/);if(e||o)return!0}return!1}
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */e([A({type:Boolean,reflect:!0})],yt.prototype,"multiline",void 0),e([function(e){return(t,o)=>I(t,o,{get(){return(this.renderRoot??(R??=document.createDocumentFragment())).querySelectorAll(e)}})}(".text slot")],yt.prototype,"textSlots",void 0);const xt=n`:host{color:var(--md-sys-color-on-surface, #1d1b20);font-family:var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-large-size, 1rem);font-weight:var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-large-line-height, 1.5rem);align-items:center;box-sizing:border-box;display:flex;gap:16px;min-height:56px;overflow:hidden;padding:12px 16px;position:relative;text-overflow:ellipsis}:host([multiline]){min-height:72px}[name=overline]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-medium-size, 0.875rem);font-weight:var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-medium-line-height, 1.25rem)}[name=trailing-supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=container]::slotted(*){inset:0;position:absolute}.default-slot{display:inline}.default-slot,.text ::slotted(*){overflow:hidden;text-overflow:ellipsis}.text{display:flex;flex:1;flex-direction:column;overflow:hidden}/*# sourceMappingURL=item-styles.css.map */
`
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let _t=class extends yt{};_t.styles=[xt],_t=e([t("md-item")],_t);var wt;!function(e){e[e.INACTIVE=0]="INACTIVE",e[e.TOUCH_DELAY=1]="TOUCH_DELAY",e[e.HOLDING=2]="HOLDING",e[e.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"}(wt||(wt={}));const Ct=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],$t=window.matchMedia("(forced-colors: active)");class Et extends me{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=wt.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new $e(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){const e={hovered:this.hovered,pressed:this.pressed};return Z`<div class="surface ${Te(e)}"></div>`}update(e){e.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(e)}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==wt.INACTIVE&&this.endPressAnimation())}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state!==wt.HOLDING)return this.state===wt.TOUCH_DELAY?(this.state=wt.WAITING_FOR_CLICK,void this.startPressAnimation(this.rippleStartEvent)):void 0;this.state=wt.WAITING_FOR_CLICK}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.rippleStartEvent=e,!this.isTouch(e))return this.state=wt.WAITING_FOR_CLICK,void this.startPressAnimation(e);this.checkBoundsAfterContextMenu&&!this.inBounds(e)||(this.checkBoundsAfterContextMenu=!1,this.state=wt.TOUCH_DELAY,await new Promise((e=>{setTimeout(e,150)})),this.state===wt.TOUCH_DELAY&&(this.state=wt.HOLDING,this.startPressAnimation(e)))}}handleClick(){this.disabled||(this.state!==wt.WAITING_FOR_CLICK?this.state===wt.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation()):this.endPressAnimation())}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){const{height:e,width:t}=this.getBoundingClientRect(),o=Math.max(e,t),i=Math.max(.35*o,75),s=Math.floor(.2*o),r=Math.sqrt(t**2+e**2)+10;this.initialSize=s,this.rippleScale=""+(r+i)/s,this.rippleSize=`${s}px`}getNormalizedPointerEventCoords(e){const{scrollX:t,scrollY:o}=window,{left:i,top:s}=this.getBoundingClientRect(),r=t+i,a=o+s,{pageX:n,pageY:l}=e;return{x:n-r,y:l-a}}getTranslationCoordinates(e){const{height:t,width:o}=this.getBoundingClientRect(),i={x:(o-this.initialSize)/2,y:(t-this.initialSize)/2};let s;return s=e instanceof PointerEvent?this.getNormalizedPointerEventCoords(e):{x:o/2,y:t/2},s={x:s.x-this.initialSize/2,y:s.y-this.initialSize/2},{startPoint:s,endPoint:i}}startPressAnimation(e){if(!this.mdRoot)return;this.pressed=!0,this.growAnimation?.cancel(),this.determineRippleSize();const{startPoint:t,endPoint:o}=this.getTranslationCoordinates(e),i=`${t.x}px, ${t.y}px`,s=`${o.x}px, ${o.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${i}) scale(1)`,`translate(${s}) scale(${this.rippleScale})`]},{pseudoElement:"::after",duration:450,easing:Me,fill:"forwards"})}async endPressAnimation(){this.rippleStartEvent=void 0,this.state=wt.INACTIVE;const e=this.growAnimation;let t=1/0;"number"==typeof e?.currentTime?t=e.currentTime:e?.currentTime&&(t=e.currentTime.to("ms").value),t>=225?this.pressed=!1:(await new Promise((e=>{setTimeout(e,225-t)})),this.growAnimation===e&&(this.pressed=!1))}shouldReactToEvent(e){if(this.disabled||!e.isPrimary)return!1;if(this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if("pointerenter"===e.type||"pointerleave"===e.type)return!this.isTouch(e);const t=1===e.buttons;return this.isTouch(e)||t}inBounds({x:e,y:t}){const{top:o,left:i,bottom:s,right:r}=this.getBoundingClientRect();return e>=i&&e<=r&&t>=o&&t<=s}isTouch({pointerType:e}){return"touch"===e}async handleEvent(e){if(!$t?.matches)switch(e.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(e);break;case"pointerdown":await this.handlePointerdown(e);break;case"pointerenter":this.handlePointerenter(e);break;case"pointerleave":this.handlePointerleave(e);break;case"pointerup":this.handlePointerup(e)}}onControlChange(e,t){for(const o of Ct)e?.removeEventListener(o,this),t?.addEventListener(o,this)}}e([A({type:Boolean,reflect:!0})],Et.prototype,"disabled",void 0),e([k()],Et.prototype,"hovered",void 0),e([k()],Et.prototype,"pressed",void 0),e([S(".surface")],Et.prototype,"mdRoot",void 0);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const At=n`:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}/*# sourceMappingURL=ripple-styles.css.map */
`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let kt=class extends Et{};kt.styles=[At],kt=e([t("md-ripple")],kt);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const It=Symbol.for(""),St=e=>{if(e?.r===It)return e?._$litStatic$},Rt=(e,...t)=>({_$litStatic$:t.reduce(((t,o,i)=>t+(e=>{if(void 0!==e._$litStatic$)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+e[i+1]),e[0]),r:It}),Pt=new Map,Ot=(e=>(t,...o)=>{const i=o.length;let s,r;const a=[],n=[];let l,d=0,c=!1;for(;d<i;){for(l=t[d];d<i&&void 0!==(r=o[d],s=St(r));)l+=s+t[++d],c=!0;d!==i&&n.push(r),a.push(l),d++}if(d===i&&a.push(t[i]),c){const e=a.join("$$lit$$");void 0===(t=Pt.get(e))&&(a.raw=a,Pt.set(e,t=a)),o=n}return e(t,...o)})(Z),Tt=["ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"];
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function zt(e){return e.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Lt(e){for(const t of Tt)e.createProperty(t,{attribute:zt(t),reflect:!0});e.addInitializer((e=>{const t={hostConnected(){e.setAttribute("role","presentation")}};e.addController(t)}))}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */Tt.map(zt);class Ut{constructor(e,t){this.host=e,this.internalTypeaheadText=null,this.onClick=()=>{this.host.keepOpen||this.host.dispatchEvent(Xe(this.host,{kind:Ze}))},this.onKeydown=e=>{if(this.host.href&&"Enter"===e.code){const e=this.getInteractiveElement();e instanceof HTMLAnchorElement&&e.click()}if(e.defaultPrevented)return;const t=e.code;this.host.keepOpen&&"Escape"!==t||et(t)&&(e.preventDefault(),this.host.dispatchEvent(Xe(this.host,{kind:Je,key:t})))},this.getHeadlineElements=t.getHeadlineElements,this.getSupportingTextElements=t.getSupportingTextElements,this.getDefaultElements=t.getDefaultElements,this.getInteractiveElement=t.getInteractiveElement,this.host.addController(this)}get typeaheadText(){if(null!==this.internalTypeaheadText)return this.internalTypeaheadText;const e=this.getHeadlineElements(),t=[];return e.forEach((e=>{e.textContent&&e.textContent.trim()&&t.push(e.textContent.trim())})),0===t.length&&this.getDefaultElements().forEach((e=>{e.textContent&&e.textContent.trim()&&t.push(e.textContent.trim())})),0===t.length&&this.getSupportingTextElements().forEach((e=>{e.textContent&&e.textContent.trim()&&t.push(e.textContent.trim())})),t.join(" ")}get tagName(){switch(this.host.type){case"link":return"a";case"button":return"button";default:return"li"}}get role(){return"option"===this.host.type?"option":"menuitem"}hostConnected(){this.host.toggleAttribute("md-menu-item",!0)}hostUpdate(){this.host.href&&(this.host.type="link")}setTypeaheadText(e){this.internalTypeaheadText=e}}
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Mt extends me{constructor(){super(...arguments),this.disabled=!1,this.type="menuitem",this.href="",this.target="",this.keepOpen=!1,this.selected=!1,this.menuItemController=new Ut(this,{getHeadlineElements:()=>this.headlineElements,getSupportingTextElements:()=>this.supportingTextElements,getDefaultElements:()=>this.defaultElements,getInteractiveElement:()=>this.listItemRoot})}get typeaheadText(){return this.menuItemController.typeaheadText}set typeaheadText(e){this.menuItemController.setTypeaheadText(e)}render(){return this.renderListItem(Z`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(e){const t="link"===this.type;let o;switch(this.menuItemController.tagName){case"a":o=Rt`a`;break;case"button":o=Rt`button`;break;default:o=Rt`li`}const i=t&&this.target?this.target:Q;return Ot`
      <${o}
        id="item"
        tabindex=${this.disabled&&!t?-1:0}
        role=${this.menuItemController.role}
        aria-label=${this.ariaLabel||Q}
        aria-selected=${this.ariaSelected||Q}
        aria-checked=${this.ariaChecked||Q}
        aria-expanded=${this.ariaExpanded||Q}
        aria-haspopup=${this.ariaHasPopup||Q}
        class="list-item ${Te(this.getRenderClasses())}"
        href=${this.href||Q}
        target=${i}
        @click=${this.menuItemController.onClick}
        @keydown=${this.menuItemController.onKeydown}
      >${e}</${o}>
    `}renderRipple(){return Z` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.disabled}></md-ripple>`}renderFocusRing(){return Z` <md-focus-ring
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`}getRenderClasses(){return{disabled:this.disabled,selected:this.selected}}renderBody(){return Z`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `}focus(){this.listItemRoot?.focus()}}Lt(Mt),Mt.shadowRootOptions={...me.shadowRootOptions,delegatesFocus:!0},e([A({type:Boolean,reflect:!0})],Mt.prototype,"disabled",void 0),e([A()],Mt.prototype,"type",void 0),e([A()],Mt.prototype,"href",void 0),e([A()],Mt.prototype,"target",void 0),e([A({type:Boolean,attribute:"keep-open"})],Mt.prototype,"keepOpen",void 0),e([A({type:Boolean})],Mt.prototype,"selected",void 0),e([S(".list-item")],Mt.prototype,"listItemRoot",void 0),e([P({slot:"headline"})],Mt.prototype,"headlineElements",void 0),e([P({slot:"supporting-text"})],Mt.prototype,"supportingTextElements",void 0),e([function(e){return(t,o)=>{const{slot:i}=e??{},s="slot"+(i?`[name=${i}]`:":not([name])");return I(t,o,{get(){const t=this.renderRoot?.querySelector(s);return t?.assignedNodes(e)??[]}})}}({slot:""})],Mt.prototype,"defaultElements",void 0),e([A({attribute:"typeahead-text"})],Mt.prototype,"typeaheadText",null);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const Bt=n`:host{display:flex;--md-ripple-hover-color: var(--md-menu-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-menu-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-menu-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-menu-item-pressed-state-layer-opacity, 0.12)}:host([disabled]){opacity:var(--md-menu-item-disabled-opacity, 0.3);pointer-events:none}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;max-width:inherit;min-width:inherit;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.list-item:not(.disabled){cursor:pointer}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;color:var(--md-menu-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-menu-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-menu-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-menu-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-menu-item-one-line-container-height, 56px);padding-top:var(--md-menu-item-top-space, 12px);padding-bottom:var(--md-menu-item-bottom-space, 12px);padding-inline-start:var(--md-menu-item-leading-space, 16px);padding-inline-end:var(--md-menu-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-menu-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-menu-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-menu-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-menu-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-menu-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-menu-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-menu-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-menu-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-menu-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-menu-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-menu-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}.list-item{background-color:var(--md-menu-item-container-color, transparent)}.list-item.selected{background-color:var(--md-menu-item-selected-container-color, var(--md-sys-color-secondary-container, #e8def8))}.selected:not(.disabled) ::slotted(*){color:var(--md-menu-item-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b))}@media(forced-colors: active){:host([disabled]),:host([disabled]) slot{color:GrayText;opacity:1}.list-item{position:relative}.list-item.selected::before{content:"";position:absolute;inset:0;box-sizing:border-box;border-radius:inherit;pointer-events:none;border:3px double CanvasText}}/*# sourceMappingURL=menu-item-styles.css.map */
`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let Dt=class extends Mt{};Dt.styles=[Bt],Dt=e([t("md-menu-item")],Dt);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const Nt=n`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);box-sizing:border-box;cursor:pointer;display:inline-flex;gap:8px;min-height:var(--_container-height);outline:none;padding-block:calc((var(--_container-height) - max(var(--_label-text-line-height),var(--_icon-size)))/2);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);place-content:center;place-items:center;position:relative;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);text-overflow:ellipsis;text-wrap:nowrap;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.button{border-radius:inherit;cursor:inherit;display:inline-flex;align-items:center;justify-content:center;border:none;outline:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;min-width:calc(64px - var(--_leading-space) - var(--_trailing-space));width:100%;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding:0;gap:inherit}.button::-moz-focus-inner{padding:0;border:0}:host(:hover) .button{color:var(--_hover-label-text-color)}:host(:focus-within) .button{color:var(--_focus-label-text-color)}:host(:active) .button{color:var(--_pressed-label-text-color)}.background{background-color:var(--_container-color);border-radius:inherit;inset:0;position:absolute}.label{overflow:hidden}:is(.button,.label,.label slot),.label ::slotted(*){text-overflow:inherit}:host([disabled]) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}:host([disabled]) .background{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.background{border:1px solid CanvasText}:host([disabled]){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-color: GrayText;--_disabled-label-text-opacity: 1}}:host([has-icon]:not([trailing-icon])){padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}:host([has-icon][trailing-icon]){padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;flex-shrink:0;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus-within) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host([disabled]) ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}:host([touch-target=none]) .touch{display:none}/*# sourceMappingURL=shared-styles.css.map */
`
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */,Ht=Symbol("internals"),Ft=Symbol("privateInternals");function Vt(e){return class extends e{get[Ht](){return this[Ft]||(this[Ft]=this.attachInternals()),this[Ft]}}}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function qt(e){e.addInitializer((e=>{const t=e;t.addEventListener("click",(async e=>{const{type:o,[Ht]:i}=t,{form:s}=i;s&&"button"!==o&&(await new Promise((e=>{setTimeout(e)})),e.defaultPrevented||("reset"!==o?(s.addEventListener("submit",(e=>{Object.defineProperty(e,"submitter",{configurable:!0,enumerable:!0,get:()=>t})}),{capture:!0,once:!0}),i.setFormValue(t.value),s.requestSubmit()):s.reset()))}))}))}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Wt(e){return e.currentTarget===e.target&&(e.composedPath()[0]===e.target&&(!e.target.disabled&&!function(e){const t=jt;t&&(e.preventDefault(),e.stopImmediatePropagation());return async function(){jt=!0,await null,jt=!1}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */(),t}(e)))}let jt=!1;const Kt=Vt(me);class Gt extends Kt{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[Ht].form}constructor(){super(),this.disabled=!1,this.href="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this.handleActivationClick=e=>{Wt(e)&&this.buttonElement&&(this.focus(),function(e){const t=new MouseEvent("click",{bubbles:!0});e.dispatchEvent(t)}(this.buttonElement))},this.addEventListener("click",this.handleActivationClick)}focus(){this.buttonElement?.focus()}blur(){this.buttonElement?.blur()}render(){const e=this.disabled&&!this.href,t=this.href?this.renderLink():this.renderButton(),o=this.href?"link":"button";return Z`
      ${this.renderElevationOrOutline?.()}
      <div class="background"></div>
      <md-focus-ring part="focus-ring" for=${o}></md-focus-ring>
      <md-ripple for=${o} ?disabled="${e}"></md-ripple>
      ${t}
    `}renderButton(){const{ariaLabel:e,ariaHasPopup:t,ariaExpanded:o}=this;return Z`<button
      id="button"
      class="button"
      ?disabled=${this.disabled}
      aria-label="${e||Q}"
      aria-haspopup="${t||Q}"
      aria-expanded="${o||Q}">
      ${this.renderContent()}
    </button>`}renderLink(){const{ariaLabel:e,ariaHasPopup:t,ariaExpanded:o}=this;return Z`<a
      id="link"
      class="button"
      aria-label="${e||Q}"
      aria-haspopup="${t||Q}"
      aria-expanded="${o||Q}"
      href=${this.href}
      target=${this.target||Q}
      >${this.renderContent()}
    </a>`}renderContent(){const e=Z`<slot
      name="icon"
      @slotchange="${this.handleSlotChange}"></slot>`;return Z`
      <span class="touch"></span>
      ${this.trailingIcon?Q:e}
      <span class="label"><slot></slot></span>
      ${this.trailingIcon?e:Q}
    `}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}Lt(Gt),qt(Gt),Gt.formAssociated=!0,Gt.shadowRootOptions={mode:"open",delegatesFocus:!0},e([A({type:Boolean,reflect:!0})],Gt.prototype,"disabled",void 0),e([A()],Gt.prototype,"href",void 0),e([A()],Gt.prototype,"target",void 0),e([A({type:Boolean,attribute:"trailing-icon",reflect:!0})],Gt.prototype,"trailingIcon",void 0),e([A({type:Boolean,attribute:"has-icon",reflect:!0})],Gt.prototype,"hasIcon",void 0),e([A()],Gt.prototype,"type",void 0),e([A({reflect:!0})],Gt.prototype,"value",void 0),e([S(".button")],Gt.prototype,"buttonElement",void 0),e([P({slot:"icon",flatten:!0})],Gt.prototype,"assignedIcons",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Yt extends Gt{}
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Xt=n`:host{--_container-height: var(--md-text-button-container-height, 40px);--_container-shape: var(--md-text-button-container-shape, 9999px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-text-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-text-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-text-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-text-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0;--_container-shape-start-start: var( --md-text-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-text-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-text-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-text-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=text-styles.css.map */
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let Zt=class extends Yt{};Zt.styles=[Nt,Xt],Zt=e([t("md-text-button")],Zt);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Jt extends Gt{renderElevationOrOutline(){return Z`<md-elevation></md-elevation>`}}
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Qt=n`:host{--_container-color: var(--md-filled-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-elevation: var(--md-filled-button-container-elevation, 0);--_container-height: var(--md-filled-button-container-height, 40px);--_container-shadow-color: var(--md-filled-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-filled-button-container-shape, 9999px);--_disabled-container-color: var(--md-filled-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-button-focus-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-container-elevation: var(--md-filled-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-button-hover-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-button-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-filled-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-button-pressed-label-text-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-color: var(--md-filled-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_leading-space: var(--md-filled-button-leading-space, 24px);--_trailing-space: var(--md-filled-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-button-with-trailing-icon-trailing-space, 16px);--_container-shape-start-start: var( --md-filled-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filled-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filled-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filled-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=filled-styles.css.map */
`
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */,eo=n`md-elevation{transition-duration:280ms}:host([disabled]) md-elevation{transition:none}md-elevation{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}:host(:focus-within) md-elevation{--md-elevation-level: var(--_focus-container-elevation)}:host(:hover) md-elevation{--md-elevation-level: var(--_hover-container-elevation)}:host(:active) md-elevation{--md-elevation-level: var(--_pressed-container-elevation)}:host([disabled]) md-elevation{--md-elevation-level: var(--_disabled-container-elevation)}/*# sourceMappingURL=shared-elevation-styles.css.map */
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let to=class extends Jt{};
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function oo(e,t=!0){return t&&"rtl"===getComputedStyle(e).getPropertyValue("direction").trim()}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */to.styles=[Nt,eo,Qt],to=e([t("md-filled-button")],to);const io=Vt(me);class so extends io{constructor(){super(...arguments),this.disabled=!1,this.flipIconInRtl=!1,this.href="",this.target="",this.ariaLabelSelected="",this.toggle=!1,this.selected=!1,this.type="submit",this.value="",this.flipIcon=oo(this,this.flipIconInRtl)}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[Ht].form}get labels(){return this[Ht].labels}willUpdate(){this.href&&(this.disabled=!1)}render(){const e=this.href?Rt`div`:Rt`button`,{ariaLabel:t,ariaHasPopup:o,ariaExpanded:i}=this,s=t&&this.ariaLabelSelected,r=this.toggle?this.selected:Q;let a=Q;return this.href||(a=s&&this.selected?this.ariaLabelSelected:t),Ot`<${e}
        class="icon-button ${Te(this.getRenderClasses())}"
        id="button"
        aria-label="${a||Q}"
        aria-haspopup="${!this.href&&o||Q}"
        aria-expanded="${!this.href&&i||Q}"
        aria-pressed="${r}"
        ?disabled="${!this.href&&this.disabled}"
        @click="${this.handleClick}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.selected?Q:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():Q}
        ${this.renderTouchTarget()}
        ${this.href&&this.renderLink()}
  </${e}>`}renderLink(){const{ariaLabel:e}=this;return Z`
      <a
        class="link"
        id="link"
        href="${this.href}"
        target="${this.target||Q}"
        aria-label="${e||Q}"></a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return Z`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return Z`<span class="icon icon--selected"
      ><slot name="selected"><slot></slot></slot
    ></span>`}renderTouchTarget(){return Z`<span class="touch"></span>`}renderFocusRing(){return Z`<md-focus-ring
      part="focus-ring"
      for=${this.href?"link":"button"}></md-focus-ring>`}renderRipple(){return Z`<md-ripple
      for=${this.href?"link":Q}
      ?disabled="${!this.href&&this.disabled}"></md-ripple>`}connectedCallback(){this.flipIcon=oo(this,this.flipIconInRtl),super.connectedCallback()}async handleClick(e){await 0,!this.toggle||this.disabled||e.defaultPrevented||(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}}Lt(so),qt(so),so.formAssociated=!0,so.shadowRootOptions={mode:"open",delegatesFocus:!0},e([A({type:Boolean,reflect:!0})],so.prototype,"disabled",void 0),e([A({type:Boolean,attribute:"flip-icon-in-rtl"})],so.prototype,"flipIconInRtl",void 0),e([A()],so.prototype,"href",void 0),e([A()],so.prototype,"target",void 0),e([A({attribute:"aria-label-selected"})],so.prototype,"ariaLabelSelected",void 0),e([A({type:Boolean})],so.prototype,"toggle",void 0),e([A({type:Boolean,reflect:!0})],so.prototype,"selected",void 0),e([A()],so.prototype,"type",void 0),e([A({reflect:!0})],so.prototype,"value",void 0),e([k()],so.prototype,"flipIcon",void 0);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const ro=n`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media(forced-colors: active){:host([disabled]){--_disabled-icon-opacity: 1}}/*# sourceMappingURL=shared-styles.css.map */
`
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */,ao=n`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-height: var(--md-icon-button-state-layer-height, 40px);--_state-layer-shape: var(--md-icon-button-state-layer-shape, 9999px);--_state-layer-width: var(--md-icon-button-state-layer-width, 40px);--_focus-icon-color: var(--md-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-icon-button-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-icon-button-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: 0;--_container-shape-start-end: 0;--_container-shape-end-end: 0;--_container-shape-end-start: 0;--_container-height: 0;--_container-width: 0;height:var(--_state-layer-height);width:var(--_state-layer-width)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_state-layer-height))/2) max(0px,(48px - var(--_state-layer-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_state-layer-shape);--md-focus-ring-shape-start-end: var(--_state-layer-shape);--md-focus-ring-shape-end-end: var(--_state-layer-shape);--md-focus-ring-shape-end-start: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.standard:hover{color:var(--_hover-icon-color)}.standard:focus{color:var(--_focus-icon-color)}.standard:active{color:var(--_pressed-icon-color)}.standard:disabled{color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:disabled .icon{opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}/*# sourceMappingURL=standard-styles.css.map */
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let no=class extends so{getRenderClasses(){return{...super.getRenderClasses(),standard:!0}}};no.styles=[ro,ao],no=e([t("md-icon-button")],no);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class lo extends Gt{renderElevationOrOutline(){return Z`<div class="outline"></div>`}}
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const co=n`:host{--_container-height: var(--md-outlined-button-container-height, 40px);--_container-shape: var(--md-outlined-button-container-shape, 9999px);--_disabled-label-text-color: var(--md-outlined-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-button-disabled-label-text-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-button-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-outlined-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-outlined-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-outlined-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-outlined-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-outlined-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-outlined-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-outlined-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-outlined-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_outline-color: var(--md-outlined-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-button-outline-width, 1px);--_pressed-label-text-color: var(--md-outlined-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-outline-color: var(--md-outlined-button-pressed-outline-color, var(--md-sys-color-outline, #79747e));--_pressed-state-layer-color: var(--md-outlined-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-outlined-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-outlined-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-outlined-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-outlined-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-outlined-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-outlined-button-icon-size, 18px);--_pressed-icon-color: var(--md-outlined-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-space: var(--md-outlined-button-leading-space, 24px);--_trailing-space: var(--md-outlined-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-outlined-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-outlined-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-outlined-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-outlined-button-with-trailing-icon-trailing-space, 16px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0;--_container-shape-start-start: var( --md-outlined-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-outlined-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-outlined-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-outlined-button-container-shape-end-start, var(--_container-shape) )}.outline{inset:0;border-style:solid;position:absolute;box-sizing:border-box;border-color:var(--_outline-color);border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}:host(:active) .outline{border-color:var(--_pressed-outline-color)}:host([disabled]) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}@media(forced-colors: active){:host([disabled]) .background{border-color:GrayText}:host([disabled]) .outline{opacity:1}}.outline,md-ripple{border-width:var(--_outline-width)}md-ripple{inline-size:calc(100% - 2*var(--_outline-width));block-size:calc(100% - 2*var(--_outline-width));border-style:solid;border-color:rgba(0,0,0,0)}/*# sourceMappingURL=outlined-styles.css.map */
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let ho=class extends lo{};ho.styles=[Nt,co],ho=e([t("md-outlined-button")],ho);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class po extends Gt{renderElevationOrOutline(){return Z`<md-elevation></md-elevation>`}}
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const uo=n`:host{--_container-color: var(--md-filled-tonal-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-elevation: var(--md-filled-tonal-button-container-elevation, 0);--_container-height: var(--md-filled-tonal-button-container-height, 40px);--_container-shadow-color: var(--md-filled-tonal-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-filled-tonal-button-container-shape, 9999px);--_disabled-container-color: var(--md-filled-tonal-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-tonal-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-tonal-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-tonal-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-tonal-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-tonal-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-tonal-button-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-container-elevation: var(--md-filled-tonal-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-tonal-button-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-filled-tonal-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-filled-tonal-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-tonal-button-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_label-text-font: var(--md-filled-tonal-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-tonal-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-tonal-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-tonal-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-tonal-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-tonal-button-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-filled-tonal-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filled-tonal-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-tonal-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-tonal-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-tonal-button-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-icon-color: var(--md-filled-tonal-button-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-color: var(--md-filled-tonal-button-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-size: var(--md-filled-tonal-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-tonal-button-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_leading-space: var(--md-filled-tonal-button-leading-space, 24px);--_trailing-space: var(--md-filled-tonal-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-tonal-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-tonal-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-tonal-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-tonal-button-with-trailing-icon-trailing-space, 16px);--_container-shape-start-start: var( --md-filled-tonal-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filled-tonal-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filled-tonal-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filled-tonal-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=filled-tonal-styles.css.map */
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let mo=class extends po{};mo.styles=[Nt,eo,uo],mo=e([t("md-filled-tonal-button")],mo);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const vo=n`:host{--_container-color: var(--md-filled-tonal-icon-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-height: var(--md-filled-tonal-icon-button-container-height, 40px);--_container-shape: var(--md-filled-tonal-icon-button-container-shape, 9999px);--_container-width: var(--md-filled-tonal-icon-button-container-width, 40px);--_disabled-container-color: var(--md-filled-tonal-icon-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-tonal-icon-button-disabled-container-opacity, 0.12);--_disabled-icon-color: var(--md-filled-tonal-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-tonal-icon-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-tonal-icon-button-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-icon-color: var(--md-filled-tonal-icon-button-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-filled-tonal-icon-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-filled-tonal-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-filled-tonal-icon-button-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-size: var(--md-filled-tonal-icon-button-icon-size, 24px);--_pressed-icon-color: var(--md-filled-tonal-icon-button-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-filled-tonal-icon-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filled-tonal-icon-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-filled-tonal-icon-button-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_toggle-selected-focus-icon-color: var(--md-filled-tonal-icon-button-toggle-selected-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-hover-icon-color: var(--md-filled-tonal-icon-button-toggle-selected-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-hover-state-layer-color: var(--md-filled-tonal-icon-button-toggle-selected-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-icon-color: var(--md-filled-tonal-icon-button-toggle-selected-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-pressed-icon-color: var(--md-filled-tonal-icon-button-toggle-selected-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-pressed-state-layer-color: var(--md-filled-tonal-icon-button-toggle-selected-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_unselected-container-color: var(--md-filled-tonal-icon-button-unselected-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_toggle-focus-icon-color: var(--md-filled-tonal-icon-button-toggle-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-hover-icon-color: var(--md-filled-tonal-icon-button-toggle-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-hover-state-layer-color: var(--md-filled-tonal-icon-button-toggle-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-icon-color: var(--md-filled-tonal-icon-button-toggle-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-pressed-icon-color: var(--md-filled-tonal-icon-button-toggle-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-pressed-state-layer-color: var(--md-filled-tonal-icon-button-toggle-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_container-shape-start-start: var( --md-filled-tonal-icon-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filled-tonal-icon-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filled-tonal-icon-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filled-tonal-icon-button-container-shape-end-start, var(--_container-shape) )}.icon-button{color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.icon-button:hover{color:var(--_hover-icon-color)}.icon-button:focus{color:var(--_focus-icon-color)}.icon-button:active{color:var(--_pressed-icon-color)}.icon-button:disabled{color:var(--_disabled-icon-color)}.icon-button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute;z-index:-1}.icon-button:disabled::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.icon-button:disabled .icon{opacity:var(--_disabled-icon-opacity)}.toggle-filled-tonal{--md-ripple-hover-color: var(--_toggle-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-pressed-state-layer-color)}.toggle-filled-tonal:not(:disabled){color:var(--_toggle-icon-color)}.toggle-filled-tonal:not(:disabled):hover{color:var(--_toggle-hover-icon-color)}.toggle-filled-tonal:not(:disabled):focus{color:var(--_toggle-focus-icon-color)}.toggle-filled-tonal:not(:disabled):active{color:var(--_toggle-pressed-icon-color)}.toggle-filled-tonal:not(:disabled)::before{background-color:var(--_unselected-container-color)}.selected{--md-ripple-hover-color: var(--_toggle-selected-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-selected-pressed-state-layer-color)}.selected:not(:disabled){color:var(--_toggle-selected-icon-color)}.selected:not(:disabled):hover{color:var(--_toggle-selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_toggle-selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_toggle-selected-pressed-icon-color)}.selected:not(:disabled)::before{background-color:var(--_selected-container-color)}/*# sourceMappingURL=filled-tonal-styles.css.map */
`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let bo=class extends so{getRenderClasses(){return{...super.getRenderClasses(),"filled-tonal":!0,"toggle-filled-tonal":this.toggle}}};bo.styles=[ro,vo],bo=e([t("md-filled-tonal-icon-button")],bo);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class fo extends Gt{renderElevationOrOutline(){return Z`<md-elevation></md-elevation>`}}
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const yo=n`:host{--_container-color: var(--md-elevated-button-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_container-elevation: var(--md-elevated-button-container-elevation, 1);--_container-height: var(--md-elevated-button-container-height, 40px);--_container-shadow-color: var(--md-elevated-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-elevated-button-container-shape, 9999px);--_disabled-container-color: var(--md-elevated-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-elevated-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-elevated-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-elevated-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-elevated-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-elevated-button-focus-container-elevation, 1);--_focus-label-text-color: var(--md-elevated-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-container-elevation: var(--md-elevated-button-hover-container-elevation, 2);--_hover-label-text-color: var(--md-elevated-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-elevated-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-elevated-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-elevated-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-elevated-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-elevated-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-elevated-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-elevated-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-elevated-button-pressed-container-elevation, 1);--_pressed-label-text-color: var(--md-elevated-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-elevated-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-elevated-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-elevated-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-elevated-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-elevated-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-elevated-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-elevated-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-elevated-button-icon-size, 18px);--_pressed-icon-color: var(--md-elevated-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-space: var(--md-elevated-button-leading-space, 24px);--_trailing-space: var(--md-elevated-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-elevated-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-elevated-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-elevated-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-elevated-button-with-trailing-icon-trailing-space, 16px);--_container-shape-start-start: var( --md-elevated-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-elevated-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-elevated-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-elevated-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=elevated-styles.css.map */
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let go=class extends fo{};go.styles=[Nt,eo,yo],go=e([t("md-elevated-button")],go);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const xo=new Set(Object.values(Ge));class _o extends me{get items(){return this.listController.items}constructor(){super(),this.listController=new Ye({isItem:e=>e.hasAttribute("md-list-item"),getPossibleItems:()=>this.slotItems,isRtl:()=>"rtl"===getComputedStyle(this).direction,deactivateItem:e=>{e.tabIndex=-1},activateItem:e=>{e.tabIndex=0},isNavigableKey:e=>xo.has(e),isActivatable:e=>!e.disabled&&"text"!==e.type}),this.internals=this.attachInternals(),this.internals.role="list",this.addEventListener("keydown",this.listController.handleKeydown)}render(){return Z`
      <slot
        @deactivate-items=${this.listController.onDeactivateItems}
        @request-activation=${this.listController.onRequestActivation}
        @slotchange=${this.listController.onSlotchange}>
      </slot>
    `}activateNextItem(){return this.listController.activateNextItem()}activatePreviousItem(){return this.listController.activatePreviousItem()}}e([P({flatten:!0})],_o.prototype,"slotItems",void 0);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const wo=n`:host{background:var(--md-list-container-color, var(--md-sys-color-surface, #fef7ff));color:unset;display:flex;flex-direction:column;outline:none;padding:8px 0;position:relative}/*# sourceMappingURL=list-styles.css.map */
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let Co=class extends _o{};Co.styles=[wo],Co=e([t("md-list")],Co);
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class $o extends me{constructor(){super(...arguments),this.disabled=!1,this.type="text",this.isListItem=!0,this.href="",this.target=""}get isDisabled(){return this.disabled&&"link"!==this.type}willUpdate(e){this.href&&(this.type="link"),super.willUpdate(e)}render(){return this.renderListItem(Z`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(e){const t="link"===this.type;let o;switch(this.type){case"link":o=Rt`a`;break;case"button":o=Rt`button`;break;default:o=Rt`li`}const i="text"!==this.type,s=t&&this.target?this.target:Q;return Ot`
      <${o}
        id="item"
        tabindex="${this.isDisabled||!i?-1:0}"
        ?disabled=${this.isDisabled}
        role="listitem"
        aria-selected=${this.ariaSelected||Q}
        aria-checked=${this.ariaChecked||Q}
        aria-expanded=${this.ariaExpanded||Q}
        aria-haspopup=${this.ariaHasPopup||Q}
        class="list-item ${Te(this.getRenderClasses())}"
        href=${this.href||Q}
        target=${s}
        @focus=${this.onFocus}
      >${e}</${o}>
    `}renderRipple(){return"text"===this.type?Q:Z` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.isDisabled}></md-ripple>`}renderFocusRing(){return"text"===this.type?Q:Z` <md-focus-ring
      @visibility-changed=${this.onFocusRingVisibilityChanged}
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`}onFocusRingVisibilityChanged(e){}getRenderClasses(){return{disabled:this.isDisabled}}renderBody(){return Z`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `}onFocus(){-1===this.tabIndex&&this.dispatchEvent(new Event("request-activation",{bubbles:!0,composed:!0}))}focus(){this.listItemRoot?.focus()}}Lt($o),$o.shadowRootOptions={...me.shadowRootOptions,delegatesFocus:!0},e([A({type:Boolean,reflect:!0})],$o.prototype,"disabled",void 0),e([A({reflect:!0})],$o.prototype,"type",void 0),e([A({type:Boolean,attribute:"md-list-item",reflect:!0})],$o.prototype,"isListItem",void 0),e([A()],$o.prototype,"href",void 0),e([A()],$o.prototype,"target",void 0),e([S(".list-item")],$o.prototype,"listItemRoot",void 0);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const Eo=n`:host{display:flex;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-ripple-hover-color: var(--md-list-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-list-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-list-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-list-item-pressed-state-layer-opacity, 0.12)}:host(:is([type=button]:not([disabled]),[type=link])){cursor:pointer}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;cursor:inherit;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;max-width:inherit;min-width:inherit;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%}.list-item.interactive{cursor:pointer}.list-item.disabled{opacity:var(--md-list-item-disabled-opacity, 0.3);pointer-events:none}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;height:100%;color:var(--md-list-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-list-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-list-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-list-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-list-item-one-line-container-height, 56px);padding-top:var(--md-list-item-top-space, 12px);padding-bottom:var(--md-list-item-bottom-space, 12px);padding-inline-start:var(--md-list-item-leading-space, 16px);padding-inline-end:var(--md-list-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-list-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-list-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-list-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-list-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-list-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-list-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-list-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-list-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-list-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}@media(forced-colors: active){.disabled slot{color:GrayText}.list-item.disabled{color:GrayText;opacity:1}}/*# sourceMappingURL=list-item-styles.css.map */
`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let Ao=class extends $o{};Ao.styles=[Eo],Ao=e([t("md-list-item")],Ao);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ko extends me{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}}e([A({type:Boolean,reflect:!0})],ko.prototype,"inset",void 0),e([A({type:Boolean,reflect:!0,attribute:"inset-start"})],ko.prototype,"insetStart",void 0),e([A({type:Boolean,reflect:!0,attribute:"inset-end"})],ko.prototype,"insetEnd",void 0);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const Io=n`:host{box-sizing:border-box;color:var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));display:flex;height:var(--md-divider-thickness, 1px);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}/*# sourceMappingURL=divider-styles.css.map */
`
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let So=class extends ko{};So.styles=[Io],So=e([t("md-divider")],So);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Ro={dialog:[[[{transform:"translateY(-50px)"},{transform:"translateY(0)"}],{duration:500,easing:Be}]],scrim:[[[{opacity:0},{opacity:.32}],{duration:500,easing:"linear"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}],[[{height:"35%"},{height:"100%"}],{duration:500,easing:Be,pseudoElement:"::before"}]],headline:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],content:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:300,easing:"linear",fill:"forwards"}]]},Po={dialog:[[[{transform:"translateY(0)"},{transform:"translateY(-50px)"}],{duration:150,easing:De}]],scrim:[[[{opacity:.32},{opacity:0}],{duration:150,easing:"linear"}]],container:[[[{height:"100%"},{height:"35%"}],{duration:150,easing:De,pseudoElement:"::before"}],[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]],headline:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],content:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]]};
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Oo extends me{get open(){return this.isOpen}set open(e){e!==this.isOpen&&(this.isOpen=e,e?(this.setAttribute("open",""),this.show()):(this.removeAttribute("open"),this.close()))}constructor(){super(),this.returnValue="",this.getOpenAnimation=()=>Ro,this.getCloseAnimation=()=>Po,this.isOpen=!1,this.isOpening=!1,this.isConnectedPromise=this.getIsConnectedPromise(),this.isAtScrollTop=!1,this.isAtScrollBottom=!1,this.nextClickIsFromContent=!1,this.hasHeadline=!1,this.hasActions=!1,this.hasIcon=!1,this.escapePressedWithoutCancel=!1,this.addEventListener("submit",this.handleSubmit),this.addEventListener("focus",(()=>{this.dialog?.focus()})),this.addEventListener("blur",(()=>{this.dialog?.blur()}))}async show(){this.isOpening=!0,await this.isConnectedPromise,await this.updateComplete;const e=this.dialog;if(e.open||!this.isOpening)return void(this.isOpening=!1);this.dispatchEvent(new Event("open",{cancelable:!0}))?(e.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),this.querySelector("[autofocus]")?.focus(),await this.animateDialog(this.getOpenAnimation()),this.dispatchEvent(new Event("opened")),this.isOpening=!1):this.open=!1}async close(e=this.returnValue){if(this.isOpening=!1,!this.isConnected)return void(this.open=!1);await this.updateComplete;const t=this.dialog;if(!t.open||this.isOpening)return void(this.open=!1);const o=this.returnValue;this.returnValue=e;this.dispatchEvent(new Event("close",{cancelable:!0}))?(await this.animateDialog(this.getCloseAnimation()),t.close(e),this.open=!1,this.dispatchEvent(new Event("closed"))):this.returnValue=o}connectedCallback(){super.connectedCallback(),this.isConnectedPromiseResolve()}disconnectedCallback(){super.disconnectedCallback(),this.isConnectedPromise=this.getIsConnectedPromise()}render(){const e=this.open&&!(this.isAtScrollTop&&this.isAtScrollBottom),t={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon,scrollable:e,"show-top-divider":e&&!this.isAtScrollTop,"show-bottom-divider":e&&!this.isAtScrollBottom},{ariaLabel:o}=this;return Z`
      <div class="scrim"></div>
      <dialog
        class=${Te(t)}
        aria-label=${o||Q}
        aria-labelledby=${this.hasHeadline?"headline":Q}
        role=${"alert"===this.type?"alertdialog":Q}
        @cancel=${this.handleCancel}
        @click=${this.handleDialogClick}
        @close=${this.handleClose}
        @keydown=${this.handleKeydown}
        .returnValue=${this.returnValue||Q}>
        <div class="container" @click=${this.handleContentClick}>
          <div class="headline">
            <div class="icon" aria-hidden="true">
              <slot name="icon" @slotchange=${this.handleIconChange}></slot>
            </div>
            <h2 id="headline" aria-hidden=${!this.hasHeadline||Q}>
              <slot
                name="headline"
                @slotchange=${this.handleHeadlineChange}></slot>
            </h2>
            <md-divider></md-divider>
          </div>
          <div class="scroller">
            <div class="content">
              <div class="top anchor"></div>
              <slot name="content"></slot>
              <div class="bottom anchor"></div>
            </div>
          </div>
          <div class="actions">
            <md-divider></md-divider>
            <slot name="actions" @slotchange=${this.handleActionsChange}></slot>
          </div>
        </div>
      </dialog>
    `}firstUpdated(){this.intersectionObserver=new IntersectionObserver((e=>{for(const t of e)this.handleAnchorIntersection(t)}),{root:this.scroller}),this.intersectionObserver.observe(this.topAnchor),this.intersectionObserver.observe(this.bottomAnchor)}handleDialogClick(){if(this.nextClickIsFromContent)return void(this.nextClickIsFromContent=!1);!this.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.close()}handleContentClick(){this.nextClickIsFromContent=!0}handleSubmit(e){const t=e.target,{submitter:o}=e;"dialog"===t.method&&o&&this.close(o.getAttribute("value")??this.returnValue)}handleCancel(e){if(e.target!==this.dialog)return;this.escapePressedWithoutCancel=!1;const t=!
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function(e,t){!t.bubbles||e.shadowRoot&&!t.composed||t.stopPropagation();const o=Reflect.construct(t.constructor,[t.type,t]),i=e.dispatchEvent(o);return i||t.preventDefault(),i}(this,e);e.preventDefault(),t||this.close()}handleClose(){this.escapePressedWithoutCancel&&(this.escapePressedWithoutCancel=!1,this.dialog?.dispatchEvent(new Event("cancel",{cancelable:!0})))}handleKeydown(e){"Escape"===e.key&&(this.escapePressedWithoutCancel=!0,setTimeout((()=>{this.escapePressedWithoutCancel=!1})))}async animateDialog(e){const{dialog:t,scrim:o,container:i,headline:s,content:r,actions:a}=this;if(!(t&&o&&i&&s&&r&&a))return;const{container:n,dialog:l,scrim:d,headline:c,content:h,actions:p}=e,u=[[t,l??[]],[o,d??[]],[i,n??[]],[s,c??[]],[r,h??[]],[a,p??[]]],m=[];for(const[e,t]of u)for(const o of t)m.push(e.animate(...o));await Promise.all(m.map((e=>e.finished)))}handleHeadlineChange(e){const t=e.target;this.hasHeadline=t.assignedElements().length>0}handleActionsChange(e){const t=e.target;this.hasActions=t.assignedElements().length>0}handleIconChange(e){const t=e.target;this.hasIcon=t.assignedElements().length>0}handleAnchorIntersection(e){const{target:t,isIntersecting:o}=e;t===this.topAnchor&&(this.isAtScrollTop=o),t===this.bottomAnchor&&(this.isAtScrollBottom=o)}getIsConnectedPromise(){return new Promise((e=>{this.isConnectedPromiseResolve=e}))}}Lt(Oo),e([A({type:Boolean})],Oo.prototype,"open",null),e([A({attribute:!1})],Oo.prototype,"returnValue",void 0),e([A()],Oo.prototype,"type",void 0),e([S("dialog")],Oo.prototype,"dialog",void 0),e([S(".scrim")],Oo.prototype,"scrim",void 0),e([S(".container")],Oo.prototype,"container",void 0),e([S(".headline")],Oo.prototype,"headline",void 0),e([S(".content")],Oo.prototype,"content",void 0),e([S(".actions")],Oo.prototype,"actions",void 0),e([k()],Oo.prototype,"isAtScrollTop",void 0),e([k()],Oo.prototype,"isAtScrollBottom",void 0),e([S(".scroller")],Oo.prototype,"scroller",void 0),e([S(".top.anchor")],Oo.prototype,"topAnchor",void 0),e([S(".bottom.anchor")],Oo.prototype,"bottomAnchor",void 0),e([k()],Oo.prototype,"hasHeadline",void 0),e([k()],Oo.prototype,"hasActions",void 0),e([k()],Oo.prototype,"hasIcon",void 0);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const To=n`:host{border-start-start-radius:var(--md-dialog-container-shape-start-start, var(--md-dialog-container-shape, 28px));border-start-end-radius:var(--md-dialog-container-shape-start-end, var(--md-dialog-container-shape, 28px));border-end-end-radius:var(--md-dialog-container-shape-end-end, var(--md-dialog-container-shape, 28px));border-end-start-radius:var(--md-dialog-container-shape-end-start, var(--md-dialog-container-shape, 28px));display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));display:flex;flex-direction:column;font-family:var(--md-dialog-headline-font, var(--md-sys-typescale-headline-small-font, var(--md-ref-typeface-brand, Roboto)));font-size:var(--md-dialog-headline-size, var(--md-sys-typescale-headline-small-size, 1.5rem));line-height:var(--md-dialog-headline-line-height, var(--md-sys-typescale-headline-small-line-height, 2rem));font-weight:var(--md-dialog-headline-weight, var(--md-sys-typescale-headline-small-weight, var(--md-ref-typeface-weight-regular, 400)));position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;box-sizing:border-box;display:flex;gap:8px;padding:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));fill:currentColor;font-size:var(--md-dialog-icon-size, 24px);margin-top:24px;height:var(--md-dialog-icon-size, 24px);width:var(--md-dialog-icon-size, 24px)}.has-icon slot[name=headline]::slotted(*){justify-content:center;padding-top:16px}.scrollable slot[name=headline]::slotted(*){padding-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){padding-top:8px}.container{border-radius:inherit;display:flex;flex-direction:column;flex-grow:1;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));border-radius:inherit;content:"";inset:0;position:absolute}.scroller{display:flex;flex:1;flex-direction:column;overflow:hidden;z-index:1}.scrollable .scroller{overflow-y:scroll}.content{color:var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-dialog-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-dialog-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-dialog-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-dialog-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)));height:min-content;position:relative}slot[name=content]::slotted(*){box-sizing:border-box;padding:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){box-sizing:border-box;display:flex;gap:8px;justify-content:flex-end;padding:16px 24px 24px}.has-actions slot[name=content]::slotted(*){padding-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}/*# sourceMappingURL=dialog-styles.css.map */
`
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let zo=class extends Oo{};zo.styles=[To],zo=e([t("md-dialog")],zo);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Lo=Symbol("createValidator"),Uo=Symbol("getValidityAnchor"),Mo=Symbol("privateValidator"),Bo=Symbol("privateSyncValidity"),Do=Symbol("privateCustomValidationMessage");
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const No=Symbol("isFocusable"),Ho=Symbol("privateIsFocusable"),Fo=Symbol("externalTabIndex"),Vo=Symbol("isUpdatingTabIndex"),qo=Symbol("updateTabIndex"),Wo=Symbol("hasConstructed");
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const jo=Symbol("getFormValue"),Ko=Symbol("getFormState");
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Go{constructor(e){this.getCurrentState=e,this.currentValidity={validity:{},validationMessage:""}}getValidity(){const e=this.getCurrentState();if(!(!this.prevState||!this.equals(this.prevState,e)))return this.currentValidity;const{validity:t,validationMessage:o}=this.computeValidity(e);return this.prevState=this.copy(e),this.currentValidity={validationMessage:o,validity:{badInput:t.badInput,customError:t.customError,patternMismatch:t.patternMismatch,rangeOverflow:t.rangeOverflow,rangeUnderflow:t.rangeUnderflow,stepMismatch:t.stepMismatch,tooLong:t.tooLong,tooShort:t.tooShort,typeMismatch:t.typeMismatch,valueMissing:t.valueMissing}},this.currentValidity}}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Yo extends Go{computeValidity(e){this.radioElement||(this.radioElement=document.createElement("input"),this.radioElement.type="radio",this.radioElement.name="group");let t=!1,o=!1;for(const{checked:i,required:s}of e)s&&(t=!0),i&&(o=!0);return this.radioElement.checked=o,this.radioElement.required=t,{validity:{valueMissing:t&&!o},validationMessage:this.radioElement.validationMessage}}equals(e,t){if(e.length!==t.length)return!1;for(let o=0;o<e.length;o++){const i=e[o],s=t[o];if(i.checked!==s.checked||i.required!==s.required)return!1}return!0}copy(e){return e.map((({checked:e,required:t})=>({checked:e,required:t})))}}
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Xo{get controls(){const e=this.host.getAttribute("name");return e&&this.root&&this.host.isConnected?Array.from(this.root.querySelectorAll(`[name="${e}"]`)):[this.host]}constructor(e){this.host=e,this.focused=!1,this.root=null,this.handleFocusIn=()=>{this.focused=!0,this.updateTabIndices()},this.handleFocusOut=()=>{this.focused=!1,this.updateTabIndices()},this.handleKeyDown=e=>{const t="ArrowDown"===e.key,o="ArrowUp"===e.key,i="ArrowLeft"===e.key,s="ArrowRight"===e.key;if(!(i||s||t||o))return;const r=this.controls;if(!r.length)return;e.preventDefault();const a="rtl"===getComputedStyle(this.host).direction?i||t:s||t,n=r.indexOf(this.host);let l=a?n+1:n-1;for(;l!==n;){l>=r.length?l=0:l<0&&(l=r.length-1);const e=r[l];if(!e.hasAttribute("disabled")){for(const t of r)t!==e&&(t.checked=!1,t.tabIndex=-1,t.blur());e.checked=!0,e.tabIndex=0,e.focus(),e.dispatchEvent(new Event("change",{bubbles:!0}));break}a?l++:l--}}}hostConnected(){this.root=this.host.getRootNode(),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("focusin",this.handleFocusIn),this.host.addEventListener("focusout",this.handleFocusOut),this.host.checked&&this.uncheckSiblings(),this.updateTabIndices()}hostDisconnected(){this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("focusin",this.handleFocusIn),this.host.removeEventListener("focusout",this.handleFocusOut),this.updateTabIndices(),this.root=null}handleCheckedChange(){this.host.checked&&(this.uncheckSiblings(),this.updateTabIndices())}uncheckSiblings(){for(const e of this.controls)e!==this.host&&(e.checked=!1)}updateTabIndices(){const e=this.controls,t=e.find((e=>e.checked));if(t||this.focused){const o=t||this.host;o.tabIndex=0;for(const t of e)t!==o&&(t.tabIndex=-1)}else for(const t of e)t.tabIndex=0}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var Zo;const Jo=Symbol("checked");let Qo=0;const ei=function(e){var t;class o extends e{constructor(){super(...arguments),this[t]=""}get validity(){return this[Bo](),this[Ht].validity}get validationMessage(){return this[Bo](),this[Ht].validationMessage}get willValidate(){return this[Bo](),this[Ht].willValidate}checkValidity(){return this[Bo](),this[Ht].checkValidity()}reportValidity(){return this[Bo](),this[Ht].reportValidity()}setCustomValidity(e){this[Do]=e,this[Bo]()}requestUpdate(e,t,o){super.requestUpdate(e,t,o),this[Bo]()}firstUpdated(e){super.firstUpdated(e),this[Bo]()}[(t=Do,Bo)](){this[Mo]||(this[Mo]=this[Lo]());const{validity:e,validationMessage:t}=this[Mo].getValidity(),o=!!this[Do],i=this[Do]||t;this[Ht].setValidity({...e,customError:o},i,this[Uo]()??void 0)}[Lo](){throw new Error("Implement [createValidator]")}[Uo](){throw new Error("Implement [getValidityAnchor]")}}return o}(function(t){class o extends t{get form(){return this[Ht].form}get labels(){return this[Ht].labels}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){this.toggleAttribute("disabled",e)}attributeChangedCallback(e,t,o){if("name"!==e&&"disabled"!==e)super.attributeChangedCallback(e,t,o);else{const o="disabled"===e?null!==t:t;this.requestUpdate(e,o)}}requestUpdate(e,t,o){super.requestUpdate(e,t,o),this[Ht].setFormValue(this[jo](),this[Ko]())}[jo](){throw new Error("Implement [getFormValue]")}[Ko](){return this[jo]()}formDisabledCallback(e){this.disabled=e}}return o.formAssociated=!0,e([A({noAccessor:!0})],o.prototype,"name",null),e([A({type:Boolean,noAccessor:!0})],o.prototype,"disabled",null),o}(Vt(function(t){var o,i,s,r;class a extends t{get[No](){return this[Ho]}set[No](e){this[No]!==e&&(this[Ho]=e,this[qo]())}constructor(...e){super(...e),this[o]=!1,this[i]=null,this[s]=!1,this[r]=!1,this[No]=!0,queueMicrotask((()=>{this[Wo]=!0,this[qo]()}))}attributeChangedCallback(e,t,o){if("tabindex"===e){if(this.requestUpdate("tabIndex",Number(t??-1)),!this[Vo])return this.hasAttribute("tabindex")?void(this[Fo]=this.tabIndex):(this[Fo]=null,void this[qo]())}else super.attributeChangedCallback(e,t,o)}[(o=Ho,i=Fo,s=Vo,r=Wo,qo)](){if(!this[Wo])return;const e=this[No]?0:-1,t=this[Fo]??e;this[Vo]=!0,this.tabIndex=t,this[Vo]=!1}}return e([A({noAccessor:!0})],a.prototype,"tabIndex",void 0),a}(me))));class ti extends ei{get checked(){return this[Jo]}set checked(e){const t=this.checked;t!==e&&(this[Jo]=e,this.requestUpdate("checked",t),this.selectionController.handleCheckedChange())}constructor(){super(),this.maskId="cutout"+ ++Qo,this[Zo]=!1,this.required=!1,this.value="on",this.selectionController=new Xo(this),this.addController(this.selectionController),this[Ht].role="radio",this.addEventListener("click",this.handleClick.bind(this)),this.addEventListener("keydown",this.handleKeydown.bind(this))}render(){const e={checked:this.checked};return Z`
      <div class="container ${Te(e)}" aria-hidden="true">
        <md-ripple
          part="ripple"
          .control=${this}
          ?disabled=${this.disabled}></md-ripple>
        <md-focus-ring part="focus-ring" .control=${this}></md-focus-ring>
        <svg class="icon" viewBox="0 0 20 20">
          <mask id="${this.maskId}">
            <rect width="100%" height="100%" fill="white" />
            <circle cx="10" cy="10" r="8" fill="black" />
          </mask>
          <circle
            class="outer circle"
            cx="10"
            cy="10"
            r="10"
            mask="url(#${this.maskId})" />
          <circle class="inner circle" cx="10" cy="10" r="5" />
        </svg>

        <input
          id="input"
          type="radio"
          tabindex="-1"
          .checked=${this.checked}
          .value=${this.value}
          ?disabled=${this.disabled} />
      </div>
    `}updated(){this[Ht].ariaChecked=String(this.checked)}async handleClick(e){this.disabled||(await 0,e.defaultPrevented||(Wt(e)&&this.focus(),this.checked=!0,this.dispatchEvent(new Event("change",{bubbles:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))))}async handleKeydown(e){await 0," "!==e.key||e.defaultPrevented||this.click()}[(Zo=Jo,jo)](){return this.checked?this.value:null}[Ko](){return String(this.checked)}formResetCallback(){this.checked=this.hasAttribute("checked")}formStateRestoreCallback(e){this.checked="true"===e}[Lo](){return new Yo((()=>this.selectionController?this.selectionController.controls:[this]))}[Uo](){return this.container}}e([A({type:Boolean})],ti.prototype,"checked",null),e([A({type:Boolean})],ti.prototype,"required",void 0),e([A()],ti.prototype,"value",void 0),e([S(".container")],ti.prototype,"container",void 0);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const oi=n`@layer{:host{display:inline-flex;height:var(--md-radio-icon-size, 20px);outline:none;position:relative;vertical-align:top;width:var(--md-radio-icon-size, 20px);-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;--md-ripple-hover-color: var(--md-radio-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-radio-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-radio-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-pressed-opacity: var(--md-radio-pressed-state-layer-opacity, 0.12)}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--md-radio-icon-size, 20px))/2)}.container{display:flex;height:100%;place-content:center;place-items:center;width:100%}md-focus-ring{height:44px;inset:unset;width:44px}.checked{--md-ripple-hover-color: var(--md-radio-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-hover-opacity: var(--md-radio-selected-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-radio-selected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-radio-selected-pressed-state-layer-opacity, 0.12)}input{appearance:none;height:48px;margin:0;position:absolute;width:48px;cursor:inherit}:host([touch-target=none]) input{width:100%;height:100%}md-ripple{border-radius:50%;height:var(--md-radio-state-layer-size, 40px);inset:unset;width:var(--md-radio-state-layer-size, 40px)}.icon{fill:var(--md-radio-icon-color, var(--md-sys-color-on-surface-variant, #49454f));inset:0;position:absolute}.outer.circle{transition:fill 50ms linear}.inner.circle{opacity:0;transform-origin:center;transition:opacity 50ms linear}.checked .icon{fill:var(--md-radio-selected-icon-color, var(--md-sys-color-primary, #6750a4))}.checked .inner.circle{animation:inner-circle-grow 300ms cubic-bezier(0.05, 0.7, 0.1, 1);opacity:1}@keyframes inner-circle-grow{from{transform:scale(0)}to{transform:scale(1)}}:host([disabled]) .circle{animation-duration:0s;transition-duration:0s}:host(:hover) .icon{fill:var(--md-radio-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20))}:host(:focus-within) .icon{fill:var(--md-radio-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20))}:host(:active) .icon{fill:var(--md-radio-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20))}:host([disabled]) .icon{fill:var(--md-radio-disabled-unselected-icon-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-radio-disabled-unselected-icon-opacity, 0.38)}:host(:hover) .checked .icon{fill:var(--md-radio-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4))}:host(:focus-within) .checked .icon{fill:var(--md-radio-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4))}:host(:active) .checked .icon{fill:var(--md-radio-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4))}:host([disabled]) .checked .icon{fill:var(--md-radio-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-radio-disabled-selected-icon-opacity, 0.38)}}@layer hcm{@media(forced-colors: active){.icon{fill:CanvasText}:host([disabled]) .icon{fill:GrayText;opacity:1}}}/*# sourceMappingURL=radio-styles.css.map */
`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let ii=class extends ti{};ii.styles=[oi],ii=e([t("md-radio")],ii);
