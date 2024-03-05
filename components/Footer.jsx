import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='flex flex-col md:flex-row md:justify-between items-center gap-6 w-11/12 max-w-[1140px] xl:w-full mx-auto mt-32 my-10'>
        <div className='flex flex-wrap justify-center gap-6'>
            <Link href="https://www.linkedin.com/in/faizaann/" className="text-foreground text-lg" target='_blank' >LinkedIn</Link>
            <Link href="https://twitter.com/faizanless" className="text-foreground text-lg" target='_blank' >Twitter</Link>
            <Link href="https://instagram.com/faizanless" className="text-foreground text-lg" target='_blank' >Instagram</Link>
            
            
            <svg className='hidden sm:block' width="1" height="24" viewBox="0 0 1 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="24" stroke="#69697B"/>
            </svg>

            <Link href="/Resume.pdf" target='_blank' className="text-foreground text-lg">Resume</Link>
        </div>

        <Link href="mailto:developingfaizaan@gmail.com" className="text-white text-lg">developingfaizaan@gmail.com</Link>

    </footer>
  )
}

export default Footer