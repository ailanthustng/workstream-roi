import React, {useState} from 'react';
import { Layout } from 'antd';
import './App.css';
import "antd/dist/antd.css";
import {
  isMobileOnly
} from "react-device-detect";

import ROICalculator from "./features/ROICalculator/ROICalculator";
import Display from "./features/ROICalculator/Display";


const { Content, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout>
      <Sider
        theme="light"
        className="sider-wrapper"
        width={isMobileOnly ? window.innerWidth : "450"}
        collapsedWidth={0}
        collapsed={collapsed}
      >
        <Display
          setCollapsed={setCollapsed}
          collapsed={collapsed}
        />
      </Sider>
      <Content className="content-wrapper">
        <ROICalculator
          setCollapsed={setCollapsed}
          collapsed={collapsed}
        />
      </Content>
    </Layout>
  );
}

export default App;
