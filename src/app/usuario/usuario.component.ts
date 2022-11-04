import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario:string;
  password:string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  abrirLogin()
  {
    if(this.usuario == 'Admin' && this.password == "Admin")
    {
     this.router.navigate(['bienvenido']);
    } else {
      alert('No hay datos :(')
    }
  }
}
