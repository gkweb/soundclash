import 'dom4'
import 'svgxuse'
import domready from 'domready'
import Delay from '../delay'

domready(() => {
  let fx = {}
  fx.delay = new Delay({element: document.querySelector('[data-component="delay"]')})
})
