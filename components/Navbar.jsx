'use client';

import Link from 'next/link';
import '../styles/globals.css' ;
import NavLink from '../app/nav-link';



import { useRouter } from 'next/navigation';
import Wallet from './Wallet';

const menu = [
  { title: 'Home', path: '/' },
  { title: 'Explore', path: '/explore' },
  { title: 'Search', path: '/search' },
  { title: 'Campaign', path: '/campaign' },
]


const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const navLink = [
    {
      name: 'home',
      link:'/',
    },
    {
      name: 'explore',
      link:'/explore',
    },
    {
      name: 'search',
      link:'/search',
    },
    {
      name: 'campaign',
      link:'/campaign',
    },
  ];
  return(
  <nav className='bg-primary-black'>
    <div className='flex justify-center py-4 '>
      <img src='/RaiseRocketlogo.png'
      
      className='w-[280.55px] h-[40px]'/>
    </div>
    <div className='md:flex justify-center font-excratch text-secondary-white items-center '>
     <ul className='px-4 text-[12px] hover:text-green transistion duration-300'>
        <NavLink  href="/">Home
        </NavLink>
      </ul>
      <ul className='px-4 text-[12px] hover:text-green transistion duration-300'>
        <NavLink  href="/explore">Explore
        </NavLink>
      </ul> 
      <ul className='px-4 text-[12px] hover:text-green transistion duration-300'>
        <NavLink  href="/create">Create
        </NavLink>
      </ul> 
      <ul className='px-4 text-[12px] hover:text-green transistion duration-300'>
        <NavLink  href="/dashboard">Dashboard
        </NavLink>
      </ul> 
      <Wallet />
  
    
      </div>
      
    
    
  </nav>  

  );
};

export default Navbar;