import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { HttpClient} from '@angular/common/http';
import { Cliente } from './formulario.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  coisa: Cliente[] = [];
  @Input() cliente!: Cliente;
  
  constructor (private pedro: HttpClient) {
  }

  ngInit(): void {
      this.pedro.get<Cliente[]>("http://localhost:3000/db").subscribe(caixa =>this.coisa=caixa)
  }

  cadastrarInfo(variavel: any){
    console.log(variavel.value)
  }
}
