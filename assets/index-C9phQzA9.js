const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-VMbEuhM4.js","assets/index-Dv7vFWB3.js","assets/index-Cc9UilgI.css"])))=>i.map(i=>d[i]);
import{d as v,h as N,c as d,b as a,a as o,r as c,i as L,F as k,g as w,t as m,w as s,j as p,k as I,o as r,f as M,l as O,_ as P}from"./index-Dv7vFWB3.js";import{_ as U,t as j}from"./_plugin-vue_export-helper-DZ9-2fQ5.js";const q={class:"content-container"},A={class:"content-section"},R={key:0},z=["onClick"],H={class:"template-preview"},J={class:"form-container"},K={style:{margin:"16px"}},Q={class:"generated-content"},W={class:"action-buttons"},X={__name:"index",setup(Y){const S=v(j),n=v(null),_=v({}),u=v(""),C=v(!1),f=v(!1),T=N(()=>{if(!n.value)return[];const l=/{([^{}]+)}/g,y=n.value.template.match(l)||[];return[...new Set(y.map(b=>b.replace(/{|}/g,"")))]}),h=l=>{n.value=l,_.value={},u.value="",f.value=!1},V=()=>{n.value&&(u.value=O(n.value.template,_.value),f.value=!0)},$=()=>{u.value&&(C.value=!0,setTimeout(()=>{C.value=!1,g("Content saved successfully!"),n.value=null,_.value={},u.value="",f.value=!1},1500))},g=l=>{P(async()=>{const{showToast:e}=await import("./index-VMbEuhM4.js");return{showToast:e}},__vite__mapDeps([0,1,2])).then(({showToast:e})=>{e({message:l,position:"bottom",duration:2e3})})},E=()=>{u.value&&navigator.clipboard.writeText(u.value).then(()=>{g("Content copied to clipboard!")}).catch(l=>{console.error("Failed to copy: ",l)})},F=()=>{g("Sharing functionality would open here!")};return(l,e)=>{const y=c("van-nav-bar"),b=c("van-icon"),B=c("van-field"),D=c("van-cell-group"),i=c("van-button"),G=c("van-form");return r(),d("div",q,[a(y,{title:"Content Generator","left-arrow":"",fixed:"",placeholder:"",onClickLeft:e[0]||(e[0]=t=>l.$router.go(-1))}),o("div",A,[n.value?L("",!0):(r(),d("h2",R,"Select a Template")),n.value?f.value?(r(),d(k,{key:3},[e[11]||(e[11]=o("h2",null,"Generated Content",-1)),o("div",Q,[o("pre",null,m(u.value),1)]),o("div",W,[a(i,{round:"",block:"",type:"primary",onClick:$,loading:C.value},{default:s(()=>[p(m(C.value?"Saving...":"Save Content"),1)]),_:1},8,["loading"]),a(i,{round:"",block:"",onClick:E,style:{"margin-top":"10px"}},{default:s(()=>e[7]||(e[7]=[p(" Copy to Clipboard ")])),_:1}),a(i,{round:"",block:"",onClick:F,style:{"margin-top":"10px"}},{default:s(()=>e[8]||(e[8]=[p(" Share to Social Media ")])),_:1}),a(i,{round:"",block:"",plain:"",style:{"margin-top":"10px"},onClick:e[2]||(e[2]=t=>f.value=!1)},{default:s(()=>e[9]||(e[9]=[p(" Edit Content ")])),_:1}),a(i,{round:"",block:"",plain:"",style:{"margin-top":"10px"},onClick:e[3]||(e[3]=t=>n.value=null)},{default:s(()=>e[10]||(e[10]=[p(" Start Over ")])),_:1})])],64)):(r(),d(k,{key:2},[o("h2",null,m(n.value.title),1),o("p",H,m(n.value.template),1),o("div",J,[e[6]||(e[6]=o("h3",null,"Fill in the details",-1)),a(G,{onSubmit:I(V,["prevent"])},{default:s(()=>[a(D,{inset:""},{default:s(()=>[(r(!0),d(k,null,w(T.value,t=>(r(),M(B,{key:t,modelValue:_.value[t],"onUpdate:modelValue":x=>_.value[t]=x,name:t,label:t.replace("_"," "),placeholder:"Enter "+t.replace("_"," "),required:""},null,8,["modelValue","onUpdate:modelValue","name","label","placeholder"]))),128))]),_:1}),o("div",K,[a(i,{round:"",block:"",type:"primary","native-type":"submit"},{default:s(()=>e[4]||(e[4]=[p(" Generate Content ")])),_:1}),a(i,{round:"",block:"",plain:"",style:{"margin-top":"10px"},onClick:e[1]||(e[1]=t=>n.value=null)},{default:s(()=>e[5]||(e[5]=[p(" Cancel ")])),_:1})])]),_:1})])],64)):(r(!0),d(k,{key:1},w(S.value,t=>(r(),d("div",{key:t.id,class:"template-card",onClick:x=>h(t)},[o("h3",null,m(t.title),1),o("p",null,m(t.template.substring(0,80))+"...",1),a(b,{name:"arrow",class:"template-arrow"})],8,z))),128))])])}}},te=U(X,[["__scopeId","data-v-0d8181ca"]]);export{te as default};
