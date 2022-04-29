import "./index.scss"
import {BaseComponent} from "../../../type/BaseComponent";
import {Scrollbars} from 'react-custom-scrollbars-2';

export interface SimpleTableBodyProps {
}

interface SimpleTableBodyState {
}

export class SimpleTableBody extends BaseComponent<SimpleTableBodyProps, SimpleTableBodyState> {

  render() {
    return (
      <Scrollbars className={this.rootClass()}>
        {
          this.props.children
        }
      </Scrollbars>
    )
  }

  getClassNamePrefix(): string {
    return "SimpleTableBody";
  }
}

