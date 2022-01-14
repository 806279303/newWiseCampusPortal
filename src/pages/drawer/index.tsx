import './index.scss';
import LgDrawer from "@/components/drawer"
import { Component, useState } from 'react'
export default () => {
    const [visible, setVisible] = useState(false);
    const [type, setType] = useState<any>('A');
    const changevisible = () => {
        setVisible(false)
    }
    return (
        <div className="timeline">
            <div className='btn' onClick={() => { setVisible(true);setType("A") }}>左侧抽屉</div>
            <div className='btn' onClick={() => { setVisible(true);setType("B") }}>右侧抽屉</div>
            <LgDrawer type={type} visible={visible} width={400} onClick={changevisible}>
                <div className='content'>
                    在里面填写需要的内容
                </div>
            </LgDrawer>
        </div>
    );
}
