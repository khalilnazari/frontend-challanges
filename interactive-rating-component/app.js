
const cardForm = document.querySelector('.card-form')
const cardResult = document.querySelector('.card-result')
const voteForm = document.getElementById('vote-form')
const showVote = document.getElementById('show-vote')

// when submitting the form.
voteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const vote = document.querySelector('input[name="vote"]:checked').value;
    showVote.innerText = vote; 
    cardForm.classList.add('hide'); 
    cardResult.classList.add('show'); 
})
