import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userform: FormGroup;
  countryData ={
    
    IN: {
      code: "IN",
      name: "India",
      states: [
        {
          AN: {
            code: "AN",
            name: "Andhra",
            cities: [
              {
                VZ: {
                  code: "VZ",
                  name: "Vizag"
                }
              }
            ]
          }
        }
      ]
    },
    US: {
      code: "US",
      name: "America",
      states: [
        {
          CA: {
            code: "CA",
            name: "California",
            cities: [
              {
                LA: {
                  code: "LA",
                  name: "Los Angeles"
                }
              }
            ]
          }
        }
      ]
    }
  }

  countryList;
  stateList;
  cityList;
  constructor() {
    this.userform = new FormGroup({
      'Name': new FormControl('', Validators.required),
      'Email': new FormControl('', [Validators.required, Validators.email]),
      'Mobile': new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      'Password': new FormControl('', Validators.required),
      'Confirm Password': new FormControl('', Validators.required),
      'country': new FormControl('', Validators.required),
      'state': new FormControl('', Validators.required),
      'city': new FormControl('', Validators.required),
      'Gender': new FormControl('', Validators.required),
      'Marital Status': new FormControl('', Validators.required),
      'Favorite Dish': new FormControl('', Validators.required),
      'Favorite Color': new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')])
    });
    let countryKeys = Object.keys(this.countryData);
    this.countryList= countryKeys.map((key) => this.countryData[key])
    console.log(this.countryList);
    this.userform.get("country").valueChanges.subscribe((data)=>{
      this.stateList = this.countryData[data].states
      console.log(this.stateList)
  
    })
  }
  submitData() {
    console.log(this.userform.valid)
  }

}
