import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-films-details',
  templateUrl: './films-details.page.html',
  styleUrls: ['./films-details.page.scss'],
})
export class FilmsDetailsPage implements OnInit {
  filmId = null;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.filmId = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
