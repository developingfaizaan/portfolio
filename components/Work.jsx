import Image from 'next/image'
import Link from 'next/link';

import { Button } from '.';

const Work = ({projects, home}) => {
  return (
    <section id="work" className='my-20'>
      <div className="flex flex-wrap xl:justify-between justify-center mt-16">
        {projects.map((project) =>(
          <div className='flex flex-col mb-16'>
            <Image src={project.img.src} className='rounded-lg' alt={project.name} width={project.img.width} height={project.img.height} />
            <Link href={`work/${project.slug}`}>
              <h2 className='text-white text-3xl my-4 font-bold'>{project.name}</h2>
            </Link>
            <aside className="flex gap-2">
                {project.tags.map(tag => (<div className="bg-darkGrey text-lightGrey text-sm py-2 px-4 rounded-full text-xs sm:text-sm whitespace-nowrap">{tag}</div>))}
            </aside>
          </div>
        ))}
      </div>
      {home? (
      <Button href="/work" styles="mx-auto" icon="arrow-right">More Projects</Button>): ""}
    </section>
  )
}

export default Work