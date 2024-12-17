import{r,as as d,at as j,j as e}from"./index-LRWGRG6R.js";import{C as U}from"./index-DTRhu6x6.js";const A="/platform.jpg";function N(t){return/^\d+$/.test(t)?"".concat(t,"px"):t}function b(){}var u=function(){return u=Object.assign||function(t){for(var a,s=1,n=arguments.length;s<n;s++){a=arguments[s];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o])}return t},u.apply(this,arguments)},I=function(t,a){var s={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&a.indexOf(n)<0&&(s[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)a.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(s[n[o]]=t[n[o]]);return s};function c(t){var a=t.width,s=t.height,n=t.value,o=t.defaultValue,m=t.language,v=t.theme,g=t.options,k=t.overrideServices,S=t.editorWillMount,P=t.editorDidMount,_=t.editorWillUnmount,w=t.onChange,p=t.className,x=t.uri,y=r.useRef(null),i=r.useRef(null),M=r.useRef(null),C=r.useRef(null),D=N(a),B=N(s),E=r.useRef(w);E.current=w;var T=r.useMemo(function(){return{width:D,height:B}},[D,B]),V=function(){var l=S(j);return l||{}},F=function(){P(i.current,j),M.current=i.current.onDidChangeModelContent(function(l){var f;C.current||(f=E.current)===null||f===void 0||f.call(E,i.current.getValue(),l)})},R=function(){_(i.current,j)},W=function(){var l=n!==null?n:o;if(y.current){var f=u(u({},g),V()),O=x==null?void 0:x(j),h=O&&d.getModel(O);h?(h.setValue(l),d.setModelLanguage(h,m)):h=d.createModel(l,m,O),i.current=d.create(y.current,u(u(u({model:h},p?{extraEditorClassName:p}:{}),f),v?{theme:v}:{}),k),F()}};return r.useEffect(W,[]),r.useEffect(function(){if(i.current){if(n===i.current.getValue())return;var l=i.current.getModel();C.current=!0,i.current.pushUndoStop(),l.pushEditOperations([],[{range:l.getFullModelRange(),text:n}],void 0),i.current.pushUndoStop(),C.current=!1}},[n]),r.useEffect(function(){if(i.current){var l=i.current.getModel();d.setModelLanguage(l,m)}},[m]),r.useEffect(function(){if(i.current){g.model;var l=I(g,["model"]);i.current.updateOptions(u(u({},p?{extraEditorClassName:p}:{}),l))}},[p,g]),r.useEffect(function(){i.current&&i.current.layout()},[a,s]),r.useEffect(function(){d.setTheme(v)},[v]),r.useEffect(function(){return function(){i.current&&(R(),i.current.dispose()),M.current&&M.current.dispose()}},[]),r.createElement("div",{ref:y,style:T,className:"react-monaco-editor-container"})}c.defaultProps={width:"100%",height:"100%",value:null,defaultValue:"",language:"javascript",theme:null,options:{},overrideServices:{},editorWillMount:b,editorDidMount:b,editorWillUnmount:b,onChange:b,className:null};c.displayName="MonacoEditor";const L=`
import { Button, Modal } from "antd";
import { useState } from "react";

const ModalContainer = (props: { visible: boolean }) => {
  return <Modal visible={props.visible} >
    <div>
      <p>这是一个modal</p>
    </div>
  </Modal>
}
const App = () => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(true);
  };
  return <div>
    <Button onClick={handleClick}>打开modal</Button>
    {
      visible && <ModalContainer visible={visible} />
    }
  </div>
};
`,$=`
import { Button, Modal } from "antd";
import { useState } from "react";
import useDialog, { UserDialogProps } from './useDialog';

const ModalContainer = (props) => {
  // useDialog默认注入注入的visible, closeDialog属性
  const { visible, closeDialog } = props;
  return <Modal visible={props.visible} >
    <div>
      <p>这是一个modal</p>
    </div>
  </Modal>
}
const App = () => {
  const [visible, setVisible] = useState(false);
  const { open, holder } = useDialog(ModalContainer)
  const handleClick = () => {
    open({
      // ... 传给Modal的props参数
    })
  }
  return <div>
    <Button onClick={handleClick}>打开modal</Button>
    {holder}
  </div>
};
`,H=`
const App = () => {
  const items = [
    {
      label: "操作用户",
      field: "user",
      component: (
        <Select
          placeholder="请输入用户名"
          allowClear
          onChange={(value) => {
            setUser(value);
          }}
          options={(userList?.data || []).map((item) => {
            return {
              label: item.username,
              value: item.username,
            };
          })}
        />
      ),
    },
    {
      label: "操作类型",
      field: "type",
      component: (
        <Select
          placeholder="请输入用户名"
          allowClear
          options={Object.keys(typeMap).map((key) => {
            return {
              label: typeMap[key],
              value: key,
            };
          })}
          onChange={(value) => {
            setType(value);
          }}
        />
      ),
    },
    {
      label: "操作日期",
      field: "user",
      component: (
        <RangePicker onChange={onChange} disabledDate={disabledDate} />
      ),
    },
  ];
return (
    <div >
      <TableFilter items={items} defaultCollapsed />
    </div>
  );
}
`,q=`
import Ellipsis from './Ellipsis';
const EllipsisPage = () => {
  return <div>
    <Ellipsis style={{ width: 200 }} title={text} line={2}>
      <span>{text}</span>
    </Ellipsis>
  </div>
}

export default EllipsisPage;
`,K=()=>e.jsxs("div",{className:"solution-page",children:[e.jsx(U,{title:"中台常见方案"}),e.jsxs("div",{className:"content",children:[e.jsx("div",{className:"second-title",children:"Table Filter"}),e.jsx("img",{width:900,height:450,src:A}),e.jsxs("div",{style:{marginBottom:12},children:["大部分中台列表页面布局都如上图所示，或者是基于上面的变种。为了更好的快速落地新的列表页面，可以把列表筛选抽了一个自定义的布局组件，称为 ",e.jsx("b",{children:"Table Filter"}),"。或许你也可以使用ProTable方案，它是将Filter（筛选条件）跟Table耦合在一起。"]}),e.jsx("div",{style:{marginBottom:20},children:e.jsx("a",{href:"/person/user/info/record",target:"_blank",children:"案例页面"})}),e.jsxs("div",{className:"second-title",style:{marginBottom:12},children:[e.jsx("b",{children:"收益在哪"})," "]}),e.jsxs("div",{style:{marginBottom:20},children:[e.jsxs("ul",{children:[e.jsx("li",{children:"- 支持自动布局"}),e.jsx("li",{children:"- 支持指定一行渲染的个数"}),e.jsx("li",{children:"- 如果你不想自己维护筛选组件的每一个状态，只需要传一个FormInstance进来即可"})]}),"换句话说，最简单的场景，你只需要提供筛选组件及FormInstance，TableFilter就可以帮你完成剩下的工作。"]}),e.jsx("div",{children:e.jsx(c,{language:"typescript",theme:"vs",options:{minimap:{enabled:!1},readOnly:!0},value:H,height:480,width:"50%"})}),e.jsx("div",{className:"second-title",style:{marginBottom:12,marginTop:20},children:"useDialog"}),e.jsx("div",{style:{marginBottom:12},children:e.jsxs("ul",{children:[e.jsx("li",{children:"- 将弹窗由命令式改成申明式"}),e.jsx("li",{children:"- visiable变量全部有useDialog来管理"}),e.jsx("li",{children:"- 可以直接通过open就可以给modal传值，不需要在额外存储到state中"})]})}),e.jsx("div",{style:{marginBottom:20},children:e.jsx("a",{href:"https://juejin.cn/post/7434040315844345871",target:"_blank",children:"详细介绍地址"})}),e.jsxs("div",{className:"usedialog-code",children:[e.jsx(c,{language:"typescript",theme:"vs",options:{minimap:{enabled:!1},readOnly:!0},value:L,height:200,width:"45%"}),e.jsxs("div",{className:"arrow",children:[" ","===>"," "]}),e.jsx(c,{language:"typescript",theme:"vs",options:{minimap:{enabled:!1},readOnly:!0},value:$,width:"45%",height:200})]}),e.jsx("div",{className:"second-title",style:{marginTop:20,marginBottom:12},children:"Ellipsis"}),e.jsx("div",{style:{marginBottom:12},children:e.jsxs("ul",{children:[e.jsx("li",{children:"- 超出宽度，显示..."}),e.jsx("li",{children:"- 支持指定行数显示..."})]})}),e.jsx("div",{style:{marginBottom:20},children:e.jsx("a",{href:"https://juejin.cn/post/7447462392046878735",target:"_blank",children:"详细介绍地址"})}),e.jsx(c,{language:"typescript",theme:"vs",options:{minimap:{enabled:!1},readOnly:!0},value:q,width:"50%",height:140})]})]});export{K as default};
