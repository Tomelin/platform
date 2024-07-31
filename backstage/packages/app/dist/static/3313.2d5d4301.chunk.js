(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3313],{25870:(X,y,e)=>{"use strict";e.d(y,{X:()=>f});var r=e(77277),d=e(61837),p=e(41156),v=e(2784),i=e(39857),C=e(88188);function f(D){const{title:E,to:x}=D,g=(0,p.Z)(t=>t.breakpoints.down("xs"));return x?g?v.createElement(d.Z,{component:i.rU,color:"primary",title:E,size:"small",to:x},v.createElement(C.Z,null)):v.createElement(r.Z,{component:i.rU,variant:"contained",color:"primary",to:x},E):null}},75997:(X,y,e)=>{"use strict";e.d(y,{O:()=>C});var r=e(79692),d=e(80030),p=e(2784),v=e(90436);const i=(0,r.Z)({container:{overflow:"visible !important"},typo:{fontSize:"inherit",overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box","-webkit-line-clamp":({line:f})=>f||1,"-webkit-box-orient":"vertical"}},{name:"BackstageOverflowTooltip"});function C(f){var E;const D=i(f);return p.createElement(d.ZP,{title:(E=f.title)!=null?E:f.text||"",placement:f.placement},p.createElement(v.Z,{className:D.typo,variant:"inherit"},f.text))}},99980:(X,y,e)=>{"use strict";e.d(y,{g:()=>v});var r=e(2784),d=e(90996),p=e(92980);function v(i){const{themeId:C,children:f,...D}=i;return r.createElement(p.T,{themeId:C},r.createElement(d.h,{...D}),f)}},20995:(X,y,e)=>{"use strict";e.d(y,{t:()=>Z});var r=e(39802),d=e(59274),p=e(95475),v=e(95544),i=e(2784),C=e(85166),f=e(62862),D=e(18149),E=e(829),x=e(72579),g=e(82394),t=e(4812),o=e(23200);function n(){const P=(0,d.h_)(o.A),{error:A,loading:F,value:W}=(0,t.Z)(async()=>await P.getEntityFacets({facets:["kind"]}).then(B=>{var U;return((U=B.facets.kind)==null?void 0:U.map(b=>b.value).sort())||[]}),[P]);return{loading:F,error:A,allKinds:W!=null?W:[]}}function S(P,A,F){let W=P;return A&&(W=W.filter(B=>A.some(U=>U.toLocaleLowerCase("en-US")===B.toLocaleLowerCase("en-US")))),F&&!P.some(B=>B.toLocaleLowerCase("en-US")===F.toLocaleLowerCase("en-US"))&&(W=W.concat([F])),W.sort().reduce((B,U)=>(B[U.toLocaleLowerCase("en-US")]=U,B),{})}function $(P){var _,G;const{filters:A,queryParameters:{kind:F},updateFilters:W}=(0,f.wp)(),s=(0,i.useMemo)(()=>[F].flat()[0],[F]),[B,U]=(0,i.useState)((G=s!=null?s:(_=A.kind)==null?void 0:_.value)!=null?G:P.initialFilter);(0,i.useEffect)(()=>{s&&U(s)},[s]),(0,i.useEffect)(()=>{var ee,Y;(ee=A.kind)!=null&&ee.value&&U((Y=A.kind)==null?void 0:Y.value)},[A.kind]),(0,i.useEffect)(()=>{W({kind:B?new C.zo(B):void 0})},[B,W]);const{allKinds:b,loading:J,error:I}=n();return{loading:J,error:I,allKinds:b!=null?b:[],selectedKind:B,setSelectedKind:U}}const Z=P=>{const{allowedKinds:A,hidden:F,initialFilter:W="component"}=P,s=(0,d.h_)(p.$),{error:B,allKinds:U,selectedKind:b,setSelectedKind:J}=$({initialFilter:W});if((0,i.useEffect)(()=>{B&&s.post({message:"Failed to load entity kinds",severity:"error"})},[B,s]),B)return null;const I=S(U,A,b),_=Object.keys(I).map(G=>({value:G,label:I[G]}));return F?null:i.createElement(v.Z,{pb:1,pt:1},i.createElement(r.H,{label:"Kind",items:_,selected:b.toLocaleLowerCase("en-US"),onChange:G=>J(String(G))}))}},96310:(X,y,e)=>{"use strict";e.d(y,{d:()=>C});var r=e(79692),d=e(2784),p=e(85166),v=e(13557);const i=(0,r.Z)({input:{}},{name:"CatalogReactEntityLifecyclePicker"}),C=f=>{const{initialFilter:D=[]}=f,E=i();return d.createElement(v.K,{label:"Lifecycle",name:"lifecycles",path:"spec.lifecycle",Filter:p.zH,InputProps:{className:E.input},initialSelectedOptions:D})}},92777:(X,y,e)=>{"use strict";e.d(y,{d:()=>N});var r=e(8554),d=e(95544),p=e(21324),v=e(5806),i=e(86619),C=e(90436),f=e(80030),D=e(79692),E=e(15459),x=e(19996),g=e(25505),t=e(38016),o=e(97570),n=e(2784),S=e(62862),$=e(85166),Z=e(2465);function P(l){const c=(0,Z.x)(l);(0,n.useEffect)(()=>()=>{c.current()},[])}function A(l,c,m,O=0){const M=(0,n.useRef)(),h=(0,n.useRef)(),L=(0,n.useRef)(l),j=(0,n.useRef)(),V=()=>{M.current&&(clearTimeout(M.current),M.current=void 0),h.current&&(clearTimeout(h.current),h.current=void 0)};return P(V),(0,n.useEffect)(()=>{L.current=l},c),(0,n.useMemo)(()=>{const Q=()=>{if(V(),!j.current)return;const w=j.current;j.current=void 0,L.current.apply(w.this,w.args)},k=function(...w){M.current&&clearTimeout(M.current),j.current={args:w,this:this},M.current=setTimeout(Q,m),O>0&&!h.current&&(h.current=setTimeout(Q,O))};return Object.defineProperties(k,{length:{value:l.length},name:{value:`${l.name||"anonymous"}__debounced__${m}`}}),k},[m,O,...c])}function F(l,c,m,O=0){(0,n.useEffect)(A(l,c,m,O),c)}var W=e(98685),s=e(62367),B=e(51847),U=e(59274),b=e(66088),J=e(23200);function I({enabled:l}){const c=(0,U.h_)(J.A),[m]=(0,n.useState)(async()=>{if(!l)return[];const O="relations.ownedBy";return c.getEntityFacets({facets:[O]}).then(M=>M.facets[O].map(h=>h.value).map(h=>{const{kind:L,name:j,namespace:V}=(0,r.of)(h);return{apiVersion:"backstage.io/v1beta1",kind:L,metadata:{name:j,namespace:V}}}).sort((h,L)=>(h.metadata.namespace||"").localeCompare(L.metadata.namespace||"","en-US")||h.metadata.name.localeCompare(L.metadata.name,"en-US")||h.kind.localeCompare(L.kind,"en-US"))).catch(()=>[])});return(0,b.Z)(async(O,M)=>{var w;const h=await m;if(!h)return{items:[]};const L=(w=M==null?void 0:M.limit)!=null?w:20,{text:j,start:V}=_(O),Q=h.filter(re=>Y(j,re)),k=V+L;return{items:Q.slice(0,k),...ee({entities:Q,limit:k,payload:{text:j,start:k}})}},[m],{loading:!0,value:{items:[]}})}function _(l){return G(l)&&l.cursor?JSON.parse(atob(l.cursor)):{text:l.text||"",start:0}}function G(l){return!!l.cursor}function ee({entities:l,limit:c,payload:m}){return l.length>c?{cursor:btoa(JSON.stringify(m))}:{}}function Y(l,c){var O;const m=l.trim();return c.kind.includes(m)||((O=c.metadata.namespace)==null?void 0:O.includes(m))||c.metadata.name.includes(m)}function Ee(){const l=(0,U.h_)(J.A);return(0,b.Z)(async(c,m)=>{var j;const O=c,M=c,h=(j=m==null?void 0:m.limit)!=null?j:20;if(M.cursor){const V=await l.queryEntities({cursor:M.cursor,limit:h});return{cursor:V.pageInfo.nextCursor,items:[...M.items,...V.items]}}const L=await l.queryEntities({fullTextFilter:{term:O.text||"",fields:["metadata.name","kind","spec.profile.displayname","metadata.title"]},filter:{kind:["User","Group"]},orderFields:[{field:"metadata.name",order:"asc"}],limit:h});return{cursor:L.pageInfo.nextCursor,items:L.items}},[],{loading:!0})}var ve=e(49257);function me({mode:l,initialSelectedOwnersRefs:c}){const m=l==="owners-only",O=Ee(),M=I({enabled:m}),[h,L]=m?M:O;return[h,L,he({enabled:!m,initialSelectedOwnersRefs:c})]}function he({enabled:l,initialSelectedOwnersRefs:c}){const m=(0,n.useRef)({}),O=(0,U.h_)(J.A),[,M]=(0,b.Z)(async()=>{(await O.getEntitiesByRefs({entityRefs:c})).items.forEach(L=>{L&&(m.current[(0,r.eE)(L)]=L)})},[]);return(0,ve.n)(()=>{l&&c.length>0&&M()}),{getEntity:h=>m.current[h],setEntity:h=>{m.current[(0,r.eE)(h)]=h}}}var ye=e(72579),se=e(9402),pe=e(82394);const a=(0,D.Z)({root:{},label:{},input:{},fullWidth:{width:"100%"},boxLabel:{width:"100%",textOverflow:"ellipsis",overflow:"hidden"}},{name:"CatalogReactEntityOwnerPicker"}),u=(0,E.Z)(l=>({label:{width:"100%"},root:{width:"90%"}}),{name:"FixedWidthFormControlLabel"})(v.Z),T=n.createElement(g.Z,{fontSize:"small"}),R=n.createElement(x.Z,{fontSize:"small"});function z(l){const c=a(),m=l.entity.kind.toLocaleLowerCase("en-US")==="group",{primaryTitle:O}=(0,se.V)(l.entity);return n.createElement(d.Z,{className:c.fullWidth},n.createElement(u,{className:c.fullWidth,control:n.createElement(p.Z,{icon:T,checkedIcon:R,checked:l.isSelected}),onClick:M=>M.preventDefault(),label:n.createElement(f.ZP,{title:O},n.createElement(d.Z,{display:"flex",alignItems:"center"},m?n.createElement(s.Z,{fontSize:"small"}):n.createElement(W.Z,{fontSize:"small"}),"\xA0",n.createElement(d.Z,{className:c.boxLabel},n.createElement(C.Z,{noWrap:!0},O))))}))}const N=l=>{var oe,ie,ce;const c=a(),{mode:m="owners-only"}=l||{},{updateFilters:O,filters:M,queryParameters:{owners:h}}=(0,S.wp)(),[L,j]=(0,n.useState)(""),V=(0,n.useMemo)(()=>[h].flat().filter(Boolean),[h]),[Q,k]=(0,n.useState)(V.length?V:(ie=(oe=M.owners)==null?void 0:oe.values)!=null?ie:[]),[{value:w,loading:re},le,ge]=me({mode:m,initialSelectedOwnersRefs:Q});F(()=>le({text:L}),[L,le],250);const de=(w==null?void 0:w.items)||[];return(0,n.useEffect)(()=>{if(V.length){const K=new $.rf(V);k(K.values)}},[V]),(0,n.useEffect)(()=>{O({owners:Q.length?new $.rf(Q):void 0})},[Q,O]),["user","group"].includes(((ce=M.kind)==null?void 0:ce.value.toLocaleLowerCase("en-US"))||"")?null:n.createElement(d.Z,{className:c.root,pb:1,pt:1},n.createElement(C.Z,{className:c.label,variant:"button",component:"label"},"Owner",n.createElement(o.ZP,{PopperComponent:K=>n.createElement("div",{...K},K.children),multiple:!0,disableCloseOnSelect:!0,loading:re,options:de,value:Q,getOptionSelected:(K,H)=>typeof H=="string"?(0,r.eE)(K)===H:K===H,getOptionLabel:K=>{const H=typeof K=="string"?ge.getEntity(K)||(0,r.of)(K,{defaultKind:"group",defaultNamespace:"default"}):K;return(0,B.w)(H,(0,B.$)(H))},onChange:(K,H)=>{j(""),k(H.map(te=>{const fe=typeof te=="string"?te:(0,r.eE)(te);return typeof te!="string"&&ge.setEntity(te),fe}))},filterOptions:K=>K,renderOption:(K,{selected:H})=>n.createElement(z,{entity:K,isSelected:H}),size:"small",popupIcon:n.createElement(t.Z,{"data-testid":"owner-picker-expand"}),renderInput:K=>n.createElement(i.Z,{...K,className:c.input,onChange:H=>{j(H.currentTarget.value)},variant:"outlined"}),ListboxProps:{onScroll:K=>{const H=K.currentTarget;Math.abs(H.scrollHeight-H.clientHeight-H.scrollTop)<1&&(w!=null&&w.cursor)&&le({items:w.items,cursor:w.cursor})},"data-testid":"owner-picker-listbox"}})))}},93724:(X,y,e)=>{"use strict";e.d(y,{n:()=>n});var r=e(42494),d=e(61837),p=e(29611),v=e(50581),i=e(15223),C=e(79692),f=e(33375),D=e(21853),E=e(2784),x=e(48760),g=e(62862),t=e(85166);const o=(0,C.Z)(S=>({searchToolbar:{paddingLeft:0,paddingRight:0},input:{}}),{name:"CatalogReactEntitySearchBar"}),n=()=>{const S=o(),{updateFilters:$,queryParameters:{text:Z}}=(0,g.wp)(),P=(0,E.useMemo)(()=>[Z].flat()[0],[Z]),[A,F]=(0,E.useState)(P!=null?P:"");return(0,x.Z)(()=>{$({text:A.length?new t.SZ(A):void 0})},250,[A,$]),(0,E.useEffect)(()=>{P&&F(P)},[P]),E.createElement(i.Z,{className:S.searchToolbar},E.createElement(r.Z,null,E.createElement(p.Z,{"aria-label":"search",id:"input-with-icon-adornment",className:S.input,placeholder:"Search",autoComplete:"off",onChange:W=>F(W.target.value),value:A,startAdornment:E.createElement(v.Z,{position:"start"},E.createElement(D.Z,null)),endAdornment:E.createElement(v.Z,{position:"end"},E.createElement(d.Z,{"aria-label":"clear search",onClick:()=>F(""),edge:"end",disabled:A.length===0},E.createElement(f.Z,null)))})))}},83579:(X,y,e)=>{"use strict";e.d(y,{s:()=>f});var r=e(2784),d=e(95544),p=e(4467),v=e(59274),i=e(95475),C=e(39802);const f=D=>{var Z;const{hidden:E,initialFilter:x}=D,g=(0,v.h_)(i.$),{error:t,availableTypes:o,selectedTypes:n,setSelectedTypes:S}=(0,p.U)();if((0,r.useEffect)(()=>{t&&g.post({message:"Failed to load entity types",severity:"error"}),x&&S([x])},[t,g,x,S]),o.length===0||t)return null;const $=[{value:"all",label:"all"},...o.map(P=>({value:P,label:P}))];return E?null:r.createElement(d.Z,{pb:1,pt:1},r.createElement(C.H,{label:"Type",items:$,selected:(Z=$.length>1?n[0]:void 0)!=null?Z:"all",onChange:P=>S(P==="all"?[]:[String(P)])}))}},4467:(X,y,e)=>{"use strict";e.d(y,{U:()=>g});var r=e(2784),d=e(4812),p=e(18149),v=e.n(p),i=e(829),C=e.n(i),f=e(59274),D=e(23200),E=e(62862),x=e(85166);function g(){var I;const t=(0,f.h_)(D.A),{filters:{kind:o,type:n},queryParameters:{type:S},updateFilters:$}=(0,E.wp)(),Z=(0,r.useMemo)(()=>[S].flat().filter(Boolean),[S]),[P,A]=(0,r.useState)(Z.length?Z:(I=n==null?void 0:n.getTypes())!=null?I:[]);(0,r.useEffect)(()=>{Z.length&&A(Z)},[Z]);const[F,W]=(0,r.useState)([]),s=(0,r.useMemo)(()=>o==null?void 0:o.value,[o]),{error:B,loading:U,value:b}=(0,d.Z)(async()=>s?await t.getEntityFacets({filter:{kind:s},facets:["spec.type"]}).then(G=>G.facets["spec.type"]||[]):[],[s,t]),J=(0,r.useRef)(b);return(0,r.useEffect)(()=>{const _=J.current;if(J.current=b,U||!s||_===b||!b)return;const G=[...new Set(C()(b,Y=>-Y.count).map(Y=>Y.value.toLocaleLowerCase("en-US")))];W(G);const ee=P.filter(Y=>G.includes(Y));v()(P,ee)||A(ee)},[U,s,P,A,b]),(0,r.useEffect)(()=>{$({type:P.length?new x.Bf(P):void 0})},[P,$]),{loading:U,error:B,availableTypes:F,selectedTypes:P,setSelectedTypes:A}}},18182:(X,y,e)=>{"use strict";e.d(y,{E:()=>se});var r=e(24978),d=e(9277),p=e(8554),v=e(92600),i=e(67977),C=e(26535),f=e(51847),D=e(74595),E=e(62862),x=e(14914),g=e(90436),t=e(15459);const n={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"};var S=e(27604),$=e(2997),Z=e(11640),P=e(28347),A=e(76635),F=e(19928),W=e.n(F),s=e(2784),B=e(85056),U=e(19631),b=e(7089),J=e(75997);const I=Object.freeze({createNameColumn(a){function u(T){var R;return((R=T.metadata)==null?void 0:R.title)||(0,f.$)(T,{defaultKind:a==null?void 0:a.defaultKind})}return{title:"Name",field:"resolved.entityRef",highlight:!0,customSort({entity:T},{entity:R}){return u(T).localeCompare(u(R))},render:({entity:T})=>s.createElement(B.d,{entityRef:T,defaultKind:(a==null?void 0:a.defaultKind)||"Component"})}},createSystemColumn(){return{title:"System",field:"resolved.partOfSystemRelationTitle",render:({resolved:a})=>s.createElement(U.r,{entityRefs:a.partOfSystemRelations,defaultKind:"system"})}},createOwnerColumn(){return{title:"Owner",field:"resolved.ownedByRelationsTitle",render:({resolved:a})=>s.createElement(U.r,{entityRefs:a.ownedByRelations,defaultKind:"group"})}},createSpecTargetsColumn(){return{title:"Targets",field:"entity.spec.targets",customFilterAndSearch:(a,u)=>{var R,z,N,l,c,m,O,M,h,L;let T=[];return(z=(R=u.entity)==null?void 0:R.spec)!=null&&z.targets&&Array.isArray((l=(N=u.entity)==null?void 0:N.spec)==null?void 0:l.targets)?T=(m=(c=u.entity)==null?void 0:c.spec)==null?void 0:m.targets:(M=(O=u.entity)==null?void 0:O.spec)!=null&&M.target&&(T=[(L=(h=u.entity)==null?void 0:h.spec)==null?void 0:L.target]),T.join(", ").toLocaleUpperCase("en-US").includes(a.toLocaleUpperCase("en-US"))},render:({entity:a})=>{var u,T;return s.createElement(s.Fragment,null,(((u=a==null?void 0:a.spec)==null?void 0:u.targets)||((T=a==null?void 0:a.spec)==null?void 0:T.target))&&s.createElement(J.O,{text:(a.spec.targets||[a.spec.target]).join(", "),placement:"bottom-start"}))}}},createSpecTypeColumn(a={hidden:!1}){return{title:"Type",field:"entity.spec.type",hidden:a.hidden,width:"auto"}},createSpecLifecycleColumn(){return{title:"Lifecycle",field:"entity.spec.lifecycle"}},createMetadataDescriptionColumn(){return{title:"Description",field:"entity.metadata.description",render:({entity:a})=>s.createElement(J.O,{text:a.metadata.description,placement:"bottom-start"}),width:"auto"}},createTagsColumn(){return{title:"Tags",field:"entity.metadata.tags",cellStyle:{padding:"0px 16px 0px 20px"},render:({entity:a})=>s.createElement(s.Fragment,null,a.metadata.tags&&a.metadata.tags.map(u=>s.createElement(b.Z,{key:u,label:u,size:"small",variant:"outlined",style:{marginBottom:"0px"}}))),width:"auto"}},createTitleColumn(a){return{title:"Title",field:"entity.metadata.title",hidden:a==null?void 0:a.hidden,searchable:!0}},createLabelColumn(a,u){function T(R,z){var l;const N=(l=z.metadata)==null?void 0:l.labels;return N&&N[R]||""}return{title:(u==null?void 0:u.title)||"Label",field:"entity.metadata.labels",cellStyle:{padding:"0px 16px 0px 20px"},customSort({entity:R},{entity:z}){return T(a,R).localeCompare(T(a,z))},render:({entity:R})=>{var l;const z=(l=R.metadata)==null?void 0:l.labels,N=z&&z[a]||(u==null?void 0:u.defaultValue);return s.createElement(s.Fragment,null,N&&s.createElement(b.Z,{key:N,label:N,size:"small",variant:"outlined"}))},width:"auto"}},createNamespaceColumn(){return{title:"Namespace",field:"entity.metadata.namespace",width:"auto"}}});var _=e(93724),G=e(15223),ee=e(79692);const Y=(0,ee.Z)(a=>({root:{paddingTop:a.spacing(1.25),paddingLeft:a.spacing(2.5),paddingBottom:a.spacing(.75),display:"flex",justifyContent:"space-between"},text:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}),{name:"BackstageTableToolbar"});function Ee(a){const u=Y();return s.createElement(G.Z,{className:u.root},s.createElement(g.Z,{variant:"h5",className:u.text},a.title),s.createElement(_.n,null))}function ve(a){const{columns:u,data:T,next:R,prev:z,title:N,isLoading:l,options:c,...m}=a;return s.createElement(C.i,{title:l?"":N,columns:u,data:T,options:{...c,paginationPosition:"both",pageSizeOptions:[],showFirstLastPageButtons:!1,pageSize:Number.MAX_SAFE_INTEGER,emptyRowsWhenPaging:!1},onPageChange:O=>{O>0?R==null||R():z==null||z()},components:{Toolbar:Ee},page:z?1:0,totalCount:R?Number.MAX_VALUE:Number.MAX_SAFE_INTEGER,localization:{pagination:{labelDisplayedRows:""}},...m})}const me=({filters:a,entities:u})=>{var z;const T=a.type===void 0;return[I.createTitleColumn({hidden:!0}),I.createNameColumn({defaultKind:(z=a.kind)==null?void 0:z.value}),...R(),I.createMetadataDescriptionColumn(),I.createTagsColumn()];function R(){var l;const N=[I.createSystemColumn(),I.createOwnerColumn(),I.createSpecTypeColumn({hidden:!T}),I.createSpecLifecycleColumn()];switch((l=a.kind)==null?void 0:l.value){case"user":return[];case"domain":case"system":return[I.createOwnerColumn()];case"group":case"template":return[I.createSpecTypeColumn({hidden:!T})];case"location":return[I.createSpecTypeColumn({hidden:!T}),I.createSpecTargetsColumn()];default:return u.every(c=>c.metadata.namespace==="default")?N:[...N,I.createNamespaceColumn()]}}},he=(0,t.Z)({root:{color:"#f3ba37"}})(Z.Z),ye=(a,u)=>{const T=R=>R.metadata.title||(0,f.$)(R,{defaultKind:"Component"});return T(a).localeCompare(T(u))},se=a=>{var te,fe,Ce,Pe;const{columns:u=me,tableOptions:T,subtitle:R,emptyContent:z}=a,{isStarredEntity:N,toggleStarredEntity:l}=(0,D.C)(),c=(0,E.wp)(),{loading:m,error:O,entities:M,filters:h,pageInfo:L,totalItems:j}=c,V=!!L,Q=(0,s.useMemo)(()=>typeof u=="function"?u(c):u,[u,c]);if(O)return s.createElement("div",null,s.createElement(v.G,{severity:"error",title:"Could not fetch catalog entities."},s.createElement(i.O,{language:"text",text:O.toString()})));const k=[({entity:ae})=>{var ue;const q=(ue=ae.metadata.annotations)==null?void 0:ue[r.l2],ne="View";return{icon:()=>s.createElement(s.Fragment,null,s.createElement(g.Z,{style:n},ne),s.createElement($.Z,{fontSize:"small"})),tooltip:ne,disabled:!q,onClick:()=>{q&&window.open(q,"_blank")}}},({entity:ae})=>{var ue;const q=(ue=ae.metadata.annotations)==null?void 0:ue[r.Tf],ne="Edit";return{icon:()=>s.createElement(s.Fragment,null,s.createElement(g.Z,{style:n},ne),s.createElement(S.Z,{fontSize:"small"})),tooltip:ne,disabled:!q,onClick:()=>{q&&window.open(q,"_blank")}}},({entity:ae})=>{const q=N(ae),ne=q?"Remove from favorites":"Add to favorites";return{cellStyle:{paddingLeft:"1em"},icon:()=>s.createElement(s.Fragment,null,s.createElement(g.Z,{style:n},ne),q?s.createElement(he,null):s.createElement(P.Z,null)),tooltip:ne,onClick:()=>l(ae)}}],w=((te=h.kind)==null?void 0:te.value)||"",re=((fe=h.type)==null?void 0:fe.value)||"",le=typeof j=="number"?`(${j})`:"",de=[(0,A.capitalize)((Pe=(Ce=h.user)==null?void 0:Ce.value)!=null?Pe:"all"),re,W()(w),le].filter(ae=>ae).join(" "),oe=a.actions||k,ie={actionsColumnIndex:-1,loadingType:"linear",showEmptyDataSourceMessage:!m,padding:"dense",...T};if(V)return s.createElement(ve,{columns:Q,emptyContent:z,isLoading:m,title:de,actions:oe,subtitle:R,options:ie,data:M.map(pe),next:L.next,prev:L.prev});const ce=M.sort(ye).map(pe),K=20,H=ce.length>K;return s.createElement(C.i,{isLoading:m,columns:Q,options:{paging:H,pageSize:K,pageSizeOptions:[20,50,100],...ie},title:de,data:ce,actions:oe,subtitle:R,emptyContent:z})};se.columns=I,se.defaultColumnsFunc=me;function pe(a){const u=(0,x.h)(a,d.cz,{kind:"system"}),T=(0,x.h)(a,d.S4);return{entity:a,resolved:{name:(0,f.$)(a,{defaultKind:"Component"}),entityRef:(0,p.eE)(a),ownedByRelationsTitle:T.map(R=>(0,f.$)(R,{defaultKind:"group"})).join(", "),ownedByRelations:T,partOfSystemRelationTitle:u.map(R=>(0,f.$)(R,{defaultKind:"system"})).join(", "),partOfSystemRelations:u}}}},62367:(X,y,e)=>{"use strict";var r,d=e(71600),p=e(34590);r={value:!0},y.Z=void 0;var v=p(e(2784)),i=d(e(50175)),C=(0,i.default)(v.createElement("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"}),"Group");y.Z=C},2997:(X,y,e)=>{"use strict";var r,d=e(71600),p=e(34590);r={value:!0},y.Z=void 0;var v=p(e(2784)),i=d(e(50175)),C=(0,i.default)(v.createElement("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"OpenInNew");y.Z=C},19928:function(X){(function(y,e){X.exports=e()})(this,function(){var y=[],e=[],r={},d={},p={};function v(t){return typeof t=="string"?new RegExp("^"+t+"$","i"):t}function i(t,o){return t===o?o:t===t.toLowerCase()?o.toLowerCase():t===t.toUpperCase()?o.toUpperCase():t[0]===t[0].toUpperCase()?o.charAt(0).toUpperCase()+o.substr(1).toLowerCase():o.toLowerCase()}function C(t,o){return t.replace(/\$(\d{1,2})/g,function(n,S){return o[S]||""})}function f(t,o){return t.replace(o[0],function(n,S){var $=C(o[1],arguments);return i(n===""?t[S-1]:n,$)})}function D(t,o,n){if(!t.length||r.hasOwnProperty(t))return o;for(var S=n.length;S--;){var $=n[S];if($[0].test(o))return f(o,$)}return o}function E(t,o,n){return function(S){var $=S.toLowerCase();return o.hasOwnProperty($)?i(S,$):t.hasOwnProperty($)?i(S,t[$]):D($,S,n)}}function x(t,o,n,S){return function($){var Z=$.toLowerCase();return o.hasOwnProperty(Z)?!0:t.hasOwnProperty(Z)?!1:D(Z,Z,n)===Z}}function g(t,o,n){var S=o===1?g.singular(t):g.plural(t);return(n?o+" ":"")+S}return g.plural=E(p,d,y),g.isPlural=x(p,d,y),g.singular=E(d,p,e),g.isSingular=x(d,p,e),g.addPluralRule=function(t,o){y.push([v(t),o])},g.addSingularRule=function(t,o){e.push([v(t),o])},g.addUncountableRule=function(t){if(typeof t=="string"){r[t.toLowerCase()]=!0;return}g.addPluralRule(t,"$0"),g.addSingularRule(t,"$0")},g.addIrregularRule=function(t,o){o=o.toLowerCase(),t=t.toLowerCase(),p[t]=o,d[o]=t},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach(function(t){return g.addIrregularRule(t[0],t[1])}),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach(function(t){return g.addPluralRule(t[0],t[1])}),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach(function(t){return g.addSingularRule(t[0],t[1])}),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(g.addUncountableRule),g})},48760:(X,y,e)=>{"use strict";var r;r={value:!0};var d=e(22970),p=e(2784),v=d.__importDefault(e(27618));function i(C,f,D){f===void 0&&(f=0),D===void 0&&(D=[]);var E=v.default(C,f),x=E[0],g=E[1],t=E[2];return p.useEffect(t,D),[x,g]}y.Z=i},27618:(X,y,e)=>{"use strict";Object.defineProperty(y,"__esModule",{value:!0});var r=e(2784);function d(p,v){v===void 0&&(v=0);var i=r.useRef(!1),C=r.useRef(),f=r.useRef(p),D=r.useCallback(function(){return i.current},[]),E=r.useCallback(function(){i.current=!1,C.current&&clearTimeout(C.current),C.current=setTimeout(function(){i.current=!0,f.current()},v)},[v]),x=r.useCallback(function(){i.current=null,C.current&&clearTimeout(C.current)},[]);return r.useEffect(function(){f.current=p},[p]),r.useEffect(function(){return E(),x},[v]),[D,x,E]}y.default=d}}]);})();

//# sourceMappingURL=3313.2d5d4301.chunk.js.map