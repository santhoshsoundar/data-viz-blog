import React from 'react'
import Radium, { StyleRoot } from 'radium'
import './../../styles/global.css'
import { FaChess, FaGraduationCap } from 'react-icons/fa'
import { GoWatch } from 'react-icons/go'
import { IoMdStopwatch } from 'react-icons/io'
import { rhythm } from '../../utils/typography'
import CircularFlow from '../charts/bio-circular-flow/CircularFlow'

var styles = {
  marginLeft: rhythm(2 / 3),
  lineHeight: 0.7,

  '@media (max-width: 800px)': {
    lineHeight: 1.2,
  },
}

let bio = () => {
  return (
    <section>
      <h2 style={{ fontWeight: 300, letterSpacing: '-1px', marginTop: '1.5rem' }}> Bio </h2>

      <div
        style={{
          marginBottom: '10px',
          lineHeight: 1.5,
        }}
      >
        {' '}
        <p>
          {' '}
          I am a data visualization engineer passionate about developing visual
          models that exert least perceptual friction. <br />
          Have spent most of my recent years building data-driven products
          tailor-made for requirements ranging from self-containing exploratory
          analysis tools to infographics for visual storytelling.
          My design process values intution over gratuitous extravagance.
        </p>

        <StyleRoot>
          <p style={{
            marginBottom: -2,
            '@media (max-width: 800px)': {
              marginBottom: -5,
            },
          }}>
            I received my masters degree in Data Science from{' '}
            <a href="https://www.sice.indiana.edu/graduate/degrees/data-science/courses/index.html">
              Indiana University <FaGraduationCap />
            </a>, Bloomington where I was introduced to info-vis and <a href='https://d3js.org/'>d3</a>{'. '}
            I then ended up spending most of my time with it fascinated by visual encodings.
            Would like to present this wheel calandar inspired
            chart of time spent on various domains within data science, starting from my masters upto work.
        </p>
        </StyleRoot>
        <CircularFlow />
        <br />
        <p>
          Besides data visualization, I indulge myself in the following:
        </p>
        <StyleRoot>
          <ul
            style={{
              marginTop: '-15px',
              marginBottom: '10px',
              marginLeft: '20px',
            }}
          >
            <li style={styles}>
              {' '}
              Aquascaping full/semi-planted fresh water tanks & keeping schooling
              fishes
            </li>
            <li style={styles}>
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
            <li style={styles}>
              {' '}
              Playing chess, mostly Blits & Bullet. Feel free to challenge me at{' '}
              <a href="https://www.chess.com/member/santhoshsoundar">
                Chess.com <FaChess />
              </a>{' '}
            </li>
          </ul>
        </StyleRoot>
      </div>
    </section >
  )
}

bio = Radium(bio)

export default bio