import { NewsService } from './services/news.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newsapp';

  constructor(private news:NewsService)
  {
    this.news.getNews().subscribe((data)=>{
      console.log(data)
    })
  }
}
