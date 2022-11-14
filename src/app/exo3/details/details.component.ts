import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

import { Transaction } from '../../transaction';
import data from '../../../assets/data/transactions.json';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  transactions: Transaction[] = data;
  transactionInfo: any;

  constructor(private _httpClient: HttpClient, private location: Location) { }

  ngOnInit(): void {
    this.getDetails(window.location.href.substring(window.location.href.lastIndexOf('/') + 1))
  }

  getDetails(id: any) {
    const url: string = `/assets/data/${id}.json`;
    this._httpClient.get(url).subscribe((response) => {
      this.transactionInfo = response;
    })
  }

  goBack() {
    this.location.back();
  }
}
