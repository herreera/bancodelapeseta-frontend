import { WInputComponent } from '@/SHARED/Widgets/w-input/input-app';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  standalone: true,
  imports: [WInputComponent, CommonModule, ReactiveFormsModule, RouterLink, IonicModule,  MatButtonModule, MatIconModule],
})
export default class ForgotPasswordComponent {

  constructor(private formBuilder: FormBuilder) {}

  forgotPass = this.formBuilder.group({});

  onForgotPass() {
    if(this.forgotPass.valid){
      console.log('Se envió la solicitud de restablecimiento de contraseña');
    }else{
      console.log("Por favor llene todos los campos");
    }
  }


}
