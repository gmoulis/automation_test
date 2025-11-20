import{test, expect} from '@playwright/test'

test.beforeEach(async({page}) => {
  await page.goto('https://www.uitestingplayground.com/ajax')
  await page.getByText('Button Triggering AJAX Request').click()
})

test('auto-waiting', async ({page}) => {
  const successButton = await page.locator('.bg-success')

  //await successButton.click() failed

  //const text = await successButton.textContent()

  /*await successButton.waitFor({state: "attached"})
  const text = await successButton.allTextContents()
  expect(text).toContain('Data loaded with AJAX get request.')*/

  await expect (successButton).toHaveText('Data loaded with AJAX get request.', {timeout: 20000})
})

test('alternative waits', async ({page}) => {
  const successButton = await page.locator('.bg-success')

  //_____ wait for element
  //await page.waitForSelector('.bg-success')

  //_____ wait for particular response.API. network tab
  //await page.waitForResponse('https://www.uitestingplayground.com/ajaxdata')

  //_____ wait for network calls to be completed ('NOT RECOMMENDED')
  await page.waitForLoadState('networkidle')

  const text = await successButton.allTextContents()
  expect(text).toContain('Data loaded with AJAX get request.')
})

//on peut le changer dans playwright.config.ts en ajoutant un timeout
