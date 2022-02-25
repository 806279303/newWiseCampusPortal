import './index.scss';
import LgDrawer from "@/components/drawer"
import { Component, useState } from 'react'
import { CodeView } from "@/components/CodeView";
import { DemoView } from "@/components/demoView";
import { DemoPage } from "../demoPage";
export default () => {
    const [visible, setVisible] = useState(false);
    const [type, setType] = useState<any>('A');
    const changevisible = () => {
        setVisible(false)
    }
    return (
        <DemoPage title="G022抽屉" className="lg-breadcrumb-demo-page"
            importCode={`
        import LgDrawer from "@/components/loading";
        `}
            interfaceCode={`
        interface LgLoadingProps{
            type: 'A' | 'B',//A左侧，B右侧
            width?: any,//抽屉内容区域的宽度，可空，默认400px
            children?: any,//抽屉内容
            title?:string,//抽屉标题
            visible: boolean,//是否开启抽屉弹窗，true：开启，false:关闭，默认false
            onClick: (flag: boolean) => void,//开启抽屉的点击方法
            className?: string,
            style?: object,
         }
        `}
        >
            <DemoView title="代码样例" code={`
                const [visible, setVisible] = useState(false);
                const [type, setType] = useState<any>('A');
                const changevisible = () => {
                    setVisible(false)
                }
                
            <div className='btn' onClick={() => { setVisible(true); setType("A") }}>左侧抽屉</div>
            <div className='btn' onClick={() => { setVisible(true); setType("B") }}>右侧抽屉</div>
            <LgDrawer type={type} visible={visible} width={400} onClick={changevisible}>
                <div className='content'>
                    在里面填写需要的内容
                </div>
            </LgDrawer>
          `}>
                <div className='btn' onClick={() => { setVisible(true); setType("A") }}>左侧抽屉</div>
                <div className='btn' onClick={() => { setVisible(true); setType("B") }}>右侧抽屉</div>
                <LgDrawer type={type} title="我是标题" visible={visible} width={600} onClick={changevisible}>
                    <div className='content'>
                        在里面填写需要的内容
                    </div>
                </LgDrawer>

            </DemoView>

        </DemoPage>

    );
}
