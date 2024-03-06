import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-register-company-form',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './register-company-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RegisterCompanyFormComponent {
  //
  title = 'Company sign up';

  constructor(private router: Router) {}

  form = {
    companyName: '',
    taxId: '',
    password: '',
    address: '',
    addressAdditionalInfo: '',
    postalCode: '',
    addressTown: '',
    addressCity: '',
    addressCountry: '',
    phoneNumber: '',
    email: '',
    debtType: '',
    settingUpDate: '',
    acceptTerms: false,
  };

  onSubmit(): void {
    // console.log(JSON.stringify(this.form));
  }

  onReset(form: NgForm): void {
    form.resetForm();
  }
}
