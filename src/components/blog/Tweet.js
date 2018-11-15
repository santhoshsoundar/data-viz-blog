import React from 'react'
import TweetEmbed from 'react-tweet-embed'

const Tweet = ({ tweetId, cardsDisable }) => {
    return (
        <span style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <TweetEmbed id={tweetId} options={{ cards: cardsDisable ? cardsDisable : {} }} />
        </span>
    )
}

export default Tweet

