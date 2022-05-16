let btn1=document.querySelector("#btn1");

btn1.addEventListener('click',() => {
let exampleFormControlInput2= document.querySelector('#exampleFormControlInput2').value;
let inputGroupSelect01= document.querySelector('#inputGroupSelect01').value;
let exampleFormControlInput1= document.querySelector('#exampleFormControlInput1').value;

if (exampleFormControlInput2 != 2000 || inputGroupSelect01 != 0.2 || exampleFormControlInput1 != 5){
    alert('Not valid')
    return
}

let total = (exampleFormControlInput2 * inputGroupSelect01) / exampleFormControlInput1;



document.getElementById('output').value = total;

})