'use client'
import React, { ReactNode } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from '@/components/product-card';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import './feature.css'

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
          className={className}
          style={{ 
            ...style,     
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            right: 0,
            zIndex: 2,
            height: '6.25rem',
            width: '3.125rem',
            borderTopLeftRadius: '10px',
            borderBottomLeftRadius: '10px', 
          }}
          onClick={onClick}
        >
          <NavigateNextIcon sx={{ color: '#fff', fontSize: '35px'  }}/>
        </div>
    );
}
  
function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ 
          ...style,     
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          left: 0,
          zIndex: 2,
          height: '6.25rem',
          width: '3.125rem',
          borderTopRightRadius: '10px',
          borderBottomRightRadius: '10px',  
        }}
        onClick={onClick}
      >
        <NavigateBeforeIcon sx={{ color: '#fff', fontSize: '35px' }}/>
      </div>
    );
}

const Feature = () => {
    
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "200px",
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
};

  return (
    <div>
      <Slider {...settings}>
      {Array(10).fill(null).map((_, index) => (
        <div key={index} className="slider-tabs">
          <ProductCard year='2022' miles='61' name='Dodge Challenger R/T SCAT PACK PLUS' price='20,247' location='Cranberry, PA' status='true'  />
        </div>
      ))}
      </Slider>
    </div>
  );
};

export default Feature;
