import { Hero, Work, Testimonials, Cta, Footer } from "@/components"
import { homePageProjects } from '../constants';

const Home = () => {
  return (
    <>
      <main className="w-11/12 max-w-[1140px] mx-auto overflow-hidden">
        <Hero />
        <h1 className="text-5xl leading-snug font-bold text-center leading-tight mx-auto my-8">Showcasing My Selected Works</h1>           
        <Work projects={homePageProjects} home />
        <Testimonials />
      </main>
      <div className="bg-darkGrey rounded-t-[100px] mt-24 pt-24 py-10">
        <Cta />
        <Footer />
      </div>
    </>
  )
}

export default Home