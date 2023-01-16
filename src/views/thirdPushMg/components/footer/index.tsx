import {BaseComponent, LgPaginationA} from "lancoo-web-ui";
import {createClassName} from "../../../../utils/classNameUtils";

import './index.scss'

const {classNames, rootClassNames} = createClassName('third-push-mg-footer')


class Index extends BaseComponent {
    constructor(props: any) {
        super(props);
        this.onChangePage = this.onChangePage.bind(this)
    }

    onChangePage(page:any){
        console.log(page)
    }

    render() {
        return (
            <div className={classNames('wrapper')}>
                <LgPaginationA
                    total={60}
                    size="normal"
                    currentPage={1}
                    onChangePage={this.onChangePage}
                />
            </div>
        );
    }
}

export default Index;