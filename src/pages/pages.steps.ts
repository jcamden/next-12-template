import { Given } from '@wdio/cucumber-framework';

Given(/^I am on the (.+) page$/, async (page) => {
    await browser.url(`http://localhost:3000/${page}`);
});
