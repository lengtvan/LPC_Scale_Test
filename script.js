let display = document.getElementById("display");
let result = document.getElementById("result")
let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;
let num7 = 0;
let num8 = 0;
let num9 = 0;
let num10 = 0;
let num11 = 0;
let num12 = 0;
let numF = 0

const addNumber1 = (num) => {
    num = parseFloat(num)
    if (num1 === 0) {
        num1 = num;
        numF += num1;
        display.innerHTML = numF;
    }
    else {
        numF -= num1;
        num1 = num;
        numF += num1
        display.innerHTML = numF;
    }
    console.log(numF)

}
const addNumber2 = (num) => {
    num = parseFloat(num)
    if (num2 === 0) {
        num2 = num;
        numF += num2
        display.innerHTML = numF;
    }
    else {
        numF = numF - num2;
        num2 = num;
        numF += num2;
        display.innerHTML = numF;

    }
    console.log(numF)
}
// addNumber3 function
const addNumber3 = (num) => {
    num = parseFloat(num)
    if (num3 === 0) {
        num3 = num;
        numF += num3;
        display.innerHTML = numF;
    }
    else {
        numF -= num3;
        num3 = num;
        numF += num3
        display.innerHTML = numF;
    }
    console.log(numF)
}

// addNumber4 function
const addNumber4 = (num) => {
    num = parseFloat(num)
    if (num4 === 0) {
        num4 = num;
        numF += num4
        display.innerHTML = numF;
    }
    else {
        numF = numF - num4;
        num4 = num;
        numF += num4;
        display.innerHTML = numF;

    }
    console.log(numF)
}

// addNumber5 function
const addNumber5 = (num) => {
    num = parseFloat(num)
    if (num5 === 0) {
        num5 = num;
        numF += num5;
        display.innerHTML = numF;
    }
    else {
        numF -= num5;
        num5 = num;
        numF += num5;
        display.innerHTML = numF;
    }
    console.log(numF)
}
// addNumber6 function
const addNumber6 = (num) => {
    num = parseFloat(num)
    if (num6 === 0) {
        num6 = num;
        numF += num6;
        display.innerHTML = numF;
    }
    else {
        numF -= num6;
        num6 = num;
        numF += num6
        display.innerHTML = numF;
    }
    console.log(numF)
}

// addNumber7 function
const addNumber7 = (num) => {
    num = parseFloat(num)
    if (num7 === 0) {
        num7 = num;
        numF += num7
        display.innerHTML = numF;
    }
    else {
        numF = numF - num7;
        num7 = num;
        numF += num7;
        display.innerHTML = numF;

    }
    console.log(numF)
}

// addNumber8 function
const addNumber8 = (num) => {
    num = parseFloat(num)
    if (num8 === 0) {
        num8 = num;
        numF += num8;
        display.innerHTML = numF;
    }
    else {
        numF -= num8;
        num8 = num;
        numF += num8;
        display.innerHTML = numF;
    }
    console.log(numF)
}

// addNumber9 function
const addNumber9 = (num) => {
    num = parseFloat(num)
    if (num9 === 0) {
        num9 = num;
        numF += num9;
        display.innerHTML = numF;
    }
    else {
        numF -= num9;
        num9 = num;
        numF += num9;
        display.innerHTML = numF;
    }
    console.log(numF)
}

// addNumber10 function
const addNumber10 = (num) => {
    num = parseFloat(num)
    if (num10 === 0) {
        num10 = num;
        numF += num10;
        display.innerHTML = numF;
    }
    else {
        numF -= num10;
        num10 = num;
        numF += num10;
        display.innerHTML = numF;
    }
    console.log(numF)
}

// addNumber11 function
const addNumber11 = (num) => {
    num = parseFloat(num)
    if (num11 === 0) {
        num11 = num;
        numF += num11;
        display.innerHTML = numF;
    }
    else {
        numF -= num11;
        num11 = num;
        numF += num11;
        display.innerHTML = numF;
    }
    console.log(numF)
}

// addNumber12 function
const addNumber12 = (num) => {
    num = parseFloat(num)
    if (num12 === 0) {
        num12 = num;
        numF += num12;
        display.innerHTML = numF;
    }
    else {
        numF -= num12;
        num12 = num;
        numF += num12;
        display.innerHTML = numF;
    }
    console.log(numF)
}
const reset = () => {
    num1 = 0;
    num2 = 0;
    num3 = 0;
    num4 = 0;
    num5 = 0;
    num6 = 0;
    num7 = 0;
    num8 = 0;
    num9 = 0;
    num10 = 0;
    num11 = 0;
    num12 = 0;
    numF = 0
    display.innerHTML = "";
    result.innerHTML = "";
};
const equal = () => {
    result.innerHTML = ""
    console.log(numF)
    if (numF > 64) {
        result.innerHTML = "You are relationship-related."
    }
    else if (((57 < numF) & (numF < 64)) || (numF == 64) || (numF == 57)) {
        result.innerHTML = "You are in between."
    }
    else if (numF < 57) {
        result.innerHTML = "You are task-oriented."
    }
    numF = 0;
}