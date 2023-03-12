import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-flights-reactive',
  templateUrl: './flights-reactive.component.html',
  styleUrls: ['./flights-reactive.component.css']
})
export class FlightsReactiveComponent {
  flightForm: FormGroup;
  airports: { code: string, name: string }[] = [
    { code: 'JFK', name: 'John F. Kennedy International Airport' },
    { code: 'LAX', name: 'Los Angeles International Airport' },
    { code: 'ORD', name: 'Hare International Airport' },
    { code: 'DFW', name: 'Dallas Fort Worth International Airport' },
  ];
  passengerOptions: number[] = [1, 2, 3, 4, 5];

  constructor(private fb: FormBuilder) {
    this.flightForm = this.fb.group({
      flightType: ['roundtrip', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
      depart: ['', Validators.required],
      return: [''],
      passengers: [1, Validators.required]
    });
  }

  onSubmit() {
    console.log(this.flightForm.value);
  }
}
