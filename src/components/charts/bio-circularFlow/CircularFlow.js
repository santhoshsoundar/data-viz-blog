import React from 'react'
import * as d3 from 'd3'
import data from './data/flow-data'
import dataRadar from './data/radar-data'
import customRadar from './radarChart'

function importAll(r) {
  let images = {}
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item)
  })
  return images
}
const annotateIcons = importAll(
  require.context('../../assets/profile-viz/', false, /\.(png|jpe?g|svg)$/)
),
  pi = Math.PI;

class CircularFlow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      omegaa: 'Blue',
    }
  }

  componentDidMount() {
    let svg = d3.select(this._rootNode)
    // svg.append('rect')
    //   .attr('width', '100%')
    //   .attr('height', '100%')
    //   .attr('fill', '#f9f9f9')



    let width = Number(svg.style('width').slice(0, -2)),
      height = Number(svg.style('height').slice(0, -2)),
      innerRadius = 5,
      outerRadius = Math.min(width, height) / 2 - 70,
      g = svg.append('g').attr('transform', 'translate(' + 200 + ',' + height / 2 + ')'),
      data_columns = Object.keys(data[0]).filter(v => v !== 'Date' && v !== 'total')

    svg.append('text')
      .text('Some Title')
      .style('font-size', 24)
      .style('font-weight', 'bold')
      .attr('fill', '#ebebeb')
      .attr('transform', 'translate(' + 480 + ',' + 50 + ')')

    svg.append('text')
      .text('Some SubTitle')
      .style('font-size', 14)

      .attr('fill', '#999')
      .attr('transform', 'translate(' + 480 + ',' + 70 + ')')


    let x = d3.scaleBand()
      .range([0, 2 * Math.PI])
      .align(0)

    let y = d3.scaleLinear().range([innerRadius, outerRadius])

    let z = d3.scaleOrdinal()
      .range(['#882d1f', '#d0743c', '#c9e0ed', '#6098ba', '#104170', '#185085'])
    // '#7bb4d5',    '#70add1', #e0e086


    x.domain(data.map(d => d.Date))
    z.domain(data_columns)

    ///////////////////////////////////       Radar Chart Module    ////////////////////////////
    let radarChart = customRadar()
      .w(200)
      .h(200)
      .margin({ top: 60, right: 0, bottom: 20, left: 20 })
      .maxValue(0.5)
      .wrapWidth(60)
      .levels(5)
      .color(z)
      .transDuration(500)
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

    let annotation = g.append('g').attr('id', 'flow-annotation')

    function renderImg(g, img, trans) {
      return g.append("image")
        .attr("xlink:href", img)
        .attr('opacity', 0.4)
        .attr("height", 30)
        .attr("width", 30)
        .attr('transform', trans)
    }

    function renderLabel(g, txt, trans) {
      return g.append('text')
        .attr('class', 'anno-text')
        .text(txt)
        // .style('font-style', 'italic')
        .attr('fill', '#999')
        .attr('transform', trans)
    }

    renderLabel(annotation, 'Graduation', 'translate(' + - outerRadius * 1.25 + ',' + -outerRadius * 0.985 + ')')

    renderImg(annotation, annotateIcons['grad.png'], 'translate(' + - outerRadius * 1.195 + ',' + -outerRadius + ')')

    annotation.append('circle')
      .attr('class', 'annot-markers')
      .attr("r", 2)
      .attr("fill", '#999')
      .attr('transform', 'translate(' + - outerRadius * 0.985 + ',' + -outerRadius * 0.8 + ')')

    var arcIntern = d3.arc()
      .innerRadius(outerRadius + 47)
      .outerRadius(outerRadius + 50)
      .startAngle(160 * (pi / 180))
      .endAngle(245 * (pi / 180))

    annotation
      .append("path")
      .attr('class', 'annot-markers')
      .attr("d", arcIntern)
      .attr("fill", "#eaeaea")

    renderLabel(annotation, 'Internship', 'translate(' + - outerRadius * 0.95 + ',' + outerRadius * 1.35 + ')')

    renderImg(annotation, annotateIcons['intern.png'], 'translate(' + - outerRadius * 0.9 + ',' + outerRadius * 1.085 + ')')

    renderLabel(annotation, 'Masters', 'translate(' + outerRadius + ',' + -outerRadius * 0.985 + ')')

    renderImg(annotation, annotateIcons['masters.png'], 'translate(' + outerRadius * 1.025 + ',' + -outerRadius * 0.95 + ')')

    // build the arrow.
    annotation.append("svg:defs").selectAll("marker")
      .data(["end"])      // Different link/path types can be defined here
      .enter().append("svg:marker")    // This section adds in the arrows
      .attr("id", String)
      .attr("viewBox", "30 30 40 40")
      .attr("refX", 15)
      .attr("refY", -1.5)
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("orient", "auto")
      .append("svg:path")
      .attr("d", "M0,-5L10,0L0,5")
      .attr('transform', 'translate(0, -10)')

    var arcMasters = d3.arc()
      .innerRadius(outerRadius + 49)
      .outerRadius(outerRadius + 52)
      .startAngle(20 * (pi / 180))
      .endAngle(38 * (pi / 180))

    annotation
      .append("path")
      .attr('class', 'annot-markers')
      .attr("d", arcMasters)
      .attr("fill", "#eaeaea")

    annotation.append("path")
      .attr('class', 'annot-markers')
      .attr("fill", "#eaeaea")
      .attr("d", "M0,-5L10,0L0,5").attr("transform", 'rotate(35)translate(10,-210)')



    let monthlyData = data.filter(d => d.Date.slice(0, 2) == '1-')
    g.append('g')
      .attr('stroke', 'none')
      .attr('fill', '#eaeaea') //f7f7f7
      .selectAll('path')
      .data(monthlyData)
      .enter()
      .append('path')
      .attr('id', d => 'arc_' + d.Date.slice(-6))
      .attr('opacity', 0)
      .attr('d', d3.arc()
        .innerRadius(outerRadius + 5)
        .outerRadius(outerRadius + 20)
        .startAngle(d => x(d.Date))
        .endAngle(d => x(d.Date) + 2 * x.bandwidth())
        .padAngle(0.05)
        .padRadius(innerRadius)
      )

    var label = g.append("g")
      .selectAll("g")
      .data(monthlyData)
      .enter().append("g")
      .attr("text-anchor", "middle")
      .attr("transform", function (d) { return "rotate(" + ((x(d.Date) + x.bandwidth()) * 180 / pi - 90) + ")translate(" + outerRadius * 1.16 + ",0)"; });

    label.append("text")
      .style('font-weight', 'bold')
      .attr('fill', '#c1c1c1')
      .attr('id', d => 'txt_' + d.Date.slice(-6))
      .attr("transform", function (d) { return (x(d.Date) + x.bandwidth() / 2 + pi / 2) % (2 * pi) < pi ? "rotate(90)translate(0,16)" : "rotate(-90)translate(0,-9)"; })
      .text(function (d) { return d.Date.replace(/[^a-z]/gi, ''); });

    var labelYr = g.append("g")
      .selectAll("g")
      .data(monthlyData)
      .enter().append("g")
      .attr("text-anchor", "middle")
      .attr("transform", function (d) { return "rotate(" + ((x(d.Date) + x.bandwidth()) * 180 / pi - 90) + ")translate(" + outerRadius * 1.25 + ",0)"; });


    labelYr.append("text")
      .attr('opacity', 0)
      .attr('fill', '#777')
      .attr('id', d => 'txtYr_' + d.Date.slice(-6))
      .attr("transform", function (d) { return (x(d.Date) + x.bandwidth() / 2 + pi / 2) % (2 * pi) < pi ? "rotate(90)translate(0,16)" : "rotate(-90)translate(0,-9)"; })
      .text(d => '20' + d.Date.slice(-2))

    var labelYrAnnotate = g.append("g")
      .selectAll("g")
      .data(monthlyData)
      .enter().append("g")
      .attr("text-anchor", "middle")
      .attr("transform", function (d) { return "rotate(" + ((x(d.Date) + x.bandwidth()) * 180 / pi - 90) + ")translate(" + outerRadius * 1.25 + ",0)"; });

    labelYrAnnotate.append("text")
      .attr('fill', '#999')
      .attr('class', 'annot-yrs')
      .attr("transform", function (d) { return (x(d.Date) + x.bandwidth() / 2 + pi / 2) % (2 * pi) < pi ? "rotate(90)translate(0,16)" : "rotate(-90)translate(0,-9)"; })
      .text(d => {
        if (d.Date == '1-Nov-15' || d.Date == '1-Jul-16' || d.Date == '1-Jun-17') {
          return '20' + d.Date.slice(-2)
        }
      })

    // g.append('circle')
    //   .attr("r", outerRadius)
    //   .attr("fill", 'none')
    //   .on('mouseover', d => {
    //     svg.selectAll('.annot-markers').attr('opacity', 0)
    //     svg.selectAll('.annot-text').attr('opacity', 0)
    //   })
    //   .on('mouseout', d => {
    //     svg.selectAll('.annot-markers').attr('opacity', 1)
    //     svg.selectAll('.annot-text').attr('opacity', 1)
    //   })

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

    var filter = legend.append('defs').append('filter').attr('id', 'glowLegend'),
      feGaussianBlur = filter.append('feGaussianBlur').attr('stdDeviation', '1').attr('result', 'coloredBlur'),
      feMerge = filter.append('feMerge'),
      feMergeNode_1 = feMerge.append('feMergeNode').attr('in', 'coloredBlur'),
      feMergeNode_2 = feMerge.append('feMergeNode').attr('in', 'SourceGraphic');

    legend.append("circle")
      .attr('id', d => d.replace(/[^A-Z0-9]/ig, "_"))
      .attr("r", 7)
      .attr("fill", z)

    legend
      .append('text')
      .attr('id', d => d.replace(/[^A-Z0-9]/ig, "_"))
      .attr('x', 12)
      .attr('dy', '0.35em')
      .text(d => d)
      .style('cursor', 'pointer')
      .on('mouseover', d => {
        d3.select('text#' + d.replace(/[^A-Z0-9]/ig, "_")).transition().attr('x', 14).style('font-weight', "bold")
        d3.select('circle#' + d.replace(/[^A-Z0-9]/ig, "_")).transition().style("filter", "url(#glowLegend)")
      })
      .on('mouseout', d => {
        d3.select('text#' + d.replace(/[^A-Z0-9]/ig, "_")).transition().attr('x', 12).style('font-weight', "normal")
        d3.select('circle#' + d.replace(/[^A-Z0-9]/ig, "_")).transition().style("filter", "")
      })
      .on('click', d => {
        console.log(d)
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
        />
      </div>
    )
  }
}

export default CircularFlow
