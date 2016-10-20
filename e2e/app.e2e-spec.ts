import { Jsdc2016Page } from './app.po';

describe('jsdc2016 App', function() {
  let page: Jsdc2016Page;

  beforeEach(() => {
    page = new Jsdc2016Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
