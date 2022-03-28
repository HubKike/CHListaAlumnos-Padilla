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
}
