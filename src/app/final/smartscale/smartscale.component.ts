import { ViewEncapsulation } from '@angular/compiler';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import  { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import  { Router } from '@angular/router';
// import { error } from 'console';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { DeviceDetectorService } from 'ngx-device-detector';

declare module 'jspdf' {
  interface jsPDF {
    addHTML: (element: any, x?: number, y?: number, options?: any) => any;
  }
}
interface Dictionary {
  [key: string]: any;
}

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
interdata: any;
userProfile: any;
  userData: any;
headers = {Authorization : "Token " + "0QDNtX8szxHiJ6xDMFGJpZLh03lWQaLD"}
userDataUrl:any;
email:any;
age: any;
sw: any;
smm:any;
bfp: any;
weight: any;
smmslider: any;
bfmslider:any;
bmislider:any;
pdfslider:any;
fulluserdata:any;
smr: any;
formattedDateNow :any;
dataExists: boolean = false;
isMobile: boolean = false;
lendata : any;
dict: any;
fatdata: any;
isPresentInAny: any;
  constructor(private http: HttpClient, private par: ActivatedRoute, private deviceDetectorService: DeviceDetectorService) { 
    Chart.register(...registerables);
    Chart.register(ChartDataLabels);
    
  }
  url: any;
  getUserProfile(): Promise<any> {
    return new Promise<void>((resolve, reject) => {
      this.http.get<any>(this.url, { headers: this.headers }).subscribe(
        (data: any) => {
          this.userProfile = data;
          this.userDataUrl = `https://nucleus.actofit.com:3000/smartscale/v1/actofit/get_user_data/${this.userProfile.data._id}`;
          this.dataExists = true;
          this.http.get<any>(this.userDataUrl, { headers: this.headers }).subscribe(
            (data2: any) => {
              data2.data.sort((a:any,b:any)=> a.timestamp - b.timestamp)
              this.userData = data2.data[0];
              this.fulluserdata = data2.data
              this.lendata = data2.data.length
              resolve(this.userData);
            },
            error => {
              reject(error)
            }
          );

        },
        error => {
          reject(error);
          if (this.dataExists == false){
            const preloader = <HTMLElement>document.querySelector(".preloader")
            preloader.style.zIndex = "-1"

           }
        }
      );
      
    });
  }
  @ViewChild('elementToCapture') elementToCapture!: ElementRef<HTMLDivElement>;

  getAge(dateOfBirth: string): number {
    const today = new Date();
    const [d, m, y] = dateOfBirth.split('/');
    const dateObj = new Date(`${y}-${m}-${d}`);
    const birthDate = new Date(dateObj);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
   
  // getUserData(): Promise<void> {
  //   return new Promise<void>((resolve, reject) => {
  //     this.userDataUrl = "https://nucleus.actofit.com:3000/smartscale/v1/actofit/get_user_data/5df9cdd21e6e5a43657be0cf"
  //     this.http.get<any>(this.userDataUrl, { headers: this.headers }).subscribe(
  //       (data:any)=> {
  //         this.userData = data.data[0];  
  //         console.log(this.userData);
  //         resolve(this.userData);
  //       },
  //       error =>{
  //         reject(error)
  //         console.log("userdata", error) // Handle the error by rejecting the Promise

  //       }
  //     )
  //   });
  // }

 

 async ngOnInit(): Promise<void> {
    // this.weightslider= 70-
    this.divheight = document.getElementById("segmental-card")?.clientHeight
    await this.par.queryParams.subscribe(async params => {
      this.email = params['email']
      // this.email = "test@yopmail.com"
      console.log(this.email);
       this.url = `https://nucleus.actofit.com:3000/smartscale/v1/actofit/get_profile?email=${this.email}`
       await this.getUserProfile();
      });

    this.isMobile = this.deviceDetectorService.isMobile();
    if(this.isMobile){
      document.getElementById("ind-score")?.classList.add("mobile-ind")
      document.getElementById("ind-sub")?.classList.add("mobile-text")
      document.getElementById("score")?.classList.add("mobile-less-margin")
    }


    // if (window.innerWidth < 768) {
    //   this.isMobile= true;
    // }
    //current date and time 
    const now = new Date();
    const options2: Intl.DateTimeFormatOptions =  { day: '2-digit', month: '2-digit', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true };    
    this.formattedDateNow = now.toLocaleString('en-US', options2);

    this.userdata = await this.getUserProfile()
    console.log(this.lendata)
    // console.log(this.fulluserdata)
    

    if(this.lendata<3){
      document.getElementById("graph-overlay")?.classList.add("show")
    }
    // const newdate = new Date(this.userProfile.data.date_of_birth)
    this.age = this.getAge(this.userProfile.data.date_of_birth)
    // this.userdata = {
    //   "bmr": 21
    // }
    //test variables
      this.testvar = 5
      this.gender = this.userProfile.data.gender
      this.bodyheight = 170
      this.weight = this.userData.weight

    //body weight scale
    if(this.gender == "male"){
      this.sw = (this.bodyheight-80)*0.7
    }
    else if(this.gender == "female"){
      this.sw = ((this.bodyheight*1.37)-110)*0.45
    }

    //skeletal muscle mass scale
    if(this.gender == "male"){
      this.smm = 49
    }
    else if(this.gender == "female"){
      this.smm = 40
    }

    //body fat% scale
    if(this.gender == "male"){
      this.bfp = 11
    }
    else if(this.gender == "female"){
      this.bfp = 21
    }

    //slider position
      //weight
      if(this.weight<this.smm){
        this.weightslider = this.calculatePointerPosition(15, 0.80*this.sw,this.weight,5)
      }
      else if(this.weight<0.89*this.sw && this.weight>0.80*this.sw){
        this.weightslider = this.calculatePointerPosition(0.80*this.sw, 0.89*this.sw,this.weight,5) + 20
      }
      else if(this.weight<1.09*this.sw && this.weight>0.89*this.sw){
        this.weightslider = this.calculatePointerPosition(0.89*this.sw, 1.09*this.sw,this.weight,5) + 40
      }
      else if(this.weight<1.20*this.sw && this.weight>1.09*this.sw){
        this.weightslider = this.calculatePointerPosition(1.09*this.sw, 1.20*this.sw,this.weight,5) + 60
      }
      else if(this.weight>1.20*this.sw){
        this.weightslider = this.calculatePointerPosition(1.20*this.sw, 250,this.weight,5) + 80
      }

      //smm
      if(this.userdata.skeletal_muscle<this.smm){
        this.smmslider = this.calculatePointerPosition(0, this.smm,this.userdata.skeletal_muscle,3)
      }
      else if(this.userdata.skeletal_muscle<(this.smm+10) && this.userdata.skeletal_muscle>this.smm){
        this.smmslider = this.calculatePointerPosition(this.smm, this.smm+10,this.userdata.skeletal_muscle,3) + 33
      }
      else if(this.userdata.skeletal_muscle>(this.smm+10)){
        this.smmslider = this.calculatePointerPosition(this.smm+10, 100,this.userdata.skeletal_muscle,3) + 66
      }

      //bfm
      if(this.userdata.body_fat<this.bfp*this.weight/100){
        this.bfmslider = this.calculatePointerPosition(0, this.bfp*this.weight/100,this.userdata.body_fat,4)
      }
      else if(this.userdata.body_fat<(this.bfp*this.weight/100 +10) && this.userdata.body_fat>this.bfp*this.weight/100){
        this.bfmslider = this.calculatePointerPosition(this.bfp*this.weight/100, this.bfp*this.weight/100+10,this.userdata.body_fat,4) + 25
      }
      else if(this.userdata.body_fat<(this.bfp*this.weight/100+15) && this.userdata.body_fat>this.bfp*this.weight/100+10){
        this.bfmslider = this.calculatePointerPosition(this.bfp*this.weight/100+10, this.bfp*this.weight/100+15,this.userdata.body_fat,4) + 50
      }
      else if(this.userdata.body_fat>(this.bfp*this.weight/100+15)){
        this.bfmslider = this.calculatePointerPosition(this.bfp*this.weight/100+15, this.weight,this.userdata.body_fat,4) + 75
      }
      //bfp
      if(this.userdata.body_fat*this.weight/100<this.bfp){
        this.pdfslider = this.calculatePointerPosition(0, this.bfp,this.userdata.body_fat*this.weight/100,4)
      }
      else if(this.userdata.body_fat*this.weight/100<(this.bfp +10) && this.userdata.body_fat*this.weight/100>this.bfp){
        this.pdfslider = this.calculatePointerPosition(this.bfp, this.bfp+10,this.userdata.body_fat*this.weight/100,4) + 25
      }
      else if(this.userdata.body_fat*this.weight/100<(this.bfp+15) && this.userdata.body_fat*this.weight/100>this.bfp+10){
        this.pdfslider = this.calculatePointerPosition(this.bfp+10, this.bfp+15,this.userdata.body_fat*this.weight/100,4) + 50
      }
      else if(this.userdata.body_fat*this.weight/100>(this.bfp+15)){
        this.pdfslider = this.calculatePointerPosition(this.bfp+15, this.weight,this.userdata.body_fat*this.weight/100,4) + 75
      }

      //bmi
      if(this.userdata.bmi<18.5){
        this.bmislider = this.calculatePointerPosition(5, 18.5,this.userdata.bmi,3)
      }
      else if(this.userdata.bmi<25.0 && this.userdata.bmi>18.5){
        this.bmislider = this.calculatePointerPosition(25.0, 18.5,this.userdata.bmi,3) + 33
      }
      else if(this.userdata.bmi>25.0){
        this.bmislider = this.calculatePointerPosition(25.0, 60,this.userdata.bmi,3) + 66
      }

    //visceral fat
    if (this.userdata.visceral_fat <= 9){
      document.getElementById("visceral-fat")?.classList.add("standard")
      const element: HTMLElement = document.getElementById('visceral-fat') as HTMLElement
      element.innerHTML = "Standard"
    }
    else if (this.userdata.visceral_fat > 10 && this.userdata.visceral_fat <= 14){
      document.getElementById("visceral-fat")?.classList.add("not-standard")
      const element: HTMLElement = document.getElementById('visceral-fat') as HTMLElement
      element.innerHTML = "High"
    }
    else if(this.userdata.visceral_fat >14){
      document.getElementById("visceral-fat")?.classList.add("not-standard")
      const element: HTMLElement = document.getElementById('visceral-fat') as HTMLElement
      element.innerHTML = "Seriously High"
    }

    //protein
    if(this.gender=="male"){
      if(this.userdata.protein < 16){
        document.getElementById("protein")?.classList.add("low")
        const element: HTMLElement = document.getElementById('protein') as HTMLElement
        element.innerHTML = "Low"  
      }
      else if(this.userdata.protein >= 16 && this.userdata.protein<=18){
        document.getElementById("protein")?.classList.add("standard")
        const element: HTMLElement = document.getElementById('protein') as HTMLElement
        element.innerHTML = "Standard"  
      }
      else if(this.userdata.protein > 18){
        document.getElementById("protein")?.classList.add("standard")
        const element: HTMLElement = document.getElementById('protein') as HTMLElement
        element.innerHTML = "Adequate"  
      }
    }
    else if(this.gender=="female"){
      if(this.userdata.protein < 14){
        document.getElementById("protein")?.classList.add("low")
        const element: HTMLElement = document.getElementById('protein') as HTMLElement
        element.innerHTML = "Low"  
      }
      else if(this.userdata.protein >= 14 && this.userdata.protein<=16){
        document.getElementById("protein")?.classList.add("standard")
        const element: HTMLElement = document.getElementById('protein') as HTMLElement
        element.innerHTML = "Standard"  
      }
      else if(this.userdata.protein > 16){
        document.getElementById("protein")?.classList.add("standard")
        const element: HTMLElement = document.getElementById('protein') as HTMLElement
        element.innerHTML = "Adequate"  
      }
    }

    //subcutaneous fat
    if(this.gender=="male"){
      if(this.userdata.subcutaneous_fat < 8.6){
        document.getElementById("subcutaneous-fat")?.classList.add("low")
        const element: HTMLElement = document.getElementById('subcutaneous-fat') as HTMLElement
        element.innerHTML = "Low"  
      }
      else if(this.userdata.subcutaneous_fat >= 8.6 && this.userdata.subcutaneous_fat<=16.7){
        document.getElementById("subcutaneous-fat")?.classList.add("standard")
        const element: HTMLElement = document.getElementById('subcutaneous-fat') as HTMLElement
        element.innerHTML = "Standard"  
      }
      else if(this.userdata.subcutaneous_fat > 16.7){
        document.getElementById("subcutaneous-fat")?.classList.add("not-standard")
        const element: HTMLElement = document.getElementById('subcutaneous-fat') as HTMLElement
        element.innerHTML = "High"  
      }
    }
    else if(this.gender=="female"){
      if(this.userdata.subcutaneous_fat < 18.5){
        document.getElementById("subcutaneous-fat")?.classList.add("low")
        const element: HTMLElement = document.getElementById('subcutaneous-fat') as HTMLElement
        element.innerHTML = "Low"  
      }
      else if(this.userdata.subcutaneous_fat >= 18.5 && this.userdata.subcutaneous_fat<=26.7){
        document.getElementById("subcutaneous-fat")?.classList.add("standard")
        const element: HTMLElement = document.getElementById('subcutaneous-fat') as HTMLElement
        element.innerHTML = "Standard"  
      }
      else if(this.userdata.subcutaneous_fat > 26.7){
        document.getElementById("subcutaneous-fat")?.classList.add("not-standard")
        const element: HTMLElement = document.getElementById('subcutaneous-fat') as HTMLElement
        element.innerHTML = "High"  
      }
    }

    //bone-mass
    if(this.gender=="male"){
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
    else if(this.gender =="female"){
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
    if(this.userdata.metabolic_age <= this.age){
      document.getElementById("metabolic-age")?.classList.add("standard")
      const element: HTMLElement = document.getElementById('metabolic-age') as HTMLElement
      element.innerHTML = "Standard"  
    }
    else{
      document.getElementById("metabolic-age")?.classList.add("not-standard")
      const element: HTMLElement = document.getElementById('metabolic-age') as HTMLElement
      element.innerHTML = "Not Standard" 
    }

    //metabolic rate
    if(this.gender == "male"){
      if(this.age>=18 && this.age<=29){
        this.smr = this.weight*24
      }
      else if(this.age>=30 && this.age<=49){
        this.smr = this.weight*22.3
      }
      else if(this.age>=50 && this.age<=69){
        this.smr = this.weight*21.5
      }
      else if(this.age>=70){
        this.smr = this.weight*21.5
      }
      console.log(this.smr)
    }
    else if(this.gender == "female"){
      if(this.age>=18 && this.age<=29){
        this.smr = this.weight*23.6
      }
      else if(this.age>=30 && this.age<=49){
        this.smr = this.weight*21.7
      }
      else if(this.age>=50 && this.age<=69){
        this.smr = this.weight*20.7
      }
      else if(this.age>=70){
        this.smr = this.weight*20.7
      }
    }

    if(this.userdata.bmr >= this.smr){
      console.log("standard")

      document.getElementById("bmr")?.classList.add("standard")
      const element: HTMLElement = document.getElementById('bmr') as HTMLElement
      element.innerHTML = "Standard" 
    }
    else if(this.userdata.bmr < this.smr){
      console.log("not standard")
      document.getElementById("bmr")?.classList.add("not-standard")
      const element: HTMLElement = document.getElementById('bmr') as HTMLElement
      element.innerHTML = "Not Standard" 

    }

    //fat analysis
    let keyToCheck = 'right_arm_fat';
    this.isPresentInAny = this.checkKeyPresent(this.fulluserdata, keyToCheck);
    console.log(this.isPresentInAny)
    if (!this.isPresentInAny){
      document.getElementById("fat-overlay")?.classList.add("show")
    }

    let keyIndex = this.findDictWithKey(this.fulluserdata, keyToCheck)
    if(keyIndex != undefined){
      this.fatdata = this.fulluserdata[keyIndex]
    }

    //
    // const data = [
    //   { year: 2010, count: 10 },
    //   { year: 2011, count: 20 },
    //   { year: 2012, count: 15 },
    //   { year: 2013, count: 25 },
    //   { year: 2014, count: 22 },
    //   // { year: 2015, count: 30 },
    //   // { year: 2016, count: 28 },
    // ];
    const weightdata = [
      { year: this.formatDate(this.fulluserdata[4].timestamp), count: this.fulluserdata[4].weight },
      { year: this.formatDate(this.fulluserdata[3].timestamp), count: this.fulluserdata[3].weight },
      { year: this.formatDate(this.fulluserdata[2].timestamp), count: this.fulluserdata[2].weight },
      { year: this.formatDate(this.fulluserdata[1].timestamp), count: this.fulluserdata[1].weight },
      { year: this.formatDate(this.fulluserdata[0].timestamp), count: this.fulluserdata[0].weight },
    ];
    const smmdata = [
      { year: this.formatDate(this.fulluserdata[4].timestamp), count: this.fulluserdata[4].skeletal_muscle },
      { year: this.formatDate(this.fulluserdata[3].timestamp), count: this.fulluserdata[3].skeletal_muscle },
      { year: this.formatDate(this.fulluserdata[2].timestamp), count: this.fulluserdata[2].skeletal_muscle },
      { year: this.formatDate(this.fulluserdata[1].timestamp), count: this.fulluserdata[1].skeletal_muscle },
      { year: this.formatDate(this.fulluserdata[0].timestamp), count: this.fulluserdata[0].skeletal_muscle },
    ];
    const bfmdata = [
      { year: this.formatDate(this.fulluserdata[4].timestamp), count: this.fulluserdata[4].body_fat },
      { year: this.formatDate(this.fulluserdata[3].timestamp), count: this.fulluserdata[3].body_fat },
      { year: this.formatDate(this.fulluserdata[2].timestamp), count: this.fulluserdata[2].body_fat },
      { year: this.formatDate(this.fulluserdata[1].timestamp), count: this.fulluserdata[1].body_fat },
      { year: this.formatDate(this.fulluserdata[0].timestamp), count: this.fulluserdata[0].body_fat },
    ];

    const testdata = [
      { year: this.formatDate(this.fulluserdata[4].timestamp), count: '' },
      { year: this.formatDate(this.fulluserdata[3].timestamp), count: '' },
      { year: this.formatDate(this.fulluserdata[2].timestamp), count: '' },
      { year: this.formatDate(this.fulluserdata[1].timestamp), count: '' },
      { year: this.formatDate(this.fulluserdata[0].timestamp), count: '' },
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
              clip: false,
              formatter: function(value, context) {
                return Math.round(value * 100) / 100;
              }
            },
            legend:{
              display: false
            },
            
          },
        
          scales:{
            y:{
              display: false,
              
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
          aspectRatio: 4,
          
        },
        data: {
          labels: weightdata.map(row => row.year),
          datasets: [
            {
              label: 'Weight',
              data: weightdata.map(row => row.count),
              pointBackgroundColor: '#3B8177',
              
            },
            
          ],
        
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
              clip: false,
              formatter: function(value, context) {
                return Math.round(value * 100) / 100;
              }
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
          labels: smmdata.map(row => row.year),
          datasets: [
            {
              label: 'Skeletal Muscle Mass',
              data: smmdata.map(row => row.count),
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
              clip: false,
              formatter: function(value, context) {
                return Math.round(value * 100) / 100;
              }
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
              clip: false,
              formatter: function(value, context) {
                return Math.round(value * 100) / 100;
              }
            },
            legend:{
              display: false
            },
            
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
          labels: bfmdata.map(row => row.year),
          datasets: [
            {
              label: 'Body Fat Mass',
              data: bfmdata.map(row => row.count),
              pointBackgroundColor: '#3B8177',
            }
          ]
        }
      }
    );
  //   var actoscore=new Chart(
  //     "actoscore",
  //     {
  //       type: 'doughnut',
  //       plugins: [ChartDataLabels],
  //       options:{
  //         plugins:{
  //           datalabels:{
  //             align: 'start',
  //             clip: false,
  //             color: "white",
  //             font:{
  //               size: 23,
  //               weight: "bold"
  //             } 
  //           },
  //           legend:{
  //             display: false
  //           },
  //           tooltip:{
  //             enabled: false
  //           }
  //         },
  //         scales:{
  //           y:{
  //             display: false
  //           },
  //           x:{
  //             grid:{
  //               display: false
  //             },
  //             display: false
  //           }
  //         },
  //         layout:{
  //           padding:{
  //             // bottom: 20,
  //             right: 20
  //           }
  //         },
  //       },
  //       data: {
  //         labels: data2.map(row => row.year),
  //         datasets: [
  //           {
  //             label: 'Acquisitions by year',
  //             data: data2.map(row => row.count)
  //           }
  //         ]
  //       }
  //     }
  //   );
    
  }
  // async generatePDF4() {
  //   const browser = await puppeteer.launch();
  //   const page = await browser.newPage();
  //   await page.goto('http://localhost:4200', { waitUntil: 'networkidle0' });
  //   const pdf = await page.pdf({ format: 'A4' });
  //   await browser.close();
  //   const blob = new Blob([pdf], { type: 'application/pdf' });
  //   const url = URL.createObjectURL(blob);
  //   window.open(url);
  // }
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
calculatePointerPosition(minValue:any, maxValue:any, value:any, n:any){
  const tickInterval = (maxValue - minValue);
  const tickIndex = (value - minValue) / tickInterval;
  this.markerwidth = document.querySelector(".slider-dot")?.clientWidth
  const pointerPosition = tickIndex*100/n;
  return pointerPosition
}
formatDate(isoDate: any){
const date = new Date(isoDate);
const month = date.toLocaleString('default', { month: 'short' });
const dayOfMonth = date.getDate();
// Combine the month and day of the month into a string
const result = month + ' ' + dayOfMonth;
return result
}
// getUserID(url:any, headers:any): Promise<any>{
//   return new Promise((resolve, reject) => {
//       this.http.get<any>(url, {headers: headers}).subscribe(
//         data=>{
//             this.intuser = data
//             resolve(data.parent_id)
//           },
//         error =>{
//           reject(error)
//         }
//         )
//   })
// }
// getUserData(userid:any, headers: any): Promise<any> {
//   // var userid = await this.getUserID(headers)
//   return new Promise((resolve, reject) => {
//     var url2 = 'https://nucleus.actofit.com:3000/smartscale/v1/actofit/get_user_data/'+userid
//     this.http.get<any>(url2, {headers: headers}).subscribe(
//       data => {
//         // console.log(data.length())
//         data.data.sort((a:any,b:any)=> a.createdAt - b.createdAt).reverse()
//         resolve(data.data[0]);
//       },
//       error => {
//         reject(error);
//       }
//     );
//   });
// }
generatePDF() {
  window.scrollTo(0, 0);
  // document.querySelector('meta[name=viewport]').setAttribute("content", "width=1200");
  // const element = document.querySelector('#elementToCapture') as HTMLElement;
  const element = document.body
  html2canvas(element, {scale: 1}).then(canvas => {
    // create a new PDF document
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    // calculate the width and height of the image on the PDF
    const imgWidth = pdf.internal.pageSize.getWidth() ;
    const imgHeight = canvas.height * imgWidth / canvas.width;
    // add the image to the PDF
    pdf.addImage(canvas.toDataURL(), 'PNG', 2, 5, imgWidth, imgHeight);
    // save the PDF
    const fileName = `Report_${this.userProfile.data.name}.pdf`; 
    pdf.save(fileName);
  
  });
}
checkKeyPresent(arrayOfDicts: Dictionary[], keyToCheck: string): boolean {
  return arrayOfDicts.some(dict => dict.hasOwnProperty(keyToCheck));
}
findDictWithKey(arrayOfDicts: Dictionary[], keyToFind: string): number | undefined {
  return arrayOfDicts.findIndex(dict => dict.hasOwnProperty(keyToFind));
}
// generatePDF3() {
//   var pdf = new jsPDF('p', 'pt', 'letter');
//   pdf.addHTML(document.getElementById("elementToCapture"), 0 , 0, function () {
//      pdf.save('Test.pdf');
//  });
// }
// generatePDF2(){
//   var doc = new jsPDF('portrait', 'pt', 'a4');

// doc.html(document.body, {
//    callback: function (doc) {
//      doc.save("test.pdf");
//    },
//    x: 5,
//    y: 5,
//    width: doc.internal.pageSize.getWidth() ,
// });
// }

generatePDF2() {
  html2canvas(document.body, {useCORS: true}).then(canvas => {
    // Convert canvas to image data
    const imageData = canvas.toDataURL();

    // Create a link element
    const link = document.createElement('a');
    link.download = 'screenshot.png';
    link.href = imageData;

    // Click the link element to trigger the download
    link.click();
  });
}
// dataURItoBlob(dataURI: any) {
//   const byteString = atob(dataURI.split(',')[1]);
//   const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
//   const ab = new ArrayBuffer(byteString.length);
//   const ia = new Uint8Array(ab);
//   for (let i = 0; i < byteString.length; i++) {
//     ia[i] = byteString.charCodeAt(i);
//   }
//   return new Blob([ab], { type: mimeString });
// }
}

