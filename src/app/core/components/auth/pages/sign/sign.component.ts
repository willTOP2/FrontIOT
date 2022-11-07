import { Component, OnInit } from '@angular/core'; 
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {



  
  constructor(private formBuilder: FormBuilder ) { }

  ngOnInit(): void { 
  }

}
