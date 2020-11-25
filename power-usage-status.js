const data = {
  lastWeek : {
    '01_cbl': 2128.31,
    '01_v': 167.57,
    '02_cbl': 2319.26,
    '02_v': 176.78,
    '03_cbl': 2410.65,
    '03_v': 161.87,
    '04_cbl': 2379.74,
    '04_v': 408.68,
    '05_cbl': 2350.91,
    '05_v': 416.31,
    '06_cbl': 2363.6,
    '06_v': 540.46,
    '07_cbl': 2375.61,
    '07_v': 452.46,
    '08_cbl': 2520.69,
    '08_v': 827.77,
    '09_cbl': 3442.7,
    '09_v': 2457.93,
    '10_cbl': 3918.9,
    '10_v': 2791.44,
    '11_cbl': 3888.15,
    '11_v': 2771.6,
    '12_cbl': 3798.44,
    '12_v': 3082.07,
    '13_cbl': 2689.17,
    '13_v': 1960.81,
    '14_cbl': 3422.75,
    '14_v': 2420.53,
    '15_cbl': 3761.2,
    '15_v': 2900.58,
    '16_cbl': 3877.06,
    '16_v': 3232.89,
    '17_cbl': 3829.55,
    '17_v': 3382.57,
    '18_cbl': 3588.64,
    '18_v': 3253.64,
    '19_cbl': 3062.36,
    '19_v': 2721.07,
    '20_cbl': 2904.28,
    '20_v': 2614.7,
    '21_cbl': 2653.3,
    '21_v': 2402.25,
    '22_cbl': 2483.18,
    '22_v': 2333.57,
    '23_cbl': 2424.28,
    '23_v': 2320.68,
    '24_cbl': 2353.29,
    '24_v': 2199.93,
  },
  today: {
    '01_cbl': 2033.37,
    '01_v': 1110.95,
    '02_cbl': 2219.74,
    '02_v': 1071.36,
    '03_cbl': 2310.63,
    '03_v': 1015.48,
    '04_cbl': 2312.14,
    '04_v': 1199.71,
    '05_cbl': 2217.73,
    '05_v': 1170.82,
    '06_cbl': 2358.9,
    '06_v': 1271.03,
    '07_cbl': 2367.8,
    '07_v': 1280.35,
    '08_cbl': 2427.58,
    '08_v': 1697.28,
    '09_cbl': 3215.83,
    '09_v': 2790.57,
    '10_cbl': 3670.68,
    '10_v': 3374.59,
    '11_cbl': 3725.22,
    '11_v': 3600.28,
    '12_cbl': 3727.24,
    '12_v': 3474.49,
    '13_cbl': 2687.19,
    '13_v': 1835.62,
    '14_cbl': 3242.34,
    '14_v': 0,
    '15_cbl': 3798.43,
    '15_v': 0,
    '16_cbl': 3834.24,
    '16_v': 0,
    '17_cbl': 3782.87,
    '17_v': 0,
    '18_cbl': 3581.59,
    '18_v': 0,
    '19_cbl': 3006.38,
    '19_v': 0,
    '20_cbl': 2784.47,
    '20_v': 0,
    '21_cbl': 2521.18,
    '21_v': 0,
    '22_cbl': 2443.81,
    '22_v': 0,
    '23_cbl': 2391.55,
    '23_v': 0,
    '24_cbl': 2310.77,
    '24_v': 0,
  },
  yesterday: {
    '01_cbl': 2033.37,
    '01_v': 1544.11,
    '02_cbl': 2219.74,
    '02_v': 1529.98,
    '03_cbl': 2310.63,
    '03_v': 1451.03,
    '04_cbl': 2312.14,
    '04_v': 1400.6,
    '05_cbl': 2217.73,
    '05_v': 1357.35,
    '06_cbl': 2358.9,
    '06_v': 1358.3,
    '07_cbl': 2367.8,
    '07_v': 1222.65,
    '08_cbl': 2427.58,
    '08_v': 1197.71,
    '09_cbl': 3215.83,
    '09_v': 1077.75,
    '10_cbl': 3670.68,
    '10_v': 1153.21,
    '11_cbl': 3725.22,
    '11_v': 1135.44,
    '12_cbl': 3727.24,
    '12_v': 1124.6,
    '13_cbl': 2687.19,
    '13_v': 1039.33,
    '14_cbl': 3242.34,
    '14_v': 1110.58,
    '15_cbl': 3798.43,
    '15_v': 1102.7,
    '16_cbl': 3834.24,
    '16_v': 1168.41,
    '17_cbl': 3782.87,
    '17_v': 1092.25,
    '18_cbl': 3581.59,
    '18_v': 1033.28,
    '19_cbl': 3006.38,
    '19_v': 1074.92,
    '20_cbl': 2784.47,
    '20_v': 1055.49,
    '21_cbl': 2521.18,
    '21_v': 1059.55,
    '22_cbl': 2443.81,
    '22_v': 1088.41,
    '23_cbl': 2391.55,
    '23_v': 1033.3,
    '24_cbl': 2310.77,
    '24_v': 1028.68,
  }
}

const timeAxis = [];
for (let i=0; i <24; i++) {
    timeAxis.push(i);
};

function makeChartData(data, filterKey) {
  let result = [];
  for (let key in data) {
    if (key.includes(filterKey)) {
      let hour = Number(key.split('_')[0]);
      result[hour] = data[key];
    }
  }
  return result;
}

export const option = {
  title: {
    text: '전력사용현황',
  },
  legend: {
    data: ['금일 CBL', '전주 CBL', '금일사용량', '전일사용량', '전주사용량'],
    bottom: 0,
    icon: 'rect',
  }, // 범례 설정
  grid: {
    left: 50,
    top: 50,
    containLabel: true,
  }, // 차트 위치
  xAxis: {
    type: 'category',
    data: timeAxis,
    splitLine: {
      show: true,
    }, // 축 분할선
  },
  yAxis: {
    type: 'value',
    name: 'kW', // 축 이름
    nameLocation: 'middle', // 축 이름 위치
    nameGap: 50, // 축 이름과 축 선 사이 간격
  },
  series: [{
    name: '금일 CBL',
    type: 'line',
    data: makeChartData(data.today, 'cbl'),
    areaStyle: {}, // 영역형 차트 설정
    itemStyle: {
      color: 'rgb(59, 156, 56)',
      opacity: 0,
    }, // 라인포인트
    lineStyle: {
      opacity: 0,
    },
  },{
    name: '전주 CBL',
    type: 'line',
    data: makeChartData(data.lastWeek, 'cbl'),
    areaStyle: {}, // 영역형 차트 설정
    itemStyle: {
      color: 'rgb(43, 119, 173)',
      opacity: 0,
    }, // 라인포인트
    lineStyle: {
      opacity: 0,
    },
  },{
    name: '금일사용량',
    type: 'line',
    data: makeChartData(data.today, 'v'),
    symbol: 'circle', // 라인 포인트 모양
    symbolSize: 5, // 라인 포인트 크기
  },{
    name: '전일사용량',
    type: 'line',
    data: makeChartData(data.yesterday, 'v'),
    symbol: 'circle', // 라인 포인트 모양
    symbolSize: 5, // 라인 포인트 크기
  },{
    name: '전주사용량',
    type: 'line',
    data: makeChartData(data.lastWeek, 'v'),
    symbol: 'circle', // 라인 포인트 모양
    symbolSize: 5, // 라인 포인트 크기
  }],
  tooltip: {
    show: true,
    trigger: 'axis',
    formatter: '{b}:00 <br/>{a0} : {c0}kW <br/>{a1} : {c1}kW <br/>{a2} : {c2}kW <br/>{a3} : {c3}kW',
    axisPointer: {
      show: true,
      type: 'cross',
      trigger: 'axis',
      crossStyle: {
        type: 'solid',
      },
    }, // 마우스 오버시 나타나는 기준선과 축
  },
}
