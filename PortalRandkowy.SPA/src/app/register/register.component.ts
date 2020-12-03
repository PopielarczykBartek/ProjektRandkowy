import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister: EventEmitter<any> = new EventEmitter();
  model: any = {};
  registerForm: FormGroup;
  bsconfig: Partial<BsDatepickerConfig>;

  constructor(private authService: AuthService, private alertify: AlertifyService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.bsconfig = {
      containerClass: 'theme-orange'
    },
    this.createRegisterForm();
  }

  createRegisterForm(): void{
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      confirmPassword: ['', Validators.required],
      gender: ['Kobieta'],
      dateOfBirth: [null, Validators.required],
      zodiacSign: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],

    }, {validator: this.passwordMatchValidator});
  }

  passwordMatchValidator(fg: FormControl): any{
    return fg.get('password').value === fg.get('confirmPassword').value ? null : { mismatch: true};
  }

  register(): void{
   // this.authService.register(this.model).subscribe(() => {
   //   this.alertify.success('rejestracja udana');
   // }, error => {
   //   this.alertify.error(error);
   // });
    console.log(this.registerForm.value);

  }

  cancel(): void{
    this.cancelRegister.emit(false);
  }


}
