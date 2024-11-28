import React from 'react'
import video from './video.png'
import tick from './tick.png'

const Video = () => {

  return (
    <div className=' bg-[#072F57] p-[10vh] ml-[5vw] mr-[5vw] mt-[5vh] mb-[5vh] flex max-xl:p-[5vh] max-lg:block max-lg:pl-[20vw]'>
      
<div className=' max-xl:w-[45vw]'>
    <img src={video} alt=''/>
</div>

{/* options */}
<div className=' flex items-center gap-[8vw] mb-[20vh] max-lg:mt-[50px]'>
    
<div className=' ml-[5vw]'>
<h1 className='  text-[#EB7150] font-semibold text-[36px] border-b-4 border-[#eb7150] w-[7vw] flex items-center'>Buyer <span className=' text-[#ffffff] font-semibold text-[36px] pl-[10vw]'>Supplier</span> </h1>

<p className=' text-[#ffffff] text-[16px] flex items-center gap-2 mt-[3vh]'> <img src={tick} alt=''/>Post Your requirments.</p>
<p className=' text-[#ffffff] text-[16px] flex items-center gap-2 w-[25vw] mt-[10px] max-md:w-[40vw]'><img src={tick} alt=''/>Sit back for multiple suppliers to contact you.</p>
<p className=' text-[#ffffff] text-[16px] flex items-center gap-2 w-[25vw] mt-[10px] max-md:w-[40vw]'><img src={tick} alt=''/>Choose among the suppliers based on the rating and reviews.</p>
</div>


</div>

    </div>
  )
}

export default Video
