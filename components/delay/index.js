/**
 * @author Glade Kettle
 * Sub component of video / HTMLMediaElement
 * Built to process signal
 */

export default class Delay {
  /**
   * Takes in options object to construct
   * @param {Object} options -
   * @param {HTMLElement} options.element -
   */
  constructor (options) {
    this.element = options.element
    this.delayTimeCtrl = this.element.querySelector('.delay-time')
    this.delayFeedbackCtrl = this.element.querySelector('.delay-feedback')
    this.delayFilterCtrl = this.element.querySelector('.delay-filter')

    // Range event listeners
    this.delayTimeCtrl.addEventListener('change', ::this.setDelayTime)
    this.delayFeedbackCtrl.addEventListener('change', ::this.setFeedbackAmount)
    this.delayFilterCtrl.addEventListener('change', ::this.setFilterAmount)
    this.audioCtx = new (window.AudioContext || window.webkitAudioContext)() // define audio context
    // Webkit/blink browsers need prefix, Safari won't work without window.
    this.delay = this.audioCtx.createDelay(179)
    this.filter = this.audioCtx.createBiquadFilter(22000)
    this.feedback = this.audioCtx.createGain(0.8)
  }

  /**
   * @param {Event} event - range input update
   */
  setDelayTime (event) {
    this.delay.delayTime.value = event.currentTarget.value
  }

  /**
   * @param {Event} event - range input update
   */
  setFilterAmount (event) {
    this.filter.frequency.value = event.currentTarget.value
  }

  /**
   * @param {Event} event - range input update
   */
  setFeedbackAmount (event) {
    this.feedback.gain.value = event.currentTarget.value
  }

  process (event) {
    this.source = this.audioCtx.createMediaElementSource(event.currentTarget)
    this.delay.delayTime.value = 0.5
    this.feedback.gain.value = 0.8
    this.filter.frequency.value = 1000
    this.delay.connect(this.feedback)
    this.feedback.connect(this.filter)
    this.filter.connect(this.delay)
    this.source.connect(this.delay)
    this.source.connect(this.audioCtx.destination)
    this.delay.connect(this.audioCtx.destination)
  }
}
