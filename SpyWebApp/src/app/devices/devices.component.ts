import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {HttpSerService} from "../_services/http/http-ser.service";

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {


  slug: string;
  private sub: any;
  req = {};
  private DevicesList: any;

  constructor(private router: Router, private route: ActivatedRoute, private _sanitizer: DomSanitizer, private _httpService: HttpSerService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.slug = params['slug'];
      this.req = {"r": "GetDevicesWithSlug", "slug": this.slug};
      this.DevicesList = this.GetDevicesWithSlug(this.req);
    });
  }

  GetDevicesWithSlug(req) {
    this._httpService.postMethod(req)
      .subscribe(
        response => {
          console.log(response);
          if (response['response']) {
            this.DevicesList = JSON.parse(response["DevicesList"]);
            console.log(this.DevicesList);
          }
          else
            this.router.navigate(['/page-not-found']);
        }
      );
  }

}
