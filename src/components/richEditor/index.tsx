import "./index.scss"
import {BaseProps} from "../../type/BaseProps";
import ReactWEditor from 'wangeditor-for-react';
import {ReactWEProps} from "wangeditor-for-react/lib/type";

export const LgRichEditor = (props: ReactWEProps & BaseProps) => {
  return(
    <div className={props.className} style={props.style}>
      <ReactWEditor {...props} />
    </div>
  )
}