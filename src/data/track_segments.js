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
  

var trackSegments = {
          chart: {
              type: 'donut',
              width: 270,
              height: 330
          },
          colors: ['#622bd7', '#e2a03f', '#e7515a', '#e2a03f'],
          dataLabels: {
            enabled: true
          },
          legend: {
              position: 'bottom',
              horizontalAlign: 'center',
              fontSize: '10px',
              markers: {
                width: 5,
                height: 5,
                offsetX: -5,
                offsetY: 0
              },
              itemMargin: {
                horizontal: 5,
                vertical: 10
              }
          },
          plotOptions: {
            pie: {
              donut: {
                size: '50%',
                background: 'transparent',
                labels: {
                  show: true,
                  name: {
                    show: true,
                    fontSize: '19px',
                    fontFamily: 'Nunito, sans-serif',
                    color: undefined,
                    offsetY: -10
                  },
                  value: {
                    show: true,
                    fontSize: '16px',
                    fontFamily: 'Nunito, sans-serif',
                    color: '#bfc9d4',
                    offsetY: 16,
                    formatter: function (val) {
                      return val
                    }
                  },
                  total: {
                    show: true,
                    showAlways: true,
                    label: 'Total',
                    color: '#888ea8',
                    fontSize: '20px',
                    formatter: function (w) {
                      return w.globals.seriesTotals.reduce( function(a, b) {
                        return a + b
                      }, 0)
                    }
                  }
                }
              }
            }
          },
          stroke: {
            show: true,
            width: 15,
            colors: '#0e1726'
          },
          series: [122, 84, 122, 85],
          labels: ['Start', 'Straight', 'Curve', 'Stretch'],
    
          responsive: [
            { 
              breakpoint: 412, options: {
                chart: {
                  width: 225
                },
              }
            },
            { 
              breakpoint: 328, options: {
                chart: {
                  width: 280
                },
              }
            },
            { 
              breakpoint: 206, options: {
                chart: {
                  width: 220
                },
              }
            },
               { 
              breakpoint: 122, options: {
                chart: {
                  width: 220
                },
              }
            }
          ],
      }

var trackSegs = new ApexCharts(document.querySelector("#track-segments"), trackSegments);
trackSegs.render();