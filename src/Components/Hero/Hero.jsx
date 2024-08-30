import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  const handleScroll = () => {
    // Scroll down by 500 pixels (you can adjust the value)
    window.scrollBy({
      top: 500, // Adjust this value to scroll more or less
      behavior: 'smooth' // This ensures a smooth scrolling effect
    });
  };
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Empowering Minds, Transforming Futures</h1>
        <p>We prepare students to thrive in a dynamic global environment with a focus on real-world impact and lifelong learning.</p>
        <button onClick={handleScroll} className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
