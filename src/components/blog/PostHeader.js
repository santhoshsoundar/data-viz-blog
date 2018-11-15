import React from 'react'
import { Link } from 'gatsby'
import { rhythm } from '../../utils/typography'

const PostHeader = props => {
  return (
    <pre
      style={{
        fontFamily: 'PT Sans, sans-serif',
        marginTop: 0,
        marginBottom: rhythm(-1),
      }}
    >
      {props.postdate} /
      <Link
        style={{
          fontFamily: 'PT Sans, sans-serif',
        }}
        to={'/'}
        aria-label="home"
      >
        {' '}
        Santhosh Soundararajan
      </Link>
    </pre>
  )
}

export default PostHeader
