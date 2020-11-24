import * as echarts from 'echarts';
import {option as powerUsageStatusOption} from './power-usage-status.js'
import {option as reductionResultOption} from './reduction-result.js'

const powerUsageStatus = echarts.init(document.getElementById('power-usage-status'));
const reductionResult = echarts.init(document.getElementById('reduction-result'));

powerUsageStatus.setOption(powerUsageStatusOption);
reductionResult.setOption(reductionResultOption);
