import { Page } from './app.po';

describe('App', () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

    it('The first message should be -Welcome!-', () => {
      page.getPageMessage(0).then(content => {
        expect(content).toEqual('Welcome!');
      });
    });
    it('Once we send a name that does not make sense we shall respond accordingly', ()=>{
      page.sendMessage("My name is adascdczx<casdqw").then(()=>{
        page.getPageMessage(5).then(content=>{
          expect(content).toEqual("I didn't understand your name...");
        })
      });

    })

  })
});
