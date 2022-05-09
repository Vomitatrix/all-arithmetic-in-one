const field1 = document.getElementById('value-1-field');
const field2 = document.getElementById('value-2-field');
const btn = document.querySelector('button');
const h2 = document.querySelector('h2');
const addPara = document.getElementById('add');
const subPara = document.getElementById('sub');
const mulPara = document.getElementById('mul');
const divPara = document.getElementById('div');
const modPara = document.getElementById('mod');
let input1, input2;
let add, sub, mul, div, mod;

btn.addEventListener('click', onClick);

function onClick(){
    if (getNumber1() === '' || getNumber2() === '') {
        h2.textContent = 'Error: One or both values are missing.';
    } else {
        arithmetic();
    }
}

function getNumber1() {
    return field1.value;
}

function getNumber2() {
    return field2.value;
}

function arithmetic() {
    v1 = Number(getNumber1());
    v2 = Number(getNumber2());

    add = v1 + v2;
    sub = v1 - v2;
    mul = v1 * v2;
    div = v1 / v2;
    mod = v1 % v2;

    addPara.textContent = `${v1} + ${v2} = ${add}`;
    subPara.textContent = `${v1} - ${v2} = ${sub}`;
    mulPara.textContent = `${v1} * ${v2} = ${mul}`;
    divPara.textContent = `${v1} / ${v2} = ${div}`;
    modPara.textContent = `${v1} % ${v2} = ${mod}`;
}