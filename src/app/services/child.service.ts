import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Child} from '../model/child';


@Injectable({
  providedIn: 'root'
})

export class ChildService implements OnInit {
  constructor(public httpClient: HttpClient) {
  }

  newChild: Child = {
    id: 0,
    firstName: '',
    lastName: '',
    birthDate: ''
  };

  children: Child[] = [{
    firstName: 'Kasia',
    lastName: 'Molenda',
    birthDate: '27-07-2007'
  },
    {
      firstName: 'Marcin',
      lastName: 'Nowak',
      birthDate: '01-02-2005'
    }];

  private url = 'http://localhost:8080/child';

  // tslint:disable-next-line:contextual-lifecycle
  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.httpClient.get<Child[]>('http://localhost:8080/child/getByUser')
      .subscribe(children => this.children = children);
  }

  delete(id: number): void {
    this.httpClient.delete(this.url + '/' + id)
      .subscribe(() => this.loadData());
  }

  createChild(): void {
    this.httpClient.post<Child>('http://localhost:8080/child/addForLoggedUser', this.newChild)
      .subscribe(() => this.loadData());
  }

  getChild(child: Child, id: number): void {
    this.httpClient.get<Child>(this.url + id)
      .subscribe(childFromHttps => child = childFromHttps);

  }
}
