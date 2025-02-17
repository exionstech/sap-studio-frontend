import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

interface UsecaseHeroProps {
        className?: string
}

const UsecaseHero = (
        { className }: UsecaseHeroProps
) => {
  return (
    <section className={cn('w-full max-w-screen-2xl mx-auto px-5 flex md:flex-row flex-col md:px-14 md:aspect-[3/1] gap-10 pt-5', className)}>
        <div className="w-full md:w-[60%] flex flex-col md:justify-center md:items-start items-center gap-10">
                <h1 className='text-4xl lg:text-6xl text-green4 font-larken-demo md:text-start text-center'>How Can You Use <br /> <span className='text-green3'>Sap Symphony in</span><br /> Your Life
                </h1>
                <p className='text-green4 md:text-start text-center'>Plant music can amplify many of your daily routines and practices. Here are just some that our customers reported profound results with.</p>
        </div>
        <div className="w-full md:w-[60%] flex items-center justify-center overflow-hidden rounded-lg">
                <Image
                        src='/use-cases/usecase-hero.png'
                        alt='usecase-hero'
                        width={400}
                        height={400}
                        className='object-cover shrink-0'
                />
        </div>
    </section>
  )
}

export default UsecaseHero
