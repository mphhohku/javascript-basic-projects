//using selectors inside the element
// traversing the dom

const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', function () {
        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove('show-text');
            }
        });
        question.classList.toggle('show-text');
    });
});


// altnerative way to select elements
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function (btn) { 
//     btn.addEventListener('click', function (e) {
//         const question = e.currentTarget.parentElement.parentElement;   // currentTarget is the element that the event listener is attached to, parentElement is the parent of the current element
//         console.log(e.currentTarget, e.currentTarget.parentElement, e.currentTarget.parentElement.parentElement);
//         question.classList.toggle('show-text');
//     });
// });


// draft
// const iconPlusBtn = document.querySelector('.plus-icon')
// const iconMinusBtn = document.querySelector('.minus-icon')
// const question = document.querySelector('.question')

// iconPlusBtn.addEventListener('click', function () {
//     iconPlusBtn.classList.toggle('show-text');
//     iconMinusBtn.classList.toggle('show-text');
//     question.classList.toggle('show-text');
// });

// iconMinusBtn.addEventListener('click', function () {
//     iconPlusBtn.classList.toggle('show-text');
//     iconMinusBtn.classList.toggle('show-text');
//     question.classList.toggle('show-text');
// });