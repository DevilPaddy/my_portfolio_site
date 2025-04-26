import React from 'react'

const AboutIdea = () => {
  return (
    <div className="p-4 h-screen">
        <div className='flex justify-between items-center'>
        <h1 className='text-white text-xl sm:text-2xl md:text-3xl mb-6'>💡 About the idea</h1>
        <a 
          className='block md:hidden bg-yellow-500 hover:bg-yellow-400 transition px-4 py-1.5 mb-6 text-black font-medium rounded-full' 
          href="/"
        >
          Home
        </a>     
      </div>

        <p className="text-[#c6c6c6] text-sm sm:text-base md:text-[17px] text-balance">
        The design of this portfolio is inspired by the notes app on my phone.
        I liked its simple and clean layout and thought it would be a unique 
        and minimal style for a portfolio. Instead of following common designs, 
        I decided to replicate the look of a notes app to make my portfolio stand out.
        </p>

        <h6 className='text-white sm:text-2xl md:text-3xl mt-8 mb-2.5'>🙏 Thank You </h6>
        <p className='text-[#c6c6c6] text-sm sm:text-base md:text-[17px]  text-balance'>Thanks for visiting and checking out my work! I appreciate your time.</p>


    </div>
  )
}

export default AboutIdea