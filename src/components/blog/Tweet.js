import React from 'react'
import TweetEmbed from 'react-tweet-embed'

let windowWidth
if (typeof document !== "undefined") {
    windowWidth = document.documentElement.clientWidth
}

const Tweet = ({ tweetId, cardsDisable }) => {
    return (
        <span style={{
            display: (windowWidth > 786) ? 'flex' : '',
            justifyContent: 'center'

        }}>
            <TweetEmbed id={tweetId} options={{ cards: cardsDisable ? cardsDisable : {}, height: "300", width: '' }} />
        </span>
    )
}

export default Tweet

