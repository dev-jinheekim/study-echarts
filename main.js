import * as echarts from 'echarts';
import {option as powerUsageStatusOption} from './power-usage-status.js'

const powerUsageStatus = echarts.init(document.getElementById('power-usage-status'));
powerUsageStatus.setOption(powerUsageStatusOption);
