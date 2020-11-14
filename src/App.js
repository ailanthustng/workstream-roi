import React from 'react';
import ROICalculator from "./features/ROICalculator/ROICalculator";
import { Layout } from 'antd';
import './App.css';
import "antd/dist/antd.css";

const { Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Content className="content-wrapper">
        <ROICalculator />
      </Content>
    </Layout>
  );
}

export default App;
