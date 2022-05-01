// share btn
const shareBtn = document.querySelectorAll('.share-btn'); 
const sharLinks = document.querySelector('.share__links'); 

shareBtn.forEach(btn => {
    btn.addEventListener('click', e => {
        e.target.classList.toggle('active')
        sharLinks.classList.toggle('show')
    })
})
