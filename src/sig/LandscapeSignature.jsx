import React, { useRef } from 'react';
import { Button } from 'antd';
import { useSigPad } from 'react-use-lib';
import './LandscapeSignature.less';

// 手写签名 横屏例子

const LandscapeSignature = () => {
  const canvas = useRef();

  const { download, clear } = useSigPad(canvas);

  return (
    <div className="landscape-signature-pad">
      <canvas ref={canvas}></canvas>
      <div className="footer">
        <Button onClick={clear}>清空</Button>
        <Button onClick={() => download('test.png')}>保存</Button>
      </div>
    </div>
  );
};

export default LandscapeSignature;
