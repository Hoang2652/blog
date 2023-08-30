'use client'
import Link from 'next/link'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

const StyledIcon = styled('div')(({ theme }) => ({
    cursor: 'pointer',
    marginLeft: '1.5rem',
    transition: 'color 0.3s',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  }));  

function IconGroup() {



    return ( 
        <div className="flex flex-row justify-end items-center">
            {/* <Link href={`/login`} className='text-white rounded bg-blue-700/90 uppercase p-2.5 font-bold text-sm'>Login</Link>
             */}
            <StyledIcon>
                <SearchIcon sx={{  fontSize: '30px' }} />
            </StyledIcon>
            <StyledIcon>
                <FavoriteBorderIcon  sx={{  fontSize: '30px'}}/>
            </StyledIcon>
            <Link href={`/login`}>
                <StyledIcon>
                    <AccountCircleIcon  sx={{ fontSize: '30px'}}/>
                </StyledIcon>
            </Link>
        </div>
     );
}

export default IconGroup;