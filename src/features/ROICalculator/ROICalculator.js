import React, { useState } from 'react';
import { Row, Col, Typography, Slider, InputNumber } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  setHires,
  selectHires
} from './roiSlice';
import './ROICalculator.css'


const { Title } = Typography;

const ROICalculator = () => {
  const dispatch = useDispatch();
  const hires = useSelector(selectHires)
  // const [hires, setHires] = useState(300)

  return (
    <Row className="roi-wrapper">
      <Col span={24}>
        <span>Workstream ROI Calculator</span>
        <p className="title">Here's what you can expect with Workstream!</p>
        <Title level={3}>Annual savings with Workstream: 10000</Title>
        <Title level={3}>New no-show rate: 15%</Title>
        <Title level={3}>How many days it takes to fill an open role: 9</Title>
      </Col>
      <Row className="row-wrapper">
        <Col span={16}>
          <Slider min={0} max={1000} onChange={() => dispatch(setHires())} value={hires} />
        </Col>
        <Col span={4}>
          <InputNumber
            min={0}
            max={1000}
            value={hires}
            onChange={setHires}
          />
        </Col>
      </Row>
    </Row>
  )
}

export default ROICalculator;