import { Component, OnInit } from '@angular/core';
import { Router, RouterLink} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit  {
  constructor(private Router:Router){}
  ngOnInit(): void 
  {
    console.log("Url",window.location.href); 
  }
  title = 'CarFixer';

}
