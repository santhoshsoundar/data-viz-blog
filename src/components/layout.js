import React from 'react'
import RootHeader from './RootHeader'
import { rhythm } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    if (location.pathname == rootPath) {
      return (
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(38),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <RootHeader />
          {children}
        </div>
      )
    } else if (location.pathname == '/hi-folks/') {
      return (
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(68),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          {children}
        </div>
      )
    } else {
      return (
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(38),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          {children}
        </div>
      )
    }
  }
}

export default Template
