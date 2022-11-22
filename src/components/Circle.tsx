import React from 'react';

type TCircleProps = {
    x: number;
    y: number;
}

const Circle = ({x, y}: TCircleProps) => {
    return (
        <div style={{top: `${y-20}px`, left: `${x-20}px`}} className={'circle'}/>
    );
}

export { Circle };