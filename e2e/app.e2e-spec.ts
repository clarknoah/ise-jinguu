import { IseJinguPage } from './app.po';

describe('ise-jingu App', function() {
  let page: IseJinguPage;

  beforeEach(() => {
    page = new IseJinguPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
