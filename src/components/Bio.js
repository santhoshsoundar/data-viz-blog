import React from 'react'
import profilePic from './assets/profile-image.jpg'
import { rhythm } from '../utils/typography'

const Bio = () => {
  return (
    <div
      style={{
        display: 'flex',
        marginBottom: rhythm(2.5),
      }}
    >
      <p>
        Written by <strong>Santhosh Soundararajan</strong> who lives and works
        in San Francisco building useful things.{' '}
        <a href="https://twitter.com/kylemathews">
          You should follow him on Twitter
        </a>
      </p>
      <img
        src={profilePic}
        alt={`Santhosh Soundararajan`}
        style={{
          marginRight: rhythm(0.5),
          marginBottom: 0,
          height: rhythm(5),
        }}
      />
    </div>
  )
}

export default Bio
