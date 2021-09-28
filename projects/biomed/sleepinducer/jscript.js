var x = "hello world";
console.log(x);
function myFunction()
{
document.getElementById("button1").innerHTML = "clicked me";
}
var x = [];
for (var i = 0; i < 500; i ++) {
	x[i] = Math.random();
}

var trace = {
    x: x,
    type: 'histogram',
  };
var data = [trace];
var data2 = [{
  values: [19, 26, 55],
  labels: ['REM Sleep', 'Deep Sleep', 'Light Sleep','Awake'],
  type: 'pie'
}];
var layout = {
  autosize: false,
  width: 400,
  height: 400,
  margin: {
    l: 5,
    r: 5,
    b: 10,
    t: 10,
    pad: 4
  },
};

Plotly.newPlot('graph2', data2,layout);
Plotly.newPlot('graph1', data,layout);
