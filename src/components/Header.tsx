 import logo from '../assets/logo.svg'
 import menuIcon from '../assets/icon-hamburger.svg'
 import closeIcon from '../assets/icon-close.svg'
import NavBar from './NavBar'
import { useState } from 'react'

function Header() {
    const [toggle, setToggle] = useState(false)

    function handleToggle(){
        setToggle(prev => !prev)
    }
  return (
   <header className='absolute top-0 left-0 p-5 flex gap-16 z-10 w-full lg:items-center'>
      <NavBar active={toggle}/> 
    <div className='lg:hidden'>
        <button  onClick={handleToggle}>{toggle ? <img src={closeIcon} alt="" className='relative z-30'/> : <img src={menuIcon} alt="" />}</button>
        
    </div>
    <div className='lg:-order-1'><img src={logo} alt="" /></div>
   </header>
  )
}

export default Header