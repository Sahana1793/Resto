import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { by, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    //browser.pause();
    expect(page.getTitleText()).toEqual('Restaurant App');
  });
  it('Add Resto', () => {
    page.navigateTo();
    page.clickAddResto();
    expect(page.getSubmitButtonText()).toEqual('Submit');
    page.EnterDataInNameTextBox();
    page.EnterDataInAddressTextBox();
    page.EnterDataInEmailTextBox();
    page.ClickSubmitButton();
    expect(page.GetSuccessMessage()).toEqual('Success!');
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
