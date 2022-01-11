import {Component} from "react";
import {allSkinClassName} from "@/components/index";
import {Filter} from "@/components/filter";
export default () => {
    return (
        <div>
        {
          allSkinClassName.map((className,index) => {
            return (
              <div className={className}>
                <Filter/>
              </div>
            )
          })
        }
      </div>
    )
}