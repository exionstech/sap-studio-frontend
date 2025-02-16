import HeadingText from '@/components/shared/heading-text'
import React from 'react'

const ContactUs = () => {
  return (
    <section className='w-full max-w-screen-2xl mx-auto px-5 md:px-14'>
        <div className="bg-green2 p-10 flex flex-col gap-10">
                <HeadingText section={'CONTACT US'} heading={'Let’s Start Your Sustainability Journey'}/>
                <div className="w-full">
                        {/* form here */}
                </div>
        </div>
    </section>
  )
}

export default ContactUs
