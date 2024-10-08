import { useState } from 'react'

{/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */}

import './App.css'
import FlashcardQuiz from './FlashcardQuiz'

      
const App = () => {

return (
  <div className="App">
    <h1>Welcome to our Learning Quiz Platform !</h1>
    <h5>Your ultimate destination for fun, interactive, and educational quizzes! Whether you're here to sharpen your skills, challenge your knowledge, or simply learn something new, this platform offers a wide range of topics to explore. From math and science to history and literature, our flashcards and quizzes are designed to make learning engaging and enjoyable.
    Ready to test your knowledge? </h5>

    <FlashcardQuiz />
  </div>
)
}

export default App
