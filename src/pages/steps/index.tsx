import './index.scss';
import LgStep from "@/components/steps"
import { Component, useState } from 'react'
import { CodeView } from "@/components/CodeView";
export default () => {
    const [list, add] = useState<any>(["初稿讨论", "修改搞讨论", "修改稿子", "修改稿讨论", "发布最终稿"])
    const addLink = () => {
        add([...list, "发布终稿"])
    }
    var list1 = ["步骤一", "步骤二", "步骤三", "步骤四", "步骤五", "步骤六"]
    var list2 = ["1.步骤一", "2.步骤二", "3.步骤三", "4.步骤四", "5.步骤五"]
    return (
        <div className="LgStep">
            <div>在页面文件中引入组件</div>
            <CodeView className="code-size">
                {`
               import LgStep from "@/components/steps"
            `}
            </CodeView>
            <div>标签属性详解</div>
            <CodeView className="code-size">
                {`interface LgLoadingProps{
               type: 'A' | 'B' | 'C' | 'D',//款式选择
               stepList: any[],//步骤名字列表
               stepIndex: number,//当前步骤索引
               colorType?:string,//A,B,C款的皮肤选择,可空,默认lg-skin-s1（智慧经典）
               onClick?: () => void,//D款特有，左侧备课新建环节的方法
               className?: string,
               style?: object,
            }
          `}
            </CodeView>
            <div>A款代码样例</div>
            <CodeView className="code-size">
                {`
               var list1 = ["步骤一", "步骤二", "步骤三", "步骤四", "步骤五", "步骤六"]

               <LgStep type="A" stepList={list1} colorType="lg-skin-s1" stepIndex={2} />
               <LgStep type="A" stepList={list1} colorType="lg-skin-s2" stepIndex={2} />
               <LgStep type="A" stepList={list1} colorType="lg-skin-s3" stepIndex={3} />
               <LgStep type="A" stepList={list1} colorType="lg-skin-s4" stepIndex={4} />
               <LgStep type="A" stepList={list1} colorType="lg-skin-s5" stepIndex={5} />
          `}
            </CodeView>
            <LgStep type="A" stepList={list1} colorType="lg-skin-s1" stepIndex={1} />
            <LgStep type="A" stepList={list1} colorType="lg-skin-s2" stepIndex={2} />
            <LgStep type="A" stepList={list1} colorType="lg-skin-s3" stepIndex={3} />
            <LgStep type="A" stepList={list1} colorType="lg-skin-s4" stepIndex={4} />
            <LgStep type="A" stepList={list1} colorType="lg-skin-s5" stepIndex={5} />
            <div style={{ marginTop: 20 }}>B款代码样例</div>
            <CodeView className="code-size">
                {`
               var list1 = ["步骤一", "步骤二", "步骤三", "步骤四", "步骤五", "步骤六"]
               
               <LgStep type="B" colorType="lg-skin-s1" stepList={list1} stepIndex={3} />
               <LgStep type="B" colorType="lg-skin-s2" stepList={list1} stepIndex={3} />
               <LgStep type="B" colorType="lg-skin-s3" stepList={list1} stepIndex={3} />
               <LgStep type="B" colorType="lg-skin-s4" stepList={list1} stepIndex={3} />
               <LgStep type="B" colorType="lg-skin-s5" stepList={list1} stepIndex={3} />
          `}
            </CodeView>
            <LgStep type="B" colorType="lg-skin-s1" stepList={list1} stepIndex={3} />
            <LgStep type="B" colorType="lg-skin-s2" stepList={list1} stepIndex={3} />
            <LgStep type="B" colorType="lg-skin-s3" stepList={list1} stepIndex={3} />
            <LgStep type="B" colorType="lg-skin-s4" stepList={list1} stepIndex={3} />
            <LgStep type="B" colorType="lg-skin-s5" stepList={list1} stepIndex={3} />
            <div style={{ marginTop: 20 }}>C款代码样例</div>
            <CodeView className="code-size">
                {`
              var list2 = ["1.步骤一", "2.步骤二", "3.步骤三", "4.步骤四", "5.步骤五"]
               
               <LgStep type="C" colorType="lg-skin-s1" stepList={list2} stepIndex={1} />
               <LgStep type="C" colorType="lg-skin-s2" stepList={list2} stepIndex={2} />
               <LgStep type="C" colorType="lg-skin-s3" stepList={list2} stepIndex={3} />
               <LgStep type="C" colorType="lg-skin-s4" stepList={list2} stepIndex={4} />
               <LgStep type="C" colorType="lg-skin-s5" stepList={list2} stepIndex={5} />
          `}
            </CodeView>
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
            <CodeView className="code-size">
                {`
              const [list, add] = useState<any>(["初稿讨论", "修改搞讨论", "修改稿子", "修改稿讨论", "发布最终稿"])
              const addLink = () => {
                  add([...list, "发布终稿"])
              }
               
              <LgStep type="D" onClick={addLink} stepList={list} stepIndex={4} />
          `}
            </CodeView>
            <div style={{ background: "#ecf5ff" }}>
                <LgStep type="D" onClick={addLink} stepList={list} stepIndex={4} />
            </div>
        </div>
    );
}
