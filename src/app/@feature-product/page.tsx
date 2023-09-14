import React, { ReactNode } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from '@/components/product-card';

interface SampleProps{
    ClassName: string;
    Style: string;
    OnClick: Function;
}

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style, display: "block", background: "red", right: 0, zIndex: 2 }}
        onClick={onClick}
        />
    );
}
  
function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green", left: 0, zIndex: 2 }}
        onClick={onClick}
      />
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
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
};

  return (
    <div>
      <Slider {...settings}>
        <div>
          <ProductCard />
        </div>
        <div>
            <ProductCard />
        </div>
        <div>
            <ProductCard />
        </div>
        <div>
            <ProductCard />
        </div>
        <div>
            <ProductCard />
        </div>
        <div>
            <ProductCard />
        </div>
        <div>
            <ProductCard />
        </div>
        <div>
            <ProductCard />
        </div>
      </Slider>
    </div>
  );
};

export default Feature;
