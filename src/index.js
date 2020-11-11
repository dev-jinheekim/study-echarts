// import * as echarts from 'echarts'; // ES6
var echarts = require('echarts/lib/echarts'); // CommonJs
require('echarts/lib/chart/bar');

const myChart = echarts.init(document.getElementById('main'));
const option = {
title: {
  text: 'ECharts entry example'
},
tooltip: {},
legend: {
  data: ['Sales']
},
xAxis: {
  data: ['shirt', 'chiffon shirt', 'pants', 'socks'],
},
yAxis: {},
series: [{
  name: 'Sales',
  type: 'bar',
  data: [5, 10, 15, 20]
}]
}
myChart.setOption(option);
