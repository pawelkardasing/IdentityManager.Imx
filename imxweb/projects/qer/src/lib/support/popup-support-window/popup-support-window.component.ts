import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'ccc-popup-support-window',
  templateUrl: './popup-support-window.component.html',
  styleUrls: ['./popup-support-window.component.scss']
})
export class PopupSupportWindowComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  closeWindow() {
    this.dialog.closeAll()
  }
}