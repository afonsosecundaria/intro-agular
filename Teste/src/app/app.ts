import { Component, signal } from '@angular/core';
import { NgFor } from '@angular/common';
import { TituloPrincipal } from './titulo-principal/titulo-principal';

@Component({
  selector: 'app-root',
  imports: [TituloPrincipal, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected readonly nometurma = 'Info4v'
  protected readonly anoturma = '2023'
  protected readonly disciplinas: any[] = []

  constructor(){
    this.disciplinas = [
      {
        nome: 'PPI',
        docente: 'Bruno',
        ch: 120
      },
      {
        nome: 'eng. software', 
        docente: 'Alvaro', 
        ch: 120  
      }
    ]
  }


}
