import React from 'react';

import Img1 from '../assets/img/exp-img1.png'
import Img2 from '../assets/img/exp-img2.png'

const Experience = () => {
  return (
    <section className='mb-12 lg:mb-24'>
    <div className='container mx-auto'>
      <div className='flex flex-col min-h-[480px] lg:space-x-20 lg:flex-row'>
        <div className='flex-1 flex space-x-6 items-center lg:space-x-12'> 
          <div className='self-start' data-aos='fade-down' data-offset='400'>
            <img src={Img1} alt='' />
          </div>
          <div className='self-end' data-aos='fade-up' data-offset='400'>
            <img src={Img2} alt='' />
          </div>
        </div>
        <div className='flex-1 flex-col items-start justify-center mt-6 lg:mt-12' data-aos='fade-left' data-offset='400'>
            <h2 className='text-3xl font-bold mb-6 '>New Experience in Playing Games</h2>
            <p className='font-secondary mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut itaque modi ea maxime inventore doloremque? Numquam ipsa id pariatur consectetur dolor inventore illum, voluptatem sit optio tenetur minus illo necessitatibus? </p>
            <button className='btn'>Get it now</button>
          </div>
      </div>
    </div>
  </section>
  );
};

export default Experience;
