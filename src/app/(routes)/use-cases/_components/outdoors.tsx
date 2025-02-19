"use client"
import ImageContent from './image-content';

const OutDoors = () => {
  return (
    <div className='w-full bg-green2 py-14'>
      <div className="w-full max-w-screen-2xl px-5 md:px-14 mx-auto">
        <ImageContent 
        heading={'Outdoors'} 
        desc={"Any hiking trip or even a walk in the park is beautiful, but it's even more magical when you can listen to the music of the plants you encounter. With PlantWave, you can tune into the songs of every tree, flower, or mushroom that pops up on your way."} 
        imgSrc={'/use-cases/outdoors.png'}/>
      </div>
    </div>
  )
}

export default OutDoors;
