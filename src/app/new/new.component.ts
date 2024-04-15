import { NgFor } from '@angular/common';
import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [NgFor],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})

export class NewComponent {
 name='mukul' 
 usertask:any[]=[];

 getTask(task:any){
   this.usertask.push({id:this.usertask.length,name:task})
   console.log(this.usertask);
 }
 remove(taskid:any){
   this.usertask=this.usertask.filter(i=>i.id!==taskid)
 }
 @Input() item: { name: string; email: string; }[] = [];

}
