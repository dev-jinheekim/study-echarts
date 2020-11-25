const data = [
  {
    "contract_count": 12,
    "ymd": "20201113",
    "h": "14",
    "m": "15",
    "cbl": 1001.6028776168823,
    "cbl_sum": 1001.6028776168823,
    "v": 134.49000304937363,
    "v_sum": 134.49000304937363,
    "reduce_order_qty": 677.5,
    "reduce_order_qty_sum": 677.5,
    "reduce_order_qty_sum_dr": 677.5,
    "target_use_v": 324.1028776168823,
    "reduce_v": 867.1128745675087,
    "reduce_v_sum": "867.1128745675087",
    "reduce_rate": 127.98714015756585,
    "reduce_rate_accumulated": "127.987140157565859778597785900000",
    "reduce_rate_accumulated_dr": "127.987140157565859778597785900000"
  },
  {
    "contract_count": 12,
    "ymd": "20201113",
    "h": "14",
    "m": "30",
    "cbl": 1001.6028776168823,
    "cbl_sum": 2003.2057552337646,
    "v": 108.8399988412857,
    "v_sum": 243.33000189065933,
    "reduce_order_qty": 677.5,
    "reduce_order_qty_sum": 1355,
    "reduce_order_qty_sum_dr": 1355,
    "target_use_v": 324.1028776168823,
    "reduce_v": 892.7628787755966,
    "reduce_v_sum": "1759.8757533431053",
    "reduce_rate": 131.77311863846444,
    "reduce_rate_accumulated": "129.880129398015151200000000000000",
    "reduce_rate_accumulated_dr": "129.880129398015151200000000000000"
  },
  {
    "contract_count": 12,
    "ymd": "20201113",
    "h": "14",
    "m": "45",
    "cbl": 1001.6028776168823,
    "cbl_sum": 3004.808632850647,
    "v": 113.45999658107758,
    "v_sum": 356.7899984717369,
    "reduce_order_qty": 677.5,
    "reduce_order_qty_sum": 2032.5,
    "reduce_order_qty_sum_dr": 2032.5,
    "target_use_v": 324.1028776168823,
    "reduce_v": 888.1428810358047,
    "reduce_v_sum": "2648.0186343789100",
    "reduce_rate": 131.0912001528863,
    "reduce_rate_accumulated": "130.283819649638868388683886800000",
    "reduce_rate_accumulated_dr": "130.283819649638868388683886800000"
  },
  {
    "contract_count": 12,
    "ymd": "20201113",
    "h": "15",
    "m": "00",
    "cbl": 1001.6022825241089,
    "cbl_sum": 4006.410915374756,
    "v": 122.57000076770782,
    "v_sum": 479.35999923944473,
    "reduce_order_qty": 677.5,
    "reduce_order_qty_sum": 2710,
    "reduce_order_qty_sum_dr": 2710,
    "target_use_v": 324.1022825241089,
    "reduce_v": 879.0322817564011,
    "reduce_v_sum": "3527.0509161353111",
    "reduce_rate": 129.7464622518673,
    "reduce_rate_accumulated": "130.149480300195981500000000000000",
    "reduce_rate_accumulated_dr": "130.149480300195981500000000000000"
  }
];

function makeXAxis() {
  return data.map((val) => {
    return `${val.h} : ${val.m}`
  });
}

function makeChartData(pickKey) {
  return data.map((val) => {
    return val[pickKey];
  });
}
console.log(makeChartData('v'));

export const option = {
  title: {
    text: '감축결과보고서 : 순서값보기',
  },
  legend: {
    // data: ['순시값'],
    data: ['사용량'],
    top: 50,
    icon: 'rect',
  }, // 범례 설정
  grid: {
    left: 50,
    top: 100,
    containLabel: true,
  }, // 차트 위치
  xAxis: {
    category: 'time',
    data: makeXAxis(),
    axisTick: {
      show: true,
      alignWithLabel: true, // 축 눈금 위치 변경
    }, // 축 눈금
    splitLine: {
      show: true,
    }, // 축 분할선
    axisPointer: {
      type: 'none',
    } // 마우스 오버시 나타나는 기준선과 축
  },
  yAxis: {
    category: 'value',
    name: 'kW', // 축 이름
    nameLocation: 'middle', // 축 이름 위치
    nameGap: 50, // 축 이름과 축 선 사이 간격
  },
  series: [{
    name: '사용량',
    type: 'line',
    data: makeChartData('v'),
    areaStyle: {}, // 영역형 차트 설정
    itemStyle: {
      color: 'rgb(98, 207, 115)',
      opacity: 0,
    }, // 라인포인트
    lineStyle: {
      opacity: 0,
    },
  }],
  dataZoom: [{
    show: true,
  }],
  tooltip: {
    show: true,
    trigger: 'axis',
    axisPointer: {
      show: true,
      type: 'cross',
      axis: 'x',
      crossStyle: {
        type: 'solid',
      },
    }, // 마우스 오버시 나타나는 기준선과 축
  },
}
