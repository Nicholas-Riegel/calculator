// number btns

document.getElementById('zero').addEventListener('click', function(){enterNum(0)});

document.getElementById('1').addEventListener('click', function(){enterNum(1)});

document.getElementById('2').addEventListener('click', function(){enterNum(2)});

document.getElementById('3').addEventListener('click', function(){enterNum(3)});

document.getElementById('4').addEventListener('click', function(){enterNum(4)});

document.getElementById('5').addEventListener('click', function(){enterNum(5)});

document.getElementById('6').addEventListener('click', function(){enterNum(6)});

document.getElementById('7').addEventListener('click', function(){enterNum(7)});

document.getElementById('8').addEventListener('click', function(){enterNum(8)});

document.getElementById('9').addEventListener('click', function(){enterNum(9)});

document.getElementById('period').addEventListener('click', function(){enterNum('.')});

// operator btns

document.getElementById('plus').addEventListener('click', plus);

document.getElementById('minus').addEventListener('click', minus);

document.getElementById('times').addEventListener('click', times);

document.getElementById('divide').addEventListener('click', divide);

document.getElementById('equals').addEventListener('click', operation);

document.getElementById('percent').addEventListener('click', percent);

document.getElementById('plusMinus').addEventListener('click', plusMinus);
// clear all btn

document.getElementById('ac').addEventListener('click', ac);

// global variables

let arr1 = [];
let arr2 = []
let x, result;

// enter numbers function

function enterNum(num){
    arr2.push(num)
    console.log(arr2)
    document.getElementById('io').value = arr2.join('');
}

// operator functions 

function plus(){
    x=1;
    arr1.push(document.getElementById('io').value);
    arr2 = [];
}
function minus(){
    x=2;
    arr1.push(document.getElementById('io').value);
    arr2 = [];
}
function times(){
    x=3;
    arr1.push(document.getElementById('io').value);
    arr2 = [];
}
function divide(){
    x=4;
    arr1.push(document.getElementById('io').value);
    arr2 = [];
}
function percent(){
    document.getElementById('io').value = document.getElementById('io').value /100;
}
function plusMinus(){
    let m = document.getElementById('io').value;
    console.log(m)
    if (m > 0){
        document.getElementById('io').value = "-" + m;
    }
    else if (m < 0){
        document.getElementById('io').value = m.slice(1); 
    }
}

// equals function

function operation(){
    arr1.push(document.getElementById('io').value);
    console.log(arr1)
    if (x===1){result = arr1.reduce(add)}
    else if (x===2){result = arr1.reduce(subtract)}
    else if (x===3){result = arr1.reduce(multiply)}
    else if (x===4){result = arr1.reduce(divide2)}
    document.getElementById('io').value = Math.round(result * 1000)/1000;
    arr1=[];
    arr2=[];
}
function add(total, num){
    return parseFloat(total) + parseFloat(num);
}
function subtract(total, num){
    return parseFloat(total) - parseFloat(num);
}
function multiply(total, num){
    return parseFloat(total) * parseFloat(num);
}
function divide2(total, num){
    return parseFloat(total) / parseFloat(num);
}

// function clear

function ac(){
    arr1 = [];
    arr2 = [];
    x = '';
    result = '';
    document.getElementById('io').value = 0;
}

