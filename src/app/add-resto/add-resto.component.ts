import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { List } from '../Models/List';
import { RestoService } from '../services/resto.service';


@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  alert: boolean = false;
  addResto = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('')
  })

  constructor(private resto: RestoService) { }

  ngOnInit(): void {
  }
   
  collectResto()
  {
      this.resto.saveRestro(this.addResto.value).subscribe((result)=>{   });
     this.alert=true;
     this.addResto.reset({});
  }

  // tslint:disable-next-line: typedef
  closeAlert()
  {
    this.alert = false;
  }

}
