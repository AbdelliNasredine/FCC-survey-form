const questions = document.querySelectorAll('.question-container');
const nextBtn = document.getElementById('next')
const prevBtn = document.getElementById('previous');
const questionsCount = questions.length;
let curentIndex = 0;

function next(event) {
    console.log('next')
}

function prev(event) {
    console.log('prev')
}

if (curentIndex === 0) {

}
nextBtn.addEventListener("click", next(event));
prevBtn.addEventListener("click", prev(event));
console.log(questions[4], nextBtn, prevBtn);