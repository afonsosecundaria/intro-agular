import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly nometurma = 'Infor4v'
  protected readonly anoturma = '2023'
  protected readonly disciplinas any[] = []

  constructor(){
    this.disciplinas = [
      {
        nome: 'PPI',
        docente: 'Bruno',
        ch: 120
      },
      {
        
      }
    ]
  }


}
