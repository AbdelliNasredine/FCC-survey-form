const questions = document.querySelectorAll('.question-container');
const nextBtn = document.getElementById('next')
const prevBtn = document.getElementById('previous');
const lastIndex = questions.length - 1;
let currentIndex = 0;
const isNext = () => questions[currentIndex + 1] != undefined;
const isPrev = () => questions[currentIndex - 1] != undefined;
const _switch = (current, next) => {
    current.classList.remove("active");
    next.classList.add("active");
}

nextBtn.addEventListener("click", () => {
    if(isNext()){
        _switch(questions[currentIndex] , questions[currentIndex + 1]);
        currentIndex++;
    }
    console.log(currentIndex);
});

prevBtn.addEventListener("click", () => {
    if(isPrev()){
        _switch(questions[currentIndex] , questions[currentIndex - 1]);
        currentIndex--;
    }
    console.log(currentIndex);
});
// console.log(questions, nextBtn, prevBtn);