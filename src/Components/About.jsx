import React from 'react'
import about from '../assets/robo.png'
import Text from './Text'
const About = () => {
  return (
    <div id="about" className='flex justify-center px-16 py-8 mt-8 items-center'>
        <img src={about} alt="robo" />
        <div>
            <Text text='How it works' />
            <p className='text-gray-300 max-w-3xl'>Our AI chatbot will quickly analyze your query and provide precise, relevant advice tailored to your needs. If you have legal documents that require summarization, upload them directly through our platform. Within moments, you’ll receive a clear and concise summary highlighting the key points of the document.</p>
        </div>
    </div>
  )
}

export default About