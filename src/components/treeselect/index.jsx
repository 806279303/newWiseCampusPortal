
import './index.scss';
import React ,{Component, useState} from 'react';
import { Tree, Menu } from "element-react";


class Treeselect extends Component{    
      render() {
        return (
          <div className='lg-treeselect-area'>
              <Tree
                {...this.props}
              />
          </div>
        )
      }
}

export default Treeselect
