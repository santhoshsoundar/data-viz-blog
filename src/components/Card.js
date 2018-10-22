import React from 'react'
import { rhythm } from '../utils/typography'
import Radium from 'radium'
import Img from 'gatsby-image'
import './../styles/global.css'
import { Link, graphql } from 'gatsby'

let cardFocus = {
    cursor: 'pointer',
    WebkitTransform: 'scale(1.0125)',
    boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.2)',
  },
  cardStyles = {
    card: {
      marginBottom: 5,
      WebkitTransition: 'all .3s ease-in-out',
      ':hover': cardFocus,
      ':focus': cardFocus,
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.15)',
    },
    title: {
      fontFamily: 'PT Sans',
      fontSize: '12px',
      fontWeight: '600',
      cursor: 'pointer',
      overflow: 'hidden',
      color: 'var(--main-devilgrey-color)',
      ':hover': {
        color: 'var(--main-mcnuttblue-color)',
        textDecoration: 'underline',
      },
    },
    subTitle: {
      fontFamily: 'PT Sans',
      fontSize: '10.5px',
      color: 'var(--main-darkgrey-color)',
      fontWeight: '400',
    },
  }

let Card = props => {
  return (
    <div
      style={{
        lineHeight: 1,
        marginBottom: '2px',
      }}
    >
      <Link
        to={props.link}
        style={{
          color: 'inherit',
          backgroundImage: 'none',
          boxShadow: 'none',
          textDecoration: 'none',
        }}
      >
        <span style={cardStyles.title} id={props.name + 'title'}>
          <Img key={props.name} style={cardStyles.card} fluid={props.img} />
          {props.name}
          <br />
        </span>
        <span style={cardStyles.subTitle}>{props.company}</span>
      </Link>
    </div>
  )
}

Card = Radium(Card)

let CardList = prop => {
  return (
    <section>
      <h3 style={{ fontWeight: 300 }}> Projects & Blog </h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridGap: rhythm(0.85),
          marginBottom: '40px',
        }}
      >
        {prop.image_info.map(card => <Card {...card} key={card.name} />)}
      </div>
    </section>
  )
}

export default CardList

export const pageQuery = graphql`
  fragment cardFluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
