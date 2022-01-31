import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apiku',
  templateUrl: './apiku.component.html',
  styleUrls: ['./apiku.component.css']
})
export class ApikuComponent implements OnInit{
 
  title = 'dataTableDemo';
 
  dtOptions: DataTables.Settings = {};
  posts: any;
 
  constructor(private http: HttpClient) {
 
    this.http.get('http://jsonplaceholder.typicode.com/posts')
      .subscribe(posts => {
        this.posts = posts;
    }, error => console.error(error));
  }
 
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }
}