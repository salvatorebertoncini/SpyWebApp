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

  //Initialize vars
  slug: string;
  private sub: any;
  req = {};
  private IMEIList: any;
  private brand: any;
  private number: any;
  private model: any;

  //Constructors
  constructor(private router: Router, private route: ActivatedRoute, private _sanitizer: DomSanitizer, private _httpService: HttpSerService) {
  }

  //Call method into ngOnInit when this page is loading
  ngOnInit() {
    //Grub brand params from URL and send it into POST request
    this.sub = this.route.params.subscribe(params => {
      this.slug = params['brand'];
      this.req = {"r": "GetIMEIWithSlug", "slug": this.slug};
      this.getIMEIWithSlug(this.req);
    });
  }

  getIMEIWithSlug(req) {

    //POST method request
    this._httpService.postMethod(req)
      .subscribe(
        response => {

          //print post method response
          console.log(response);

          //if post response is succesful, transfers into devicesJSONList the result, else redirects at page-not-found
          if (response['response']) {
            let devicesJSONList = JSON.parse(response["IMEIList"]);

            //Set every vars
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
