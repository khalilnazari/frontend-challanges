// share btn
const shareBtn = document.querySelector('.share-btn'); 
shareBtn.addEventListener('click', e => {
    e.target.classList.toggle('active')
    e.target.children[0].classList.toggle('show')
    // console.log()
})