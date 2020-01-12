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


  constructor(private userService: UsuariosService) { }


  ngOnInit() {

/*     var CryptoJS = require("crypto-js");

    // Encrypt
    var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123');

    // Decrypt
    var bytes = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
    var plaintext = bytes.toString(CryptoJS.enc.Utf8);

    console.log(ciphertext,plaintext); */
  }

  onLogin(): void {
    this.userService.loginUser(this.email, this.password).subscribe(item => {
      //console.log(this.userService.getUserInformation());
      this.userService.saveToken(item.id);
      this.userService.saveUserInformation(item.user);
      if (this.flag == true) {
        this.flag = false;
        window.location.reload();
      }
    });
  }

  resolved(captchaResponse: string) {
    this.recaptcha = captchaResponse;
    if (this.recaptcha.length > 0) { }
    //console.log(`Resolved captcha with response: ${captchaResponse}`);
     /*   executeImportantAction(): void {
      this.recaptcha.execute('onLogin')
        .subscribe((token) => this.handleToken(token));
    } */
  }

 
}
