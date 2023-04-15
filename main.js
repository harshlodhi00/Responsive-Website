window.addEventListener("scroll" , () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 80 )
})


const plusButton = document.getElementById("icon-faq-plus")


const questions = document.querySelectorAll(".faq-small-container")

questions.forEach(function(question){
    const plusBtn = question.querySelector(".icon-faq-plus")
    const faqQuestion = question.querySelector('.faq-question');
    const minusBtn = question.querySelector(".icon-faq-minus")
    plusBtn.addEventListener("click", function(){
        faqQuestion.classList.toggle('open');
        minusBtn.classList.toggle('open')
        plusBtn.classList.toggle('open')
    })

    minusBtn.addEventListener("click",function(){
        faqQuestion.classList.remove('open');
        minusBtn.classList.toggle('open')
        plusBtn.classList.toggle('open')
    })



})


 


