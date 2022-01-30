import { Component, OnInit, inject, Inject } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent  {
  lahBos;
  okLur;
  constructor(private dialog: MatDialog) {
   this.lahBos = 'Ok BOS';
  
   const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
   let text = "";
   for (let i = 0; i < cars.length; i++) {
    text += cars[i]+' ';
    this.okLur = text
   }  
}


  openDialog() {
    this.dialog.open(ButtonComponentDialog,{
      data : {
        name : 'Pengalaman IT',
        keterangan : 'Rahma Syndu Grananta'
      }
    });
  }
}

@Component({
  selector: 'button.component.dialog',
  templateUrl: './button.component.dialog.html',
})

export class ButtonComponentDialog implements OnInit{
  lastName;
  ketName;
  hasilNya;

  constructor(@Inject(MAT_DIALOG_DATA)private data:any) {
  this.lastName = data.name
  this.ketName = data.keterangan

  // simple statement 
  const namasaya = 'Rahma Syndu Grananta';
  if (this.ketName == namasaya)
  {      
    this.hasilNya = "Benar"
  }else {
  this.hasilNya = "Salah"
  }
}
 
  ngOnInit(): void {
 }
}

