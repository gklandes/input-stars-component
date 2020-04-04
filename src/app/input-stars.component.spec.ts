import { TestBed, ComponentFixture, async } from "@angular/core/testing";
import { InputStarsComponent } from "./input-stars.component";
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { FormControl } from '@angular/forms';
import { DebugElement } from '@angular/core';

describe('The "InputStarsComponent"', () => {
  let component: InputStarsComponent;
  let fixture: ComponentFixture<InputStarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputStarsComponent, FaIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputStarsComponent);
    component = fixture.componentInstance;
    component.max = '5';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
  describe('component', () => {
    let onChangeFn = jasmine.createSpy('onChange');
    let onTouchedFn = jasmine.createSpy('onTouched');
    beforeEach(() => {
      component.ngOnInit();
      component.registerOnChange(onChangeFn);
      component.registerOnTouched(onTouchedFn);
    });
    it('should initialize its value at 0', () => {
      expect(component.value).toBe(0);
    });
    it('should convert "max" to an integer "maxValue"', () => {
      expect(component.maxValue).toBe(5);
    });
    it('should create a "stars" array', () => {
      expect(component.stars.length).toBe(5);
    });
    it('should throw an error if max is not an int', () => {
      component.max = 'bad value';
      expect(function () { component.ngOnInit(); }).toThrow();
    });
    it('should throw an error if max is less than 1', () => {
      component.max = '0';
      expect(function () { component.ngOnInit(); }).toThrow();
    });
    describe('"setValue" method', () => {
      it('should update the value', () => {
        component.setValue(0);
        expect(component.value).toBe(1);
      });
      it('should pass the value to the onChange callback', () => {
        component.setValue(1);
        expect(component.onChange).toHaveBeenCalledWith(2);
      });
      it('should call the onTouched callback', () => {
        component.setValue(1);
        expect(component.onTouched).toHaveBeenCalled();
      });
    });
    describe('as a Form Control', () => {
      it('should register an onChange function', () => {
        expect(component.registerOnChange).toBeDefined();
        expect(component.onChange).toBe(onChangeFn);
      });
      it('should register an onTouched function', () => {
        expect(component.registerOnTouched).toBeDefined();
        expect(component.onTouched).toBe(onTouchedFn);
      });
      it('should register a writeValue function', () => {
        expect(component.writeValue).toBeDefined();
        component.writeValue('3');
        expect(component.value).toBe(3);
      });
      it('should validate its value', () => {
        let control = new FormControl();
        control.setValue(4);
        expect(component.validate(control)).toEqual({});
        control.setValue(6);
        expect(component.validate(control)).toEqual({ invalid: true });
      });
    });
  });
  describe('element', () => {
    let element: DebugElement;
    let list: HTMLElement[];
    beforeEach(() => {
      element = fixture.debugElement;
      list = element.nativeElement.querySelectorAll('li');
    });
    it('should create a list of star elements', () => {
      expect(list.length).toBe(5);

      component.max = '7';
      component.ngOnInit();
      fixture.detectChanges();
      list = element.nativeElement.querySelectorAll('li');
      expect(list.length).toBe(7);
    });
    it('should call "setValue" when a star is clicked', () => {
      spyOn(component, 'setValue');
      let item = list[3];
      item.click();
      expect(component.setValue).toHaveBeenCalledWith(3);
    });
  });
});