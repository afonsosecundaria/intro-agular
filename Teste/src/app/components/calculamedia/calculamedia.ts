import { Component } from '@angular/core';

@Component({
  selector: 'app-calculamedia',
  imports: [],
  templateUrl: './calculamedia.html',
  styleUrl: './calculamedia.scss',
})
export class Calculamedia {
  protected mediaParcial: number | undefined
  
  constructor() {
    this.mediaParcial = undefined
  }
  

  calcularMediaParcial(b1: number, b2: number, 
                       b3: number, b4: number) {
      this.mediaParcial = 
        (b1 * 2 + b2 * 2 + b3 * 3 + b4 * 3) / 10
  }
}
