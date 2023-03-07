// ES6 Module Pattern - Default in Browser
import { square, sum } from "./maths";
import { MAGIC_NUMBER } from "./fortune";

const buttonEl = document.getElementById("btnAdd")
const txtElNumber1 = document.getElementById("txt-number-one")
const txtElNumber2 = document.getElementById("txt-number-two")

buttonEl.addEventListener("click", function () {

    // const squareValue = square(Number(txtElNumber.value))
    let num1 = Number(txtElNumber1.value)
    let num2 = Number(txtElNumber2.value)
    const result = sum(num1, num2)

    const pEl = document.createElement("p")
    const pElOne = document.createElement("p")

    pElOne.innerHTML = `Your lucky Number today will be === ${MAGIC_NUMBER}`
    pEl.innerHTML = `Sum : ${result}`

    document.body.appendChild(pEl)
    document.body.appendChild(pElOne)

})