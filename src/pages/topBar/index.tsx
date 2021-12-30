import TopBar from "@/components/topBar";
export default () => {
    return (
        <div>
            <div className="left">
                <TypeAItem className="lg-skin-s1" />
                <TypeAItem className="lg-skin-s2" />
                <TypeAItem className="lg-skin-s3" />
                <TypeAItem className="lg-skin-s4" />
                <TypeAItem className="lg-skin-s5" />
                <TypeAItem className="lg-skin-k1" />
                <TypeAItem className="lg-skin-k2" />
            </div>
        </div>
    )
}

function TypeAItem(props: {className: string}) {
    
    return (
        <div className={props.className}>
            {/* <TopBar  /> */}
        </div>
    )
}