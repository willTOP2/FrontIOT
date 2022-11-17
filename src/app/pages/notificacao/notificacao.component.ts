import { Component, OnInit } from '@angular/core';
import { timestamp } from 'rxjs';
import { IotApiService } from 'src/app/service/iot-api.service';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.css']
})
export class NotificacaoComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'condicao', 'temp'];
  dataSource = this.iotService.apiAll();
  orderHeader: string = '';
  isDescOrder: boolean = true;

  public value:string = ""   


  
  public nomeTitle:string = "Notifications"
  
  public getAllTemp : any;  
  public setAllTemp :any; 

  public setSort: any 
  public setSorttemp: any

  sort(headerName:string){
    this.isDescOrder = !this.isDescOrder;
    this.orderHeader = headerName;
  }
  
  
  constructor(private iotService: IotApiService) { }

  ngOnInit(): void {
   
 
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
 
  this.iotService.apiA02('A02')  
    .subscribe(
      res=> {
      
         this.setAllTemp = res.Items
         this.getAllTemp = this.setAllTemp 
         this.setSorttemp = this.getAllTemp.sort(compare1) 
         this.setSort = this.setSorttemp.shift()
         console.log(this.setSort)
      
         i++ 
         console.log(i)
       
      })  
    

      

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
        return !res.nome.indexOf(value.toUpperCase())
      }); 
       this.getAllTemp =filter
    }
    
 
}
