import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.css']
})
export class Exo2Component implements OnInit {
  nb1: number = 0;
  nb2: number = 0;
  defaultOp: string = "+";
  result: number | undefined;
  operation: string = "";
  operations: string[] = [];
  id: number = 0;

  constructor() { }

  ngOnInit(): void {

  }

  calculate(nb1: number, op: string, nb2: number, operation: string) {
    if (op === "+") {
      this.result = nb1 + nb2;
    } else if (op === "-") {
      this.result = nb1 - nb2;
    } else if (op === "x") {
      this.result = nb1 * nb2;
    } else if (op === "/") {
      this.result = nb1 / nb2;
    }

    var now = new Date()

    var day = ('0' + now.getDate()).slice(-2);
    var month = ('0' + Number(now.getMonth() + 1)).slice(-2);
    var year = now.getFullYear();
    var hour = ('0' + now.getHours()).slice(-2);
    var minute = ('0' + now.getMinutes()).slice(-2);
    var second = ('0' + now.getSeconds()).slice(-2);

    this.id++;

    operation = "Operation n°" + this.id + " : " + nb1 + " " + op + " " + nb2 + " = " + this.result + " | " + day + "/" + month + "/" + year + " at " + hour + ":" + minute + ":" + second;
    this.operations.push(operation);
  }

  delete(operation: string) {
    var index = this.operations.indexOf(operation);
    if (index !== -1) {
      this.operations.splice(index, 1);
    }
  }
}
