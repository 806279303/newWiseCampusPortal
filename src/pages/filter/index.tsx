import {Component} from "react";
import {allSkinClassName} from "@/components/index";
import {Filter} from "@/components/filter";
import {CodeView} from "@/components/CodeView";


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
        <div>筛选</div>
        <div>在页面文件中引入组件</div>
        <CodeView className="code-size">
            {`
                import {Filter} from "@/components/filter";
            `}
        </CodeView>
        <CodeView className="code-size">
          {`interface LgLoadingProps{
              filterConfig: object[]//[{key:"字段名",name:"按键名称"},...]key必须唯一
              checkValue?: string[]//选中的字段，和key一致的时候视为选中
              className?: string,
              style?: object,
              onChange?: (value: string[]) => void//激活时回调，显示当前激活的key值
            }
          `}
        </CodeView>
        <div>代码使用示例</div>
        <CodeView className="code-size">
          {`
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
            export default SearchComponent
            
          `}
        </CodeView>
        {
          allSkinClassName.map((className,index) => {
            return (
              <div className={className} key={index}>
                <Filter type="radio" title={"筛选 :"} filterConfig={filterConfig} checkValue={checkValue} onChange={onChange}/>
              </div>
            )
          })
        }
      </div>
    )
}