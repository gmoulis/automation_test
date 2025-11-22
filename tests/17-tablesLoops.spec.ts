import {test, expect} from '@playwright/test'

test.beforeEach(async({page}) => {
  await page.goto('http://localhost:4200')
})

test('web tables', async({page}) => {
  await page.getByText('Tables & Data').click()
  await page.getByText('Smart Table').click()

  //test filter of the table
  const ages = ["20","30","40","200"]

  for(let age of ages){
    await page.locator('input-filter').getByPlaceholder('Age').clear()
    await page.locator('input-filter').getByPlaceholder('Age').fill(age)
    await page.waitForTimeout(500)
    const ageRows =  page.locator('tbody tr')

    for(let row of await ageRows.all()){
      const cellValue = await row.locator('td').last().textContent()

      if(age == "200"){
        expect(await page.getByRole('table').textContent()).toContain('No data found')
      } else {
        expect(cellValue).toEqual(age)
      }

    }
  }
})
