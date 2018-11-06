// import React from 'react'
// import * as d3 from 'd3'

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











// multi plain

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












//multi feature rich

// import React from 'react'
// import * as d3 from 'd3'
// import data from './data'

class CircularFlow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      omegaa: 'Blue',
    }
  }

  updateMySt(color) {
    console.log('inside update fun')
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
        console.log('clicked')
        // this.setState(
        //   {
        //     omegaa: 'CornflowerBlue',
        //   },
        //   () => {
        //     d3.select(this._subNode)
        //       .select('rect')
        //       .transition()
        //       .attr('fill', this.state.omegaa)
        //   }
        // )
        this.updateMySt('CornflowerBlue')
        console.log('onclick :' + this.state.omegaa)
      })

    svg2
      .append('rect')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('fill', this.state.omegaa)

    console.log('mount :' + this.state.omegaa)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('update :' + this.state.omegaa)
    d3.select(this._subNode)
      .select('rect')
      .transition()
      .attr('fill', this.state.omegaa)
  }

  //   shouldComponentUpdate() {
  //     console.log('update :' + this.state.omegaa)

  //     d3.select(this._subNode)
  //       .select('rect')
  //       .transition()
  //       .attr('fill', this.state.omegaa)
  //   }

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
