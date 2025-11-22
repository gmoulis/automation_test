import {test, expect} from '@playwright/test'

test.beforeEach(async({page}) => {
  await page.goto('http://localhost:4200')
})

test('web tables', async({page}) => {
  await page.getByText('Tables & Data').click()
  await page.getByText('Smart Table').click()

  //I get the row by any test in this row
  const targetRow = page.getByRole('row', { name: "twitter@outlook.com"})
  await targetRow.locator('.nb-edit').click()
  await page.locator('input-editor').getByPlaceholder('Age').clear()
  await page.locator('input-editor').getByPlaceholder('Age').fill('35')
  await page.locator('.nb-checkmark').click()


  //Parfois nous pouvons avoir plusieurs valeurs similaires dans le tableau
  await page.locator('.ng2-smart-page-item').getByText('2').click()
  const targetRowById = page.getByRole('row', {name:"11"}).filter({has: page.locator('td').nth(1).getByText('11')})
  await targetRowById.locator('.nb-edit').click()
  await page.locator('input-editor').getByPlaceholder('E-mail').clear()
  await page.locator('input-editor').getByPlaceholder('E-mail').fill('test@test.com')
  await page.locator('.nb-checkmark').click()
  await expect(targetRowById.locator('td').nth(5)).toHaveText('test@test.com')

})
