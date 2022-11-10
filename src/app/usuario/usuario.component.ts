import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from '../models/usuario.interface';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  //usuario: string;
  //password: string;

  public loginForm!: FormGroup;

  constructor(
    private router: Router,
    private api: ApiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  abrirLogin() {
    this.api.usuarioByEmail().subscribe( res => {
      const user = res.find((a : any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
      });
      if (user) {
        Swal.fire({
          title: 'Correcto',
          text: '😊',
          confirmButtonText: 'ACEPTAR',
          confirmButtonColor: '#6c757d',
        })
        this.loginForm.reset();
        this.router.navigate(['bienvenido']);
      } else {
        Swal.fire({
          title: 'Usuario y/o Password incorrectos',
          text: 'Verifiquelos e intente nuevamente',
          confirmButtonText: 'ACEPTAR',
          confirmButtonColor: '#6c757d',
        })
      }
    }, err => {
      Swal.fire({
        title: 'Debe de poner su usuario y password',
        text: 'Gracias',
        confirmButtonText: 'ACEPTAR',
        confirmButtonColor: '#6c757d',
      });
      console.log(err);
      
    })
  }
  /* if(this.usuario == 'Admin' && this.password == "Admin")
  {
   this.router.navigate(['bienvenido']);
  } else {
    Swal.fire({
      title: 'Usuario y/o Password incorrectos',
      text: 'Verifiquelos e intente nuevamente',
      confirmButtonText: 'ACEPTAR',
      confirmButtonColor: '#6c757d',
    })
  } */
}
