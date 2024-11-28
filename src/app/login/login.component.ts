import {Component, Input} from '@angular/core';
import {CardModule} from 'primeng/card';
import {Button} from 'primeng/button';
import {FooterComponent} from '../footer/footer.component';
import {DividerModule} from 'primeng/divider';
import {FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CardModule,
    Button,
    FooterComponent,
    DividerModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private fb: FormBuilder, private http: HttpClient) {
  }

  password = '';
  email = '';

  passwordChange = (e:Event)=>{
    // @ts-ignore
    this.name = e.target.value
  }

  emailChange = (e:Event)=>{
    // @ts-ignore
    this.email = e.target.value
  }

  login(){
    this.http.post('/users/login',{
      email: this.email,
      password:this.password
    }).subscribe((data)=>{
      console.log(data);
    })
  }


}
