import {Component} from "react";
import {allSkinClassName} from "@/components/index";
import {Search} from "@/components/search";
import {CodeView} from "@/components/CodeView";

import {DemoView} from "@/components/demoView";
import {DemoPage} from "../demoPage";

export default class SearchComponent extends Component<{}, {}> {

  render(){
      return (
          <DemoPage title="G011搜索" subtitle="常用的搜索组件，用来查找搜索内容"
              importCode={`
                  import {Search} from "@/components/search";
              `}
              interfaceCode={`
              interface SearchProps{
                    type: "default" \| "A"//搜索框样式选择，A为大搜索框
                    onChange?: (value: string) => void //当搜索框发生变化时，触发的事件，返回变化的内容
                    onSearch?: (value: string) => void //当点击搜索按钮时，返回的事件
                    className?: string,
                    placeholder?: string,  //提示框: 提示文字
                    disabled?: boolean,    //禁止输入
                    style?: object,
                    onChange?: (value: string[]) => void//激活时回调，显示当前激活的key值
              }`}
          >

            <DemoView title="小号搜索框" code={`
              <Search placeholder="搜索相关信息" onChange={(e) => {console.log(e)}}/>
            `}>
                  <Search placeholder="搜索相关信息" onChange={(e) => {console.log(e)}}/>          
            </DemoView>

            <DemoView title="禁止输入" code={`
              <Search placeholder="禁止输入" disabled={true}/>
            `}>
                  <Search placeholder="禁止输入" disabled={true}/>          
            </DemoView>

            <DemoView title="大搜索框" code={`
              <Search type="A" placeholder="大搜索框" onChange={(e) => {console.log(e)}}/>
            `}>
                  <Search type="A" placeholder="大搜索框" onChange={(e) => {console.log(e)}}/>          
            </DemoView>



        </DemoPage>
      )
  }
    
}