import {BaseComponent} from "../../type/BaseComponent";
import classNames from "classnames";
import {BaseProps} from "../../type/BaseProps";


export interface LgTagProps{
  type?: "A" | "B" | "C" | "D"
}

export const LgTag = (props: BaseProps & LgTagProps) => {
  return(
    <LgTagA {...props} />
  )
}


export class LgTagAProps{

}

export class LgTagA extends BaseComponent<LgTagAProps>{

  private readonly classNamePrefix: string

  static defaultProps: LgTagAProps = {
  }

  constructor(props: LgTagProps & BaseProps) {
    super(props);
    this.classNamePrefix = "lg-tag-a-"
  }

  render() {

    let tagClassNames = classNames(
      `${this.classNamePrefix}-root`,
    )

    return(
      <span className={tagClassNames}>
        {
          this.props.children
        }
      </span>
    )
  }
}