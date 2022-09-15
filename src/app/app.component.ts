import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registro de Usuarios';
  mensaje = "";
  registrado = false;
  nombre:string = "";
  apellido:string = "";
  cargo:string = "";
  entradas:Array<{titulo:string}>;
  // entradas:any;

  constructor() { 

    this.entradas = [

      {titulo: "Python cada día mas presente"},
      {titulo: "Java presente desde hace mas de 20 años"},
      {titulo: "Javascript cada día mas funcional"},
      {titulo: "Kotlin potencia para tus apps"},
      {titulo: "¿Dónde quedó Pascal?"},

    ];

  }

  registrarUsuario(){

    this.registrado = true;
    this.mensaje = "Usuario registrado con exito";
  }
}
