export const stopProps = (e: any) => {
    e = e || window.event;
    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
    e.nativeEvent.stopImmediatePropagation();
}