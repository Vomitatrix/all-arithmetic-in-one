const btn1 = document.getElementById('value-1-button');
const btn2 = document.getElementById('value-2-button');
const h2 = document.querySelector('h2');
const valueOneDisplay = document.getElementById('value-1-display');
const valueTwoDisplay = document.getElementById('value-2-display');
const addPara = document.getElementById('add');
const subPara = document.getElementById('sub');
const mulPara = document.getElementById('mul');
const divPara = document.getElementById('div');
const modPara = document.getElementById('mod');
let input1, input2;
let add, sub, mul, div, mod;

btn1.addEventListener('click', valueOneButton);
btn2.addEventListener('click', valueTwoButton);

function valueOneButton() {
    input1 = prompt('Enter the first value:');
    input1 = Number(input1);
    btn1.textContent = 'CHANGE VALUE 1'
    valueOneDisplay.textContent = input1;
    arithmetic(input1, input2);
}

function valueTwoButton() {
    input2 = prompt('Enter the second value:');
    input2 = Number(input2);
    btn2.textContent = 'CHANGE VALUE 2';
    valueTwoDisplay.textContent = input2;
    arithmetic(input1, input2);
}

function arithmetic(v1, v2) {
    add = v1 + v2;
    sub = v1 - v2;
    mul = v1 * v2;
    div = v1 / v2;
    mod = v1 % v2;

    if (input1 != null && input2 != null) {
        h2.textContent = 'The values input are:'
        addPara.textContent = `${v1} + ${v2} = ${add}`;
        subPara.textContent = `${v1} - ${v2} = ${sub}`;
        mulPara.textContent = `${v1} * ${v2} = ${mul}`;
        divPara.textContent = `${v1} / ${v2} = ${div}`;
        modPara.textContent = `${v1} % ${v2} = ${mod}`;

    } else if (input1 == null && input2 != null) {
        h2.textContent = 'Please input Value 1';
    } else if (input1 != null && input2 == null) {
        h2.textContent = 'Please input Value 2';
    }
}