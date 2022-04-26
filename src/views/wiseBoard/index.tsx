import React, {Component} from 'react';
import {Header} from "./components/header/header"
import {BaseComponent} from "../../type/BaseComponent";
import "./index.scss"


class WiseBoard extends BaseComponent {
    render() {
        return (
            <div className={this.rootClass()}>
                <Header />
            </div>
        );
    }

    getClassNamePrefix(): string {
      return "WiseBoard";
    }
}

export default WiseBoard;