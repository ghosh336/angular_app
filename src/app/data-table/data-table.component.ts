import { Component, OnInit } from '@angular/core';
import { Process } from '../process'

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.less']
})
export class DataTableComponent implements OnInit {

  constructor() {
  }

  //  console.log("Count Complete : " + this.countComplete);

  ngOnInit() {
      this.countProcess();
  }


  processList = [
    {name:'BPM Process',status:'Complete',startDate: '28-Jun-2018',state:'Critical',endDate:'04-Jul-2018',startedBy:'Subhashish Ghosh',cost:'28 Euro'},
    {name:'Mainframe Process',status:'Running',startDate: '16-Sep-2018',state:'Info',endDate:'09-Oct-2018',startedBy:'Tom Haris',cost:'36 Euro'},
    {name:'Angular Process',status:'Failed',startDate: '25-Nov-2018',state:'Warning',endDate:'26-Nov-2018',startedBy:'Den Kim',cost:'49 Euro'},
    {name:'SRM Process',status:'Pending',startDate: '23-Sep-2018',state:'Critical',endDate:'28-Sep-2018',startedBy:'John Wax',cost:'12 Euro'},
    {name:'CISCO Process',status:'Complete',startDate: '10-Dec-2018',state:'Critical',endDate:'15-Dec-2018',startedBy:'Samol Dem',cost:'08 Euro'},
    {name:'Internal Process',status:'Failed',startDate: '20-Dec-2018',state:'Alert',endDate:'22-Dec-2018',startedBy:'Tony Alex',cost:'18 Euro'},
    {name:'Batch Process',status:'Running',startDate: '12-Oct-2018',state:'Alert',endDate:'16-Oct-2018',startedBy:'Xen Pins',cost:'21 Euro'},
    {name:'MAC Process',status:'Running',startDate: '21-Aug-2018',state:'Info',endDate:'22-Aug-2018',startedBy:'Maria Robert',cost:'34 Euro'},
    {name:'Customer Process',status:'Failed',startDate: '31-Oct-2018',state:'Warning',endDate:'09-Nov-2018',startedBy:'Den Alex',cost:'56 Euro'},
    {name:'Random Process',status:'Complete',startDate: '11-Sep-2018',state:'Critical',endDate:'12-Sep-2018',startedBy:'Kim Shan',cost:'61 Euro'},
    {name:'Init Process',status:'Complete',startDate: '13-Sep-2018',state:'Complete',endDate:'15-Sep-2018',startedBy:'Sen Shan',cost:'65 Euro'}
];


selectedProcess={};
updateSelectedProcess(prcs: Process){
 this.selectedProcess = prcs;
}


//======= Counters ==========

countRunning  = 0;
countFailed   = 0;
countPending  = 0;
countComplete  = 0;

countCritical = 0;
countInfo     = 0;
countWarning  = 0;
countAlert    = 0;


countRunningPer  = 0;
countFailedPer   = 0;
countPendingPer  = 0;
countCompletePer  = 0;

countCriticalPer = 0;
countInfoPer     = 0;
countWarningPer  = 0;
countAlertPer    = 0;

//======== Counters ========


countProcess(){
  let i=0;

  for (let i=0; i< this.processList.length; i++)
  {
    if (this.processList[i].status == "Running")
    {
      this.countRunning ++;
    }

    if (this.processList[i].status == "Failed")
    {
      this.countFailed ++;
    }

    if (this.processList[i].status == "Pending")
    {
      this.countPending ++;
    }

    if (this.processList[i].status == "Complete")
    {
      this.countComplete ++;
    }


    if (this.processList[i].state == "Critical")
    {
      this.countCritical ++;
    }

    if (this.processList[i].state == "Info")
    {
      this.countInfo ++;
    }

    if (this.processList[i].state == "Warning")
    {
      this.countWarning ++;
    }


    if (this.processList[i].state == "Alert")
    {
      this.countAlert ++;
    }

  }

  this.countRunningPer  = (this.countRunning / (this.countRunning + this.countComplete + this.countFailed + this.countPending) ) * 100;
  this.countCompletePer = (this.countComplete / (this.countRunning + this.countComplete + this.countFailed + this.countPending) ) * 100;
  this.countFailedPer  = (this.countFailed / (this.countRunning + this.countComplete + this.countFailed + this.countPending) ) * 100;
  this.countPendingPer  = (this.countPending / (this.countRunning + this.countComplete + this.countFailed + this.countPending) ) * 100;

  this.countCriticalPer  = (this.countCritical / (this.countCritical + this.countInfo + this.countWarning + this.countAlert) ) * 100;
  this.countInfoPer  = (this.countInfo / (this.countCritical + this.countInfo + this.countWarning + this.countAlert) ) * 100;
  this.countWarningPer  = (this.countWarning / (this.countCritical + this.countInfo + this.countWarning + this.countAlert) ) * 100;
  this.countAlertPer  = (this.countAlert / (this.countCritical + this.countInfo + this.countWarning + this.countAlert) ) * 100;


  console.log("countRunning: "  + this.countRunning);
  console.log("countComplete: "  + this.countComplete);
  console.log("countFailed: "   + this.countFailed);
  console.log("countPending: "  + this.countPending);
  console.log("this.countRunningPer : " + this.countRunningPer );
  console.log("this.countCompletePer "     + this.countCompletePer);
  console.log("this.countFailedPer : "  + this.countFailedPer );
  console.log("this.countPendingPer : "    + this.countPendingPer);
}


}
