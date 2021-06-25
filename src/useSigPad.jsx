import React, { useState } from 'react';
import { Button } from 'antd';
import PortraitSignature from './sig/PortraitSignature';
import LandscapeSignature from './sig/LandscapeSignature';

export default function useSigPad() {
  const [isLandscape, setisLandscape] = useState(false);

  return (
    <div>
      <Button
        onClick={() => {
          setisLandscape((v) => !v);
        }}
      >
        {isLandscape ? 'landscape' : 'portrait'}
      </Button>
      {isLandscape ? <LandscapeSignature /> : <PortraitSignature />}
    </div>
  );
}
