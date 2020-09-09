import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star-ratings',
  templateUrl: './star-ratings.component.html',
  styleUrls: ['./star-ratings.component.css']
})
export class StarRatingsComponent implements OnInit {
  @Input() rating = 0.0;
  maxRating = 5;
  constructor() { }

  ngOnInit() {
  }

  public get fullstars(): number[] {
    const full = Math.floor(this.rating);
    const fullstars = Array(full).fill(0);
    return fullstars;
  }

  public get emptystars(): number[] {
    const full = Math.floor(this.rating);
    const empty = Math.floor(this.maxRating - this.rating);
    const emptystars =  Array(empty).fill(0);
    return emptystars;
  }


  public get halfstars(): number[] {
    const full = Math.floor(this.rating);
    const empty = Math.floor(this.maxRating - this.rating);
    const half = this.maxRating - full - empty;
    const halfstars = Array(half).fill(0);
    return halfstars;
  }


}
