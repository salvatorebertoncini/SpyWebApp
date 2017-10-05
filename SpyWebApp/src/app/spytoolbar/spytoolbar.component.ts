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
    {slug: "home", title: "Home", icon: "home"},
    {slug: "brands", title: "Brands", icon: "android"},
    {slug: "users", title: "Users", icon: "face"},
    {slug: "devices", title: "Devices", icon: "stay_primary_portrait"},
    {slug: "stats", title: "Stats", icon: "pie_chart"}
  ];
}
