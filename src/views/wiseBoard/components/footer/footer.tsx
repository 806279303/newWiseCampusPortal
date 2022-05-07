import "./footer.scss"
import {BaseComponent} from "../../../../type/BaseComponent";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import Pagination from "@/components/pagination";
import { BaseProps } from "../../../../type/BaseProps";
import {FunctionProperties, NonFunctionProperties} from "../../../../type/util";
import {RootState} from "../../../../redux/rootReducer";
import {fetchWiseBoardListAction} from "../../../../redux/wiseBoard/action";
import {bindActionCreators} from "redux";

export interface WiseBoardFooterProps {
  currentPage: number
  totalPage: number
  fetchWiseBoardListAction: (page: number) => void
}

export class WiseBoardFooter extends BaseComponent<WiseBoardFooterProps> {

  static defaultProps: Partial<WiseBoardFooterProps> = {
    currentPage: 0,
    totalPage: 0
  }

  constructor(props: WiseBoardFooterProps & BaseProps) {
    super(props);
    this.onPageChange = this.onPageChange.bind(this)
  }

  onPageChange(index: number){
    this.props.fetchWiseBoardListAction(index)
  }

  render() {
    return (
      <div className={this.rootClass()}>
        <Pagination totalPage={this.props.totalPage} currentPage={this.props.currentPage} onClick={this.onPageChange} />
      </div>
    )
  }

  getClassNamePrefix(): string {
    return "WiseBoardFooter";
  }
}

const mapStateToProps: MapStateToProps<NonFunctionProperties<WiseBoardFooterProps>, any, RootState> = (state) => {
  return {
    currentPage: state.wiseBoardReducer.currentPage,
    totalPage: state.wiseBoardReducer.totalPage
  }
}

const mapDispatchToProps: MapDispatchToProps<FunctionProperties<WiseBoardFooterProps>, any> = (dispatch) => {
  return bindActionCreators({fetchWiseBoardListAction}, dispatch)
}

export const WiseBoardFooterComponent = connect(mapStateToProps, mapDispatchToProps)(WiseBoardFooter)