

const CHART = document.getElementById("lineChart");
console.log(CHART)

let myChart = document.getElementById('myChart').getContext('2d');

Chart.defaults.global.defaultFontFamily = '"Open Sans", sans-serif';
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontColor = '#777'; 

let weeklypieChart = new Chart(myChart, {
  type: 'pie',
  data: {
    labels: ['Algorithms', 'Web Development', 'Farsi', 'Opera'],
    datasets: [ {
      label: 'Hours Spent per Week Studying',
      data: [12, 8, 6, 3],
      backgroundColor: [
        '#0d47a1',
        '#1976d2',
        '#2196f3',
        '#64b5f6'
      ]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Hours Spent per Week Studying',
      fontSize: 18,
      fontColor: "grey"
    },
  legend: {
    display: true
  }  
  }
});

document.write("<br />");
document.write("<br />");
document.write("<br />");
document.write("<br />");
document.write("<br />");


/* let myChart2 = document.getElementById('myChart2').getContext('2d');

Chart.defaults.global.defaultFontFamily = '"Open Sans", sans-serif';
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontColor = '#777';

var interestLineChart = new Chart(myChart2, {
    type: 'line',
    data: data = {
    labels: ['Fall 2018', 'Winter 2019', 'Spring 2019', 'Summer 2019', 'Fall 2019', 'Winter 2020', 'Spring 2020', 'Summer 2020','Fall 2020'],
    datasets: [
      {
        
        label: "Computer Science",
        backgroundColor: '#0d47a1', 
        borderColor: '#0d47a1',
        pointBackgroundColor: '#0d47a1',
        showLine: true,
        fill: false,
        data: [0, 3, 5, 5, 5, 6, 8, 8, 9]
      },
      {
        label: "Theatre",
        backgroundColor: '#2196f3',
        borderColor: '#2196f3',
        pointBackgroundColor: '#2196f3',
        showLine: true,
        fill: false,
        data: [10, 10, 5, 6, 4, 2, 4, 2, 1]
      }
      
    ]
    },  
    options: { 
        title: {
            display: true,
            text: "Change in Interest Over Time"
            },
        xAxisID: "Time",
        yAxisID: "Interest Level"
    }
});  */

new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: ['Fall 2018', 'Winter 2019', 'Spring 2019', 'Summer 2019', 'Fall 2019', 'Winter 2020', 'Spring 2020', 'Summer 2020','Fall 2020'],
      datasets: [{ 
          data: [0, 3, 5, 5, 5, 6, 8, 8, 9],
          label: "Computer Science",
          borderColor: '#0d47a1',
          fill: false
        }, { 
          data: [10, 10, 5, 6, 4, 2, 4, 2, 1],
          label: "Theatre/Opera",
          borderColor: '#2196f3',
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Interest Level Over Time',
        fontSize: 18
      }
    }
  });