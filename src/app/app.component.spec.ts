import { AppComponent } from './app.component';
import { FormBuilder } from "@angular/forms";
import { TestBed } from "@angular/core/testing";

describe('AppComponent', () => {
  let comp;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppComponent,
        { provide: FormBuilder }
      ]
    });
    comp = TestBed.get(AppComponent);
  });
  describe('after init', () => {
    beforeEach(() => {
      comp.ngOnInit();
    })
    it('should define the demo form', () => {
      expect(comp.myForm).toBeDefined();
    });
    it('should set up the demo stars field', () => {
      expect(comp.myForm.get('myStars')).not.toBe(null);
      expect(comp.myForm.get('myStars').value).toBe(null);
    });
    describe('"reset" method', () => {
      it('should reset "myStars" to null', () => {
        comp.myForm.get('myStars').setValue(1);
        expect(comp.myForm.get('myStars').value).toBe(1);
        comp.reset();
        expect(comp.myForm.get('myStars').value).toBe(null);
      })
      it('should reset "myForm" to pristine', () => {
        comp.myForm.markAsDirty()
        expect(comp.myForm.pristine).toBeFalsy();
        comp.reset();
        expect(comp.myForm.pristine).toBeTruthy();
      })
    });
  });
});
