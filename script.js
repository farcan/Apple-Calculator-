
var display = document.querySelector(".answer-container");
var last_process = document.querySelector(".last-process");
var number_buttons = document.querySelectorAll(".num");
var operator_buttons = document.querySelectorAll(".op");
var equal_button = document.querySelector(".equal");
var clear_button = document.querySelector(".clear");

console.log(operator_buttons);

var answer_text = document.querySelector(".answer-text");

for (var i = 0; i < number_buttons.length; i++) {
    number_buttons[i].addEventListener("click", enter_number);
}

var sayi1, sayi2, sonuc;
sayi1 = 0;
sayi2 = 0;
var operator;
function enter_number() {
    answer_text.textContent += this.value;
}


for (var i = 0; i < operator_buttons.length; i++) {
    operator_buttons[i].addEventListener("click", select_operator);
}
var counter = 0;
function select_operator() {
    if (counter > 0) {
        sayi2 = parseFloat(answer_text.textContent);
        console.log(sayi2);

        switch (this.value) {

            case "+":
                operator = this.value;
                answer_text.textContent = "";
                last_process.textContent = operator;
                sayi1 = sayi1 + sayi2;
                sonuc = sayi1;
                console.log(sayi1);
                break;

            case "-":
                operator = this.value;
                answer_text.textContent = "";
                last_process.textContent = operator;
                sayi1 = sayi1 - sayi2;
                sonuc = sayi1;
                console.log(sayi1);
                break;

            case "*":
                operator = this.value;
                answer_text.textContent = "";
                last_process.textContent = operator;
                sayi1 = sayi1 * sayi2;
                sonuc = sayi1;
                console.log(sayi1);
                break;

            case "/":
                operator = this.value;
                answer_text.textContent = "";
                last_process.textContent = operator;

                sayi1 = sayi1 / sayi2;
                sonuc = sayi1;
                console.log(sayi1);
                break;
        }
    }

    if (counter <= 0) {
        counter++
        sayi1 = parseFloat(answer_text.textContent);
        last_process.textContent = this.value;
        console.log(sayi1);
        answer_text.textContent = "";
    }
}

clear_button.addEventListener("click", clear);
function clear() {
    counter = 0;
    sayi1 = 0;
    sayi2 = 0;
    answer_text.textContent = "";
    last_process.textContent = ""

}


equal_button.addEventListener("click", equal);
function equal() {


    switch (last_process.textContent) {
        case "+":
            sonuc = sayi1 + parseInt(answer_text.textContent);
            break;
        case "-":
            sonuc = sayi1 - parseInt(answer_text.textContent);
            break;
        case "*":
            sonuc = sayi1 * parseInt(answer_text.textContent);
            break;
        case "/":
            sonuc = sayi1 / parseInt(answer_text.textContent);
            break;
        default: answer_text.textContent = "0";
    }
    last_process.textContent = "=";
    answer_text.textContent = sonuc;
    sayi1 = 0;
    sayi2 = 0;
    counter = 0;
}