import React from 'react'
import logo from './logo.png'

const Nav = () => {
  return (
    <div className=' flex items-center justify-between ml-[5vw] mr-[5vw] mt-[2vh]'>
      
<div>
    <img src={logo} alt=''/>
</div>

<div className=' flex items-center gap-5'>
    <ul className=' flex align-middle gap-4 text-[#6d6e71] max-md:hidden'>
        <li>Find Suppliers</li>
        <li className=' flex items-center'>Find Service Tags <span class="material-symbols-outlined">
keyboard_arrow_down
</span>
 </li>

    </ul>

<button className=' bg-white border-2 border-[#00732f] text-[#00732f] w-[10vw] h-[6vh] max-md:text-xs'>Login/Sign Up</button>

</div>

    </div>
  )
}

export default Nav
