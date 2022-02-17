
import './index.scss';
import React ,{Component, useState} from 'react';
import { Tree, Menu } from "element-react";
import { BaseComponent } from "../../type/BaseComponent";



export class Treeselect extends Component{
      constructor(props) {
        super(props);
        this.state = {
          data : [{
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
            <div className='lg-treeselect-area'>
                <Tree data={this.state.data}
                    options={this.state.options}
                    highlightCurrent={true}/ >
            </div>
          )
      }
}


