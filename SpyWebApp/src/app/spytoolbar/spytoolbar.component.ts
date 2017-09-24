import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spytoolbar',
  templateUrl: './spytoolbar.component.html',
  styleUrls: ['./spytoolbar.component.css']
})
export class SpytoolbarComponent implements OnInit {

  constructor() { }
  ngOnInit() { }

  title = 'SpyWebApp';

  MenuList = [
    {slug: "home", title: "Home", icon: "home"}, {slug: "sheets", title: "Risultati", icon: "pie_chart"}
  ];
}
