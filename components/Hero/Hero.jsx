import Image from "next/image"
import { Button } from "../"
import CircleAnimation from "./CircleAnimation"

const Hero = () => {
  return (
    <div>
        <section className="py-10 w-full">
            <Image src="/images/logo.svg" alt="Faizan Logo" width={60} height={66} className="text-center mb-3 mx-auto" />
            <h1 className="sm:text-6xl text-4xl font-bold text-center lg:w-[900px] mx-auto">Code & Creativity: The Dynamic Duo of Web DevUI</h1>
            <p className="text-xl text-center w-10/12 mx-auto mt-6 mb-8 text-foreground">I’m a Freelance UI/UX Designer and Web Developer</p>
            <Button href="#work" styles="mx-auto w-10/12 md:w-fit" icon="arrow-down">Selected Work</Button>
        </section>
        <CircleAnimation />
    </div>
  )
}

export default Hero