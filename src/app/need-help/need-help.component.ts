import {Component, OnInit} from '@angular/core';
import {CreateBabysitterComponent} from '../create-babysitter/create-babysitter.component';

@Component({
  selector: 'app-need-help',
  templateUrl: './need-help.component.html',
  styleUrls: ['./need-help.component.css']
})
export class NeedHelpComponent extends CreateBabysitterComponent implements OnInit {
  ngOnInit(): void {
    this.getBabysitters();
  }

}
