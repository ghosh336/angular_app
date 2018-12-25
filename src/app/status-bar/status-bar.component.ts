import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.less']
})
export class StatusBarComponent implements OnInit {

  constructor() { }


  @Input() ProcessCountComplete;
  @Input() ProcessCountPending;
  @Input() ProcessCountFailed;
  @Input() ProcessCountRunning;

  @Input() ProcessCountAlert;
  @Input() ProcessCountInfo;
  @Input() ProcessCountWarning;
  @Input() ProcessCountCritical;


  @Input() CountComplete;
  @Input() CountPending;
  @Input() CountFailed;
  @Input() CountRunning;

  @Input() CountAlert;
  @Input() CountInfo;
  @Input() CountWarning;
  @Input() CountCritical;

  aaa=20;
  bbb=30;
  ccc=40;
  ddd=10;

  ngOnInit() {
  }

}
