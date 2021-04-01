import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import{MyserviceService} from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SimpleTask';
  
  constructor(private myservice: MyserviceService){}
  
  check=false;
  obj ={
    mobilenumber:'',
    password:''
  };
  
  post(data:any){
  console.log(data);
  this.myservice.post(data).subscribe(result=>{
    this.obj.mobilenumber = '';
    this.obj.password='';
    alert("successfully posted");
  });

}
}
