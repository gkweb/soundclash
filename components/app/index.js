import 'dom4'
import 'svgxuse'
import domready from 'domready'
import Delay from '../delay'
import Video from '../video'

domready(() => {
  let app = {}
  app.fx = {}
  app.video = new Video({element: document.querySelector('[data-component="video"]')})
  app.fx.delay = new Delay({
    element: document.querySelector('[data-component="delay"]')
   })
  app.video.setPlayCallback(::app.fx.delay.process)
})
