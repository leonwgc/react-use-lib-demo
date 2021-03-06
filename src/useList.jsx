import React from 'react';
import { Input, Button, Form, Space } from 'antd';
import { DeleteOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { Transition, TransitionGroup } from 'react-transition-group';
import Styled from 'styled-components';
import { useList } from 'react-use-lib';

const StyledEl = Styled.div`
   transition: all ${(props) => props.duration}ms ease-in-out;
   &.entered{
     opacity:1;
     transform:translate(0,0);
   }

   &.exiting,&.exited,&.entering{
     opacity:0;
     transform:translate(-100%,0);
   }
`;

const timeout = 200;
const App = () => {
  const { list, add, remove, keys, set, moveUp, moveDown } = useList([{ name: 'wgc', age: 18 }]);

  return (
    <div>
      <TransitionGroup>
        {list.map((item, idx) => {
          return (
            <Transition key={keys[idx]} timeout={timeout}>
              {(state) => (
                <StyledEl className={state} duration={timeout}>
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
