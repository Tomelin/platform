(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8803,7164],{68803:(Ue,Y,a)=>{"use strict";a.d(Y,{r:()=>dt,I:()=>mt});var t=a(2784),_=a(73557),J=a(92980),S=a(7524),C=a(7754),ae=a(5821),K=a(18671),q=a(60905),$=a(7896),Ee=a(59740),I=a(6277),E=a(41128),ee=a(15459),te=function(R){return{root:{display:"block",backgroundColor:(0,E.Fq)(R.palette.text.primary,R.palette.type==="light"?.11:.13),height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 60%",transform:"scale(1, 0.60)",borderRadius:R.shape.borderRadius,"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.6s linear 0.5s infinite",background:"linear-gradient(90deg, transparent, ".concat(R.palette.action.hover,", transparent)"),content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"60%":{transform:"translateX(100%)"},"100%":{transform:"translateX(100%)"}},withChildren:{"& > *":{visibility:"hidden"}},fitContent:{maxWidth:"fit-content"},heightAuto:{height:"auto"}}},pe=t.forwardRef(function(R,se){var ue=R.animation,N=ue===void 0?"pulse":ue,u=R.classes,m=R.className,v=R.component,g=v===void 0?"span":v,b=R.height,D=R.variant,A=D===void 0?"text":D,X=R.width,be=(0,Ee.Z)(R,["animation","classes","className","component","height","variant","width"]),we=!!be.children;return t.createElement(g,(0,$.Z)({ref:se,className:(0,I.default)(u.root,u[A],m,we&&[u.withChildren,!X&&u.fitContent,!b&&u.heightAuto],N!==!1&&u[N])},be,{style:(0,$.Z)({width:X,height:b},be.style)}))});const he=(0,ee.Z)(te,{name:"MuiSkeleton"})(pe);var de=a(73250),j=a(50816),z=a(14914),ye=a(85056),W=a(19631),re=a(9277),h=a(82196),ge=a(90996),me=a(59274),Be=a(58185),st=a(51491),je=a(76635),Me=a(12864);const Ce=t.createElement(he,{animation:"wave",variant:"text",height:40}),Xe=Z=>{const{children:R}=Z,se=(0,S.$L)(),ue=(0,me.h_)(Be.D),{title:N,setTitle:u,subtitle:m,setSubtitle:v,entityRef:g,metadata:{value:b,loading:D},entityMetadata:{value:A,loading:X}}=(0,C.x)();(0,t.useEffect)(()=>{b&&(u(b.site_name),v(()=>{let{site_description:De}=b;return(!De||De==="None")&&(De=""),De}))},[b,u,v]);const be=ue.getOptional("app.title")||"Backstage",we=[N,m,be].filter(Boolean).join(" | "),{locationMetadata:Fe,spec:tt}=A||{},ut=tt==null?void 0:tt.lifecycle,Ne=A?(0,z.h)(A,re.S4):[],He=(0,st.t)(Me._Z)(),wt=t.createElement(t.Fragment,null,t.createElement(h.i,{label:(0,je.capitalize)((A==null?void 0:A.kind)||"entity"),value:t.createElement(ye.d,{color:"inherit",entityRef:g,title:A==null?void 0:A.metadata.title,defaultKind:"Component"})}),Ne.length>0&&t.createElement(h.i,{label:"Owner",value:t.createElement(W.r,{color:"inherit",entityRefs:Ne,defaultKind:"group"})}),ut?t.createElement(h.i,{label:"Lifecycle",value:String(ut)}):null,Fe&&Fe.type!=="dir"&&Fe.type!=="file"?t.createElement(h.i,{label:"",value:t.createElement(q.Z,{container:!0,direction:"column",alignItems:"center"},t.createElement(q.Z,{style:{padding:0},item:!0},t.createElement(de.Z,{style:{marginTop:"-25px"}})),t.createElement(q.Z,{style:{padding:0},item:!0},"Source")),url:Fe.target}):null);return!X&&A===void 0||!D&&b===void 0?null:t.createElement(ge.h,{type:"Documentation",typeLink:He,title:N||Ce,subtitle:m===""?void 0:m||Ce},t.createElement(K.Z,{titleTemplate:"%s"},t.createElement("title",null,we)),wt,R,se.renderComponentsByLocation(j.o.Header))};var Tt=a(21329),Qe=a(37224),Je=a(22230),qe=a(44303),it=a(70666),Ie=a(77277),bt=a(75341),_e=a(86477),Re=a(28235),et=a(49257),lt=a(32272);const ct="/.backstage/auth/v1/cookie",At=365*24*36e5;function St(Z){const{pluginId:R}=Z!=null?Z:{},se=(0,me.h_)(bt.g),ue=(0,me.h_)(_e.N),N=(0,t.useMemo)(()=>"BroadcastChannel"in window?new BroadcastChannel(`${R}-auth-cookie-expires-at`):null,[R]),[u,m]=(0,Re.r)(async()=>{const D=`${await ue.getBaseUrl(R)}${ct}`,A=await se.fetch(`${D}`,{credentials:"include"});if(!A.ok){if(A.status===404)return{expiresAt:new Date(Date.now()+At)};throw await lt.VL.fromResponse(A)}const X=await A.json();if(!X.expiresAt)throw new Error("No expiration date found in response");return X});(0,et.n)(m.execute);const v=(0,t.useCallback)(()=>{m.execute()},[m]),g=(0,t.useCallback)(b=>{const D=(1+3*Math.random())*6e4,A=Date.parse(b.expiresAt)-Date.now()-D,X=setTimeout(v,A);return()=>clearTimeout(X)},[v]);return(0,t.useEffect)(()=>{if(u.status!=="success"||!u.result)return()=>{};N==null||N.postMessage({action:"COOKIE_REFRESH_SUCCESS",payload:u.result});let b=g(u.result);const D=A=>{const{action:X,payload:be}=A.data;X==="COOKIE_REFRESH_SUCCESS"&&(b(),b=g(be))};return N==null||N.addEventListener("message",D),()=>{b(),N==null||N.removeEventListener("message",D)}},[u,g,N]),u.status==="not-executed"?{status:"loading"}:u.status==="loading"&&!u.result?{status:"loading"}:u.status==="loading"&&u.error?{status:"loading"}:u.status==="error"&&u.error?{status:"error",error:u.error,retry:v}:{status:"success",data:u.result}}function ze(Z){const{children:R,...se}=Z,ue=(0,it.q)(),{Progress:N}=ue.getComponents(),u=St(se);return u.status==="loading"?t.createElement(N,null):u.status==="error"?t.createElement(qe.y,{error:u.error},t.createElement(Ie.Z,{variant:"outlined",onClick:u.retry},"Retry")):t.createElement(t.Fragment,null,R)}const dt=Z=>{const{withSearch:R,withHeader:se=!0}=Z;return t.createElement(J.T,{themeId:"documentation"},se&&t.createElement(Xe,null),t.createElement(Tt.b,null),t.createElement(ae.F,{withSearch:R}))},mt=Z=>{const{kind:R,name:se,namespace:ue}=(0,Qe.O)(Me.Fw),{children:N,entityRef:u={kind:R,name:se,namespace:ue}}=Z,m=(0,_.pC)();if(!N){const b=(m?t.Children.toArray(m.props.children):[]).flatMap(D=>{var A,X;return(X=(A=D==null?void 0:D.props)==null?void 0:A.children)!=null?X:[]}).find(D=>!(0,Je.I)(D,S.Zz)&&!(0,Je.I)(D,S.jM));return t.createElement(ze,{pluginId:"techdocs"},t.createElement(C.Z,{entityRef:u},b||t.createElement(dt,null)))}return t.createElement(ze,{pluginId:"techdocs"},t.createElement(C.Z,{entityRef:u},({metadata:v,entityMetadata:g,onReady:b})=>t.createElement("div",{className:"techdocs-reader-page"},t.createElement(J.T,{themeId:"documentation"},N instanceof Function?N({entityRef:u,techdocsMetadataValue:v.value,entityMetadataValue:g.value,onReady:b}):N))))}},5821:(Ue,Y,a)=>{"use strict";a.d(Y,{F:()=>Le});var t=a(2784),_=a(60905),J=a(79692),S=a(7754),C=a(70882),ae=a(19219),K=a(50236),q=a(37630);const $="TECH_DOCS_SHADOW_DOM_STYLE_LOAD",Ee=e=>{(0,t.useEffect)(()=>{var c;if(!e)return()=>{};const o=e.querySelectorAll('head > link[rel="stylesheet"]');let r=(c=o==null?void 0:o.length)!=null?c:0;const s=new CustomEvent($);if(!r)return e.dispatchEvent(s),()=>{};const i=()=>{--r===0&&e.dispatchEvent(s)};return o==null||o.forEach(d=>{d.addEventListener("load",i)}),()=>{o==null||o.forEach(d=>{d.removeEventListener("load",i)})}},[e])},I=e=>{const[o,r]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{if(!e)return()=>{};r(!0);const s=e.style;s.setProperty("opacity","0");const i=()=>{r(!1),s.setProperty("opacity","1")};return e.addEventListener($,i),()=>{e.removeEventListener($,i)}},[e]),o},E=e=>{const{element:o,onAppend:r,children:s}=e,[i,c]=(0,t.useState)((0,C.Ue)({...(0,K.Z)(),insertionPoint:void 0}));Ee(o);const d=I(o),T=(0,t.useCallback)(w=>{if(!o||!w)return;c((0,C.Ue)({...(0,K.Z)(),insertionPoint:o.querySelector("head")||void 0}));let k=w.shadowRoot;k||(k=w.attachShadow({mode:"open"})),k.replaceChildren(o),typeof r=="function"&&r(k)},[o,r]);return t.createElement(t.Fragment,null,d&&t.createElement(q.E,null),t.createElement(ae.ZP,{jss:i,sheetsManager:new Map},t.createElement("div",{ref:T,"data-testid":"techdocs-native-shadowroot"}),s))};var ee=a(6224),te=a(17182),pe=a(35182),he=a(43852),de=a(4614),j=a(97570),z=a(48260);const ye=(0,J.Z)(e=>({loading:{right:e.spacing(1),position:"absolute"}})),W=e=>o=>t.createElement(he.Nd,{inheritParentContextIfAvailable:!0},t.createElement(e,{...o})),re=()=>{const e=ye();return t.createElement(de.Z,{className:e.loading,"data-testid":"search-autocomplete-progressbar",color:"inherit",size:20})},h=W(function(o){const{loading:r,value:s,onChange:i=()=>{},options:c=[],getOptionLabel:d=x=>String(x),inputPlaceholder:T,inputDebounceTime:w,freeSolo:k=!0,fullWidth:M=!0,clearOnBlur:L=!1,"data-testid":y="search-autocomplete",...Te}=o,{setTerm:ie}=(0,he.Rx)(),H=(0,t.useCallback)(x=>x?typeof x=="string"?x:d(x):"",[d]),Se=(0,t.useMemo)(()=>H(s),[s,H]),U=(0,t.useCallback)((x,P,V,xe)=>{ie(H(P)),i(x,P,V,xe)},[H,ie,i]),le=(0,t.useCallback)(({InputProps:{ref:x,className:P,endAdornment:V},InputLabelProps:xe,...ne})=>t.createElement(z.E,{...ne,ref:x,clearButton:!1,value:Se,placeholder:T,debounceTime:w,endAdornment:r?t.createElement(re,null):V,InputProps:{className:P}}),[r,Se,T,w]);return t.createElement(j.ZP,{...Te,"data-testid":y,value:s,onChange:U,options:c,getOptionLabel:d,renderInput:le,freeSolo:k,fullWidth:M,clearOnBlur:L})});var ge=a(73557),me=a(37164);const Be=e=>e==null?void 0:e.document,st=e=>{const{entityId:o,entityTitle:r,debounceTime:s=150}=e,[i,c]=(0,t.useState)(!1),d=(0,ge.s0)(),{setFilters:T,term:w,result:{loading:k,value:M}}=(0,he.Rx)(),[L,y]=(0,t.useState)([]);(0,t.useEffect)(()=>{let U=!0;if(U&&M){const le=M.results.slice(0,10);y(le)}return()=>{U=!1}},[k,M]);const{kind:Te,name:ie,namespace:H}=o;(0,t.useEffect)(()=>{T(U=>({...U,kind:Te,namespace:H,name:ie}))},[Te,H,ie,T]);const Se=(U,le)=>{if(Be(le)){const{location:x}=le.document;d(x)}};return t.createElement(h,{"data-testid":"techdocs-search-bar",size:"small",open:i&&!!w,getOptionLabel:()=>"",filterOptions:U=>U,onClose:()=>{c(!1)},onOpen:()=>{c(!0)},onChange:Se,blurOnSelect:!0,noOptionsText:"No results found",value:null,options:L,renderOption:({document:U,highlight:le})=>t.createElement(me.TechDocsSearchResultListItem,{result:U,lineClamp:3,asListItem:!1,asLink:!1,title:U.title,highlight:le}),loading:k,inputDebounceTime:s,inputPlaceholder:`Search ${r||o.name} docs`,freeSolo:!1})},je=e=>{const o={term:"",types:["techdocs"],pageCursor:"",filters:e.entityId};return t.createElement(he.Nd,{initialState:o},t.createElement(st,{...e}))};var Me=a(77277),Ce=a(99688),Xe=a(78718),Tt=a(4190),Qe=a(61837),Je=a(90436),qe=a(12420),it=a(87685);const Ie=(0,J.Z)(e=>(0,qe.Z)({paper:{width:"100%",[e.breakpoints.up("sm")]:{width:"75%"},[e.breakpoints.up("md")]:{width:"50%"},padding:e.spacing(2.5)},root:{height:"100%",overflow:"hidden"},logs:{background:e.palette.background.default}})),bt=({buildLog:e,onClose:o})=>{const r=Ie(),s=e.length===0?"Waiting for logs...":e.join(`
`);return t.createElement(_.Z,{container:!0,direction:"column",className:r.root,spacing:0,wrap:"nowrap"},t.createElement(_.Z,{item:!0,container:!0,justifyContent:"space-between",alignItems:"center",spacing:0,wrap:"nowrap"},t.createElement(Je.Z,{variant:"h5"},"Build Details"),t.createElement(Qe.Z,{key:"dismiss",title:"Close the drawer",onClick:o,color:"inherit"},t.createElement(it.Z,null))),t.createElement(_.Z,{item:!0,xs:!0},t.createElement(Xe.n,{text:s,classes:{root:r.logs}})))},_e=({buildLog:e})=>{const o=Ie(),[r,s]=(0,t.useState)(!1);return t.createElement(t.Fragment,null,t.createElement(Me.Z,{color:"inherit",onClick:()=>s(!0)},"Show Build Logs"),t.createElement(Tt.ZP,{classes:{paper:o.paper},anchor:"right",open:r,onClose:()=>s(!1)},t.createElement(bt,{buildLog:e,onClose:()=>s(!1)})))};var Re=a(59274),et=a(58185),lt=a(92641);const ct=({errorMessage:e})=>{const o=(0,Re.h_)(et.D).getOptionalString("techdocs.builder"),r=(0,lt.z)(),{entityRef:s}=(0,S.x)(),i=(0,ge.TH)();(0,t.useEffect)(()=>{const{pathname:d,search:T,hash:w}=i;r.captureEvent("not-found",`${d}${T}${w}`,{attributes:s})},[r,s,i]);let c="";return[void 0,"local"].includes(o)||(c="Note that techdocs.builder is not set to 'local' in your config, which means this Backstage app will not generate docs if they are not found. Make sure the project's docs are generated and published by some external process (e.g. CI/CD pipeline). Or change techdocs.builder to 'local' to generate docs from this Backstage instance."),t.createElement(te.m,{status:"404",statusMessage:e||"Documentation not found",additionalInfo:c})};var At=a(4812),St=a(84767),ze=a(38182);function dt({contentLoading:e,content:o,activeSyncState:r}){return e||r==="BUILD_READY_RELOAD"||!o&&r==="CHECKING"?"CHECKING":!o&&r==="BUILDING"?"INITIAL_BUILD":o?r==="BUILDING"?"CONTENT_STALE_REFRESHING":r==="BUILD_READY"?"CONTENT_STALE_READY":r==="ERROR"?"CONTENT_STALE_ERROR":"CONTENT_FRESH":"CONTENT_NOT_FOUND"}function mt(e,o){const r={...e};switch(o.type){case"sync":o.state==="CHECKING"&&(r.buildLog=[]),r.activeSyncState=o.state,r.syncError=o.syncError;break;case"contentLoading":r.contentLoading=!0,r.contentError=void 0;break;case"content":typeof o.path=="string"&&(r.path=o.path),r.contentLoading=!1,r.content=o.content,r.contentError=o.contentError;break;case"buildLog":r.buildLog=r.buildLog.concat(o.log);break;default:throw new Error}return["BUILD_READY","BUILD_READY_RELOAD"].includes(r.activeSyncState)&&["contentLoading","content"].includes(o.type)&&(r.activeSyncState="UP_TO_DATE",r.buildLog=[]),r}function Z(e,o,r,s){var M,L;const[i,c]=(0,t.useReducer)(mt,{activeSyncState:"CHECKING",path:s,contentLoading:!0,buildLog:[]}),d=(0,Re.h_)(ze.D),{retry:T}=(0,St.Z)(async()=>{c({type:"contentLoading"});try{const y=await d.getEntityDocs({kind:e,namespace:o,name:r},s);return c({type:"content",content:y,path:s}),y}catch(y){c({type:"content",contentError:y,path:s})}},[d,e,o,r,s]),w=(0,t.useRef)({content:void 0,reload:()=>{}});return w.current={content:i.content,reload:T},(0,At.Z)(async()=>{c({type:"sync",state:"CHECKING"});const y=setTimeout(()=>{c({type:"sync",state:"BUILDING"})},1e3);try{switch(await d.syncEntityDocs({kind:e,namespace:o,name:r},ie=>{c({type:"buildLog",log:ie})})){case"updated":w.current.content?c({type:"sync",state:"BUILD_READY"}):(w.current.reload(),c({type:"sync",state:"BUILD_READY_RELOAD"}));break;case"cached":c({type:"sync",state:"UP_TO_DATE"});break;default:c({type:"sync",state:"ERROR",syncError:new Error("Unexpected return state")});break}}catch(Te){c({type:"sync",state:"ERROR",syncError:Te})}finally{clearTimeout(y)}},[e,r,o,d,c,w]),{state:(0,t.useMemo)(()=>dt({activeSyncState:i.activeSyncState,contentLoading:i.contentLoading,content:i.content}),[i.activeSyncState,i.content,i.contentLoading]),contentReload:T,path:i.path,content:i.content,contentErrorMessage:(M=i.contentError)==null?void 0:M.toString(),syncErrorMessage:(L=i.syncError)==null?void 0:L.toString(),buildLog:i.buildLog}}const R=(0,t.createContext)({}),se=()=>(0,t.useContext)(R),ue=e=>{const{children:o}=e,{"*":r=""}=(0,ge.UO)(),{entityRef:s}=(0,S.x)(),{kind:i,namespace:c,name:d}=s,T=Z(i,c,d,r);return t.createElement(R.Provider,{value:T},o instanceof Function?o(T):o)},N=e=>o=>t.createElement(ue,null,t.createElement(e,{...o})),u=(0,J.Z)(e=>({root:{marginBottom:e.spacing(2)},message:{wordBreak:"break-word",overflowWrap:"anywhere"}})),m=()=>{let e=null;const o=u(),{state:r,contentReload:s,contentErrorMessage:i,syncErrorMessage:c,buildLog:d}=se();return r==="INITIAL_BUILD"&&(e=t.createElement(Ce.Z,{classes:{root:o.root},variant:"outlined",severity:"info",icon:t.createElement(de.Z,{size:"24px"}),action:t.createElement(_e,{buildLog:d})},"Documentation is accessed for the first time and is being prepared. The subsequent loads are much faster.")),r==="CONTENT_STALE_REFRESHING"&&(e=t.createElement(Ce.Z,{variant:"outlined",severity:"info",icon:t.createElement(de.Z,{size:"24px"}),action:t.createElement(_e,{buildLog:d}),classes:{root:o.root}},"A newer version of this documentation is being prepared and will be available shortly.")),r==="CONTENT_STALE_READY"&&(e=t.createElement(Ce.Z,{variant:"outlined",severity:"success",action:t.createElement(Me.Z,{color:"inherit",onClick:()=>s()},"Refresh"),classes:{root:o.root}},"A newer version of this documentation is now available, please refresh to view.")),r==="CONTENT_STALE_ERROR"&&(e=t.createElement(Ce.Z,{variant:"outlined",severity:"error",action:t.createElement(_e,{buildLog:d}),classes:{root:o.root,message:o.message}},"Building a newer version of this documentation failed."," ",c)),r==="CONTENT_NOT_FOUND"&&(e=t.createElement(t.Fragment,null,c&&t.createElement(Ce.Z,{variant:"outlined",severity:"error",action:t.createElement(_e,{buildLog:d}),classes:{root:o.root,message:o.message}},"Building a newer version of this documentation failed."," ",c),t.createElement(ct,{errorMessage:i}))),e};var v=a(41156),g=a(60364),b=a(38389),D=a(35368),A=a.n(D);const X=/main\.[A-Fa-f0-9]{8}\.min\.css$/,be=/^https:\/\/fonts\.googleapis\.com/,we=/^https:\/\/fonts\.gstatic\.com/,Fe=e=>e.nodeName==="LINK",tt=e=>{const o=(e==null?void 0:e.getAttribute("href"))||"",r=o.match(X),s=o.match(be),i=o.match(we);return r||s||i},ut=e=>(Fe(e)&&!tt(e)&&e.remove(),e),Ne=e=>e.nodeName==="IFRAME",He=(e,o)=>{const r=e.getAttribute("src")||"";try{const{host:s}=new URL(r);return o.includes(s)}catch{return!1}},wt=e=>o=>(Ne(o)&&!He(o,e)&&o.remove(),o),_t=()=>{const e=(0,Re.h_)(et.D);return(0,t.useMemo)(()=>e.getOptionalConfig("techdocs.sanitizer"),[e])},zt=()=>{const e=_t();return(0,t.useCallback)(async o=>{const r=e==null?void 0:e.getOptionalStringArray("allowedIframeHosts");A().addHook("beforeSanitizeElements",ut);const s=["link"];return r&&(s.push("iframe"),A().addHook("beforeSanitizeElements",wt(r))),A().sanitize(o.outerHTML,{ADD_TAGS:s,FORBID_TAGS:["style"],WHOLE_DOCUMENT:!0,RETURN_DOM:!0})},[e])};var De=a(1910),O=a(41128),nt=({theme:e})=>`
/*==================  Variables  ==================*/
/*
  As the MkDocs output is rendered in shadow DOM, the CSS variable definitions on the root selector are not applied. Instead, they have to be applied on :host.
  As there is no way to transform the served main*.css yet (for example in the backend), we have to copy from main*.css and modify them.
*/

:host {
  /* FONT */
  --md-default-fg-color: ${e.palette.text.primary};
  --md-default-fg-color--light: ${e.palette.text.secondary};
  --md-default-fg-color--lighter: ${(0,O.$n)(e.palette.text.secondary,.7)};
  --md-default-fg-color--lightest: ${(0,O.$n)(e.palette.text.secondary,.3)};

  /* BACKGROUND */
  --md-default-bg-color:${e.palette.background.default};
  --md-default-bg-color--light: ${e.palette.background.paper};
  --md-default-bg-color--lighter: ${(0,O.$n)(e.palette.background.paper,.7)};
  --md-default-bg-color--lightest: ${(0,O.$n)(e.palette.background.paper,.3)};

  /* PRIMARY */
  --md-primary-fg-color: ${e.palette.primary.main};
  --md-primary-fg-color--light: ${e.palette.primary.light};
  --md-primary-fg-color--dark: ${e.palette.primary.dark};
  --md-primary-bg-color: ${e.palette.primary.contrastText};
  --md-primary-bg-color--light: ${(0,O.$n)(e.palette.primary.contrastText,.7)};

  /* ACCENT */
  --md-accent-fg-color: var(--md-primary-fg-color);
  --md-accent-fg-color--transparent: ${(0,O.Fq)(e.palette.primary.main,.1)};
  --md-accent-bg-color: var(--md-primary-bg-color);
  --md-accent-bg-color--light: var(--md-primary-bg-color--light);

  /* SHADOW */
  --md-shadow-z1: ${e.shadows[1]};
  --md-shadow-z2: ${e.shadows[2]};
  --md-shadow-z3: ${e.shadows[3]};

  /* EXTENSIONS */
  --md-admonition-fg-color: var(--md-default-fg-color);
  --md-admonition-bg-color: var(--md-default-bg-color);
  /* Admonitions and others are using SVG masks to define icons. These masks are defined as CSS variables. */
  --md-admonition-icon--note: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z"/></svg>');
  --md-admonition-icon--abstract: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 5h16v2H4V5m0 4h16v2H4V9m0 4h16v2H4v-2m0 4h10v2H4v-2z"/></svg>');
  --md-admonition-icon--info: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/></svg>');
  --md-admonition-icon--tip: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.55 11.2c-.23-.3-.5-.56-.76-.82-.65-.6-1.4-1.03-2.03-1.66C13.3 7.26 13 4.85 13.91 3c-.91.23-1.75.75-2.45 1.32-2.54 2.08-3.54 5.75-2.34 8.9.04.1.08.2.08.33 0 .22-.15.42-.35.5-.22.1-.46.04-.64-.12a.83.83 0 01-.15-.17c-1.1-1.43-1.28-3.48-.53-5.12C5.89 10 5 12.3 5.14 14.47c.04.5.1 1 .27 1.5.14.6.4 1.2.72 1.73 1.04 1.73 2.87 2.97 4.84 3.22 2.1.27 4.35-.12 5.96-1.6 1.8-1.66 2.45-4.32 1.5-6.6l-.13-.26c-.2-.46-.47-.87-.8-1.25l.05-.01m-3.1 6.3c-.28.24-.73.5-1.08.6-1.1.4-2.2-.16-2.87-.82 1.19-.28 1.89-1.16 2.09-2.05.17-.8-.14-1.46-.27-2.23-.12-.74-.1-1.37.18-2.06.17.38.37.76.6 1.06.76 1 1.95 1.44 2.2 2.8.04.14.06.28.06.43.03.82-.32 1.72-.92 2.27h.01z"/></svg>');
  --md-admonition-icon--success: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>');
  --md-admonition-icon--question: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.07 11.25l-.9.92C13.45 12.89 13 13.5 13 15h-2v-.5c0-1.11.45-2.11 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41a2 2 0 00-2-2 2 2 0 00-2 2H8a4 4 0 014-4 4 4 0 014 4 3.2 3.2 0 01-.93 2.25M13 19h-2v-2h2M12 2A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10c0-5.53-4.5-10-10-10z"/></svg>');
  --md-admonition-icon--warning: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 14h-2v-4h2m0 8h-2v-2h2M1 21h22L12 2 1 21z"/></svg>');
  --md-admonition-icon--failure: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12 6.47 2 12 2m3.59 5L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7z"/></svg>');
  --md-admonition-icon--danger: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.5 20l4.86-9.73H13V4l-5 9.73h3.5V20M12 2c2.75 0 5.1 1 7.05 2.95C21 6.9 22 9.25 22 12s-1 5.1-2.95 7.05C17.1 21 14.75 22 12 22s-5.1-1-7.05-2.95C3 17.1 2 14.75 2 12s1-5.1 2.95-7.05C6.9 3 9.25 2 12 2z"/></svg>');
  --md-admonition-icon--bug: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 12h-4v-2h4m0 6h-4v-2h4m6-6h-2.81a5.985 5.985 0 00-1.82-1.96L17 4.41 15.59 3l-2.17 2.17a6.002 6.002 0 00-2.83 0L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8z"/></svg>');
  --md-admonition-icon--example: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 13v-2h14v2H7m0 6v-2h14v2H7M7 7V5h14v2H7M3 8V5H2V4h2v4H3m-1 9v-1h3v4H2v-1h2v-.5H3v-1h1V17H2m2.25-7a.75.75 0 01.75.75c0 .2-.08.39-.21.52L3.12 13H5v1H2v-.92L4 11H2v-1h2.25z"/></svg>');
  --md-admonition-icon--quote: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 17h3l2-4V7h-6v6h3M6 17h3l2-4V7H5v6h3l-2 4z"/></svg>');
  --md-footnotes-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.42L5.83 13H21V7h-2z"/></svg>');
  --md-details-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.59 16.58 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z"/></svg>');
  --md-tasklist-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>');
  --md-tasklist-icon--checked: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>');
  --md-nav-icon--prev: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z"/></svg>');
  --md-nav-icon--next: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.59 16.58 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z"/></svg>');
  --md-toc-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 9h14V7H3v2m0 4h14v-2H3v2m0 4h14v-2H3v2m16 0h2v-2h-2v2m0-10v2h2V7h-2m0 6h2v-2h-2v2z"/></svg>');
  --md-clipboard-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1z"/></svg>');
  --md-search-result-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7c-.41-.25-.8-.56-1.14-.9-.33-.33-.61-.7-.86-1.1H6V4h7v5h5v1.18c.71.16 1.39.43 2 .82V8l-6-6m6.31 16.9c1.33-2.11.69-4.9-1.4-6.22-2.11-1.33-4.91-.68-6.22 1.4-1.34 2.11-.69 4.89 1.4 6.22 1.46.93 3.32.93 4.79.02L22 23.39 23.39 22l-3.08-3.1m-3.81.1a2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5z"/></svg>');
  --md-source-forks-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm0 2.122a2.25 2.25 0 1 0-1.5 0v.878A2.25 2.25 0 0 0 5.75 8.5h1.5v2.128a2.251 2.251 0 1 0 1.5 0V8.5h1.5a2.25 2.25 0 0 0 2.25-2.25v-.878a2.25 2.25 0 1 0-1.5 0v.878a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 6.25v-.878zm3.75 7.378a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm3-8.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"/></svg>');
  --md-source-repositories-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 1 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 0 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 0 1 1-1h8zM5 12.25v3.25a.25.25 0 0 0 .4.2l1.45-1.087a.25.25 0 0 1 .3 0L8.6 15.7a.25.25 0 0 0 .4-.2v-3.25a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25z"/></svg>');
  --md-source-stars-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694v.001z"/></svg>');
  --md-source-version-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 0 1 .25-.25h5.025a.25.25 0 0 1 .177.073l6.25 6.25a.25.25 0 0 1 0 .354l-5.025 5.025a.25.25 0 0 1-.354 0l-6.25-6.25a.25.25 0 0 1-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.75 1.75 0 0 1 1 7.775zM6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>');
  --md-version-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc.--><path d="m310.6 246.6-127.1 128c-7.1 6.3-15.3 9.4-23.5 9.4s-16.38-3.125-22.63-9.375l-127.1-128C.224 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75s3.12 25.75-6.08 34.85z"/></svg>');
}

:host > * {
  /* CODE */
  --md-code-fg-color: ${e.palette.text.primary};
  --md-code-bg-color: ${e.palette.background.paper};
  --md-code-hl-color: ${(0,O.Fq)(e.palette.warning.main,.5)};
  --md-code-hl-color--light: var(--md-code-hl-color);
  --md-code-hl-keyword-color: ${e.palette.type==="dark"?e.palette.primary.light:e.palette.primary.dark};
  --md-code-hl-function-color: ${e.palette.type==="dark"?e.palette.secondary.light:e.palette.secondary.dark};
  --md-code-hl-string-color: ${e.palette.type==="dark"?e.palette.success.light:e.palette.success.dark};
  --md-code-hl-number-color: ${e.palette.type==="dark"?e.palette.error.light:e.palette.error.dark};
  --md-code-hl-constant-color: var(--md-code-hl-function-color);
  --md-code-hl-special-color: var(--md-code-hl-function-color);
  --md-code-hl-name-color: var(--md-code-fg-color);
  --md-code-hl-comment-color: var(--md-default-fg-color--light);
  --md-code-hl-generic-color: var(--md-default-fg-color--light);
  --md-code-hl-variable-color: var(--md-default-fg-color--light);
  --md-code-hl-operator-color: var(--md-default-fg-color--light);
  --md-code-hl-punctuation-color: var(--md-default-fg-color--light);

  /* TYPESET */
  --md-typeset-font-size: 1rem;
  --md-typeset-color: var(--md-default-fg-color);
  --md-typeset-a-color: ${e.palette.link};
  --md-typeset-table-color: ${e.palette.text.primary};
  --md-typeset-table-color--light: ${(0,O.Fq)(e.palette.text.primary,.5)};
  --md-typeset-del-color: ${e.palette.type==="dark"?(0,O.Fq)(e.palette.error.dark,.5):(0,O.Fq)(e.palette.error.light,.5)};
  --md-typeset-ins-color: ${e.palette.type==="dark"?(0,O.Fq)(e.palette.success.dark,.5):(0,O.Fq)(e.palette.success.light,.5)};
  --md-typeset-mark-color: ${e.palette.type==="dark"?(0,O.Fq)(e.palette.warning.dark,.5):(0,O.Fq)(e.palette.warning.light,.5)};
  --md-typeset-kbd-color: var(--md-code-bg-color);
  --md-typeset-kbd-accent-color var(--md-code-bg-color);
  --md-typeset-kbd-border-color: var(--md-default-fg-color--light);
}

@media screen and (max-width: 76.1875em) {
  :host > * {
    /* TYPESET */
    --md-typeset-font-size: .9rem;
  }
}

@media screen and (max-width: 600px) {
  :host > * {
    /* TYPESET */
    --md-typeset-font-size: .7rem;
  }
}

  --md-footer-bg-color: var(--md-default-bg-color);
  --md-footer-bg-color--dark: var(--md-default-bg-color);
`,Lt=({theme:e})=>`
/*==================  Reset  ==================*/

body {
  --md-text-color: var(--md-default-fg-color);
  --md-text-link-color: var(--md-accent-fg-color);
  --md-text-font-family: ${e.typography.fontFamily};
  font-family: var(--md-text-font-family);
  background-color: unset;
}
`;const Qt="224px";var Jt=({theme:e,sidebar:o})=>`
/*==================  Layout  ==================*/

/* mkdocs material v9 compat */
.md-nav__title {
  color: var(--md-default-fg-color);
}

.md-grid {
  max-width: 100%;
  margin: 0;
}

.md-nav {
  font-size: calc(var(--md-typeset-font-size) * 0.9);
}
.md-nav__link {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.md-nav__icon {
  height: 20px !important;
  width: 20px !important;
  margin-left:${e.spacing(1)}px;
}
.md-nav__icon svg {
  margin: 0;
  width: 20px !important;
  height: 20px !important;
}
.md-nav__icon:after {
  width: 20px !important;
  height: 20px !important;
}

.md-nav__item--active > .md-nav__link, a.md-nav__link--active {
  text-decoration: underline;
  color: var(--md-typeset-a-color);
}

.md-main__inner {
  margin-top: 0;
}

.md-sidebar {
  bottom: 75px;
  position: fixed;
  width: 16rem;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-color: rgb(193, 193, 193) #eee;
  scrollbar-width: thin;
}
.md-sidebar .md-sidebar__scrollwrap {
  width: calc(12.1rem);
}
.md-sidebar--secondary {
  right: ${e.spacing(3)}px;
}
.md-sidebar::-webkit-scrollbar {
  width: 5px;
}
.md-sidebar::-webkit-scrollbar-button {
  width: 5px;
  height: 5px;
}
.md-sidebar::-webkit-scrollbar-track {
  background: #eee;
  border: 1 px solid rgb(250, 250, 250);
  box-shadow: 0px 0px 3px #dfdfdf inset;
  border-radius: 3px;
}
.md-sidebar::-webkit-scrollbar-thumb {
  width: 5px;
  background: rgb(193, 193, 193);
  border: transparent;
  border-radius: 3px;
}
.md-sidebar::-webkit-scrollbar-thumb:hover {
  background: rgb(125, 125, 125);
}

.md-content {
  max-width: calc(100% - 16rem * 2);
  margin-left: 16rem;
  margin-bottom: 50px;
}

.md-footer {
  position: fixed;
  bottom: 0px;
  pointer-events: none;
}

.md-footer-nav__link, .md-footer__link {
  pointer-events: all;
}

.md-footer__title {
  background-color: unset;
}
.md-footer-nav__link, .md-footer__link {
  width: 16rem;
}

.md-dialog {
  background-color: unset;
}

@media screen and (min-width: 76.25em) {
  .md-sidebar {
    height: auto;
  }
}

@media screen and (max-width: 76.1875em) {
  .md-nav {
    transition: none !important;
    background-color: var(--md-default-bg-color)
  }
  .md-nav--primary .md-nav__title {
    cursor: auto;
    color: var(--md-default-fg-color);
    font-weight: 700;
    white-space: normal;
    line-height: 1rem;
    height: auto;
    display: flex;
    flex-flow: column;
    row-gap: 1.6rem;
    padding: 1.2rem .8rem .8rem;
    background-color: var(--md-default-bg-color);
  }
  .md-nav--primary .md-nav__title~.md-nav__list {
    box-shadow: none;
  }
  .md-nav--primary .md-nav__title ~ .md-nav__list > :first-child {
    border-top: none;
  }
  .md-nav--primary .md-nav__title .md-nav__button {
    display: none;
  }
  .md-nav--primary .md-nav__title .md-nav__icon {
    color: var(--md-default-fg-color);
    position: static;
    height: auto;
    margin: 0 0 0 -0.2rem;
  }
  .md-nav--primary > .md-nav__title [for="none"] {
    padding-top: 0;
  }
  .md-nav--primary .md-nav__item {
    border-top: none;
  }
  .md-nav--primary :is(.md-nav__title,.md-nav__item) {
    font-size : var(--md-typeset-font-size);
  }
  .md-nav .md-source {
    display: none;
  }

  .md-sidebar {
    height: 100%;
  }
  .md-sidebar--primary {
    width: 12.1rem !important;
    z-index: 200;
    left: ${o.isPinned?`calc(-12.1rem + ${Qt})`:"calc(-12.1rem + 72px)"} !important;
  }
  .md-sidebar--secondary:not([hidden]) {
    display: none;
  }

  .md-content {
    max-width: 100%;
    margin-left: 0;
  }

  .md-header__button {
    margin: 0.4rem 0;
    margin-left: 0.4rem;
    padding: 0;
  }

  .md-overlay {
    left: 0;
  }

  .md-footer {
    position: static;
    padding-left: 0;
  }
  .md-footer-nav__link {
    /* footer links begin to overlap at small sizes without setting width */
    width: 50%;
  }
}

@media screen and (max-width: 600px) {
  .md-sidebar--primary {
    left: -12.1rem !important;
    width: 12.1rem;
  }
}


@media print {
  .md-sidebar,
  #toggle-sidebar {
    display: none;
  }
  
  .md-content {
    margin: 0;
    width: 100%;
    max-width: 100%;
  }
}
`;const qt=["h1","h2","h3","h4","h5","h6"];var en=({theme:e})=>`
/*==================  Typeset  ==================*/

.md-typeset {
  font-size: var(--md-typeset-font-size);
}

${qt.reduce((o,r)=>{var M;const s=(M=e.typography.htmlFontSize)!=null?M:16,i=e.typography[r],{lineHeight:c,fontFamily:d,fontWeight:T,fontSize:w}=i,k=L=>{let y=1;return typeof L=="number"&&(y=L/s*.6),typeof L=="string"&&(y=L.replace("rem","")),`calc(${y} * var(--md-typeset-font-size))`};return o.concat(`
    .md-typeset ${r} {
      color: var(--md-default-fg-color);
      line-height: ${c};
      font-family: ${d};
      font-weight: ${T};
      font-size: ${k(w)};
    }
  `)},"")}

.md-typeset .md-content__button {
  color: var(--md-default-fg-color);
}

.md-typeset hr {
  border-bottom: 0.05rem dotted ${e.palette.divider};
}

.md-typeset details {
  font-size: var(--md-typeset-font-size) !important;
}
.md-typeset details summary {
  padding-left: 2.5rem !important;
}
.md-typeset details summary:before,
.md-typeset details summary:after {
  top: 50% !important;
  width: 20px !important;
  height: 20px !important;
  transform: rotate(0deg) translateY(-50%) !important;
}
.md-typeset details[open] > summary:after {
  transform: rotate(90deg) translateX(-50%) !important;
}

.md-typeset blockquote {
  color: var(--md-default-fg-color--light);
  border-left: 0.2rem solid var(--md-default-fg-color--light);
}

.md-typeset table:not([class]) {
  font-size: var(--md-typeset-font-size);
  border: 1px solid var(--md-default-fg-color);
  border-bottom: none;
  border-collapse: collapse;
}
.md-typeset table:not([class]) th {
  font-weight: bold;
}
.md-typeset table:not([class]) td, .md-typeset table:not([class]) th {
  border-bottom: 1px solid var(--md-default-fg-color);
}

.md-typeset pre > code::-webkit-scrollbar-thumb {
  background-color: hsla(0, 0%, 0%, 0.32);
}
.md-typeset pre > code::-webkit-scrollbar-thumb:hover {
  background-color: hsla(0, 0%, 0%, 0.87);
}

.md-typeset code {
  word-break: keep-all;
}
`,Ae=()=>`
/*==================  Animations  ==================*/
/*
  Disable CSS animations on link colors as they lead to issues in dark mode.
  The dark mode color theme is applied later and theirfore there is always an animation from light to dark mode when navigation between pages.
*/
.md-dialog, .md-nav__link, .md-footer__link, .md-typeset a, .md-typeset a::before, .md-typeset .headerlink {
  transition: none;
}
`,xt=({theme:e})=>`
/*==================  Extensions  ==================*/

/* HIGHLIGHT */
.highlight .md-clipboard:after {
  content: unset;
}

.highlight .nx {
  color: ${e.palette.type==="dark"?"#ff53a3":"#ec407a"};
}

/* CODE HILITE */
.codehilite .gd {
  background-color: ${e.palette.type==="dark"?"rgba(248,81,73,0.65)":"#fdd"};
}

.codehilite .gi {
  background-color: ${e.palette.type==="dark"?"rgba(46,160,67,0.65)":"#dfd"};
}

/* TABBED */
.tabbed-set>input:nth-child(1):checked~.tabbed-labels>:nth-child(1),
.tabbed-set>input:nth-child(2):checked~.tabbed-labels>:nth-child(2),
.tabbed-set>input:nth-child(3):checked~.tabbed-labels>:nth-child(3),
.tabbed-set>input:nth-child(4):checked~.tabbed-labels>:nth-child(4),
.tabbed-set>input:nth-child(5):checked~.tabbed-labels>:nth-child(5),
.tabbed-set>input:nth-child(6):checked~.tabbed-labels>:nth-child(6),
.tabbed-set>input:nth-child(7):checked~.tabbed-labels>:nth-child(7),
.tabbed-set>input:nth-child(8):checked~.tabbed-labels>:nth-child(8),
.tabbed-set>input:nth-child(9):checked~.tabbed-labels>:nth-child(9),
.tabbed-set>input:nth-child(10):checked~.tabbed-labels>:nth-child(10),
.tabbed-set>input:nth-child(11):checked~.tabbed-labels>:nth-child(11),
.tabbed-set>input:nth-child(12):checked~.tabbed-labels>:nth-child(12),
.tabbed-set>input:nth-child(13):checked~.tabbed-labels>:nth-child(13),
.tabbed-set>input:nth-child(14):checked~.tabbed-labels>:nth-child(14),
.tabbed-set>input:nth-child(15):checked~.tabbed-labels>:nth-child(15),
.tabbed-set>input:nth-child(16):checked~.tabbed-labels>:nth-child(16),
.tabbed-set>input:nth-child(17):checked~.tabbed-labels>:nth-child(17),
.tabbed-set>input:nth-child(18):checked~.tabbed-labels>:nth-child(18),
.tabbed-set>input:nth-child(19):checked~.tabbed-labels>:nth-child(19),
.tabbed-set>input:nth-child(20):checked~.tabbed-labels>:nth-child(20) {
  color: var(--md-accent-fg-color);
  border-color: var(--md-accent-fg-color);
}

/* TASK-LIST */
.task-list-control .task-list-indicator::before {
  background-color: ${e.palette.action.disabledBackground};
}
.task-list-control [type="checkbox"]:checked + .task-list-indicator:before {
 background-color: ${e.palette.success.main};
}

/* ADMONITION */
.admonition {
  font-size: var(--md-typeset-font-size) !important;
}
.admonition .admonition-title {
  padding-left: 2.5rem !important;
}

.admonition .admonition-title:before {
  top: 50% !important;
  width: 20px !important;
  height: 20px !important;
  transform: translateY(-50%) !important;
}
`;const Ct=[nt,Lt,Jt,en,Ae,xt],Rt=()=>(0,De.Pf)(),tn=()=>{const e=Rt(),o=(0,g.Z)();return(0,t.useMemo)(()=>{const r={theme:o,sidebar:e};return Ct.reduce((s,i)=>s+i(r),"")},[o,e])},nn=()=>{const e=tn();return(0,t.useCallback)(o=>(o.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend",`<style>${e}</style>`),o),[e])},on=(e,o,r)=>{const s=e==="src"&&o.endsWith(".svg"),i=!o.match(/^([a-z]*:)?\/\//i),c=o.startsWith(r);return s&&(i||c)},Ft=({techdocsStorageApi:e,entityId:o,path:r})=>async s=>{const i=await e.getApiOrigin(),c=async(d,T)=>{for(const w of d)if(w.hasAttribute(T)){const k=w.getAttribute(T);if(!k)return;const M=await e.getBaseUrl(k,o,r);if(on(T,k,i))try{const y=await(await fetch(M,{credentials:"include"})).text();w.setAttribute(T,`data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(y)))}`)}catch{w.setAttribute("alt",`Error: ${k}`)}else w.setAttribute(T,M)}};return await Promise.all([c(s.querySelectorAll("img"),"src"),c(s.querySelectorAll("script"),"src"),c(s.querySelectorAll("source"),"src"),c(s.querySelectorAll("link"),"href"),c(s.querySelectorAll("a[download]"),"href")]),s};var an=a(13173),Ht=a(67097),Q=a(82717),$t=a.n(Q);let G;G=Promise.resolve().then(a.t.bind(a,17029,19));function ft(e,o){G.then(r=>{"createRoot"in r?r.createRoot(o).render(e):r.render(e,o)})}const F=e=>o=>{var y;const r=o.querySelector('[title="Edit this page"]');if(!r||!r.href)return o;const s=new URL(r.href),i=e.byUrl(s);if((i==null?void 0:i.type)!=="github"&&(i==null?void 0:i.type)!=="gitlab")return o;const c=((y=o.querySelector("article>h1"))==null?void 0:y.childNodes[0].textContent)||"",d=encodeURIComponent(`Documentation Feedback: ${c}`),T=encodeURIComponent(`Page source:
${r.href}

Feedback:`),w=(i==null?void 0:i.type)==="github"?(0,an.B)(s.href,"blob"):s.href,k=$t()(w),M=`/${k.organization}/${k.name}`,L=r.cloneNode();switch(i==null?void 0:i.type){case"gitlab":L.href=`${s.origin}${M}/issues/new?issue[title]=${d}&issue[description]=${T}`;break;case"github":L.href=`${s.origin}${M}/issues/new?title=${d}&body=${T}`;break;default:return o}return ft(t.createElement(Ht.Z),L),L.style.paddingLeft="5px",L.title="Leave feedback for this page",L.id="git-feedback-link",r==null||r.insertAdjacentElement("beforebegin",L),o};var ot=a(44882);const Dt=()=>e=>{const o=e.querySelector('.md-header label[for="__drawer"]'),r=e.querySelector("article");if(!o||!r)return e;const s=o.cloneNode();return ft(t.createElement(ot.Z),s),s.id="toggle-sidebar",s.title="Toggle Sidebar",s.classList.add("md-content__button"),s.style.setProperty("padding","0 0 0 5px"),s.style.setProperty("margin","0.4rem 0 0.4rem 0.4rem"),r==null||r.prepend(s),e},Wt=()=>e=>(((r,s)=>{Array.from(r).filter(i=>i.hasAttribute(s)).forEach(i=>{const c=i.getAttribute(s);if(c){c.match(/^https?:\/\//i)&&i.setAttribute("target","_blank");try{const d=Ot(window.location.href);i.setAttribute(s,new URL(c,d).toString())}catch{i.replaceWith(i.textContent||c)}}})})(Array.from(e.getElementsByTagName("a")),"href"),e);function Ot(e){const o=new URL(e);return!o.pathname.endsWith("/")&&!o.pathname.endsWith(".html")&&(o.pathname+="/"),o.toString()}const Zt=({baseUrl:e,onClick:o})=>r=>(Array.from(r.getElementsByTagName("a")).forEach(s=>{s.addEventListener("click",i=>{const d=s.getAttribute("href");d&&d.startsWith(e)&&!s.hasAttribute("download")&&(i.preventDefault(),o(i,d))})}),r);var Gt=a(15459),$e=a(41547),Mt=a(72379),ke=a(80030),It=a(99949);const Nt=(0,Gt.Z)(e=>({tooltip:{fontSize:"inherit",color:e.palette.text.primary,margin:0,padding:e.spacing(.5),backgroundColor:"transparent",boxShadow:"none"}}))(ke.ZP),We=()=>t.createElement(Mt.Z,null,t.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})),pt=({text:e})=>{const[o,r]=(0,t.useState)(!1),[,s]=(0,It.Z)(),i=(0,t.useCallback)(()=>{s(e),r(!0)},[e,s]),c=(0,t.useCallback)(()=>{r(!1)},[r]);return t.createElement(Nt,{title:"Copied to clipboard",placement:"left",open:o,onClose:c,leaveDelay:1e3},t.createElement(Qe.Z,{style:{color:"inherit",position:"absolute"},className:"md-clipboard md-icon",onClick:i},t.createElement(We,null)))},ht=e=>o=>{var s;const r=o.querySelectorAll("pre > code");for(const i of r){const c=i.textContent||"",d=document.createElement("div");(s=i==null?void 0:i.parentElement)==null||s.prepend(d),ft(t.createElement($e.Z,{theme:e},t.createElement(pt,{text:c})),d)}return o},Vt=()=>e=>{var o;return(o=e.querySelector(".md-header"))==null||o.remove(),e},Yt=()=>e=>{var o,r;return(o=e.querySelector(".md-footer .md-copyright"))==null||o.remove(),(r=e.querySelector(".md-footer-copyright"))==null||r.remove(),e},Kt=({onLoading:e,onLoaded:o})=>r=>(e(),r.addEventListener($,function s(){o(),r.removeEventListener($,s)}),r),kt=()=>e=>(setTimeout(()=>{const o=e==null?void 0:e.querySelectorAll("li.md-nav__item--active");o.length!==0&&(o.forEach(s=>{const i=s==null?void 0:s.querySelector("input");i!=null&&i.checked||i==null||i.click()}),o[o.length-1].scrollIntoView())},200),e),Ze=async(e,o)=>{let r;if(typeof e=="string")r=new DOMParser().parseFromString(e,"text/html").documentElement;else if(e instanceof Element)r=e;else throw new Error("dom is not a recognized type");for(const s of o)r=await s(r);return r};function Ge(e,o){const r=new URL(o),s=`${r.origin}${r.pathname.replace(/\/$/,"")}`,i=e.replace(s,"").replace(/^\/+/,""),c=new URL(`http://localhost/${i}`);return`${c.pathname}${c.search}${c.hash}`}function Ve(){const e=(0,ge.s0)(),r=(0,Re.h_)(et.D).getOptionalString("app.baseUrl");return(0,t.useCallback)(i=>{let c=i;if(r)try{c=Ge(i,r)}catch{}e(c)},[e,r])}const jt="screen and (max-width: 76.1875em)",Xt=e=>{const o=Ve(),r=(0,g.Z)(),s=(0,v.Z)(jt),i=zt(),c=nn(),d=(0,lt.z)(),T=(0,Re.h_)(ze.D),w=(0,Re.h_)(b.q),{state:k,path:M,content:L}=se(),[y,Te]=(0,t.useState)(null),ie=I(y),H=(0,t.useCallback)(()=>{if(!y)return;y.querySelectorAll(".md-sidebar").forEach(P=>{var V,xe,ne,rt;if(s)P.style.top="0px";else{const Ye=document==null?void 0:document.querySelector(".techdocs-reader-page"),Ke=(V=Ye==null?void 0:Ye.getBoundingClientRect().top)!=null?V:0;let Pe=(xe=y.getBoundingClientRect().top)!=null?xe:0;const Ut=y.querySelector(".md-container > .md-tabs"),p=(ne=Ut==null?void 0:Ut.getBoundingClientRect().height)!=null?ne:0;Pe<Ke&&(Pe=Ke);const n=Math.max(Pe,0)+p;P.style.top=`${n}px`;const l=y.querySelector(".md-container > .md-footer"),f=(rt=l==null?void 0:l.getBoundingClientRect().top)!=null?rt:window.innerHeight;P.style.height=`${f-n}px`}P.style.setProperty("opacity","1")})},[y,s]);(0,t.useEffect)(()=>(window.addEventListener("resize",H),window.addEventListener("scroll",H,!0),()=>{window.removeEventListener("resize",H),window.removeEventListener("scroll",H,!0)}),[y,H]);const Se=(0,t.useCallback)(()=>{if(!y)return;const x=y.querySelector(".md-footer");x&&(x.style.width=`${y.getBoundingClientRect().width}px`)},[y]);(0,t.useEffect)(()=>(window.addEventListener("resize",Se),()=>{window.removeEventListener("resize",Se)}),[y,Se]),(0,t.useEffect)(()=>{ie||(Se(),H())},[k,ie,Se,H]);const U=(0,t.useCallback)((x,P)=>Ze(x,[i,Ft({techdocsStorageApi:T,entityId:e,path:P}),Wt(),Dt(),Vt(),Yt(),F(w),c]),[e,w,T,i,c]),le=(0,t.useCallback)(async x=>Ze(x,[kt(),ht(r),Zt({baseUrl:window.location.origin,onClick:(P,V)=>{var Ke,Pe;const xe=P.ctrlKey||P.metaKey,ne=new URL(V),rt=((Ke=P.target)==null?void 0:Ke.innerText)||V,Ye=V.replace(window.location.origin,"");d.captureEvent("click",rt,{attributes:{to:Ye}}),ne.hash?xe?window.open(V,"_blank"):(o(V),(Pe=x==null?void 0:x.querySelector(`[id="${ne.hash.slice(1)}"]`))==null||Pe.scrollIntoView()):xe?window.open(V,"_blank"):o(V)}}),Kt({onLoading:()=>{},onLoaded:()=>{var P;(P=x.querySelector(".md-nav__title"))==null||P.removeAttribute("for")}}),Kt({onLoading:()=>{Array.from(x.querySelectorAll(".md-sidebar")).forEach(V=>{V.style.setProperty("opacity","0")})},onLoaded:()=>{}})]),[r,o,d]);return(0,t.useEffect)(()=>{if(!L)return()=>{};let x=!0;return U(L,M).then(async P=>{if(!(P!=null&&P.innerHTML)||!x)return;window.scroll({top:0});const V=await le(P);Te(V)}),()=>{x=!1}},[L,M,U,le]),y};var gt=a(8560),Pt=a(7524),vt=a(50816);const Et=()=>{const e=(0,Pt.$L)(),{shadowRoot:o}=(0,S.x)(),r=o==null?void 0:o.querySelector('[data-md-component="content"]'),s=o==null?void 0:o.querySelector('div[data-md-component="sidebar"][data-md-type="navigation"], div[data-md-component="navigation"]');let i=s==null?void 0:s.querySelector('[data-techdocs-addons-location="primary sidebar"]');i||(i=document.createElement("div"),i.setAttribute("data-techdocs-addons-location","primary sidebar"),s==null||s.prepend(i));const c=o==null?void 0:o.querySelector('div[data-md-component="sidebar"][data-md-type="toc"], div[data-md-component="toc"]');let d=c==null?void 0:c.querySelector('[data-techdocs-addons-location="secondary sidebar"]');return d||(d=document.createElement("div"),d.setAttribute("data-techdocs-addons-location","secondary sidebar"),c==null||c.prepend(d)),t.createElement(t.Fragment,null,t.createElement(gt.Z,{container:i},e.renderComponentsByLocation(vt.o.PrimarySidebar)),t.createElement(gt.Z,{container:r},e.renderComponentsByLocation(vt.o.Content)),t.createElement(gt.Z,{container:d},e.renderComponentsByLocation(vt.o.SecondarySidebar)))},yt=(0,J.Z)({search:{width:"100%","@media (min-width: 76.1875em)":{width:"calc(100% - 34.4rem)",margin:"0 auto"},"@media print":{display:"none"}}}),Le=N(e=>{var ie;const{withSearch:o=!0,onReady:r}=e,s=yt(),{entityMetadata:{value:i,loading:c},entityRef:d,setShadowRoot:T}=(0,S.x)(),w=Xt(d),k=window.location.pathname,M=window.location.hash,L=I(w),[y]=(0,ee.pV)([`[id="${M.slice(1)}"]`]);(0,t.useEffect)(()=>{var H;L||(M?y&&y.scrollIntoView():(H=document==null?void 0:document.querySelector("header"))==null||H.scrollIntoView())},[k,M,y,L]);const Te=(0,t.useCallback)(H=>{T(H),r instanceof Function&&r()},[T,r]);return c===!1&&!i?t.createElement(te.m,{status:"404",statusMessage:"PAGE NOT FOUND"}):w?t.createElement(pe.V,null,t.createElement(_.Z,{container:!0},t.createElement(_.Z,{xs:12,item:!0},t.createElement(m,null)),o&&t.createElement(_.Z,{className:s.search,xs:"auto",item:!0},t.createElement(je,{entityId:d,entityTitle:(ie=i==null?void 0:i.metadata)==null?void 0:ie.title})),t.createElement(_.Z,{xs:12,item:!0},t.createElement(E,{element:w,onAppend:Te},t.createElement(Et,null))))):t.createElement(pe.V,null,t.createElement(_.Z,{container:!0},t.createElement(_.Z,{xs:12,item:!0},t.createElement(m,null))))}),at=null},21329:(Ue,Y,a)=>{"use strict";a.d(Y,{b:()=>ee});var t=a(2784),_=a(79692),J=a(61837),S=a(15223),C=a(80030),ae=a(48348),K=a(95544),q=a(47603),$=a(7754),Ee=a(7524),I=a(50816);const E=(0,_.Z)(te=>({root:{gridArea:"pageSubheader",flexDirection:"column",minHeight:"auto",padding:te.spacing(3,3,0),"@media print":{display:"none"}}})),ee=te=>{const pe=E(),[he,de]=(0,t.useState)(null),j=(0,t.useCallback)(me=>{de(me.currentTarget)},[]),z=(0,t.useCallback)(()=>{de(null)},[]),{entityMetadata:{value:ye,loading:W}}=(0,$.x)(),re=(0,Ee.$L)(),h=re.renderComponentsByLocation(I.o.Subheader),ge=re.renderComponentsByLocation(I.o.Settings);return!h&&!ge||W===!1&&!ye?null:t.createElement(S.Z,{classes:pe,...te.toolbarProps},t.createElement(K.Z,{display:"flex",justifyContent:"flex-end",width:"100%",flexWrap:"wrap"},h,ge?t.createElement(t.Fragment,null,t.createElement(C.ZP,{title:"Settings"},t.createElement(J.Z,{"aria-controls":"tech-docs-reader-page-settings","aria-haspopup":"true",onClick:j},t.createElement(q.Z,null))),t.createElement(ae.Z,{id:"tech-docs-reader-page-settings",getContentAnchorEl:null,anchorEl:he,anchorOrigin:{vertical:"bottom",horizontal:"right"},open:!!he,onClose:z,keepMounted:!0},t.createElement("div",null,ge))):null))}},37164:(Ue,Y,a)=>{"use strict";a.r(Y),a.d(Y,{TechDocsSearchResultListItem:()=>$});var t=a(2784),_=a(86136),J=a(49378),S=a(79692),C=a(90436),ae=a(87603),K=a(32284);const q=(0,S.Z)({flexContainer:{flexWrap:"wrap"},itemText:{width:"100%",marginBottom:"1rem"}}),$=Ee=>{const{result:I,highlight:E,lineClamp:ee=5,asListItem:te=!0,asLink:pe=!0,title:he,icon:de}=Ee,j=q(),z=({children:re})=>pe?t.createElement(ae.rU,{noTrack:!0,to:I.location},re):t.createElement(t.Fragment,null,re),ye=()=>{const re=E!=null&&E.fields.title?t.createElement(K.F,{text:E.fields.title,preTag:E.preTag,postTag:E.postTag}):I.title,h=E!=null&&E.fields.entityTitle?t.createElement(K.F,{text:E.fields.entityTitle,preTag:E.preTag,postTag:E.postTag}):I.entityTitle,ge=E!=null&&E.fields.name?t.createElement(K.F,{text:E.fields.name,preTag:E.preTag,postTag:E.postTag}):I.name;return I?t.createElement(J.Z,{className:j.itemText,primaryTypographyProps:{variant:"h6"},primary:t.createElement(z,null,he||t.createElement(t.Fragment,null,re," | ",h!=null?h:ge," docs")),secondary:t.createElement(C.Z,{component:"span",style:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:ee,overflow:"hidden"},color:"textSecondary",variant:"body2"},E!=null&&E.fields.text?t.createElement(K.F,{text:E.fields.text,preTag:E.preTag,postTag:E.postTag}):I.text)}):null},W=({children:re})=>te?t.createElement(t.Fragment,null,de&&t.createElement(_.Z,null,typeof de=="function"?de(I):de),t.createElement("div",{className:j.flexContainer},re)):t.createElement(t.Fragment,null,re);return t.createElement(W,null,t.createElement(ye,null))}},73250:(Ue,Y,a)=>{"use strict";var t,_=a(71600),J=a(34590);t={value:!0},Y.Z=void 0;var S=J(a(2784)),C=_(a(50175)),ae=(0,C.default)(S.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}),"Code");Y.Z=ae},67097:(Ue,Y,a)=>{"use strict";var t,_=a(71600),J=a(34590);t={value:!0},Y.Z=void 0;var S=J(a(2784)),C=_(a(50175)),ae=(0,C.default)(S.createElement("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zm-9-4h2v2h-2zm0-6h2v4h-2z"}),"FeedbackOutlined");Y.Z=ae},35368:function(Ue){/*! @license DOMPurify 3.1.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.5/LICENSE */(function(Y,a){Ue.exports=a()})(this,function(){"use strict";const{entries:Y,setPrototypeOf:a,isFrozen:t,getPrototypeOf:_,getOwnPropertyDescriptor:J}=Object;let{freeze:S,seal:C,create:ae}=Object,{apply:K,construct:q}=typeof Reflect!="undefined"&&Reflect;S||(S=function(m){return m}),C||(C=function(m){return m}),K||(K=function(m,v,g){return m.apply(v,g)}),q||(q=function(m,v){return new m(...v)});const $=W(Array.prototype.forEach),Ee=W(Array.prototype.pop),I=W(Array.prototype.push),E=W(String.prototype.toLowerCase),ee=W(String.prototype.toString),te=W(String.prototype.match),pe=W(String.prototype.replace),he=W(String.prototype.indexOf),de=W(String.prototype.trim),j=W(Object.prototype.hasOwnProperty),z=W(RegExp.prototype.test),ye=re(TypeError);function W(u){return function(m){for(var v=arguments.length,g=new Array(v>1?v-1:0),b=1;b<v;b++)g[b-1]=arguments[b];return K(u,m,g)}}function re(u){return function(){for(var m=arguments.length,v=new Array(m),g=0;g<m;g++)v[g]=arguments[g];return q(u,v)}}function h(u,m){let v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:E;a&&a(u,null);let g=m.length;for(;g--;){let b=m[g];if(typeof b=="string"){const D=v(b);D!==b&&(t(m)||(m[g]=D),b=D)}u[b]=!0}return u}function ge(u){for(let m=0;m<u.length;m++)j(u,m)||(u[m]=null);return u}function me(u){const m=ae(null);for(const[v,g]of Y(u))j(u,v)&&(Array.isArray(g)?m[v]=ge(g):g&&typeof g=="object"&&g.constructor===Object?m[v]=me(g):m[v]=g);return m}function Be(u,m){for(;u!==null;){const g=J(u,m);if(g){if(g.get)return W(g.get);if(typeof g.value=="function")return W(g.value)}u=_(u)}function v(){return null}return v}const st=S(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),je=S(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Me=S(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Ce=S(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Xe=S(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Tt=S(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Qe=S(["#text"]),Je=S(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),qe=S(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),it=S(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Ie=S(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),bt=C(/\{\{[\w\W]*|[\w\W]*\}\}/gm),_e=C(/<%[\w\W]*|[\w\W]*%>/gm),Re=C(/\${[\w\W]*}/gm),et=C(/^data-[\-\w.\u00B7-\uFFFF]/),lt=C(/^aria-[\-\w]+$/),ct=C(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),At=C(/^(?:\w+script|data):/i),St=C(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ze=C(/^html$/i),dt=C(/^[a-z][.\w]*(-[.\w]+)+$/i);var mt=Object.freeze({__proto__:null,MUSTACHE_EXPR:bt,ERB_EXPR:_e,TMPLIT_EXPR:Re,DATA_ATTR:et,ARIA_ATTR:lt,IS_ALLOWED_URI:ct,IS_SCRIPT_OR_DATA:At,ATTR_WHITESPACE:St,DOCTYPE_NAME:ze,CUSTOM_ELEMENT:dt});const Z={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},R=function(){return typeof window=="undefined"?null:window},se=function(m,v){if(typeof m!="object"||typeof m.createPolicy!="function")return null;let g=null;const b="data-tt-policy-suffix";v&&v.hasAttribute(b)&&(g=v.getAttribute(b));const D="dompurify"+(g?"#"+g:"");try{return m.createPolicy(D,{createHTML(A){return A},createScriptURL(A){return A}})}catch{return console.warn("TrustedTypes policy "+D+" could not be created."),null}};function ue(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:R();const m=p=>ue(p);if(m.version="3.1.5",m.removed=[],!u||!u.document||u.document.nodeType!==Z.document)return m.isSupported=!1,m;let{document:v}=u;const g=v,b=g.currentScript,{DocumentFragment:D,HTMLTemplateElement:A,Node:X,Element:be,NodeFilter:we,NamedNodeMap:Fe=u.NamedNodeMap||u.MozNamedAttrMap,HTMLFormElement:tt,DOMParser:ut,trustedTypes:Ne}=u,He=be.prototype,wt=Be(He,"cloneNode"),_t=Be(He,"nextSibling"),zt=Be(He,"childNodes"),De=Be(He,"parentNode");if(typeof A=="function"){const p=v.createElement("template");p.content&&p.content.ownerDocument&&(v=p.content.ownerDocument)}let O,nt="";const{implementation:Lt,createNodeIterator:Qt,createDocumentFragment:Jt,getElementsByTagName:qt}=v,{importNode:en}=g;let Ae={};m.isSupported=typeof Y=="function"&&typeof De=="function"&&Lt&&Lt.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:xt,ERB_EXPR:Ct,TMPLIT_EXPR:Rt,DATA_ATTR:tn,ARIA_ATTR:nn,IS_SCRIPT_OR_DATA:on,ATTR_WHITESPACE:Ft,CUSTOM_ELEMENT:an}=mt;let{IS_ALLOWED_URI:Ht}=mt,Q=null;const $t=h({},[...st,...je,...Me,...Xe,...Qe]);let G=null;const ft=h({},[...Je,...qe,...it,...Ie]);let F=Object.seal(ae(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ot=null,Dt=null,Wt=!0,Ot=!0,Zt=!1,Gt=!0,$e=!1,Mt=!0,ke=!1,It=!1,Nt=!1,We=!1,pt=!1,ht=!1,Vt=!0,Yt=!1;const Kt="user-content-";let kt=!0,Ze=!1,Ge={},Ve=null;const jt=h({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Xt=null;const gt=h({},["audio","video","img","source","image","track"]);let Pt=null;const vt=h({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Et="http://www.w3.org/1998/Math/MathML",yt="http://www.w3.org/2000/svg",Le="http://www.w3.org/1999/xhtml";let at=Le,e=!1,o=null;const r=h({},[Et,yt,Le],ee);let s=null;const i=["application/xhtml+xml","text/html"],c="text/html";let d=null,T=null;const w=v.createElement("form"),k=function(n){return n instanceof RegExp||n instanceof Function},M=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(T&&T===n)){if((!n||typeof n!="object")&&(n={}),n=me(n),s=i.indexOf(n.PARSER_MEDIA_TYPE)===-1?c:n.PARSER_MEDIA_TYPE,d=s==="application/xhtml+xml"?ee:E,Q=j(n,"ALLOWED_TAGS")?h({},n.ALLOWED_TAGS,d):$t,G=j(n,"ALLOWED_ATTR")?h({},n.ALLOWED_ATTR,d):ft,o=j(n,"ALLOWED_NAMESPACES")?h({},n.ALLOWED_NAMESPACES,ee):r,Pt=j(n,"ADD_URI_SAFE_ATTR")?h(me(vt),n.ADD_URI_SAFE_ATTR,d):vt,Xt=j(n,"ADD_DATA_URI_TAGS")?h(me(gt),n.ADD_DATA_URI_TAGS,d):gt,Ve=j(n,"FORBID_CONTENTS")?h({},n.FORBID_CONTENTS,d):jt,ot=j(n,"FORBID_TAGS")?h({},n.FORBID_TAGS,d):{},Dt=j(n,"FORBID_ATTR")?h({},n.FORBID_ATTR,d):{},Ge=j(n,"USE_PROFILES")?n.USE_PROFILES:!1,Wt=n.ALLOW_ARIA_ATTR!==!1,Ot=n.ALLOW_DATA_ATTR!==!1,Zt=n.ALLOW_UNKNOWN_PROTOCOLS||!1,Gt=n.ALLOW_SELF_CLOSE_IN_ATTR!==!1,$e=n.SAFE_FOR_TEMPLATES||!1,Mt=n.SAFE_FOR_XML!==!1,ke=n.WHOLE_DOCUMENT||!1,We=n.RETURN_DOM||!1,pt=n.RETURN_DOM_FRAGMENT||!1,ht=n.RETURN_TRUSTED_TYPE||!1,Nt=n.FORCE_BODY||!1,Vt=n.SANITIZE_DOM!==!1,Yt=n.SANITIZE_NAMED_PROPS||!1,kt=n.KEEP_CONTENT!==!1,Ze=n.IN_PLACE||!1,Ht=n.ALLOWED_URI_REGEXP||ct,at=n.NAMESPACE||Le,F=n.CUSTOM_ELEMENT_HANDLING||{},n.CUSTOM_ELEMENT_HANDLING&&k(n.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(F.tagNameCheck=n.CUSTOM_ELEMENT_HANDLING.tagNameCheck),n.CUSTOM_ELEMENT_HANDLING&&k(n.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(F.attributeNameCheck=n.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),n.CUSTOM_ELEMENT_HANDLING&&typeof n.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(F.allowCustomizedBuiltInElements=n.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),$e&&(Ot=!1),pt&&(We=!0),Ge&&(Q=h({},Qe),G=[],Ge.html===!0&&(h(Q,st),h(G,Je)),Ge.svg===!0&&(h(Q,je),h(G,qe),h(G,Ie)),Ge.svgFilters===!0&&(h(Q,Me),h(G,qe),h(G,Ie)),Ge.mathMl===!0&&(h(Q,Xe),h(G,it),h(G,Ie))),n.ADD_TAGS&&(Q===$t&&(Q=me(Q)),h(Q,n.ADD_TAGS,d)),n.ADD_ATTR&&(G===ft&&(G=me(G)),h(G,n.ADD_ATTR,d)),n.ADD_URI_SAFE_ATTR&&h(Pt,n.ADD_URI_SAFE_ATTR,d),n.FORBID_CONTENTS&&(Ve===jt&&(Ve=me(Ve)),h(Ve,n.FORBID_CONTENTS,d)),kt&&(Q["#text"]=!0),ke&&h(Q,["html","head","body"]),Q.table&&(h(Q,["tbody"]),delete ot.tbody),n.TRUSTED_TYPES_POLICY){if(typeof n.TRUSTED_TYPES_POLICY.createHTML!="function")throw ye('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof n.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw ye('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');O=n.TRUSTED_TYPES_POLICY,nt=O.createHTML("")}else O===void 0&&(O=se(Ne,b)),O!==null&&typeof nt=="string"&&(nt=O.createHTML(""));S&&S(n),T=n}},L=h({},["mi","mo","mn","ms","mtext"]),y=h({},["foreignobject","annotation-xml"]),Te=h({},["title","style","font","a","script"]),ie=h({},[...je,...Me,...Ce]),H=h({},[...Xe,...Tt]),Se=function(n){let l=De(n);(!l||!l.tagName)&&(l={namespaceURI:at,tagName:"template"});const f=E(n.tagName),B=E(l.tagName);return o[n.namespaceURI]?n.namespaceURI===yt?l.namespaceURI===Le?f==="svg":l.namespaceURI===Et?f==="svg"&&(B==="annotation-xml"||L[B]):!!ie[f]:n.namespaceURI===Et?l.namespaceURI===Le?f==="math":l.namespaceURI===yt?f==="math"&&y[B]:!!H[f]:n.namespaceURI===Le?l.namespaceURI===yt&&!y[B]||l.namespaceURI===Et&&!L[B]?!1:!H[f]&&(Te[f]||!ie[f]):!!(s==="application/xhtml+xml"&&o[n.namespaceURI]):!1},U=function(n){I(m.removed,{element:n});try{n.parentNode.removeChild(n)}catch{n.remove()}},le=function(n,l){try{I(m.removed,{attribute:l.getAttributeNode(n),from:l})}catch{I(m.removed,{attribute:null,from:l})}if(l.removeAttribute(n),n==="is"&&!G[n])if(We||pt)try{U(l)}catch{}else try{l.setAttribute(n,"")}catch{}},x=function(n){let l=null,f=null;if(Nt)n="<remove></remove>"+n;else{const oe=te(n,/^[\r\n\t ]+/);f=oe&&oe[0]}s==="application/xhtml+xml"&&at===Le&&(n='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+n+"</body></html>");const B=O?O.createHTML(n):n;if(at===Le)try{l=new ut().parseFromString(B,s)}catch{}if(!l||!l.documentElement){l=Lt.createDocument(at,"template",null);try{l.documentElement.innerHTML=e?nt:B}catch{}}const ce=l.body||l.documentElement;return n&&f&&ce.insertBefore(v.createTextNode(f),ce.childNodes[0]||null),at===Le?qt.call(l,ke?"html":"body")[0]:ke?l.documentElement:ce},P=function(n){return Qt.call(n.ownerDocument||n,n,we.SHOW_ELEMENT|we.SHOW_COMMENT|we.SHOW_TEXT|we.SHOW_PROCESSING_INSTRUCTION|we.SHOW_CDATA_SECTION,null)},V=function(n){return n instanceof tt&&(typeof n.nodeName!="string"||typeof n.textContent!="string"||typeof n.removeChild!="function"||!(n.attributes instanceof Fe)||typeof n.removeAttribute!="function"||typeof n.setAttribute!="function"||typeof n.namespaceURI!="string"||typeof n.insertBefore!="function"||typeof n.hasChildNodes!="function")},xe=function(n){return typeof X=="function"&&n instanceof X},ne=function(n,l,f){Ae[n]&&$(Ae[n],B=>{B.call(m,l,f,T)})},rt=function(n){let l=null;if(ne("beforeSanitizeElements",n,null),V(n))return U(n),!0;const f=d(n.nodeName);if(ne("uponSanitizeElement",n,{tagName:f,allowedTags:Q}),n.hasChildNodes()&&!xe(n.firstElementChild)&&z(/<[/\w]/g,n.innerHTML)&&z(/<[/\w]/g,n.textContent)||n.nodeType===Z.progressingInstruction||Mt&&n.nodeType===Z.comment&&z(/<[/\w]/g,n.data))return U(n),!0;if(!Q[f]||ot[f]){if(!ot[f]&&Ke(f)&&(F.tagNameCheck instanceof RegExp&&z(F.tagNameCheck,f)||F.tagNameCheck instanceof Function&&F.tagNameCheck(f)))return!1;if(kt&&!Ve[f]){const B=De(n)||n.parentNode,ce=zt(n)||n.childNodes;if(ce&&B){const oe=ce.length;for(let ve=oe-1;ve>=0;--ve){const Oe=wt(ce[ve],!0);Oe.__removalCount=(n.__removalCount||0)+1,B.insertBefore(Oe,_t(n))}}}return U(n),!0}return n instanceof be&&!Se(n)||(f==="noscript"||f==="noembed"||f==="noframes")&&z(/<\/no(script|embed|frames)/i,n.innerHTML)?(U(n),!0):($e&&n.nodeType===Z.text&&(l=n.textContent,$([xt,Ct,Rt],B=>{l=pe(l,B," ")}),n.textContent!==l&&(I(m.removed,{element:n.cloneNode()}),n.textContent=l)),ne("afterSanitizeElements",n,null),!1)},Ye=function(n,l,f){if(Vt&&(l==="id"||l==="name")&&(f in v||f in w))return!1;if(!(Ot&&!Dt[l]&&z(tn,l))){if(!(Wt&&z(nn,l))){if(!G[l]||Dt[l]){if(!(Ke(n)&&(F.tagNameCheck instanceof RegExp&&z(F.tagNameCheck,n)||F.tagNameCheck instanceof Function&&F.tagNameCheck(n))&&(F.attributeNameCheck instanceof RegExp&&z(F.attributeNameCheck,l)||F.attributeNameCheck instanceof Function&&F.attributeNameCheck(l))||l==="is"&&F.allowCustomizedBuiltInElements&&(F.tagNameCheck instanceof RegExp&&z(F.tagNameCheck,f)||F.tagNameCheck instanceof Function&&F.tagNameCheck(f))))return!1}else if(!Pt[l]){if(!z(Ht,pe(f,Ft,""))){if(!((l==="src"||l==="xlink:href"||l==="href")&&n!=="script"&&he(f,"data:")===0&&Xt[n])){if(!(Zt&&!z(on,pe(f,Ft,"")))){if(f)return!1}}}}}}return!0},Ke=function(n){return n!=="annotation-xml"&&te(n,an)},Pe=function(n){ne("beforeSanitizeAttributes",n,null);const{attributes:l}=n;if(!l)return;const f={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:G};let B=l.length;for(;B--;){const ce=l[B],{name:oe,namespaceURI:ve,value:Oe}=ce,Bt=d(oe);let fe=oe==="value"?Oe:de(Oe);if(f.attrName=Bt,f.attrValue=fe,f.keepAttr=!0,f.forceKeepAttr=void 0,ne("uponSanitizeAttribute",n,f),fe=f.attrValue,f.forceKeepAttr||(le(oe,n),!f.keepAttr))continue;if(!Gt&&z(/\/>/i,fe)){le(oe,n);continue}if(Mt&&z(/((--!?|])>)|<\/(style|title)/i,fe)){le(oe,n);continue}$e&&$([xt,Ct,Rt],sn=>{fe=pe(fe,sn," ")});const rn=d(n.nodeName);if(Ye(rn,Bt,fe)){if(Yt&&(Bt==="id"||Bt==="name")&&(le(oe,n),fe=Kt+fe),O&&typeof Ne=="object"&&typeof Ne.getAttributeType=="function"&&!ve)switch(Ne.getAttributeType(rn,Bt)){case"TrustedHTML":{fe=O.createHTML(fe);break}case"TrustedScriptURL":{fe=O.createScriptURL(fe);break}}try{ve?n.setAttributeNS(ve,oe,fe):n.setAttribute(oe,fe),V(n)?U(n):Ee(m.removed)}catch{}}}ne("afterSanitizeAttributes",n,null)},Ut=function p(n){let l=null;const f=P(n);for(ne("beforeSanitizeShadowDOM",n,null);l=f.nextNode();)ne("uponSanitizeShadowNode",l,null),!rt(l)&&(l.content instanceof D&&p(l.content),Pe(l));ne("afterSanitizeShadowDOM",n,null)};return m.sanitize=function(p){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=null,f=null,B=null,ce=null;if(e=!p,e&&(p="<!-->"),typeof p!="string"&&!xe(p))if(typeof p.toString=="function"){if(p=p.toString(),typeof p!="string")throw ye("dirty is not a string, aborting")}else throw ye("toString is not a function");if(!m.isSupported)return p;if(It||M(n),m.removed=[],typeof p=="string"&&(Ze=!1),Ze){if(p.nodeName){const Oe=d(p.nodeName);if(!Q[Oe]||ot[Oe])throw ye("root node is forbidden and cannot be sanitized in-place")}}else if(p instanceof X)l=x("<!---->"),f=l.ownerDocument.importNode(p,!0),f.nodeType===Z.element&&f.nodeName==="BODY"||f.nodeName==="HTML"?l=f:l.appendChild(f);else{if(!We&&!$e&&!ke&&p.indexOf("<")===-1)return O&&ht?O.createHTML(p):p;if(l=x(p),!l)return We?null:ht?nt:""}l&&Nt&&U(l.firstChild);const oe=P(Ze?p:l);for(;B=oe.nextNode();)rt(B)||(B.content instanceof D&&Ut(B.content),Pe(B));if(Ze)return p;if(We){if(pt)for(ce=Jt.call(l.ownerDocument);l.firstChild;)ce.appendChild(l.firstChild);else ce=l;return(G.shadowroot||G.shadowrootmode)&&(ce=en.call(g,ce,!0)),ce}let ve=ke?l.outerHTML:l.innerHTML;return ke&&Q["!doctype"]&&l.ownerDocument&&l.ownerDocument.doctype&&l.ownerDocument.doctype.name&&z(ze,l.ownerDocument.doctype.name)&&(ve="<!DOCTYPE "+l.ownerDocument.doctype.name+`>
`+ve),$e&&$([xt,Ct,Rt],Oe=>{ve=pe(ve,Oe," ")}),O&&ht?O.createHTML(ve):ve},m.setConfig=function(){let p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};M(p),It=!0},m.clearConfig=function(){T=null,It=!1},m.isValidAttribute=function(p,n,l){T||M({});const f=d(p),B=d(n);return Ye(f,B,l)},m.addHook=function(p,n){typeof n=="function"&&(Ae[p]=Ae[p]||[],I(Ae[p],n))},m.removeHook=function(p){if(Ae[p])return Ee(Ae[p])},m.removeHooks=function(p){Ae[p]&&(Ae[p]=[])},m.removeAllHooks=function(){Ae={}},m}var N=ue();return N})},28235:(Ue,Y,a)=>{"use strict";a.d(Y,{r:()=>J});var t=a(2784),_=a(2465);function J(S,C){const[ae,K]=(0,t.useState)({status:"not-executed",error:void 0,result:C}),q=(0,t.useRef)(),$=(0,t.useRef)(),Ee=(0,_.x)({execute(...I){$.current=I;const E=S(...I);return q.current=E,K(ee=>({...ee,status:"loading"})),E.then(ee=>{E===q.current&&K(te=>({...te,status:"success",error:void 0,result:ee}))},ee=>{E===q.current&&K(te=>({...te,status:"error",error:ee}))}),E},reset(){K({status:"not-executed",error:void 0,result:C}),q.current=void 0,$.current=void 0}});return[ae,(0,t.useMemo)(()=>({reset(){Ee.current.reset()},execute:(...I)=>Ee.current.execute(...I)}),[]),{promise:q.current,lastArgs:$.current}]}}}]);})();

//# sourceMappingURL=8803.327b92d7.chunk.js.map