import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { Inject } from '@angular/core';


@Component({
  selector: 'ccc-popup-support-window',
  templateUrl: './popup-support-window.component.html',
  styleUrls: ['./popup-support-window.component.scss']
})
export class PopupSupportWindowComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<PopupSupportWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  closeWindow() {
    localStorage.setItem('newsLast', this.data.newsDBdate);
  }
}