import * as d3 from 'd3'

function importAll(r) {
    let images = {}
    r.keys().map((item, index) => {
        images[item.replace('./', '')] = r(item)
    })
    return images
}

const annotateIcons = importAll(require.context('../../assets/profile-viz/', false, /\.(png|jpe?g|svg)$/)),
    pi = Math.PI,
    innerRadius = 5;

function annotateChart(g, data, outerRadius) {
    let x = d3.scaleBand()
        .range([0, 2 * pi])
        .align(0)
        .domain(data.map(d => d.Date)),
        annotation = g.append('g').attr('id', 'flow-annotation');

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


    // flow data annotation
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
            if (d.Date == '1-Sep-15' || d.Date == '1-Jun-16' || d.Date == '1-Jun-17') {
                return '20' + d.Date.slice(-2)
            }
        })

}

export default annotateChart