import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root span')).getText() as Promise<string>;
  }
  clickAddResto(){
    return element(by.xpath('//*[@id="navbarNavAltMarkup"]/div/a[1]')).click();
  }
  getSubmitButtonText()
  {
    return element(by.css('body app-root div app-add-resto form button')).getText();
  }
  EnterDataInNameTextBox(){
    return element(by.xpath('/html/body/app-root/div/app-add-resto/form/div[1]/input')).sendKeys('Parlor Pizza');
  }
  EnterDataInAddressTextBox(){
    return element(by.xpath('/html/body/app-root/div/app-add-resto/form/div[2]/input')).sendKeys('Chicago');
  }
  EnterDataInEmailTextBox(){
    return element(by.xpath('/html/body/app-root/div/app-add-resto/form/div[3]/input')).sendKeys('Orderonline@Parlorpzza.com');
  }
  ClickSubmitButton(){
    return element(by.xpath('/html/body/app-root/div/app-add-resto/form/button')).click();
  }
  GetSuccessMessage(){
    return element(by.xpath('/html/body/app-root/div/app-add-resto/div/strong')).getText();
  }
}
