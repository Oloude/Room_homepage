 import angleLeft from '../assets/icon-angle-left.svg'
 import angleRight from '../assets/icon-angle-right.svg'

 type cBProps = {
    id:number,
    handlePrev : ()=>void,
     handleNext : ()=>void
 }

function CarouselButton({id, handlePrev, handleNext }: cBProps) {
  return (
    <div className={`${id === 1 ? 'flex lg:hidden' : 'hidden lg:flex'} absolute bottom-0 right-0  lg:left-0 lg:right-au`}>
        <button onClick={handlePrev} className='w-16 h-16 flex justify-center items-center bg-black hover:bg-vDarkGray'><img src={angleLeft} alt="" /></button>
        <button onClick={handleNext} className='w-16 h-16 flex justify-center items-center bg-black hover:bg-vDarkGray'><img src={angleRight} alt="" /></button>
    </div>
  )
}

export default CarouselButton