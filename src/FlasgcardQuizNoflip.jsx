import React, { useState } from 'react';
import './App.css';

const flashcards = [
    // Math
    { subject: 'Math', question: 'What is 2 + 2?', answer: '4' },
    { subject: 'Math', question: 'What is 10 * 10?', answer: '100' },
    { subject: 'Math', question: 'What is the square root of 9?', answer: '3' },
    { subject: 'Math', question: 'What is 25 / 5?', answer: '5' },
    { subject: 'Math', question: 'What is 8 - 3?', answer: '5' },
    { subject: 'Math', question: 'What is 7 * 6?', answer: '42' },
    { subject: 'Math', question: 'What is 12 + 8?', answer: '20' },
    { subject: 'Math', question: 'What is 100 - 25?', answer: '75' },
    { subject: 'Math', question: 'What is the cube of 3?', answer: '27' },
    { subject: 'Math', question: 'What is 144 / 12?', answer: '12' },
    
    // Science
    { subject: 'Science', question: 'What planet is closest to the sun?', answer: 'Mercury' },
    { subject: 'Science', question: 'What is the chemical symbol for water?', answer: 'H2O' },
    { subject: 'Science', question: 'What gas do plants absorb?', answer: 'Carbon Dioxide' },
    { subject: 'Science', question: 'What is the hardest natural substance?', answer: 'Diamond' },
    { subject: 'Science', question: 'What is the speed of light?', answer: '299,792,458 meters per second' },
    { subject: 'Science', question: 'What element does "O" represent?', answer: 'Oxygen' },
    { subject: 'Science', question: 'What is the center of an atom called?', answer: 'Nucleus' },
    { subject: 'Science', question: 'What is the powerhouse of the cell?', answer: 'Mitochondria' },
    { subject: 'Science', question: 'What force keeps us on the ground?', answer: 'Gravity' },
    { subject: 'Science', question: 'How many bones are in the human body?', answer: '206' },
    
    // History
    { subject: 'History', question: 'Who was the first President of the United States?', answer: 'George Washington' },
    { subject: 'History', question: 'In what year did World War II end?', answer: '1945' },
    { subject: 'History', question: 'Who discovered America?', answer: 'Christopher Columbus' },
    { subject: 'History', question: 'What year did the Titanic sink?', answer: '1912' },
    { subject: 'History', question: 'Who was known as the Iron Lady?', answer: 'Margaret Thatcher' },
    { subject: 'History', question: 'What ancient civilization built the pyramids?', answer: 'Egyptians' },
    { subject: 'History', question: 'Who was the first man on the moon?', answer: 'Neil Armstrong' },
    { subject: 'History', question: 'What war was fought between the North and South in the US?', answer: 'Civil War' },
    { subject: 'History', question: 'Who was the Roman god of war?', answer: 'Mars' },
    { subject: 'History', question: 'Who was the first emperor of Rome?', answer: 'Augustus Caesar' },
    
    // Geography
    { subject: 'Geography', question: 'What is the capital of France?', answer: 'Paris' },
    { subject: 'Geography', question: 'Which continent is the Sahara Desert located on?', answer: 'Africa' },
    { subject: 'Geography', question: 'What is the longest river in the world?', answer: 'Nile' },
    { subject: 'Geography', question: 'What is the tallest mountain in the world?', answer: 'Mount Everest' },
    { subject: 'Geography', question: 'What country is also a continent?', answer: 'Australia' },
    { subject: 'Geography', question: 'What is the largest ocean on Earth?', answer: 'Pacific Ocean' },
    { subject: 'Geography', question: 'Which country has the most people?', answer: 'China' },
    { subject: 'Geography', question: 'What country is known for the Eiffel Tower?', answer: 'France' },
    { subject: 'Geography', question: 'Which desert is the largest hot desert?', answer: 'Sahara' },
    { subject: 'Geography', question: 'What country is home to the Amazon Rainforest?', answer: 'Brazil' },
    
    // Literature
    { subject: 'Literature', question: 'Who wrote "Romeo and Juliet"?', answer: 'William Shakespeare' },
    { subject: 'Literature', question: 'Who wrote "1984"?', answer: 'George Orwell' },
    { subject: 'Literature', question: 'What is the longest Shakespeare play?', answer: 'Hamlet' },
    { subject: 'Literature', question: 'Who wrote "The Great Gatsby"?', answer: 'F. Scott Fitzgerald' },
    { subject: 'Literature', question: 'Who wrote "Moby Dick"?', answer: 'Herman Melville' },
    { subject: 'Literature', question: 'What is the first Harry Potter book?', answer: 'The Philosopher\'s Stone' },
    { subject: 'Literature', question: 'Who wrote "Pride and Prejudice"?', answer: 'Jane Austen' },
    { subject: 'Literature', question: 'Who is the author of "The Catcher in the Rye"?', answer: 'J.D. Salinger' },
    { subject: 'Literature', question: 'Who wrote "To Kill a Mockingbird"?', answer: 'Harper Lee' },
    { subject: 'Literature', question: 'Who wrote "The Odyssey"?', answer: 'Homer' },
  ];

const FlashcardQuiz = () => {
  const [currentCard, setCurrentCard] = useState(0); // Track current flashcard
  const [showAnswer, setShowAnswer] = useState(false); // Control whether to show the answer or not

  const handleNextCard = () => {
    setShowAnswer(false);
    setCurrentCard((prevCard) => (prevCard + 1) % flashcards.length);
  };

  const handlePreviousCard = () => {
    setShowAnswer(false);
    setCurrentCard((prevCard) => (prevCard - 1 + flashcards.length) % flashcards.length);
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const currentFlashcard = flashcards[currentCard];

  return (
    <div className="Quiz">
      
      <div className="flashcard">
        <h2>{currentFlashcard.subject}</h2>
        <p>{currentFlashcard.question}</p>
        <br></br> <br></br>
        <button onClick={toggleAnswer}>{showAnswer ? 'Hide Answer' : 'Show Answer'}</button>
        {showAnswer && <p className="answer">{currentFlashcard.answer}</p>}
        <br></br>
      </div>
      <div className="controls">
        
        <button onClick={handlePreviousCard} disabled={currentCard === 0}>
          Previous
        </button>
        <button onClick={handleNextCard} disabled={currentCard === flashcards.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default FlashcardQuiz;
