// Bar chart Module
/////////////////////////////////

import * as d3 from 'd3'

export default function module() {
    // Defaults values:
    var margin = { top: 10, right: 10, bottom: 20, left: 20 },
        width = 500,
        height = 300,
        filler = '#777';


    function exports(_selection) { // create function to export
        _selection.each(function (_data) { // loop
            // var test_data = _data.value;
            // var rectW = (_data.row + 2) * 10,
            //     rectH = (_data.col + 1) * 10;

            // // Select all bars and bind data:
            // var bars = d3.select(this).selectAll(".bar")
            //     .data(test_data)
            //     .enter().append("rect");

            // //console.log(i+": "+JSON.stringify(_data.value));

            // // design svg elements
            // bars.attr("class", "bar")
            //     .attr({
            //         'width': rectH,
            //         'x': function (d) { console.log(" log place1! "); return d.x * 10; },
            //         'y': function (d) { return d.y * 4; },
            //         'height': rectH * 4
            //     });
            // console.log(" log place2! ");

            // console.log(_data)
            // console.log(_selection)


            let rectObj = d3.select(this).append('rect')
                .attr('width', _data.length * 2)
                .attr('height', _data.length * 2)
                .attr('fill', filler);

            // rectObj.exit().remove();

        });
    }// exports end

    // GETTERS AND SETTERS: 
    exports.width = function (_x) {
        if (!arguments.length) return width;
        width = parseInt(_x);
        return this;
    };
    exports.height = function (_x) {
        if (!arguments.length) return height;
        height = parseInt(_x);
        return this;
    };
    exports.filler = function (_x) {
        if (!arguments.length) return filler;
        filler = _x;
        return this;
    };

    return exports;
};

























import * as d3 from 'd3'

export default function module() {

    var margin = { top: 10, right: 10, bottom: 20, left: 20 },
        width = 500,
        height = 300,
        filler = '#777';


    function exports(_selection) { // create function to export
        _selection.each(function (_data) { // loop

            // console.log(_data)
            // console.log(_selection)

            let rectObj;

            if (!d3.select('rect#square').node()) {
                rectObj = d3.select(this).append('rect').attr('id', 'square')
                    .attr('width', _data.length * 2)
                    .attr('height', _data.length * 2)
            } else {
                rectObj = d3.select('rect#square')
            }


            rectObj.transition().attr('fill', filler);



        });
    }// exports end

    // GETTERS AND SETTERS: 
    exports.width = function (_x) {
        if (!arguments.length) return width;
        width = parseInt(_x);
        return this;
    };
    exports.height = function (_x) {
        if (!arguments.length) return height;
        height = parseInt(_x);
        return this;
    };
    exports.filler = function (_x) {
        if (!arguments.length) return filler;
        filler = _x;
        return this;
    };

    return exports;
};