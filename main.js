import * as echarts from 'echarts'
import {echart as powerUsageStatus, changeData} from '/chart/power-usage-status.js'
import {echart as reductionResult, option as reductionResultOption} from '/chart/reduction-result.js'
import {echart as instantaneousValue} from '/chart/instantaneous-value.js'
import {echart as powerUsageStatistics2d, option as powerUsageStatistics2dOption} from '/chart/power-usage-statistics-2d.js'
import {echart as powerUsageStatistics3d} from '/chart/power-usage-statistics-3d.js'
import {echart as powerUsageStatisticsVisualizationAnalysis} from '/chart/power-usage-statistics-visualization-analysis'

// 차트 변경
const echart = echarts.init(document.getElementById('changing-chart'));

let option = reductionResultOption;
echart.setOption(option);

const ChartChangeButton = document.getElementById('chartChangeButton');
ChartChangeButton.addEventListener('click', () => {
  option = (option === reductionResultOption) ? powerUsageStatistics2dOption : reductionResultOption;
  echart.clear();
  echart.setOption(option);
});


// 전력사용현황 차트 데이터 변경
const dataChangeButton = document.getElementById('dataChangeButton');
dataChangeButton.addEventListener('click', () => {
  changeData();
});


// 창 사이즈 변경시 차트사이즈 변경
window.addEventListener('resize', (event) => {
  powerUsageStatus.resize({ width: 'auto', });
  reductionResult.resize({ width: 'auto', });
  instantaneousValue.resize({ width: 'auto', });
  powerUsageStatistics2d.resize({ width: 'auto', });
  powerUsageStatistics3d.resize({ width: 'auto', });
  powerUsageStatisticsVisualizationAnalysis.resize({ width: 'auto', });
});
