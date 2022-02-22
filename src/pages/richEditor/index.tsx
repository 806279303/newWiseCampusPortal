import {Component} from "react";
import {LgRichEditor} from "@/components/richEditor";
import "./index.scss"
import {DemoPage} from "../demoPage";
import {LgBreadcrumb} from "@/components/breadcrumb";
import {DemoView} from "@/components/demoView";

export default class Index extends Component {
  render() {
    return (
      <DemoPage title="G014富文本编辑器" className="lg-rich-editor-demo"
                importCode={`
                    import {LgRichEditor} from "@/components/richEditor";
                `}
                interfaceCode={`
                      interface LgRichEditorProps {
                          config?: Partial<ConfigType>; //配置项，详情请看ConfigType
                          
                          defaultValue?: string;  // 组件初始化时的value
                          localBlobImg?: boolean; // 图片替换为本地Blob伪URL
                          placeholder?: string; //占位符
                          value?: string;
                          
                          linkImgCallback?: (src: string, alt: string, href: string) => void; // 插入网络图片的回调事件
                          onlineVideoCallback?: (video: unknown) => void; // 插入网络视频的回调事件
                          onChange?: (html: string) => void;
                          onBlur?: (html: string) => void;
                          onFocus?: (html: string) => void;
                      };
                      
                      //这里只列出部分功能，详细可以看https://www.wangeditor.com/doc/pages/02-%E5%86%85%E5%AE%B9%E5%A4%84%E7%90%86/
                      interface ConfigType{
                          height: number //编辑区域高度，默认为300px
                          languageType: string[]
                          languageTab: string
                          menus: string[]  //设置菜单项，设置菜单顺序
                          excludeMenus: string[] //剔除菜单
                          fontNames: FontStyleType
                          lineHeights: string[]
                          showMenuTooltips: boolean //设置菜单栏提示 隐藏菜单栏提示 编辑器的菜单栏提示
                          indentation: IndentationType
                          fontSizes: FontSizeConfType
                          colors: string[]
                          emotions: EmotionsType[]
                          zIndex: number
                          onchange: Function | null
                          onfocus: Function
                          onblur: Function
                          onchangeTimeout: number
                          pasteFilterStyle: boolean
                          pasteIgnoreImg: boolean
                          pasteTextHandle: Function
                          styleWithCSS: boolean
                          linkImgCallback: Function
                          onSelectionChange: Function
                      
                          placeholder: string
                          zIndexFullScreen: number
                          showFullScreen: boolean
                          showLinkImg: boolean //隐藏插入网络图片的功能 设置 editor.config.showLinkImg = false 即可隐藏插入网络图片的功能，即只保留上传本地图片。
                          showLinkImgAlt: boolean
                          showLinkImgHref: boolean // 配置超链接
                          uploadImgAccept: string[] //限制类型
                          uploadImgServer: string //配置上传的服务器接口
                          uploadImgShowBase64: boolean // 使用 base64 格式保存图片
                          uploadImgMaxSize: number //限制大小，比如2M 2 * 1024 * 1024
                          uploadImgMaxLength: number //限制一次最多能传几张图片 默认为 100 张
                          uploadFileName: string
                          uploadImgParams: DicType
                          uploadImgParamsWithUrl: boolean
                          uploadImgHeaders: DicType
                          uploadImgHooks: UploadImageHooksType
                          uploadImgTimeout: number
                          withCredentials: boolean
                          customUploadImg: Function | null
                          uploadImgFromMedia: Function | null
                          customAlert: Function
                      
                          onCatalogChange: Function | null
                      
                          lang: string
                          languages: typeof langConfig
                      
                          linkCheck: Function
                          linkImgCheck: Function
                          compatibleMode: () => boolean
                          historyMaxSize: number
                      
                          focus: boolean
                      
                          onlineVideoCheck: Function
                          onlineVideoCallback: Function
                      
                          showLinkVideo: Boolean
                          uploadVideoAccept: string[] //限制视频类型
                          uploadVideoServer: string //设置上传视频的服务器接口
                          uploadVideoMaxSize: number //限制可以上传的视频大小
                          uploadVideoName: string
                          uploadVideoParams: DicType
                          uploadVideoParamsWithUrl: boolean
                          uploadVideoHeaders: DicType
                          uploadVideoHooks: UploadVideoHooksType
                          uploadVideoTimeout: number
                          withVideoCredentials: boolean
                          customUploadVideo: Function | null
                          customInsertVideo: Function | null
                      
                          menuTooltipPosition: tooltipPositionType
                      }
              `}>
        <DemoView title="富文本编辑器"
                  code={`
                      <LgRichEditor config={{showLinkImg: false, showLinkVideo: false, uploadVideoServer: "http://localhost:3000/api", excludeMenus: ['video']}} />
                  `}>
          <LgRichEditor config={{
            showLinkImg: false,
            showLinkVideo: false,
            uploadVideoServer: "http://localhost:3000/api",
            excludeMenus: ['video'],
            onlineVideoCallback: () => {
            }
          }}/>
        </DemoView>

      </DemoPage>
    )
  }
}