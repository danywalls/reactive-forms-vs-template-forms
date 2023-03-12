import { Component } from '@angular/core';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent {

  flightType: string = "";
  from: string = "";
  to: string = "";
  depart: string = "";
  return: string = "";
  passengers: number = 1;
  passengerOptions: number[] = [1, 2, 3, 4, 5];

  onSubmit(flightForm: any) {
    console.log(flightForm.value);
  }
}
