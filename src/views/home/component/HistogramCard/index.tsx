import {BaseComponent} from "../../../../type/BaseComponent";
import {LgCharts} from "@/components/charts";
import {DataCard} from "@/views/home/component/DataCard";
import {EChartsOption} from "echarts-for-react/lib/types";
import {graphic} from "echarts";
import {ReactNode} from "react";
import {LgLoading} from "@/components/loading";
import {FillFlexContainer} from "@/components/fillFlexContainer";
import {LgEmpty} from "@/components/empty";

export interface HistogramCardItem {
  name: string
  num: number
}

export interface HistogramCardProps {
  title: string
  items: HistogramCardItem[]
  color: {
    start: string,
    end: string
  },
  fontColor: string
  action?: ReactNode
  loading?: boolean
}

export class HistogramCard extends BaseComponent<HistogramCardProps> {


  render() {


    return (
      <DataCard title={this.props.title} className={this.rootClass()} action={this.props.action}>

        {
          this.props.loading ?
            this.renderLoading() :
            this.renderCharts()
        }

      </DataCard>
    )
  }

  renderLoading() {
    return (
      <FillFlexContainer>
        <LgLoading/>
      </FillFlexContainer>
    )
  }

  renderCharts() {
    if (this.props.items.length <= 0) {
      return (
        <FillFlexContainer>
          <LgEmpty/>
        </FillFlexContainer>
      )
    }

    const options: EChartsOption = {
      xAxis: {
        type: "category",
        data: this.props.items.map(item => item.name),
      },
      yAxis: {
        type: "value",
      },
      label: {
        show: true,
        position: 'top',
        color: this.props.fontColor,
        fontSize: 16
      },
      series: [
        {
          data: this.props.items.map(item => item.num),
          itemStyle: {
            barBorderRadius: [2, 2, 0, 0],
            color: new graphic.LinearGradient(
              //前四个参数用于配置渐变色的起止位置，这四个参数依次对应 右下左上 四个方位。也就是从右边开始顺时针方向。
              //通过修改前4个参数，可以实现不同的渐变方向
              /*第五个参数则是一个数组，用于配置颜色的渐变过程。
                每项为一个对象，包含offset和color两个参数
              */
              0, 0, 0, 1, [{//代表渐变色从正上方开始
                offset: 0, //offset范围是0~1，用于表示位置，0是指0%处的颜色
                color: this.props.color.start
              }, //柱图渐变色
                {
                  offset: 1, //指100%处的颜色
                  color: this.props.color.end
                }
              ]
            ),
          },
          type: "bar",
        },
      ],
    };
    return (
      <LgCharts option={options} notMerge={true} lazyUpdate={true} style={{height: "220px"}}/>
    )
  }

  getClassNamePrefix(): string {
    return "HistogramCard";
  }
}