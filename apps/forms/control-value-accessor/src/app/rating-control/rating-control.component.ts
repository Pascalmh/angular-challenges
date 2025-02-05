import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-rating-control',
  templateUrl: 'rating-control.component.html',
  styleUrls: ['rating-control.component.scss'],
})
export class RatingControlComponent {
  @Output()
  readonly ratingUpdated: EventEmitter<string> = new EventEmitter<string>();

  value: number | null = null;

  setRating(index: number): void {
    this.value = index + 1;
    this.ratingUpdated.emit(`${this.value}`);
  }

  isStarActive(index: number, value: number | null): boolean {
    return value ? index < value : false;
  }
}
