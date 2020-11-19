import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      confirmPassword: new FormControl('', Validators.required)
    }, this.passwordMatchValidator);
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
