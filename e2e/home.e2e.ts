import { browser, by, element } from 'protractor';

describe('Home', () => {

  beforeEach(() => {
    // change hash depending on router LocationStrategy
    browser.get('/#/home');
  });

  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'Jesus Cuesta - PO';
    expect(subject).toEqual(result);
  });

});
