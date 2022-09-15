import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RaceInfoService {
  public endPointURL: any = "http://ergast.com/api/f1/";
  public winnersListService: any = "/results/1.json";
  public driverStandingService: any = "/driverStandings.json";
  public driverStandingUrl: any;
  public winnersResultUrl: any;
  constructor(private http: HttpClient) { }

  getDriverStandings(value: any): Observable<any>{
    let dsPayload = value;
    this.driverStandingUrl = `${this.endPointURL}${dsPayload}${this.driverStandingService}`;
    return this.http.get<any>(this.driverStandingUrl);
  }
  getWinnersResults(value: any): Observable<any>{
    let wrPayload = value;
    this.winnersResultUrl = `${this.endPointURL}${wrPayload}${this.winnersListService}`;
    return this.http.get<any>(this.winnersResultUrl);
  }
}
