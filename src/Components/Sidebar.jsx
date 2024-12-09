// components/Sidebar.js
import React from 'react';
import { IoMenu } from "react-icons/io5";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className="bg-black pb-12 rounded-lg border-2 border-white">
       <div className=' mt-6 flex justify-end p-5'>
         <IoMenu onClick={toggleSidebar} className='text-white text-4xl'/>
       </div>
      <div className='px-8 mt-12'>
          <ButtonSide toggleSidebar={toggleSidebar} text='New Chat'/>
          <ButtonSide toggleSidebar={toggleSidebar} text='Recent Chat'/>
          <ButtonSide toggleSidebar={toggleSidebar} text='Summerize'/>
          <ButtonSide toggleSidebar={toggleSidebar} text='Leagal Advice'/>
          <ButtonSide toggleSidebar={toggleSidebar} text='Sample Copy for..'/>
      </div>
    </div>
  );
};

export default Sidebar;



export const ButtonSide = (
    { toggleSidebar ,text}
) => {
  return (
    <div className='my-3'>
         <button onClick={toggleSidebar} className=' mx-auto py-3 px-3 w-full rounded-lg bg-black text-white'>{text}</button>
    </div>
  )
}

