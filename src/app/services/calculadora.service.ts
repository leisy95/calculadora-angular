import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  static readonly suma: string = '+';
  static readonly resta: string = '-';
  static readonly multiplicacion: string = '*';
  static readonly division: string = '/';

  constructor() { }
 
  calcular(num1: number, num2: number, operacion: string): number {
    let resultado: number;

    switch (operacion) {
      case CalculadoraService.suma:
        resultado = num1 + num2;
        break;
      case CalculadoraService.resta:
        resultado = num1 - num2;
        break;
      case CalculadoraService.multiplicacion:
        resultado = num1 * num2;
        break;
      case CalculadoraService.division:
        resultado = num1 / num2;
        break;
      default:
        resultado = 0;
    }
    return resultado;
  }
}
