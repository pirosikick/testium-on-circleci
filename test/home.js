'use strict';

import injectBrowser from 'testium/mocha';

describe('/home', function () {
  before(injectBrowser());

  it('should display "Hello World"', function () {
    this.browser.navigateTo('/');
    this.browser.assert.httpStatus(200);
    this.browser.assert.elementHasText('h1', 'Hello World');
  });
})
