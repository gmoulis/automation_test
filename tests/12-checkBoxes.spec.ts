import {test, expect} from '@playwright/test'

test.beforeEach(async({page}) => {
  await page.goto('http://localhost:4200')
})

test('checkBoxes', async({page}) => {
  await page.getByText('Modal & Overlays').click()
  await page.getByText('Toastr').click()

  //await page.getByRole('checkbox', {name:"Hide on click"}).click({force: true}) //décoche la checkbox. il fait une action. execute le clic
  //await page.getByRole('checkbox', {name:"Hide on click"}).check({force: true}) //vérifie le statut
  await page.getByRole('checkbox', {name:"Hide on click"}).uncheck({force: true}) //décheck
  await page.getByRole('checkbox', {name:"Prevent arising of duplicate toast"}).check({force: true})

  //Loop
  const allBoxes = page.getByRole('checkbox')
  for (const box of await allBoxes.all()) {
      await box.check({force: true})
      expect(await box.isChecked()).toBeTruthy()
  }

  for (const box of await allBoxes.all()) {
    await box.uncheck({force: true})
    expect(await box.isChecked()).toBeFalsy()
  }


})
