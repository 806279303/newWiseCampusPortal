import { Component } from "react";
import "./index.scss";
import { AllSkinCover } from "../AllSkinCover";
import { Icon, Button } from "element-react";
import { LgRate } from "@/components/rate";
import { CodeView } from '@/components/CodeView';
import { DemoPage } from "../demoPage";
import { DemoView } from "@/components/demoView";

interface IState {
    tabs: any
    tabIndex: any
    tabs1: any
    tabIndex1: any
}
export default class Menu extends Component<{}> {
    constructor(props: {}) {
        super(props);
        this.state = {
            
        }   
    }
    render() {
        const label = <span><Icon name="date" /> 用户管理</span>
        return (
            <DemoPage title="G010评分" className="lg_tabs_block"
                    importCode={`
                        import { LgRate } from "@/components/rate";
                    `}
                    interfaceCode={`
                        interface RateProps {
                            colors?: string[];//icon 的颜色数组，共有 3 个元素，为 3 个分段所对应的颜色	array	—	['#F7BA2A', '#F7BA2A', '#F7BA2A']
                            texts?: string[];//辅助文字数组	array	—	['极差', '失望', '一般', '满意', '惊喜']
                            showText?: boolean;//是否显示辅助文字	boolean	—	false
                            textColor?: string;//;//辅助文字的颜色	string	—	1F2D3D
                            disabled?: boolean;//是否为只读	boolean	—	false
                            value?: number;
                            onChange?(value?: number): void
                            textTemplate?: string;//只读时的辅助文字模板	string	—	{value}
                            lowThreshold?: number;//低分和中等分数的界限值，值本身被划分在低分中	number	—	2
                            highThreshold?: number;//高分和中等分数的界限值，值本身被划分在高分中	number	—	4
                            max?: number;//最大分值	number	—	5
                            voidColor?: string;//未选中 icon 的颜色	string	—	#C6D1DE
                            disabledVoidColor?: string;//只读时未选中 icon 的颜色	string	—	#EFF2F7
                            iconClasses?: string[];//	icon 的类名数组，                    共有 3 个元素，为 3 个分段所对应的类名	array	—	['el-icon-star-on', 'el-icon-star-on','el-icon-star-on']
                            voidIconClass?: string;//未选中 icon 的类名	string	—	el-icon-star-off
                            disabledVoidIconClass?: string;//只读时未选中 icon 的类名	string	—	el-icon-star-on
                            allowHalf?: boolean;//是否允许半选	boolean	—	false
                        }
                    `}>
                
            <DemoView title="基本用法"  subtitle={"默认不区分颜色"}  code={`
                    <LgRate colors={['#99A9BF', '#F7BA2A', '#FF9900']} />
                `}>
                <LgRate colors={['#99A9BF', '#F7BA2A', '#FF9900']} />
            </DemoView>
                
            <DemoView title="允许半选"  subtitle={"可支持鼠标选择半星"}  code={`
                    <LgRate allowHalf={true} onChange={(val) => console.log(val)} />
                `}>
                <LgRate allowHalf={true} onChange={(val) => console.log(val)} />
            </DemoView>
                
            <DemoView title="辅助文字"  subtitle={"用辅助文字直接地表达对应分数"}  code={`
                    <LgRate showText={true} />
                `}>
                <LgRate showText={true} />
            </DemoView>
                
            <DemoView title="只读"  subtitle={"只读的评分用来展示分数，允许出现半星"}  code={`
                    <LgRate disabled={true} value={3.9} showText={true} />
                `}>
                <LgRate disabled={true} value={3.9} showText={true} />
            </DemoView>
        </DemoPage>
        )
    }
}
