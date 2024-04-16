import { Component } from '@angular/core';
import {UsersservicesService}from '../services/usersservices.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelsComponent {
constructor(private hoteldata:UsersservicesService){
  hoteldata.Users().subscribe((result)=>{
    console.log(result);
  })
}
}
