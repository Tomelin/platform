"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6040],{75997:(L,p,t)=>{t.d(p,{O:()=>d});var e=t(79692),l=t(80030),i=t(2784),u=t(90436);const c=(0,e.Z)({container:{overflow:"visible !important"},typo:{fontSize:"inherit",overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box","-webkit-line-clamp":({line:a})=>a||1,"-webkit-box-orient":"vertical"}},{name:"BackstageOverflowTooltip"});function d(a){var n;const r=c(a);return i.createElement(l.ZP,{title:(n=a.title)!=null?n:a.text||"",placement:a.placement},i.createElement(u.Z,{className:r.typo,variant:"inherit"},a.text))}},55073:(L,p,t)=>{t.d(p,{u:()=>_});var e=t(79692),l=t(2784),i=t(9277),u=t(75997),c=t(14914),d=t(85056),a=t(19631),r=t(51847);const n=Object.freeze({createEntityRefColumn(m){const{defaultKind:E}=m;function C(s){var o;return((o=s.metadata)==null?void 0:o.title)||(0,r.$)(s,{defaultKind:E})}return{title:"Name",highlight:!0,customFilterAndSearch(s,o){return C(o).includes(s)},customSort(s,o){return C(s).localeCompare(C(o))},render:s=>{var o;return l.createElement(d.d,{entityRef:s,defaultKind:E,title:(o=s.metadata)==null?void 0:o.title})}}},createEntityRelationColumn(m){const{title:E,relation:C,defaultKind:s,filter:o}=m;function M(y){return(0,c.h)(y,C,o)}function R(y){return M(y).map(g=>(0,r.$)(g,{defaultKind:s})).join(", ")}return{title:E,customFilterAndSearch(y,g){return R(g).includes(y)},customSort(y,g){return R(y).localeCompare(R(g))},render:y=>l.createElement(a.r,{entityRefs:M(y),defaultKind:s})}},createOwnerColumn(){return this.createEntityRelationColumn({title:"Owner",relation:i.S4,defaultKind:"group"})},createDomainColumn(){return this.createEntityRelationColumn({title:"Domain",relation:i.cz,defaultKind:"domain",filter:{kind:"domain"}})},createSystemColumn(){return this.createEntityRelationColumn({title:"System",relation:i.cz,defaultKind:"system",filter:{kind:"system"}})},createMetadataDescriptionColumn(){return{title:"Description",field:"metadata.description",render:m=>l.createElement(u.O,{text:m.metadata.description,placement:"bottom-start",line:2})}},createSpecLifecycleColumn(){return{title:"Lifecycle",field:"spec.lifecycle"}},createSpecTypeColumn(){return{title:"Type",field:"spec.type"}}}),O=[n.createEntityRefColumn({defaultKind:"system"}),n.createDomainColumn(),n.createOwnerColumn(),n.createMetadataDescriptionColumn()],f=[n.createEntityRefColumn({defaultKind:"component"}),n.createSystemColumn(),n.createOwnerColumn(),n.createSpecTypeColumn(),n.createSpecLifecycleColumn(),n.createMetadataDescriptionColumn()];var D=t(26535);const v=(0,e.Z)(m=>({empty:{padding:m.spacing(2),display:"flex",justifyContent:"center"}})),_=m=>{const{entities:E,title:C,emptyContent:s,variant:o="gridItem",columns:M,tableOptions:R={}}=m,y=v(),g={minWidth:"0",width:"100%"};return o==="gridItem"&&(g.height="calc(100% - 10px)"),l.createElement(D.i,{columns:M,title:C,style:g,emptyContent:s&&l.createElement("div",{className:y.empty},s),options:{search:!1,paging:!1,actionsColumnIndex:-1,padding:"dense",draggable:!1,...R},data:E})};_.columns=n,_.systemEntityColumns=O,_.componentEntityColumns=f},55223:(L,p,t)=>{t.d(p,{e:()=>c});var e=t(8554),l=t(59274),i=t(4812),u=t(23200);function c(d,a){var _,m;const r=(_=a==null?void 0:a.type)==null?void 0:_.toLocaleLowerCase("en-US"),n=(m=a==null?void 0:a.kind)==null?void 0:m.toLocaleLowerCase("en-US"),O=(0,l.h_)(u.A),{loading:f,value:D,error:v}=(0,i.Z)(async()=>{var s;const E=(s=d.relations)==null?void 0:s.filter(o=>(!r||o.type.toLocaleLowerCase("en-US")===r)&&(!n||(0,e.of)(o.targetRef).kind===n));if(!(E!=null&&E.length))return[];const{items:C}=await O.getEntitiesByRefs({entityRefs:E.map(o=>o.targetRef)});return C.filter(o=>!!o)},[d,r,n]);return{entities:D,loading:f,error:v}}},46040:(L,p,t)=>{t.r(p),t.d(p,{DependsOnResourcesCard:()=>c});var e=t(9277),l=t(2784),i=t(31149),u=t(73205);function c(d){const{variant:a="gridItem",title:r="Depends on resources",columns:n=u.xp,tableOptions:O={}}=d;return l.createElement(i.f,{variant:a,title:r,entityKind:"Resource",relationType:e.nP,columns:n,emptyMessage:"No resource is a dependency of this component",emptyHelpLink:u.AE,asRenderableEntities:u.$c,tableOptions:O})}},31149:(L,p,t)=>{t.d(p,{f:()=>O});var e=t(90436),l=t(89173),i=t(55223),u=t(55073),c=t(2784),d=t(93006),a=t(37630),r=t(67700),n=t(87603);function O(f){const{variant:D="gridItem",title:v,columns:_,entityKind:m,relationType:E,emptyMessage:C,emptyHelpLink:s,asRenderableEntities:o,tableOptions:M={}}=f,{entity:R}=(0,l.X2)(),{entities:y,loading:g,error:P}=(0,i.e)(R,{type:E,kind:m});return g?c.createElement(d.r,{variant:D,title:v},c.createElement(a.E,null)):P?c.createElement(d.r,{variant:D,title:v},c.createElement(r.G,{error:P})):c.createElement(u.u,{title:v,variant:D,emptyContent:c.createElement("div",{style:{textAlign:"center"}},c.createElement(e.Z,{variant:"body1"},C),c.createElement(e.Z,{variant:"body2"},c.createElement(n.rU,{to:s},"Learn how to change this."))),columns:_,entities:o(y||[]),tableOptions:M})}},73205:(L,p,t)=>{t.d(p,{$c:()=>a,AE:()=>i,D:()=>u,G5:()=>n,Uc:()=>d,_v:()=>r,el:()=>O,we:()=>l,xp:()=>c});var e=t(55073);const l=[e.u.columns.createEntityRefColumn({defaultKind:"component"}),e.u.columns.createOwnerColumn(),e.u.columns.createSpecTypeColumn(),e.u.columns.createSpecLifecycleColumn(),e.u.columns.createMetadataDescriptionColumn()],i="https://backstage.io/docs/features/software-catalog/descriptor-format#kind-component",u=f=>f,c=[e.u.columns.createEntityRefColumn({defaultKind:"resource"}),e.u.columns.createOwnerColumn(),e.u.columns.createSpecTypeColumn(),e.u.columns.createSpecLifecycleColumn(),e.u.columns.createMetadataDescriptionColumn()],d="https://backstage.io/docs/features/software-catalog/descriptor-format#kind-resource",a=f=>f,r=[e.u.columns.createEntityRefColumn({defaultKind:"system"}),e.u.columns.createOwnerColumn(),e.u.columns.createMetadataDescriptionColumn()],n="https://backstage.io/docs/features/software-catalog/descriptor-format#kind-system",O=f=>f}}]);})();

//# sourceMappingURL=6040.b36b38be.chunk.js.map