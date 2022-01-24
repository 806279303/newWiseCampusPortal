import {Component} from "react";
import {LgDatePicker} from "@/components/datePicker";
import "./index.scss"
import {allSkinClassName} from "@/components/index";
import {BaseComponent} from "../../type/BaseComponent";
import {CodeView} from "@/components/CodeView";


type DateType = Date | string | null

export interface DatePickerState {
  demonstrationValue: DateType
  demonstrationValue2: DateType[]
  startTime: DateType
  endTime: DateType
}

export default class DatePicker extends Component<{}, DatePickerState> {

  private currentSkinIndex: number;
  private demonstrationPicker: any;
  private demonstrationPicker2: any;

  constructor(props: {}) {
    super(props);
    const end = new Date();
    const start = new Date();
    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
    this.state = {
      demonstrationValue: new Date(),
      demonstrationValue2: [start, end],
      startTime: new Date(2016, 9, 10, 8, 30),
      endTime: new Date(2016, 9, 10, 9, 30)
    }
    this.changeSkin = this.changeSkin.bind(this)
    this.currentSkinIndex = 0
    document.body.className = allSkinClassName[this.currentSkinIndex]
  }

  changeSkin() {
    this.currentSkinIndex = (this.currentSkinIndex + 1) % allSkinClassName.length
    document.body.className = allSkinClassName[this.currentSkinIndex]
  }

  handleStartUpdate(startTime: any) {
    console.debug('time-select startDate update: ', startTime)
    this.setState({startTime})
  }

  handleEndUpdate(endTime: any){
    console.debug('time-select endDate update: ', endTime)
    this.setState({endTime})
  }


  render() {
    const end = new Date();
    const start = new Date();
    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
    return (
      <div className="lg-date-picker-demo">
        <div>在页面文件中引入组件</div>
        <CodeView className="code-size">
          {`
              import {LgDatePicker} from "@/components/datePicker";
          `}
        </CodeView>


        <div>标签属性详解</div>
        <CodeView className="code-size">
          {`
            /* dateType可以是Date或者字符串 */
            type dateType = Date | string | null;
            interface LgDatePickerProps{
               type?: "A" | "B" | "C" | "D" // 款式选择，"A"、"B"、 "C"、"D",可空，默认为A
               value?: dateType | dateType[] //当前值， dateType[]仅限B款时，开始日期是第一个，结束是第二个
               align?: 'left' | 'center' | 'right', //对齐方式， 可空，默认left
               format?: string //时间格式化，年 yyyy，月 MM，日 dd，小时 HH，分 mm，秒 ss，默认值yyyy-MM-dd
               isShowTrigger?: boolean // 是否显示图标，可空，默认true
               isReadOnly?: boolean // 是否是只读，可空，默认false
               isDisabled?: boolean // 是否是禁用，可空，默认false
               placeholder?: string // 占位内容，可空
               onFocus?(self?: any): void // focus 事件触发
               onBlur?(self?: any): void // blur 时间触发
               onChange?(value?: Date): void // 值改变时触发
               
               /*A、B款专用*/
               showWeekNumber?: boolean //是否展示周数 ，可空，默认false
               shortcuts?: Shortcut[] // 快捷选项
               selectionMode?: 'year' | 'month' | 'week' | 'day' // 日期类型， 可空，默认"day" 
               disabledDate?(date?: Date, type?: SelectionMode): boolean //是否进入日期可空
               firstDayOfWeek?: number // 周起始日 0到6 可空，默认0
               
               /* C款专用 */
               start?: string //开始时间，默认值09:00
               end?: string //结束时间，默认18:00
               step?: string //间隔时间
               minTime?: dateType //最小时间
               maxTime?: dateType // 最大时间
            }
            
            interface Shortcut{
              text: string
              onClick(): void
            }
          `}
        </CodeView>

        <div>A款选择日样例</div>
        <CodeView className="code-size">
          {`
            <>
              <LgDatePicker onChange={e => console.log(e?.getTime())}/>
              <LgDatePicker onChange={e => console.log(e)} onRef={e => this.demonstrationPicker = e} align={"right"}
                            value={this.state.demonstrationValue}
                            shortcuts={[
                              {
                                text: '今天',
                                onClick: () => {
                                  this.demonstrationPicker.togglePickerVisible()
                                  this.setState({demonstrationValue: new Date()})
                                }
                              }, {
                                text: '昨天',
                                onClick: () => {
                                  const date = new Date();
                                  date.setTime(date.getTime() - 3600 * 1000 * 24);
                                  this.demonstrationPicker.togglePickerVisible()
                                  this.setState({demonstrationValue: date})
                                }
                              }, {
                                text: '一周前',
                                onClick: () => {
                                  const date = new Date();
                                  date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                                  this.demonstrationPicker.togglePickerVisible()
                                  this.setState({demonstrationValue: date})
                                }
                              }
                            ]}/>
            </>
          `}
        </CodeView>
        <DatePickerDemoFrame className="selected-day" title="选择日" subtitle="以「日」为基本单位，基础的日期选择控件">
          <div className="left">
            <div className="component-title">默认</div>
            <LgDatePicker onChange={e => console.log(e?.getTime())}/>
          </div>
          <div className="right">
            <div className="component-title">带快捷选项</div>
            <LgDatePicker onChange={e => console.log(e)} onRef={e => this.demonstrationPicker = e} align={"right"}
                          value={this.state.demonstrationValue}
                          shortcuts={[
                            {
                              text: '今天',
                              onClick: () => {
                                this.demonstrationPicker.togglePickerVisible()
                                this.setState({demonstrationValue: new Date()})
                              }
                            }, {
                              text: '昨天',
                              onClick: () => {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24);
                                this.demonstrationPicker.togglePickerVisible()
                                this.setState({demonstrationValue: date})
                              }
                            }, {
                              text: '一周前',
                              onClick: () => {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                                this.demonstrationPicker.togglePickerVisible()
                                this.setState({demonstrationValue: date})
                              }
                            }
                          ]}/>
          </div>
        </DatePickerDemoFrame>


        <div style={{paddingTop: "10px"}}>B款选择日期范围样例</div>
        <CodeView className="code-size">
          {`
            <>
              <LgDatePicker type="B" value={[start, end]} onChange={e => console.log(e)}/>
              <LgDatePicker type="B" onChange={e => console.log(e)} onRef={e => this.demonstrationPicker2 = e}
                          align={"right"} value={this.state.demonstrationValue2}
                          shortcuts={[{
                            text: '最近一周',
                            onClick: () => {
                              const end = new Date();
                              const start = new Date();
                              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);

                              this.setState({demonstrationValue2: [start, end]})
                              this.demonstrationPicker2.togglePickerVisible()
                            }
                          }, {
                            text: '最近一个月',
                            onClick: () => {
                              const end = new Date();
                              const start = new Date();
                              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);

                              this.setState({demonstrationValue2: [start, end]})
                              this.demonstrationPicker2.togglePickerVisible()
                            }
                          }, {
                            text: '最近三个月',
                            onClick: () => {
                              const end = new Date();
                              const start = new Date();
                              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                              this.setState({demonstrationValue2: [start, end]})
                              this.demonstrationPicker2.togglePickerVisible()
                            }
                          }]}
            />
            </>
          `}
        </CodeView>

        <DatePickerDemoFrame className="selected-day" title="选择日期范围" subtitle="可在一个选择器中便捷地选择一个时间范围">
          <div className="left">
            <div className="component-title">默认</div>
            <LgDatePicker type="B" value={[start, end]} onChange={e => console.log(e)}/>
          </div>
          <div className="right">
            <div className="component-title">带快捷选项</div>
            <LgDatePicker type="B" onChange={e => console.log(e)} onRef={e => this.demonstrationPicker2 = e}
                          align={"right"} value={this.state.demonstrationValue2}
                          shortcuts={[{
                            text: '最近一周',
                            onClick: () => {
                              const end = new Date();
                              const start = new Date();
                              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);

                              this.setState({demonstrationValue2: [start, end]})
                              this.demonstrationPicker2.togglePickerVisible()
                            }
                          }, {
                            text: '最近一个月',
                            onClick: () => {
                              const end = new Date();
                              const start = new Date();
                              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);

                              this.setState({demonstrationValue2: [start, end]})
                              this.demonstrationPicker2.togglePickerVisible()
                            }
                          }, {
                            text: '最近三个月',
                            onClick: () => {
                              const end = new Date();
                              const start = new Date();
                              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                              this.setState({demonstrationValue2: [start, end]})
                              this.demonstrationPicker2.togglePickerVisible()
                            }
                          }]}
            />
          </div>
        </DatePickerDemoFrame>

        <div style={{paddingTop: "10px"}}>C款固定时间点样例</div>
        <CodeView className="code-size">
          {`
            <LgDatePicker type="C" start="08:30" step="00:15" end="18:30" maxTime="12:30"
                          value={new Date(2016, 9, 10, 8, 30)} onChange={e => console.log(e)}/>
          `}
        </CodeView>

        <DatePickerDemoFrame className="selected-time" title="固定时间点" subtitle="提供几个固定的时间点供用户选择">
          <div className="left">
            <LgDatePicker type="C" start="08:30" step="00:15" end="18:30" maxTime="12:30"
                          value={new Date(2016, 9, 10, 8, 30)} onChange={e => console.log(e)}/>
          </div>
        </DatePickerDemoFrame>

        <div style={{paddingTop: "10px"}}>D款固定时间范围样例</div>
        <CodeView className="code-size">
          {`
              function handleStartUpdate(startTime: any) {
              console.debug('time-select startDate update: ', startTime)
              this.setState({startTime})
            }
          
            function handleEndUpdate(endTime: any){
              console.debug('time-select endDate update: ', endTime)
              this.setState({endTime})
            }
            <>
            <LgDatePicker type="C" start="08:30" step="00:15" end="18:30" maxTime="12:30"
                          value={this.state.startTime} onChange={this.handleStartUpdate.bind(this)}/>
            <LgDatePicker type="C" start="08:30" step="00:15" end="18:30" maxTime="12:30"
                          value={this.state.endTime} onChange={this.handleEndUpdate.bind(this)} minTime={this.state.startTime}/>
            </>
          `}
        </CodeView>

        <DatePickerDemoFrame className="selected-range-time" title="固定时间范围" subtitle="若先选择开始时间，则结束时间内备选项的状态会随之改变">
          <div className="left">
            <LgDatePicker type="C" start="08:30" step="00:15" end="18:30" maxTime="12:30"
                          value={this.state.startTime} onChange={this.handleStartUpdate.bind(this)}/>
            <LgDatePicker type="C" start="08:30" step="00:15" end="18:30" maxTime="12:30"
                          value={this.state.endTime} onChange={this.handleEndUpdate.bind(this)} minTime={this.state.startTime}/>
          </div>
        </DatePickerDemoFrame>

        <div style={{height: "20px"}} />
      </div>
    )
  }
}


interface DatePickerDemoFrameProps {
  title: string
  subtitle: string
}

class DatePickerDemoFrame extends BaseComponent<DatePickerDemoFrameProps> {
  render() {
    return (
      <div className={`lg-date-picker-demo-frame ${this.props.className || ""}`}>
        <div className="title">{this.props.title}</div>
        <div className="subtitle">{this.props.subtitle}</div>
        <div className="component-container">
          {
            this.props.children
          }
        </div>
      </div>
    )
  }
}
