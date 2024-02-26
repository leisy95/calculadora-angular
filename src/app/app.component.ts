import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from './services/calculadora.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'calculadora';

  private num1: any | null;
  private num2: any | null;
  private resultado: any | null;
  private operacion: any | null;
  
  constructor(public calculadoraService: CalculadoraService){ }

  ngOnInit() {
    this.limpar();
  }
  
  limpar(): void {
    this.num1 = '0';
    this.num2 = null;
    this.resultado = null;
    this.operacion = null;
  }
  
  adicionarNumero(numero: string): void {
    if (this.operacion === null) {
      this.num1 = this.concatenarNumero(this.num1, numero);
    } else {
      this.num2 = this.concatenarNumero(this.num2, numero);
    }
    console.log(this.num1, this.num2)
  }

  concatenarNumero(numAtual: string, numConcat: string): string {
    
    if (numAtual === '0' || numAtual === null) {
      numAtual = '';
    }
    
    if (numConcat === '.' && numAtual === '') {
      return '0.';
    }

    
    if (numConcat === '.' && numAtual.indexOf('.') > -1) {
      return numAtual;
    }

    return numAtual + numConcat;

  }

  definirOperacao(operacion: string): void {
    
    if (this.operacion === null) {
      this.operacion = operacion;
      return;
    }

    if (this.num2 !== null) {
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.num1), parseFloat(this.num2), this.operacion);

      this.operacion = operacion;
      this.num1 = this.resultado.toString();
      this.num2 = '';
      this.resultado = 0;

    }
  }
  
  calcular(): void {
    if (this.num2 === null) {
      return;
    }

    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.num1), parseFloat(this.num2), this.operacion
    );

  }

  get display(): string {
    if (this.resultado !== null) {
      return this.resultado.toString();
    }

    if (this.num2 !== null) {
      return this.num2;
    }
    return this.num1;
  }
}
