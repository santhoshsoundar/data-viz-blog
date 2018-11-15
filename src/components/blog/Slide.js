import React from 'react'

const Slide = ({ source }) => {
    return (
        <span style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <iframe src={source} width="876" height="620" scrolling="no" frameBorder="0" webkitallowfullscreen='true' mozallowfullscreen='true' allowFullScreen></iframe>
        </span>
    )
}

export default Slide

