import React from 'react';
import { Row, Col } from 'antd';
import { useSelector } from 'react-redux';
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


const Display = () => {
  const hires = useSelector(selectHires)
  const candidates = useSelector(selectCandidates)
  const interviews = useSelector(selectInterviews)
  const noShows = useSelector(selectNoShows)
  const onboarding = useSelector(selectOnboarding)
  const days = useSelector(selectDays)
  const costs = useSelector(selectCosts)

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
      <Row>
        <Col span={24} className="header-wrapper">
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
    </Row>
  )
}

export default Display;