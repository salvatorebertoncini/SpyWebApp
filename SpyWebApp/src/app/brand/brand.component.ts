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
  private IMEIList: any;
  private brand: any;
  private number: any;
  private model: any;

  constructor(private router: Router, private route: ActivatedRoute, private _sanitizer: DomSanitizer, private _httpService: HttpSerService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.slug = params['brand'];
      this.req = {"r": "GetIMEIWithSlug", "slug": this.slug};
      this.getIMEIWithSlug(this.req);
    });
  }

  getIMEIWithSlug(req) {
    this._httpService.postMethod(req)
      .subscribe(
        response => {
          console.log(response);
          if (response['response']) {
            let devicesJSONList = JSON.parse(response["IMEIList"]);

            this.IMEIList = devicesJSONList["IMEI"];
            this.brand = devicesJSONList["Brand"];
            this.number = devicesJSONList["Number"];
            this.model = devicesJSONList["Model"];
          }
          else
            this.router.navigate(['/page-not-found']);
        }
      );
  }

}
