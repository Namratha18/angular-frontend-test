import { Component, OnInit } from '@angular/core';

import { DataLoaderService }  from '../../providers/data-loader.service';

import * as Chart from 'chart.js';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  lineChart;
  barChart;
  doughnutChart;

  activityJsonData;
  initialTime;
  dataSpeedSets = [];
  dataCountSets = [];
  labels = [];
  pieLabels = [];
  pieColors = [];
  pieData = [];

  //Configuration of doughnut chart
  doughnutConfiguration = {
   type: 'doughnut',
   data: 
   {
     datasets: 
     [{
       data: this.pieData,
       backgroundColor: this.pieColors,
       label: 'Dataset 1'
     }],
     labels: this.pieLabels
   },
   options: {
     responsive: true
   }
 };
  //Configuration of line chart
  lineConfig = {
   type: 'line',
   data: 
   {
     labels: this.labels,
     datasets: this.dataSpeedSets
   },
   options: 
   {
     responsive: true,
     title: 
     {
       display: true,
       text: 'Chart.js Line Chart'
     },
     tooltips: 
     {
       mode: 'index',
       intersect: false,
     },
     hover: 
     {
       mode: 'nearest',
       intersect: true
     },
     scales: 
     {
       xAxes: 
       [{
         display: true,
         scaleLabel: {
           display: true,
           labelString: 'Time'
         }
       }],
       yAxes: 
       [{
         display: true,
         scaleLabel: {
           display: true,
           labelString: 'Value'
         }
       }]
     }
   }
   };
   //Configuration of bar chart
   barChartData = 
   {
     labels: ['1'],
     datasets: this.dataCountSets
   };

  constructor(private dataService: DataLoaderService) { }

  ngOnInit() {
    //fetching initial data from activity-data.json
    this.getInitialData(); 
  }

  getInitialData() {
    this.dataService.getJSON().subscribe(res => {
      this.activityJsonData = res;
      this.createChart();
    },
    err => console.log(err));
  }

  /* Creation of chart */
  createChart(){
    this.activityJsonData.forEach(data => {
      var color = [this.getColor(), this.getColor()];
      var speedObj = 
      {
        label: data.zoneId,
        backgroundColor: color[0],
        borderColor: color[0],
        data: [data.data.speed],
        fill: false
      }

      this.dataSpeedSets.push(speedObj);

      var countObj = 
      {
        label: data.zoneId,
        backgroundColor: color[1],
        borderColor: color[1],
        borderWidth:1,
        data: [data.data.count]
      };

      this.dataCountSets.push(countObj);

      this.pieData.push(data.data.speed);
      this.pieLabels.push(data.zoneId);
      this.pieColors.push(this.getColor());
      this.initialTime = data.data.time;
      var d = new Date(this.initialTime);
      this.labels.push(d.getHours() + ":" + d.getMinutes());
    });
    var linectx = (<HTMLCanvasElement>document.getElementById('canvas')).getContext('2d');
    this.lineChart = new Chart(linectx, this.lineConfig);
    
    var barctx = (<HTMLCanvasElement>document.getElementById('barCanvasId')).getContext('2d');
    var a:any = 
    {
      type: 'bar',
      data: this.barChartData,
      options: 
      {
        responsive: true,
        legend: 
        {
          position: 'top',
        },
        title: 
        {
          display: true,
          text: 'Bar Chart'
        }
      }
    };
    this.barChart = new Chart(barctx, a);
    this.barChart.update();


    var piectx = (<HTMLCanvasElement>document.getElementById('pieCanvasId')).getContext('2d');
    this.doughnutChart = new Chart(piectx, this.doughnutConfiguration);

    this.updateChartGraph();
  }
  /* Creation of graph - end */

  //Updation of chart based time interval
  updateChartGraph(){
    setInterval(()=>{
      this.initialTime += 60000;
      var d = new Date(this.initialTime);
      this.lineConfig.data.labels.push(d.getHours() + ":" + d.getMinutes());
      this.lineConfig.data.labels.splice(0,1);
      this.lineConfig.data.datasets.forEach((dataset, i) => {
        var speed = 10 * Math.random();
        dataset.data.push( speed );
        if(dataset.data.length > 5){
          dataset.data.splice(0,1);
        }
        
        this.pieData[i] = (this.pieData[i] + speed) / 2;
      });

      this.lineChart.update();
      this.doughnutChart.update();
      this.dataCountSets.forEach(data=>{
        data.data[0] = 10 * Math.random();
      });
      this.barChart.update();
    }, 1000)
  }

  //Fetching random color for the app
  getColor() {
    var values = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += values[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
