import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  open() {
    console.log('dialog_controller open()')
    this.element.showModal()
  }
}
