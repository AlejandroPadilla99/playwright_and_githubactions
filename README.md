# Playwright and Github Actions
## A short tutorial 


### General Description
This is a tutorial to integrate github actions and playwright, in this occassion we will use this [webpage](https://demoqa.com/login) to test a simple test.

### Firsts steps 
1- Create a Playwright proyect
```bash
npm init playwright
```
Note: Select the option to add a GitHub Actions as true 
```bash
✔ Add a GitHub Actions workflow? (y/N) · true
```
2- Add your tests
For this tutorial we will use the following test but you can add any you need
```typescript
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
```
