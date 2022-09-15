import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {
  public message: string = "";
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
    if(data){
      this.message = data.message;
    }
  }

  ngOnInit(): void {
  }

}
