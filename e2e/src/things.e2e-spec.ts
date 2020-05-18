import { browser, element, by, protractor } from 'protractor';
import { AppPage } from './app.po';


describe('things skal tests', () => {
  let page: AppPage;

  beforeEach(() =>{
    page = new AppPage
  });

  // it('1.0 = only to see if e2e is working', () => {
  //   //arrange
  //   browser.get('');
  //   browser.sleep(2000);
  //   //browser.refresh;

  //   //act
  //   element(by.id("home-login")).click();
  //   let h1 = element(by.css("h1")).getText();
  //   browser.sleep(1000);

  //   //assert
  //   expect(h1).toEqual('Udfyld Login info');
  //   // browser.sleep(2000);
  // });


  // it('1.1 = should login', () => {
  //   browser.get('');

  //   browser.sleep(2000);
  //   element(by.id("home-login")).click();
  //   element(by.id("username-input")).sendKeys("hasan");
  //   element(by.id("password-input")).sendKeys("1234566");
  //   browser.sleep(2000);
  //   element(by.id("login-button")).click;

  //   let h1 = element(by.css("h1")).getText();
  //   expect(h1).toEqual('Udfyld Login info');

  // });

  it('1.2 = Login and then try to save my thing',async () => {
    //arrange
    browser.get('');
    //act
    element(by.id("home-login")).click();
    element(by.id("username-input")).sendKeys("hasan");
    element(by.id("password-input")).sendKeys("1234566");
    //browser.sleep(300);
    element(by.id("login-button")).click;
    //browser.sleep(300);

    element(by.id("registerthing-button")).click;
    browser.sleep(2000);

    element(by.id("what-input")).sendKeys("hasan");
    element(by.id("where-input")).sendKeys(" er i hospitalet ");
    browser.sleep(3000);

    element(by.id("registerThing")).click();

    let h4 = element(by.css("h4")).getText();
    browser.sleep(3000);

    //assert
    expect(h4).toEqual('r');
    browser.sleep(2000);
  });

});




    // element(by.id('findalift-button')).click();

    // element.all(by.css('.example-card')).then((el) => {
    //   const before = el.length; // eg before = 3
    //   element(by.id('registertrip-button')).click();
    //   element(by.css('input[formControlName=origin]')).sendKeys('Gentofte');
    //   element(by.css('input[formControlName=destination]')).sendKeys('Copenhagen');
    //   element(by.css('input[formControlName=availableSeats]')).sendKeys('4');
    //   element(by.css('input[formControlName=departureTime]')).sendKeys('22-10-2019' + protractor.Key.TAB + '10-05');
    //   // browser.sleep(3000);
    //   element(by.id('registerTrip')).click();
      
      // browser.sleep(3000);
      // element.all(by.css('.example-card')).then((el2) => {
      //   const after = el2.length; // eg after = 4

      //   expect(before + 1).toEqual(after);
      // });
    //});

      // expects to be after this test...


/*
  it('should delete a lift/trip', () => {
    element.all(by.css('.example-card')).then((elements) => {
      const trips = elements.length;
      element.all(by.css('.delete-button')).get(1).click();
      element.all(by.css('.example-card')).then((elementsAfter) => {
        expect(trips).toEqual(elementsAfter.length + 1);
      });
    });
  });

*/

