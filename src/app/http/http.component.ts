import { Component, OnInit } from '@angular/core';

import { HttpModule, Http, Response, RequestOptions, Headers} from '@angular/http';

@Component({
  selector: 'http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  display_value: string;
  loading: boolean;
  constructor(private http: Http) {
    this.http.request('http://jsonplaceholder.typicode.com/posts/1')
    .subscribe((res:Response)=>{
      this.display_value = res.json().title;
    })
   }

  ngOnInit() {
  }

}
4
