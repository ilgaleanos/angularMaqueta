import { AngularBooksPage } from './app.po';

describe('angular-books App', function() {
  let page: AngularBooksPage;

  beforeEach(() => {
    page = new AngularBooksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
