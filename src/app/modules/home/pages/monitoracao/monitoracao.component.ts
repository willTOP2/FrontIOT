import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitoracao',
  templateUrl: './monitoracao.component.html',
  styleUrls: ['./monitoracao.component.css']
})
export class MonitoracaoComponent implements OnInit {

  public value:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
