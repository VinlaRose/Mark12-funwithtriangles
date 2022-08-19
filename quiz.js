const formResult = document.querySelector('.form-result');
const submitButton = document.querySelector('#submit');
const finalOutput = document.querySelector('#output');
const answers = ["3", "55°","an exterior angle of a triangle is always greater than the opposite interior angles","ΔABC ≌ ΔRPQ","none of these","∠A = ∠D, ∠B = ∠E, ∠C = ∠F","ΔABC ≌ ΔQRP","50°, 50°"];
 
function finalResult(){
    let score = 1;
    let index = 0;
    const results = new FormData(formResult);
    
    for(let entry of results.values()){
        if(entry === answers[index]){
            score = score+1;
        }
        index = index+1;
    }
    finalOutput.innerText = score;
    console.log(score);

}


submitButton.addEventListener("click", finalResult);