import { Component } from '@angular/core';
import { Calculamedia } from '../../components/calculamedia/calculamedia';
import { ExibeMensagem } from '../../components/exibe-mensagem/exibe-mensagem';

interface Disciplina {
  nome: string;
  docente: string;
  ch: number;
}


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ExibeMensagem, Calculamedia],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  disciplinas: Disciplina[] = [
    { nome: 'PPI', docente: 'Bruno', ch: 120 },
    { nome: 'Eng. Software', docente: 'Alvaro', ch: 120 }
  ];

}
