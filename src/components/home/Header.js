import React from 'react'
import { FiMail } from 'react-icons/fi'
import { FaLinkedinIn, FaGithubAlt, FaTwitter } from 'react-icons/fa'
import { rhythm, scale } from '../../utils/typography'
import './../../styles/global.css'

const header = (
  <h1
    style={{
      ...scale(1.25),
      letterSpacing: '-2px',
      marginBottom: rhythm(-0.25),
      marginTop: rhythm(-0.25),
    }}
  >
    Santhosh Soundararajan
  </h1>
)

const LinkIcons = props => (
  <li
    style={{
      display: `inline-block`,
    }}
  >
    <a href={props.to} target={props.ariaLabel !== 'Mail' && "_blank"} className="icons" aria-label={props.ariaLabel}>
      <span style={{ marginRight: `1rem` }}>{props.children} </span>
    </a>
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
        <LinkIcons to="mailto:santhosh.fiddle@gmail.com" ariaLabel="Mail">
          <FiMail key="mail" />
        </LinkIcons>
        <LinkIcons to="https://www.linkedin.com/in/santhoshsoundararajan" ariaLabel="LinkedIn">
          <FaLinkedinIn key="linkedin" />
        </LinkIcons>
        <LinkIcons to="https://twitter.com/i/likes" ariaLabel="Twitter">
          <FaTwitter key="twitter" />
        </LinkIcons>
        <LinkIcons to="https://github.com/Santhosh114" ariaLabel="Github">
          <FaGithubAlt key="git" />
        </LinkIcons>
        <a
          href='Resume-Santhosh-Soundararajan.pdf'
          aria-label="Resume"
          className="icons"
          target="_blank"
          style={{ verticalAlign: 'text-bottom' }}
        >
          Resume
        </a>
      </ul>
      <p
        style={{
          display: 'inline',
          marginLeft: `0.2rem`,
          fontSize: rhythm(0.6),
          fontStyle: 'italic',
          color: '#777',
        }}
      >
        Data Visualization Engineer & Graduate in Data Science
      </p>
    </div>
  )
}
export default RootHeader
