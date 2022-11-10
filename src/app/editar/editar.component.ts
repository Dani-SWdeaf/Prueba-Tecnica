import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Persona } from '../models/persona.interface';
import { ApiService } from '../services/api.service';
import { ProductosModel } from './producto.interface';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  constructor(private route : ActivatedRoute, private _api : ApiService, private router: Router) { }
  
  products: ProductosModel[] = [];
  product: ProductosModel;
  personaData: Persona[];
  editForm = new FormGroup(
    {
      title: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl('')
    }
  );  

  ngOnInit(): void {
    //console.log(this.route.snapshot.params.id );
    this._api.getProductsById(this.route.snapshot.params.id).subscribe((result:any) => {
      console.log(result);
      this.editForm = new FormGroup({
        title: new FormControl( result['title'] ),
        price: new FormControl(result['price']),
        description: new FormControl(result['description'])
      })
    })
    this.getAllPersonas();
  }

  updateProductosDetails()
  {
    this._api.updateProducts(this.route.snapshot.params.id, this.editForm.value).subscribe((result) => {
      console.log(result);
      
    })
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Ya actualizaste, gracias!',
      showConfirmButton: false,
      timer: 1500,
    });
    this.router.navigate(['products']);
  }

  getAllPersonas()
  {
    this._api.getPersons().subscribe(res => {
      this.personaData = res;
    })
  }


  getProducts()
  {
    this._api.getProducts().subscribe((res) => {
      this.products = res;
    })
  }
  
}
