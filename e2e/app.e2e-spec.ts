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
            page.sendMessageWithTime("987456132",7000).then(()=>{
              page.getLastMessage().then(content=>{
                expect(content).toEqual("Have you played any videogame today?");
              })
            })
            
          })
        })
      });


    })

    
      //1A- Fortnite
      it("A Fortnite",()=>{
          page.sendMessage("Who are you?").then(()=>{
            page.getLastMessage().then(content=>{
              expect(content).toEqual("Which videogame did you play today?");
            })
            page.sendMessage("I haven't played any videogames today").then(()=>{
              page.getLastMessage().then(content=>{
                expect(content).toEqual("Which game do you usually play?");
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

      //C - Clash Rotale

      it("C - Clash Royale", ()=>{
        page.sendMessageGetLastOne("I love to play Clash Royale").then(content=>{
          expect(content).toEqual("What is your arena level?");
          page.sendMessageGetLastOne("Anything").then(content=>{
            expect(content).toEqual("What is your arena level?");
            //6 one more than 5 boundary value
            page.sendMessageGetLastOne("My arena level is 6").then(content=>{
              expect(content).toEqual("How many legendary cards do you have?");
              page.sendMessageGetLastOne("Anything").then(content=>{
                expect(content).toEqual("How many legendary cards do you have?");
                page.sendMessageGetLastOne("5").then(content=>{
                  expect(content).toEqual("Do you use them frecuently?");
                  page.sendMessageGetLastOne("Anything").then(content=>{
                    expect(content).toEqual("Which other game do you usually play?");
                  })
                })
              })
            })
          })
        })
      })

      //D - Clash Royale

      it("D - Clash Royale", ()=>{
        page.sendMessageGetLastOne("bla bla bla Clash royale bla bla !!").then(content=>{
          expect(content).toEqual("What is your arena level?");
          //equal to 5 boundary
          page.sendMessageGetLastOne("5").then(content=>{
            expect("Which other game do you usually play?").toEqual(content);
          })
        })
      })

      //E - Clash of Clans

      it("E - Clash of Clans", ()=>{
        page.sendMessageGetLastOne("Clash of clans is neat!").then(content=>{
          expect("How many cups do you have?").toEqual(content);
          page.sendMessageGetLastOne("I have 2450 cups").then(content=>{
            expect("What is your Town Hall level?").toEqual(content);
            page.sendMessageGetLastOne("anything").then(content=>{
              expect("What is your Town Hall level?").toEqual(content);
              page.sendMessageGetLastOne("6").then(content=>{
                expect("Tell me how do you play!").toEqual(content);
                page.sendMessageGetLastOne("Anything").then(content=>{
                  expect("Which other game do you usually play?").toEqual(content)
                })
              })
            })
          })
        })
      })

      //F - Clash of Clans

      it("F - Clash of Clans",()=>{
        page.sendMessageGetLastOne("bla bla Clash of clans bla bla").then(content=>{
          expect("How many cups do you have?").toEqual(content);
          page.sendMessageGetLastOne("Anything").then(content=>{
            expect("What is your Town Hall level?").toEqual(content);
          })
        })
      })

      //G - Unknown Game
      it("G - Unknown Game", ()=>{
        page.sendMessageGetLastOne("i played Animal Crossing").then(content=>{
          expect("Is it a new one?").toEqual(content);
          page.sendMessageGetLastOne("Yes").then(content=>{
            expect("What is it about?").toEqual(content);
            page.sendMessageGetLastOne("It's about trees").then(content=>{
              expect("Is it multiplayer or solo player?").toEqual(content);
              page.sendMessageGetLastOne("It is multiplayer").then(content=>{
                expect("Tell me more about the game!").toEqual(content);
                page.sendMessageGetLastOne("Anything").then(content=>{
                  expect('In which platform can you play this game called "animal crossing"?').toEqual(content);
                  page.sendMessageGetLastOne("You can play it on PC").then(content=>{
                    expect("Tell me more about the game!").toEqual(content);
                    page.sendMessageGetLastOne("Anything").then(content=>{
                      expect("Which other game do you usually play?").toEqual(content);
                    })
                  })
                })
              })
            })
          })
        })
      })

      // H - Unknown Game
      it("H - Unkown Game",()=>{
        page.sendMessageGetLastOne("i played Animal Crossing").then(content=>{
          expect("Is it a new one?").toEqual(content);
          page.sendMessageGetLastOne("Anything").then(content=>{
            expect('In which platform can you play this game called "animal crossing"?').toEqual(content);
            page.sendMessageGetLastOne("Anything").then(content=>{
              expect('In which platform can you play this game called "animal crossing"?').toEqual(content);
              page.sendMessageGetLastOne("On PSP").then(content=>{
                expect("Tell me more about the game!").toEqual(content);
                page.sendMessageGetLastOne("Anything").then(content=>{
                  expect("Which other game do you usually play?").toEqual(content);
              })
            })
          })
        })
      })
    })


    // I - No Game

    it("I - No Game", ()=>{
      page.sendMessageGetLastOne("I do not play videogames").then(content=>{
        expect("Not even solitarie?").toEqual(content);
        page.sendMessageGetLastOne("anything").then(content=>{
          expect("I got bored, ask a friend to talk with me about videogames!").toEqual(content);
        })
      })
    })

    // J - No Game

    it("J - No Game", ()=>{
      page.sendMessageGetLastOne("I do not play games").then(content=>{
        expect("Not even solitarie?").toEqual(content);
        page.sendMessageGetLastOne("Yes").then(content=>{
          expect("Do you have a winning streak record?").toEqual(content);
          page.sendMessageGetLastOne("Yes my winning streak record is 10 times").then(content=>{
            expect("I got bored, ask a friend to talk with me about videogames!")
          })
        })
      })
    })


    //K - No Game

    it("K - No Game", ()=>{
      page.sendMessageGetLastOne("I hate videogames").then(content=>{
        expect("Not even solitarie?").toEqual(content);
        page.sendMessageGetLastOne("i have played it").then(content=>{
          expect("Do you have a winning streak record?").toEqual(content);
          page.sendMessageGetLastOne("i do not have a record").then(content=>{
            expect("I got bored, ask a friend to talk with me about videogames!")
          })
        })
      })
    })

    //L - No Game

    it("L - No Game", ()=>{
      page.sendMessageGetLastOne("I don't play any videogames").then(content=>{
        expect("Not even solitarie?").toEqual(content);
        page.sendMessageGetLastOne("nope").then(content=>{
          expect("What do you do in your freetime?").toEqual(content);
          page.sendMessageGetLastOne("I like reading manga").then(content=>{
            expect("I got bored, ask a friend to talk with me about videogames!")
          })
        })
      })
    })


    //M - Start

    it("M - Start", ()=>{
      page.sendMessageGetLastOne("What is your favourite game?").then(content=>{
        expect("Do you know that game?").toEqual(content);
        page.sendMessageGetLastOne("Nop").then(content=>{
          expect("Which game do you usually play?").toEqual(content);
        })
      })
    })



  })
})
