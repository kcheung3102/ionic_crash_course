import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

const STORAGE_KEY = 'favoriteFilms';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  constructor(private storage: Storage) {
  this.init();
  }
      private _storage: Storage | null = null;

        async init() {
          // If using, define drivers here: await this.storage.defineDriver(/*...*/);
          const storage = await this.storage.create();
          this._storage = storage;
        }

    getAllFavoriteFilms() {
      return this._storage.get(STORAGE_KEY);
    }

    isFavorite(filmId) {
      return this.getAllFavoriteFilms().then(result => {
        return result && result.indexOf(filmId) !== -1;
      });
    }

    favoriteFilm(filmId) {
      return this.getAllFavoriteFilms().then(result => {
        if (result) {
          result.push(filmId);
          return this._storage.set(STORAGE_KEY, result);
        } else {
          return this._storage.set(STORAGE_KEY, [filmId]);
        }
      });
    }

    unfavoriteFilm(filmId) {
      return this.getAllFavoriteFilms().then(result => {
        if (result) {
          var index = result.indexOf(filmId);
          result.splice(index, 1);
          return this._storage.set(STORAGE_KEY, result);
        }
      });
    }

}
