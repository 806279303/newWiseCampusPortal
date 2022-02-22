import {Component} from "react";
import {allSkinClassName} from "@/components/index";
import {Search} from "@/components/search";
import {CodeView} from "@/components/CodeView";

export default () => {
    return (
        <div>
        <div>搜索</div>
        <div>在页面文件中引入组件</div>
        <CodeView className="code-size">
            {`
                import {Search} from "@/components/search";
            `}
        </CodeView>
        <CodeView className="code-size">
          {`interface SearchProps{
              type: "default" \| "A"//搜索框样式选择，A为大搜索框
              onChange?: (value: string) => void //当搜索框发生变化时，触发的事件，返回变化的内容
              onSearch?: (value: string) => void //当点击搜索按钮时，返回的事件
              className?: string,
              placeholder?: string,  //提示框: 提示文字
              disabled?: boolean,    //禁止输入
              style?: object,
              onChange?: (value: string[]) => void//激活时回调，显示当前激活的key值
            }
          `}
        </CodeView>
        <div>代码使用示例</div>
        <CodeView className="code-size">
          {`function SearchComponent(){
                function onSearch(e){
                    console.log(e)
                }
                return (
                  <div>
                      <Search onSearch={onSearch}/>
                    </div>
                )
            }

            export default SearchComponent
          `}

        </CodeView>


        {
          allSkinClassName.map((className,index) => {
            let placeholder = "";
            if(index < 2){
                placeholder = "查找相关信息"
            }else if(index === 5){
                placeholder = "禁止输入"
            } 
            return (
              <div className={className} key={index}>
                <div style={{margin : 10}}>
                    <Search placeholder={placeholder}
                            disabled={index === 5 ? true : false}
                            onChange={(e) => {console.log(e)}}/>
                </div>
              </div>
            )
          })
        }

        {
          allSkinClassName.map((className,index) => {
            return (
              <div className={className} key={index}>
                <div style={{margin : 10}}>
                    <Search type="A" onChange={(e) => {console.log(e)}}/>
                </div>
              </div>
            )
          })
        }
      </div>
    )
}