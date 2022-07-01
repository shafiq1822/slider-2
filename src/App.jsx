import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight, faQuoteRight } from 'react-icons/fa';
import data from './data'


const App = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    const initialIndex = 0;
    if (index < initialIndex) {
      setIndex(lastIndex);
    } else if (index > lastIndex) {
      setIndex(initialIndex)
    }
  }, [people, index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index + 1)
    }, 2500);
    return () => clearInterval(interval)
  });

  return (
    <section className="section">
      <div className="title">
        <h2><span>/</span> Testimonials </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide'
          } else if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'prevSlide';
          }
          return (
            <article key={id} className={position}>
              <img src={image} alt={title} className='person-img' />
              <h4 className='name'>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className='quote' />
            </article>
          )
        })};
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default App
