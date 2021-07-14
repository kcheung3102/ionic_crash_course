import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  people: Observable<any>;

  constructor(private http: HttpClient, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.people = this.api.getPeople();
    this.people.subscribe(data => {
      console.log('my data: ', data);
    });
  }

  getPersonDetails(person) {
    const split = person.url.split('/');
    const personId = split[split.length-2];
    console.log(personId);
    this.router.navigateByUrl(`/tabs/people/${personId}`);
  }

}
