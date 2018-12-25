import { Component, OnInit, Input } from '@angular/core';
import { Process } from '../process';

@Component({
  selector: 'app-data-details',
  templateUrl: './data-details.component.html',
  styleUrls: ['./data-details.component.less']
})
export class DataDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() currSelProcess : Process;

}
