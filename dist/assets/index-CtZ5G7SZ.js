import{r as s,j as e}from"./index-_QZEbX9N.js";import{C as d}from"./index-BAxB4O4-.js";import{E as p}from"./index-D-OJ5oNN.js";import{T as c}from"./index-e0XxX5Rb.js";import{T as i}from"./index-CAGS6Sdm.js";import"./index-CDGe2ygs.js";import"./DownOutlined-CrjWHx72.js";import"./BaseInput-DZj0RHKZ.js";const l="我是超长的一段文字，我是超长的一段文字，我是超长的一段文字，我是超长的一段文字，我是超长的一段文字，我是超长的一段文字，我是超长的一段文字，",g=()=>{const[n,a]=s.useState(200),[o,r]=s.useState(1),m=[{label:"width",field:"width",component:e.jsx(i,{onChange:t=>a(t),defaultValue:200,min:50,style:{width:300}})},{label:"line",field:"line",component:e.jsx(i,{onChange:t=>r(t),defaultValue:1,min:1,max:10,style:{width:300}})}];return e.jsxs("div",{className:"ellipsis-page",children:[e.jsx(d,{title:"Ellipsis"}),e.jsxs("div",{className:"content",children:[e.jsx(c,{items:m,showReset:!1}),e.jsx("div",{style:{width:n},children:e.jsx(p,{title:l,line:o,children:e.jsx("span",{children:l})})})]})]})};export{g as default};