import{test, expect} from '@playwright/test'

test.beforeEach(async({page}) => {
  await page.goto('http://localhost:4200/')
  await page.getByText('Forms').click()
  await page.getByText('Form Layouts').click()
})

test('extracting values',async ({page}) => {
  //single test value
  const basicForm = page.locator('nb-card').filter({hasText: "Basic form"})
  const buttonTest = await basicForm.locator('button').textContent()
  expect(buttonTest).toEqual('Submit')

  //all test values
  const allRadioButtonsLabels = await page.locator('nb-radio').allTextContents()
  expect(allRadioButtonsLabels).toContain("Option 1")

  //input value
  const emailField = basicForm.getByRole('textbox', {name: "Email"})
  await emailField.fill('test@test.com')
  const emailValue = await emailField.inputValue()
  expect (emailValue).toEqual('test@test.com')

  //attributes
  const placeholderValue = await emailField.getAttribute('placeholder')
  expect(placeholderValue).toEqual('Email')
})
