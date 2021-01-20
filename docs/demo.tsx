import React from 'react';
import { DatePicker } from 'antd-demo';
import { DatePicker as AntdDatePicker } from 'antd';
import 'antd/dist/antd.css';
const Demo = () => {
  return (
    <div>
      <p>lerna 组件</p>
      <DatePicker />
      <p>antd 组件</p>
      <AntdDatePicker />
    </div>
  );
};

export default Demo;
