// import * as echarts from 'echarts'; // ES6
var echarts = require('echarts'); // CommonJs

// 차트 일부만 가져오기
// var echarts = require('echarts/lib/echarts');
// require('echarts/lib/chart/bar');

const myChart = echarts.init(document.getElementById('main'));
const option = {
// legend: {...},
// toolbox: {...},
// dataZoom: [{...}, {...}],
// visualMap: {...},
// dataset: {
//   source: [...],
// },
grid: [{
// top
// right
// down
// width
  left: 100,
  bottom: 100,
  height: '20%',
}],
xAxis: {
  data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
},
yAxis: {},
series: [{
  type: 'bar',
  data: [5, 10, 15, 5, 10, 15, 5, 10, 15, 20, 15, 20]
}, {
  type: 'line',
  data: [5, 10, 15, 5, 10, 15, 5, 10, 15, 20, 15, 20]
}, {
  type: 'pie',
  center: ['50%', 100],
  radius: 35,
  data: [
  {name: 'xx', value: 10},
  {name: 'yy', value: 80},
  {name: 'zz', value: 10},
  ]
}]
}
myChart.setOption(option);
