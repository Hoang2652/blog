import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface ProductCardProps {
  year: string;
  miles: string;
  name: string;
  price: string;
  location: string;
  status: string;
}

export default function ProductCard({ year, miles, name, price, location, status }: ProductCardProps) {
  return (
    <Card sx={{ 
      maxWidth: 360, 
      borderRadius: '10px',
      overflow: 'hidden',
      transition: 'box-shadow .15s cubic-bezier(.4,0,.2,1),transform .15s cubic-bezier(.4,0,.2,1),-webkit-transform .15s cubic-bezier(.4,0,.2,1)',
      boxShadow: '0 0 3px rgba(0,0,0,.2)',
      willChange: 'transform',
      "&:hover":{
        boxShadow: '0 0 6px rgba(0,0,0,.2)',
        transform: 'translateY(-1px)'
      }
    }}>
      <Box sx={{ 
        position: 'relative', 
        '&::after': {
            position: 'absolute', 
            display: 'inline-block', 
            width: '100%', 
            bottom: '-1px', 
            height: '2.25rem', 
            background: 'linear-gradient(hsla(0,0%,100%,0),#fff)', 
            content: '""'
        } 
      }}>
        <Image
          alt="Image home"
          src="/car.jpg"
          sizes="100vw"
          width={1000}
          height={500}
        />
      </Box>
      <CardContent>
        <Typography sx={{ fontSize: '0.8125rem', lineHeight: '1rem', fontWeight: 'bold'}}>
          {year}   <span style={{display: 'inline-block', width: '0.3rem', height: '0.3rem', margin: '0 .5rem'}}>-</span> {miles}K miles
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: '0.5rem', marginBottom: '0.25rem'}}>
          <Typography sx={{ fontSize: '1rem', lineHeight: '1.25rem', fontWeight: 'bold', whiteSpace: 'nowrap' , overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {name}
          </Typography>
          <Typography sx={{ fontSize: '1rem', lineHeight: '1.25rem', fontWeight: 'bold'}}>
            <span style={{fontWeight: '400'}}>$</span>{price}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <LocationOnIcon sx={{ fontSize: '0.6875rem', marginTop: '0.125rem'}}/> 
          <Typography sx={{ fontSize: '0.6875rem', }}>
            {location} 
          </Typography>
        </Box>  
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
