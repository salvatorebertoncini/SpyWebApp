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

  //Initialize vars
  slug: string;
  private sub: any;
  req = {};
  private UserList: any;

  // Constructor
  constructor(private router: Router, private route: ActivatedRoute, private _sanitizer: DomSanitizer, private _httpService: HttpSerService) {
  }

  //Call method into ngOnInit when this page is loading
  ngOnInit() {

    //Grub brand params from URL and send it into POST request
    this.sub = this.route.params.subscribe(params => {
      this.slug = params['slug'];
      this.req = {"r": "GetUserWithSlug", "slug": this.slug};
      this.UserList = this.getUserWithSlug(this.req);
    });
  }

  getUserWithSlug(req) {

    //POST method request
    this._httpService.postMethod(req)
      .subscribe(
        response => {

          //print post method response
          console.log(response);

          //if post response is succesful, transfers into UserList the result, else redirects at page-not-found
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
