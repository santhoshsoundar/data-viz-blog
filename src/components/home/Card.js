import React from 'react'
import { rhythm } from './../../utils/typography'
import Radium from 'radium'
import Img from 'gatsby-image'
import './../../styles/global.css'
import { Link, graphql } from 'gatsby'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiExternalLink, FiCodepen } from 'react-icons/fi'

let cardFocus = {
  cursor: 'pointer',
  WebkitTransform: 'scale(1.0125)',
  boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.2)',
},
  cardStyles = {
    card: {
      marginBottom: 5,
      WebkitTransition: 'all .3s ease-in-out',
      // ':hover': cardFocus,
      // ':focus': cardFocus,
      boxShadow: '0.25px 0 0.5px 0.75px rgba(0, 0, 0, 0.0825)',
    },
    title: {
      fontSize: '12.5px',
      fontWeight: '600',
      cursor: 'pointer',
      overflow: 'hidden',
      color: 'var(--main-mediumgrey-color)',
      ':hover': {
        color: 'var(--main-mcnuttblue-color)',
        textDecoration: 'underline',
      },
    },
    subTitle: {
      fontSize: '10.5px',
      color: 'var(--main-sevengrey-color)',
      fontWeight: '400',
    },
    cardIcon: {
      marginTop: '-10px',
      marginLeft: '5px',
      float: 'right',
    },
  }

let Card = props => {
  return (
    <div
      key={props.name}
      style={{
        lineHeight: 1,
        marginBottom: '2px',
      }}
    >

      {props.type == 'external' && (
        <a
          target="_blank"
          href={props.link}
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
          </span>
          <br />
          <span style={cardStyles.subTitle} id={props.name + 'sub-title'}>
            {props.month}
          </span>
        </a>
      )}

      {props.type == 'local' && (
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
          </span>
          <br />
          <span style={cardStyles.subTitle} id={props.name + 'sub-title'}>
            {props.month}
          </span>
        </Link>
      )}

      {props.sandbox && (
        <a href={props.sandbox} target="_blank" className="cardIcons" aria-label={'Codepen-Menu'}>
          <span style={cardStyles.cardIcon}>
            <FiCodepen key={props.name} />{' '}
          </span>
        </a>
      )}

      {props.github && (
        <a href={props.github} target="_blank" className="cardIcons" aria-label={'Github-Menu'}>
          <span style={cardStyles.cardIcon}>
            <FaGithub key={props.name} />{' '}
          </span>
        </a>
      )}
      {props.tweet && (
        <a href={props.tweet} target="_blank" className="cardIcons" aria-label={'Twitter-Menu'}>
          <span style={cardStyles.cardIcon}>
            <FaTwitter key={props.name} />{' '}
          </span>
        </a>
      )}
      {props.external && (
        <a
          href={props.external}
          className="cardIcons"
          aria-label={'External-Menu'}
          target="_blank"
        >
          <span style={cardStyles.cardIcon} className="cardIcons">
            <FiExternalLink key={props.name} />{' '}
          </span>
        </a>
      )}
    </div>
  )
}

Card = Radium(Card)

let CardList = prop => {
  return (
    <section>
      <h3 style={{ fontWeight: 300, letterSpacing: '-1px' }}>
        {' '}
        Blog & Personal Projects{' '}
      </h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridGap: rhythm(0.85),
          marginBottom: '40px',
          fontFamily: 'PT Sans',
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
      fluid(maxWidth: 786) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
