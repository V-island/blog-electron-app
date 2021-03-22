import template from 'url-template';

/* =================== 基础方法 ================ */
// 获取路由Link
export function getLinkRouter(id, linkArray, link) {
  for (let index = 0; index < linkArray.length; index++) {
    const item = linkArray[index];

    if (item.id == id) link = item;
    if (item.children) link = getLinkRouter(id, item.children, link)
  }
  return link
}
// 数组去重
export function unique(array, key) {
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length;) {
      if (array[i][key] == array[j][key]) { //通过photoid属性进行匹配；
        array.splice(j, 1); //去除重复的对象；
      } else {
        j++;
      }
    }
  }
  return array;
}
// 随机uuid
export function uuid() {
  return Math.floor((1 + Math.random()) * 0x100000000).toString(16)
}
// 生成随机数
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* =================== 计算方法 ================ */
// 数值相加
export function numberAdd(arg1, arg2) {
  var r1, r2, m, n;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  n = r1 >= r2 ? r1 : r2;
  return ((arg1 * m + arg2 * m) / m).toFixed(n);
}
// 保留x位小数
export function numFixed(num, size) {
  return num.toFixed(size)
}

/* =================== HTTP请求 ================ */
// 格式化请求
export function fillTemplate(url, params = {}) {
  const urlTemplate = template.parse(url)
  return urlTemplate.expand(params)
}
// GET 请求格式化
export function getFormatParam(obj) {
  let param = {}

  Object.keys(obj).forEach((key) => {
    let data = obj[key]

    if (data == undefined) {
      param[key] = obj[key]
    } else if (data.constructor === Array) {
      param[key] = obj[key].join(",");
    } else {
      param[key] = obj[key]
    }
  });
  return param;
}
// obj转formData
export function getFormData(obj) {
  const formData = new FormData();
  Object.keys(obj).forEach((key) => {
    formData.append(key, obj[key]);
  });
  return formData;
}

/* =================== 打印下载 ================ */
// 下载
export function saveFile(data, filename) {
  var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
  save_link.href = data;
  save_link.download = filename;
  save_link.target = '_blank';

  var event = document.createEvent('MouseEvents');
  event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  save_link.dispatchEvent(event);
}
// 下载文件流
export function saveBlobFile(blob, fileName) {
  if (window.navigator.msSaveOrOpenBlob) {
    navigator.msSaveBlob(blob, fileName);
  } else {
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
    window.URL.revokeObjectURL(link.href);
  }
}
// 打印
export function iframePrint(Element) {
  var userAgent = navigator.userAgent.toLowerCase(); //取得浏览器的userAgent字符串

  if (userAgent.indexOf("trident") > -1) {
    alert("请使用google或者360浏览器打印");
    return false;
  } else {
    //判断iframe是否存在，不存在则创建iframe
    var iframe = document.getElementById("print-iframe");
    if (iframe) {
      document.body.removeChild(iframe);
    } else {
      iframe = document.createElement('iframe');
      iframe.setAttribute("id", "print-iframe");
      iframe.setAttribute('style', 'position:absolute;width:0px;height:0px;left:-500px;top:-500px;');
      document.body.appendChild(iframe);

      var doc = iframe.contentWindow.document;
      doc.write(`<link rel="stylesheet" type="text/css" href="../css/style.css">`);
      doc.write(Element);
      doc.close();

      setTimeout(() => {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
      }, 500);
    }
  }
}
// base64图片旋转90度
export function rotateBase64Img(src, edg, callback) {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");

  var imgW;//图片宽度
  var imgH;//图片高度
  var size;//canvas初始大小

  if (edg % 90 != 0) {
    console.error("旋转角度必须是90的倍数!");
    throw '旋转角度必须是90的倍数!';
  }
  (edg < 0) && (edg = (edg % 360) + 360)
  const quadrant = (edg / 90) % 4; //旋转象限
  const cutCoor = { sx: 0, sy: 0, ex: 0, ey: 0 }; //裁剪坐标

  var image = new Image();
  image.crossOrigin = "anonymous"
  image.src = src;

  image.onload = function () {

    imgW = image.width;
    imgH = image.height;
    size = imgW > imgH ? imgW : imgH;

    canvas.width = size * 2;
    canvas.height = size * 2;
    switch (quadrant) {
      case 0:
        cutCoor.sx = size;
        cutCoor.sy = size;
        cutCoor.ex = size + imgW;
        cutCoor.ey = size + imgH;
        break;
      case 1:
        cutCoor.sx = size - imgH;
        cutCoor.sy = size;
        cutCoor.ex = size;
        cutCoor.ey = size + imgW;
        break;
      case 2:
        cutCoor.sx = size - imgW;
        cutCoor.sy = size - imgH;
        cutCoor.ex = size;
        cutCoor.ey = size;
        break;
      case 3:
        cutCoor.sx = size;
        cutCoor.sy = size - imgW;
        cutCoor.ex = size + imgH;
        cutCoor.ey = size + imgW;
        break;
    }


    ctx.translate(size, size);
    ctx.rotate(edg * Math.PI / 180);
    ctx.drawImage(image, 0, 0);

    var imgData = ctx.getImageData(cutCoor.sx, cutCoor.sy, cutCoor.ex, cutCoor.ey);
    if (quadrant % 2 == 0) {
      canvas.width = imgW;
      canvas.height = imgH;
    } else {
      canvas.width = imgH;
      canvas.height = imgW;
    }
    ctx.putImageData(imgData, 0, 0);
    callback(canvas.toDataURL())
  };
}

/* =================== Form表单数据格式化 ================ */
// Textarea换行 存储
export function textareaPush(str) {
  // eslint-disable-next-line no-control-regex
  var reg = new RegExp("\r\n", "g");
  var reg1 = new RegExp(" ", "g");

  str = str.replace(reg, "<br>").replace(reg1, "<p>");

  return str;
}

// Textarea换行 显示
export function textareaPull(str) {
  var reg = new RegExp("<br>", "g");
  var reg1 = new RegExp("<p>", "g");

  str = str.replace(reg, "\r\n").replace(reg1, " ");

  return str;
}

/* =================== 系统操作 ================ */
// 跳转到登录页面
export function toLoginPage() {
  localStorage.clear();
  sessionStorage.clear();

  // 跳转
  setTimeout(() => {
    location.href = '/';
  }, 500);
}
// DOM全屏
export function fullScreen(el) {
  var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen,
      wscript;

  if (typeof rfs != "undefined" && rfs) {
      rfs.call(el);
      return;
  }

  if (typeof window.ActiveXObject != "undefined") {
      // eslint-disable-next-line no-undef
      wscript = new ActiveXObject("WScript.Shell");
      if (wscript) {
          wscript.SendKeys("{F11}");
      }
  }
}
// DOM 退出全屏
export function exitFullScreen(el) {
  el = el || document
  var cfs = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullScreen,
      wscript;

  if (typeof cfs != "undefined" && cfs) {
      cfs.call(el);
      return;
  }

  if (typeof window.ActiveXObject != "undefined") {
      // eslint-disable-next-line no-undef
      wscript = new ActiveXObject("WScript.Shell");
      if (wscript != null) {
          wscript.SendKeys("{F11}");
      }
  }
}
// 刷新
export function refresh(Url) {
  setTimeout(function () {
      if (Url) {
          location.href = Url;
          return;
      } else {
          return location.reload();
      }
  }, 2000);
}