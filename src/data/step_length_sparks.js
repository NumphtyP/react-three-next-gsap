var spark1 = {
  chart: {
    id: 'spectrogram',
    group: 'sparks',
    type: 'line',
    height: 80,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 2,
      opacity: 0.2,
    }
  },
  series: [{
    data: [0.0, 0.0106382979, 0.0212765957, 0.0319148936, 0.042553191500000004, 0.0531914894, 0.0638297872, 0.0744680851, 0.08510638300000001, 0.0957446809, 0.1063829787, 0.1170212766, 0.1276595745, 0.1382978723, 0.1489361702, 0.1595744681, 0.17021276600000002, 0.18085106380000002, 0.1914893617, 0.2021276596, 0.2127659574, 0.22340425530000002, 0.2340425532, 0.2446808511, 0.2553191489]
  }],
  stroke: {
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 110
    }
  },
  colors: ['#fff'],
  tooltip: {
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return '';
        }
      }
    }
  }
}

var spark2 = {
  chart: {
    id: 'median',
    group: 'sparks',
    type: 'line',
    height: 80,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 2,
      opacity: 0.2,
    }
  },
  series: [{
    data: [0.0, 0.0106382979, 0.0212765957, 0.0319148936, 0.042553191500000004, 0.0531914894, 0.0638297872, 0.0744680851, 0.08510638300000001, 0.0957446809, 0.1063829787, 0.1170212766, 0.1276595745, 0.1382978723, 0.1489361702, 0.1595744681, 0.17021276600000002, 0.18085106380000002, 0.1914893617, 0.2021276596, 0.2127659574, 0.22340425530000002, 0.2340425532, 0.2446808511, 0.2553191489]

  }],
  stroke: {
    curve: 'smooth'
  },
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 110
    }
  },
  markers: {
    size: 0
  },
  colors: ['#fff'],
  tooltip: {
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return '';
        }
      }
    }
  }
}

var spark3 = {
  chart: {
    id: 'power_spectrum',
    group: 'sparks',
    type: 'line',
    height: 80,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 2,
      opacity: 0.2,
    }
  },
  series: [{
    data: [0.0, 0.0106382979, 0.0212765957, 0.0319148936, 0.042553191500000004, 0.0531914894, 0.0638297872, 0.0744680851, 0.08510638300000001, 0.0957446809, 0.1063829787, 0.1170212766, 0.1276595745, 0.1382978723, 0.1489361702, 0.1595744681, 0.17021276600000002, 0.18085106380000002, 0.1914893617, 0.2021276596, 0.2127659574, 0.22340425530000002, 0.2340425532, 0.2446808511, 0.2553191489]

  }],
  stroke: {
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 110
    }
  },
  colors: ['#fff'],
  xaxis: {
    crosshairs: {
      width: 1
    },
  },
  tooltip: {
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return '';
        }
      }
    }
  }
}

var spark4 = {
  chart: {
    id: 'spark4',
    group: 'sparks',
    type: 'line',
    height: 80,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 2,
      opacity: 0.2,
    }
  },
  series: [{
    data: [364, 1658, 1665, 1672, 1701, 1705, 1694, 1675, 1672, 1638, 1634, 1627, 1673, 1681, 1569, 1586, 1558, 1547, 1543, 1542, 1545, 1541, 1538, 1528, 1525, 1524, 1506, 1496, 1497, 1487, 1488, 1491, 1500, 1504, 1554, 1553, 1524, 1458, 1429, 1435, 1462, 1611, 1310, 1140, 1270, 1400, 1420, 1440, 1500, 1560, 1580, 1610, 1640, 1680, 1660, 1640, 1630, 1620, 1610, 1610, 1610, 1610, 1610, 1610, 1600, 1590, 1580, 1580, 1560, 1540, 1530, 1520, 1530, 1550, 1530, 1520, 1530, 1540, 1530, 1530, 1530, 1530, 1530, 1540, 1530, 1530, 1520, 1510, 1520, 1530, 1520, 1520, 1500, 1490, 1490, 1500, 1490, 1480, 1480, 1480, 1480, 1490, 1490, 1500, 1490, 1490, 1500, 1510, 1500, 1490, 1470, 1460, 1460, 1460, 1450, 1450, 1380, 1310, 1220, 1140, 1140, 1140, 1150, 1170, 1190]
  }],
  stroke: {
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 110
    }
  },
  colors: ['#fff'],
  xaxis: {
    crosshairs: {
      width: 1
    },
  },
  tooltip: {
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return '';
        }
      }
    }
  }
}

new ApexCharts(document.querySelector("#spark1"), spark1).render();
new ApexCharts(document.querySelector("#spark2"), spark2).render();
new ApexCharts(document.querySelector("#spark3"), spark3).render();
new ApexCharts(document.querySelector("#spark4"), spark4).render();
