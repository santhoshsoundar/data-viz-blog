import React from 'react'
import gray from 'gray-percentage'
import { rhythm } from './../../utils/typography'

const Quote = () => {
  return (
    <div
      style={{
        display: 'flex',
        marginBottom: 0,
      }}
    >
      <p
        style={{
          borderLeft: `${rhythm(3 / 16)} solid #15a3d3`,
          color: gray(41),
          paddingLeft: rhythm(13 / 16),
          fontStyle: 'italic',
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
      >
        "Only a picture can carry such a volume of data in such as small space."{' '}
        {' - '}
        <a href="https://www.edwardtufte.com/">Edward Tufte</a>
      </p>
    </div>
  )
}

export default Quote
