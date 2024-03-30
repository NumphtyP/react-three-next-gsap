var options = {
  series: [67],
  chart: {
  height: 350,
  type: 'radialBar',
  offsetY: -10
},
plotOptions: {
  radialBar: {
    startAngle: -135,
    endAngle: 135,
    dataLabels: {
      name: {
        fontSize: '16px',
        color: undefined,
        offsetY: 120
      },
      value: {
        offsetY: 76,
        fontSize: '22px',
        color: undefined,
        formatter: function (val) {
          return val + "%";
        }
      }
    }
  }
},
fill: {
  type: 'gradient',
  gradient: {
      shade: 'dark',
      shadeIntensity: 0.15,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 65, 91]
  },
},
stroke: {
  dashArray: 4
},
labels: ['Median Ratio'],
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

var lineDashedColors = getChartColorsArray("#line_chart_dashed");
var lineDashedHeartOptions = {
    chart: {
      height: 280,
      type: 'line',
     zoom: {
            type: 'x',
            enabled: true,
            autoScaleYaxis: true
          },
          toolbar: {
            autoSelected: 'zoom'
          }
    },
    colors: [],
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [3, 4, 3],
      curve: 'straight',
      dashArray: [0, 8, 5]
    },
    series: [{
        name: "Signal",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
      },
      {
        name: "Filtered",
        data: [36, 42, 60, 42, 13, 18, 29, 37, 36, 51, 32, 35]
      },
      {
        name: 'Percentage',
        data: [89, 56, 74, 98, 72, 38, 64, 46, 84, 58, 46, 49]
      }
    ],
    title: {
      text: '',
      align: 'left',
      style: {
        fontWeight:  '500',
      },
    },
    markers: {
      size: 0,

      hover: {
        sizeOffset: 6
      }
    },
    tooltip: {
      y: [{
        title: {
          formatter: function (val) {
            return val + " (/min)"
          }
        }
      }, {
        title: {
          formatter: function (val) {
            return val + " (/min)"
          }
        }
      }, {
        title: {
          formatter: function (val) {
            return val;
          }
        }
      }]
    },
    grid: {
      borderColor: '#f1f1f1',
    }
}

var chart = new ApexCharts(
document.querySelector("#line_chart_dashed"),
options
);



var hormonesOptions = {
  series: [{
  name: 'GPT',
  data: [38, 40, 36, 38, 39]
}, {
  name: 'GGT',
  data: [19.6,21, 25, 28, 30],
}, {
  name: 'TSH',
  data: [1.53,2.9, 3.24, 3.31, 3.08],
}],
  chart: {
  height: 350,
  type: 'radar',
  dropShadow: {
    enabled: true,
    blur: 1,
    left: 1,
    top: 1
  }
},
title: {
  text: 'Hormones'
},
stroke: {
  width: 2
},
fill: {
  opacity: 0.1
},
markers: {
  size: 0
},
xaxis: {
  categories: ['2011', '2012', '2013', '2014', '2015', '2016']
}
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
      

var radarOptions = {
  series: [{
  name: 'Na+',
  data: [139, 135, 140, 137]
}, {
  name: 'K+',
  data: [4.3, 4.0, 4.1, 4.4],
}, {
  name: 'Mg2+',
  data: [2.1, 1.5, 1.3, 1.8],
},
{
  name: 'Ca+',
  data: [2.41, 2.39, 2.12, 2.3],
}],
  chart: {
  height: 300,
  type: 'radar',
  dropShadow: {
    enabled: true,
    blur: 1,
    left: 1,
    top: 1
  }
},
title: {
  text: 'Minerals'
},
stroke: {
  width: 2
},
fill: {
  opacity: 0.1
},
markers: {
  size: 0
},
xaxis: {
  categories: ['2011', '2012', '2013', '2014', '2015', '2016']
}
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();      
          
     
var miniChart1Options = {
	name: 'median',
    series: [{
        data: [3.9, 4.2, 4.0, 4.2, 4.1, 4.3, 3.9, 4.2, 4.3, 3.8, 3.9, 4.0]
    }],
    chart: {
        type: 'line',
        height: 40,
        sparkline: {
            enabled: true
        }
    },
    colors: minichart1Colors,
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};

var chart = new ApexCharts(document.querySelector("#mini-chart1"), miniChart1Options);
chart.render();

// mini-2

var miniChart2Options = {
	name: 'spectrogram',
    series: [{
        data: [15, 42, 47, 2, 14, 19, 65, 75, 47, 15, 42, 47, 2, 14, 12, ]
    }],
    chart: {
        type: 'line',
        height: 40,
        sparkline: {
            enabled: true
        }
    },
    colors: minichart2Colors,
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};

var chart = new ApexCharts(document.querySelector("#mini-chart2"), miniChart2Options);
chart.render();

// mini-3

var miniChart3Options = {
    series: [{
        data: [47, 15, 2, 67, 22, 20, 36, 60, 60, 30, 50, 11, 12, 3, 8, ]
    }],
    chart: {
        type: 'line',
        height: 50,
        sparkline: {
            enabled: true
        }
    },
    colors: minichart3Colors,
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};

var chart = new ApexCharts(document.querySelector("#mini-chart3"), miniChart3Options);
chart.render();

// mini-4

var miniChart4Options = {
    series: [{
        data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14, 2, 47, 42, 15, ]
    }],
    chart: {
        type: 'line',
        height: 50,
        sparkline: {
            enabled: true
        }
    },
    colors: minichart4Colors,
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};

var chart = new ApexCharts(document.querySelector("#mini-chart4"),miniChart4Options );
chart.render();


// 
// Wallet Balance
//
var piechartColors = getChartColorsArray("#wallet-balance");
var pieChartOptions = {
    series: [51.3, 46.5, 5.8],
    chart: {
        width: 227,
        height: 227,
        type: 'pie',
    },
    labels: ['General', 'Performance', 'Cycling'],
    colors: [" #2ab57d" ,"#5156be","#fd625e" ,"#4ba6ef"],
    stroke: {
        width: 0,
    },
    legend: {
        show: false
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
        }
    }]
};

var pieChart = new ApexCharts(document.querySelector("#anaerobic-curve-lactate"), pieChartOptions);
pieChart.render();

//
// Invested Overview
//


      // Donut chart
var donutColors = getChartColorsArray("#anaerobic-curve-weight");
var donutOptions = {
  chart: {
      height: 227,
      type: 'donut',
  }, 
  series: [29.6, 21.8, 4.4],
  labels: ['General', 'Performance', 'Cycling'],
  colors: [" #2ab57d" ,"#5156be","#fd625e" ,"#4ba6ef" ,"#ffbf53" ],
  legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      verticalAlign: 'middle',
      floating: false,
      fontSize: '14px',
      offsetX: 0,
  },
  responsive: [{
      breakpoint: 600,
      options: {
          chart: {
              height: 240
          },
          legend: {
              show: false
          },
      }
  }]

}

var donutChart = new ApexCharts(
  document.querySelector("#anaerobic-curve-weight"),
  donutOptions
);

donutChart.render();





var radialchartColors = getChartColorsArray("#invested-overview");
var options = {
    chart: {
        height: 170,
        type: 'radialBar',
        offsetY: -10
    },
    plotOptions: {
        radialBar: {
            startAngle: -130,
            endAngle: 130,
            dataLabels: {
                name: {
                    show: false
                },
                value: {
                    offsetY: 10,
                    fontSize: '18px',
                    color: undefined,
                    formatter: function (val) {
                        return val + "%";
                    }
                }
            }
        }
    },
    colors: [radialchartColors[0]],
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            type: 'horizontal',
            gradientToColors: [radialchartColors[1]],
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [20, 60]
        },
    },
    stroke: {
        dashArray: 4,
    },
    legend: {
        show: false
    },
    series: [80],
    labels: ['Series A'],
}

var chart = new ApexCharts(
    document.querySelector("#invested-overview"),
    options
);

chart.render();

    }
      
      /**
          ==============================
          |    @Render Charts Script    |
          ==============================
      */

var minichart1Colors = getChartColorsArray("#mini-chart1");
var options = {
    series: [{
        data: [3.9, 4.2, 4.0, 4.2, 4.1, 4.3, 3.9, 4.2, 4.3, 3.8, 3.9, 4.0]
    }],
    chart: {
        type: 'line',
        height: 50,
        sparkline: {
            enabled: true
        }
    },
    colors: minichart1Colors,
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};

var chart = new ApexCharts(document.querySelector("#mini-chart1"), options);
chart.render();

// mini-2
var minichart2Colors = getChartColorsArray("#mini-chart2");
var options = {
    series: [{
        data: [15, 42, 47, 2, 14, 19, 65, 75, 47, 15, 42, 47, 2, 14, 12, ]
    }],
    chart: {
        type: 'line',
        height: 50,
        sparkline: {
            enabled: true
        }
    },
    colors: minichart2Colors,
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};

var chart = new ApexCharts(document.querySelector("#mini-chart2"), options);
chart.render();

// mini-3
var minichart3Colors = getChartColorsArray("#mini-chart3");
var options = {
    series: [{
        data: [47, 15, 2, 67, 22, 20, 36, 60, 60, 30, 50, 11, 12, 3, 8, ]
    }],
    chart: {
        type: 'line',
        height: 50,
        sparkline: {
            enabled: true
        }
    },
    colors: minichart3Colors,
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};

var chart = new ApexCharts(document.querySelector("#mini-chart3"), options);
chart.render();

// mini-4
var minichart4Colors = getChartColorsArray("#mini-chart4");
var options = {
    series: [{
        data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14, 2, 47, 42, 15, ]
    }],
    chart: {
        type: 'line',
        height: 50,
        sparkline: {
            enabled: true
        }
    },
    colors: minichart4Colors,
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};

var chart = new ApexCharts(document.querySelector("#mini-chart4"), options);
chart.render();


// 
// Wallet Balance
//
var piechartColors = getChartColorsArray("#wallet-balance");
var options = {
    series: [56, 40, 4],
    chart: {
        width: 227,
        height: 227,
        type: 'pie',
    },
    labels: ['Water', 'Muscle', 'Bones'],
    colors: piechartColors,
    stroke: {
        width: 0,
    },
    legend: {
        show: false
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#wallet-balance"), options);
chart.render();

//
// Invested Overview
//

var radialchartColors = getChartColorsArray("#invested-overview");
var options = {
    chart: {
        height: 270,
        type: 'radialBar',
        offsetY: -10
    },
    plotOptions: {
        radialBar: {
            startAngle: -130,
            endAngle: 130,
            dataLabels: {
                name: {
                    show: false
                },
                value: {
                    offsetY: 10,
                    fontSize: '18px',
                    color: undefined,
                    formatter: function (val) {
                        return val + "%";
                    }
                }
            }
        }
    },
    colors: [radialchartColors[0]],
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            type: 'horizontal',
            gradientToColors: [radialchartColors[1]],
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [20, 60]
        },
    },
    stroke: {
        dashArray: 4,
    },
    legend: {
        show: false
    },
    series: [80],
    labels: ['Series A'],
}

var chart = new ApexCharts(
    document.querySelector("#invested-overview"),
    options
);

chart.render();

    


    /*
        =============================================
            Perfect Scrollbar | Notifications
        =============================================
    */
    const ps = new PerfectScrollbar(document.querySelector('.mt-container'));



    /**
     * =================================================================================================
     * |     @Re_Render | Re render all the necessary JS when clicked to switch/toggle theme           |
     * =================================================================================================
     */

    document.querySelector('.theme-toggle').addEventListener('click', function() {

      getcorkThemeObject = localStorage.getItem("theme");
      getParseObject = JSON.parse(getcorkThemeObject)
      ParsedObject = getParseObject;

      // console.log(ParsedObject.settings.layout.darkMode)

      if (ParsedObject.settings.layout.darkMode) {

           /*
              ==============================
              |    @Re-Render Charts Script    |
              ==============================
          */
      
          /*
              ===================================
                  Unique Visitors | Script
              ===================================
          */
      
   
          
          /*
              ==============================
                  Statistics | Script
              ==============================
          */
      
      
          // Followers

          d_1C_5.updateOptions({
              fill: {
                  type:"gradient",
                  gradient: {
                      opacityFrom: .30,
                  }
              }
          })
      
 
      } else {
          
          /*
              ==============================
              |    @Re-Render Charts Script    |
              ==============================
          */
      
          /*
              ===================================
                  Unique Visitors | Script
              ===================================
          */
      

        
          /*
              ==============================
                  Statistics | Script
              ==============================
          */
      
      
          // Followers

          d_1C_5.updateOptions({
              fill: {
                  type:"gradient",
                  gradient: {
                      opacityFrom: .40,
                  }
              }
          })
      
          // Referral

    

      }
     
  })