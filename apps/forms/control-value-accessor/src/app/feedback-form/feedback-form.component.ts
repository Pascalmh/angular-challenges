import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RatingControlComponent } from '../rating-control/rating-control.component';

@Component({
  standalone: true,
  imports: [RatingControlComponent, ReactiveFormsModule],
  selector: 'app-feedback-form',
  templateUrl: 'feedback-form.component.html',
  styleUrls: ['feedback-form.component.scss'],
})
export class FeedbackFormComponent {
  @Output()
  readonly feedBackSubmit: EventEmitter<Record<string, string | null>> =
    new EventEmitter<Record<string, string | null>>();

  readonly feedbackForm = new FormGroup({
    name: new FormControl('', {
      validators: Validators.required,
    }),
    email: new FormControl('', {
      validators: Validators.required,
    }),
    comment: new FormControl(),
  });

  rating: string | null = null;

  submitForm(): void {
    this.feedBackSubmit.emit({
      ...this.feedbackForm.value,
      rating: this.rating,
    });

    this.feedbackForm.reset();
  }
}
