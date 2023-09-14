'use client'
import Link from 'next/link'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

interface NavMenuProps{

}

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#394144',
      maxWidth: 520,
      minWidth: 170,
      padding: '8px 0 8px 0',
      borderRadius: "10px",
    },
    [`& .MuiTooltip-popperArrow:before`]: {
        content: '""',
        position: "absolute",
        top: "-10px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "20px",
        height: "20px",
        background: `url("/csvg.svg")`,  
      },
  }));
function NavMenu() {

    const [shop, setShop] = React.useState(['View Cars', 'Specials', 'Get Financing', 'Home Delivery ', 'CurbSide Pickup ', 'About Buying Online'])
    const [shopCars, setShopCars] = React.useState(['Why Us?', 'CarShop Certified', 'Lifetime Engine Guarantee', 'Warranty Programs', 'CarShop CarSense Tradition ', 'Ignition Stories '])
    
    return(
       <div className="relative lg:flex items-center">
            <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
                <ul className="flex space-x-8">
                    <li className="relative">
                        <HtmlTooltip
                            placement="bottom-start"
                            title={
                                <ul>
                                    {
                                        shop.map((item, index) => (
                                            <li className={`text-white hover:bg-sky-500 flex text-left items-center h-14 ${
                                                index !== shop.length - 1 ? 'border-b-neutral-400 border-solid border-b' : ''
                                              }`}
                                              key={index}>
                                                <Link href={'/' + item} className='py-6 px-5 text-base cursor-pointer'>{item}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            }

                            sx={{ position: 'absolute' }}
                        >
                            <Link href="/dashboard" className='hover:text-sky-500 py-5 px-2 cursor-pointer'>SHOP</Link>
                        </HtmlTooltip>
                    </li>
                    <li>
                        <Link href="/dashboard" className='hover:text-sky-500 cursor-pointer'>TRADE/SELL</Link>
                    </li>
                    <li>
                        <HtmlTooltip
                            placement="bottom-start"
                            title={
                                <ul>
                                    {
                                        shopCars.map((item, index) => (
                                            <li className={`text-white hover:bg-sky-500 flex text-left items-center h-14 ${
                                                index !== shopCars.length - 1 ? 'border-b-neutral-400 border-solid border-b' : ''
                                              }`}
                                              key={index}>
                                                <Link href={'/' + item} className='py-6 px-5 text-base cursor-pointer'>{item}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            }

                            sx={{ position: 'absolute' }}
                        >
                            <Link href="/dashboard" className='hover:text-sky-500 py-5 px-2 cursor-pointer'>WHY CARSHOP</Link>
                        </HtmlTooltip>
                    </li>
                    <li>
                        <Link href="/dashboard" className='hover:text-sky-500 cursor-pointer'>CAREERS</Link>
                    </li>
                    <li>
                        <Link href="/dashboard" className='hover:text-sky-500 cursor-pointer'>SERVICE</Link>
                    </li>
                    <li>
                        <Link href="/dashboard" className='hover:text-sky-500 cursor-pointer'>STORE</Link>
                    </li>
                </ul>
            </nav>
       </div>
    )
  };

export default NavMenu;