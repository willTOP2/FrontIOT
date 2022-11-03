import { Component, OnInit } from '@angular/core';
import { IotApiService } from 'src/app/service/iot-api.service';
import {BehaviorSubject, Subject} from 'rxjs';


@Component({
  selector: 'app-monitoracao',
  templateUrl: './monitoracao.component.html',
  styleUrls: ['./monitoracao.component.css']
})
export class MonitoracaoComponent implements OnInit {

  //public searchTerm$ = new Subject<string>(); 

  public value:string = "" 

  public getAllTemp : any
  
  public setAllTemp :any  

  constructor( private iotService: IotApiService) { }

  ngOnInit(): void { 
     this.iotService.apiAll().subscribe(
     res=> {
      this.setAllTemp = res; 
      this.getAllTemp = this.setAllTemp
     }
       
     );
  }


   search(e: Event) {
   const target = e.target as HTMLInputElement; 
   const value = target.value; 

    const filter = this.setAllTemp.filter( (res :any) => { 
  
  return !res.nome.indexOf(value.toLowerCase())
    }); 
    this.getAllTemp = filter
  }

  


   public getSearch(value: string) {

     const filter = this.setAllTemp.filter( (res:any) =>{
       return !res.nome.indexOf(value.toLowerCase())
     }); 
      this.getAllTemp =filter
   }
 

}
