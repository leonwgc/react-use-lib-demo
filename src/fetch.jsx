import React, { useEffect, useState } from 'react';
import { get } from 'xhr-fetch-lib';

const App = () => {
  const [res, setRes] = useState(null);
  useEffect(() => {
    get('https://account.cnblogs.com/user/userinfo').then((res) => {
      setRes(res);
    });
  }, []);
  return <div dangerouslySetInnerHTML={{ __html: res }}></div>;
};

export default App;
