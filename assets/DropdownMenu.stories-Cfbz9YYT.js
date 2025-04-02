import{r as o,R as n}from"./index-9yPe82QC.js";const u=({label:t,options:i,value:c,onChange:E})=>{const[C,d]=o.useState(!1),[p,m]=o.useState(null),l=o.useRef(null),D=o.useRef(null);o.useEffect(()=>{const e=i.find(r=>r.value===c);e&&m(e)},[c,i]);const O=e=>{e.stopPropagation(),d(r=>!r)},g=()=>{d(!1)},S=e=>{m(e),E(e),g()},v=e=>{l.current&&!l.current.contains(e.target)&&g()};return o.useEffect(()=>(document.addEventListener("click",v),()=>{document.removeEventListener("click",v)}),[]),n.createElement("div",{className:"dropdown-menu"},n.createElement("label",null,t),n.createElement("div",{className:"div-container",onClick:O},n.createElement("div",{className:"selected",ref:D},p?p.text:"Choose an option"),n.createElement("div",{className:`options ${C?"open":""}`,ref:l},i.map(e=>n.createElement("div",{key:e.value,className:"option",onClick:r=>{r.stopPropagation(),S(e)}},e.text)))))};u.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu",props:{label:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string; text: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}}]}}],raw:"{ value: string; text: string }[]"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(option: { value: string; text: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ value: string; text: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}}]}},name:"option"}],return:{name:"void"}}},description:""}}};const q={title:"Components/Simple/Dropdown menu",component:u,tags:["autodocs"],argTypes:{onChange:{action:"changed"},label:{description:"The label that will be displayed above the dropdown menu."},options:{description:"An array of objects representing the options in the dropdown menu. Each object should have a `value` (the option identifier) and `text` (the label shown in the dropdown)."},value:{description:"The currently selected value in the dropdown. It should match the `value` of one of the options.",control:"text"}}},k=t=>n.createElement(u,{...t}),a=k.bind({});a.args={label:"Choose an option",options:[{value:"1",text:"Option 1"},{value:"2",text:"Option 2"},{value:"3",text:"Option 3"}],value:"1",onChange:t=>console.log(t)};const s=k.bind({});s.args={label:"Select city you want to visit",options:[{value:"london",text:"London"},{value:"paris",text:"Paris"},{value:"new_york",text:"New York"},{value:"tokyo",text:"Tokyo"},{value:"berlin",text:"Berlin"},{value:"sydney",text:"Sydney"},{value:"rome",text:"Rome"},{value:"madrid",text:"Madrid"},{value:"amsterdam",text:"Amsterdam"}],value:"london",onChange:t=>console.log(t)};var h,y,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:"args => <DropdownMenu {...args} />",...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var x,w,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:"args => <DropdownMenu {...args} />",...(b=(w=s.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};const M=["Default","WithCustomLabel"];export{a as Default,s as WithCustomLabel,M as __namedExportsOrder,q as default};
