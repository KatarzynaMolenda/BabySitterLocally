import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: 'BabySitterLocally';

  constructor(private activeRoute: ActivatedRoute, private router: Router) {
  }

  logout(): void {
    localStorage.removeItem('authorizationHeader');
    // setTimeout!
    this.router.navigate([''])
      .then(() => location.reload());
  }

  checkIfLoggedIn(): boolean {
    return localStorage.getItem('authorizationHeader') !== null;
  }

}


