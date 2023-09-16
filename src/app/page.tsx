'use client'
import dynamic from 'next/dynamic'
const Box = dynamic(() => import("@mui/material/Box"));
import Marquee from './_marquee/page';
import Feature from './_feature-product/page';

export default function Home() {
  return (
    <Box>
      <Marquee />
      <Feature />
    </Box>

  )
}
