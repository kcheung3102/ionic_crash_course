import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-films-details',
  templateUrl: './films-details.page.html',
  styleUrls: ['./films-details.page.scss'],
})
export class FilmsDetailsPage implements OnInit {
  film: any;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private api:ApiService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getFilm(id).subscribe(res => {
      this.film = res;
    });
  }

}
