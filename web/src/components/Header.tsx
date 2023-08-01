'use client'

import Image from 'next/image'
import Logo from '../assets/logo.svg'
import { MagnifyingGlass } from 'phosphor-react'
import { usePathname } from 'next/navigation'
export function Header(){
  const pathname = usePathname();

  return(
    <nav className=' bg-gray-950 sm:justify-between sm:flex-row text-gray-100'>
      <div className='container mx-auto flex flex-col justify-center items-center gap-4 py-8 sm:justify-between sm:flex-row'>
        <Image
          src={Logo}
          alt="Movie Ticket Logo"
          width={190}
          height={48}
          priority
        />
        
        {pathname == '/' ? (
          <div className='relative'>
            <input type="search" className='bg-gray-800 rounded-md py-3 pr-5 pl-12 placeholder:text-base placeholder:font-normal placeholder:text-gray-300 focus:outline focus:outline-1 focus:outline-blue-400' placeholder='Buscar Filme'/>
            <MagnifyingGlass size={24} className='absolute top-3 left-3 text-gray-300'/>
          </div>  
        ) : ( "" )}
      </div>
    </nav>
  )
}