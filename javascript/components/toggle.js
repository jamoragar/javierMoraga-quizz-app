const bookmarkBlack = './assets/imgs/bookmark_filled.png';
const bookmarkWhite = './assets/imgs/bookmark.png'

const bookmark = document.querySelector('[id="first-bookmark"]');
const answerButton = document.querySelector('[id="first-showAnswerButton"]')
const answerText = document.querySelector(['[id="first-answerText"]']);
let isBookmarkClicked = false;
let isAnswerButtonClicked = false;

// Bookmark behaviour.
bookmark.addEventListener('click', function(e) {
    const {target} = e;
    isBookmarkClicked = !isBookmarkClicked
    isBookmarkClicked ? target.setAttribute('src', bookmarkBlack) : target.setAttribute('src', bookmarkWhite)
});

// Answer button behaviour.
answerButton.addEventListener('click', function(){
    isAnswerButtonClicked = !isAnswerButtonClicked;
    isAnswerButtonClicked ? 
        (answerText.style.display = 'block', answerButton.textContent = 'Hide Answer')
        :
        (answerText.style.display = 'none', answerButton.textContent = 'Show Answer!');
    
})