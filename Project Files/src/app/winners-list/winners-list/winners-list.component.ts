import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { raceModel } from 'src/app/model/race-model';

@Component({
  selector: 'app-winners-list',
  templateUrl: './winners-list.component.html',
  styleUrls: ['./winners-list.component.scss']
})
export class WinnersListComponent implements OnInit {
  public showSpinner: boolean = false;
  public winnersData: any = [];
  constructor(private _raceModel: raceModel, private _router: Router) { }

  ngOnInit(): void {
    this.winnersData = this._raceModel.getWinnersList();
  }

  /* Generate random border colors */
  getRandomColor(){
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '3px solid' + '#' + ('000000' + color).slice(-6);
  }

  /* Go back to Standings Page */
  goBack(): void{
    this._router.navigate(['/standings']);
  }
}
