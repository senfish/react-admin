import{r as s,j as e}from"./index-BaYBV5Jy.js";import{C as d}from"./index-BVywSslO.js";import{E as p}from"./index-D26PA6lA.js";import{T as c}from"./index-DY7V4kob.js";import{T as i}from"./index-jUIFscdc.js";import"./index-C6czLKy1.js";import"./DownOutlined-D5hOwh0Q.js";import"./BaseInput-B_TSEPiP.js";const l="我是超长的一段文字，我是超长的一段文字，我是超长的一段文字，我是超长的一段文字，我是超长的一段文字，我是超长的一段文字，我是超长的一段文字，",g=()=>{const[n,a]=s.useState(200),[o,r]=s.useState(1),m=[{label:"width",field:"width",component:e.jsx(i,{onChange:t=>a(t),defaultValue:200,min:50,style:{width:300}})},{label:"line",field:"line",component:e.jsx(i,{onChange:t=>r(t),defaultValue:1,min:1,max:10,style:{width:300}})}];return e.jsxs("div",{className:"ellipsis-page",children:[e.jsx(d,{title:"Ellipsis"}),e.jsxs("div",{className:"content",children:[e.jsx(c,{items:m,showReset:!1}),e.jsx("div",{style:{width:n},children:e.jsx(p,{title:l,line:o,children:e.jsx("span",{children:l})})})]})]})};export{g as default};