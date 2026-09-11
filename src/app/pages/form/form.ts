import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { last } from 'rxjs';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-form',
  styleUrl: './form.css',
  templateUrl: './form.html',
})
export class Form {
  formulario: FormGroup
  name: FormControl
  lastname: FormControl
  dni: FormControl
  email: FormControl

  constructor(){
    this.name = new FormControl('',Validators.required)
    this.lastname = new FormControl('', Validators.required)
    this.dni = new FormControl('',[
                            Validators.required, 
                            Validators.minLength(7), 
                            Validators.maxLength(8), 
                            Validators.pattern('^[0-9]*$')
                          ])
    this.email = new FormControl('',[
                            Validators.required,
                            Validators.email
    ])

    this.formulario = new FormGroup({
      nameF : this.name,
      lastnameF : this.lastname,
      dniF : this.dni,
      emailF : this.email
    })
  }

  verSubmit(){
    console.log(this.formulario.value)
  }
}
