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
    data:[0.0, 0.0106382979, 0.0212765957, 0.0319148936, 0.042553191500000004, 0.0531914894, 0.0638297872, 0.0744680851, 0.08510638300000001, 0.0957446809, 0.1063829787, 0.1170212766, 0.1276595745, 0.1382978723, 0.1489361702, 0.1595744681, 0.17021276600000002, 0.18085106380000002, 0.1914893617, 0.2021276596, 0.2127659574, 0.22340425530000002, 0.2340425532, 0.2446808511, 0.2553191489]
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
    data:[0.0, 0.0106382979, 0.0212765957, 0.0319148936, 0.042553191500000004, 0.0531914894, 0.0638297872, 0.0744680851, 0.08510638300000001, 0.0957446809, 0.1063829787, 0.1170212766, 0.1276595745, 0.1382978723, 0.1489361702, 0.1595744681, 0.17021276600000002, 0.18085106380000002, 0.1914893617, 0.2021276596, 0.2127659574, 0.22340425530000002, 0.2340425532, 0.2446808511, 0.2553191489]
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
    id: 'signal',
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
    data: [97.5, 92.7, 93.7, 93.7, 93.7, 96.5, 95.5, 95.5, 95.5, 95.5, 95.5, 94.5, 100.5, 102.5, 103.5, 102.5, 100.5, 99.5, 99.5, 99.5, 99.5, 98.5, 98.5, 99.5, 98.5, 98.5, 97.5, 94.5, 94.5, 95.5, 96.5, 97.5, 97.5, 97.5, 100.5, 102.5, 105.2, 107.2, 99.5, 98.5, 99.5, 120.0, 78.0, 83.0, 81.0, 80.0, 77.0, 74.0, 74.0, 74.0, 78.0, 82.0, 81.0, 80.0, 80.0, 80.0, 82.0, 85.0, 84.0, 84.0, 84.0, 85.0, 87.0, 89.0, 88.0, 88.0, 89.0, 90.0, 90.0, 91.0, 89.0, 88.0, 90.0, 93.0, 92.0, 91.0, 92.0, 94.0, 93.0, 92.0, 91.0, 91.0, 92.0, 93.0, 92.0, 91.0, 91.0, 92.0, 93.0, 94.0, 95.0, 96.0, 96.0, 96.0, 96.0, 97.0, 97.0, 98.0, 98.0, 99.0, 98.0, 98.0, 98.0, 99.0, 98.0, 97.0, 98.0, 99.0, 98.0, 98.0, 98.0, 99.0, 98.0, 97.0, 97.0, 98.0, 98.0, 98.0, 97.0, 97.0, 96.0, 96.0, 96.0, 96.0, 95.0]
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
