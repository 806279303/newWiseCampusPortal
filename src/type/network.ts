import axios from 'axios';

const BaseUrl = process.env.NODE_ENV === "development" ? "http://192.168.129.247:15666/car/" : "/";//根据各自项目的服务器地址填写

axios.defaults.baseURL = BaseUrl;
// export const 


