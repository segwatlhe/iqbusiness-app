import {Component, OnInit, ViewChild} from '@angular/core';
import {Person} from '../model/person';
import {RegistrationService} from '../service/registration.service';
import {error} from 'util';
import {AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-person',
  templateUrl: './register-person.component.html',
  styleUrls: ['./register-person.component.css']
})
export class RegisterPersonComponent implements OnInit {

  submitted = false;
  person: Person = new Person();
  registrationForm: FormGroup;

  constructor(private registrationService: RegistrationService, private fb: FormBuilder) {
  }

  get registerFormControl() {
    return this.registrationForm.controls;
  }

  fullNamepatternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      // tslint:disable-next-line:max-line-length
      const regex = new RegExp('^(?!\\s*$_:,.)[-a-zA-Z\\s]{2,100}$');
      const valid = regex.test(control.value);
      return valid ? null : {invalidPassword: true};
    };
  }

  idNumberPatternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      // tslint:disable-next-line:max-line-length
      const regex = new RegExp('(((\\d{2}((0[13578]|1[02])(0[1-9]|[12]\\d|3[01])|(0[13456789]|1[012])(0[1-9]|[12]\\d|30)|02(0[1-9]|1\\d|2[0-8])))|([02468][048]|[13579][26])0229))(( |-)(\\d{4})( |-)(\\d{3})|(\\d{7}))');
      const valid = regex.test(control.value);
      return valid ? null : {invalidPassword: true};
    };
  }

  telephoneNumberPatternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      // tslint:disable-next-line:max-line-length
      const regex = new RegExp('[0]\\d{2}-\\d{7}');
      const valid = regex.test(control.value);
      return valid ? null : {invalidPassword: true};
    };
  }

  ngOnInit() {
    this.person = new Person();
    this.registrationForm = this.fb.group({
      fullName: new FormControl('', [Validators.required, Validators.compose([this.fullNamepatternValidator()])]),
      idNumber: new FormControl('', [Validators.required, Validators.compose([this.idNumberPatternValidator()])]),
      telephoneNumber: new FormControl('', [Validators.minLength(10), Validators.maxLength(10)]),
    });
  }

  onSubmit() {

    if (this.registrationForm.valid) {
      this.registrationService.registerPerson(this.registrationForm.value).subscribe(
        data => {
          console.log('data', data);
        },
        error1 => {
          console.log('data', error1);
        }
      );
      this.submitted = true;
    }

  }
}
