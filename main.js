import * as echarts from 'echarts';
import 'echarts-gl'; // bar3D
import {powerUsageStatus, dataChange} from '/chart/power-usage-status.js'
import {option as reductionResultOption} from '/chart/reduction-result.js'
import {option as instantaneousValueOption} from '/chart/instantaneous-value.js'
import {option as powerUsageStatistics2dOption} from '/chart/power-usage-statistics-2d.js'
import {option as powerUsageStatistics3dOption} from '/chart/power-usage-statistics-3d.js'
import {option as powerUsageStatisticsVisualizationAnalysisOption} from '/chart/power-usage-statistics-visualization-analysis'

const reductionResult = echarts.init(document.getElementById('reduction-result'));
const instantaneousValue = echarts.init(document.getElementById('instantaneous-value'));
const powerUsageStatistics2d = echarts.init(document.getElementById('power-usage-statistics-2d'));
const powerUsageStatistics3d = echarts.init(document.getElementById('power-usage-statistics-3d'));
const powerUsageStatisticsVisualizationAnalysis = echarts.init(document.getElementById('power-usage-statistics-visualization-analysis'));

reductionResult.setOption(reductionResultOption);
instantaneousValue.setOption(instantaneousValueOption);
powerUsageStatistics2d.setOption(powerUsageStatistics2dOption);
powerUsageStatistics3d.setOption(powerUsageStatistics3dOption);
powerUsageStatisticsVisualizationAnalysis.setOption(powerUsageStatisticsVisualizationAnalysisOption);

// 전력사용현황 차트 데이터 변경
const dataChangeButton = document.getElementById('dataChange');
dataChangeButton.addEventListener('click', () => {
  dataChange();
});
