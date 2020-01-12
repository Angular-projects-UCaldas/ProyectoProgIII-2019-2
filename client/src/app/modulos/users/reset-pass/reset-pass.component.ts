import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "../../../services/usuarios.service";
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css']
})
export class ResetPassComponent implements OnInit {


  email: string = "";
  alertMessage: string = "";

  constructor(private userService: UsuariosService, private router: Router) { }

  ngOnInit() {
  }


  resetPassword(email: string) {
    this.userService.resetPassword(this.email).subscribe(item => {
      console.log(item.id);
    });
  }

/*   resetPassword(email: string){
   
    let token = localStorage.getItem("userToken");

    return this.userService.resetPassword(token, this.password).subscribe(item => {
      if (!isNullOrUndefined(item)) {
        this.alertMessage = "Error en el servidor";
        console.log(this.alertMessage);
      } else {
        this.alertMessage = "La contraseña se ha cambiado correctamente!!";
        console.log(this.alertMessage);
        this.router.navigate(['user/login']);       
      }
    }, err => {
      var errorMessage = <any>err;
      console.log(errorMessage);
    });
  } */
}