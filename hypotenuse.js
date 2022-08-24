const side1 = document.querySelector('#input-side1');
const side2 = document.querySelector('#input-side2');
const submitButton = document.querySelector('#submit-btn');
const showMsg = document.querySelector('#outputmsg');

submitButton.addEventListener("click", hypotenuseFind);

function hypotenuseFind(){
    if(side1.value === "" || side2.value === ""){
        showMsg.innerText = 'Enter all fields';
    }else{
        var sqrSum = Math.pow(side1.value,2) + Math.pow(side2.value,2);
        var hypo = Math.sqrt(sqrSum).toFixed(3);
        console.log(hypo);
        showMsg.innerText = `Hypotenuse of the triangle  is ${hypo} units`;
    }
   
}