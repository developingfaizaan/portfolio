import { Button } from "."

const Cta = () => {
  return (
    <div className="w-full px-3 mx-auto my-2 sm:my-10">
        <h2 className="w-11/12 max-w-[1024px] mx-auto text-4xl sm:text-6xl font-bold text-center">Let's Collaborate and Build Something Extraordinary!</h2>
        <p className="w-11/12 sm:w-5/12 max-w-[800px] mx-auto text-foreground text-xl text-center my-6">Whether you have a specific project in mind or need assistance in bringing your vision to life, I'm here to help.</p>
        <Button href="/contact" styles="mx-auto w-11/12 md:w-fit" icon="arrow-right">Get in Touch</Button>
    </div> 
  )
}

export default Cta