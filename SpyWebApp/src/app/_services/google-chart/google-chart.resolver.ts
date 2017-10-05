import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";

declare const google: any;

@Injectable()
export class GoogleChartResolver implements Resolve<any> {

  private static googleChartLoaded: boolean = false;

  constructor() {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (GoogleChartResolver.googleChartLoaded) {
      return Observable.of(google);
    } else {
      return Observable.create(function (observer: Observer<any>) {

        google.charts.load('current', {packages: ['corechart', 'bar']});
        google.charts.setOnLoadCallback(() => {
          observer.next(google);
          observer.complete();
          GoogleChartResolver.googleChartLoaded = true;
        });
      });
    }
  }
}
