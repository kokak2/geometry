import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-koka',
  templateUrl: './koka.component.html',
  styleUrls: ['./koka.component.css']
})
export class KokaComponent implements OnInit {
  constructor() { }
  bazer=1;
  shecvaleukve(){
    this.bazer=1+this.bazer
  };
  sataur='esaa satauri';
  ngOnInit(): void {
  console.log(this.bazer)
  }
}
