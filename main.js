import * as echarts from 'echarts';
import {option as powerUsageStatusOption} from '/chart/power-usage-status.js'
import {option as reductionResultOption} from '/chart/reduction-result.js'
import {option as instantaneousValueOption} from '/chart/instantaneous-value.js'
import {option as powerUsageStatistics2dOption} from '/chart/power-usage-statistics-2d.js'
import {option as powerUsageStatisticsVisualizationAnalysisOption} from '/chart/power-usage-statistics-visualization-analysis'

const powerUsageStatus = echarts.init(document.getElementById('power-usage-status'));
const reductionResult = echarts.init(document.getElementById('reduction-result'));
const instantaneousValue = echarts.init(document.getElementById('instantaneous-value'));
const powerUsageStatistics2d = echarts.init(document.getElementById('power-usage-statistics-2d'));
const powerUsageStatisticsVisualizationAnalysis = echarts.init(document.getElementById('power-usage-statistics-visualization-analysis'));

powerUsageStatus.setOption(powerUsageStatusOption);
reductionResult.setOption(reductionResultOption);
instantaneousValue.setOption(instantaneousValueOption);
powerUsageStatistics2d.setOption(powerUsageStatistics2dOption);
powerUsageStatisticsVisualizationAnalysis.setOption(powerUsageStatisticsVisualizationAnalysisOption);
