import React from 'react';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-8 pt-0 flex items-center py-40'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <h2 className='text-[#5651e5]' >Who I Am</h2>
          <p className='py-2 text-white-600'> Meet your Dedicated Developer and Digital Wizard!  </p>
          <p className='py-2 text-white-600' style={{ whiteSpace: 'pre-line' }}>
            I thrive on challenges and lead the way with a passion for achieving goals.{"\n"}
            <strong className='text-[#5651e5]'>Teamwork?</strong> {"\n"}Absolutely my forte! With a solid grip on HTML/CSS, EcmaScript, React, Next, 
            and JQuery, I'm your go-to for web magic. {"\n"}As a freelancer with over a year's experience, 
            I've got your programming and design needs covered.{"\n"}{"\n"}
            <strong>Let's make your digital dreams a reality!</strong>
          </p>
          <p className='py-2 text-purple-600 underline cursor-pointer'>Check out my latest projects </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <img className='rounded-xl ' src='https://miro.medium.com/v2/resize:fit:720/1*zVnWJtyGOX_kUIDm6ccCfQ.gif' alt=''/>
        </div>
      </div>
    </div>
  );
}

export default About;
