import React, { useEffect, useState } from 'react';
import { utils } from 'react-use-lib';

const { fetch } = utils;

const App = () => {
  const [res, setRes] = useState(null);
  useEffect(() => {
    fetch({
      url: 'https://account.cnblogs.com/user/userinfo',
      responseParser: (xhr) => xhr,
    }).then((res) => {
      console.log(res);
      setRes(res);
    });
  }, []);
  return <div dangerouslySetInnerHTML={{ __html: res?.response }}></div>;
};

export default App;
