import React, { useState, useEffect, useRef } from 'react';
import css from "./Home.module.css"
const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideContainerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearTimeout(timer);
  }, [currentSlide, slides.length]);

  useEffect(() => {
    slideContainerRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
  }, [currentSlide]);

  return (
    <div className={`${css.carouselContainer} animate__animated animate__zoomIn`}>
      <div className={css.slideContainer} ref={slideContainerRef}>
        {slides.map((slide, index) => (
          <div key={index} className={css.slide}>
            <img src={slide} alt="" className='d-block w-100' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
