// Quizzes.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Quizzes.css';

const Quizzes = () => {
  const quizzesData = [
    {
      question: 'Question here',
      options: ['Answer 1', 'Answer 2', 'Answer 3'],
      correctAnswer: 'Solution',
    },
    {
      question: 'Question here',
      options: ['Answer 1', 'Answer 2', 'Answer 3'],
      correctAnswer: 'Solution',
    },
    {
      question: 'Question here',
      options: ['Answer 1', 'Answer 2', 'Answer 3'],
      correctAnswer: 'Solution',
    },
    {
      question: 'Question here',
      options: ['Answer 1', 'Answer 2', 'Answer 3'],
      correctAnswer: 'Solution',
    },
    {
      question: 'Question here',
      options: ['Answer 1', 'Answer 2', 'Answer 3'],
      correctAnswer: 'Solution',
    },
    {
      question: 'Question here',
      options: ['Answer 1', 'Answer 2', 'Answer 3'],
      correctAnswer: 'Solution',
    },
  ];

  const [userAnswers, setUserAnswers] = useState(Array(quizzesData.length).fill(null));

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleQuizSubmit = (e) => {
    e.preventDefault();

    // Check answers and calculate score
    const score = userAnswers.reduce((total, answer, index) => {
      return answer === quizzesData[index].correctAnswer ? total + 1 : total;
    }, 0);

    alert(`Your Quiz Score: ${score} out of ${quizzesData.length}`);
  };

  const handleOptionClick = (quizIndex, selectedOption) => {
    setUserAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[quizIndex] = selectedOption;
      return newAnswers;
    });
  };

  return (
    <div className="quizzes-container">
      <h2>Web Development Quizzes</h2>
      <form onSubmit={handleQuizSubmit}>
        <Slider ref={(slider) => (window.slider = slider)} {...settings}>
          {quizzesData.map((quiz, index) => (
            <div key={index} className="quiz-slide">
              <p>{quiz.question}</p>
              <ul>
                {quiz.options.map((option, optionIndex) => (
                  <li key={optionIndex} onClick={() => handleOptionClick(index, option)}>
                    <label className={userAnswers[index] === option ? 'selected' : ''}>
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Slider>
        <button type="submit">Submit Quiz</button>
      </form>
    </div>
  );
};

export default Quizzes;
