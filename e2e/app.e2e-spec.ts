import { PostItPage } from './app.po';

describe('post-it App', () => {
  let page: PostItPage;

  beforeEach(() => {
    page = new PostItPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
