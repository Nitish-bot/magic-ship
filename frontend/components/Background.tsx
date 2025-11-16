'use client';

import ColorBends from './ui/ColorBends';

export default function Background() {
  return (
    <div className='bg-black z-1'>
      <ColorBends
        colors={['#E91A1A', '#19EF19', '#1940DC']}
        rotation={90}
        speed={0.2}
        scale={1}
        frequency={1}
        mouseInfluence={0.15}
        parallax={0.3}
        noise={0.2}
      />
    </div>
  );
}
