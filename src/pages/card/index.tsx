import {Component} from "react";
import {LgCard} from "@/components/card";
import "./index.scss";
import {BaseProps} from "../../type/BaseProps";
import {CodeView} from "@/components/CodeView";
import {Button} from 'element-react';
import cardImage from './img/beautiful.png'
import {DemoView} from "@/components/demoView";
import {DemoPage} from "../demoPage";

export default class Card extends Component<{}, {}> {

  componentDidMount() {
  }

  render() {
    return (
      <DemoPage title="G027卡片"
                importCode={`
                  import {LgCard} from "@/components/card";
                `}
                className="lg-card-demo"
                interfaceCode={`
                  interface LgCardProps extends BaseProps {
                    headerContent?: string | React.ReactElement<any> // 卡片标题内容，可空，可包含标题和操作按钮
                    bodyStyle?: React.CSSProperties // 设置卡片内容的样式，可空
                    shadow?: "always" | "hover" | "never" // 设置阴影显示的时机，默认为always
                  }
                `}>
      <DemoView title="基本用法" subtitle="简单的卡片状态，包含所需标题、操作和卡片内容。" code={`
          <LgCard headerContent={
            <div className="clearfix">
              <span style={{ "lineHeight": "36px" }}>今日必做</span>
              <span style={{ "float": "right" }}>
                <Button type="primary">新增卡片</Button>
              </span>
            </div>
          } bodyStyle={{paddingTop:20,paddingBottom:10}}>
            <div className="text item">1 洗衣服</div>
            <div className="text item">2 做饭</div>
            <div className="text item">3 打篮球</div>
            <div className="text item">4 写作业</div>
          </LgCard>
      `}>
          <LgCard headerContent={
            <div className="clearfix">
              <span style={{ "lineHeight": "36px" }}>今日必做</span>
              <span style={{ "float": "right" }}>
                <Button type="primary">新增卡片</Button>
              </span>
            </div>
          } bodyStyle={{paddingTop:20,paddingBottom:10}}>
            <div className="text item">1 洗衣服</div>
            <div className="text item">2 做饭</div>
            <div className="text item">3 打篮球</div>
            <div className="text item">4 写作业</div>
          </LgCard>
      </DemoView>

      <DemoView title="简单用法" subtitle="只包含卡片内容，无标题和操作按钮" code={`
        <LgCard bodyStyle={{paddingTop:20,paddingBottom:10}}>
          <div className="text item">1 洗衣服</div>
          <div className="text item">2 做饭</div>
          <div className="text item">3 打篮球</div>
          <div className="text item">4 写作业</div>
        </LgCard>
      `}>
          <LgCard bodyStyle={{paddingTop:20,paddingBottom:10}}>
            <div className="text item">1 洗衣服</div>
            <div className="text item">2 做饭</div>
            <div className="text item">3 打篮球</div>
            <div className="text item">4 写作业</div>
          </LgCard>
      </DemoView>

      <DemoView title="带图片卡片" subtitle="可进行更多丰富的内容展示" code={`
        <div>
          <LgCard bodyStyle={{padding:0}} style={{width:200,display:"inline-block"}} className="img-card">
            <img src={cardImage} className="image" alt=""/>
            <div style={{ padding: 14 }}>
              <span>好看的女生</span>
              <div className="bottom clearfix">
                <time className="time">2016-10-21 16:19</time>
                <Button type="text" className="button">操作按钮</Button>
              </div>
            </div>
          </LgCard>
          <LgCard bodyStyle={{padding:0}} style={{width:200,display:"inline-block",marginLeft:20}} className="img-card">
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
      `}>
          <div>
            <LgCard bodyStyle={{padding:0}} style={{width:200,display:"inline-block"}} className="img-card">
              <img src={cardImage} className="image" alt=""/>
              <div style={{ padding: 14 }}>
                <span>好看的女生</span>
                <div className="bottom clearfix">
                  <time className="time">2016-10-21 16:19</time>
                  <Button type="text" className="button">操作按钮</Button>
                </div>
              </div>
            </LgCard>
            <LgCard bodyStyle={{padding:0}} style={{width:200,display:"inline-block",marginLeft:20}} className="img-card">
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
        </DemoView>

        <DemoView title="卡片阴影" subtitle="可以控制卡片的阴影" code={`
          <div>
            <LgCard shadow="always" style={{width:150,display:"inline-block"}} bodyStyle={{padding:8}}>总是显示</LgCard>
            <LgCard shadow="hover" style={{width:200,display:"inline-block",marginLeft:10}} bodyStyle={{padding:8}}>鼠标悬浮时显示</LgCard>
            <LgCard shadow="never" style={{width:150,display:"inline-block",marginLeft:10}} bodyStyle={{padding:8}}>从不显示</LgCard>
          </div>
        `
        }
        >
          <div>
            <LgCard shadow="always" style={{width:150,display:"inline-block"}} bodyStyle={{padding:8}}>总是显示</LgCard>
            <LgCard shadow="hover" style={{width:200,display:"inline-block",marginLeft:10}} bodyStyle={{padding:8}}>鼠标悬浮时显示</LgCard>
            <LgCard shadow="never" style={{width:150,display:"inline-block",marginLeft:10}} bodyStyle={{padding:8}}>从不显示</LgCard>
          </div>
        </DemoView>
      </DemoPage>
    )
  }
}
