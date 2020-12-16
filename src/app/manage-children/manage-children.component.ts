import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {ChildService} from '../services/child.service';

@Component({
  selector: 'app-manage-children',
  templateUrl: './manage-children.component.html'
})

export class ManageChildrenComponent extends ChildService implements OnInit  {
  constructor(public httpClient: HttpClient, private activeRoute: ActivatedRoute, private router: Router) {
    super(httpClient);
  }

  ngOnInit(): void {
    this.loadData();
  }

}
