import {Component} from "react";
import {LgCard} from "@/components/card";
import "./index.scss";
import {BaseProps} from "../../type/BaseProps";
import {CodeView} from "@/components/CodeView";
import {Button} from 'element-react';
import cardImage from './img/beautiful.png'

export default class Card extends Component<{}, {}> {

  componentDidMount() {
  }

  render() {
    return (
      <div className="lg-card-demo">
        <div>在页面文件中引入组件</div>
        <CodeView className="code-size">
          {`
               import {LgCard} from "@/components/Card";
            `}
        </CodeView>
        <div>标签属性详解</div>
        <CodeView className="code-size">
          {`
            interface LgCardProps extends BaseProps {
              headerContent?: string | React.ReactElement<any> // 卡片标题内容，可空，可包含标题和操作按钮
              bodyStyle?: React.CSSProperties // 设置卡片内容的样式，可空
              width?: number // 设置卡片的宽度，默认480
              shadow?: "always" | "hover" | "never" // 设置阴影显示的时机，默认为always
          
            }
          `}
        </CodeView>

        <TypeCardFrame title="基本用法" subtitle="简单的卡片状态，包含所需标题、操作和卡片内容。" className="base-use">
          <div>
            <CodeView className="code-size">
              {`
                <>
                  // 代码示例
                  <LgCard headerContent={
                      <div className="clearfix">
                        <span style={{ "lineHeight": "36px" }}>今日必做</span>
                        <span style={{ "float": "right" }}>
                          <Button type="primary">新增卡片</Button>
                        </span>
                      </div>
                    } bodyStyle={{paddingTop:20,paddingBottom:10}} width={480} >
                      <div className="text item">1 洗衣服</div>
                      <div className="text item">2 做饭</div>
                      <div className="text item">3 打篮球</div>
                      <div className="text item">4 写作业</div>
                    </LgCard>
                </>
              `}
            </CodeView>
          </div>
          <div>
            <LgCard headerContent={
                <div className="clearfix">
                  <span style={{ "lineHeight": "36px"}}>今日必做</span>
                  <span style={{ "float": "right" }}>
                    <Button type="primary">新增卡片</Button>
                  </span>
                </div>
              } bodyStyle={{paddingTop:20}} width={480} shadow="always">
              <div className="text item">1 洗衣服</div>
              <div className="text item">2 做饭</div>
              <div className="text item">3 打篮球</div>
              <div className="text item">4 写作业</div>
            </LgCard>
          </div>
        </TypeCardFrame>

        <TypeCardFrame className="easy-use" title="简单用法" subtitle="只包含卡片内容，无标题和操作按钮">
          <div>
            <CodeView className="code-size">
              {`
                <>
                  // 代码示例
                  <LgCard bodyStyle={{paddingTop:20,paddingBottom:10}} width={480}>
                    <div className="text item">1 洗衣服</div>
                    <div className="text item">2 做饭</div>
                    <div className="text item">3 打篮球</div>
                    <div className="text item">4 写作业</div>
                  </LgCard>
                </>
              `}
            </CodeView>
          </div>
          <div>
            <LgCard bodyStyle={{paddingTop:20,paddingBottom:10}} width={480}>
              <div className="text item">1 洗衣服</div>
              <div className="text item">2 做饭</div>
              <div className="text item">3 打篮球</div>
              <div className="text item">4 写作业</div>
            </LgCard>
          </div>
        </TypeCardFrame>

        <TypeCardFrame className="img-demo" title="带图片卡片" subtitle="可进行更多丰富的内容展示">
          <div>
            <CodeView className="code-size">
              {`
                <>
                  // 代码示例
                  <LgCard bodyStyle={{padding:0}} width={200} className="img-card">
                    <img src={cardImage} className="image" alt=""/>
                    <div style={{ padding: 14 }}>
                      <span>好看的女生</span>
                      <div className="bottom clearfix">
                        <time className="time">2016-10-21 16:19</time>
                        <Button type="text" className="button">操作按钮</Button>
                      </div>
                    </div>
                  </LgCard>
                </>
              `}
            </CodeView>
          </div>
          <div>
            <LgCard bodyStyle={{padding:0}} width={200} className="img-card">
              <img src={cardImage} className="image" alt=""/>
              <div style={{ padding: 14 }}>
                <span>好看的女生</span>
                <div className="bottom clearfix">
                  <time className="time">2016-10-21 16:19</time>
                  <Button type="text" className="button">操作按钮</Button>
                </div>
              </div>
            </LgCard>
            <LgCard bodyStyle={{padding:0}} width={200} className="img-card">
              <img src={cardImage} className="image" alt=""/>
              <div style={{ padding: 14 }}>
                <span>好看的女生</span>
                <div className="bottom clearfix">
                  <time className="time">2016-10-21 16:19</time>
                  <Button type="text" className="button">操作按钮</Button>
                </div>
              </div>
            </LgCard>
          </div>
          
          
        </TypeCardFrame>
        <TypeCardFrame className="shadow-demo" title="卡片阴影"
                          subtitle="可以控制卡片的阴影">
          <div>
            <CodeView className="code-size">
              {`
                <>
                  // 代码示例
                  <LgCard shadow="always" width={150} bodyStyle={{padding:8}}>总是显示</LgCard>
                  <LgCard shadow="hover" width={200} bodyStyle={{padding:8}}>鼠标悬浮时显示</LgCard>
                  <LgCard shadow="never" width={150} bodyStyle={{padding:8}}>从不显示</LgCard>
                </>
              `}
            </CodeView>
          </div>
          <div className="shadow-control-card">
            <LgCard shadow="always" width={150} bodyStyle={{padding:8}}>总是显示</LgCard>
            <LgCard shadow="hover" width={200} bodyStyle={{padding:8}}>鼠标悬浮时显示</LgCard>
            <LgCard shadow="never" width={150} bodyStyle={{padding:8}}>从不显示</LgCard>
          </div>
        </TypeCardFrame>
      </div>
    )
  }
}

interface TypeCardFrameProps {
  title: string
  subtitle: string
}

const TypeCardFrame = (props: TypeCardFrameProps & BaseProps) => {
  return (
    <div className={`card-frame ${props.className || ""}`}>
      <div className="title">{props.title}</div>
      <div className="subtitle">{props.subtitle}</div>
      <div className="split-line"/>
      <div className="card-content">
        {
          props.children
        }
      </div>
    </div>
  )
}