import { Component, Input } from '@angular/core';
import { Cliente } from './formulario/formulario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  clientes: Cliente[] = [ { cpf: "058.316.277.05", nome: "Antonio Martins", data: "20/06/1996", estado: "Solteiro", filhos: "0", quantidade: "10"},
  { cpf: "058.316.277.05", nome: "Antonio Martins", data: "20/06/1996", estado: "Solteiro", filhos: "0", quantidade: "10"}]
}
