import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { CommonService } from '../services/common.service';
// import { Subscriber } from 'rxjs';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  itemarray: any = [];

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.itemRefresh.subscribe((res) => {
      if (res) {
        this.getData();
      }
    });

    this.getData();
  }
  getData() {
    this.itemarray = localStorage.getItem('form-data');
    console.log(localStorage.getItem('form-data'));
    console.log(this.itemarray);
    this.itemarray = JSON.parse(this.itemarray);
    console.log(this.itemarray);
  }
  deleteRow(id: any, name: any) {
    if (confirm('Are you sure to delete ' + name)) {
      this.itemarray.splice(id, 1);
      localStorage.setItem('form-data', JSON.stringify(this.itemarray));
      console.log(this.itemarray);
    } else {
    }
  }
  update(id: any) {
    console.log(id);
    console.log(this.itemarray[id].name);
    console.log(this.itemarray[id].email);
    console.log(this.itemarray[id].address);
    console.log(this.itemarray[id].gender);
    console.log(this.itemarray[id].zip);
    console.log(this.itemarray[id].city);
    this.commonService.triggerUpdate.next(id);
  }
}
