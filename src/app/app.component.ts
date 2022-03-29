import { Component } from '@angular/core';
import Alumnos_json from 'src/assets/json/alumnos.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CHListaAlumnos-Padilla';
  listaAlumnos: any = Alumnos_json;
  fecha: Date = new Date();

  userClicked(username:string): void{
    alert('El alumno ' + username + ' fue clickeado')
  }

  alumnosMayores = this.listaAlumnos.filter((i:any) => i.age >= 21);

}
