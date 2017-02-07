import { browser, by, element } from 'protractor';

describe('App', () => {

  beforeEach(() => {
    browser.get('/#/');
  });

  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'Jesus Cuesta - PO';
    expect(subject).toEqual(result);
  });

  it('should have Toolbar', () => {
    let subject = element(by.css('md-toolbar')).isPresent();
    let result  = true;
    expect(subject).toEqual(result);
  });

  it('should have a component with classname fs-custom-grid-cards', () => {
    let subject = element(by.css('fs-custom-grid-cards')).isPresent();
    let result  = true;
    expect(subject).toEqual(result);
  });
});
