import { square } from "./maths.js";


const buttonEl = document.getElementById("btnGetUsername")
// const txtEl = document.getElementById("username")
const txtElNumber = document.getElementById("txt-number")

buttonEl.addEventListener("click", function () {
    // const squareValue = txtElNumber.value * 2;

    const squareValue = square(txtElNumber.value)

    const pEl = document.createElement("p")

    pEl.innerHTML = `Squaer Value : ${squareValue}`

    document.body.appendChild(pEl)

    console.log("Username : ", txtElNumber.value)

})