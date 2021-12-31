import "./index.scss"
import {Component} from "react";

export class LgLoading extends Component<{}, {}> {

  render() {
    return (
      <div className="lg-loading-root">
        <div className="lg-loading-dot-top"/>
        <div className="lg-loading-dot-right"/>
        <div className="lg-loading-dot-bottom"/>
        <div className="lg-loading-dot-left"/>
      </div>
    )
  }
}