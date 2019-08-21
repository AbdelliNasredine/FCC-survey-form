/**
 *  author: Abdelli Nasredine
 *  description: Simple Survy form
 */
const survey_form = document.querySelector('form');
const questions = document.querySelectorAll('.question-container');
const nextBtn = document.getElementById('next')
const prevBtn = document.getElementById('previous');
const lastIndex = questions.length - 1;
let currentIndex = 0;
const isFirst = () => currentIndex == 0;
const isLast = () => currentIndex === lastIndex;
const isNext = () => questions[currentIndex + 1] != undefined;
const isPrev = () => questions[currentIndex - 1] != undefined;
const _switch = (current, next, fn , reverse = false ) => {
    let tmp = reverse ? -1 : 1
    if (fn()) {
        current.classList.remove("active");
        next.classList.add("active");
        currentIndex += tmp;
    }
}
const hideBtns = () => {
    nextBtn.classList.add("not-visible");
    prevBtn.classList.add("not-visible");
}

window.addEventListener('load', () => {
    nextBtn.addEventListener("click", (event) => {
        if (!survey_form.checkValidity()) {
            survey_form.reportValidity();
        }else{
            _switch(questions[currentIndex], questions[currentIndex + 1] , isNext);
        }
        if (isLast()) hideBtns();
    });
    prevBtn.addEventListener("click", () => {
            _switch(questions[currentIndex], questions[currentIndex - 1] , isPrev , true);
    });
})