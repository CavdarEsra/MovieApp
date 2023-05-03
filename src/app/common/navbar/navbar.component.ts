import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navbg:any;
  //scrollu hareket ettirdiğimizde navbarın arkaplan rengi değişir
  @HostListener('document:scroll') scrollover(){
    console.log(document.body.scrollTop, 'scrollength#');
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
        this.navbg = { 'background-color':'#000' }
    else
      this.navbg = { }
  }
}
