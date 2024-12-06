 type ContentProps = {
    children : React.ReactNode,
    name : string
 }

function Content({children, name}: ContentProps) {
  return (
    <div className={` bg-white p-6 lg:p-9 flex flex-col justify-center ${name === 'hero' ? 'lg:col-span-2 lg:relative' : ' '}`}>{children}</div>
  )
}

export default Content