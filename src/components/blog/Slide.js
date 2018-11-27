import React from 'react'

let windowWidth
if (typeof document !== "undefined") {
    windowWidth = document.documentElement.clientWidth
}

const Slide = ({ source }) => {
    return (
        <span style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <iframe src={source} width="876" height="620" scrolling="no" frameBorder={(windowWidth > 786) ? '0' : 1} webkitallowfullscreen='true' mozallowfullscreen='true' allowFullScreen></iframe>
        </span>
    )
}

export default Slide

