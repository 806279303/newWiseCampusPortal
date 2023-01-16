import {lgAlert} from "lancoo-web-ui";

export const successTip = (text:string) => lgAlert.show({
    content: text,
    tipType: 'success',
});

export const errorTip = (text:string) => lgAlert.show({
    content: text,
    tipType: 'error',
});

export const warningTip = (text:string) => lgAlert.show({
    content: text,
    tipType: 'warning',
});

export async function confirmDelPop(props: any, callback: any){
    let alert = lgAlert.show({
        duration: 0,
        content: '删除提示',
        description: "是否确认删除",
        tipType: 'fail',
        tipSize: 'big',
        tipMouldType: 'A',
        confirmText: "确认",
        closeText: "取消",
        position:{
            xAxis:'center',
            yAxis:'center'
        },
        async onConfirm(){
            await callback()
            lgAlert.close(alert.index)
        }
    });
}