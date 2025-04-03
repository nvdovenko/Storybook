import{f as q}from"./index-ApWirIvn.js";import{R as C}from"./index-9yPe82QC.js";import{P as e}from"./index-Nmkh4NMe.js";const s=({primary:k=!1,backgroundColor:n=null,size:B="medium",label:z,...S})=>{const v=k?"storybook-button--primary":"storybook-button--secondary";return C.createElement("button",{type:"button",className:["storybook-button",`storybook-button--${B}`,v].join(" "),style:n&&{backgroundColor:n},...S},z)};s.propTypes={primary:e.bool,backgroundColor:e.string,size:e.oneOf(["small","medium","large"]),label:e.string.isRequired,onClick:e.func};s.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{primary:{defaultValue:{value:"false",computed:!1},description:"Defines whether the button is the primary call to action (e.g., main button on the page).\nIf `true`, the button will have a primary style.",type:{name:"bool"},required:!1},backgroundColor:{defaultValue:{value:"null",computed:!1},description:"Specifies the background color of the button. If not provided, the default button style will be used.",type:{name:"string"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:`Specifies the size of the button.
Accepted values are: 'small', 'medium', and 'large'.`,type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},label:{description:"The text label displayed on the button.",type:{name:"string"},required:!0},onClick:{description:"Optional click handler function that will be triggered when the button is clicked.",type:{name:"func"},required:!1}}};const I={title:"Components/Simple/Button",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:q()}},t={args:{primary:!0,label:"Button",size:"medium"}},r={args:{label:"Button",size:"medium"}},a={args:{size:"large",label:"Button"}},o={args:{size:"small",label:"Button"}};var l,i,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button',
    size: 'medium'
  }
}`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var m,c,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    size: 'medium'
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,b,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var g,y,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const T=["Primary","Secondary","Large","Small"];export{a as Large,t as Primary,r as Secondary,o as Small,T as __namedExportsOrder,I as default};
