import Link from 'next/link';
import Image from 'next/image';

interface Props{
    imageUrl: string
}

function Logo({ imageUrl }: Props ) {
    return ( 
        <div>
            <Link href="/">
                <Image
                    src={ imageUrl }
                    width={100}
                    height={100}
                    alt="Logo"
                />
            </Link>
        </div>
     );
}

export default Logo;