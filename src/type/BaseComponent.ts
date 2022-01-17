import {Component} from "react";
import {BaseProps} from "./BaseProps";

export class BaseComponent<T = {}, S = {}, SS = any> extends Component<T & BaseProps, S, SS>{
  componentDidMount() {
    this.props.onRef && this.props.onRef(this)
  }
}