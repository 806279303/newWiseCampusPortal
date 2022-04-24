import {lgAlert} from "@/components/alert";

 class Pops {
    showLoading(text?:string) {
        lgAlert.show({content: text||'请稍后', tipType: 'loading', position: {xAxis: 'center', yAxis: 'center'}, duration: 0});
    }

    hideLoading(){
        lgAlert.show({ tipType: 'closeAll' })
    }

    showSuccess(text:string){
        lgAlert.show({tipType: 'success', content: text, position: {xAxis: 'center', yAxis: 'center'}})
    }

    showError(text:string){
        lgAlert.show({tipType: 'error', content: text, position: {xAxis: 'center', yAxis: 'center'}})
    }
}
export default new Pops()