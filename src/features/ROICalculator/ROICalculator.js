import React from 'react';
import { Row, Col, Typography, Slider, InputNumber } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  setHires,
  setCandidates,
  setInterviews,
  setNoShows,
  setOnboarding,
  setDays,
  setCosts,
  selectHires,
  selectCandidates,
  selectInterviews,
  selectNoShows,
  selectOnboarding,
  selectDays,
  selectCosts
} from './roiSlice';
import './ROICalculator.css'
import marks from './sliderMarks'

const { Title } = Typography;

const ROICalculator = () => {
  const dispatch = useDispatch();
  const hires = useSelector(selectHires)
  const candidates = useSelector(selectCandidates)
  const interviews = useSelector(selectInterviews)
  const noShows = useSelector(selectNoShows)
  const onboarding = useSelector(selectOnboarding)
  const days = useSelector(selectDays)
  const costs = useSelector(selectCosts)

  return (
    <Row className="roi-wrapper">
      <Row className="row-wrapper">
        <Col span={7}>
          <h1>New Hires</h1>
          <p>How many hires do you make per year?</p>
          <h2>{hires ? hires : 0}</h2>
        </Col>
        <Col span={13}>
          <Slider min={0} max={1000} marks={marks.hiresMark} onChange={value => dispatch(setHires(value))} value={hires} />
        </Col>
        <Col span={2} style={{paddingLeft: "20px"}}>
          <InputNumber
            min={0}
            max={1000}
            value={hires}
            onChange={value => {dispatch(setHires(value))}}
          />
        </Col>
      </Row>
      <Row className="row-wrapper">
        <Col span={7}>
          <h1>Sourcing Candidates</h1>
          <p>How many hours do you spend per candidate?</p>
          <h2>{candidates ? candidates : 0}</h2>
        </Col>
        <Col span={13}>
          <Slider min={0} max={20} marks={marks.candidateMark} onChange={value => dispatch(setCandidates(value))} value={candidates} />
        </Col>
        <Col span={2} style={{paddingLeft: "20px"}}>
          <InputNumber
            min={0}
            max={20}
            value={candidates}
            onChange={value => {dispatch(setCandidates(value))}}
          />
        </Col>
      </Row>
      <Row className="row-wrapper">
        <Col span={7}>
          <h1>Scheduling Interviews</h1>
          <p>How many hours do you spend per candidate?</p>
          <h2>{interviews ? interviews : 0}</h2>
        </Col>
        <Col span={13}>
          <Slider min={0} max={50} marks={marks.interviewMark} onChange={value => dispatch(setInterviews(value))} value={interviews} />
        </Col>
        <Col span={2} style={{paddingLeft: "20px"}}>
          <InputNumber
            min={0}
            max={50}
            value={interviews}
            onChange={value => {dispatch(setInterviews(value))}}
          />
        </Col>
      </Row>
      <Row className="row-wrapper">
        <Col span={7}>
          <h1>Reducing No-Shows</h1>
          <p>What percent don't show up?</p>
          <h2>{noShows ? noShows : 0}</h2>
        </Col>
        <Col span={13}>
          <Slider min={0} max={100} marks={marks.noShowMark} onChange={value => dispatch(setNoShows(value))} value={noShows} />
        </Col>
        <Col span={2} style={{paddingLeft: "20px"}}>
          <InputNumber
            min={0}
            max={100}
            value={noShows}
            onChange={value => {dispatch(setNoShows(value))}}
          />
        </Col>
      </Row>
      <Row className="row-wrapper">
        <Col span={7}>
          <h1>Onboarding</h1>
          <p>How many hours do you spend on onboarding?</p>
          <h2>{onboarding ? onboarding : 0}</h2>
        </Col>
        <Col span={13}>
          <Slider min={0} max={50} marks={marks.onboardingMark} onChange={value => dispatch(setOnboarding(value))} value={onboarding} />
        </Col>
        <Col span={2} style={{paddingLeft: "20px"}}>
          <InputNumber
            min={0}
            max={50}
            value={onboarding}
            onChange={value => {dispatch(setOnboarding(value))}}
          />
        </Col>
      </Row>
      <Row className="row-wrapper">
        <Col span={7}>
          <h1>Days to Hire</h1>
          <p>How many days does it take to fill a role?</p>
          <h2>{days ? days : 0}</h2>
        </Col>
        <Col span={13}>
          <Slider min={0} max={100} marks={marks.daysMark} onChange={value => dispatch(setDays(value))} value={days} />
        </Col>
        <Col span={2} style={{paddingLeft: "20px"}}>
          <InputNumber
            min={0}
            max={100}
            value={days}
            onChange={value => {dispatch(setDays(value))}}
          />
        </Col>
      </Row>
      <Row className="row-wrapper">
        <Col span={7}>
          <h1>Costs</h1>
          <p>How much do you pay your hiring managers per hour?</p>
          <h2>{costs ? costs : 0}</h2>
        </Col>
        <Col span={13}>
          <Slider min={0} max={80} marks={marks.costsMark} onChange={value => dispatch(setCosts(value))} value={costs} />
        </Col>
        <Col span={2} style={{paddingLeft: "20px"}}>
          <InputNumber
            min={0}
            max={80}
            value={costs}
            onChange={value => {dispatch(setCosts(value))}}
          />
        </Col>
      </Row>
    </Row>
  )
}

export default ROICalculator;