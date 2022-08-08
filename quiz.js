const formResult = document.querySelector('.form-result');
const submitButton = document.querySelector('#submit');
const finalOutput = document.querySelector('#output');
const answers = ["3", "55°"];
 
function finalResult(){
    let score = 0;
    let index = 0;
    const results = new FormData(formResult);
    
    for(let entry of results.values()){
        if(entry === answers[index]){
            score = score+1;
        }
        index = index+1;
    }
    finalOutput.innerText = score;

}


submitButton.addEventListener("click", finalResult);