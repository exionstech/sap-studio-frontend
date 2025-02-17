import ExperienceNow from '@/components/shared/expereience'
import { MaxWrapper } from '@/components/shared/max-wrapper'
import React from 'react'
import ContactUs from './_components/contact-us'

const ContactPage = () => {
  return (
    <MaxWrapper className='flex flex-col gap-14 mb-12 mt-[7rem]'>
      <ContactUs/>
      <ExperienceNow/>
    </MaxWrapper>
  )
}

export default ContactPage
