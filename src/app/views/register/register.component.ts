import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      signUpAs: ['guest', Validators.required],
      guestInfo: ['', Validators.required],
      staffInfo: ['', Validators.required]
    });
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  get signUpAs(): FormControl {
    return this.form.get('signUpAs') as FormControl;
  }

  get guestInfo(): FormControl {
    return this.form.get('guestInfo') as FormControl;
  }

  get staffInfo(): FormControl {
    return this.form.get('staffInfo') as FormControl;
  }

  ngOnInit(): void {
    this.signUpAs.valueChanges.subscribe(val => {
      if (val === 'guest') {
        this.guestInfo.enable();
        this.staffInfo.disable();
      } else {
        this.guestInfo.disable();
        this.staffInfo.enable();
      }
    });
  }

  public register(): void {
    this.authService.register(this.form.value).subscribe(() => {
    });
  }

}
