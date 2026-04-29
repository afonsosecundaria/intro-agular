import { Component } from '@angular/core';

@Component({
  selector: 'app-titulo-principal',
  standalone: true,
  imports: [],
  templateUrl: './titulo-principal.html',
  styleUrl: './titulo-principal.scss',
})
export class TituloPrincipal {
  protected readonly nometurma = 'Info 4v'
  protected readonly anoturma = 2023
}
