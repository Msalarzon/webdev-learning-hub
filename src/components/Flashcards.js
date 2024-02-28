// Flashcards.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Flashcards = () => {
  const flashcardsData = [
    {
      question: 'What does HTML stand for?',
      answer: 'HyperText Markup Language',
    },
    {
      question: 'What is the main purpose of CSS?',
      answer: 'To style and layout web pages',
    },
    {
      question: 'What is JavaScript used for in web development?',
      answer: 'To add interactivity and dynamic content',
    },
    {
      question: 'What is the purpose of the <head> element in HTML?',
      answer: 'To contain meta-information about the document',
    },
    {
      question: 'What does the term "responsive design" mean?',
      answer: 'Designing a website to work on various devices and screen sizes',
    },
    // Add more flashcards as needed
  ];

  const [showGallery, setShowGallery] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const toggleGallery = () => {
    setShowGallery(!showGallery);
  };

  return (
    <div>
      <h2>Web Development Flashcards</h2>
      <button onClick={toggleGallery}>
        {showGallery ? 'Close Gallery' : 'Open Gallery'}
      </button>
      {showGallery && (
        <Slider {...settings}>
          {flashcardsData.map((card, index) => (
            <div key={index}>
              <h3>Question</h3>
              <p>{card.question}</p>
              <h3>Answer</h3>
              <p>{card.answer}</p>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Flashcards;
