import React ,{Component, useState} from 'react';
import {allSkinClassName} from "@/components/index";
import {Treeselect} from "@/components/treeselect";


interface IState {
    data: any,
    options: any
}
export default class TreeSelectComponent extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
  }
  render(){
    return (
      <div>
        {
          allSkinClassName.map((className,index) => {
            return (
              <div className={className}>
                <Treeselect/>
              </div>
            )
          })
        }
      </div>
     )
  }
}
