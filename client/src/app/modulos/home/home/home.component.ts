import { Component, OnInit } from '@angular/core';

import { CategoriaService } from 'src/app/services/categoria.service';
import { FormGroup, FormControl } from '@angular/forms';
import { EmailModel } from 'src/app/models/email.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private catService: CategoriaService) {
    this.emailFormGroup = this.formGroupCreator();
  }

  emailFormGroup: FormGroup;

  formGroupCreator(): FormGroup {
    return new FormGroup({
      nombre: new FormControl(),
      apellido: new FormControl(),
      mensaje: new FormControl(),
      asunto: new FormControl(),
      emailAddresses: new FormControl()
    });
  }

  get nombre() {
    return this.emailFormGroup.get('nombre');
  }

  get apellido() {
    return this.emailFormGroup.get('apellido');
  }

  get mensaje() {
    return this.emailFormGroup.get('mensaje');
  }

  get asunto() {
    return this.emailFormGroup.get('asunto');
  }

  get emailAddresses() {
    return this.emailFormGroup.get('emailAddresses');
  }

  ngOnInit() {
  }

  //   sendMail(): void{
  //     this.nombre = this.mensaje.value;
  //     console.log(this.mensaje.value, this.asunto.value, this.emailAddresses.value,"hola", this.nombre);


  // }

  sendMail(): void {
    let email = this.emailFormGroup;
    this.catService.sendMail(this.buildEmailData()).subscribe(items => {
      console.log(items);
    });
  }

  buildEmailData(): EmailModel {
    let email: EmailModel = {
      nombre: this.nombre.value,
      apellido: this.apellido.value,
      mensaje: this.mensaje.value,
      asunto: this.asunto.value,
      emailAddresses: this.emailAddresses.value
    }
    return email;
  }
}
