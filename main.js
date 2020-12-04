import 'echarts-gl'; // bar3D
import {echart as powerUsageStatus, changeData} from '/chart/power-usage-status.js'
import {echart as reductionResult} from '/chart/reduction-result.js'
import {echart as instantaneousValue} from '/chart/instantaneous-value.js'
import {echart as powerUsageStatistics2d} from '/chart/power-usage-statistics-2d.js'
import {echart as powerUsageStatistics3d} from '/chart/power-usage-statistics-3d.js'
import {echart as powerUsageStatisticsVisualizationAnalysis} from '/chart/power-usage-statistics-visualization-analysis'

// 전력사용현황 차트 데이터 변경
const dataChangeButton = document.getElementById('changeData');
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
