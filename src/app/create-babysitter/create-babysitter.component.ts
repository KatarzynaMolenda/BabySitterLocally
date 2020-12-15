import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Babysitter} from '../model/babysitter';
import {BabysitterService} from '../services/babysitter.service';

@Component({
  selector: 'app-create-babysitter',
  templateUrl: './create-babysitter.component.html',
  styleUrls: ['./create-babysitter.component.css']
})
export class CreateBabysitterComponent implements OnInit {
  babySitter: Babysitter = {id: 0, firstName: '', lastName: '', phoneNumber: 0, primaryEmail: ''};
  babysitterId = this.activatedRoute.snapshot.params.babysitterId;
  newBabysitter: any;

  constructor(private activatedRoute: ActivatedRoute,
              private babysitterService: BabysitterService) {
  }

  ngOnInit(): void {
    this.babysitterService.getBabysitter(this.babySitter, this.babysitterId);
  }

  createBabysitter() {

  }
}
