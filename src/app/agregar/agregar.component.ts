import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Persona } from '../models/persona.interface';
import { ApiService } from '../services/api.service';
import { ProductosModel } from './producto.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  formValue!: FormGroup;
  productosObj: ProductosModel = new ProductosModel();
  personaData: Persona[];

  constructor(
    private _api: ApiService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      title: [''],
      price: [''],
      description: [''],
    });
    this.getAllPersonas();
  }

  getAllPersonas() {
    this._api.getPersons().subscribe((res) => {
      this.personaData = res;
    });
  }

  cancelar() {
    this.router.navigate(['products']);
  }

  postProductosDetails() {
    this.productosObj.title = this.formValue.value.title;
    this.productosObj.price = this.formValue.value.price;
    this.productosObj.description = this.formValue.value.description;

    this._api.postProductos(this.productosObj).subscribe((res) => {
      console.log(res);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Gracias por registrar!',
        showConfirmButton: false,
        timer: 1500,
      });
      this.formValue.reset();
      this.router.navigate(['products']);
    });
  }
}
