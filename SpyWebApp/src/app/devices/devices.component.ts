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

  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

  slug: string;
  private sub: any;
  req = {};
  private DevicesList: any;
  private MessagesList: any;

  constructor(private router: Router, private route: ActivatedRoute, private _sanitizer: DomSanitizer, private _httpService: HttpSerService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.slug = params['slug'];

      this.req = {"r": "GetDevicesWithSlug", "slug": this.slug};
      this.DevicesList = this.GetDevicesWithSlug(this.req);

      this.req = {"r": "GetMessagesWithIMEI", "slug": this.slug};
      this.MessagesList = this.GetMessagesWithIMEI(this.req);
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
