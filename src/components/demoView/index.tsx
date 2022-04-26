import "./index.scss"
import {BaseComponent} from "../../type/BaseComponent";
import classNames from "classnames";
import { BaseProps } from "../../type/BaseProps";
import {CodeView} from "@/components/CodeView";


export interface DemoViewProps {
  title: string
  subtitle?: string
  code?: string
}

export class DemoView extends BaseComponent<DemoViewProps> {

  private readonly classNamePrefix: string

  constructor(props: (DemoViewProps & BaseProps) | Readonly<DemoViewProps & BaseProps>, context: any) {
    super(props, context);
    this.classNamePrefix = "lg-demo-view"
  }

  render() {
    let className = classNames(
      `${this.classNamePrefix}-root`,
      {
        [`${this.props.className}`]: !!this.props.className
      }
    )
    return (
      <div className={className} style={this.props.style}>
        <div className={`${this.classNamePrefix}-title`}>{this.props.title}</div>
        {
          !this.props.subtitle ? "" :
            <div className={`${this.classNamePrefix}-subtitle`}>{this.props.subtitle}</div>
        }
        <div className={`${this.classNamePrefix}-component-area`}>
          {
            this.props.children
          }
        </div>
        {
          !this.props.code? "":
            <CodeView canHidden={true}>{this.props.code}</CodeView>
        }
      </div>
    )
  }

  getClassNamePrefix(): string {
    return "DemoView";
  }
}