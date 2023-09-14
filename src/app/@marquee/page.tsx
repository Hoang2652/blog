'use client'
import dynamic from 'next/dynamic'
const Box = dynamic(() => import("@mui/material/Box"));
const Search = dynamic(() => import("@/components/search"));
const Media = dynamic(() => import("@/components/media"));
const Pattern = dynamic(() => import("@/components/svg-pattern"));
import Image from 'next/image';

function Marquee() {
    return ( 
        <Box sx={{ display: 'flex', position: 'relative'}}>
            <Box sx={{ paddingTop: '11rem', paddingLeft: '11rem', position: 'relative', flex: 1 }}>
            <h1 className='text-6xl font-semibold text-neutral-700 max-w-2xl'>
                Great quality cars and no-haggle prices
                <span className='text-blue-700/90'>.</span>
            </h1>
            <Box >
                <Search />
            </Box>
            <Box>
                <Media />
            </Box>
            </Box>
            <Box sx={{ flex: 1 }}>
            <Pattern />
            </Box>
            <Box sx={{ position: 'absolute', bottom: 50, right: 0, width: '45.6%', marginRight: 0}}>
            <Image
                alt="Image home"
                src="/marquee-hp-wide2.webp"
                sizes="100vw"
                width={1000}
                height={500}
                // style={{
                //   width: '100%',
                //   height: 'auto',
                // }} 
            />
            </Box>
        </Box>
    );
}

export default Marquee;