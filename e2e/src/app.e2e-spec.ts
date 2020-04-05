import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('The "InputStarsComponent App"', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

  it('should display welcome message', () => {
    expect(page.getTitleText()).toMatch(/Input-Stars Component/);
  });
  describe('on init', () => {
    it('should init the Demo form with 5 stars', () => {
      let stars = page.getStars();
      expect(stars.count()).toBe(5);
    });
    it('should show the form to be untouched', () => {
      expect(page.getPristineText()).toBe('untouched');
    });
    it('should show the form to be invalid', () => {
      expect(page.getValidityText()).toBe('invalid');
    });
  });
});
