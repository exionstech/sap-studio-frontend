import { MaxWrapper } from '@/components/shared/max-wrapper'
import React from 'react'
import CreativePersuits from './_components/creative-persuits'
import YogaMeditation from './_components/yoga-meditation'
import OutDoors from './_components/outdoors'
import ExperienceNow from '@/components/shared/expereience'
import UsecaseHero from './_components/usecase-hero'

const UseCasesPage = () => {
  return (
    <MaxWrapper className='flex flex-col mb-12 mt-[7rem]'>
      <UsecaseHero className='mb-14'/>
      <YogaMeditation/>
      <CreativePersuits/>
      <OutDoors/>
      <ExperienceNow className='mt-14'/>
    </MaxWrapper>
  )
}

export default UseCasesPage
