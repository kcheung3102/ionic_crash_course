import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.page.html',
  styleUrls: ['./people-details.page.scss'],
})
export class PeopleDetailsPage implements OnInit {
  person: any;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      this.api.getPerson(id).subscribe(res => {
        this.person = res;
      });
  }

}
