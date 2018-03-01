

export class FormController {

    constructor(selector) {
        this.element = document.querySelector(selector);
        this.addEventListeners();
    }

    addEventListeners() {
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
        // comprobar si todos los inputs son válidos
        const formElements = this.element.querySelectorAll('input');
        for (let formElement of formElements) {
            if (formElement.checkValidity() == false) {
                // si alguno de los campos no es válido, deshabilitamos el boton
                this.element.querySelector("button").disabled = true;
                return; // termino la ejecución de la funcíon
            }
        }
        // si el bucle termina, sé que todos los campos son válidos
        this.element.querySelector("button").disabled = false;
    }

}
