import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Persona } from '../models/persona.interface';
import { ApiService } from '../services/api.service';
import { ProductosModel } from './producto.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productosData !: any;
  formValue !: FormGroup;
  productosObj : ProductosModel = new ProductosModel();
  personaData: Persona[];
  constructor(private _api : ApiService, private formbuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.getAllProductos();
    this.getAllPersonas();
  }
  getAllPersonas()
  {
    this._api.getPersons().subscribe(res => {
      this.personaData = res;
    })
  }

  getAllProductos()
  {
    this._api.getProducts().subscribe(res => {
      this.productosData = res;
    })
  }

  deleteProductos(p : number)
  {
    
    Swal.fire({
      title: '¿Confirma que desea eliminar el Producto?',
      showCancelButton: true,
      cancelButtonText: 'CANCELAR',
      confirmButtonText: 'ElMINIAR',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#6c757d'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Se eliminó el producto', 'Eliminar correctamente', 'success');
        this._api.deleteProducts(p).subscribe(res => {
          this.getAllProductos();
        })
      }
    });
  }

  editProductos(id: number)
  {
    this.router.navigate(['/editar', id]);
  }

}
