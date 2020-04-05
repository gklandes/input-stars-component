# Angular "input-stars" Component

A simple Angular Form element for capturing ratings. The element uses the same conventions as other form elements like "input" to build up a rich form experience.

[Check out the Live Preview](https://angular-x2xcby.stackblitz.io/)

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-x2xcby)

![build status](https://travis-ci.com/gklandes/input-stars-component.svg?branch=master&status=failed "Travis CI Build Status")

## Implementation
* Download the [input-stars-component](https://github.com/gklandes/input-stars-component/archive/master.zip) package and unzip
* Locate `src/app/input-stars.component.ts` and copy into your project. (Styles and Template are inline, so no other files are needed.)
* Add InputStarsComponent to your application's module. (refer to [src/app/app.module.ts](https://github.com/gklandes/input-stars-component/blob/master/src/app/app.module.ts) for an example of this)
* Use the component in your templates as `input-stars`. See "Usage" below for an example.

## Usage
### Component
Add the field to your Reactive or Template-based form as usual.
```javascript
this.myForm = this.formBuilder.group({ myStars: [null, [ Validators.required ]] })
```

### Template
Add the component to the form in the same way as any other input.
```html
<form name="myForm" id="myForm" [formGroup]="myForm">
  <p>Rate It!</p>
  <input-stars formControlName="myStars"
    [max]="5"
    ></input-stars>
  <p>You've given it {{ myForm.get('myStars').value || 'no' }} stars!</p>
</form>
```

### Validation
InputStarsComponent supports the standard validation methods available to Angular forms. For example, "Required" status can be added to
* **Reactive forms** (see "Usage > Component" above), or to
* **Template-driven forms** by declaring the `required` attribute on the component in the template.
