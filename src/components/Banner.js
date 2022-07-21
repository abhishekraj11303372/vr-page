import React from 'react';

import User from './Users'

import Img from '../assets/img/banner-img.png'

const Banner = () => {
  return <section>
    <div className='container mx-auto'>
      <div>
        <div><h1>Let's Eplore <br/> Three-Dimension Visually</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut itaque modi ea maxime inventore doloremque? Numquam ipsa id pariatur consectetur dolor inventore illum, voluptatem sit optio tenetur minus illo necessitatibus?</p>
        </div>
        <div>image</div>
        <div>
          <button>Get it now</button>
          <a href='#'> Explore Device</a>
        </div>
        <div>
          <img src={Img} />
        </div>
      </div>
    </div>
  </section>;
};

export default Banner;
