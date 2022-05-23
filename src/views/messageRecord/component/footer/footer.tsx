import "./footer.scss"
import {BaseComponent} from "../../../../type/BaseComponent";
import Pagination from "@/components/pagination";
import {BaseProps} from "../../../../type/BaseProps";

export interface MessageRecordFooterProps {
  currentPage: number
  totalPage: number
  fetchWiseBoardListAction: (page: number) => void
}

export class MessageRecordFooter extends BaseComponent<MessageRecordFooterProps> {

  static defaultProps: Partial<MessageRecordFooterProps> = {
    currentPage: 0,
    totalPage: 0
  }

  constructor(props: MessageRecordFooterProps & BaseProps) {
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
    return "MessageRecordFooter";
  }
}