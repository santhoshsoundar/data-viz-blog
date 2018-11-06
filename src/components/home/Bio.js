import React from 'react'
import './../../styles/global.css'
import { FaChess, FaGraduationCap } from 'react-icons/fa'
import { GoWatch } from 'react-icons/go'
import { IoIosStopwatch, IoMdStopwatch } from 'react-icons/io'
import { rhythm } from '../../utils/typography'
import CircularFlow from '../charts/bio-circularFlow/CircularFlow'

let listStyle = {
  marginLeft: rhythm(2 / 3),
  lineHeight: 0.9,
}

export default () => {
  return (
    <section>
      <h3 style={{ fontWeight: 300, letterSpacing: '-1px' }}> Bio </h3>

      <div
        style={{
          marginBottom: '10px',
          lineHeight: 1.5,
        }}
      >
        {' '}
        <p>
          {' '}
          Hi. I am a data visualization engineer passionate about developing visual
          models that exert least perceptual friction. <br />
          Have spent most of my recent years in building data visualizations
          tailor-made for effective storytelling.<br />

        </p>

        <p style={{ marginBottom: -5 }}>
          I recieved a masters degree in Data Science from{' '}
          <a href="https://www.facebook.com">
            Indiana University <FaGraduationCap />
          </a>, Bloomington where I was introduced to info-vis and <a href='https://d3js.org/'>d3</a>{', '}
          with which I ended I spending most of my time facinated by visual encodings. The following is a wheel calandar inspired
          time series chart of time spent on various domains within data science until I started working full-time on data visualizations.
        </p>
        <CircularFlow />
        <p>
          Besides data visualization, I indulge myself in the following:
        </p>
        <ul
          style={{
            marginTop: '-15px',
            marginBottom: '10px',
            marginLeft: '20px',
          }}
        >
          <li style={listStyle}>
            {' '}
            Aquascaping full/semi-planted fresh water tanks & keeping schooling
            fishes
          </li>
          <li style={listStyle}>
            {' '}
            Exploring the intricacies of horology, specifically automatic
            movements{' '}
            <span
              style={{
                color: '#777',
              }}
            >
              <GoWatch />
              <IoMdStopwatch />
            </span>
          </li>
          <li style={listStyle}>
            {' '}
            Playing chess, mostly Blits & Bullet. Feel free to challenge me at{' '}
            <a href="https://www.chess.com/member/santhoshsoundar">
              Chess.com <FaChess />
            </a>{' '}
          </li>
        </ul>
      </div>
    </section>
  )
}
