import { LoginComponent } from './../login/login.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';  
import { OrderPipe } from 'ngx-order-pipe';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sort } from '@angular/material/sort';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, tap, reduce } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

import { IotApiService } from 'src/app/service/iot-api.service';

@Component({
  selector: 'app-monitoracao',
  templateUrl: './monitoracao.component.html',
  styleUrls: ['./monitoracao.component.css']
})
export class MonitoracaoComponent implements OnInit {
 
  public value:string = "" 

  public getAllTemp : any
  
  public setAllTemp :any
  
public condicao = false 


 public loading = true;
 
  constructor(private iotService: IotApiService) { }

  ngOnInit(): void { 

    setInterval((e: Event) => {
    this.iotService.apiAll().subscribe(
    res=> {
   
     
      this.loading=false
     this.setAllTemp = res; 
     this.getAllTemp = this.setAllTemp
    
    }
     

    );
  }, 6000)   

 }

 

  search(e: Event) {
   
  const target = e.target as HTMLInputElement; 
  const value = target.value; 
  const filter = this.setAllTemp.filter( (res :any) => {  

  return !res.nome.indexOf(value.toUpperCase())
   }); 
   this.getAllTemp = filter
 
 }

  public getSearch(value: string) {
    const filter = this.setAllTemp.filter( (res:any) =>{ 

      return !res.nome.indexOf(value.toUpperCase())});       
       this.getAllTemp = filter     
    
      
  }
  

  
}
