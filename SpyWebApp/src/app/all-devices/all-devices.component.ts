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

  slug: string;
  private sub: any;
  req = {"r": "GetAllDevices"};
  private devicesJSONList: any;

  constructor(private router: Router, private route: ActivatedRoute, private _sanitizer: DomSanitizer, private _httpService: HttpSerService) {
  }

  ngOnInit() {
    this.GetAllDevices(this.req);
  }

  GetAllDevices(req) {
    this._httpService.postMethod(req)
      .subscribe(
        response => {
          console.log(response);
          if (response['response']) {
            this.devicesJSONList = JSON.parse(response["DevicesList"]);
          }
          else
            this.router.navigate(['/page-not-found']);
        }
      );
  }

}
