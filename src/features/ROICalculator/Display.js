import React from 'react';
import { Row, Col, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import {
  isMobileOnly
} from "react-device-detect";
import {
  selectHires,
  selectCandidates,
  selectInterviews,
  selectNoShows,
  selectOnboarding,
  selectDays,
  selectCosts
} from './roiSlice';
import './display.css'


const Display = ({setCollapsed, collapsed}) => {
  const hires = useSelector(selectHires);
  const candidates = useSelector(selectCandidates);
  const interviews = useSelector(selectInterviews);
  const noShows = useSelector(selectNoShows);
  const onboarding = useSelector(selectOnboarding);
  const days = useSelector(selectDays);
  const costs = useSelector(selectCosts);

  /*
   * Functions to calculate the various results based on the formulas provided.
   */
  const calculateAnnualSavings = () => {
    return hires * (candidates + interviews + onboarding) * costs / 2;
  }

  const calculateNoShowRate = () => {
    return noShows / 2;
  }

  const calculateAvgDays = () => {
    return (days * 0.3).toFixed(1);
  }

  return (
    <Row className="display-wrapper">
      {/* Shows only if is a mobile device and is not collapsed */}
      {isMobileOnly && !collapsed ?
        <Row className="arrow-wrapper">
          <h4>Tap on the arrow to access inputs!</h4>
          <Button
            type="primary"
            shape="circle"
            icon={<RightOutlined rotate={collapsed ? 0 : 180}/>}
            size="large"
            onClick={() => setCollapsed(true)}
          />
        </Row>
      : "" }
      {/* Hides the content when collapsed so that transition looks smoother. */}
      {!collapsed ?
        <>
          <Row>
            <Col span={24} className={`header-wrapper ${isMobileOnly ? "header-wrapper-mobile" : ""}`}>
              <h1>Workstream ROI Calculator</h1>
            </Col>
            <Col span={24} className="subheader-wrapper">
              <span>Here's what you can expect with Workstream:</span>
            </Col>
          </Row>
          <Col className="calculations-wrapper">
            <h1>Annual savings of: <p>${calculateAnnualSavings()}</p></h1>
            <h1>Your no-show rate goes down to: <p>{calculateNoShowRate()}%</p></h1>
            <h1>New average days it takes to fill an open role: <p>{calculateAvgDays()} days</p></h1>
          </Col>
        </>
        : ""
      }
    </Row>
  )
}

export default Display;