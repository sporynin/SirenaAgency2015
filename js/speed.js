window.addEventListener("load", function() {

var margin = {top: 30, right: 30, bottom: 130, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.time.scale().range([0, width]);
var y = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("right");

var line1 = d3.svg.line().interpolate("monotone")
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.speed); });

var line2 = d3.svg.line().interpolate("monotone")
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.speed); });

var line3 = d3.svg.line().interpolate("monotone")
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.speed); });

var line4 = d3.svg.line().interpolate("monotone")
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.speed); });

var svg = d3.select("#speedchart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);
    //.append("g")
    //.attr("transform", "translate(" + margin.left + "," + margin.top + ")");


  data1 = diff(tchsum);
  data2 = diff(bspsum);
  data3 = diff(tchcnt);
  data4 = diff(bspcnt);
  x.domain(d3.extent(data1, function(d) { return d.date; }));
  y.domain(d3.extent(data1.concat(data2).concat(data3).concat(data4), function(d) { return d.speed; }));

  svg.append("path")
      .datum(data1)
      .attr("class", "blueline")
      .attr("d", line1);
  svg.append("path")
      .datum(data2)
      .attr("class", "redline")
      .attr("d", line2);
  svg.append("path")
      .datum(data3)
      .attr("class", "greenline")
      .attr("d", line3);
  svg.append("path")
      .datum(data4)
      .attr("class", "orangeline")
      .attr("d", line4);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0, " + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis);
});
