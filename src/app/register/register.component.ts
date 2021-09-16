import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';


export class DatepickerOverviewExample {}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public input: any;
  public constructor(){
    // this.input={
    //   "name":"",
    //   "email":"",
    //   "address":"",
    //   "gender":"" 
    // }
  }
  user  = {};
  myForm !:FormGroup;

  ngOnInit(): void {
    this.myForm=new FormGroup({
      name:new FormControl(null,Validators.required),
      zip:new FormControl(null,[Validators.required, Validators.pattern("^[0-9]*$")] ),
      email: new FormControl(null, [Validators.required,Validators.email]),
      gender: new FormControl(''),
      address:new FormControl(null, Validators.required),
      right: new FormControl( '', Validators.requiredTrue)
      
    })
  }
reset(){
  this.myForm.reset('')
}


  onSubmit(){
  
    console.log(this.myForm.value);
    localStorage.setItem('form-data', JSON.stringify(this.myForm.value));





    // this.user=Object.assign(this.user, this.myForm.value);
    // localStorage.setItem('User',JSON.stringify(this.user));
    // this.addUser(this.user);
    this.myForm.reset('');
    
  }
  
  //  addUser(user:any){
  //    let users: any[];
     
  //    if(localStorage.getItem('User')){
  //      users = JSON.parse(localStorage.getItem('user') || '[]');
  //      users =[user,...user];
  //    }else{
  //      users = [user]
  //    }
  //   localStorage.setItem('User',JSON.stringify(this.user));
  //   localStorage.getItem('users');
       
  //  }
  

}


  


