import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {HttpSerService} from "../_services/http/http-ser.service";

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  slug: string;
  private sub: any;
  req = {};
  private devicesList: any;

  constructor(private router: Router, private route: ActivatedRoute, private _sanitizer: DomSanitizer, private _httpService: HttpSerService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.slug = params['brand'];
      this.req = {"r": "GetIMEIWithSlug", "s": this.slug};
      this.devicesList = this.getIMEIWithSlug(this.req);
    });
  }

  getIMEIWithSlug(req) {
    this._httpService.postMethod({js_object: req})
      .subscribe(
        response => {
          console.log(response);
          if (response['response']) {
            let devicesJSONList = JSON.parse(response["IMEIList"]);
            for (let devices of devicesJSONList) {
              let device = devices["stats"]["BuildInfo"]["Manufacturers"]["devices"];
              for (let brand of device) {
                if (brand["Brand"] == this.slug)
                  this.devicesList = brand["IMEI"];
              }
            }
            console.log(this.devicesList);
          }
          else
            this.router.navigate(['/page-not-found']);
        }
      );
  }

}
