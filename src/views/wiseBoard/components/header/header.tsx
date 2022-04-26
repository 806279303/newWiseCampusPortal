import {BaseComponent} from "../../../../type/BaseComponent";

export interface HeaderProps {
}

interface HeaderState {
}

export class Header extends BaseComponent<HeaderProps, HeaderState> {

  render() {
    return (
      <div className={this.rootClass()}>
        header
      </div>
    )
  }

  getClassNamePrefix(): string {
    return "Header";
  }
}

