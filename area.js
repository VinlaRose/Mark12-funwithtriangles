const side1 = document.querySelector('#input-side1');
const side2 = document.querySelector('#input-side2');
const side3 = document.querySelector('#input-side3');
const submitButton = document.querySelector('#submit-btn');
const showMsg = document.querySelector('#outputmsg');

function areaTriangle(){
var sd1 = Number(side1.value);
var sd2 = Number(side2.value);
var sd3 = Number(side3.value);

if((sd1+sd2>sd3)&&(sd3+sd2>sd1)&&(sd1+sd3>sd2)){
    var sideSum = (sd1 + sd2 + sd3)/2;

    var areaSquare = sideSum*(sideSum - sd1)*(sideSum - sd2)*(sideSum - sd3);
    
    var area = Math.sqrt(areaSquare).toFixed(3);
    
    console.log(area);
    
    showMsg.innerText = `Area of a triangle using heron's formula is ${area} units`;
}else{
    showMsg.innerText = `INVALID`;
}

 

}


submitButton.addEventListener("click", areaTriangle)