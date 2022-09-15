import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RaceInfoService } from '../services/race-info.service';
import { ErrorMessageComponent } from '../error-message/error-message/error-message.component';
import { raceModel } from '../model/race-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-race-details',
  templateUrl: './race-details.component.html',
  styleUrls: ['./race-details.component.scss']
})
export class RaceDetailsComponent implements OnInit {

  public showSpinner: boolean = false;
  panelOpenState = true;
  public driverStandings: any = [];
  public years: any = [];
  public selectedYear: any;
  constructor(private _raceInfoService: RaceInfoService, public snackBar: MatSnackBar,  private _raceModel: raceModel, private _router: Router) { }

  ngOnInit(): void {
    var max = new Date().getFullYear()
    var min = max - 17;
    var years = []

    for (var i = max; i >= min; i--) {
      years.push(i)
    }
    this.years = years;
  }

  /* Get seasons standings */
  searchRaceInfo(e: Event): void{
    e.stopPropagation();
    let payload = this.selectedYear;
    if(payload){
      this.panelOpenState = false;
      this.showSpinner = true;
      this._raceInfoService.getDriverStandings(payload).subscribe((res: any) => {
        if(res && res.MRData && res.MRData.StandingsTable){
          let StandingsTable = res.MRData.StandingsTable;
          let StandingsLists = StandingsTable.StandingsLists ? StandingsTable.StandingsLists : "";
          this.driverStandings = StandingsLists[0].DriverStandings ? StandingsLists[0].DriverStandings : "";
          console.log(this.driverStandings);
          this.showSpinner = false;
        }
      },
      (err) => {
        this.openSnackBar("Service not available. Please try again later..!!");
      });
    }else{
      this.openSnackBar("Please select year..!!")
    }
  }

  expandPanel(): void{
    this.panelOpenState = true;
  }

  /* Generate Random border colors */
  getRandomColor(){
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '3px solid' + '#' + ('000000' + color).slice(-6);
  }

  selectedOption(value: any): void{
    this.selectedYear = value;
  }

  /* Error Handler */
  openSnackBar(msg: any): void{
    this.snackBar.openFromComponent(ErrorMessageComponent,{
      duration: 3000,
      data: {
        message: msg,
      },
      panelClass: 'failure',
    });
    this.showSpinner = false;
  }

  /* Get Winners list based on the season/year */
  getWinnersList(){
    const payload = this.selectedYear;
    if(payload){
      this.showSpinner = true;
      this._raceInfoService.getWinnersResults(payload).subscribe((res: any) => {
        if(res && res.MRData && res.MRData.RaceTable){
          let raceTable = res.MRData.RaceTable;
          let racesArray = raceTable.Races ?  raceTable.Races : "";
          
          console.log(racesArray);
          this.showSpinner = false;
          this._raceModel.setWinnersList(racesArray);
          this._router.navigate(['/winners']);
        }
      },
      (err) => {
        this.openSnackBar("Service not available. Please try again later..!!");
      });
    }
  }
}
