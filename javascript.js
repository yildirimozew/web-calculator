let num1 = "";
let num2 = "";
let numcode = 1;
let opcode = "";
let floatcheck = 0;
const topContainer = document.getElementById("equation");
const bottomContainer = document.getElementById("answer");

function num(number) {
    if (floatcheck === 1) {}
    else if (numcode === 1)
    {num1 += number;
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
    if (num1.toString().length > 10) {num1 = num1.toString().slice(0, 11);
        if (num1[1] === "." ) {num1 = num1.replace(".", "");}}
    if (num2.toString().length > 10) {num2 = num2.toString().slice(0, 11);
    if (num2[1] === "." ) {num2 = num2.replace(".", "")}}
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
    else if (opcode === "%") {mod()}
}

function ac() {
    num1 = "";
    num2 = "";
    opcode = "";
    numcode = 1;
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
    if (parseFloat(num2) !== 0) {
    num1 = parseFloat(num1) / parseFloat(num2);
    num2 = "";
    numcode = 1;
    opcode = "";
    drawScreen();
}
    else {}
}

function mod() {
    num1 = parseFloat(num1) % parseFloat(num2);
    num2 = "";
    numcode = 1;
    opcode = "";
    drawScreen();
}

function c() {
    if (numcode === 1) {
        if (floatcheck === 1) {num1 = num1.toString().slice(0, -3);
            drawScreen()}
        else {num1 = num1.toString().slice(0, -1);
    drawScreen()}}
    else {
        if (floatcheck === 1) {num1 = num1.toString().slice(0, -3);
            drawScreen();}
        else{
        num2 = num2.toString().slice(0, -1);
    drawScreen();}}
}

function plusminus() {
    if (numcode === 1 && num1 !== "") {
        num1 = -1 * parseFloat(num1);
        drawScreen()}
    else if (num2 !== "") {num2 = -1 * parseFloat(num2);
        drawScreen()}
    }

function dot() {
    if (numcode === 1 && num1 !== "") {
        if (num1.toString().includes(".")) {}
        else {num1 = num1.toString() + ".";
    drawScreen()}}
    else if (num2 !== "") {
        if (num2.toString().includes(".")) {}
        else {num2 = num2.toString() + ".";
    drawScreen()}
    }
}