import {Component} from "react";
import {allSkinClassName} from "@/components/index";
import {Filter} from "@/components/filter";
import {CodeView} from "@/components/CodeView";
import TreeSelectComponent from '../treeselect';

import {DemoView} from "@/components/demoView";
import {DemoPage} from "../demoPage";


let filterConfig = [{
  key: "nameA",
  name: "选项A",
  disable: false
},{
  key: "valueB",
  name: "选项B",
},{
  key: "typec",
  name: "选项C",
 
},{
  key: "typed",
  name: "选项D",

}]

let checkValue = ["typec"]

function onChange(e: string[]){
  console.log(e)
}

export default () => {
    return (
        <div>
            <DemoPage title="G012筛选" subtitle="用于筛选信息"
                importCode={`
                    import {Filter} from "@/components/filter";
                `}
                interfaceCode={`
                    interface FilterProps{
                      type?: "radio" | "default" //单选或者多选
                      title?: string, //筛选前的提示文字
                      filterConfig: object[]//[{key:"字段名",name:"按键名称"},...]key必须唯一
                      checkValue?: string[]//选中的字段，和key一致的时候视为选中
                      className?: string,
                      style?: object,
                      onChange?: (value: string[]) => void//激活时回调，显示当前激活的key值
                    }
                `}>

                <DemoView title="列表型号资料检索" code={`
                    import {Filter} from "@/components/filter";
                    let filterConfig = [{
                      key: "nameA",
                      name: "选项A"
                    },{
                      key: "valueB",
                      name: "选项B"
                    },{
                      key: "typec",
                      name: "选项C
                    },{
                      key: "typed",
                      name: "选项D"
                    }]

                    let checkValue = ["typec"]

                    function onChange(e: string[]){
                      console.log(e)
                    }

                    function SearchComponent(){
                        function onSearch(e){
                            console.log(e)
                        }
                        return (
                          <div>
                              <Filter type="radio" 
                                      filterConfig={filterConfig} 
                                      checkValue={checkValue} 
                                      onChange={onChange}/>
                            </div>
                        )
                    }
                `}>
                  <div>
                    <Filter type="radio" title={"筛选 :"} filterConfig={filterConfig} checkValue={checkValue} onChange={onChange}/>
                  </div>
                </DemoView>              
            </DemoPage>
            <TreeSelectComponent />
        </div>
    )
}