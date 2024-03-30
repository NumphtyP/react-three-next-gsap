window.addEventListener("load", function(){
  try {

    getcorkThemeObject = localStorage.getItem("theme");
    getParseObject = JSON.parse(getcorkThemeObject)
    ParsedObject = getParseObject;

    if (ParsedObject.settings.layout.darkMode) {

      var Theme = 'dark';

      Apex.tooltip = {
          theme: Theme
      }
      
      /**
        ==============================
        |    @Options Charts Script   |
        ==============================
      */
      
      /*
        ======================================
            Compliance | Options
        ======================================
      */
      
      
      // Traction
      
      var spark1 = {
      chart: {
          id: 'track-traction',
          group: 'sparks2',
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
              color: '#e2a03f',
              opacity: 0.7,
          }
      },
      series: [{
          data: [0.0, 0.0, 0.0, 0.2, 2.3, 3.3, 6.3, 7.3, 7.9, 7.8, 7.8, 7.3, 7.1, 6.6, 6.6, 6.4, 6.4, 6.7, 6.7, 6.0, 6.0, 5.8, 5.6, 5.5, 5.4, 5.4, 5.4, 5.2, 5.2, 5.2, 5.1, 5.1, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.1, 5.1, 4.9, 4.8, 4.7, 4.6, 4.6, 4.6, 4.6]

      }],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
          size: 0
      },
      grid: {
        padding: {
          top: 35,
          bottom: 0,
          left: 40
        }
      },
      colors: ['#e2a03f'],
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
      },
      responsive: [{
          breakpoint: 1351,
          options: {
            chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
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
                  left: 40
                }
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
                  left: 0
                }
            },
          },
      }
      
      ]
      }
      
      // Traction Potential
      
      var spark2 = {
      chart: {
        id: 'traction-potential',
        group: 'sparks1',
        type: 'line',
        height: 80,
        sparkline: {
          enabled: true
        },
        dropShadow: {
          enabled: true,
          top: 3,
          left: 1,
          blur: 3,
          color: '#009688',
          opacity: 0.7,
        }
      },
      series: [{
        data: [106.4, 106.4, 106.4, 106.1, 104.0, 103.1, 100.0, 99.0, 98.5, 98.5, 98.5, 99.0, 99.3, 99.8, 99.8, 100.0, 100.0, 99.7, 99.6, 100.3, 100.3, 100.5, 100.8, 100.9, 100.9, 101.0, 101.0, 101.1, 101.1, 101.2, 101.2, 101.3, 101.3, 101.3, 101.3, 101.3, 101.4, 101.3, 101.3, 101.3, 101.2, 101.5, 101.6, 101.7, 101.8, 101.7, 101.7, 101.7]

      }],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
        size: 0
      },
      grid: {
        padding: {
          top: 35,
          bottom: 0,
          left: 40
        }
      },
      colors: ['#009688'],
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
      },
      responsive: [{
          breakpoint: 1351,
          options: {
            chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
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
                  left: 40
                }
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
                  top: 35,
                  bottom: 0,
                  left: 0
                }
            },
          },
      }
      ]
      }

      // Stability
      
      var spark3 = {
      chart: {
          id: 'stability',
          group: 'sparks2',
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
              color: '#e2a03f',
              opacity: 0.7,
          }
      },
      series: [{
          data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1002.6, 953.2, 963.5, 963.5, 963.5, 992.3, 982.0, 982.0, 982.0, 982.0, 982.0, 971.7, 1033.4, 1054.0, 1064.3, 1054.0, 1033.4, 1023.2, 1023.2, 1023.2, 1023.2, 1012.9, 1012.9, 1023.2, 1012.9, 1012.9, 1002.6, 971.7, 971.7, 982.0, 992.3, 1002.6, 1002.6, 1002.6, 1033.4, 1054.0, 1081.8, 1102.3, 1023.2, 1012.9, 1023.2, 1234.0]
      }],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
          size: 0
      },
      grid: {
        padding: {
          top: 35,
          bottom: 0,
          left: 40
        }
      },
      colors: ['#e2a03f'],
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
      },
      responsive: [{
          breakpoint: 1351,
          options: {
            chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
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
                  left: 40
                }
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
                  left: 0
                }
            },
          },
      }
      
      ]
      }

        // Ankle Torque
      
      var spark4 = {
      chart: {
          id: 'ankle-torque',
          group: 'sparks2',
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
              color: '#e2a03f',
              opacity: 0.7,
          }
      },
      series: [{
          data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 80822.1, 76843.2, 77672.1, 77672.1, 77672.1, 79993.2, 79164.2, 79164.2, 79164.2, 79164.2, 79164.2, 78335.3, 83309.0, 84966.9, 85795.8, 84966.9, 83309.0, 82480.0, 82480.0, 82480.0, 82480.0, 81651.1, 81651.1, 82480.0, 81651.1, 81651.1, 80822.1, 78335.3, 78335.3, 79164.2, 79993.2, 80822.1, 80822.1, 80822.1, 83309.0, 84966.9, 87205.0, 88862.9, 82480.0, 81651.1, 82480.0, 99473.4]
      }],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
          size: 0
      },
      grid: {
        padding: {
          top: 35,
          bottom: 0,
          left: 40
        }
      },
      colors: ['#e2a03f'],
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
      },
      responsive: [{
          breakpoint: 1351,
          options: {
            chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
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
                  left: 40
                }
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
                  left: 0
                }
            },
          },
      }
      
      ]
      }
      
     // Track Limit
      
      var spark5 = {
      chart: {
          id: 'track-limit',
          group: 'sparks2',
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
              color: '#e2a03f',
              opacity: 0.7,
          }
      },
      series: [{
          data: [0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.5, 0.5, 0.5, 0.6, 0.5, 0.5, 0.5, 0.6, 0.5, 0.5, 0.5, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.5, 0.5, 0.5, 0.6, 0.6, 0.6, 0.6, 0.5, 0.5, 0.6]

      }],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
          size: 0
      },
      grid: {
        padding: {
          top: 35,
          bottom: 0,
          left: 40
        }
      },
      colors: ['#e2a03f'],
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
      },
      responsive: [{
          breakpoint: 1351,
          options: {
            chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
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
                  left: 40
                }
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
                  left: 0
                }
            },
          },
      }
      
      ]
      }

      // Track Surface Frequency Aymptote
      
      var spark6 = {
      chart: {
        id: 'track-surface-frequency',
        group: 'sparks1',
        type: 'line',
        height: 80,
        sparkline: {
          enabled: true
        },
        dropShadow: {
          enabled: true,
          top: 3,
          left: 1,
          blur: 3,
          color: '#009688',
          opacity: 0.7,
        }
      },
      series: [{
        data: [0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.07, 0.08, 0.08, 0.08, 0.07, 0.07, 0.07, 0.07, 0.07, 0.07, 0.07, 0.07, 0.07, 0.07, 0.08, 0.08, 0.07, 0.07, 0.07, 0.06, 0.05, 0.06, 0.06, 0.06, 0.06, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.03, 0.03, 0.04, 0.04, 0.05, 0.06, 0.06, 0.06, 0.06, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.04, 0.04, 0.04, 0.04, 0.03, 0.03, 0.03, 0.04, 0.04, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.02, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.02, 0.02, 0.02, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.03, 0.03, 0.02, 0.02, 0.02, 0.03, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02]
      }],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
        size: 0
      },
      grid: {
        padding: {
          top: 35,
          bottom: 0,
          left: 40
        }
      },
      colors: ['#009688'],
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
      },
      responsive: [{
          breakpoint: 1351,
          options: {
            chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
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
                  left: 40
                }
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
                  top: 35,
                  bottom: 0,
                  left: 0
                }
            },
          },
      }
      ]
      }

      // Control Loop
      
      var spark7 = {
      chart: {
          id: 'track-traction',
          group: 'sparks2',
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
              color: '#e2a03f',
              opacity: 0.7,
          }
      },
      series: [{
          data: [0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.07, 0.08, 0.08, 0.08, 0.07, 0.07, 0.07, 0.07, 0.07, 0.07, 0.07, 0.07, 0.07, 0.07, 0.08, 0.08, 0.07, 0.07, 0.07, 0.06, 0.05, 0.06, 0.06, 0.06, 0.06, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.03, 0.03, 0.04, 0.04, 0.05, 0.06, 0.06, 0.06, 0.06, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.04, 0.04, 0.04, 0.04, 0.03, 0.03, 0.03, 0.04, 0.04, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.02, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.02, 0.02, 0.02, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.03, 0.03, 0.02, 0.02, 0.02, 0.03, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02]
      }],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
          size: 0
      },
      grid: {
        padding: {
          top: 35,
          bottom: 0,
          left: 40
        }
      },
      colors: ['#e2a03f'],
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
      },
      responsive: [{
          breakpoint: 1351,
          options: {
            chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
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
                  left: 40
                }
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
                  left: 0
                }
            },
          },
      }
      
      ]
      }

      // Climate Heatmap

      var heatmap = {
          series: [{
          name: 'Aridity',
          data: [4.0, 2.0, 2.5, 1.8, 4.0, 2.0, 3.0, 1.0, 2.0, 4.0, 3.0, 2.0]
        },
        {
          name: 'Sunshine',
          data: [200, 228, 168, 81, 53, 100, 115, 138, 174, 234, 247, 296]
        },
        {
          name: 'Evaporation',
          data: [65.0, 68.0, 35.0, 9.5, 7.4, 10.0, 18.0, 34.0, 41.0, 83.0, 94.0, 98.0]
        },
        {
          name: 'Precipitation',
          data: [175, 48, 43, 37, 83, 32, 38, 18, 48, 111, 124, 67]
        },
        {
          name: 'Temperature',
          data: [17.0, 14.7, 7.9, 6.7, 5.7, 1.4, 3.9, 4.1, 13.0, 15.1, 19.1, 20.0]
        },
        {
          name: 'Radiation',
          data: [1.419, 1.302, 0.854, 0.363, 0.279, 0.35, 0.68, 1.2, 1.5, 1.85, 1.817, 1.64]
        }
        ],
          chart: {
          height: 350,
          type: 'heatmap',
        },
        dataLabels: {
          enabled: false
        },
        colors: ["#008FFB"],
        title: {
          text: 'Climate'
        },
        };

      var heatmapChart = new ApexCharts(document.querySelector("#climate-chart"), heatmap);
      heatmapChart.render();

      // COM aCCELERATION
      
      var spark8= {
      chart: {
          id: 'com-acceleration',
          group: 'sparks2',
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
              color: '#e2a03f',
              opacity: 0.7,
          }
      },
      series: [{
          data: [2.1, 1.7, 1.4, 1.3, 1.0, 0.9, 0.8, 0.6, 0.5, 0.5, 0.4, 0.3, 0.3, 0.3, 0.2, 0.2, 0.2, 0.2, 0.1, 0.1, 0.1, 0.1, 0.1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.1, 1.9, 1.7, 1.5, 1.4, 1.3, 1.1, 1.0, 0.9, 0.8, 0.8, 0.7, 0.6, 0.6, 0.5, 0.5, 0.4, 0.4, 0.3, 0.3, 0.3, 0.3, 0.2, 0.2, 0.2, 0.2, 0.2, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
      }],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
          size: 0
      },
      grid: {
        padding: {
          top: 35,
          bottom: 0,
          left: 40
        }
      },
      colors: ['#e2a03f'],
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
      },
      responsive: [{
          breakpoint: 1351,
          options: {
            chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
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
                  left: 40
                }
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
                  left: 0
                }
            },
          },
      }
      
      ]
      }

       // Kinetic Energy
      
      var spark9 = {
      chart: {
          id: 'kinetic-energy',
          group: 'sparks2',
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
              color: '#e2a03f',
              opacity: 0.7,
          }
      },
      series: [{
          data: [0.0, 3.2, 4.0, 4.2, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 0.0, 2.2, 3.2, 3.8, 4.0, 4.2, 4.2, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3]
      }],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
          size: 0
      },
      grid: {
        padding: {
          top: 35,
          bottom: 0,
          left: 40
        }
      },
      colors: ['#e2a03f'],
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
      },
      responsive: [{
          breakpoint: 1351,
          options: {
            chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
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
                  left: 40
                }
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
                  left: 0
                }
            },
          },
      }
      
      ]
      }
      

      
      // stiffness
      
      var spark10 = {
      chart: {
        id: 'stiffness',
        type: 'area',
        height: 80,
        sparkline: {
          enabled: true
        },
      },
      stroke: {
          curve: 'smooth',
          width: 2,
      },
      series: [{
        name: 'Vertical Stiffness',
        data: [2410.2, 2363.2, 2316.6, 2316.6, 2270.5, 2224.9, 2224.9, 2179.7, 2179.7, 2179.7, 2135.0, 2135.0, 2047.0, 2003.6, 2003.6, 2003.6, 2003.6, 2003.6, 2003.6, 2003.6, 2003.6, 1960.8, 1960.8, 1960.8, 1960.8, 1960.8, 1918.4, 1918.4, 1918.4, 1960.8, 1918.4, 1918.4, 1918.4, 1918.4, 1918.4, 1835.0, 1835.0, 1835.0, 1876.5, 1876.5, 1876.5, 1835.0, 2090.7, 2090.7, 2135.0, 2224.9, 2270.5, 2316.6, 2316.6, 2316.6, 2270.5, 2179.7, 2179.7, 2224.9, 2179.7, 2179.7, 2135.0, 2090.7, 2090.7, 2090.7, 2047.0, 2003.6, 1960.8, 1918.4, 1960.8, 1960.8, 1918.4, 1918.4, 1918.4, 1960.8, 1960.8, 1960.8, 1918.4, 1876.5, 1918.4, 1960.8, 1918.4, 1876.5, 1918.4, 1918.4, 1918.4, 1960.8, 1876.5, 1835.0, 1876.5, 1918.4, 1918.4, 1918.4, 1876.5, 1835.0, 1835.0, 1835.0, 1876.5, 1876.5, 1876.5, 1835.0, 1835.0, 1835.0, 1794.0, 1794.0, 1794.0, 1835.0, 1794.0, 1794.0, 1794.0, 1835.0, 1794.0, 1753.4, 1794.0, 1835.0, 1835.0, 1835.0, 1835.0, 1835.0, 1835.0, 1794.0, 1794.0, 1794.0, 1835.0, 1835.0, 1835.0, 1835.0, 1794.0, 1794.0, 1835.0]
      }],
      labels: ['1', '2', '3', '4', '5', '6', '7'],
      yaxis: {
        min: 0
      },
      colors: ['#4361ee'],
      tooltip: {
        x: {
          show: false,
        }
      },
      grid: {
          show: false,
          xaxis: {
              lines: {
                  show: false
              }
          },
          padding: {
          top: 5,
          right: 0,
          left: 0
          }, 
      },
      fill: {
        type:"gradient",
        gradient: {
            type: "vertical",
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: .30,
            opacityTo: .05,
            stops: [100, 100]
        }
      }
      }
      
      // stance_phase_vertical_stiff
      
      var spark11 = {
      chart: {
        id: 'stance-stiffness',
        type: 'area',
        height: 80,
        sparkline: {
          enabled: true
        },
      },
      stroke: {
          curve: 'smooth',
          width: 2,
      },
      series: [{
        name: 'Stance Stiffness',
        data: [1205.1, 1181.6, 1158.3, 1158.3, 1135.3, 1112.4, 1112.4, 1089.9, 1089.9, 1089.9, 1067.5, 1067.5, 1023.5, 1001.8, 1001.8, 1001.8, 1001.8, 1001.8, 1001.8, 1001.8, 1001.8, 980.4, 980.4, 980.4, 980.4, 980.4, 959.2, 959.2, 959.2, 980.4, 959.2, 959.2, 959.2, 959.2, 959.2, 917.5, 917.5, 917.5, 938.2, 938.2, 938.2, 917.5, 1045.4, 1045.4, 1067.5, 1112.4, 1135.3, 1158.3, 1158.3, 1158.3, 1135.3, 1089.9, 1089.9, 1112.4, 1089.9, 1089.9, 1067.5, 1045.4, 1045.4, 1045.4, 1023.5, 1001.8, 980.4, 959.2, 980.4, 980.4, 959.2, 959.2, 959.2, 980.4, 980.4, 980.4, 959.2, 938.2, 959.2, 980.4, 959.2, 938.2, 959.2, 959.2, 959.2, 980.4, 938.2, 917.5, 938.2, 959.2, 959.2, 959.2, 938.2, 917.5, 917.5, 917.5, 938.2, 938.2, 938.2, 917.5, 917.5, 917.5, 897.0, 897.0, 897.0, 917.5, 897.0, 897.0, 897.0, 917.5, 897.0, 876.7, 897.0, 917.5, 917.5, 917.5, 917.5, 917.5, 917.5, 897.0, 897.0, 897.0, 917.5, 917.5, 917.5, 917.5, 897.0, 897.0, 917.5]
      }],
      yaxis: {
        min: 0
      },
      colors: ['#e7515a'],
      tooltip: {
        x: {
          show: false,
        }
      },
      grid: {
          show: false,
          xaxis: {
              lines: {
                  show: false
              }
          },
          padding: {
          top: 5,
          right: 0,
          left: 0
          }, 
      },
      fill: {
        type:"gradient",
        gradient: {
            type: "vertical",
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: .30,
            opacityTo: .05,
            stops: [100, 100]
        }
      }
      }
      
      // kvert_natural_freq
      
      var spark12 = {
        chart: {
          id: 'k-vert-freq',
          type: 'area',
          height: 80,
          sparkline: {
            enabled: true
          },
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        fill: {
          opacity: 1,
        },
        series: [{
          name: 'K-vert Frequency',
          data: [61.1, 59.9, 58.7, 58.7, 57.5, 56.4, 56.4, 55.2, 55.2, 55.2, 54.1, 54.1, 51.9, 50.8, 50.8, 50.8, 50.8, 50.8, 50.8, 50.8, 50.8, 49.7, 49.7, 49.7, 49.7, 49.7, 48.6, 48.6, 48.6, 49.7, 48.6, 48.6, 48.6, 48.6, 48.6, 46.5, 46.5, 46.5, 47.5, 47.5, 47.5, 46.5, 53.0, 53.0, 54.1, 56.4, 57.5, 58.7, 58.7, 58.7, 57.5, 55.2, 55.2, 56.4, 55.2, 55.2, 54.1, 53.0, 53.0, 53.0, 51.9, 50.8, 49.7, 48.6, 49.7, 49.7, 48.6, 48.6, 48.6, 49.7, 49.7, 49.7, 48.6, 47.5, 48.6, 49.7, 48.6, 47.5, 48.6, 48.6, 48.6, 49.7, 47.5, 46.5, 47.5, 48.6, 48.6, 48.6, 47.5, 46.5, 46.5, 46.5, 47.5, 47.5, 47.5, 46.5, 46.5, 46.5, 45.4, 45.4, 45.4, 46.5, 45.4, 45.4, 45.4, 46.5, 45.4, 44.4, 45.4, 46.5, 46.5, 46.5, 46.5, 46.5, 46.5, 45.4, 45.4, 45.4, 46.5, 46.5, 46.5, 46.5, 45.4, 45.4, 46.5]
        }],
        yaxis: {
          min: 0
        },
        colors: ['#00ab55'],
        tooltip: {
          x: {
            show: false,
          }
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            },
            padding: {
            top: 5,
            right: 0,
            left: 0
            }, 
        },
        fill: {
          type:"gradient",
          gradient: {
              type: "vertical",
              shadeIntensity: 1,
              inverseColors: !1,
              opacityFrom: .30,
              opacityTo: .05,
              stops: [100, 100]
          }
        }
      }

      // drag

      var spark13 = {
      chart: {
          id: 'drag-coefficient',
          group: 'sparks2',
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
              color: '#e2a03f',
              opacity: 0.7,
          }
      },
      series: [{
          data: [0.0, 0.0, 0.0, 0.3, 2.8, 3.9, 7.5, 8.7, 9.3, 9.3, 9.3, 8.7, 8.4, 7.8, 7.8, 7.6, 7.6, 7.9, 8.0, 7.2, 7.2, 6.9, 6.7, 6.5, 6.4, 6.4, 6.4, 6.2, 6.2, 6.2, 6.1, 6.1, 6.0, 6.0, 6.0, 6.0, 6.0, 6.0, 6.0, 6.0, 6.1, 5.8, 5.7, 5.5, 5.4, 5.5, 5.5, 5.5]
      }],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
          size: 0
      },
      grid: {
        padding: {
          top: 35,
          bottom: 0,
          left: 40
        }
      },
      colors: ['#e2a03f'],
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
      },
      responsive: [{
          breakpoint: 1351,
          options: {
            chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
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
                  left: 40
                }
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
                  left: 0
                }
            },
          },
      }
      
      ]
      }
      
      // dynamic pressure
      
      var spark14 = {
      chart: {
        id: 'dynamic-pressure',
        group: 'sparks1',
        type: 'line',
        height: 80,
        sparkline: {
          enabled: true
        },
        dropShadow: {
          enabled: true,
          top: 3,
          left: 1,
          blur: 3,
          color: '#009688',
          opacity: 0.7,
        }
      },
      series: [{
        data: [0.0, 0.0, 0.0, 0.6, 5.8, 8.2, 15.7, 18.3, 19.5, 19.5, 19.5, 18.3, 17.6, 16.3, 16.3, 15.9, 15.9, 16.5, 16.8, 15.0, 15.0, 14.5, 14.0, 13.6, 13.5, 13.4, 13.4, 13.0, 13.0, 12.9, 12.8, 12.7, 12.5, 12.5, 12.6, 12.5, 12.5, 12.5, 12.6, 12.6, 12.7, 12.2, 11.9, 11.6, 11.4, 11.5, 11.5, 11.5]
      }],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
        size: 0
      },
      grid: {
        padding: {
          top: 35,
          bottom: 0,
          left: 40
        }
      },
      colors: ['#009688'],
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
      },
      responsive: [{
          breakpoint: 1351,
          options: {
            chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
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
                  left: 40
                }
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
                  top: 35,
                  bottom: 0,
                  left: 0
                }
            },
          },
      }
      ]
      }

      // drag power
      
      var spark15 = {
      chart: {
          id: 'drag-power',
          group: 'sparks2',
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
              color: '#e2a03f',
              opacity: 0.7,
          }
      },
      series: [{
          data: [0.0, 0.0, 0.0, 0.3, 8.5, 14.3, 37.7, 47.2, 52.3, 52.0, 52.0, 47.2, 44.6, 39.8, 39.8, 38.5, 38.5, 40.7, 41.6, 35.0, 35.0, 33.5, 31.6, 30.5, 29.9, 29.5, 29.5, 28.5, 28.5, 28.0, 27.6, 27.3, 26.8, 26.8, 26.9, 26.8, 26.6, 26.8, 26.9, 27.1, 27.5, 25.8, 24.8, 23.9, 23.3, 23.6, 23.6, 23.7]
      }],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
          size: 0
      },
      grid: {
        padding: {
          top: 35,
          bottom: 0,
          left: 40
        }
      },
      colors: ['#e2a03f'],
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
      },
      responsive: [{
          breakpoint: 1351,
          options: {
            chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
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
                  left: 40
                }
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
                  left: 0
                }
            },
          },
      }
      
      ]
      }

        // wind resistance
      
      var spark16 = {
      chart: {
          id: 'wind-resistance',
          group: 'sparks2',
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
              color: '#e2a03f',
              opacity: 0.7,
          }
      },
      series: [{
          data: [0.0, 0.0, 0.0, 0.3, 2.5, 3.5, 6.8, 7.9, 8.4, 8.4, 8.4, 7.9, 7.6, 7.0, 7.0, 6.9, 6.9, 7.1, 7.2, 6.4, 6.4, 6.2, 6.0, 5.9, 5.8, 5.7, 5.7, 5.6, 5.6, 5.5, 5.5, 5.4, 5.4, 5.4, 5.4, 5.4, 5.4, 5.4, 5.4, 5.4, 5.5, 5.2, 5.1, 5.0, 4.9, 4.9, 4.9, 5.0]
      }],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
          size: 0
      },
      grid: {
        padding: {
          top: 35,
          bottom: 0,
          left: 40
        }
      },
      colors: ['#e2a03f'],
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
      },
      responsive: [{
          breakpoint: 1351,
          options: {
            chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
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
                  left: 40
                }
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
                  left: 0
                }
            },
          },
      }
      
      ]
      }

        // leg-delta
      
      var spark17 = {
      chart: {
          id: 'leg-delta',
          group: 'sparks2',
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
              color: '#e2a03f',
              opacity: 0.7,
          }
      },
      series: [{
          data: [6.4, 6.4, 6.3, 6.3, 6.5, 6.6, 5.9, 5.9, 5.7, 6.5, 6.4, 6.4, 6.2, 6.1, 6.0, 5.9, 5.8, 5.7, 5.6, 5.4, 5.4, 5.4, 5.4, 5.4, 5.4, 4.9, 4.9, 5.0, 5.0, 4.8, 4.8, 4.8, 4.8, 4.8, 4.8, 4.8, 4.8, 4.8, 4.8, 4.8, 4.8, 4.7, 4.6, 4.6, 4.6, 4.5]
      }],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
          size: 0
      },
      grid: {
        padding: {
          top: 35,
          bottom: 0,
          left: 40
        }
      },
      colors: ['#e2a03f'],
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
      },
      responsive: [{
          breakpoint: 1351,
          options: {
            chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
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
                  left: 40
                }
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
                  left: 0
                }
            },
          },
      }
      
      ]
      }
      
      // max force
      
      var spark18 = {
      chart: {
        id: 'max-force',
        group: 'sparks1',
        type: 'line',
        height: 80,
        sparkline: {
          enabled: true
        },
        dropShadow: {
          enabled: true,
          top: 3,
          left: 1,
          blur: 3,
          color: '#009688',
          opacity: 0.7,
        }
      },
      series: [{
        data:[1310.4, 1310.4, 1310.3, 1310.4, 1310.3, 1310.6, 1310.9, 1310.8, 1310.6, 1309.2, 1309.2, 1309.2, 1308.9, 1308.7, 1308.9, 1309.1, 1309.2, 1309.3, 1309.1, 1308.9, 1309.0, 1309.0, 1309.0, 1309.0, 1308.7, 1310.1, 1310.2, 1310.3, 1310.2, 1310.6, 1308.7, 1308.7, 1308.6, 1308.6, 1308.5, 1308.6, 1308.5, 1308.5, 1308.4, 1308.4, 1308.4, 1308.5, 1308.5, 1308.5, 1308.5, 1308.6]

      }],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
        size: 0
      },
      grid: {
        padding: {
          top: 35,
          bottom: 0,
          left: 40
        }
      },
      colors: ['#009688'],
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
      },
      responsive: [{
          breakpoint: 1351,
          options: {
            chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
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
                  left: 40
                }
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
                  top: 35,
                  bottom: 0,
                  left: 0
                }
            },
          },
      }
      ]
      }

      // effective force
      
      var spark19 = {
      chart: {
          id: 'effective-force',
          group: 'sparks2',
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
              color: '#e2a03f',
              opacity: 0.7,
          }
      },
      series: [{
          data:[204.5, 204.5, 209.1, 209.1, 201.4, 198.7, 223.3, 223.3, 230.3, 202.4, 204.3, 206.1, 210.6, 215.2, 219.5, 223.9, 226.4, 228.8, 235.4, 241.9, 242.0, 242.0, 241.9, 241.9, 243.0, 267.4, 266.3, 265.3, 263.1, 274.7, 272.8, 273.8, 274.6, 274.5, 274.5, 274.5, 274.6, 274.5, 274.4, 274.5, 274.6, 279.1, 283.8, 283.9, 283.9, 291.1]
      }],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
          size: 0
      },
      grid: {
        padding: {
          top: 35,
          bottom: 0,
          left: 40
        }
      },
      colors: ['#e2a03f'],
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
      },
      responsive: [{
          breakpoint: 1351,
          options: {
            chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
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
                  left: 40
                }
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
                  left: 0
                }
            },
          },
      }
      
      ]
      }

        // propulsive-force
      
      var spark20 = {
      chart: {
          id: 'propulsive-force',
          group: 'sparks2',
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
              color: '#e2a03f',
              opacity: 0.7,
          }
      },
      series: [{
          data: [204.5, 204.5, 209.1, 209.1, 201.4, 198.7, 223.3, 223.3, 230.3, 202.4, 204.3, 206.1, 210.6, 215.2, 219.5, 223.9, 226.4, 228.8, 235.4, 241.9, 242.0, 242.0, 241.9, 241.9, 243.0, 267.4, 266.3, 265.3, 263.1, 274.7, 272.8, 273.8, 274.6, 274.5, 274.5, 274.5, 274.6, 274.5, 274.4, 274.5, 274.6, 279.1, 283.8, 283.9, 283.9, 291.1]
      }],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
          size: 0
      },
      grid: {
        padding: {
          top: 35,
          bottom: 0,
          left: 40
        }
      },
      colors: ['#e2a03f'],
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
      },
      responsive: [{
          breakpoint: 1351,
          options: {
            chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
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
                  left: 40
                }
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
                  left: 0
                }
            },
          },
      }
      
      ]
      }

          // oxygen-uptake
      
      var spark21 = {
      chart: {
          id: 'oxygen-uptake',
          group: 'sparks2',
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
              color: '#e2a03f',
              opacity: 0.7,
          }
      },
      series: [{
          data:[65.5, 65.5, 64.4, 64.4, 66.3, 67.0, 61.5, 61.5, 60.1, 65.9, 65.4, 65.0, 63.9, 62.9, 62.1, 61.2, 60.7, 60.2, 59.0, 57.9, 57.9, 57.9, 57.9, 57.9, 57.7, 54.1, 54.2, 54.4, 54.7, 53.1, 53.3, 53.2, 53.1, 53.1, 53.1, 53.1, 53.1, 53.1, 53.1, 53.1, 53.1, 52.5, 51.9, 51.9, 51.9, 51.1]
      }],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
          size: 0
      },
      grid: {
        padding: {
          top: 35,
          bottom: 0,
          left: 40
        }
      },
      colors: ['#e2a03f'],
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
      },
      responsive: [{
          breakpoint: 1351,
          options: {
            chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
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
                  left: 40
                }
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
                  left: 0
                }
            },
          },
      }
      
      ]
      }
      
      // joint-force
      
      var spark22 = {
      chart: {
        id: 'joint-force',
        group: 'sparks1',
        type: 'line',
        height: 80,
        sparkline: {
          enabled: true
        },
        dropShadow: {
          enabled: true,
          top: 3,
          left: 1,
          blur: 3,
          color: '#009688',
          opacity: 0.7,
        }
      },
      series: [{
        data: [9.71, 9.71, 9.71, 9.71, 9.72, 9.71, 9.71, 9.71, 9.71, 9.72, 9.73, 9.73, 9.73, 9.72, 9.72, 9.72, 9.72, 9.72, 9.72, 9.72, 9.72, 9.72, 9.72, 9.72, 9.72, 9.71, 9.71, 9.71, 9.71, 9.71, 9.71, 9.71, 9.71, 9.71, 9.71, 9.71, 9.71, 9.71, 9.71, 9.71, 9.71, 9.71, 9.71, 9.71, 9.71, 9.71]
      }],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
        size: 0
      },
      grid: {
        padding: {
          top: 35,
          bottom: 0,
          left: 40
        }
      },
      colors: ['#009688'],
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
      },
      responsive: [{
          breakpoint: 1351,
          options: {
            chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
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
                  left: 40
                }
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
                  top: 35,
                  bottom: 0,
                  left: 0
                }
            },
          },
      }
      ]
      }

      // kLeg
      
      var spark23 = {
      chart: {
          id: 'kLeg',
          group: 'sparks2',
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
              color: '#e2a03f',
              opacity: 0.7,
          }
      },
      series: [{
          data: [203.5, 203.5, 208.1, 208.1, 200.4, 197.7, 222.3, 222.3, 229.3, 201.4, 203.3, 205.1, 209.6, 214.2, 218.5, 222.9, 225.4, 227.8, 234.4, 240.9, 241.0, 241.0, 240.9, 240.9, 242.0, 266.4, 265.3, 264.3, 262.1, 273.7, 271.8, 272.8, 273.6, 273.5, 273.5, 273.5, 273.6, 273.5, 273.4, 273.5, 273.6, 278.1, 282.8, 282.9, 282.9, 290.1]
      }],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
          size: 0
      },
      grid: {
        padding: {
          top: 35,
          bottom: 0,
          left: 40
        }
      },
      colors: ['#e2a03f'],
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
      },
      responsive: [{
          breakpoint: 1351,
          options: {
            chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
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
                  left: 40
                }
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
                  left: 0
                }
            },
          },
      }
      
      ]
      }

     
      

    } else {
      
      var Theme = 'dark';
      
      Apex.tooltip = {
          theme: Theme
      }
      
      /**
        ==============================
        |    @Options Charts Script   |
        ==============================
      */
      
      /*
        ======================================
            Visitor Statistics | Options
        ======================================
      */
      
      
      // Total Visits
      
      var spark1 = {
      chart: {
          id: 'unique-visits',
          group: 'sparks2',
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
              color: '#e2a03f',
              opacity: 0.7,
          }
      },
      series: [{
          data: [21, 9, 36, 12, 44, 25, 59, 41, 66, 25]
      }],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
          size: 0
      },
      grid: {
        padding: {
          top: 35,
          bottom: 0,
          left: 40
        }
      },
      colors: ['#e2a03f'],
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
      },
      responsive: [{
          breakpoint: 1351,
          options: {
            chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
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
                  left: 40
                }
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
                  left: 0
                }
            },
          },
      }
      
      ]
      }
      
      // Paid Visits
      
      var spark2 = {
      chart: {
        id: 'total-users',
        group: 'sparks1',
        type: 'line',
        height: 80,
        sparkline: {
          enabled: true
        },
        dropShadow: {
          enabled: true,
          top: 3,
          left: 1,
          blur: 3,
          color: '#009688',
          opacity: 0.7,
        }
      },
      series: [{
        data: [22, 19, 30, 47, 32, 44, 34, 55, 41, 69]
      }],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
        size: 0
      },
      grid: {
        padding: {
          top: 35,
          bottom: 0,
          left: 40
        }
      },
      colors: ['#009688'],
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
      },
      responsive: [{
          breakpoint: 1351,
          options: {
            chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
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
                  left: 40
                }
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
                  top: 35,
                  bottom: 0,
                  left: 0
                }
            },
          },
      }
      ]
      }
      
      
      /*
        ===================================
            Unique Visitors | Options
        ===================================
      */
      
      var d_1options1 = {
      chart: {
          height: 350,
          type: 'bar',
          toolbar: {
            show: false,
          }
      },
      colors: ['#622bd7', '#ffbb44'],
      plotOptions: {
          bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded',
              borderRadius: 10,
      
          },
      },
      dataLabels: {
          enabled: false
      },
      legend: {
          position: 'bottom',
          horizontalAlign: 'center',
          fontSize: '14px',
          markers: {
              width: 10,
              height: 10,
              offsetX: -5,
              offsetY: 0
          },
          itemMargin: {
              horizontal: 10,
              vertical: 8
          }
      },
      grid: {
        borderColor: '#e0e6ed',
      },
      stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
      },
      series: [{
          name: 'Direct',
          data: [58, 44, 55, 57, 56, 61, 58, 63, 60, 66, 56, 63]
      }, {
          name: 'Organic',
          data: [91, 76, 85, 101, 98, 87, 105, 91, 114, 94, 66, 70]
      }],
      xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: Theme,
          type: 'vertical',
          shadeIntensity: 0.3,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 0.8,
          stops: [0, 100]
        }
      },
      tooltip: {
          marker : {
              show: false,
          },
          theme: Theme,
          y: {
              formatter: function (val) {
                  return val
              }
          }
      },
      responsive: [
          { 
              breakpoint: 767,
              options: {
                  plotOptions: {
                      bar: {
                          borderRadius: 0,
                          columnWidth: "50%"
                      }
                  }
              }
          },
      ]
      }
      
      /*
        ==============================
            Statistics | Options
        ==============================
      */
      
      // Followers
      
      var d_1options3 = {
      chart: {
        id: 'sparkline1',
        type: 'area',
        height: 160,
        sparkline: {
          enabled: true
        },
      },
      stroke: {
          curve: 'smooth',
          width: 2,
      },
      series: [{
        name: 'Sales',
        data: [38, 60, 38, 52, 36, 40, 28 ]
      }],
      labels: ['1', '2', '3', '4', '5', '6', '7'],
      yaxis: {
        min: 0
      },
      colors: ['#4361ee'],
      tooltip: {
        x: {
          show: false,
        }
      },
      grid: {
          show: false,
          xaxis: {
              lines: {
                  show: false
              }
          },
          padding: {
          top: 5,
          right: 0,
          left: 0
          }, 
      },
      fill: {
        type:"gradient",
        gradient: {
            type: "vertical",
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: .40,
            opacityTo: .05,
            stops: [100, 100]
        }
      }
      }
      
      // Referral
      
      var d_1options4 = {
      chart: {
        id: 'sparkline1',
        type: 'area',
        height: 160,
        sparkline: {
          enabled: true
        },
      },
      stroke: {
          curve: 'smooth',
          width: 2,
      },
      series: [{
        name: 'Sales',
        data: [ 60, 28, 52, 38, 40, 36, 38]
      }],
      labels: ['1', '2', '3', '4', '5', '6', '7'],
      yaxis: {
        min: 0
      },
      colors: ['#e7515a'],
      tooltip: {
        x: {
          show: false,
        }
      },
      grid: {
          show: false,
          xaxis: {
              lines: {
                  show: false
              }
          },
          padding: {
          top: 5,
          right: 0,
          left: 0
          }, 
      },
      fill: {
        type:"gradient",
        gradient: {
            type: "vertical",
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: .40,
            opacityTo: .05,
            stops: [100, 100]
        }
      }
      }
      
      // Engagement Rate
      
      var d_1options5 = {
        chart: {
          id: 'sparkline1',
          type: 'area',
          height: 160,
          sparkline: {
            enabled: true
          },
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        fill: {
          opacity: 1,
        },
        series: [{
          name: 'Sales',
          data: [28, 50, 36, 60, 38, 52, 38 ]
        }],
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        yaxis: {
          min: 0
        },
        colors: ['#00ab55'],
        tooltip: {
          x: {
            show: false,
          }
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            },
            padding: {
            top: 5,
            right: 0,
            left: 0
            }, 
        },
        fill: {
          type:"gradient",
          gradient: {
              type: "vertical",
              shadeIntensity: 1,
              inverseColors: !1,
              opacityFrom: .40,
              opacityTo: .05,
              stops: [100, 100]
          }
        }
      }

    }
      
      /**
          ==============================
          |    @Render Charts Script    |
          ==============================
      */


      /*
          ======================================
              Visitor Statistics | Script
          ======================================
      */

      // Total Visits
      d_1C_1 = new ApexCharts(document.querySelector("#total-users"), spark1);
      d_1C_1.render();

      // Paid Visits
      d_1C_2 = new ApexCharts(document.querySelector("#paid-visits"), spark2);
      d_1C_2.render();

      /*
          ===================================
              Unique Visitors | Script
          ===================================
      */

      var d_1C_3 = new ApexCharts(
          document.querySelector("#uniqueVisits"),
          d_1options1
      );
      d_1C_3.render();


      /*
          ==============================
              Statistics | Script
          ==============================
      */


      // Followers

      var d_1C_5 = new ApexCharts(document.querySelector("#hybrid_followers"), d_1options3);
      d_1C_5.render()

      // Referral

      var d_1C_6 = new ApexCharts(document.querySelector("#hybrid_followers1"), d_1options4);
      d_1C_6.render()

      // Engagement Rate

      var d_1C_7 = new ApexCharts(document.querySelector("#hybrid_followers3"), d_1options5);
      d_1C_7.render()



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
      
          d_1C_3.updateOptions({
          grid: {
                  borderColor: '#191e3a',
              },
          })
          
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
      
          // Referral

          d_1C_6.updateOptions({
              fill: {
                  type:"gradient",
                  gradient: {
                      opacityFrom: .30,
                  }
              }
          })
      
          // Engagement Rate

          d_1C_7.updateOptions({
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
      
          d_1C_3.updateOptions({
          grid: {
                  borderColor: '#e0e6ed',
              },
          })
        
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

          d_1C_6.updateOptions({
              fill: {
                  type:"gradient",
                  gradient: {
                      opacityFrom: .40,
                  }
              }
          })
      
          // Engagement Rate

          d_1C_7.updateOptions({
              fill: {
                  type:"gradient",
                  gradient: {
                      opacityFrom: .40,
                  }
              }
          })

      }
     
  })


  } catch(e) {
    // statements
    console.log(e);
  }

})