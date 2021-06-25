import React, { useRef } from 'react';
import { Button } from 'antd';
import { useSigPad } from 'react-use-lib';
import './PortraitSignature.less';

// 手写签名 横屏例子

const PortraitSignature = () => {
  const canvas = useRef();

  const { download, clear } = useSigPad(canvas, { useLandscape: false });

  return (
    <div className="portrait-signature-pad">
      <div className="wrapper">
        <canvas ref={canvas}></canvas>
      </div>
      <div className="footer">
        <Button onClick={clear}>清空</Button>
        <Button onClick={() => download('test.png')}>保存</Button>
      </div>
    </div>
  );
};

export default PortraitSignature;
