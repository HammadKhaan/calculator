function number(value){
    var answer = document.getElementById("answer");
    answer.value += value; 
}

function clearField(){
    var answer = document.getElementById("answer");
    answer.value= ""
}
function calculate(){
    var answer = document.getElementById("answer")
    answer.value = eval(answer.value);
}