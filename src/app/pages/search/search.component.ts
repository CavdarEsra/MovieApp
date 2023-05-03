import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  @Output()
    appSearch = new EventEmitter<boolean>();
  makeSearch(){
    this.appSearch.emit(true);
  }

  constructor(private service:MovieApiServiceService){}

    ngOnInit(): void{
    }
    noResults:boolean=false;
    searchResult:any;
    searchForm=new FormGroup({
      'movieName': new FormControl(null)
    });

    //inputa girilen değeri apıden gelen verilerimiz içinde arar ve varsa bulduklarını döndürür
    submitForm(event:Event)
    {
    event.preventDefault();
      console.log(this.searchForm.value, 'searchform#');
      this.service.getSearchMovie(this.searchForm.value).subscribe((result) =>{
        console.log(result, 'searchmovie#');
        if (result.results.length === 0) { // arama sonuçları yoksa
          this.noResults = true; // noResults değişkenini true yapsın
          this.searchResult = null;
        } else {
          this.noResults = false; // varsa false
          this.searchResult = result.results;
        }
      });
    }
}
