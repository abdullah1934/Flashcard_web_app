let flashcards = [];
const addButton = document.getElementById('add');
const flashcardsContainer = document.getElementById('flashcards-container');
addButton.addEventListener('click', () => {
    const questionInput = document.getElementById('question').value;
    const answerInput = document.getElementById('answer');
    if (questionInput === '' || answerInput.value === '') {
        alert('Please fill in both fields.');
        return;
    }
    const flashcard = {
        question: questionInput,
        answer: answerInput.value,
        showAnswer: false
    };
    flashcards.push(flashcard);
    
    document.getElementById('question').value = '';
    document.getElementById('answer').value = '';
    renderFlashcards();
});

function renderFlashcards() {
    flashcardsContainer.innerHTML = ''; 
    flashcards.forEach((flashcard, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        if (flashcard.showAnswer) card.classList.add('flipped');
        const text = document.createElement('p');
        text.innerText = flashcard.showAnswer ? flashcard.answer : flashcard.question;
        card.appendChild(text);
        card.addEventListener('click', () => {
            flashcard.showAnswer = !flashcard.showAnswer;
            renderFlashcards();
        });

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.className = 'delete-button';

        deleteButton.addEventListener('click', (e) => {
            e.stopPropagation(); 
            flashcards.splice(index, 1);
            renderFlashcards();
        });
        card.appendChild(deleteButton);
        flashcardsContainer.appendChild(card);
    });
}
