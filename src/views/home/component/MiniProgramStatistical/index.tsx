import {BaseComponent} from "../../../../type/BaseComponent";
import {HistogramCard, HistogramCardItem} from "@/views/home/component/HistogramCard";

export interface MiniProgramStatisticalItem {
  miniProgramName: string
  num: number
}

export interface MiniProgramStatisticalProps{
  items: MiniProgramStatisticalItem[]
}

export class MiniProgramStatistical extends BaseComponent<MiniProgramStatisticalProps>{

  render() {
    const items: HistogramCardItem[] = this.props.items.map(item => ({
      name: item.miniProgramName,
      num: item.num
    }))
    return(
      <HistogramCard className={this.rootClass()}
                     title="使用最多的小程序"
                     color={{start: "#ffd183", end: "#ff9500"}}
                     fontColor="#ff9602"
                     items={items}
      />
    )
  }

  getClassNamePrefix(): string {
    return "MiniProgramStatistical";
  }
}