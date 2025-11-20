import{test, expect} from '@playwright/test'

test.beforeEach(async({page}) => {
  await page.goto('http://localhost:4200/')
  await page.getByText('Forms').click()
  await page.getByText('Form Layouts').click()
})

test('assertions', async ({page})  => {
  const basicFormButton = page.locator('nb-card').filter({hasText: "Basic form"}).locator('button')
  //general assertions. action immediate
  const value = 5
  //plusieurs possibilités toBe. toEqual est une assomption générique
  expect (value).toEqual(5)

  const text = await basicFormButton.textContent()
  expect(text).toEqual("Submit")

  //locator assertion. délai 5 sec
  await expect(basicFormButton).toHaveText('Submit')

  //soft assertion (pas une bonne pratique)
  await expect.soft(basicFormButton).toHaveText('Submit')
  await basicFormButton.click()

})
