import { browser, by, element } from 'protractor';

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

}
