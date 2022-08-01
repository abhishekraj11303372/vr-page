import React from 'react';

import TestimonialSlider from '../components/TestimonialSlider'

const Testimonial = () => {
  return (
    <section className='mb-64 lg:mb-48'>
      <div className='container mx-auto'>
        <div className='bg-purple-400/10 max-h-[400px] p-12 rounded-lg'>
          <div className='text-center'> 
            <h2 className='text-3xl font-bold mb-6' data-aos='fade-up' data-offset='300' data-delay='1600'>What our clients say</h2>
            <p className='max-w-2xl mx-auto mb-12 lg:mb-24' data-aos='fade-up' data-offset='300' data-delay='1800'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deserunt! Nemo officiis doloremque, ipsa accusantium ullam odio. Blanditiis nostrum ut labore, nobis autem rem alias accusamus. Distinctio recusandae quibusdam consectetur?</p>
          </div>
          <div data-aos='fade-up' data-offset='300' data-delay='2000'>
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
