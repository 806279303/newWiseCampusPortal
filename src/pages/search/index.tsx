import {Component} from "react";
import {allSkinClassName} from "@/components/index";
import {Search} from "@/components/search";
export default () => {
    return (
        <div>
        {
          allSkinClassName.map(className => {
            return (
              <div className={className}>
                <Search onSearch={(e) => {console.log(e)}}/>
              </div>
            )
          })
        }
      </div>
    )
}