

export class FormController {

    constructor(selector, songsService) {
        this.element = document.querySelector(selector);
        this.songsService = songsService;
        this.addEventListeners();
    }

    addEventListeners() {
        this.addInputListeners();
        this.addFormSubmitListener();
    }

    addFormSubmitListener() {
        this.element.addEventListener('submit', event => {
            event.preventDefault();
            let song = this.buildSongData();
        });
    }

    buildSongData() {
        return {
            artist: this.element.querySelector('#artist').value,
            title: this.element.querySelector('#title').value,
            cover: this.element.querySelector('#cover').value
        }
    }

    addInputListeners() {
        // en todos los input que hay en el formulario, los valido cuando se pierde el foco
        this.element.querySelectorAll('input').forEach(input => {

            input.addEventListener('blur', event => {
                // event.target sería lo mismo que input en este caso
                if (input.checkValidity() == false) {
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
                this.checkFormValidity();
            });

        });
    }

    checkFormValidity() {
        let button = this.element.querySelector('button');
        if (this.element.checkValidity()) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    }

}
