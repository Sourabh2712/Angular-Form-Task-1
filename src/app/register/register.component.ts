import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // constructor() { }
  public input: any;
  public constructor(){
    // this.input={
    //   "name":"",
    //   "email":"",
    //   "address":"",
    //   "gender":"" 
    // }
  }
  myForm !:FormGroup;

  ngOnInit(): void {
    this.myForm=new FormGroup({
      name:new FormControl(null,Validators.required),
      zip:new FormControl(null,Validators.required),
      email: new FormControl(null, [Validators.required,Validators.email]),
      right: new FormControl(false, Validators.requiredTrue)
      
    })
  }
reset(){
  this.myForm.reset('')
}


  onSubmit(){
    // this._tabledataService.enroll(this.input)
    // Subscribe(
    //   data=>console.log('Success')
    // )
    // error=>console.error('Error!!',error);
    //localStorage.setItem("profile",JSON.stringify(this.input));
    //console.log(this.input);
    console.log(this.myForm.value);
    // console.log(localStorage.getItem("profile"));

  }

}

// export class AppComponent {

  

//   form = new FormGroup({

//     name: new FormControl('', [Validators.required, Validators.minLength(3)]),

//     email: new FormControl('', [Validators.required, Validators.email]),

//     body: new FormControl('', Validators.required)

//   });

  

  // get f(){

  //   return this.form.controls;

  // }

  // onSubmit(){
  //   // this._tabledataService.enroll(this.input)
  //   // Subscribe(
  //   //   data=>console.log('Success')
  //   // )
  //   // error=>console.error('Error!!',error);
  //   //localStorage.setItem("profile",JSON.stringify(this.input));
  //   //console.log(this.input);
  //   console.log(this.form.value);
  //   // console.log(localStorage.getItem("profile"));

  // }

 
  


