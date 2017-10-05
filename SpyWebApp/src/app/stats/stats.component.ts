import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {HttpSerService} from "../_services/http/http-ser.service";
import {BaseChartDirective} from "ng2-charts";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  private brandList: any;
  private AndroidVersionList: any;

  // Brand Pie
  public BrandDistributionChartLabels: string[] = ['', ""];
  public BrandDistributionChartData: number[] = [0, 0];
  public BrandDistributionChartType: string = 'pie';

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
            this.AndroidVersionList = response["AndroidVersionList"];
            console.log(response["AndroidVersionList"]);
          }
          else
            this.router.navigate(['/page-not-found']);
        }
      );
  }

  // Android Version Doughnut
  public AndroidVersionChartLabels: string[] = ['6.0.1', '6.1.1', '7.1'];
  public AndroidVersionChartData: number[] = [3, 4, 1];
  public AndroidVersionChartType: string = 'doughnut';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
