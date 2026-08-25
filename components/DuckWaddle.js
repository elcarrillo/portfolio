import React from 'react';
import duckSprite from '../public/images/ducky_3_spritesheet.png';

const DuckWaddle = () => {
  return (
    <div className="duck-waddle" aria-hidden="true">
      <div
        className="duck-sprite"
        style={{
          backgroundImage: `url(${duckSprite.src})`,
        }}
      />
    </div>
  );
};

export default DuckWaddle;