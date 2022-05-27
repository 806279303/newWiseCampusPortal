export default interface TopBarProps {
    logoStyle: object,
    logoName?: string,
    version?: string,
    homeUrl: string,
    helpUrl: string,
    onNotice: () => void,
    hasNotice?: boolean,
    userIconUrl: string,
    userName: string,
    userTypeIcon: string,
    userType?: string,
    onQuitPage: () => void,
    otherBtn?: {
        iconUrl: string,
        btnName: string,
        onBtn: () => void,
        hasNode?: boolean
    }[],
    className?: string,
    style?: object,
    onRef?: (ref: any) => void
}