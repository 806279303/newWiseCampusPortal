import {BaseComponent} from "../../../../type/BaseComponent";
import {HistogramCard, HistogramCardItem} from "@/views/home/component/HistogramCard";

export interface VisitsStatisticalItem {
  schoolName: string
  num: number
}

export interface VisitsStatisticalProps {
  items: VisitsStatisticalItem[]
}

export class VisitsStatistical extends BaseComponent<VisitsStatisticalProps> {

  render() {
    const items: HistogramCardItem[] = this.props.items.map(item => ({
      name: item.schoolName,
      num: item.num
    }))
    return (
      <HistogramCard className={this.rootClass()}
                     title="学校访问量"
                     color={{start: "#9bce69", end: "#7bb73b"}}
                     fontColor="#7bb73b"
                     items={items}
      />
    )
  }

  getClassNamePrefix(): string {
    return "VisitsStatistical";
  }
}