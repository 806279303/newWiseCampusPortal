import './index.scss';
import LgDrawer from "@/components/drawer"
import { Component, useState } from 'react'
import { CodeView } from "@/components/CodeView";
export default () => {
    const [visible, setVisible] = useState(false);
    const [type, setType] = useState<any>('A');
    const changevisible = () => {
        setVisible(false)
    }
    return (
        <div className="LgDrawer">
            <div>在页面文件中引入组件</div>
            <CodeView className="code-size">
                {`
               import LgDrawer from "@/components/loading";
            `}
            </CodeView>
            <div>标签属性详解</div>
            <CodeView className="code-size">
                {`interface LgLoadingProps{
               type: 'A' | 'B',//A左侧，B右侧
               width?: any,//抽屉内容区域的宽度，可空，默认400px
               children?: any,//抽屉内容
               visible: boolean,//是否开启抽屉弹窗，true：开启，false:关闭，默认false
               onClick: (flag: boolean) => void,//开启抽屉的点击方法
               className?: string,
               style?: object,
            }
          `}
            </CodeView>
            <div>代码样例</div>
            <CodeView className="code-size">
                {`
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
          `}
            </CodeView>
            <div className='btn' onClick={() => { setVisible(true); setType("A") }}>左侧抽屉</div>
            <div className='btn' onClick={() => { setVisible(true); setType("B") }}>右侧抽屉</div>
            <LgDrawer type={type} visible={visible} width={400} onClick={changevisible}>
                <div className='content'>
                    在里面填写需要的内容
                </div>
            </LgDrawer>
        </div>
    );
}
