
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { forkJoin } from 'rxjs';
import { IotApiService } from 'src/app/service/iot-api.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {
  
  public setSorttemp: any 
  public setSort: any

  public getAllTempo : any
  public setAllTempo : any
   public nomeTitle: string = "Historic of Local"
  public setAllTemp :any 

   public url: string ='https://26fuifhi25.execute-api.us-east-1.amazonaws.com/test/'

  constructor(private iotService: IotApiService,private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id =  this.route.snapshot.params['id'];
    this.iotService.apiGetIDTemp(`${this.url}/${id}`) 
      
   .subscribe(
       res => {

        function compare(a: any,b: any) {
          if (a.hora.S < b.hora.S  )
         
             return -1;
          
          if (a.hora.S > b.hora.S )
      
            return 1;
          
          return 0;
        }
    
        function compare1(a: any,b: any) {
          if (a.dia.S < b.dia.S )
         
             return -1;
          
          if (a.dia.S > b.dia.S )
      
            return 1;
          
          return 0;
        }
     
        this.setAllTempo = res.Items.sort(compare)
        this.getAllTempo = this.setAllTempo 
        this.setSorttemp = this.getAllTempo.sort(compare1) 
        this.setSort = this.setSorttemp
        console.log(this.setSort)

       } 
     );


  
      }


     public get apiPorID(){
       const id = this.route.snapshot.params['id'];
       return this.iotService.apiGetIDTemp(`${this.url}=${id}`) 
         
      .subscribe(
          res => {
            this.setAllTemp = res 
            this.getAllTempo = this.setAllTemp
             console.log(this.getAllTempo)
          } 
        );
        }

     }








  
  

