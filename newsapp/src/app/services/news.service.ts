import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  getNews(){
    return this.http.get('https://inshortsapi.vercel.app/news?category=science')
  }
}
