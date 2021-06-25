import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import { useCookie } from 'react-use-lib';

const App = () => {
  const [value, setValue] = useCookie('input');

  return (
    <div>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

export default App;
