import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('my-app h1')).getText() as Promise<string>;
  }

  getStars() {
    return element.all(by.css('.input-stars__star'));
  }

  getStar(i) {
    let index = i - 1;
    let stars = this.getStars();
    return stars.get(index);
  }

  getPristineText() {
    return element(by.css('.example__pristine')).getText() as Promise<string>;
  }

  getValidityText() {
    return element(by.css('.example__valid')).getText() as Promise<string>;
  }
}
