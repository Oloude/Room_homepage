 type HeroProps = {
    imgMobile : string,
     imgDesktop : string
 }

function HeroImage({imgMobile, imgDesktop} : HeroProps) {
  return (
    <div className=" h-[500px]"><picture>
        <source media="(min-width: 1024px)" srcSet={imgDesktop} />
        <img src={imgMobile} alt="" className="w-full h-full block object-fill"/>
        </picture></div>
  )
}

export default HeroImage