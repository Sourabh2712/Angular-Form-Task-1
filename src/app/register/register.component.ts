import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocalStorageService } from '../local-storage.service';
import { CommonService } from '../services/common.service';

// import {MatCalendarCellClassFunction} from '@angular/material/datepicker';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  value = 'This is interpolation of angular component';

  public input: any;
  isUpdate: boolean = false;
  user = {};
  itemarray: any = [];
  myForm!: FormGroup;
  // City Names
  City: any = [
    {
      name: 'Florida',
      value: 'flordia',
      
    },
    {
      name: 'Cliforniya',
      value: 'californiya',
      
    },
    {
      name: 'New York',
      value: 'New York',
      
    },
  ];
  constructor(private commonService: CommonService) {}
  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      zip: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl(''),
      address: new FormControl(null, Validators.required),
      right: new FormControl('', Validators.requiredTrue),
      city: new FormControl(Validators.required),
    });

    this.commonService.triggerUpdate.subscribe((res) => {
      console.log(res);
      this.updateRecord(res);
      this.id = res;
    });
  }
  reset() {
    this.myForm.reset('');
  }
  id: any;
  onSubmit() {
    if (!this.isUpdate) {
      let user: any = [];
      if (localStorage.getItem('form-data')) {
        user = JSON.parse(localStorage.getItem('form-data') || '[]');
        console.log(user);
      }
      console.log(this.myForm.value);
      this.user = Object.assign(this.user, this.myForm.value);
      user.push(this.user);
      localStorage.setItem('form-data', JSON.stringify(user));
      this.commonService.itemRefresh.next('Updated');
      this.myForm.reset('');
      alert("Submited File");
    } else {
      const array: any = JSON.parse(localStorage.getItem('form-data') || '[]');
      array[this.id] = this.myForm.value;
      console.log(this.myForm.value);
      localStorage.setItem('form-data', JSON.stringify(array));
      this.isUpdate = false;
      this.myForm.reset('');
      this.commonService.itemRefresh.next('Updated');
      alert("Data Updated");
    }
  }

  updateRecord(id: any) {
    const array: any = JSON.parse(localStorage.getItem('form-data') || '[]');
    this.isUpdate = true;
    array.forEach((element: any, index: any) => {
      if (index == id) {
        console.log(element);
        this.myForm.patchValue({
          name: element.name,
          email: element.email,
          address: element.address,
          gender: element.gender,
          zip: element.zip,
          city: element.city,
        });
      }
    });
  }
}
