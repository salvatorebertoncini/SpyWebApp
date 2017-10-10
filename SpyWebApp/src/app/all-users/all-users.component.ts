import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {HttpSerService} from "../_services/http/http-ser.service";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  //Initialize vars
  slug: string;
  private sub: any;
  req = {"r": "GetAllUsers"};
  private UserList: [{ Brand: "Qualcosa non è andata per il verso giusto :(" }];

  constructor(private router: Router, private route: ActivatedRoute, private _sanitizer: DomSanitizer, private _httpService: HttpSerService) {
  }

  //Call method into ngOnInit when this page is loading
  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {

    //POST method request
    this._httpService.postMethod(this.req)
      .subscribe(
        response => {

          //print post method response
          console.log(response);

          //if post response is succesful, transfers into UserList the result, else redirects at page-not-found
          if (response["response"]) {

            this.UserList = JSON.parse(response["UserList"]);
            console.log(this.UserList);
          }
        }
      );
  }

}
