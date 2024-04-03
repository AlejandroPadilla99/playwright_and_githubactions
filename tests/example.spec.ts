import { test, expect } from '@playwright/test';


test('simple test', async ({ page }) => {
  await page.goto('https://demoqa.com/login');

  let usernameValue: string = "DogDeveloper1";
  let passwordValue: string = "_Dog@18234"; 

  await page.locator('xpath=//*[@id="userName"]').type(usernameValue);
  await page.locator('xpath=//*[@id="password"]').type(passwordValue);
  await page.locator('xpath=//*[@id="login"]').click();
 
  let value: string | null = await page.locator('xpath=//*[@id="userName-value"]').innerText();

  expect(value).toEqual(usernameValue)
});
