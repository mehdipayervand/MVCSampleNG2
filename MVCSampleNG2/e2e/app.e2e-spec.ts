import { MySamplePage } from './app.po';

describe('my-sample App', () => {
  let page: MySamplePage;

  beforeEach(() => {
    page = new MySamplePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
