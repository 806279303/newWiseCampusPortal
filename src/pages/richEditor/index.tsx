import {Component} from "react";
import {LgRichEditor} from "@/components/richEditor";

export default class Index extends Component{
    render() {
        return(
            <LgRichEditor config={{showLinkImg: false, showLinkVideo: false, uploadVideoServer: "http://localhost:3000/api", excludeMenus: ['video']}} />
        )
    }
}