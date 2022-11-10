import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from '../models/persona.interface';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  personaData: Persona[];

  constructor(private _api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getAllPersonas();
  }

  getAllPersonas()
  {
    this._api.getPersons().subscribe(res => {
      this.personaData = res;
    })
  }

}
