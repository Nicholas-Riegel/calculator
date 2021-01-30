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

document.getElementById('equals').addEventListener('click', equals);

document.getElementById('percent').addEventListener('click', percent);

document.getElementById('plusMinus').addEventListener('click', plusMinus);

// clear all btn

document.getElementById('ac').addEventListener('click', ac);

// global variables

let arr1 = []; // for operations
let arr2 = []; // for display
let x = 0 ; // tells 'operation' and 'equals' function what operator was pushed. This is necessary because the operator can't run until the second number is entered.
let result; // result of operations

// enter numbers function: enters numbers into the display. disallows multiple decimals;

function enterNum(num){
    if (num === '.' && arr2.some(x=>x=== '.')){
        document.getElementById('io').value = "Error: Decimal already exists!"
    }
    else {
        arr2.push(num)
        console.log(arr2)
        document.getElementById('io').value = arr2.join('');
    }
}

// operator functions: the first four begin by running the 'operation' function in order to deal with chained operations (e.g. 5 + 4 -3, etc.)

function plus(){
    operation();
    x=1;
    arr1.push(document.getElementById('io').value);
    arr2 = [];
}
function minus(){
    operation();
    x=2;
    arr1.push(document.getElementById('io').value);
    arr2 = [];
}
function times(){
    operation();
    x=3;
    arr1.push(document.getElementById('io').value);
    arr2 = [];
}
function divide(){
    operation();
    x=4;
    arr1.push(document.getElementById('io').value);
    arr2 = [];
}
function percent(){
    document.getElementById('io').value = document.getElementById('io').value /100;
    arr2 = [];
}
function plusMinus(){
    let m = document.getElementById('io').value;
    if (m > 0){
        document.getElementById('io').value = "-" + m;
        arr2 = [];
    }
    else if (m < 0){
        document.getElementById('io').value = m.slice(1);
        arr2 = []; 
    }
}

// operation function

function operation(){
    if (x===0){return ;}
    else{
        arr1.push(document.getElementById('io').value);
        console.log(arr1)
        if (x===1){
            result = arr1.reduce(add);
            document.getElementById('io').value = result;
        }
        else if (x===2){
            result = arr1.reduce(subtract);
            document.getElementById('io').value = result;
        }
        else if (x===3){
            result = arr1.reduce(multiply)
            document.getElementById('io').value = result;
        }
        else if (x===4){
            if (arr1.reduce(divide2) === Infinity || arr1.reduce(divide2) === -Infinity){
                document.getElementById('io').value = "Undefined";
            }
            else {
            result = arr1.reduce(divide2);
            document.getElementById('io').value = Math.round(result * 1000)/1000;
            }
        }
    }
    arr1=[];
    arr2=[];
    x = 0;
}

// equals function

function equals(){
    
    arr1.push(document.getElementById('io').value);
    console.log(arr1)
    
    if (x===1){
        result = arr1.reduce(add);
        document.getElementById('io').value = result;
    }
    else if (x===2){
        result = arr1.reduce(subtract);
        document.getElementById('io').value = result;
    }
    else if (x===3){
        result = arr1.reduce(multiply)
        document.getElementById('io').value = result;
    }
    else if (x===4){
        if (arr1.reduce(divide2) === Infinity || arr1.reduce(divide2) === -Infinity){
            document.getElementById('io').value = "Undefined";
        }
        else {
            result = arr1.reduce(divide2);
            document.getElementById('io').value = Math.round(result * 1000)/1000;
        }
    }
    arr1=[];
    arr2=[];
    x = 0;
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
    x = 0;
    result = '';
    document.getElementById('io').value = '';
}
