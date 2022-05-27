let inputs = document.getElementById("inputs");
let answer = document.getElementById("answer");
function display(num){
    inputs.innerHTML += num;
    answer.innerHTML = '';
}

function ac(){
    answer.innerHTML = 0;
    inputs.innerHTML = '';
}
function calculate(){
    try{
        answer.innerHTML = eval(document.getElementById("inputs").innerHTML);
    }
    catch(err){
        answer.innerHTML = 'error';
    }
}

function empty(){
    inputs.innerHTML = '';
}

function del(){
    inputs.innerHTML =document.getElementById("inputs").innerHTML.slice(0,-1);
}