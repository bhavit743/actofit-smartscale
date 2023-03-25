import { ViewEncapsulation } from '@angular/compiler';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import  { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import  { Router } from '@angular/router';
// import { error } from 'console';

@Component({
  selector: 'app-smartscale',
  templateUrl: './smartscale.component.html',
  styleUrls: ['./smartscale.component.css']
})


export class SmartscaleComponent implements OnInit {
weightslider: any;
divheight: any;
markerwidth: any;
printscreen: any;
intuser: any;
userdata: any;
testvar: any;
gender: any;
bodyheight: any;
test : any;
sorted_data: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) { 
    Chart.register(...registerables);
    Chart.register(ChartDataLabels);
    
  }
  @ViewChild('maindiv', {static: false}) el!: ElementRef
  

 async ngOnInit(): Promise<void> {
    const headers = {Authorization : "Token " + "0QDNtX8szxHiJ6xDMFGJpZLh03lWQaLD"}
    this.markerwidth = document.querySelector(".slider-dot")?.clientWidth
    this.weightslider= 70-this.markerwidth
    this.divheight = document.getElementById("segmental-card")?.clientHeight
    // var url = "https://nucleus.actofit.com:3000/smartscale/v1/actofit/get_user_data_mail/tester@actofit.com";
    this.http.get<any>('https://nucleus.actofit.com:3000/smartscale/v1/actofit/get_profile?email=test@yopmail.com', {headers: headers}).subscribe(
    data=>{
        this.intuser = data
        console.log(this.intuser)

      }
    )
    this.userdata = await this.getUserData(headers);
    console.log(this.userdata);


    // this.http.get<any>('https://nucleus.actofit.com:3000/smartscale/v1/actofit/get_user_data/5df9cdd21e6e5a43657be0cf', {headers: headers}).subscribe(
    // data=>{
    //     this.userdata = data.data[0]
    //     console.log(this.userdata)
    //   }
    // )
    
    //test variables
      this.testvar = 5
      this.gender = "Male"
      this.bodyheight = 56.88
    


    //visceral fat
    if (this.testvar <= 9){
      document.getElementById("visceral-fat")?.classList.add("standard")
      const element: HTMLElement = document.getElementById('visceral-fat') as HTMLElement
      element.innerHTML = "Standard"
    }
    else if (this.testvar > 10 && this.testvar <= 14){
      document.getElementById("visceral-fat")?.classList.add("not-standard")
      const element: HTMLElement = document.getElementById('visceral-fat') as HTMLElement
      element.innerHTML = "High"
    }
    else if(this.testvar >14){
      document.getElementById("visceral-fat")?.classList.add("not-standard")
      const element: HTMLElement = document.getElementById('visceral-fat') as HTMLElement
      element.innerHTML = "Seriously High"
    }

    //protein
    if(this.gender=="Male"){
      if(this.testvar < 16){
        document.getElementById("protein")?.classList.add("low")
        const element: HTMLElement = document.getElementById('protein') as HTMLElement
        element.innerHTML = "Low"  
      }
      else if(this.testvar >= 16 && this.testvar<=18){
        document.getElementById("protein")?.classList.add("standard")
        const element: HTMLElement = document.getElementById('protein') as HTMLElement
        element.innerHTML = "Standard"  
      }
      else if(this.testvar > 18){
        document.getElementById("protein")?.classList.add("standard")
        const element: HTMLElement = document.getElementById('protein') as HTMLElement
        element.innerHTML = "Adequate"  
      }
    }
    else if(this.gender=="Female"){
      if(this.testvar < 14){
        document.getElementById("protein")?.classList.add("low")
        const element: HTMLElement = document.getElementById('protein') as HTMLElement
        element.innerHTML = "Low"  
      }
      else if(this.testvar >= 14 && this.testvar<=16){
        document.getElementById("protein")?.classList.add("standard")
        const element: HTMLElement = document.getElementById('protein') as HTMLElement
        element.innerHTML = "Standard"  
      }
      else if(this.testvar > 16){
        document.getElementById("protein")?.classList.add("standard")
        const element: HTMLElement = document.getElementById('protein') as HTMLElement
        element.innerHTML = "Adequate"  
      }
    }

    //subcutaneous fat
    if(this.gender=="Male"){
      if(this.testvar < 8.6){
        document.getElementById("subcutaneous-fat")?.classList.add("low")
        const element: HTMLElement = document.getElementById('subcutaneous-fat') as HTMLElement
        element.innerHTML = "Low"  
      }
      else if(this.testvar >= 8.6 && this.testvar<=16.7){
        document.getElementById("subcutaneous-fat")?.classList.add("standard")
        const element: HTMLElement = document.getElementById('subcutaneous-fat') as HTMLElement
        element.innerHTML = "Standard"  
      }
      else if(this.testvar > 16.7){
        document.getElementById("subcutaneous-fat")?.classList.add("not-standard")
        const element: HTMLElement = document.getElementById('subcutaneous-fat') as HTMLElement
        element.innerHTML = "High"  
      }
    }
    else if(this.gender=="Female"){
      if(this.testvar < 18.5){
        document.getElementById("subcutaneous-fat")?.classList.add("low")
        const element: HTMLElement = document.getElementById('subcutaneous-fat') as HTMLElement
        element.innerHTML = "Low"  
      }
      else if(this.testvar >= 18.5 && this.testvar<=26.7){
        document.getElementById("subcutaneous-fat")?.classList.add("standard")
        const element: HTMLElement = document.getElementById('subcutaneous-fat') as HTMLElement
        element.innerHTML = "Standard"  
      }
      else if(this.testvar > 26.7){
        document.getElementById("subcutaneous-fat")?.classList.add("not-standard")
        const element: HTMLElement = document.getElementById('subcutaneous-fat') as HTMLElement
        element.innerHTML = "High"  
      }
    }

    //bone-mass
    if(this.gender=="Male"){
      if(this.bodyheight<60){
        if(this.userdata.bone_mass < 2.3){
          document.getElementById("bone-mass")?.classList.add("low")
          const element: HTMLElement = document.getElementById('bone-mass') as HTMLElement
          element.innerHTML = "Low" 
        }
        else if(this.userdata.bone_mass >= 2.3 && this.userdata.bone_mass <= 2.7){
          document.getElementById("bone-mass")?.classList.add("standard")
          const element: HTMLElement = document.getElementById('bone-mass') as HTMLElement
          element.innerHTML = "Standard"  
        }
        else if(this.userdata.bone_mass > 2.7){
          document.getElementById("bone-mass")?.classList.add("not-standard")
          const element: HTMLElement = document.getElementById('bone-mass') as HTMLElement
          element.innerHTML = "High"  
        }
      }
      else if(this.bodyheight>60 && this.bodyheight<75){
        if(this.userdata.bone_mass < 2.7){
          document.getElementById("bone-mass")?.classList.add("low")
          const element: HTMLElement = document.getElementById('bone-mass') as HTMLElement
          element.innerHTML = "Low"  
        }
        else if(this.userdata.bone_mass >= 2.7 && this.userdata.bone_mass <= 3.1){
          document.getElementById("bone-mass")?.classList.add("standard")
          const element: HTMLElement = document.getElementById('bone-mass') as HTMLElement
          element.innerHTML = "Standard"  
        }
        else if(this.userdata.bone_mass > 3.1){
          document.getElementById("bone-mass")?.classList.add("not-standard")
          const element: HTMLElement = document.getElementById('bone-mass') as HTMLElement
          element.innerHTML = "High"  
        }
      }
      else if(this.bodyheight > 75){
        if(this.userdata.bone_mass < 3.0){
          document.getElementById("bone-mass")?.classList.add("low")
          const element: HTMLElement = document.getElementById('bone-mass') as HTMLElement
          element.innerHTML = "Low"  
        }
        else if(this.userdata.bone_mass >= 3.0 && this.userdata.bone_mass <= 3.4){
          document.getElementById("bone-mass")?.classList.add("standard")
          const element: HTMLElement = document.getElementById('bone-mass') as HTMLElement
          element.innerHTML = "Standard"  
        }
        else if(this.userdata.bone_mass > 3.4){
          document.getElementById("bone-mass")?.classList.add("not-standard")
          const element: HTMLElement = document.getElementById('bone-mass') as HTMLElement
          element.innerHTML = "High"  
        }
      }
    }
    else if(this.gender =="Female"){
      if(this.bodyheight<45){
        if(this.userdata.bone_mass < 1.6){
          document.getElementById("bone-mass")?.classList.add("low")
          const element: HTMLElement = document.getElementById('bone-mass') as HTMLElement
          element.innerHTML = "Low"  
        }
        else if(this.userdata.bone_mass >= 1.6 && this.userdata.bone_mass <= 2.0){
          document.getElementById("bone-mass")?.classList.add("standard")
          const element: HTMLElement = document.getElementById('bone-mass') as HTMLElement
          element.innerHTML = "Standard"  
        }
        else if(this.userdata.bone_mass > 2.0){
          document.getElementById("bone-mass")?.classList.add("not-standard")
          const element: HTMLElement = document.getElementById('bone-mass') as HTMLElement
          element.innerHTML = "High"  
        }
      }
      else if(this.bodyheight>45 && this.bodyheight<60){
        if(this.userdata.bone_mass < 2.0){
          document.getElementById("bone-mass")?.classList.add("low")
          const element: HTMLElement = document.getElementById('bone-mass') as HTMLElement
          element.innerHTML = "Low"  
        }
        else if(this.userdata.bone_mass >= 2.0 && this.userdata.bone_mass <= 2.4){
          document.getElementById("bone-mass")?.classList.add("standard")
          const element: HTMLElement = document.getElementById('bone-mass') as HTMLElement
          element.innerHTML = "Standard"  
        }
        else if(this.userdata.bone_mass > 2.4){
          document.getElementById("bone-mass")?.classList.add("not-standard")
          const element: HTMLElement = document.getElementById('bone-mass') as HTMLElement
          element.innerHTML = "High"  
        }
      }
      else if(this.bodyheight > 60){
        if(this.userdata.bone_mass < 2.3){
          document.getElementById("bone-mass")?.classList.add("low")
          const element: HTMLElement = document.getElementById('bone-mass') as HTMLElement
          element.innerHTML = "Low"  
        }
        else if(this.userdata.bone_mass >= 2.3 && this.userdata.bone_mass <= 27){
          document.getElementById("bone-mass")?.classList.add("standard")
          const element: HTMLElement = document.getElementById('bone-mass') as HTMLElement
          element.innerHTML = "Standard"  
        }
        else if(this.userdata.bone_mass > 2.7){
          document.getElementById("bone-mass")?.classList.add("not-standard")
          const element: HTMLElement = document.getElementById('bone-mass') as HTMLElement
          element.innerHTML = "High"  
        }
      }
    }

    //metabolic age 



    //
    const data = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      // { year: 2015, count: 30 },
      // { year: 2016, count: 28 },
    ];
    const testdata = [
      { year: 2010, count: '' },
      { year: 2011, count: '' },
      { year: 2012, count: '' },
      { year: 2013, count: '' },
      { year: 2014, count: '' },
      // { year: 2015, count: 30 },
      // { year: 2016, count: 28 },
    ];
    const data2 = [
      { year: 2010, count: this.weightslider },
      { year: 2011, count: 100-this.weightslider },
    ];

    var weightChart=new Chart(
      "weightChart",
      {
        type: 'line',
        plugins: [ChartDataLabels],
        options:{
          borderColor: '#3B8177',          
          plugins:{
            datalabels:{
              align: 'start',
              clip: false
            },
            legend:{
              display: false
            }
          },
          scales:{
            y:{
              display: false
            },
            x:{
              display: false
            }
          },
          layout:{
            padding:{
              bottom: 30,
              right: 20,
              left: 20,
              top: 30
            }
          },
          aspectRatio: 4
        },
        data: {
          labels: data.map(row => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: data.map(row => row.count),
              pointBackgroundColor: '#3B8177',
            }
          ]
        }
      }
    );
    var smmChart=new Chart(
      "smmChart",
      {
        type: 'line',
        plugins: [ChartDataLabels],
        options:{
          borderColor: '#3B8177',
          plugins:{
            datalabels:{
              align: 'start',
              clip: false
            },
            legend:{
              display: false
            }
          },
          scales:{
            y:{
              display: false
            },
            x:{
              display: false
            }
          },
          layout:{
            padding:{
              bottom: 30,
              right: 20,
              left: 20,
              top: 30
            }
          },
          aspectRatio: 4
        },
        data: {
          labels: data.map(row => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: data.map(row => row.count),
              pointBackgroundColor: '#3B8177',
            }
          ]
        }
      }
    );
    var testChart=new Chart(
      "testChart",
      {
        type: 'line',
        plugins: [ChartDataLabels],
        options:{
          borderColor: '#3B8177',
          plugins:{
            datalabels:{
              align: 'start',
              clip: false
            },
            legend:{
              display: false
            }
          },
          scales:{
            y:{
              display: false,
              grid:{
                display: false
              },
            },
            x:{
              grid:{
                display: false
              },
            }
            
          },
          layout:{
            padding:{
              bottom: 30,
              right: 20,
              left: 20,
            }
          },
          aspectRatio: 6
        },
        data: {
          labels: testdata.map(row => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: testdata.map(row => row.count),
              pointBackgroundColor: '#3B8177',
              hidden: true
            }
          ]
        }
      }
    );
    var bfChart=new Chart(
      "bfChart",
      {
        type: 'line',
        plugins: [ChartDataLabels],
        options:{
          borderColor: '#3B8177',
          plugins:{
            datalabels:{
              align: 'start',
              clip: false
            },
            legend:{
              display: false
            }
          },
          scales:{
            y:{
              display: false
            },
            x:{
              display: false
            }
          },
          layout:{
            padding:{
              bottom: 30,
              right: 20,
              left: 20,
              top: 30
            }
          },
          aspectRatio: 4
        },
        data: {
          labels: data.map(row => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: data.map(row => row.count),
              pointBackgroundColor: '#3B8177',
            }
          ]
        }
      }
    );
    var actoscore=new Chart(
      "actoscore",
      {
        type: 'doughnut',
        plugins: [ChartDataLabels],
        options:{
          plugins:{
            datalabels:{
              align: 'start',
              clip: false,
              color: "white",
              font:{
                size: 23,
                weight: "bold"
              } 
            },
            legend:{
              display: false
            },
            tooltip:{
              enabled: false
            }
          },
          scales:{
            y:{
              display: false
            },
            x:{
              grid:{
                display: false
              },
              display: false
            }
          },
          layout:{
            padding:{
              // bottom: 20,
              right: 20
            }
          },
        },
        data: {
          labels: data2.map(row => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: data2.map(row => row.count)
            }
          ]
        }
      }
    );
    
  }
  // chart: Configuration = {
  //   // Specify the type of chart and the rest of the config will be typed
  //   type: "Bar",
  //   // Required
  //   data: {
  //     labels: [
  //       'Jan',
  //       'Feb',
  //       'Mar',
  //       'Apr',
  //       'May',
  //       'Jun',
  //       'Jul',
  //       'Aug',
  //       'Sep',
  //       'Oct',
  //       'Nov',
  //       'Dec'
  //     ],
  //     series: [
  //       [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
  //       [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
  //     ]
  //   },
  //   // Optional
  //   options: {
  //           height: '350px',
  //           seriesBarDistance: 21,
  //           axisX: {
  //             showGrid: false, offset: 100
  //           },
  
  //           axisY: {
  //             scaleMinSpace: 30,
  //           }
  //         },
  //   }
onPrint(){
    this.printscreen = document.getElementsByTagName("body");
}
getUserData(headers: any): Promise<any> {
  return new Promise((resolve, reject) => {
    this.http.get<any>('https://nucleus.actofit.com:3000/smartscale/v1/actofit/get_user_data/5df9cdd21e6e5a43657be0cf', {headers: headers}).subscribe(
      data => {
        // console.log(data.length())
        data.data.sort((a:any,b:any)=> a.createdAt - b.createdAt).reverse()
        resolve(data.data[0]);
      },
      error => {
        reject(error);
      }
    );
  });
}
}

