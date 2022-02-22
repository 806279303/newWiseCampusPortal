import {BaseComponent} from "../../type/BaseComponent";
import {BaseProps} from "../../type/BaseProps";
import classNames from "classnames";
import "./index.scss"
import {CodeView} from "@/components/CodeView";

export interface DemoPageProps {
  title: string
  subtitle?: string
  importCode?: string
  interfaceCode?: string
}


export class DemoPage extends BaseComponent<DemoPageProps> {

  private readonly classNamePrefix: string

  constructor(props: (DemoPageProps & BaseProps) | Readonly<DemoPageProps & BaseProps>) {
    super(props);
    this.classNamePrefix = "lg-demo-page"
  }

  render() {

    const className = classNames(
      `${this.classNamePrefix}-root`,
      {
        [`${this.props.className}`]: !!this.props.className
      }
    )

    return (
      <div className={className}>
        <div className={`${this.classNamePrefix}-header`}>
          <div className={`${this.classNamePrefix}-title`}>{this.props.title}</div>
          {
            !this.props.subtitle ? "" :
              < div className={`${this.classNamePrefix}-subtitle`}>{this.props.subtitle}</div>
          }
          {
            !this.props.importCode ? "" : (
              <div className={`${this.classNamePrefix}-import`}>
                <div className={`${this.classNamePrefix}-import-title`}>在页面中引入组件</div>
                <CodeView>
                  {this.props.importCode}
                </CodeView>
              </div>
            )

          }
          {
            !this.props.interfaceCode ? "" : (
              <div className={`${this.classNamePrefix}-interface`}>
                <div className={`${this.classNamePrefix}-interface-title`}>再引入标签，标签属性解析</div>
                <CodeView>
                  {this.props.interfaceCode}
                </CodeView>
              </div>
            )
          }
        </div>
        <div className={`${this.classNamePrefix}-body`}>
          {
            this.props.children
          }
        </div>
      </div>
    );
  }
}