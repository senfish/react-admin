import ContainerHeader from "../../../common/Title";
import platformPng from '/platform.jpg'
import './index.less';
import MonacoEditor from "react-monaco-editor";
import { useDialogCode, originModalCode } from './useDialogCode';
import { TableFilterCode } from './TableFilterCode';
import { EllipsisCode } from './EllipsisCode';
const English = () => {
  return <div className="solution-page">
    <ContainerHeader title="中台常见方案" />
    <div className="content">
      <div className="second-title">Table Filter</div>
      <img width={900} height={450} src={platformPng} />
      <div style={{ marginBottom: 12 }}>大部分中台列表页面布局都如上图所示，或者是基于上面的变种。为了更好的快速落地新的列表页面，可以把列表筛选抽了一个自定义的布局组件，称为 <b>Table Filter</b>。或许你也可以使用ProTable方案，它是将Filter（筛选条件）跟Table耦合在一起。</div>
      <div style={{ marginBottom: 20 }}><a href='/person/user/info/record' target='_blank'>案例页面</a></div>
      <div className="second-title" style={{ marginBottom: 12 }}><b>收益在哪</b> </div>
      <div style={{ marginBottom: 20 }}>
        <ul>
          <li>- 支持自动布局</li>
          <li>- 支持指定一行渲染的个数</li>
          <li>- 如果你不想自己维护筛选组件的每一个状态，只需要传一个FormInstance进来即可</li>
        </ul>
        换句话说，最简单的场景，你只需要提供筛选组件及FormInstance，TableFilter就可以帮你完成剩下的工作。
      </div>
      <div>
        <MonacoEditor
          language='typescript'
          theme="vs"
          options={{
            minimap: {
              enabled: false,
            },
            readOnly: true,
          }}
          value={TableFilterCode}
          height={600}
          width={'80%'}
        />
      </div>
      <div className="second-title" style={{ marginBottom: 12, marginTop: 20 }}>useDialog</div>
      <div style={{ marginBottom: 12 }}>
        <ul>
          <li>- 将弹窗由命令式改成申明式</li>
          <li>- visiable变量全部有useDialog来管理</li>
          <li>- 可以直接通过open就可以给modal传值，不需要在额外存储到state中</li>
        </ul>
      </div>
      <div style={{ marginBottom: 20 }}><a href="https://juejin.cn/post/7434040315844345871" target='_blank'>详细介绍地址</a></div>
      <div className="usedialog-code" >
        <MonacoEditor
          language='typescript'
          theme="vs"
          options={{
            minimap: {
              enabled: false,
            },
            readOnly: true,
          }}
          value={originModalCode}
          height={200}
          width={'45%'}
        />
        <div className="arrow"> {'===>'} </div>
        <MonacoEditor
          language='typescript'
          theme="vs"
          options={{
            minimap: {
              enabled: false,
            },
            readOnly: true,
          }}
          value={useDialogCode}
          width={'45%'}
          height={200}
        />
      </div>
      <div className="second-title" style={{ marginTop: 20, marginBottom: 12 }}>Ellipsis</div>
      <div style={{ marginBottom: 12 }}>
        <ul>
          <li>- 超出宽度，显示...</li>
          <li>- 支持指定行数显示...</li>
        </ul>
      </div>
      <div style={{ marginBottom: 20 }}><a href="https://juejin.cn/post/7447462392046878735" target='_blank'>详细介绍地址</a></div>
      <MonacoEditor
        language='typescript'
        theme="vs"
        options={{
          minimap: {
            enabled: false,
          },
          readOnly: true,
        }}
        value={EllipsisCode}
        width={'80%'}
        height={200}
      />
    </div>
  </div>
};
export default English;