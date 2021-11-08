import { Then, When } from '@wdio/cucumber-framework';

When(/^I hover over a post$/, async () => {
    await $('[data-testId="post1"]').moveTo();
});

Then(/^the post should turn red$/, async () => {
    expect($('[data-testId="post1"]')).toHaveAttrContaining('style', 'meow');
});
