import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
//Angular'da ActivatedRoute, bir route (yol) sorgulaması için ek bilgi sağlar.

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  constructor(private service:MovieApiServiceService, private router:ActivatedRoute){}

  getMovieReviewsResult:any;
  getMovieDetailResult:any;
  getMovieCastResult:any;


  //snapshot özelliği, Router'ın anlık durumunu temsil eden bir nesne döndürür.
  //paramMap özelliği, bir URL'deki parametreleri içeren bir ParamMap nesnesi döndürür. Bu özellik, Router'ın anlık durumunda bulunan ActivatedRoute nesnesinin bir özelliğidir ve bu özellik, bileşene yönlendirme işlemi sırasında alınan parametreleri içerir.
  //snapshot ve paramMap özellikleri, Angular'in Router servisi tarafından sağlanan özelliklerdir ve bu özellikler sayesinde URL'lerdeki parametreleri alabiliriz.
  ngOnInit(): void {
    let getParamId=this.router.snapshot.paramMap.get('id');  //o anki urldeki id kısmını alır(seçilen filmin idsi)
    console.log(getParamId, 'getparamid#');

    this.getMovie(getParamId);
    this.getMovieCast(getParamId);
    this.getReview(getParamId);
  }
  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe((result)=> this.getMovieDetailResult=result);
  }
  getMovieCast(id:any){
    this.service.getMovieCast(id).subscribe((result)=> this.getMovieCastResult=result.cast);
  }
  getReview(id:any){
    this.service.getMovieReviews(id).subscribe((result)=> this.getMovieReviewsResult=result.results);
  }
}
