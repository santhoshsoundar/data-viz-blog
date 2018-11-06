import React from 'react'
// import * as d3 from 'd3'
// import data from './data'

class CircularFlow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      omegaa: 'Blue',
    }
  }

  updateBgColor(color) {
    this.setState({
      omegaa: color,
    })
  }

  componentDidMount() {
    var svg = d3.select(this._rootNode)
    var svg2 = d3.select(this._subNode)
    svg
      .append('rect')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('fill', 'pink')
      .on('click', () => {
        this.updateBgColor('CornflowerBlue')
      })

    svg2
      .append('rect')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('fill', this.state.omegaa)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    d3.select(this._subNode)
      .select('rect')
      .transition()
      .attr('fill', this.state.omegaa)
  }

  _setRef(componentNode) {
    this._rootNode = componentNode
  }
  _setRefSub(componentNodeSub) {
    this._subNode = componentNodeSub
  }

  render() {
    return (
      <div>
        <svg
          className="circular-flow"
          width="532"
          height="420"
          ref={this._setRef.bind(this)}
        />
        <svg
          className="radial-sub"
          width="344"
          height="420"
          ref={this._setRefSub.bind(this)}
        />
      </div>
    )
  }
}

export default CircularFlow
