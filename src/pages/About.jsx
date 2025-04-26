import React from 'react';
import { Download } from 'lucide-react';
import { FaGithub } from "react-icons/fa6";

const About = () => {
  return (
    <div className="p-4">
      <div className='flex justify-between items-center'>
        <h1 className='text-white text-xl sm:text-2xl md:text-3xl mb-6'>👋 About Me</h1>
        <a 
          className='block md:hidden bg-yellow-500 hover:bg-yellow-400 transition px-4 py-1.5 mb-6 text-black font-medium rounded-full' 
          href="/"
        >
          Home
        </a>     
      </div>
      
      <p className="text-[#c6c6c6] text-sm sm:text-base md:text-[17px] text-balance">
        Hi, I’m Anuj Belsare, an Electronics and Computer Engineering student who loves
        building websites and web apps. I mainly work with React, Node.js, and MongoDB,
        and I enjoy creating clean, responsive user experiences. Web development is my
        main focus right now, but I’m also exploring mobile apps and AI out of interest.
        I like learning new things and turning ideas into real projects. 🚀
      </p>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap sm:p-4 gap-4">
        {/* Download CV Button */}
        <a
          href="/path-to-cv.pdf"
          download
          className="flex items-center justify-center border-2 border-[#c6c6c6] rounded-full py-3 px-4 w-full sm:w-[200px] text-sm font-medium text-[#c6c6c6] hover:bg-[#c6c6c6] hover:text-[#1d1d1d] transition duration-500 ease-in-out gap-2"
        >
          Download my CV
          <Download size={16} strokeWidth={2.2} />
        </a>

        {/* GitHub Button */}
        <a
          href="https://github.com/DevilPaddy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center border-2 border-[#c6c6c6] bg-[#c6c6c6] rounded-full py-3 px-4 w-full sm:w-[200px] text-sm font-medium text-[#1d1d1d] hover:bg-[#e3e3e3]/10 hover:text-[#c6c6c6] transition duration-500 ease-in-out gap-2"
        >
          GitHub Link
          <FaGithub className="text-xl" />
        </a>
      </div>

{/* skills section */}
      <div className="skills mb-2">
        <h6 className='mt-6 text-lg font-medium text-[#ffff]'>🛠️ Skills:</h6>
        <div className="skills_para ml-6">
          <p className='text-[#c6c6c6] text-sm sm:text-base'>-Frontend: React, Tailwind CSS, DaisyUI</p>
          <p className='text-[#c6c6c6] text-sm sm:text-base'>-Backend: Node.js, Express.js</p>
          <p className='text-[#c6c6c6] text-sm sm:text-base'>-Database: MongoDB</p>
          <p className='text-[#c6c6c6] text-sm sm:text-base'>-Languages: C, Python, JavaScript</p>
        </div>
      </div>

{/* Education section */}
      <div className="edu mb-8">
        <h6 className='mt-8 text-lg font-medium text-[#ffff] mb-2'>🏫 Education:</h6>
        <div className="ml-6 edu_graduation mb-1.5">
          <p className='text-[#c6c6c6] text-sm sm:text-base'>B.Tech in Electronics and Computer Engineering</p>
          <p className='text-[#929292] text-xs sm:text-base'>MIT CNS, Chh.Sambhajinagar</p>
          <p className='text-[#929292] text-[8px] sm:text-base'>2022 – Present</p>
        </div>
        <div className="ml-6 edu_12 mb-1.5">
          <p className='text-[#c6c6c6] text-sm sm:text-base'>Higher Secondary (12th Grade)</p>
          <p className='text-[#929292] text-xs sm:text-base'>Mahatma Fule jr. college, Warud</p>
        </div>
        <div className="ml-6 edu_10 mb-1.5">
          <p className='text-[#c6c6c6] text-sm sm:text-base'>Secondary School (10th Grade)</p>
          <p className='text-[#929292] text-xs sm:text-base'>NTR High School, Warud</p>
        </div>
      </div>

    </div>
  );
};

export default About;
