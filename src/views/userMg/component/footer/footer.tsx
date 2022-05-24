import "./footer.scss"
import {BaseComponent} from "../../../../type/BaseComponent";
import Pagination from "@/components/pagination";
import {BaseProps} from "../../../../type/BaseProps";

export interface UserMgFooterProps {
  currentPage: number
  totalPage: number
  fetchWiseBoardListAction: (page: number) => void
}

export class UserMgFooter extends BaseComponent<UserMgFooterProps> {

  static defaultProps: Partial<UserMgFooterProps> = {
    currentPage: 0,
    totalPage: 0
  }

  constructor(props: UserMgFooterProps & BaseProps) {
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
    return "UserMgFooter";
  }
}