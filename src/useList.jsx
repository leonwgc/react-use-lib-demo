import React from 'react';
import { Input, Button, Form, Space } from 'antd';
import { DeleteOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { Transition, TransitionGroup } from 'react-transition-group';
import Styled from 'styled-components';
import { useList } from 'react-use-lib';

const StyledEl = Styled.div`
   transition: all 200ms ease-in-out;
   &.entered{
     opacity:1;
   }

   &.exiting,&.exited,&.entering{
     opacity:0;
   }
`;

const App = () => {
  const { list, add, remove, keys, set, moveUp, moveDown } = useList([{ name: 'wgc', age: 18 }]);

  return (
    <div>
      <TransitionGroup>
        {list.map((item, idx) => {
          return (
            <Transition key={keys[idx]} timeout={200}>
              {(state) => (
                <StyledEl className={state}>
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
                </StyledEl>
              )}
            </Transition>
          );
        })}
        <Button type="primary" onClick={() => add({})}>
          Add
        </Button>
        {JSON.stringify(list)}
      </TransitionGroup>
    </div>
  );
};

export default App;
