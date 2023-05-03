import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searched : boolean = false;

  constructor(private http:HttpClient, private service:MovieApiServiceService) {}

  //home sayfasında çağrılan search inputunda arama yapıldığında homedaki veriler gösterilmeye devam ettiği için onunla ilgili düzeltmelerin bir parçası(arama yapıldığında home temizlenir)
  getSearchStatus(status: boolean){
    this.searched = status;
  }
  trendingMovieResult:any=[];
  upComingResult:any=[];
  topRatedResult:any=[];
  mostPopularResult:any=[];
  //actionMovieResult:any=[];


    ngOnInit(): void{
      this.trendingData();
      this.upComingData();
      this.topRatedData();
      this.mostPopularData();
      //this.actionMovie();
    }
    //subscribe() fonksiyonu, bir Observable nesnesindeki veri akışını dinleyerek, Observable'dan yayınlanan verileri alır ve işler.

    trendingData(){
      this.service.getTrendingMovieApiData().subscribe((result)=> this.trendingMovieResult= result.results);
    }
    upComingData(){
      this.service.getUpComingMovies().subscribe((result)=> this.upComingResult=result.results);
    }
    topRatedData(){
      this.service.getTopRatedMovies().subscribe((result)=> this.topRatedResult=result.results);
    }
    mostPopularData(){
      this.service.getMostPopularMovies().subscribe((result)=> this.mostPopularResult=result.results);
    }
  }


    // actionMovie(){
    //   this.service.fetchActionMovies().subscribe((result)=>{
    //     console.log(result, 'actionmovies#');
    //     this.actionMovieResult=result.results;
    //   });
    // }
