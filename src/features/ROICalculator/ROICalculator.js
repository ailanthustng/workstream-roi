import React from 'react';
import { Row, Col, Slider, InputNumber } from 'antd';
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

const ROICalculator = () => {
  const dispatch = useDispatch();

  /*
   * Selects the required states from the store.
   */
  const hires = useSelector(selectHires)
  const candidates = useSelector(selectCandidates)
  const interviews = useSelector(selectInterviews)
  const noShows = useSelector(selectNoShows)
  const onboarding = useSelector(selectOnboarding)
  const days = useSelector(selectDays)
  const costs = useSelector(selectCosts)

  /*
   * These methods are to prevent input values (for InputNumber) to be larger than the max.
   */
  const handleHiresInput = (value) => {
    value > 1000 ? dispatch(setHires(1000)) : dispatch(setHires(value))
  }
  const handleCandidatesInput = (value) => {
    value > 20 ? dispatch(setCandidates(20)) : dispatch(setCandidates(value))
  }
  const handleInterviewsInput = (value) => {
    value > 50 ? dispatch(setInterviews(50)) : dispatch(setInterviews(value))
  }
  const handleNoShowsInput = (value) => {
    value > 100 ? dispatch(setNoShows(100)) : dispatch(setNoShows(value))
  }
  const handleOnboardingInput = (value) => {
    value > 50 ? dispatch(setOnboarding(50)) : dispatch(setOnboarding(value))
  }
  const handleDaysInput = (value) => {
    value > 100 ? dispatch(setDays(100)) : dispatch(setDays(value))
  }
  const handleCostsInput = (value) => {
    value > 80 ? dispatch(setCosts(100)) : dispatch(setCosts(value))
  }

  return (
    <Row className="roi-wrapper">
      <Row className="row-wrapper">
        <h1>Input your values here:</h1>
      </Row>
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
            onChange={value => handleHiresInput(value)}
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
            onChange={value => handleCandidatesInput(value)}
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
            onChange={value => handleInterviewsInput(value)}
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
            onChange={value => handleNoShowsInput(value)}
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
            onChange={value => handleOnboardingInput(value)}
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
            onChange={value => handleDaysInput(value)}
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
            onChange={value => handleCostsInput(value)}
          />
        </Col>
      </Row>
    </Row>
  )
}

export default ROICalculator;