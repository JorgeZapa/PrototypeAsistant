import { browser, by, element } from 'protractor';
import { reject } from 'q';

export class Page {

  navigateTo(destination) {
    return browser.get(destination);
  }

  getTitle() {
    return browser.getTitle();
  }

  getMessageContent(){
    return
  }

  getPageMessage(messageNumber) {
    return element.all(by.id('messages')).get(messageNumber).getText();
  }

  getLastMessage(){
    return element.all(by.id('messages')).last().getText();
  }

  getMessagesCount(){
    return element.all(by.id('messages')).count();
  }

  sendMessage(message: string){
    return new Promise((resolve, reject)=>{
      let textArea = element(by.css("#messageInput textArea"));
      textArea.sendKeys(message).then(()=>{
        let buttonSend = element(by.id("buttonSend"));
        buttonSend.click().then(()=>{
          browser.sleep(2000).then(()=>resolve());
        });
      }
    )})
  }

  sendMessageWithTime(message: string, time: number){
    return new Promise((resolve, reject)=>{
      let textArea = element(by.css("#messageInput textArea"));
      textArea.sendKeys(message).then(()=>{
        let buttonSend = element(by.id("buttonSend"));
        buttonSend.click().then(()=>{
          browser.sleep(time).then(()=>resolve());
        });
      }
    )})
  }

  sendMessageGetLastOne(message:string): Promise<String>{
    return new Promise((resolve, reject) =>{
      this.sendMessage(message).then(()=>{
        this.getLastMessage().then(content=>{
          resolve(content);
        })
      })
    })
  }

  endWelcome(){
      return new Promise((resolve, reject)=>{
        this.sendMessage("My name is Jorge").then(()=>{
          this.sendMessage("987456132").then(()=>{
            resolve();
          }) 
        })
      })
  }

}
