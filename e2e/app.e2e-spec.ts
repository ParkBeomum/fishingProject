import { FishingProjectPage } from './app.po';

describe('fishing-project App', () => {
  let page: FishingProjectPage;

  beforeEach(() => {
    page = new FishingProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
