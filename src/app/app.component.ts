import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, ValidationErrors, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit  {
  name: string = 'Angular';
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      myStars: [null, [ Validators.required ]]
    });
  }

  reset() {
    const ctrl = this.myForm.get('myStars');
    ctrl.setValue(null);
    ctrl.markAsPristine();
    ctrl.updateValueAndValidity();
  }
}
