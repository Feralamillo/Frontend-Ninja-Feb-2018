

export class AppController {

    constructor(selector) {
        this.element = document.querySelector(selector);
    }

    toggleForm() {
        this.element.classList.toggle("show-form");
    }

}
