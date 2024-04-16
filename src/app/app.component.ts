import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './new/new.component';
import { LoginComponent } from './user-auth/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NewComponent,LoginComponent,NavbarComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
  userdata: { name:string, email:string }[]=[
    {name:'mukul',email:'mukul@123.com'},
    {name:'neha',email:'mukul@123.com'}
  ]
    updateddata :string='s';
  updatedata(data:string){
    console.log(data)
    this.updateddata=data;
  }
}
