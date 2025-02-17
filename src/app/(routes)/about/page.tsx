import { MaxWrapper } from '@/components/shared/max-wrapper'
import AboutHero from './_components/about-hero'
import ExperienceNow from '@/components/shared/expereience'

const AboutPage = () => {
  return (
    <MaxWrapper className='flex flex-col mb-12'>
      <AboutHero/>
      <ExperienceNow className='mt-14'/>
    </MaxWrapper>
  )
}

export default AboutPage
