import React, { useEffect, useRef } from 'react';
import { useDragMove } from 'react-use-lib';
import './useDragMove.less';

const App = () => {
  const boundaryRef = useRef();
  const ref = useRef();
  const c2Ref = useRef();

  useDragMove(ref, boundaryRef, (p) => {
    console.log(p);
  });

  useDragMove(c2Ref, null, (p) => {
    console.log(p);
  });

  return (
    <div>
      <div className="boundary" ref={boundaryRef}>
        <div id="c1" ref={ref}>
          bound
        </div>

        <div id="c2" ref={c2Ref}>
          no bould
        </div>
      </div>
    </div>
  );
};

export default App;
