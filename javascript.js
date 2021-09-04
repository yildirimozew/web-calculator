let num1 = "";
let num2 = "";
let numcode = 1;
let opcode = ""; 
const topContainer = document.getElementById("equation");
const bottomContainer = document.getElementById("answer");

function num(number) {
    if (numcode === 1)
    {num1 += number;
    drawScreen();}
    else {num2 += number;
    drawScreen()}

}

function op(operation) {
    if (opcode === "") {opcode === operation;
        console.log(opcode);
        numcode = 2;
        drawScreen()}
    else {}
    if (opcode === "=") {}
}

function drawScreen() {
    if (numcode === 2) {
        topContainer.innerHTML = num1 + opcode;
        bottomContainer.innerHTML = num2;}
    else {
        bottomContainer.innerHTML = num1 + opcode;
    }
    console.log(opcode);
}

function sum() {

}

function equals() {

}


//TODO: num'un gereğinden fazla büyük olmamasını sağla