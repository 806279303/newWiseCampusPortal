import "code-prettify";
import "code-prettify/src/prettify.css";

import parserTypeScript from 'prettier/parser-typescript';
import prettier from 'prettier/standalone';
import parserHtml from "prettier/parser-html";
import {Component, createRef, CSSProperties, RefObject} from "react";
import "./index.scss";
import classNames from "classnames";

interface CodeViewProps {
  children: string
  className?: string
  style?: CSSProperties
  language?: "ts" | "html"
  defaultShow?: boolean
  canHidden?: boolean
}


interface CodeViewState {
  isShowCode: boolean
}

export class CodeView extends Component<CodeViewProps, CodeViewState> {

  private readonly codeViewAreaRef: RefObject<HTMLDivElement>
  private areaMaxHeight: string

  static defaultProps: CodeViewProps = {
    children: "",
    language: "ts",
    canHidden: false
  }

  constructor(props: CodeViewProps | Readonly<CodeViewProps>) {
    super(props);
    this.state = {
      isShowCode: true
    }
    this.codeViewAreaRef = createRef<HTMLDivElement>();
    this.areaMaxHeight = "fit-content"
  }

  componentDidUpdate() {
    (window as any).PR.prettyPrint();
  }

  componentDidMount() {
    (window as any).PR.prettyPrint();
    this.areaMaxHeight = this.codeViewAreaRef.current?.clientHeight + "px" || "fit-content"
    this.setState({
      isShowCode: !this.props.canHidden || !!this.props.defaultShow
    })
  }

  render() {
    let result = "";
    try {
      result = prettier.format(this.props.children, {
        parser: "typescript",
        plugins: [parserTypeScript, parserHtml]
      });
    } catch (e) {
      console.error("代码格式有误，无法解析")
      result = this.props.children
    }

    let className = classNames(
      "lg-code-view-root",
      {
        [`${this.props.className}`]: !!this.props.className,
        "lg-code-view-can-hidden": this.props.canHidden
      }
    )

    return (
      <div className={className} style={this.props.style}>
        <div ref={this.codeViewAreaRef} className="lg-code-view-area"
             style={{height: this.state.isShowCode ? this.areaMaxHeight : "0"}}>
          <pre className={`prettyprint lang-js`}>
              <div className="code_block">
                <code className="code_text">{result}</code>
              </div>
          </pre>
        </div>
        {
          !this.props.canHidden ? "" :
            <div onClick={() => this.setState({isShowCode: !this.state.isShowCode})}
                 className="lg-code-view-show-button">
              <div className={`lg-code-view-show-text ${this.state.isShowCode ? "on-show" : ""}`}>
                {!this.state.isShowCode ? "显示" : "隐藏"}代码
              </div>
            </div>
        }
      </div>
    )
  }
}
