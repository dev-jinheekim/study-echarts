import * as echarts from 'echarts';
import {option as powerUsageStatusOption} from './power-usage-status.js'
import {option as reductionResultOption} from './reduction-result.js'
import {option as instantaneousValueOption} from './instantaneous-value.js'

const powerUsageStatus = echarts.init(document.getElementById('power-usage-status'));
const reductionResult = echarts.init(document.getElementById('reduction-result'));
const instantaneousValue = echarts.init(document.getElementById('instantaneous-value'));

powerUsageStatus.setOption(powerUsageStatusOption);
reductionResult.setOption(reductionResultOption);
instantaneousValue.setOption(instantaneousValueOption);
