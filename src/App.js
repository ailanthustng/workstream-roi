import React from 'react';
import ROICalculator from "./features/ROICalculator/ROICalculator";
import Display from "./features/ROICalculator/Display";
import { Layout } from 'antd';
import './App.css';
import "antd/dist/antd.css";

const { Content, Sider } = Layout;

const App = () => {
  return (
    <Layout>
      <Sider theme="light" width="450" className="sider-wrapper" >
        <Display />
      </Sider>
      <Content className="content-wrapper">
        <ROICalculator />
      </Content>
    </Layout>
  );
}

export default App;
