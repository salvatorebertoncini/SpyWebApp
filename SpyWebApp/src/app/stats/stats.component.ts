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

  constructor(private router: Router, private route: ActivatedRoute, private _sanitizer: DomSanitizer, private _httpService: HttpSerService) {
  }

  ngOnInit() {
    this.GetBrandStats();
    this.GetAndroidVersionStats();
  }

  GetBrandStats() {
    let req = {"r": "BrandStats"};
    this._httpService.postMethod(req)
      .subscribe(
        response => {
          console.log(response);
          if (response['response']) {
            this.brandList = JSON.parse(response["DevicesList"]);

            for (let brand of this.brandList) {
              this.BrandDistributionChartLabels.push(brand.Brand);
              this.BrandDistributionChartData.push(brand.counter);
            }

            this.loadBrandChart = true;

          }
          else
            this.router.navigate(['/page-not-found']);
        }
      );
  }

  GetAndroidVersionStats() {
    let req = {"r": "AndroidVersionStats"};
    this._httpService.postMethod(req)
      .subscribe(
        response => {
          console.log(response);
          if (response['response']) {
            this.AndroidVersionList = JSON.parse(response["AndroidVersionList"]);
            console.log(response["AndroidVersionList"]);
            for (let version of this.AndroidVersionList) {
              this.AndroidVersionChartLabels.push(version["AndroidVersion"]);
              this.AndroidVersionChartData.push(version.counter);
            }
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
