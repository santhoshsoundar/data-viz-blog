import React from 'react'
import Link from 'gatsby-link'
import { FiMail } from 'react-icons/fi'
import { FaLinkedinIn, FaGithubAlt, FaTwitter } from 'react-icons/fa'
import { rhythm, scale } from '../utils/typography'
import './../styles/global.css'

const header = (
  <h1
    style={{
      ...scale(1.25),
      marginBottom: rhythm(-0.25),
      marginTop: 0,
    }}
  >
    <Link
      style={{
        color: 'inherit',
        fontWeight: 400,
        backgroundImage: 'none',
        boxShadow: 'none',
        textDecoration: 'none',
      }}
      to={'/'}
      aria-label="home"
    >
      Santhosh Soundararajan
    </Link>
  </h1>
)

const LinkIcons = props => (
  <li
    style={{
      display: `inline-block`,
    }}
  >
    <Link to={props.to} className="icons" aria-label={props.ariaLabel}>
      <span style={{ marginRight: `1rem` }}>{props.children} </span>
    </Link>
  </li>
)

const RootHeader = () => {
  return (
    <div style={{ marginBottom: rhythm(1.5) }}>
      {header}
      <ul
        style={{
          listStyle: `none`,
          float: `right`,
          display: 'inline',
          fontFamily: 'PT Sans',
        }}
      >
        {' '}
        <LinkIcons to="/about/" ariaLabel="Mail">
          <FiMail key="mail" />
        </LinkIcons>
        <LinkIcons to="/about/" ariaLabel="LinkedIn">
          <FaLinkedinIn key="linkedin" />
        </LinkIcons>
        <LinkIcons to="/about/" ariaLabel="Twitter">
          <FaTwitter key="twitter" />
        </LinkIcons>
        <LinkIcons to="/about/" ariaLabel="Github">
          <FaGithubAlt key="git" />
        </LinkIcons>
        <Link
          to="/contact/"
          aria-label="Resume"
          className="icons"
          style={{ verticalAlign: 'text-bottom' }}
        >
          Resume
        </Link>
      </ul>
      <p
        style={{
          fontStyle: 'italic',
          display: 'inline',
          marginLeft: `0.2rem`,
          fontSize: rhythm(0.61),
        }}
      >
        Data Visualization Engineer & Graduate in Data Science
      </p>
    </div>
  )
}
export default RootHeader
