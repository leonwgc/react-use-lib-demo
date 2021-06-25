import React from 'react';
import { Input, Button, Form, Space } from 'antd';
import { DeleteOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { useList } from 'react-use-lib';

const App = () => {
  const { list, add, remove, keys, set, moveUp, moveDown } = useList([{ name: 'wgc', age: 18 }]);

  return (
    <div>
      {list.map((item, idx) => {
        return (
          <div key={keys[idx]}>
            <Space align="start">
              <Form.Item label="name">
                <Input
                  value={item.name}
                  onChange={(e) => set(idx, { ...item, name: e.target.value })}
                />
              </Form.Item>
              <Form.Item label="age">
                <Input
                  value={item.age}
                  onChange={(e) => set(idx, { ...item, age: e.target.value })}
                />
              </Form.Item>
              {idx > 0 ? (
                <>
                  <Button icon={<DeleteOutlined />} onClick={() => remove(idx)}></Button>
                  <Button icon={<ArrowUpOutlined />} onClick={() => moveUp(idx)}></Button>
                </>
              ) : null}

              {idx < list.length - 1 ? (
                <Button icon={<ArrowDownOutlined />} onClick={() => moveDown(idx)}></Button>
              ) : null}
            </Space>
          </div>
        );
      })}
      <Button type="primary" onClick={() => add('')}>
        Add
      </Button>
      {JSON.stringify(list)}
    </div>
  );
};

export default App;
