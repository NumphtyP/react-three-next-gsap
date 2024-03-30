var donutDryMassOptions = {
  chart: {
    type: 'donut',
    width: 250,
    height: 250,
  },
  colors: ['#622bd7', '#e2a03f', '#e7515a', '#e2a03f'],
  dataLabels: {
    enabled: false,
  },
  legend: {
    position: 'bottom',
    horizontalAlign: 'center',
    fontSize: '14px',
    markers: {
      width: 10,
      height: 10,
      offsetX: -5,
      offsetY: 0,
    },
    itemMargin: {
      horizontal: 10,
      vertical: 30,
    },
  },
  plotOptions: {
    pie: {
      donut: {
        size: '75%',
        background: 'transparent',
        labels: {
          show: true,
          name: {
            show: true,
            fontSize: '29px',
            fontFamily: 'Nunito, sans-serif',
            color: undefined,
            offsetY: -10,
          },
          value: {
            show: true,
            fontSize: '26px',
            fontFamily: 'Nunito, sans-serif',
            color: '#0e1726',
            offsetY: 16,
            formatter: function (val) {
              return val
            },
          },
          total: {
            show: true,
            showAlways: true,
            label: 'Total',
            color: '#888ea8',
            fontSize: '30px',
            formatter: function (w) {
              return w.globals.seriesTotals.reduce(function (a, b) {
                return a + b
              }, 0)
            },
          },
        },
      },
    },
  },
  stroke: {
    show: true,
    width: 15,
    colors: '#fff',
  },
  series: [10, 70, 4],
  labels: ['Adipose', 'Lean', 'Bones'],

  responsive: [
    {
      breakpoint: 80,
      options: {
        chart: {
          width: 325,
        },
      },
    },
    {
      breakpoint: 70,
      options: {
        chart: {
          width: 380,
        },
      },
    },
    {
      breakpoint: 4,
      options: {
        chart: {
          width: 320,
        },
      },
    },
  ],
}

var dryMass = new ApexCharts(document.querySelector('#dry_mass'), options)

dryMass.render()

dryMass.updateOptions({
  stroke: {
    colors: '#0e1726',
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          value: {
            color: '#bfc9d4',
          },
        },
      },
    },
  },
})

let weightChartOptions = {
  chart: {
    id: 'mass',
    group: 'sparklines',
    type: 'area',
    height: 240,
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  fill: {
    type: 'gradient',
    gradient: {
      type: 'vertical',
      shadeIntensity: 1,
      inverseColors: !1,
      opacityFrom: 0.3,
      opacityTo: 0.05,
      stops: [100, 100],
    },
  },
  series: [
    {
      name: 'Mass',
      data: [80.6, 82.1, 83.3, 82.6, 81.8, 81.9, 82.6, 82.7, 83.9, 85.5, 84.8, 84.5],
    },
  ],
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
  yaxis: {
    min: 0,
  },
  grid: {
    padding: {
      top: 125,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  tooltip: {
    x: {
      show: false,
    },
    theme: Theme,
  },
  colors: ['#00ab55'],
}

let leanMassOptions = {
  chart: {
    id: 'lean',
    type: 'area',
    height: 140,
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  fill: {
    opacity: 1,
  },
  series: [
    {
      name: 'lean',
      data: [79.6, 84.9, 80.5, 84.1, 83.0, 85.3, 79.3, 84.7, 85.0, 82.3, 81.8, 85.3],
    },
  ],
  labels: ['1', '2', '3', '4', '5', '6', '7'],
  yaxis: {
    min: 0,
  },
  colors: ['#00ab55'],
  tooltip: {
    x: {
      show: false,
    },
  },
  grid: {
    show: false,
    xaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      top: 5,
      right: 0,
      left: 0,
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      type: 'vertical',
      shadeIntensity: 1,
      inverseColors: !1,
      opacityFrom: 0.4,
      opacityTo: 0.05,
      stops: [100, 100],
    },
  },
}

let waterOptions = {
  chart: {
    id: 'water',
    type: 'area',
    height: 160,
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  series: [
    {
      name: 'Water',
      data: [54.5, 59.2, 55.3, 58.4, 57.4, 59.6, 55.4, 59.1, 59.5, 55.0, 54.7, 56.7],
    },
  ],
  labels: ['1', '2', '3', '4', '5', '6', '7'],
  yaxis: {
    min: 0,
  },
  colors: ['#4361ee'],
  tooltip: {
    x: {
      show: false,
    },
  },
  grid: {
    show: false,
    xaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      top: 5,
      right: 0,
      left: 0,
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      type: 'vertical',
      shadeIntensity: 1,
      inverseColors: !1,
      opacityFrom: 0.4,
      opacityTo: 0.05,
      stops: [100, 100],
    },
  },
}

let Weight_1 = new ApexCharts(document.querySelector('#weight_chart'), weightChartOptions)
Weight_1.render()

Weight_1.updateOptions({
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.3,
    },
  },
})

let Lean_1 = new ApexCharts(document.querySelector('#lean_mass'), leanMassOptions)
Lean_1.render()

Lean_1.updateOptions({
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.3,
    },
  },
})

// Referral

let Water_1 = new ApexCharts(document.querySelector('#water_mass'), waterOptions)
Water_1.render()

Water_1.updateOptions({
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.3,
    },
  },
})

Lean_1.updateOptions({
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.4,
    },
  },
})

Water_1.updateOptions({
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.4,
    },
  },
})

bone: [3.9, 4.2, 4.0, 4.2, 4.1, 4.3, 3.9, 4.2, 4.3, 3.8, 3.9, 4.0]
muscle: [75.6, 80.6, 76.5, 79.9, 79.0, 81.0, 75.4, 80.5, 80.7, 78.6, 78.0, 81.4]
fat_mass: [20.4, 15.1, 19.5, 15.9, 16.9, 14.7, 20.7, 15.3, 15.0, 17.7, 18.2, 14.7]

var spark9 = {
  chart: {
    id: 'total-steps',
    group: 'sparks2',
    type: 'line',
    height: 80,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 2,
      color: '#e2a03f',
      opacity: 0.7,
    },
  },
  series: [
    {
      data: [
        41187, 63706, 46215, 45544, 22482, 28103, 33259, 38578, 40769, 55663, 37759, 27120, 49347, 43715, 13635, 31331,
        74888, 52800, 57871, 75490, 69922, 58340, 68133, 6227, 29559, 62179, 43432, 61953, 24427, 66335, 50215, 31077,
        30499, 32665, 32506, 29334, 22054, 28865, 37768, 38851, 37293, 41184, 35441, 5788, 17987, 19893, 15131, 33175,
        62569, 47880,
      ],
    },
  ],
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  markers: {
    size: 0,
  },
  grid: {
    padding: {
      top: 35,
      bottom: 0,
      left: 40,
    },
  },
  colors: ['#e2a03f'],
  tooltip: {
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return ''
        },
      },
    },
  },
  responsive: [
    {
      breakpoint: 1351,
      options: {
        chart: {
          height: 95,
        },
        grid: {
          padding: {
            top: 35,
            bottom: 0,
            left: 0,
          },
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 80,
        },
        grid: {
          padding: {
            top: 35,
            bottom: 0,
            left: 40,
          },
        },
      },
    },
    {
      breakpoint: 576,
      options: {
        chart: {
          height: 95,
        },
        grid: {
          padding: {
            top: 45,
            bottom: 0,
            left: 0,
          },
        },
      },
    },
  ],
}
var spark9 = {
  chart: {
    id: 'bone-mass',
    group: 'sparks2',
    type: 'line',
    height: 50,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 2,
      color: '#5156be',
      opacity: 0.7,
    },
  },
  series: [
    {
      data: [3.9, 4.2, 4.0, 4.2, 4.1, 4.3, 3.9, 4.2, 4.3, 3.8, 3.9, 4.0],
    },
  ],
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  markers: {
    size: 0,
  },
  grid: {
    padding: {
      top: 35,
      bottom: 0,
      left: 40,
    },
  },
  colors: ['#e2a03f'],
  tooltip: {
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return ''
        },
      },
    },
  },
  responsive: [
    {
      breakpoint: 1351,
      options: {
        chart: {
          height: 95,
        },
        grid: {
          padding: {
            top: 35,
            bottom: 0,
            left: 0,
          },
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 80,
        },
        grid: {
          padding: {
            top: 35,
            bottom: 0,
            left: 40,
          },
        },
      },
    },
    {
      breakpoint: 576,
      options: {
        chart: {
          height: 95,
        },
        grid: {
          padding: {
            top: 45,
            bottom: 0,
            left: 0,
          },
        },
      },
    },
  ],
}

let spark10 = {
  chart: {
    id: 'muscle-mass',
    group: 'sparks2',
    type: 'line',
    height: 80,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 2,
      color: '#e2a03f',
      opacity: 0.7,
    },
  },
  series: [
    {
      data: [75.6, 80.6, 76.5, 79.9, 79.0, 81.0, 75.4, 80.5, 80.7, 78.6, 78.0, 81.4],
    },
  ],
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  markers: {
    size: 0,
  },
  grid: {
    padding: {
      top: 35,
      bottom: 0,
      left: 40,
    },
  },
  colors: ['#e2a03f'],
  tooltip: {
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return ''
        },
      },
    },
  },
  responsive: [
    {
      breakpoint: 1351,
      options: {
        chart: {
          height: 95,
        },
        grid: {
          padding: {
            top: 35,
            bottom: 0,
            left: 0,
          },
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 80,
        },
        grid: {
          padding: {
            top: 35,
            bottom: 0,
            left: 40,
          },
        },
      },
    },
    {
      breakpoint: 576,
      options: {
        chart: {
          height: 95,
        },
        grid: {
          padding: {
            top: 45,
            bottom: 0,
            left: 0,
          },
        },
      },
    },
  ],
}

let spark11 = {
  chart: {
    id: 'fat-mass',
    group: 'sparks2',
    type: 'line',
    height: 80,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 2,
      color: '#e2a03f',
      opacity: 0.7,
    },
  },
  series: [
    {
      data: [20.4, 15.1, 19.5, 15.9, 16.9, 14.7, 20.7, 15.3, 15.0, 17.7, 18.2, 14.7],
    },
  ],
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  markers: {
    size: 0,
  },
  grid: {
    padding: {
      top: 35,
      bottom: 0,
      left: 40,
    },
  },
  colors: ['#e2a03f'],
  tooltip: {
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return ''
        },
      },
    },
  },
  responsive: [
    {
      breakpoint: 1351,
      options: {
        chart: {
          height: 95,
        },
        grid: {
          padding: {
            top: 35,
            bottom: 0,
            left: 0,
          },
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 80,
        },
        grid: {
          padding: {
            top: 35,
            bottom: 0,
            left: 40,
          },
        },
      },
    },
    {
      breakpoint: 576,
      options: {
        chart: {
          height: 95,
        },
        grid: {
          padding: {
            top: 45,
            bottom: 0,
            left: 0,
          },
        },
      },
    },
  ],
}

let spark12 = {
  chart: {
    id: 'water-mass',
    group: 'sparks2',
    type: 'line',
    height: 80,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 2,
      color: '#e2a03f',
      opacity: 0.7,
    },
  },
  series: [
    {
      data: [54.5, 59.2, 55.3, 58.4, 57.4, 59.6, 55.4, 59.1, 59.5, 55.0, 54.7, 56.7],
    },
  ],
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  markers: {
    size: 0,
  },
  grid: {
    padding: {
      top: 35,
      bottom: 0,
      left: 40,
    },
  },
  colors: ['#e2a03f'],
  tooltip: {
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return ''
        },
      },
    },
  },
  responsive: [
    {
      breakpoint: 1351,
      options: {
        chart: {
          height: 95,
        },
        grid: {
          padding: {
            top: 35,
            bottom: 0,
            left: 0,
          },
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 80,
        },
        grid: {
          padding: {
            top: 35,
            bottom: 0,
            left: 40,
          },
        },
      },
    },
    {
      breakpoint: 576,
      options: {
        chart: {
          height: 95,
        },
        grid: {
          padding: {
            top: 45,
            bottom: 0,
            left: 0,
          },
        },
      },
    },
  ],
}

let bones = new ApexCharts(document.querySelector('#bone-mass'), spark9)
bones.render()
let muscle = new ApexCharts(document.querySelector('#muscle-mass'), spark10)
muscle.render()
let fat = new ApexCharts(document.querySelector('#fat-mass'), spark11)
fat.render()
let water = new ApexCharts(document.querySelector('#water-mass'), spark12)
water.render()

var donutDryMassOptions = {
  chart: {
    type: 'donut',
    width: 250,
    height: 250,
  },
  colors: ['#622bd7', '#e2a03f', '#e7515a', '#e2a03f'],
  dataLabels: {
    enabled: false,
  },
  legend: {
    position: 'bottom',
    horizontalAlign: 'center',
    fontSize: '14px',
    markers: {
      width: 10,
      height: 10,
      offsetX: -5,
      offsetY: 0,
    },
    itemMargin: {
      horizontal: 10,
      vertical: 30,
    },
  },
  plotOptions: {
    pie: {
      donut: {
        size: '75%',
        background: 'transparent',
        labels: {
          show: true,
          name: {
            show: true,
            fontSize: '29px',
            fontFamily: 'Nunito, sans-serif',
            color: undefined,
            offsetY: -10,
          },
          value: {
            show: true,
            fontSize: '26px',
            fontFamily: 'Nunito, sans-serif',
            color: '#0e1726',
            offsetY: 16,
            formatter: function (val) {
              return val
            },
          },
          total: {
            show: true,
            showAlways: true,
            label: 'Total',
            color: '#888ea8',
            fontSize: '30px',
            formatter: function (w) {
              return w.globals.seriesTotals.reduce(function (a, b) {
                return a + b
              }, 0)
            },
          },
        },
      },
    },
  },
  stroke: {
    show: true,
    width: 15,
    colors: '#fff',
  },
  series: [10, 70, 4],
  labels: ['Adipose', 'Lean', 'Bones'],

  responsive: [
    {
      breakpoint: 80,
      options: {
        chart: {
          width: 325,
        },
      },
    },
    {
      breakpoint: 70,
      options: {
        chart: {
          width: 380,
        },
      },
    },
    {
      breakpoint: 4,
      options: {
        chart: {
          width: 320,
        },
      },
    },
  ],
}

var dryMass = new ApexCharts(document.querySelector('#dry_mass'), options)

dryMass.render()

dryMass.updateOptions({
  stroke: {
    colors: '#0e1726',
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          value: {
            color: '#bfc9d4',
          },
        },
      },
    },
  },
})
