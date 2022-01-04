import "./index.scss"
import {Component} from "react";
import E from 'wangeditor'

export interface LgRichEditorProps {

}


export class LgRichEditor extends Component<LgRichEditorProps, {}> {

  constructor(props: LgRichEditorProps | Readonly<LgRichEditorProps>) {
    super(props);
  }

  componentDidMount() {
    const editor = new E("#div1");
    editor.config.uploadImgServer = '/upload-img'
    editor.config.showLinkImg = false
    editor.config.uploadVideoServer = '/upload-img'
    editor.config.showLinkVideo = false
    editor.create();
  }

  render() {
    return (
      <div id="div1"/>
    )
  }
}