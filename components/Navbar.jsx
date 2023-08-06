"use client"

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const currentRoute = usePathname();

  return (
    <header className='sm:h-28 h-40 w-11/12 max-w-[1140px] xl:w-full sm:flex-row sm:justify-between mx-auto flex flex-col justify-center items-center gap-10'>
        <Link href="/">
          <Image src="/images/faizan-logo.svg" alt="Faizan Logo" width={77} height={18} />
        </Link>
        <nav className='flex justify-between items-center gap-8'>
            <Link href="/" className={`hover:text-white ${currentRoute==="/"? "text-white": ""}`}>Home</Link>
            <Link href="/work" className={`hover:text-white ${currentRoute==="/work"? "text-white": ""}`}>Selected Work</Link>
            <Link href="/contact" className={`hover:text-white ${currentRoute==="/contact"? "text-white": ""}`}>Contact</Link>
        </nav>
    </header>
  )
}

export default Navbar