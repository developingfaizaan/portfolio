import Image from 'next/image'

import { reviews } from '../constants';

const Testimonials = () => {
  return (
    <section>
      <h1 className="text-5xl leading-snug font-bold text-center leading-tight mx-auto my-14">Some kind words from kind people</h1>           

      <div className="flex flex-wrap xl:justify-between justify-center mt-10 gap-5">
        {reviews.map((r) =>(
          <div className='flex flex-col flex-wrap bg-darkGrey w-[530px] py-8 px-7 md:px-10 rounded-xl'>
            <figure className="flex">
              {[1,2,3,4,5].map(i => (<Image src="/icons/star.svg" alt="star" width="24" height="24" />))}
            </figure>
            <p className='text-lg text-foreground mt-4 mb-1'>{r.review}</p>
            <strong className='text-lg text-white w-fit ml-auto'>- {r.name}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials