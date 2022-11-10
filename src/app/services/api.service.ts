import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductosModel } from '../editar/producto.interface';
import { Persona } from '../models/persona.interface';
import { Usuario } from '../models/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  headers = new HttpHeaders().set('Conten-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  }

  url:string = "https://dummyjson.com/";
  db : string = "http://localhost:3000/products";

  constructor(private _http:HttpClient) { }

  usuarioByEmail() {
    return this._http.get<any>("http://localhost:3000/users").pipe(map((res : any) => {
      return res;
    }));
  }

  getUsersPersonas(page: number): Observable<Persona[]>
  {
    let user = this.url + "users/" + page;
    return this._http.get<Persona[]>(user);
  }

  getPersons()
  {
    return this._http.get<any>("http://localhost:3000/users").pipe(map((res : any) => {
      return res;
    }));
  }

  getProducts()
  {
    return this._http.get<any>("http://localhost:3000/products").pipe(map((res : any) => {
      return res;
    }));
  }

  getProductsById(id: number)
  {
    return this._http.get(`${this.db}/${id}`);
  }

  postProductos(data:any)
  {
    return this._http.post<any>("http://localhost:3000/products", data).pipe(map((res:any) => {
      return res;
    }));
  }

  getUpdateProducts(id: number) :Observable<ProductosModel>
  {
    const url = `${this.db}/${id}`;
    return this._http.get<ProductosModel>(url, this.httpOptions);
  }

  updateProducts(id:number, data:any)
  {
    return this._http.put(`${this.db}/${id}`, data);
  }

  deleteProducts(id: number)
  {
    return this._http.delete<any>("http://localhost:3000/products/" + id).pipe(map((res :any) => {
      return res;
    }));
  }
}
