
import { LoginComponent } from './../login/login.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sort } from '@angular/material/sort';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, tap, reduce } from 'rxjs';
import { Observable, interval, take } from 'rxjs';
import { ProductService } from 'src/app/components/product.service';
import { IotApiService } from 'src/app/service/iot-api.service';


@Component({
  selector: 'app-monitoracao',
  templateUrl: './monitoracao.component.html',
  styleUrls: ['./monitoracao.component.css']
})
export class MonitoracaoComponent implements OnInit {
 @Output() public emmitSearch: EventEmitter<any> = new EventEmitter()

  public value:string = "" 

  public getAllTemp : any 
  
  public loading= true
  public setAllTemp :any  
  hoje: Date = new Date();
  public setSorttemp:any
  public setSort: any

  public getAllTempo : any 
  

  public setAllTempo :any  


 
  constructor(private iotService: IotApiService) { }

  ngOnInit(): void { 

    const numbers = interval(4000);
    
   
    function compare(a: any,b: any) {
      if (a.hora.S > b.hora.S  )
     
         return -1;
      
      if (a.hora.S < b.hora.S )
  
        return 1;
      
      return 0;
    }

    function compare1(a: any,b: any) {
      if (a.dia.S > b.dia.S )
     
         return -1;
      
      if (a.dia.S < b.dia.S )
  
        return 1;
      
      return 0;
    }

    var  i =0 
 
  this.iotService.apiA02('A01')  
    .subscribe(
      res=> {
      
         this.setAllTempo = res.Items.sort(compare)
         this.getAllTempo = this.setAllTempo 
         this.setSorttemp = this.getAllTempo.sort(compare1) 
         this.setSort = this.setSorttemp.shift()
         console.log(this.setSort)
      
         i++ 
         console.log(i)
       
      })  
    
  
    
 
    this.iotService.apiA02('A02').subscribe(
      res=> {
        
         this.setAllTemp = res.Items.sort(compare)
         this.getAllTemp = this.setAllTemp.shift()
         console.log(this.getAllTemp)
        
      } ) 
    }
 




  public getSearch(value: string) {
  const filter = this.getAllTemp 
   .filter(( res: any) => {
       return !res.temperatura.S.indexOf(value.toLowerCase())
   })
  this.getAllTemp = filter
       
  }


  
 
 

    
}
