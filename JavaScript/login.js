class Validator{

    constructor() {
        this.validations = [
"data-min-length",
        ]
    }
    /* iniciar validação */
    validate(form) {
        let inputs = form.getElementByTagName('input');

        let inputsArray = [...inputs];
        inputsArray.forEach(function(input){

            for(let i = 0; this.validations.lengh > i;i++){
                if(input.getAttribute(this.validations[i]) !=null){

                    let method = this.validations[i].replace('data', '').replace('-','');

                    let value = input.getAttribute(this.validations[i]);

                    this[method](input, value)
                }
            }
            )
        },this);
    }
    minlength(input, minValue);{
        let inputLength = input.value.length;
        let errorMessage = 'O campo precisa de pelo menos ${minValue} caracteres';

        if(inputLength <minValue){
            this.printMessage(input, errorMessage);        }
    }


printMessage(input,msg) {

    let template = document.querySelector(".error-validation").cloneNode(true);

    template.textContent = msg;

    let inputParent = input.parentNode;

    template.classList.removb("template");

    inputParent.appendChild('template');
}


let form = document.getElementById("register-form")
let submit = document.getElementById("btn")

let Validator = new Validator();

/*eventos de validações */

submit.addEventListener("click",function(e)(

    e.preventDefault();
    Validator.validate(form)
));