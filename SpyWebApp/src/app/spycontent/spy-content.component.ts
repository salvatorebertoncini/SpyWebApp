import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import {HttpSerService} from "../_services/http/http-ser.service";

@Component({
  selector: 'app-spy-content',
  templateUrl: './spy-content.component.html',
  styleUrls: ['./spy-content.component.css']
})
export class SpyContentComponent implements OnInit {

  devicesList = [];
  devicesError = [
    {
      title: "Qualcosa non è andata per il verso giusto :("
    }
  ];

  req = {"r": "WebAppAllDevices"};

  constructor(private _httpService: HttpSerService) { }
  ngOnInit() { this.getAllDevices() }

  getAllDevices ()
  {
    this._httpService.postMethod({js_object: this.req})
      .subscribe(
        response =>
        {
          console.log(response);
          if (response['response'])
            this.devicesList = response['devicesList'];
          else
            this.devicesList = this.devicesError;
        }
      );
  }

}
