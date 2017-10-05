import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {HttpSerService} from "../_services/http/http-ser.service";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  req = {"r": "Stats"};
  private resp: any;
  private google: any;
  private chart: any;
  private div: "chart_div";

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
            this.resp = response["response"];
          }
          else
            this.router.navigate(['/page-not-found']);
        }
      );
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////

  // Doughnut
  public doughnutChartLabels: string[] = ['6.0.1', '6.1.1', '7.0.1'];
  public doughnutChartData: number[] = [3, 4, 1];
  public doughnutChartType: string = 'doughnut';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
