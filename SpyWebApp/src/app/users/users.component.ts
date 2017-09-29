import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {HttpSerService} from "../_services/http/http-ser.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UserComponent implements OnInit {

  slug: string;
  private sub: any;
  req = {};
  private UserList: any;

  constructor(private router: Router, private route: ActivatedRoute, private _sanitizer: DomSanitizer, private _httpService: HttpSerService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.slug = params['slug'];
      this.req = {"r": "GetUserWithSlug", "slug": this.slug};
      this.UserList = this.getUserWithSlug(this.req);
    });
  }

  getUserWithSlug(req) {
    this._httpService.postMethod(req)
      .subscribe(
        response => {
          console.log(response);
          if (response['response']) {
            this.UserList = JSON.parse(response["UserList"]);
            console.log(this.UserList);
          }
          else
            this.router.navigate(['/page-not-found']);
        }
      );
  }

}
