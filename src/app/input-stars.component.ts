import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faStar as starOn, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faStar as starOff } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'input-stars',
  template: `<ul class="input-stars__stars">
  <li *ngFor="let star of stars; index as i" (click)="setValue(i)">
  <fa-icon [icon]="icons.star.on" *ngIf="i + 1 <= value"></fa-icon>
  <fa-icon [icon]="icons.star.off" *ngIf="i + 1 > value"></fa-icon></li>
  </ul>`,
  styleUrls: [ './input-stars.component.scss' ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputStarsComponent),
      multi: true
    }
  ]
})
export class InputStarsComponent implements OnInit {
  icons: any = {
    star: { on: starOn, off: starOff }
  }
  stars: any[] = [];
  value: number = 0;
  @Input() max: string;

  onChange: any = () => { };
  onTouched: any = () => { };

  ngOnInit() {
    console.log(this.max);
    const n = parseInt(this.max);
    if (n && n > 0) this.stars = new Array(parseInt(this.max));
    else throw new Error('"app-input-stars" requires [max] be a positive, non-zero integer');
  }

  setValue(v) {
    this.value = v + 1;
    this.onChange(this.value);
    this.onTouched();
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) { 
    this.onTouched = fn;
  }

  writeValue(value) {
    console.log(value);
    this.value = value;
  }
}
