import { Rokk3rlabsFrontendTestPage } from './app.po';

describe('rokk3rlabs-frontend-test App', function() {
  let page: Rokk3rlabsFrontendTestPage;

  beforeEach(() => {
    page = new Rokk3rlabsFrontendTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
