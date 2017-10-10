import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {HttpSerService} from "../_services/http/http-ser.service";

@Component({
  selector: 'app-all-devices',
  templateUrl: './all-devices.component.html',
  styleUrls: ['./all-devices.component.css']
})
export class AllDevicesComponent implements OnInit {

  //Initialize vars
  slug: string;
  private sub: any;
  req = {"r": "GetAllDevices"};
  private devicesJSONList: any;

  //constructor
  constructor(private router: Router, private route: ActivatedRoute, private _sanitizer: DomSanitizer, private _httpService: HttpSerService) {
  }

  //Call method into ngOnInit when this page is loading
  ngOnInit() {
    this.GetAllDevices(this.req);
  }

  GetAllDevices(req) {

    //POST method request
    this._httpService.postMethod(req)
      .subscribe(
        response => {

          //print post method response
          console.log(response);

          //if post response is succesful, transfers into devicesJSONList the result, else redirects at page-not-found
          if (response['response']) {
            this.devicesJSONList = JSON.parse(response["DevicesList"]);
          }
          else
            this.router.navigate(['/page-not-found']);
        }
      );
  }

}
