import "./index.scss"
import {BaseComponent} from "../../type/BaseComponent";
import {BaseProps} from "../../type/BaseProps";

export interface LgBreadcrumbProps extends LgBreadcrumbCommonProps {
  type?: "A" | "B"
}

export interface LgBreadcrumbCommonProps {
  itemList: string[]
  selectedIndex?: number
  onChange?: (index: number) => void
}

export const LgBreadcrumb = (props: LgBreadcrumbProps & BaseProps) => {
  switch (props.type) {
    case "A":
      return <LgBreadcrumbA {...props} />
    case "B":
      return <LgBreadcrumbB {...props} />
  }
  return <LgBreadcrumbA {...props} />
}


class LgBreadcrumbA extends BaseComponent<LgBreadcrumbCommonProps> {

  onClick(index: number) {
    const selectedIndex = this.getSelectedIndex()
    index !== selectedIndex && this.props.onChange && this.props.onChange(index)
  }

  getSelectedIndex() {
    if(!this.props.selectedIndex){
      return 0
    }
    if(this.props.selectedIndex >= this.props.itemList.length){
      return this.props.itemList.length - 1
    }

    return this.props.selectedIndex
  }

  render() {
    const selectedIndex = this.getSelectedIndex()
    return (
      <div className={`lg-breadcrumb-a ${this.props.className || ""}`} style={this.props.style}>
        <div className={`lg-breadcrumb-container`}>
          {
            this.props.itemList.length ?
              this.props.itemList.map((item, index) =>
                <div key={index} onClick={() => this.onClick(index)}
                     className={`lg-breadcrumb-item ${index === selectedIndex ? "selected" : ""}`}>
                  <div className="text">{item}</div>
                  {
                    index === selectedIndex ? <div className="selected-background"/> : ""
                  }
                </div>
              )
              : ''
          }
        </div>
      </div>
    );
  }
}

class LgBreadcrumbB extends BaseComponent<LgBreadcrumbCommonProps> {

  getSelectedIndex() {
    if(!this.props.selectedIndex || this.props.selectedIndex < 0){
      return 0
    }

    if(this.props.selectedIndex >= this.props.itemList.length){
      return this.props.itemList.length - 1
    }

    return this.props.selectedIndex
  }

  onClick(index: number) {
    const selectedIndex = this.getSelectedIndex()
    index !== selectedIndex && this.props.onChange && this.props.onChange(index)
  }

  render() {
    const selectedIndex = this.getSelectedIndex()
    return (
      <div className={`lg-breadcrumb-b ${this.props.className || ""}`} style={this.props.style}>
        <div className={` lg-breadcrumb-container`}>
          {
            this.props.itemList.length ? this.props.itemList.map((item, index) =>
              <div key={index} onClick={() => this.onClick(index)}
                   className={`lg-breadcrumb-item ${selectedIndex === index ? "selected" : ""}`}><div className="text">{item}</div></div>) : ''
          }
        </div>
      </div>
    );
  }
}
