import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, ControlValueAccessor } from '@angular/forms';
import { faStar as starOn, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faStar as starOff } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'input-stars',
  template: `<ul class="input-stars">
  <li id="star-{{i}}"
    class="input-stars__star input-stars__star--{{i + 1 <= value ? 'on' : 'off'}}"
    *ngFor="let star of stars; index as i" (click)="setValue(i)"
    >
  <fa-icon [icon]="icons.star.on" *ngIf="i + 1 <= value"></fa-icon>
  <fa-icon [icon]="icons.star.off" *ngIf="i + 1 > value"></fa-icon></li>
  </ul>`,
  styles: ['ul { display: block; list-style: none; padding: 0; }',
    'li { display: inline-block; margin-right: .1em; }',
    'li:last-child { margin-right: 0; }' ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputStarsComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputStarsComponent),
      multi: true
    }
  ]
})
export class InputStarsComponent implements OnInit, ControlValueAccessor {
  icons: any = {
    star: { on: starOn, off: starOff }
  }
  value: number = 0;
  maxValue: number = 0;
  stars: any[] = [];
  @Input() max: string;

  onChange: any = () => { };
  onTouched: any = () => { };

  ngOnInit() {
    this.maxValue = parseInt(this.max);
    if (this.maxValue && this.maxValue > 0) this.stars = new Array(parseInt(this.max));
    else throw new Error('"app-input-stars" requires [max] be a positive, non-zero integer');
  }

  setValue(v) {
    this.value = v + 1;
    this.onChange(this.value);
    this.onTouched();
  }

  validate({ value }: FormControl) { 
    return value > this.maxValue
      ? { invalid: true }
      : {};
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) { 
    this.onTouched = fn;
  }

  writeValue(value) {
    this.value = parseInt(value) || null;
  }
}
