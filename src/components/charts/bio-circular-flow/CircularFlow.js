import React from 'react'
import * as d3 from 'd3'
import data from './data/flow-data'
import dataRadar from './data/radar-data'
import customRadar from './radarChart'
import annotateChart from './annotateFlow'

const pi = Math.PI;

class CircularFlow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      omegaa: 'Blue',
    }
  }

  componentDidMount() {
    let svg = d3.select(this._rootNode),
      width = Number(svg.style('width').slice(0, -2)),
      height = Number(svg.style('height').slice(0, -2)),
      innerRadius = 5,
      outerRadius = Math.min(width, height) / 2 - 70,
      g = svg.append('g').attr('transform', 'translate(' + 200 + ',' + height / 2 + ')'),
      data_columns = Object.keys(data[0]).filter(v => v !== 'Date' && v !== 'total')

    svg.append('text')
      .attr('id', 'chart-title')
      .text('Skills Aquired Over My Graduate Study')
      .style('font-size', 24)
      .style('font-weight', 'bold')
      .attr('fill', '#e1e1e1')
      .attr('transform', 'translate(' + 400 + ',' + 35 + ')')


    let x = d3.scaleBand()
      .range([0, 2 * pi])
      .align(0),
      y = d3.scaleLinear().range([innerRadius, outerRadius]),
      z = d3.scaleOrdinal()
        .range(['#882d1f', '#d0743c', '#c9e0ed', '#6098ba', '#104170', '#185085'])

    x.domain(data.map(d => d.Date))
    z.domain(data_columns)

    ///////////////////////////////////       Radar Chart Module    ////////////////////////////
    let radarChart = customRadar()
      .w(200)
      .h(200)
      .margin({ top: 80, right: 0, bottom: 20, left: 20 })
      .maxValue(5)
      .wrapWidth(60)
      .levels(5)
      .color(z)
      .transDuration(750)
      .axisName('skill')
      .areaName('domain')
      .value('value')
      .key('Information Visualization');

    svg.append('g')
      .attr('transform', 'translate(576,60)')
      .attr('id', 'radar-chart')
      .datum(dataRadar)
      .call(radarChart)
    ////////////////////////////////////////////////////////

    annotateChart(g, data, outerRadius)

    g.append('circle')
      .attr("r", outerRadius)
      .on('mouseover', d => {
        svg.selectAll('.annot-markers').attr('opacity', 0)
        svg.selectAll('.annot-text').attr('opacity', 0)
      })
      .on('mouseout', d => {
        svg.selectAll('.annot-markers').attr('opacity', 1)
        svg.selectAll('.annot-text').attr('opacity', 1)
      })
      .attr("fill", 'none')

    g.append('g')
      .on('mouseover', d => {
        svg.selectAll('.annot-markers').attr('opacity', 0)
        svg.selectAll('.annot-text').attr('opacity', 0)
        svg.selectAll('.annot-yrs').attr('opacity', 0)
      })
      .on('mouseout', d => {
        svg.selectAll('.annot-markers').attr('opacity', 1)
        svg.selectAll('.annot-text').attr('opacity', 1)
        svg.selectAll('.annot-yrs').attr('opacity', 1)
      })
      .selectAll('g')
      .data(d3.stack()
        .keys(data_columns)
        .offset(d3.stackOffsetExpand)(data)
      )
      .enter()
      .append('g')
      .attr('fill', d => z(d.key))
      .on('click', click)

      .selectAll('path')
      .data(d => d)
      .enter()
      .append('path')
      .attr('d', d3.arc()
        .innerRadius(d => y(d[0]))
        .outerRadius(d => y(d[1]))
        .startAngle(d => x(d.data.Date))
        .endAngle(d => x(d.data.Date) + x.bandwidth())
        .padAngle(0.05)
        .padRadius(innerRadius)
      )
      .style('cursor', 'pointer')
      .on('mouseover', d => {
        d3.select('#arc_' + d.data.Date.slice(-6)).attr('opacity', 1)
        d3.select('#txt_' + d.data.Date.slice(-6)).style('fill', '#444')
        d3.select('#txtYr_' + d.data.Date.slice(-6)).attr('opacity', 1)
        const data = Object.keys(d.data)
          .filter(key => data_columns.includes(key))
          .reduce((obj, key) => {
            obj[key] = d.data[key];
            return obj;
          }, {});

        g.selectAll('.lg-marker').data(Object.values(data).reverse()).text(d => d + '%')
        g.selectAll('.lg-marker').attr('opacity', 1)

      })
      .on('mouseout', d => {
        d3.select('#arc_' + d.data.Date.slice(-6)).attr('opacity', 0)
        d3.select('#txt_' + d.data.Date.slice(-6)).style('fill', '#c1c1c1')
        d3.select('#txtYr_' + d.data.Date.slice(-6)).attr('opacity', 0)
        g.selectAll('.lg-marker').attr('opacity', 0)

      })

    function click(element) {
      svg.select('#radar-chart')
        .datum(dataRadar)
        .call(radarChart.key(element.key))
    }



    var yAxis = g.append('g').attr('text-anchor', 'middle')
    var yTick = yAxis
      .selectAll('g')
      .data(y.ticks(20).slice(1))
      .enter()
      .append('g')
    yTick.append('circle')
      .attr('fill', 'none')
      .attr('stroke', '#fff')
      .attr('stroke-width', 0.05)
      .attr('r', y)

    var yAxisText = g.append('g').attr('text-anchor', 'middle')
    var yTickText = yAxisText.selectAll('g')
      .data(y.ticks(3).slice(1))
      .enter()
      .append('g')
    yTickText
      .append('text')
      .attr('y', d => -y(d))
      .attr('dy', '0.35em')
      .attr('fill', 'none')
      .attr('stroke', '#fff')
      .attr('stroke-width', 5)
      .attr('stroke-linejoin', 'round')
      .text(y.tickFormat(1, '%'))
    yTickText
      .append('text')
      .attr('y', d => -y(d))
      .attr('dy', '0.35em')
      .text(y.tickFormat(5, '%'))

    var legendG = g.append('g').attr('id', 'legend')
      .attr('transform', 'translate(15,140)')

    let legend = legendG
      .selectAll('g')
      .data(data_columns.reverse())
      .enter()
      .append('g')
      .attr('transform', (d, i) => {
        return 'translate(205,' + (i - data_columns.length / 2) * 20 + ')'
      })

    var filter = legend.append('defs').append('filter').attr('id', d => "glow_" + d.replace(/[^A-Z0-9]/ig, "_")),
      feGaussianBlur = filter.append('feGaussianBlur').attr('stdDeviation', '1').attr('result', 'coloredBlur'),
      feMerge = filter.append('feMerge'),
      feMergeNode_1 = feMerge.append('feMergeNode').attr('in', 'coloredBlur'),
      feMergeNode_2 = feMerge.append('feMergeNode').attr('in', 'SourceGraphic');

    legend.append("circle")
      .attr('id', d => "circle_" + d.replace(/[^A-Z0-9]/ig, "_"))
      .attr("r", 7)
      .attr("fill", z)

    legend
      .append('text')
      .attr('id', d => "text_" + d.replace(/[^A-Z0-9]/ig, "_"))
      .attr('x', 12)
      .attr('dy', '0.35em')
      .text(d => d)
      .style('cursor', 'pointer')
      .on('mouseover', d => {
        d3.select('#text_' + d.replace(/[^A-Z0-9]/ig, "_")).transition().attr('x', 14).style('font-weight', "bold")
        d3.select('#circle_' + d.replace(/[^A-Z0-9]/ig, "_")).transition().style("filter", d => "url(#glow_" + d.replace(/[^A-Z0-9]/ig, "_") + ")")
      })
      .on('mouseout', d => {
        d3.select('#text_' + d.replace(/[^A-Z0-9]/ig, "_")).transition().attr('x', 12).style('font-weight', "normal")
        d3.select('#circle_' + d.replace(/[^A-Z0-9]/ig, "_")).transition().style("filter", "")
      })
      .on('click', d => {
        svg.select('#radar-chart')
          .datum(dataRadar)
          .call(radarChart.key(d))
      })

    legend
      .append('text')
      .attr('class', 'lg-marker')
      .attr('id', d => {
        return 'lgMkr-' + d.replace(/[^A-Z0-9]/ig, "-")
      })
      .attr('fill', '#999')
      .attr('opacity', 0)
      .attr('transform', 'translate(-35,5)')

    let renderLegend = (g, text, y_pos) => {
      return g.append('text')
        .style('font-style', 'italic')
        .style('font-size', '12px')
        .attr('fill', '#999')
        .attr('transform', 'translate(175,' + y_pos + ')')
        .text(text)
    };

    let legendBgRect = legendG.append('rect')
      .attr('x', "160")
      .attr('y', "45")
      .attr('rx', "10")
      .attr('ry', "10")
      .attr('width', "250")
      .attr('height', "45")
      .style('stroke', 'yellow')
      .style('stroke-width', '1px')
      .style('fill', '#ffffc5')

    renderLegend(legendG, 'click legend / chart to populate corresponding', 64)
    renderLegend(legendG, 'skills breakdown (self-rated out of 5)', 79)

    window.addEventListener("resize", resize);
    function resize() {
      let wd = window.innerWidth;
      if (wd < 876) {
        svg.attr("width", wd);
        svg.attr("height", (wd / 1.9043));
        svg.style('margin-top', '10px')
      } else {
        svg.attr("width", 876);
        svg.attr("height", 460);
        svg.style('margin-top', '0px')
      }
    }
    if (window.innerWidth < 876) {
      resize()
      d3.select('#chart-title').style('fill', '#C0C0C0')
    }

  }

  componentDidUpdate(prevProps, prevState, snapshot) { }

  _setRef(componentNode) {
    this._rootNode = componentNode
  }

  render() {
    return (
      <div>
        <svg
          className="circular-flow"
          width="876"
          height="460"
          fontFamily="PT Sans"
          fontSize="11"
          fill='#242424'
          ref={this._setRef.bind(this)}
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 876 460"
        />
      </div>
    )
  }
}

export default CircularFlow
