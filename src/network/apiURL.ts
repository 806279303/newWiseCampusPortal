//对外提供的服务地址
export const publicIp =
    // process.env.NODE_ENV === 'development' ? 'http://192.168.129.203:7779/' : ''
    process.env.NODE_ENV === 'development' ? 'https://campus.lancooedu.com/' : 'https://campus.lancooedu.com/'
//对外提供获取图片的地址
export const logoImgIp =
    process.env.NODE_ENV === 'development' ? '' : ''
// 登录路由
export const LOGIN = ''
//上传Logo地址
export const uploadLogoUrl = publicIp + 'common/file/uploadLogo'
//上传文件
export const uploadFileUrl = publicIp + 'common/file/uploadAnnex'