import './index.scss';


interface Props {
  className?: string,
  style?: object,
  type: 'A' | 'B' | 'C' | 'D',
  stepList: any[],
  stepIndex: number,//当前步骤
  colorType?: string
  onClick?: () => void,
}

const LgStep = (props: Props): any => {
  switch (props.type) {
    case "A":
      return <StepA {...props} />
    case "B":
      return <StepB {...props} />
    case "C":
      return <StepC {...props} />
    case "D":
      return <StepD {...props} />
  }

  return <StepA {...props} />
}

function StepA(props: Props) {
  return (
    <div className={`step_item ${props.className || ""}`} style={props.style || {}}>
      {
        props.stepList.map((item, index) => {
          let stepLiBg: string = props.colorType ? props.colorType : "lg-skin-s1"
          let stepLiBg1: any = ""
          let stepNameColor: any = ""
          let stepAllowA: any = ""
          if (index < props.stepIndex - 1) {
            stepLiBg1 ="A_before"
            stepAllowA="A_allow_before"
            stepNameColor = "A_before_Color"
          } else if (index === props.stepIndex - 1) {
            stepLiBg1 = "A_present";
            stepNameColor = "stepNameColor"
          }
          return (
            <div className={stepLiBg} key={"A" + index}>
              <div key={index} className={`step_li left`}>
                <div className={'step_li_bg ' + stepLiBg1}>
                  {index + 1}
                  <div className='step_complete' style={{ display: index < props.stepIndex - 1 ? "" : "none" }} />
                </div>
                <div className={`A_step_name ${stepNameColor}`}>{item}</div>
              </div>
              <div className={`step_allow left ${stepAllowA}`} style={{ display: index === props.stepList.length - 1 ? "none" : "" }} />
            </div>
          )
        })
      }
    </div>
  )
}

function StepB(props: Props) {
  let colorType = props.colorType ? props.colorType : "lg-skin-s1"
  return (
    <div className={`step_itemB clear ${colorType} ${props.className}`} style={props.style || {}}>
      {
        props.stepList.map((item, index) => {
          let stepLiBg: string = "";
          let stepBline: string = "";
          let stepBname: string = "";
          if (index < props.stepIndex - 1) {
            stepLiBg = "at_before";
          } else if (index === props.stepIndex - 1) {
            stepLiBg = "at_present";
            stepBline = "afterB_line";
            stepBname = "presentB_name"
          } else {
            stepLiBg = "at_after";
            stepBline = "afterB_line";
            stepBname = "afterB_name"
          }
          return (
            <div key={"B" + index} className='stepB_li left'>
              <div className='stepB_li_bg'>
                <div className={`stepB_poit ${stepLiBg}`} />
                <div className={`stepB_line ${stepBline}`}
                  style={{ display: index === props.stepList.length - 1 ? "none" : "" }} />
              </div>
              <div className={`stepB_name clear ${stepBname}`}>{item}</div>
            </div>
          )
        })
      }
    </div>
  )
}

function StepC(props: Props) {
  let colorType = props.colorType ? props.colorType : "lg-skin-s1"
  return (
    <div className={`step_itemC clear ${colorType} ${props.className}`} style={props.style || {}}>
      {
        props.stepList.map((item, index) => {
          let stepLiBg: any
          if (index == 0) {
            stepLiBg = props.stepIndex == 1 ? "stepC_bg_stepIndex1" : "stepC_bg_first"

          } else if (index == props.stepList.length - 1) {
            stepLiBg = props.stepIndex == props.stepList.length ? "stepC_bg_last_cur" : "stepC_bg_last"

          } else {
            if (index < props.stepIndex - 1) {
              stepLiBg = "stepC_bg_before"
            } else if (index == props.stepIndex - 1) {
              stepLiBg = "stepC_bg_precent"
            } else {
              stepLiBg = "stepC_bg_after"
            }
          }

          return (
            <div key={"c"+index} className={`stepC_li left ${stepLiBg}`} style={{
              color: index < props.stepIndex ? "#fff" : "",
              marginLeft: index > 0 ? "-10px" : "",
              zIndex: props.stepList.length - index
            }}>
              <div className='stepC_left left' />
              <div className='stepC_center left' />
              <div className='stepC_right left' />
              <div className='stepC_Name'>{item}</div>
            </div>
          )
        })
      }
    </div>
  )
}

function StepD(props: Props) {
  const addLink = () => {
    props.onClick && props.onClick()
  }
  return (
    <div className={`step_itemD clear ${props.className}`} style={props.style || {}}>
      <div className='stepD_bg_line' style={{ height: (props.stepList.length + 1) * 54 - 27 }} />
      {
        props.stepList.map((item, index) => {
          let stepLeft = ""
          if (index < props.stepIndex - 1) {
            stepLeft = "stepD_left_before"
          } else if (index == props.stepIndex - 1) {
            stepLeft = "stepD_left_precent"
          }
          return (
            <div data-index={index} key={"stepD" + index} className='stepD_li'>
              <div className={`stepD_left ${stepLeft}`} />
              <div className='stepD_right oneline' title={item} style={{
                color: index == props.stepIndex - 1 ? "#ff6600" : "",
                fontWeight: index == props.stepIndex - 1 ? "bold" : ""
              }}>{item}</div>

            </div>
          )
        })
      }
      <div className='stepD_li'>
        <div className='stepD_left' />
        <div className='stepD_right_add' onClick={addLink}>
          <span className='add_icon'>+</span>
          <span>新建环节</span>
        </div>
      </div>
    </div>
  )
}

export default LgStep;
