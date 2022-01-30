import { Component, OnInit, inject, Inject } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';


import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent  {

  constructor(public dialog: MatDialog) {}

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
  constructor(@Inject(MAT_DIALOG_DATA)public data:any) {
  this.lastName = data.name
  this.ketName = data.keterangan

  }

  ngOnInit(): void {
      
  }
}
