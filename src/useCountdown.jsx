import React, { useRef, useState } from 'react';
import { Input, Form, Button, message } from 'antd';
import FormRender from 'antd-form-render';
import { useCountdown } from 'react-use-lib';
// import './Login.less';

const defaultCountdown = 10;

const App = () => {
  const [telForm] = Form.useForm();
  const ref = useRef();
  const [data, setData] = useState({
    tel: '',
    code: '',
  });
  const { countdown, started, start, stop } = useCountdown({
    defaultCountdown,
  });

  const show = () => {
    const { tel } = data;
    if (isValidPhone(tel)) {
    } else {
      message.error('请输入正确的手机号码');
    }
  };

  const telFormLayout = [
    {
      type: Input,
      label: '',
      placeholder: '请输手机号',
      name: 'tel',
      elProps: {
        maxLength: 11,
      },
      itemProps: {
        validateTrigger: 'onBlur',
        rules: [
          { required: true, message: '请输入' },
          { pattern: /^1\d{10}$/, message: '手机号必须为11位数字' },
        ],
      },
    },
    {
      type: Input,
      label: '',
      placeholder: '请输入验证码',
      name: 'code',
      elProps: {
        maxLength: 4,
        suffix: (
          <span style={{ cursor: 'pointer' }} ref={ref} onClick={started ? null : start}>
            {started ? countdown + '秒' : '获取验证码'}
          </span>
        ),
      },
      itemProps: {
        rules: [
          { required: true, message: '请输入' },
          { pattern: /^\d{4}$/, message: '格式错误' },
        ],
      },
    },
    {
      render() {
        return (
          <Button type="primary" htmlType="submit">
            登陆
          </Button>
        );
      },
    },
  ];

  const onTelFormFinish = (values) => {
    console.log(values);
    history.push('/biz/customer-list');
  };

  const onValuesChange = (v) => {
    setData((p) => ({ ...p, ...v }));
  };

  return (
    <div className="page-login">
      <Form form={telForm} onValuesChange={onValuesChange} onFinish={onTelFormFinish}>
        <FormRender layoutData={telFormLayout} />
      </Form>
    </div>
  );
};

export default App;
