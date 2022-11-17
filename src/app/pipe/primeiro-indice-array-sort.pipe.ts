import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primeiroIndiceArraySort'
})
export class PrimeiroIndiceArraySortPipe implements PipeTransform {

  transform(temperatura: any): any {
    temperatura =  temperatura
    .sort((a: any,b: any) => (a.hora.S < b.hora.S) ? 1: -1)
    
   var temperatura1 = temperatura
    .sort((a: any,b: any) => (a.dia.S > b.dia.S) ? 1: -1)

    if(temperatura1.temperatura.S < 16 ){
     return temperatura1.shift()
    }
  }


}
