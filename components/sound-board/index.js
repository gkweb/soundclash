/**
 * @author Glade Kettle
 */

export default class SoundBoard {
  /**
   * Takes in options object to construct
   * @param {Object} options -
   * @param {HTMLElement} options.element -
   */
  constructor (options) {
    this.element = options.element
    this.video = this.element.querySelector('video')
    this.callbacks = {}
    this.callbacks.play = []
    this.callbacks.stop = []
    this.video.addEventListener('play', ::this.play)
    this.video.addEventListener('stop', ::this.stop)

    this.setPlayCallback(function (event) {
      console.log(event)
      console.log('playing')
      console.log(this)
    })
    this.video.play()
  }

  /**
   * Run and push in mutiple callbacks.
   * @param {function} callback - The function callback to be added to run
   */
  setPlayCallback (callback) {
    if (typeof callback === 'function') {
      this.callbacks.play.push(callback)
    }
  }

  /**
   * Play event
   * @param {Event} event - Media element play event
   */
  play (event) {
    this.callbacks.play.forEach(c => {
      c.call(this, event)
    })
  }

  /**
   * Stop event
   * @param {Event} event - Media element play event
   */
  stop (event) {
    this.callbacks.stop.forEach(c => {
      c.call(this, event)
    })
  }

  /**
   * @returns {HTMLElement} component media element -
   */
  getMediaElement () {
    return (this.video)
  }
}
