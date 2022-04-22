
const cardForm = document.querySelector('.card-form')
const cardResult = document.querySelector('.card-result')
const submitBtn = document.querySelector('.submit-btn')
const voteForm = document.getElementById('vote-form')
const showVote = document.getElementById('show-vote')

console.log(voteForm)

// function submitForm (e) {
//     e.preventDefault(); 

// }
voteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const vaote = document.querySelector('input[name="vote"]:checked').value;
    showVote.innerText = vaote; 
    cardForm.classList.add('hide'); 
    cardResult.classList.add('show'); 
    // console.log(vaote)
})

// submitBtn.addEventListener('click', (e) => {
//     e.preventDefault();

//     // when submiting form
//     cardForm.classList.add('hide'); 

//     cardResult.classList.add('show'); 
// })
    
