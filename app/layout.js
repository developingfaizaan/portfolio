import localFont from '@next/font/local'

import { Navbar } from '@/components'
import './globals.css'

const GeneralSans = localFont({
  src: [
    {
      path: '../public/fonts/GeneralSans-Medium.ttf',
      weight: '500'
    },
    {
      path: '../public/fonts/GeneralSans-Semibold.ttf',
      weight: '700'
    },
  ],
  variable: '--font-generalSans'
})

export const metadata = {
  title: 'Faizan | Portfolio',
  description: 'As a Freelance UI/UX Designer and Web Developer, I specialize in crafting visually appealing and user-friendly interfaces for web and mobile applications. With a commitment to delivering exceptional design solutions through a minimalistic approach, explore my portfolio to discover how I create seamless user experiences and bring ideas to life.',
  icons: {
    icon:'/images/logo.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${GeneralSans.variable} font-sans`}>
        <Navbar />
        {children}
        
      </body>
    </html>
  )
}
