import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { Observable , throwError, from} from 'rxjs';



@Injectable({
    providedIn: 'root'
})
export class ModeService {
    public historys: History[];


    private token: string = localStorage.getItem('token');
    private httpOptions = {
        headers: new HttpHeaders({
            Authorization: `Bearer ${this.token}`,
            // 'Content-Type': 'application/json',
            Accept: 'application/json'
        })
    };
    constructor(private http: HttpClient) {}

      // tslint:disable-next-line:typedef
      getProfile() {
        return this.http.get<any>(
            `https://api.spacexdata.com/v3/launches?limit=100`
        );
    }
    // tslint:disable-next-line:typedef
    LaunchSuccessFilter() {
        return this.http.get<any>(
            `https://api.spacexdata.com/v3/launches?limit=100&launch_success=true`
        );
    }
     // tslint:disable-next-line:typedef
     LaunchLandFilter() {
        return this.http.get<any>(
            `https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true`
        );
    }
     // tslint:disable-next-line:typedef
  All() {
        return this.http.get<any>(
            `https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014`
        );
    }
}

