import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public password: any  



  constructor( private http: HttpClient ) { 
  }
   //passwords: new FormControl(this.password, [Validators.required]) 




  private url: string ='https://26fuifhi25.execute-api.us-east-1.amazonaws.com/test'

  ngOnInit(): void {

 

}



public enviarForm(): Observable<any> {
  
  return this.http.
  get<any>
  (`${this.url}/iot_config?asp=${''}&pss=${this.password.value}&id=${''}`) 
  .pipe( )
}
}