import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map'
import {HttpSerService} from "../_services/http/http-ser.service";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-spy-content',
  templateUrl: './spy-content.component.html',
  styleUrls: ['./spy-content.component.css']
})
export class SpyContentComponent implements OnInit {

  devicesList = [];

  req = {"r": "WebAppAllDevices"};

  constructor(private _httpService: HttpSerService) { }
  ngOnInit()
  {
    this.getAllDevices();
  }

  getAllDevices ()
  {
    this._httpService.postMethod(this.req)
      .subscribe(
        response =>
        {
          console.log(response);
          if (response["response"])
          {
            this.devicesList = JSON.parse(response["devicesList"]);
            console.log(this.devicesList);
          }
          else {
            this.devicesList.push({Brand: "Qualcosa non è andata per il verso giusto :("});
          }
        }
      );
  }

}
