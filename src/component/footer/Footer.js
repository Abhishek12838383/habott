import React from 'react'
import logo from './logo1.png'
import sign from './© R Singhania.png'
import list from './List.png'

const Footer = () => {
  return (
    <div className=' bg-[#123557] w-[100%] h-[30vh] max-md:h-[40vh]'>
      
    <div className=' w-[90vw] border-1 border-[#ffffff] pt-[5vh] pl-[10vw] max-md:hidden'>
        <hr className=' text-[#ffffff]'/>
    </div>

<div className=' flex items-center justify-between pl-[10vw] pr-[10vw] pt-[5vh] max-md:block max-md:pl-[20vw]'>

<div className=' pt-[10px]'>
    <img src={logo} alt=''/>
    <img className=' ml-[10px]' src={sign} alt=''/>
</div> 

<div className=' flex justify-between gap-[50px] pl-[5vw] pr-[10vw] max-md:pt-[20px]'>
    <ul className=' text-[#ffffff]'>
        <li className=' text-[16px] font-medium pb-[10px]'>Company </li>
        <li>About</li>
        <li>FAQ</li>
      
    </ul>
    <ul className=' text-[#ffffff]'>
        <li className=' text-[16px] font-medium pb-[10px]'>Terms </li>
        <li>Data privacy</li>
        <li>Terms</li>
        {/* <li>Accesebility</li> */}
      
    </ul>
    <ul className=' text-[#ffffff]'>
        <li className=' text-[16px] font-medium pb-[10px]'>Related </li>
        <li>Find Buyer</li>
        <li>Feedback</li>
      
    </ul>
</div>

<div className=' max-md:pt-[20px]'>
    <img src={list} alt=''/>
</div>


</div>

<div className=' w-[90vw] border-1 border-[#ffffff] pt-[5vh] pl-[10vw] max-md:hidden'>
        <hr className=' text-[#ffffff]'/>
    </div>

    </div>
  )
}

export default Footer
