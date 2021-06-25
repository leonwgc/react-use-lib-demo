import React, { useState, useRef } from 'react';
import { useSort } from 'react-use-lib';
import './useSort.less';

const ar = Array.from(new Array(10), (v, i) => ({ id: i + 1 + '', value: i + 1 }));

const App = () => {
  const ref = useRef();
  const [data, setData] = useState(ar);

  useSort(ref, {
    store: {
      set: function (ss) {
        let ar = ss.toArray();
        let _data = data.sort((a, b) => ar.indexOf(a.id) - ar.indexOf(b.id));
        setData(_data);
      },
    },
  });

  return (
    <ul ref={ref}>
      {ar.map((item, index) => (
        <li key={index} data-id={item.id}>
          list{item.value}
        </li>
      ))}
    </ul>
  );
};

export default App;
