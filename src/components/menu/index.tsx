import "./index.scss"
import { BaseProps } from '../../type/BaseProps';

import { Menu } from "element-react";
import { BaseComponent } from "../../type/BaseComponent";


export interface IMenu {
    type?: "A" | "B"
}

type menuIndex = string // 这里代码里面标注的 flowtype 是 number
interface MenuItemProps {
    index: menuIndex
    disabled?: boolean
}
interface SubMenuProps {
    index: menuIndex
    title?: React.ReactElement<any> | string
}

interface MenuItemGroupProps {
    title: string
}
export class LgItemClass extends BaseComponent<MenuItemProps, {}>{
    render() {
        return (
            <Menu.Item {...this.props}>
                {
                    this.props.children
                }
            </Menu.Item>
        )
    }
    getClassNamePrefix(): string {
      return "LgItemClass";
    }
}
export class LgSubMenuClass extends BaseComponent<SubMenuProps, {}>{
    render() {
        return (
            <Menu.SubMenu {...this.props}>
                {
                    this.props.children
                }
            </Menu.SubMenu>
        )
    }

    getClassNamePrefix(): string {
      return "LgSubMenuClass";
    }
}
export class LgItemGroupClass extends BaseComponent<MenuItemGroupProps, {}>{
    render() {
        return (
            <Menu.ItemGroup {...this.props}>
                {
                    this.props.children
                }
            </Menu.ItemGroup>
        )
    }

    getClassNamePrefix(): string {
      return "LgItemGroupClass";
    }
}


interface MenuProps{
    defaultActive?: menuIndex
    defaultOpeneds?: menuIndex[]
    uniqueOpened?: boolean
    menuTrigger?: string
    theme?: 'light' | 'dark'
    onSelect?(index?: menuIndex, indexPath?: menuIndex[]): void
    onOpen?(index?: menuIndex, indexPath?: menuIndex[]): void
    onClose?(index?: menuIndex, indexPath?: menuIndex[]): void
}
export class LgMenu extends BaseComponent<IMenu & MenuProps> {

    static readonly LgItem = LgItemClass
    static readonly LgSubMenu = LgSubMenuClass
    static readonly LgItemGroup = LgItemGroupClass

    static defaultProps: IMenu = {
        type: "A"
    }

    constructor(props: (IMenu & BaseProps) | Readonly<IMenu & BaseProps>, context: any) {
        super(props, context)
    }

    onSelect() {
    }
    onOpen() {

    }
    onClose() {

    }

    componentDidMount(): void {
        super.componentDidMount()
    }
    render() {
        const { className = '', style, type } = this.props
        const mode = type === "A" ? "horizontal" : "vertical"
        return (
            <div className={`lg_menu_root ${className}`} style={style}>
                <Menu {...this.props} mode={mode}>
                    {
                        this.props.children
                    }
                </Menu>
            </div>
        )
    }

    getClassNamePrefix(): string {
      return "LgMenu";
    }
}