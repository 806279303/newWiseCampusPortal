import "./footer.scss"
import {BaseComponent} from "../../../../type/BaseComponent";
import Pagination from "@/components/pagination";
import {BaseProps} from "../../../../type/BaseProps";

export interface LogMgFooterProps {
  currentPage: number
  totalPage: number
  fetchWiseBoardListAction: (page: number) => void
}

export class LogMgFooter extends BaseComponent<LogMgFooterProps> {

  static defaultProps: Partial<LogMgFooterProps> = {
    currentPage: 0,
    totalPage: 0
  }

  constructor(props: LogMgFooterProps & BaseProps) {
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
    return "LogMgFooter";
  }
}