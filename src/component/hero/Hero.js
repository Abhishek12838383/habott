import React from 'react'
import suit from './suitcase 1.png'
import loc from './placeholder 1.png'

const Hero = () => {
  return (
    <div className=' bg-heroimg mt-[10px]'>
      
<h1 className=' text-[52px] font-bold text-[#ffffff] ml-[33vw] pt-[10vh] max-lg:text-[42px] max-md:text-[36px],ml-[20vw]'>Are You a Supplier</h1>
<h2 className=' text-[52px] font-medium text-[#ffffff] ml-[25vw] max-lg:text-[46px] max-md:text-[38px]'>Explore Matching Opportunities</h2>

<div className=' flex items-center justify-center gap-2 mt-[5vh]'> 
<div className=' flex items-center'>
  <div className=' text-[#e7760d] bg-[#ffffff] h-[50px] w-[50px] rounded-l-lg flex items-center justify-center'>
<img src={suit} alt=''/>
</div>
  <input className=' h-[50px] w-[300px] rounded-r-lg max-lg:w-[150px]' placeholder='Search your required service here' />
</div>

<div className=' flex items-center'>
  <div className=' text-[#e7760d] bg-[#ffffff] h-[50px] w-[50px] rounded-l-lg flex items-center justify-center'>
<img src={loc} alt=''/>
</div>
  <input className=' h-[50px] w-[300px] rounded-r-lg max-lg:w-[150px]' placeholder='Search your Desired service here' />
</div>

<button className=' text-[#ffffff] bg-[#00732f] h-[50px] w-[100px] rounded-md'>Search</button>
</div>

<div className=' flex items-center ml-[33vw] mt-[3vh] pb-[10vh] max-lg:ml-[20vw] max-md:ml-[15vw]'>
  <p className=' font-semibold text-[18px] text-[#ffffff]'>Are you a buyer?</p>
  <u className='text-[#ffffff]'>Click here if you are looking to post a requirements</u>
</div>

    </div>
  )
}

export default Hero
