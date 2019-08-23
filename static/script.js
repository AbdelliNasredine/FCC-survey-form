/**
 *  author: Abdelli Nasredine
 *  description: Simple Survy form
 */
const survey_form = document.querySelector('form')
const questions = document.querySelectorAll('.question-container')
const nextBtn = document.getElementById('next')
const prevBtn = document.getElementById('previous')
const lastIndex = questions.length - 1
let currentIndex = 0
const isFirst = () => currentIndex == 0
const isLast = () => currentIndex === lastIndex
const isNext = () => questions[currentIndex + 1] != undefined
const isPrev = () => questions[currentIndex - 1] != undefined
const _switch = (current, next, fn, reverse = false) => {
    let tmp = reverse ? -1 : 1
    if (fn()) {
        current.classList.remove("active")
        next.classList.add("active")
        if(!isLast()) show(prevBtn)
        currentIndex += tmp;
    }
}
const hide = (...btns) => {
    console.log(btns);
    btns.forEach((btn) => btn.classList.add("not-visible"))
}
const show = (btn) => {
    btn.classList.remove("not-visible")
}

window.addEventListener('load', () => {

    // TODO : fix form submit on ENTER key (default form behaviour)

    nextBtn.addEventListener("click", (event) => {
        // input validation using HTML5 validation API
        if (!survey_form.checkValidity()) {
            survey_form.reportValidity();
            return
        }
        _switch(questions[currentIndex], questions[currentIndex + 1], isNext);
        if (isLast()) hide(nextBtn , prevBtn);
    });
    prevBtn.addEventListener("click", () => {
        _switch(questions[currentIndex], questions[currentIndex - 1], isPrev, true);
    });
})