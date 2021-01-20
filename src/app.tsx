import { ConfigProvider } from 'antd';
import React from 'react';
import zhCN from 'antd/lib/locale/zh_CN';

export function rootContainer(container: React.Component) {
  return <ConfigProvider locale={zhCN}>{container}</ConfigProvider>;
}
