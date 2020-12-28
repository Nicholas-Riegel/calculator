document.getElementById('zero').addEventListener('click', function(){setUnit(0)});

document.getElementById('1').addEventListener('click', function(){setUnit(1)});

document.getElementById('2').addEventListener('click', function(){setUnit(2)});

document.getElementById('3').addEventListener('click', function(){setUnit(3)});

document.getElementById('4').addEventListener('click', function(){setUnit(4)});

document.getElementById('5').addEventListener('click', function(){setUnit(5)});

document.getElementById('6').addEventListener('click', function(){setUnit(6)});

document.getElementById('7').addEventListener('click', function(){setUnit(7)});

document.getElementById('8').addEventListener('click', function(){setUnit(8)});

document.getElementById('9').addEventListener('click', function(){setUnit(9)});

document.getElementById('ac').addEventListener('click', ac);

let arr1 = [];
let str1 = '';

// function clear

function ac(){
    arr1 = [];
    str1 = '';
    document.getElementById('io').value = str1;
}

// function enter numbers

function setUnit(num){
    arr1.push(num);
    str1 = arr1.join('');
    document.getElementById('io').value = str1;
};
