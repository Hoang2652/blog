import Link from 'next/link'

interface NavMenuProps{

}

function NavMenu() {
    
    return(
       <div className="relative hidden lg:flex items-center">
            <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
                <ul className="flex space-x-8">
                    <li>
                        <Link href="/dashboard" className='hover:text-sky-500 '>Dashboard</Link>
                    </li>
                    <li>
                        <Link href="/dashboard" className='hover:text-sky-500 '>Dashboard</Link>
                    </li>
                    <li>
                        <Link href="/dashboard" className='hover:text-sky-500 '>Dashboard</Link>
                    </li>
                    <li>
                        <Link href="/dashboard" className='hover:text-sky-500 '>Dashboard</Link>
                    </li>
                </ul>
            </nav>
       </div>
    )
  };

export default NavMenu;