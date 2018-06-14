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

    //Welcome flow

    it('The welcome flow must work as expected', ()=>{
      page.sendMessage("My name is adascdczx<casdqw").then(()=>{
        page.getPageMessage(5).then(content=>{
          expect(content).toEqual("I didn't understand your name...");
        });
        page.sendMessage("My name is Jorge").then(()=>{
          page.getLastMessage().then(content=>{
            expect(content).toEqual("Now i need to know a number to send a SOS to in case you get lost!");
          });
          page.sendMessage("I invent my number 23").then(()=>{
            page.getLastMessage().then(content=>{
              expect(content).toEqual("Maybe there was a mistake in it, remember that it contains 9 numbers");
            });
            page.sendMessage("987456132").then(()=>{
              page.getLastMessage().then(content=>{
                expect(content).toEqual("Have you played any videogame today?");
              })
            })
            
          })
        })
      });


    })

      //1A- Fortnite
      it("1A Fortnite",()=>{
          page.sendMessage("Who are you?").then(()=>{
            page.getLastMessage().then(content=>{
              expect(content).toEqual("Which videogame did you play today?");
            })
            page.sendMessage("I haven't played any videogames today").then(()=>{
              page.getLastMessage().then(content=>{
                expect(content).toEqual("So... Which game do you usually play?");
              })
              page.sendMessage("I usually play Fortnite").then(()=>{
                page.getLastMessage().then(content=>{
                  expect(content).toEqual("Have you ever won a whole game?");
                })
                page.sendMessage("Yes").then(()=>{
                  page.getLastMessage().then((content)=>{
                    expect(content).toEqual("What is your favourite thing to build?");
                  })
                  page.sendMessage("anything").then(()=>{
                    page.getLastMessage().then((content)=>{
                      expect(content).toEqual("Do you play with friends?");
                    })
                    page.sendMessage("I play with friends").then(()=>{
                      page.getLastMessage().then((content)=>{
                        expect(content).toEqual("Tell me more about how do you play!");
                      })
                      page.sendMessage("anything").then(()=>{
                        page.getLastMessage().then((content)=>{
                          expect(content).toEqual("Which other game do you usually play?");
                        })
                      })
                    })
                  })
                  
                })
              })
            })
          }
        )
      });


  })
});
