import {Component, OnInit} from '@angular/core';
import {Babysitter} from './model/babysitter';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: 'BabySitterLocally';
}
