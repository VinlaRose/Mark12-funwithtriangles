const angle1 = document.querySelector('#input-Angle1');
const angle2 = document.querySelector('#input-Angle2');
const angle3 = document.querySelector('#input-Angle3');
const submitButton = document.querySelector('#submit-btn');
const showMsg = document.querySelector('#outputmsg');

submitButton.addEventListener("click", isTriangle)

function isTriangle(){
   
    sumOfAngles = angleSum();
    if(sumOfAngles===180){
        
        console.log("it is a triangle");
        showMsg.innerText = "Yes, it is a triangle.";
        
    }else{
        console.log("it is not a triangle");
        showMsg.innerText = "No, it is not a triangle.";
    }

}

function angleSum(){
    var sum = Number(angle1.value) +  Number(angle2.value)+ Number(angle3.value);
    return sum;
}


