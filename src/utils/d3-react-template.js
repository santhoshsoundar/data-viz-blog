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











// multi

class CircularFlow extends React.Component {
  componentDidMount() {
    var svg = d3.select(this._rootNode)
    var svg2 = d3.select(this._subNode)
    svg
      .append('rect')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('fill', 'pink')

    svg2
      .append('rect')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('fill', 'CornflowerBlue')

    console.log(data)
    console.log(data)
    // d3.csv(
    //   './data.csv',
    //   function(d, i, columns) {
    //     for (i = 1, t = 0; i < columns.length; ++i)
    //       t += d[columns[i]] = +d[columns[i]]
    //     d.total = t
    //     return d
    //   },
    //   function(error, data) {
    //     if (error) throw error
    //     console.log(data)
    //   }
    // )
  }

  shouldComponentUpdate() {
    return false
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
