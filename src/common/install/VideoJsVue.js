import videoJs from 'video.js'
import 'video.js/dist/video-js.css'

const Video = {}
Video.install = function (Vue) {
  Vue.prototype.$video = videoJs //引入Video播放器
}

export default Video