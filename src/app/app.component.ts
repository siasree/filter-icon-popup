import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'filter-popup';
  radios:any[]=[{
    "radio":"India"
  },
  {
    "radio":"Australia"
  },
  {
    "radio":"USA"
  },
  {
    "radio":"UK"
  },
  {
    "radio":"China"
  },
  {
    "radio":"Japan"
  },
  {
    "radio":"Canada"
  }]
  boxes:any[]=[{
    "box":"Bangalore"
  },
  {
    "box":"Chennai"
  },
  {
    "box":"Hyderabad"
  },
  {
    "box":"Delhi"
  },
  {
    "box":"Pune"
  },
  {
    "box":"Mumbai"
  },
  {
    "box":"Kolkata"
  }
  // {
  //   "box":"Bangalore"
  // },
  // {
  //   "box":"Chennai"
  // },
  // {
  //   "box":"Hyderabad"
  // },
  // {
  //   "box":"Delhi"
  // },
  // {
  //   "box":"Pune"
  // },
  // {
  //   "box":"Mumbai"
  // },
  // {
  //   "box":"Kolkata"
  // }
]
}
