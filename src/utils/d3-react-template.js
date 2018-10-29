import React from 'react'
import * as d3 from 'd3'

class CircularFlow extends React.Component {
  componentDidMount() {
    var svg = d3.select(this._rootNode)
  }

  shouldComponentUpdate() {
    return false
  }

  _setRef(componentNode) {
    this._rootNode = componentNode
  }

  render() {
    return (
      <svg
        className="circular-flow"
        width="200"
        height="200"
        ref={this._setRef.bind(this)}
      />
    )
  }
}

export default CircularFlow
