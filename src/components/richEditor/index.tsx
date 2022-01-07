import "./index.scss"
import {BaseProps} from "../../type/BaseProps";
import ReactWEditor from 'wangeditor-for-react';
import {ReactWEProps} from "wangeditor-for-react/src/type";

if(!Object.values){
 Object.values = function (obj: { [x: string]: any; }){
   return Object.keys(obj).map(e => obj[e])
 }
}

export const LgRichEditor = (props: ReactWEProps & BaseProps) => {
  return(
    <div className={props.className} style={props.style}>
      <ReactWEditor {...props} />
    </div>
  )
}