import "code-prettify";
import "code-prettify/src/prettify.css";

import parserTypeScript from 'prettier/parser-typescript';
import prettier from 'prettier/standalone';
import parserHtml from "prettier/parser-html";
import {Component, CSSProperties} from "react";
import "./index.scss";

interface CodeViewProps {
  children: string
  className?: string
  style?: CSSProperties
  language?: "ts" | "html"
}

export class CodeView extends Component<CodeViewProps, {}> {

  static defaultProps: CodeViewProps = {
    children: "",
    language: "ts"
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{ selectedIndex: number }>, snapshot?: any) {
    (window as any).PR.prettyPrint();
  }

  componentDidMount() {
    (window as any).PR.prettyPrint();
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
    return (
      <pre className={`lg-code-view prettyprint lang-js ${this.props.className || ""}`} style={this.props.style}>
          <div className="code_block">
            <code className="code_text">{result}</code>
          </div>
      </pre>
    )
  }
}
