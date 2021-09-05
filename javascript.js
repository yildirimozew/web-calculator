let num1 = "";
let num2 = "";
let numcode = 1;
let opcode = "";
let floatcheck = 0;
const topContainer = document.getElementById("equation");
const bottomContainer = document.getElementById("answer");

function num(number) {
    console.log(floatcheck)
    if (floatcheck === 1) {}
    else if (numcode === 1)
    {num1 += number;
        console.log(num1);
    drawScreen();}
    else {num2 += number;
    drawScreen()}

}

function op(operation) {
    floatcheck = 0;
    if (num1 === "") {}
    else if (opcode === "") {opcode = operation;
        numcode = 2;
        drawScreen();}
    else if (num2 !== "") {equals();
        opcode = operation;
        numcode = 2;
        drawScreen();
    }  
}

function drawScreen() {
    if(num1 % 1 !== 0 && num1 !== "" && numcode === 1) {num1 = parseFloat(num1).toFixed(2);
    floatcheck = 1;}
    else {floatcheck = 0;}
    if (numcode === 2) {
        topContainer.innerHTML = num1 + " " + opcode;
        bottomContainer.innerHTML = num2;}
    else {
        bottomContainer.innerHTML = num1 + opcode;
        topContainer.innerHTML = "";
    }
}

function sum() {
    num1 = parseFloat(num1) + parseFloat(num2);
    num2 = "";
    numcode = 1;
    opcode = "";
    drawScreen();
}

function equals() {
    if (opcode === "+") {sum()}
    else if (opcode === "-") {sub()}
    else if (opcode === "*") {multiply()}
    else if (opcode === "/") {divide()}
}

function ac() {
    num1 = "";
    num2 = "";
    opcode = "";
    drawScreen();
}

function sub() {
    num1 = parseFloat(num1) - parseFloat(num2);
    num2 = "";
    numcode = 1;
    opcode = "";
    drawScreen();
}

function multiply() {
    num1 = parseFloat(num1) * parseFloat(num2);
    num2 = "";
    numcode = 1;
    opcode = "";
    drawScreen();
}

function divide() {
    num1 = parseFloat(num1) / parseFloat(num2);
    num2 = "";
    numcode = 1;
    opcode = "";
    drawScreen();
}

//TODO: num'un gereğinden fazla büyük olmamasını sağla
//TODO:işlemleri tek bir fonksyionda topla opcode'u kullanarak yaptır