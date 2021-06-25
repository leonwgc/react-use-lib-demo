import React from 'react';
import { useAnimateCss } from 'react-use-lib';
import './useAnimateCss.less';

const arr = ['rotateOut', 'jackInTheBox', 'zoomInUp', 'heartBeat', 'bounceOutUp'];

const getRandomAnimation = () => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export default function App() {
  const { run } = useAnimateCss('.bird', 'bounceInLeft', false);

  useAnimateCss('.words p:not(:last-child)', 'fadeInLeft');

  useAnimateCss('.words p:last-child', 'fadeInDown');

  const r = useAnimateCss('.bird4', 'backInRight');

  const r1 = useAnimateCss('.bird5', 'slideInDown', false);

  useAnimateCss('.bird1', 'r1');
  useAnimateCss('.bird2', 'r2');

  return (
    <div className="animate">
      <div className="bird" onClick={run}></div>

      <div className="bird4" onClick={r.run}></div>

      <div className="bird5" onMouseMove={() => r1.run(getRandomAnimation())}></div>

      <div className="words">
        <p className="red">xxxxxxxxxxx</p>
        <p>hhhhhhhhhh</p>
        <p>jjjjjjjjjj</p>
        <p className="red">xxxxxxooooooo</p>
      </div>

      <div className="bird1"></div>
      <div className="bird2"></div>
    </div>
  );
}
