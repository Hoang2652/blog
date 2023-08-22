import Link from 'next/link'

function IconGroup() {
    return ( 
        <div className="flex flex-row">
            <Link href={`/login`} className='text-white rounded bg-blue-700/90 uppercase p-2.5 font-bold text-sm'>Login</Link>
        </div>
     );
}

export default IconGroup;