let input=document.querySelector("input");
function addVal(val){
    input.value += val;
}
function Clear(){
    input.value = "";
}
function delVal(){
    input.value= input.value.slice(0,input.value.length - 1);
}
function Calculate(){
   input.value = eval(input.value);
}