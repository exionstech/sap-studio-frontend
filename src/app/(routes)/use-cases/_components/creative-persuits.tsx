import ImageContent from "./image-content"

const CreativePersuits = () => {
  return (
    <div className='w-full max-w-screen-2xl px-5 md:px-14 mx-auto'>
      <ImageContent 
      heading={"Yoga & Meditation"} 
      desc={"The soothing sounds of plant music can provide a tranquil backdrop to your yoga or meditation practice. The ethereal tones can help quiet the mind and open the heart, allowing you to find stillness, access inner wisdom, and enter deeper meditative states."} 
      imgSrc={"/use-cases/creative.png"}
      />
    </div>
  )
}

export default CreativePersuits
