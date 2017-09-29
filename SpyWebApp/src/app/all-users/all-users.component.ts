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

  slug: string;
  private sub: any;
  req = {"r": "GetAllUsers"};
  private UserList: [{ Brand: "Qualcosa non è andata per il verso giusto :(" }];

  constructor(private router: Router, private route: ActivatedRoute, private _sanitizer: DomSanitizer, private _httpService: HttpSerService) {
  }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this._httpService.postMethod(this.req)
      .subscribe(
        response => {
          console.log(response);
          if (response['response']) {
            this.UserList = JSON.parse(response["UsersList"]);
            console.log(this.UserList);
          }
        }
      );
  }

}
