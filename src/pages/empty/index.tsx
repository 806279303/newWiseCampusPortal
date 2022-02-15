import "./index.scss"
import {Component} from "react";
import { LgEmpty } from "@/components/empty";
import {CodeView} from "@/components/CodeView";

export default class Empty extends Component<{}, {}>{
  render() {
    return (
      <div className="lg-empty-demo">
        <div>在页面文件中引入组件</div>
        <CodeView className="code-size">
          {`
               import { LgEmpty } from "@/components/empty";
          `}
        </CodeView>

        <div>标签属性详解</div>
        <CodeView className="code-size">
          {`interface LgEmptyProps {
              tip?: string
              icon?: "icon-1" | "icon-2" | ReactNode //图标位置可以填组件，默认值是icon-1
            }
          `}
        </CodeView>

        <div>简单使用</div>
        <CodeView className="code-size">
          {`
            <LgEmpty icon="icon-1" />
          `}
        </CodeView>
        <LgEmpty/>

        <div>图标二</div>
        <CodeView className="code-size">
          {`
            <LgEmpty icon="icon-2" />
          `}
        </CodeView>
        <LgEmpty icon="icon-2" />
      </div>
    );
  }
}