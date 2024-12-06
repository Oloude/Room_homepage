 type ImageProps = {
    img : string
 }

function Image({img}: ImageProps) {
  return (
    <div><img src={img} alt="" className="h-full  w-full block"/></div>
  )
}

export default Image