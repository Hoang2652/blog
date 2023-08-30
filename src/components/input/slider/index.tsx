import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import '@/styles/input.css'
import { styled, useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Slider, { SliderThumb }  from '@mui/material/Slider';

interface AirbnbThumbComponentProps extends React.HTMLAttributes<unknown> {}

const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? '#fff' : '#394144',
    height: 8,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        width: 24,
        height: 24,
        backgroundColor: '#fff',
        '&:before': {
            boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
        },
        '&:hover, &.Mui-focusVisible, &.Mui-active': {
            boxShadow: 'none',
            backgroundColor: ' #1fb7e0',
        },
    },
    '& .airbnb-bar': {
        height: 9,
        width: 1,
        backgroundColor: 'currentColor',
        marginLeft: 1,
        marginRight: 1,
    },
}))

function AirbnbThumbComponent(props: AirbnbThumbComponentProps) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

const SliderComponent = () => {

    const theme = useTheme();

    const [value, setValue] = React.useState<number>(53);

    const handleChange = (event: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
        setValue(newValue);
        }
    };

    const autocompleteRef = useRef<HTMLDivElement>(null);

    return (
        <div className="autocomplete" ref={autocompleteRef}>
            <div className="autocomplete_wrap">
                <div className="slider">
                    <AirbnbSlider
                        value={value}
                        min={3}
                        step={2}
                        max={53}
                        onChange={handleChange}
                        slots={{ thumb: AirbnbThumbComponent }}
                    />
                </div>
                <div className="slider_text">
                    <span>$</span>
                    <span style={{ fontWeight: 'bold' }}>{value < 53 ? value + 'K' : value + 'K+'}</span>
                </div>
                <div className="autocomplete_icon_wrap search_icon">
                    <SearchIcon sx={{ fontSize: '40px', margin: 'auto', color: 'white'}}/>
                </div>
            </div>
        </div>
    );
};

export default SliderComponent;
