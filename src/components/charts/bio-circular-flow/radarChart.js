import * as d3 from 'd3'
export default function module() {

    let canvas,
        axisWrapper,
        axisLineJoin,
        axisTextJoin,
        radarWrapper,
        radarLineJoin,
        radarLineStrokeJoin,
        radarDotJoin,
        filter,
        feGaussianBlur,
        feMerge,
        feMergeNode_1,
        feMergeNode_2,
        cfg = {
            w: 600,				    //Width of the circle
            h: 600,				    //Height of the circle
            margin: { top: 20, right: 20, bottom: 20, left: 20 }, //The margins around the circle
            levels: 3,				//How many levels or inner circles should there be drawn
            maxValue: 0, 			//What is the value that the biggest circle will represent
            labelFactor: 1.25, 		//How much farther than the radius of the outer circle should the labels be placed
            wrapWidth: 30, 			//The number of pixels after which a label needs to be given a new line
            opacityArea: 0.35, 		//The opacity of the area of the blob
            dotRadius: 4, 			//The size of the colored circles of each blog
            opacityCircles: 0.1, 	//The opacity of the circles of each blob
            strokeWidth: 2, 		//The width of the stroke around each blob
            color: undefined,		//Color function
            axisName: "axis",
            areaName: "areaName",
            value: "value",
            key: "",
            transDuration: 700
        };

    function exports(_selection) {
        _selection.each(function (_data) {

            let axisName = cfg["axisName"],
                areaName = cfg["areaName"],
                value = cfg["value"],
                key = cfg["key"],
                t = d3.transition().duration(cfg.transDuration);

            let keyData;
            for (var i in _data) {
                if (_data[i].key == key) { keyData = _data[i].values }
            }

            let selectedAxis = (keyData.map(function (d, i) { return d[axisName] })),	//Names of each axis
                total = selectedAxis.length,			    //The number of different axes
                radius = Math.min(cfg.w / 2, cfg.h / 2),    //Radius of the outermost circle
                angleSlice = Math.PI * 2 / total;			//The width in radians of each "slice"

            //Scale for the radius
            var rScale = d3.scaleLinear()
                .range([0, radius])
                .domain([0, cfg.maxValue]);

            if (!canvas) {
                canvas = d3.select(this)
                    .append("g")
                    .attr("transform", "translate(" + (cfg.w / 2 + cfg.margin.left) + "," + (cfg.h / 2 + cfg.margin.top) + ")");

                canvas.append('text')
                    .text(key)
                    .attr('id', 'title')
                    .style('font-size', 16)
                    .style('font-weight', 'bold')
                    .attr('fill', '#d3d3d3')
                    .attr('transform', 'translate(' + -radius + ',' + -radius * 1.45 + ')')

                filter = canvas.append('defs').append('filter').attr('id', 'glow')
                feGaussianBlur = filter.append('feGaussianBlur').attr('stdDeviation', '3.5').attr('result', 'coloredBlur')
                feMerge = filter.append('feMerge')
                feMergeNode_1 = feMerge.append('feMergeNode').attr('in', 'coloredBlur')
                feMergeNode_2 = feMerge.append('feMergeNode').attr('in', 'SourceGraphic')

                axisWrapper = canvas.append("g").attr("id", "axis-wrapper");
                let gridLayer = axisWrapper.append("g").attr("id", "circular-grid");
                gridLayer.selectAll(".levels")
                    .data(d3.range(1, (cfg.levels + 1)).reverse())
                    .enter()
                    .append("circle")
                    .attr("class", "gridCircle")
                    .attr("r", function (d, i) { return radius / cfg.levels * d; })
                    .style("fill", "#CDCDCD")
                    .style("stroke", "#CDCDCD")
                    .style("fill-opacity", cfg.opacityCircles)
                    .style("filter", "url(#glow)");
                gridLayer.selectAll(".axisLabel")
                    .data(d3.range(1, (cfg.levels + 1)).reverse())
                    .enter().append("text")
                    .attr("class", "axisLabel")
                    .attr("x", 4)
                    .attr("y", function (d) { return -d * radius / cfg.levels; })
                    .attr("dy", "0.4em")
                    .style("font-size", "10px")
                    .attr("fill", "#737373")
                    .text(function (d, i) { return (cfg.maxValue * d / cfg.levels); });

                axisWrapper.append("g").attr("id", "axis-lines")
                axisWrapper.append("g").attr("id", "axis-text")

                radarWrapper = canvas.append("g").attr("id", "radar-wrapper")
                radarWrapper.append("g").attr("id", "radar-lines")
                radarWrapper.append("g").attr("id", "radar-line-stroke")
                radarWrapper.append("g").attr("id", "radar-dot")
            }

            canvas.select('#title').text(key);

            axisLineJoin = axisWrapper.select('#axis-lines').selectAll("line").data(selectedAxis);
            axisLineJoin.enter()
                .append("line")
                .attr("x1", 0)
                .attr("y1", 0)
                .attr("x2", function (d, i) { return rScale(cfg.maxValue * 1.1) * Math.cos(angleSlice * i - Math.PI / 2); })
                .attr("y2", function (d, i) { return rScale(cfg.maxValue * 1.1) * Math.sin(angleSlice * i - Math.PI / 2); })
                .attr("class", "line")
                .style("stroke", "white")
                .style("stroke-width", "2px");
            axisLineJoin.exit().remove();
            axisLineJoin.transition(t)
                .attr("x2", function (d, i) { return rScale(cfg.maxValue * 1.1) * Math.cos(angleSlice * i - Math.PI / 2); })
                .attr("y2", function (d, i) { return rScale(cfg.maxValue * 1.1) * Math.sin(angleSlice * i - Math.PI / 2); });

            axisTextJoin = axisWrapper.select('#axis-text').selectAll("text").data(selectedAxis);
            axisTextJoin.exit().remove();
            // axisTextJoin.transition(t)
            //     .attr("x", function (d, i) { return rScale(cfg.maxValue * cfg.labelFactor) * Math.cos(angleSlice * i - Math.PI / 2); })
            //     .attr("y", function (d, i) { return rScale(cfg.maxValue * cfg.labelFactor) * Math.sin(angleSlice * i - Math.PI / 2); })
            //     .text(d => d)
            //     .apply(wrap, cfg.wrapWidth)
            // axisTextJoin.enter()
            //     .append("text")
            //     .style("font-size", "11px")
            //     .attr("text-anchor", "middle")
            //     .attr("dy", "0.35em")
            //     .attr("x", function (d, i) { return rScale(cfg.maxValue * cfg.labelFactor) * Math.cos(angleSlice * i - Math.PI / 2); })
            //     .attr("y", function (d, i) { return rScale(cfg.maxValue * cfg.labelFactor) * Math.sin(angleSlice * i - Math.PI / 2); })
            //     .text(d => d)
            //     .call(wrap, cfg.wrapWidth)

            // axisTextJoin.transition(t)
            //     .attr("x", function (d, i) { return rScale(cfg.maxValue * cfg.labelFactor) * Math.cos(angleSlice * i - Math.PI / 2); })
            //     .attr("y", function (d, i) { return rScale(cfg.maxValue * cfg.labelFactor) * Math.sin(angleSlice * i - Math.PI / 2); })
            //     .text(d => d)
            //     .call(wrap, cfg.wrapWidth)

            axisTextJoin.enter()
                .append("text")
                .style("font-size", "10px")
                .style("fill", "#777")
                .attr("text-anchor", "middle")
                .attr("dy", "0.35em")
                .merge(axisTextJoin)
                .attr("x", function (d, i) { return rScale(cfg.maxValue * cfg.labelFactor) * Math.cos(angleSlice * i - Math.PI / 2); })
                .attr("y", function (d, i) { return rScale(cfg.maxValue * cfg.labelFactor) * Math.sin(angleSlice * i - Math.PI / 2); })
                .text(d => d)
                .call(wrap, cfg.wrapWidth)


            //The radial line function
            let radarLine = d3.radialLine()
                .curve(d3.curveCardinalClosed)
                .radius(function (d) { return rScale(d[value]); })
                .angle(function (d, i) { return i * angleSlice; });


            radarLineJoin = radarWrapper.select('#radar-lines').selectAll('path').data([keyData])
            radarLineJoin
                .enter()
                .append('path')
                .attr("class", function (d) {
                    return "radarArea" + " " + d[0][areaName].replace(/\s+/g, '')
                })
                .attr("d", function (d, i) { return radarLine(d); })
                .style("fill", function (d, i) { return cfg.color(d[0][areaName]); })
                .style("fill-opacity", cfg.opacityArea)

            radarLineJoin.exit().remove();
            radarLineJoin.transition(t)
                .attr("d", function (d, i) { return radarLine(d); })
                .style("fill", function (d, i) {
                    if (cfg.color(d[0][areaName]) == '#c9e0ed') {
                        return '#b0d2e5';
                    }
                    return cfg.color(d[0][areaName]);
                })

            radarLineStrokeJoin = radarWrapper.select('#radar-line-stroke').selectAll('path').data([keyData])
            radarLineStrokeJoin
                .enter()
                .append("path")
                .attr("d", function (d, i) { return radarLine(d); })
                .style("stroke-width", cfg.strokeWidth + "px")
                .style("stroke", function (d, i) { return cfg.color(d[0][areaName]) })
                .style("fill", "none")
                .style("filter", "url(#glow)");

            radarLineStrokeJoin.exit().remove();
            radarLineStrokeJoin.transition(t)
                .attr("d", function (d, i) { return radarLine(d); })
                .style("stroke", function (d, i) {
                    if (cfg.color(d[0][areaName]) == '#c9e0ed') {
                        return '#84b4d0';
                    }
                    return cfg.color(d[0][areaName]);
                })


            radarDotJoin = radarWrapper.select('#radar-dot').selectAll('circle').data(keyData)
            radarDotJoin
                .enter()
                .append("circle")
                .attr("r", cfg.dotRadius)
                .attr("cx", function (d, i) { return rScale(d[value]) * Math.cos(angleSlice * i - Math.PI / 2); })
                .attr("cy", function (d, i) { return rScale(d[value]) * Math.sin(angleSlice * i - Math.PI / 2); })
                .style("fill", function (d, i, j) {
                    return cfg.color(d['domain']);
                })
                .style("fill-opacity", 0.8)
                .style("filter", "url(#glow)");
            radarDotJoin.exit().remove()
            radarDotJoin.transition(t)
                .attr("cx", function (d, i) { return rScale(d[value]) * Math.cos(angleSlice * i - Math.PI / 2); })
                .attr("cy", function (d, i) { return rScale(d[value]) * Math.sin(angleSlice * i - Math.PI / 2); })
                .style("fill", function (d, i, j) {
                    if (cfg.color(d['domain']) == '#c9e0ed') {
                        return '#84b4d0';
                    }
                    return cfg.color(d['domain']);
                })

        });
    }

    // GETTERS AND SETTERS:
    exports.w = function (_x) {
        if (!arguments.length) return cfg.w;
        cfg.w = parseInt(_x);
        return this;
    }
    exports.h = function (_x) {
        if (!arguments.length) return cfg.h;
        cfg.h = parseInt(_x);
        return this;
    }
    exports.margin = function (_x) {
        if (!arguments.length) return cfg.margin;
        cfg.margin = _x;
        return this;
    }
    exports.maxValue = function (_x) {
        if (!arguments.length) return cfg.maxValue;
        cfg.maxValue = _x;
        return this;
    };
    exports.wrapWidth = function (_x) {
        if (!arguments.length) return cfg.wrapWidth;
        cfg.wrapWidth = _x;
        return this;
    };
    exports.levels = function (_x) {
        if (!arguments.length) return cfg.levels;
        cfg.levels = parseInt(_x);
        return this;
    };
    exports.color = function (_x) {
        if (!arguments.length) return cfg.color;
        cfg.color = _x;
        return this;
    };
    exports.axisName = function (_x) {
        if (!arguments.length) return cfg.axisName;
        cfg.axisName = _x;
        return this;
    };
    exports.areaName = function (_x) {
        if (!arguments.length) return cfg.areaName;
        cfg.areaName = _x;
        return this;
    };
    exports.value = function (_x) {
        if (!arguments.length) return cfg.value;
        cfg.value = _x;
        return this;
    };
    exports.key = function (_x) {
        if (!arguments.length) return cfg.key;
        cfg.key = _x;
        return this;
    };
    exports.transDuration = function (_x) {
        if (!arguments.length) return cfg.transDuration;
        cfg.transDuration = _x;
        return this;
    };

    return exports;
};

/////////////    Utility Functions  //////////////

//Wraps SVG text	
function wrap(text, width) {

    text.each(function () {
        let text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 1.4, // ems
            y = text.attr("y"),
            x = text.attr("x"),
            dy = parseFloat(text.attr("dy")),
            tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");

        while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > width) {
                line.pop();
                tspan.text(line.join(" "));
                line = [word];
                tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
            }
        }
    });
}

function tweenText(newValue) {
    return function () {
        var currentValue = +this.textContent;

        var i = d3.interpolateRound(currentValue, newValue);

        return function (t) {
            this.textContent = i(t);
        };
    }
}