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
  color: ['#37A2DA', '#32C5E9', '#67E0E3', '#9FE6B8', '#FFDB5C','#ff9f7f', '#fb7293', '#E062AE', '#E690D1', '#e7bcf3', '#9d96f5', '#8378EA', '#96BFFF'],
  data: [5, 10, 15, 5, 10, 15, 5, 10, 15, 20, 15, 20]
}, {
  type: 'line',
  data: [5, 10, 15, 5, 10, 15, 5, 10, 15, 20, 15, 20]
}, {
  type: 'pie',
  center: ['50%', 100],
  radius: 35,
  data: [
    { name: 'xx',
      value: 10,
      itemStyle: { color: 'pink' },
      emphasis: {
        itemStyle: { color: 'yellow' },
        label: { show: true , formatter: 'hi' },
      },
    },
    { name: 'yy', value: 80, itemStyle: { color: 'white' } },
    { name: 'zz', value: 10, itemStyle: { color: 'red' } },
  ],
  labelLine: {
      lineStyle: {
          color: 'gray'
      }
  },
  label: {
      textStyle: {
          color: 'black'
      }
  },
}]
}
myChart.setOption(option);
