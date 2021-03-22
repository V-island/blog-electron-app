import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'

/*
html生成PDF 并下载

输入：
  value: 数据
  request: 请求地址
  param: 请求参数

示例：<div ref="print" />

import getPdf from "@utils/htmlToPdf";
getPdf(this.$refs.print, '导出生成PDF')

*/

// 根据DOM ID属性生成PDF
export function getIdToPdf($dom, title) {
  html2Canvas(document.querySelector($dom), {
    allowTaint: true
  }).then(canvas => {
    let contentWidth = canvas.width
    let contentHeight = canvas.height
    let pageHeight = contentWidth / 592.28 * 841.89
    let leftHeight = contentHeight
    let position = 0
    let imgWidth = 595.28
    let imgHeight = 592.28 / contentWidth * contentHeight
    let pageData = canvas.toDataURL('image/jpeg', 1.0)
    let PDF = new JsPDF('', 'pt', 'a4')
    if (leftHeight < pageHeight) {
      PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
    } else {
      while (leftHeight > 0) {
        PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
        leftHeight -= pageHeight
        position -= 841.89
        if (leftHeight > 0) {
          PDF.addPage()
        }
      }
    }
    PDF.save(title + '.pdf')
  })
}

// 根据Dom ref属性生成PDF
export async function getPdf($print, title){
  if ($print.length < 1) return;
  //方向默认竖直，尺寸ponits，格式a4[595.28,841.89]
  let PDF = new JsPDF('', 'pt', 'a4')
  let position = 0
  let index = $print.length
  
  for (const element of $print) {
    const canvas = await html2Canvas(element, {
      allowTaint: true
    });
    //返回图片dataURL，参数：图片格式和清晰度(0-1)
    var pageData = canvas.toDataURL('image/jpeg', 1.0)
    // Dom 图片的尺寸
    let contentWidth = canvas.width
    let contentHeight = canvas.height
    // A4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
    let imgWidth = 555.28   // 左右边距20
    let imgHeight = 552.28 / contentWidth * contentHeight // 左右边距20
    // 一页pdf显示html页面生成的canvas高度;
    let pageHeight = contentWidth / 592.28 * 841.89
    // 未生成pdf的html页面高度
    let leftHeight = contentHeight
    // 有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
    // 当内容未超过pdf一页显示的范围，无需分页
    if (leftHeight < pageHeight) {
      PDF.addImage(pageData, 'JPEG', 20, 20, imgWidth, imgHeight) // 左右边距20，上下偏移20
    } else {
      while (leftHeight > 0) {
        PDF.addImage(pageData, 'JPEG', 20, position, imgWidth, imgHeight) // 左右边距20
        leftHeight -= pageHeight
        position -= 841.89
        //避免添加空白页
        if (leftHeight > 0) {
          PDF.addPage()
        }
      }
    }
    if(index > 1) {
      PDF.addPage()
      index--
    }
  }
  PDF.save(title + new Date().getTime() + '.pdf')
}