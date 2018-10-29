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
          marginBottom: '40px',
          lineHeight: 1.5,
        }}
      >
        {' '}
        <p>
          {' '}
          I am a data visualization engineer passionate about developing visual
          models that has least perceptual friction. <br />
          Have spent most of my recent years in building data visualizations
          with D3.js tailor-made for effective storytelling.<br />
          Besides data visualization, I indulge myself in the following:<br />
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
            Playing chess, mostly Blits and Bullet with occational Bughouse play
            for fun. <br />Feel free to challenge me at{' '}
            <a href="https://www.chess.com/member/santhoshsoundar">
              Chess.com <FaChess />
            </a>{' '}
          </li>
        </ul>
        <p>
          I recieved a masters degree in Data Science from{' '}
          <a href="https://www.facebook.com">
            Indiana University <FaGraduationCap />
          </a>, Bloomington where I picked up info-vis and it continued to take
          up more and more of attention leading to a carrer by itself. This is
          probably due to my inclination towards UI design & associated software
          development.<br /> The following is a time series chart of my journey
          into data visualization in-terms of the time spent within data science
          during my masters untill I started working as a full time data
          visualization engineer. <br />
        </p>
        <CircularFlow />
      </div>
    </section>
  )
}
