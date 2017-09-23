import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-spy-content',
  templateUrl: './spy-content.component.html',
  styleUrls: ['./spy-content.component.css']
})
export class SpyContentComponent implements OnInit {


  ngOnInit() { }

  title = 'SpyWebApp';

  myData: Array<any>;

  constructor(private http:Http) {

    this.http.get('https://jsonplaceholder.typicode.com/photos')
      .map(response => response.json())
      .subscribe(res => this.myData = res);

  }

}
