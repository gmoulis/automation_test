import {test, expect} from '@playwright/test'

test.beforeEach(async({page}) => {
  await page.goto('http://localhost:4200')
})

test('lists and dropdowns', async({page}) => {
  const dropDownMenu = page.locator('ngx-header nb-select')
  await dropDownMenu.click()

  page.getByRole('list') //when the list has a UL tag. dans inspect <ul
  page.getByRole('listitem') //when the list has LI tag

  //const optionList = page.getByRole('list'). locator('nb-option')
  const optionList = page.locator('nb-option-list nb-option')
  await expect(optionList).toHaveText(["Light","Dark", "Cosmic", "Corporate"])
  await optionList.filter({hasText: "Cosmic"}).click()

})
