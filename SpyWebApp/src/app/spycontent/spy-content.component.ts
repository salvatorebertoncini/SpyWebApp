import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map'
import {HttpSerService} from "../_services/http/http-ser.service";

@Component({
  selector: 'app-spy-content',
  templateUrl: './spy-content.component.html',
  styleUrls: ['./spy-content.component.css']
})
export class SpyContentComponent implements OnInit {

  devicesList = [
    {
      title: "Qualcosa non è andata per il verso giusto :("
    }
  ];

  req = {"r": "WebAppAllDevices"};

  constructor(private _httpService: HttpSerService) { }
  ngOnInit()
  {
    this.getAllDevices();
    console.log("deviceList: ")
    console.log(this.devicesList);
  }

  getAllDevices ()
  {
    this._httpService.postMethod({js_object: this.req})
      .subscribe(
        response =>
        {
          console.log(response);
          if (response)
          {
            //let body = response.text();
            //body.json();
            console.log("ok");

            //this.devicesList = response['devicesList'];
          }
        }
      );
  }

}
