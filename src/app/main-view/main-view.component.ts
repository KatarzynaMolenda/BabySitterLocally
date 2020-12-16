import {Component} from '@angular/core';
import {CreateBabysitterComponent} from '../create-babysitter/create-babysitter.component';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './main-view.component.html'
})
export class MainViewComponent {

  constructor(public httpClient: HttpClient) {
  }

  onButtonClick(): void {
    console.log('Kliknięto przycisk');
  }

}
