import html2canvas from "html2canvas";
import JsPDF from 'jspdf'
import { File } from "./file";

const DPR = () => {
  // 获取设备dpi
  if (window.devicePixelRatio && window.devicePixelRatio > 1) {
    return window.devicePixelRatio * 2
  }
  // 直接返回高像素比
  return 8
}

const exportData = (domObj, type = 'img') => {
  // 清晰度关键  像素比
  const dpi = DPR()
  console.log(dpi)
  return new Promise((resolve, reject) => {
    html2canvas(domObj, {
      useCORS: true, // 是否允许图片跨域
      allowTaint: true,
      scrollY: 0,
      scrollX: 0,
      logging: false, // 日志
      width: domObj.offsetWidth, // 图片宽度
      height: domObj.offsetHeight,
      scale: dpi,
      backgroundColor: 'transparent',
    }).then(async canvas => {
      if (type == 'img') {
        let dataUrl = canvas.toDataURL('image/jpeg');
        let binaryData = atob(dataUrl.split("base64,")[1]);
        let imgData = [];
        for (let i = 0; i < binaryData.length; i++) {
            imgData.push(binaryData.charCodeAt(i));
        }
        let saveRes = await File.saveFile('', imgData, 'Image', ['jpeg'])
        console.log('image saveRes', saveRes)

        resolve(1)
        return;
      } else if (type == 'pdf') {
        var contentWidth = canvas.width;
        var contentHeight = canvas.height;
        console.log("contentWidth", contentWidth)
        console.log("contentHeight", contentHeight)
        // 一页pdf显示html页面生成的canvas高度;
        var pageHeight = contentWidth * 841.89 / 592.28;
        // 未生成pdf的html页面高度
        var leftHeight = contentHeight;
        
        console.log("pageHeight", pageHeight)
        console.log("leftHeight", leftHeight)
        // 页面偏移
        var position = 0;
        // a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
        var imgWidth = 595.28;
        var imgHeight = 592.28 / contentWidth * contentHeight;
  
        var pageData = canvas.toDataURL('image/jpeg', 1.0);
  
        var pdf = new JsPDF('', 'pt', 'a4');
  
        // 有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
        // 当内容未超过pdf一页显示的范围，无需分页
        if (leftHeight < pageHeight) {
          console.log("没超过1页")
          pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
        } else {
          while (leftHeight > 0) {
            console.log("超过1页")
            pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
            leftHeight -= pageHeight;
            position -= 841.89;
            // 避免添加空白页
            if (leftHeight > 0) {
              pdf.addPage();
            }
          }
        }
        // pdf.save('test' + '.pdf');
        const pdfData = pdf.__private__.getArrayBuffer(pdf.__private__.buildDocument());

        let saveRes = await File.saveFile('', pdfData, 'PDF', ['pdf'])
        console.log('pdf saveRes', saveRes)
        resolve(1);
      }
    }).catch((error) => {
      reject(error)
    })
  });
}

export {
    exportData
}