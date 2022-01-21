import {Component} from "react";
import {allSkinClassName} from "@/components/index";
import {Filter} from "@/components/filter";

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
        {
          allSkinClassName.map((className,index) => {
            return (
              <div className={className} key={index}>
                <Filter type="radio" filterConfig={filterConfig} checkValue={checkValue} onChange={onChange}/>
              </div>
            )
          })
        }
      </div>
    )
}