import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {HttpSerService} from "../_services/http/http-ser.service";
import {MatListModule} from '@angular/material';

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
  private MessagesList: any;
  private BatteryStatsList: any;

  // lineChart
  public lineChartData: Array<any> = [];
  public lineChartLabels: Array<any> = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15',
    '16', '17', '18', '19', '20', '21', '22', '23'];

  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';
  public lineChart: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private _sanitizer: DomSanitizer, private _httpService: HttpSerService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.slug = params['slug'];

      this.req = {"r": "GetDevicesWithSlug", "slug": this.slug};
      this.DevicesList = this.GetDevicesWithSlug(this.req);

      this.req = {"r": "GetMessagesWithIMEI", "slug": this.slug};
      this.MessagesList = this.GetMessagesWithIMEI(this.req);

      this.req = {"r": "GetBatteryStatsWithIMEI", "slug": this.slug};
      this.MessagesList = this.GetBatteryStatsWithIMEI(this.req);
    });
  }


  GetBatteryStatsWithIMEI(req) {
    this._httpService.postMethod(req)
      .subscribe(
        response => {
          console.log(response);
          if (response['response']) {
            this.lineChartData.push({data: response["all"], label: 'most using per hour'});
            this.lineChart = true;
          }
          else
            this.router.navigate(['/page-not-found']);
        }
      );
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

  GetMessagesWithIMEI(req) {
    this._httpService.postMethod(req)
      .subscribe(
        response => {
          console.log(response);
          if (response['response']) {
            this.MessagesList = JSON.parse(response["MessagesList"]);

            if (this.MessagesList.length == 0) {
              this.MessagesList.push({
                "sender": "",
                "receiver": "",
                "text": "Nessun messaggio salvato per questo dispositivo"
              });
            }
            console.log(this.MessagesList);
          }
          else
            this.router.navigate(['/page-not-found']);
        }
      );
  }

}
