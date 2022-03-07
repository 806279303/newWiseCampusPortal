import "./index.scss"
import { Component } from "react";
import { LgEmpty } from "@/components/empty";
import { DemoPage } from "../demoPage";
import { DemoView } from "@/components/demoView";

export default class Empty extends Component<{}, {}>{
  render() {
    return (
      <DemoPage title="G023缺省页" subtitle="常用无数据占位组件" className="lg-breadcrumb-demo-page"
        importCode={`
                    import { LgEmpty } from "@/components/empty";
                `}
        interfaceCode={`
                  interface LgEmptyProps {
                    tip?: string
                    icon?: "icon-1" | "icon-2" | ReactNode //图标位置可以填组件，默认值是icon-1
                  }
                `}>
        <DemoView title="简单使用" code={`
            <LgEmpty icon="icon-1" />
        `}>
          <LgEmpty icon="icon-1" />
        </DemoView>

        <DemoView title="图标二" code={`
           <LgEmpty icon="icon-2" />
        `}>
          <LgEmpty icon="icon-2" />
        </DemoView>
      </DemoPage>
    );
  }
}