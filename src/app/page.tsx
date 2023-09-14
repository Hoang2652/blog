'use client'
import dynamic from 'next/dynamic'
const Box = dynamic(() => import("@mui/material/Box"));
import Marquee from './@marquee/page';
import Feature from './@feature-product/page';

export default function Home() {
  return (
    <Box>
      <Marquee />
      <Feature />
    </Box>

  )
}
