import {Component} from '@angular/core';
import {FooterComponent} from '../footer/footer.component';
import {Button} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FooterComponent,
    Button,
    CardModule,
    DividerModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  nameValid: boolean = true;
  emailValid: boolean = true;
  passwordValid: boolean = true;
  isMotion = false;

  form: FormGroup | undefined;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group(
      {
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required])
      }
    )
  }

  name = '';
  email = '';
  password = '';

  // form = new FormGroup({
  //   name: new FormControl('', [Validators.required]),
  //   email: new FormControl('', [Validators.required]),
  //   password: new FormControl('', [Validators.required])
  // })

  nameChange = (e: Event) => {
    // @ts-ignore
    this.name = e.target.value
  }
  passwordChange = (e: Event) => {
    // @ts-ignore
    this.password = e.target.value
  }
  emailChange = (e: Event) => {
    // @ts-ignore
    this.email = e.target.value
  }

  register = () => {


    const test = {
      name: this.form?.get('name')?.value,
      email: this.form?.get('email')?.value,
      password: this.form?.get('password')?.value
    }
    //console.log(this.form);
    // @ts-ignore
    const formArr = Object.entries(this.form.controls)
    //console.log(formArr);
    // @ts-ignore

    formArr.forEach((control: any) => {
      //console.log(control[0])
      // @ts-ignore
      this.valid(control[1],control[0])
    })


    // if (this.form?.invalid) {
    //   if (this.form.get('email')?.invalid) {
    //     this.emailValid = false;
    //   } else {
    //     this.emailValid = true;
    //   }
    //   if (this.form.get('name')?.invalid) {
    //     this.nameValid = false;
    //   } else {
    //     this.nameValid = true;
    //   }
    //   if (this.form.get('password')?.invalid) {
    //     this.passwordValid = false;
    //   } else {
    //     this.passwordValid = true;
    //   }
    //   return;
    // }

    if (this.nameValid || this.emailValid || this.passwordValid) {
      this.http.post('http://localhost:8080/users/register', test).subscribe((data) => {
        console.log(data)
      })
    }


  }

  valid(attr: AbstractControl,attrName:string) {
    // 動態地設定 this 物件的屬性
    this[attrName+'Valid' as 'nameValid' | 'emailValid' | 'passwordValid'] = !attr.invalid;
  }

  setFormValue(attr: AbstractControl, value: any) {
    attr.setValue(value)
  }

  onValideMail = (e: Event) => {
    // @ts-ignore
    this.setFormValue(this.form.get('email'), e.target.value)
    //this.form.get('email').setValue(e.target.value)
    // @ts-ignore
    this.valid(this.form.get('email'));

  }
  onValideName = (e: Event) => {
    // @ts-ignore
    this.form.get('name').setValue(e.target.value)
    // @ts-ignore
    if (this.form.get('name').errors) {
      this.nameValid = false;
    } else {
      this.nameValid = true;
    }
  }
  onValidePassword = (e: Event) => {
    // @ts-ignore
    this.form.get('password').setValue(e.target.value)
    // @ts-ignore
    if (this.form.get('password').errors) {
      this.passwordValid = false;
    } else {
      this.passwordValid = true;
    }
  }


}
