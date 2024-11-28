import React from 'react'
import arrow from './Group.png'

const Hero2 = () => {
  return (
    <div className=' mt-[10vh] flex items-center justify-between ml-[10vw] mr-[10vw] max-lg:ml-[5vw] max-md:block max-md:ml-[20vw]'>
      
<div >
<h2 className=' font-bold text-[24px]'>Ready to dive into HABOT</h2>
<p className=' w-[35vw] mt-[20px] max-lg:w-[45vw]'>
Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.
</p>

<button className=' bg-[#00732f] text-[#ffffff] w-[15vw] h-[6vh] flex items-center justify-center gap-4 mt-[20px] max-md:w-[30vw]' >Sign Up Today! <img src={arrow} alt=''/> </button>

</div>

<div className=' max-md:mt-[20px]'>

<div className=' flex items-center gap-[10vh]'>
<button className='  border-2 border-[#e7706d] w-[15vw] h-[6vh] flex items-center justify-center hover:bg-[#e7706d] hover:text-[#ffffff]'>Abu Dhabi</button>
<button className='  border-2 border-[#e7706d] w-[15vw] h-[6vh] flex items-center justify-center hover:bg-[#e7706d] hover:text-[#ffffff]' >Dubai</button>
</div>

<div className=' flex items-center gap-[10vh] mt-[20px]'>
<button className='  border-2 border-[#e7706d] w-[15vw] h-[6vh] flex items-center justify-center hover:bg-[#e7706d] hover:text-[#ffffff]'>Sharjah & Ajman</button>
<button className='  border-2 border-[#e7706d] w-[15vw] h-[6vh] flex items-center justify-center hover:bg-[#e7706d] hover:text-[#ffffff]' >Fujairah</button>
</div>

<div className=' flex items-center gap-[10vh] mt-[20px]'>
<button className='  border-2 border-[#e7706d] w-[15vw] h-[6vh] flex items-center justify-center hover:bg-[#e7706d] hover:text-[#ffffff]'>Ras Al Kahimah</button>
<button className='  border-2 border-[#e7706d] w-[15vw] h-[6vh] flex items-center justify-center hover:bg-[#e7706d] hover:text-[#ffffff]' >Umm Al Quawin</button>
</div>

</div>

    </div>
  )
}

export default Hero2
