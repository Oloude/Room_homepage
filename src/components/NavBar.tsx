 

function NavBar({active}: {active: boolean}) {
  return (
    <nav className={`${active ? 'absolute' : 'hidden'} bg-white  p-5 w-full left-0 right-0 top-0 z-20 lg:z-0 lg:w-auto lg:p-0 lg:flex  lg:relative lg:bg-transparent `}>
        <ul className="flex justify-evenly   items-center gap-6 lg:justify-start">
            <li className="text-black lowercase text-base lg:text-white "><a href="#">Home </a></li>
            <li className="text-black lowercase text-base lg:text-white "><a href="#">Shop</a></li>
            <li className="text-black lowercase text-base lg:text-white "><a href="#"> About </a></li>
            <li className="text-black lowercase text-base lg:text-white "><a href="#">Contact</a></li>
        </ul>
    </nav>
  )
}

export default NavBar