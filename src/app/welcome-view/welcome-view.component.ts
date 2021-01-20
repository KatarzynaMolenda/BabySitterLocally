import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome-view.component.html',
  styleUrls: ['./welcome-view.component.css']

})

export class WelcomeViewComponent {
  constructor(public httpClient: HttpClient) {
  }
}


