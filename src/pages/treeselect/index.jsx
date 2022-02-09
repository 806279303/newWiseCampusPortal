import {Component} from "react";
import {allSkinClassName} from "@/components/index";
import Treeselect from "@/components/treeselect";
export default () => {
    return (
        <div>
        {
          allSkinClassName.map((className,index) => {
            return (
              <div className={className}>
                <Treeselect />
              </div>
            )
          })
        }
      </div>
    )
}