import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() rating: number;

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(): void {
    this.starWidth = this.rating * 106 / 5;
  }
  onClick() {
    this.ratingClicked.emit('The rating ${this.rating} was clicked!');
  }
  starWidth: number;
  imageURL = '../../assets/starRating.png';

}