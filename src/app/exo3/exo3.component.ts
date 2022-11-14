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

  constructor() { }

  ngOnInit(): void {
    // for (let i = 0; i < this.transactions.length; i++) {
    //   var date = new Date(this.transactions[i].date);

    //   var day = ('0' + date.getDate()).slice(-2);
    //   var month = ('0' + Number(date.getMonth() + 1)).slice(-2);
    //   var year = date.getFullYear();
    //   var hour = ('0' + date.getHours()).slice(-2);
    //   var minute = ('0' + date.getMinutes()).slice(-2);
    //   var second = ('0' + date.getSeconds()).slice(-2);

    //   var newDate = day + "/" + month + "/" + year + " | " + hour + ":" + minute + ":" + second
    //   this.transactions[i].date = newDate;
    // }
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
