import Image from 'next/image'

import { Work as Projects } from "@/components"
import { workPageProjects } from '../../constants';


const Work = () => {
  return (
      <main className="w-11/12 max-w-[1140px] mx-auto overflow-hidden">
          <section className="pt-10 w-full">
              <Image src="/images/logo.svg" alt="Faizan Logo" width={60} height={66} className="text-center mb-3 mx-auto" />
              <h1 className="sm:text-6xl text-4xl font-bold text-center lg:w-[800px] mx-auto">Discovering Artistry: My Digital Showcase!</h1>
              <p className="text-xl text-center w-11/12 mx-auto mt-6 mb-8 text-foreground">Experience the Artistry of UI/UX Design and Web Development</p>
          </section>

          <Projects projects={workPageProjects} />
      </main>
  )
}

export default Work