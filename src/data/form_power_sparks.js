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
    data: [0.0, 0.0108695652, 0.0217391304, 0.0326086957, 0.0434782609, 0.0543478261, 0.0652173913, 0.0760869565, 0.0869565217, 0.097826087, 0.1086956522, 0.1195652174, 0.1304347826, 0.1413043478, 0.15217391300000002, 0.16304347830000002, 0.1739130435, 0.18478260870000002, 0.1956521739, 0.20652173910000002, 0.2173913043, 0.2282608696, 0.2391304348, 0.25, 0.2608695652, 0.27173913040000003, 0.2826086957, 0.2934782609, 0.3043478261, 0.31521739130000004, 0.3260869565, 0.3369565217, 0.347826087, 0.3586956522, 0.36956521740000003, 0.3804347826, 0.3913043478, 0.40217391300000005, 0.4130434783, 0.42391304350000003, 0.4347826087, 0.4456521739, 0.4565217391, 0.46739130430000003, 0.4782608696, 0.4891304348, 0.5]
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
    data: [0.0, 0.0108695652, 0.0217391304, 0.0326086957, 0.0434782609, 0.0543478261, 0.0652173913, 0.0760869565, 0.0869565217, 0.097826087, 0.1086956522, 0.1195652174, 0.1304347826, 0.1413043478, 0.15217391300000002, 0.16304347830000002, 0.1739130435, 0.18478260870000002, 0.1956521739, 0.20652173910000002, 0.2173913043, 0.2282608696, 0.2391304348, 0.25, 0.2608695652, 0.27173913040000003, 0.2826086957, 0.2934782609, 0.3043478261, 0.31521739130000004, 0.3260869565, 0.3369565217, 0.347826087, 0.3586956522, 0.36956521740000003, 0.3804347826, 0.3913043478, 0.40217391300000005, 0.4130434783, 0.42391304350000003, 0.4347826087, 0.4456521739, 0.4565217391, 0.46739130430000003, 0.4782608696, 0.4891304348, 0.5]


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
    data:[0.0, 0.0108695652, 0.0217391304, 0.0326086957, 0.0434782609, 0.0543478261, 0.0652173913, 0.0760869565, 0.0869565217, 0.097826087, 0.1086956522, 0.1195652174, 0.1304347826, 0.1413043478, 0.15217391300000002, 0.16304347830000002, 0.1739130435, 0.18478260870000002, 0.1956521739, 0.20652173910000002, 0.2173913043, 0.2282608696, 0.2391304348, 0.25, 0.2608695652, 0.27173913040000003, 0.2826086957, 0.2934782609, 0.3043478261, 0.31521739130000004, 0.3260869565, 0.3369565217, 0.347826087, 0.3586956522, 0.36956521740000003, 0.3804347826, 0.3913043478, 0.40217391300000005, 0.4130434783, 0.42391304350000003, 0.4347826087, 0.4456521739, 0.4565217391, 0.46739130430000003, 0.4782608696, 0.4891304348, 0.5]

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
    data: [71, 71, 71, 71, 71, 71, 71, 72, 72, 72, 72, 72, 72, 72, 72, 73, 73, 73, 73, 73, 73, 74, 74, 74, 74, 75, 75, 75, 75, 75, 75, 75, 76, 77, 77, 77, 77, 77, 77, 77, 77, 77, 76, 76, 76, 76, 76, 77, 77, 78, 78, 79, 79, 79, 78, 78, 78, 79, 79, 79, 79, 79, 79, 79, 78, 78, 78, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79]
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
