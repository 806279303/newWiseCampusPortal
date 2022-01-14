import './index.scss';
import LgStep from "@/components/steps"
import { Component, useState } from 'react'
export default () => {
    const [list,add]=useState<any>(["初稿讨论", "修改搞讨论", "修改稿子", "修改稿讨论", "发布最终稿"])
    const addLink=()=>{
        add([...list,"发布终稿"])
    }
    var list1 = ["步骤一", "步骤二", "步骤三", "步骤四", "步骤五", "步骤六"]
    var list2 = ["1.步骤一", "2.步骤二", "3.步骤三", "4.步骤四", "5.步骤五"]
    return (
        <div className="timeline">
            <div>A款</div>
            <LgStep type="A" stepList={list1} colorType="lg-skin-s1" stepIndex={1} />
            <LgStep type="A" stepList={list1} colorType="lg-skin-s2" stepIndex={2} />
            <LgStep type="A" stepList={list1} colorType="lg-skin-s3" stepIndex={3} />
            <LgStep type="A" stepList={list1} colorType="lg-skin-s4" stepIndex={4} />
            <LgStep type="A" stepList={list1} colorType="lg-skin-s5" stepIndex={5} />
            <div style={{ marginTop: 20 }}>B款</div>
            <LgStep type="B" colorType="lg-skin-s1" stepList={list1} stepIndex={3} />
            <LgStep type="B" colorType="lg-skin-s2" stepList={list1} stepIndex={3} />
            <LgStep type="B" colorType="lg-skin-s3" stepList={list1} stepIndex={3} />
            <LgStep type="B" colorType="lg-skin-s4" stepList={list1} stepIndex={3} />
            <LgStep type="B" colorType="lg-skin-s5" stepList={list1} stepIndex={3} />
            <div style={{ marginTop: 20 }}>C款导入过程</div>
            <LgStep type="C" colorType="lg-skin-s1" stepList={list2} stepIndex={1} />
            <br></br>
            <LgStep type="C" colorType="lg-skin-s2" stepList={list2} stepIndex={2} />
            <br></br>
            <LgStep type="C" colorType="lg-skin-s3" stepList={list2} stepIndex={3} />
            <br></br>
            <LgStep type="C" colorType="lg-skin-s4" stepList={list2} stepIndex={4} />
            <br></br>
            <LgStep type="C" colorType="lg-skin-s5" stepList={list2} stepIndex={5} />
            <div style={{ marginTop: 20 }}>D款左侧备课过程</div>
            <div style={{background:"#ecf5ff"}}>
                <LgStep type="D" onClick={addLink} stepList={list} stepIndex={4} />
            </div>
        </div>
    );
}
