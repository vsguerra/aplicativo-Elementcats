import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { ApiService } from '../services/api.service';




@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage  {

  
 
  constructor(private apiService: ApiService){
     // this.createData(); 
     //this.readData(); 
      this.updateData(); 
     //this.deleteData();

  }
  createData(){
     const data: any = {
       title: 'Tamires', 
       body: 'teste', 
       userId: 10

     }; 


    this.apiService.createData(data).subscribe(data => {
      console.log(data);
    });
  }


  readData() {
    this.apiService.readData().subscribe(data => {
      console.log(data); 
    });
  }

  updateData(){
     const data: any = {
      
        id: 1,
        title: 'aplicativo',
        body: 'mobile',
        userId: 1
      };

    this.apiService.updateData(data).subscribe(data => {
      console.log(data); 
    });
  }


}