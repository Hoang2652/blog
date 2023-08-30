'use client'
import dynamic from 'next/dynamic'
const Box = dynamic(() => import("@mui/material/Box"));
const Typography = dynamic(() => import("@mui/material/Typography"));
const Search = dynamic(() => import("@/components/search"));

export default function Home() {
  return (
    <>
    <Box>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ paddingTop: '11rem' }}>
          <h1 className='text-6xl font-semibold text-neutral-700 max-w-2xl'>
            Great quality cars and no-haggle prices
            <span className='text-blue-700/90'>.</span>
          </h1>
          <Box>
            <Search />
          </Box>
        </Box>
        <Box>a</Box>
      </Box>
    </Box>
    </>
  )
}
