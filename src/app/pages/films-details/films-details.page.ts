import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { FavoriteService } from 'src/app/services/favorite.service';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-films-details',
  templateUrl: './films-details.page.html',
  styleUrls: ['./films-details.page.scss'],
})
export class FilmsDetailsPage implements OnInit {
  film: any;
  isFavorite = false;
  filmId = null;

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private emailComposer: EmailComposer, private favoriteService: FavoriteService) { }

    ngOnInit() {
      this.filmId = this.activatedRoute.snapshot.paramMap.get('id');

      this.api.getFilm(this.filmId).subscribe(res => {
        this.film = res;
      });

      this.favoriteService.isFavorite(this.filmId).then(isFav => {
        this.isFavorite = isFav;
      });
    }

    favoriteFilm() {
      this.favoriteService.favoriteFilm(this.filmId).then(() => {
        this.isFavorite = true;
      });
    }

    unfavoriteFilm() {
      this.favoriteService.unfavoriteFilm(this.filmId).then(() => {
        this.isFavorite = false;
      });
    }
}
