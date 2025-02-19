import ImageContent from "./image-content"

const CreativePersuits = () => {
  return (
    <div className='w-full max-w-screen-2xl px-5 md:px-14 py-14 mx-auto'>
      <ImageContent
      className="md:flex-row-reverse" 
      heading={"Creative Pursuits"} 
      desc={"Plant music is a perfect choice when you want to write, paint, or do any type of work. It is always novel and continuously evolving, so it won’t distract you. Some of the soundsets fluctuate in tempos of 60-80 BPM, which is shown to be optimal for focusing."} 
      imgSrc={"/use-cases/creative.png"}
      />
    </div>
  )
}

export default CreativePersuits;
