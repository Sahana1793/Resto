import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestoService } from '../services/resto.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  alert: boolean = false;
  editResto = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('')
  })
  constructor(private router: ActivatedRoute,private resto: RestoService) { }

  ngOnInit(): void {
    this.resto.getResto(this.router.snapshot.params.id).subscribe((result)=>{
      this.editResto = new FormGroup({
        name: new FormControl(result['name']),
        address: new FormControl(result['address']),
        email: new FormControl(result['email'])
      })
     }
    )
  }

  collection()
  {
    this.resto.updateResto(this.router.snapshot.params.id,this.editResto.value).subscribe((result)=>{ })
    this.alert=true;
    this.editResto.reset({});

  }
  closeAlert()
  {
    this.alert = false;
  }

}
