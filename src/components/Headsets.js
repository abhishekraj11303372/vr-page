import React from 'react';

import Headset1 from '../assets/img/headset-1.png' 
import Headset2 from '../assets/img/headset-2.png' 
import Headset3 from '../assets/img/headset-3.png' 
import Headset4 from '../assets/img/headset-4.png'

const Headsets = () => {
  return (
    <section className='py-12 lg:py-24 '>
       <div className='container mx-auto'>
          <h2 className='text-3xl font-bold mb-6'>Mixed Reality Headsets</h2>
          <div className='grid gap-y-4 lg:grid-cols-2 lg:gap-9'>
           <div className='relative'>
             <img src={Headset1} alt='' />
             <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
               <h4 className='font-semibold text-xl mb-2'>Metaverse</h4>
               <p className='font-secondary mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut itaque modi ea maxime inventore doloremque? Numquam ipsa id pariatur consectetur dolor inventore illum, voluptatem sit optio tenetur minus illo necessitatibus? </p>
             </div>
           </div>
           <div className='relative'>
             <img src={Headset2} alt='' />
             <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
               <h4 className='font-semibold text-xl mb-2'>AIoT</h4>
               <p className='font-secondary mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut itaque modi ea maxime inventore doloremque? Numquam ipsa id pariatur consectetur dolor inventore illum, voluptatem sit optio tenetur minus illo necessitatibus? </p>
             </div>
           </div>
           <div className='relative'>
             <img src={Headset3} alt='' />
             <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
               <h4 className='font-semibold text-xl mb-2'>Hololens</h4>
               <p className='font-secondary mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut itaque modi ea maxime inventore doloremque? Numquam ipsa id pariatur consectetur dolor inventore illum, voluptatem sit optio tenetur minus illo necessitatibus? </p>
             </div>
           </div>
           <div className='relative'>
             <img src={Headset4} alt='' />
             <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
               <h4 className='font-semibold text-xl mb-2'>TPCASTT</h4>
               <p className='font-secondary mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut itaque modi ea maxime inventore doloremque? Numquam ipsa id pariatur consectetur dolor inventore illum, voluptatem sit optio tenetur minus illo necessitatibus? </p>
             </div>
           </div>
          </div>
       </div>
    </section>
  );
};

export default Headsets;
