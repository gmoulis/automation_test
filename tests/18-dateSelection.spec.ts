import {test, expect} from '@playwright/test'

test.beforeEach(async({page}) => {
  await page.goto('http://localhost:4200')
})

test('datepicker', async({page}) => {
  await page.getByText('Forms').click()
  await page.getByText('Datepicker').click()

  const calendarInputField = page.getByPlaceholder('Form Picker')
  await calendarInputField.click()

  let date = new Date()
  //mozilla documentation js pour le format des get/set
  date.setDate(date.getDate() + 14)
  const expectedDate = date.getDate().toString()
  const expectedMonthShot = date.toLocaleDateString('En-US',{month: 'short'})
  const expectedMonthLong = date.toLocaleDateString('En-US',{month: 'long'})
  const expectedYear= date.getFullYear()
  const dateToAssert = `${expectedMonthShot} ${expectedDate}, ${expectedYear}`

  let calendarMonthandYear = await page.locator('nb-calendar-view-mode').textContent()
  const expectedMonthandYear = `${expectedMonthLong} ${expectedYear}`
  //compare
  while (!calendarMonthandYear.includes(expectedMonthandYear)) {
    await page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click()
    calendarMonthandYear = await page.locator('nb-calendar-view-mode').textContent()
  }

  await page.locator('[class="day-cell ng-star-inserted"]').getByText(expectedDate, {exact:true}).click()
  await expect(calendarInputField).toHaveValue(dateToAssert)
})
