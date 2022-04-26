import './index.scss';
import React, {Component, useState} from 'react';
import {Tree, Menu} from "element-react";
import {BaseComponent} from "../../type/BaseComponent";

interface TreeeselectProps {
  autoExpandParent?: boolean
  checkStrictly?: boolean
  currentNodeKey?: any
  defaultCheckedKeys?: any[]
  defaultExpandedKeys?: any[]
  defaultExpandAll?: boolean
  data?: any[]
  emptyText?: string
  expandOnClickNode?: boolean

  filterNodeMethod?(value?: any, data?: any, node?: any): boolean

  renderContent?(nodeModel?: any, data?: any, store?: any): React.ReactElement<any>

  isShowCheckbox?: boolean
  accordion?: boolean
  indent?: number,
  nodeKey?: string
  options?: {
    children?: string
    label?: string
    icon?: string
  },
  lazy?: boolean
  highlightCurrent?: boolean

  load?(node?: any, resolve?: any): void

  onCheckChange?(data?: any, checked?: boolean, indeterminate?: any): void

  onNodeClicked?(data?: any, node?: any): void

  onCurrentChange?(data?: any, node?: any): void

  onNodeExpand?(data?: any, nodeModel?: any, node?: any): void

  onNodeCollapse?(data?: any, nodeModel?: any, node?: any): void
}


export class Treeselect extends BaseComponent<TreeeselectProps> {
  static defaultProps: TreeeselectProps = {
    highlightCurrent: true
  }

  constructor(props: Readonly<TreeeselectProps>, context: any) {
    super(props, context);
  }

  render() {
    return (
      <div className={`lg-treeselect-area ${this.props.className}`} style={this.props.style}>
        <Tree {...this.props}/>
      </div>
    )
  }

  getClassNamePrefix(): string {
    return "Treeselect";
  }
}


