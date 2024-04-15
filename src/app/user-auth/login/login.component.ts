import { NgForOf, NgIf } from '@angular/common';
import { Component, Output,EventEmitter} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule ,NgForOf,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
name='mukul';
displayval:string=''
count=0;
data:any={};
color="red";
command=true;
@Output() updateDataEvent=new EventEmitter<string>()
ud:string='x';
userdata:any=[
{name:'mukul' ,email:'mukul@gamil',phone:'8904567345',socialAccounts:['youtube','snap']},
{name:'naresh' ,email:'narsh@gamil',phone:'8904567334',socialAccounts:['insta','github']},
{name:'nakul' ,email:'nakul@gamil',phone:'89045345',socialAccounts:['gmail','geeks']}
];
getname(name:string){
  alert("name");

 
}
emitdata(ud:string){
  console.log(ud)
    this.updateDataEvent.emit(ud);
}
getvalue(val:string){
this.displayval=val;

}
counter(type:string){

  type==='add'?this.count++:this.count--;

}
getdata(data:NgForm){
  console.log(data);
  this.data=data;
}
toggle(){
 this.command=!this.command;
}

}
