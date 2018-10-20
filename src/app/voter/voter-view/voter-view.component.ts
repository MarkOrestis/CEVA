import { Component, OnInit } from '@angular/core';
import { EventService } from '../../event.service';

@Component({
  selector: 'app-voter-view',
  templateUrl: './voter-view.component.html',
  styleUrls: ['./voter-view.component.scss']
})
export class VoterViewComponent implements OnInit {

  tabIndex = 0;
  public selectedVal: string;
  constructor(private eventSvc: EventService) {
    this.selectedVal = this.eventSvc.getVoterViewingSession();
  }

  ngOnInit() {
    this.selectedVal = 'option1';
  }
  public onValChange(val: string) {
    this.selectedVal = val;
    if (val === 'option1') {
      this.eventSvc.changeVoterViewingSession('am');
    } else if (val === 'option2') {
      this.eventSvc.changeVoterViewingSession('pm');
    }
  }

  setTabIndex(index) {
    this.tabIndex = index;
  }
}
