function checkAnswer(params) {
    let correcAnswer = '4';
    let userAnswer = document.querySelector("input[name=quiz]:checked");
    if (userAnswer === correcAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";   
    }
    else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!.";
}
}
    
document.getElementById("submit-answer").addEventListener('click', checkAnswer)