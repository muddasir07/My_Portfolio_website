import React, { useEffect } from 'react';
import { GithubOutlined } from '@ant-design/icons';
import { LinkedinOutlined } from '@ant-design/icons';
import { MailOutlined } from '@ant-design/icons';

const Main = () => {
    useEffect(() => {
        const nameContainer = document.getElementById('animationName');
        nameContainer.textContent = '';
        const nameText = 'Muddasir';
        const nameWords = nameText.split('');
    
        let currentNameIndex = 0;
        let animationInterval;
    
        const animateName = () => {
          if (currentNameIndex < nameWords.length) {
            nameContainer.textContent += nameWords[currentNameIndex];
            currentNameIndex++;
          } else {
            clearInterval(animationInterval);
          }
        };
    
        animationInterval = setInterval(animateName, 200);
    
        return () => {
          clearInterval(animationInterval); 
        };
      }, []);

    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p
                        className='uppercase text-sm tracking-widest text-white-600'
                        style={{ whiteSpace: 'pre-line' }}
                    >
                        Welcome to My Creative Odyssey!
                    </p>
                    <h1 className='py-4 text-white-700'>
                        Hi, I'm <span id="animationName" className='text-[#5651e5]'></span>
                    </h1>
                    <h1 className='py-2 text-white-700'> A <span className='text-[#5651e5]'>Full-Stack</span> Developer</h1>
                    <p className='py-4 text-white-600 max-w-[70%] m-auto'>
                        I'm a Full-Stack web developer specializing in building and
                        occasionally designing exceptional digital experiences using Next and React technology. 
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <a href="https://www.linkedin.com/in/muddasir-shabbir-7a5a2b200/">
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <LinkedinOutlined />
                            </div>
                        </a>
                        <a href="https://github.com/muddasir07">
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <GithubOutlined />
                            </div>
                        </a>
                        <a href="mailto:muddasirshabbir59@gmail.com">
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <MailOutlined />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
