import React, { useEffect } from 'react';
import { utils } from 'react-use-lib';

const { debounce, throttle } = utils;

const App = () => {
  useEffect(() => {
    const db = debounce(() => console.log('db:' + window.pageYOffset), 1000);
    const tt = throttle(() => console.log('tt:' + window.pageYOffset), 1000);
    window.addEventListener('scroll', db);
    window.addEventListener('scroll', tt);

    return () => {
      window.removeEventListener('scroll', db);
      window.removeEventListener('scroll', tt);
    };
  }, []);
  return <div style={{ height: 2000 }}>check console</div>;
};

export default App;
