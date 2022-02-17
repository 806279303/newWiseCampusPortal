import React, {Component, useState} from 'react';
import {allSkinClassName} from "@/components/index";
import {Treeselect} from "@/components/treeselect";
import {AllSkinCover} from "../AllSkinCover";


interface IState {
  data: any,
  options: any
}

export default class TreeSelectComponent extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: [{
        label: '一级 1',
        nodeKey: '1',
        children: [{
          label: '二级 1-1',
          nodeKey: '1-1',
        }]
      }, {
        label: '一级 2',
        nodeKey: '2',
        children: [{
          label: '二级 2-1',
          nodeKey: '2-1'
        }, {
          label: '二级 2-2',
          nodeKey: '2-2'
        }]
      }],
      options: {
        children: 'children',
        label: 'label'
      }
    }
  }

  render() {
    return (
      <div>
        {

          allSkinClassName.map((className, index) => {
            return <div className={className} key={index}>
              <Treeselect data={JSON.parse(JSON.stringify(this.state.data))}
                          options={JSON.parse(JSON.stringify(this.state.options))} highlightCurrent={true}/>
            </div>
          })
        }

      </div>
    )
  }
}
