import React from 'react'
import man from '../assets/man.png'
import woman from '../assets/woman.png'
import Text from './Text'

const Testimonials = () => {
  return (
    <div className='mx-12 py-8'>
        <div className='text-center py-8 px-8'>
        <Text text='Testimonials' />
        <p className=" text-white mx-auto max-w-3xl">
        Transforming Legal Assistance with AI Get instant legal advice and document summaries with our advanced AI chatbot. Whether you need help with civil, criminal, corporate, or family law, Legal Mind Assist is here to guide you through every step.
        </p>
        </div>
        <div className='max-w-5xl mx-auto'>
          <Commenter image={man} comment="Legal Mind Assist has been a game-changer for me. I received quick and accurate advice that saved me both time and money." author="KAP Silva - HR Manager" />
          <Commenter image={woman} comment="As a small business owner, the document summarization feature has been incredibly helpful in understanding complex legal texts." author="Shenali Gamage - Software Developer" />
        </div>
    </div>
  )
}

export default Testimonials


export const Commenter = ({image ,comment , author}) => {
  return (
    <div className=' max-w-6xl mx-12 px-8'>
    <div className='flex gap-8 items-center'>
        <img src={image} alt="commenter" className='w-32' />
        <p className='bg-clip-text font-abeezee text-transparent bg-no-repeat bg-gradient-to-r from-[#FFC446]  to-white text-xl'>"{comment}"</p>
    </div>
    <h1 className='text-lg text-gray-400 flex justify-end font-thin'>{author}</h1>
</div>
  )
}
