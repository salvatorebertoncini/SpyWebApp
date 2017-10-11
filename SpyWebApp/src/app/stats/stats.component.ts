import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {HttpSerService} from "../_services/http/http-ser.service";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  //Initialize vars
  private brandList: any;
  private AndroidVersionList: any;
  private loadBrandChart: boolean = false;
  private loadAndroidVersionChart: boolean = false;

  // Brand Pie
  public BrandDistributionChartLabels: string[] = [];
  public BrandDistributionChartData: number[] = [];
  public BrandDistributionChartType: string = 'pie';

  // Android Version Doughnut
  public AndroidVersionChartLabels: string[] = [];
  public AndroidVersionChartData: number[] = [];
  public AndroidVersionChartType: string = 'doughnut';

  // Constructor
  constructor(private router: Router, private route: ActivatedRoute, private _sanitizer: DomSanitizer, private _httpService: HttpSerService) {
  }

  //Call method into ngOnInit when this page is loading
  ngOnInit() {
    this.GetBrandStats();
    this.GetAndroidVersionStats();
  }

  GetBrandStats() {

    //Set the request
    let req = {"r": "BrandStats"};

    //POST method request
    this._httpService.postMethod(req)
      .subscribe(
        response => {

          //print post method response
          console.log(response);

          //if post response is succesful, transfers into brandList the result, else redirects at page-not-found
          if (response['response']) {
            this.brandList = JSON.parse(response["DevicesList"]);

            //fill the chart
            for (let brand of this.brandList) {
              this.BrandDistributionChartLabels.push(brand.Brand);
              this.BrandDistributionChartData.push(brand.counter);
            }

            //enable the chart
            this.loadBrandChart = true;

          }
          else
            this.router.navigate(['/page-not-found']);
        }
      );
  }

  GetAndroidVersionStats() {

    //set the request
    let req = {"r": "AndroidVersionStats"};

    //POST method request
    this._httpService.postMethod(req)
      .subscribe(
        response => {

          //print post method response
          console.log(response);

          //if post response is succesful, transfers into brandList the result, else redirects at page-not-found
          if (response['response']) {
            this.AndroidVersionList = JSON.parse(response["AndroidVersionList"]);
            console.log(response["AndroidVersionList"]);

            //fill the chart
            for (let version of this.AndroidVersionList) {
              this.AndroidVersionChartLabels.push(version["AndroidVersion"]);
              this.AndroidVersionChartData.push(version.counter);
            }

            //enable the chart
            this.loadAndroidVersionChart = true;
          }
          else
            this.router.navigate(['/page-not-found']);
        }
      );
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
