import {BaseComponent} from "../../../../type/BaseComponent";
import {HistogramCard, HistogramCardItem} from "@/views/home/component/HistogramCard";


export interface ExceptionStatisticalItem{
  schoolName: string
  num: number
}

export interface ExceptionStatisticalProps {
  items: ExceptionStatisticalItem[]
}

export class ExceptionStatistical extends BaseComponent<ExceptionStatisticalProps> {


  render() {
    const items: HistogramCardItem[] = this.props.items.map(item => ({
      name: item.schoolName,
      num: item.num
    }))
    return (
      <HistogramCard fontColor='#1da4fe' color={{start: '#1da4fe', end: '#7ecbff'}} className={this.rootClass()} title="学校异常统计" items={items}/>
    )
  }

  getClassNamePrefix(): string {
    return "ExceptionStatistical";
  }
}