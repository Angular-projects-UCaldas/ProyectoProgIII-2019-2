import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  flag: boolean = true;
  email: string = "";
  password: string = "";
  recaptcha: string = "";


  constructor(private userService: UsuariosService) {}


  ngOnInit() {
  }

  onLogin(): void{
    this.userService.loginUser(this.email, this.password).subscribe(item => {
      //console.log(this.userService.getUserInformation());
      this.userService.saveToken(item.id);
      this.userService.saveUserInformation(item.user);
      if (this.flag == true){
        this.flag = false;
        window.location.reload();
      }
    }); 
  }

  resolved(captchaResponse: string) {
    this.recaptcha = captchaResponse;
    if(this.recaptcha.length > 0){}
    //console.log(`Resolved captcha with response: ${captchaResponse}`);
}
  
/*   executeImportantAction(): void {
    this.recaptcha.execute('onLogin')
      .subscribe((token) => this.handleToken(token));
  } */
}
