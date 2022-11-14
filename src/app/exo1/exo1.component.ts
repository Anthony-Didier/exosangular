import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrls: ['./exo1.component.css']
})
export class Exo1Component implements OnInit {
  message: string = "";
  defaultFont: string = "Times New Roman";
  defaultFontSize: string = "14px";
  defaultTextAlign: string = "left";

  constructor() { }

  ngOnInit(): void {

  }

  showMessage(name: string) {
    this.message = "Bonjour " + name.toUpperCase() + " !"
    return this.message;
  }

  changeFont(font: any) {
    this.defaultFont = font;
  }

  changeFontSize(fontSize: any) {
    this.defaultFontSize = fontSize + 'px';
  }

  changeTextAlign(textAlign: any) {
    this.defaultTextAlign = textAlign;
  }
}
