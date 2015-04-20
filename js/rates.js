/**
 * Created by root on 4/18/15.
 */
function dorate(id, data, col) {
    var width = 960, height = 500;

    var x = d3.scale.ordinal().rangeRoundBands([0, width], .1);
    var y = d3.scale.linear().range([height, 0]);
    var color = d3.scale.ordinal().range(col);
    color.domain(["tch", "bsp"]);
    var chart = d3.select(id).attr("width", width).attr("height", height);

    data.forEach(function(d) {
       d.bars = [{name : "tch", y0 : 0, y1 : d.tch}, {name : "bsp", y0 : d.tch, y1 : d.tch + d.bsp}];
       d.total = d.tch + d.bsp;
    });
    y.domain([0, d3.max(data, function(d) { return d.total; })]);
    x.domain(data.map(function(d) { return parseDate(d.date); }));
    var bar = chart.selectAll("g")
        .data(data).enter().append("g")
        .attr("transform", function(d) { return "translate(" + x(parseDate(d.date)) + ", 0)"; });

    bar.selectAll("rect")
        .data(function(d) { return d.bars; }).enter().append("rect")
        .attr("y", function(d) { return y(d.y1); })
        .attr("height", function(d) { return y(d.y0) - y(d.y1); })
        .attr("width", x.rangeBand())
        .attr("class", function(d) { return color(d.name); });

    var legend = chart.selectAll(".legend")
      .data(color.domain().slice().reverse())
      .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0, " + i * 20 + ")"; });

    legend.append("rect")
      .attr("x", 0)
      .attr("width", 18)
      .attr("height", 18)
      .attr("class", color);

    legend.append("text")
      .attr("x", '3em')
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) { return d; });

    /*
    bar.append("text")
        .attr("x", barWidth / 2)
        .attr("y", function(d) { return y(d.close) + 3; })
        .attr("dy", ".5em")
        .text(function(d) { return d.close; });
    */

};

window.addEventListener("load", function() {
     dorate("#ratsumchart", sum, ["tchsum", "bspsum"]);
     dorate("#ratcntchart", cnt, ["tchcnt", "bspcnt"]); 
});
