import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  //servisi oluşturduk. 2.olarak app.module.ts dosyasında HttpClientModule (HTTP protokolü aracılığıyla sunucu ile iletişim kurmak için kullanılan bir modüldür) ü import ettik ve providers dizisi içine MovieApiServiceService i yani oluşturduğumuz servisin adını ekledik. Son olarak service.ts dosyamıza da HttpClient import ettik
  constructor(private http: HttpClient) { }

  API_URL=environment.API_URL;
  API_KEY=environment.API_KEY;

  private getData<T>(uri: string): Observable<T> { return this.http.get<T>(uri) }

  //Observable, bir kaynaktan veri akışı yapar ve bu verileri dinleyicilere iletir.

  getTrendingMovieApiData(): Observable<any> {
    return this.getData(`${this.API_URL}/trending/movie/day?api_key=${this.API_KEY}`);
  }
  getSearchMovie(data: any): Observable<any> {
    return this.getData(`${this.API_URL}/search/movie?api_key=${this.API_KEY}&query=${data.movieName}`);
  }

  //sinemalarda hangi filmler var
  getUpComingMovies(): Observable<any> {
    return this.getData((`${this.API_URL}/movie/upcoming?api_key=${this.API_KEY}&language=en-US&page=6`));
  }
  //derecelendirmede en yüksek puanı alanlar
  getTopRatedMovies(): Observable<any> {
    return this.getData((`${this.API_URL}/discover/movie?api_key=${this.API_KEY}&language=en-US&sort_by=vote_average.desc&page=5`));
  }
  //en popular filmler
  getMostPopularMovies(): Observable<any> {
    return this.getData(`${this.API_URL}/discover/movie?api_key=${this.API_KEY}&sort_by=popularity.desc&page=4`);
  }
  //cast:oyuncular
  getMovieCast(data: any): Observable<any> {
    return this.getData((`${this.API_URL}/movie/${data}/credits?api_key=${this.API_KEY}`));
  }


  //film detaylarına bunun özelliklerini kullarak eriştim(overview gibi)
  getMovieDetails(data: any): Observable<any> {
    return this.getData(`${this.API_URL}/movie/${data}?api_key=${this.API_KEY}`);
  }
  //film yorumları
  getMovieReviews(movieId: any): Observable<any> {
    return this.getData(`${this.API_URL}/movie/${movieId}/reviews?api_key=${this.API_KEY}`);
  }
  getMovieVideo(data: any): Observable<any> {
    return this.getData(`${this.API_URL}/movie/${data}/videos?api_key=${this.API_KEY}`);
  }

  //aksiyon türündeki filmleri getir. Örnek sadece
  // fetchActionMovies(): Observable<any> {
  //   return this.getData(`${this.API_URL}/discover/movie?api_key=${this.API_KEY}&with_genres=28`);
  // }
}
