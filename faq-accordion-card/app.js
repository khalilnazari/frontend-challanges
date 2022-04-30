
const faq_card_question = document.querySelectorAll('.faq-card__question'); 
faq_card_question.forEach(question => {
    question.addEventListener('click', e => {
        // close all questions
        faq_card_question.forEach(ele => {
            ele.closest('.faq-card__item').children[1].classList.remove('show')
            ele.classList.remove('opened')
            
        })

        // get parent
        const parent = e.target.closest('.faq-card__item'); 
        // get children
        const question = parent.children[0]
        const answer = parent.children[1]
        
        answer.classList.add('show')
        question.classList.add('opened')
    })
})