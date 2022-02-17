import React, {Component, useState} from 'react';
import {allSkinClassName} from "@/components/index";
import {Treeselect} from "@/components/treeselect";
import {CodeView} from "@/components/CodeView";

const cloneDeep = require('lodash').cloneDeep;


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
          <div>树形筛选</div>
          <div>在页面文件中引入树筛选组件</div>
          <CodeView className="code-size">
                  {`
                      import {Treeselect} from "@/components/treeselect";
                  `}
          </CodeView>
          <div> 配置项 </div>
          <CodeView className="code-size">{`       
                    interface TreeselectProps {
                    data?: any[], //配置项，lable要显示的文字信息，
                                  children为子菜单，nodeKey表示选中的key值，必须唯一
                    options?: {
                      children?: string  //指定节点标签为节点对象的某个属性值
                      label?: string    //指定子树为节点对象的某个属性值
                      icon?: string
                    },
                    isShowCheckbox?: boolean,  //是否显示选择框
                    highlightCurrent?: boolean, //鼠标经过时候是否有阴影
                    onCurrentChange?(data?:any, node?:any) => void//当前选中节点变化时触发的事件
                    onCheckChange?(data?:any, checked?: boolean, indeterminate?:any) => void // 节点选中状态发生变化时的回调

                };
                //在这仅显示比较常用的配置，更多配置请参考
                //https://elemefe.github.io/element-react/#/zh-CN/tree
                `}
          </CodeView>

          <div> 代码示例 </div>

          <CodeView className="code-size">
                  {`
                      class TreeSelectComponent extends Component<{}, IState> {
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
                              <Treeselect 
                                onCurrentChange={(value)=>{console.log(value)}}
                                onCheckChange={(data, checked) => {console.warn(data,checked)}}
                                data={cloneDeep(this.state.data)}
                                options={cloneDeep(this.state.options)} 
                                isShowCheckbox={true}
                                highlightCurrent={true})
                        }
                      }
                  `}
          </CodeView>
          
          <div style={{width: 300}}>
            {
              allSkinClassName.map((className, index) => {
                return <div className={className} key={index}>
                  <Treeselect 
                      onCurrentChange={(value)=>{console.log(value)}}
                      onCheckChange={(data, checked) => {console.warn(data,checked)}}
                      data={cloneDeep(this.state.data)}
                      options={cloneDeep(this.state.options)} 
                      isShowCheckbox={true}
                      highlightCurrent={true}/>
                </div>
              })
            }

          </div>
      </div>
    )
  }
}
