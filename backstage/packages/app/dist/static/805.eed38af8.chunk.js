"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[805],{73601:(A,o,t)=>{t.d(o,{n:()=>m});var l=t(90436),r=t(2784),n=t(72509),s=t(59274);const m=v=>{const{apiEntity:E}=v,f=(0,s.h_)(n.Z).getApiDefinitionWidget(E),C=f?f.title:E.spec.type;return r.createElement(l.Z,{component:"span"},C)}},90805:(A,o,t)=>{t.r(o),t.d(o,{ApiDefinitionCard:()=>H,ApiTypeTitle:()=>b.n,defaultDefinitionWidgets:()=>x.Y});var l=t(89173),r=t(99688),n=t(2784),s=t(72509),m=t(27076),v=t(94339),E=t(24579),P=t(32552),f=t(85256),C=t(79692),O=t(15459),Z=t(6487),R=t(99152),h=t(32630),I=t(33211);const L=(0,C.Z)(e=>({root:{padding:e.spacing(0,2,0,2.5),minHeight:e.spacing(3)},indicator:{backgroundColor:e.palette.info.main,height:e.spacing(.3)}}),{name:"BackstageTabbedCard"}),K=(0,O.Z)(e=>({root:{padding:e.spacing(2,2,2,2.5),display:"inline-block"},title:{fontWeight:700},subheader:{paddingTop:e.spacing(1)}}),{name:"BackstageTabbedCardBoldHeader"})(P.Z);function W(e){const{slackChannel:d,errorBoundaryProps:c,children:i,title:g,deepLink:p,value:T,onChange:B}=e,V=L(),[M,j]=(0,n.useState)(0),X=B||((a,D)=>j(D));let u;T?n.Children.map(i,a=>{n.isValidElement(a)&&(a==null?void 0:a.props.value)===T&&(u=a==null?void 0:a.props.children)}):n.Children.map(i,(a,D)=>{n.isValidElement(a)&&D===M&&(u=a==null?void 0:a.props.children)});const Y=c||(d?{slackChannel:d}:{});return n.createElement(v.Z,null,n.createElement(I.S,{...Y},g&&n.createElement(K,{title:g}),n.createElement(R.Z,{classes:V,value:T||M,onChange:X},i),n.createElement(f.Z,null),n.createElement(E.Z,null,u),p&&n.createElement(h.M,{...p})))}const S=(0,C.Z)(e=>({root:{minWidth:e.spacing(6),minHeight:e.spacing(3),margin:e.spacing(0,2,0,0),padding:e.spacing(.5,0,.5,0),textTransform:"none","&:hover":{opacity:1,backgroundColor:"transparent",color:e.palette.text.primary}},selected:{fontWeight:e.typography.fontWeightBold}}),{name:"BackstageCardTab"});function y(e){const{children:d,...c}=e,i=S();return n.createElement(Z.Z,{disableRipple:!0,classes:i,...c})}var U=t(59274);const H=()=>{var p;const{entity:e}=(0,l.X2)(),d=(0,U.h_)(s.Z),{getApiDefinitionWidget:c}=d;if(!e)return n.createElement(r.Z,{severity:"error"},"Could not fetch the API");const i=c(e),g=(p=e.metadata.title)!=null?p:e.metadata.name;return i?n.createElement(W,{title:g},n.createElement(y,{label:i.title,key:"widget"},i.component(e.spec.definition)),n.createElement(y,{label:"Raw",key:"raw"},n.createElement(m.R,{definition:e.spec.definition,language:i.rawLanguage||e.spec.type}))):n.createElement(W,{title:g,children:[n.createElement(y,{label:e.spec.type,key:"raw"},n.createElement(m.R,{definition:e.spec.definition,language:e.spec.type}))]})};var x=t(4789),b=t(73601)},27076:(A,o,t)=>{t.d(o,{R:()=>n});var l=t(2784),r=t(67977);const n=s=>l.createElement(r.O,{text:s.definition,language:s.language,showCopyCodeButton:!0})}}]);})();

//# sourceMappingURL=805.eed38af8.chunk.js.map