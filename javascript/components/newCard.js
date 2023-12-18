const bookmarkBlack = './assets/imgs/bookmark_filled.png';
const bookmarkWhite = './assets/imgs/bookmark.png'
const form = document.querySelector('[data-js="questionsForm"]');
const container = document.querySelector('[data-js="container"]')
const textareas = document.querySelectorAll('.newCard__textarea');

let newCardCount = 1;

function setupCharacterCounter(textareaId) {
    const textarea = document.getElementById(textareaId);
    const charCount = document.querySelector(`[data-js="${textareaId}"]`);

    textarea.addEventListener('input', function() {
      const count = 150 - textarea.value.length;
      charCount.textContent = `${count} characters left.`;
    });
  }

textareas.forEach(textarea => {
  const textareaId = textarea.id;
  setupCharacterCounter(textareaId);
});

form.addEventListener('submit', function(e){
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  const {questions, answer, tags} = data;
  createNewCard(questions, answer, tags)

  form.reset();
})

container.addEventListener('click', function(e){
  if (e.target.classList.contains('card__bookmark')) {
    handleBookmarkColor(e);
  }
  if(e.target.classList.contains('card__button')){
    handleAnswerButton(e);
  }
})

function handleBookmarkColor(event){
  const clickedBookmark = event.target;

  const currentSrc = clickedBookmark.getAttribute('src');
  const newSrc = currentSrc === bookmarkWhite ? bookmarkBlack : bookmarkWhite;
  
  clickedBookmark.setAttribute('src', newSrc);
}

function handleAnswerButton(event){
  const clickedButton = event.target;

  const currentDisplayedText = clickedButton.closest('.card');
  const buttonText = currentDisplayedText.querySelector('.card__button');
  const answerTextElement = currentDisplayedText.querySelector('.card__text')
  answerTextElement.style.display === 'block' ? 
    (answerTextElement.style.display ='none', buttonText.textContent = 'Show Answer!')
    :
    (answerTextElement.style.display ='block', buttonText.textContent = 'Hide Answer');

}

function createNewCard(question, answer, tag){
  const container = document.querySelector('[data-js="container"]');
  // New card element container.
  const newCard = document.createElement('div');
  newCard.classList.add('card');
  // H2 card question.
  const newCardTitle = document.createElement('h2')
  newCardTitle.classList.add('card__title');
  newCardTitle.textContent = question;
  // right top corner bookmark image.
  const newCardBookmark = document.createElement('img');
  newCardBookmark.classList.add('card__bookmark');
  newCardBookmark.setAttribute('src', bookmarkWhite);
  newCardBookmark.setAttribute('id', `${newCardCount}-bookmarkImg`);
  // Button 'show/hide answer'.
  const newCardButton = document.createElement('button');
  newCardButton.classList.add('card__button');
  newCardButton.setAttribute('id', `${newCardCount}-showAnswerButton`);
  newCardButton.textContent = "Show Answer!";
  // Answer text
  const newCardAnswer = document.createElement('div');
  newCardAnswer.classList.add('card__text');
  newCardAnswer.setAttribute('id', `${newCardCount}-answerText`);
  newCardAnswer.textContent = answer;
  // Questions Tags container.
  const newCardTagsContainer = document.createElement('div');
  newCardTagsContainer.classList.add('card__tags');
  // Question Tag.
  const newCardTag = document.createElement('div');
  newCardTag.classList.add('card__tag');
  newCardTag.textContent = `#${tag}`;

  newCardTagsContainer.append(newCardTag);

  newCard.append(newCardTitle);
  newCard.append(newCardBookmark);
  newCard.append(newCardButton);
  newCard.append(newCardAnswer);
  newCard.append(newCardTagsContainer);

  container.appendChild(newCard)

  newCard.scrollIntoView({ behavior: 'smooth', block: 'end' });


  newCardCount++;
}