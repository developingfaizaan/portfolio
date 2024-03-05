import {Button, Footer, Input, Textarea} from '@/components/'
import React from 'react'

const Contact = () => {
  return (
    <main className="w-11/12 max-w-[1140px] mx-auto overflow-hidden">
      <section className="pt-10 w-full">
          <h1 className="sm:text-6xl text-4xl font-bold text-center lg:w-[900px] mx-auto">Contact Me</h1>
          <p className="text-xl text-center w-10/12 mx-auto mt-6 mb-8 text-foreground">Sorry, the form isn't working at the moment. Please reach out via <a href="mailto:developingfaizaan@gmail.com" className='underline' title='developingfaizaan@gmail.com'>email</a>. Thanks! :)</p>

          <form className='flex flex-col items-center justify-center md:w-3/5 mx-auto mt-10'>
            <Input label="Full Name" type="text" />
            <Input label="Email" type="email" />
            <Textarea label="Message" />
            <Button styles="w-full mt-3" href="#" icon="arrow-right">Submit</Button>
          </form>
      </section>
      <Footer />
    </main>
  )
}

export default Contact