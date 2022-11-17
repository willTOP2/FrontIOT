import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordernar'
})
export class OrdernarPipe implements PipeTransform {

  transform(temperatura: any): any {
    temperatura =  temperatura
    .sort((a: any,b: any) => (a.hora.S < b.hora.S) ? 1: -1)
    
    return temperatura
    .sort((a: any,b: any) => (a.dia.S > b.dia.S) ? 1: -1)

  }

}
