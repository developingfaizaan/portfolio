import {Button, Footer, Input, Textarea} from '@/components/'
import React from 'react'

const Contact = () => {
  return (
    <main className="w-11/12 max-w-[1140px] mx-auto overflow-hidden">
      <section className="pt-10 w-full">
          <h1 className="sm:text-6xl text-4xl font-bold text-center lg:w-[900px] mx-auto">Contact Me</h1>

          <form className='flex flex-col items-center justify-center md:w-3/5 mx-auto mt-10'>
            <Input label="Full Name" type="text" />
            <Input label="Email" type="email" />
            <Textarea label="Message" />
            <Button styles="w-full mt-3" href="" icon="arrow-right">Submit</Button>
          </form>
      </section>
      <Footer />
    </main>
  )
}

export default Contact