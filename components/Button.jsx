import Image from 'next/image'
import Link from 'next/link'

const Button = ({href, styles, icon, children}) => {
  return (
    <Link className='w-full' href={href}>
      <button className={`bg-white py-4 px-6 text-background rounded justify-center flex gap-2 items-center ${styles ? styles : ""}`}>
          {children}
          {icon && <Image src={`/icons/${icon}.svg`} alt="icon" width={12} height={12} />}
      </button>
    </Link>
  )
}

export default Button