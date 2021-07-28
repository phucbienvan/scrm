/* eslint-disable no-new */
/* eslint-disable no-undef */
export default {
  lineChart () {
    const ctx = document.getElementById('chartjs-dashboard-line').getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 225);
    gradient.addColorStop(0, 'rgba(215, 227, 244, 1)');
    gradient.addColorStop(1, 'rgba(215, 227, 244, 0)');
    // Line chart
    new Chart(document.getElementById('chartjs-dashboard-line'), {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Sales ($)',
          fill: true,
          backgroundColor: gradient,
          borderColor: window.theme.primary,
          data: [
            2115,
            1562,
            1584,
            1892,
            1587,
            1923,
            2566,
            2448,
            2805,
            3438,
            2917,
            3327,
          ],
        }],
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        tooltips: {
          intersect: false,
        },
        hover: {
          intersect: true,
        },
        plugins: {
          filler: {
            propagate: false,
          },
        },
        scales: {
          xAxes: [{
            reverse: true,
            gridLines: {
              color: 'rgba(0,0,0,0.0)',
            },
          }],
          yAxes: [{
            ticks: {
              stepSize: 1000,
            },
            display: true,
            borderDash: [3, 3],
            gridLines: {
              color: 'rgba(0,0,0,0.0)',
            },
          }],
        },
      },
    });
  },
  lineChart2 () {
    // Line chart
    new Chart(document.getElementById('chartjs-line'), {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Sales ($)',
          fill: true,
          backgroundColor: 'transparent',
          borderColor: window.theme.primary,
          data: [2115, 1562, 1584, 1892, 1487, 2223, 2966, 2448, 2905, 3838, 2917, 3327],
        }, {
          label: 'Orders',
          fill: true,
          backgroundColor: 'transparent',
          borderColor: '#adb5bd',
          borderDash: [4, 4],
          data: [958, 724, 629, 883, 915, 1214, 1476, 1212, 1554, 2128, 1466, 1827],
        }],
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        tooltips: {
          intersect: false,
        },
        hover: {
          intersect: true,
        },
        plugins: {
          filler: {
            propagate: false,
          },
        },
        scales: {
          xAxes: [{
            reverse: true,
            gridLines: {
              color: 'rgba(0,0,0,0.05)',
            },
          }],
          yAxes: [{
            ticks: {
              stepSize: 500,
            },
            display: true,
            borderDash: [5, 5],
            gridLines: {
              color: 'rgba(0,0,0,0)',
              fontColor: '#fff',
            },
          }],
        },
      },
    });
  },
  pieChart () {
    // Pie chart
    new Chart(document.getElementById('chartjs-dashboard-pie'), {
      type: 'pie',
      data: {
        labels: ['Chrome', 'Firefox', 'IE'],
        datasets: [{
          data: [4306, 3801, 1689],
          backgroundColor: [
            window.theme.primary,
            window.theme.warning,
            window.theme.danger,
          ],
          borderWidth: 5,
        }],
      },
      options: {
        responsive: !window.MSInputMethodContext,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        cutoutPercentage: 75,
      },
    });
  },
  pieChart2 () {
    // Pie chart
    new Chart(document.getElementById('chartjs-pie'), {
      type: 'pie',
      data: {
        labels: ['Social', 'Search Engines', 'Direct', 'Other'],
        datasets: [{
          data: [260, 125, 54, 146],
          backgroundColor: [
            window.theme.primary,
            window.theme.warning,
            window.theme.danger,
            '#dee2e6',
          ],
          borderColor: 'transparent',
        }],
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
      },
    });
  },
  barChart () {
    // Bar chart
    new Chart(document.getElementById('chartjs-dashboard-bar'), {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'This year',
          backgroundColor: window.theme.primary,
          borderColor: window.theme.primary,
          hoverBackgroundColor: window.theme.primary,
          hoverBorderColor: window.theme.primary,
          data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
          barPercentage: 0.75,
          categoryPercentage: 0.5,
        }],
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: false,
            },
            stacked: false,
            ticks: {
              stepSize: 20,
            },
          }],
          xAxes: [{
            stacked: false,
            gridLines: {
              color: 'transparent',
            },
          }],
        },
      },
    });
  },
  barChart2 () {
    // Bar chart
    new Chart(document.getElementById('chartjs-bar'), {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Last year',
          backgroundColor: window.theme.primary,
          borderColor: window.theme.primary,
          hoverBackgroundColor: window.theme.primary,
          hoverBorderColor: window.theme.primary,
          data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
          barPercentage: 0.75,
          categoryPercentage: 0.5,
        }, {
          label: 'This year',
          backgroundColor: '#dee2e6',
          borderColor: '#dee2e6',
          hoverBackgroundColor: '#dee2e6',
          hoverBorderColor: '#dee2e6',
          data: [69, 66, 24, 48, 52, 51, 44, 53, 62, 79, 51, 68],
          barPercentage: 0.75,
          categoryPercentage: 0.5,
        }],
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: false,
            },
            stacked: false,
            ticks: {
              stepSize: 20,
            },
          }],
          xAxes: [{
            stacked: false,
            gridLines: {
              color: 'transparent',
            },
          }],
        },
      },
    });
  },
  doughnutChart () {
    new Chart(document.getElementById('chartjs-doughnut'), {
      type: 'doughnut',
      data: {
        labels: ['Social', 'Search Engines', 'Direct', 'Other'],
        datasets: [{
          data: [260, 125, 54, 146],
          backgroundColor: [
            window.theme.primary,
            window.theme.success,
            window.theme.warning,
            '#dee2e6',
          ],
          borderColor: 'transparent',
        }],
      },
      options: {
        maintainAspectRatio: false,
        cutoutPercentage: 65,
        legend: {
          display: false,
        },
      },
    });
  },
  radarChart () {
    // Radar chart
    new Chart(document.getElementById('chartjs-radar'), {
      type: 'radar',
      data: {
        labels: ['Speed', 'Reliability', 'Comfort', 'Safety', 'Efficiency'],
        datasets: [{
          label: 'Model X',
          backgroundColor: 'rgba(0, 123, 255, 0.2)',
          borderColor: window.theme.primary,
          pointBackgroundColor: window.theme.primary,
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: window.theme.primary,
          data: [70, 53, 82, 60, 33],
        }, {
          label: 'Model S',
          backgroundColor: 'rgba(220, 53, 69, 0.2)',
          borderColor: window.theme.danger,
          pointBackgroundColor: window.theme.danger,
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: window.theme.danger,
          data: [35, 38, 65, 85, 84],
        }],
      },
      options: {
        maintainAspectRatio: false,
      },
    });
  },
  polarAreaChart () {
    // Polar Area chart
    new Chart(document.getElementById('chartjs-polar-area'), {
      type: 'polarArea',
      data: {
        labels: ['Speed', 'Reliability', 'Comfort', 'Safety', 'Efficiency'],
        datasets: [{
          label: 'Model S',
          data: [35, 38, 65, 70, 24],
          backgroundColor: [
            window.theme.primary,
            window.theme.success,
            window.theme.danger,
            window.theme.warning,
            window.theme.info,
          ],
        }],
      },
      options: {
        maintainAspectRatio: false,
      },
    });
  },
};
