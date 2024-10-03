import React, { useState } from 'react';
import './App.css';

const flashcards = [
    // Math
    { subject: 'Math', question: 'What is 2 + 2?', answer: '4', color: '#FF5733' },
    { subject: 'Math', question: 'What is 10 * 10?', answer: '100', color: '#FF5733' },
    { subject: 'Math', question: 'What is the square root of 9?', answer: '3', color: '#FF5733' },
    { subject: 'Math', question: 'What is 25 / 5?', answer: '5', color: '#FF5733' },
    { subject: 'Math', question: 'What is 8 - 3?', answer: '5', color: '#FF5733' },
    { subject: 'Math', question: 'What is 7 * 6?', answer: '42', color: '#FF5733' },
    { subject: 'Math', question: 'What is 12 + 8?', answer: '20', color: '#FF5733' },
    { subject: 'Math', question: 'What is 100 - 25?', answer: '75', color: '#FF5733' },
    { subject: 'Math', question: 'What is the cube of 3?', answer: '27', color: '#FF5733' },
    { subject: 'Math', question: 'What is 144 / 12?', answer: '12', color: '#FF5733' },
    
    // Science
    { subject: 'Science', question: 'What planet is closest to the sun?', answer: 'Mercury', color: '#33A1FF' },
    { subject: 'Science', question: 'What is the chemical symbol for water?', answer: 'H2O', color: '#33A1FF' },
    { subject: 'Science', question: 'What gas do plants absorb?', answer: 'Carbon Dioxide', color: '#33A1FF' },
    { subject: 'Science', question: 'What is the hardest natural substance?', answer: 'Diamond', color: '#33A1FF' },
    { subject: 'Science', question: 'What is the speed of light?', answer: '299,792,458 meters per second' },
    { subject: 'Science', question: 'What element does "O" represent?', answer: 'Oxygen', color: '#33A1FF' },
    { subject: 'Science', question: 'What is the center of an atom called?', answer: 'Nucleus', color: '#33A1FF' },
    { subject: 'Science', question: 'What is the powerhouse of the cell?', answer: 'Mitochondria', color: '#33A1FF' },
    { subject: 'Science', question: 'What force keeps us on the ground?', answer: 'Gravity', color: '#33A1FF' },
    { subject: 'Science', question: 'How many bones are in the human body?', answer: '206', color: '#33A1FF' },
    
    // History
    { subject: 'History', question: 'Who was the first President of the United States?', answer: 'George Washington', color: '#28B463' },
    { subject: 'History', question: 'In what year did World War II end?', answer: '1945', color: '#28B463' },
    { subject: 'History', question: 'Who discovered America?', answer: 'Christopher Columbus', color: '#28B463' },
    { subject: 'History', question: 'What year did the Titanic sink?', answer: '1912', color: '#28B463' },
    { subject: 'History', question: 'Who was known as the Iron Lady?', answer: 'Margaret Thatcher', color: '#28B463' },
    { subject: 'History', question: 'What ancient civilization built the pyramids?', answer: 'Egyptians', color: '#28B463' },
    { subject: 'History', question: 'Who was the first man on the moon?', answer: 'Neil Armstrong', color: '#28B463' },
    { subject: 'History', question: 'What war was fought between the North and South in the US?', answer: 'Civil War', color: '#28B463' },
    { subject: 'History', question: 'Who was the Roman god of war?', answer: 'Mars', color: '#28B463' },
    { subject: 'History', question: 'Who was the first emperor of Rome?', answer: 'Augustus Caesar', color: '#28B463' },
    
    // Geography
    { subject: 'Geography', question: 'What is the capital of France?', answer: 'Paris', color: '#9B59B6' },
    { subject: 'Geography', question: 'Which continent is the Sahara Desert located on?', answer: 'Africa', color: '#9B59B6' },
    { subject: 'Geography', question: 'What is the longest river in the world?', answer: 'Nile', color: '#9B59B6' },
    { subject: 'Geography', question: 'What is the tallest mountain in the world?', answer: 'Mount Everest', color: '#9B59B6' },
    { subject: 'Geography', question: 'What country is also a continent?', answer: 'Australia', color: '#9B59B6' },
    { subject: 'Geography', question: 'What is the largest ocean on Earth?', answer: 'Pacific Ocean', color: '#9B59B6' },
    { subject: 'Geography', question: 'Which country has the most people?', answer: 'China', color: '#9B59B6' },
    { subject: 'Geography', question: 'What country is known for the Eiffel Tower?', answer: 'France', color: '#9B59B6' },
    { subject: 'Geography', question: 'Which desert is the largest hot desert?', answer: 'Sahara', color: '#9B59B6' },
    { subject: 'Geography', question: 'What country is home to the Amazon Rainforest?', answer: 'Brazil', color: '#9B59B6' },
    
    // Literature
    { subject: 'Literature', question: 'Who wrote "Romeo and Juliet"?', answer: 'William Shakespeare', color: '#065d65' },
    { subject: 'Literature', question: 'Who wrote "1984"?', answer: 'George Orwell', color: '#065d65' },
    { subject: 'Literature', question: 'What is the longest Shakespeare play?', answer: 'Hamlet', color: '#065d65' },
    { subject: 'Literature', question: 'Who wrote "The Great Gatsby"?', answer: 'F. Scott Fitzgerald', color: '#065d65' },
    { subject: 'Literature', question: 'Who wrote "Moby Dick"?', answer: 'Herman Melville', color: '#065d65' },
    { subject: 'Literature', question: 'What is the first Harry Potter book?', answer: 'The Philosopher\'s Stone', color: '#065d65'},
    { subject: 'Literature', question: 'Who wrote "Pride and Prejudice"?', answer: 'Jane Austen', color: '#065d65'},
    { subject: 'Literature', question: 'Who is the author of "The Catcher in the Rye"?', answer: 'J.D. Salinger', color: '#065d65'},
    { subject: 'Literature', question: 'Who wrote "To Kill a Mockingbird"?', answer: 'Harper Lee', color: '#065d65'},
    { subject: 'Literature', question: 'Who wrote "The Odyssey"?', answer: 'Homer', color: '#065d65'},
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

      {/* this div block will handle card for answer and card for question, use css 3D to get the flip*/}
      <div className={`flashcard ${showAnswer ? 'flip' : ''}`} onClick={toggleAnswer}>
        <div className="front">
          <h2>{currentFlashcard.subject}</h2>
          <p>{currentFlashcard.question}</p> 
        </div>
        <div className="back" style={{ backgroundColor: currentFlashcard.color }} >
          <h2>Answer</h2>
          <p>{currentFlashcard.answer}</p>
        </div>
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
