import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import data from '../../assets/data/transactions.json';

@Component({
  selector: 'app-exo3',
  templateUrl: './exo3.component.html',
  styleUrls: ['./exo3.component.css']
})

export class Exo3Component implements OnInit {

  transactions: Transaction[] = data;
  myDate: Date | undefined;
  updatedDate: string = "";

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.myDate = new Date();
      var day = ('0' + this.myDate.getDate()).slice(-2);
      var month = ('0' + Number(this.myDate.getMonth() + 1)).slice(-2);
      var year = this.myDate.getFullYear();
      var hour = ('0' + this.myDate.getHours()).slice(-2);
      var minute = ('0' + this.myDate.getMinutes()).slice(-2);
      var second = ('0' + this.myDate.getSeconds()).slice(-2);

      this.updatedDate = day + "/" + month + "/" + year + " | " + hour + ":" + minute + ":" + second;
    }, 1000);
  }

  sortById() {
    this.transactions.sort((a, b) => (a.id > b.id) ? 1 : (a.id === b.id) ? ((a.id > b.id) ? 1 : -1) : -1)
  }

  sortByAmount() {
    this.transactions.sort((a, b) => (a.amount > b.amount) ? 1 : (a.amount === b.amount) ? ((a.amount > b.amount) ? 1 : -1) : -1)
  }

  sortByBalance() {
    this.transactions.sort((a, b) => (a.balance > b.balance) ? 1 : (a.balance === b.balance) ? ((a.balance > b.balance) ? 1 : -1) : -1)
  }

  sortByLabel() {
    this.transactions.sort((a, b) => (a.label > b.label) ? 1 : (a.label === b.label) ? ((a.label > b.label) ? 1 : -1) : -1)
  }

  sortByDate() {
    this.transactions.sort((a, b) => (a.date > b.date) ? 1 : (a.date === b.date) ? ((a.date > b.date) ? 1 : -1) : -1)
  }
}
